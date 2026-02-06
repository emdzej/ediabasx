# GSD_F90.prg

## General

|  |  |
| --- | --- |
| File | GSD_F90.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 88 |
| Origin | BMW ZS-E-32 Gruber |
| Revision | 12.302 |
| Author | BMW MA-513 Ziegler |
| ECU Comment | G02 I430 X2 (ZEDIS v19) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Geregeltes Sperrdifferential |  |  |
| ORIGIN | string | BMW ZS-E-32 Gruber |  |  |
| REVISION | string | 12.302 |  |  |
| AUTHOR | string | BMW MA-513 Ziegler |  |  |
| COMMENT | string | G02 I430 X2 (ZEDIS v19) |  |  |
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

### ARG_0X4021_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_KENNLINIE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reset Kennlinie |

### ARG_0XAB7E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRMOMENT | + | - | Nm | high | unsigned int | - | - | 1.0 | 1.5 | 2048.0 | -1.5 | 3000.0 | Sperrmoment in der Kupplung (-1.5 entspricht Fahrt auf MEZ, d.h. Kupplung offen, kein Sperrmoment) |
| DAUER | + | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 600.0 | Dauer für die das entsprechende Moment gehalten werden soll |

### ARG_0XAB87_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DMC | + | - | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingescannte Daten von DMC (CCLLVVC1C2C3C4C5) |

### ARG_0XAB88_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERSION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Version des Telegramms |
| KENNLINIE_KORREKTUR_C0 | + | - | HEX | high | signed char | - | - | - | - | - | - | - | Korrekturwert für 0% |
| KENNLINIE_KORREKTUR_C05 | + | - | HEX | high | signed char | - | - | - | - | - | - | - | Korrekturwert für 5% |
| KENNLINIE_KORREKTUR_C20 | + | - | HEX | high | signed char | - | - | - | - | - | - | - | Korrekturwert für 20% |
| KENNLINIE_KORREKTUR_C50 | + | - | HEX | high | signed char | - | - | - | - | - | - | - | Korrekturwert für 50% |
| KENNLINIE_KORREKTUR_C100 | + | - | HEX | high | signed char | - | - | - | - | - | - | - | Korrekturwert für 100% |

### ARG_0XAB89_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DMC | + | - | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingescannte Daten von DMC (CCLLVVC1C2C3C4C5) |

### ARG_0XDE56_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAG_PRODUKTIONSDATEN | TEXT | high | string[31] | - | - | 1.0 | 1.0 | 0.0 | - | - | HAG-Produktionsdaten (Seriennummer, Produktionsdaten etc.) |

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

### FEHLERSPEICHERSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Fehlerspeicherfreigabe |
| 1 | Fehlerspeichersperre |
| 2 | Reserve |
| 3 | Signal ungültig |
| 0xFF | Wert ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020F00 | Energiesparmode aktiv | 0 | - |
| 0x020F08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020F09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x020F0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x020F0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x020F0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x020F0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x020F23 | Flash Memory: Sammelfehler | 0 | - |
| 0x020F26 | Betriebssystem: Sammelfehler | 0 | - |
| 0x020F29 | Software: Sammelfehler | 0 | - |
| 0x02FF0F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482B80 | Klemme 30B: Unterspannung | 1 | - |
| 0x482B81 | Klemme 30B: Überspannung | 1 | - |
| 0x482B82 | Klemme 15N: Unterspannung | 1 | - |
| 0x482B83 | Klemme 15N: Überspannung | 1 | - |
| 0x482B84 | Stellmotor Positionssensoren, Versorgungsspannung: außerhalb gültigem Bereich | 0 | - |
| 0x482B85 | Stellmotor Temperatursensor, Signal: Temperatur nicht plausibel | 0 | - |
| 0x482B86 | Stellmotor Positionssensor 1, Signal: Spannung außerhalb gültigem Bereich | 0 | - |
| 0x482B87 | Stellmotor Positionssensor 2, Signal: Spannung außerhalb gültigem Bereich | 0 | - |
| 0x482B88 | Stellmotor Positionssensoren, Signale: Signalleitungen vertauscht | 0 | - |
| 0x482B89 | Stellmotor Temperatursensor, Signal: Temperatur außerhalb gültigem Bereich | 0 | - |
| 0x482B8A | Öltemperatursensor, Signal: Temperatur außerhalb gültigem Bereich | 0 | - |
| 0x482B8B | Stellmotor: Plausibilitätsfehler in der Aktor-Initialisierung | 0 | - |
| 0x482B8C | Stellmotor, Ansteuerung: offene Leitung (Motor Plus oder Motor Minus) | 0 | - |
| 0x482B8D | Stellmotor, Ansteuerung: Kurzschluss nach Masse (Motor Plus oder Motor Minus) | 0 | - |
| 0x482B8E | Stellmotor, Ansteuerung: Kurzschluss nach Plus (Motor Plus oder Motor Minus) | 0 | - |
| 0x482B8F | Öltemperatursensor, Signal: Temperatur nicht plausibel | 0 | - |
| 0x482B90 | Steuergerät: Strommessung Offset nicht plausibel | 0 | - |
| 0x482B91 | Steuergerät: Überstrom Motorendstufe | 0 | - |
| 0x482B92 | Steuergerät: Motorendstufe überlastet | 0 | - |
| 0x482B93 | Steuergerät: Motorendstufe überlastet und Abschaltung Eigenschutz | 0 | - |
| 0x482B94 | Steuergerät: Diagnose Motorendstufentreiber | 0 | - |
| 0x482B95 | Steuergerät: Fehler in Analogdatenmessung | 0 | - |
| 0x482B96 | Steuergerät: Motorendstufentreiber Initialisierungsfehler | 0 | - |
| 0x482B9C | Steuergerät: Software nicht korrekt beendet | 1 | - |
| 0x482B9E | Steuergerät: Microcontroller Fehlfunktion | 0 | - |
| 0x482B9F | Steuergerät: Software Funktionsüberwachung hat ausgelöst | 0 | - |
| 0x482BA1 | Steuergerät: Software Fehlfunktion | 0 | - |
| 0x482BA6 | Stellmotor, Ansteuerung: Motor Plus und Motor Minus Leitungen vertauscht | 0 | - |
| 0x482BA7 | Sperre: Nicht an Steuergerät angelernt (Kalibrierung Sperre fehlt) | 0 | - |
| 0x482BA8 | Sperre: Überlastet und temporär nicht verfügbar (Übertemperaturschutz aktiv) | 0 | - |
| 0x482BA9 | Stellmotor Positionssensoren: Plausibilitätsfehler | 0 | - |
| 0x482BAB | Stellmotor: Plausibilitätsfehler in der Stellmotorbewegung | 0 | - |
| 0x482BAD | Sperre: Mechanisches Spiel zu groß | 0 | - |
| 0x482BAE | Sperre: Initialisierung konnte nicht abgeschlossen werden | 0 | - |
| 0x482BB0 | Steuergerät: Keine gültigen Korrekturdaten | 0 | - |
| 0x482BB4 | Steuergerät: Kalibrierung mehrfach fehlgeschlagen | 0 | - |
| 0x482BB6 | Sperre: Überlastet und temporär nicht verfügbar (Übertemperatur Hinterachskupplung) | 0 | - |
| 0x482BB7 | Sperre: Überlastet und temporär nicht verfügbar (Übertemperatur Öl) | 0 | - |
| 0x482BB8 | Sperre: Überlastet und temporär nicht verfügbar (Übertemperatur Aktor) | 0 | - |
| 0x482BB9 | Steuergerät: Unerwartete Stellgröße zurückgelesen | 0 | - |
| 0x482BBA | Codierung: Abweichung in der erwarteten Codierung (Security) | 0 | - |
| 0x482BBF | Sperre: Kupplungsverschleiss oberhalb Warnschwelle | 0 | - |
| 0xCCC41F | FLEXRAY Physical bus error | 0 | - |
| 0xCCC420 | FLEXRAY controller error | 0 | - |
| 0xCCCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCCD403 | Botschaft (Ist Drehzahl Rad, 46.0.1) fehlt, Sender DSC_IB_BRS | 1 | - |
| 0xCCD404 | Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) fehlt, Sender DSC_IB_VIP/VDP | 1 | - |
| 0xCCD408 | Botschaft (Status Verbrennungsmotor, 117.0.2) fehlt, Sender DME1 | 1 | - |
| 0xCCD409 | Botschaft (Außentemperatur, 252.1.4) fehlt,  Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCD40A | Botschaft (Relativzeit, 276.2.8) fehlt, Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCD40B | Botschaft (Kilometerstand - Reichweite, 276.4.8) fehlt, Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCD40C | Botschaft (Soll Quermomentenverteilung Hinterachse, 66.1.2) fehlt, Sender DSC_IB_VIP | 1 | - |
| 0xCCD40E | Botschaft (Toleranzabgleich Rad, 271.4.8) fehlt, Sender DSC_IB_VIP | 1 | - |
| 0xCCD40F | Botschaft (Fahrgestellnummer, 275.7.8) fehlt, Sender BDC_Body | 1 | - |
| 0xCCD410 | Botschaft (Zustand Fahrzeug, 121.1.2) fehlt, Sender BDC_Body | 1 | - |
| 0xCCD411 | Botschaft (Fahrzeugzustand, 275.1.8) fehlt, Sender ZGW | 1 | - |
| 0xCCD416 | Botschaft (Ist Drehzahl Rad, 46.0.1) nicht aktuell, Sender DSC_IB_BRS | 1 | - |
| 0xCCD417 | Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) nicht aktuell, Sender DSC_IB_VIP/VDP | 1 | - |
| 0xCCD41B | Botschaft (Status Verbrennungsmotor, 117.0.2) nicht aktuell, Sender DME1 | 1 | - |
| 0xCCD41D | Botschaft (Soll Quermomentenverteilung Hinterachse, 66.1.2) nicht aktuell, Sender DSC_IB_VIP | 1 | - |
| 0xCCD41E | Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) Prüfsumme falsch, Sender DSC_IB_VIP/VDP | 1 | - |
| 0xCCD41F | Botschaft (Zustand Fahrzeug, 121.1.2) nicht aktuell, Sender BDC_Body | 1 | - |
| 0xCCD424 | Botschaft (Ist Drehzahl Rad, 46.0.1) Prüfsumme falsch, Sender DSC_IB_BRS | 1 | - |
| 0xCCD428 | Botschaft (Status Verbrennungsmotor, 117.0.2) Prüfsumme falsch, Sender DME1 | 1 | - |
| 0xCCD42A | Botschaft (Soll Quermomentenverteilung Hinterachse, 66.1.2) Prüfsumme falsch, Sender DSC_IB_VIP | 1 | - |
| 0xCCD42B | Botschaft (Zustand Fahrzeug, 121.1.2) Prüfsumme falsch, Sender BDC_Body | 1 | - |
| 0xCCEC02 | Signal (Ist Drehzahl Rad, 46.0.1) undefiniert, Sender DSC_IB_BRS | 1 | - |
| 0xCCEC03 | Signal (Geschwindigkeit Fahrzeug, 55.3.4) undefiniert V_VEH_COG, Sender DSC_IB_VIP/VDP | 1 | - |
| 0xCCEC06 | Signal (Toleranzabgleich Rad, 271.4.8) undefiniert, Sender DSC_IB_VIP | 1 | - |
| 0xCCEC0B | Signal (Geschwindigkeit Fahrzeug, 55.3.4) ungültig V_VEH_COG, Sender DSC_IB_VIP/VDP | 1 | - |
| 0xCCEC0F | Signal (Status Verbrennungsmotor, 117.0.2) ungültig ST_CENG_DRV, Sender DME1 | 1 | - |
| 0xCCEC10 | Signal (Außentemperatur, 252.1.4) undefiniert TEMP_EX, Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCEC13 | Signal (Soll Quermomentenverteilung Hinterachse, 66.1.2) ungültig, Sender DSC_IB_VIP | 1 | - |
| 0xCCEC14 | Signal (Toleranzabgleich Rad, 271.4.8) ungültig, Sender DSC_IB_VIP | 1 | - |
| 0xCCEC15 | Signal (Fahrgestellnummer, 275.7.8) ungültig NO_VECH_x, Sender BDC_Body | 1 | - |
| 0xCCEC16 | Signal (Fahrzeugzustand, 275.1.8) ungültig ST_ILK_ERRM_FZM, Sender ZGW | 1 | - |
| 0xCCEC17 | Signal (Zustand Fahrzeug, 121.1.2) ungültig ST_CON_VEH, Sender BDC_Body | 1 | - |
| 0xCCEC19 | Signal (Ist Drehzahl Rad, 46.0.1) ungültig, Sender DSC_IB_BRS | 1 | - |
| 0xCCEC20 | Signal (Außentemperatur, 252.1.4) ungültig TEMP_EX, Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCEC21 | Signal (Relativzeit, 276.2.8) ungültig T_SEC_COU_REL, Sender Kombi/Kombi_Basis | 1 | - |
| 0xCCEC22 | Signal (Kilometerstand - Reichweite, 276.4.8) ungültig MILE_KM, Sender Kombi/Mobi_Basis | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | SPANNUNG_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4002 | SPANNUNG_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4003 | ZUSTAND_IPM | HEX | High | unsigned long | - | - | - | - |
| 0x4005 | SPERRMOMENT | Nm | High | unsigned int | - | 0.5 | 1.0 | -1.5 |
| 0x4006 | POSITION_SPERRE_VORGABE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -3000.0 |
| 0x4007 | POSITION_SPERRE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -3000.0 |
| 0x4008 | REKALIBRIERUNG_OFFSET_SPERRE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -1000.0 |
| 0x4009 | TEMP_OEL | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400A | TEMP_MOTOR | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400B | TEMP_KUPPLUNG | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400C | MOTORSTROM_VORGABE | A | High | unsigned int | - | 1.0 | 100.0 | -50.0 |
| 0x400D | MOTORSTROM | A | High | unsigned int | - | 1.0 | 100.0 | -50.0 |
| 0x400E | MOTOR_PWM_VORGABE | % | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x400F | CDD_DISTURBANCE_FLAGS | HEX | High | unsigned int | - | - | - | - |
| 0x4012 | SPERRMOMENT_VORGABE_AUS_TBC | Nm | High | unsigned int | - | 0.5 | 1.0 | -1.5 |
| 0x4013 | ZUSTAND_MOS | 0-n | High | 0xFF | TAB_ZUSTAND_ECUM | - | - | - |
| 0x4014 | SAFETILIB_TEST_ERR | HEX | High | unsigned long | - | - | - | - |
| 0x4015 | SAFETILIB_SMU_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x4016 | IPM_DISTURBANCE_FLAGS | HEX | High | unsigned int | - | - | - | - |
| 0x4017 | TEMP_EX | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4018 | ENERGIE_SPERRE | kJ | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x401B | DELTA_N_SPERRE | 1/min | High | unsigned char | - | 2.0 | 1.0 | -256.0 |
| 0x401C | ENERGIE_SPERRE_AKTUELL | kJ | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x4022 | BSW_FLSMEM_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x4023 | BSW_OS_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x4024 | BSW_SW_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x4028 | AVL_RPM_WHL_SIG_INVALID | 0-n | High | 0xFF | TAB_AVL_RPM_WHL_SIG | - | - | - |
| 0x4029 | TOMA_WHL_SIG_INVALID | 0-n | High | 0xFF | TAB_TOMA_WHL_SIG | - | - | - |
| 0x402A | TAR_LTRQD_BAX_SIG_INVALID | 0-n | High | 0xFF | TAB_TAR_LTRQD_BAX_SIG | - | - | - |
| 0x402B | SAFETILIB_WDG_APPL_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x402C | TEMP_FET | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402D | TEMP_CHOKE | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402E | TEMP_SHUNT | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402F | TEMP_CONNECTOR | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x4031 | TEMP_PCB | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x4032 | THERMAL_STRESS | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4033 | V_VEH_SIG_INVALID | 0-n | High | 0xFF | TAB_V_VEH_SIG | - | - | - |
| 0x4034 | FAHRGESTELLNUMMER_SIG_INVALID | 0-n | High | 0xFF | TAB_FAHRGESTELLNUMMER_SIG | - | - | - |
| 0x4035 | AVL_RPM_WHL_SIG_UNDEFINED | 0-n | High | 0xFF | TAB_AVL_RPM_WHL_SIG | - | - | - |
| 0x4036 | TOMA_WHL_SIG_UNDEFINED | 0-n | High | 0xFF | TAB_TOMA_WHL_SIG | - | - | - |
| 0x4037 | V_VEH_SIG_UNDEFINED | 0-n | High | 0xFF | TAB_V_VEH_SIG | - | - | - |
| 0x4038 | CON_VEH_SIG_INVALID | 0-n | High | 0xFF | TAB_CON_VEH_SIG | - | - | - |
| 0x403B | ZUSTAND_AVS | 0-n | High | 0xFF | TAB_ZUSTAND_AVS | - | - | - |
| 0x403C | SAFETY_INTERFACE_GASW | HEX | High | unsigned char | - | - | - | - |
| 0x403D | SAFETY_INTERFACE_IPM | HEX | High | unsigned char | - | - | - | - |
| 0x403E | SAFETILIB_SAFEPATHTEST_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x403F | ZUSTAND_IOST | 0-n | High | 0xFF | TAB_ZUSTAND_IOST | - | - | - |
| 0x404F | POWER_ON_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4050 | POWER_DOWN_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4051 | RUNNING_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | VEHICLE_SPEED | km/h | High | unsigned int | - | 1.0 | 2.0 | 0.0 |
| 0x4058 | MIN_VOLTAGE_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4059 | MAX_VOLTAGE_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405A | MIN_VOLTAGE_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405B | MAX_VOLTAGE_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405C | FEHLERSPEICHERSPERRE_AKTIV | 0-n | High | 0xFF | FEHLERSPEICHERSPERRE | - | - | - |
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
| 0x482BAA | Sperre: fehlgeschlagene Kalibrierung | 0 | - |
| 0x482BB1 | Steuergerät: Zu hohe Sperrmomentanforderung erkannt | 1 | - |
| 0x482BB2 | Steuergerät: Positionsvoraussage falsch | 0 | - |
| 0x482BB3 | Steuergerät: Undefinierten Codierwert empfangen | 0 | - |
| 0x482BB5 | Steuergerät: Fehler in den Hardware-bezogenen Kalibrierdaten | 0 | - |
| 0x482BBB | Klemme 30B: Unterspannung bei Fehlerspeichersperre | 0 | - |
| 0x482BBC | Klemme 30B: Überspannung bei Fehlerspeichersperre | 0 | - |
| 0x482BBD | Klemme 15N: Unterspannung bei Fehlerspeichersperre | 0 | - |
| 0x482BBE | Klemme 15N: Überspannung bei Fehlerspeichersperre | 0 | - |
| 0xCCC487 | FLEXRAY controller ACS error | 0 | - |
| 0xCCC488 | FLEXRAY controller NIT error | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | SPANNUNG_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4002 | SPANNUNG_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4003 | ZUSTAND_IPM | HEX | High | unsigned long | - | - | - | - |
| 0x4005 | SPERRMOMENT | Nm | High | unsigned int | - | 0.5 | 1.0 | -1.5 |
| 0x4006 | POSITION_SPERRE_VORGABE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -3000.0 |
| 0x4007 | POSITION_SPERRE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -3000.0 |
| 0x4008 | REKALIBRIERUNG_OFFSET_SPERRE | Inkremente | High | unsigned int | - | 1.0 | 1.0 | -1000.0 |
| 0x4009 | TEMP_OEL | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400A | TEMP_MOTOR | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400B | TEMP_KUPPLUNG | °C | High | unsigned int | - | 0.5 | 1.0 | -50.0 |
| 0x400C | MOTORSTROM_VORGABE | A | High | unsigned int | - | 1.0 | 100.0 | -50.0 |
| 0x400D | MOTORSTROM | A | High | unsigned int | - | 1.0 | 100.0 | -50.0 |
| 0x400E | MOTOR_PWM_VORGABE | % | High | unsigned char | - | 1.0 | 1.0 | -100.0 |
| 0x400F | CDD_DISTURBANCE_FLAGS | HEX | High | unsigned int | - | - | - | - |
| 0x4012 | SPERRMOMENT_VORGABE_AUS_TBC | Nm | High | unsigned int | - | 0.5 | 1.0 | -1.5 |
| 0x4013 | ZUSTAND_MOS | 0-n | High | 0xFF | TAB_ZUSTAND_ECUM | - | - | - |
| 0x4016 | IPM_DISTURBANCE_FLAGS | HEX | High | unsigned int | - | - | - | - |
| 0x4017 | TEMP_EX | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4018 | ENERGIE_SPERRE | kJ | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x401B | DELTA_N_SPERRE | 1/min | High | unsigned char | - | 2.0 | 1.0 | -256.0 |
| 0x401C | ENERGIE_SPERRE_AKTUELL | kJ | High | signed long | - | 1.0 | 1000.0 | 0.0 |
| 0x402C | TEMP_FET | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402D | TEMP_CHOKE | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402E | TEMP_SHUNT | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x402F | TEMP_CONNECTOR | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x4031 | TEMP_PCB | °C | High | unsigned char | - | 2.0 | 1.0 | -50.0 |
| 0x4032 | THERMAL_STRESS | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x403B | ZUSTAND_AVS | 0-n | High | 0xFF | TAB_ZUSTAND_AVS | - | - | - |
| 0x403C | SAFETY_INTERFACE_GASW | HEX | High | unsigned char | - | - | - | - |
| 0x403D | SAFETY_INTERFACE_IPM | HEX | High | unsigned char | - | - | - | - |
| 0x403F | ZUSTAND_IOST | 0-n | High | 0xFF | TAB_ZUSTAND_IOST | - | - | - |
| 0x404F | POWER_ON_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4050 | POWER_DOWN_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4051 | RUNNING_COUNTER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | VEHICLE_SPEED | km/h | High | unsigned int | - | 1.0 | 2.0 | 0.0 |
| 0x4058 | MIN_VOLTAGE_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x4059 | MAX_VOLTAGE_KL30B | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405A | MIN_VOLTAGE_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405B | MAX_VOLTAGE_KL15N | V | High | unsigned char | - | 1.0 | 10.0 | 5.0 |
| 0x405C | FEHLERSPEICHERSPERRE_AKTIV | 0-n | High | 0xFF | FEHLERSPEICHERSPERRE | - | - | - |
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

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKALIBRIERUNG_ERFORDERLICH_SPERRE_ENERGIE_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fortschritt bis zur nächsten, selbständigen Rekalibrierung der Sperre in Abhängigkeit von der Energie; 0% Startwert nach erfolgreich durchgeführter Rekalibrierung; 100% Rekalibrierung erforderlich |
| STAT_REKALIBRIERUNG_ERFORDERLICH_SPERRE_KM_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fortschritt bis zur nächsten, selbständigen Rekalibrierung der Sperre in Abhängigkeit der zurückgelegten Kilometer; 0km Startwert nach erfolgreich durchgeführter Rekalibrierung; xxxkm Rekalibrierung erforderlich |

