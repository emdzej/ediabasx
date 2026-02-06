# EPS_G05.prg

## General

|  |  |
| --- | --- |
| File | EPS_G05.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 71 |
| Origin | BMW EF-414 Sven_Heinig |
| Revision | 3.003 |
| Author | BMW EF-414 Schmidt |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Lenkung |  |  |
| ORIGIN | string | BMW EF-414 Sven_Heinig |  |  |
| REVISION | string | 3.003 |  |  |
| AUTHOR | string | BMW EF-414 Schmidt |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.987 |  |  |
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

### ARG_0XAB20_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZUSTAND_SPURSTANGE | + | - | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | - | - | Spurstangen eingehaengt ja oder nein |

### ARG_0XAB56_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### ARG_0XAB71_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | signed int | - | - | 45.0 | 1.0 | 0.0 | -720.0 | 720.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### ARG_0XAB72_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### ARG_0XDB5A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

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
| 0x023000 | Energiesparmode aktiv | 0 | - |
| 0x023008 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02300A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02300B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02300C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02300D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF30 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482280 | Lenkgetriebe - Einfriererkennung | 0 | - |
| 0x48228B | Flashen: Falsche SWE2 | 0 | - |
| 0x48228C | Energiebordnetz - Fehler Sichere Energieversorgung | 1 | - |
| 0x4822A6 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x4822A7 | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x4822A8 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x4822A9 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x4822BB | Steuergerät intern - TKP - Hardware - Temperatursensor - Plausibilität Board/Endstufe | 0 | - |
| 0x4822D9 | Sensor - Lenkwinkel Index Riemensprung Lenkwinkel ungültig | 0 | - |
| 0x4822E1 | Lenkgetriebe - Blockiererkennung | 0 | - |
| 0x4822E7 | Steuergerät intern - Watchdog Ereignis | 0 | - |
| 0x4822E9 | Steuergerät intern - Softwarefehler - OBD | 0 | - |
| 0x4822EC | Globales Powermanagement Reduzierung Lenkunterstützung | 1 | - |
| 0x4822F6 | Steuergerät intern - Speicherfehler | 0 | - |
| 0x4822F8 | Steuergerät intern - Hardwarefehler - OBD | 0 | - |
| 0x4822F9 | Sensor - Rotorlage - Lenkwinkel - Software defekt | 0 | - |
| 0x4822FC | Sensor - Rotorlage - Lenkwinkel - Hardware defekt - Abschaltung Lenkunterstützung | 0 | - |
| 0x48238C | Steuergerät intern - Übertemperatur Abschaltung Lenkunterstützung | 1 | - |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 | - |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 1 | - |
| 0x482395 | Lenkgetriebe - Reibung zu hoch | 0 | - |
| 0x482397 | Steuergerät intern - Defekt | 0 | - |
| 0x482399 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 | - |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 | - |
| 0x4823C0 | Steuergerät intern - TKP - Software Fehler | 0 | - |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 1 | - |
| 0x4823C4 | Spannungsversorgung - Minimale Reduzierung Lenkunterstützung aufgrund Lokale Unterspannung | 1 | - |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FD | Spannungsversorgung - Lokale Unterspannung Abschaltung Lenkunterstützung | 1 | - |
| 0x482452 | Sensor - Lenkwinkel Index Riemensprung erkannt | 0 | - |
| 0xD5041F | FLEXRAY Physical bus error | 0 | - |
| 0xD50420 | FLEXRAY controller error | 0 | - |
| 0xD50BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD51400 | Botschaft(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) fehlt | 1 | - |
| 0xD51403 | Signal(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) ungültig | 1 | - |
| 0xD51404 | Signal(Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) undefiniert | 1 | - |
| 0xD51405 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | - |
| 0xD51406 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD51407 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD51408 | Signal(Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 | - |
| 0xD51409 | Signal(Geschwindigkeit Fahrzeug, ID: V_VEH) undefiniert | 1 | - |
| 0xD5140A | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) fehlt | 1 | - |
| 0xD5140B | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) nicht aktuell | 1 | - |
| 0xD5140C | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Prüfsumme falsch | 1 | - |
| 0xD5140D | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) ungültig | 1 | - |
| 0xD5140E | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) undefiniert | 1 | - |
| 0xD5140F | Botschaft(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) fehlt | 1 | - |
| 0xD51412 | Signal(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) ungültig | 1 | - |
| 0xD51413 | Signal(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) undefiniert | 1 | - |
| 0xD51414 | Botschaft(Offset Quadrant EPS, ID: OFFS_QUAD_EPS) fehlt | 1 | - |
| 0xD51415 | Botschaft(Offset Quadrant EPS, ID: OFFS_QUAD_EPS) nicht aktuell | 1 | - |
| 0xD51416 | Botschaft(Offset Quadrant EPS, ID: OFFS_QUAD_EPS) Prüfsumme falsch | 1 | - |
| 0xD51417 | Signal(Offset Quadrant EPS, ID: OFFS_QUAD_EPS) ungültig | 1 | - |
| 0xD51418 | Signal(Offset Quadrant EPS, ID: OFFS_QUAD_EPS) undefiniert | 1 | - |
| 0xD51419 | Botschaft(Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) fehlt | 1 | - |
| 0xD5141A | Botschaft(Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) nicht aktuell | 1 | - |
| 0xD5141B | Botschaft(Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) Prüfsumme falsch | 1 | - |
| 0xD5141C | Signal(Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) ungültig | 1 | - |
| 0xD5141D | Signal(Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) undefiniert | 1 | - |
| 0xD51423 | Botschaft(Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) fehlt | 1 | - |
| 0xD51424 | Botschaft(Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) nicht aktuell | 1 | - |
| 0xD51425 | Botschaft(Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) Prüfsumme falsch | 1 | - |
| 0xD51426 | Signal(Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) ungültig | 1 | - |
| 0xD51427 | Signal(Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) undefiniert | 1 | - |
| 0xD51428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD51429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD5142B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD5142C | Signal(Status Verbrennungsmotor, ID: ST_CENG) undefiniert | 1 | - |
| 0xD51430 | Signal(Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) ungültig | 1 | - |
| 0xD51431 | Signal(Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) undefiniert | 1 | - |
| 0xD51432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD51433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD51434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD51435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD51436 | Signal(Zustand Fahrzeug, ID: CON_VEH) undefiniert | 1 | - |
| 0xD515F6 | Botschaft(Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | - |
| 0xD515F9 | Signal(Ist Drehzahl Rad, ID: AVL_RPM_WHL) ungültig | 1 | - |
| 0xD51676 | Botschaft(Steuerung Vibration Lenkrad Anzeige Außenspiegel SP2015, ID: CTR_VIB_STW_DISP_EXMI_SP2015) fehlt | 1 | - |
| 0xD51680 | Signal(Ist Drehzahl Rad, ID: AVL_RPM_WHL) undefiniert | 1 | - |
| 0xD51683 | Signal(Steuerung Vibration Lenkrad Anzeige Außenspiegel SP2015, ID: CTR_VIB_STW_DISP_EXMI_SP2015) ungültig | 1 | - |
| 0xD51684 | Signal(Steuerung Vibration Lenkrad Anzeige Außenspiegel SP2015, ID: CTR_VIB_STW_DISP_EXMI_SP2015) undefiniert | 1 | - |
| 0xD51845 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) fehlt | 1 | - |
| 0xD51846 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) nicht aktuell | 1 | - |
| 0xD51848 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) Prüfsumme falsch | 1 | - |
| 0xD51849 | Signal(Energieversorgung Sicherheit, ID: ENSU_SFY) ungültig | 1 | - |
| 0xD5186F | Signal(Energieversorgung Sicherheit, ID: ENSU_SFY) undefiniert | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | MOTOR_LAEUFT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | KALTSTART_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MSA_START_VORHANDEN | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GENERATORENTLASTUNG_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2873 | STAT_TEMP_AKTUATOR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4000 | ETSR | HEX | High | unsigned long | - | - | - | - |
| 0x4001 | DEBUG_INFO_0 | HEX | High | unsigned char | - | - | - | - |
| 0x4002 | DEBUG_INFO_1 | HEX | High | unsigned char | - | - | - | - |
| 0x4003 | DEBUG_INFO_2 | HEX | High | unsigned char | - | - | - | - |
| 0x4004 | DEBUG_INFO_3 | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | DEBUG_INFO_4 | HEX | High | unsigned char | - | - | - | - |
| 0x4006 | DEBUG_INFO_5 | HEX | High | unsigned char | - | - | - | - |
| 0x5001 | SG_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5006 | SYSTEMZUSTAND | 0-n | High | 0xFF | TAB_SYSTEM_STATE | - | - | - |
| 0x5007 | UPTIME | ms | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x500E | STELLERGESCHWINDIGKEIT | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5014 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5016 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5018 | EPS_ZAHNSTANGENHUB | mm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5019 | LENKWINKELGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x501A | HANDMOMENT | Nm | High | signed char | - | 1.0 | 5.0 | 0.0 |
| 0x501B | MOTORMOMENT | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5100 | ErrorID | HEX | High | unsigned int | - | - | - | - |
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
| 0x000001 | FLEXRAY controller ACS error | 0 | - |
| 0x000002 | FLEXRAY controller NIT error | 0 | - |
| 0x200001 | SEC_TKP_EWBOVERFLOW | 0 | - |
| 0x200002 | SEC_TKP_SDBOVERFLOW | 0 | - |
| 0x200003 | SEC_TKP_SCQOVERFLOW | 0 | - |
| 0x200004 | SEC_TKP_RCV_ASIL_ERROR_QUEUE_OVF | 0 | - |
| 0x200005 | SEC_TKP_RCV_ERROR_QUEUE_OVF | 0 | - |
| 0x200006 | SEC_TKP_RCV_SNAPSHOT_QUEUE_OVF | 0 | - |
| 0x200007 | SEC_TKP_ERL_GEN_ERROR | 0 | - |
| 0x200008 | SEC_TKP_SCERR_OVERVOLTAGE | 0 | - |
| 0x200009 | SEC_TKP_SCERR_UNDERVOLTAGE | 0 | - |
| 0x20000A | SEC_TKP_SCERR_MSA_UNDERVOLTAGE | 0 | - |
| 0x20000B | SEC_TKP_SCERR_NET_OVERVOLTAGE | 0 | - |
| 0x20000C | SEC_TKP_SCERR_NET_UNDERVOLTAGE | 0 | - |
| 0x20000D | SEC_TKP_SCERR_GLOB_OVERVOLTAGE_INT | 0 | - |
| 0x20000E | SEC_TKP_SCERR_GLOB_OVERVOLTAGE_EXT | 0 | - |
| 0x20000F | SEC_TKP_SCERR_GLOB_UNDERVOLTAGE_INT | 0 | - |
| 0x200010 | SEC_TKP_SCERR_GLOB_UNDERVOLTAGE_EXT | 0 | - |
| 0x200011 | SEC_TKP_SCERR_GLOB_UNDERVOLTAGE_MSA_INT | 0 | - |
| 0x200012 | SEC_TKP_SCERR_GLOB_UNDERVOLTAGE_MSA_EXT | 0 | - |
| 0x200013 | SEC_TKP_ERM_D9932_MESSAGE_ERROR | 0 | - |
| 0x200014 | SEC_TKP_ERM_D9931_SDC_INPUT_BUFFER_OVERFLOW | 0 | - |
| 0x200015 | SEC_TKP_AM_D6010_EXTENDED_GDU_TEST | 0 | - |
| 0x200016 | SEC_TKP_AM_D6011_GDU_CONFIG_CRC_CHECK | 0 | - |
| 0x200017 | SEC_TKP_AM_D6012_GDU_SHOOT_THROUGH | 0 | - |
| 0x200018 | SEC_TKP_AM_D6017_GDU_VS | 0 | - |
| 0x200019 | SEC_TKP_AM_D6019_GDU_VCC5 | 0 | - |
| 0x20001A | SEC_TKP_AM_D6020_GDU_VCC3 | 1 | - |
| 0x20001B | SEC_TKP_AM_D6607_GDU_SWITCH_OFF_TEST_BY_SBC | 0 | - |
| 0x20001C | SEC_TKP_AM_D6608_GDU_SWITCH_OFF_TEST_BY_MCU | 0 | - |
| 0x20001D | SEC_TKP_AM_D6609_RELAY_SWITCH_OFF_TEST | 0 | - |
| 0x20001E | SEC_TKP_AM_D6829_PHASE_BRIDGE_CHECK | 0 | - |
| 0x20001F | SEC_TKP_AM_GDU_FAILURE | 0 | - |
| 0x200020 | SEC_TKP_AM_STARTUP_TEST_FAILED | 0 | - |
| 0x200021 | SEC_TKP_AS_INVALID_ACTUATOR_USE | 0 | - |
| 0x200022 | SEC_TKP_AS_OPERATING_CONDITION_FAILED | 0 | - |
| 0x200023 | SEC_TKP_AS_TEST_STATUS_ERROR | 0 | - |
| 0x200024 | SEC_TKP_ADC_D2003_CALIBRATION_OR_INIT_FAILURE | 0 | - |
| 0x200025 | SEC_TKP_ADC_D2003_SELFTEST | 0 | - |
| 0x200026 | SEC_TKP_ADC_D2004_D2005_CTUEFR | 0 | - |
| 0x200027 | SEC_TKP_CPUG_NOT_SUPPORTED_MCU | 0 | - |
| 0x200028 | SEC_TKP_ADC_D2004_UNEXPECTED_DATA | 0 | - |
| 0x200029 | SEC_TKP_ADC_D2004_UNEXPECTED_NUM_OF_DATA | 0 | - |
| 0x20002A | SEC_TKP_ADC_D2020_MUX_ERROR | 0 | - |
| 0x20002C | SEC_TKP_CPUG_D8001_D8019_CONFIG_CRC_ERROR | 0 | - |
| 0x20002D | SEC_TKP_CPUG_D8023_STP_REG_CRC_ERROR | 0 | - |
| 0x20002E | SEC_TKP_CPUG_D8032_MBISTECCCHECK | 0 | - |
| 0x20002F | SEC_TKP_CPUG_D8014_STP_REF_CLK_CHK | 0 | - |
| 0x200030 | SEC_TKP_CPUG_D8815_FLASH_CRC_ERROR | 0 | - |
| 0x200033 | SEC_TKP_CPUG_E8128_LBIST_FOR_FLASH_IS_ON | 0 | - |
| 0x200034 | SEC_TKP_DM_D9005_DEADLINE_VIOLATION | 0 | - |
| 0x200035 | SEC_TKP_EXHA_D8704_CONTROL_FLOW_EXCEPTION | 0 | - |
| 0x200036 | SEC_TKP_EXHA_D9004_FLOATING_POINT_EXCEPTION | 0 | - |
| 0x200037 | SEC_TKP_EXHA_D9007_BAM_ACCESS_EXCEPTION | 0 | - |
| 0x200038 | SEC_TKP_EXHA_D9014_UNUSED_INTERRUPT_CALL_EXCEPTION | 0 | - |
| 0x200039 | SEC_TKP_EXHA_GENERAL_EXCEPTION | 0 | - |
| 0x20003A | SEC_TKP_EXHA_GENERAL_MACHINE_CHECK_EXCEPTION | 0 | - |
| 0x20003B | SEC_TKP_EXHA_MACHINE_CHECK_EXCEPTION_WITH_MC_ADDRESS | 0 | - |
| 0x20003C | SEC_TKP_FPWM_D8026_FAST_REGISTER_CHECK | 0 | - |
| 0x20003D | SEC_TKP_FPWM_D8028_DMA_CRC_DIAG | 0 | - |
| 0x20003E | SEC_TKP_FPWM_D8029_TIMER_SYNC_CHECK | 0 | - |
| 0x20003F | SEC_TKP_FT_COMPENSATED_ELECTRICAL_ANGLE_QUALIFIER | 0 | - |
| 0x200041 | SEC_TKP_INV_D9905_ERROR | 0 | - |
| 0x200042 | SEC_TKP_MOC_D2008_DCVOLTAGE_AGE | 0 | - |
| 0x200043 | SEC_TKP_MOC_D4450_ROTORSPEED_AGE | 0 | - |
| 0x200044 | SEC_TKP_MOC_D5003_D5907_BATTERYCURRENT_AGE | 0 | - |
| 0x200046 | SEC_TKP_PCMH_CH1_EOL_INVALID | 0 | - |
| 0x200048 | SEC_TKP_PSM_D2304_SBC_BANDGAP_VOLTAGE_ERROR | 0 | - |
| 0x200049 | SEC_TKP_RSTH_D8002_CORE_REDUNDANCY_ERROR | 0 | - |
| 0x20004C | SEC_TKP_RSTH_D2027_CORE_TEMPERATURE_OUT_OF_RANGE_HW_CHECK | 0 | - |
| 0x20004D | SEC_TKP_RSTH_D2001_INTERNAL_LOW_VOLTAGE | 0 | - |
| 0x20004E | SEC_TKP_RSTH_D2002_INTERNAL_HIGH_VOLTAGE | 0 | - |
| 0x20004F | SEC_TKP_RSTH_D2006_PMC_LVD_HVD_SELFTEST_ERROR | 0 | - |
| 0x200051 | SEC_TKP_RSTH_D8003_FCCU_BIST_RESULT_ERROR | 0 | - |
| 0x200053 | SEC_TKP_RSTH_D8809_RAM_UNCORR_ECC_OR_OVFL | 0 | - |
| 0x200054 | SEC_TKP_RSTH_D8821_FLASH_UNCORR_ECC_OR_OVFL | 0 | - |
| 0x200055 | SEC_TKP_RSTH_D8006_CLOCK_RESET | 0 | - |
| 0x200059 | SEC_TKP_RSTH_D8030_ADC_BIST_WATCHDOG | 0 | - |
| 0x20005E | SEC_TKP_RPP_D4401_ANGLE_DIFF_INTOLERABLE | 0 | - |
| 0x20005F | SEC_TKP_RPP_D4450_ANGLE_SPEED_DIFF_INTOLERABLE | 0 | - |
| 0x200060 | SEC_TKP_TED_D2016_DCLINKCAPACITOR_TEMPERATURE_CHECKER | 0 | - |
| 0x200061 | SEC_TKP_TED_D2017_RELAYFETJUNCTION_TEMPERATURE_CHECKER | 0 | - |
| 0x200063 | SEC_TKP_TED_D2204_MOTORCOIL_TEMPERATURE_CHECKER | 0 | - |
| 0x200064 | SEC_TKP_TED_D2208_BRIDGEFETJUNCTION_TEMPERATURE_CHECKER | 0 | - |
| 0x200065 | SEC_TKP_TED_D2210_MAINBOARD_TEMPERATURE_CHECKER | 0 | - |
| 0x200066 | SEC_TKP_TED_D2212_POWERELECTRICCARRIER_TEMPERATURE_CHECKER | 0 | - |
| 0x200068 | SEC_TKP_TSMB_D2025_MAINBOARD_TEMP_IMPLAUSIBLE | 0 | - |
| 0x200069 | SEC_TKP_TSMC_D2007_CORE_TEMP_DIFF | 0 | - |
| 0x20006E | SEC_TKP_SBC_D8702_Q_A_WATCHDOG_FI | 0 | - |
| 0x20006F | SEC_TKP_SBC_D8009_ESM_SAFE_STATE | 0 | - |
| 0x200070 | SEC_TKP_SBC_D8705_Q_A_WATCHDOG_RESET | 0 | - |
| 0x200071 | SEC_TKP_SBC_ERROR_FLAG | 0 | - |
| 0x200072 | SEC_TKP_SBC_POWER_FAILURE | 0 | - |
| 0x200073 | SEC_TKP_SCTP_TSU_STATIC_FAILURE | 0 | - |
| 0x200074 | SEC_TKP_PSP_INVALID_PARAMSET | 0 | - |
| 0x200075 | SEC_TKP_CPUG_D8022_MPU_FAULT_INJECTION | 0 | - |
| 0x200076 | SEC_TKP_MD_D5508 | 0 | - |
| 0x200077 | SEC_TKP_SA_REGULATOR_ERROR | 0 | - |
| 0x200078 | SEC_TKP_SA_INTERFACE_ERROR | 0 | - |
| 0x200079 | SEC_TKP_IEPP_INDEX_EDGE_INVALID | 0 | - |
| 0x20007A | SEC_TKP_IEPP_INDEX_SIGNAL_FAILURE | 0 | - |
| 0x20007B | SEC_TKP_IEPP_INDEX_SHORT_GND | 0 | - |
| 0x20007C | SEC_TKP_IEPP_INDEX_SHORT_PLUS_OR_CUT | 0 | - |
| 0x20007E | SEC_TKP_IEPP_D4016_ICM_CALIBRATION_FAILURE | 0 | - |
| 0x20007F | SEC_TKP_IEPP_D4021_RTC_COUNTER_FAILURE | 0 | - |
| 0x200080 | SEC_TKP_UNDERVOLTAGE_DEGRADATION_DURING_MSA_START | 0 | - |
| 0x200081 | SEC_TKP_CTC_INTERFACE_ERROR | 0 | - |
| 0x200082 | SEC_TKP_FRM_MECH_FRIC_HIGH | 0 | - |
| 0x200083 | SEC_TKP_FRM_INTERFACE_ERROR | 0 | - |
| 0x200084 | SEC_TKP_MTL_INTERFACE_ERROR | 0 | - |
| 0x200085 | SEC_TKP_APP_RACK_RANGE_INVALID | 0 | - |
| 0x200087 | SEC_TKP_GDH_QUEUE_FULL | 0 | - |
| 0x200088 | SEC_TKP_TSPEC_D2028_POWERELECTRICCARRIER_TEMP_IMPLAUSIBLE | 0 | - |
| 0x20008A | SEC_TKP_TSMB_EOL_INVALID_DATA | 0 | - |
| 0x20008B | SEC_TKP_CPUG_D8815_FLASH_SINGLE_BIT_CORRECTABLE_ERRORS | 0 | - |
| 0x20008C | SEC_TKP_CPUG_D8034_PERMANENT_1BIT_RAM_ERROR | 0 | - |
| 0x20008D | SEC_TKP_EAP_EOL_INVALID_DATA | 0 | - |
| 0x20008E | SEC_TKP_SCN_ZC_EOL_INVALID_DATA | 0 | - |
| 0x20008F | SEC_TKP_SCN_RO_EOL_INVALID_DATA | 0 | - |
| 0x200090 | SEC_TKP_BVM_EOL_INVALID_DATA | 0 | - |
| 0x200091 | SEC_TKP_PCMH_CH2_EOL_INVALID | 0 | - |
| 0x200092 | SEC_TKP_PSM_EOL_INVALID | 0 | - |
| 0x200093 | SEC_TKP_TSC1_EOL_INVALID_DATA | 0 | - |
| 0x200094 | SEC_TKP_TSC2_EOL_INVALID_DATA | 0 | - |
| 0x200095 | SEC_TKP_AM_GDU_EOL_INVALID | 0 | - |
| 0x200096 | SEC_TKP_EXHA_OS_ERROR | 0 | - |
| 0x200097 | SEC_TKP_RPP_EOL_INVALID_DATA | 0 | - |
| 0x200099 | SEC_TKP_SDM_INVALID_STATE | 0 | - |
| 0x20009C | SEC_TKP_MCD_D9904 | 0 | - |
| 0x20009D | SEC_TKP_CPUG_CUT21B_LBIST_FOR_FLASH_IS_OFF | 0 | - |
| 0x20009F | SEC_TKP_PSM_D2029_PMC_BANDGAP_VOLTAGE_ERROR | 0 | - |
| 0x2000A0 | SEC_TKP_ETSM_WARNING | 0 | - |
| 0x2000A1 | SEC_TKP_ETSM_REDIRECTED | 0 | - |
| 0x2000A2 | SEC_TKP_ADC_D8035_TRIGGER_TIME_CHK | 0 | - |
| 0x2000A3 | SEC_TKP_ADC_D8026_FAST_REGISTER_CHECK | 0 | - |
| 0x2000A4 | SEC_TKP_SCERR_FLEXRAY_ERROR | 0 | - |
| 0x2000A5 | SEC_TKP_SCERR_FLEXRAY_CC_ERROR | 0 | - |
| 0x2000A6 | SEC_TKP_MRM_DEG_UNDERVOLTAGE | 0 | - |
| 0x2000A7 | SEC_TKP_MRM_MIN_DEG_OVERTEMP | 0 | - |
| 0x2000A8 | SEC_TKP_MRM_DEG_OVERTEMP | 0 | - |
| 0x2000AA | SEC_TKP_MOC_KGVALUE_AGE | 0 | - |
| 0x2000AB | SEC_TKP_AM_D6032_INT_REGULATOR_ERROR | 0 | - |
| 0x2000AC | SEC_TKP_DM_D9024_DEADLINE_VIOLATION | 0 | - |
| 0x2000AD | SEC_TKP_MOC_ELANG_MOTORCURRENT_AGE | 0 | - |
| 0x2000AE | SEC_TKP_RIRAP_NVM_ERROR | 0 | - |
| 0x2000AF | SEC_TKP_RIRAP_COUNTING_LOST | 0 | - |
| 0x2000B1 | SEC_TKP_SBC_TEMP_PREWARNING | 0 | - |
| 0x2000B2 | SEC_TKP_SBC_OVER_TEMP | 0 | - |
| 0x2000B4 | SEC_TKP_MRM_DEG_OVERVOLTAGE | 0 | - |
| 0x2000B5 | SEC_TKP_APP_ABS_ANG_UNK | 0 | - |
| 0x2000B6 | SEC_TKP_APP_ABS_ANG_UNK_VEH_SPEED_HIGH | 0 | - |
| 0x2000B7 | SEC_TKP_HSTWOC_HSTWO_UNK | 0 | - |
| 0x2000B8 | SEC_TKP_BJH_D1001_BELT_JUMP_OVER_SAFETY_LIMIT | 0 | - |
| 0x2000B9 | SEC_TKP_BJH_D1002_BELT_JUMP | 0 | - |
| 0x2000BA | SEC_TKP_POASUP_D9012_POA_ERROR | 0 | - |
| 0x2000BB | SEC_TKP_RPC_INTERFACE_ERROR | 0 | - |
| 0x2000BC | SEC_TKP_AM_VOLTAGE_QUALIFIER_ERROR | 0 | - |
| 0x2000BD | SEC_TKP_FDR_OCL_FREEZING | 0 | - |
| 0x2000BE | SEC_TKP_FDR_OCL_BLOCKING | 0 | - |
| 0x2000BF | SEC_TKP_FDR_OCL_FAILURE | 0 | - |
| 0x2000C2 | SEC_TKP_LDW_SAFE_VIOL_ERROR | 0 | - |
| 0x2000C3 | SEC_TKP_AM_PHASECURRENT_QUALIFIER_ERROR | 0 | - |
| 0x2000C5 | SEC_TKP_CPUG_D8826_STP_FLASH_ECC_SELFTEST | 0 | - |
| 0x2000C6 | SEC_TKP_FT_D4450_ROTORSPEED_AGE | 0 | - |
| 0x2000C7 | SEC_TKP_SBC_DIAG_STATE_TO | 0 | - |
| 0x2000C8 | SEC_TKP_SBC_D4027_SAM_POWER_ON_RST | 0 | - |
| 0x2000C9 | SEC_TKP_SBC_D4027_SAM_ERROR | 0 | - |
| 0x2000CA | SEC_TKP_BOTARC_POSTRUN_REGISTRATION_FAILED | 0 | - |
| 0x2000CB | SEC_TKP_SBC_GH_FATAL_ERROR | 0 | - |
| 0x2000CD | SEC_TKP_SCP_INPUT_TIMEOUT | 0 | - |
| 0x2000CE | SEC_TKP_SCP_INVALID_INPUT | 0 | - |
| 0x2000CF | SEC_TKP_SDSM_POSTRUN_INVALIDATION_ERROR | 0 | - |
| 0x2000D0 | SEC_TKP_SDSM_POSTRUN_REGISTRATION_ERROR | 0 | - |
| 0x2000D2 | SEC_TKP_SBC_COMM_BUFFER_OVERFLOW | 0 | - |
| 0x2000D3 | SEC_TKP_SBC_D2309_COMM_ERROR_SBC_TO_MCU | 0 | - |
| 0x2000D4 | SEC_TKP_SBC_D2308_COMM_ERROR_MCU_TO_SBC | 0 | - |
| 0x2000D5 | SEC_TKP_SDSM_PERIODIC_STORE_ERROR | 0 | - |
| 0x2000D6 | SEC_TKP_SBC_D2309_COMM_ERROR_SBC_TO_MCU_RH | 0 | - |
| 0x2000D7 | SEC_TKP_IEPP_INTERFACE_ERROR | 0 | - |
| 0x2000D8 | SEC_TKP_IEPP_EOL_INVALID | 0 | - |
| 0x2000D9 | SEC_TKP_APP_EOL_INVALID | 0 | - |
| 0x2000DA | SEC_TKP_VEL_INTERFACE_ERROR | 0 | - |
| 0x2000DB | SEC_TKP_VELH_INTERFACE_ERROR | 0 | - |
| 0x2000DC | SEC_TKP_CPUG_PROTECTED_RESET_VARS_CORRUPTED | 0 | - |
| 0x2000DD | SEC_TKP_LDW_INP_SIG_ERROR | 1 | - |
| 0x2000DE | SEC_TKP_LDW_CONT_SIG_INC_ERROR | 1 | - |
| 0x2000DF | SEC_TKP_SMM_EOL_INVALID | 1 | - |
| 0x2000E0 | SEC_TKP_SBC_D2303_VDD6_FAILURE | 1 | - |
| 0x2000E1 | SEC_TKP_SBC_VBATL_UNDERVOLTAGE_FAILURE | 1 | - |
| 0x2000E2 | SEC_TKP_SBC_VREG_VDD3_5_UNDERVOLTAGE_FAILURE | 1 | - |
| 0x2000E3 | SEC_TKP_SBC_D2301_VDD3_5_OVERVOLTAGE_FAILURE | 1 | - |
| 0x2000E4 | SEC_TKP_SCP_D8018_UNKNOWN_RESET_SOURCE | 1 | - |
| 0x2000E5 | SEC_TKP_SBC_D2304_CFG_FAILURE | 1 | - |
| 0x2000E6 | SEC_TKP_TSMB_D2031_MAINBOARD_TEMP_IMPLAUSIBLE | 1 | - |
| 0x2000E7 | SEC_TKP_TSMC1C_CALIBRATION_TIMEOUT | 1 | - |
| 0x2000E8 | SEC_TKP_TSMC2C_CALIBRATION_TIMEOUT | 1 | - |
| 0x2000E9 | SEC_TKP_RSTH_D8036_PFLASH_ECC_LOGIC_ERROR | 1 | - |
| 0x2000EA | SEC_TKP_RSTH_D8036_PFLASH_TRANS_MON_ERROR | 1 | - |
| 0x2000EB | SEC_TKP_RSTH_D8036_XBAR_OR_CONC_TRANS_MON_MISMATCH | 1 | - |
| 0x2000EC | SEC_TKP_RSTH_D8036_MEMORY_FEEDBACK_ALARM | 1 | - |
| 0x2000ED | SEC_TKP_RSTH_D8036_GENERAL_RGM_RESET | 1 | - |
| 0x2000EE | SEC_TKP_RSTH_D8036_RESET_ESCALATOR_RESET | 1 | - |
| 0x2000EF | SEC_TKP_RSTH_D8036_FOSU_RESET | 1 | - |
| 0x2000F0 | SEC_TKP_RSTH_D8036_GENERAL_FCCU_ERROR_NCF | 1 | - |
| 0x2000F1 | SEC_TKP_RSTH_D8018_UNKNOWN_RESET_SOURCE | 1 | - |
| 0x2000F2 | SEC_TKP_SBC_D2318_GH_INVALID_REVISION | 1 | - |
| 0x2000F3 | SEC_TKP_RSTH_D8704_SWT_TIMEOUT | 1 | - |
| 0x2000F4 | SEC_TKP_DC_D9010_ARRAY_OVERFLOW | 1 | - |
| 0x2000F5 | SEC_TKP_BCLP_D9010_ARRAY_OVERFLOW | 1 | - |
| 0x2000F6 | SEC_TKP_EXHA_ALIGNMENT_EXCEPTION_WITH_DATA_EXC_ADDR | 1 | - |
| 0x2000F7 | SEC_TKP_EXHA_DATA_STORAGE_EXCEPTION_WITH_DATA_EXC_ADDR | 1 | - |
| 0x2000F8 | SEC_TKP_EMCD_D6036_COMM_ERROR | 1 | - |
| 0x2000F9 | SEC_TKP_EMCD_D6037_EXT_MICRO_SELFTEST_FAILED | 1 | - |
| 0x2000FB | SEC_TKP_EXHA_SMPU_VIOLATION | 1 | - |
| 0x2000FC | SEC_TKP_RPMBSDM_D6007_RPM_STATUS_MISMATCH | 1 | - |
| 0x2000FD | SEC_TKP_EMCD_EXT_MICRO_RESET | 1 | - |
| 0x2000FE | SEC_TKP_EMCD_D6040_EXT_MICRO_FW_INCOMPATIBLE | 1 | - |
| 0x2000FF | SEC_TKP_SA_FRS_FAST_RESTART | 1 | - |
| 0x200100 | SEC_TKP_SA_FRS_NORMAL_RESTART | 1 | - |
| 0x200101 | SEC_TKP_SA_FRS_NO_ASSIST_ACTIVATED | 1 | - |
| 0x200102 | SEC_TKP_SLOA_DEGRADATION_REQUEST | 1 | - |
| 0x200103 | SEC_TKP_AM_INPUT_BUFFER_OVERFLOW | 1 | - |
| 0x200104 | SEC_TKP_SA_DIVERSE_PDT | 1 | - |
| 0x200105 | SEC_TKP_PM_LIMITED_CURRENT | 1 | - |
| 0x200106 | SEC_TKP_PSP_SYSID_STFID_MISMATCH | 1 | - |
| 0x200107 | SEC_TKP_AM_EMERGENCY_OFF_REQUESTED_ERROR | 1 | - |
| 0x200108 | SEC_TKP_SBC_D2304_CFG_CRC_ERROR | 1 | - |
| 0x200109 | SEC_TKP_PM_ENSU_SFY_SIGNAL_ERROR | 1 | - |
| 0x20010A | SEC_TKP_PM_ENSU_SFY_SIGNAL_ERROR_SEC | 1 | - |
| 0x20010B | SEC_TKP_ILH_CONSISTENCY_ERROR | 1 | - |
| 0x20010C | SEC_TKP_SUBSTITUTE_SPEED_USED | 1 | - |
| 0x20010D | SEC_TKP_TED_D2216_EMIFILTER_TEMPERATURE_CHECKER | 1 | - |
| 0x200241 | SEC_TKP_GENERAL1 | 0 | - |
| 0x200242 | SEC_TKP_GENERAL2 | 0 | - |
| 0x200243 | SEC_TKP_GENERAL3 | 0 | - |
| 0x200244 | SEC_TKP_GENERAL4 | 0 | - |
| 0x200245 | SEC_TKP_GENERAL5 | 0 | - |
| 0x200246 | SEC_TKP_GENERAL6 | 0 | - |
| 0x200247 | SEC_TKP_GENERAL7 | 0 | - |
| 0x200248 | SEC_TKP_GENERAL8 | 0 | - |
| 0x200249 | SEC_TKP_GENERAL9 | 0 | - |
| 0x20024A | SEC_TKP_GENERAL10 | 0 | - |
| 0x20024B | SEC_TKP_GENERAL11 | 0 | - |
| 0x20024C | SEC_TKP_GENERAL12 | 0 | - |
| 0x20024D | SEC_TKP_GENERAL13 | 0 | - |
| 0x20024E | SEC_TKP_GENERAL14 | 0 | - |
| 0x20024F | SEC_TKP_GENERAL15 | 0 | - |
| 0x200250 | SEC_TKP_GENERAL16 | 0 | - |
| 0x2002B7 | Steuergerät intern - Security Diagnose Request in verriegeltem Zustand erhalten | 0 | - |
| 0x482298 | MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x482299 | MCU_E_LCLOCK_0_FAILURE | 0 | - |
| 0x48229A | MCU_E_HCLOCK_0_FAILURE | 0 | - |
| 0x48229B | MCU_E_LOCK_0_FAILURE | 0 | - |
| 0x48229C | MCU_E_RCCLOCK_0_FAILURE | 0 | - |
| 0x48229D | MCU_E_LCLOCK_1_FAILURE | 0 | - |
| 0x48229E | MCU_E_HCLOCK_1_FAILURE | 0 | - |
| 0x48229F | MCU_E_RCCLOCK_1_FAILURE | 0 | - |
| 0x4822A0 | MCU_E_LOCK_1_FAILURE | 0 | - |
| 0x4822A1 | MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x4822A2 | MCU_E_TIMEOUT_OSC_STABILITY | 0 | - |
| 0x4822A3 | MCU_E_RC_MEASURE | 0 | - |
| 0x4822A4 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x482383 | Nichtflüchtiger Speicher - Falsche Config-ID | 0 | - |
| 0x482389 | Nichtflüchtiger Speicher - Schreiben gescheitert | 0 | - |
| 0x48238A | Nichtflüchtiger Speicher - Lesen gescheitert | 0 | - |
| 0x482451 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 | - |
| 0x482453 | Sensor - Lenkwinkel Index Verdacht Riemensprung | 0 | - |
| 0x482454 | Lenkgetriebe - Reibung zu hoch | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | MOTOR_LAEUFT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | KALTSTART_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MSA_START_VORHANDEN | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GENERATORENTLASTUNG_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2873 | STAT_TEMP_AKTUATOR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4000 | ETSR | HEX | High | unsigned long | - | - | - | - |
| 0x4001 | DEBUG_INFO_0 | HEX | High | unsigned char | - | - | - | - |
| 0x4002 | DEBUG_INFO_1 | HEX | High | unsigned char | - | - | - | - |
| 0x4003 | DEBUG_INFO_2 | HEX | High | unsigned char | - | - | - | - |
| 0x4004 | DEBUG_INFO_3 | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | DEBUG_INFO_4 | HEX | High | unsigned char | - | - | - | - |
| 0x4006 | DEBUG_INFO_5 | HEX | High | unsigned char | - | - | - | - |
| 0x5001 | SG_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5006 | SYSTEMZUSTAND | 0-n | High | 0xFF | TAB_SYSTEM_STATE | - | - | - |
| 0x5007 | UPTIME | ms | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x500E | STELLERGESCHWINDIGKEIT | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5014 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5016 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5018 | EPS_ZAHNSTANGENHUB | mm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5019 | LENKWINKELGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x501A | HANDMOMENT | Nm | High | signed char | - | 1.0 | 5.0 | 0.0 |
| 0x501B | MOTORMOMENT | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5100 | ErrorID | HEX | High | unsigned int | - | - | - | - |
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

### RES_0X6000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAHNSTANGENHUB_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Zahnstangenhub |
| STAT_RITZELWINKEL_WERT | ° | high | signed long | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des Ritzelwinkels |
| STAT_GESAMTZAHNSTANGENHUB_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Gesamtzahnstangenhubs |
| STAT_GESAMTRITZELWINKEL_WERT | ° | high | signed long | - | - | 1.0 | 100.0 | 0.0 | Ausgabe des Gesamtritzelwinkels |
| STAT_STROM_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des DC-Stromes |
| STAT_STROMLIMIT_WERT | A | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der aktuell gültigen Strombegrenzung |
| STAT_SPANNUNG_WERT | V | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Kl30 Spannung |
| STAT_BOARDTEMPERATUR_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ermittelten Board temperatur |
| STAT_MOTORTEMPERATUR_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der ermittelten Motortemperatur |
| STAT_SOLL_MOTOR_MOMENT_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Soll Motor Momentes |
| STAT_IST_MOTOR_MOMENT_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Ist Motor Momentes |
| STAT_ZAHNSTANGENKRAFT_WERT | N | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der geschätzten Zahnstangenkraft |
| STAT_SOLLHANDMOMENT_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Soll Handmomentes |
| STAT_ISTHANDMOMENT_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Ist Handmomentes (AVL_STMOM_DV) |
| STAT_REIBUNG_WERT | N | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des gelernten Reibungswertes |
| STAT_PULLDRIFT_WERT | N | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des gelernten Pulldriftwertes |
| STAT_FAHRZEUGGESCHWINDIGKEIT_INTERN_WERT | km/h | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des internen Wertes der Fahrzeuggeschwindigkeit |

### RES_0X6002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_TEMP_LOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Motortemperatur Bereich 1 (kleiner -20 °C) - timing: 50 ms |
| STAT_MOT_TEMP_MIDDLE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Motortemperatur Bereich 2 (größer-gleich -20 °C && kleiner Limit motor temp.) - timing: 50 ms. |
| STAT_MOT_TEMP_HIGH_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Motortemperatur Bereich 3 (kleiner Limit motor temp.) - timing: 50 ms. |
| STAT_MOT_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Absolutwertzähler für maximale Motortemperatur - timing: 100 ms. |
| STAT_ECU_TEMP_LOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für ECU-Temperaturbereich 1 (kleiner -20 °C) - timing: 50 ms. |
| STAT_ECU_TEMP_MIDDLE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für ECU-Temperaturbereich 2 (größer-gleich -20 °C && kleiner Limit ECU temp.) - timing: 50 ms. |
| STAT_ECU_TEMP_HIGH_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für ECU-Temperaturbereich 3 (größer-gleich Limit ECU temp.) - timing: 50 ms. |
| STAT_ECU_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Absolutwertzähler für maximale ECU-Temperatur - timing: 100 ms. |
| STAT_PM_TEMP_LOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Leistungsmodultemperatur Bereich 1 (kleiner -20 °C) - timing: 50 ms. |
| STAT_PM_TEMP_MIDDLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Leistungsmodultemperatur Bereich 2 (größer-gleich -20 °C && kleiner Limit Leistungsmodul temp.) - timing: 50 ms. |
| STAT_PM_TEMP_HIGH_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Leistungsmodultemperatur Bereich 3 (größer-gleich Limit Leistungsmodul temp.) - timing: 50 ms. |
| STAT_PM_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Absolutwertzähler für maximale Leistungsmodultemperatur - timing: 100 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOLT_CLASS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 1 (kleiner 6,3 V) - timing: 50 ms. |
| STAT_VOLT_CLASS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 2 (größer-gleich 6,3 V && kleiner 9 V) - timing: 50 ms |
| STAT_VOLT_CLASS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 3 (größer-gleich 9 V && kleiner 10 V) - timing: 50 ms. |
| STAT_VOLT_CLASS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 4 (größer-gleich 10 V && kleiner 17 V) - timing: 50 ms. |
| STAT_VOLT_CLASS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 5 (größer-gleich 17 V && kleiner 27 V) - timing: 50 ms. |
| STAT_VOLT_CLASS_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) Bereich 6 (größer-gleich 27 V) - timing: 50 ms. |
| STAT_VOLT_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Absolutwertzähler für maximale EPS Spannung (Kl. 30) - timing: 50 ms. |
| STAT_VOLT_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Absolutwertzähler für minimale EPS Spannung (Kl. 30) - timing: 50 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA_CLASS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 1 (kleiner 6 V) - timing: 10 ms. |
| STAT_MSA_CLASS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 2 (größer-gleich 6 V && kleiner 6,5 V)- timing: 10 ms. |
| STAT_MSA_CLASS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 3 (größer-gleich 6,5 V && kleiner 7 V)- timing: 10 ms. |
| STAT_MSA_CLASS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 4 (größer-gleich 7 V && kleiner 7,5 V)- timing: 10 ms. |
| STAT_MSA_CLASS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 5 (größer-gleich 7,5 V && below 8 V)- timing: 10 ms |
| STAT_MSA_CLASS_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS Spannung (Kl. 30) während MSA Bereich 6 (größer-gleich 8 V)- timing: 10 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURR_CLASS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 1 (kleiner 40 A) - timing: 50 ms. |
| STAT_CURR_CLASS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 2 (größer-gleich 40 A && kleiner 55 A) - timing: 50 ms. |
| STAT_CURR_CLASS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 3 (größer-gleich 55 A && kleiner 70 A) - timing: 50 ms. |
| STAT_CURR_CLASS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 4 (größer-gleich 70 A && kleiner 85 A) - timing: 50 ms. |
| STAT_CURR_CLASS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 5 (größer-gleich 85 A && kleiner 105 A) - timing: 50 ms. |
| STAT_CURR_CLASS_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 6 (größer-gleich 105 A && kleiner 120 A) - timing: 50 ms. |
| STAT_CURR_CLASS_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für EPS-Strom (DC) Bereich 7 (größer-gleich 120 A) - timing: 50 ms. |
| STAT_CURR_MAX_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Absolutwertzähler für maximalen Strom - timing: 50 ms. |
| STAT_REC_CURR_MAX_WERT | A | high | unsigned char | - | - | -1.0 | 1.0 | 0.0 | Absolutwertzähler für maximalen Rekuperationsstrom - timing: 50 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_END_RIGHT_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für rechten Endanschlag Zeitkriterium low (kleiner 100 ms). |
| STAT_END_RIGHT_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für rechten Endanschlag Zeitkriterium middle (größer-gleich 100 ms && kleiner 1000 ms). |
| STAT_END_RIGHT_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für rechten Endanschlag Zeitkriterium high (größer-gleich 1000 ms). |
| STAT_END_RIGHT_TIME_MAX_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Absolutwertzähler für die Zeit im rechten Endanschlag - timing: 10 ms. |
| STAT_END_LEFT_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für linken Endanschlag Zeitkriterium low (kleiner 100 ms). |
| STAT_END_LEFT_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für linken Endanschlag Zeitkriterium middle (größer-gleich 100 ms && kleiner 1000 ms). |
| STAT_END_LEFT_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für linken Endanschlag Zeitkriterium high (größer-gleich 1000 ms). |
| STAT_END_LEFT_TIME_MAX_WERT | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolutwertzähler für die Zeit im linken Endanschlag - timing: 10 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWR_CLASS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Lenkleistung Bereich 1 (kleiner 600 W) - timing: 50 ms. |
| STAT_PWR_CLASS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Lenkleistung Bereich 2 (größer-gleich 600 W && kleiner 900 W) - timing: 50 ms. |
| STAT_PWR_CLASS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Lenkleistung Bereich 3 (größer-gleich 900 W && kleiner 1200 W) - timing: 50 ms. |
| STAT_PWR_CLASS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Lenkleistung Bereich 4 (größer-gleich 1200 W && kleiner 1500 W) - timing: 50 ms. |
| STAT_PWR_CLASS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Lenkleistung Bereich 5 (größer-gleich 1500 W) - timing: 50 ms. |
| STAT_PWR_MAX_WERT | kW | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Absolutwertzähler für maximale Lenkleistung - timing: 50 ms. |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0X6008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPD_CLASS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Zahnstangengeschwindigkeit Bereich 1 (kleiner 100 mm/s)  - timing: 50 ms. |
| STAT_SPD_CLASS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Zahnstangengeschwindigkeit Bereich 2 (größer-gleich 100 mm/s && kleiner 200 mm/s) - timing: 50 ms. |
| STAT_SPD_CLASS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Zahnstangengeschwindigkeit Bereich 3 (größer-gleich 200 mm/s && kleiner 300 mm/s) - timing: 50 ms. |
| STAT_SPD_CLASS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Zahnstangengeschwindigkeit Bereich 4 (größer-gleich 300 mm/s && kleiner 400 mm/s) - timing: 50 ms. |
| STAT_SPD_CLASS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für Zahnstangengeschwindigkeit Bereich 5 (größer-gleich 400 mm/s) - timing: 50 ms. |
| STAT_SPD_MAX_WERT | mm/s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolutwertzähler für maximale Zahnstangengeschwindigkeit - timing: 50 ms |
| STAT_COUNTER_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Interne Version der Statistikzähler.  |
| STAT_MILEAGE_COUNTER_START_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Zählbeginn der Statistiken. |

### RES_0XAB20_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | - | - | - | Ergebnis der Routine |
| STAT_ZUSTAND_SPURSTANGE | - | - | + | 0-n | high | unsigned char | - | TAB_VERBAUT | - | - | - | Spurstangen eingehaengt ja oder nein |
| STAT_REIBUNG_DURCHSCHNITT_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf der gesamten Zahnstange |
| STAT_REIBUNG_SEGMENT_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 1. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 2. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_3_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 3. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_4_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 4. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_5_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 5. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_6_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 6. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_7_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 7. Segment der Zahnstange |
| STAT_REIBUNG_SEGMENT_8_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 128.0 | 0.0 | durchschnittliche Reibung auf dem 8. Segment der Zahnstange |

### RES_0XAB21_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |
| STAT_MOMENTENSENSOR_OFFSET_WERT | - | - | + | Nm | high | signed int | - | - | 1.0 | 128.0 | 0.0 | gelernter Offset nach dem lernen des neuen Offset des Lenkmomentensensors |

### RES_0XAB22_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Routine Status |
| STAT_EPS_DETAIL_EIGENDIAGNOSE | - | - | + | 0-n | high | unsigned char | - | TAB_EPS_DETAIL_EIGENDIAGNOSE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |
| STAT_OFFSET_ZAHNSTANGENMITTE_NEU_WERT | - | - | + | rad | high | signed int | - | - | 1.0 | 256.0 | 0.0 | Neuer Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_OFFSET_ZAHNSTANGENMITTE_ALT_WERT | - | - | + | rad | high | signed int | - | - | 1.0 | 256.0 | 0.0 | Alter Abstand der mittleren Index Flanke zur Zahnstangenmitte |
| STAT_ZAHNSTANGENLAENGE_WERT | - | - | + | mm | high | unsigned int | - | - | 1.0 | 256.0 | 0.0 | ermittelte Länge der Zahnstange |
| STAT_MOTORMOMENT_ANSCHLAG_LINKS_WERT | - | - | + | Nm | high | signed int | - | - | 1.0 | 256.0 | 0.0 | gestelltes Motormoment im linken Anschlag |
| STAT_MOTORMOMENT_ANSCHLAG_RECHTS_WERT | - | - | + | Nm | high | signed int | - | - | 1.0 | 256.0 | 0.0 | gestelltes Motormoment im rechten Anschlag |

### RES_0XAB56_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | unsigned char | - | TAB_EPS_SENSOR_ZUSTAND | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XAB71_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB72_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XDA7F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNPL_RES_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert der Fehlerzähler (FZ) |
| STAT_UNPL_RES_LIM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Triggerwert der dauerhaften Einschränkung (FZ_off) |
| STAT_UNPL_RES_INC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Inkrementwert der Fehlerzähler (FZ_ink) |
| STAT_UNPL_RES_DEC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dekrementwert der Fehlerzähler (FZ_dek) |

### RES_0XDACF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELTJUMP_ACTUAL_WERT | mm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Istwert des Riemenprungs von dem EPS |
| STAT_BELTJUMP_CUMULATED_WERT | mm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Kumulierter Wert des Riemenprungs von dem EPS |

### RES_0XDB57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | unsigned char | - | TAB_EPS_SENSOR_ZUSTAND | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### RES_0XDB99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | signed int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

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
| STATUS_DIAGNOSE_EPS_WERTE | 0x6000 | - | Ausgabe von EPS internen Werten (z.B. Strom, Spannung, Temperatur,..) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6000_D |
| STATUS_TEMPERATURE_COUNTER | 0x6002 | - | Statistiken der ECU, motor und Leistungsmodul Temperaturen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6002_D |
| STATUS_VOLTAGE_COUNTER | 0x6003 | - | Statistiken der EPS Spannung (Kl. 30). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6003_D |
| STATUS_MSA_COUNTER | 0x6004 | - | Statistiken der EPS Spannungslevels (Kl. 30) während MSA. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6004_D |
| STATUS_CURRENT_COUNTER | 0x6005 | - | Statistiken des EPS-Stroms (DC). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6005_D |
| STATUS_ENDSTOPS_COUNTER | 0x6006 | - | Statistiken der Endanschlägen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6006_D |
| STATUS_POWER_COUNTER | 0x6007 | - | Statistiken der Lenkleistung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6007_D |
| STATUS_RACKSPEED_COUNTER | 0x6008 | - | Statistiken der Zahnstangengeschwindigkeit. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6008_D |
| STEUERN_CLEAR_UNPLANNED_RESET_COUNTER | 0xA13C | - | Ermöglicht das Löschen des Zählers für ungeplante Resets des Steuergeräts. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_EIGENDIAGNOSE_REIBUNG | 0xAB20 | - | Prüft durch Verfahren der Lenkung die Reibung im Lenkungsstrang. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB20_R | RES_0xAB20_R |
| LENKMOMENTENSENSOR_OFFSET_LERNEN | 0xAB21 | - | Lernt durch Verfahren der Lenkung ein eventuell vorhandenes Offset des Lenkmomentensensors. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB21_R |
| EPS_INDEXSENSOR_KALIBRIERUNG | 0xAB22 | - | Lernt durch Verfahren der Lenkung die genaue Lage der Indexflanken auf der Lenksäule. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB22_R |
| EPS_PENDELN | 0xAB56 | - | Starten, Stoppen und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56_R | RES_0xAB56_R |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Reset Offset Lenkwinkel | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C_R |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71_R | RES_0xAB71_R |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72_R | RES_0xAB72_R |
| READ_UNPLANNED_RESET_COUNTER | 0xDA7F | - | Ermöglicht das Auslesen des Zählers für ungeplante Resets des Steuergeräts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA7F_D |
| READ_BELTJUMP | 0xDACF | - | Ermöglicht das Auslesen der Riemensprünge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDACF_D |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57_D |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen bzw. Vorgeben Offset Lenkwinkel  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDB5A_D | RES_0xDB5A_D |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99_D |
| READ_VOLTAGE | 0xDE4D | STAT_EPS_SUPPLY_VOLTAGE_WERT | Istwert der Versorgungsspannung von der EPS ECU | V | - | High | unsigned int | - | 1.0 | 1024.0 | 0.0 | - | 22 | - | - |
| STEUERN_RESET_COUNTER | 0xF100 | - | Reset aller Statistiken (Zähler auf Wert 0, Absolutwertzähler auf den aktuellen Wert). Betrifft alle Diagnosejobs mit der Endung _COUNTER. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_DEGRADATIONSSTATUS_EPS

| WERT | TEXT |
| --- | --- |
| 1 | Temperaturdegradation aktiv |
| 2 | Unterspannungsdegradation aktiv |
| 4 | Überspannungsdegradation aktiv |
| 0xFF | Wert ungültig |

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

### TAB_EPS_DETAIL_EIGENDIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg - kein Problem erkannt |
| 0x03 | Erfolg - Problem behoben |
| 0x04 | Fehler - Problem nicht behoben, bitte Wiederholen |
| 0x0A | Routine in aktueller Session nicht ausführbar, GARAGE_MODE starten |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Abbruch - Lenkradeingriff erfolgt |
| 0x0D | Abbruch - Sicherheitsabschaltung |
| 0x0E | Fehler - Indexsensor |
| 0x0F | Fehler - Kalibrierfehler |
| 0x10 | Abbruch - Lenkrad nicht in Mittenstellung |
| 0x11 | Abbruch - Vorderräder haben hohe Reibung |
| 0x13 | Abbruch - Vorderräder nicht frei beweglich |
| 0x14 | Fehler - Spannungsversorgung oder Temperatur |
| 0x15 | Fehler - Zahnriemen rutscht oder gerissen |
| 0x20 | Fehler - Reibung etwas erhöht |
| 0x21 | Fehler - Reibung stark erhöht |
| 0x80 | Erfolg |
| 0xFF | ungültig |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK |

### TAB_EPS_SENSOR_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Geradeausfahrt-Position nicht bekannt und Lenkgetriebemitte nicht gefunden |
| 0x01 | Geradeausfahrt-Position nicht bekannt,  Lenkgetriebemitte gefunden |
| 0x02 | Geradeausfahrt-Position bekannt, Lenkgetriebemitte nicht gefunden |
| 0x03 | Geradeausfahrt-Position bekannt und Lenkgetriebemitte gefunden |
| 0xFF | Wert ungültig |

### TAB_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0 | KFA_0 |
| 1 | KFA_1 |
| 2 | KFA_2 |
| 3 | KFA_3 |
| 4 | KFA_4 |
| 5 | KFA_5 |
| 6 | KFA_6 |
| 7 | KFA_7 |
| 8 | KFA_8 |
| 9 | KFA_9 |
| 10 | KFA_10 |
| 11 | KFA_11 |
| 12 | KFA_12 |
| 13 | KFA_13 |
| 14 | KFA_14 |
| 15 | KFA_15 |
| 16 | KFA_16 |
| 17 | KFA_17 |
| 18 | KFA_18 |
| 19 | KFA_19 |
| 20 | KFA_20 |
| 21 | KFA_21 |
| 22 | KFA_22 |
| 23 | KFA_23 |
| 24 | KFA_24 |
| 25 | KFA_25 |
| 26 | KFA_26 |
| 27 | KFA_27 |
| 28 | KFA_28 |
| 29 | KFA_29 |
| 30 | KFA_30 |
| 31 | KFA_31 |
| 32 | KFA_32 |
| 33 | KFA_33 |
| 34 | KFA_34 |
| 35 | KFA_35 |
| 36 | KFA_36 |
| 37 | KFA_37 |
| 38 | KFA_38 |
| 39 | KFA_39 |
| 40 | KFA_40 |
| 41 | KFA_41 |
| 42 | KFA_42 |
| 43 | KFA_43 |
| 44 | KFA_44 |
| 45 | KFA_45 |
| 46 | KFA_46 |
| 47 | KFA_47 |
| 48 | KFA_48 |
| 49 | KFA_49 |
| 50 | KFA_50 |
| 51 | KFA_51 |
| 52 | KFA_52 |
| 53 | KFA_53 |
| 54 | KFA_54 |
| 55 | KFA_55 |
| 56 | KFA_56 |
| 57 | KFA_57 |
| 58 | KFA_58 |
| 59 | KFA_59 |
| 60 | KFA_60 |
| 61 | KFA_61 |
| 62 | KFA_62 |
| 63 | KFA_63 |
| 64 | KFA_64 |
| 65 | KFA_65 |
| 66 | KFA_66 |
| 67 | KFA_67 |
| 68 | KFA_68 |
| 69 | KFA_69 |
| 70 | KFA_70 |
| 71 | KFA_71 |
| 72 | KFA_72 |
| 73 | KFA_73 |
| 74 | KFA_74 |
| 75 | KFA_75 |
| 76 | KFA_76 |
| 77 | KFA_77 |
| 78 | KFA_78 |
| 79 | KFA_79 |
| 80 | KFA_80 |
| 81 | KFA_81 |
| 82 | KFA_82 |
| 83 | KFA_83 |
| 84 | KFA_84 |
| 85 | KFA_85 |
| 86 | KFA_86 |
| 87 | KFA_87 |
| 88 | KFA_88 |
| 89 | KFA_89 |
| 90 | KFA_90 |
| 91 | KFA_91 |
| 92 | KFA_92 |
| 93 | KFA_93 |
| 94 | KFA_94 |
| 95 | KFA_95 |
| 96 | KFA_96 |
| 97 | KFA_97 |
| 98 | KFA_98 |
| 99 | KFA_99 |
| 100 | KFA_100 |
| 101 | KFA_101 |
| 102 | KFA_102 |
| 103 | KFA_103 |
| 104 | KFA_104 |
| 105 | KFA_105 |
| 106 | KFA_106 |
| 107 | KFA_107 |
| 108 | KFA_108 |
| 109 | KFA_109 |
| 110 | KFA_110 |
| 111 | KFA_111 |
| 112 | KFA_112 |
| 113 | KFA_113 |
| 114 | KFA_114 |
| 115 | KFA_115 |
| 116 | KFA_116 |
| 117 | KFA_117 |
| 118 | KFA_118 |
| 119 | KFA_119 |
| 120 | KFA_120 |
| 121 | KFA_121 |
| 122 | KFA_122 |
| 123 | KFA_123 |
| 124 | KFA_124 |
| 125 | KFA_125 |
| 126 | KFA_126 |
| 127 | KFA_127 |
| 128 | KFA_128 |
| 129 | KFA_129 |
| 130 | KFA_130 |
| 131 | KFA_131 |
| 132 | KFA_132 |
| 133 | KFA_133 |
| 134 | KFA_134 |
| 135 | KFA_135 |
| 136 | KFA_136 |
| 137 | KFA_137 |
| 138 | KFA_138 |
| 139 | KFA_139 |
| 140 | KFA_140 |
| 141 | KFA_141 |
| 142 | KFA_142 |
| 143 | KFA_143 |
| 144 | KFA_144 |
| 145 | KFA_145 |
| 146 | KFA_146 |
| 147 | KFA_147 |
| 148 | KFA_148 |
| 149 | KFA_149 |
| 150 | KFA_150 |
| 151 | KFA_151 |
| 152 | KFA_152 |
| 153 | KFA_153 |
| 154 | KFA_154 |
| 155 | KFA_155 |
| 156 | KFA_156 |
| 157 | KFA_157 |
| 158 | KFA_158 |
| 159 | KFA_159 |
| 160 | KFA_160 |
| 161 | KFA_161 |
| 162 | KFA_162 |
| 163 | KFA_163 |
| 164 | KFA_164 |
| 165 | KFA_165 |
| 166 | KFA_166 |
| 167 | KFA_167 |
| 168 | KFA_168 |
| 169 | KFA_169 |
| 170 | KFA_170 |
| 171 | KFA_171 |
| 172 | KFA_172 |
| 173 | KFA_173 |
| 174 | KFA_174 |
| 175 | KFA_175 |
| 176 | KFA_176 |
| 177 | KFA_177 |
| 178 | KFA_178 |
| 179 | KFA_179 |
| 180 | KFA_180 |
| 181 | KFA_181 |
| 182 | KFA_182 |
| 183 | KFA_183 |
| 184 | KFA_184 |
| 185 | KFA_185 |
| 186 | KFA_186 |
| 187 | KFA_187 |
| 188 | KFA_188 |
| 189 | KFA_189 |
| 190 | KFA_190 |
| 191 | KFA_191 |
| 192 | KFA_192 |
| 193 | KFA_193 |
| 194 | KFA_194 |
| 195 | KFA_195 |
| 196 | KFA_196 |
| 197 | KFA_197 |
| 198 | KFA_198 |
| 199 | KFA_199 |
| 200 | KFA_200 |
| 201 | KFA_201 |
| 202 | KFA_202 |
| 203 | KFA_203 |
| 204 | KFA_204 |
| 205 | KFA_205 |
| 206 | KFA_206 |
| 207 | KFA_207 |
| 208 | KFA_208 |
| 209 | KFA_209 |
| 210 | KFA_210 |
| 211 | KFA_211 |
| 212 | KFA_212 |
| 213 | KFA_213 |
| 214 | KFA_214 |
| 215 | KFA_215 |
| 216 | KFA_216 |
| 217 | KFA_217 |
| 218 | KFA_218 |
| 219 | KFA_219 |
| 220 | KFA_220 |
| 221 | KFA_221 |
| 222 | KFA_222 |
| 223 | KFA_223 |
| 224 | KFA_224 |
| 225 | KFA_225 |
| 226 | KFA_226 |
| 227 | KFA_227 |
| 228 | KFA_228 |
| 229 | KFA_229 |
| 230 | KFA_230 |
| 231 | KFA_231 |
| 232 | KFA_232 |
| 233 | KFA_233 |
| 234 | KFA_234 |
| 235 | KFA_235 |
| 236 | KFA_236 |
| 237 | KFA_237 |
| 238 | KFA_238 |
| 239 | KFA_239 |
| 240 | KFA_240 |
| 241 | KFA_241 |
| 242 | KFA_242 |
| 243 | KFA_243 |
| 244 | KFA_244 |
| 245 | KFA_245 |
| 246 | KFA_246 |
| 247 | KFA_247 |
| 248 | KFA_248 |
| 249 | KFA_249 |
| 250 | KFA_250 |
| 251 | KFA_251 |
| 252 | KFA_252 |
| 253 | KFA_253 |
| 254 | KFA_254 |
| 255 | KFA_255 |

### TAB_FEHLERCODE

| WERT | TEXT |
| --- | --- |
| 0 | KFC_0 |
| 1 | KFC_1 |
| 2 | KFC_2 |
| 3 | KFC_3 |
| 4 | KFC_4 |
| 5 | KFC_5 |
| 6 | KFC_6 |
| 7 | KFC_7 |
| 8 | KFC_8 |
| 9 | KFC_9 |
| 10 | KFC_10 |
| 11 | KFC_11 |
| 12 | KFC_12 |
| 13 | KFC_13 |
| 14 | KFC_14 |
| 15 | KFC_15 |
| 16 | KFC_16 |
| 17 | KFC_17 |
| 18 | KFC_18 |
| 19 | KFC_19 |
| 20 | KFC_20 |
| 21 | KFC_21 |
| 22 | KFC_22 |
| 23 | KFC_23 |
| 24 | KFC_24 |
| 25 | KFC_25 |
| 26 | KFC_26 |
| 27 | KFC_27 |
| 28 | KFC_28 |
| 29 | KFC_29 |
| 30 | KFC_30 |
| 31 | KFC_31 |
| 32 | KFC_32 |
| 33 | KFC_33 |
| 34 | KFC_34 |
| 35 | KFC_35 |
| 36 | KFC_36 |
| 37 | KFC_37 |
| 38 | KFC_38 |
| 39 | KFC_39 |
| 40 | KFC_40 |
| 41 | KFC_41 |
| 42 | KFC_42 |
| 43 | KFC_43 |
| 44 | KFC_44 |
| 45 | KFC_45 |
| 46 | KFC_46 |
| 47 | KFC_47 |
| 48 | KFC_48 |
| 49 | KFC_49 |
| 50 | KFC_50 |
| 51 | KFC_51 |
| 52 | KFC_52 |
| 53 | KFC_53 |
| 54 | KFC_54 |
| 55 | KFC_55 |
| 56 | KFC_56 |
| 57 | KFC_57 |
| 58 | KFC_58 |
| 59 | KFC_59 |
| 60 | KFC_60 |
| 61 | KFC_61 |
| 62 | KFC_62 |
| 63 | KFC_63 |
| 64 | KFC_64 |
| 65 | KFC_65 |
| 66 | KFC_66 |
| 67 | KFC_67 |
| 68 | KFC_68 |
| 69 | KFC_69 |
| 70 | KFC_70 |
| 71 | KFC_71 |
| 72 | KFC_72 |
| 73 | KFC_73 |
| 74 | KFC_74 |
| 75 | KFC_75 |
| 76 | KFC_76 |
| 77 | KFC_77 |
| 78 | KFC_78 |
| 79 | KFC_79 |
| 80 | KFC_80 |
| 81 | KFC_81 |
| 82 | KFC_82 |
| 83 | KFC_83 |
| 84 | KFC_84 |
| 85 | KFC_85 |
| 86 | KFC_86 |
| 87 | KFC_87 |
| 88 | KFC_88 |
| 89 | KFC_89 |
| 90 | KFC_90 |
| 91 | KFC_91 |
| 92 | KFC_92 |
| 93 | KFC_93 |
| 94 | KFC_94 |
| 95 | KFC_95 |
| 96 | KFC_96 |
| 97 | KFC_97 |
| 98 | KFC_98 |
| 99 | KFC_99 |
| 100 | KFC_100 |
| 101 | KFC_101 |
| 102 | KFC_102 |
| 103 | KFC_103 |
| 104 | KFC_104 |
| 105 | KFC_105 |
| 106 | KFC_106 |
| 107 | KFC_107 |
| 108 | KFC_108 |
| 109 | KFC_109 |
| 110 | KFC_110 |
| 111 | KFC_111 |
| 112 | KFC_112 |
| 113 | KFC_113 |
| 114 | KFC_114 |
| 115 | KFC_115 |
| 116 | KFC_116 |
| 117 | KFC_117 |
| 118 | KFC_118 |
| 119 | KFC_119 |
| 120 | KFC_120 |
| 121 | KFC_121 |
| 122 | KFC_122 |
| 123 | KFC_123 |
| 124 | KFC_124 |
| 125 | KFC_125 |
| 126 | KFC_126 |
| 127 | KFC_127 |
| 128 | KFC_128 |
| 129 | KFC_129 |
| 130 | KFC_130 |
| 131 | KFC_131 |
| 132 | KFC_132 |
| 133 | KFC_133 |
| 134 | KFC_134 |
| 135 | KFC_135 |
| 136 | KFC_136 |
| 137 | KFC_137 |
| 138 | KFC_138 |
| 139 | KFC_139 |
| 140 | KFC_140 |
| 141 | KFC_141 |
| 142 | KFC_142 |
| 143 | KFC_143 |
| 144 | KFC_144 |
| 145 | KFC_145 |
| 146 | KFC_146 |
| 147 | KFC_147 |
| 148 | KFC_148 |
| 149 | KFC_149 |
| 150 | KFC_150 |
| 151 | KFC_151 |
| 152 | KFC_152 |
| 153 | KFC_153 |
| 154 | KFC_154 |
| 155 | KFC_155 |
| 156 | KFC_156 |
| 157 | KFC_157 |
| 158 | KFC_158 |
| 159 | KFC_159 |
| 160 | KFC_160 |
| 161 | KFC_161 |
| 162 | KFC_162 |
| 163 | KFC_163 |
| 164 | KFC_164 |
| 165 | KFC_165 |
| 166 | KFC_166 |
| 167 | KFC_167 |
| 168 | KFC_168 |
| 169 | KFC_169 |
| 170 | KFC_170 |
| 171 | KFC_171 |
| 172 | KFC_172 |
| 173 | KFC_173 |
| 174 | KFC_174 |
| 175 | KFC_175 |
| 176 | KFC_176 |
| 177 | KFC_177 |
| 178 | KFC_178 |
| 179 | KFC_179 |
| 180 | KFC_180 |
| 181 | KFC_181 |
| 182 | KFC_182 |
| 183 | KFC_183 |
| 184 | KFC_184 |
| 185 | KFC_185 |
| 186 | KFC_186 |
| 187 | KFC_187 |
| 188 | KFC_188 |
| 189 | KFC_189 |
| 190 | KFC_190 |
| 191 | KFC_191 |
| 192 | KFC_192 |
| 193 | KFC_193 |
| 194 | KFC_194 |
| 195 | KFC_195 |
| 196 | KFC_196 |
| 197 | KFC_197 |
| 198 | KFC_198 |
| 199 | KFC_199 |
| 200 | KFC_200 |
| 201 | KFC_201 |
| 202 | KFC_202 |
| 203 | KFC_203 |
| 204 | KFC_204 |
| 205 | KFC_205 |
| 206 | KFC_206 |
| 207 | KFC_207 |
| 208 | KFC_208 |
| 209 | KFC_209 |
| 210 | KFC_210 |
| 211 | KFC_211 |
| 212 | KFC_212 |
| 213 | KFC_213 |
| 214 | KFC_214 |
| 215 | KFC_215 |
| 216 | KFC_216 |
| 217 | KFC_217 |
| 218 | KFC_218 |
| 219 | KFC_219 |
| 220 | KFC_220 |
| 221 | KFC_221 |
| 222 | KFC_222 |
| 223 | KFC_223 |
| 224 | KFC_224 |
| 225 | KFC_225 |
| 226 | KFC_226 |
| 227 | KFC_227 |
| 228 | KFC_228 |
| 229 | KFC_229 |
| 230 | KFC_230 |
| 231 | KFC_231 |
| 232 | KFC_232 |
| 233 | KFC_233 |
| 234 | KFC_234 |
| 235 | KFC_235 |
| 236 | KFC_236 |
| 237 | KFC_237 |
| 238 | KFC_238 |
| 239 | KFC_239 |
| 240 | KFC_240 |
| 241 | KFC_241 |
| 242 | KFC_242 |
| 243 | KFC_243 |
| 244 | KFC_244 |
| 245 | KFC_245 |
| 246 | KFC_246 |
| 247 | KFC_247 |
| 248 | KFC_248 |
| 249 | KFC_249 |
| 250 | KFC_250 |
| 251 | KFC_251 |
| 252 | KFC_252 |
| 253 | KFC_253 |
| 254 | KFC_254 |
| 255 | KFC_255 |

### TAB_FES_STELLUNG

| WERT | TEXT |
| --- | --- |
| 1 | Ultrahart |
| 2 | Sportlich ausgewogen |
| 3 | Ausgewogen |
| 4 | Weich |
| 13 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 14 | Funktion_meldet_Fehler |
| 15 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_FUNKTIONSQUALIFIER_EPS

| WERT | TEXT |
| --- | --- |
| 128 | Initialisierung |
| 160 | Funktion verfügbar - Aktiv, 12V EPS |
| 164 | Funktion verfügbar - Aktiv, 12V EAS |
| 168 | Funktion verfügbar - Aktiv, 24V EAS |
| 162 | Funktion verfügbar - Aktiv, Notfallfunktion Umwelteinflüsse - Aktiv |
| 49 | Funktion in Rückfallebene |
| 51 | Funktion in Rückfallebene, Notfallfunktion Umwelteinflüsse- Aktiv |
| 176 | Funktion temporär in Rückfallebene |
| 178 | Funktion temporär in Rückfallebene, Notfallfunktion Umwelteinflüsse- Aktiv |
| 96 | Funktion nicht verfügbar - Fehler |
| 224 | Funktion nicht verfügbar - ausgeschaltet |
| 0xFF | Wert ungültig |

### TAB_FUNKTIONSSTATUS_EPS

| WERT | TEXT |
| --- | --- |
| 0 | passiv |
| 1 | bereit |
| 2 | aktiv |
| 3 | Fehler |
| 0xFF | Wert ungültig |

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

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0xFF | Ungültig |

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

### TAB_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Invalid |
| 0x01 | NMWait |
| 0x02 | OldKl30Wait |
| 0x03 | PreDrive |
| 0x04 | DriveDown |
| 0x05 | DriveUp |
| 0x06 | PostRun |
| 0x07 | Off |
| 0x08 | Error |
| 0x09 | Flash |
| 0x10 | LowVolt |
| 0x11 | LimpHome |
| 0xFF | Wert ungültig |

### TAB_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0 | verbaut |
| 1 | nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_0X5014

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |
