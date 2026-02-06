# BATT48.prg

## General

|  |  |
| --- | --- |
| File | BATT48.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 86 |
| Origin | BMW EE-410 Dominik_Kerler |
| Revision | 1.000 |
| Author | IAV-GMBH EE-411 Hoeffer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Batteriesteuergerät 48V |  |  |
| ORIGIN | string | BMW EE-410 Dominik_Kerler |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | IAV-GMBH EE-411 Hoeffer |  |  |
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

### ARG_0X4001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PREUFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRUEFBYTE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Prüfbyte |

### ARG_0X4010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIENNUMMER | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | Marquardt Seriennummer |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4140_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAKTOR | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Faktor in 1/10 % |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4250_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _T_COOLING_A_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Parameter: Temperatur bei 0% Kühlanforderung. Default: 40 °C |
| _T_COOLING_B_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Parameter: Temperatur bei 100% Kühlanforderung Default: 45 °C |
| _T_COOLING_C_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Parameter: Temperatur der Rücksetzung der Kühlanforderung auf 0% Default: 38 °C |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4260_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Ausführen des Befehls |
| _CONTROL_BYTE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte zum Steuern des Diagnosejobs 1 = on --> Ignoriert den Kommunikationsfehler des AFE 0 = off  |

### ARG_0X4270_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CONTROL_BYTE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte zum Steuern des Diagnosejobs 1 = Zähler zurücksetzen 0 = keine Aktion |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4280_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BALANCING_CONTROL | HEX | high | unsigned long | - | - | - | - | - | - | - | Bitfeld zur Aktivierung der 20 Balancing Kanäle: 0x01: Kanal 1 aktiv 0x02: Kanal 2 aktiv 0x04: Kanal 3 aktiv ... 0x80000: Kanal 20 aktiv |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4300_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CONTROL_FUNCTION | 0-n | high | unsigned char | - | RELAY_CONTROL_FUNCTION | - | - | - | - | - | Parameter chooses control function |
| _TIME_PRE_ACTUATION | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Time for pre-actation for two step or linear funtion. |
| _TOTAL_TIME_ACTUATION_PULSE | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Total length of actuation pulse. |
| _PRE_ACTUATION_POWER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Power for pre-actuation |
| _ACTUATION_POWER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Power for actuation pulse (after pre-actuation). |

### ARG_0X430A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CONTROL_BYTE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte zum Steuern des Entwicklerjobs 1 = Zelldefekt zurücksetzen 0 = keine Aktion |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X430B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CONTROL_BYTE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = enable CAN debug messages 0 = disable CAN debug messages |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0X4310_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAKTOR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Faktor für Linkspannungskalibrierung in 1/10% |
| _PASS_PHRASE | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zum Setzen der Parameter |

### ARG_0XAE20_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABEMODUS | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = Temporär;  0x01 = Permanent |
| VORGABEWERT | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = Trennelement offen;  0x01 = Trennelement geschlossen |

### ARG_0XD6C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SETZEN_MONTAGE_MODE_48V | 0-n | high | unsigned char | - | ARG_SETZEN_MONTGE_MODE | - | - | - | - | - | SETZEN_MONTAGE_MODE_48V |

### ARG_0XDAB1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BATTERIE_STATUS | 0-n | high | unsigned char | - | TAB_BATT48_REG_STATUS | - | - | - | - | - | Batterie Status |

### ARG_0XDAFA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERKENNUNG_30C_CRASH | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: keine Aktion  1: Rücksetzen  |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _OEFFNUNGSWUNSCH_T_SET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 30.0 | 70.0 | Setzbedingung (Temperatur) für Öffnungswunsch;  Defaultwert 70°C |
| _OEFFNUNGSWUNSCH_T_RESET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 29.0 | 69.0 | Rücksetzbedingung (Temperatur) für Öffnungswunsch;  Defaultwert 65°C |
| _OEFFNUNGSWUNSCH_TIMING | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 35.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Öffnungswunsch ausgeführt wird;  Defaultwert 35s |
| _ABSCHALTANKUENDIGUNG_T_SET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 30.0 | 75.0 | Setzbedingung (Temperatur) für Abschaltankündigung;  Defaultwert 75°C |
| _ABSCHALTANKUENDIGUNG_T_RESET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 29.0 | 74.0 | Rücksetzbedingung (Temperatur) für Abschaltankündigung;  Defaultwert 70°C |
| _ABSCHALTANKUENDIGUNG_TIMING | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 35.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Abschaltankündigung ausgeführt wird;  Defaultwert 35s |
| _NOTABSCHALTUNG_T_SET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 30.0 | 80.0 | Setzbedingung (Temperatur) für Notabschaltung;  Defaultwert 80°C |
| _NOTABSCHALTUNG_T_RESET | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 29.0 | 79.0 | Rücksetzbedingung (Temperatur) für Notabschaltung;  Defaultwert 75°C |
| _NOTABSCHALTUNG_TIMING | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 35.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Notabschaltung ausgeführt wird;  Defaultwert 35s |

### ARG_SETZEN_MONTGE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Rückssetzen |
| 0x01 | Setzen |
| 0xFF | ungültig |

### BAT48_FEHLERSTATUS_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Notabschaltung Unterspannung |
| 0x02 | Betriebsspannung niedrig, kritisch |
| 0x03 | Betriebsspannung niedrig |
| 0x04 | Degradation aufgrund Betriebsspannung niedrig |
| 0x05 | Degradation aufgrund Betriebsspannung hoch |
| 0x06 | Betriebsspannung hoch |
| 0x07 | Betriebsspannung hoch, kritisch |
| 0x08 | Notabschaltung Überspannung |
| 0xFF | ungültig |

### BAT48_FEHLERSTATUS_STROM

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Notabschaltung Ladeüberstrom |
| 0x02 | Ladestrom hoch, kritisch |
| 0x03 | Ladestrom hoch |
| 0x04 | Degradation aufgrund Ladestrom hoch |
| 0x05 | Degradation aufgrund Entladestrom hoch |
| 0x06 | Entladestrom hoch |
| 0x07 | Entladestrom hoch, kritisch |
| 0x08 | Notabschaltung Entladeüberstrom |
| 0xFF | ungültig |

### BAT_I_ERR_ST

| WERT | TEXT |
| --- | --- |
| 0x00 | normal operation |
| 0x01 | emergency shutdown charge |
| 0x02 | crictical current charge |
| 0x03 | high current charge |
| 0x04 | high current charge (derating) |
| 0x05 | high current discharge (derating) |
| 0x06 | high current discharge |
| 0x07 | crictical current discharge |
| 0x08 | emergency shutdown discharge |
| 0xFF | Invalid |

### BAT_U_ERR

| WERT | TEXT |
| --- | --- |
| 0x00 | normal operation |
| 0x01 | emergency shutdown low |
| 0x02 | crictical voltage low |
| 0x03 | low voltage |
| 0x04 | low voltage (derating) |
| 0x05 | high voltage (derating) |
| 0x06 | high voltage |
| 0x07 | crictical voltage high |
| 0x08 | emergency shutdown high |
| 0xFF | Invalid |

### BAT_T_ERR_ST

| WERT | TEXT |
| --- | --- |
| 0x00 | normal operation |
| 0x01 | emergency shutdown low temperature |
| 0x02 | Crictical temperature low |
| 0x03 | low temperature |
| 0x04 | low temperature (derating) |
| 0x05 | high temperature (derating) |
| 0x06 | high temperature |
| 0x07 | crictical temperature high |
| 0x08 | emergency shutdown high temperature |
| 0xFF | Invalid |

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
| F_HLZ_VIEW | ja |

### FEHLERSTATUS_TRENNSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschuss nach Plus |
| 0x03 | Fehler Leitungsunterbrechung |
| 0x04 | Plausibilitätsfehler, Relais klemmt offen |
| 0x05 | Plausibilitätsfehler, Relais klemmt geschlossen |
| 0xFF | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020200 | Energiesparmode aktiv | 0 | - |
| 0x020208 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020209 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02020A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02020B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02020C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF02 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x803400 | Überspannung erkannt | 1 | - |
| 0x803401 | Unterspannung erkannt | 1 | - |
| 0x803402 | Batt48: Batterieelektronik: Defekt | 0 | - |
| 0x803403 | Batt48: Grenzwertverletzung: Zellspannung zu tief | 0 | - |
| 0x803404 | Batt48: Grenzwertverletzung: Ladestrom zu hoch | 1 | - |
| 0x803405 | Batt48: Grenzwertverletzung: Entladestrom zu hoch | 0 | - |
| 0x803406 | Batt48: Grenzwertverletzung: Temperatur zu hoch | 0 | - |
| 0x803407 | Batt48: Notabschaltung: Zellspannung zu hoch | 0 | - |
| 0x803408 | Batt48: Notabschaltung: Zellspannung zu tief | 0 | - |
| 0x803409 | Batt48: Notabschaltung: Ladestrom zu hoch | 0 | - |
| 0x80340A | Batt48: Notabschaltung: Entladestrom zu hoch | 0 | - |
| 0x80340B | Batt48: Notabschaltung: Temperatur zu hoch | 0 | - |
| 0x80340C | Batt48: Zelldefekt (Spannungsdifferenz) | 0 | - |
| 0x80340D | Batt48: Zelldefekt - Entgasung | 0 | - |
| 0x80340E | Batt48: Sensorfehler elektrisch Polspannung - Messbereich unterschritten | 0 | - |
| 0x80340F | Batt48: Sensorfehler elektrisch Polspannung - Messbereich überschritten | 0 | - |
| 0x803410 | Batt48: Sensorfehler elektrisch Modul  - Messbereich unterschritten oder offene Leitung | 0 | - |
| 0x803411 | Batt48: Sensorfehler elektrisch Modul  - Messbereich überschritten | 0 | - |
| 0x803412 | Batt48: Sensorfehler elektrisch Zellspannung  - Messbereich unterschritten oder offene Leitung | 0 | - |
| 0x803413 | Batt48: Sensorfehler elektrisch Zellspannung  - Messbereich überschritten | 0 | - |
| 0x803414 | Batt48: Sensorfehler elektrisch Strom - Messbereich unterschritten oder offene Leitung | 0 | - |
| 0x803415 | Batt48: Sensorfehler elektrisch Strom - Messbereich überschritten | 0 | - |
| 0x803416 | Batt48: Sensorfehler elektrisch Temperatur - Messbereich unterschritten oder offene Leitung | 0 | - |
| 0x803417 | Batt48: Sensorfehler elektrisch Temperatur - Messbereich überschritten | 0 | - |
| 0x803418 | Batt48: Sensorfehler Plausibiltätsprüfung Modulspannung zur Summe der Zellspannungen | 0 | - |
| 0x803419 | Batt48: Tiefentladung | 0 | - |
| 0x80341A | Batt48: Trennelement klemmt offen - keine Ansteuerung des Trennelements möglich | 0 | - |
| 0x80341B | Batt48: Trennelement klemmt geschlossen - keine Ansterung des Trennelements möglich | 0 | - |
| 0x80341C | Batt48: Trennelement elektrischer Fehler - Betriebsspannung unterschritten oder offene Leitung | 0 | - |
| 0x80341D | Batt48: Trennelement elektrischer Fehler - Betriebsspannung überschritten | 0 | - |
| 0x80341E | Batt48: Zellen - Symmetrierung Fehler | 0 | - |
| 0x80341F | Batt48: Trennelement offen aufgrund Kommandierung Diagnose | 0 | - |
| 0x803420 | Batt48: Trennelement geschlossen aufgrund Kommandierung Diagnose | 0 | - |
| 0x803421 | Batt48: Trennelement offen permanent aufgrund Kommandierung Diagnose | 0 | - |
| 0x803422 | Batt48: Trennelement geschlossen permanent aufgrund Kommandierung Diagnose | 0 | - |
| 0x803423 | Batt48: Batterieloser Betrieb | 0 | - |
| 0x803424 | Batt48: Abschaltung aufgrund Crasherkennung KL30C | 0 | - |
| 0x803425 | Batt48: Trennschalter offen aufgrund fehlender LE2-CAN Kommunikation | 0 | - |
| 0x803426 | Batt48: Montagemodus 48V gesetzt | 0 | - |
| 0x803427 | Batt48: Grenzwertverletzung: Zellspannung zu hoch | 0 | - |
| 0x803428 | Batt48: Notabschaltung: Klemmenspannung zu hoch | 0 | - |
| 0x803429 | Batt48: Sensorfehler Plausibilitätsprüfung Modulspannung zu Klemmenspannung | 0 | - |
| 0x80342A | Batt48: Sensorfehler Plausibilitätsprüfung Zellspannungen | 0 | - |
| 0x80342B | Batt48: Sensorfehler Plausibilitätsprüfung Strom | 0 | - |
| 0x80342C | Batt48: Sensorfehler Plausibilitätsprüfung Temperatur | 0 | - |
| 0x80342D | Batt48: Trennelement elektrischer Fehler - Plausibiltät Spulenstrom | 0 | - |
| 0x80342E | Batt48: Trennelement schließen nicht möglich | 0 | - |
| 0x80342F | Batt48: interner Kommunikationsfehler | 0 | - |
| 0x803430 | Batt48: Zelldefekt (Innenwiderstand hoch) | 0 | - |
| 0x803431 | Batt48: Zelldefekt (Selbstentladung hoch) | 0 | - |
| 0x803432 | Batt48: AFE defect | 0 | - |
| 0x803433 | Batt48: AFE interner Spannungsversorgungsfehler | 0 | - |
| 0x803434 | Batt48: AFE Memory Fehler | 0 | - |
| 0x803435 | Batt48: Kühlleistung unzureichend | 1 | - |
| 0x803436 | Batt48: Grenzwertverletzung Temperatur-Derating | 0 | - |
| 0x803437 | Batt48: Zelldefekt - Tiefentladung | 0 | - |
| 0xC984FF | Batt48: Bus-Off-Fehler (LE2-CAN) | 1 | - |
| 0xC98BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xC99400 | Batt48: Timeout Fehler beim Empfang von CAN Botschaften (0x2B9) | 1 | - |
| 0xC99401 | Batt48: Ungültige Signalwerte beim Empfang von CAN Botschaften (0x2B9) | 1 | - |
| 0xC99402 | Batt48: Timeout Fehler beim Empfang von CAN Botschaften (0x3C) | 1 | - |
| 0xC99403 | Batt48: Ungültige Signalwerte beim Empfang von CAN Botschaften (0x3C) | 1 | - |
| 0xC99404 | Batt48: Ungültige Signalwerte beim Empfang von CAN Botschaften (0x44D) | 1 | - |
| 0xC99406 | Batt48: CRC- oder Alive-Fehler (0x3C) | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | FEHLER ZELLE 1 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0002 | FEHLER ZELLE 2 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0003 | FEHLER ZELLE 3 | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0004 | FEHLER ZELLE 4 | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0005 | FEHLER ZELLE 5 | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0006 | FEHLER ZELLE 6 | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0007 | FEHLER ZELLE 7 | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0008 | FEHLER ZELLE 8 | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0009 | FEHLER ZELLE 9 | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x000A | FEHLER ZELLE 10 | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x000B | FEHLER ZELLE 11 | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x000C | FEHLER ZELLE 12 | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x000D | FEHLER ZELLE 13 | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x000E | FEHLER ZELLE 14 | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x000F | FEHLER ZELLE 15 | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0010 | FEHLER ZELLE 16 | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0011 | FEHLER ZELLE 17 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0012 | FEHLER ZELLE 18 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0013 | FEHLER ZELLE 19 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0014 | FEHLER ZELLE 20 | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0015 | Temperatur Ausser Bereich Sensor 1 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0016 | Temperatur Ausser Bereich Sensor 2 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0017 | Temperatur Ausser Bereich Sensor 3 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0018 | Temperatur Ausser Bereich Sensor 4 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0019 | Temperatur Ausser Bereich Sensor 5 | 0/1 | High | 0x10 | - | - | - | - |
| 0x001A | Temperatur Ausser Bereich Sensor 6 | 0/1 | High | 0x20 | - | - | - | - |
| 0x001B | Temperatur Spreizung Fehler Sensor 1 | 0/1 | High | 0x01 | - | - | - | - |
| 0x001C | Temperatur Spreizung Fehler Sensor 2 | 0/1 | High | 0x02 | - | - | - | - |
| 0x001D | Temperatur Spreizung Fehler Sensor 3 | 0/1 | High | 0x04 | - | - | - | - |
| 0x001E | Temperatur Spreizung Fehler Sensor 4 | 0/1 | High | 0x08 | - | - | - | - |
| 0x001F | Temperatur Spreizung Fehler Sensor 5 | 0/1 | High | 0x10 | - | - | - | - |
| 0x0020 | Temperatur Spreizung Fehler Sensor 6 | 0/1 | High | 0x20 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4FFD | BETREIBSSTUNDENZAEHLER | h | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4FFE | TIME_SINCE_PWR_UP | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4FFF | BMS_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5000 | STROM_BATTERIE_WERT | A | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5001 | SPANNUNG_BATTERIE_WERT | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x5002 | TEMPERATUR_BATTERIE_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5003 | ZELLSPANNUNG_1_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5004 | ZELLSPANNUNG_2_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5005 | ZELLSPANNUNG_3_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5006 | ZELLSPANNUNG_4_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5007 | ZELLSPANNUNG_5_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5008 | ZELLSPANNUNG_6_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5009 | ZELLSPANNUNG_7_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500A | ZELLSPANNUNG_8_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500B | ZELLSPANNUNG_9_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500C | ZELLSPANNUNG_10_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500D | ZELLSPANNUNG_11_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500E | ZELLSPANNUNG_12_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x500F | ZELLSPANNUNG_13_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5010 | ZELLSPANNUNG_14_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5011 | ZELLSPANNUNG_15_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5012 | ZELLSPANNUNG_16_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5013 | ZELLSPANNUNG_17_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5014 | ZELLSPANNUNG_18_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5015 | ZELLSPANNUNG_19_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5016 | ZELLSPANNUNG_20_WERT | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5017 | ZELLSPANNUNG_NIEDRIGSTER_WERT | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5018 | ZELLSPANNUNG_HOECHSTER_WERT | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5034 | Bat_U_Err_St | 0-n | High | 0xFF | BAT_U_ERR | - | - | - |
| 0x5035 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x5036 | Bat_I_Err_st | 0-n | High | 0xFF | BAT_I_ERR_ST | - | - | - |
| 0x5037 | SNSR_I_ERR_ST | 0/1 | High | 0x01 | - | - | - | - |
| 0x5038 | Temperatur Sensor 1 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5039 | Temperatur Sensor 2 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503A | Temperatur Sensor 3 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503B | Temperatur Sensor 4 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503C | Temperatur Sensor 5 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503D | Temperatur Sensor 6 | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503E | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x503F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5040 | BAT_T_ERR_ST | 0-n | High | 0xFF | Bat_T_Err_st | - | - | - |
| 0x5041 | RELAIS_ZUSTAND | 0-n | High | 0xFF | RELAIS_ZUSTAND | - | - | - |
| 0x5042 | RELAIS_OEFFNUNGSANFORDERUNG | 0-n | High | 0xFF | RELAIS_OEFFNUNGSZUSTAND | - | - | - |
| 0x5043 | RELAIS_FEHLERZUSTAND | 0-n | High | 0xFF | RELAIS_FEHLERZUSTAND | - | - | - |
| 0x5046 | RELAIS_ANZAHL_SCHALTVORGAENGE | Counts | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5047 | RELAIS_ANZAHL_SCHALTVORGAENGE_UNDER_LOAD | Counts | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5048 | SOC | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5049 | SOH | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x020001 | Batt48: Erster Temperatursensor ausgefallen | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

