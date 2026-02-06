# PCU48.prg

## General

|  |  |
| --- | --- |
| File | PCU48.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 49 |
| Origin | BMW EE-411 Lea_Schreiber |
| Revision | 2.102 |
| Author | IAV-GMBH EE-411 Klassen |
| ECU Comment | Referenzstand I-445: Fehlerbereinigung: Heilungszeit Crash, DID 0xDA90 Faktor Einheit korrigiert) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Power Control Unit 48 Volt |  |  |
| ORIGIN | string | BMW EE-411 Lea_Schreiber |  |  |
| REVISION | string | 2.102 |  |  |
| AUTHOR | string | IAV-GMBH EE-411 Klassen |  |  |
| COMMENT | string | Referenzstand I-445: Fehlerbereinigung: Heilungszeit Crash, DID 0xDA90 Faktor Einheit korrigiert) |  |  |
| PACKAGE | string | 1.995 |  |  |
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
| 0x0000CB | A123 Systems |
| 0x0000CC | ZADI |
| 0x0000CD | speedsignal GmbH |
| 0x0000CE | Eldor Corporation |
| 0x0000CF | Delta Electronics Inc. |
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

### ARG_0XAE05_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSZUSTAND | + | - | 0-n | high | unsigned char | - | TAB_BETRIEBSZUSTAND_PCU48 | - | - | - | - | - | Steuerung Wandlungsrichtung |
| SPANNUNG_12V_EBENE | + | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12000.0 | 15500.0 | Sollspannung 12V-Seite |
| SPANNUNG_48V_EBENE | + | - | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 24000.0 | 54000.0 | Sollspannung 48V-Seite |
| STROM_12V_EBENE | + | - | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 263000.0 | Vorgabe oberste Stromgrenze (I12-max) |
| STROM_48V_EBEN | + | - | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 112000.0 | Vorgabe oberste Stromgrenze (I48-max) |
| LEISTUNG_12V_EBENE | + | - | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3700.0 | Vorgabe maximale Eingangsleistung auf 12V-Seite |
| LEISTUNG_48V_EBENE | + | - | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3700.0 | Vorgabe maximale Eingangsleistung auf 48V-Seite |

### ARG_0XDAEF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMME_PCU48_RUECKSETZEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 0x00: Keine Aktion 0x01: Histogramme Löschen |

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

