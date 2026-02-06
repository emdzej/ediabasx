# CVM_G23.prg

## General

|  |  |
| --- | --- |
| File | CVM_G23.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 87 |
| Origin | BMW EK-521 Michael_Thomas |
| Revision | 0.001 |
| Author | HELBAKO-GMBH EK-521 Glissmann |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio Verdeck Modul |  |  |
| ORIGIN | string | BMW EK-521 Michael_Thomas |  |  |
| REVISION | string | 0.001 |  |  |
| AUTHOR | string | HELBAKO-GMBH EK-521 Glissmann |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.984 |  |  |
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

### ARG_0X4050_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL_V1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| VENTIL_V2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| VENTIL_V3 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| VENTIL_V4 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| RELAIS_PM1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| RELAIS_PM2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| VERRIEGELUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Ansteuerung des Verriegelungsmotors |
| VENTIL_V6 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM des Proportionalventils |
| VENTIL_V5 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |
| AUSGANG_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausgang ausschalten 0x01: Ausgang einschalten |

### ARG_0X4055_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_VERSORGUNG_VSW1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Spannung ausschalten 0x01: Spannung einschalten |
| SENSOR_VERSORGUNG_VSW2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Spannung ausschalten 0x01: Spannung einschalten |
| SENSOR_VERSORGUNG_VSW3 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Spannung ausschalten 0x01: Spannung einschalten |
| SENSOR_VERSORGUNG_VSW4 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Spannung ausschalten 0x01: Spannung einschalten |
| SENSOR_VERSORGUNG_LINEARSENSOR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Spannung ausschalten 0x01: Spannung einschalten |

### ARG_0XA1A4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_CV_ELEMENT | - | - | - | - | - | Auswahl des Verdeckelements oder Verdeckfunktion (siehe TAB_CV_ELEMENT) |
| ARG_RICHTUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |
| ARG_ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in ms (0 bis 65534 ms) |

### ARG_0XA1A5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL_V1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 1 ansteuern: 0=aus, 1=ein |
| VENTIL_V2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 2 ansteuern: 0=aus, 1=ein |
| VENTIL_V3 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 3 ansteuern: 0=aus, 1=ein |
| VENTIL_V4 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ventil 4 ansteuern: 0=aus, 1=ein |

### ARG_0XA1A6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_ANSTEUERUNG | + | - | 0-n | high | unsigned char | - | TAB_CV_ANST_BAUGRUPPE | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANST_BAUGRUPPE) Achtung: Vor der Ansteuerung sicherstellen, dass keine Kollisionsgefahr besteht! |

### ARG_0XA1A7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BAUGRUPPE | + | - | 0-n | high | unsigned char | - | TAB_CV_STEST_HYDRO_BAUGRUPPE | - | - | - | - | - | Auswahl der Baugruppe, die getestet werden soll |

### ARG_0XD2A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### ARG_0XD2AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RELAIS | 0-n | high | unsigned char | - | TAB_CV_RELAIS | - | - | - | - | - | Auswahl angesteuertes Relais (siehe TAB_CV_RELAIS) |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_RELAIS_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_RELAIS_RICHTUNG) |

### ARG_0XD2AE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERUNG | - | - | - | - | - | Ansteuerung (siehe TAB_CV_ANSTEUERUNG) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_CV_ANSTEUERRICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_CV_ANSTEUERRICHTUNG) |

### ARG_0XD3ED_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: keine Aktion; 1: Löschen aller bisher gespeicherten Daten |

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
| 0x022400 | Energiesparmode aktiv | 0 | - |
| 0x022408 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02240A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02240B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02240C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF24 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x805002 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x805003 | Verdeck, Position Dachpaket/Verdeck abgelegt, VSW 1.2 : Signal ungültig | 0 | - |
| 0x805008 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x805009 | Verdeck, Verriegelung Windlauf verriegelt, VSW 4.1 : Signal ungültig | 0 | - |
| 0x80500A | Verdeck, Verriegelung Windlauf entriegelt, VSW 4.2 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x80500B | Verdeck, Verriegelung Windlauf entriegelt, VSW 4.2 : Signal ungültig | 0 | - |
| 0x805010 | Verdeck, Verdeckklappe unten links, VSW 5.3 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x805011 | Verdeck, Verdeckklappe unten links, VSW 5.3 : Signal ungültig | 0 | - |
| 0x805018 | Verdeck, Windlauf erreicht / Windlaufgrundplatte, VSW 8.2: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805019 | Verdeck, Windlauf erreicht / Windlaufgrundplatte, VSW 8.2: Signal ungültig | 0 | - |
| 0x80501A | Verdeck, Gepäckraumabtrennung / Verdeckkastenboden unten, VSW 9 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x80501B | Verdeck, Gepäckraumabtrennung / Verdeckkastenboden unten, VSW 9 : Signal ungültig | 0 | - |
| 0x805028 | Verdeck, Spannbügel/Finne aufgestellt, VSW 2.2 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x805029 | Verdeck, Spannbügel/Finne aufgestellt, VSW 2.2 : Signal ungültig | 0 | - |
| 0x80503D | Verdeckschalter Zu: Signal ungültig | 0 | - |
| 0x80503E | Verdeckschalter Auf: Signal ungültig | 0 | - |
| 0x80503F | Verdeckstecker nicht gesteckt | 0 | - |
| 0x805046 | Fußpunkt Endlagensensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 | - |
| 0x805047 | Fußpunkt Positionssensoren wegen KS +Ub eines Sensors zum Schutz der Messwiderstände abgeschaltet | 0 | - |
| 0x805048 | Verdeckschalter Zu: Unterbrechung oder Kurzschluss nach Minus | 0 | - |
| 0x805049 | Verdeckschalter Zu: Kurzschluss nach Plus | 0 | - |
| 0x80504A | Verdeckschalter Auf: Unterbrechung oder Kurzschluss nach Minus | 0 | - |
| 0x80504B | Verdeckschalter Auf: Kurzschluss nach Plus | 0 | - |
| 0x80504C | Schalter Verdeckkastenboden / Gepäckraumabtrennung: Signal unplausibel | 0 | - |
| 0x805060 | Ventil V1: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805061 | Ventil V2: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805062 | Ventil V3: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805067 | Relais PM1: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805068 | Relais PM2: Unterbrechung oder Kurzschluss | 0 | - |
| 0x80506F | Verriegelungsmotor Windlauf: Unterbrechung oder Kurzschluss | 0 | - |
| 0x805080 | Speicherfehler RAM | 0 | - |
| 0x805081 | Speicherfehler ROM | 0 | - |
| 0x805082 | Funktionseinschränkung: Motorstartautomatik aktiv | 1 | - |
| 0x805083 | Funktionseinschränkung: Standverbraucherabschaltung aktiv | 1 | - |
| 0x805084 | Geschwindigkeit in Zwischenposition zu hoch | 1 | - |
| 0x805085 | Funktionseinschränkung: Außentemperatur zu niedrig | 1 | - |
| 0x805086 | Funktionseinschränkung: Fensterheberposition unbekannt | 1 | - |
| 0x805087 | Funktionseinschränkung: Geschwindigkeit zu hoch | 1 | - |
| 0x805088 | Funktionseinschränkung: Heckklappe offen | 1 | - |
| 0x805089 | Funktionseinschränkung: Unbekannte Dachposition | 1 | - |
| 0x80508A | Funktionseinschränkung: ID-Geber hat Nahbereich verlassen | 1 | - |
| 0x80508B | Funktionseinschränkung: Verdeckkastenboden nicht abgesenkt | 1 | - |
| 0x80508C | Funktionseinschränkung: Wiederholsperre Hydraulikpumpe | 1 | - |
| 0x80508D | Funktionseinschränkung: Wiederholsperre Verriegelungsmotor/Faltdachantrieb | 1 | - |
| 0x80508E | Funktionseinschränkung: Überlastschutz Ventile | 1 | - |
| 0x80508F | Funktionseinschränkung: Zeitüberschreitung Freigabe SHD/CVM/CTM | 1 | - |
| 0x805090 | Funktionseinschränkung: Zeitüberschreitung beim Ablegen-Ausheben des Verdecks | 1 | - |
| 0x805091 | Funktionseinschränkung: Zeitüberschreitung beim Ent-Verriegeln | 1 | - |
| 0x805092 | Zeitüberschreitung beim Öffnen-Schliessen der Verdeckklappe | 1 | - |
| 0x805095 | Funktionseinschränkung wegen Unterspannung | 1 | - |
| 0x805096 | Funktionseinschränkung wegen Überspannung | 1 | - |
| 0x805098 | Überspannung erkannt | 1 | - |
| 0x805099 | Unterspannung erkannt | 1 | - |
| 0x80509C | Funktionseinschränkung: Zeitüberschreitung beim Anheben/Ausspannen des/der Spannbügels/Finnen | 1 | - |
| 0x8050A2 | Funktionseinschränkung: Verdeckklappe/Verdeckkastendeckel unplausibel | 1 | - |
| 0x8050A4 | Funktionseinschränkung: Dachpaket/Hauptsäule unplausibel | 1 | - |
| 0x8050A6 | Funktionseinschränkung: Frontverschluss unplausibel | 1 | - |
| 0x8050A7 | Funktionseinschränkung: Spannbügel/Finne unplausibel | 1 | - |
| 0x8050A9 | Funktionseinschränkung: Status der Verdeckverriegelung und Verdeckstellung unplausibel (Luftverriegelung) | 1 | - |
| 0x8050AA | Funktionseinschränkung: Verdeck komplett geschlossen und verriegelt, aber Status der Verdeckverriegelung erkannt als Zwischenposition (unplausibel) | 1 | - |
| 0x8050C8 | Verdeck, Spannbügel/Finne im Totpunkt rechts, VSW 2.6 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050C9 | Verdeck, Spannbügel/Finne im Totpunkt rechts, VSW 2.6 : Signal ungültig | 0 | - |
| 0x8050CA | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5: Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050CB | Verdeck, Verdeckklappe geschlossen rechts, VSW 5.5: Signal ungültig | 0 | - |
| 0x8050CC | Verdeck, Verdeckklappe offen rechts, VSW 5.6: Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050CD | Verdeck, Verdeckklappe offen rechts, VSW 5.6: Signal ungültig | 0 | - |
| 0x8050CE | Verdeck, Verdeckklappe unten rechts, VSW 5.7 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050CF | Verdeck, Verdeckklappe unten rechts, VSW 5.7 : Signal ungültig | 0 | - |
| 0x8050D0 | Versorgungsspannung der Positionssensoren: Kurzschluss | 0 | - |
| 0x8050D1 | Versorgungsspannung der Endlagensensoren: Kurzschluss | 0 | - |
| 0x8050D5 | Klemme 30B_R Spannung fehlerhaft | 1 | - |
| 0x8050D6 | Klemme 30B_L Spannung fehlerhaft | 1 | - |
| 0x8050D8 | Analoger Verdecktaster: Kurzschluss nach Minus | 0 | - |
| 0x8050D9 | Analoger Verdecktaster: Hängt im Zustand Öffnen | 0 | - |
| 0x8050DA | Analoger Verdecktaster: Hängt im Zustand Schließen | 0 | - |
| 0x8050DB | Analoger Verdecktaster: Signal ungültig | 0 | - |
| 0x8050E9 | Verdeck, Position geschlossen und verriegelt rechts, VSW 8.2 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050EA | Verdeck, Position geschlossen und verriegelt rechts, VSW 8.2 : Signal ungültig | 0 | - |
| 0x8050F0 | Verdeck, Verschluss links, VSW 8.3 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050F1 | Verdeck, Verschluss links, VSW 8.3 : Signal ungültig | 0 | - |
| 0x8050F2 | Verdeck, Verschluss rechts, VSW 8.4 : Unterbrechung oder Kurzschluss | 0 | - |
| 0x8050F3 | Verdeck, Verschluss rechts, VSW 8.4 : Signal ungültig | 0 | - |
| 0xD20468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xD20BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD21400 | Ausfall Botschaft GESCHWINDIGKEIT | 1 | - |
| 0xD21402 | Ausfall Botschaft POWERMGMT_CTR_COS | 1 | - |
| 0xD21404 | Ausfall Botschaft CTR_FH_SHD_ZENTRALE | 1 | - |
| 0xD21405 | Ausfall Botschaft STAT_ZV_KLAPPEN | 1 | - |
| 0xD21406 | Ausfall Botschaft A_TEMP | 1 | - |
| 0xD21408 | Ausfall Botschaft Fahrzeugzustand | 1 | - |
| 0xD2140C | Ausfall Botschaft CON_VEH | 1 | - |
| 0xD2140D | Ausfall Botschaft ST_CENG | 1 | - |
| 0xD21420 | ALIVE- oder CRC-Fehler Botschaft GESCHWINDIGKEIT | 1 | - |
| 0xD2142C | ALIVE- oder CRC-Fehler Botschaft CON_VEH | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Sensor VSW1.2 Verdeck abgelegt rechts | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | Sensor VSW8.2 Verdeck vorne eingetaucht rechts | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | Sensor VSW8.3 Verdeck verriegelt links | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | Sensor VSW8.4 Verdeck verriegelt rechts | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0005 | Sensor VSW4.1 Verdeck verriegelt | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0006 | Sensor VSW4.2 Verdeck entriegelt | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | Sensor VSW2.1 Haltebügel über Totpunkt links | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0008 | Sensor VSW2.6 Haltebügel über Totpunkt rechts | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0009 | Sensor VSW2.2 Haltebügel aufgestellt | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000A | Sensor VSW5.3 Verdeckklappe geschlossen links | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000B | Sensor VSW5.5 Verdeckklappe verriegelt rechts | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000C | Sensor VSW5.6 Verdeckklappe aufgestellt rechts | 0/1 | High | 0x4000 | - | - | - | - |
| 0x000D | Sensor VSW5.3 Verdeckklappe geschlossen rechts | 0/1 | High | 0x8000 | - | - | - | - |
| 0x4600 | Aussentemperatur | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4601 | Datum_Tag | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4602 | Datum_Monat | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4603 | Datum_Jahr | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4604 | Spannung_Kl30 | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4605 | Bedienquelle | 0-n | High | 0xFF | TAB_CV_BEDIENANFORDERUNG | - | - | - |
| 0x4608 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x460C | Spannung_Kl30_R | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x460D | Spannung_Kl30_L | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
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
| 0x240000 | Logistikdaten zum Überschreiben freigeschaltet | 1 | - |
| 0x240200 | BSW-Modul Flash-Driver FLS_E_COMPARE_FAILED | 0 | - |
| 0x240201 | BSW-Modul Flash-Driver FLS_E_ERASE_FAILED | 0 | - |
| 0x240202 | BSW-Modul Flash-Driver FLS_E_READ_FAILED | 0 | - |
| 0x240203 | BSW-Modul Flash-Driver FLS_E_READ_FAILED_DED | 0 | - |
| 0x240204 | BSW-Modul Flash-Driver FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x240205 | BSW-Modul Flash-Driver FLS_E_WRITE_FAILED | 0 | - |
| 0x240208 | BSW-Modul General-Purpose-Timer GPT_E_READBACK_FAILURE | 0 | - |
| 0x240209 | BSW-Modul General-Purpose-Timer GPT_E_TIMEOUT_FAILURE | 0 | - |
| 0x240210 | BSW-Modul Main-Clock-Unit MCU_E_CLOCK_FAILURE | 0 | - |
| 0x240211 | BSW-Modul Main-Clock-Unit MCU_E_LVI_FAILURE | 0 | - |
| 0x240212 | BSW-Modul Main-Clock-Unit MCU_E_WRITE_TIMEOUT_FAILURE | 0 | - |
| 0x240220 | BSW-Modul Non-Volatile-Memory NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x240221 | BSW-Modul Non-Volatile-Memory NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x240222 | BSW-Modul Non-Volatile-Memory NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x240223 | BSW-Modul Non-Volatile-Memory NVM_E_REQ_FAILED | 0 | - |
| 0x240224 | BSW-Modul Non-Volatile-Memory NVM_E_VERIFY_FAILED | 0 | - |
| 0x240225 | BSW-Modul Non-Volatile-Memory NVM_E_WRITE_PROTECTED | 0 | - |
| 0x240226 | BSW-Modul Non-Volatile-Memory NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x240230 | BSW-Modul Port PORT_E_WRITE_TIMEOUT_FAILURE | 0 | - |
| 0x240240 | BSW-Modul Watchdog WDG_E_DISABLE_REJECTED | 0 | - |
| 0x240241 | BSW-Modul Watchdog WDG_E_MODE_FAILURE | 0 | - |
| 0x240242 | BSW-Modul Watchdog WDG_E_READBACK_FAILURE | 0 | - |
| 0x240243 | BSW-Modul Watchdog WDG_E_TRIGGER_TIMEOUT | 0 | - |
| 0x240248 | BSW-Modul Watchdog-Manager WDGM_E_IMPROPER_CALLER | 0 | - |
| 0x240249 | BSW-Modul Watchdog-Manager WDGM_E_MONITORING | 0 | - |
| 0x24024A | BSW-Modul Watchdog-Manager WDGM_E_SET_MODE | 0 | - |
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
| 0x44 | RSUSession |
| 0xFF | Wert ungültig |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4020_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_RCOD_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_12VSW4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_GND_SW2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER6_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER8_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_12VSW1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER9_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR8_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR6_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_12VSW3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_GND_SW1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER7_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_GND_NOT_USED_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR7_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_12VSW2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENVER2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENKAR5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_I_LAKAEVB_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_I_LAVEEVB_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_SENKARA_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_VLAKA_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_5VSW_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_TH_LAKAEVB_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_GND_A_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_VLAVE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_TH_LAVEEVB_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_I_LARVB2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_SENDKAR1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_LARVB2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_LARVB2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |
| STAT_U_RCOD_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Ausgangsspannung ADC-Kanal |

### RES_0X4058_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUTPUT_LAHSS1 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS1 |
| STAT_ERR_OUTPUT_LAHSS1 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS1 |
| STAT_OUTPUT_LAHSS2 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS2 |
| STAT_ERR_OUTPUT_LAHSS2 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS2 |
| STAT_OUTPUT_LAHSS3 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS3 |
| STAT_ERR_OUTPUT_LAHSS3 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS3 |
| STAT_OUTPUT_LAHSS4 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS4 |
| STAT_ERR_OUTPUT_LAHSS4 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS4 |
| STAT_OUTPUT_LAHSS5 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS5 |
| STAT_ERR_OUTPUT_LAHSS5 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS5 |
| STAT_OUTPUT_LAHSS6 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS6 |
| STAT_ERR_OUTPUT_LAHSS6 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS6 |
| STAT_OUTPUT_LAHSS7 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS7 |
| STAT_ERR_OUTPUT_LAHSS7 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS7 |
| STAT_OUTPUT_LAHSS8 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS8 |
| STAT_ERR_OUTPUT_LAHSS8 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS8 |
| STAT_OUTPUT_LAHSS9 | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSS9 |
| STAT_ERR_OUTPUT_LAHSS9 | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSS9 |
| STAT_OUTPUT_LAHSSA | 0/1 | - | unsigned char | - | - | - | - | - | Ansteuerzustand des Ausgangs LaHSSA |
| STAT_ERR_OUTPUT_LAHSSA | 0/1 | - | unsigned char | - | - | - | - | - | Zustand der Statusleitung des Ausgangs LaHSSA |

### RES_0X4100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWFL_WERT | HEX | high | unsigned int | - | - | - | - | - | Helbako interne SW-Version der Applikation |
| STAT_BTLD_WERT | HEX | high | unsigned int | - | - | - | - | - | Helbako interne SW-Version des Bootloaders |

### RES_0X4101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Hauptversion des CVC |
| STAT_MINOR_VERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Unterversion des CVC |
| STAT_PATCH_VERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | Patchversion des CVC |
| STAT_DATE_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der CVC Version |

### RES_0XA1A4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Ergebnis der Routineausführung (siehe TAB_CV_STAT_ROUTINE) |

### RES_0XA1A7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STAT_ROUTINE | - | - | - | Status der zuletzt gestarteten Selbsttest-Routine |
| STAT_BAUGRUPPE | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STEST_HYDRO_BAUGRUPPE | - | - | - | getestete Baugruppe |
| STAT_SELBSTTEST | - | - | + | 0-n | high | unsigned char | - | TAB_CV_STEST_HYDRO_ERGEBNIS | - | - | - | Ergebnis des Selbsttests |

### RES_0XD2A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_GESTEUERTE_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: gesteuerte Heckscheibe nicht vorhanden 0x01: gesteuerte Heckscheibe vorhanden |
| STAT_VORHANDEN_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_BELADEHILFE_TASTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Kein Verdeck-Taster vorhanden 0x01: Verdeck-Taster vorhanden |
| STAT_VORHANDEN_NAHBEREICHSERKENNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Nahbereichserkennung vorhanden 0x01: Nahbereichserkennung vorhanden |
| STAT_VORHANDEN_BELADEHILFSFUNKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: Keine Beladehilfsfunktion vorhanden 0x01:  Beladehilfsfunktion vorhanden |
| STAT_VORHANDEN_SHD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Schiebedach nicht vorhanden 0x01: elektrisches Schiebedach vorhanden |
| STAT_VORHANDEN_ESH | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden |
| STAT_VORHANDEN_WINDSCHOTT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00: elektrisches Windschott nicht vorhanden 0x01: elektrisches Windschott vorhanden |

### RES_0XD2A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CV_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_VERDECK | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_VERDECK |
| STAT_TASTER_BELADEHILFE_NR | 0-n | high | unsigned char | - | TAB_CV_BEDIENTASTER_BELADEHILFE | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_CV_BEDIENTASTER_BELADEHILFE |

### RES_0XD2A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | vom SG-Verbund unabhängige Ansteuerung des CV erlauben 0x00 unabhängige Ansteuerung verboten 0x01 unabhängige Ansteuerung erlaubt |

### RES_0XD2AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG | 0-n | high | unsigned char | - | TAB_CV_VERRIEGELUNG | - | - | - | Status der Verriegelung (siehe TAB_CV_VERRIEGELUNG) |
| STAT_HALLZAEHLER_POS_VERRIEGELUNG_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | -30000.0 | Zählerstand Hallinkremente Verriegelung (kein Hallzähler vorhanden, wenn Wert -30000 ausgegeben wird) |

### RES_0XD34B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_ENDLAGE_MAX_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage (Maximalwert) |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_MAX_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition (Maximalwert) |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_MAX | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_1_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage (jüngster Eintrag) |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_1_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition (jüngster Eintrag) |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_1 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv (jüngster Eintrag) |
| STAT_DATUM_TAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_2_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_2_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_2 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_3_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_3_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_3 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_4_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_4_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_4 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_5_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_5_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_5 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_6_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_6_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_6 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_7_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_7_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_7 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_8_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_8_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_8 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_9_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_9_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_9 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_10_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_10_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_10 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_11_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_11_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_11 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_12_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_12_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_12 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_13_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_13_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_13 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_14_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_14_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_14 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_15_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_15_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_15 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_16_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_16_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_16 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_17_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_17_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_17 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_18_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_18_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_18 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_19_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_19_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_19 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_20_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_20_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_20 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_21_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_21_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_21 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_22_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_22_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_22 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_23_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_23_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_23 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_24_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_24_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_24 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_25_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_25_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_25 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_26_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_26_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_26 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_26_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_27_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_27_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_27 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_27_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_28_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_28_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_28 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_28_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_29_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_29_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_29 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv |
| STAT_DATUM_TAG_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_29_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |
| STAT_GESCHWINDIGKEIT_ENDLAGE_30_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Endlage (ältester Eintrag) |
| STAT_GESCHWINDIGKEIT_ZWISCHENPOSITION_30_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kodierter Geschwindigkeitswert zum Verlassen der Zwischenposition (ältester Eintrag) |
| STAT_SPERRBEDINGUNG_GESCHWINDIGKEIT_30 | 0/1 | high | unsigned char | - | - | - | - | - | Kodierte Sperrbedingung Geschwindigkeit: 1=aktiv / 0=nicht aktiv (ältester Eintrag) |
| STAT_DATUM_TAG_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Tag der Codierung |
| STAT_DATUM_MONAT_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datum - Monat der Codierung |
| STAT_DATUM_JAHR_30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Datum - Jahr der Codierung |
| STAT_ZEIT_STUNDE_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Stunde der Codierung |
| STAT_ZEIT_MINUTE_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Minute der Codierung |
| STAT_ZEIT_SEKUNDE_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit - Sekunde der Codierung |

### RES_0XD3EA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30 (Versorgung Logik) |
| STAT_VERSORGUNG_LOGIK_KL30 | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Logik-Versorgung KL30 (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL30_R_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30_R (Versorgung Lastkreis rechts) |
| STAT_VERSORGUNG_LAST_KL30_R | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Versorgung Lastkreis rechts KL30_R (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SPANNUNG_KL30_L_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungswert KL30_L (Versorgung Lastkreis links) |
| STAT_VERSORGUNG_LAST_KL30_L | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Status Versorgung Lastkreis links KL30_L (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_PERMANENT_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_PERMANENT | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_TEMPORAER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_TEMPORAER | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_MOTOR_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_MOTOR | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_SENS_SUPPLY_OPTIONAL_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |
| STAT_SENSOR_SUPPLY_OPTIONAL | 0-n | high | unsigned char | - | TAB_CV_STAT_SPANNUNG | - | - | - | Sensorversorgung (siehe TAB_CV_STAT_SPANNUNG) |
| STAT_FUSSPUNKT_SENSOR_PERMANENT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_FUSSPUNKT_SENSOR_TEMPORAER_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Sensorversorgung |
| STAT_SUPPLY_C_SCHALTER_ANALOG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Sensorversorgung |

### RES_0XD3EB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_V1_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Ventil 1 (0 = AUS / 1 = EIN) |
| STAT_VENTIL_V2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Ventil 2 (0 = AUS / 1 = EIN) |
| STAT_VENTIL_V3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Ventil 3 (0 = AUS / 1 = EIN) |
| STAT_VENTIL_V4_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Ventil 4 (0 = AUS / 1 = EIN) |
| STAT_VENTIL_V5_RESERVE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Ventil 5 Reserve (0 = AUS / 1 = EIN) |
| STAT_RELAIS_WLV1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 1 für WLV (0 = AUS / 1 = EIN) |
| STAT_RELAIS_WLV1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais 1 für WLV (Klemmenspannung des Motors) |
| STAT_RELAIS_WLV2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 2 für WLV (0 = AUS / 1 = EIN) |
| STAT_RELAIS_WLV2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingangsspannung am Relais 2 für WLV (Klemmenspannung des Motors) |
| STAT_RELAIS_PUMPE1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 1 für Hydraulikpumpe (0 = AUS / 1 = EIN) |
| STAT_RELAIS_PUMPE2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand Relais 2 für Hydraulikpumpe (0 = AUS / 1 = EIN) |
| STAT_RELAIS_RES1_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RELAIS_RES1_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RELAIS_RES2_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RELAIS_RES2_VERSORGUNG_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_MOTOR_WINDLAUF | 0-n | high | unsigned char | - | TAB_CVM_MOTOR_WINDLAUF | - | - | - | Status Antrieb für Windlaufverriegelung (siehe TAB_CVM_MOTOR_WINDLAUF) |

### RES_0XD3EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_HAUPTS_ABGELEGT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_SPANNB_AUFGESTELLT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_SPANNB_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_WINDL_VERRIEGELT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_WINDL_ENTRIEGELT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_GESCHLOSSEN_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_VERRIEGELT_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_OFFEN_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_VKL_GESCHLOSSEN_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_WINDL_ERREICHT | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_LINKS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_RECHTS | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE1 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE2 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE3 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE4 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE5 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |
| STAT_SENSOR_RESERVE6 | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_ZUSTAND | - | - | - | Sensorzustand (siehe TAB_CV_SENSORIK_ZUSTAND) |

### RES_0XD3ED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_LETZT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzte Geschwindigkeitsüberschreitung |
| STAT_DATUM_LETZT_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der letzten Geschwindigkeitsüberschreitung |
| STAT_DAUER_LETZT_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_LETZT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Geschwindigkeitsüberschreitung |
| STAT_ATEMP_LETZT_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der letzten Geschwindigkeitsüberschreitung |
| STAT_SENSOR_HAUPTS_ABGELEGT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SPANNB_AUFGESTELLT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SPANNB_UNTEN_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_VERRIEGELT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_ENTRIEGELT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_GESCHLOSSEN_LINKS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_VERRIEGELT_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_OFFEN_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_GESCHLOSSEN_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_ERREICHT_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_LINKS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_RECHTS_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_GPR_ABTRENNUNG_UNTEN_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_RESERVE1_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors Reserve (0: nicht betätigt; 1: betätigt) |
| STAT_RESERVE2_LETZT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors Reserve (0: nicht betätigt; 1: betätigt) |
| STAT_GESCHWINDIGKEIT_MAX_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Geschwindigkeitsüberschreitung |
| STAT_DATUM_MAX_WERT | HEX | high | unsigned long | - | - | - | - | - | Datum der maximalen Geschwindigkeitsüberschreitung |
| STAT_DAUER_MAX_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer der maximalen Geschwindigkeitsüberschreitung |
| STAT_KILOMETER_MAX_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der maximalen Geschwindigkeitsüberschreitung |
| STAT_ATEMP_MAX_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur der maximalen Geschwindigkeitsüberschreitung |
| STAT_SENSOR_HAUPTS_ABGELEGT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SPANNB_AUFGESTELLT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SPANNB_UNTEN_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_VERRIEGELT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_ENTRIEGELT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_GESCHLOSSEN_LINKS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_VERRIEGELT_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_OFFEN_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_VKL_GESCHLOSSEN_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_WINDL_ERREICHT_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_LINKS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_SICHERE_VERDVERR_WL_RECHTS_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_SENSOR_GPR_ABTRENNUNG_UNTEN_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors (0: nicht betätigt; 1: betätigt) |
| STAT_RESERVE1_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors Reserve (0: nicht betätigt; 1: betätigt) |
| STAT_RESERVE2_MAX_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Schaltzustand des Sensors Reserve (0: nicht betätigt; 1: betätigt) |

### RES_0XDDD5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_SCHALTZUSTAND_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gepäckraumabtrennung in Position Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_VERSORGUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Gepäckraumabtrennung in Position Versorgung 0 = Aus 1 = Ein |
| STAT_SENSOR_GEPAECK_ABTRENN_UNTEN_FEHLERZUSTAND_NR | 0-n | high | unsigned char | - | TAB_CV_SENSORIK_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Gepäckraumabtrennung in Position siehe Tabelle TAB_CV_SENSORIK_FEHLERZUSTAND |
| STAT_SCHALTER_RES1 | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XDDD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Ventile |
| STAT_SPERRE_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Ventile |
| STAT_FREIGABE_VENTILE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Ventile |
| STAT_ZAEHLER_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Hydraulikpumpe |
| STAT_SPERRE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Hydraulikpumpe |
| STAT_FREIGABE_HYDRAULIKPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Hydraulikpumpe |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Verriegelung |
| STAT_SPERRE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Verriegelung |
| STAT_FREIGABE_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Verriegelung |
| STAT_ZAEHLER_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stand Zähler Wiederholsperre Heckscheibe |
| STAT_SPERRE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Sperre Heckscheibe |
| STAT_FREIGABE_HECKSCHEIBE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Grenzwert für Freigabe Heckscheibe |

### RES_0XDDE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERR_UNTERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_UEBERSPANNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_SENSORVERSORGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_VERDECKKASTENBODEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_BELADEHILFE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_KODIERDATEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_TIMEOUT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_POSITION_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SENSORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AKTORIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_MOTOR_WINDLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_HYDRAULIKPUMPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_VENTILE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_AUSSENTEMPERATUR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_HECKKLAPPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_STANDVERBRAUCHER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_MOTORSTART | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |
| STAT_SPERR_NEIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_BESCHLEUNIGUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_GESCHWINDIGKEIT_FAHRT | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Sperrbedingung nicht relevant |
| STAT_SPERR_WIEDERHOLSPERRE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_FREIGABE_CV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVI |
| STAT_SPERR_POSITION_VERDECK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVD |
| STAT_SPERR_SCHEIBEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Sperrbedingung 0 = Sperrbedingung nicht gesetzt 1 = Sperrbedingung gesetzt  Umsetzung: CVC |

### RES_0XDE59_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bus-Signal Fahrzeuggeschwindigkeit |
| STAT_TEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Bus-Signal Außentemperatur |
| STAT_HECKKLAPPE | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_HECKKLAPPE | - | - | - | Bus-Signal Status Heckklappe |
| STAT_FENSTER_FAT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Bus-Signal Status Fensterposition Fahrertür |
| STAT_FENSTER_BFT | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Bus-Signal Status Fensterposition Beifahrertür |
| STAT_FENSTER_FATH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Bus-Signal Status Fensterposition Tür Fahrerseite hinten |
| STAT_FENSTER_BFTH | 0-n | high | unsigned char | - | TAB_CVM_ZUSTAENDE_FENSTER | - | - | - | Bus-Signal Status Fensterposition Tür Beifahrerseite hinten |
| STAT_POS_FENSTER_FAT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Bus-Signal Fensterposition Fahrertür |
| STAT_POS_FENSTER_BFT_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Bus-Signal Fensterposition Beifahrertür |
| STAT_POS_FENSTER_FATH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Bus-Signal Fensterposition Tür Fahrerseite hinten |
| STAT_POS_FENSTER_BFTH_WERT | cm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Bus-Signal Fensterposition Tür Beifahrerseite hinten |
| STAT_KOMFORT_FUNKTION | 0-n | high | unsigned char | - | TAB_CVM_KOMFORT_FUNKTION | - | - | - | Bus-Signal Komfortfunktion |
| STAT_MOTOR | 0-n | high | unsigned char | - | TAB_CVM_STAT_MOTOR | - | - | - | Bus-Signal Status Fahrzeugmotor |
| STAT_PWF | 0-n | high | unsigned char | - | TAB_CVM_STAT_PWF | - | - | - | Bus-Signal Status Fahrzeugzustand |
| STAT_VERBRAUCHERSTEUERUNG | 0-n | high | unsigned char | - | TAB_VERBRAUCHERSTEUERUNG | - | - | - | Bus-Signal Status Verbraucherabschaltung |
| STAT_FREIGABE_VERDECK | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | - | - | - | Bus-Signal Status Freigabesignal Verdeck |
| STAT_FREIGABE_FENSTER | 0-n | high | unsigned char | - | TAB_CVM_FREIGABE | - | - | - | Bus-Signal Status Freigabesignal Fensterposition |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bus-Signal Kilometerstand |
| STAT_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bus-Signal Relativzeit |
| STAT_ZENTRALVERRIEGELUNG | 0-n | high | unsigned char | - | TAB_STAT_ZENTRALVERRIEGELUNG | - | - | - | Bus-Signal Status Zentralverriegelung |
| STAT_QUERBESCHLEUNIGUNG_WERT | m/s² | high | unsigned int | - | - | 1.0 | 500.0 | -65.0 | Bus-Signal Querbeschleunigung |
| STAT_BREMSUNG_FAHRER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bus-Signal Status Bremsung durch den Fahrer (Rohwert des Signals ST_BRG_DV) |
| STAT_SPANNUNGSEINBRUCH | 0-n | high | unsigned char | - | TAB_CVM_STAT_SPANNUNGSEINBRUCH | - | - | - | Bus-Signal Status Spannungseinbruch |
| STAT_ENERGIEVERSORGUNG | 0-n | high | unsigned char | - | TAB_CVM_STAT_ENERGIEVERSORGUNG | - | - | - | Bus-Signal Status Spannungsversorgung |
| STAT_RESERVE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |
| STAT_RESERVE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |
| STAT_RESERVE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |
| STAT_RESERVE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |
| STAT_RESERVE5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |
| STAT_RESERVE6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Ergebnis |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CV_SPANNUNGEN_ADC | 0x4020 | - | Auslesen der über den ADC eingelesenen Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4020_D |
| _CV_OUTPUTS | 0x4050 | - | Ansteuern der Ausgangstreiber ohne zeitliche Begrenzung und sensorische Absicherung !!!!!! Gefahr der Beschädigung der Mechanik !!!!!!!!  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4050_D | - |
| _CV_SENSOR_VERSORGUNG | 0x4055 | - | Steuern der Sensorversorgung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4055_D | - |
| _CV_HIGHSIDETREIBER | 0x4058 | - | Status der Highsidtreiber-Ausgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4058_D |
| _CV_READ_HELBAKO_VERSION | 0x4100 | - | Auslesen der Supplier SW-Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100_D |
| _CV_READ_CVC_VERSION | 0x4101 | - | Auslesen der CVC SW-Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4101_D |
| CV_STEUERN_TASTEN | 0xA1A4 | - | Verdeckansteuerung durch Simulation Tastenbedienung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A4_R | RES_0xA1A4_R |
| CV_STEUERN_VENTILE_ST | 0xA1A5 | - | Ventile ansteuern beim Verdeck | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A5_R | RES_0xA1A5_R |
| CV_STEUERN_BAUGRUPPE | 0xA1A6 | - | Baugruppe ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A6_R | RES_0xA1A6_R |
| CV_SELBSTTEST | 0xA1A7 | - | Selbsttestroutine Cabrioverdeck | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA1A7_R | RES_0xA1A7_R |
| CV_AUSSTATTUNG | 0xD2A0 | - | Cabrioverdeck Ausstattung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A0_D |
| CV_BEDIENTASTER | 0xD2A4 | - | Cabrioverdeck Bedientaster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD2A4_D |
| CV_FREIGABE | 0xD2A5 | - | Cabrioverdeck Freigabe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2A5_D | RES_0xD2A5_D |
| CV_RELAIS | 0xD2AD | - | Relais Cabrioverdeck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD2AD_D | - |
| CV_VERRIEGELUNG | 0xD2AE | - | Windlaufverriegelung Cabrioverdeck | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD2AE_D | RES_0xD2AE_D |
| CV_HS_GESCHWINDIGKEITSCODIERUNG | 0xD34B | - | Historienspeicher Geschwindigkeitscodierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD34B_D |
| CV_SG_VERSORGUNG | 0xD3EA | - | Spannungsversorgung Cabrio-SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EA_D |
| CV_AKTORIK | 0xD3EB | - | Status Aktorik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EB_D |
| CV_SENSORIK | 0xD3EC | - | Cabrioverdeck Sensorik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EC_D |
| CV_ZUSINFO_GESCHWINDIGKEIT | 0xD3ED | - | Zusatzinfo bei Geschwindigkeit zu hoch | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3ED_D | RES_0xD3ED_D |
| CV_POSITION_VERDECK | 0xDDD0 | STAT_VERDECK_POSITION | Status Verdeckposition Interpretation siehe Tabelle | 0-n | - | High | unsigned char | TAB_VERDECK_POSITION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CV_SCHALTER | 0xDDD5 | - | Cabrioverdeck Schalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD5_D |
| CV_WIEDERHOLSPERREN | 0xDDD9 | - | Status der Wiederholsperren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDD9_D |
| CV_SPERRBEDINGUNGEN | 0xDDE1 | - | Cabrioverdeck Sperrbedingungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDE1_D |
| CV_BUS_DATEN | 0xDE59 | - | Empfangene Bus-Signale im CVM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE59_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_CVM_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht freigegeben |
| 0x01 | Freigegeben |
| 0xFF | Signal ungültig |

### TAB_CVM_KOMFORT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Komfortöffnen |
| 0x02 | Komfortschließen |
| 0x05 | Komfortöffnen Schließzylinder |
| 0x06 | Komfortschließen Schließzylinder |
| 0x09 | Komfortöffnen Funkschlüssel |
| 0x0A | Komfortschließen Funkschlüssel |
| 0x0D | Komfortöffnen ID-Geber im Nahbereich |
| 0x0E | Komfortschließen ID-Geber im Nahbereich |
| 0x0B | Beladeposition anfahren |
| 0x08 | Beladeposition ablegen |
| 0xFF | Signal ungültig |

### TAB_CVM_MOTOR_WINDLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Windlauf öffnet |
| 0x02 | Windlauf schließt |
| 0xFF | Status unbekannt |

### TAB_CVM_STAT_ENERGIEVERSORGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Spannungseinbruch |
| 0x01 | Startspannungseinbruch auf Versorgungszweig 1 |
| 0x02 | Startspannungseinbruch auf Versorgungszweig 2 |
| 0x03 | Startspannungseinbruch auf Versorgungszweig 1 + 2 |
| 0x04 | Spannungsversorgung 48V |
| 0x05 | Startspannungseinbruch auf Versorgungszweig 1 und Spannungsversorgung 48V |
| 0x06 | Startspannungseinbruch auf Versorgungszweig 2 und Spannungsversorgung 48V |
| 0x07 | Startspannungseinbruch auf Versorgungszweig 1 + 2 und Spannungsversorgung 48V |
| 0x0D | Reserviert |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Signal ungültig |

### TAB_CVM_STAT_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Motor startet |
| 0x02 | Motor läuft |
| 0x03 | Motor im Auslauf |
| 0x0D | Funktionsschnittstelle nicht verfuegbar |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Signal ungültig |

### TAB_CVM_STAT_PWF

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserviert |
| 0x01 | Parken Bordnetz n.i.O |
| 0x02 | Parken Bordnetz i.O. |
| 0x03 | Standfunktionen Kunde nicht im FZG |
| 0x05 | Wohnen |
| 0x07 | Pruefen Analyse Diagnose |
| 0x08 | Fahrbereitschaft herstellen |
| 0x0A | Fahren |
| 0x0C | Fahrbereitschaft beenden |
| 0x0D | Reserviert |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Signal ungültig |

### TAB_CVM_STAT_SPANNUNGSEINBRUCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Spannungseinbruch |
| 0x01 | Startspannungseinbruch bis max. Schwelle 1 |
| 0x02 | Startspannungseinbruch bis max. Schwelle 2 |
| 0x0D | Funktionsschnittstelle nicht verfuegbar |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Signal ungültig |

### TAB_CVM_ZUSTAENDE_FENSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geoeffnet |
| 0xFF | Ungueltig |

### TAB_CVM_ZUSTAENDE_HECKKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0xFF | Ungültig |

### TAB_CV_ANSTEUERRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_CV_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Diagnose |

### TAB_CV_ANST_BAUGRUPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x33 | Verriegelung öffnen |
| 0x55 | Verriegelung schließen |
| 0xAA | Verdeckklappe schließen |
| 0xCC | Verdeckklappe öffnen |
| 0xFF | Ansteuerung ungültig |

### TAB_CV_BEDIENANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bedienanforderung |
| 0x01 | Bedientaster Öffnen |
| 0x02 | Bedientaster Schließen |
| 0x05 | Komfortöffnen Türschloss |
| 0x06 | Komfortschließen Türschloss |
| 0x09 | Komfortöffnen ID-Geber |
| 0x0A | Komfortschließen ID-Geber |
| 0x11 | Komforöffnen Funkschlüssel |
| 0x12 | Komfortschließen Funkschlüssel |
| 0xFF | Bedienanforderung ungültig |

### TAB_CV_BEDIENTASTER_BELADEHILFE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_BEDIENTASTER_VERDECK

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Richtung öffnen betätigt |
| 0x02 | Richtung schließen betätigt |
| 0xFF | ungültig |

### TAB_CV_ELEMENT

| WERT | TEXT |
| --- | --- |
| 0x01 | Verdeck |
| 0x02 | Beladehilfe |
| 0x03 | Heckscheibe |

### TAB_CV_RELAIS

| WERT | TEXT |
| --- | --- |
| 0x01 | SCA 1 |
| 0x02 | SCA 2 |
| 0x03 | SCA 3 |
| 0x04 | Beladehilfe 1 |
| 0x05 | Beladehilfe 2 |
| 0x06 | Beladehilfe 3 |
| 0x07 | Windlaufverriegelung 1 |
| 0x08 | Windlaufverriegelung 2 |
| 0x09 | Relais 9 |
| 0x0A | Relais 10 |

### TAB_CV_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang auf Ubatt |
| 0x01 | Ausgang auf Masse |

### TAB_CV_SENSORIK_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Ubatt |
| 0x03 | Signal ungültig |

### TAB_CV_SENSORIK_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor inaktiv |
| 0x01 | Sensor aktiv |
| 0x02 | Sensorsignal ungültig |
| 0x03 | Kurzschluss nach KL31 |
| 0x04 | Weicher Kurzschluss nach KL30 |
| 0x05 | Harter Kurzschluss nach KL30 |
| 0x06 | Versorgungsspannung ist abgeschaltet oder fehlerhaft |
| 0x07 | Sensor auscodiert oder noch nicht vorhanden |

### TAB_CV_STAT_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angekommen, Verfahren noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültig |

### TAB_CV_STAT_SPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung ausgeschaltet |
| 0x01 | Normalspannung |
| 0x02 | Unterspannung |
| 0x03 | Überspannung |
| 0x04 | Spannung fehlerhaft |
| 0x05 | Spannung abgeschaltet, wegen Fehler |
| 0x06 | Spannungsfilter Neustart |
| 0x07 | Positive Flanke an Spannung |
| 0x0F | Initialisierung |
| 0xFF | ungültig |

### TAB_CV_STEST_HYDRO_BAUGRUPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Ventile |
| 0x01 | Relais |
| 0x02 | Antrieb Windlaufverriegelung |
| 0xFF | keine Baugruppe |

### TAB_CV_STEST_HYDRO_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschluss nach Plus |
| 0x03 | Leitungsunterbrechung |
| 0x04 | keine Inkremente vom Hallsensor erkannt |
| 0xFF | Wert ungültig |

### TAB_CV_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verriegelung geschlossen |
| 0x01 | Verriegelung in Zwischenstellung |
| 0x02 | Verriegelung offen |
| 0x03 | Verriegelung nicht initialisiert |
| 0x04 | Blockfahrt |
| 0xFF | Signal ungültig |

### TAB_STAT_ZENTRALVERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür entriegelt |
| 0x02 | Mindestens eine Tür verriegelt |
| 0x03 | Mindestens eine Tür entriegelt / mind eine Tür verriegelt |
| 0x04 | interner ZV-Master gesichert |
| 0x05 | interner ZV-Master gesichert |
| 0x06 | interner ZV-Master gesichert |
| 0x07 | interner ZV-Master gesichert |
| 0x0F | Signal ungültig |
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

### TAB_VERBRAUCHERSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Spezielle Standverbraucher dürfen sich einschalten |
| 0x02 | Standverbraucher müssen sich abschalten |
| 0xFF | Signal ungültig |

### TAB_VERDECK_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Komplett geschlossen und verriegelt |
| 0x01 | Zwischenstellung |
| 0x02 | Komplett geöffnet und verriegelt |
| 0x03 | Beladeposition |
| 0x04 | Hardtop aufgesetzt |
| 0x05 | Komplett geschlossen |
| 0x06 | Komplett geöffnet |
| 0x08 | Notverriegelung durchgeführt |
| 0x09 | Beladehilfe in Zwischenstellung |
| 0xFF | Ungültig |

### TAB_0X4608

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D |
