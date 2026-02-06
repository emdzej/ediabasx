# SCR04.prg

## General

|  |  |
| --- | --- |
| File | SCR04.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 109 |
| Origin | BMW EA-722 Philipp_Wolfgramm |
| Revision | 2.007 |
| Author | BMW EA-722 Wolfgramm |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Selective Catalytic Reduction Gen4 |  |  |
| ORIGIN | string | BMW EA-722 Philipp_Wolfgramm |  |  |
| REVISION | string | 2.007 |  |  |
| AUTHOR | string | BMW EA-722 Wolfgramm |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.992 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC = '1', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

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
| 0x0000C3 | Panasonic |
| 0x0000C4 | Alpitronic GmbH |
| 0x0000C5 | Telemotive AG |
| 0x0000C6 | Garmin |
| 0x0000C7 | RSG Elotech Elektronische Baugruppen GmbH |
| 0x0000C8 | KEBODA TECHNOLOGY CORP |
| 0x0000C9 | Aptiv |
| 0x0000CA | SEG Automotive Germany GmbH |
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
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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
| 0x44 | ECURSU | ECURsuSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0x61 | ECUSUPSPEC | ECUSupplierSpecificSession |
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

### ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR

| WERT | TEXT |
| --- | --- |
| 0x00 | Anforderung MIL aus |
| 0x01 | Anforderung MIL ein |
| 0xFF | Wert ungültig |

### ARG_0XAE68_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BITMASKE_PARAMETER | + | - | 0-n | high | unsigned int | - | AR_TESTAUSWAHL | - | - | - | - | - | Übergabeparameter für Inbetriebnahme Routine. |

### ARG_0XAE6B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UMPUMPMENGE | + | - | l | high | unsigned int | - | - | 1024.0 | 1.0 | 0.0 | 0.0 | 63.999 | tbd |

### ARG_0XAE7F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOSIERMASSE | + | - | mg | high | unsigned int | - | - | 1.0 | 8.0 | 0.0 | 0.0 | 524280.0 | Dosiermasse in mg |
| MASSENSTROM | + | - | mg/s | high | unsigned int | - | - | 1.0 | 0.0625 | 0.0 | 0.0 | 1111.0 | Massenstrom in mg/s |

### ARG_0XAE80_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOSIERMASSE | + | - | mg | high | unsigned int | - | - | 1.0 | 8.0 | 0.0 | 0.0 | 524280.0 | Dosiermasse in mg |
| MASSENSTROM | + | - | mg/s | high | unsigned int | - | - | 1.0 | 0.0625 | 0.0 | 0.0 | 1111.0 | Massenstrom in mg/s |

### ARG_0XD280_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_FOERDERPUMPE | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 33.0 | Test der Förderpumpe |

### ARG_0XD281_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_RUECKFOERDERPUMPE | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 33.0 | tbd |

### ARG_0XD282_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_AKTIVTANKHEIZUNG | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 100.0 | Test zum Steuern der Aktivtankheizung |

### ARG_0XD283_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERLEITUNGSHEIZUNG | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 100.0 | Test zum Steuern der Dosierleitungsheizung |

### ARG_0XD285_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TRANSFERPUMPE | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 40.0 | 60.0 | Test zum Steuern der Transferpumpe. |

### ARG_0XD287_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_UMPUMPMENGE | l | high | unsigned long | - | - | 1000.0 | 1.0 | 0.0 | - | - | Langzeiterfassung der Umpumpmenge |

### ARG_0XD290_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_ERSTBEFUELLUNGSSTATUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Setzen des Erstbefüllungsstatus. Neues TFM - Setzen auf 0. Neues SG - Setzen auf1. |

### ARG_0XE2B6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERVENTIL_1 | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 80.0 | PWM_RAG_INJ[0] - Test zum Steuern des motornahen Dosierventils |

### ARG_0XE2B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERVENTIL_2 | % | high | unsigned int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 80.0 | Test zum Steuern des Unterboden-Dosierventils |

### ARG_0XE2B8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_DOSIERMENGE_1 | g | high | signed long | - | - | 1000.0 | 1.0 | 0.0 | - | - | Langzeit-Dosiermenge des motornahen Dosierventils |

### ARG_0XE2B9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_DOSIERMENGE_2 | g | high | signed long | - | - | 1000.0 | 1.0 | 0.0 | - | - | Langzeit-Dosiermenge des Unterboden-Dosierventils |

### ARG_0XE2BA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_FOERDERMENGE | g | high | signed long | - | - | 1000.0 | 1.0 | 0.0 | - | - | Langzeit-Fördermenge der Förderpumpe |

### AR_TESTAUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x0001 | Test Druckaufbau |
| 0x0002 | Test streckenbasierte Diagnosen |
| 0x0004 | Test Leckage |
| 0x0010 | Test Teilrücksaugen |
| 0x0020 | Test Komplettrücksaugen |
| 0x0040 | Test Dosierventil_1 |
| 0x0080 | Test Transferpumpe |
| 0x0100 | Test Aktivtankheizung |
| 0x0200 | Test Dosierleitungsheizung |
| 0x0400 | Test Dosiermenge_1 |
| 0x0800 | Test Spulenheizen_1 |
| 0x1000 | Test Dosierventil_2 |
| 0x2000 | Test Dosiermenge_2 |
| 0x4000 | Test Spulenheizen_2 |
| 0x0011 | Druckaufbau, Teilrücksaugen |
| 0x0015 | Druckaufbau, Leckage, Teilrücksaugen |
| 0x0315 | Heizer, Druckaufbau, Leckage, Teilrücksaugen |
| 0x0345 | Dosierventil_1, Heizer, Druckaufbau, Leckage |
| 0x0347 | Dosierventil_1, Heizer, Druckaufbau, Leckage, streckenbasierte Diagnosen |
| 0x0355 | Dosierventil_1, Heizer, Druckaufbau, Leckage, Teilrücksaugen |
| 0x1345 | Dosierventile_1_2, Heizer, Druckaufbau, Leckage |
| 0x1347 | Dosierventile_1_2, Heizer, Druckaufbau, Leckage, streckenbasierte Diagnosen |
| 0x1355 | Dosierventile_1_2, Heizer, Druckaufbau, Leckage, Teilrücksaugen |
| 0x2400 | Test Dosiermenge_1_2 |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_ACT_INIT_TESTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACT_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Wenn 1: Teilschritt Druckaufbau läuft gerade. |
| STAT_ACT_LECKAGE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Wenn 1: Teilschritt Leckagetest läuft gerade. |
| STAT_ACT_TEILRUECKSAUGEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Wenn 1: Teilschritt Teilrücksaugen läuft gerade. |
| STAT_ACT_KOMPLETTRUECKSAUGEN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Wenn 1: Teilschritt Komplettrücksaugen läuft gerade. |
| STAT_ACT_DOSIERVENTIL_1 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Wenn 1: Teilschritt Dosierventiltest 1 läuft gerade. |
| STAT_ACT_TRANSFERPUMPE | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Wenn 1: Teilschritt Test der Transferpumpe läuft gerade. |
| STAT_ACT_AKTIVTANKHEIZUNG | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Wenn 1: Teilschritt Test der Aktivtankheizung läuft gerade. |
| STAT_ACT_DOSIERLEITUNGSHEIZUNG | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Wenn 1: Teilschritt Test der Dosierleitungsheizung läuft gerade. |
| STAT_ACT_DOSIERMENGE_1 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wenn 1: Teilschritt Dosiermengentest 1 läuft gerade. |
| STAT_ACT_SPULENHEIZEN_1 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Wenn 1: Teilschritt Spulenheizen 1 läuft gerade. |
| STAT_ACT_DOSIERVENTIL_2 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Wenn 1: Teilschritt Dosierventiltest 2 läuft gerade. |
| STAT_ACT_DOSIERMENGE_2 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Wenn 1: Teilschritt Dosiermengentest 2 läuft gerade. |
| STAT_ACT_SPULENHEIZEN_2 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Wenn 1: Teilschritt Spulenheizen 2 läuft gerade. |

### BF_FREIGABE_ROUTINE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BATTERIESPANNUNG_OK | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Wenn 1: Batteriespannung ok. |
| STAT_MOTORDREHZAHL_OK | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Wenn 1: Drehzahl Verbrennungsmotor ok. |
| STAT_FAHRZEUGGESCHWINDIGKEIT_OK | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Wenn 1: Fahrzeuggeschwindigkeit ok. |
| STAT_AUSSENTEMPERATUR_OK | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Wenn 1: Außentemperatur ok. |
| STAT_AKTIVTANKTEMPERATUR_OK | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Wenn 1: AdBlue-Temperatur im Aktivtank ok. |
| STAT_ABGASTEMPERATUR_OK | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Wenn 1: Abgastemperatur ok. |
| STAT_QUERVERRIEGELUNG_OK | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Wenn 1: Querverriegelungen in der Software ok. |

### BF_SCR_INIT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Wenn 1: Druckaufbau erfolgreich beendet. |
| STAT_LECKAGE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Wenn 1: Leckagetest erfolgreich beendet. |
| STAT_TEILRUECKSAUGEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Wenn 1: Teilrücksaugen erfolgreich beendet. |
| STAT_KOMPLETTRUECKSAUGEN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Wenn 1: Komplettrücksaugen erfolgreich beendet. |
| STAT_DOSIERVENTIL_1 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Wenn 1: Dosierventiltest 1 erfolgreich beendet. |
| STAT_TRANSFERPUMPE | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Wenn 1: Test der Transferpumpe erfolgreich beendet. |
| STAT_AKTIVTANKHEIZUNG | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Wenn 1: Test der Aktivtankheizung erfolgreich beendet. |
| STAT_DOSIERLEITUNGSHEIZUNG | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Wenn 1: Test der Dosierleitungsheizung erfolgreich beendet. |
| STAT_DOSIERMENGE_1 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wenn 1: Dosiermengentest 1 erfolgreich beendet. |
| STAT_SPULENHEIZEN_1 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Wenn 1: Spulenheizen 1 erfolgreich beendet. |
| STAT_DOSIERVENTIL_2 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Wenn 1: Dosierventiltest 2 erfolgreich beendet. |
| STAT_DOSIERMENGE_2 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Wenn 1: Dosiermengentest 2 erfolgreich beendet. |
| STAT_SPULENHEIZEN_2 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Wenn 1: Spulenheizen 2 erfolgreich beendet. |

### BF_STATUS_OBD_ZYKLUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WUP_ZYKLUS | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0x00: Warm-Up-Zyklus nicht aktiv 0x01: Warm-Up-Zyklus aktiv |
| STAT_DRIVING_ZYKLUS | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0x00: Driving-Zyklus nicht aktiv 0x01: Driving-Zyklus aktiv |
| STAT_RBM_ZYKLUS | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0x00: RBM-Zyklus nicht aktiv 0x01: RBM-Zyklus aktiv |
| STAT_PFC_ZYKLUS | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0x00: PFC-Zyklus nicht aktiv 0x01: PFC-Zyklus aktiv |
| STAT_RBM_ERFUELLBAR | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0x00: RBM-Zyklus erfüllbar 0x01: RBM-Zyklus nicht erfüllbar |

### BF_STATUS_SPERRE_SCR_SYSTEM

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ILK_SCRS_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0x00: FID 0 aktiv 0x01: inaktiv |
| STAT_ILK_SCRS_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0x00: FID 1 aktiv 0x01: inaktiv |
| STAT_ILK_SCRS_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0x00: FID 2 aktiv 0x01: inaktiv |
| STAT_ILK_SCRS_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0x00: FID 3 aktiv 0x01: inaktiv |
| STAT_ILK_SCRS_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0x00: FID 4 aktiv 0x01: inaktiv |

### BF_STATUS_SYSTEM_FEHLER_OBD_SCR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYS_ERR_OBD_SCR_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0x00: kein Fehler 0x01: Fehler Bit 0 |
| STAT_SYS_ERR_OBD_SCR_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0x00: kein Fehler 0x01: Fehler Bit 1 |
| STAT_SYS_ERR_OBD_SCR_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0x00: kein Fehler 0x01: Fehler Bit 2 |
| STAT_SYS_ERR_OBD_SCR_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0x00: kein Fehler 0x01: Fehler Bit 3 |
| STAT_SYS_ERR_OBD_SCR_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0x00: kein Fehler 0x01: Fehler Bit 4 |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020B00 | Energiesparmode aktiv | 0 | - |
| 0x02FF0B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x805270 | Aktivtank, Förderpumpe, Hall-Sensor, Signalfehler. | 0 | - |
| 0x805271 | Aktivtank, Förderpumpe, Kurzschluss nach Masse. | 0 | - |
| 0x805272 | Aktivtank, Förderpumpe, Kurzschluss nach Plus. | 0 | - |
| 0x805273 | Aktivtank, Förderpumpe, Leitungsunterbrechung. | 0 | - |
| 0x805274 | Aktivtank, Förderpumpe, Strom zu hoch. | 0 | - |
| 0x805275 | Aktivtank, Förderpumpe klemmt. | 0 | - |
| 0x805276 | Aktivtank, Datencheckfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805277 | Aktivtank, Datencheckfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x805278 | Aktivtank, Initialisierungsfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805279 | Aktivtank, Initialisierungsfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527A | Aktivtank, Kommunikationsfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x80527B | Aktivtank, Kommunikationsfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527C | Aktivtank, Signalfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x80527D | Aktivtank, Signalfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527E | Aktivtank, Datenfehler Multiplexing SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805281 | Aktivtankheizung, Leistung zu gering. | 0 | - |
| 0x805282 | Aktivtankheizung, Leistung zu hoch. | 0 | - |
| 0x805283 | Aktivtankheizung, Leitungsunterbrechung. | 0 | - |
| 0x805284 | Aktivtankheizung, Low Side, Kurschluss nach Masse. | 0 | - |
| 0x805285 | Aktivtankheizung, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x805286 | Aktivtankheizung, Signal Range Check high. | 0 | - |
| 0x805287 | Aktivtankheizung, Fehler bei aktiver Heizanforderung. | 0 | - |
| 0x805288 | Aktivtank leer. | 0 | - |
| 0x805289 | Dosierleitungsheizung, Leistung zu gering. | 0 | - |
| 0x80528A | Dosierleitungsheizung, Leistung zu hoch. | 0 | - |
| 0x80528B | Dosierleitungsheizung, Leitungsunterbrechung. | 0 | - |
| 0x80528C | Dosierleitungsheizung, Low Side, Kurschluss nach Masse. | 0 | - |
| 0x80528D | Dosierleitungsheizung, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x80528E | Dosierleitungsheizung, Signal Range Check high. | 0 | - |
| 0x80528F | Dosierleitungsheizung, Fehler bei aktiver Heizanforderung. | 0 | - |
| 0x805292 | Dosierventil, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x805293 | Dosierventil, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x805294 | Dosierventil #1, Leitungsunterbrechung oder Low Side Mosfet offen. | 0 | - |
| 0x805295 | Dosierventil #1, Low Side, Kurzschluss nach Masse. | 0 | - |
| 0x805296 | Dosierventil #1, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x805297 | Dosierventil #1, Spulenstrom zu hoch. | 0 | - |
| 0x805298 | Dosierventil #1, Spulenstrom zu niedrig. | 0 | - |
| 0x805299 | Dosierventil #1, unzureichende Kühlung. | 0 | - |
| 0x80529A | Dosierventil #1 blockiert. | 0 | - |
| 0x80529B | Heizung, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x80529C | Heizung, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052A0 | Passivtank, Levelsensor, Echofehler. | 0 | - |
| 0x8052A1 | Passivtank, Levelsensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052A2 | Passivtank, Levelsensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052A3 | Passivtank, Levelsensor, Sensorfehler. | 0 | - |
| 0x8052A4 | Passivtank, Sensorsignal PWM (Level, Temperatur), Kurzschluss nach Plus oder Leitungsunterbrechung. | 0 | - |
| 0x8052A5 | Passivtank, Sensorsignal PWM (Level, Temperatur), Kurzschluss nach Masse. | 0 | - |
| 0x8052A6 | Aktivtank, Level-Quality-Sensor, Fehler im Direkt-Piezo. | 0 | - |
| 0x8052A7 | Aktivtank, Level-Quality-Sensor, Fehler im Kombi-Piezo. | 0 | - |
| 0x8052A8 | Aktivtank, Level-Quality-Sensor, Fehler im Temperatursensor. | 0 | - |
| 0x8052A9 | Aktivtank, Level-Quality-Sensor, Fehler im ASIC. | 0 | - |
| 0x8052AA | Aktivtank, Level-Quality-Sensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AB | Aktivtank, Level-Quality-Sensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052AC | Aktivtank, Drucksensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AD | Aktivtank, Drucksensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052AE | Dosierventil #1, Spulentemperatur, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AF | Dosierventil #1, Spulentemperatur, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052B0 | Systemdruck, Druckabbaufehler. | 0 | - |
| 0x8052B1 | Systemdruck, Druckaufbaufehler. | 0 | - |
| 0x8052B2 | Dosierbereitschaft zu spät (TTCL) oder unplausibel entfallen. | 0 | - |
| 0x8052B3 | Systemdruck, Druck vor Motorstart zu niedrig. | 0 | - |
| 0x8052B4 | Systemdruck, Druck vor Motorstart zu hoch. | 0 | - |
| 0x8052B7 | Systemdruck, Leckageerkennung, Systemdruck nach Dosierpause zu niedrig. | 0 | - |
| 0x8052B8 | Systemdruck, Überdruckfehler im Dosierbetrieb. | 0 | - |
| 0x8052B9 | Systemdruck, Unterdruckfehler im Dosierbetrieb. | 0 | - |
| 0x8052BC | Passivtank, Sensorsignal PWM (Level), Signal Range Check, high. | 0 | - |
| 0x8052BD | Passivtank, Sensorsignal PWM (Level), Signal Range Check, low. | 0 | - |
| 0x8052BE | Passivtank, Sensorsignal PWM (Temperatur), Signal Range Check, high. | 0 | - |
| 0x8052BF | Passivtank, Sensorsignal PWM (Temperatur), Signal Range Check, low. | 0 | - |
| 0x8052C0 | Transferpumpe, Fördermenge ungenügend (Füllstand im Aktivtank steigt nicht). | 0 | - |
| 0x8052C1 | Transferpumpe, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x8052C2 | Transferpumpe, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052C3 | Transferpumpe, Leitungsunterbrechung. | 0 | - |
| 0x8052C4 | Transferpumpe, Low Side, Kurzschluss nach Masse. | 0 | - |
| 0x8052C5 | Transferpumpe, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052C9 | Aktivtank, AdBlue-Qualität, Signal ohne Veränderung. | 0 | - |
| 0x8052D0 | Aktivtank, Förderpumpe fördert Luft. | 0 | - |
| 0x8052D1 | Aktivtank, Drucksensor, Messwert Druck unplausibel. | 0 | - |
| 0x8052D3 | Aktivtank, Drucksensor, Messwert Temperatur_2 unplausibel (fast channel). | 0 | - |
| 0x8052D4 | Aktivtank, Drucksensor, Temperatursignal nicht verfügbar. | 0 | - |
| 0x8052D5 | Aktivtank, Level-Quality-Sensor, Temperatursignal nicht verfügbar. | 0 | - |
| 0x8052D7 | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Echofehler | 0 | - |
| 0x8052D9 | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Signal zu hoch. | 0 | - |
| 0x8052DA | Aktivtank, Level-Quality-Sensor, Qualitätssignal nicht verfügbar. | 0 | - |
| 0x8052DC | Aktivtank, Level-Quality-Sensor, keine Messung verfügbar. | 0 | - |
| 0x8052DD | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), keine Änderung bei dynamischer Fahrt. | 0 | - |
| 0x8052DE | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Echo 1 und 2 zueinander unplausibel. | 0 | - |
| 0x8052DF | Anforderung Warnmeldung. | 0 | - |
| 0x8052E0 | Dosiermengenabweichung, dosierte Menge #1 zu gering, Summenfehler. | 0 | - |
| 0x8052E1 | Dosiermengenabweichung, dosierte Menge #1 zu hoch, Summenfehler. | 0 | - |
| 0x8052E2 | Dosiermengenabweichung, dosierte Menge #2 zu gering, Summenfehler. | 0 | - |
| 0x8052E3 | Dosiermengenabweichung, dosierte Menge #2 zu hoch, Summenfehler. | 0 | - |
| 0x8052E4 | Dosiermengenabweichung, dosierte Gesamtmenge zu gering. | 0 | - |
| 0x8052E5 | Dosiermengenabweichung, dosierte Gesamtmenge zu hoch. | 0 | - |
| 0x8052E6 | Dosiermengenabweichung, dosierte Menge #1, Totalausfall. | 0 | - |
| 0x8052E7 | Dosiermengenabweichung, dosierte Menge #2, Totalausfall. | 0 | - |
| 0x8052F0 | Dosierventil #2, Leitungsunterbrechung oder Low Side Mosfet offen. | 0 | - |
| 0x8052F1 | Dosierventil #2, Low Side, Kurzschluss nach Masse. | 0 | - |
| 0x8052F2 | Dosierventil #2, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052F3 | Dosierventil #2, Spulenstrom zu hoch. | 0 | - |
| 0x8052F4 | Dosierventil #2, Spulenstrom zu niedrig. | 0 | - |
| 0x8052F5 | Dosierventil #2, unzureichende Kühlung. | 0 | - |
| 0x8052F6 | Dosierventil #2 blockiert. | 0 | - |
| 0x8052F7 | Dosierventil #1 und #2, Leitungsunterbrechung. | 0 | - |
| 0x8052F8 | Dosierventil #2, Spulentemperatur, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052F9 | Dosierventil #2, Spulentemperatur, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052FA | Dosierventil #1 und #2, Totalausfall. | 0 | - |
| 0x805350 | SCR-Steuergerät, 5V-Ausgang, Überspannung. | 0 | - |
| 0x805351 | SCR-Steuergerät, 5V-Ausgang, Unterspannung. | 0 | - |
| 0x805352 | SCR-Steuergerät, 12V-Ausgang, Überspannung. | 0 | - |
| 0x805354 | SCR-Steuergerät, 12V-Ausgang, Unterspannung. | 0 | - |
| 0x805355 | SCR-Steuergerät, Klemme 30 (Heizerversorgung), Überspannung. | 0 | - |
| 0x805356 | SCR-Steuergerät, Klemme 30 (Heizerversorgung), Unterspannung. | 0 | - |
| 0x805357 | SCR-Steuergerät, Klemme 30B (Logik, Sensorik, Dosierventil, Pumpenversorgung), Überspannung. | 0 | - |
| 0x805358 | SCR-Steuergerät, Klemme 30B (Logik, Sensorik, Dosierventil, Pumpenversorgung), Unterspannung. | 0 | - |
| 0x80535A | SCR-Steuergerät, Transferpumpe High Side, Mosfet offen. | 0 | - |
| 0x80535B | SCR-Steuergerät, Transferpumpe Low Side, Mosfet offen. | 0 | - |
| 0x80535C | SCR-Steuergerät, Endstufe Förderpumpe, SPI-Kommunikation gestört. | 0 | - |
| 0x80535E | SCR-Steuergerät, 12V-Ausgang, Kurzschluss nach Plus. | 0 | - |
| 0x80535F | SCR-Steuergerät, 12V-Ausgang, Kurzschluss nach Masse. | 0 | - |
| 0x805360 | SCR-Steuergerät, Dosierventil High Side, Mosfet offen. | 0 | - |
| 0x805361 | SCR-Steuergerät, Dosierventil Low Side #1, Mosfet Kurzschluss. | 0 | - |
| 0x805362 | SCR-Steuergerät, Dosierventil Low Side #2, Mosfet Kurzschluss. | 0 | - |
| 0x805364 | SCR-Steuergerät, Heizung High Side, Mosfet offen. | 0 | - |
| 0x805365 | SCR-Steuergerät, Aktivtankheizung Low Side, Mosfet offen. | 0 | - |
| 0x805366 | SCR-Steuergerät, Aktivtankheizung Low Side, Mosfet Kurzschluss. | 0 | - |
| 0x805367 | SCR-Steuergerät, Dosierleitungsheizung Low Side, Mosfet offen. | 0 | - |
| 0x805368 | SCR-Steuergerät, Dosierleitungsheizung Low Side, Mosfet Kurzschluss. | 0 | - |
| 0x805369 | SCR-Steuergerät, interner Speicherfehler. | 0 | - |
| 0x805371 | SCR-Steuergerät, Montagemodus aktiv. | 0 | - |
| 0x805372 | SCR-Steuergerät, Nachlauf gestört. | 0 | - |
| 0x805373 | SCR-Steuergerät, Nachlauf nicht abgeschlossen. | 0 | - |
| 0x805375 | Fahrzeugstatus nicht plausibel zu Klemmenstatus bzw. PWF-Zustand. | 0 | - |
| 0x80537A | Motorabstellzeit, Summenfehler für Plausibilisierungen. | 0 | - |
| 0x80537B | Motorabstellzeit, unplausibel bei Motorstart nach abgeschlossenem SCR-Nachlauf. | 0 | - |
| 0x80537E | Motorabstellzeit, unplausibel zu Motorabstellzeit der DDE. | 0 | - |
| 0xCBC469 | LP-CAN Physikalischer Busfehler | 0 | - |
| 0xCBC472 | LP-CAN Control Module Bus OFF | 0 | - |
| 0xCBCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCBD400 | Botschaft fehlt: Längsbeschleunigung Schwerpunkt, 0x199, Sender DSC_Modul. | 1 | - |
| 0xCBD401 | Botschaft fehlt: Querbeschleunigung Schwerpunkt, 0x19A, Sender DSC_Modul. | 1 | - |
| 0xCBD402 | Botschaft fehlt: Status Verbrennungsmotor, 0x32, Sender DME1. | 1 | - |
| 0xCBD403 | Botschaft fehlt: Drehmoment Kurbelwelle 1, 0xA5, Sender Sender DME1. | 1 | - |
| 0xCBD404 | Botschaft fehlt: Geschwindigkeit Fahrzeug, 0x1A1, Sender DSC_Modul. | 1 | - |
| 0xCBD405 | Botschaft fehlt: Kilometerstand/Reichweite, 0x330, Sender Kombi/IKE. | 1 | - |
| 0xCBD406 | Botschaft fehlt: Daten Antriebsstrang 2, 0x3F9, Sender DME1. | 1 | - |
| 0xCBD407 | Botschaft fehlt: Daten Antriebsstrang 1, 0x3FB, Sender DME1. | 1 | - |
| 0xCBD408 | Botschaft fehlt: Bereitstellung Daten SCR, 0x188, Sender DME1. | 1 | - |
| 0xCBD409 | Botschaft fehlt: Anforderung Bereitstellung SCR-Additiv, 0x84, Sender DME1. | 1 | - |
| 0xCBD40A | Botschaft fehlt: Außentemperatur, 0x2CA, Sender Kombi/IKE. | 1 | - |
| 0xCBD40B | Botschaft fehlt: Relativzeit BN2020, 0x328, Sender Kombi/IKE. | 1 | - |
| 0xCBD40C | Botschaft fehlt: Temperatur Daten Motor, 0x2CB, Sender DME1. | 1 | - |
| 0xCBD40D | Botschaft fehlt: Anforderung Bereitstellung SCR-Additiv 2, 0x2D5, Sender DME1. | 1 | - |
| 0xCBD40E | Botschaft fehlt: Diagnose OBD Motor, 0x397, Sender DME1. | 1 | - |
| 0xCBD40F | Botschaft fehlt: Status Klima Standfunktion, 0x2F0, Sender IHKA. | 1 | - |
| 0xCBD410 | Botschaft fehlt: Fahrzeugzustand, 0x3A0, Sender BDC/BDC_2015. | 1 | - |
| 0xCBD411 | Botschaft fehlt: Zustand Fahrzeug (35up), 0x3C, Sender BDC_2015. | 1 | - |
| 0xCBD412 | Botschaft fehlt: Status Verbrauch Kraftstoff Motor, 0x2C4, Sender DME1. | 1 | - |
| 0xCBD413 | Botschaft fehlt: Status Motor Betrieb, 0x3DE, Sender DME1. | 1 | - |
| 0xCBD420 | Signalfehler: Soll_Bereitstellung_Einspritzmenge_SCR-Additiv (TAR_RESG_IJV_SCRA), Sender DME1. | 1 | - |
| 0xCBD421 | Signalfehler: Soll_Bereitstellung_Einspritzmenge_SCR-Additiv 2 (TAR_RESG_IJV_SCRA_2), Sender DME1. | 1 | - |
| 0xCBD422 | Signalfehler: Status_Abgas_Massenstrom (ST_EXH_MFLOW), Sender DME1. | 1 | - |
| 0xCBD423 | Signalfehler: Status_Initialisierung_Filter_Wert_DME (ST_INIT_FIL_VL_DME), Sender DME1. | 1 | - |
| 0xCBD424 | Signalfehler: Temperatur_Außen (TEMP_EX), Sender Kombi/IKE. | 1 | - |
| 0xCBD425 | Signalfehler: Abgasdruck_Dosierventil_1 (EXPR_DOSVA_1), Sender DME1. | 1 | - |
| 0xCBD426 | Signalfehler: Abgasdruck_Dosierventil_2 (EXPR_DOSVA_2), Sender DME1. | 1 | - |
| 0xCBD427 | Signalfehler: Luftdruck_Motor_Antrieb (AIP_ENG_DRVI), Sender DME1. | 1 | - |
| 0xCBD428 | Signalfehler: Temperatur_Motor_Antrieb (TEMP_ENG_DRV), Sender DME1. | 1 | - |
| 0xCBD429 | Signalfehler: Status_Verbrennungsmotor_Antrieb (ST_CENG_DRV), Sender DME1. | 1 | - |
| 0xCBD42A | Signalfehler: Status_OBD-Zyklus (ST_OBD_CYC), Sender DME1. | 1 | - |
| 0xCBD42B | Signalfehler: OBD_Position_Drosselklappe_Motor (OBD_PO_THVA_ENG), Sender DME1. | 1 | - |
| 0xCBD42C | Signalfehler: OBD_Modellwert_Last_Motor (OBD_CALCVL_LD_ENG), Sender DME1. | 1 | - |
| 0xCBD42D | Signalfehler: Ist_Drehmoment_Kurbelwelle (AVL_TORQ_CRSH), Sender DME1. | 1 | - |
| 0xCBD42E | Signalfehler: Ist_Drehzahl_Motor_Kurbelwelle (AVL_RPM_ENG_CRSH), Sender DME1. | 1 | - |
| 0xCBD42F | Signalfehler: Status_Sperre_Fehlerspeicher_FZM (ST_ILK_ERRM_FZM), Sender BDC/BDC2015. | 1 | - |
| 0xCBD430 | Signalfehler: Geschwindigkeit_Fahrzeug_Schwerpunkt (V_VEH_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD431 | Signalfehler: Wegstrecke_Kilometer (MILE_KM), Sender Kombi/IKE. | 1 | - |
| 0xCBD432 | Signalfehler: Status_Diagnose_Verdampfer_Zyklus (ST_DIAG_EVA_CYC), Sender DME1. | 1 | - |
| 0xCBD433 | Signalfehler: Temperatur_Außen_Plausibilisiert (TEMP_EX_PLAUS), Sender Kombi/IKE. | 1 | - |
| 0xCBD434 | Signalfehler: Längsbeschleunigung_Schwerpunkt (ACLNX_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD435 | Signalfehler: Qualifier_Längsbeschleunigung_Schwerpunkt (QU_ACLNX_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD436 | Signalfehler: Querbeschleunigung_Schwerpunkt (ACLNY_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD437 | Signalfehler: Qualifier_Querbeschleunigung_Schwerpunkt (QU_ACLNY_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD438 | Signalfehler: Zeit_Sekunde_Zähler_Relativ (T_SEC_COU_REL), Sender Kombi/IKE. | 1 | - |
| 0xCBD439 | Signalfehler: Temperatur_SCR-Katalysator (TEMP_SCAT), Sender DME1. | 1 | - |
| 0xCBD43B | Signalfehler: Status_Standheizung (ST_PHTR), Sender IHKA. | 1 | - |
| 0xCBD43C | Signalfehler: Drehmoment_Fahrerwunsch_PID_SCR-System (TORQ_DVCH_PID_SCRS), Sender DME1. | 1 | - |
| 0xCBD43D | Signalfehler: Drehmoment_Aktuelle_PID_SCR-System (TORQ_PRES_PID_SCRS), Sender DME1. | 1 | - |
| 0xCBD43E | Signalfehler: Status_Zustand_Fahrzeug (ST_CON_VEH), Sender BDC_2015. | 1 | - |
| 0xCBD43F | Signalfehler: Einspritzmenge_Kraftstoff_Motor (INJV_FU_ENG), Sender DME1. | 1 | - |
| 0xCBD443 | Signalfehler: Qualifier_Ist_Drehzahl_Motor_Kurbelwelle (QU_AVL_RPM_ENG_CRSH), Sender DME1. | 1 | - |
| 0xCBD444 | Signalfehler: Qualifier_Geschwindigkeit_Fahrzeug_Schwerpunkt (QU_V_VEH_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD446 | Signalfehler: Restlaufleistung_SCR-Additv (RMMI_SCRA), Sender DME1. | 1 | - |
| 0xCBD447 | Signalfehler: Status_FID_SCR-System (ST_FID_SCRS), Sender DME1. | 1 | - |
| 0xCBD448 | Signalfehler: Motor_Aus_Zeit (ENG_OFF_T), Sender DME1. | 1 | - |
| 0xCBD449 | Signalfehler: Status_Motor_Aus_Zeit (ST_ENG_OFF_T), Sender DME1. | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0xD28D | UWB_CAN_RX_MOTOR_AUS_ZEIT | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD28E | UWB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0-n | High | 0xFF | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - |
| 0xD28F | UWB_CAN_RX_STATUS_FID_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2BB | UWB_CAN_RX_TEMPERATUR_AUSSEN | °C | High | signed int | - | 1.0 | 128.0 | 0.0 |
| 0xD2BE | UWB_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | hPa | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 |
| 0xD2BF | UWB_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xD2C1 | UWB_CAN_RX_STATUS_OBD_ZYKLUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2C4 | UWB_CAN_RX_IST_DREHMOMENT_KURBELWELLE | Nm | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0xD2C5 | UWB_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2C6 | UWB_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0-n | High | 0xFF | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - |
| 0xD2C7 | UWB_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2CB | UWB_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 1.0 | 1179.941 | 0.0 |
| 0xD2CC | UWB_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CD | UWB_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 1.0 | 1179.941 | 0.0 |
| 0xD2CE | UWB_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2D0 | UWB_CAN_RX_TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2D6 | UWB_CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2DA | UWB_CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | 0-n | High | 0xFF | QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | - | - | - |
| 0xD2DB | UWB_CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0-n | High | 0xFF | QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | - | - | - |
| 0xD2E0 | UWB_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0-n | High | 0xFF | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - |
| 0xD2E1 | UWB_CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E2 | UWB_CAN_TX_STATUS_SPERRE_SYR_SYSTEM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E4 | UWB_CAN_TX_BEGRENZUNG_EINSPRITZMENGE_SCR_ADDITIV | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2E5 | UWB_CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E7 | UWB_CAN_TX_IST_QUALITAET_SCR_ADDITIV | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD2E8 | UWB_CAN_TX_TEMPERATUR_SCR_ADDITIV | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2E9 | UWB_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | signed long | - | 0.1 | 1.0 | 0.0 |
| 0xD2EE | UWB_CAN_TX_FUELLSTAND_SCR_ADDITIV | % | High | unsigned char | - | 1.0 | 2.55 | 0.0 |
| 0xD2EF | UWB_CAN_TX_NACHFUELLMENGE_SCR_ADDITIV | l | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xD3F9 | UWB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0-n | High | 0xFF | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - |
| 0xD48F | UWB_AKTIVTANKHEIZUNG_PWM | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD490 | UWB_DOSIERLEITUNGSHEIZUNG_PWM | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD493 | UWB_AKTIVTANKHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 |
| 0xD494 | UWB_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 |
| 0xD495 | UWB_AKTIVTANKHEIZUNG_STROM | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD496 | UWB_DOSIERLEITUNGSHEIZUNG_STROM | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD497 | UWB_AKTIVTANKHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD498 | UWB_DOSIERLEITUNGSHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD49B | UWB_FOERDERPUMPE_STROM | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0xD49C | UWB_FOERDERPUMPE_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD49D | UWB_DRUCKREGELUNG_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4A0 | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A1 | UWB_TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A2 | UWB_TEMPERATUR_DRUCKSENSOR_ROHWERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A3 | UWB_FOERDERPUMPE_DREHZAHL_SOLLWERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4A4 | UWB_DRUCK_ROHWERT | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4A7 | UWB_DRUCK_ABWEICHUNG_VON_NOMINAL | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4A9 | UWB_QUALITAET_ROHWERT | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AB | UWB_LEVELSENSOR_AKTIVTANK_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4AE | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B3 | UWB_AMPLITUDE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B4 | UWB_AMPLITUDE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B6 | UWB_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B8 | UWB_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_1 | s | High | signed long | - | 0.01 | 1.0 | 0.0 |
| 0xD4D0 | UWB_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4D1 | UWB_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4D4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4D6 | UWB_NACHTANKERKENNUNG | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4D7 | UWB_AUFTAUZEIT_AKTUELL | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D9 | UWB_AUFTAUZEIT_EPA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4DA | UWB_AUFTAUEN_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DB | UWB_AUFTAUEN_ABGESCHLOSSEN | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DC | UBW_TEMPERATUR_AKTIVTANK_GESPEICHERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4DE | UWB_AKTIVTANK_GEFROREN | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DF | UWB_LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD4E1 | UWB_TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4E4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E6 | UWB_PASSIVTANK_VERBAUT | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4E7 | UWB_LANGZEIT_UMPUMPMENGE | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4E8 | UWB_TEMPERATUR_SCR_STEUERGERAET | °C | High | unsigned char | - | 0.75 | 1.0 | -40.0 |
| 0xD4EC | UWB_NACHLAUF_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4EE | UWB_NACHLAUFZEIT | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4EF | UWB_ZEIT_SEIT_MOTORSTOPP | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4F0 | UWB_ZEIT_SEIT_MOTORSTART | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4F1 | UWB_TEMPERATUR_DOSIERVENTIL_1 | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4F2 | UWB_WIDERSTAND_DOSIERVENTIL_1_GEMESSEN | Ohm | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0xD4F4 | UWB_WIDERSTAND_DOSIERVENTIL_1_OFFSETWERT | Ohm | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xD4F5 | UWB_STROM_DOSIERVENTIL_1 | mA | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xD4F6 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_1_ANFORDERUNG | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD4F7 | UWB_FREQUENZ_DOSIERVENTIL_1_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4F9 | UWB_MASSENSTROM_DOSIERVENTIL_1 | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD4FA | UWB_LANGZEIT_GESAMTDOSIERMENGE | g | High | signed long | - | 0.001 | 1.0 | 0.0 |
| 0xD4FE | UWB_KILOMETER_AKTUELLER_DC | km | High | signed long | - | 0.1 | 1.0 | 0.0 |
| 0xD4FF | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_1 | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xD508 | UWB_SPULENHEIZEN_DOSIERVENTIL_1_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xD509 | UWB_SPULENHEIZEN_DOSIERVENTIL_1_GEREGELT_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xD6E1 | UWB_LAUFZEIT_ECHO_1_KOMBI_PIEZO | µs | High | unsigned int | - | 0.000976 | 1.0 | 0.0 |
| 0xD6E2 | UWB_LAUFZEIT_ECHO_2_KOMBI_PIEZO | µs | High | signed long | - | 0.000976 | 1.0 | 0.0 |
| 0xD6E5 | UWB_SIGNALGUETE_ECHO_1_KOMBI_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD6E6 | UWB_SIGNALGUETE_ECHO_2_KOMBI_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD6E8 | UWB_ZEIT_REHEATING | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6EA | UWB_FUELLSTAND_PASSIVTANK_ROHWERT | mm | High | unsigned int | - | 0.25 | 1.0 | 0.0 |
| 0xD6EC | UWB_FUELLMENGE_PASSIVTANK_ROHWERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6ED | UWB_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD6EF | UWB_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD6F2 | UWB_LERNWERT_FOERDERPUMPE | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6F3 | UWB_TEMPERATUR_DOSIERVENTIL_1_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD6F9 | UWB_UMDREHUNGEN_FOERDERPUMPE_LANGZEIT | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xD7C0 | UWB_AUFTAUZEIT_MAXIMAL_MSA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C1 | UWB_CDM2_SUMME_NACHFUELLMENGE | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C2 | UWB_TEMPERATUR_FOERDERPUMPE | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7C3 | UWB_TEMPERATUR_FOERDERPUMPE_ZU_HOCH | 0/1 | High | 0x01 | - | - | - | - |
| 0xD7C4 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C5 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C6 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C7 | UWB_DRUCKREGLER_INTEGRAL_ANTEIL | µl/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD7D4 | UWB_GESAMTDOSIERMENGE_AKTUELLER_DC | g | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xD7D5 | UWB_FOERDERPUMPE_PWM_SOLL | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD7D6 | UWB_FOERDERPUMPE_PWM_IST | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD7D8 | UWB_CDM2_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DA | UWB_CDM2_FUELLMENGE_AKTIVTANK_ENDE | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DB | UWB_CDM2_FUELLMENGE_AKTIVTANK_ANFANG | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DE | UWB_TEMPERATUR_DRUCKSENSOR_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7DF | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7EE | UWB_TEMPERATUR_DOSIERVENTIL_1_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD7EF | UWB_LECKAGE_DIAGNOSE | mg/s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD810 | UWB_LECKAGE_GEMESSEN | mg/s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD812 | UWB_VOLUMENSTROM_ANGEFORDERT | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD813 | UWB_CDM1_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD816 | UWB_SPANNUNG_KLEMME_30B_LOGIK | V | High | signed int | - | 1.0 | 51.2 | 0.0 |
| 0xD818 | UWB_SPANNUNG_KLEMME_30_HEIZER | V | High | signed int | - | 1.0 | 51.2 | 0.0 |
| 0xD826 | UWB_DRUCKSENSOR_DATEN_FAST_CHANNEL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD827 | UWB_DRUCKSENSOR_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD828 | UWB_LECKAGE_FUELLSTANDSBASIERT_BITFELD | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82D | UWB_SUMME_DRUCKSTUFEN_DOSIERVENTIL_1_BLOCK | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD84E | UWB_CDM2_HIGH_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD84F | UWB_CDM2_LOW_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD854 | UWB_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | signed long | - | 0.00014901 | 1.0 | 0.0 |
| 0xD855 | UWB_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD856 | UWB_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed long | - | 0.00014901 | 1.0 | 0.0 |
| 0xD857 | UWB_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD858 | UWB_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8F6 | UWB_SYSTEMSTEIFIGKEIT_BERECHNET | - | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 |
| 0xD8F7 | UWB_SYSTEM_LECKAGE_ADAPTIERT | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F8 | UWB_SYSTEM_LECKAGE_CDM1 | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F9 | UWB_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8FA | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FB | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FC | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE2DB | UWB_CAN_RX_ABGASDRUCK_DOSIERVENTIL_1 | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE2DC | UWB_CAN_RX_ABGASDRUCK_DOSIERVENTIL_2 | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE2DD | UWB_CAN_RX_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | 0-n | High | 0xFF | TAB_ST_CENG_DRV | - | - | - |
| 0xE2DF | UWB_CAN_TX_ANFORDERUNG_KUEHLUNG_DOSIERVENTIL_1 | 0-n | High | 0xFF | TAB_RQ_COOL_DOSVA | - | - | - |
| 0xE308 | UWB_FOERDERPUMPE_ADBLUE_FEHLER | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xE309 | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_2 | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xE30A | UWB_TEMPERATUR_DOSIERVENTIL_2_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xE30B | UWB_TEMPERATUR_DOSIERVENTIL_2 | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xE30C | UWB_WIDERSTAND_DOSIERVENTIL_2_GEMESSEN | Ohm | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0xE30E | UWB_WIDERSTAND_DOSIERVENTIL_2_OFFSETWERT | Ohm | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xE30F | UWB_STROM_DOSIERVENTIL_2 | mA | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xE312 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_2_ANFORDERUNG | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xE313 | UWB_FREQUENZ_DOSIERVENTIL_2_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xE314 | UWB_MASSENSTROM_DOSIERVENTIL_2 | mg/s | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0xE316 | UWB_SPULENHEIZEN_DOSIERVENTIL_2_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xE317 | UWB_SPULENHEIZEN_DOSIERVENTIL_2_GEREGELT_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xE318 | UWB_TEMPERATUR_DOSIERVENTIL_2_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xE319 | UWB_SUMME_DRUCKSTUFEN_DOSIERVENTIL_2_BLOCK | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xE31A | UWB_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_2 | s | High | signed long | - | 0.01 | 1.0 | 0.0 |
| 0xE31B | UWB_DOSIERMENGE_DOSIERVENTIL_1_AKTUELLER_DC | mg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE31C | UWB_DOSIERMENGE_DOSIERVENTIL_2_AKTUELLER_DC | mg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE323 | UWB_MITTLERES_PUMPENVOLUMEN_0 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE324 | UWB_MITTLERES_PUMPENVOLUMEN_1 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE325 | UWB_ANZAHL_ADAPTIONEN_FOERDERPUMPE_LECKAGE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE38B | UWB_GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN | mg | High | signed long | - | 16.0 | 1.0 | 0.0 |
| 0xE3A8 | UWB_MITTLERER_MASSENSTROM_SEIT_AUFTAUEN_AKTUELLER_DC | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xE3A9 | UWB_ZEIT_SEIT_AKTIVTANK_GEFROREN_AKTUELLER_DC | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE3AD | UWB_CAN_RX_TEMPERATUR_AUSSEN_PLAUSIBILISIERT | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xE41A | UWB_HEIZUNG_SPANNUNG_HIGH_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41B | UWB_AKTIVTANKHEIZUNG_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41C | UWB_DOSIERLEITUNGSHEIZUNG_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41D | UWB_HEIZUNG_STROM_SCHALTER | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xE439 | UWB_FUELLMENGE_AKTIVTANK | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xE43A | UWB_LAUFZEIT_INDEX_DIREKT_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xE43B | UWB_LAUFZEIT_DIREKT_PIEZO | µs | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xE43C | UWB_AMPLITUDE_DIREKT_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE43D | UWB_SIGNALGUETE_DIREKT_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xE43E | UWB_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_HAUPT_FRUEH | - | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xE43F | UWB_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_DOPPEL_HAUPT | - | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xE443 | UWB_DOSIERVENTIL_1_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE444 | UWB_DOSIERVENTIL_2_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE483 | UWB_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE484 | UWB_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE485 | UWB_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN_TA | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE486 | UWB_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN_TA | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE487 | UWB_SYSTEM_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE489 | UWB_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48A | UWB_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48B | UWB_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN_TA | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48C | UWB_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN_TA | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48D | UWB_SYSTEM_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48E | UWB_DOSIERVENTIL_1_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE48F | UWB_DOSIERVENTIL_2_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE49D | UWB_SYSTEM_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE49E | UWB_DOSIERVENTIL_1_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | % | High | signed int | - | 0.015625 | 1.0 | 0.0 |
| 0xE49F | UWB_DOSIERVENTIL_2_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | % | High | signed int | - | 0.015625 | 1.0 | 0.0 |
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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x100003 | SCR-Steuergerät-Reset. | 0 | - |
| 0x8052B0 | Systemdruck, Druckabbaufehler. | 0 | - |
| 0x8052B2 | Dosierbereitschaft zu spät (TTCL) oder unplausibel entfallen. | 0 | - |
| 0x8052D0 | Aktivtank, Förderpumpe fördert Luft. | 0 | - |
| 0x8052DE | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Echo 1 und 2 zueinander unplausibel. | 0 | - |
| 0x80537B | Motorabstellzeit, unplausibel bei Motorstart nach abgeschlossenem SCR-Nachlauf. | 0 | - |
| 0x80537E | Motorabstellzeit, unplausibel zu Motorabstellzeit der DDE. | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0xD28D | UWB_CAN_RX_MOTOR_AUS_ZEIT | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD28E | UWB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0-n | High | 0xFF | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - |
| 0xD28F | UWB_CAN_RX_STATUS_FID_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2BB | UWB_CAN_RX_TEMPERATUR_AUSSEN | °C | High | signed int | - | 1.0 | 128.0 | 0.0 |
| 0xD2BE | UWB_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | hPa | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 |
| 0xD2BF | UWB_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xD2C1 | UWB_CAN_RX_STATUS_OBD_ZYKLUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2C4 | UWB_CAN_RX_IST_DREHMOMENT_KURBELWELLE | Nm | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0xD2C5 | UWB_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2C6 | UWB_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0-n | High | 0xFF | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - |
| 0xD2C7 | UWB_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2CB | UWB_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 1.0 | 1179.941 | 0.0 |
| 0xD2CC | UWB_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CD | UWB_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 1.0 | 1179.941 | 0.0 |
| 0xD2CE | UWB_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2D0 | UWB_CAN_RX_TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2D6 | UWB_CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2DA | UWB_CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | 0-n | High | 0xFF | QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | - | - | - |
| 0xD2DB | UWB_CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0-n | High | 0xFF | QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | - | - | - |
| 0xD2E0 | UWB_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0-n | High | 0xFF | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - |
| 0xD2E1 | UWB_CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E2 | UWB_CAN_TX_STATUS_SPERRE_SYR_SYSTEM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E4 | UWB_CAN_TX_BEGRENZUNG_EINSPRITZMENGE_SCR_ADDITIV | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2E5 | UWB_CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD2E7 | UWB_CAN_TX_IST_QUALITAET_SCR_ADDITIV | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD2E8 | UWB_CAN_TX_TEMPERATUR_SCR_ADDITIV | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2E9 | UWB_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | signed long | - | 0.1 | 1.0 | 0.0 |
| 0xD2EE | UWB_CAN_TX_FUELLSTAND_SCR_ADDITIV | % | High | unsigned char | - | 1.0 | 2.55 | 0.0 |
| 0xD2EF | UWB_CAN_TX_NACHFUELLMENGE_SCR_ADDITIV | l | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xD3F9 | UWB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0-n | High | 0xFF | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - |
| 0xD48F | UWB_AKTIVTANKHEIZUNG_PWM | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD490 | UWB_DOSIERLEITUNGSHEIZUNG_PWM | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD493 | UWB_AKTIVTANKHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 |
| 0xD494 | UWB_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 |
| 0xD495 | UWB_AKTIVTANKHEIZUNG_STROM | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD496 | UWB_DOSIERLEITUNGSHEIZUNG_STROM | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD497 | UWB_AKTIVTANKHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD498 | UWB_DOSIERLEITUNGSHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD49B | UWB_FOERDERPUMPE_STROM | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0xD49C | UWB_FOERDERPUMPE_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD49D | UWB_DRUCKREGELUNG_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4A0 | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A1 | UWB_TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A2 | UWB_TEMPERATUR_DRUCKSENSOR_ROHWERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4A3 | UWB_FOERDERPUMPE_DREHZAHL_SOLLWERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4A4 | UWB_DRUCK_ROHWERT | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4A7 | UWB_DRUCK_ABWEICHUNG_VON_NOMINAL | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4A9 | UWB_QUALITAET_ROHWERT | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AB | UWB_LEVELSENSOR_AKTIVTANK_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4AE | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B3 | UWB_AMPLITUDE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B4 | UWB_AMPLITUDE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B6 | UWB_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B8 | UWB_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_1 | s | High | signed long | - | 0.01 | 1.0 | 0.0 |
| 0xD4D0 | UWB_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4D1 | UWB_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD4D4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4D6 | UWB_NACHTANKERKENNUNG | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4D7 | UWB_AUFTAUZEIT_AKTUELL | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D9 | UWB_AUFTAUZEIT_EPA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4DA | UWB_AUFTAUEN_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DB | UWB_AUFTAUEN_ABGESCHLOSSEN | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DC | UBW_TEMPERATUR_AKTIVTANK_GESPEICHERT | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4DE | UWB_AKTIVTANK_GEFROREN | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4DF | UWB_LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD4E1 | UWB_TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 1.0 | 16.0 | -273.15 |
| 0xD4E4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E6 | UWB_PASSIVTANK_VERBAUT | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4E7 | UWB_LANGZEIT_UMPUMPMENGE | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4E8 | UWB_TEMPERATUR_SCR_STEUERGERAET | °C | High | unsigned char | - | 0.75 | 1.0 | -40.0 |
| 0xD4EC | UWB_NACHLAUF_AKTIV | 0/1 | High | 0xFF | - | - | - | - |
| 0xD4EE | UWB_NACHLAUFZEIT | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4EF | UWB_ZEIT_SEIT_MOTORSTOPP | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4F0 | UWB_ZEIT_SEIT_MOTORSTART | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4F1 | UWB_TEMPERATUR_DOSIERVENTIL_1 | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4F2 | UWB_WIDERSTAND_DOSIERVENTIL_1_GEMESSEN | Ohm | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0xD4F4 | UWB_WIDERSTAND_DOSIERVENTIL_1_OFFSETWERT | Ohm | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xD4F5 | UWB_STROM_DOSIERVENTIL_1 | mA | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xD4F6 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_1_ANFORDERUNG | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD4F7 | UWB_FREQUENZ_DOSIERVENTIL_1_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4F9 | UWB_MASSENSTROM_DOSIERVENTIL_1 | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD4FA | UWB_LANGZEIT_GESAMTDOSIERMENGE | g | High | signed long | - | 0.001 | 1.0 | 0.0 |
| 0xD4FE | UWB_KILOMETER_AKTUELLER_DC | km | High | signed long | - | 0.1 | 1.0 | 0.0 |
| 0xD4FF | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_1 | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xD508 | UWB_SPULENHEIZEN_DOSIERVENTIL_1_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xD509 | UWB_SPULENHEIZEN_DOSIERVENTIL_1_GEREGELT_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xD6E1 | UWB_LAUFZEIT_ECHO_1_KOMBI_PIEZO | µs | High | unsigned int | - | 0.000976 | 1.0 | 0.0 |
| 0xD6E2 | UWB_LAUFZEIT_ECHO_2_KOMBI_PIEZO | µs | High | signed long | - | 0.000976 | 1.0 | 0.0 |
| 0xD6E5 | UWB_SIGNALGUETE_ECHO_1_KOMBI_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD6E6 | UWB_SIGNALGUETE_ECHO_2_KOMBI_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD6E8 | UWB_ZEIT_REHEATING | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6EA | UWB_FUELLSTAND_PASSIVTANK_ROHWERT | mm | High | unsigned int | - | 0.25 | 1.0 | 0.0 |
| 0xD6EC | UWB_FUELLMENGE_PASSIVTANK_ROHWERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6ED | UWB_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD6EF | UWB_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0xD6F2 | UWB_LERNWERT_FOERDERPUMPE | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6F3 | UWB_TEMPERATUR_DOSIERVENTIL_1_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD6F9 | UWB_UMDREHUNGEN_FOERDERPUMPE_LANGZEIT | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xD7C0 | UWB_AUFTAUZEIT_MAXIMAL_MSA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C1 | UWB_CDM2_SUMME_NACHFUELLMENGE | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C2 | UWB_TEMPERATUR_FOERDERPUMPE | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7C3 | UWB_TEMPERATUR_FOERDERPUMPE_ZU_HOCH | 0/1 | High | 0x01 | - | - | - | - |
| 0xD7C4 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C5 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C6 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | µl | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7C7 | UWB_DRUCKREGLER_INTEGRAL_ANTEIL | µl/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD7D4 | UWB_GESAMTDOSIERMENGE_AKTUELLER_DC | g | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xD7D5 | UWB_FOERDERPUMPE_PWM_SOLL | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD7D6 | UWB_FOERDERPUMPE_PWM_IST | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xD7D8 | UWB_CDM2_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DA | UWB_CDM2_FUELLMENGE_AKTIVTANK_ENDE | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DB | UWB_CDM2_FUELLMENGE_AKTIVTANK_ANFANG | l | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD7DE | UWB_TEMPERATUR_DRUCKSENSOR_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7DF | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7EE | UWB_TEMPERATUR_DOSIERVENTIL_1_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD7EF | UWB_LECKAGE_DIAGNOSE | mg/s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD810 | UWB_LECKAGE_GEMESSEN | mg/s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD812 | UWB_VOLUMENSTROM_ANGEFORDERT | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD813 | UWB_CDM1_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xD816 | UWB_SPANNUNG_KLEMME_30B_LOGIK | V | High | signed int | - | 1.0 | 51.2 | 0.0 |
| 0xD818 | UWB_SPANNUNG_KLEMME_30_HEIZER | V | High | signed int | - | 1.0 | 51.2 | 0.0 |
| 0xD826 | UWB_DRUCKSENSOR_DATEN_FAST_CHANNEL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD827 | UWB_DRUCKSENSOR_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD828 | UWB_LECKAGE_FUELLSTANDSBASIERT_BITFELD | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82D | UWB_SUMME_DRUCKSTUFEN_DOSIERVENTIL_1_BLOCK | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xD84E | UWB_CDM2_HIGH_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD84F | UWB_CDM2_LOW_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD854 | UWB_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | signed long | - | 0.00014901 | 1.0 | 0.0 |
| 0xD855 | UWB_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD856 | UWB_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed long | - | 0.00014901 | 1.0 | 0.0 |
| 0xD857 | UWB_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD858 | UWB_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8F6 | UWB_SYSTEMSTEIFIGKEIT_BERECHNET | - | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 |
| 0xD8F7 | UWB_SYSTEM_LECKAGE_ADAPTIERT | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F8 | UWB_SYSTEM_LECKAGE_CDM1 | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F9 | UWB_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8FA | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FB | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FC | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE2DB | UWB_CAN_RX_ABGASDRUCK_DOSIERVENTIL_1 | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE2DC | UWB_CAN_RX_ABGASDRUCK_DOSIERVENTIL_2 | mbar | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE2DD | UWB_CAN_RX_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | 0-n | High | 0xFF | TAB_ST_CENG_DRV | - | - | - |
| 0xE2DF | UWB_CAN_TX_ANFORDERUNG_KUEHLUNG_DOSIERVENTIL_1 | 0-n | High | 0xFF | TAB_RQ_COOL_DOSVA | - | - | - |
| 0xE308 | UWB_FOERDERPUMPE_ADBLUE_FEHLER | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xE309 | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_2 | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xE30A | UWB_TEMPERATUR_DOSIERVENTIL_2_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xE30B | UWB_TEMPERATUR_DOSIERVENTIL_2 | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xE30C | UWB_WIDERSTAND_DOSIERVENTIL_2_GEMESSEN | Ohm | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0xE30E | UWB_WIDERSTAND_DOSIERVENTIL_2_OFFSETWERT | Ohm | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0xE30F | UWB_STROM_DOSIERVENTIL_2 | mA | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 |
| 0xE312 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_2_ANFORDERUNG | % | High | unsigned int | - | 1.0 | 163.84 | 0.0 |
| 0xE313 | UWB_FREQUENZ_DOSIERVENTIL_2_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xE314 | UWB_MASSENSTROM_DOSIERVENTIL_2 | mg/s | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0xE316 | UWB_SPULENHEIZEN_DOSIERVENTIL_2_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xE317 | UWB_SPULENHEIZEN_DOSIERVENTIL_2_GEREGELT_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0xE318 | UWB_TEMPERATUR_DOSIERVENTIL_2_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xE319 | UWB_SUMME_DRUCKSTUFEN_DOSIERVENTIL_2_BLOCK | bar | High | signed int | - | 1.0 | 1024.0 | 0.0 |
| 0xE31A | UWB_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_2 | s | High | signed long | - | 0.01 | 1.0 | 0.0 |
| 0xE31B | UWB_DOSIERMENGE_DOSIERVENTIL_1_AKTUELLER_DC | mg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE31C | UWB_DOSIERMENGE_DOSIERVENTIL_2_AKTUELLER_DC | mg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE323 | UWB_MITTLERES_PUMPENVOLUMEN_0 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE324 | UWB_MITTLERES_PUMPENVOLUMEN_1 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE325 | UWB_ANZAHL_ADAPTIONEN_FOERDERPUMPE_LECKAGE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE38B | UWB_GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN | mg | High | signed long | - | 16.0 | 1.0 | 0.0 |
| 0xE3A8 | UWB_MITTLERER_MASSENSTROM_SEIT_AUFTAUEN_AKTUELLER_DC | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xE3A9 | UWB_ZEIT_SEIT_AKTIVTANK_GEFROREN_AKTUELLER_DC | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE3AD | UWB_CAN_RX_TEMPERATUR_AUSSEN_PLAUSIBILISIERT | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xE41A | UWB_HEIZUNG_SPANNUNG_HIGH_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41B | UWB_AKTIVTANKHEIZUNG_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41C | UWB_DOSIERLEITUNGSHEIZUNG_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xE41D | UWB_HEIZUNG_STROM_SCHALTER | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xE439 | UWB_FUELLMENGE_AKTIVTANK | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xE43A | UWB_LAUFZEIT_INDEX_DIREKT_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xE43B | UWB_LAUFZEIT_DIREKT_PIEZO | µs | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xE43C | UWB_AMPLITUDE_DIREKT_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE43D | UWB_SIGNALGUETE_DIREKT_PIEZO | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xE43E | UWB_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_HAUPT_FRUEH | - | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xE43F | UWB_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_DOPPEL_HAUPT | - | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xE443 | UWB_DOSIERVENTIL_1_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE444 | UWB_DOSIERVENTIL_2_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE483 | UWB_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE484 | UWB_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE485 | UWB_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN_TA | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE486 | UWB_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN_TA | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE487 | UWB_SYSTEM_MASSENABWEICHUNG_DRUCKSTUFEN | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE489 | UWB_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48A | UWB_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48B | UWB_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN_TA | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48C | UWB_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN_TA | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48D | UWB_SYSTEM_MASSE_GEMESSEN_DRUCKSTUFEN | µg | High | signed long | - | 0.00390625 | 1.0 | 0.0 |
| 0xE48E | UWB_DOSIERVENTIL_1_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE48F | UWB_DOSIERVENTIL_2_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE49D | UWB_SYSTEM_DOSIERABWEICHUNG_GEMITTELT | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xE49E | UWB_DOSIERVENTIL_1_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | % | High | signed int | - | 0.015625 | 1.0 | 0.0 |
| 0xE49F | UWB_DOSIERVENTIL_2_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | % | High | signed int | - | 0.015625 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PASSIVTANK_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Passivtank verbaut. |
| 0x01 | Passivtank verbaut. |
| 0xFF | Wert ungültig |

### QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialisierung |
| 0x01 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x09 | reserviert |
| 0x02 | reserviert |
| 0x0A | Signalwert ist gültig, Zustand/Status temporär |
| 0x03 | reserviert |
| 0x0B | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x04 | reserviert |
| 0x0C | reserviert |
| 0x06 | reserviert |
| 0x0E | Signalwert ist ungültig, Zustand/Status temporär |
| 0x07 | reserviert |
| 0xFF | Wert ungültig |

### QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialisierung |
| 0x01 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x09 | reserviert |
| 0x02 | Signalwert ist gültig, Zustand/Status permanent |
| 0x0A | reserviert |
| 0x03 | reserviert |
| 0x0B | reserviert |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status permanent |
| 0x0C | Abgleichwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x06 | Signalwert ist ungültig |
| 0x0E | reserviert |
| 0x07 | reserviert |
| 0xFF | Wert ungültig |

### QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x0008 | Initialisierung |
| 0x0001 | reserviert |
| 0x0009 | reserviert |
| 0x0002 | Signalwert ist gültig |
| 0x000A | Signalwert ist gültig, Zustand/Status temporär |
| 0x0003 | Signalqualität bzw. Überwachung eingeschränkt |
| 0x000B | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x0004 | reserviert |
| 0x000C | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x0006 | Signalwert ist ungültig |
| 0x000E | Signalwert ist ungültig, Zustand/Status temporär |
| 0x0007 | reserviert |
| 0xFFFF | Wert ungültig |

### QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x0008 | Initialisierung |
| 0x0001 | reserviert |
| 0x0009 | reserviert |
| 0x0002 | Signalwert ist gültig |
| 0x000A | Signalwert ist gültig, Zustand/Status temporär |
| 0x0003 | Signalqualität bzw. Überwachung eingeschränkt |
| 0x000B | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x0004 | reserviert |
| 0x000C | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x0006 | Signalwert ist ungültig |
| 0x000E | Signalwert ist ungültig, Zustand/Status temporär |
| 0x0007 | reserviert |
| 0xFFFF | Wert ungültig |

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

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XAE60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_KOMPLETTRUECKSAUGEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_RUECKSAUGEN_DETAIL | - | - | - | Detaillierter Status der Routine Komplettrücksaugen. |

### RES_0XAE61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_TEILRUECKSAUGEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_RUECKSAUGEN_DETAIL | - | - | - | Detaillierter Status der Routine Teilrücksaugen. |

### RES_0XAE62_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_LECKAGEERKENNUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_LECKAGEERKENNUNG_DETAIL | - | - | - | Detaillierter Status der Routine Leckageerkennung. |

### RES_0XAE63_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_DRUCKAUFBAU_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_DRUCKAUFBAU_DETAIL | - | - | - | Detaillierter Status der Routine Druckaufbau. |

### RES_0XAE68_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_ACT_INIT_TESTS | - | - | - | Aktuell laufender Teilschritt. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_INIT | - | - | - | Status Inbetriebnahmesquenz. |

### RES_0XAE6B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_TRANSFERPUMPE_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_TRANSFERPUMPE_DETAIL | - | - | - | Detaillierter Status der Routine Test Transferpumpe. |

### RES_0XAE6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_AKTIVTANKHEIZUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Deatillierter Status der Routine Test Aktivtankheizung. |

### RES_0XAE6D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_DOSIERLEITUNGSHEIZUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Detaillierter Zustand der Routine Test Dosierleitungsheizung. |

### RES_0XAE6E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| STAT_SCR_DEAKTIVIERUNG_SCHUTZDOSIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_DEAKTIVIERUNG_SCHUTZDOSIERUNG | - | - | - | Status der Deaktivierung der Schutzdosierung. |

### RES_0XAE6F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| STAT_SCR_MONTAGEMODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_MONTAGEMODUS | - | - | - | Zustand des Montagemodus. 0 = Montagemodus inaktiv. 1 = Montagemodus aktiv. |

### RES_0XAE7D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_DOSIERVENTILTEST_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_TROCKENTAKTUNG_DETAIL | - | - | - | Detaillierter Status der Routine Dosierventiltest |

### RES_0XAE7E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_DOSIERVENTILTEST_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_TROCKENTAKTUNG_DETAIL | - | - | - | Detaillierter Status der Routine Dosierventiltest |

### RES_0XAE7F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_DOSIERMENGENTEST_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_DOSIERMENGENTEST_DETAIL | - | - | - | Detaillierter Status für die Routine Dosiermengentest |

### RES_0XAE80_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_DOSIERMENGENTEST_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_DOSIERMENGENTEST_DETAIL | - | - | - | Detaillierter Status für die Routine Dosiermengentest |

### RES_0XAE81_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_SPULENHEIZEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Detaillierter Status der Routine Spulenheizen |

### RES_0XAE82_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_SPULENHEIZEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Detaillierter Status der Routine Spulenheizen |

### RES_0XAE83_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE84_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE85_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE86_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE87_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE88_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |

### RES_0XAE89_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Freigabebedingungen |
| STAT_TEST_STRECKENENTPRELLTE_DIAGNOSEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Detaillierter Status der Routine zum Gutprüfen der streckenentprellten Diagnosen |

### RES_0XE306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_01_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #01 |
| STAT_DTC_02_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #02 |
| STAT_DTC_03_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #03 |
| STAT_DTC_04_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #04 |
| STAT_DTC_05_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #05 |
| STAT_DTC_06_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #06 |
| STAT_DTC_07_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #07 |
| STAT_DTC_08_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #08 |
| STAT_DTC_09_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #09 |
| STAT_DTC_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | nicht löschbarer DTC #10 |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SCR_SYSTEM_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | ES_ON - Zündung an, Motor aus |
| 0x01 | ASYN_ON - Zündung an und  asynchrone Kurbelwellenrotation |
| 0x02 | SYN_ON - Zündung an und synchrone Kurbelwellenrotation |
| 0x03 | SYN_OFF - Zündung aus und synchrone Kurbelwellenrotation |
| 0x04 | PWL - Nachlauf |
| 0x05 | WAIT - Vorlauf |
| 0x06 | DEAC - SG geht in den Ruhezustand |
| 0xFF | Wert ungültig |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| SCR_KOMPLETTRUECKSAUGEN | 0xAE60 | - | Komplettrücksaugen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE60_R |
| SCR_TEILRUECKSAUGEN | 0xAE61 | - | Teilrücksaugen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE61_R |
| SCR_LECKAGEERKENNUNG | 0xAE62 | - | Leckageerkennung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE62_R |
| SCR_DRUCKAUFBAU | 0xAE63 | - | Druckaufbau | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE63_R |
| SCR_SYSTEMCHECK_INIT | 0xAE68 | - | Inbetriebnahmeroutine im Werk | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE68_R | RES_0xAE68_R |
| SCR_TRANSFERPUMPE | 0xAE6B | - | Funktionstest Transferpumpe. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE6B_R | RES_0xAE6B_R |
| SCR_TEST_AKTIVTANKHEIZUNG | 0xAE6C | - | Funktionstest Aktivtankheizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6C_R |
| SCR_TEST_DOSIERLEITUNGSHEIZUNG | 0xAE6D | - | Funktionstest Dosierleitungsheizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6D_R |
| SCR_DEAKTIVIERUNG_SCHUTZDOSIERUNG | 0xAE6E | - | Manuelles Deaktivieren der AdBlue-Schutzdosierung für den Werkstattdiagnosetest der SCR-Abgaskomponenten.  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6E_R |
| MONTAGEMODUS | 0xAE6F | - | Steuern des Montagemodus für das SCR Gen3 SG. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6F_R |
| SCR_DOSIERVENTILTEST_1 | 0xAE7D | - | Test des motornahen Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE7D_R |
| SCR_DOSIERVENTILTEST_2 | 0xAE7E | - | Test des Unterboden-Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE7E_R |
| SCR_DOSIERMENGENTEST_1 | 0xAE7F | - | Dosiermengentest des motornahen Dosierventils | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE7F_R | RES_0xAE7F_R |
| SCR_DOSIERMENGENTEST_2 | 0xAE80 | - | Dosiermengentest des Unterboden-Dosierventils | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE80_R | RES_0xAE80_R |
| SCR_SPULENHEIZEN_DOSIERVENTIL_1 | 0xAE81 | - | Spulenheizfunktion des motornahen Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE81_R |
| SCR_SPULENHEIZEN_DOSIERVENTIL_2 | 0xAE82 | - | Spulenheizfunktion des Unterboden-Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE82_R |
| SCR_INITIALISIERUNG_LERNWERT_FOERDERPUMPE | 0xAE83 | - | Initialisierung der Lernwerte der Förderpumpe | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE83_R |
| SCR_INITIALISIERUNG_LERNWERT_DOSIERVENTIL_1 | 0xAE84 | - | Initialisierung der Lernwerte des motornahen Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE84_R |
| SCR_INITIALISIERUNG_LERNWERT_DOSIERVENTIL_2 | 0xAE85 | - | Initialisierung der Lernwerte des Unterboden-Dosierventils | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE85_R |
| SCR_INITIALISIERUNG_FUELLMENGE_AKTIVTANK | 0xAE86 | - | Initialisierung der Füllmenge des Aktivtanks | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE86_R |
| SCR_INITIALISIERUNG_FUELLMENGE_PASSIVTANK | 0xAE87 | - | Initialisierung der Füllmenge des Passivtanks | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE87_R |
| SCR_INITIALISIERUNG_RAM | 0xAE88 | - | Initialisierung aller nicht OBD-relevanten Speichergrößen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE88_R |
| SCR_TEST_STRECKENENTPRELLTE_DIAGNOSEN | 0xAE89 | - | Routine zum Gutprüfen der streckenentprellten Diagnosen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE89_R |
| STEUERN_FOERDERPUMPE | 0xD280 | - | Test zum Steuern der Förderpumpe. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD280_D | - |
| STEUERN_RUECKFOERDERPUMPE | 0xD281 | - | Test zum Steuern der Förderpumpe (Rückwärtslauf). | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD281_D | - |
| STEUERN_AKTIVTANKHEIZUNG | 0xD282 | - | Test zum Steuern der Aktivtankheizung. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD282_D | - |
| STEUERN_DOSIERLEITUNGSHEIZUNG | 0xD283 | - | Test zum Steuern der Dosierleitungsheizung. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD283_D | - |
| STEUERN_TRANSFERPUMPE | 0xD285 | - | Test zum Steuern der Transferpumpe. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD285_D | - |
| STEUERN_LANGZEIT_UMPUMPMENGE | 0xD287 | - | Schreiben der Langzeitumpumpmenge. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD287_D | - |
| CAN_RX_MOTOR_AUS_ZEIT | 0xD28D | STAT_CAN_RX_MOTOR_AUS_ZEIT_WERT | T_ES_CAN | min | T_ES_CAN | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0xD28E | STAT_CAN_RX_STATUS_MOTOR_AUS_ZEIT | STATE_T_ES_CAN | 0-n | STATE_T_ES_CAN | High | unsigned char | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - | - | 22 | - | - |
| CAN_RX_STATUS_FID_SCR_SYSTEM | 0xD28F | STAT_CAN_RX_STATUS_FID_SCR_SYSTEM_WERT | LF_FID_INH_CUS_COM_RX_TMP | - | LF_FID_INH_CUS_COM_RX_TMP | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_ERSTBEFUELLUNGSSTATUS | 0xD290 | - | Schreiben des Erstbefüllungsstatus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD290_D | - |
| CAN_RX_SOLL_EINSPRITZMENGE_SCR_ADDITIV_1 | 0xD2B7 | STAT_CAN_RX_SOLL_EINSPRITZMENGE_SCR_ADDITIV_1_WERT | MASS_RAG_TAR_INJ_DOWN[0] | g | MASS_RAG_TAR_INJ_DOWN[0] | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_ABGAS_MASSENSTROM | 0xD2B9 | STAT_CAN_RX_STATUS_ABGAS_MASSENSTROM_WERT | MFL_EG_KGH | kg/h | MFL_EG_KGH | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_INITIALISIERUNG_FILTER_WERT_DME | 0xD2BA | STAT_CAN_RX_STATUS_INITIALISIERUNG_FILTER_WERT_DME | LV_M_RAG_REQ_SYN_SCRM | 0-n | LV_M_RAG_REQ_SYN_SCRM | High | unsigned char | STATUS_INITIALISIERUNG_FILTER_WERT_DME | - | - | - | - | 22 | - | - |
| CAN_RX_TEMPERATUR_AUSSEN | 0xD2BB | STAT_CAN_RX_TEMPERATUR_AUSSEN_WERT | TAA | °C | TAA | High | signed int | - | 1.0 | 128.0 | 0.0 | - | 22 | - | - |
| CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | 0xD2BE | STAT_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB_WERT | AMP | hPa | AMP | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | 0xD2BF | STAT_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB_WERT | TCO_1_SYS | °C | TCO_1_SYS | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| CAN_RX_STATUS_OBD_ZYKLUS | 0xD2C1 | - | STATE_OBD_CYC_TMP | Bit | STATE_OBD_CYC_TMP | High | BITFIELD | BF_STATUS_OBD_ZYKLUS | - | - | - | - | 22 | - | - |
| CAN_RX_OBD_POSITION_DROSSELKLAPPE_MOTOR | 0xD2C2 | STAT_CAN_RX_OBD_POSITION_DROSSELKLAPPE_MOTOR_WERT | FAC_TPS_1_SAE | % | FAC_TPS_1_SAE | High | unsigned char | - | 1.0 | 2.55 | 0.0 | - | 22 | - | - |
| CAN_RX_OBD_MODELLWERT_LAST_MOTOR | 0xD2C3 | STAT_CAN_RX_OBD_MODELLWERT_LAST_MOTOR_WERT | LOAD_CLC_SAE_CAN | % | LOAD_CLC_SAE_CAN | High | unsigned char | - | 1.0 | 2.55 | 0.0 | - | 22 | - | - |
| CAN_RX_IST_DREHMOMENT_KURBELWELLE | 0xD2C4 | STAT_CAN_RX_IST_DREHMOMENT_KURBELWELLE_WERT | TQI_SP | Nm | TQI_SP | High | signed int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 0xD2C5 | STAT_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE_WERT | N | 1/min | N | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0xD2C6 | STAT_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | LV_CDN_COM_DIAG | 0-n | LV_CDN_COM_DIAG | High | unsigned char | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - | - | 22 | - | - |
| CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0xD2C7 | STAT_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT_WERT | VS | km/h | VS | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_WEGSTRECKE_KILOMETER | 0xD2C8 | STAT_CAN_RX_WEGSTRECKE_KILOMETER_WERT | DIST_CAN | km | DIST_CAN | High | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CB | STAT_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | AC_VEH | m/s² | AC_VEH | High | signed int | - | 1.0 | 1179.941 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CC | STAT_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | STATE_AC_LGT_VEH | 0-n | STATE_AC_LGT_VEH | High | unsigned int | QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CD | STAT_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | AC_TRV_VEH | m/s² | AC_TRV_VEH | High | signed int | - | 1.0 | 1179.941 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CE | STAT_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | STATE_AC_TRV_VEH | 0-n | STATE_AC_TRV_VEH | High | unsigned int | QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_ZEIT_SEKUNDE_ZAEHLER_RELATIV | 0xD2CF | STAT_CAN_RX_ZEIT_SEKUNDE_ZAEHLER_RELATIV_WERT | T_ABSV_COM | s | T_ABSV_COM | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_TEMPERATUR_SCR_KATALYSATOR | 0xD2D0 | STAT_CAN_RX_TEMPERATUR_SCR_KATALYSATOR_WERT | TEG_CAT_UP | °C | TEG_CAT_UP | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| CAN_RX_DREHMOMENT_FAHRERWUNSCH_PID_SCR_SYSTEM | 0xD2D3 | STAT_CAN_RX_DREHMOMENT_FAHRERWUNSCH_PID_SCR_SYSTEM_WERT | TQ_REQ_CAN_SAE | % | TQ_REQ_CAN_SAE | High | unsigned char | - | 1.0 | 1.0 | -125.0 | - | 22 | - | - |
| CAN_RX_DREHMOMENT_AKTUELLE_PID_SCR_SYSTEM | 0xD2D4 | STAT_CAN_RX_DREHMOMENT_AKTUELLE_PID_SCR_SYSTEM_WERT | TQI_AV_SAE | % | TQI_AV_SAE | High | unsigned char | - | 1.0 | 1.0 | -125.0 | - | 22 | - | - |
| CAN_RX_STATUS_ZUSTAND_FAHRZEUG | 0xD2D5 | STAT_CAN_RX_STATUS_ZUSTAND_FAHRZEUG | STATE_PTL_NET | 0-n | STATE_PTL_NET | High | unsigned char | STATUS_ZUSTAND_FAHRZEUG | - | - | - | - | 22 | - | - |
| CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR | 0xD2D6 | STAT_CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR_WERT | FCO_SUM_CAN_H_RNG | µl | FCO_SUM_CAN_H_RNG | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | 0xD2DA | STAT_CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | STATE_N_CAN | 0-n | STATE_N_CAN | High | unsigned char | QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | - | - | - | - | 22 | - | - |
| CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0xD2DB | STAT_CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | STATE_VS_CAN | 0-n | STATE_VS_CAN | High | unsigned char | QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_STEUERUNG_BASIS_TEILNETZE | 0xD2DC | STAT_CAN_RX_STEUERUNG_BASIS_TEILNETZE_WERT | STATE_CTL_BAS_PTL_NET | - | STATE_CTL_BAS_PTL_NET | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV | 0xD2DF | STAT_CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV_WERT | DIST_AVL_RAG_VOL_TANK_ECU | km | DIST_AVL_RAG_VOL_TANK_ECU | High | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0xD2E0 | STAT_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | LV_MIL_REQ_ON | 0-n | LV_MIL_REQ_ON | High | unsigned char | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | 0xD2E1 | - | LF_DWIS_REQ_EXTN | Bit | LF_DWIS_REQ_EXTN | High | BITFIELD | BF_STATUS_SYSTEM_FEHLER_OBD_SCR | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_SPERRE_SCR_SYSTEM | 0xD2E2 | - | STATE_SCR_LOCK_TMP | Bit | STATE_SCR_LOCK_TMP | High | BITFIELD | BF_STATUS_SPERRE_SCR_SYSTEM | - | - | - | - | 22 | - | - |
| CAN_TX_IST_EINSPRITZMENGE_SCR_ADDITIV_1 | 0xD2E3 | STAT_CAN_TX_IST_EINSPRITZMENGE_SCR_ADDITIV_1_WERT | MASS_RAG_AVL_SCR[0] | g | MASS_RAG_AVL_SCR | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_BEGRENZUNG_EINSPRITZMENGE_SCR_ADDITIV | 0xD2E4 | STAT_CAN_TX_BEGRENZUNG_EINSPRITZMENGE_SCR_ADDITIV_WERT | MFL_RAG_TAR_INJ_LIM_MAX[0] | mg/s | MFL_RAG_TAR_INJ_LIM_MAX[0] | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | 0xD2E5 | STAT_CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV_WERT | ST_RESG_SCRA_TMP | - | LV_ENA_RAG_INJ | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | 0xD2E6 | STAT_CAN_TX_STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | LV_M_RAG_AVL_SYN_RASL | 0-n | LV_M_RAG_AVL_SYN_RASL | High | unsigned char | STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_IST_QUALITAET_SCR_ADDITIV | 0xD2E7 | STAT_CAN_TX_IST_QUALITAET_SCR_ADDITIV_WERT | CONC_RAG_VLD | % | CONC_RAG_VLD | High | unsigned int | - | 0.01 | 1.0 | -10.0 | - | 22 | - | - |
| CAN_TX_TEMPERATUR_SCR_ADDITIV | 0xD2E8 | STAT_CAN_TX_TEMPERATUR_SCR_ADDITIV_WERT | TEMP_RAG_TANK | °C | TEMP_RAG_TANK | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | 0xD2E9 | STAT_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV_WERT | DIST_AVL_RAG_VOL_TANK | km | DIST_AVL_RAG_VOL_TANK | High | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_FUELLSTAND_SCR_ADDITIV | 0xD2EE | STAT_CAN_TX_FUELLSTAND_SCR_ADDITIV_WERT | RAG_VOL_TANK_PERC_COM | % | RAG_VOL_TANK_PERC | High | unsigned char | - | 1.0 | 2.55 | 0.0 | - | 22 | - | - |
| CAN_TX_NACHFUELLMENGE_SCR_ADDITIV | 0xD2EF | STAT_CAN_TX_NACHFUELLMENGE_SCR_ADDITIV_WERT | RAG_VOL_TANK_MAX_FILL_COM | l | RAG_VOL_TANK_MAX_FILL | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0xD3F9 | STAT_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | STATE_CONC_RAG_VLD | 0-n | STATE_CONC_RAG_VLD | High | unsigned char | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_ID_ENERGIE_BORDNETZ_VERBRAUCHER_STROM_FEPM | 0xD3FA | STAT_CAN_TX_ID_ENERGIE_BORDNETZ_VERBRAUCHER_STROM_FEPM_WERT | EGY_IDX_CUR_BN_SCR | - | EGY_IDX_CUR_BN_SCR | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_IST_STROM_VERBRAUCHER_FEPM | 0xD3FB | STAT_CAN_TX_IST_STROM_VERBRAUCHER_FEPM_WERT | CUR_VALUE_AV_SCR | A | CUR_VALUE_AV_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_VORAUSSAGE_FEPM | 0xD3FC | STAT_CAN_TX_VERBRAUCHER_STROM_VORAUSSAGE_FEPM_WERT | CUR_VALUE_PRED_SCR | A | CUR_VALUE_PRED_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_BEDARF_FEPM | 0xD3FD | STAT_CAN_TX_VERBRAUCHER_STROM_BEDARF_FEPM_WERT | CUR_VALUE_RSV_SCR | A | CUR_VALUE_RSV_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_VERFUEGBAR_FEPM | 0xD3FE | STAT_CAN_TX_VERBRAUCHER_STROM_VERFUEGBAR_FEPM_WERT | CUR_VALUE_AVL_SCR | A | CUR_VALUE_AVL_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_KLASSE_FEPM | 0xD3FF | STAT_CAN_TX_VERBRAUCHER_KLASSE_FEPM | CUR_CLAS_SCR | 0-n | CUR_CLAS_SCR | High | unsigned char | VERBRAUCHER_KLASSE_FEPM | - | - | - | - | 22 | - | - |
| AKTIVTANKHEIZUNG_PWM | 0xD48F | STAT_AKTIVTANKHEIZUNG_PWM_WERT | PWM_WUP_RAG_HEAT[0] | % | PWM_WUP_RAG_HEAT[0] | High | unsigned int | - | 1.0 | 163.84 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_PWM | 0xD490 | STAT_DOSIERLEITUNGSHEIZUNG_PWM_WERT | PWM_WUP_RAG_HEAT[1] | % | PWM_WUP_RAG_HEAT[1] | High | unsigned int | - | 1.0 | 163.84 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_AKTIV | 0xD491 | STAT_AKTIVTANKHEIZUNG_AKTIV | LV_RAG_HEAT_ACT[0] | 0/1 | LV_RAG_HEAT_ACT[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_AKTIV | 0xD492 | STAT_DOSIERLEITUNGSHEIZUNG_AKTIV | LV_RAG_HEAT_ACT[1] | 0/1 | LV_RAG_HEAT_ACT[1] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| AKTIVTANKHEIZUNG_STROM_ROHWERT | 0xD493 | STAT_AKTIVTANKHEIZUNG_STROM_ROHWERT_WERT | VP_CFB_RAG_HEAT[0] | V | VP_CFB_RAG_HEAT[0] | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | 0xD494 | STAT_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT_WERT | VP_CFB_RAG_HEAT[1] | V | VP_CFB_RAG_HEAT[1] | High | unsigned int | - | 1.0 | 6553.59999 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_STROM | 0xD495 | STAT_AKTIVTANKHEIZUNG_STROM_WERT | CFB_RAG_HEAT[0] | A | CFB_RAG_HEAT[0] | High | unsigned int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_STROM | 0xD496 | STAT_DOSIERLEITUNGSHEIZUNG_STROM_WERT | CFB_RAG_HEAT[1] | A | CFB_RAG_HEAT[1] | High | unsigned int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_LEISTUNG | 0xD497 | STAT_AKTIVTANKHEIZUNG_LEISTUNG_WERT | POW_RAG_HEAT_TANK_CNS | W | POW_RAG_HEAT_TANK_CNS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_LEISTUNG | 0xD498 | STAT_DOSIERLEITUNGSHEIZUNG_LEISTUNG_WERT | POW_RAG_HEAT_TUBE_CNS | W | POW_RAG_HEAT_TUBE_CNS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_STROM | 0xD49B | STAT_FOERDERPUMPE_STROM_WERT | CUR_EM_RMS | A | CUR_EM_RMS | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_DREHZAHL | 0xD49C | STAT_FOERDERPUMPE_DREHZAHL_WERT | N_RAG_PUMP_MES | 1/min | N_RAG_PUMP_MES | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKREGELUNG_AKTIV | 0xD49D | STAT_DRUCKREGELUNG_AKTIV | LV_PRS_CTL_RAG_ON | 0/1 | LV_PRS_CTL_RAG_ON | High | unsigned char | - | - | - | - | - | 22 | - | - |
| DRUCKREGELUNG_GEPRUEFT | 0xD49E | STAT_DRUCKREGELUNG_GEPRUEFT | LV_PRS_CTL_RAG_CHK_OK | 0/1 | LV_PRS_CTL_RAG_CHK_OK | High | unsigned char | - | - | - | - | - | 22 | - | - |
| DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN | 0xD49F | STAT_DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN_WERT | RAG_VOL_PUMP_DOWN | ml | RAG_VOL_PUMP_DOWN | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | 0xD4A0 | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT_WERT | TEMP_RAG_TANK_SENS | °C | TEMP_RAG_TANK_SENS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_AKTIVTANK | 0xD4A1 | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_WERT | TEMP_RAG_SYS | °C | TEMP_RAG_SYS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_DRUCKSENSOR_ROHWERT | 0xD4A2 | STAT_TEMPERATUR_DRUCKSENSOR_ROHWERT_WERT | TEMP_PRS_RAG_SENS | °C | TEMP_PRS_RAG_SENS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| FOERDERPUMPE_DREHZAHL_SOLLWERT | 0xD4A3 | STAT_FOERDERPUMPE_DREHZAHL_SOLL_WERT | N_SP_EM | 1/min | N_SP_EM | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCK_ROHWERT | 0xD4A4 | STAT_DRUCK_ROHWERT_WERT | PRS_RAG_SENT (relativ) | bar | PRS_RAG_SENT | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| DRUCK_GEFILTERT | 0xD4A5 | STAT_DRUCK_GEFILTERT_WERT | PRS_RAG_FIL (absolut) | bar | PRS_RAG_FIL | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| DRUCK_NOMINAL | 0xD4A6 | STAT_DRUCK_NOMINAL_WERT | PRS_RAG_SP | bar | PRS_RAG_SP | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| DRUCK_ABWEICHUNG_VON_NOMINAL | 0xD4A7 | STAT_DRUCK_ABWEICHUNG_VON_NOMINAL_WERT | PRS_CTL_DIF_RAG_FIL | bar | PRS_CTL_DIF_RAG_FIL | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| SCHALLGESCHWINDIGKEIT_ROHWERT | 0xD4A8 | STAT_SCHALLGESCHWINDIGKEIT_ROHWERT_WERT | VEL_RAG_UCLS | m/s | VEL_RAG_UCLS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| QUALITAET_ROHWERT | 0xD4A9 | STAT_QUALITAET_ROHWERT_WERT | CONC_RAG_SENS | % | CONC_RAG_SENS | High | unsigned int | - | 0.01 | 1.0 | -10.0 | - | 22 | - | - |
| LEVELSENSOR_AKTIVTANK_FEHLER | 0xD4AB | STAT_LEVELSENSOR_AKTIVTANK_FEHLER_WERT | LF_STATE_RAG_UCLS_SENT | - | LF_STATE_RAG_UCLS_SENT | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO | 0xD4AC | STAT_LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO_WERT | LF_STATE_RAG_TANK_SENS | - | LF_STATE_RAG_TANK_SENS | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | 0xD4AE | STAT_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT_WERT | RTL_MES_SENS[0] | mm | RTL_MES_SENS[0] | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_1_KOMBI_PIEZO | 0xD4B3 | STAT_AMPLITUDE_ECHO_2_DIREKT_PIEZO_WERT | Gen3: AMPL_RAG_UCLS[0] Gen4: FAC_AMPL_REF_0_UCLS_SENT[0] | - | FAC_AMPL_REF_0_UCLS_SENT[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_2_KOMBI_PIEZO | 0xD4B4 | STAT_AMPLITUDE_ECHO_1_KOMBI_PIEZO_WERT | Gen3: AMPL_RAG_UCLS[1] Gen4: FAC_AMPL_REF_1_UCLS_SENT[0] | - | FAC_AMPL_REF_1_UCLS_SENT[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | 0xD4B6 | STAT_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT_WERT | RTL_CONT_SENS_VCT[0] | l | RTL_CONT_SENS_VCT[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_1 | 0xD4B8 | STAT_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_1_WERT | T_TOT_RDU_ANST_HEAT[0] | s | T_TOT_RDU_ANST_HEAT[0] | High | unsigned long | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | 0xD4D0 | STAT_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT_WERT | RTL_VOL_FIL_H_RES[0] | l | RTL_VOL_FIL_H_RES[0] | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | 0xD4D1 | STAT_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT_WERT | RTL_VOL_FIL_H_RES[1] | l | RTL_VOL_FIL_H_RES[1] | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_RELATIV | 0xD4D2 | STAT_FUELLMENGE_AKTIVTANK_RELATIV_WERT | RAG_VOL_TANK_PERC | % | RAG_VOL_TANK_PERC | High | unsigned char | - | 1.0 | 2.55 | 0.0 | - | 22 | - | - |
| NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT | 0xD4D3 | STAT_NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT_WERT | RAG_VOL_TANK_MAX_FILL | l | RAG_VOL_TANK_MAX_FILL | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | 0xD4D4 | STAT_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK_WERT | LF_RTL_SENS_MES_VLD_DET | - | LF_RTL_SENS_MES_VLD_DET | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHTANKERKENNUNG | 0xD4D6 | STAT_NACHTANKERKENNUNG | LV_RS_SENS_REAC_FILL | 0/1 | LV_RS_SENS_REAC_FILL | High | unsigned char | - | - | - | - | - | 22 | - | - |
| AUFTAUZEIT_AKTUELL | 0xD4D7 | STAT_AUFTAUZEIT_AKTUELL_WERT | T_TOT_DUR_CUR_WUP_RAG_HEAT | s | T_TOT_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUZEIT_EPA | 0xD4D9 | STAT_AUFTAUZEIT_EPA_WERT | T_MAX_DUR_CUR_WUP_RAG_HEAT | s | T_MAX_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUEN_AKTIV | 0xD4DA | STAT_AUFTAUEN_AKTIV | LV_RAG_WUP_HEAT_ACT | 0/1 | LV_RAG_WUP_HEAT_ACT | High | unsigned char | - | - | - | - | - | 22 | - | - |
| AUFTAUEN_ABGESCHLOSSEN | 0xD4DB | STAT_AUFTAUEN_ABGESCHLOSSEN | LV_RAG_WUP_HEAT_CMPL | 0/1 | LV_RAG_WUP_HEAT_CMPL | High | unsigned char | - | - | - | - | - | 22 | - | - |
| TEMPERATUR_AKTIVTANK_GESPEICHERT | 0xD4DC | STAT_TEMPERATUR_AKTIVTANK_GESPEICHERT_WERT | TEMP_RAG_SYS_HEAT_ST | °C | TEMP_RAG_SYS_HEAT_ST | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| AKTIVTANK_GEFROREN | 0xD4DE | STAT_AKTIVTANK_GEFROREN | LV_RAG_TANK_ICE | 0/1 | LV_RAG_TANK_ICE | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | 0xD4DF | STAT_LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS_WERT | STATE_RAG_TANK_SENS | - | STATE_RAG_TANK_SENS | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_PASSIVTANK | 0xD4E1 | STAT_TEMPERATUR_PASSIVTANK_WERT | TEMP_RAG_TANK_PAS | °C | TEMP_RAG_TANK_PAS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_SIGNALZEIT_ROHWERT | 0xD4E2 | STAT_LEVELSENSOR_PASSIVTANK_SIGNALZEIT_ROHWERT_TEXT | T_PER_L_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | TEXT | T_PER_L_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | High | string[10] | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_SIGNALPERIODE_ROHWERT | 0xD4E3 | STAT_LEVELSENSOR_PASSIVTANK_SIGNALPERIODE_ROHWERT_TEXT | T_PER_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | TEXT | T_PER_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | High | string[10] | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | 0xD4E4 | STAT_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK_WERT | LF_RTL_SENS_PAS_MES_VLD_DET | - | LF_RTL_SENS_PAS_MES_VLD_DET | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT | 0xD4E5 | STAT_NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT_WERT | RAG_VOL_TANK_PAS_MAX_FILL | l | RAG_VOL_TANK_PAS_MAX_FILL | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| PASSIVTANK_VERBAUT | 0xD4E6 | STAT_PASSIVTANK_VERBAUT | LV_RAG_TANK_PAS_CPT_AVL | 0-n | LV_RAG_TANK_PAS_CPT_AVL | High | unsigned char | PASSIVTANK_VERBAUT | - | - | - | - | 22 | - | - |
| LANGZEIT_UMPUMPMENGE | 0xD4E7 | STAT_LANGZEIT_UMPUMPMENGE_WERT | RAG_VOL_TOT_TRF_PUMP | l | RAG_VOL_TOT_TRF_PUMP | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_SCR_STEUERGERAET | 0xD4E8 | STAT_TEMPERATUR_SCR_STEUERGERAET_WERT | TECU | °C | TECU | High | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| ZUSTAND_SCR_SYSTEM | 0xD4E9 | STAT_ZUSTAND_SCR_SYSTEM | STATE_ECU | 0-n | STATE_ECU | High | unsigned char | SCR_SYSTEM_ZUSTAND | - | - | - | - | 22 | - | - |
| NACHLAUF_AKTIV | 0xD4EC | STAT_NACHLAUF_AKTIV | LV_PWL_ACT | 0/1 | LV_PWL_ACT | High | unsigned char | - | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT | 0xD4EE | STAT_NACHLAUFZEIT_WERT | T_PWL_LST_DC | s | T_PWL_LST_DC | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_SEIT_MOTORSTOPP | 0xD4EF | STAT_ZEIT_SEIT_MOTORSTOPP_WERT | T_ES | min | T_ES | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_SEIT_MOTORSTART | 0xD4F0 | STAT_ZEIT_SEIT_MOTORSTART_WERT | T_AST | s | T_AST | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_1 | 0xD4F1 | STAT_TEMPERATUR_DOSIERVENTIL_1_WERT | TEMP_RDU_COIL[0] | °C | TEMP_RDU_COIL[0] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_1_GEMESSEN | 0xD4F2 | STAT_WIDERSTAND_DOSIERVENTIL_1_GEMESSEN_WERT | R_RDU_MES[0] | Ohm | R_RDU_MES[0] | High | unsigned int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_1_OFFSET_ROHWERT | 0xD4F3 | STAT_WIDERSTAND_DOSIERVENTIL_1_ROHWERT_WERT | R_RAW_RDU_PIN_CBL[0] | Ohm | R_RAW_RDU_PIN_CBL[0] | High | signed int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_1_OFFSETWERT | 0xD4F4 | STAT_WIDERSTAND_DOSIERVENTIL_1_OFFSETWERT_WERT | R_RDU_PIN_CBL[0] | Ohm | R_RDU_PIN_CBL[0] | High | signed int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| STROM_DOSIERVENTIL_1 | 0xD4F5 | STAT_STROM_DOSIERVENTIL_1_WERT | CFB_RDU[0] | mA | CFB_RDU[0] | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| TASTVERHAELTNIS_DOSIERVENTIL_1_ANFORDERUNG | 0xD4F6 | STAT_TASTVERHAELTNIS_DOSIERVENTIL_ANFORDERUNG_WERT | PWM_RAG_INJ[0] | % | PWM_RAG_INJ[0] | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| FREQUENZ_DOSIERVENTIL_1_ANFORDERUNG | 0xD4F7 | STAT_FREQUENZ_DOSIERVENTIL_1_ANFORDERUNG_WERT | FRQ_RAG_INJ[0] | Hz | FRQ_RAG_INJ[0] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| MASSENSTROM_DOSIERVENTIL_1 | 0xD4F9 | STAT_MASSENSTROM_DOSIERVENTIL_1_WERT | MFL_RAG_AVL_SCR[0] | mg/s | MFL_RAG_AVL_SCR[0] | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| LANGZEIT_GESAMTDOSIERMENGE | 0xD4FA | STAT_LANGZEIT_GESAMTDOSIERMENGE_WERT | M_RAG_CNS_TOT | mg | M_RAG_CNS_TOT | High | unsigned long | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_FEHLER | 0xD4FB | STAT_DOSIERVENTIL_1_FEHLER | LV_RDU_STUCK_DET[0] | 0/1 | LV_RDU_STUCK_DET[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| KILOMETER_AKTUELLER_DC | 0xD4FE | STAT_KILOMETER_AKTUELLER_DC_WERT | DIST_DC | km | DIST_DC_ENVD | High | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_1 | 0xD4FF | STAT_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_1_WERT | T_TOT_TEMP_RDU_OVER_MAX[0] | s | T_TOT_TEMP_RDU_OVER_MAX[0] | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPULENHEIZEN_DOSIERVENTIL_1_AKTIV | 0xD508 | STAT_SPULENHEIZEN_DOSIERVENTIL_1_AKTIV | LV_TEMP_RDU_COIL_CTL_ON[0] | 0/1 | LV_TEMP_RDU_COIL_CTL_ON[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| SPULENHEIZEN_DOSIERVENTIL_1_GEREGELT_AKTIV | 0xD509 | STAT_SPULENHEIZEN_DOSIERVENTIL_1_GEREGELT_AKTIV | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[0] | 0/1 | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LAUFZEIT_ECHO_1_KOMBI_PIEZO | 0xD6E1 | STAT_LAUFZEIT_ECHO_1_KOMBI_PIEZO_WERT | Gen3: RT_RAG_UCLS[0] Gen4: T_RT_REF_0_UCLS_SENT[0] | µs | T_RT_REF_0_UCLS_SENT[0] | High | unsigned int | - | 0.000976 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_ECHO_2_KOMBI_PIEZO | 0xD6E2 | STAT_LAUFZEIT_ECHO_2_KOMBI_PIEZO_WERT | Gen3: RT_RAG_UCLS[1] Gen4: T_RT_REF_1_UCLS_SENT[0] | µs | T_RT_REF_1_UCLS_SENT[0] | High | unsigned long | - | 0.000976 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_1_KOMBI_PIEZO | 0xD6E5 | STAT_SIGNALGUETE_ECHO_1_KOMBI_PIEZO_WERT | Gen3: QLY_RAG_UCLS[0] Gen4: QLY_REF_0_UCLS_SENT[0] | - | QLY_REF_0_UCLS_SENT[0] | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_2_KOMBI_PIEZO | 0xD6E6 | STAT_SIGNALGUETE_ECHO_2_KOMBI_PIEZO_WERT | Gen3: QLY_RAG_UCLS[1] Gen4: QLY_REF_1_UCLS_SENT[0] | - | QLY_REF_1_UCLS_SENT[0] | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_REHEATING | 0xD6E8 | STAT_ZEIT_REHEATING_WERT | T_ACT_DUR_CUR_WUP_RAG_HEAT | s | T_ACT_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_PASSIVTANK_ROHWERT | 0xD6EA | STAT_FUELLSTAND_PASSIVTANK_ROHWERT_WERT | RTL_TANK_SENS_RAW [0] | mm | RTL_TANK_SENS_RAW[0] | High | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_RELATIV | 0xD6EB | STAT_FUELLMENGE_PASSIVTANK_RELATIV_WERT | RAG_VOL_TANK_PAS_PERC | % | RAG_VOL_TANK_PAS_PERC | High | unsigned char | - | 1.0 | 2.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_ROHWERT | 0xD6EC | STAT_FUELLMENGE_PASSIVTANK_ROHWERT_WERT | RTL_CONT_SENS_TANK_PAS | l | RTL_CONT_SENS_TANK_PAS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | 0xD6ED | STAT_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT_WERT | RTL_VOL_SENS_PAS_FIL[0] | l | RTL_VOL_SENS_PAS_FIL[0] | High | unsigned int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | 0xD6EF | STAT_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT_WERT | RTL_VOL_SENS_PAS_FIL[1] | l | RTL_VOL_SENS_PAS_FIL[1] | High | unsigned int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| ERSTBEFUELLUNGSSTATUS | 0xD6F0 | STAT_ERSTBEFUELLUNGSSTATUS | LV_RAG_REAC_FILL_FIRST_CMPL | 0/1 | LV_RAG_REAC_FILL_FIRST_CMPL | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LERNWERT_FOERDERPUMPE | 0xD6F2 | STAT_LERNWERT_FOERDERPUMPE_WERT | RAG_VOL_PUMP_STK_FIL | µl | RAG_VOL_PUMP_STK_FIL | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_1_MAXIMAL | 0xD6F3 | STAT_TEMPERATUR_DOSIERVENTIL_1_MAXIMAL_WERT | TEMP_RDU_COIL_MES_MAX[0] | °C | TEMP_RDU_COIL_MES_MAX[0] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| PRODUKTIONSDATUM_LQS | 0xD6F7 | STAT_PRODUKTIONSDATUM_LQS_WERT | Enthält Produktionsjahr, -Woche und -Tag des Level-Quality-Sensors. | HEX | DATA_PROD_NR_UCLS | High | unsigned int | - | - | - | - | - | 22 | - | - |
| PRODUKTIONSNUMMER_LQS | 0xD6F8 | STAT_PRODUKTIONSNUMMER_LQS_DATA | Enthält die eindeutige Produktionsnummer des Level-Quality-Sensors. | DATA | DATA_SRL_NR_BYTE_UCLS | High | data[8] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UMDREHUNGEN_FOERDERPUMPE_LANGZEIT | 0xD6F9 | STAT_UMDREHUNGEN_FOERDERPUMPE_LANGZEIT_WERT | NR_RAG_PUMP_ROT_TOT | - | NR_RAG_PUMP_ROT_TOT | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUZEIT_MAXIMAL_MSA | 0xD7C0 | STAT_AUFTAUZEIT_MAXIMAL_MSA_WERT | T_MAX_DUR_CUR_WUP_RAG_HEAT_STST | s | T_MAX_DUR_CUR_WUP_RAG_HEAT_STST | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_SUMME_NACHFUELLMENGE | 0xD7C1 | STAT_CDM2_SUMME_NACHFUELLMENGE_WERT | RAG_VOL_FILL_SUM_CNS_ERR | l | RAG_VOL_FILL_SUM_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_FOERDERPUMPE | 0xD7C2 | STAT_TEMPERATUR_FOERDERPUMPE_WERT | TEMP_RAG_PUMP_MDL | °C | TEMP_RAG_PUMP_MDL | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_FOERDERPUMPE_ZU_HOCH | 0xD7C3 | STAT_TEMPERATUR_FOERDERPUMPE_ZU_HOCH | LV_TEMP_RAG_SYS_OVER_HEAT | 0/1 | LV_TEMP_RAG_SYS_OVER_HEAT | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | 0xD7C4 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_WERT | VOL_PUMP_STK_STND_FIL_CNS_ERR | µl | VOL_PUMP_STK_STND_FIL_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | 0xD7C5 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_WERT | VOL_PUMP_STK_STND_FIRST_CNS_ERR | µl | VOL_PUMP_STK_STND_FIRST_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | 0xD7C6 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_WERT | VOL_PUMP_STK_STND_REF_CNS_ERR | µl | VOL_PUMP_STK_STND_REF_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKREGLER_INTEGRAL_ANTEIL | 0xD7C7 | STAT_DRUCKREGLER_INTEGRAL_ANTEIL_WERT | VFL_RAG_PUMP_I_CLL_CTL, [Mikroliter/Sekunde] | µl/s | VFL_RAG_PUMP_I_CLL_CTL | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOFTWARE_VERSION_LQS | 0xD7CA | STAT_SOFTWARE_VERSION_LQS_TEXT | DATA_SW_VERS_CAL_IDF_UCLS[0..3] | TEXT | DATA_SW_VERS_CAL_IDF_UCLS[0..3] | High | string[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_DOSIERVENTIL_1_MASSE_AKTUELLER_DC | 0xD7CE | STAT_SCHUTZDOSIERUNG_DOSIERVENTIL_1_MASSE_AKTUELLER_DC_WERT | MASS_RAG_TEMP_RDU_PROT_DC | g | MASS_RAG_TEMP_RDU_PROT_DC | High | unsigned int | - | 0.02 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_DOSIERVENTIL_1_ANZAHL_AKTUELLER_DC | 0xD7CF | STAT_SCHUTZDOSIERUNG_DOSIERVENTIL_1_ANZAHL_AKTUELLER_DC_WERT | CTR_RAG_TEMP_RDU_PROT_DC | - | CTR_RAG_TEMP_RDU_PROT_DC[0] | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_NCAT_NUMERATOR | 0xD7D0 | STAT_RBM_NCAT_NUMERATOR_WERT | CTR_MOD_9_RBM[4] | - | Icsp_Dem_Iumpr_RatGrpNum[NCAT] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_NCAT_DENOMINATOR | 0xD7D1 | STAT_RBM_NCAT_DENOMINATOR_WERT | CTR_MOD_9_RBM[5] | - | Icsp_Dem_Iumpr_RatGrpDen[NCAT] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GESAMTDOSIERMENGE_AKTUELLER_DC | 0xD7D4 | STAT_GESAMTDOSIERMENGE_AKTUELLER_DC_WERT | M_RAG_CNS_DC | g | M_RAG_CNS_DC | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_PWM_SOLL | 0xD7D5 | STAT_FOERDERPUMPE_PWM_SOLL_WERT | PWM_EM_DUCY | % | PWM_EM_DUCY | High | unsigned int | - | 1.0 | 163.84 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_PWM_IST | 0xD7D6 | STAT_FOERDERPUMPE_PWM_IST_WERT | PWM_RAG_PUMP | % | PWM_RAG_PUMP | High | unsigned int | - | 1.0 | 163.84 | 0.0 | - | 22 | - | - |
| CDM2_VERBRAUCH_IST_ZU_SOLL | 0xD7D8 | STAT_CDM2_VERBRAUCH_IST_ZU_SOLL_WERT | RAG_VOL_DIF_CNS_ERR_PERC | % | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_FUELLMENGE_AKTIVTANK_ENDE | 0xD7DA | STAT_CDM2_FUELLMENGE_AKTIVTANK_ENDE_WERT | RTL_VOL_FIL_HLD_END_CNS_ERR | l | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_FUELLMENGE_AKTIVTANK_ANFANG | 0xD7DB | STAT_CDM2_FUELLMENGE_AKTIVTANK_ANFANG_WERT | RTL_VOL_FIL_HLD_ST_CNS_ERR | l | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DRUCKSENSOR_CROSSCHECK | 0xD7DE | STAT_TEMPERATUR_DRUCKSENSOR_CROSSCHECK_WERT | TEMP_PRS_RAG_SENS_HLD_CRCH | °C | TEMP_PRS_RAG_SENS_HLD_CRCH | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | 0xD7DF | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK_WERT | TEMP_RAG_TANK_SENS_HLD_CRCH | °C | TEMP_RAG_TANK_SENS_HLD_CRCH | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_1_CROSSCHECK | 0xD7EE | STAT_TEMPERATUR_DOSIERVENTIL_1_CROSSCHECK_WERT | TEMP_RDU_COIL_MES_HLD_CRCH[0] | °C | TEMP_RDU_COIL_MES_HLD_CRCH[0] | High | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_DIAGNOSE | 0xD7EF | STAT_LECKAGE_DIAGNOSE_WERT | VFL_RAG_LEAK_DIAG, [Mikroliter/Sekunde] | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_GEMESSEN | 0xD810 | STAT_LECKAGE_GEMESSEN_WERT | VFL_LEAK_RAG_MES, [Mikroliter/Sekunde] | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VOLUMENSTROM_ANGEFORDERT | 0xD812 | STAT_VOLUMENSTROM_ANGEFORDERT_WERT | VFL_RAG_PUMP_PCTL, [Mikroliter/Sekunde] | µl/s | VFL_RAG_PUMP_PCTL | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VERBRAUCH_IST_ZU_SOLL | 0xD813 | STAT_CDM1_VERBRAUCH_IST_ZU_SOLL_WERT | VOL_PUMP_STK_DIF_CNS_ERR_PERC | % | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_LOGIK | 0xD816 | STAT_SPANNUNG_KLEMME_30B_LOGIK_WERT | VP_PWR[0] | V | VP_PWR[0] | High | signed int | - | 1.0 | 51.2 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30_HEIZER | 0xD818 | STAT_SPANNUNG_KLEMME_30_HEIZER_WERT | VP_PWR[1] | V | VP_PWR[1] | High | signed int | - | 1.0 | 51.2 | 0.0 | - | 22 | - | - |
| SERIENNUMMER_VOLLSTAENDIG | 0xD820 | STAT_SERIENNUMMER_VOLLSTAENDIG_DATA | DATA_MATRIX_CODE_PCB Vollständige eindeutige 16-stellige Seriennummer des SCR-Steuergeräts. | DATA | DATA_MATRIX_CODE_PCB | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_VERBRAUCH_SUMME | 0xD823 | STAT_CDM2_VERBRAUCH_SUMME_WERT | RAG_VOL_INJ_SUM_INT_CNS_ERR | µl | RAG_VOL_INJ_SUM_INT_CNS_ERR | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| ZAEHLER_DC_RBM | 0xD824 | STAT_ZAEHLER_DC_RBM_WERT | CTR_CDN_OBD_RBM | - | Icsp_Dem_Iumpr_CtrGlobalDen | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZAEHLER_DC | 0xD825 | STAT_ZAEHLER_DC_WERT | CTR_IGK_CYC_RBM | - | Icsp_Dem_Iumpr_CtrCycIgn | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_DATEN_FAST_CHANNEL | 0xD826 | STAT_DRUCKSENSOR_DATEN_FAST_CHANNEL_WERT | DATA_CHN_SENS_SENT[0][UREA_PRS] | - | DATA_CHN_SENS_SENT[0][UREA_PRS] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_FEHLER | 0xD827 | STAT_DRUCKSENSOR_FEHLER_WERT | DATA_ERR_SRL_SENS_SENT[UREA_PRS] | - | DATA_ERR_SRL_SENS_SENT[UREA_PRS] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_FUELLSTANDSBASIERT_BITFELD | 0xD828 | STAT_LECKAGE_FUELLSTANDSBASIERT_BITFELD_WERT | LF_RTL_CNS_LEAK_DIAG_ENA_CDN | - | LF_RTL_CNS_LEAK_DIAG_ENA_CDN | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SUMME_DRUCKSTUFEN_DOSIERVENTIL_1_BLOCK | 0xD82D | STAT_SUMME_DRUCKSTUFEN_DOSIERVENTIL_1_BLOCK_WERT | PRS_DIF_SUM_INJ_BLOCK[0] | bar | PRS_DIF_SUM_INJ_BLOCK[0] | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| CDM2_HIGH_RELATIV | 0xD84E | STAT_CDM2_HIGH_RELATIV_WERT | RAG_CNS_H_RTL_PERC_SAE | % | RAG_CNS_H_RTL_PERC_SAE | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_LOW_RELATIV | 0xD84F | STAT_CDM2_LOW_RELATIV_WERT | RAG_CNS_L_RTL_PERC_SAE | % | RAG_CNS_L_RTL_PERC_SAE | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | 0xD854 | STAT_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR_WERT | RAG_INJ_CNS_WIN_SUM_LEAK_DIAG | l | RAG_INJ_CNS_WIN_SUM_LEAK_DIAG | High | unsigned long | - | 0.00014901 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | 0xD855 | STAT_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG_WERT | RAG_VOL_DIF_SUM_CNS_ERR | l | RAG_VOL_DIF_SUM_CNS_ERR | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | 0xD856 | STAT_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSERFASSUNG_WERT | RAG_VOL_DIF_WIN_SUM_LEAK_DIAG | l | RAG_VOL_DIF_WIN_SUM_LEAK_DIAG | High | unsigned long | - | 0.00014901 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | 0xD857 | STAT_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR_WERT | RAG_VOL_INJ_SUM_CNS_ERR | l | RAG_VOL_INJ_SUM_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | 0xD858 | STAT_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG_WERT | RTL_DIF_SYM_FAST_CNS_ERR | l | RTL_DIF_SYM_FAST_CNS_ERR | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEMSTEIFIGKEIT_BERECHNET | 0xD8F6 | STAT_SYSTEMSTEIFIGKEIT_BERECHNET_WERT | STFN_RAG_SYS | - | STFN_RAG_SYS | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_LECKAGE_ADAPTIERT | 0xD8F7 | STAT_SYSTEM_LECKAGE_ADAPTIERT_WERT | VFL_LEAK_RAG_AD | - | VFL_LEAK_RAG_AD | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_LECKAGE_CDM1 | 0xD8F8 | STAT_SYSTEM_LECKAGE_CDM1_WERT | VFL_RAG_LEAK_CNS_ERR | - | VFL_RAG_LEAK_CNS_ERR | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | 0xD8F9 | STAT_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG_WERT | VOL_DIF_SYM_FAST_CNS_ERR | l | VOL_DIF_SYM_FAST_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | 0xD8FA | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2_WERT | VOL_PUMP_STK_FIL_CNS_ERR | µl | VOL_PUMP_STK_FIL_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | 0xD8FB | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2_WERT | VOL_PUMP_STK_FIRST_CNS_ERR | µl | VOL_PUMP_STK_FIRST_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | 0xD8FC | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2_WERT | VOL_PUMP_STK_REF_CNS_ERR | µl | VOL_PUMP_STK_REF_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_DOSIERVENTIL_1 | 0xE2B6 | - | Test zum Steuern des 1. Dosierventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE2B6_D | - |
| STEUERN_DOSIERVENTIL_2 | 0xE2B7 | - | Test zum Steuern des 2. Dosierventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE2B7_D | - |
| STEUERN_LANGZEIT_DOSIERMENGE_1 | 0xE2B8 | - | Schreiben der Langzeit Dosiermenge 1 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2B8_D | - |
| STEUERN_LANGZEIT_DOSIERMENGE_2 | 0xE2B9 | - | Schreiben der Langzeit Dosiermenge 2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2B9_D | - |
| STEUERN_LANGZEIT_FOERDERMENGE | 0xE2BA | - | Schreiben der Langzeit Fördermenge | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2BA_D | - |
| CAN_RX_SOLL_EINSPRITZMENGE_SCR_ADDITIV_2 | 0xE2DA | STAT_CAN_RX_SOLL_EINSPRITZMENGE_SCR_ADDITIV_2_WERT | MASS_RAG_TAR_INJ_DOWN[1] | g | MASS_RAG_TAR_INJ_DOWN[1] | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_ABGASDRUCK_DOSIERVENTIL_1 | 0xE2DB | STAT_CAN_RX_ABGASDRUCK_DOSIERVENTIL_1_WERT | PRS_EG_RAG_INJ_CAN[0] | mbar | PRS_EG_RAG_INJ_CAN[0] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_ABGASDRUCK_DOSIERVENTIL_2 | 0xE2DC | STAT_CAN_RX_ABGASDRUCK_DOSIERVENTIL_2_WERT | PRS_EG_RAG_INJ_CAN[1] | mbar | PRS_EG_RAG_INJ_CAN[1] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | 0xE2DD | STAT_CAN_RX_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | STATE_CMB_ENG_DRIV | 0-n | STATE_CMB_ENG_DRIV | High | unsigned char | TAB_ST_CENG_DRV | - | - | - | - | 22 | - | - |
| CAN_TX_IST_EINSPRITZMENGE_SCR_ADDITIV_2 | 0xE2DE | STAT_CAN_TX_IST_EINSPRITZMENGE_SCR_ADDITIV_2_WERT | MASS_RAG_AVL_SCR[1] | g | MASS_RAG_AVL_SCR[1] | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_ANFORDERUNG_KUEHLUNG_DOSIERVENTIL_1 | 0xE2DF | STAT_CAN_TX_ANFORDERUNG_KUEHLUNG_DOSIERVENTIL | STATE_PWL_CWP_RDU_PROT | 0-n | STATE_PWL_CWP_RDU_PROT | High | unsigned char | TAB_RQ_COOL_DOSVA | - | - | - | - | 22 | - | - |
| CAN_TX_ANFORDERUNG_DOSIERVENTIL_1 | 0xE2E2 | STAT_CAN_TX_ANFORDERUNG_DOSIERVENTIL_1 | STATE_MFL_RAG_INJ_REQ[1] | 0-n | STATE_MFL_RAG_INJ_REQ[1] | High | unsigned char | TAB_RQ_DOSVA | - | - | - | - | 22 | - | - |
| CAN_TX_ANFORDERUNG_DOSIERVENTIL_2 | 0xE2E3 | STAT_CAN_TX_ANFORDERUNG_DOSIERVENTIL_2 | STATE_MFL_RAG_INJ_REQ[2] | 0-n | STATE_MFL_RAG_INJ_REQ[2] | High | unsigned char | TAB_RQ_DOSVA | - | - | - | - | 22 | - | - |
| AKTIVE_NICHT_LOESCHBARE_DTC_LESEN | 0xE306 | - | kein Label | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE306_D |
| FOERDERPUMPE_ADBLUE_FEHLER | 0xE308 | STAT_FOERDERPUMPE_ADBLUE_FEHLER_WERT | LF_ERR_STATE_RAG_PUMP_CTL | - | LF_ERR_STATE_RAG_PUMP_CTL | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_2 | 0xE309 | STAT_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_2_WERT | T_TOT_TEMP_RDU_OVER_MAX[1] | s | T_TOT_TEMP_RDU_OVER_MAX[1] | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_2_CROSSCHECK | 0xE30A | STAT_TEMPERATUR_DOSIERVENTIL_2_CROSSCHECK_WERT | TEMP_RDU_COIL_MES_HLD_CRCH[1] | °C | TEMP_RDU_COIL_MES_HLD_CRCH[1] | High | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_2 | 0xE30B | STAT_TEMPERATUR_DOSIERVENTIL_2_WERT | TEMP_RDU_COIL[1] | °C | TEMP_RDU_COIL[1] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_2_GEMESSEN | 0xE30C | STAT_WIDERSTAND_DOSIERVENTIL_2_GEMESSEN_WERT | R_RDU_MES[1] | Ohm | R_RDU_MES[1] | High | unsigned int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_2_OFFSET_ROHWERT | 0xE30D | STAT_WIDERSTAND_DOSIERVENTIL_2_OFFSET_ROHWERT_WERT | R_RAW_RDU_PIN_CBL[1] | Ohm | R_RAW_RDU_PIN_CBL[1] | High | signed int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_2_OFFSETWERT | 0xE30E | STAT_WIDERSTAND_DOSIERVENTIL_2_OFFSETWERT_WERT | R_RDU_PIN_CBL[1] | Ohm | R_RDU_PIN_CBL[1] | High | signed int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| STROM_DOSIERVENTIL_2 | 0xE30F | STAT_STROM_DOSIERVENTIL_2_WERT | CFB_RDU[1] | mA | CFB_RDU[1] | High | unsigned int | - | 1.0 | 1023.99999 | 0.0 | - | 22 | - | - |
| TASTVERHAELTNIS_DOSIERVENTIL_2_ANFORDERUNG | 0xE312 | STAT_TASTVERHAELTNIS_DOSIERVENTIL_2_ANFORDERUNG_WERT | PWM_RAG_INJ[1] | % | PWM_RAG_INJ[1] | High | unsigned int | - | 1.0 | 163.84 | 0.0 | - | 22 | - | - |
| FREQUENZ_DOSIERVENTIL_2_ANFORDERUNG | 0xE313 | STAT_FREQUENZ_DOSIERVENTIL_2_ANFORDERUNG_WERT | FRQ_RAG_INJ[1] | Hz | FRQ_RAG_INJ[1] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| MASSENSTROM_DOSIERVENTIL_2 | 0xE314 | STAT_MASSENSTROM_DOSIERVENTIL_2_WERT | MFL_RAG_AVL_SCR[1]  | mg/s | MFL_RAG_AVL_SCR | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_FEHLER | 0xE315 | STAT_DOSIERVENTIL_2_FEHLER | LV_RDU_STUCK_DET[1] | 0/1 | LV_RDU_STUCK_DET[1] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| SPULENHEIZEN_DOSIERVENTIL_2_AKTIV | 0xE316 | STAT_SPULENHEIZEN_DOSIERVENTIL_2_AKTIV | LV_TEMP_RDU_COIL_CTL_ON[1] | 0/1 | LV_TEMP_RDU_COIL_CTL_ON[1] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| SPULENHEIZEN_DOSIERVENTIL_2_GEREGELT_AKTIV | 0xE317 | STAT_SPULENHEIZEN_DOSIERVENTIL_2_GEREGELT_AKTIV | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[1] | 0/1 | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[1] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_2_MAXIMAL | 0xE318 | STAT_TEMPERATUR_DOSIERVENTIL_2_MAXIMAL_WERT | TEMP_RDU_COIL_MES_MAX[1] | °C | TEMP_RDU_COIL_MES_MAX[1] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| SUMME_DRUCKSTUFEN_DOSIERVENTIL_2_BLOCK | 0xE319 | STAT_SUMME_DRUCKSTUFEN_DOSIERVENTIL_2_BLOCK_WERT | PRS_DIF_SUM_INJ_BLOCK[1] | bar | - | High | signed int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_2 | 0xE31A | STAT_ZEITDAUER_SPULENHEIZEN_DOSIERVENTIL_2_WERT | T_TOT_RDU_ANST_HEAT[0] | s | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERMENGE_DOSIERVENTIL_1_AKTUELLER_DC | 0xE31B | STAT_DOSIERMENGE_DOSIERVENTIL_1_AKTUELLER_DC_WERT | M_RAG_CNS_DC_IND[0] | mg | M_RAG_CNS_DC_IND[0] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERMENGE_DOSIERVENTIL_2_AKTUELLER_DC | 0xE31C | STAT_DOSIERMENGE_DOSIERVENTIL_2_AKTUELLER_DC_WERT | M_RAG_CNS_DC_IND[1] | mg | M_RAG_CNS_DC_IND[1] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_STRECKENENTPRELLTE_DIAGNOSEN_GUTPRUEFUNG | 0xE31E | STAT_LAUFZEIT_STRECKENENTPRELLTE_DIAGNOSEN_GUTPRUEFUNG_WERT | T_RAG_SYS_CHK_SRV_DIST | s | T_RAG_SYS_CHK_SRV_DIST | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| MITTLERES_PUMPENVOLUMEN_0 | 0xE323 | STAT_MITTLERES_PUMPENVOLUMEN_0_WERT | RAG_VOL_PUMP_STK_MV[0] | µl | RAG_VOL_PUMP_STK_MV[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| MITTLERES_PUMPENVOLUMEN_1 | 0xE324 | STAT_MITTLERES_PUMPENVOLUMEN_1_WERT | RAG_VOL_PUMP_STK_MV[1] | µl | RAG_VOL_PUMP_STK_MV[1] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ANZAHL_ADAPTIONEN_FOERDERPUMPE_LECKAGE | 0xE325 | STAT_ANZAHL_ADAPTIONEN_FOERDERPUMPE_LECKAGE_WERT | CTR_POSN_AD_RAG_LEAK_TOT  | - | CTR_POSN_AD_RAG_LEAK_TOT | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_DOSIERVENTIL_2_MASSE_AKTUELLER_DC | 0xE349 | STAT_SCHUTZDOSIERUNG_DOSIERVENTIL_2_MASSE_AKTUELLER_DC_WERT | MASS_RAG_TEMP_RDU_PROT_DC[1] | g | MASS_RAG_TEMP_RDU_PROT_DC[1] | High | unsigned int | - | 0.02 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_DOSIERVENTIL_2_ANZAHL_AKTUELLER_DC | 0xE34A | STAT_SCHUTZDOSIERUNG_DOSIERVENTIL_2_ANZAHL_AKTUELLER_DC_WERT | CTR_RAG_TEMP_RDU_PROT_DC[1] | - | CTR_RAG_TEMP_RDU_PROT_DC[1] | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN | 0xE38B | STAT_GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN_WERT | Gen3: M_RAG_CNS_DC_TOT_ENVD Gen4: M_RAG_CNS_DC_TOT | mg | M_RAG_CNS_DC_TOT | High | unsigned long | - | 16.0 | 1.0 | 0.0 | - | 22 | - | - |
| ANZAHL_DOSIERVENTILE | 0xE39F | STAT_ANZAHL_DOSIERVENTILE_WERT | DNC_NR_RAG_INJ | - | DNC_NR_RAG_INJ | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LANGZEIT_DOSIERMENGE_DOSIERVENTIL_1 | 0xE3A2 | STAT_LANGZEIT_DOSIERMENGE_DOSIERVENTIL_1_WERT | M_RAG_INJ_CNS_TOT_IND[0] | g | M_RAG_INJ_CNS_TOT_IND[0] | High | unsigned long | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| LANGZEIT_DOSIERMENGE_DOSIERVENTIL_2 | 0xE3A3 | STAT_LANGZEIT_DOSIERMENGE_DOSIERVENTIL_2_WERT | M_RAG_INJ_CNS_TOT_IND[1] | g | M_RAG_INJ_CNS_TOT_IND[1] | High | unsigned long | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| MITTLERER_MASSENSTROM_SEIT_AUFTAUEN_AKTUELLER_DC | 0xE3A8 | STAT_MITTLERER_MASSENSTROM_SEIT_AUFTAUEN_AKTUELLER_DC_WERT | MFL_CNS_DC_TOT_LQ_ICE_MV | mg/s | MFL_CNS_DC_TOT_LQ_ICE_MV | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_SEIT_AKTIVTANK_GEFROREN_AKTUELLER_DC | 0xE3A9 | STAT_ZEIT_SEIT_AKTIVTANK_GEFROREN_AKTUELLER_DC_WERT | T_TANK_LQ_ICE_SET | s | T_TANK_LQ_ICE_SET | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| NACHHALTIGKEITSFUNKTION_AKTIV_DAUER | 0xE3AA | STAT_NACHHALTIGKEITSFUNKTION_AKTIV_DAUER_WERT | T_MFL_RAG_LIM_COLD_ACT | s | T_MFL_RAG_LIM_COLD_ACT | High | unsigned long | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| NACHHALTIGKEITSFUNKTION_AKTIV_ANZAHL_DC | 0xE3AB | STAT_NACHHALTIGKEITSFUNKTION_AKTIV_ANZAHL_DC_WERT | CTR_MFL_RAG_LIM_COLD_ACT_DC | - | CTR_MFL_RAG_LIM_COLD_ACT_DC | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_STANDHEIZUNG | 0xE3AC | STAT_CAN_RX_STATUS_STANDHEIZUNG | STATE_ICH_PARK_HEAT | 0-n | STATE_ICH_PARK_HEAT | High | unsigned char | TAB_STATUS_STANDHEIZUNG | - | - | - | - | 22 | - | - |
| CAN_RX_TEMPERATUR_AUSSEN_PLAUSIBILISIERT | 0xE3AD | STAT_CAN_RX_TEMPERATUR_AUSSEN_PLAUSIBILISIERT_WERT | TAA_PLAUS | °C | TAA_PLAUS | High | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22 | - | - |
| RATIOS_NICHTKONTINUIERLICHE_DIAGNOSEN_1 | 0xE3AE | STAT_RATIOS_NICHTKONTINUIERLICHE_DIAGNOSEN_1_DATA | ACTION_ERRM_IumprRatiosDiagAll(0,OUT <PRM_DTC_RBM []>) | DATA | - | High | data[175] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RATIOS_NICHTKONTINUIERLICHE_DIAGNOSEN_2 | 0xE3AF | STAT_RATIOS_NICHTKONTINUIERLICHE_DIAGNOSEN_2_DATA | ACTION_ERRM_IumprRatiosDiagAll(1,OUT <PRM_DTC_RBM []>) | DATA | - | High | data[175] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HEIZUNG_SPANNUNG_HIGH_SIDE | 0xE41A | STAT_HEIZUNG_SPANNUNG_HIGH_SIDE_WERT | V_RAG_HEAT_H_SIDE_V_FB_PIN | V | V_RAG_HEAT_H_SIDE_V_FB_PIN | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AKTIVTANKHEIZUNG_SPANNUNG_LOW_SIDE | 0xE41B | STAT_AKTIVTANKHEIZUNG_SPANNUNG_LOW_SIDE_WERT | V_RAG_HEAT_L_SIDE_V_FB_PIN[0] | V | V_RAG_HEAT_L_SIDE_V_FB_PIN[0] | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DOSIERLEITUNGSHEIZUNG_SPANNUNG_LOW_SIDE | 0xE41C | STAT_DOSIERLEITUNGSHEIZUNG_SPANNUNG_LOW_SIDE_WERT | V_RAG_HEAT_L_SIDE_V_FB_PIN[1] | V | V_RAG_HEAT_L_SIDE_V_FB_PIN[1] | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HEIZUNG_STROM_SCHALTER | 0xE41D | STAT_HEIZUNG_STROM_SCHALTER_WERT | CFB_RAG_HEAT_AUX_SWI | A | CFB_RAG_HEAT_AUX_SWI | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK | 0xE439 | STAT_FUELLMENGE_AKTIVTANK_WERT | RAG_VOL_TANK | l | RAG_VOL_TANK | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_INDEX_DIREKT_PIEZO | 0xE43A | STAT_LAUFZEIT_INDEX_DIREKT_PIEZO_WERT | IDX_RT_RTL_0_SEL | - | IDX_RT_RTL_0_SEL | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_DIREKT_PIEZO | 0xE43B | STAT_LAUFZEIT_DIREKT_PIEZO_WERT | T_RT_RTL_0_FIL | µs | T_RT_RTL_0_FIL | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_DIREKT_PIEZO | 0xE43C | STAT_AMPLITUDE_DIREKT_PIEZO_WERT | FAC_AMPL_RTL_0_SEL | - | FAC_AMPL_RTL_0_SEL | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_DIREKT_PIEZO | 0xE43D | STAT_SIGNALGUETE_DIREKT_PIEZO_WERT | QLY_RTL_0_SEL | - | QLY_RTL_0_SEL | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_HAUPT_FRUEH | 0xE43E | STAT_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_HAUPT_FRUEH_WERT | RATIO_T_RT_RTL_0_FIL[0] | - | RATIO_T_RT_RTL_0_FIL[0] | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_DOPPEL_HAUPT | 0xE43F | STAT_LAUFZEIT_DIREKT_PIEZO_VERHAELTNIS_ECHO_DOPPEL_HAUPT_WERT | RATIO_T_RT_RTL_0_FIL[1] | - | RATIO_T_RT_RTL_0_FIL[1] | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | 0xE443 | STAT_DOSIERVENTIL_1_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH_WERT | CTR_RAG_PD_COMP_VLD_0 | - | CTR_RAG_PD_COMP_VLD_0 | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH | 0xE444 | STAT_DOSIERVENTIL_2_HAEUFIGKEIT_DRUCKSTUFENVERGLEICH_WERT | CTR_RAG_PD_COMP_VLD_1 | - | CTR_RAG_PD_COMP_VLD_1 | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN | 0xE483 | STAT_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN_WERT | M_RAG_DIF_PERC_VFL_RDU_ERR[0] | % | M_RAG_DIF_PERC_VFL_RDU_ERR[0] | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN | 0xE484 | STAT_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN_WERT | M_RAG_DIF_PERC_VFL_RDU_ERR[1] | % | M_RAG_DIF_PERC_VFL_RDU_ERR[1] | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN_TA | 0xE485 | STAT_DOSIERVENTIL_1_MASSENABWEICHUNG_DRUCKSTUFEN_TA_WERT | M_RAG_DIF_PERC_VFL_RDU_ERR[2] | % | M_RAG_DIF_PERC_VFL_RDU_ERR[2] | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN_TA | 0xE486 | STAT_DOSIERVENTIL_2_MASSENABWEICHUNG_DRUCKSTUFEN_TA_WERT | M_RAG_DIF_PERC_VFL_RDU_ERR[3] | % | M_RAG_DIF_PERC_VFL_RDU_ERR[3] | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_MASSENABWEICHUNG_DRUCKSTUFEN | 0xE487 | STAT_SYSTEM_MASSENABWEICHUNG_DRUCKSTUFEN_WERT | M_RAG_DIF_PERC_VFL_RDU_ERR[4] | % | M_RAG_DIF_PERC_VFL_RDU_ERR[4] | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN | 0xE489 | STAT_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN_WERT | M_RAG_MES_VFL_RDU_ERR[0] | mg | M_RAG_MES_VFL_RDU_ERR[0] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN | 0xE48A | STAT_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN_WERT | M_RAG_MES_VFL_RDU_ERR[1] | mg | M_RAG_MES_VFL_RDU_ERR[1] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN_TA | 0xE48B | STAT_DOSIERVENTIL_1_MASSE_GEMESSEN_DRUCKSTUFEN_TA_WERT | M_RAG_MES_VFL_RDU_ERR[2] | mg | M_RAG_MES_VFL_RDU_ERR[2] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN_TA | 0xE48C | STAT_DOSIERVENTIL_2_MASSE_GEMESSEN_DRUCKSTUFEN_TA_WERT | M_RAG_MES_VFL_RDU_ERR[3] | mg | M_RAG_MES_VFL_RDU_ERR[3] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_MASSE_GEMESSEN_DRUCKSTUFEN | 0xE48D | STAT_SYSTEM_MASSE_GEMESSEN_DRUCKSTUFEN_WERT | M_RAG_MES_VFL_RDU_ERR[4] | mg | M_RAG_MES_VFL_RDU_ERR[4] | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_DOSIERABWEICHUNG_GEMITTELT | 0xE48E | STAT_DOSIERVENTIL_1_DOSIERABWEICHUNG_GEMITTELT_WERT | RAG_CNS_ERR_DIF_RDU_0 | % | RAG_CNS_ERR_DIF_RDU_0 | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_DOSIERABWEICHUNG_GEMITTELT | 0xE48F | STAT_DOSIERVENTIL_2_DOSIERABWEICHUNG_GEMITTELT_WERT | RAG_CNS_ERR_DIF_RDU_1 | % | RAG_CNS_ERR_DIF_RDU_1 | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_DOSIERABWEICHUNG_GEMITTELT | 0xE49D | STAT_SYSTEM_DOSIERABWEICHUNG_GEMITTELT_WERT | RAG_CNS_ERR_DIF_SYS | % | RAG_CNS_ERR_DIF_SYS | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_1_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | 0xE49E | STAT_DOSIERVENTIL_1_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH_WERT | RATIO_RAG_PD_COMP_0 | % | RATIO_RAG_PD_COMP_0 | High | signed int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_2_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH | 0xE49F | STAT_DOSIERVENTIL_2_DOSIERABWEICHUNG_DRUCKSTUFENVERGLEICH_WERT | RATIO_RAG_PD_COMP_1 | % | RATIO_RAG_PD_COMP_1 | High | signed int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_INITIALISIERUNG_FILTER_WERT_DME

| WERT | TEXT |
| --- | --- |
| 0x0 | CT1 Filterwert nicht initialisiert |
| 0x1 | CT1 Filterwert wurde initialisiert |
| 0x3 | Signal ungültig |
| 0xFF | Wert ungültig |

### STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0 | CT1 Filterwert nicht initialisiert |
| 0x1 | CT1 Filterwert wurde initialisiert |
| 0x3 | Signal ungültig |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### STATUS_SPERRE_FEHLERSPEICHER_FZM

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehlerspeichersperre aktiv |
| 0x01 | Fehlerspeichersperre inaktiv |
| 0xFF | Wert ungültig |

### STATUS_ZUSTAND_FAHRZEUG

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |
| 0x1 | Parken_BN_niO |
| 0x2 | Parken_BN_iO |
| 0x3 | Standfunktionen_Kunde_nicht_im_FZG |
| 0x5 | Wohnen |
| 0x7 | Pruefen_Analyse_Diagnose |
| 0x8 | Fahrbereitschaft_herstellen |
| 0xA | Fahren |
| 0xC | Fahrbereitschaft_beenden |
| 0xD | reserviert |
| 0xE | reserviert |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal gültig |
| 0x01 | Fehler und Ersatzwert |
| 0x03 | Motorabstellzeit nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert gültig |
| 0x01 | Messung ungültig und Ersatzwert |
| 0x02 | Sensorfehler und Ersatzwert |
| 0xFF | Wert ungültig |

### TAB_DOSIERMENGENTEST_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Eindosierung nicht erlaubt |
| 0x5 | Freigabe für Eindosierung nicht mehr vorhanden |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_DRUCKAUFBAU_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau kann nur begrenzt erfolgen |
| 0x5 | Freigabe für Druckaufbau nicht mehr vorhanden |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | frei |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_HEIZUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Heizerschutz aktiv |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_LECKAGEERKENNUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau nicht erfolgt. |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_RQ_COOL_DOSVA

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Stufe 1: Mittlere Anfordung |
| 0x02 | Stufe 2: Hohe Anforderung |
| 0x03 | Fehler erkannt |
| 0xFF | Wert ungültig |

### TAB_RQ_DOSVA

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung, Diagnosen durchgelaufen |
| 0x01 | Dosieranforderung für Diagnosezwecke |
| 0x03 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_RUECKSAUGEN_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau nicht OK, Systemdruck zu niedrig |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | frei |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_STATE_DEAKTIVIERUNG_SCHUTZDOSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Schutzdosierung aktiv |
| 0x01 | Schutzdosierung deaktiviert |
| 0xFF | Wert ungültig |

### TAB_STATE_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x0 | Montagemodus nicht aktiv |
| 0x1 | Montagemodus aktiv |
| 0xFF | Wert ungültig |

### TAB_STATE_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x0 | Routine noch nicht gestartet |
| 0x1 | Start-/Ansteuerbedingung nicht erfüllt |
| 0x2 | Parameter ungültig |
| 0x3 | Warten auf Freigabe |
| 0x5 | Routine läuft |
| 0x7 | Routine abgebrochen (kein Zyklusflag/ Readiness gesetzt) |
| 0x8 | Routine vollständig durchlaufen und kein Fehler erkannt |
| 0x9 | Routine vollständig durchlaufen und Fehler erkannt. |
| 0xFF | Wert ungültig |

### TAB_STATUS_STANDHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Standheizung inaktiv |
| 2 | Standheizung aktiv |
| 3 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_ST_CENG_DRV

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor startet |
| 2 | Motor läuft |
| 3 | Motor im Auslauf |
| 13 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 14 | Reserviert |
| 15 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_TRANSFERPUMPE_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Füllstandssignal ungültig |
| 0x5 | Aktivtank voll / Passivtank leer |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_TROCKENTAKTUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Systemdruck zu hoch |
| 0x5 | Unerwartete Änderung des Systemdrucks oder der Bedingungen für Öffnen des Dosierventils |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### VERBRAUCHER_KLASSE_FEPM

| WERT | TEXT |
| --- | --- |
| 0x1 | Klasse 1 |
| 0x2 | Klasse 2 |
| 0x3 | Klasse 3 |
| 0x4 | Klasse 4 |
| 0x7 | Signal ungültig |