### CTR_TAR_OPR_CON_CNV

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Standby_Passiv |
| 2 | Vorladen_BN48 |
| 3 | Standby_Aktiv |
| 4 | Buck |
| 5 | Boost |

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
| 0x025400 | Energiesparmode aktiv | 0 | - |
| 0x025408 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x025409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02540A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02540B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02540C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02540D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x025424 | NVM_E_HARDWARE | 0 | - |
| 0x02FF54 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x808880 | PCU48: Permanenter elektrischer Fehler | 0 | - |
| 0x808881 | PCU48: Aufgrund Überspannung auf der 12V Seite ist der DC/DC 12V Betrieb gesperrt | 1 | - |
| 0x808882 | PCU48: Komponenteneigenschutz ausgelöst | 1 | - |
| 0x808883 | PCU48: Verlust der Kalibrierdaten | 0 | - |
| 0x80888A | PCU48: Crashabschaltung KL30C | 1 | - |
| 0x80888C | PCU48: Aufgrund Unterspannung auf der 12 V Seite ist der DC/DC 48V Betrieb gesperrt | 1 | - |
| 0x80888D | PCU48: Aufgrund Unterspannung auf der 48V Seite ist der DC/DC 48V Betrieb gesperrt | 1 | - |
| 0x80888E | PCU48: Aufgrund Überspannung auf der 12V Seite ist der DC/DC 48V Betrieb gesperrt | 1 | - |
| 0x80888F | PCU48: Aufgrund Überspannung auf der 48V Seite ist der DC/DC 48V Betrieb gesperrt | 1 | - |
| 0x808890 | PCU48: Aufgrund Überspannung auf der 48V Seite ist der DC/DC 12V Betrieb gesperrt | 1 | - |
| 0x808891 | PCU48: Überspannung 12-V-Bordnetz funktionale Sicherheit | 0 | - |
| 0x808892 | PCU48: Fehler beim Test des Prozessors erkannt | 0 | - |
| 0x808893 | PCU48: Unterspannung an Klemme 30B erkannt | 1 | - |
| 0x808894 | PCU48: Überspannung an Klemme 30B erkannt | 1 | - |
| 0x808897 | PCU48: Übertemperatur Komponente erkannt | 0 | - |
| 0x808899 | PCU48: Übertemperatur Kühlmittel erkannt | 1 | - |
| 0x80889A | PCU48: Unterspannung auf der 48V Seite erkannt | 1 | - |
| 0x80889B | PCU48: Kein Wandlung auf 12-V-Bordnetz erlaubt auf Grund Unterspannung 12-V-Bordnetz | 1 | - |
| 0x80889C | PCU48: Notlaufbetrieb | 1 | - |
| 0x80889D | PCU48: Interner temporärer elektrischer Fehler | 0 | - |
| 0x80889E | PCU48: Kurzschluss Leistungsstufe erkannt | 0 | - |
| 0x80889F | PCU48: Überspannung 48-V-Bordnetz funktionale Sicherheit | 1 | - |
| 0x8088A0 | PCU48: Kein Wandlung auf Grund Unterspannung 48V-Bordnetz erlaubt | 1 | - |
| 0x8088A1 | PCU48: Ausgangsstrom auf der 12-V-Bordnetzseite zu hoch | 1 | - |
| 0x8088A2 | PCU48: Eingangsstrom auf der 48-V-Bordnetzseite zu hoch | 1 | - |
| 0x8088A3 | PCU48: Unzureichende Versorgung an Klemme 30B | 1 | - |
| 0x8088A4 | PCU48: ROM Fehler erkannt | 0 | - |
| 0x8088A5 | PCU48: Fehler bei Speicherprüfung | 0 | - |
| 0x8088A6 | PCU48: ROM Prüfsummenfehler | 0 | - |
| 0x8088A7 | PCU48: RAM Fehler erkannt | 0 | - |
| 0x8088A8 | PCU48: Wandlung ins 48-V-Bordnetz im PWF Zustand Fahren erkannt | 1 | - |
| 0x8088A9 | PCU48: Temperatursensorfehler erkannt | 0 | - |
| 0x8088AA | PCU48: Verlust der Masseleitung | 1 | - |
| 0xDE04FF | LE2-CAN Physikalischer Busfehler | 0 | - |
| 0xDE0500 | LE2-CAN Control Module Bus OFF | 0 | - |
| 0xDE0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xDE1400 | PCU48: Fehler Botschaft CON_VEH | 1 | - |
| 0xDE1401 | PCU48: Fehler Botschaft CTR_CNV_48V_2 | 1 | - |
| 0xDE1402 | PCU48: Fehler Botschaft CTR_CNV_48V | 1 | - |
| 0xDE1403 | PCU48: Fehler Botschaft REQV_UDP_COOL_48V | 1 | - |
| 0xDE1404 | PCU48: Fehler Botschaft V_Veh | 1 | - |
| 0xDE1405 | PCU48: Fehler Botschaft ENSU_SFY | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_CTR_TAR_OPR_CON_CNV | 0-n | High | 0x0F | UWB_CTR_TAR_OPR_CON_CNV | - | - | - |
| 0x0002 | UWB_PWF | 0-n | High | 0x0F | UWB_PWF | - | - | - |
| 0x0003 | UWB_CURRENT_SLEW_RATE | 0-n | High | 0xF0 | UWB_CTR_TAR_IGRAD_CNV | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | UWB_UN12 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4001 | UWB_UN48 | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4003 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4004 | UWB_ERROR_BITS_QM_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4005 | UWB_ERROR_BITS_QM_1 | HEX | High | unsigned long | - | - | - | - |
| 0x4006 | UWB_ERROR_BITS_QM_2 | HEX | High | unsigned long | - | - | - | - |
| 0x4007 | UWB_ERROR_BITS_QM_3 | HEX | High | unsigned long | - | - | - | - |
| 0x4008 | UWB_ERROR_BITS_ASIL_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4009 | UWB_ERROR_BITS_ASIL_1 | HEX | High | unsigned long | - | - | - | - |
| 0x400A | AKTUELLE_MAX_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x400B | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400D | STATUS BETRIEBSMODE | 0-n | High | 0xFF | TAB_IST_BETRIEBSZUSTAND_PCU48 | - | - | - |
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
| 0x808884 | Precharge Timeout | 0 | - |
| 0x808895 | PCU48: Überspannung auf 12V Seite erkannt | 0 | - |
| 0x808896 | PCU48: Überspannung auf 48V Seite erkannt | 0 | - |
| 0x808898 | PCU48: Regelabweichung erkannt | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_CTR_TAR_OPR_CON_CNV | 0-n | High | 0x0F | UWB_CTR_TAR_OPR_CON_CNV | - | - | - |
| 0x0002 | UWB_PWF | 0-n | High | 0x0F | UWB_PWF | - | - | - |
| 0x0003 | UWB_CURRENT_SLEW_RATE | 0-n | High | 0xF0 | UWB_CTR_TAR_IGRAD_CNV | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | UWB_UN12 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4001 | UWB_UN48 | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x4002 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4003 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4004 | UWB_ERROR_BITS_QM_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4005 | UWB_ERROR_BITS_QM_1 | HEX | High | unsigned long | - | - | - | - |
| 0x4006 | UWB_ERROR_BITS_QM_2 | HEX | High | unsigned long | - | - | - | - |
| 0x4007 | UWB_ERROR_BITS_QM_3 | HEX | High | unsigned long | - | - | - | - |
| 0x4008 | UWB_ERROR_BITS_ASIL_0 | HEX | High | unsigned long | - | - | - | - |
| 0x4009 | UWB_ERROR_BITS_ASIL_1 | HEX | High | unsigned long | - | - | - | - |
| 0x400A | AKTUELLE_MAX_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x400B | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400D | STATUS BETRIEBSMODE | 0-n | High | 0xFF | TAB_IST_BETRIEBSZUSTAND_PCU48 | - | - | - |
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

