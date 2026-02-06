# SRR01_HR.prg

## General

|  |  |
| --- | --- |
| File | SRR01_HR.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 86 |
| Origin | BMW EF-631 Nüdling |
| Revision | 2.000 |
| Author | BMW EV-313 Tschoepe |
| ECU Comment | SGBD V2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Short Range Radar hinten rechts |  |  |
| ORIGIN | string | BMW EF-631 Nüdling |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW EV-313 Tschoepe |  |  |
| COMMENT | string | SGBD V2 |  |  |
| PACKAGE | string | 1.989 |  |  |
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
| 0x01 | ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | invalid |
| 0x04 | insync, ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | ms ECU overall, comparable |
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

### ARG_0X4017_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| QUALIFIER_ALIGNMENT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | QUALIFIER_ALIGNMENT |

### ARG_0X4019_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| QUALIFIER_REICHWEITE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | QUALIFIER_REICHWEITE |

### ARG_0XA101_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIMMUNG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Setzen des Dimmungswertes |
| LED_LH | + | - | 0-n | high | unsigned char | - | TAB_LED_XH | - | - | - | - | - | Setzen der LED im linken Spiegel |
| LED_RH | + | - | 0-n | high | unsigned char | - | TAB_LED_XH | - | - | - | - | - | Setzen der LED im rechten Spiegel |
| ANSTEUERZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Setzen der Ansteuerzeit |

### ARG_0XA158_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT_ZIEL | + | - | km/h | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -150.0 | 150.0 | Geschwindigkeit des zu suchenden Ziels (Wertebereich -150 km/h bis +150 km/h, Auflösung 1km/h Schritte) |

### ARG_0XA159_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSGERAET | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Gerät zur Zielerzeugung (Gerät1, Gerät2, Gerät3 usw.) |
| WINKEL_ZIEL | + | - | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Winkel unter dem das zu suchende Ziel sich befindet ( Wertebereich 0° bis 360°, Schrittweite 1.0°) |
| ABSTAND_ZIEL | + | - | m | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | Abstand des zu suchenden Ziels (Wertebereich 0 m bis 300 m, Auflösung 0,1 m Schritte) |
| GESCHWINDIGKEIT_ZIEL | + | - | km/h | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -150.0 | 150.0 | Geschwindigkeit des zu suchenden Ziels (Wertebereich -150 km/h bis +150 km/h, Auflösung 1km/h Schritte) |
| GROESSE_ZIEL | + | - | dBm | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 50.0 | Größe des zu suchenden Ziels (Wertebereich 0 dBsm bis 50 dBsm, Auflösung 0,1 dBsm) |

### ARG_0XA15A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL_ZIEL | + | - | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Winkel unter dem das zu suchende Ziel sich befindet ( Wertebereich 0° bis 360°, Schrittweite 1.0°) |
| ABSTAND_ZIEL | + | - | m | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | Abstand des zu suchenden Ziels (Wertebereich 0 m bis 300 m, Auflösung 0,1 m Schritte) |
| GESCHWINDIGKEIT_ZIEL | + | - | km/h | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -150.0 | 150.0 | Geschwindigkeit des zu suchenden Ziels (Wertebereich -150 km/h bis +150 km/h, Auflösung 1km/h Schritte) |
| GROESSE_ZIEL | + | - | dBm | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 50.0 | Größe des zu suchenden Ziels (Wertebereich 0 dBsm bis 50 dBsm, Auflösung 0,1 dBsm) |

### ARG_0XA15B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSGERAET | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Gerät zur Zielerzeugung (Gerät1, Gerät2, Gerät3 usw.) |
| WINKEL_ZIEL | + | - | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Winkel unter dem das zu suchende Ziel sich befindet ( Wertebereich 0° bis 360°, Schrittweite 1.0°) |
| ABSTAND_ZIEL | + | - | m | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 300.0 | Abstand des zu suchenden Ziels (Wertebereich 0 m bis 300 m, Auflösung 0,1 m Schritte) |
| GESCHWINDIGKEIT_ZIEL | + | - | km/h | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -150.0 | 150.0 | Geschwindigkeit des zu suchenden Ziels (Wertebereich -150 km/h bis +150 km/h, Auflösung 1km/h Schritte) |
| GROESSE_ZIEL | + | - | dBsm | high | unsigned int | - | - | 10.0 | 1.0 | 250.0 | -25.0 | 25.0 | Größe des zu suchenden Ziels (Wertebereich -25 dBsm bis 25dBsm, Auflösung 0,1 dBsm) |

### ARG_0XA162_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RADAR_HF_MODUS | + | - | 0-n | high | unsigned char | - | TAB_RADAR_HF_MODUS | - | - | - | - | - | Setzen der Radarabstrahlung HF Modus |

### ARG_0XA163_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INTENSITAETSSTUFE | + | - | 0-n | high | unsigned char | - | TAB_INTENSITAETSSTUFE | - | - | - | - | - | Setzen der Intensitätsstufestufe |
| MUSTER_LENKRAD | + | - | 0-n | high | unsigned char | - | TAB_MUSTER_LENKRAD | - | - | - | - | - | Setzen des Musters |
| RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_RICHTUNG | - | - | - | - | - | Setzen der Richtung |
| ANSTEUERZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Setzen der Ansteuerzeit |