### RES_0X401D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEEINTRAG_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Energieeintrag HAG Kupplung, Ungültigkeitswert 0x00000000 |
| STAT_HAG_LAUFLEISTUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Getriebelaufleistung Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_BETRIEBSDAUER_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur Hinterachsgetriebe, Ungültigkeitswert 0x00 |
| STAT_CLUTCH_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Maximale Temperatur Kupplung, Ungültigkeitswert 0x00 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_WARN_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen -50°C <= Temp <= 0°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 0°C < Temp <= 50°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 50°C < Temp <= 100°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 100°C < Temp <= 125°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 125°C < Temp <= 150°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_F_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 150°C < Temp <= 254°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |

### RES_0X401E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEEINTRAG_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Energieeintrag HAG Kupplung, Ungültigkeitswert 0x00000000 |
| STAT_HAG_LAUFLEISTUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Getriebelaufleistung Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_BETRIEBSDAUER_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur Hinterachsgetriebe, Ungültigkeitswert 0x00 |
| STAT_CLUTCH_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Maximale Temperatur Kupplung, Ungültigkeitswert 0x00 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_WARN_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen -50°C <= Temp <= 0°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 0°C < Temp <= 50°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 50°C < Temp <= 100°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 100°C < Temp <= 125°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 125°C < Temp <= 150°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_F_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 150°C < Temp <= 254°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |

### RES_0X401F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_0KM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 0km Kalibrierung, Ungültigkeitswert 0xFFFF |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_0KM_WERT | kJ | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 0km Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_0KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 0km Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |
| STAT_KALIBRIERUNG_TIME_SPERRE_0KM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 0km Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_2TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 2Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_2TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 2Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_2TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 2Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_2TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 2Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_5TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 5Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_5TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 5Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_5TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 5Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_5TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 5Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_10TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 10Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_10TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 10Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_10TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 10Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_10TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 10Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_20TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 20Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_20TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 20Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_20TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 20Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_20TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 20Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_30TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 30Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_30TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 30Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_30TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 30Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_30TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 30Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_40TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 40Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_40TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 40Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_40TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 40Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_40TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 40Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_50TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 50Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_50TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 50Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_50TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 50Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_50TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 50Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_60TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 60Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_60TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 60Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_60TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 60Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_60TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 60Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_70TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 70Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_70TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 70Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_70TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 70Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_70TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 70Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_80TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 80Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_80TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 80Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_80TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 80Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_80TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 80Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_90TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 90Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_90TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 90Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_90TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 90Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_90TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 90Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_100TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 100Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_100TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 100Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_100TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 100Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_100TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 100Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_110TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 110Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_110TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 110Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_110TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 110Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_110TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 110Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_120TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 120Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_120TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 120Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_120TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 120Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_120TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 120Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_130TKM_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 130Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_130TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 130Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_130TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 130Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_130TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 130Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_140TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 140Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_140TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 140Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_140TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 140Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_140TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 140Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_150TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 150Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_150TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 150Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_150TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 150Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_150TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 150Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_160TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 160Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_160TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 160Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_160TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 160Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_160TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 160Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_170TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 170Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_170TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 170Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_170TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 170Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_170TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 170Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_180TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 180Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_180TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 180Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_180TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 180Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_180TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 180Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_190TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 190Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_190TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 190Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_190TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 190Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_190TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 190Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_200TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 200Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_200TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 200Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_200TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 200Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_200TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 200Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_210TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 210Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_210TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 210Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_210TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 210Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_210TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 210Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_220TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 220Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_220TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 220Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_220TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 220Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_220TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 220Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_230TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 230Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_230TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 230Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_230TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 230Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_230TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 230Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_240TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 240Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_240TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 240Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_240TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 240Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_240TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 240Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_250TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 250Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_250TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 250Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_250TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 250Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_250TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 250Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_260TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 260Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_260TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 260Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_260TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 260Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_260TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 260Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_270TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 270Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_270TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 270Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_270TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 270Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_270TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 270Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_280TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 280Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_280TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 280Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_280TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 280Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_280TKM_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 280Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_290TKM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 290Tkm Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_290TKM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 290Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_290TKM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 290Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_290TKM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 290Tkm Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_LETZTE_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei letzte Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_LETZTE_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei letzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_LETZTE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_LETZTE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_VORLETZTE_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei vorletzte Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_VORLETZTE_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei vorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_VORLETZTE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei vorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_VORLETZTE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei vorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_VORVORLETZTE_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei vorvorletzte Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_VORVORLETZTE_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei vorvorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_VORVORLETZTE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei vorvorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_VORVORLETZTE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei vorvorletzte Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_COUNT_TOTAL_RECALIBRATION_EVENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl Rekalibrierungen Aktuator, Ungültigkeitswert 0x0000 |
| STAT_COUNT_ABORTED_RECALIBRATION_EVENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl abgebrochener Rekalibrierungen Aktuator, Ungültigkeitswert 0x0000 |
| STAT_COUNT_ABORTED_RECALIBRATION_AFTER_VALID_EVENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl abgebrochener Rekalibrierungen nach erfolgreicher Rekalibrierung Aktuator, Ungültigkeitswert 0x0000 |

### RES_0X4025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_TEMP_ACTUATOR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale GSD Motor Temperatur, Ungültigkeitswert 0x00 |
| STAT_TEMP_SHUTOFF_EVENT_ACTUATOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur GSD Motor grösser Abschaltschwelle Temp > 140°C, Ungültigkeitswert 0x0000 |
| STAT_POWERON_CYCLE_WITH_SHUTOFF_EVENT_ACTUATOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur GSD Motor grösser Abschaltschwelle Temp > 140°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen -40°C <= Temp <= 0°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen 0°C < Temp <= 50°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen 50°C < Temp <= 100°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_D_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen 100°C < Temp <= 125°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_E_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen 125°C < Temp <= 140°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_F_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD Motor im Temperaturbereich zwischen 140°C < Temp <= 254°C, Ungültigkeitswert 0x00000000 |

### RES_0X4026_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_TEMP_FET_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale FET Temperatur, Ungültigkeitswert 0x00 |
| STAT_TEMP_SHUTOFF_EVENT_CDD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abschaltungen wegen CDD Übertemperatur, Ungültigkeitswert 0x0000 |
| STAT_POWERON_CYCLE_WITH_SHUTOFF_EVENT_CDD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power On Zyklen mit Abschaltungen wegen CDD Übertemperatur, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_FET_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit FET im Temperaturbereich zwischen 160°C < Temp <= 254°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_FET_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit FET im Temperaturbereich zwischen 150°C < Temp <= 160°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_FET_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit FET im Temperaturbereich zwischen 140°C < Temp <= 150°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_CONNECTOR_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Connector im Temperaturbereich zwischen 118°C < Temp <= 254°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_CONNECTOR_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Connector im Temperaturbereich zwischen 105°C < Temp <= 118°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_CONNECTOR_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Connector im Temperaturbereich zwischen 95°C < Temp <= 105°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_SHUNT_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Shunt im Temperaturbereich zwischen 155°C < Temp <= 254°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_SHUNT_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Shunt im Temperaturbereich zwischen 150°C < Temp <= 155°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_SHUNT_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Shunt im Temperaturbereich zwischen 140°C < Temp <= 150°C, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_CHOKE_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Choke im Temperaturbereich zwischen 120°C < Temp <= 254°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_CHOKE_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Choke im Temperaturbereich zwischen 115°C < Temp <= 120°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_CHOKE_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Choke im Temperaturbereich zwischen 105°C < Temp <= 115°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_PCB_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit PCB im Temperaturbereich zwischen 100°C < Temp <= 254°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_PCB_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit PCB im Temperaturbereich zwischen 95°C < Temp <= 100°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_PCB_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit PCB im Temperaturbereich zwischen 85°C < Temp <= 95°C, Ungültigkeitswert  0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_A_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -50A <= I <= -25A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_B_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -25A < I <= -22,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_C_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -22,5A < I <= -20A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_D_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -20A < I <= -17,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_E_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -17,5A < I <= -15A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_F_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -15A < I <= -12,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_G_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -12,5A < I <= -10A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_H_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -10A < I <= -7,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_I_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -7,5A < I <= -5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_J_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -5A < I <= -2,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_K_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen -2,5A < I <= 0A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_L_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 0A < I <= 2,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_M_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 2,5A < I <= 5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_N_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 5A < I <= 7,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_O_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 7,5A < I <= 10A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_P_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 10A < I <= 12,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_Q_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 12,5A < I <= 15A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_R_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 15A < I <= 17,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_S_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 17,5A < I <= 20A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_T_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 20A < I <= 22,5A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_U_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 22,5A < I <= 25A, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HBRIDGE_STROM_BEREICH_V_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Endstufe im Strombereich zwischen 25A < I <= 50A, Ungültigkeitswert 0x00000000 |

### RES_0X4027_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_FASTA_LAYOUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FASTA Daten Layout Version, Ungültigkeitswert 0x00 |
| STAT_COUNT_ERASURES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen der FASTA Daten, Ungültigkeitswert 0x00 |

### RES_0X403A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEEINTRAG_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Energieeintrag HAG Kupplung, Ungültigkeitswert 0x00000000 |
| STAT_HAG_LAUFLEISTUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Getriebelaufleistung Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_BETRIEBSDAUER_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer Hinterachssperre, Ungültigkeitswert 0x00000000 |
| STAT_HAG_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale Temperatur Hinterachsgetriebe, Ungültigkeitswert 0x00 |
| STAT_CLUTCH_TEMP_MAX_WERT | °C | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Maximale Temperatur Kupplung, Ungültigkeitswert 0x00 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_WARN_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_MAX_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Abschaltschwelle Temp > 250°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen -50°C <= Temp <= 0°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 0°C < Temp <= 50°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 50°C < Temp <= 100°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 100°C < Temp <= 125°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 125°C < Temp <= 150°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_F_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Hinterachsgetriebe mit Öltemperatur zwischen 150°C < Temp <= 254°C und PWF > Wohnen, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_A_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 0Nm <= T <= 400Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_B_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 400Nm < T <= 800Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_C_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 800Nm < T <= 1200Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_D_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1200Nm < T <= 1600Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_A_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 0 rpm <= n <= 50 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_B_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 50 rpm < n <= 100 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_C_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 100 rpm < n <= 150 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_D_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 150 rpm < n <= 200 rpm, Ungültigkeitswert 0x00000000 |
| STAT_BETRIEBSZEIT_COUPLING_BEREICH_E_E_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit GSD mit Kupplungsmoment zwischen 1600Nm < T <= 5000Nm und Kupplungsdrehzahl zwischen 200 rpm < n <= 2000 rpm, Ungültigkeitswert 0x00000000 |

### RES_0X4040_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAFEWDGM_CIC_HW_VERSION_WERT | HEX | high | unsigned int | - | - | - | - | - | HW Version of the CIC |
| STAT_SAFEWDGM_CIC_SW_VERSION_WERT | HEX | high | unsigned int | - | - | - | - | - | SW Version of the CIC |
| STAT_SAFEWDGM_CIC_CFG_VERSION_WERT | HEX | high | unsigned int | - | - | - | - | - | Cfg Version of the CIC |

### RES_0X4041_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Version |
| STAT_CURRENT_MEASUREMENT_CALIB_DATA | DATA | high | data[18] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Calibration data |
| STAT_VERSION_COMP_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Version complement |
| STAT_CURRENT_MEASUREMENT_CALIB_COMP_DATA | DATA | high | data[18] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Calibration data complement |
| STAT_CALIB_SPARE_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Calibration spare |
| STAT_SERIAL_NUMBER_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Serial number |
| STAT_GKN_PART_NUMBER_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: GKN part number |
| STAT_ECU_HW_REVISION_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: ECU Hardware Revision |
| STAT_ECU_HW_MODE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: ECU HW Mode |
| STAT_PRODUCTION_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Production data |
| STAT_SPARE_DATA | DATA | high | data[49] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: Spare |
| STAT_CRC_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Hardware related EOL data: CRC |

### RES_0X4042_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_MAX_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Abschaltschwelle  Temp > 250°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen Total, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GA_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GB_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GB_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_H_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_H_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x0000 |