### RES_0XAE05_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_12V_WERT | - | - | + | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung 12V an Klemme 30 (Ausgang am Wandler) |
| STAT_SPANNUNG_48V_WERT | - | - | + | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Spannung 48V an Klemme 40 und Klemme 41 |
| STAT_STROM_12V_WERT | - | - | + | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Strom 12V an Klemme 30 |
| STAT_STROM_48V_WERT | - | - | + | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Strom 48V an Klemme 40 und Klemme 41 |
| STAT_ISTLEISTUNG_48V_WERT | - | - | + | W | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Ausgabe Istleistung 48V |
| STAT_BETRIEBSZUSTAND | - | - | + | 0-n | high | unsigned char | - | TAB_IST_BETRIEBSZUSTAND_PCU48 | - | - | - | Aktueller Betriebszustand der PCU. |

### RES_0XDA8D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_HALFBRIDGE_1_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 1 |
| STAT_TEMPERATUR_HALFBRIDGE_2_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 2  |
| STAT_TEMPERATUR_HALFBRIDGE_3_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 3 |
| STAT_TEMPERATUR_HALFBRIDGE_4_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 4 |
| STAT_TEMPERATUR_HALFBRIDGE_5_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 5 |
| STAT_TEMPERATUR_HALFBRIDGE_6_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Half Bridge Nr 6 |
| STAT_TEMPERATUR_SWITCH12V_1_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 1 |
| STAT_TEMPERATUR_SWITCH12V_2_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 2  |
| STAT_TEMPERATUR_SWITCH12V_3_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 3 |
| STAT_TEMPERATUR_SWITCH12V_4_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 4 |
| STAT_TEMPERATUR_SWITCH12V_5_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 5 |
| STAT_TEMPERATUR_SWITCH12V_6_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 12V Nr 6 |
| STAT_TEMPERATUR_SWITCH48V_1_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 48V Nr 1 |
| STAT_TEMPERATUR_SWITCH48V_2_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Switch Element 48V Nr 2  |
| STAT_TEMPERATUR_REVERSEPOL_PROTECTION_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert reverse polarity protection |
| STAT_TEMPERATUR_COOLANT_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Coolant |
| STAT_TEMPERATUR_INTERIOR_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktueller Temperaturwert Interior |

### RES_0XDA8F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_TEMPERATUR_COOLANT_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Maximale Temperatur über Zeit Kühlung |
| STAT_MAX_TEMPERATUR_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Maximale interne Temperatur über Zeit |
| STAT_MAX_TEMPERATUR_INTERIOR_WERT | °C | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Maximale Temperatur Interior über Zeit |

### RES_0XDA90_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCU48_SPANNUNG_12V_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle gemittelte 12V Spannung an der PCU48 im mV |
| STAT_PCU48_SPANNUNG_48V_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle gemittelte 48V Spannung an der PCU48 im mV |
| STAT_PCU48_STROM_12V_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktuelle gemittelter 12V Strom der PCU48 im A |
| STAT_PCU48_STROM_48V_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | aktuelle gemittelter 48V Strom der PCU48 im A |
| STAT_PCU48_LEISTUNG_12V_WERT | W | high | signed int | - | - | 1.0 | 1.0 | 0.0 | aktuelle gemittelte 12V Leistung |
| STAT_PCU48_LEISTUNG_48V_WERT | W | high | signed int | - | - | 1.0 | 1.0 | 0.0 | aktuelle gemittelte 48V Leistung |
| STAT_BETRIEBSMODUS | 0-n | high | unsigned char | - | TAB_IST_BETRIEBSZUSTAND_PCU48 | - | - | - | aktueller Betriebsmodus der PCU48 |

### RES_0XDAE5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_12V_SPANNUNG_0V_6V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 0-6V |
| STAT_12V_SPANNUNG_6V_8V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 6-8V |
| STAT_12V_SPANNUNG_8V_10V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 8-10 V |
| STAT_12V_SPANNUNG_10V_12V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 10-12V |
| STAT_12V_SPANNUNG_12V_14V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 12-14V |
| STAT_12V_SPANNUNG_14V_15_5V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 14-15,5V |
| STAT_12V_SPANNUNG_15_5V_16_5V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 15,5-16,5V |
| STAT_12V_SPANNUNG_16_5V_20V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: 16,5-20V |
| STAT_12V_SPANNUNG_AB_20V_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Spannungswert über Laufzeit gespeichert alle 200 ms: > 20V |
| STAT_48V_SPANNUNG_0V_20V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 0-20V |
| STAT_48V_SPANNUNG_20V_24V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 20-24V |
| STAT_48V_SPANNUNG_24V_35V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 24-35V |
| STAT_48V_SPANNUNG_35V_52V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 35-52V |
| STAT_48V_SPANNUNG_52V_54V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 52-54V |
| STAT_48V_SPANNUNG_54V_58V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 54-58V |
| STAT_48V_SPANNUNG_AB_58V_BOOST_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BOOST Modus gespeichert alle 200 ms: >58V |
| STAT_48V_SPANNUNG_0V_20V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 0-20V |
| STAT_48V_SPANNUNG_20V_24V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 20-24V |
| STAT_48V_SPANNUNG_24V_35V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 24-35V |
| STAT_48V_SPANNUNG_35V_52V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 35-52V |
| STAT_48V_SPANNUNG_52V_54V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 52-54V |
| STAT_48V_SPANNUNG_54V_58V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 54-58V |
| STAT_48V_SPANNUNG_AB_58V_BUCK_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Spannungswert über Laufzeit in BUCK Modus gespeichert alle 200 ms: >58V |
| STAT_12V_STROM_UNTER_5A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: <5A |
| STAT_12V_STROM_5A_25A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 5A bis 25A |
| STAT_12V_STROM_25A_50A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 25A bis 50A |
| STAT_12V_STROM_50A_75A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 50A bis 75A |
| STAT_12V_STROM_75A_100A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 75A bis 100A |
| STAT_12V_STROM_100A_140A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 100A bis 140A |
| STAT_12V_STROM_140A_180A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 140A bis 180A |
| STAT_12V_STROM_180A_215A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 180A bis 215A |
| STAT_12V_STROM_215A_250A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: 215A bis 250A |
| STAT_12V_STROM_AB_250A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Stromwert über Laufzeit in BUCK Modus gespeichert alle 200 ms: >250A |
| STAT_48V_STROM_UNTER_4A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus gespeichert alle 200 ms: <4A |
| STAT_48V_STROM_4A_8A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 4A bis 8A |
| STAT_48V_STROM_8A_12A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 8A bis 12A |
| STAT_48V_STROM_12A_16A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus  gespeichert alle 200 ms: 12A bis 16A |
| STAT_48V_STROM_16A_20A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus gespeichert alle 200 ms: 16A bis 20A |
| STAT_48V_STROM_AB_20A_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 48V Stromwert über Laufzeit in BOOST Modus gespeichert alle 200 ms: >20A |
| STAT_12V_LEISTUNG_UNTER_NEG1000W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: < -1000W |
| STAT_12V_LEISTUNG_NEG1000W_NEG750W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: -1000W bis -750W |
| STAT_12V_LEISTUNG_NEG750W_NEG500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: -750W bis -500W |
| STAT_12V_LEISTUNG_NEG500W_NEG250W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: -500W bis -250W |
| STAT_12V_LEISTUNG_NEG250W_NEG50W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: -250W bis -50W |
| STAT_12V_LEISTUNG_NEG50W_50W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: -50W bis 50W |
| STAT_12V_LEISTUNG_50W_250W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 50W bis 250W |
| STAT_12V_LEISTUNG_250W_500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 250W bis 500W |
| STAT_12V_LEISTUNG_500W_1000W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 500W bis 1000W |
| STAT_12V_LEISTUNG_1000W_1500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 1000W bis 1500W |
| STAT_12V_LEISTUNG_1500W_2000W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 1500W bis 2000W |
| STAT_12V_LEISTUNG_2000W_2500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 2000W bis 2500W |
| STAT_12V_LEISTUNG_2500W_3000W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 2500W bis 3000W |
| STAT_12V_LEISTUNG_3000W_3500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: 3000W bis 3500W |
| STAT_12V_LEISTUNG_AB_3500W_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungswert über Laufzeit gespeichert alle 200ms: >3500W |
| STAT_LIFETIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler über Lebensdauer in Sekunden |

### RES_0XDAEA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_UNTER_0C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde: <0 Grad C |
| STAT_TEMPERATUR_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde: 0 bis 60 Grad C |
| STAT_TEMPERATUR_60C_80C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde:  60 bis 80 Grad C |
| STAT_TEMPERATUR_80C_100C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde:  80 bis 100 Grad C |
| STAT_TEMPERATUR_100C_110C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde:  100 bis 110 Grad C |
| STAT_TEMPERATUR_110C_120C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde:  110 bis 120 Grad C |
| STAT_TEMPERATUR_AB_120C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler über Laufzeit gespeichert jede 1 Sekunde: >120 Grad C |

### RES_0XDAF5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_UNTER_215A_TEMP_UNTER_0C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom <215A, Temp <0Grad C |
| STAT_STROM_215A_250A_TEMP_UNTER_0C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 215A bis 250A, Temp <0Grad C |
| STAT_STROM_AB_250A_TEMP_UNTER_0C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom ab 250A, Temp <0Grad C |
| STAT_STROM_UNTER_85A_TEMP_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom unter 85A, Temp 0 bis 60 Grad C |
| STAT_STROM_85A_140A_TEMP_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 85A bis 140A , Temp 0 bis 60 Grad C |
| STAT_STROM_140A_215A_TEMP_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 140A bis 215A, Temp 0 bis 60 Grad C |
| STAT_STROM_215A_250A_TEMP_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 215A bis 250A, Temp 0 bis 60 Grad C |
| STAT_STROM_AB_250A_TEMP_0C_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom ab 250A, Temp 0 bis 60 Grad C |
| STAT_STROM_UNTER_85A_TEMP_AB_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom <85A, Temp >60Grad C |
| STAT_STROM_85A_140A_TEMP_AB_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 85A bis 140A, Temp >60Grad C |
| STAT_STROM_140A_215A_TEMP_AB_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 140A bis 215A, Temp >60Grad C |
| STAT_STROM_215A_250A_TEMP_AB_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom 215A bis 250A, Temp >60Grad C |
| STAT_STROM_AB_250A_TEMP_AB_60C_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 12V Strom über Temperatur gespeichert alle 200ms: Strom ab 250A, Temp >60Grad C |

### RES_0XDAF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEGRADATION_0PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 0 Prozent, keine Degradation |
| STAT_DEGRADATION_UNTER_10PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: <10 Prozent |
| STAT_DEGRADATION_10_20PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 10-20 Prozent |
| STAT_DEGRADATION_20_30PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 20-30 Prozent |
| STAT_DEGRADATION_30_40PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 30-40 Prozent |
| STAT_DEGRADATION_40_50PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 40-50 Prozent |
| STAT_DEGRADATION_50_60PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 50-60 Prozent |
| STAT_DEGRADATION_60_70PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 60-70 Prozent |
| STAT_DEGRADATION_70_80PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 70-80 Prozent |
| STAT_DEGRADATION_80_90PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: 80-90 Prozent |
| STAT_DEGRADATION_AB_90PROZENT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Degradationshistogramm über Laufzeit gespeichert jede 1 Sekunde: >90 Prozent |
| STAT_UEBERLASTABSCHALTVORGAENGE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Überlastabschaltungen wegen thermischer Degradation |

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
| PCU48_KOMMANDIERUNG | 0xAE05 | - | Kommandierung der PCU bezüglich Strom, Spannung, Leistung und Betriebszustand | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE05_R | RES_0xAE05_R |
| STATUS_PCU48_TEMPERATUR | 0xDA8D | - | Status aller Temperaturen auf der PCU48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA8D_D |
| STATUS_MAX_TEMPERATUR | 0xDA8F | - | Maximale Temperatur über Zeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA8F_D |
| STATUS_PCU48_BETRIEBSZUSTAND | 0xDA90 | - | Aktueller Status der PCU48. Strom, Spannung, Leistung, Betriebsmodus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA90_D |
| LEISTUNGSHISTOGRAMM_PCU48 | 0xDAE5 | - | Histogramme: Strom, Spannung, Leistung über Laufzeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAE5_D |
| TEMPERATURHISTOGRAMM_PCU48 | 0xDAEA | - | Temperaturhistogramm PCU48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAEA_D |
| HISTOGRAMME_RUECKSETZEN | 0xDAEF | - | Histogramme der PCU48 Rücksetzen  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAEF_D | - |
| STROM_TEMPERATUR_HISTOGRAMM_PCU48 | 0xDAF5 | - | Histogramm Strom über Temperatur der PCU48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAF5_D |
| DEGRADATIONSHISTOGRAMM_PCU48 | 0xDAF6 | - | Degradationshistogramm für die PCU48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAF6_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_BETRIEBSZUSTAND_PCU48

| WERT | TEXT |
| --- | --- |
| 0 | Standby Aktiv |
| 1 | Boost |
| 2 | Buck |
| 3 | Standby Passiv |
| 4 | Vorladen 48V |
| 255 | ungültig |

### TAB_IST_BETRIEBSZUSTAND_PCU48

| WERT | TEXT |
| --- | --- |
| 0 | Reserviert |
| 1 | Reserviert |
| 2 | Reserviert |
| 3 | Standby_Passiv |
| 4 | Reserviert |
| 5 | Error |
| 6 | Vorladen |
| 7 | Reserviert |
| 8 | Standby_Aktiv |
| 9 | Buck |
| 10 | Boost |
| 11 | Diagnose Standby Aktiv |
| 12 | Notbetrieb |
| 13 | Crash |
| 14 | Diagnose Boost |
| 15 | Diagnose Buck |
| 255 | Ungueltig |

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

### TAB_0X4002

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X4003

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0002 | 0x0003 |

### UWB_CTR_TAR_IGRAD_CNV

| WERT | TEXT |
| --- | --- |
| 0 | Normal |
| 1 | Slow |
| 2 | Very Slow |

### UWB_CTR_TAR_OPR_CON_CNV

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Standby_Passiv |
| 2 | Vorladen_BN48 |
| 3 | Standby_Aktiv |
| 4 | Buck |
| 5 | Boost |
| 7 | RCP_Aktiv_StandBy |

### UWB_PWF

| WERT | TEXT |
| --- | --- |
| 1 | Parken_BN_niO |
| 2 | Parken_BN_iO |
| 3 | Standfunktionen_Kunde_nicht_im_FZG |
| 5 | Wohnen |
| 7 | Pruefen_Analyse_Diagnose |
| 8 | Fahrbereitschaft_herstellen |
| 10 | Fahren |
| 12 | Fahrbereitschaft_beenden |