### ARG_0XA16B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RING_NUMMER | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Abstandsring [1...4] |
| OBJEKT_NUMMER | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Objektnummer |

### ARG_0XDAA7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JUSTAGEWINKEL_SENSOR_VORNE_RECHTS | ° | high | signed int | - | - | 1000.0 | 1.0 | 0.0 | -10.0 | 10.0 | Korrektur des horizontalen Radarsensorwinkels nach Verbauort Vorne Rechts (VR) |

### ARG_0XDAA8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JUSTAGEWINKEL_SENSOR_HINTEN_LINKS | ° | high | signed int | - | - | 1000.0 | 1.0 | 0.0 | -10.0 | 10.0 | Korrektur des horizontalen Radarsensorwinkels nach Verbauort Hinten Links (HL) |

### ARG_0XDAAE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JUSTAGEWINKEL_SENSOR_VORNE_LINKS | ° | high | signed int | - | - | 1000.0 | 1.0 | 0.0 | -10.0 | 10.0 | Korrektur des horizontalen Radarsensorwinkels nach Verbauort Vorne Links (VL) |

### ARG_0XDAAF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JUSTAGEWINKEL_SENSOR_HINTEN_RECHTS | ° | high | signed int | - | - | 1000.0 | 1.0 | 0.0 | -10.0 | 10.0 | Korrektur des horizontalen Radarsensorwinkels nach Verbauort Hinten Rechts (HR) |

### ARG_0XE2BD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZAEHLER_LACK_HECK | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | Anzahl der Lackierung der Heckschürze (Wertebereich von 0-7) |

