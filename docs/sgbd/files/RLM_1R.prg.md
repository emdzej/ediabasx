# RLM_1R.prg

## General

|  |  |
| --- | --- |
| File | RLM_1R.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 141 |
| Origin | BMW EK-522 Josef_Berwanger |
| Revision | 3.005 |
| Author | BMW EK-522 Kebsi |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Rücklichtmodul Seitenwand 1 Rechts |  |  |
| ORIGIN | string | BMW EK-522 Josef_Berwanger |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | BMW EK-522 Kebsi |  |  |
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

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIN | Byte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1000.0 | 9999.0 | PIN für Authentisierung |

### ARG_0X4001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIN | Byte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1000.0 | 9999.0 | PIN für Authentisierung |
| LAMP_SUPPLIER | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Name of the Lamp Supplier |
| SUPPLIER_PLANT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Assembly plant of the rear lamp |
| PRODUCTION_DATE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Production date of the rear lamp. Format: YYYYMMDD |
| SERIAL_NUMBER | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Serial Number of the lamp |
| LED_TYPE_CHANEL_1 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | OLED/LED Supplier and LED Type |
| LED_TYPE_CHANEL_2 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| LED_TYPE_CHANEL_3 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| LED_TYPE_CHANEL_4 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| LED_TYPE_CHANEL_5 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| LED_TYPE_CHANEL_6 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| LED_TYPE_CHANEL_7 | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Supplier and LED Type |
| HARDWARE_VARIANT | 0-n | high | unsigned char | - | TAB_HARDWARE_VARIANT | - | - | - | - | - | SAE/ECE value |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIN | Byte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1000.0 | 9999.0 | PIN für Authentisierung |
| CHANNEL_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 1 |
| CHANNEL_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 2 |
| CHANNEL_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 3 |
| CHANNEL_4 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 4 |
| CHANNEL_5 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 5 |
| CHANNEL_6 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 6 |
| CHANNEL_7 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Binning class for channel 7 |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | reserved |

### ARG_0X4061_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIN | Byte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1000.0 | 9999.0 | PIN für Authentisierung |

### ARG_0X4062_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIN | Byte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1000.0 | 9999.0 | PIN für Authentisierung |

### ARG_0XD6DA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL | 0-n | high | unsigned char | - | KANAL_RLM | - | - | - | - | - | Auswahl des RLM Kanal |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Zeitvorgabe in Sekunden (0=aus ... 254 s, 255 = dauerhaft ein) |
| PWM | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Wert 0...100% |

### ARG_0XD6DD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed int | - | TAB_RUECKLEUCHTEN_FUNKTION_ARG | - | - | - | - | - | Auswahl siehe table TAB_RUECKLEUCHTEN_FUNKTION_ARG |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeitvorgabe [0..255] in Sekunden, 0=aus ...254, 255=permanent an. |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL_NR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 8.0 | Kanalnummerl [1..8] |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL_NR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lese Voltagestatistik pro Kanal [1..7] |

### ARG_0XF100_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_01_LED_1_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 1 |
| STAT_02_STRANG_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 1 |
| STAT_03_LED_1_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 11 |
| STAT_04_LED_1_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 12 |
| STAT_05_LED_1_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 13 |
| STAT_06_LED_2_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 2 |
| STAT_07_STRANG_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 2 |
| STAT_08_LED_2_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 21 |
| STAT_09_LED_2_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 22 |
| STAT_10_LED_2_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 23 |
| STAT_11_LED_3_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 3 |
| STAT_12_STRANG_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 3 |
| STAT_13_LED_3_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 31 |
| STAT_14_LED_3_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 32 |
| STAT_15_LED_3_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 33 |
| STAT_16_LED_4_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 4 |
| STAT_17_STRANG_4_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 4 |
| STAT_18_LED_4_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 41 |
| STAT_19_LED_4_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 42 |
| STAT_20_LED_4_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 43 |
| STAT_21_LED_5_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 5 |
| STAT_22_STRANG_5_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 5 |
| STAT_23_LED_5_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 51 |
| STAT_24_LED_5_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 52 |
| STAT_25_LED_6_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 6 |
| STAT_26_STRANG_6_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert Strang 6 |
| STAT_27_LED_6_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 61 |
| STAT_28_LED_6_2_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 62 |
| STAT_29_LED_6_3_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 63 |
| STAT_30_LED_6_4_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 64 |
| STAT_31_LED_6_5_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 65 |
| STAT_32_LED_6_6_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 66 |
| STAT_33_LED_7_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 7 |
| STAT_34_LED_7_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 71 |
| STAT_35_LED_8_STROM_WERT | + | - | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 1500.0 | Stromwert LED 8 |
| STAT_36_LED_8_1_PWM_WERT | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Prozent Wert LED 81 |

### ARG_0XFD00_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_ZAEHLER_LOESCHEN | 0-n | high | unsigned int | - | TAB_RESET_ZAEHLER_LOESCHEN | - | - | - | - | - | Ruecksetzen des Reset oder Watchdog Zaehlers |

### ARG_0XFD01_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_BULB_OP_TIME | 0-n | high | unsigned int | - | TAB_BULB_OP_TIME_RESET | - | - | - | - | - | Reset Bulb operation time for segments |

### ARG_0XFD02_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_STATISTIC_TEMPERATUR_HISTOGRAMM_CHANNEL | HEX | high | unsigned char | - | - | - | - | - | - | - | Kanal [1..8] |

### ARG_0XFD03_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_STATISTIC_VOLTAGE_HISTOGRAM_CHANNEL | HEX | high | unsigned char | - | - | - | - | - | - | - | Rücksetzten der Voltage Staistic Daten für einen Kanal [1..7] |

### ARG_0XFD04_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SELECT | HEX | high | unsigned char | - | - | - | - | - | - | - | Index 0: all |

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
| 0x021A00 | Energiesparmode aktiv | 0 | - |
| 0x021A08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021A09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x021A0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x021A0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x021A0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x021A0D | Codierung: unqualifizierte Daten | 0 | - |
| 0x021A24 | NVM_E_HARDWARE | 0 | - |
| 0x02FF1A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x808180 | Unterspannung erkannt | 1 | - |
| 0x808181 | Überspannung erkannt | 1 | - |
| 0x808182 | Überfallalarm: defekt | 0 | - |
| 0x808183 | Fernlichtblinken: defekt | 0 | - |
| 0x808184 | Panik Blinken: defekt | 0 | - |
| 0x808185 | DWA Blinken: defekt | 0 | - |
| 0x808186 | ESS Blinken: defekt | 0 | - |
| 0x808187 | Standlicht: defekt | 0 | - |
| 0x808188 | Follow Me Home: defekt | 0 | - |
| 0x808189 | Welcome Light: defekt | 0 | - |
| 0x80818A | Remote Light: defekt | 0 | - |
| 0x80818B | Goodbye Bremslicht: defekt | 0 | - |
| 0x80818C | Ausgelagerte Leuchte: defekt | 0 | - |
| 0x80818D | Fahrtrichtungsanzeiger: defekt | 0 | - |
| 0x80818E | Tagfahrlicht: defekt | 0 | - |
| 0x80818F | Seitenmarkierungsleuchte: defekt | 0 | - |
| 0x808190 | Parklicht: defekt | 0 | - |
| 0x808191 | Bremslicht: defekt | 0 | - |
| 0x808192 | Nebelschlusslicht: defekt | 0 | - |
| 0x808193 | Rueckfahrlicht: defekt | 0 | - |
| 0x808194 | Bremslicht - Notlaufaktivierung wegen unplausibler Eingangssignale | 1 | - |
| 0x80819E | CAN_TIMEOUT_ERROR | 0 | - |
| 0x80819F | MCAL_PORT_TIMEOUT_ERROR | 0 | - |
| 0x8081A0 | FLS_Error | 0 | - |
| 0x8081A8 | GPT_ERROR | 0 | - |
| 0x8081A9 | MCU_ERROR | 0 | - |
| 0x8081AA | WDG_ERROR | 0 | - |
| 0x8081AB | WDGM_ERROR | 0 | - |
| 0x8081C3 | Variant not configured | 0 | - |
| 0x8081C4 | configuration data invalid combined event | 0 | - |
| 0x8081E0 | NTC1: Temperatursensor  on board | 0 | - |
| 0x8081E1 | NTC2: Temperatursensor  combinded event | 0 | - |
| 0x8081E2 | NTC3: Temperatursensor  combinded event | 0 | - |
| 0x8081E3 | NTC4: Temperatursensor  combinded event | 0 | - |
| 0xCF850B | B2-CAN Physikalischer Busfehler | 0 | - |
| 0xCF8514 | B2-CAN Control Module Bus OFF | 0 | - |
| 0xCF8B00 | Botschaft 0x2EB (CTR_LP_EX) - Timeout combined event | 1 | - |
| 0xCF8B01 | Botschaft 0x2EB (CTR_LP_EX) - Alive/CRC | 1 | - |
| 0xCF8B03 | Botschaft 0x1E4 (CTR_LP_EX_2) - Timeout combined event | 1 | - |
| 0xCF8B09 | Botschaft 0x2CA (A_Temp)- Timeout combined event | 1 | - |
| 0xCF8B0F | Botschaft 0xCA (CTR_FN_IDC) - Timeout combined event | 1 | - |
| 0xCF8B10 | Botschaft 0xCA (CTR_FN_IDC) - Alive/CRC | 1 | - |
| 0xCF8B12 | Botschaft 0x328 (Relativzeit) - Timeout combined event | 1 | - |
| 0xCF8B15 | Botschaft 0x32 (ST_CENG) - Timeout combined event | 1 | - |
| 0xCF8B18 | Botschaft 0x1A1 (V_VEH) - Timeout combined event | 1 | - |
| 0xCF8B19 | Botschaft 0x1A1 (V_VEH) - Alive/CRC | 1 | - |
| 0xCF8B1B | Botschaft 0x21x (ST_LP_EX_REAR_SAME_SIDE) - Timeout combined event | 1 | - |
| 0xCF8B1C | Botschaft 0x21x (ST_LP_EX_REAR_SAME_SIDE) - Alive/CRC combined event | 1 | - |
| 0xCF8B25 | Botschaft 0x21x (ST_LP_EX_REAR_OTHER_SIDE_MASTER_1) - Timeout combined event | 1 | - |
| 0xCF8B26 | Botschaft 0x21x (ST_LP_EX_REAR_OTHER_SIDE_MASTER_1) - Alive/CRC | 1 | - |
| 0xCF8B28 | Botschaft 0x21x (ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2) - Timeout combined event | 1 | - |
| 0xCF8B29 | Botschaft 0x21x (ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2) - Alive/CRC | 1 | - |
| 0xCF8B2B | Botschaft 0x3C (Con_VEH) - Timeout combined event | 1 | - |
| 0xCF8B2C | Botschaft 0x3C (Con_VEH) - Alive/CRC | 1 | - |
| 0xCF8B2E | Botschaft 0x2FC (STAT_ZV_KLAPPEN) - Timeout combined event | 1 | - |
| 0xCF8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FSCSM_ERRORCODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x01 | ERC_FSCSM_INVALID_ENCRYPTED_ID_AND_KEY |
| 0x02 | ERC_FSCSM_INVALID_SG_ID |
| 0x04 | ERC_FSCSM_SWE_INVALID |
| 0x05 | ERC_FSCSM_CAL_CSM_ERROR |
| 0x06 | ERC_FSCSM_SSV_ERROR_STATE |
| 0x08 | ERC_FSCSM_MESSAGE_TIMEOUT_REQ |
| 0x00 | ERC_NO_ERROR |
| 0x30 | ERC_PENDING |
| 0x50 | ERC_NVM_ERROR |
| 0x51 | ERC_INCORRECT_MESSAGE_LENGTH |
| 0x52 | ERC_INVALID_PARAMETER |
| 0x53 | ERC_SEQUENCE_ERROR |
| 0x54 | ERC_NOT_INITIALIZED |
| 0x55 | ERC_PARALLEL_EXECUTION |
| 0x87 | ERC_MSM_INVALID_SIGNATURE_OVER_RND |
| 0x88 | ERC_MSM_INVALID_B2VSEC_CERTIFICATE |
| 0x5A | ERC_CALCULATION_ERROR |
| 0xFE | ERC_UNEXPECTED_ERROR |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4006 | UWB_DEFEKT_ART_STRANG_LED1 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4007 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4008 | Außentemperatur | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4009 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0x400A | KLEMMENZUSTAND_PWF | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | UWB Bordnetzspannung SysVolt | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x400C | UWB Signalname_0x2EB_CTRL_LP_EX | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X2CB_CTRL_LP_EX | - | - | - |
| 0x400D | UWB Timeout  Botschaft 0x2EB CTR_LP_EX | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2EB_CTR_LP_EX | - | - | - |
| 0x400E | UWB_ALIVE_CRC_0x2EB_CTR_LP_EX | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X2EB_CTR_LP_EX | - | - | - |
| 0x400F | FLS_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_FLS_ERROR_SOURCE | - | - | - |
| 0x4010 | GPT_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_GPT_ERROR_SOURCE | - | - | - |
| 0x4011 | MCU_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_MCU_ERROR_SOURCE | - | - | - |
| 0x4012 | NVM_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_NVM_ERROR_SOURCE | - | - | - |
| 0x4013 | WDG_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_WDG_ERROR_SOURCE | - | - | - |
| 0x4014 | WDGM_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_WDGM_ERROR_SOURCE | - | - | - |
| 0x4015 | UWB Signal_0x1E4_error_source | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4016 | UWB Timeout source of message 0X1E4_CTR_LP_EX_2 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4018 | UWB_ALIVE_CRC_ERROR_CTR_LP_EX_2 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4019 | UWB SIGNAL_0X330_KILOMETERSTAND | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x330_Kilometerstand | - | - | - |
| 0x401A | UWB Timeout_0X330_Kiliometerstand | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X330_KILOMETERSTAND | - | - | - |
| 0x401B | UWB_ALIVE_CRC_0X330_KILOMETERSTAND | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X330_KILOMETERSTAND | - | - | - |
| 0x401C | UWB SIGNAL_0X2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x2CA_A_TEMP | - | - | - |
| 0x401D | UWB Timeout_0X2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2CA_A_Temp | - | - | - |
| 0x401E | UWB_ALIVE_CRC_0x2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0x2CA_A_Temp | - | - | - |
| 0x401F | UWB_SIGNAL_0x380_Fahrgestellnummer | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x380_Fahrgestellnummer | - | - | - |
| 0x4020 | UWB_TIMEOUT_0X380_FAHRGESTELLNUMMER | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X380_FAHRGESTELLNUMMER | - | - | - |
| 0x4021 | UWB_ALIVE_CRC_0X380_FAHRGESTELLNUMMER | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X380_FAHRGESTELLNUMMER | - | - | - |
| 0x4022 | UWB_SIGNAL_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0XCA_CTR_FN_IDC | - | - | - |
| 0x4023 | UWB_TIMEOUT_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_CRC_0XCA_CTR_FN_IDC | - | - | - |
| 0x4024 | UWB_ALIVE_CRC_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0XCA_CTR_FN_IDC | - | - | - |
| 0x4025 | UWB_SIGNAL_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X328_RELATIVZEIT | - | - | - |
| 0x4026 | UWB_TIMEOUT_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X328_RELATIVZEIT | - | - | - |
| 0x4027 | UWB_ALIVE_CRC_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X328_RELATIVZEIT | - | - | - |
| 0x4028 | UWB_SIGNAL_0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X32_ST_CENG | - | - | - |
| 0x4029 | UWB_TIMEOUT_0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X32_ST_CENG | - | - | - |
| 0x402A | UWB_ALIVE_CRC__0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X32_ST_CENG | - | - | - |
| 0x402B | UWB_SIGNAL_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X1A1_V_VEH | - | - | - |
| 0x402C | UWB_TIMEOUT_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X1A1_V_VEH | - | - | - |
| 0x402D | UWB_ALIVE_CRC_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X1A1_V_VEH | - | - | - |
| 0x402E | UWB_SIGNAL_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x402F | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4030 | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4031 | UWB_SIGNAL_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X388_FAHRZEUGTYP | - | - | - |
| 0x4032 | UWB_TIMEOUT_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X388_FAHRZEUGTYP | - | - | - |
| 0x4033 | UWB_ALIVE_CRC_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X388_FAHRZEUGTYP | - | - | - |
| 0x4034 | UWB_SIGNAL_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X3A0_FZZSTD | - | - | - |
| 0x4035 | UWB_TIMEOUT_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X3A0_FZZSTD | - | - | - |
| 0x4036 | UWB_ALIVE_CRC_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X3A0_FZZSTD | - | - | - |
| 0x4039 | UWB_OVERVOLTAGE_SEG_STRANG_1 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_1 | - | - | - |
| 0x403A | UWB_OVERVOLTAGE_SEG_STRANG_2 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_2 | - | - | - |
| 0x403B | UWB_OVERVOLTAGE_SEG_STRANG_3 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_3 | - | - | - |
| 0x403C | UWB_OVERVOLTAGE_SEG_STRANG_4 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_4 | - | - | - |
| 0x403D | UWB_OVERVOLTAGE_SEG_STRANG_5 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_5 | - | - | - |
| 0x403E | UWB_OVERVOLTAGE_SEG_STRANG_6 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_6 | - | - | - |
| 0x403F | UWB_UNDERVOLTAGE_SEG_STRANG_1 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_1 | - | - | - |
| 0x4040 | UWB_UNDERVOLTAGE_SEG_STRANG_2 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_2 | - | - | - |
| 0x4041 | UWB_UNDERVOLTAGE_SEG_STRANG_3 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_3 | - | - | - |
| 0x4042 | UWB_UNDERVOLTAGE_SEG_STRANG_4 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_4 | - | - | - |
| 0x4043 | UWB_UNDERVOLTAGE_SEG_STRANG_5 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_5 | - | - | - |
| 0x4044 | UWB_UNDERVOLTAGE_SEG_STRANG_6 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_6 | - | - | - |
| 0x4045 | UWB_SIGNAL_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x4046 | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4047 | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4048 | UWB_SIGNAL_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x4049 | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x404A | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x404B | UWB_TIMEOUT_0X3C_CON_VEH | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X3C_CON_VEH | - | - | - |
| 0x404C | UWB_ALIVE_CRC_0X3C_Con_VEH | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X3C_CON_VEH | - | - | - |
| 0x404D | UWB_SIGNAL_0X3C_Con_VEH | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X3C_Con_VEH | - | - | - |
| 0x404E | UWB_TIMEOUT_0X2FC_STAT_ZV_KLAPPEN | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2FC_STAT_ZV_KLAPPEN | - | - | - |
| 0x404F | UWB_DEFEKT_ART_STRANG_LED2 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4050 | UWB_DEFEKT_ART_STRANG_LED3 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4051 | UWB_DEFEKT_ART_STRANG_LED4 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4052 | UWB_DEFEKT_ART_STRANG_LED5 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4053 | UWB_DEFEKT_ART_STRANG_LED6 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4054 | UWB_DEFEKT_ART_STRANG_LED7 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4055 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4056 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4057 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4058 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4059 | UWB_DEFEKT_ART_STRANG_HSS | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x405A | UWB_CONFIGURATION_DATA_INVALID | 0-n | High | 0xFF | UWB_TAB_CONFIGURATION_DATA_INVALID | - | - | - |
| 0x405B | UWB_DEFEKT_ART_NOTLAUFAKTIVIERUNG | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NOTLAUFAKTIVIERUNG | - | - | - |
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
| 0x8081A1 | LED Ausgang 1: Strang | 0 | - |
| 0x8081A2 | LED Ausgang 2: Strang | 0 | - |
| 0x8081A3 | LED Ausgang 3: Strang | 0 | - |
| 0x8081A4 | LED Ausgang 4: Strang | 0 | - |
| 0x8081A5 | LED Ausgang 5: Strang | 0 | - |
| 0x8081A6 | LED Ausgang 6: Strang | 0 | - |
| 0x8081A7 | LED Ausgang 7: Strang | 0 | - |
| 0x8081AC | Overvoltage_Segment_Strang_1: Strang  combined event | 0 | - |
| 0x8081AD | Overvoltage_Segment_Strang_2: Strang  combined event | 0 | - |
| 0x8081AE | Overvoltage_Segment_Strang_3: Strang  combined event | 0 | - |
| 0x8081AF | Overvoltage_Segment_Strang_4: Strang  combined event | 0 | - |
| 0x8081B0 | Overvoltage_Segment_Strang_5: Strang  combined event | 0 | - |
| 0x8081B1 | Overvoltage_Segment_Strang_6: Strang  combined event | 0 | - |
| 0x8081B2 | Undervoltage_Segment_Strang_1: Strang  combined event | 0 | - |
| 0x8081B3 | Undervoltage_Segment_Strang_2: Strang  combined event | 0 | - |
| 0x8081B4 | Undervoltage_Segment_Strang_3: Strang  combined event | 0 | - |
| 0x8081B5 | Undervoltage_Segment_Strang_4: Strang  combined event | 0 | - |
| 0x8081B6 | Undervoltage_Segment_Strang_5: Strang  combined event | 0 | - |
| 0x8081B7 | Undervoltage_Segment_Strang_6: Strang  combined event | 0 | - |
| 0x8081B8 | Overvoltage_Segment_Strang_7 | 0 | - |
| 0x8081B9 | Undervoltage_Segment_Strang_7 | 0 | - |
| 0x8081BA | CRC-Checksum Fehler | 0 | - |
| 0x8081BB | Booster defekt | 0 | - |
| 0x8081BC | ChargePump nicht abschaltbar | 0 | - |
| 0x8081BD | Überlauf SPI-Empfangspuffer | 0 | - |
| 0x8081BE | Controller nicht abschaltbar | 0 | - |
| 0x8081BF | Reset | 0 | - |
| 0x8081C0 | Watchdog hat Reset ausgelöst | 0 | - |
| 0x8081C1 | Fehlerhafter Quarz-Betrieb des Controllers | 0 | - |
| 0x8081C2 | LED Ausgang 8: HSS combined event | 0 | - |
| 0x8081C5 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x8081C6 | FLS_E_ERASE_FAILED | 0 | - |
| 0x8081C7 | FLS_E_READ_FAILED | 0 | - |
| 0x8081C8 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x8081C9 | FLS_E_WRITE_FAILED | 0 | - |
| 0x8081CA | FLS_E_READ_FAILED_DED | 0 | - |
| 0x8081CB | MCU_E_WRITE_TIMOUT_FAILURE | 0 | - |
| 0x8081CC | MCU_E_LVI_FAILURE | 0 | - |
| 0x8081CD | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x8081CE | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x8081CF | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x8081D0 | NVM_E_REQ_FAILED | 0 | - |
| 0x8081D1 | NVM_E_VERIFY_FAILED | 0 | - |
| 0x8081D2 | NVM_E_WRITE_PROTECTED | 0 | - |
| 0x8081D3 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x8081D4 | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x8081D5 | WDG_E_MODE_FAILED | 0 | - |
| 0x8081D6 | WDG_E_TRIGGER_TIMEOUT | 0 | - |
| 0x8081D7 | WDG_E_READBACK_FAILURE | 0 | - |
| 0x8081D8 | WDGM_E_IMPROPER_CALLER | 0 | - |
| 0x8081D9 | WDGM_E_MONITORING | 0 | - |
| 0x8081DA | WDGM_E_SET_MODE | 0 | - |
| 0xCF8B02 | Botschaft 0x2EB (CTR_LP_EX) - Signal combined event | 1 | - |
| 0xCF8B05 | Botschaft 0x1E4  (CTR_LP_EX_2) - Signal combined event | 1 | - |
| 0xCF8B0B | Botschaft 0x2CA (A_Temp) - Signal combined event | 1 | - |
| 0xCF8B11 | Botschaft 0xCA (CTR_FN_IDC) - Signal combined event | 1 | - |
| 0xCF8B14 | Botschaft 0x328 (Relativzeit) - Signal combined event | 1 | - |
| 0xCF8B17 | Botschaft 0x32 (ST_CENG) - Signal combined event | 1 | - |
| 0xCF8B1A | Botschaft 0x1A1 (V_VEH) - Signal combined event | 1 | - |
| 0xCF8B1D | Botschaft 0x215 (ST_LP_EX_REAR_2_LH) - Signal combined event | 1 | - |
| 0xCF8B27 | Botschaft 0x215 (ST_LP_EX_REAR_OTHER_SIDE_MASTER_1) - Signal combined event | 1 | - |
| 0xCF8B2A | Botschaft 0x215 (ST_LP_EX_REAR_OTHER_SIDE_Slave_2) - Signal combined event | 1 | - |
| 0xCF8B2D | Botschaft 0x3C  (Con_VEH) - Signal combined event | 1 | - |
| 0xCF8B2F | Botschaft 0x2FC  (STAT_ZV_KLAPPEN) - Signal ST_CT_BTL | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4006 | UWB_DEFEKT_ART_STRANG_LED1 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4007 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4008 | Außentemperatur | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4009 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0x400A | KLEMMENZUSTAND_PWF | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | UWB Bordnetzspannung SysVolt | V | High | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x400C | UWB Signalname_0x2EB_CTRL_LP_EX | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X2CB_CTRL_LP_EX | - | - | - |
| 0x400D | UWB Timeout  Botschaft 0x2EB CTR_LP_EX | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2EB_CTR_LP_EX | - | - | - |
| 0x400E | UWB_ALIVE_CRC_0x2EB_CTR_LP_EX | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X2EB_CTR_LP_EX | - | - | - |
| 0x400F | FLS_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_FLS_ERROR_SOURCE | - | - | - |
| 0x4010 | GPT_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_GPT_ERROR_SOURCE | - | - | - |
| 0x4011 | MCU_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_MCU_ERROR_SOURCE | - | - | - |
| 0x4012 | NVM_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_NVM_ERROR_SOURCE | - | - | - |
| 0x4013 | WDG_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_WDG_ERROR_SOURCE | - | - | - |
| 0x4014 | WDGM_ERROR_SOURCE | 0-n | High | 0xFF | UWB_TAB_WDGM_ERROR_SOURCE | - | - | - |
| 0x4015 | UWB Signal_0x1E4_error_source | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4016 | UWB Timeout source of message 0X1E4_CTR_LP_EX_2 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4018 | UWB_ALIVE_CRC_ERROR_CTR_LP_EX_2 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X1E4_CTR_LP_EX_2 | - | - | - |
| 0x4019 | UWB SIGNAL_0X330_KILOMETERSTAND | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x330_Kilometerstand | - | - | - |
| 0x401A | UWB Timeout_0X330_Kiliometerstand | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X330_KILOMETERSTAND | - | - | - |
| 0x401B | UWB_ALIVE_CRC_0X330_KILOMETERSTAND | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X330_KILOMETERSTAND | - | - | - |
| 0x401C | UWB SIGNAL_0X2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x2CA_A_TEMP | - | - | - |
| 0x401D | UWB Timeout_0X2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2CA_A_Temp | - | - | - |
| 0x401E | UWB_ALIVE_CRC_0x2CA_A_TEMP | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0x2CA_A_Temp | - | - | - |
| 0x401F | UWB_SIGNAL_0x380_Fahrgestellnummer | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0x380_Fahrgestellnummer | - | - | - |
| 0x4020 | UWB_TIMEOUT_0X380_FAHRGESTELLNUMMER | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X380_FAHRGESTELLNUMMER | - | - | - |
| 0x4021 | UWB_ALIVE_CRC_0X380_FAHRGESTELLNUMMER | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X380_FAHRGESTELLNUMMER | - | - | - |
| 0x4022 | UWB_SIGNAL_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0XCA_CTR_FN_IDC | - | - | - |
| 0x4023 | UWB_TIMEOUT_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_CRC_0XCA_CTR_FN_IDC | - | - | - |
| 0x4024 | UWB_ALIVE_CRC_0XCA_CTR_FN_IDC | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0XCA_CTR_FN_IDC | - | - | - |
| 0x4025 | UWB_SIGNAL_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X328_RELATIVZEIT | - | - | - |
| 0x4026 | UWB_TIMEOUT_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X328_RELATIVZEIT | - | - | - |
| 0x4027 | UWB_ALIVE_CRC_0X328_RELATIVZEIT | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X328_RELATIVZEIT | - | - | - |
| 0x4028 | UWB_SIGNAL_0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X32_ST_CENG | - | - | - |
| 0x4029 | UWB_TIMEOUT_0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X32_ST_CENG | - | - | - |
| 0x402A | UWB_ALIVE_CRC__0X32_ST_CENG | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X32_ST_CENG | - | - | - |
| 0x402B | UWB_SIGNAL_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X1A1_V_VEH | - | - | - |
| 0x402C | UWB_TIMEOUT_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X1A1_V_VEH | - | - | - |
| 0x402D | UWB_ALIVE_CRC_0X1A1_V_VEH | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X1A1_V_VEH | - | - | - |
| 0x402E | UWB_SIGNAL_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x402F | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4030 | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_SAME_SIDE | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4031 | UWB_SIGNAL_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X388_FAHRZEUGTYP | - | - | - |
| 0x4032 | UWB_TIMEOUT_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X388_FAHRZEUGTYP | - | - | - |
| 0x4033 | UWB_ALIVE_CRC_0X388_FAHRZEUGTYP | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X388_FAHRZEUGTYP | - | - | - |
| 0x4034 | UWB_SIGNAL_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X3A0_FZZSTD | - | - | - |
| 0x4035 | UWB_TIMEOUT_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X3A0_FZZSTD | - | - | - |
| 0x4036 | UWB_ALIVE_CRC_0X3A0_FZZSTD | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X3A0_FZZSTD | - | - | - |
| 0x4039 | UWB_OVERVOLTAGE_SEG_STRANG_1 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_1 | - | - | - |
| 0x403A | UWB_OVERVOLTAGE_SEG_STRANG_2 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_2 | - | - | - |
| 0x403B | UWB_OVERVOLTAGE_SEG_STRANG_3 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_3 | - | - | - |
| 0x403C | UWB_OVERVOLTAGE_SEG_STRANG_4 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_4 | - | - | - |
| 0x403D | UWB_OVERVOLTAGE_SEG_STRANG_5 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_5 | - | - | - |
| 0x403E | UWB_OVERVOLTAGE_SEG_STRANG_6 | 0-n | High | 0xFF | UWB_TAB_OVERVOLTAGE_SEG_STRANG_6 | - | - | - |
| 0x403F | UWB_UNDERVOLTAGE_SEG_STRANG_1 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_1 | - | - | - |
| 0x4040 | UWB_UNDERVOLTAGE_SEG_STRANG_2 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_2 | - | - | - |
| 0x4041 | UWB_UNDERVOLTAGE_SEG_STRANG_3 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_3 | - | - | - |
| 0x4042 | UWB_UNDERVOLTAGE_SEG_STRANG_4 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_4 | - | - | - |
| 0x4043 | UWB_UNDERVOLTAGE_SEG_STRANG_5 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_5 | - | - | - |
| 0x4044 | UWB_UNDERVOLTAGE_SEG_STRANG_6 | 0-n | High | 0xFF | UWB_TAB_UNDERVOLTAGE_SEG_STRANG_6 | - | - | - |
| 0x4045 | UWB_SIGNAL_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x4046 | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4047 | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_OTHER_SIDE_MASTER_1 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x4048 | UWB_SIGNAL_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X215_REAR_2 | - | - | - |
| 0x4049 | UWB_TIMEOUT_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR | - | - | - |
| 0x404A | UWB_ALIVE_CRC_0X215_ST_LP_EX_REAR_OTHER_SIDE_SLAVE_2 | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR | - | - | - |
| 0x404B | UWB_TIMEOUT_0X3C_CON_VEH | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0X3C_CON_VEH | - | - | - |
| 0x404C | UWB_ALIVE_CRC_0X3C_Con_VEH | 0-n | High | 0xFF | UWB_TAB_ALIVE_CRC_0X3C_CON_VEH | - | - | - |
| 0x404D | UWB_SIGNAL_0X3C_Con_VEH | 0-n | High | 0xFF | UWB_TAB_SIGNAL_0X3C_Con_VEH | - | - | - |
| 0x404E | UWB_TIMEOUT_0X2FC_STAT_ZV_KLAPPEN | 0-n | High | 0xFF | UWB_TAB_TIMEOUT_0x2FC_STAT_ZV_KLAPPEN | - | - | - |
| 0x404F | UWB_DEFEKT_ART_STRANG_LED2 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4050 | UWB_DEFEKT_ART_STRANG_LED3 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4051 | UWB_DEFEKT_ART_STRANG_LED4 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4052 | UWB_DEFEKT_ART_STRANG_LED5 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4053 | UWB_DEFEKT_ART_STRANG_LED6 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4054 | UWB_DEFEKT_ART_STRANG_LED7 | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x4055 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4056 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4057 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4058 | UWB_DEFEKT_ART_NTC | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NTC | - | - | - |
| 0x4059 | UWB_DEFEKT_ART_STRANG_HSS | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_STRANG | - | - | - |
| 0x405A | UWB_CONFIGURATION_DATA_INVALID | 0-n | High | 0xFF | UWB_TAB_CONFIGURATION_DATA_INVALID | - | - | - |
| 0x405B | UWB_DEFEKT_ART_NOTLAUFAKTIVIERUNG | 0-n | High | 0xFF | UWB_TAB_DEFEKT_ART_NOTLAUFAKTIVIERUNG | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KANAL_RLM

| WERT | TEXT |
| --- | --- |
| 0 | alle |
| 1 | Kanal 1 |
| 2 | Kanal 2 |
| 3 | Kanal 3 |
| 4 | Kanal 4 |
| 5 | Kanal 5 |
| 6 | Kanal 6 |
| 7 | Kanal 7 |
| 8 | Kanal 8 |

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

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BINNING_CHANNEL_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 1 |
| STAT_BINNING_CHANNEL_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 2 |
| STAT_BINNING_CHANNEL_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 3 |
| STAT_BINNING_CHANNEL_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 4 |
| STAT_BINNING_CHANNEL_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 5 |
| STAT_BINNING_CHANNEL_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 6 |
| STAT_BINNING_CHANNEL_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Binning class for channel 7 |
| STAT_DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAMP_SUPPLIER_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Name of the Lamp Supplier |
| STAT_SUPPLIER_PLANT_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Assembly plant of the rear lamp |
| STAT_PRODUCTION_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Production date of the rear lamp. Format: YYYYMMDD |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Serial Number of the lamp |
| STAT_LED_TYPE_CHANEL_1_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_2_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_3_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_4_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_5_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_6_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_LED_TYPE_CHANEL_7_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | OLED/LED Supplier and LED Type |
| STAT_HARDWARE_VARIANT | 0-n | high | unsigned char | - | TAB_HARDWARE_VARIANT | - | - | - | SAE/ECE value |

### RES_0X4037_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_01_PWM_LED_1_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 vor thermo calculation |
| STAT_02_PWM_LED_1_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 nach thermo calculation |
| STAT_03_PWM_LED_1_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 vor thermo calculation |
| STAT_04_PWM_LED_1_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 nach thermo calculation |
| STAT_05_PWM_LED_1_3_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 vor thermo calculation |
| STAT_06_PWM_LED_1_3_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  1 nach thermo calculation |
| STAT_07_PWM_LED_2_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 vor thermo calculation |
| STAT_08_PWM_LED_2_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 nach thermo calculation |
| STAT_09_PWM_LED_2_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 vor thermo calculation |
| STAT_10_PWM_LED_2_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 nach thermo calculation |
| STAT_11_PWM_LED_2_3_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 vor thermo calculation |
| STAT_12_PWM_LED_2_3_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  2 nach thermo calculation |
| STAT_13_PWM_LED_3_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 vor thermo calculation |
| STAT_14_PWM_LED_3_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 nach thermo calculation |
| STAT_15_PWM_LED_3_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 vor thermo calculation |
| STAT_16_PWM_LED_3_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 nach thermo calculation |
| STAT_17_PWM_LED_3_3_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 vor thermo calculation |
| STAT_18_PWM_LED_3_3_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  3 nach thermo calculation |
| STAT_19_PWM_LED_4_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 vor thermo calculation |
| STAT_20_PWM_LED_4_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 nach thermo calculation |
| STAT_21_PWM_LED_4_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 vor thermo calculation |
| STAT_22_PWM_LED_4_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 nach thermo calculation |
| STAT_23_PWM_LED_4_3_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 vor thermo calculation |
| STAT_24_PWM_LED_4_3_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  4 nach thermo calculation |
| STAT_25_PWM_LED_5_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  5 vor thermo calculation |
| STAT_26_PWM_LED_5_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  5 nach thermo calculation |
| STAT_27_PWM_LED_5_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  5 vor thermo calculation |
| STAT_28_PWM_LED_5_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  5 nach thermo calculation |
| STAT_29_PWM_LED_6_1_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 vor thermo calculation |
| STAT_30_PWM_LED_6_1_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_31_PWM_LED_6_2_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 vor thermo calculation |
| STAT_32_PWM_LED_6_2_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_33_PWM_LED_6_3_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 vor thermo calculation |
| STAT_34_PWM_LED_6_3_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_35_PWM_LED_6_4_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 vor thermo calculation |
| STAT_36_PWM_LED_6_4_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_37_PWM_LED_6_5_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 vor thermo calculation |
| STAT_38_PWM_LED_6_5_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_39_PWM_LED_6_6_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6vor thermo calculation |
| STAT_40_PWM_LED_6_6_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED  6 nach thermo calculation |
| STAT_41_PWM_STRANG_7_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED Strang 7 vor thermo calulation  |
| STAT_42_PWM_STRANG_7_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED Strang 7 nach thermo calculation  |
| STAT_43_PWM_STRANG_8_PRE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED Strang 8 vor thermo calulation  |
| STAT_44_PWM_STRANG_8_POST_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | pwm für LED Strang 8 nach thermo calculation  |