### RES_0X4043_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_GA_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Aktor im Temperaturbereich 140°C < Temp <= 150°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_AKTUATOR_BEREICH_GA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events Aktor im Temperaturbereich 140°C < Temp <= 150°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_GB_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Aktor im Temperaturbereich 140°C < Temp <= 150°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_AKTUATOR_BEREICH_GB_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events Aktor im Temperaturbereich 140°C < Temp <= 150°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_AKTUATOR_BEREICH_H_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit Aktor im Temperaturbereich Temp > 150°C, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_AKTUATOR_BEREICH_H_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events Aktor im Temperaturbereich Temp > 150°C, Ungültigkeitswert 0x0000 |

### RES_0X4044_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_MAX_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Abschaltschwelle  Temp > 250°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen Total, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GA_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GB_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GB_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_H_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_H_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x0000 |

### RES_0X4045_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_COUNT_CLUTCH_TEMP_GT_WARN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Temperatur Kupplung grösser Warnschwelle Temp > 210°C, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSDAUER_CLUTCH_TEMP_GT_MAX_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Temperatur Kupplung grösser Abschaltschwelle  Temp > 250°C, Ungültigkeitswert 0x00000000 |
| STAT_POWER_ON_COUNT_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen Total, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GA_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t <= 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_GB_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_GB_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich 150°C < Temp <= 175°C  und Zeitspanne t > 3min, Ungültigkeitswert 0x0000 |
| STAT_BETRIEBSZEIT_HAG_TEMP_BEREICH_H_WERT | s | - | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebszeit HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x00000000 |
| STAT_EVENT_COUNT_HAG_TEMP_BEREICH_H_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events HAG im Temperaturbereich Temp > 175°C, Ungültigkeitswert 0x0000 |

### RES_0X4046_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNT_ERASURES_HAG_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen HAG data, Ungültigkeitswert 0x0000 |
| STAT_LAST_ERASURE_HAG_ODOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzter Löschung HAG, Ungültigkeitswert 0x00000000 |
| STAT_LAST_ERASURE_HAG_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzter Löschung HAG, Ungültigkeitswert 0x00000000 |
| STAT_COUNT_ERASURES_ACTUATOR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen Aktor data, Ungültigkeitswert 0x0000 |
| STAT_LAST_ERASURE_ACTUATOR_ODOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzter Löschung Aktor, Ungültigkeitswert 0x00000000 |
| STAT_LAST_ERASURE_ACTUATOR_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzter Löschung Aktor, Ungültigkeitswert 0x00000000 |
| STAT_COUNT_ERASURES_FASTA_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen FASTA data, Ungültigkeitswert 0x0000 |
| STAT_LAST_ERASURE_FASTA_ODOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzter Löschung FASTA, Ungültigkeitswert 0x00000000 |
| STAT_LAST_ERASURE_FASTA_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzter Löschung FASTA, Ungültigkeitswert 0x00000000 |
| STAT_COUNT_ERASURES_IDR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen IDR, Ungültigkeitswert 0x0000 |
| STAT_LAST_ERASURE_IDR_ODOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzter Löschung IDR, Ungültigkeitswert 0x00000000 |
| STAT_LAST_ERASURE_IDR_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzter Löschung IDR, Ungültigkeitswert 0x00000000 |
| STAT_LAST_POWER_DOWN_ODOMETER_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Power Down, Ungültigkeitswert 0x00000000 |
| STAT_LAST_POWER_DOWN_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit beim letzten Power Down, Ungültigkeitswert 0x00000000 |

### RES_0X4047_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_50KM_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei 50km Kalibrierung, Ungültigkeitswert 0x0000 |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_50KM_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei 50km Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_50KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei 50km Kalibrierung, Ungültigkeitswert 0x00000000 |
| STAT_KALIBRIERUNG_TIME_SPERRE_50KM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei 50km Kalibrierung, Ungültigkeitswert 0x00000000 |

### RES_0X4048_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG_OFFSET_SPERRE_HAG_TAUSCH_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset Sperre bei HAG Tausch Kalibrierung, Ungültigkeitswert 0xFFFF |
| STAT_KALIBRIERUNG_ENERGY_SPERRE_HAG_TAUSCH_WERT | kJ | - | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Gesamt Energie Sperre bei HAG Tausch Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |
| STAT_KALIBRIERUNG_ODOMETER_SPERRE_HAG_TAUSCH_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei HAG Tausch Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |
| STAT_KALIBRIERUNG_TIME_SPERRE_HAG_TAUSCH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei HAG Tausch Kalibrierung, Ungültigkeitswert 0xFFFFFFFF |

### RES_0X4049_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CLUTCH_TEMP_WERT | HEX | high | signed int | - | - | - | - | - | Gespeicherte Kupplungtemperatur, Ungültigkeitswert: 0x7FFF |
| STAT_TIME_COUNT_WERT | HEX | high | unsigned long | - | - | - | - | - | Gespeicherte letzte Power Down Zeit, Ungültigkeitswert: 0xFFFFFFFF |
| STAT_CALIB_WERT | HEX | high | signed int | - | - | - | - | - | Gespeicherter Kalibrierungs-Offset, Ungültigkeitswert: 0x7FFF |
| STAT_CALIB_REQ_WERT | HEX | high | unsigned int | - | - | - | - | - | Kalibrerung required, Ungültigkeitswert: 0xFFFF |
| STAT_CALIB_KILOMETER_WERT | HEX | high | unsigned int | - | - | - | - | - | Gespeicherter Kilometerwert der letzten Kalibrierung, Ungültigkeitswert: 0xFFFF |
| STAT_VIRT_TEMP_WERT | HEX | high | signed int | - | - | - | - | - | Gespeicherte virtuelle Temperatur, Ungültigkeitswert: 0x7FFF |
| STAT_OVERHEAT_COUNT_WERT | HEX | high | unsigned int | - | - | - | - | - | Übertemperatur Zähler, Ungültigkeitswert: 0xFFFF |

### RES_0X404A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_POS_SENSOR_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Versorgungsspannung Positionssensoren |
| STAT_POSITION_SENSOR_1_WERT | Inkremente | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Positionssensor 1 (in Inkrementen) Ungültigkeitswert 0xFF |
| STAT_POSITION_SENSOR_2_WERT | Inkremente | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Positionssensor 2 (in Inkrementen) Ungültigkeitswert 0xFF |
| STAT_POSITION_SPERRE_RAW_WERT | Inkremente | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Rohwert des Positionssensors (nicht Nullpunktkompensiert) |
| STAT_MOMENTANSPANNUNG_POS_SENSOR_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gemessene Signaleingangsspannung Positionssensorsignal 1 |
| STAT_MOMENTANSPANNUNG_POS_SENSOR_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gemessene Signaleingangsspannung Positionssensorsignal 2 |
| STAT_SPG_AVG_POS_SENSOR_1_HIGH_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Positionssensorspannung an Sensor 1 bei High-Pegel Ungültigkeitswert 0xFFFF |
| STAT_SPG_AVG_POS_SENSOR_1_LOW_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Positionssensorspannung an Sensor 1 bei Low-Pegel Ungültigkeitswert 0xFFFF |
| STAT_SPG_AVG_POS_SENSOR_2_HIGH_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Positionssensorspannung an Sensor 2 bei High-Pegel Ungültigkeitswert 0xFFFF |
| STAT_SPG_AVG_POS_SENSOR_2_LOW_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Positionssensorspannung an Sensor 2 bei Low-Pegel Ungültigkeitswert 0xFFFF |

### RES_0X404B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_MOTOR_WERT | °C | high | unsigned int | - | - | 0.5 | 1.0 | -50.0 | Temperatur des Stellmotors Ungültigkeitswert 0xFFFF |
| STAT_TEMP_OEL_WERT | °C | high | unsigned int | - | - | 0.5 | 1.0 | -50.0 | Öltemperatur Hinterachsgetriebe Ungültigkeitsbezeichner 0xFFFF |
| STAT_TEMP_KUPPLUNG_WERT | °C | high | unsigned int | - | - | 0.5 | 1.0 | -50.0 | Kupplungstemperatur Ungültigkeitswert 0xFFFF |

### RES_0X404C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_PCB_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | -50.0 | PCB Temperatur Ungültigkeitswert 0xFF |
| STAT_TEMP_FET_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | -50.0 | FET Temperatur Ungültigkeitswert 0xFF |
| STAT_TEMP_SHUNT_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | -50.0 | Shunt Temperatur Ungültigkeitswert 0xFF |
| STAT_TEMP_CONNECTOR_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | -50.0 | Connector Temperatur Ungültigkeitswert 0xFF |
| STAT_TEMP_CHOKE_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | -50.0 | Choke Temperatur Ungültigkeitswert 0xFF |

### RES_0X404D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRMOMENT_VORGABE_WERT | Nm | high | unsigned int | - | - | 1.5 | 1.0 | -3072.0 | Anforderung aus QDM |
| STAT_KUPPLUNGSMOMENT_SOLL_WERT | Nm | high | unsigned int | - | - | 0.5 | 1.0 | -1.5 | Mit Torque Bias kompensiertes Soll-Sperrmoment (Seitenabhängigkeit der Kupplung) |
| STAT_KUPPLUNGSMOMENT_AKTUELL_WERT | Nm | high | unsigned int | - | - | 0.5 | 1.0 | -1.5 | Kupplungs-Ist-Moment berechnet |
| STAT_SPERRMOMENT_AKTUELL_WERT | Nm | high | unsigned int | - | - | 0.5 | 1.0 | -1.5 | Mit Torque Bias kompensiertes Ist-Kupplungsmoment |
| STAT_POSITION_SPERRE_VORGABE_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -3000.0 | Sollposition Sperre |
| STAT_POSITION_SPERRE_AKTUELL_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -3000.0 | Istposition Sperre |
| STAT_AKTORSTROM_VORGABE_WERT | A | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Sollstrom Aktor |
| STAT_AKTORSTROM_AKTUELL_WERT | A | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Iststrom Aktor |
| STAT_AKTOR_STELLGROESSE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | -100.0 | Duty |

### RES_0X404E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_MOS | 0-n | high | unsigned char | - | - | - | - | - | Master Operation State |
| STAT_SAFETY_INTERFACE_GASW_WERT | HEX | high | unsigned char | - | - | - | - | - | Schnittstellenstatus Safety - GASW |
| STAT_SAFETY_INTERFACE_IPM_WERT | HEX | high | unsigned char | - | - | - | - | - | Schnittstellenstatus Safety - IPM |
| STAT_ZUSTAND_IOST | 0-n | high | unsigned char | - | - | - | - | - | Zustand Ignition On Self-Test (IOST) |
| STAT_ZUSTAND_IPM_WERT | HEX | high | unsigned long | - | - | - | - | - | Betriebszustand Hardwareregler (IPM) |
| STAT_ZUSTAND_AVS | 0-n | high | unsigned char | - | - | - | - | - | Zustand der Availablity State Machine |
| STAT_POWER_ON_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählt Applikations-SW-Berechnungszyklen beginnend nach Steuergeräteinitalisierung  |
| STAT_POWER_DOWN_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählt Berechnungszyklen beginnend mit ST_CON_VEH <= Wohnen |
| STAT_RUNNING_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählt Berechnungszyklen der Applikations-SW beginnend mit ST_CON_VEH > Wohnen |

### RES_0X4052_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BN_VARIANT_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert BN_Variant |
| STAT_MAX_SPERRMOMENT_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Max_Sperrmoment |
| STAT_SPARE_BYTE_0_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_0 |
| STAT_KUPPLUNGSGROESSE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Kupplungsgroesse |
| STAT_SPARE_BYTE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_1 |
| STAT_SPARE_BYTE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_2 |
| STAT_KLASSIERUNG_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Klassierung |
| STAT_SPARE_BYTE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_3 |
| STAT_ZWANZIGKMHSCHWELLE_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert ZwanzigKmhSchwelle |
| STAT_XCP_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert XCP |
| STAT_DEBUGFRAME_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert DebugFrame |
| STAT_PRIVATE_CAN_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Private_CAN |
| STAT_TEMPERATURSCHWELLE_MOTOR_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Temperaturschwelle_Motor |
| STAT_SPARE_BYTE_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_4 |
| STAT_SPARE_BYTE_5_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_5 |
| STAT_SPARE_BYTE_6_WERT | HEX | high | unsigned char | - | - | - | - | - | Codierwert Spare_Byte_6 |
| STAT_DEVELOPER_MODE_WERT | HEX | high | unsigned char | - | - | - | - | - | Schalter um Developer Mode einzuschalten |
| STAT_DEVELOPER_MODE_COMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Komplementär zum Developer Mode Schalter |

### RES_0X4054_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNT_ERASURES_OIL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschungen Oel data, Ungültigkeitswert 0x0000 |
| STAT_LAST_ERASURE_OIL_ODOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei letzter Löschung Oel, Ungültigkeitswert 0x00000000 |
| STAT_LAST_ERASURE_OIL_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei letzter Löschung Oel, Ungültigkeitswert 0x00000000 |
| STAT_COUNT_LUBRICATION_MODE_ACTIVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Kupplungsbeölungsmode, Ungültigkeitswert 0x0000 |

### RES_0X405D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_COUNT_COUPLING_POWER_GT_WARN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Kupplungsleistung grösser Warnschwelle, Ungültigkeitswert 0 |
| STAT_BETRIEBSZEIT_COUPLING_POWER_GT_WARN_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Kupplungsleistung grösser Warnschwelle, Ungültigkeitswert 0s |
| STAT_POWER_ON_COUNT_COUPLING_POWER_GT_WARN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Kupplungsleistung grösser Warnschwelle, Ungültigkeitswert 0 |
| STAT_BETRIEBSZEIT_COUPLING_POWER_LT_WARN_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Betriebsdauer mit Kupplungsleistung kleiner gleich Warnschwelle, Ungültigkeitswert 0s |
| STAT_ODOMETER_FIRST_EVALUATION_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerwert bei erster Berechnung, Ungültigkeitswert 0km |
| STAT_EVENT_COUNT_COUPLING_POWER_GT_DISABLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Events mit Kupplungsleistung grösser Abschaltschwelle, Ungültigkeitswert 0 |
| STAT_POWER_ON_COUNT_COUPLING_POWER_GT_DISABLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Power-On Zyklen mit Kupplungsleistung grösser Abschaltschwelle, Ungültigkeitswert 0 |

### RES_0XAB63_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELFTEST | - | - | + | 0-n | high | unsigned char | - | TAB_ON_DEMAND_SELFTEST | - | - | - | Status der Kalibrierung |

### RES_0XAB7E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRMOMENT_ZEIT | - | - | + | 0-n | high | unsigned char | - | TAB_SPERRENAKTIVITAET | - | - | - | Rückmeldung stellen Sperrmoment |

### RES_0XAB87_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENKORREKTUR | - | - | + | 0-n | high | unsigned char | - | TAB_KENNLINIENKORREKTUR | - | - | - | Ergebnis für schreiben Kennlinienwerte |

### RES_0XAB88_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENKORREKTUR_SERVICE | - | - | + | 0-n | high | unsigned char | - | TAB_KENNLINIENKORREKTUR | - | - | - | Ergebnis der Kennlinienkorrektur SERVICE |

### RES_0XAB89_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENKORREKTUR | - | - | + | 0-n | high | unsigned char | - | TAB_KENNLINIENKORREKTUR | - | - | - | Ergebnis für das Schreiben der Kennliniendaten |

### RES_0XDC45_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_HALL_1_WERT | Inkremente | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Hallsensor 1 (in Inkrementen) |
| STAT_POSITION_HALL_2_WERT | Inkremente | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Rohwert Hallsensor 2 (in Inkrementen) |
| STAT_POSITION_SPERRE_ABSOLUT_WERT | Inkremente | high | unsigned char | - | - | 4.0 | 1.0 | -100.0 | Istposition Sperre Ungültigkeitsbezeichner FFh |

### RES_0XDE56_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAG_PRODUKTIONSDATEN_TEXT | TEXT | high | string[31] | - | - | 1.0 | 1.0 | 0.0 | Produktionsdaten des HAG (Seriennummer, Produktionsdatum etc.) |