### ARG_0XE2BE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZAEHLER_LACK_FRONT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | Anzahl der Lackierung der Frontschürze (Wertebereich von 0-7) |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DISP_WARN_GRAP_CTA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | displaywarninggraphicCTA |
| WARN_ACOU_CTA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | warningaudibleCTA |
| QU_FN_CTA | + | - | 0-n | high | unsigned char | - | TAB_QU_FN_CTA | - | - | - | - | - | QualifierfunctionCTA |
| RQ_DSE_LH_WARN_CTA | + | - | 0-n | high | unsigned char | - | TAB_RQ_DSE_XH_WARN_CTA | - | - | - | - | - | requestdisplaysegmentlefthandwarningCTA |
| RQ_DIM_WARN_CTA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | requestdimmerwarningCTA |
| RQ_DSE_RH_WARN_CTA | + | - | 0-n | high | unsigned char | - | TAB_RQ_DSE_XH_WARN_CTA | - | - | - | - | - | requestdisplaysegmentrighthandwarningCTA |
| ANSTEUERZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | AnsteuerzeitderRoutine |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG1 | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | First argument |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020800 | Energiesparmode aktiv | 0 | - |
| 0x020808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02080A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02080B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02080C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02080D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF08 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x481CBB | Master-Slave - Hardwarefehler - hinten links Slave | 0 | - |
| 0x481CBC | Master-Slave - Hardwarefehler - vorne links Slave | 0 | - |
| 0x481CBD | Master-Slave - Hardwarefehler vorne rechts Slave | 0 | - |
| 0x481CBE | Master-Slave - Hinten links Slave nicht verbaut | 0 | - |
| 0x481CBF | Master-Slave - vorne links Slave nicht verbaut | 0 | - |
| 0x481CC0 | Master-Slave - vorne rechts Slave nicht verbaut | 0 | - |
| 0x481CC2 | Software - Inkompatible Software innerhalb System | 0 | - |
| 0x481CC3 | Hardware - Inkompatible Hardware innerhalb System | 0 | - |
| 0x481CC5 | Variantencodierung - Falsche Verbauvariante | 0 | - |
| 0x481CC6 | PR-CAN - Control Module Bus OFF | 0 | - |
| 0x481CC8 | Funktionsabbruch - Falscher Betriebsmodus | 0 | - |
| 0x481CCC | Master-Slave - Außerhalb Betriebstemperatur - Vorne rechts Slave | 1 | - |
| 0x481CCD | Master-Slave - Außerhalb Betriebstemperatur - Vorne links Slave | 1 | - |
| 0x481CCE | Master-Slave - Außerhalb Betriebstemperatur - hinten links Slave | 1 | - |
| 0x481CCF | Botschaftsfehler (Steuerung Betriebsmodus Radar, ID: CTR_OPRMOD_RADA) Timeout | 0 | - |
| 0x481CD0 | Funktionsfehler - Dejustage - Hinten Links | 0 | - |
| 0x481CD3 | Master - Außerhalb Betriebstemperatur - hinten rechts Master | 1 | - |
| 0x481CD4 | Master - Hardwarefehler - hinten rechts Master | 0 | - |
| 0x481CD5 | Funktionsabbruch - Teilweise Blindheit - Vorne Links | 1 | - |
| 0x481CD6 | Funktionsabbruch - Teilweise Blindheit - Hinten Links | 1 | - |
| 0x481CD7 | Funktionsabbruch - Teilweise Blindheit - Hinten Rechts | 1 | - |
| 0x481CD8 | Funktionsabbruch - Teilweise Blindheit - Vorne Rechts | 1 | - |
| 0x481CD9 | Signalfehler (Steuerung Betriebsmodus Radar, ID: CTR_OPRMOD_RADA) Ungültig | 0 | - |
| 0x481CDA | Sensor hinten links - Falschverbau | 0 | - |
| 0x481CDB | Sensor hinten rechts - Falschverbau | 0 | - |
| 0x481CE0 | Funktionsfehler - Dejustage - Hinten Rechts | 0 | - |
| 0x481CE4 | Funktionsfehler - Dejustage - Vorne Links | 0 | - |
| 0x481CEA | Signalfehler (Steuerung Betriebsmodus Radar, ID: CTR_OPRMOD_RADA) Undefiniert | 0 | - |
| 0x481CED | Funktionsabbruch - Blindheit - Vorne Links | 1 | - |
| 0x481CEE | Botschaftsfehler (Steuerung Betriebsmodus Radar, ID: CTR_OPRMOD_RADA) Alive | 0 | - |
| 0x481CEF | Funktionsabbruch - Blindheit - Hinten Links | 1 | - |
| 0x481CF0 | Funktionsabbruch - Blindheit - Hinten Rechts | 1 | - |
| 0x481CF1 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x481CF2 | Funktionsabbruch - Blindheit - Vorne Rechts | 1 | - |
| 0x481CF3 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x481CF4 | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x481CF5 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x481CF6 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x481CF8 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x481CFB | Funktionsfehler - Dejustage - Vorne Rechts | 0 | - |
| 0x481CFD | Botschaftsfehler (Steuerung Betriebsmodus Radar, ID: CTR_OPRMOD_RADA) Checksumme | 0 | - |
| 0xCB0514 | B2-CAN Control Module Bus OFF | 0 | - |
| 0xCB0518 | FAS-CAN Control Module Bus OFF | 0 | - |
| 0xCB0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCB0C00 | FASR-CAN Control Module Bus OFF | 0 | - |
| 0xCB0C02 | FASL-CAN Control Module Bus OFF | 0 | - |
| 0xCB1405 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | - |
| 0xCB1408 | Signal(Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 | - |
| 0xCB140A | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) fehlt | 1 | - |
| 0xCB140D | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) ungültig | 1 | - |
| 0xCB1428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xCB1429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xCB142B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xCB142C | Signal(Status Verbrennungsmotor, ID: ST_CENG) undefiniert | 1 | - |
| 0xCB1432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xCB1433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xCB1434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xCB1435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xCB1436 | Signal(Zustand Fahrzeug, ID: CON_VEH) undefiniert | 1 | - |
| 0xCB1437 | Botschaft(Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xCB143A | Signal(Außentemperatur, ID: A_TEMP) ungültig | 1 | - |
| 0xCB143B | Signal(Außentemperatur, ID: A_TEMP) undefiniert | 1 | - |
| 0xCB1448 | Botschaft(Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xCB144C | Signal(Relativzeit BN2020, ID: RELATIVZEIT) ungültig | 1 | - |
| 0xCB1466 | Botschaft(Blinken, ID: BLINKEN) fehlt | 1 | - |
| 0xCB1469 | Signal(Blinken, ID: BLINKEN) ungültig | 1 | - |
| 0xCB149A | Botschaft(Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xCB149D | Signal(Kilometerstand/Reichweite, ID: KILOMETERSTAND) ungültig | 1 | - |
| 0xCB14F2 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xCB14F5 | Signal(Status Anhänger, ID: STAT_ANHAENGER) ungültig | 1 | - |
| 0xCB1502 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) fehlt | 1 | - |
| 0xCB1505 | Signal(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) ungültig | 1 | - |
| 0xCB151E | Botschaft(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) fehlt | 1 | - |
| 0xCB1521 | Signal(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) ungültig | 1 | - |
| 0xCB157E | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xCB1581 | Signal(Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 | - |
| 0xCB15BA | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) fehlt | 1 | - |
| 0xCB15BC | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) Prüfsumme falsch | 1 | - |
| 0xCB15BD | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) ungültig | 1 | - |
| 0xCB15D6 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) fehlt | 1 | - |
| 0xCB15D7 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) nicht aktuell | 1 | - |
| 0xCB15D8 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) Prüfsumme falsch | 1 | - |
| 0xCB15D9 | Signal(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) ungültig | 1 | - |
| 0xCB160E | Botschaft(Status System Parken 2, ID: ST_SY_PKG_2) fehlt | 1 | - |
| 0xCB1611 | Signal(Status System Parken 2, ID: ST_SY_PKG_2) ungültig | 1 | - |
| 0xCB1616 | Botschaft(Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID: FDBK_VIB_STW_DISP_EXMI) fehlt | 1 | - |
| 0xCB1619 | Signal(Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID: FDBK_VIB_STW_DISP_EXMI) ungültig | 1 | - |
| 0xCB167C | Signal(Radmoment Antrieb 4, ID: WMOM_DRV_4) undefiniert | 1 | - |
| 0xCB1689 | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) fehlt | 1 | - |
| 0xCB168C | Signal(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) ungültig | 1 | - |
| 0xCB1691 | Botschaft(Fahrspur Liste, ID: LNE_LST) fehlt | 1 | - |
| 0xCB1694 | Signal(Fahrspur Liste, ID: LNE_LST) ungültig | 1 | - |
| 0xCB1695 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) fehlt | 1 | - |
| 0xCB1698 | Signal(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) ungültig | 1 | - |
| 0xCB1699 | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) fehlt | 1 | - |
| 0xCB169C | Signal(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) ungültig | 1 | - |
| 0xCB169D | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) fehlt | 1 | - |
| 0xCB16A0 | Signal(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) ungültig | 1 | - |
| 0xCB16A1 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) fehlt | 1 | - |
| 0xCB16A4 | Signal(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) ungültig | 1 | - |
| 0xCB16C9 | Botschaft(Dimmung, ID: DIMMUNG) fehlt | 1 | - |
| 0xCB16CA | Signal(Blinken, ID: BLINKEN) undefiniert | 1 | - |
| 0xCB16CB | Botschaft(Fahrbahn-Geometrie, ID: RDGM) fehlt | 1 | - |
| 0xCB16CC | Botschaft(Fahrbahn-Geometrie, ID: RDGM) nicht aktuell | 1 | - |
| 0xCB16CD | Signal(Dimmung, ID: DIMMUNG) ungültig | 1 | - |
| 0xCB16CE | Botschaft(Fahrbahn-Geometrie, ID: RDGM) Prüfsumme falsch | 1 | - |
| 0xCB16CF | Signal(Fahrbahn-Geometrie, ID: RDGM) ungültig | 1 | - |
| 0xCB16D0 | Signal(Fahrgestellnummer, ID: FAHRGESTELLNUMMER) ungültig | 1 | - |
| 0xCB16D1 | Botschaft(Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) fehlt | 1 | - |
| 0xCB16D2 | Botschaft(Status Energieerzeugung, ID: ST_ENERG_GEN) fehlt | 1 | - |
| 0xCB16D3 | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) undefiniert | 1 | - |
| 0xCB16D4 | Signal(Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) ungültig | 1 | - |
| 0xCB16D5 | Signal(Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) undefiniert | 1 | - |
| 0xCB16D6 | Signal(Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID: FDBK_VIB_STW_DISP_EXMI) undefiniert | 1 | - |
| 0xCB16D7 | Signal(Status Anhänger, ID: STAT_ANHAENGER) undefiniert | 1 | - |
| 0xCB16D8 | Signal(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) undefiniert | 1 | - |
| 0xCB16D9 | Signal(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) undefiniert | 1 | - |
| 0xCB16DC | Signal(Status Energieerzeugung, ID: ST_ENERG_GEN) ungültig | 1 | - |
| 0xCB16DE | Botschaft(Status Fahrlicht, ID: STAT_FAHRLICHT) fehlt | 1 | - |
| 0xCB16E1 | Signal(Status Fahrlicht, ID: STAT_FAHRLICHT) ungültig | 1 | - |
| 0xCB16E2 | Signal(Status Fahrlicht, ID: STAT_FAHRLICHT) undefiniert | 1 | - |
| 0xCB16E3 | Botschaft(Status Helligkeit Umgebung, ID: BRIG_SURR) fehlt | 1 | - |
| 0xCB16E6 | Signal(Status Helligkeit Umgebung, ID: BRIG_SURR) ungültig | 1 | - |
| 0xCB16E8 | Botschaft(Takt Zähler Synchronisation CAN, ID: CCLK_COU_SYNCN_CAN) fehlt | 1 | - |
| 0xCB16E9 | Signal(Status System Parken 2, ID: ST_SY_PKG_2) undefiniert | 1 | - |
| 0xCB16EC | Signal(Takt Zähler Synchronisation CAN, ID: CCLK_COU_SYNCN_CAN) ungültig | 1 | - |
| 0xCB16ED | Signal(Takt Zähler Synchronisation CAN, ID: CCLK_COU_SYNCN_CAN) undefiniert | 1 | - |
| 0xCB16EE | Botschaft(Takt Zähler Synchronisation Nachlauf, ID: CCLK_COU_SYNCN_FLLUP) fehlt | 1 | - |
| 0xCB16F1 | Signal(Takt Zähler Synchronisation Nachlauf, ID: CCLK_COU_SYNCN_FLLUP) ungültig | 1 | - |
| 0xCB16F2 | Signal(Takt Zähler Synchronisation Nachlauf, ID: CCLK_COU_SYNCN_FLLUP) undefiniert | 1 | - |
| 0xCB1769 | Signal(Fahrspur Liste, ID: LNE_LST) undefiniert | 1 | - |
| 0xCB176A | Signal(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) undefiniert | 1 | - |
| 0xCB176B | Signal(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) undefiniert | 1 | - |
| 0xCB176C | Signal(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) undefiniert | 1 | - |
| 0xCB176D | Signal(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) undefiniert | 1 | - |
| 0xCB176E | Signal(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) undefiniert | 1 | - |
| 0xCB184F | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) fehlt | 1 | - |
| 0xCB1855 | Signal(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) ungültig | 1 | - |
| 0xCB1856 | Signal(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) undefiniert | 1 | - |
| 0xCB1857 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) fehlt | 1 | - |
| 0xCB185A | Signal(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) ungültig | 1 | - |
| 0xCB185B | Signal(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) undefiniert | 1 | - |
| 0xCB185C | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) fehlt | 1 | - |
| 0xCB185F | Signal(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) ungültig | 1 | - |
| 0xCB1860 | Signal(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) undefiniert | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | VORNE_LINKS | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | VORNE_RECHTS | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | HINTEN_LINKS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | HINTEN_RECHTS | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x5001 | RESET_FILE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x5002 | RESET_ERROR_ID | HEX | High | unsigned int | - | - | - | - |
| 0x5003 | RESET_LINE | HEX | High | unsigned long | - | - | - | - |
| 0x5004 | RESET_REASON | 0-n | High | 0xFF | TAB_RESET_REASON | - | - | - |
| 0x5006 | HW_ROOTCAUSE_1 | HEX | High | unsigned long | - | - | - | - |
| 0x5007 | HW_ROOTCAUSE_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5008 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5009 | RID applikativer Job | 0-n | High | 0xFF | RID_Appliaktiver_Job | - | - | - |
| 0x500A | WINKELABWEICHUNG | ° | High | signed int | - | 1.0 | 1000.0 | 0.0 |
| 0x500B | EXTENDED_INFO_1 | HEX | High | unsigned long | - | - | - | - |
| 0x500C | EXTENDED_INFO_2 | HEX | High | unsigned int | - | - | - | - |
| 0x500D | EXTENDED_INFO_3 | HEX | High | unsigned int | - | - | - | - |
| 0x500E | EXTENDED_INFO_4 | HEX | High | unsigned int | - | - | - | - |
| 0x5010 | Tester ID | HEX | High | unsigned char | - | - | - | - |
| 0x5014 | INTERNAL_TEMPERATURE_1 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5015 | INTERNAL_TEMPERATURE_2 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5016 | INTERNAL_TEMPERATURE_3 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
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
| 0x600000 | SG intern - Reset | 0 | - |
| 0x600001 | Anfrage applikativer Job | 0 | - |
| 0x600002 | Extended internal Info | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | VORNE_LINKS | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | VORNE_RECHTS | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | HINTEN_LINKS | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | HINTEN_RECHTS | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x5001 | RESET_FILE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x5002 | RESET_ERROR_ID | HEX | High | unsigned int | - | - | - | - |
| 0x5003 | RESET_LINE | HEX | High | unsigned long | - | - | - | - |
| 0x5004 | RESET_REASON | 0-n | High | 0xFF | TAB_RESET_REASON | - | - | - |
| 0x5006 | HW_ROOTCAUSE_1 | HEX | High | unsigned long | - | - | - | - |
| 0x5007 | HW_ROOTCAUSE_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5008 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5009 | RID applikativer Job | 0-n | High | 0xFF | RID_Appliaktiver_Job | - | - | - |
| 0x500A | WINKELABWEICHUNG | ° | High | signed int | - | 1.0 | 1000.0 | 0.0 |
| 0x500B | EXTENDED_INFO_1 | HEX | High | unsigned long | - | - | - | - |
| 0x500C | EXTENDED_INFO_2 | HEX | High | unsigned int | - | - | - | - |
| 0x500D | EXTENDED_INFO_3 | HEX | High | unsigned int | - | - | - | - |
| 0x500E | EXTENDED_INFO_4 | HEX | High | unsigned int | - | - | - | - |
| 0x5010 | Tester ID | HEX | High | unsigned char | - | - | - | - |
| 0x5014 | INTERNAL_TEMPERATURE_1 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5015 | INTERNAL_TEMPERATURE_2 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5016 | INTERNAL_TEMPERATURE_3 | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
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

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_REICHWEITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen Qualifier Reichweite |

### RES_0XA101_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status routine |

### RES_0XA158_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SRR_KALIBRIERUNG_STATUS_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_SRR_KALIBRIERUNG_FEHLER_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_SRR_FEHLER_DETAIL | - | - | - | Fehler Detail |

### RES_0XA159_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SRR_KALIBRIERUNG_STATUS_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_SRR_KALIBRIERUNG_FEHLER_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_SRR_FEHLER_DETAIL | - | - | - | Fehler Detail |

### RES_0XA15A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SRR_DAEMPFUNGSMESSUNG_STATUS_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_SRR_DAEMPUNGSMESSUNG_FEHLER_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_SRR_FEHLER_DETAIL | - | - | - | Fehler Detail |

### RES_0XA15B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SRR_DAEMPFUNG_STATUS_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_SRR_DAEMPFUNG_FEHLER_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_SRR_FEHLER_DETAIL | - | - | - | Fehler Detail |

### RES_0XA162_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |
| STAT_RADAR_HF_MODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_RADAR_HF_MODUS | - | - | - | Status Radarabstrahlung HF Modus |

### RES_0XA163_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status routine |

### RES_0XA16B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_X_KOORDINATE_WERT | + | - | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | x-Koordinate |
| STAT_Y_KOORDINATE_WERT | + | - | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | y-Koordinate |
| STAT_SYSTEMZEIT_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit |
| STAT_GESCHWINDIGKEIT_WERT | + | - | - | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_DUMMY_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Dummy |

### RES_0XD79F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERT1_WERT | HEX | high | signed long | - | - | - | - | - | Statistik der RECW Auslösung abhängig von Randbedingung Geschwindigkeitsbereich Bit 0-3 Differenzgeschwindigkeit Bit 4-6 Straßenart Bit 7 (Bytes 0,1,2,3 haben gleiche Bitbelegung; Vier Events können gespeichert werden) |
| STAT_WERT2_WERT | HEX | high | signed long | - | - | - | - | - | Wie knapp ist die RECW-Situation ausgegangen Relativposition (Abstand) Bit 0-1 Relativwinkel Bit 2-3 TTC zum Zeitpunkt der Warnung Bit 4-6 RECW oder PreCrash Bit 7 (Bytes 0,1,2,3 haben gleiche Bitbelegung; Vier Events können gespeichert werden) |
| STAT_WERT3_WERT | HEX | high | signed long | - | - | - | - | - | Technische Daten zur Auslösung RECW Gierrate (max.) Bit 0-2 Blinker (an/aus) Bit 3 Lenkwinkelwert (max.) Bit 4-7 (Bytes 0,1,2,3 haben gleiche Bitbelegung; Vier Events können gespeichert werden) |
| STAT_WERT4_WERT | HEX | high | signed long | - | - | - | - | - | Nichtverfügbarkeit RECW aufgrund Sensorblindheit Außentemperatur Bit 0-1 Zeitintervall ab Klemmenwechsel Bit 2-3 Außentemperatur Bit 4-5 Zeitintervall ab Klemmenwechsel Bit 6-7 (Bytes 0,1,2,3 haben gleiche Bitbelegung; Acht Events können gespeichert werden) |
| STAT_WERT5_WERT | HEX | high | signed long | - | - | - | - | - | Warnzeitpunkt und Einstellungen SWW Umschaltvorgänge in  früh  Bit 0-7 Umschalt in  mittel  Bit 8-15 Umschalt in  spät  Bit 16-22 Aktuell  früh  Bit 23 Aktuell  mittel  Bit 24 Aktuell  spät  Bit 25 Aktuell  SWW ein/aus  Bit 26  |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Kilometerstandes bei Ausführen des Jobs |

### RES_0XD9E2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_SENSOR_VORNE_LINKS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ergebnisse der aktuellen, internen SG Temperatur nach Verbauort |
| STAT_TEMPERATUR_SENSOR_VORNE_RECHTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ergebnisse der aktuellen, internen SG Temperatur nach Verbauort |
| STAT_TEMPERATUR_SENSOR_HINTEN_LINKS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ergebnisse der aktuellen, internen SG Temperatur nach Verbauort |
| STAT_TEMPERATUR_SENSOR_HINTEN_RECHTS_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ergebnisse der aktuellen, internen SG Temperatur nach Verbauort |

### RES_0XD9E5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_SENSOR_VORNE_LINKS_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | SG Seriennummer Verbauort Vorne Links |
| STAT_SERIENNUMMER_SENSOR_VORNE_RECHTS_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | SG Seriennummer Verbauort Vorne Rechts |
| STAT_SERIENNUMMER_SENSOR_HINTEN_LINKS_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | SG Seriennummer Verbauort Hinten Links |
| STAT_SERIENNUMMER_SENSOR_HINTEN_RECHTS_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | SG Seriennummer Verbauort Hinten Rechts |

### RES_0XDAA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_WINKELABWEICHUNG_VR_WERT | ° | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Auslesen des horizontalen Radarsensorwinkels nach Verbauort Vorne Rechts (VR) |

### RES_0XDAA8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_WINKELABWEICHUNG_HL_WERT | ° | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Auslesen des horizontalen Radarsensorwinkels nach Verbauort Hinten Links (HL) |

### RES_0XDAAE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_WINKELABWEICHUNG_VL_WERT | ° | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Auslesen des horizontalen Radarsensorwinkels nach Verbauort Vorne Links (VL) |

### RES_0XDAAF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_WINKELABWEICHUNG_HR_WERT | ° | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Auslesen der horizontalen Radarsensorwinkels nach Verbauort Hinten Rechts (HR) |

### RES_0XE2BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMPLITUDE_DETEKTION_WERT | dBm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Amplitude der Detektion |
| STAT_STANDARDABWEICHUNG_AMPLITUDE_WERT | dB | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Standardabweichung der gemessenen Amplitude |
| STAT_MIN_AMPLITUDE_WERT | dBm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Benötigte Minimal-Amplitude |
| STAT_RCS_DETEKTION_WERT | dBsm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | RCS-Wert der Detektion |
| STAT_ABSTAND_DETEKTION_WERT | m | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Abstand der Detektion |
| STAT_AZIMUTH_DETEKTION_WERT | ° | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Azimuth-Winkel der Detektion |

### RES_0XE2BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LACK_HECK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Lackierung der Heckschürze (Wertebereich von 0-7) |
| STAT_ZAEHLER_LACK_FRONT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Lackierung der Frontschürze (Wertebereich von 0-7) |
| STAT_SRR_REICHWEITE_HR_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reichweite des SRR_HR (hinten rechts) in m(Wertebereich von 0 bis 128) |
| STAT_SRR_REICHWEITE_HL_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reichweite des SRR_HL (hinten links) in m(Wertebereich von 0 bis 128) |
| STAT_SRR_OBJEKTGROESSE_HR_WERT | dBm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Objektgröße in dBsm (Wertebereich von -30 bis +32)  |
| STAT_SRR_OBJEKTGROESSE_HL_WERT | dBm | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Objektgröße in dBsm (Wertebereich von -30 bis +32) |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | StatusRoutine |
| STAT_ROUTINE_CTA | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | StatusRoutineResult |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RES1_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | First result |
| STAT_RES2_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Second result |
| STAT_RES3_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Third result |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RID_APPLIAKTIVER_JOB

| WERT | TEXT |
| --- | --- |
| 0 | STEUERN_AUSSENSPIEGEL_LED |
| 1 | STEUERN_LENKRAD_VIBRATION_AMPLITUDE |
| 2 | STEUERN_RADAR_WINKELABWEICHUNG_xx |
| 3 | STEUERN_CTA |
| 0xFF | Wert ungültig |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| STEUERN_QUALIFIER_ALIGNMENT | 0x4017 | - | STEUERN_QUALIFIER_ALIGNMENT | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4017_D | - |
| STATUS_QUALIFIER_ALIGNMENT | 0x4018 | STAT_QUALIFIER_ALIGNMENT_WERT | Auslesen des Qualifier Alignment | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| QUALIFIER_REICHWEITE | 0x4019 | - | QUALIFIER_REICHWEITE | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4019_D | RES_0x4019_D |
| STEUERN_AUSSENSPIEGEL_LED | 0xA101 | - | Ansteuern der Aussenspiegel LED durch HC2 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA101_R | RES_0xA101_R |
| RESET_FAS_DATENLOGGING | 0xA13E | - | Rücksetzen der Werte FAS Datenlogging | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SRR_KALIBRIERUNG_WERK | 0xA158 | - | Kalibrierung SRR für Inbetriebnahme im Werk | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA158_R | RES_0xA158_R |
| SRR_KALIBRIERUNG_HO | 0xA159 | - | SRR Kalibrierung für die Handelsorganisation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA159_R | RES_0xA159_R |
| SRR_DAEMPFUNG_WERK | 0xA15A | - | SRR Dämpfungsmessung fürs Werk | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA15A_R | RES_0xA15A_R |
| SRR_DAEMPFUNG_HO | 0xA15B | - | Dämpfungsmessung SRR für die Handelsorganisation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA15B_R | RES_0xA15B_R |
| RADAR_HF_MODUS | 0xA162 | - | Setzen und Ablesen der Radarabstrahlung Modus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA162_R | RES_0xA162_R |
| STEUERN_LENKRAD_VIBRATION | 0xA163 | - | Ansteuern des Lenkradvibrationsakuators | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA163_R | RES_0xA163_R |
| OBJECT_RANGE_RECOGNITION | 0xA16B | - | Liest den Objekt-Erkennungsspeicher aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA16B_R | RES_0xA16B_R |
| FAS_DATENLOGGING | 0xD79F | - | Jobs für FAS Datenlogging | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD79F_D |
| INTERNE_SG_TEMPERATUR | 0xD9E2 | - | Auslesen SG Interne Temperatur  nach Verbauort  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9E2_D |
| SERIENNUMMER_LESEN_FUNKTIONAL | 0xD9E5 | - | SG Seriennummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9E5_D |
| RADAR_WINKELABWEICHUNG_VR | 0xDAA7 | - | Abfrage/Setzen der Radar Justagewinkelabweichung Hinten Rechts | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAA7_D | RES_0xDAA7_D |
| RADAR_WINKELABWEICHUNG_HL | 0xDAA8 | - | Abfrage/Setzen der Radar Justagewinkelabweichung Hinten Links | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAA8_D | RES_0xDAA8_D |
| RADAR_WINKELABWEICHUNG_VL | 0xDAAE | - | Abfrage/Setzen der Radar Justagewinkelabweichung Vorne Links | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAAE_D | RES_0xDAAE_D |
| RADAR_WINKELABWEICHUNG_HR | 0xDAAF | - | Abfrage/Setzen der Radar Justagewinkelabweichung Hinten Rechts | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAAF_D | RES_0xDAAF_D |
| SRR_DAEMPFUNG | 0xE2BB | - | Auslesen des Dämpfungswerts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2BB_D |
| SRR_ZAEHLER_LACK | 0xE2BC | - | Zähler Lackierung Schürze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2BC_D |
| SRR_ZAEHLER_LACK_HECK | 0xE2BD | - | Zaehler Lackierung Heckschürze | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2BD_D | - |
| SRR_ZAEHLER_LACK_FRONT | 0xE2BE | - | Zähler Lackierung Frontschürze | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2BE_D | - |
| STATUS_SRR_READ_SNR_VALUE | 0xE3FA | STAT_SNR_VALUE_WERT | SNR Wert in dB | dB | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| STEUERN_CTA | 0xF001 | - | Steuern der CTA-Signalzustände | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | RES_0xF001_R |
| EXTENDED_INTERNAL_INFO | 0xF002 | - | Output of ECU internal info. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | RES_0xF002_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

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

### TAB_INTENSITAETSSTUFE

| WERT | TEXT |
| --- | --- |
| 0 | Intensitätsstufe 0 |
| 1 | Intensitätsstufe 1 |
| 2 | Intensitätsstufe 2 |
| 3 | Intensitätsstufe 3 |
| 4 | Intensitätsstufe 4 |
| 5 | Intensitätsstufe 5 |
| 6 | Reserve |
| 7 | Reserve |
| 8 | Reserve |
| 9 | Reserve |
| 10 | Reserve |
| 11 | Reserve |
| 12 | Reserve |
| 13 | Reserve |
| 14 | Reserve |
| 15 | Reserve |

### TAB_LED_XH

| WERT | TEXT |
| --- | --- |
| 0 | Anzeigesegment aus |
| 1 | Anzeigesegment AN, kein Blinken |
| 2 | Anzeigesegment AN, Blinken Stufe 1 |
| 3 | Anzeigesegment AN, Blinken Stufe 2 |
| 4 | Anzeigesegment AN, Blinken Stufe 3 |
| 255 | Ungültig |

### TAB_MUSTER_LENKRAD

| WERT | TEXT |
| --- | --- |
| 0 | Muster 0 |
| 1 | Muster 1 |
| 2 | Muster 2 |
| 3 | Muster 3 |
| 4 | Muster 4 |
| 5 | Muster 5 |
| 6 | Muster 6 |
| 7 | Muster 7 |
| 8 | Muster 8 |
| 9 | Muster 9 |
| 10 | Muster 10 |
| 11 | Reserve |
| 12 | Reserve |
| 13 | Reserve |
| 14 | Reserve |
| 15 | Reserve |

### TAB_QU_FN_CTA

| WERT | TEXT |
| --- | --- |
| 1 | Funktion bereit |
| 9 | Funktion aktiv |
| 11 | Funktion Aktiv (Degradation) |
| 14 | Funktion nicht verfügbar |
| 6 | Fehler |
| 15 | Signal unbefüllt |

### TAB_RADAR_HF_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Radarabstrahlung AUS |
| 1 | Radarabstrahlung AN |
| 2 | Radarabstrahlung Automatisch |

### TAB_RESET_REASON

| WERT | TEXT |
| --- | --- |
| 0 | StackOvl |
| 1 | Hardware |
| 2 | Assert (SW, Watchdog) |
| 0xFF | Wert ungültig |

### TAB_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine |
| 1 | Links |
| 2 | Rechts |

### TAB_RQ_DSE_XH_WARN_CTA

| WERT | TEXT |
| --- | --- |
| 8 | Initialisierung |
| 0 | Anzeigesegment_AUS |
| 1 | Anzeigesegment_AN_kein_Blinken |
| 2 | Anzeigesegment_AN_Blinken_Stufe_1 |
| 3 | Anzeigesegment_AN_Blinken_Stufe_2 |
| 4 | Anzeigesegment_AN_Blinken_Stuf_3 |
| 13 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 14 | Funktion_meldet_Fehler |
| 15 | Signal_unbefuellt |

### TAB_SRR_FEHLER_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kein Ziel gefunden |
| 0x02 | Störeinflüsse in der Umgebung |
| 0x03 | Unzureichende Sensorperformance |
| 0x04 | Wert außerhalb zulässigen Bereichs |
| 0xFF | Wert ungültig |

### TAB_STATUS_RADAR_HF_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Radarabstrahlung AUS |
| 1 | Radarabstrahlung AN |
| 2 | Radarabstrahlung Automatisch |

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

### TAB_ST_PCSH_RERA

| WERT | TEXT |
| --- | --- |
| 0 | Kein_Kollisionsobjekt_detektiert |
| 1 | Kollision_vermeidbar |
| 2 | Kollision_wahrscheinlich |
| 4 | Kollision_unvermeidbar |
| 13 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 14 | Funktion_meldet_Fehler |
| 15 | Signal_unbefuellt |

### TAB_ST_RECW_REAR

| WERT | TEXT |
| --- | --- |
| 0 | Warnung inaktiv |
| 1 | Warnung aktiv |
| 5 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 6 | Funktion_meldet_Fehler |
| 7 | Signal_unbefuellt |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Defaultwert |
| 0xFF | Wert ungültig |

### TAB_0X5008

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |
