# CHC01.prg

## General

|  |  |
| --- | --- |
| File | CHC01.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 87 |
| Origin | BMW EF-422 Gebhardt |
| Revision | 4.001 |
| Author | CONTI-TEMIC EF-422 Postemer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Combined Height Control |  |  |
| ORIGIN | string | BMW EF-422 Gebhardt |  |  |
| REVISION | string | 4.001 |  |  |
| AUTHOR | string | CONTI-TEMIC EF-422 Postemer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.990 |  |  |
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

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

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

### ARG_0XA460_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTE | + | - | 0-n | high | unsigned char | - | TAB_KOMPONENTE_IN_DRUCKSPEICHER | - | - | - | - | - | Komponente, die befüllt werden soll. |
| BEFUELLMODUS | + | - | 0-n | high | unsigned char | - | TAB_FILL_DEFLATE_MODE | - | - | - | - | - | Befüllmodus |

### ARG_0XA461_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTE | + | - | 0-n | high | unsigned char | - | TAB_KOMPONENTE_IN_DRUCKSPEICHER | - | - | - | - | - | Komponente, die befüllt werden soll. |
| BEFUELLMODUS | + | - | 0-n | high | unsigned char | - | TAB_FILL_DEFLATE_MODE | - | - | - | - | - | Befüllmodus |

### ARG_0XA462_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTE | + | - | 0-n | high | unsigned char | - | TAB_KOMPONENTE_IN_UMGEBUNG | - | - | - | - | - | Komponente, die abgelassen werden soll werden soll. |
| ABLASSMODE | + | - | 0-n | high | unsigned char | - | TAB_FILL_DEFLATE_MODE | - | - | - | - | - | Ablassmode |

### ARG_0XA463_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEFUELLDRUCK_VORDERACHSE | + | - | bar | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Befülldruck Vorderachse. Auflösung: 0,1 bar |
| BEFUELLDRUCK_HINTERACHSE | + | - | bar | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Befülldruck Hinterachse. Auflösung: 0,1 bar |
| BEFUELLDRUCK_DRUCKSPEICHER | + | - | bar | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | Befülldruck Druckspeicher. Auflösung: 0,1 bar |

### ARG_0XA465_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTE | + | - | 0-n | high | unsigned char | - | TAB_KOMPONENTE | - | - | - | - | - | Komponente, in der die Druckmessung gestartet werden soll. |

### ARG_0XD8FD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NIVEAU_WERT | 0-n | high | unsigned char | - | TAB_CHC_VEHICLE_HEIGHT | - | - | - | - | - | Steuern des Fahrzeugniveaus mit Werten gemäß Tabelle. |

### ARG_0XDB77_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMPONENTENANSTEUERUNG | 0-n | - | unsigned int | - | TAB_KOMPONENTENANSTEUERUNG_CONTI | - | - | - | - | - | Komponentenansteuerung - 0- AUS, 1- EIN, 2- Fill to amb, 3- Füllen mit dem Kompressor, 4- Füllen mit dem Druckspeicher, 5- Entleeren in den Druckspeicher |
| ADJUSTMENT_TIME_WERT | s | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung |
| LOCAL_ID_WERT | 0-n | - | unsigned int | - | CTRL_BY_LOCAL_ID | - | - | - | - | - | Local-ID/Bauteilauswahl siehe Tabelle CTRL_BY_LOCAL_ID |

### ARG_0XDC0F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLOPTION_WERT | 0-n | - | unsigned char | - | TAB_EHC_REF | 1.0 | 1.0 | 0.0 | - | - | Steuern: Radentlastungsfunktion (REF) |

### ARG_0XFD21_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEFAULT_DATA_EEP_A | 0-n | high | unsigned char | - | TAB_DEFAULT_DATA_EEP_A | - | - | - | - | - | NULL |
| DEFAULT_DATA_EEP_B | 0-n | high | unsigned char | - | TAB_DEFAULT_DATA_EEP_B | - | - | - | - | - | NULL |
| DEFAULT_DATA_EEP_C | 0-n | high | unsigned char | - | TAB_DEFAULT_DATA_EEP_C | - | - | - | - | - | NULL |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CTRL_BY_LOCAL_ID

| WERT | TEXT |
| --- | --- |
| 0x11 | Balgventil hinten links |
| 0x12 | Balgventil hinten rechts |
| 0x13 | Balgventil vorne links |
| 0x14 | Balgventil vorne rechts |
| 0x17 | Druckspeicherventil |
| 0x19 | Ablassventil |
| 0xC1 | Luftfeder hinten links |
| 0xC2 | Luftfeder hinten rechts |
| 0xC3 | Luftfeder hinten |
| 0xC4 | Luftfeder vorne links |
| 0xC5 | Luftfeder vorne rechts |
| 0xC6 | Luftfeder vorne |
| 0xC7 | Druckspeicher |
| 0xC8 | Umgebung |
| 0xFF | nicht definiert |

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
| 0x023800 | Energiesparmode aktiv | 0 | - |
| 0x023808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02380A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02380B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02380C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02380D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x023840 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x023841 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x023842 | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x023843 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x023844 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x023845 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x02FF38 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x480DE4 | Luftverteilung - Undichtigkeit | 0 | - |
| 0x480E22 | Niveauregelung - Spannungsversorgung - Unterspannung | 0 | - |
| 0x480E24 | Niveauregelung - Spannungsversorgung - häufig niedrige Batteriespannung | 0 | - |
| 0x480E25 | Balgventil vorne links - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E26 | Balgventil vorne rechts - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E27 | Balgventil hinten links - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E28 | Balgventil hinten rechts - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E29 | Kompressor - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2A | Ablassventil - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2B | Umschaltventil 1 - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2C | Umschaltventil 2 - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2D | Umschaltventil 3 - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2E | Umschaltventil 4 - Maximale Einschaltdauer überschritten | 0 | - |
| 0x480E2F | Kompressor - Reduktion wegen Übertemperatur | 0 | - |
| 0x480E30 | Kompressor - Starke Reduktion wegen Übertemperatur | 0 | - |
| 0x480E31 | Höhenstandssensoren - Vorne links Signalplausibilität | 0 | - |
| 0x480E32 | Höhenstandssensoren - Vorne rechts Signalplausibilität | 0 | - |
| 0x480E33 | Höhenstandssensoren - Hinten links Signalplausibilität | 0 | - |
| 0x480E34 | Höhenstandssensoren - Hinten rechts Signalplausibilität | 0 | - |
| 0x480E35 | Niveauregelung - Extremniveau-Überwachung nicht möglich | 0 | - |
| 0x480E36 | Niveauregelung - Fahrzeug vorne links extrem hoch | 0 | - |
| 0x480E37 | Niveauregelung - Fahrzeug vorne links extrem tief | 0 | - |
| 0x480E38 | Niveauregelung - Fahrzeug vorne rechts extrem hoch | 0 | - |
| 0x480E39 | Niveauregelung - Fahrzeug vorne rechts extrem tief | 0 | - |
| 0x480E3A | Niveauregelung - Fahrzeug hinten links extrem hoch | 0 | - |
| 0x480E3B | Niveauregelung - Fahrzeug hinten links extrem tief | 0 | - |
| 0x480E3C | Niveauregelung - Fahrzeug hinten rechts extrem hoch | 0 | - |
| 0x480E3D | Niveauregelung - Fahrzeug hinten rechts extrem tief | 0 | - |
| 0x480E3F | Niveauregelung - Fahrzeugverschränkung | 0 | - |
| 0x480E40 | Niveauregelung - Fahrzeug-Niveau nicht einstellbar | 0 | - |
| 0x480E41 | Luftsystem - Systembefüllung Unplausibel | 0 | - |
| 0x480E42 | Luftsystem - Systementlüftung Unplausibel | 0 | - |
| 0x480E43 | VD-CAN Control Module Bus OFF | 0 | - |
| 0x480E44 | VD-CAN Physikalischer Busfehler | 0 | - |
| 0x480E45 | Steuergerät intern - ROM / Flash Fehler | 0 | - |
| 0x480E46 | Steuergerät intern - Laufzeitfehler | 0 | - |
| 0x480E47 | Steuergerät intern - Hardware Fehler | 0 | - |
| 0x480E48 | Steuergerät intern - HW Fehler ASG intern | 0 | - |
| 0x480E49 | Steuergerät intern - HW Fehler ASG intern, System ASIC | 0 | - |
| 0x480E4A | Steuergerät intern - Main Treiber Fehler | 0 | - |
| 0x480E4B | Kompressor - Allgemeiner Fehler | 0 | - |
| 0x480E4C | Kompressor - gemessene Drehzahl trotz Ansteuerung zu gering | 0 | - |
| 0x480E4D | Steuergerät intern - Ventile Fehler | 0 | - |
| 0x480E4E | Steuergerät intern - Unplausibler Ventilstrom | 0 | - |
| 0x480E4F | Drucksensor - Hauptzylinder - Leitungsfehler | 0 | - |
| 0x480E50 | Drucksensor - Signal 1 oberhalb des gültigen Wertebereichs | 0 | - |
| 0x480E51 | Drucksensor - Signal 2 oberhalb des gültigen Wertebereichs | 0 | - |
| 0x480E52 | Drucksensor - Interne Plausibilisierung fehlgeschlagen | 0 | - |
| 0x480E53 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 | - |
| 0x480E54 | Temperatursensor - Signal 1 oberhalb des gültigen Wertebereichs | 0 | - |
| 0x480E55 | Temperatursensor - Signal 2 oberhalb des gültigen Wertebereichs | 0 | - |
| 0x480E56 | Drucksensor - Plausibilisierung Temperatur intern | 0 | - |
| 0x480E57 | Drucksensor - Hauptzylinder - Integrität Funktionalität unzureichend | 0 | - |
| 0x480E58 | Steuergerät intern - EEPROM Fehler | 0 | - |
| 0x480E59 | PCB-Temperatursensor - Sensor defekt | 0 | - |
| 0x480E5A | Drucksensor - Signal 1 unterhalb des gültigen Wertebereichs | 0 | - |
| 0x480E5B | Drucksensor - Signal 2 unterhalb des gültigen Wertebereichs | 0 | - |
| 0x480E5C | Temperatursensor - Signal 1 unterhalb des gültigen Wertebereichs | 0 | - |
| 0x480E5D | Temperatursensor - Signal 2 unterhalb des gültigen Wertebereichs | 0 | - |
| 0x480E5E | Kompressor - Kompressorstromplausibilität | 0 | - |
| 0x480E60 | Ladekantentaster - Signalplausibilität | 0 | - |
| 0x480E61 | Ladekantentaster LED - Elektrischer Fehler | 0 | - |
| 0x480E62 | Ladekantentaster LED - Kurzschluss nach Masse | 0 | - |
| 0x480E63 | Ladekantentaster LED - Kurzschluss nach Batteriespannung | 0 | - |
| 0x480E6C | Aufwärtswandler - defekt | 0 | - |
| 0x480E6D | Niveauregelung - Hebebühne erkannt | 1 | - |
| 0xD70401 | FA-CAN Physikalischer Busfehler | 0 | - |
| 0xD7040A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xD70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD71400 | Botschaft(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) fehlt | 1 | - |
| 0xD71403 | Signal(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) ungültig | 1 | - |
| 0xD71404 | Signal(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) undefiniert | 1 | - |
| 0xD71405 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | - |
| 0xD71406 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD71407 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD71408 | Signal(Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 | - |
| 0xD7140A | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) fehlt | 1 | - |
| 0xD7140B | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) nicht aktuell | 1 | - |
| 0xD7140C | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Prüfsumme falsch | 1 | - |
| 0xD7140D | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) ungültig | 1 | - |
| 0xD7140E | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) undefiniert | 1 | - |
| 0xD7140F | Botschaft(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) fehlt | 1 | - |
| 0xD71412 | Signal(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) ungültig | 1 | - |
| 0xD71413 | Signal(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) undefiniert | 1 | - |
| 0xD71428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD71429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD7142A | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) Prüfsumme falsch | 1 | - |
| 0xD7142B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD7142C | Signal(Status Verbrennungsmotor, ID: ST_CENG) undefiniert | 1 | - |
| 0xD71432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD71433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD71434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD71435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD71436 | Signal(Zustand Fahrzeug, ID: CON_VEH) undefiniert | 1 | - |
| 0xD71437 | Botschaft(Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD7143A | Signal(Außentemperatur, ID: A_TEMP) ungültig | 1 | - |
| 0xD71448 | Botschaft(Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xD7144C | Signal(Relativzeit BN2020, ID: RELATIVZEIT) ungültig | 1 | - |
| 0xD71482 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 | - |
| 0xD71483 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) nicht aktuell | 1 | - |
| 0xD71484 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) Prüfsumme falsch | 1 | - |
| 0xD71485 | Signal(Daten Antriebsstrang 2, ID: DT_PT_2) ungültig | 1 | - |
| 0xD7149A | Botschaft(Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xD7149D | Signal(Kilometerstand/Reichweite, ID: KILOMETERSTAND) ungültig | 1 | - |
| 0xD714F2 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xD714F3 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) nicht aktuell | 1 | - |
| 0xD714F4 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) Prüfsumme falsch | 1 | - |
| 0xD714F5 | Signal(Status Anhänger, ID: STAT_ANHAENGER) ungültig | 1 | - |
| 0xD7153A | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD7153B | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD7153C | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD7153D | Signal(Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 | - |
| 0xD715BA | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) fehlt | 1 | - |
| 0xD715BB | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) nicht aktuell | 1 | - |
| 0xD715BC | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD715BD | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) ungültig | 1 | - |
| 0xD715D2 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD715D3 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | - |
| 0xD715D4 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD715D5 | Signal(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) ungültig | 1 | - |
| 0xD715D6 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) fehlt | 1 | - |
| 0xD715D9 | Signal(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) ungültig | 1 | - |
| 0xD715DA | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) fehlt | 1 | - |
| 0xD715DB | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) nicht aktuell | 1 | - |
| 0xD715DC | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) Prüfsumme falsch | 1 | - |
| 0xD715DD | Signal(Masse/Gewicht Fahrzeug, ID: MASS_VEH) ungültig | 1 | - |
| 0xD715DE | Botschaft(Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD715DF | Botschaft(Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 | - |
| 0xD715E0 | Botschaft(Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 | - |
| 0xD715E1 | Signal(Neigung Fahrbahn, ID: TLT_RW) ungültig | 1 | - |
| 0xD7161A | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) fehlt | 1 | - |
| 0xD7161B | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) nicht aktuell | 1 | - |
| 0xD7161C | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD7161D | Signal(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) ungültig | 1 | - |
| 0xD71677 | Signal(Daten Antriebsstrang 2, ID: DT_PT_2) undefiniert | 1 | - |
| 0xD716A9 | Botschaft(Status Reifen, ID: ST_TYR) fehlt | 1 | - |
| 0xD716AA | Botschaft(Status Reifen, ID: ST_TYR) nicht aktuell | 1 | - |
| 0xD716AB | Botschaft(Status Reifen, ID: ST_TYR) Prüfsumme falsch | 1 | - |
| 0xD716AC | Signal(Status Reifen, ID: ST_TYR) ungültig | 1 | - |
| 0xD716D0 | Signal(Fahrgestellnummer, ID: FAHRGESTELLNUMMER) ungültig | 1 | - |
| 0xD716D3 | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) undefiniert | 1 | - |
| 0xD716D7 | Signal(Status Anhänger, ID: STAT_ANHAENGER) undefiniert | 1 | - |
| 0xD716FB | Botschaft(Fahrgestellnummer, ID: FAHRGESTELLNUMMER) fehlt | 1 | - |
| 0xD716FC | Signal(Bedienung Taster Niveauwechsel, ID: OP_PUBU_LVCH) ungültig | 1 | - |
| 0xD716FD | Signal(Status Reifen, ID: ST_TYR) undefiniert | 1 | - |
| 0xD716FE | Signal(Status Stabilisierung DSC, ID: ST_STAB_DSC) undefiniert | 1 | - |
| 0xD716FF | Signal(Bedienung Taster Niveauwechsel, ID: OP_PUBU_LVCH) undefiniert | 1 | - |
| 0xD71700 | Botschaft(Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) fehlt | 1 | - |
| 0xD71701 | Botschaft(Höhenstand Fahrzeug 2, ID: HGLV_VEH_2) fehlt | 1 | - |
| 0xD71702 | Botschaft(Höhenstand Fahrzeug 2, ID: HGLV_VEH_2) nicht aktuell | 1 | - |
| 0xD71703 | Signal(Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) ungültig | 1 | - |
| 0xD71704 | Botschaft(Höhenstand Fahrzeug 2, ID: HGLV_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD71705 | Signal(Höhenstand Fahrzeug 2, ID: HGLV_VEH_2) ungültig | 1 | - |
| 0xD71706 | Botschaft(Interne Kommunikation VDP_CHC, ID: INTL_COMM_VDP_CHC) fehlt | 1 | - |
| 0xD71707 | Botschaft(ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) fehlt | 1 | - |
| 0xD71708 | Botschaft(Interne Kommunikation VDP_CHC, ID: INTL_COMM_VDP_CHC) Prüfsumme falsch | 1 | - |
| 0xD71709 | Signal(Interne Kommunikation VDP_CHC, ID: INTL_COMM_VDP_CHC) ungültig | 1 | - |
| 0xD7170C | Signal(ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) ungültig | 1 | - |
| 0xD7170D | Signal(ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) undefiniert | 1 | - |
| 0xD7175C | Botschaft(Daten Antriebsstrang 3, ID: DT_PT_3) fehlt | 1 | - |
| 0xD7175D | Botschaft(Netzwerkmanagement-3 VD-CAN, ID: NM3_VDCAN) fehlt | 1 | - |
| 0xD7175E | Botschaft(Spannung Bordnetz, ID: U_BN) fehlt | 1 | - |
| 0xD7175F | Signal(Daten Antriebsstrang 3, ID: DT_PT_3) ungültig | 1 | - |
| 0xD71760 | Signal(Daten Antriebsstrang 3, ID: DT_PT_3) undefiniert | 1 | - |
| 0xD71762 | Signal(Netzwerkmanagement-3 VD-CAN, ID: NM3_VDCAN) ungültig | 1 | - |
| 0xD71764 | Signal(Spannung Bordnetz, ID: U_BN) ungültig | 1 | - |
| 0xD7181C | Botschaft(Diagnose OBD Motor, ID:DIAG_OBD_ENG) fehlt | 1 | - |
| 0xD7181F | Signal(Diagnose OBD Motor, ID:DIAG_OBD_ENG) ungültig | 1 | - |
| 0xD7187A | Botschaft (Steuerung_Niveauwechsel, ID: CTR_LVCH) fehlt | 1 | - |
| 0xD7187D | Signal (Steuerung_Niveauwechsel, ID: CTR_LVCH) ungültig | 1 | - |
| 0xD7243E | Botschaft(LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) fehlt | 1 | - |
| 0xD7243F | Signal(LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) ungültig | 1 | - |
| 0xD72440 | Botschaft(Powermanagement Verbrauchersteuerung, ID: POWERMGMT_CTR_COS) fehlt | 1 | - |
| 0xD72441 | Signal(Powermanagement Verbrauchersteuerung, ID: POWERMGMT_CTR_COS) ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4220 | EnvtlFctDgdnData | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | EnvtlVehStDetnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4222 | EnvtlSysStDetnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | EnvtlActProtnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | EnvtlActrCtrlData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4225 | EnvtlActrMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4226 | EnvtlAirSplyMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | EnvtlLvlCtrlData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4228 | EnvtlLvlMonrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4229 | EnvtlSenProcgData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x422A | EnvtlFltMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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
| 0x048000 | Steuergerät intern - Security Diagnose Request in verriegeltem Zustand erhalten | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4220 | EnvtlFctDgdnData | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | EnvtlVehStDetnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4222 | EnvtlSysStDetnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | EnvtlActProtnData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4224 | EnvtlActrCtrlData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4225 | EnvtlActrMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4226 | EnvtlAirSplyMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | EnvtlLvlCtrlData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4228 | EnvtlLvlMonrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4229 | EnvtlSenProcgData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x422A | EnvtlFltMgrData | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

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

### RES_0X4200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_OF_CONTROL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktivitätszustand des levelcontrollers |
| STAT_INTERNAL_TARGET_LEVEL_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | internes Zielniveau |
| STAT_CONTROLLER_INTERNAL_CURRENT_LEVEL_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuelles Niveau im Level Controller |
| STAT_DEVIATION_FROM_NRH_FRONT_LEFT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau vorne links |
| STAT_DEVIATION_FROM_NRH_FRONT_RIGHT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau vorne rechts |
| STAT_DEVIATION_FROM_NRH_REAR_LEFT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau hinten links |
| STAT_DEVIATION_FROM_NRH_REAR_RIGHT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau hinten rechts |
| STAT_LEVEL_DEMAND_DETECTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | level demand detected: no / up / down for RR RL FR FL |
| STAT_LEVELING_REQUESTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | leveling requested one bit one information |
| STAT_FURTHER_STATES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | byte 10 internal level state, wakeup controller... |
| STAT_BYTE11RESERVED_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | reserved |
| STAT_CURRENT_HIGHT_FRONT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | current hight (corner) |
| STAT_CURRENT_HIGHT_REAR_LEFT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | current hight (corner) |
| STAT_CURRENT_HIGHT_REAR_RIGHT_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | current hight (corner) |

### RES_0X4201_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORNER_FORBID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | front/rear left/right up or down forbid: if bit is set=yes |
| STAT_ACTMGR_JOB_RESTRICTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ActMgr job restriction |
| STAT_RESTRICTIONS_COMPONENTS01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | status bits of restrictions / components air spring FL FR RL RR, valves 1.4 |
| STAT_RESTRICTIONS_COMPONENTS02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | status bits of restrictions / components venting, compressor, pressure sensor... |
| STAT_RESTRICTIONS_COMPONENTS03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | status bits of restrictions / components HiLvl, LoLvl |

### RES_0X4202_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RECEIVED_VEHICLE_SPEED_WERT | km/h | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | received vehicle speed |
| STAT_RECEIVED_ENGINE_SPEED_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | received engine speed |
| STAT_RECEIVED_VEH_ALAT_WERT | m/s² | high | signed int | - | - | 0.1 | 1.0 | 0.0 | received VehALat |
| STAT_RECEIVED_VEH_ALGT_WERT | m/s² | high | signed int | - | - | 0.1 | 1.0 | 0.0 | received VehALgt |
| STAT_RECEIVED_VEH_TAMB_WERT | ° | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | received Tamb ambient temperature |
| STAT_RECEIVED_STEERING_WHEEL_ANGLE_WERT | ° | high | signed int | - | - | 0.1 | 1.0 | 0.0 | received steering wheel angle |
| STAT_RECEIVED_DOORS_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | received doors state |
| STAT_RECEIVED_TRUNKHOOD_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | received trund and hood state |
| STAT_RECEIVED_IGNSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | received ignition state |
| STAT_RECEIVED_CRANKSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | received engine cranking state |

### RES_0X4203_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEAS_SYSTEM_AIRMASS_WERT | bar | high | unsigned int | - | - | 0.008 | 1.0 | 0.0 | system airmass after complete airmass measurement |
| STAT_CALC_SYSTEM_AIRMASS_WERT | bar | high | unsigned int | - | - | 0.008 | 1.0 | 0.0 | current airmass |
| STAT_EST_SYSTEM_AIRMASS_STATIC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | estimaded system airmass |
| STAT_EST_SYSTEM_AIRMASS_ONLINE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | estimaded system airmass |
| STAT_JOBREQUEST_AIRSPRING_FRONT_LEFT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | job request air spring front left |
| STAT_JOBREQUEST_AIRSPRING_FRONT_RIGHT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | job request air spring front right |
| STAT_JOBREQUEST_AIRSPRING_REAR_LEFT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | job request air spring rear left |
| STAT_JOBREQUEST_AIRSPRING_REAR_RIGHT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | job request air spring rear right |
| STAT_JOBREQUEST_RESERVOIR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | job request reservoir |

### RES_0X4204_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMPR_MAN_LC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Compressor available for manual level control |
| STAT_COMPR_AUTO_LC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Compressor available for automatic level control |
| STAT_COMPR_RES_FILLING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | compressor available for reservoir filling |
| STAT_COMPR_MAX_DUTY_CYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | compressor duty cycle exceeded |
| STAT_RV1_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | rv1 - reversing value 1: max duty cycle exceeded |
| STAT_RV2_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | rv2 - reversing value 2: max duty cycle exceeded |
| STAT_RV3_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | rv3 - reversing value 3: max duty cycle exceeded |
| STAT_RV4_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | rv4 - reversing value 4: max duty cycle exceeded |
| STAT_ASV_FL_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ASV: Airspring valve FL: max duty cycle exceeded |
| STAT_ASV_FR_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ASV: Airspring valve FR: max duty cycle exceeded |
| STAT_ASV_RL_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ASV: Airspring valve RL: max duty cycle exceeded |
| STAT_ASV_RR_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ASV: Airspring valve RR: max duty cycle exceeded |
| STAT_VENTINGVALVE_DUTYCYCLE_EXCEEDED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Venting Valve (Ambience valve): max duty cycle exceeded |

### RES_0X4205_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VEH_MODE_I_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vehicle Mode I |
| STAT_VEH_MODE_II_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vehicle Mode II |
| STAT_VEH_ENERGY_LEVEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vehicle engery level |
| STAT_VEH_DYN_DETECTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vehicle dynamic detection |
| STAT_SLOPE_DETECTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | slope detection |
| STAT_HILL_DET_LON_WERT | ° | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Hill detection longitudinal |
| STAT_VEH_TORSION_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vehicle torsion state |
| STAT_HOIST_RECOGNITION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | hoist recognition |
| STAT_HOIST_DOWNLVL_TIME_FRONT_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | levelling time downwards of front axle for hoist detection [ms] |
| STAT_HOIST_DOWNLVL_TIME_REAR_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | levelling time downwards of rear axle for hoist detection [ms] |
| STAT_PITCH_ANGLE_SUPERVISION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pitch angle supervision |
| STAT_VEHLOAD_CHANGE_DET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | change in vehicle load supposed |
| STAT_VEH_VELOCITY_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | vehicle speed |
| STAT_STEERINGWHEEL_ANG_WERT | ° | high | signed int | - | - | 1.0 | 10.0 | 0.0 | steering wheel angle |
| STAT_X_ACC_BODY_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | x acceleration body |
| STAT_Y_ACC_BODY_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | y acceleration body |
| STAT_Z_ACC_BODY_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | z acceleration body |
| STAT_Z_ACC_BODY_FL_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | z-acceleration body FL |
| STAT_Z_ACC_BODY_FR_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | z-acceleration body FR |
| STAT_Z_ACC_BODY_RL_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | z-acceleration body RL |
| STAT_Z_ACC_BODY_RR_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | z-acceleration body RR |
| STAT_STORED_X_ACC_BODY_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | stored x-acceleration body |
| STAT_STORED_Y_ACC_BODY_WERT | m/s² | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | stored y-acceleration body |

### RES_0X4206_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEL_BURST_DETN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bellow burst detection state |
| STAT_LVL_OBSVR_ST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LvlObsvrSt |
| STAT_CHKSUPP_LVLGREST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | chk supported, lvl restriction |
| STAT_CHKSUPP_LVLGREST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | chk supported, lvl restriction |
| STAT_CHKSUPP_DIRRESTR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | chk supported dst, direction restriction |
| STAT_OVLDDETNST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OvldDetnSt |
| STAT_VLVICINGST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VlvIcingSt |
| STAT_PSNSRPLAUSI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PSnsrPlausibility |
| STAT_PIPEBRKST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PipeBreakSt |
| STAT_SWDGARGST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SwdGargSt |
| STAT_SYSSTDETNRESERVED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | reserved |

### RES_0X4207_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_TGT_LVL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | target level |
| STAT_HMI_CURR_LVL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | current level |
| STAT_ACTIVE_PRIOS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | active priorities |
| STAT_ACT_LVL_REASON_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | actual leveling reason |

### RES_0X4209_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LHM_LC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | limp home mode: level control |
| STAT_LHM1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | reserved |
| STAT_LHM2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | reserved |

### RES_0XA460_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |
| STAT_ROTUNE | - | + | - | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |

### RES_0XA461_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |
| STAT_ROTUNE | - | + | - | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |

### RES_0XA462_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |
| STAT_ROTUNE | - | + | - | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |

### RES_0XA463_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |

### RES_0XA464_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |
| STAT_LUFTMENGE_WERT | - | - | + | bar | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gemessene Luftmenge [barl * 10] |
| STAT_LUFTMENGENBEWERTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_SYSTEMLUFTMENGE | - | - | - | Luftmengenbewertung |

### RES_0XA465_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS | - | - | - | Routine Statusbericht |
| STAT_ROUTINE_FEHLERINFORMATION | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_FEHLERINFORMATION | - | - | - | Routine Fehlerinformation |

### RES_0XD7A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUFTFEDER_LETZTE_FUNKTION_ID | 0-n | high | unsigned char | - | TAB_LUFTFEDER_FUNKTION_ID | - | - | - | Zuletzt aktivierte Steuer-Serviceroutine |
| STAT_LUFTFEDER_STATUS_FUNKTION_ID | 0-n | high | unsigned char | - | TAB_LUFTFEDER_STATUS_FUNKTION_ID | - | - | - | Status der letzten Steuer-Serviceroutine |
| STAT_DRUCK_LUFTFEDER_VORN_LINKS_WERT | bar | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Druck Luftfeder vorne links. Auflösung: 0,1 bar |
| STAT_DRUCK_LUFTFEDER_VORN_RECHTS_WERT | bar | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Druck Luftfeder vorn rechts. Auflösung: 0,1 bar |
| STAT_DRUCK_LUFTFEDER_HINTEN_LINKS_WERT | bar | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Druck Luftfeder hinten links. Auflösung: 0,1 bar |
| STAT_DRUCK_LUFTFEDER_HINTEN_RECHTS_WERT | bar | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Druck Luftfeder hinten rechts. Auflösung: 0,1 bar |
| STAT_DRUCK_DRUCKSPEICHER_WERT | bar | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Druck Druckspeicher. Auflösung: 0,1 bar |
| STAT_JOB_NUMMER | 0-n | high | unsigned char | - | TAB_ACT_MANAGER_JOB | - | - | - | Aktuator Manager Job Nummer |
| STAT_DRUCKSENSOR_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Signal des Drucksensors |
| STAT_DRUCK_LUFTFEDER_VL_GUELTIG | 0-n | high | unsigned char | - | TAB_DRUCK_GUELTIG | - | - | - | Druck Luftfeder vorn links gültig |
| STAT_DRUCK_LUFTFEDER_VR_GUELTIG | 0-n | high | unsigned char | - | TAB_DRUCK_GUELTIG | - | - | - | Druck Luftfeder vorn rechts gültig |
| STAT_DRUCK_LUFTFEDER_HL_GUELTIG | 0-n | high | unsigned char | - | TAB_DRUCK_GUELTIG | - | - | - | Druck Luftfeder hinten links gültig |
| STAT_DRUCK_LUFTFEDER_HR_GUELTIG | 0-n | high | unsigned char | - | TAB_DRUCK_GUELTIG | - | - | - | Druck Luftfeder hinten rechts gültig |
| STAT_NORMALNIVEAU_ABWEICHUNG_VL_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau Luftfeder vorn links |
| STAT_NORMALNIVEAU_ABWEICHUNG_VR_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau Luftfeder vorn rechts |
| STAT_NORMALNIVEAU_ABWEICHUNG_HL_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau Luftfeder hinten links |
| STAT_NORMALNIVEAU_ABWEICHUNG_HR_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Abweichung vom Normalniveau Luftfeder hinten rechts |
| STAT_NIVEAU_VORDERACHSE_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelles Höhenniveau Forderachse bezogen auf das Normalniveau |
| STAT_NIVEAU_HINTERACHSE_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelles Höhenniveau Hinterachse bezogen auf das Normalniveau |
| STAT_FAHRZEUGHOEHE_VL_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fahrzeughöhe vorn links |
| STAT_FAHRZEUGHOEHE_VR_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fahrzeughöhe vorn rechts |
| STAT_FAHRZEUGHOEHE_HL_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fahrzeughöhe hinten links |
| STAT_FAHRZEUGHOEHE_HR_WERT | mm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fahrzeughöhe hinten rechts |
| STAT_KOMPRESSOR | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Kompressor Status - An/Aus |
| STAT_UMSCHALTVENTIL_1 | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Umschaltventil 1 Status - An/Aus |
| STAT_UMSCHALTVENTIL_2 | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Umschaltventil 2 Status - An/Aus |
| STAT_UMSCHALTVENTIL_3 | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Umschaltventil 3 Status - An/Aus |
| STAT_UMSCHALTVENTIL_4 | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Umschaltventil 4 Status - An/Aus |
| STAT_LUFTFEDERVENTIL_VL | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Luftfederventil vorn links Status - An/Aus |
| STAT_LUFTFEDERVENTIL_VR | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Luftfederventil vorn rechts Status - An/Aus |
| STAT_LUFTFEDERVENTIL_HL | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Luftfederventil hinten links Status - An/Aus |
| STAT_LUFTFEDERVENTIL_HR | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Luftfederventil hinten rechts Status - An/Aus |
| STAT_ABLASSVENTIL | 0-n | high | unsigned char | - | TAB_AN_AUS | - | - | - | Ablassventil Status - An/Aus |
| STAT_NIVEAU | 0-n | high | unsigned char | - | TAB_CHC_VEHICLE_HEIGHT | - | - | - | Wert des Fahrzeugniveaus gemäß Tabelle. |
| STAT_VERFUEGBARKEIT_SYSTEMBEFUELLUNG | 0-n | high | unsigned char | - | TAB_VERFUEGBARKEIT_SYSTEMBEFUELLUNG | - | - | - | Gibt Auskunft über den aktuellen Status der Verfügbarkeit der Systembefüllung |

### RES_0XDB71_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ORGFASTFILTER_RL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des linken hinteren Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_RR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des rechten hinteren Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_FL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des linken vorderen Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_FR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ungefilterten Höhenstandswerte.Die Rohwerte des FASTFILTER des rechten vorderen Sensors werden angezeigt. |
| STAT_FASTFILTER_RL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_RR_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_FL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des linken vorderen Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_FR_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des rechten vorderen Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_SLOWFILTER_RL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_RR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_FL_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des linken vorderen Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_FR_WERT | mm | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des rechten vorderen Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |

### RES_0XDBBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PM_ACTVNMEMAMBVLV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Ablassventil |
| STAT_PM_ACTVNMEMVLVFRNTLE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele vorderes linkes Luftfederventil |
| STAT_PM_ACTVNMEMVLVFRNTRI_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele vorderes rechtes Luftfederventil |
| STAT_PM_ACTVNMEMVLVRELE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele hinteres linkes Luftfederventil |
| STAT_PM_ACTVNMEMVLVRERI_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele hinteres rechtes Luftfederventil |
| STAT_PM_ACTVNMEMCMPR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Kompressormotor |
| STAT_PM_ACTVNMEMCMPRLVLCHGTI_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit für Niveauregelungen |
| STAT_PM_ACTVNMEMRVSGVLV1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Umschaltventil 1 |
| STAT_PM_ACTVNMEMRVSGVLV2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Umschaltventil 2 |
| STAT_PM_ACTVNMEMRVSGVLV3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Umschaltventil 3 |
| STAT_PM_ACTVNMEMRVSGVLV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltspiele Umschaltventil 4 |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel kleiner 1 Sekunde |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 1 bis 2 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 2 bis 5 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 5 bis 10 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 10 bis 20 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 20 bis 40 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 40 bis 80 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel 80 bis 120 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNLVLCHG09_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Niveauwechsel größer 120 |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement kleiner 1 Sekunde |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 1 bis 2 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 2 bis 5 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 5 bis 10 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 10 bis 20 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 20 bis 40 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 40 bis 80 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement 80 bis 120 Sekunden |
| STAT_PM_ACTVNMEMTCLASSNRESFILLG09_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Kompressorlaufzeit Luftmengenmanagement größer 120 |
| STAT_PM_ACTVNMEMCNTCMPRSWTOFFTOVER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Abschaltungen aufgrund Übertemperatur durch Niveauregelungen |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ziellevel = HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund Höhenstandschalter |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund DriveMode |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund Kofferraum Schalter |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund DisplayKey |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund iPA |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Höhenstandsanforderung aufgrund Fahrzeuggeschwindigkeit |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN3 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN3 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN3 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN3 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN3 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN2 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN2 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN2 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN2 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN2 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN1 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN1 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN1 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN1 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel TN1 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel NN => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel NN => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel NN => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_31_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel NN => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_32_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel NN => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_33_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN1 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_34_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN1 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_35_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN1 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_36_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN1 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_37_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN1 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_38_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN2 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_39_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN2 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_40_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN2 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_41_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN2 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_42_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler erfolgreicher Wechsel HN2 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_43_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN3 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_44_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN3 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_45_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN3 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_46_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN3 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_47_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN3 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_48_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN2 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_49_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN2 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_50_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN2 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_51_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN2 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_52_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN2 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_53_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN1 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_54_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN1 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_55_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN1 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_56_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN1 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_57_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel TN1 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_58_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel NN => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_59_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel NN => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_60_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel NN => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_61_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel NN => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_62_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel NN => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_63_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN1 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_64_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN1 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_65_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN1 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_66_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN1 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_67_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN1 => HN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_68_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN2 => TN3 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_69_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN2 => TN2 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_70_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN2 => TN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_71_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN2 => NN |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_72_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler NICHT erfolgreicher Wechsel HN2 => HN1 |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_73_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren da Aktuator nicht verfügbar |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_74_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund schwacher Batterie |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_75_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund Überschreitung Energielimit |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_76_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund zu hohem Druck in der Luftfeder |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_77_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund Längs- oder Querbeschleunigung |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_78_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level Korrektur per Achse |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_79_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund Fahrzeuggeschwindigkeit |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_80_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund hoist mode |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_81_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund Anhängererkennung |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_82_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund geöffneter Tür |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_83_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Level wird nicht angefahren aufgrund angehobenem Rad |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_84_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler bottomed-out mode |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_85_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Wagenheber Mode |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_86_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler manuelle System-Deaktivierung |
| STAT_RTE_PIM_HMI_HMI_NVMBLK_BUFDATALOGGER_87_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Anhängererkennung |
| STAT_VEHSTDETN_COUWAITTRANSIT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler water transit |
| STAT_LVLCTRL_COULVLINWOHNEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Stellvorgang bei PWF =  Wohnen  |
| STAT_LVLCTRL_COULVLINFAHREN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Stellvorgang bei PWF =  Fahren  |
| STAT_LVLCTRL_COULVLINPARKENSTAND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Stellvorgang bei PWF =  Parken  oder  Standfunktionen  |
| STAT_LVLCTRL_COULVLINMSASTAND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Stellvorgang bei PWF =  MSA-Stand  |
| STAT_AIRSPLYCTRL_CNTRDRYRGNCYCMONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Trockner Regenerierungszyklen |
| STAT_AIRSPLYCTRL_CNTRAIRMFROMAMBMONRDATALOG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Umgebungsluftmasse |
| STAT_AIRSPLYCTRL_CNTRAIRMBELOWUG2MONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Luftmasse unter UG2 |
| STAT_AIRSPLYCTRL_CNTRAIRMUG2UG1MONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Luftmasse zwischen UG2 und UG1 |
| STAT_AIRSPLYCTRL_CNTRAIRMUG1OG1MONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Luftmasse zwischen UG1 und OG1 |
| STAT_AIRSPLYCTRL_CNTRAIRMOG1OG2MONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Luftmasse zwischen OG1 und OG2 |
| STAT_AIRSPLYCTRL_CNTRAIRMABOVEOG2MONRDATALOG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Luftmasse über OG2 |

### RES_0XDC0F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REF_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status: Radentlastungsfunktion |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| LEVEL_CONTROL | 0x4200 | - | level control developer job | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4200_D |
| FUNCTIONDEGRADATION | 0x4201 | - | status function degradation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4201_D |
| NETWORKINPUT | 0x4202 | - | display of received data via network | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4202_D |
| AIRSUPPLYCTRL | 0x4203 | - | air supply control | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4203_D |
| ACTPROTN | 0x4204 | - | ActProtn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4204_D |
| VEHSTDETN | 0x4205 | - | VehStDetn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4205_D |
| SYSSTDETN | 0x4206 | - | SysStDetn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4206_D |
| HMI | 0x4207 | - | HMI | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4207_D |
| LHM | 0x4209 | - | Limp Home Mode | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4209_D |
| LUFTFEDERBEFUELLUNG_AUS_DRUCKSPEICHER | 0xA460 | - | Befüllung der gewählten Luftfeder wahlweise für eine fest eingestellte  Zeit oder komplette Befüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA460_R | RES_0xA460_R |
| LUFTFEDER_ENTLUEFTEN_IN_DRUCKSPEICHER | 0xA461 | - | Entlüftung der ausgewählten Luftfeder in den Druckspeicher | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA461_R | RES_0xA461_R |
| KOMPONENTE_ENTLUEFTEN_IN_UMGEBUNG | 0xA462 | - | Entlüftung der ausgewählten Komponente Luftfeder oder Reservoir) in die Umgebung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA462_R | RES_0xA462_R |
| SYSTEMBEFUELLUNG | 0xA463 | - | System-Selbstbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA463_R | RES_0xA463_R |
| MESSUNG_SYSTEMLUFTMENGE | 0xA464 | - | Die im System vorhandene Luftmenge wird gemessen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA464_R |
| DRUCKMESSUNG | 0xA465 | - | Druckmessung in der gewählten Komponente oder im Gesamtsystem | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA465_R | RES_0xA465_R |
| STEUERN_EHC_CLEAR_DATALOGGER | 0xAB6A | - | Steuern: Datenaufzeichnungen löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_LOWTOL_MODE | 0xAB79 | - | Schreiben/Setzen des Low Tol Modus. (temp. Verkleinerung des Regelbandes - z.B. für Scheinwerfereinstellung (0 Höhe) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_LUFTFEDER | 0xD7A5 | - | Letzter Steuerfunktions-Status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7A5_D |
| STEUERN_CHC_VEHICLE_HEIGHT | 0xD8FD | - | Steuern der Fahrzeughöhe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8FD_D | - |
| STATUS_FILTERWERTE | 0xDB71 | - | Gibt die gefilterten Werte der angeschlossenen Sensorik(EHC Höhensensor) aus. Diese Werte werden der Regelung zur Verfügung gestellt werden. Der Filter dient der Signalaufbereitung für die Regelung Fahrdynamische Prozesse. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB71_D |
| STEUERN_DIGITALSIGNALE | 0xDB77 | - | Das durch LOCAL_ID spezifizierte Bauteil wird für die Zeit ADJUSTMENT_TIME auf den Wert DIGITALWERT gesetzt. Mit diesem Job können die einzelnen Komponenten des EHC angesteuert werden. Es werden 3 Results benötigt(die Komponente,die Ansteuergröße (0/1) und die Dauer der Ansteuerung in s) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB77_D | - |
| STATUS_EHC_DATALOGGER | 0xDBBE | - | Status: Datenaufzeichnungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBBE_D |
| STEUERN_STATUS_EHC_REF | 0xDC0F | - | Steuern/Status: Radentlastungsfunktion | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC0F_D | RES_0xDC0F_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _SWVERSIONIDCONTI | 0xFD0F | STAT_SWVERSIONIDCONTI_TEXT | conti internal, production relevant, do not change Conti SW version | TEXT | - | High | string[5] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SWVERSIONIDCONTIVCC | 0xFD15 | STAT_SWVERSIONIDCONTIVCC_TEXT | conti internal, production relevant, do not change SW version ID Conti/Customer | TEXT | - | High | string[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CONTI_IDENTIFICATION | 0xFD18 | STAT_CONTI_IDENTIFICATION_DATA_TEXT | most important ID numbers and dates | TEXT | - | High | string[30] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SETDEFAULTDATATOEEP | 0xFD21 | - | conti internal, production relevant, do not change write eeprom data | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD21_D | - |
| _TRUNK_BUTTON_STATE | 0xFD50 | STAT_TRUNKBUTTONSTATE_WERT | conti internal, production relevant, do not change read current trunk button state | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_ACT_MANAGER_JOB

| WERT | TEXT |
| --- | --- |
| 0 | Kein Job |
| 10 | Aufregel-Jobs |
| 20 | Abregel-Jobs |
| 30 | Luftfedermessung-Jobs |
| 40 | Speichermessung-Jobs |
| 50 | Speicherentlüftung-Jobs |
| 60 | Speicherbefüllung-Jobs |
| 70 | Luftausgleich in einer Achse |
| 100 | Service-Jobs |
| 254 | Jeder Ventilanforderungs-Bypass ist gesetzt |
| 0xFF | Wert ungültig |

### TAB_AN_AUS

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | An |
| 0xFF | Wert ungültig |

### TAB_CHC_VEHICLE_HEIGHT

| WERT | TEXT |
| --- | --- |
| 0x01 | Tiefniveau 3 (TN3) |
| 0x02 | Tiefniveau 2 (TN2) |
| 0x03 | Tiefniveau 1 (TN1) |
| 0x04 | Normalniveau (NN) |
| 0x05 | Hochniveau 1 (HN1) |
| 0x06 | Hochniveau 2 (HN2) |
| 0xFF | Wert ungültig |

### TAB_DEFAULTDATA_EEP

| WERT | TEXT |
| --- | --- |
| 0x4d6b0400 | Wasserzaehler_deaktivieren |
| 0x4d6b0500 | Wasserzaehler_aktivieren |
| 0x4D6B0900 | Einschaltdauer_zuruecksetzen |

### TAB_DEFAULT_DATA_EEP_A

| WERT | TEXT |
| --- | --- |
| 0x4D | EEP_A |

### TAB_DEFAULT_DATA_EEP_B

| WERT | TEXT |
| --- | --- |
| 0x6B | EEP_B |

### TAB_DEFAULT_DATA_EEP_C

| WERT | TEXT |
| --- | --- |
| 0x04 | Wasserzählersperre_aktivieren |
| 0x05 | Wasserzählersperre_deaktivieren |

### TAB_DRUCK_GUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | Unbekannt |
| 20 | Bekannt |
| 100 | Messung aktiv |
| 0xFF | Wert ungültig |

### TAB_EHC_REF

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktivierung REF |
| 0x01 | Aktivierung REF Platten HR |
| 0x02 | Aktivierung REF Platten HL |
| 0x03 | Aktivierung REF Platten VR |
| 0x04 | Aktivierung REF Platten VL |

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

### TAB_FILL_DEFLATE_MODE

| WERT | TEXT |
| --- | --- |
| 0 | feste kurze Zeit |
| 1 | komplett |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_KOMPONENTE

| WERT | TEXT |
| --- | --- |
| 0 | Federbein vorn links |
| 1 | Federbein vorn rechts |
| 2 | Federbein hinten links |
| 3 | Federbein hinten rechts |
| 4 | Druckspeicher |
| 5 | Alle Komponenten |

### TAB_KOMPONENTENANSTEUERUNG_CONTI

| WERT | TEXT |
| --- | --- |
| 0x00 | Switch valve OFF |
| 0x01 | Switch valve ON |
| 0x02 | Deflate component into ambience |
| 0x03 | Fill component(s) with compressor |
| 0x04 | Fill component(s) with reservoir |
| 0x05 | Deflate component into reservoir |

### TAB_KOMPONENTE_IN_DRUCKSPEICHER

| WERT | TEXT |
| --- | --- |
| 0 | Federbein vorn links |
| 1 | Federbein vorn rechts |
| 2 | Federbein hinten links |
| 3 | Federbein hinten rechts |

### TAB_KOMPONENTE_IN_UMGEBUNG

| WERT | TEXT |
| --- | --- |
| 0 | Federbein vorn links |
| 1 | Federbein vorn rechts |
| 2 | Federbein hinten links |
| 3 | Federbein hinten rechts |
| 4 | Druckspeicher |

### TAB_LUFTFEDER_FUNKTION_ID

| WERT | TEXT |
| --- | --- |
| 0 | FCT_KEINE_FCT |
| 4 | FCT_STEUERN_ENTLUEFTUNG_IN_UMGEBUNG |
| 5 | FCT_STEUERN_MESSUNG_SYSTEMLUFTMENGE |
| 12 | FCT_STEUERN_EHC_VEHICLE_HEIGHT |
| 24 | FCT_STEUERN_DRUCKMESSUNG_KOMPONENTE |
| 25 | FCT_STEUERN_DRUCKMESSUNG |
| 29 | FCT_STEUERN_DIGITALSIGNALE |
| 109 | FCT_STEUERN_SYSTEMBEFUELLUNG |
| 122 | FCT_LOWTOL_MODE |
| 0xFF | Wert ungültig |

### TAB_LUFTFEDER_STATUS_FUNKTION_ID

| WERT | TEXT |
| --- | --- |
| 1 | laeuft |
| 2 | erfolgreich beendet |
| 3 | Abbruch mit Fehler |
| 4 | Kompressor Temperatur zu hoch |
| 5 | Einschaltdauer Ventile |
| 6 | Druck Speicher zu gering |
| 7 | Druck Speicher zu hoch |
| 8 | Druck Luftfeder zu gering |
| 9 | Druck Luftfeder zu hoch |
| 10 | Luftmenge zu hoch |
| 12 | Luftmenge zu gering |
| 13 | Zeitueberschreitung |
| 50 | Ventile nicht verfügbar |
| 51 | Notlauf LvlCtrl |
| 60 | Max. Laufzeit ext. Befuellung |
| 61 | Druckgradient zu gering |
| 160 | Abbruch durch Notlauf |
| 250 | fct pausiert |
| 254 | Funktion in Vorbereitung |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_FEHLERINFORMATION

| WERT | TEXT |
| --- | --- |
| 0 | keine Fehler |
| 134 | Temperatur zu hoch |
| 160 | Notlauf Nivauregler |
| 162 | Einschaltzeit überschritten |
| 163 | Systemluftmenge zu hoch |
| 164 | Systemluftmenge zu niedrig |
| 165 | Druckspeicherluftmenge zu niedrig |
| 166 | Druckspeicherluftmenge zu hoch |
| 167 | Federbeinluftmenge zu nedrig |
| 168 | Federbeinluftmenge zu hoch |
| 169 | Funktion abgelaufen |
| 170 | Ungültiger Zugang |
| 171 | Ventile nicht verfügbar |
| 172 | Regelverbot |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Routine erfolreich beendet |
| 1 | Routine läuft |
| 2 | Routine ohne Ergebnis beendet |
| 0xFF | Wert ungültig |

### TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Energiemangel im Hochvoltspeicher |
| 0x02 | Abbruch wegen HV-Fehler |
| 0x04 | Abbruch wegen DCDC-Ausfall |
| 0x08 | Zyklisches Nachladen beendet durch Laden |
| 0x20 | nächster zyklischer Ladevorgang möglich |
| 0x30 | nächster zyklischer Ladevorgang nicht mehr möglich |
| 0xFF | Wert ungültig |

### TAB_STATUS_SPANNUNGSEINBRUCH

| WERT | TEXT |
| --- | --- |
| 0 | Kein Spannungseinbruch |
| 1 | Startspannungseinbruch bis maximal Spannungsschwelle 1 |
| 2 | Startspannungseinbruch bis maximal Spannungsschwelle 2 |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor startet |
| 2 | Motor läuft |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
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

### TAB_SYSTEMLUFTMENGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Luftmenge zu niedrig |
| 0x01 | Luftmenge ok |
| 0x02 | Luftmenge zu hoch |
| 0xFF | Wert ungültig |

### TAB_VERFUEGBARKEIT_SYSTEMBEFUELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion verfügbar |
| 0x01 | Funktion verriegelt |
| 0xFF | Wert ungültig |