### RES_0XDE58_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIE_KORREKTUR_C0_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Korrekturwert für 0% |
| STAT_KENNLINIE_KORREKTUR_C05_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Korrekturwert für 5% |
| STAT_KENNLINIE_KORREKTUR_C20_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Korrekturwert für 20% |
| STAT_KENNLINIE_KORREKTUR_C50_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Korrekturwert für 50% |
| STAT_KENNLINIE_KORREKTUR_C100_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Korrekturwert für 100% |
| STAT_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Version des Telegramms |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RoutineStatus Details siehe Hinweis |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RoutineStatus Details siehe Hinweis |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RoutineStatus Details siehe Hinweis |

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
| SPANNUNG_KL30B | 0x4001 | STAT_SPANNUNG_KL30B_WERT | Versorgungsspannung GSD Klemme 30B | V | - | High | unsigned char | - | 1.0 | 10.0 | 5.0 | - | 22 | - | - |
| SPANNUNG_KL15N | 0x4002 | STAT_SPANNUNG_KL15N_WERT | Versorgungsspannung GSD Klemme 15N | V | - | High | unsigned char | - | 1.0 | 10.0 | 5.0 | - | 22 | - | - |
| ZUSTAND_IPM | 0x4003 | STAT_ZUSTAND_IPM_WERT | Betriebszustand Hardwareregler (IPM) | HEX | - | High | unsigned long | - | - | - | - | - | 22 | - | - |
| SPERRMOMENT_IST | 0x4005 | STAT_SPERRMOMENT_IST_WERT | geschätztes Ist-Sperrmoment | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1.5 | - | 22 | - | - |
| POSITION_SPERRE_VORGABE_ABSOLUT | 0x4006 | STAT_POSITION_SPERRE_VORGABE_ABSOLUT_WERT | Sollposition Sperre Ungültigkeitsbezeichner 0xFFFF | Inkremente | - | High | unsigned int | - | 1.0 | 1.0 | -3000.0 | - | 22 | - | - |
| POSITION_SPERRE_ABSOLUT | 0x4007 | STAT_POSITION_SPERRE_ABSOLUT_WERT | Istposition Sperre Ungültigkeitsbezeichner 0xFFFF | Inkremente | - | High | unsigned int | - | 1.0 | 1.0 | -3000.0 | - | 22 | - | - |
| REKALIBRIERUNG_OFFSET_SPERRE | 0x4008 | STAT_REKALIBRIERUNG_OFFSET_SPERRE_WERT | Offset Sperre aus Rekalibrierung Ungültigkeitswert 0xFFFF | Inkremente | - | High | unsigned int | - | 1.0 | 1.0 | -1000.0 | - | 22 | - | - |
| TEMP_KUPPLUNG | 0x400B | STAT_TEMP_KUPPLUNG_WERT | Kupplungstemperatur Ungültigkeitsbezeichner FFFFh | °C | - | High | unsigned int | - | 1.0 | 2.0 | -50.0 | - | 22 | - | - |
| MOTORSTROM_VORGABE | 0x400C | STAT_MOTORSTROM_VORGABE_WERT | Sollstrom Aktuatormotor Sperre Ungültigkeitsbezeichner FFFFh | A | - | High | unsigned int | - | 1.0 | 100.0 | -50.0 | - | 22 | - | - |
| MOTOR_PWM_VORGABE | 0x400E | STAT_MOTOR_PWM_VORGABE_WERT | PWM Duty Aktuatormotor Sperre Ungültigkeitswert 0xFF | % | - | High | unsigned char | - | 1.0 | 1.0 | -100.0 | - | 22 | - | - |
| SPERRMOMENT_BEGRENZUNG | 0x4010 | STAT_SPERRMOMENT_BEGRENZUNG_WERT | Begrenzung des maximalen Sperrmoments | Nm | - | High | unsigned int | - | 0.5 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRMOMENT_VORGABE | 0x4011 | STAT_SPERRMOMENT_VORGABE_WERT | Sperrmoment Vorgabe | Nm | - | High | unsigned int | - | 1.5 | 1.0 | -3072.0 | - | 22 | - | - |
| SPERRMOMENT_VORGABE_AUS_TBC | 0x4012 | STAT_SPERRMOMENT_VORGABE_AUS_TBC_WERT | Soll Sperrmoment GSD (IPM intern) Ungültigkeitsbezeichner FFh | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1.5 | - | 22 | - | - |
| ZUSTAND_MOS | 0x4013 | STAT_ZUSTAND_MOS | Zustand GSD ECU State Manager (MOS) | 0-n | - | High | unsigned char | TAB_ZUSTAND_ECUM | - | - | - | - | 22 | - | - |
| TEMP_EX | 0x4017 | STAT_TEMP_EX_WERT | Außentemperatur Ungültigkeitsbezeichner FFh | °C | - | High | unsigned char | - | 0.5 | 1.0 | -40.0 | - | 22 | - | - |
| ENERGIE_SPERRE | 0x4018 | STAT_ENERGIE_SPERRE_WERT | Gesamte umgesetzte Energie Sperre | kJ | - | High | unsigned long | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| REKALIBRIERUNG_ERFORDERLICH_SPERRE | 0x4019 | - | Forschritt bis zur nächsten, selbständigen Rekalibrierung der Sperre 0% Startwert nach erfolgreich durchgeführter Rekalibrierung 100% Rekalibrierung erforderlich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4019_D |
| SWID_LIEFERANT | 0x401A | STAT_SWID_LIEFERANT_TEXT | GKN interne Software Identifikationsnummer | TEXT | - | High | string[7] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DELTA_N_SPERRE | 0x401B | STAT_DELTA_N_SPERRE_WERT | Differenzdrehzahl Sperre Ungültigkeitsbezeichner FFh | 1/min | - | High | unsigned char | - | 2.0 | 1.0 | -256.0 | - | 22 | - | - |
| ENERGIE_SPERRE_AKTUELL | 0x401C | STAT_ENERGIE_SPERRE_AKTUELL_WERT | Aktuell umgesetzte Energie Sperre innerhalb der letzten Minute Ungültigkeitswert: 0xFFFFFFFF | kJ | - | High | signed long | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| FASTA_GSD_BELASTUNG_GESAMT | 0x401D | - | Belastung über gesamte Betriebszeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401D_D |
| FASTA_GSD_BELASTUNG_EINFAHRPHASE | 0x401E | - | Belastung über Einfahrphase (2000 km) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401E_D |
| FASTA_GSD_VERSCHLEISS | 0x401F | - | Verschleiss (Rekalibrierungs-Offset) über gesamte Betriebszeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401F_D |
| KENNLINIENKORREKTURDATEN_RESET | 0x4021 | - | Rücksetzen der Kennlinienkorrekturwerte auf Defaultwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4021_D | - |
| FASTA_GSD_BELASTUNG_AKTOR | 0x4025 | - | Belastung Aktor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4025_D |
| FASTA_GSD_BELASTUNG_ECU | 0x4026 | - | Belasung ECU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4026_D |
| FASTA_GSD_SYSTEM | 0x4027 | - | System allgemein, Anzahl Kalibrierungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4027_D |
| BSW_REVISION | 0x4030 | STAT_BSW_REVISION_TEXT | BSW Revision | TEXT | - | High | string[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_GSD_BELASTUNG_WERK | 0x403A | - | Belastung im Werk (50 km) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403A_D |
| CIC_VERSION | 0x4040 | - | Version der CIC Software | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4040_D |
| HW_EOL_DATA | 0x4041 | - | Hardware related EOL data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4041_D |
| FASTA_GSD_BELASTUNG_EINFAHRPHASE_EXTENDED | 0x4042 | - | Belastung über Einfahphase (2000 km) Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4042_D |
| FASTA_GSD_BELASTUNG_AKTOR_EXTENDED | 0x4043 | - | Belastung Aktor Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4043_D |
| FASTA_GSD_BELASTUNG_GESAMT_EXTENDED | 0x4044 | - | Belastung über gesamte Betriebszeit Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4044_D |
| FASTA_GSD_BELASTUNG_WERK_EXTENDED | 0x4045 | - | Belastung im Werk (50 km) Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4045_D |
| FASTA_GSD_SYSTEM_EXTENDED | 0x4046 | - | System allgemein Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4046_D |
| FASTA_GSD_VERSCHLEISS_EXTENDED | 0x4047 | - | Verschleiss (Rekalibrierungs-Offset) über gesamte Betriebszeit Zusatzdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4047_D |
| FASTA_GSD_VERSCHLEISS_EXCHANGE | 0x4048 | - | Verschleiss (Rekalibrierungs-Offset) bei Achsen-Wechsel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048_D |
| IPM_GSD_DATEN | 0x4049 | - | IPM GSD Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4049_D |
| POSITION_SENSOR | 0x404A | - | Ausgabe aller relevanten Daten des Positionssensors (für erweiterte Entwicklerdiagnose) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404A_D |
| TEMPERATUR_SYSTEM | 0x404B | - | Ausgabe der system-relevanten Temperaturen: Motor (gemessen) Öl (gemessen) Kupplung (gerechnet) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404B_D |
| TEMPERATUR_ECU | 0x404C | - | Ausgabe der ECU-relevanten Temperaturen: PCB (gemessen) FET (gerechnet) Shunt (gerechnet) Connector (gerechnet) Choke (gerechnet) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404C_D |
| CTRL_WERTE | 0x404D | - | Ausgabe Soll-/ Ist-Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404D_D |
| CTRL_STATES | 0x404E | - | Status der Regelmodule | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404E_D |
| SECURITY_DATA | 0x4052 | - | Codierdaten im NVROM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4052_D |
| FASTA_GSD_SYSTEM_EXTENDED2 | 0x4054 | - | System allgemein Zusatzdaten (2. Erweiterung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4054_D |
| FASTA_GSD_COUPLING_POWER | 0x405D | - | Kurzzeitige Kupplungsüberlastung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x405D_D |
| ON_DEMAND_SELFTEST | 0xAB63 | - | Kalibrierung des Systems | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB63_R |
| SPERRMOMENT_ZEIT | 0xAB7E | - | Steuern Sperrmoment mit Zeitvorgabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB7E_R | RES_0xAB7E_R |
| KENNLINIENKORREKTUR_WERK | 0xAB87 | - | Schreiben der Kennliniendaten des HAGs mit Sperre in das Steuergerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB87_R | RES_0xAB87_R |
| KENNLINIENKORREKTUR_SERVICE | 0xAB88 | - | Schreiben der Kennliniekorrekturwerte in das Steuergerät im Service | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB88_R | RES_0xAB88_R |
| KENNLINIENKORREKTUR_WERK_KURZ | 0xAB89 | - | Schreiben der Kennliniendaten des HAGs mit Sperre in das Steuergerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB89_R | RES_0xAB89_R |
| POSITION_SPERRE | 0xDC45 | - | Ausgabe der aktuellen Sperrenposition (in Inkrementen) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC45_D |
| TEMP_MOTOR | 0xDC46 | STAT_MOTORTEMP_WERT | Motortemperatur Bereich von -50 Grad C bis 250 Grad C | °C | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_OEL | 0xDC47 | STAT_OELTEMP_WERT | Öltemperatur Hinterachsgetriebe Bereich von -50 Grad C bis 250 Grad C | °C | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_HALLSENSOREN | 0xDC48 | STAT_SPANNUNG_HALLSENSOR_WERT | Versorgungsspannung Hallsensoren | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_MOTORTEMPSENSOR | 0xDC49 | STAT_SPANNUNG_MOTORTEMPSENSOR_WERT | Versorgungsspannung Motortemperatursensor | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_OELTEMPSENSOR | 0xDC4A | STAT_SPANNUNG_OELTEMPSENSOR_WERT | Versorgungsspannung Öltemperatursensor | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| MOTORSTROM | 0xDC4B | STAT_MOTORSTROM_WERT | Status Motorstrom | A | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HAG_PRODUKTIONSDATEN | 0xDE56 | - | Schreiben/Lesen der Produktionsdaten in das/aus dem Steuergerät | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDE56_D | RES_0xDE56_D |
| KENNLINIENKORREKTURWERTE_LESEN | 0xDE58 | - | Auslesen bzw. Schreiben der Kennlinieninformation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE58_D |
| BELASTUNG_HAG_LOESCHEN | 0xF002 | - | Löschen der HAG Belastungsdaten sowie der HAG Produktionsdaten im Servicefall | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |
| BELASTUNG_AKTOR_LOESCHEN | 0xF003 | - | Löschen der Aktor Belastungsdaten im Servicefall | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF003_R |
| FASTA_DATEN_LOESCHEN | 0xF004 | - | Löschen der FASTA Daten vor einem SW Upgrade | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF004_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_LUBRICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | aktiv |
| 0x02 | war aktiv |
| 0xFF | Wert ungültig |

### TAB_AVL_RPM_WHL_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | AVL_RPM_WHL_RLH |
| 2 | AVL_RPM_WHL_RRH |
| 3 | QU_AVL_RPM_WHL_RLH |
| 4 | QU_AVL_RPM_WHL_RRH |
| 0xFF | Wert ungültig |

### TAB_CON_VEH_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | ST_CON_VEH |
| 2 | QU_ST_CON_VEH |
| 3 | ST_CON_VEH and QU_ST_CON_VEH |
| 0xFF | Wert ungültig |

### TAB_FAHRGESTELLNUMMER_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | V_VECH_1 |
| 2 | V_VECH_2 |
| 3 | V_VECH_3 |
| 4 | V_VECH_4 |
| 5 | V_VECH_5 |
| 6 | V_VECH_6 |
| 7 | V_VECH_7 |
| 0xFF | Wert ungültig |

### TAB_KENNLINIENKORREKTUR

| WERT | TEXT |
| --- | --- |
| 0 | läuft nicht |
| 1 | läuft |
| 2 | Fehler |
| 3 | Erfolg |
| 255 | nicht definiert |

### TAB_ON_DEMAND_SELFTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | läuft nicht |
| 0x01 | läuft |
| 0x02 | Erfolg |
| 0x03 | Fehler: nicht erwarteter interner Fehlercode |
| 0x04 | Fehler: Vorbedingung Temperaturdifferenz zwischen Kupplung und Öl zu groß |
| 0x05 | Fehler: Vorbedingung Motortemperatur nicht erfüllt |
| 0x06 | Fehler: Vorbedingung Öltemperatur nicht erfüllt |
| 0x07 | Fehler: Vorbedingung Fahrzeuggeschwindigkeit nicht erfüllt |
| 0x08 | Fehler: Vorbedingung Fehlerklasse nicht erfüllt |
| 0x09 | Fehler: Vorbedingung Steuergerät Spannungsversorgung nicht erfüllt |
| 0x0A | Fehler: Vorbedingung Drehzahldifferenz Kupplung nicht erfüllt |
| 0x0B | Fehler: Kalibrierung dauert zu lange |
| 0x0C | Fehler: Ermittelte Datenpunkte ungenügend für eine Auswertung |
| 0x0D | Fehler: Motorblockade und keine Bewegung detektiert |
| 0x0E | Fehler: Abweichung der MEZ Offset Werte vor und nach Kalibrierung zu groß |
| 0x0F | Fehler: Kalibrierwert überschreitet Grenzwert, der eine vollständig abgenutzte Kupplung anzeigt |
| 0x10 | Fehler: Erkannter Kalibrierwert ist ungültig oder es wurde nie eine Initialkalibrierung durchgeführt |
| 0x20 | Fehler: Abschaltpfadtest fehlgeschlagen |
| 0x21 | Fehler: Unterspannung detektiert |
| 0x22 | Fehler: Brückentreiber nicht initalisiert |
| 0x23 | Fehler: Stromüberwachung Offset Kalibrierung fehlgeschlagen |
| 0x24 | Fehler: Endstufen-Diagnose fehlgeschlagen |
| 0x25 | Fehler: Sicherheitsüberwachung aktiv (Fahrzeuggeschwindigkeit größer 10km/h oder fehlende sicherheitsrelevante Signale) |
| 0x26 | Fehler: Kabelbaum-Diagnose fehlgeschlagen |
| 0x27 | Fehler: Unerwartete Stellgröße zurückgelesen |
| 0x28 | Fehler: Regler-Modul nicht bereit für Diagnose |
| 0x30 | Fehler: Fehlerklasse FC4 oder FC5 aktiv |
| 0x40 | Vorbedingung: Sicherheitsüberwachung aktiv (Fahrzeuggeschwindigkeit größer 10km/h oder fehlende sicherheitsrelevante Signale) |
| 0x41 | Fehler: Steuergerät konnte nicht vollständig aufstarten |
| 0xFF | nicht definiert |

### TAB_SPERRENAKTIVITAET

| WERT | TEXT |
| --- | --- |
| 0 | läuft nicht |
| 1 | läuft |
| 2 | Vor-Bedingungen nicht erfüllt |
| 3 | Fehler |
| 4 | Abbruch aufgrund ungültiger Bedingungen |
| 255 | nicht definiert |

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

### TAB_TAR_LTRQD_BAX_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | TAR_LTRQD_BAX |
| 2 | QU_TAR_LTRQD_BAX |
| 3 | ST_CLCTR_ABS |
| 0xFF | Wert ungültig |

### TAB_TOMA_WHL_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | WHL_TOMA_RRH |
| 2 | WHL_TOMA_RLH |
| 3 | QU_WHL_TOMA |
| 0xFF | Wert ungültig |

### TAB_V_VEH_SIG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler detektiert |
| 1 | V_VEH_COG |
| 2 | QU_V_VEH_COG |
| 0xFF | Wert ungültig |

### TAB_ZUSTAND_AVS

| WERT | TEXT |
| --- | --- |
| 0 | Off |
| 1 | Idle |
| 2 | Init |
| 3 | Available |
| 4 | Error |
| 5 | Error_Init |
| 6 | Error_Idle |
| 7 | Diag |
| 8 | Off_Temp |
| 9 | Off_Temp_Init |
| 0xFF | Wert ungültig |

### TAB_ZUSTAND_ECUM

| WERT | TEXT |
| --- | --- |
| 0x01 | Init |
| 0x02 | Run |
| 0x03 | Shutdown |
| 0x04 | Standby |
| 0x05 | Power On Selftest (IOST) |
| 0xFF | Ungültiger Wert |

### TAB_ZUSTAND_IOST

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0x01 | Init |
| 0x02 | IP_Test |
| 0x03 | Supp_V_Check |
| 0x04 | H_Brdg_Init_Check |
| 0x05 | Curr_Ofst_Cal_Check |
| 0x06 | PS_Test |
| 0x07 | Wire_Diag_Precon |
| 0x08 | Wire_Diag_Test |
| 0x09 | Duty_On_Test |
| 0x0A | Duty_Off_Test |
| 0x0B | Completed |
| 0x0C | Curr_Ofst_Cal_Start |
| 0x0D | Freq_Check |
| 0xFF | Wert ungültig |