### RES_0X4038_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NTC1_ECU_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | NTC1  ECU Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC2_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | NTC2 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC3_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | NTC3 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC4_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | NTC4 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC5_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | NTC5 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC13_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | VIRT NTC 13 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC14_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | VIRT NTC 14 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |
| STAT_NTC15_TEMP_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | VIRT NTC 15 Temperaturwert in Grad Celcius 0: means -40 190:  means 150 |

### RES_0XA5A8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGMENT_01_CHAN_1 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 1 Kanal 1 |
| STAT_SEGMENT_02_CHAN_1 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 2 Kanal 1 |
| STAT_SEGMENT_03_CHAN_1 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 3 Kanal 1 |
| STAT_SEGMENT_04_CHAN_2 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 4 Kanal 2 |
| STAT_SEGMENT_05_CHAN_2 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 5 Kanal 2 |
| STAT_SEGMENT_06_CHAN_2 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 6 Kanal 2 |
| STAT_SEGMENT_07_CHAN_3 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 7 Kanal 3 |
| STAT_SEGMENT_08_CHAN_3 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 8 Kanal 3 |
| STAT_SEGMENT_09_CHAN_3 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 9 Kanal 3 |
| STAT_SEGMENT_10_CHAN_4 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 10 Kanal 4 |
| STAT_SEGMENT_11_CHAN_4 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 11 Kanal 4 |
| STAT_SEGMENT_12_CHAN_4 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 12 Kanal 4 |
| STAT_SEGMENT_13_CHAN_5 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 13 Kanal 5 |
| STAT_SEGMENT_14_CHAN_5 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 14 Kanal 5  |
| STAT_SEGMENT_15_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 15 Kanal 6 |
| STAT_SEGMENT_16_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 16 Kanal 6 |
| STAT_SEGMENT_17_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 17 Kanal 6 |
| STAT_SEGMENT_18_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 18 Kanal 6 |
| STAT_SEGMENT_19_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 19 Kanal 6 |
| STAT_SEGMENT_20_CHAN_6 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 20 Kanal 6 |
| STAT_SEGMENT_21_CHAN_7 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 21 Kanal 7 |
| STAT_SEGMENT_22_CHAN_8 | - | - | + | 0-n | high | unsigned char | - | TAB_FunktionstestRlm_Segmentresult | - | - | - | Segment 22 Kanal 8 |

### RES_0XD6DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL_1 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 1 |
| STAT_PWM_KANAL_1 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_2 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 2 |
| STAT_PWM_KANAL_2 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_3 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 3 |
| STAT_PWM_KANAL_3 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_4 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 4 |
| STAT_PWM_KANAL_4 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_5 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 5 |
| STAT_PWM_KANAL_5 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_6 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 6 |
| STAT_PWM_KANAL_6 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_7 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 7 |
| STAT_PWM_KANAL_7 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |
| STAT_KANAL_8 | 0-n | high | unsigned char | - | STATUS_RLM_KANAL | - | - | - | Status Kanal 8 |
| STAT_PWM_KANAL_8 | 0-n | high | unsigned char | - | - | - | - | - | Der PWM-Wert des Kanals (in %) |

### RES_0XD6DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STANDLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Standlicht |
| STAT_RUECKFAHRLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Rückfahrlicht |
| STAT_NEBELSCHLUSSLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Nebelschlusslicht |
| STAT_BREMSLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Bremslicht |
| STAT_PARKLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Parklicht |
| STAT_SEITENMARKIERUNGSLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Seitenmarkierungslicht |
| STAT_TAGFAHRLICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Tagfahrlicht |
| STAT_FAHRTRICHTUNGSANZEIGER | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Fahrtrichtungsanzeiger |
| STAT_GOODBYE_LICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Goodbye Light |
| STAT_WELCOME_LICHT | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Welcome Licht |
| STAT_FOLLOW_ME_HOME | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Follow me home |
| STAT_ESS_BLINKEN | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status ESS Blinken |
| STAT_DWA_BLINKEN | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status DWA Blinken |
| STAT_PANIK_BLINKEN | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Panik Blinken |
| STAT_UEBERFALL_ALARM | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Status Überfall Alarm |
| STAT_VIRTUAL_LIGHT_FUNCTION_TURN_INDICATOR | 0-n | - | unsigned char | - | STATUS_RLM_FUNKTION | - | - | - | Virtuelle Funktion, um den Fahrtrichtungsanzeiger permananet zu aktivieren. |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CLASS_1 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 1: T < 0 Grad C |
| STAT_CLASS_2 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 2: 0 < T < 95 Grad C |
| STAT_CLASS_3 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 3: 95 < T < 115 Grad C |
| STAT_CLASS_4 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 4: 115 < T < 135 Grad C |
| STAT_CLASS_5 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 5: 135 < T < 155 Grad C |
| STAT_CLASS_6 | + | - | - | 0-n | high | unsigned long | - | - | - | - | - | Temperaturstatistik Class 6: 155 < T  Grad C |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DOUBLE_WEEK_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_1_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_2_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_3_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_4_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_5_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_6_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_7_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_8_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_9_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_10_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_11_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_12_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_13_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_14_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_15_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_16_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_17_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_18_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_19_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_20_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_21_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_22_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_23_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_24_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_25_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_26_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_27_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_28_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |
| STAT_DOUBLE_WEEK_29_WERT | + | - | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | voltage of doubleweek |

### RES_0XF100_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_01_LED_1_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 1 |
| STAT_02_STRANG_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 1 |
| STAT_03_LED_1_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 11 |
| STAT_04_LED_1_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 12 |
| STAT_05_LED_1_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 13 |
| STAT_06_LED_2_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 2 |
| STAT_07_STRANG_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 2 |
| STAT_08_LED_2_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 21 |
| STAT_09_LED_2_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 22 |
| STAT_10_LED_2_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 23 |
| STAT_11_LED_3_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 3 |
| STAT_12_STRANG_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 3 |
| STAT_13_LED_3_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 31 |
| STAT_14_LED_3_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 32 |
| STAT_15_LED_3_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 33 |
| STAT_16_LED_4_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 4 |
| STAT_17_STRANG_4_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 4 |
| STAT_18_LED_4_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 41 |
| STAT_19_LED_4_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 42 |
| STAT_20_LED_4_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 43 |
| STAT_21_LED_5_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 5 |
| STAT_22_STRANG_5_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 5 |
| STAT_23_LED_5_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 51 |
| STAT_24_LED_5_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 52 |
| STAT_25_LED_6_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 6 |
| STAT_26_STRANG_6_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert Strang 6 |
| STAT_27_LED_6_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 61 |
| STAT_28_LED_6_2_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 62 |
| STAT_29_LED_6_3_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 63 |
| STAT_30_LED_6_4_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 64 |
| STAT_31_LED_6_5_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 65 |
| STAT_32_LED_6_6_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 66 |
| STAT_33_LED_7_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 7 |
| STAT_34_LED_7_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 71 |
| STAT_35_LED_8_STROM_WERT | - | - | + | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Stromwert LED 8 |
| STAT_36_LED_8_1_PWM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozent Wert LED 81 |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XFD00_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_ZAEHLER | 0-n | high | unsigned char | - | - | - | - | - | Zaehlerstand des Reset Zaehlers |
| STAT_WATCHDOG_ZAEHLER | 0-n | high | unsigned char | - | - | - | - | - | Zaehlerstand Watchdog Zaehlers |

### RES_0XFD01_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BULB_OP_TIMER1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 1 |
| STAT_BULB_OP_TIMER2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 2 |
| STAT_BULB_OP_TIMER3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 3 |
| STAT_BULB_OP_TIMER4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 4 |
| STAT_BULB_OP_TIMER5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 5 |
| STAT_BULB_OP_TIMER6_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 6 |
| STAT_BULB_OP_TIMER7_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 7 |
| STAT_BULB_OP_TIMER8_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 8 |
| STAT_BULB_OP_TIMER9_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 9 |
| STAT_BULB_OP_TIMER10_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 10 |
| STAT_BULB_OP_TIMER11_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 11 |
| STAT_BULB_OP_TIMER12_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 12 |
| STAT_BULB_OP_TIMER13_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 13 |
| STAT_BULB_OP_TIMER14_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 14 |
| STAT_BULB_OP_TIMER15_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 15 |
| STAT_BULB_OP_TIMER16_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 16 |
| STAT_BULB_OP_TIMER17_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 17 |
| STAT_BULB_OP_TIMER18_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 18 |
| STAT_BULB_OP_TIMER19_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 19 |
| STAT_BULB_OP_TIMER20_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 20 |
| STAT_BULB_OP_TIMER21_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 21 |
| STAT_BULB_OP_TIMER22_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistic Timer for Segment 22 |

### RES_0XFD04_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STACK_POINTER_1_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_1_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_2_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_2_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_3_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_3_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_4_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_4_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_5_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_5_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_6_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_6_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_7_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_7_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_8_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_8_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_9_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_9_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |
| STAT_STACK_POINTER_10_WERT | HEX | high | unsigned long | - | - | - | - | - | content SP |
| STAT_PC_10_WERT | HEX | high | unsigned long | - | - | - | - | - | content programming counter |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _RESET_ECU_VARIANT | 0x4000 | - | Entwicklerjob für das Rücksetzen der vergebenen ECU-Variante | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4000_D | - |
| _WRITE_SUPPLIER_INFO | 0x4001 | - | Lamp-Supplier-Information, Productiondate, LED-Types, ... | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4001_D | - |
| _WRITE_BINNING_DATA | 0x4002 | - | Binning information for each channel | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| READ_BINNING_INFO | 0x4003 | - | READ BINNING Information | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003_D |
| READ_SUPPLIER_INFO | 0x4004 | - | Reading supplier informatin | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| READ_NTC_PWM | 0x4037 | - | Read NTC values before and after thermo calculation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4037_D |
| READ_NTC_TEMP | 0x4038 | - | Auslesen der Temperaturwerte aus allen DTC's | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4038_D |
| RESET_SUPPLIER_DATA | 0x4061 | - | Reset Supplier Data in NVM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4061_D | - |
| RESET_BINNING_DATA | 0x4062 | - | Reset binning data in NVM to default value | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4062_D | - |
| FUNKTIONSTEST_RLM | 0xA5A8 | - | Funktionstest RLM | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA5A8_R |
| RLM_KANAL | 0xD6DA | - | Diagnose RLM Kanäle | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD6DA_D | RES_0xD6DA_D |
| LEUCHTEN_FUNKTION_RLM | 0xD6DD | - | Leuchtfunktion | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD6DD_D | RES_0xD6DD_D |
| RLM_EINGANGSSPANNUNG | 0xE2EB | STAT_SPANNUNG_KLEMME_LICHT_WERT | Eingangsspannung am Steuergerät | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_SUPPLIERROUTINE_SUBSERVICE | 0xF000 | - | SupplierRoutine 1 - Anwendung nur durch SG-Lieferant nur in Diagnose-Modus SYSTEM_SUPPLIER_SPECIFIC_61 ausführbar | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_SUPPLIERROUTINE_CONTROL | 0xF001 | - | SupplierRoutine2 - Anwendung nur SG-Lieferant nur in Diagnose-Modus SYSTEM_SUPPLIER_SESSION_61 ausführbar | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_READ_CHANNEL_TEMPERATURE_STATISTIC | 0xF002 | - | Lese Temperaturstatisticv pro Kanal [1..8] | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | RES_0xF002_R |
| READ_CHANNEL_VOLTAGE_STATISTIC | 0xF003 | - | Lese Voltagestatistik pro Kanal [1..7] | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | RES_0xF003_R |
| _STEUERN_LEUCHTEN_AUSSENLICHT_KANAL | 0xF100 | - | Ansteuern der einzelnen LED Kanäle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF100_R | RES_0xF100_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| RESET_ZAEHLER | 0xFD00 | - | Ruecksetzen / auslesen der Resetzähler für Reset und Watchdog | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD00_D | RES_0xFD00_D |
| BULB_OP_TIMERS | 0xFD01 | - | Read/Reset Bulp operation timers | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD01_D | RES_0xFD01_D |
| RESET_STATISTIC_TEMPERATURE_HISTOGRAMM | 0xFD02 | - | Rücksetzten Temperatur History eines Kanals [1..8] | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD02_D | - |
| RESET_STATISTIC_VOLTAGE_HISTOGRAM | 0xFD03 | - | Rücksetzten der Voltage Staistic Daten für einen Kanal [1..7] | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD03_D | - |
| RESET_VECTOR | 0xFD04 | - | Lesen / Rücksetzen einer Liste von Resetvektoren bestehend aus Stackpointer und program counter. Die Liste wird beim Auslösen des WDG befüllt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD04_D | RES_0xFD04_D |

### STATUS_RLM_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 254 | nicht unterstützt |
| 255 | nicht verbaut |

### STATUS_RLM_KANAL

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 255 | nicht verbaut |

### TAB_ACV_FN_IDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Blinken_Aus |
| 0x01 | Crash_Blinken |
| 0x02 | Reversier_Blinken |
| 0x03 | Quittierungsblinken_Schaerfen |
| 0x04 | Quittierungsblinken_Entschaerfen |
| 0x05 | DWA_Blinken |
| 0x06 | Warnblinken_manuell |
| 0x07 | Dauerblinken_links |
| 0x08 | Dauerblinken_rechts |
| 0x09 | Tippblinken_links |
| 0x0A | Tippblinken_rechts |
| 0x0B | Ueberfallalarm |
| 0x0C | FAS_Warnblinken_Auspraegung_1 |
| 0x0D | Auffahrwarnblinken |
| 0x0E | Ankuendigungsblinken_Oeffnen |
| 0x0F | Ankuendigungsblinken_Schliessen |
| 0x10 | Warnblinken_nach_Gefahrenbremsung |
| 0x11 | Warnblinken_von_RCP |
| 0x12 | FAS_Richtungsblinken_lowPrio_links |
| 0x13 | FAS_Richtungsblinken_lowPrio_rechts |
| 0x14 | FAS_Richtungsblinken_midPrio_links |
| 0x15 | FAS_Richtungsblinken_midPrio_rechts |
| 0x16 | FAS_Richtungsblinken_highPrio_links |
| 0x17 | FAS_Richtungsblinken_highPrio_rechts |
| 0x18 | FAS_Warnblinken_Auspraegung_2 |
| 0x19 | FAS_Warnblinken_Auspraegung_3 |
| 0xFD | Reserviert_nicht_verfuegbar |
| 0xFE | Reserviert_Fehler |
| 0xFF | Signal_unbefuellt |

### TAB_BULB_OP_TIME_RESET

| WERT | TEXT |
| --- | --- |
| 0 | reset light bulp operation time counter segment 1 |
| 1 | reset light bulp operation time counter segment 2 |
| 2 | reset light bulp operation time counter segment 3 |
| 3 | reset light bulp operation time counter segment 4 |
| 4 | reset light bulp operation time counter segment 5 |
| 5 | reset light bulp operation time counter segment 6 |
| 6 | reset light bulp operation time counter segment 7 |
| 7 | reset light bulp operation time counter segment 8 |
| 8 | reset light bulp operation time counter segment 9 |
| 9 | reset light bulp operation time counter segment 10 |
| 10 | reset light bulp operation time counter segment 11 |
| 11 | reset light bulp operation time counter segment 12 |
| 12 | reset light bulp operation time counter segment 13 |
| 13 | reset light bulp operation time counter segment 14 |
| 14 | reset light bulp operation time counter segment 15 |
| 15 | reset light bulp operation time counter segment 16 |
| 16 | reset light bulp operation time counter segment 17 |
| 17 | reset light bulp operation time counter segment 18 |
| 18 | reset light bulp operation time counter segment 19 |
| 19 | reset light bulp operation time counter segment 20 |
| 20 | reset light bulp operation time counter segment 21 |
| 21 | reset light bulp operation time counter segment 22 |

### TAB_CTR_BFD

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_BFD |
| 0x02 | BFD_MODE_1 |
| 0x03 | BFD_MODE_2 |
| 0x04 | BFD_MODE_3 |
| 0x05 | BFD_MODE_4 |
| 0x0F | Signal ungültig |

### TAB_CTR_BL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_BL |
| 0x02 | ON_BL |
| 0x03 | Signal ungültig |

### TAB_CTR_DRL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_DRL |
| 0x02 | ON_DRL |
| 0x06 | DRL_L_ON_R_ERR |
| 0x0A | DRL_L_ERR_R_ON |
| 0x0D | DRL_L_ERR_R_ERR |
| 0x0F | Signal ungültig |

### TAB_CTR_FMH

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_FMH |
| 0x02 | ON_FMH |
| 0x03 | Signal ungültig |

### TAB_CTR_FOG_LAMP

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_RFLI_OFF_TRM |
| 0x02 | ON_RFLI_OFF_TRM |
| 0x03 | ON_RFLI_ON_TRM |
| 0x04 | OFF_RFLI_ON_TRM |
| 0x08 | ON_RFLI_SYNC |
| 0x09 | ON_RFLI_ASYNC |
| 0xFF | Signal ungültig |

### TAB_CTR_FREQ_IDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht_blinken |
| 0x01 | Normal_Blinktakt |
| 0x02 | Doppelter_Blinktakt |
| 0x03 | Doppel_Blink_Impuls |
| 0x04 | Spar_Blinktakt |
| 0x0D | Reserviert_nicht_verfuegbar |
| 0x0E | Reserviert_Fehler |
| 0x0F | Signal unbefüllt |

### TAB_CTR_GBL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_GBL |
| 0x02 | OFF_GBL_HARD |
| 0x03 | GBL_MODE_1 |
| 0x0D | Reserviert nicht verfügbar |
| 0x0E | Reserviert Fehler |
| 0x0F | Signal unbefüllt |

### TAB_CTR_PLI

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_PLI |
| 0x02 | ON_PLI_L |
| 0x03 | ON_PLI_R |
| 0x0F | Signal ungültig |

### TAB_CTR_POLI

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_POLI |
| 0x02 | POLI_MODUS_1 |
| 0x03 | POLI_MODUS_2 |
| 0x04 | POLI_MODUS_3 |
| 0x05 | POLI_MODUS_4 |
| 0x0F | Signal ungültig |

### TAB_CTR_REMLI

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_Remote-Light |
| 0x02 | ON_Remote-Light_1 |
| 0x04 | ON_Remote-Light_0 |
| 0x0F | Signal ungültig |

### TAB_CTR_RVLP

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF |
| 0x02 | ON |
| 0x03 | ON_TRM |
| 0x0F | Signal ungültig |

### TAB_CTR_WELL

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | OFF_WELL |
| 0x02 | OFF_WELL_HARD |
| 0x03 | WELL_MODE_1 |
| 0x04 | WELL_MODE_2 |
| 0x05 | WELL_MODE_3 |
| 0x06 | WELL_MODE_4 |
| 0x07 | WELL_MODE_5 |
| 0x08 | WELL_MODE_6 |
| 0x0F | Signal ungültig |

### TAB_FUNKTIONSTESTRLM_SEGMENTRESULT

| WERT | TEXT |
| --- | --- |
| 0 | Fehler erkannt |
| 1 | Kein Fehler erkannt |
| 0xFF | Wert ungültig |

### TAB_HARDWARE_VARIANT

| WERT | TEXT |
| --- | --- |
| 0 | unbekannt |
| 1 | SAE |
| 2 | ECE |

### TAB_RESET_ZAEHLER_LOESCHEN

| WERT | TEXT |
| --- | --- |
| 1 | Reset Zaehler |
| 2 | Watchdog Zaehler |

### TAB_RUECKLEUCHTEN_FUNKTION_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Standlicht/ Position light |
| 0x02 | Rueckfahrlicht/ Rverse light |
| 0x03 | Nebelschlusslicht/ Fog light |
| 0x04 | Bremslicht/ Brake light |
| 0x05 | Parklicht/ Parking light |
| 0x06 | SML |
| 0x07 | Tagfahrlicht/ Day running light |
| 0x08 | Fahrtrichtungsanzeiger/ Direction indicator |
| 0x09 | Goodbye Light |
| 0x0A | Welcome Light |
| 0x0B | Heimleuchte/ Follow me home |
| 0x0C | ESS Blinken |
| 0x0D | DWA Blinken |
| 0x0E | Panik Blinken |
| 0x0F | Überfall Alarm |
| 0x10 | Permanenter Fahrtrichtungsanzeiger (virtuelle Lichtfunktion für Zulassungszwecke) |

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

### UWB_TAB_ALIVE_CRC_0X1A1_V_VEH

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X1E4_CTR_LP_EX_2

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X215_ST_LP_EX_REAR

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X2EB_CTR_LP_EX

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X328_RELATIVZEIT

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X32_ST_CENG

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X330_KILOMETERSTAND

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X380_FAHRGESTELLNUMMER

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRCFehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X388_FAHRZEUGTYP

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X3A0_FZZSTD

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X3C_CON_VEH

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0XCA_CTR_FN_IDC

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRCFehler |
| 0xFF | Wert ungültig |

### UWB_TAB_ALIVE_CRC_0X2CA_A_TEMP

| WERT | TEXT |
| --- | --- |
| 1 | Alive-Fehler |
| 2 | CRC-Fehler |
| 0xFF | Wert ungültig |

### UWB_TAB_CONFIGURATION_DATA_INVALID

| WERT | TEXT |
| --- | --- |
| 1 | binning data |
| 2 | supplier data |
| 3 | pav data |
| 4 | crc pav data |
| 0xFF | Wert ungültig |

### UWB_TAB_DEFEKT_ART_NOTLAUFAKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 1 | PLAUSIBILITY_CHECK_FAILURE |
| 2 | FUSI_DATA_CRC_CHECK_FAILURE |
| 3 | COMMUNICATION_ERRORS |
| 0xFF | Wert ungültig |

### UWB_TAB_DEFEKT_ART_NTC

| WERT | TEXT |
| --- | --- |
| 1 | Kurzschluss nach Masse |
| 2 | Leitungsunterbrechung |
| 3 | Kurzschluss nach VBat |
| 0xFF | Wert ungültig |

### UWB_TAB_DEFEKT_ART_STRANG

| WERT | TEXT |
| --- | --- |
| 1 | Kurzschluss nach Masse |
| 2 | Kurzschluss nach Plus |
| 3 | Spannung außerhalb Toleranz |
| 4 | Strangunterbrechung |
| 5 | Übertemperatur 1 (Abschaltung) |
| 6 | Übertemperatur 2 (Degradation) |
| 7 | Strom außerhalb Toleranz |
| 0xFF | Wert ungültig |

### UWB_TAB_FLS_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | FLS_E_COMPARE_FAILED |
| 2 | FLS_E_ERASE_FAILED |
| 3 | FLS_E_READ_FAILED |
| 4 | FLS_E_UNEXPECTED_FLASH_ID |
| 5 | FLS_E_WRITE_FAILED |
| 6 | FLS_E_READ_FAILED_DED |
| 0xFF | Wert ungültig |

### UWB_TAB_GPT_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | GPT_E_TIMEOUT_FAILURE |
| 2 | GPT_E_READBACK_FAILURE |
| 0xFF | Wert ungültig |

### UWB_TAB_MCU_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | MCU_E_CLOCK_FAILURE |
| 2 | MCU_E_WRITE_TIMEOUT_FAILURE |
| 3 | MCU_E_LVI_FAILURE |
| 0xFF | Wert ungültig |

### UWB_TAB_NVM_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | NVM_E_INTEGRITY_FAILED |
| 2 | NVM_E_LOSS_OF_REDUNDANCY |
| 3 | NVM_E_QUEUE_OVERFLOW |
| 4 | NVM_E_REQ_FAILED |
| 5 | NVM_E_VERIFY_FAILED |
| 6 | NVM_E_WRITE_PROTECTED |
| 7 | NVM_E_WRONG_BLOCK_ID |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_1

| WERT | TEXT |
| --- | --- |
| 0 | Strang |
| 1 | Segment 1 |
| 2 | Segment 2 |
| 3 | Segment 3 |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_2

| WERT | TEXT |
| --- | --- |
| 0 | Strang |
| 4 | Segment 4 |
| 5 | Segment 5 |
| 6 | Segment 6 |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_3

| WERT | TEXT |
| --- | --- |
| 0 | Strang 3 |
| 7 | Segment 7 |
| 8 | Segment 8 |
| 9 | Segment 9 |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_4

| WERT | TEXT |
| --- | --- |
| 0 | Strang 4 |
| 10 | Segment 10 |
| 11 | Segment 11 |
| 12 | Segment 12 |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_5

| WERT | TEXT |
| --- | --- |
| 0 | Strang 5 |
| 13 | Segment 13 |
| 14 | Segment 14 |
| 0xFF | Wert ungültig |

### UWB_TAB_OVERVOLTAGE_SEG_STRANG_6

| WERT | TEXT |
| --- | --- |
| 0 | Strang 6 |
| 15 | Segment 15 |
| 16 | Segment 16 |
| 17 | Segment 17 |
| 18 | Segment 18 |
| 19 | Segment 19 |
| 20 | Segment 20 |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X1A1_V_VEH

| WERT | TEXT |
| --- | --- |
| 1 | DVCO_VEH |
| 2 | QU_V_VEH_COG |
| 3 | V_VEH_COG |
| 4 | ALIV_V_VEH |
| 5 | CRC_V_VEH |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X1E4_CTR_LP_EX_2

| WERT | TEXT |
| --- | --- |
| 1 | CTR_FN_ML |
| 2 | CTR_FN_FFLI |
| 3 | CTR_FN_OVT |
| 4 | CTR_FN_MAB |
| 5 | CTR_MOD_FN_SPFLS |
| 6 | CTR_PHA_FN_SPFLS |
| 7 | CTR_FN_CORNL_RH |
| 8 | CTR_FN_CORNL_LH |
| 9 | CTR_LDSTR_LOWB_RH |
| 10 | CTR_FN_DIPB_RH |
| 11 | CTR_LDSTR_LOWB_LH |
| 12 | CTR_FN_DIPB_LH |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X215_REAR_2

| WERT | TEXT |
| --- | --- |
| 1 | ST_SU_REAR_2_LH |
| 2 | ST_FN_IDC_REAR_2_LH |
| 3 | ST_FN_FMH_REAR_2_LH |
| 4 | ST_FN_REMLI_REAR_2_LH |
| 5 | ST_FN_BL_REAR_2_LH |
| 6 | ST_FN_DRL_REAR_2_LH |
| 7 | ST_FN_BFD_REAR_2_LH |
| 8 | ST_FN_RVLP_REAR_2_LH |
| 9 | ST_FN_PLI_REAR_2_LH |
| 10 | ST_FN_POLI_REAR_2_LH |
| 11 | ST_FN_RFLP_REAR_2_LH |
| 12 | ST_FN_WELL_REAR_2_LH |
| 13 | CHL_ST_LP_EX_REAR_2_LH |
| 14 | ALIV_ST_LP_EX_REAR_2_LH |
| 15 | CRC_ST_LP_EX_REAR_2_LH |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X2CB_CTRL_LP_EX

| WERT | TEXT |
| --- | --- |
| 1 | CTR_FN_REMLI |
| 2 | CTR_FN_FMH |
| 3 | CTR_FN_BL |
| 4 | CTR_FN_DRL |
| 5 | CTR_FN_BFD |
| 6 | CTR_FN_RVLP |
| 7 | CTR_FN_PLI |
| 8 | CTR_FN_POLI |
| 9 | CTR_FN_RFLP |
| 10 | CTR_FN_WELL |
| 11 | CTR_BRIGLEV_LP |
| 12 | ALIV_CTR_LP_EX |
| 13 | CRC_CTR_LP_EX |
| 14 | CTR_FN_GBL |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X328_RELATIVZEIT

| WERT | TEXT |
| --- | --- |
| 1 | T_DAY_COU_ABSL |
| 2 | T_SEC_COU_REL |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X32_ST_CENG

| WERT | TEXT |
| --- | --- |
| 1 | ST_ENERG_SUPY |
| 2 | ST_UDP |
| 3 | ST_CENG_DRV |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X388_FAHRZEUGTYP

| WERT | TEXT |
| --- | --- |
| 1 | TYP_CNT |
| 2 | TYP_STE |
| 3 | QUAN_GR |
| 4 | TYP_VEH |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X3A0_FZZSTD

| WERT | TEXT |
| --- | --- |
| 1 | ST_ILK_ERRM_FZM |
| 2 | ST_ERRM_FZM |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X3C_CON_VEH

| WERT | TEXT |
| --- | --- |
| 1 | QU_ST_CON_VEH |
| 2 | ST_CON_VEH |
| 3 | CTR_FKTN_PRINT |
| 4 | CTR_BS_PRINT |
| 5 | ALIV_CON_VEH |
| 6 | CRC_CON_VEH |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0XCA_CTR_FN_IDC

| WERT | TEXT |
| --- | --- |
| 1 | OVLY_FN_IDC |
| 2 | ACV_FN_IDC |
| 3 | CTR_IDC |
| 4 | CTR_SYNC_IDC |
| 5 | CTR_FREQ_IDC |
| 6 | CHL_CTR_FN_IDC |
| 7 | ALIV_CTR_FNS_IDC |
| 8 | CRC_CTR_FNS_IDC |
| 9 | CTR_T_SECS_IDC |
| 10 | CTR_T_MSECS_IDC |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X2CA_A_TEMP

| WERT | TEXT |
| --- | --- |
| 1 | TEMP_EX |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X330_KILOMETERSTAND

| WERT | TEXT |
| --- | --- |
| 1 | MILE_KM |
| 0xFF | Wert ungültig |

### UWB_TAB_SIGNAL_0X380_FAHRGESTELLNUMMER

| WERT | TEXT |
| --- | --- |
| 1 | NO_VECH_1 |
| 2 | NO_VECH_2 |
| 3 | NO_VECH_3 |
| 4 | NO_VECH_4 |
| 5 | NO_VECH_5 |
| 6 | NO_VECH_6 |
| 7 | NO_VECH_7 |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X1A1_V_VEH

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X1E4_CTR_LP_EX_2

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X215_ST_LP_EX_REAR

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X328_RELATIVZEIT

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuer |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X32_ST_CENG

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X330_KILOMETERSTAND

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X380_FAHRGESTELLNUMMER

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X388_FAHRZEUGTYP

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X3A0_FZZSTD

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X3C_CON_VEH

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X2CA_A_TEMP

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisc |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X2EB_CTR_LP_EX

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_0X2FC_STAT_ZV_KLAPPEN

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuert |
| 0xFF | Wert ungültig |

### UWB_TAB_TIMEOUT_CRC_0XCA_CTR_FN_IDC

| WERT | TEXT |
| --- | --- |
| 1 | Timeout zyklisch |
| 2 | Timeout Ereignisgesteuer |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_1

| WERT | TEXT |
| --- | --- |
| 0 | Strang 0 |
| 1 | Segment 1 |
| 2 | Segment 2 |
| 3 | Segment 3 |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_2

| WERT | TEXT |
| --- | --- |
| 0 | strang 2 |
| 4 | segment 4 |
| 5 | segment 5 |
| 6 | segment 6 |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_3

| WERT | TEXT |
| --- | --- |
| 0 | strang 3 |
| 7 | segment 7 |
| 8 | segment 8 |
| 9 | segment 9 |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_4

| WERT | TEXT |
| --- | --- |
| 0 | strang 4 |
| 10 | segment 10 |
| 11 | segment 11 |
| 12 | segment 12 |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_5

| WERT | TEXT |
| --- | --- |
| 0 | strang 4 |
| 13 | segment 13 |
| 14 | segment 14 |
| 0xFF | Wert ungültig |

### UWB_TAB_UNDERVOLTAGE_SEG_STRANG_6

| WERT | TEXT |
| --- | --- |
| 0 | strang 6 |
| 15 | segment 15 |
| 16 | segment 16 |
| 17 | segment 17 |
| 18 | segment 18 |
| 19 | segment 19 |
| 20 | segment 20 |
| 0xFF | Wert ungültig |

### UWB_TAB_WDGM_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | WDGM_E_IMPROPER_CALLER |
| 2 | WDGM_E_MONITORING |
| 3 | WDGM_E_SET_MODE |
| 0xFF | Wert ungültig |

### UWB_TAB_WDG_ERROR_SOURCE

| WERT | TEXT |
| --- | --- |
| 1 | WDG_E_DISABLE_REJECTED |
| 2 | WDG_E_MODE_FAILED |
| 3 | WDG_E_TRIGGER_TIMEOUT |
| 4 | WDG_E_READBACK_FAILURE |
| 0xFF | Wert ungültig |