### RELAIS_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | normal_operation |
| 1 | short_circuit_to_ground |
| 2 | short_circuit_to_battery |
| 3 | open_cicuit |
| 4 | rationality_error_relay_stuck_open |
| 5 | rationality_error_relay_stuck_closed |
| 15 | invalid |
| 0xFF | Wert ungültig |

### RELAIS_OEFFNUNGSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | no_request |
| 1 | Time |
| 2 | SoC |
| 3 | critical_error |
| 4 | emergency_notice |
| 5 | emergency_disconnect |
| 15 | invalid |

### RELAIS_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | OPEN_AUTO_CONNECTBL |
| 0x01 | OPEN_COUPBL |
| 0x02 | OPEN_FORCED_CONNECTBL |
| 0x03 | OPEN_PREV_CONNCT_ERROR |
| 0x04 | OPEN_PREV_CONNCT_CRASH |
| 0x05 | OPEN_BY_DIAG_TEMP |
| 0x06 | OPEN_BY_DIAG_PER |
| 0x07 | CLOSED |
| 0x08 | CLOSED_BY_DIAG_TEMP |
| 0x09 | CLOSED_BY_DIAG_PER |
| 0xFF | Invalid |

### RELAY_CONTROL_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0 | Standard Curve |
| 1 | Two Step Curve |
| 2 | Linear Curve |

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

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | 8 Byte Seriennummer |
| STAT_NULL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Puffervariable, die notwendig ist, da dieselbe DID für Lesen- und Schreiben-Job verwendet wird |

### RES_0X4140_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_WERT | % | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Stromkalibrierungsfaktor |
| STAT_NULL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Puffervariable, die notwendig ist, da dieselbe DID für Lesen- und Schreiben-Job verwendet wird |

### RES_0X4250_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_COOLING_A_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Parameter: Temperatur bei 0% Kühlanforderung.  |
| STAT_T_COOLING_B_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Parameter: Temperatur bei 100% Kühlanforderung |
| STAT_T_COOLING_C_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Parameter: Temperatur bei der Kühlanforderung auf 0% zurückgesetzt wird |
| STAT_DGB_VALUE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Derzeit unbekannt. Wird nachgetragen |

### RES_0X4310_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Faktor für Linkspannungskalibrierung in 1/10% |
| STAT_NULL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Puffervariable, die notwendig ist, da dieselbe DID für Lesen- und Schreiben-Job verwendet wird |

### RES_0XAE20_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRENNELEMENT | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_TRENNELEMENT_BAT48 | - | - | - | Aktueller Status Trennelement BAT48 |

### RES_0XD08C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_WERT | V | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle Polspannung 48V Speicher |
| STAT_STROM_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Aktueller Strom des 48V Speicher:  negativ = laden;  positiv = entladen |
| STAT_TEMPERATUR_WERT | °C | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Aktuelle höchste Zellentemperatur des 48V Speicher |
| STAT_ENERGIEDURCHSATZ_WERT | kWh | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | Energiedurchsatz über Lebenszeit (Auflösung 200 Watt) |
| STAT_LADEZAEHLER_GESAMT_WERT | Ah | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Ladung über Lebenszeit |
| STAT_ENTLADEZAEHLER_GESAMT_WERT | Ah | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Entladung über Lebenszeit |
| STAT_LADEZUSTAND_BILANZ_WERT | Ah | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Bilanz = Ladezähler minus Entladezähler |
| STAT_SPEICHER_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Aktuell |
| STAT_SPEICHER_SOC_QUALITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC Qualitätswert:  0% = ungenau;  100% = sehr genau |
| STAT_PACKSPANNUNG_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle Packspannung 48V Speicher |
| STAT_NENNKAPAZITAET_WERT | Ah | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Nennkapazität der 48V-Batterie |
| STAT_INNENWIDERSTAND_INITIAL_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert BOL |
| STAT_INNENWIDERSTAND_AKTUELL_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert aktuell |
| STAT_INNENWIDERSTAND_AKTUELL_QUALITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Innenwiderstanswert aktuell Qualitätswert:  0% = ungenau;  100% = sehr genau |
| STAT_KAPAZITAET_IST_WERT | Ah | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Istkapazität der 48V-Batterie: Die maximal verfügbare Kapazität eines vollgeladenen Speichers |
| STAT_KAPAZITAET_AKTUELL_WERT | Ah | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Aktuelle Kapazität der 48V-Batterie: Die aktuelle verfügbare Ladungsmenge eines Speichers in Ah |
| STAT_KAPAZITAET_IST_QUALITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | KAPAZITAET_IST Qualitätswert:  0% = sehr genau;  100% = ungenau |
| STAT_KAPAZITAET_AKTUELL_QUALITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | KAPAZITAET_AKTUELL Qualitätswert:  0% = sehr genau;  100% =ungenau |
| STAT_SPEICHER_SOH_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOH State of Health: Alterungszustand der Batterie 100%: Neuwertig  |
| STAT_SPEICHER_SOH_QUALITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOH Qualitätswert:  0% = ungenau;  100% = sehr genau |

### RES_0XD4CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_1_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_2_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_3_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_4_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_5_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_6_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_7_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_8_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_9_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_10_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_11_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_12_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_13_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_14_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_15_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_16_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_17_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_18_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_19_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |
| STAT_ZELLSPANNUNG_20_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ZELLSPANNUNG |

### RES_0XD6BF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLTEMPERATUR_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |
| STAT_ZELLTEMPERATUR_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |
| STAT_ZELLTEMPERATUR_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |
| STAT_ZELLTEMPERATUR_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |
| STAT_ZELLTEMPERATUR_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |
| STAT_ZELLTEMPERATUR_6_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur Zelle  |

### RES_0XD6C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MONTAGEMODE | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Inaktiv 0x01: Aktiv |

### RES_0XD6E9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLER_SPANNUNG | 0-n | high | unsigned char | - | BAT48_FEHLERSTATUS_SPANNUNG | - | - | - | Batt48 Fehlerstatus Spannung |
| STAT_FEHLER_STROM | 0-n | high | unsigned char | - | BAT48_FEHLERSTATUS_STROM | - | - | - | Batt48 Fehlerstatus Strom |
| STAT_FEHLER_TEMPERATUR | 0-n | high | unsigned char | - | STAT_FEHLER_TEMPERATUR | - | - | - | Batt48 Fehlerstatus Temperatur |

### RES_0XDA9E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTLADESCHLUSSSPANNUNG_WERT | V | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | ENTLADESCHLUSSSPANNUNG der Bat48 |
| STAT_LADESCHLUSSSPANNUNG_WERT | V | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | LADESCHLUSSSPANNUNG der Bat48 |
| STAT_ENTLADESTROM_MAX_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | ENTLADESTROM MAX der Bat48 |
| STAT_LADESTROM_MAX_WERT | A | high | unsigned char | - | - | 4.0 | 1.0 | 0.0 | LADESTROM MAX der Bat48 |
| STAT_TEMPERATUR_MAX_WERT | ° | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | TEMPERATUR MAX der Bat48 |
| STAT_MAXIMAL_ERREICHTE_TEMPERATUR_UEBER_LEBENSDAUER_WERT | ° | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Maximale Temperatur der Batterie, die über Lebensdauer je erreicht wurde |
| STAT_MAXIMAL_ERREICHTER_LADESTROM_UEBER_LEBENSDAUER_WERT | A | high | unsigned char | - | - | 4.0 | 1.0 | 0.0 | Maximaler Ladestrom der Batterie, der über Lebensdauer je erreicht wurde |
| STAT_MAXIMAL_ERREICHTER_ENTLADESTROM_UEBER_LEBENSDAUER_WERT | A | high | unsigned char | - | - | 4.0 | 1.0 | 0.0 | Maximaler Entladestrom der Batterie, der über Lebensdauer je erreicht wurde |
| STAT_MAXIMAL_ERREICHTE_BATTERIESPANNUNG_UEBER_LEBENSDAUER_WERT | V | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Maximale Spannung der Batterie, die über Lebensdauer je erreicht wurde |
| STAT_MINIMAL_ERREICHTE_BATTERIESPANNUNG_UEBER_LEBENSDAUER_WERT | V | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Minimale Spannung der Batterie, die über Lebensdauer je erreicht wurde |

### RES_0XDA9F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEGRADATIONSFAKTOR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt den aktuellen Strom-DEGRADATIONSFAKTOR: 0%: keine Degradation 100%: 100% Degradation |
| STAT_MAX_LADESTROM_KURZ_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Ladestrom bei vorgegebener Spannung (kurz) |
| STAT_MAX_LADESTROM_MITTEL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Ladestrom bei vorgegebener Spannung (mittel) |
| STAT_MAX_LADESTROM_LANG_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Ladestrom bei vorgegebener Spannung (lang) |
| STAT_MAX_LADESPANNUNG_KURZ_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende maximale Ladespannung (kurz) |
| STAT_MAX_LADESPANNUNG_MITTEL_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende maximale Ladespannung (mittel) |
| STAT_MAX_LADESPANNUNG_LANG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende maximale Ladespannung (lang) |
| STAT_MAX_ENTLADESTROM_KURZ_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Entladestrom bei vorgegebenem Spannungseinbruch (kurz) |
| STAT_MAX_ENTLADESTROM_MITTEL_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Entladestrom bei vorgegebenem Spannungseinbruch (mittel) |
| STAT_MAX_ENTLADESTROM_LANG_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | maximaler Entladestrom bei vorgegebenem Spannungseinbruch (lang) |
| STAT_MIN_ENTLADESPANNUNG_KURZ_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende minimale Entladespannung (kurz) |
| STAT_MIN_ENTLADESPANNUNG_MITTEL_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende minimale Entladespannung (mittel) |
| STAT_MIN_ENTLADESPANNUNG_LANG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | tatsächlich auftretende minimale Entladespannung (lang) |
| STAT_MAX_LADESPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Spannung von Bat48 bei der Ladung |
| STAT_MIN_ENTLADESPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | minimale Spannung von Bat48 bei der Entladung |
| STAT_LADEPULSDAUER_KURZ_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des kurzen Ladepulses bis zum Erreichen der maximalen Ladespannung  |
| STAT_LADEPULSDAUER_MITTEL_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des mittleren Ladepulses bis zum Erreichen der maximalen Ladespannung |
| STAT_LADEPULSDAUER_LANG_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des langen Ladepulses bis zum Erreichen der maximalen Ladespannung |
| STAT_ENTLADEPULSDAUER_KURZ_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des kurzen Entadepulses bis zum Erreichen der minimalen Entladespannung  |
| STAT_ENTLADEPULSDAUER_MITTEL_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des mittleren Entadepulses bis zum Erreichen der minimalen Entladespannung |
| STAT_ENTLADEPULSDAUER_LANG_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des langen Entadepulses bis zum Erreichen der minimalen Entladespannung |

### RES_0XDAB2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA_LETZTER_SPANNUNGSEINBRUCH_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannungseinbruch beim letzten Motorstart (Warmstart) |
| STAT_MSA_LETZTER_STROMPULS_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Stromeinbruch beim letzten Motorstart (Warmstart) |
| STAT_MSA_LETZTER_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Motorstart (Warmstart) |
| STAT_MSA_LETZTE_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur beim letzten Motorstart (Warmstart) |
| STAT_MSA_SCHLECHTESTER_SPANNUNGSEINBRUCH_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlechtester Spannungseinbruch aller Motorstarts (Warmstart) |
| STAT_MSA_SCHLECHTESTER_SPANNUNGSEINBRUCH_STROMPULS_WERT | A | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Stromeinbruch beim Motorstart mit schlechtestem Spannungseinbruch (Warmstart) |
| STAT_MSA_SCHLECHTESTER_SPANNUNGSEINBRUCH_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Motorstart mit schlechtestem Spannungseinbruch (Warmstart) |
| STAT_MSA_SCHLECHTESTER_SPANNUNGSEINBRUCH_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur beim Motorstart mit schlechtestem Spannungseinbruch (Warmstart) |

### RES_0XDAF9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_UMSCHALTEN_TRENNELEMENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Umschaltungen (gibt an, wie oft das Trennelement umgeschaltet worden ist) |
| STAT_ANZAHL_UMSCHALTEN_TRENNELEMENT_UNTER_LAST_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Umschaltungen unter Last (wie oft das Trennelement unter Last umgeschaltet worden ist) |
| STAT_FEHLERSTATUS_TRENNELEMENT | 0-n | high | unsigned char | - | FEHLERSTATUS_TRENNSCHALTER | - | - | - | Fehlerstatus Trennelement |
| STAT_TRENNELEMENT | 0-n | high | unsigned char | - | TAB_STAT_TRENNELEMENT_BAT48 | - | - | - | Aktueller Status Trennelement BAT48 |
| STAT_ANZAHL_UMSCHALTEN_TRENNELEMENT_DIAGNOSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Diagnose-Umschaltungen ( wie oft das Trennelement via Diagnose umgeschaltet worden ist) |
| STAT_ANZAH_NOTOEFFNUNGEN_TRENNELEMENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, wie häufig die Batterie selbständig das Trennelement geöffnet hat |

### RES_0XE2ED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENWIDERSTAND_INITIAL_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert BOL |
| STAT_INNENWIDERSTAND_AKTUELL_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert aktuell |
| STAT_INNENWIDERSTAND_VOR_2_WOCHEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 2 Wochen |
| STAT_INNENWIDERSTAND_VOR_4_WOCHEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 4 Wochen |
| STAT_INNENWIDERSTAND_VOR_6_WOCHEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 6 Wochen |
| STAT_INNENWIDERSTAND_VOR_3_MONATEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 3 Monaten |
| STAT_INNENWIDERSTAND_VOR_6_MONATEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 6 Monaten |
| STAT_INNENWIDERSTAND_VOR_9_MONATEN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 9 Monaten |
| STAT_INNENWIDERSTAND_VOR_1_JAHR_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 1 Jahr |
| STAT_INNENWIDERSTAND_VOR_2_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 2 Jahren |
| STAT_INNENWIDERSTAND_VOR_3_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 3 Jahren |
| STAT_INNENWIDERSTAND_VOR_4_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 4 Jahren |
| STAT_INNENWIDERSTAND_VOR_5_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 5 Jahren |
| STAT_INNENWIDERSTAND_VOR_6_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 6 Jahren |
| STAT_INNENWIDERSTAND_VOR_7_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 7 Jahren |
| STAT_INNENWIDERSTAND_VOR_8_JAHREN_WERT | mOhm | high | unsigned char | - | - | 0.25 | 1.0 | 0.0 | Innenwiderstandwert vor 8 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_AKTUELL_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes aktuell |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_2_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 2 Wochen |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_4_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 4 Wochen |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_6_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 6 Wochen |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_3_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 3 Monaten |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_6_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 6 Monaten |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_9_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 9 Monaten |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_1_JAHR_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 1 Jahr |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_2_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 2 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_3_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 3 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_4_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 4 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_5_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 5 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_6_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 6 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_7_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 7 Jahren |
| STAT_INNENWIDERSTAND_QUALITAET_VOR_8_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität des Innenwiderstandwertes vor 8 Jahren |
| STAT_ISTKAPAZITAET_AKTUELL_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität aktuell |
| STAT_ISTKAPAZITAET_VOR_2_WOCHEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 2 Wochen |
| STAT_ISTKAPAZITAET_VOR_4_WOCHEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 4 Wochen |
| STAT_ISTKAPAZITAET_VOR_6_WOCHEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 6 Wochen |
| STAT_ISTKAPAZITAET_VOR_3_MONATEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 3 Monaten |
| STAT_ISTKAPAZITAET_VOR_6_MONATEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 6 Monaten |
| STAT_ISTKAPAZITAET_VOR_9_MONATEN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 9 Monaten |
| STAT_ISTKAPAZITAET_VOR_1_JAHR_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 1 Jahr |
| STAT_ISTKAPAZITAET_VOR_2_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 2 Jahren |
| STAT_ISTKAPAZITAET_VOR_3_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 3 Jahren |
| STAT_ISTKAPAZITAET_VOR_4_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 4 Jahren |
| STAT_ISTKAPAZITAET_VOR_5_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 5 Jahren |
| STAT_ISTKAPAZITAET_VOR_6_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 6 Jahren |
| STAT_ISTKAPAZITAET_VOR_7_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 7 Jahren |
| STAT_ISTKAPAZITAET_VOR_8_JAHREN_WERT | Ah | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Istkapazität vor 8 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_AKTUELL_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität aktuell |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_2_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 2 Wochen |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_4_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 4 Wochen |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_6_WOCHEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 6 Wochen |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_3_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 3 Monaten |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_6_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 6 Monaten |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_9_MONATEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 9 Monaten |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_1_JAHR_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 1 Jahr |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_2_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 2 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_3_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 3 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_4_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 4 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_5_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 5 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_6_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 6 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_7_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 7 Jahren |
| STAT_ISTKAPAZITAET_QUALITAET_VOR_8_JAHREN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualität der Istkapazität vor 8 Jahren |
| STAT_SOC_AKTUELL_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC Aktuell |
| STAT_SOC_VOR_1_TAG_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 1 Tag |
| STAT_SOC_VOR_2_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 2 Tagen |
| STAT_SOC_VOR_3_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 3 Tagen |
| STAT_SOC_VOR_4_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 4 Tagen |
| STAT_SOC_VOR_5_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 5 Tagen |
| STAT_SOC_VOR_6_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 6 Tagen |
| STAT_SOC_VOR_7_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 7 Tagen |
| STAT_SOC_VOR_8_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 8 Tagen |
| STAT_SOC_VOR_9_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 9 Tagen |
| STAT_SOC_VOR_10_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | SOC vor 10 Tagen |
| STAT_SOC_QUALITAET_AKTUELL_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC aktuell |
| STAT_SOC_QUALITAET_VOR_1_TAG_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 1 Tag |
| STAT_SOC_QUALITAET_VOR_2_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC  vor 2 Tagen |
| STAT_SOC_QUALITAET_VOR_3_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 3 Tagen |
| STAT_SOC_QUALITAET_VOR_4_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 4 Tagen |
| STAT_SOC_QUALITAET_VOR_5_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 5 Tagen |
| STAT_SOC_QUALITAET_VOR_6_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 6 Tagen |
| STAT_SOC_QUALITAET_VOR_7_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 7 Tagen |
| STAT_SOC_QUALITAET_VOR_8_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 8 Tagen |
| STAT_SOC_QUALITAET_VOR_9_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 9 Tagen |
| STAT_SOC_QUALITAET_VOR_10_TAGEN_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | Qualitätswert des SOC vor 10 Tagen |

### RES_0XE2EE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LADUNGSBEREICH_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 0 Ah und 1.1 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 1.1 Ah und 2.2 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 2.2 Ah und 3.3 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 3.3 Ah und 5.5 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 5.5 Ah und 7.7 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_6_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge zwischen 7.7 Ah und 9.9 Ah |
| STAT_ZAEHLER_LADUNGSBEREICH_7_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Ladungsmenge größer 9.9 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 0 Ah und 1.1 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 1.1 Ah und 2.2 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 2.2 Ah und 3.3 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 3.3 Ah und 5.5 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 5.5 Ah und 7.7 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_6_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge zwischen 7.7 Ah und 9.9 Ah |
| STAT_ZAEHLER_ENTLADUNGSBEREICH_7_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit für Entladungsmenge größer 9.9 Ah |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_1_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur kleiner als 0°C |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_2_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur zwischen 0°C und 20°C |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_3_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur zwischen 20°C und 40°C |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_4_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur zwischen 40°C und 55°C |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_5_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur zwischen 55°C und 70°C |
| STAT_LADUNGSZAEHLER_TEMPERATURBEREICH_6_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Ladungszähler, wenn Batterietemperatur größer als 70°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_1_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur kleiner als 0°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_2_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur zwischen 0°C und 20°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_3_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur zwischen 20°C und 40°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_4_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur zwischen 40°C und 55°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_5_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur zwischen 55°C und 70°C |
| STAT_ENTLADUNGSZAEHLER_TEMPERATURBEREICH_6_WERT | Ah | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Entladungszähler, wenn Batterietemperatur größer als 70°C |
| STAT_DAUER_SOC_1_TEMPERATUR_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_1_TEMPERATUR_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_1_TEMPERATUR_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_1_TEMPERATUR_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_1_TEMPERATUR_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_1_TEMPERATUR_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 0% und 10% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_2_TEMPERATUR_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20 % UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_2_TEMPERATUR_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_2_TEMPERATUR_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_2_TEMPERATUR_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_2_TEMPERATUR_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_2_TEMPERATUR_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 10% und 20% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_3_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_3_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_3_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_3_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_3_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_3_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 20% und 30% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_4_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_4_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_4_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_4_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_4_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_4_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 30% und 40% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_5_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_5_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_5_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_5_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_5_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_5_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 40% und 50% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_6_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_6_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_6_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_6_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_6_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_6_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 50% und 60% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_7_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_7_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_7_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_7_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_7_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_7_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 60% und 70% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_8_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_8_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_8_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_8_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_8_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_8_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 70% und 80% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_9_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_9_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_9_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_9_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_9_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_9_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 80% und 90% UND Temperatur größer 70°C |
| STAT_DAUER_SOC_10_TEMPERATUR_1_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur kleiner 0°C |
| STAT_DAUER_SOC_10_TEMPERATUR_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur zwischen 0°C und 20°C |
| STAT_DAUER_SOC_10_TEMPERATUR_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur zwischen 20°C und 40°C |
| STAT_DAUER_SOC_10_TEMPERATUR_4_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur zwischen 40°C und 55°C |
| STAT_DAUER_SOC_10_TEMPERATUR_5_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur zwischen 55°C und 70°C |
| STAT_DAUER_SOC_10_TEMPERATUR_6_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer im Bereich SOC zwischen 90% und 100% UND Temperatur größer 70°C |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms kleiner 10 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 10 A und 20 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 20 A und 50 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 50 A und 100 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 100 A und 200 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_6_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 200 A und 500 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_7_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms zwischen 500 A und 1400 A |
| STAT_ZAEHLER_STROM_BEIM_SCHALTEN_8_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Betrag des Stroms größer 1400 A |
| STAT_DEGRADATION_TRENNELEMENT_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement zwischen 0s und 10s |
| STAT_DEGRADATION_TRENNELEMENT_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement zwischen 10s und 30s |
| STAT_DEGRADATION_TRENNELEMENT_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement zwischen 30s und 90s |
| STAT_DEGRADATION_TRENNELEMENT_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement zwischen 90s und 180s |
| STAT_DEGRADATION_TRENNELEMENT_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement länger als 180s |
| STAT_DEGRADATION_TEMPERATUR_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Temperatur zwischen 0s und 10s |
| STAT_DEGRADATION_TEMPERATUR_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Temperatur zwischen 10s und 30s |
| STAT_DEGRADATION_TEMPERATUR_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Temperatur zwischen 30s und 90s |
| STAT_DEGRADATION_TEMPERATUR_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Temperatur zwischen 90s und 180s |
| STAT_DEGRADATION_TEMPERATUR_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Temperatur länger als 180s |
| STAT_DEGRADATION_TRENNELEMENT_UND_TEMPERATUR_1_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement und Temperatur zwischen 0s und 10s |
| STAT_DEGRADATION_TRENNELEMENT_UND_TEMPERATUR_2_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement und Temperatur zwischen 10s und 30s |
| STAT_DEGRADATION_TRENNELEMENT_UND_TEMPERATUR_3_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement und Temperatur zwischen 30s und 90s |
| STAT_DEGRADATION_TRENNELEMENT_UND_TEMPERATUR_4_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement und Temperatur zwischen 90s und 180s |
| STAT_DEGRADATION_TRENNELEMENT_UND_TEMPERATUR_5_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeitszähler: Degradation Trennelement und Temperatur länger als 180s |

### RES_0XE3A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_FEHLER_KOMMUNIKATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Fehler an der Kommunikationsschnittstelle (CAN und intern) |
| STAT_ANZAHL_WATCHDOGRESETS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Watchdogresets |
| STAT_ANZAHL_TIEFENTLADUNGEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Tiefentladungen |
| STAT_ANZAHL_BMS_RESET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Resets des BMS |
| STAT_ZEIT_LETZTER_BMS_RESET_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit des letzten BMS Reset |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNUNGSWUNSCH_T_SET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Setzbedingung (Temperatur) für Öffnungswunsch;  Defaultwert 70°C |
| STAT_OEFFNUNGSWUNSCH_T_RESET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rücksetzbedingung (Temperatur) für Öffnungswunsch;  Defaultwert 65°C |
| STAT_OEFFNUNGSWUNSCH_TIMING_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Öffnungswunsch ausgeführt wird;  Defaultwert 35s |
| STAT_ABSCHALTANKUENDIGUNG_T_SET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Setzbedingung (Temperatur) für Abschaltankündigung;  Defaultwert 75°C |
| STAT_ABSCHALTANKUENDIGUNG_T_RESET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rücksetzbedingung (Temperatur) für Abschaltankündigung;  Defaultwert 70°C |
| STAT_ABSCHALTANKUENDIGUNG_TIMING_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Abschaltankü. ausgeführt wird;  Defaultwert 35s |
| STAT_NOTABSCHALTUNG_T_SET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Setzbedingung (Temperatur) für Notabschaltung;  Defaultwert 80°C |
| STAT_NOTABSCHALTUNG_T_RESET_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rücksetzbedingung (Temperatur) für Notabschaltung;  Defaultwert 75°C |
| STAT_NOTABSCHALTUNG_TIMING_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer, wie lange Setzbedingung anliegen muss, bis Notabschaltung ausgeführt wird;  Defaultwert 35s |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _MARQUARDT_PRUEFBYTE | 0x4000 | STAT_PRUEFBYTE_DATA | Prüfbyte 1 bis 6 | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _MARQUARDT_PRUEFBYTE_1 | 0x4001 | - | Schreibt das Prüfbyte 1 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4001_D | - |
| _MARQUARDT_PRUEFBYTE_2 | 0x4002 | - | Schreibt das Prüfbyte 2 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| _MARQUARDT_PRUEFBYTE_3 | 0x4003 | - | Schreibt das Prüfbyte 3 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4003_D | - |
| _MARQUARDT_PRUEFBYTE_4 | 0x4004 | - | Schreibt das Prüfbyte 4 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4004_D | - |
| _MARQUARDT_PRUEFBYTE_5 | 0x4005 | - | Schreibt das Prüfbyte 5 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4005_D | - |
| _MARQUARDT_PRUEFBYTE_6 | 0x4006 | - | Schreibt das Prüfbyte 6 (MQ Produktionsprozess). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006_D | - |
| _MARQUARDT_SERIENNUMMER | 0x4010 | - | Schreibt/liest die Marquardt Seriennummer. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4010_D | RES_0x4010_D |
| _KALIBRIERUNG_STROM | 0x4140 | - | Stromkalibrierungsfaktor intern BMS | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4140_D | RES_0x4140_D |
| _STATUS_STROM_GEFILTERT | 0x4240 | STAT_STROM_WERT | gefilterter Strom am Shunt | mA | - | High | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _COOLING_DEMAND_PARAM | 0x4250 | - | Parameter der Kühlanforderung der BAT48 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4250_D | RES_0x4250_D |
| _STEUERN_AFE_COM_ERR_IGNORIEREN | 0x4260 | - | Aufgrund Unterspannung (<24V) arbeitet die interne Elektronik der Batterie nicht mehr. Ein Schließen des Relais wird daraufhin verboten. Über diesen Job kann das Verbot ignoriert werden und das Relais über den Steuern-Job geschlossen kommandiert werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4260_D | - |
| _SHORT_CIRCUIT_COUNTER_RESET | 0x4270 | - | Setzt den Zähler für die Anzahl der Kurzschlüsse zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4270_D | - |
| _BALANCING_CONTROL | 0x4280 | - | Mit diesen Job kann jeder Balancing Kanal kann für 30s manuell aktiviert werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4280_D | - |
| _CURRENT_REDUNDANT | 0x4290 | STAT_CURRENT_WERT | Strommessung INA270A | A | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PARAMETER_RELAY | 0x4300 | - | Schreibt Paramter für Ansteuerkurven des Relaisspulenstroms | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4300_D | - |
| _CELL_DEFECT_RESET | 0x430A | - | Setzt den Zelldefekt-Fehler zurück, der Batterie unbrauchbar machen würde | - | - | - | - | - | - | - | - | - | 2E | ARG_0x430A_D | - |
| _ENABLE_DEBUG_MESSAGE | 0x430B | - | This job enables the CAN debug messages to transmit detailed cell voltage and temperature information | - | - | - | - | - | - | - | - | - | 2E | ARG_0x430B_D | - |
| _KALIBRIERUNG_LINKSPANNUNG | 0x4310 | - | Faktor zur Kalibirierung der Linkspannung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4310_D | RES_0x4310_D |
| _LINKSPANNUNG_GEFILTERT | 0x4311 | STAT_LINKSPANNUNG_WERT | Linkspannung | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMMANDIERUNG_TRENNELEMENT_48V | 0xAE20 | - | Kommandierung Trennelement des 48V Speicher. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE20_R | RES_0xAE20_R |
| MESSWERTE_BAT48 | 0xD08C | - | Messwerte 48V Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD08C_D |
| ZELLSPANNUNGEN_BAT48 | 0xD4CF | - | ZELLSPANNUNGEN_BAT48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD4CF_D |
| ZELLTEMPERATUREN_BAT48 | 0xD6BF | - | ZELLTEMPERATUREN_BAT48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6BF_D |
| 48V_MONTAGEMODE | 0xD6C4 | - | 48V_MONTAGEMODE | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD6C4_D | RES_0xD6C4_D |
| BAT48_FEHLERSTATUS | 0xD6E9 | - | BAT48_FEHLERSTATUS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6E9_D |
| BAT48_BETRIEBSGRENZEN | 0xDA9E | - | BAT48_BETRIEBSGRENZEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA9E_D |
| BAT48_LEISTUNGSPROGNOSE | 0xDA9F | - | BAT48_LEISTUNGSPROGNOSE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA9F_D |
| BAT48_WECHSEL_REGISTRIEREN | 0xDAB1 | - | BAT48_WECHSEL_REGISTRIEREN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAB1_D | - |
| BAT48_MSA | 0xDAB2 | - | Messwerte während Motorstart: minimale Spannung, max. Strom usw.(Warmstart) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB2_D |
| STATUS_TRENNELEMENT_BAT48 | 0xDAF9 | - | Status Trennelemnt 48V Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAF9_D |
| 30C_CRASH_ERKENNUNG | 0xDAFA | - | CRASH_ERKENNUNG | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAFA_D | - |
| BAT48_HISTORIENSPEICHER | 0xE2ED | - | Historienspeicher der 48V Batterie  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2ED_D |
| BAT48_HISTOGRAMME | 0xE2EE | - | Histogramme der 48V Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2EE_D |
| BAT48_ZAEHLER | 0xE3A5 | - | Enthält Zähler der BAT48 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3A5_D |
| _TEMPERATURSCHWELLEN | 0xF000 | - | Schreibt Temperaturschwellen für Öffnungswunsch, Abschaltankündigung und Notabschaltung der Batterie | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STAT_FEHLER_TEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Temperatur niedrig, extrem |
| 0x02 | Temperatur niedrig, kritisch |
| 0x03 | Temperatur niedrig |
| 0x04 | Degredation aufgrund Temperatur niedrig |
| 0x05 | Degredation aufgrund Temperatur hoch |
| 0x06 | Temperatur hoch |
| 0x07 | Temperatur hoch, kritisch |
| 0x08 | Notabschaltung aufgrund Übertemperatur |
| 0xFF | ungültig |

### TAB_BATT48_REG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Neue Batterie registrieren |
| 0x02 | Alte Batterie, gelernte Werte rücksetzten |
| 0xFF | ungültig |

### TAB_STAT_AKT_GRUND_OEFNG

| WERT | TEXT |
| --- | --- |
| 0 | Fehler |
| 1 | Crash |
| 2 | Kommandierung |
| 0xFF | Ungueltig |

### TAB_STAT_TRENNELEMENT_BAT48

| WERT | TEXT |
| --- | --- |
| 0 | geschlossen |
| 1 | offen, schließen unproblematisch |
| 2 | offen, schließen nicht möglich aufgrund Fehler |
| 3 | offen, schließen nicht möglich aufgrund Crash |
| 4 | reserved |
| 7 | Kommandierung temporär offen per Diagnose (bis zum nächsten Klemmenwechsel) |
| 8 | Kommandierung temporär geschlossen per Diagnose (bis zum nächsten Klemmenwechsel) |
| 9 | Kommandierung permanent offen per Diagnose (flash-resistent) |
| 10 | Kommandierung persistent geschlossen per Diagnose (flash-resistent) |
| 255 | UNGUELTIG |

### TEMPERATURZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Temperatur unter -45°C |
| 1 | Temperatur zwichen -45°C und 40°C |
| 2 | Temperatur zwichen -40°C und -30°C |
| 3 | Temperatur zwichen -30°C und -20°C |
| 4 | Temperatur zwichen -20°C und -10°C |
| 5 | Temperatur zwichen -10°C und 0°C |
| 6 | Temperatur zwichen 0°C und 10°C |
| 7 | Temperatur zwichen10°C und 20°C |
| 8 | Temperatur zwichen 20°C und 30°C |
| 9 | Temperatur zwichen 30°C und 40°C |
| 10 | Temperatur zwichen 40°C und 55°C |
| 11 | Temperatur zwichen 55°C und 70°C |
| 12 | Temperatur zwichen 70°C und 75°C |
| 13 | Temperatur zwichen 80°C und 100°C |
| 14 | Temperatur groesser 100°C |
| 15 | Invalid |

### TAB_0X5035

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 |

### TAB_0X503E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A |

### TAB_0X503F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### ZELLZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Zelle unter 1.05V |
| 1 | Zelle zwischen 1.05V und 1.2V |
| 2 | Zelle zwischen 1.2V und 1.3V |
| 3 | Zelle zwischen 1.3V und 1.5V |
| 4 | Zelle zwischen 1.5V und 1.9V |
| 5 | Zelle zwischen 1.9V und 2.0V |
| 6 | Zelle zwischen 2.0V und 2.1V |
| 7 | Zelle zwischen 2.1V und 2.2V |
| 8 | Zelle zwischen 2.2V und 2.3V |
| 9 | Zelle zwischen 2.3V und 2.4V |
| 10 | Zelle zwischen 2.4V und 2.5V |
| 11 | Zelle zwischen 2.5V und 2.7V |
| 12 | Zelle zwischen 2.7V und 3.0V |
| 13 | Zelle ueber 3.0V |
| 14 | - |
| 15 | Invalid |
