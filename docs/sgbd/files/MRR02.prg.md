# MRR02.prg

## General

|  |  |
| --- | --- |
| File | MRR02.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 51 |
| Origin | BMW EF-631 Kleemann |
| Revision | 1.008 |
| Author | ROBERT-BOSCH-GMBH EV-311 Braue |
| ECU Comment | SGBD_Generieren |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Mid Range Radar |  |  |
| ORIGIN | string | BMW EF-631 Kleemann |  |  |
| REVISION | string | 1.008 |  |  |
| AUTHOR | string | ROBERT-BOSCH-GMBH EV-311 Braue |  |  |
| COMMENT | string | SGBD_Generieren |  |  |
| PACKAGE | string | 1.91 |  |  |
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
| 0x0000C6 | Garmin |
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
| ACTIVATE | 0-n | high | unsigned char | - | TOI_ACTIVATE_RESULT | - | - | - | - | - | (De)Aktiviert die Funktion (0 = Deaktiviert / 1 = Aktiviert) |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBJECT1 | 0-n | high | unsigned char | - | TOI_OBJECTS_RESULT | - | - | - | - | - | Daten des Objekts 1, nach Spezifikation des Protokols 1 (Siehe TOI Dokumentation) |
| OBJECT2 | 0-n | high | unsigned char | - | TOI_OBJECTS_RESULT | - | - | - | - | - | Daten des Objekts 2, nach Spezifikation des Protokols 1 (Siehe TOI Dokumentation) |
| OBJECT3 | 0-n | high | unsigned char | - | TOI_OBJECTS_RESULT | - | - | - | - | - | Daten des Objekts 3, nach Spezifikation des Protokols 1 (Siehe TOI Dokumentation) |
| OBJECT4 | 0-n | high | unsigned char | - | TOI_OBJECTS_RESULT | - | - | - | - | - | Daten des Objekts 4, nach Spezifikation des Protokols 1 (Siehe TOI Dokumentation) |
| OBJECT5 | 0-n | high | unsigned char | - | TOI_OBJECTS_RESULT | - | - | - | - | - | Daten des Objekts 5, nach Spezifikation des Protokols 1 (Siehe TOI Dokumentation) |

### ARG_0X4004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NO_EOL_ALIGNMENT_STARTED | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of EOL alignment started |
| NO_EOL_ALIGNMENT_SUCCESS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of EOL alignment started and success |
| NO_SERVICE_ALIGNMENT_STARTED | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of service alignment started |
| NO_SERVICE_ALIGNMENT_SUCCESS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of service alignment started and success |

### ARG_0X4036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG | - | - | - | - | - | Setzen des Ausgangssignals WARN_FCM (0xCF HDWOBS_FCM) |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG | - | - | - | - | - | Setzen des Ausgangssignals RDUC_THRV_BRAS_FCM (0xCF HDWOBS_FCM) |
| PREFILL | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_FCM (0xCF HDWOBS_FCM) |
| PRERUN | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_FCM (0xCF HDWOBS_FCM) |
| GENERATORANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_FCM (0xCF HDWOBS_FCM) |
| DAUER_IN_MS | m/s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer des Alarms in ms. |
| FUNKTIONSVERFUEGBARKEIT_US | 0-n | high | unsigned char | - | TAB_FUNKTIONSVERFUEGBARKEIT_US | - | - | - | - | - | Zeigt die Funktionsverfügbarkeit an. |

### ARG_0X4038_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG | - | - | - | - | - | Setzen des Ausgangssignals WARN_PPP (0xD0 HDWOBS_PPP) |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG | - | - | - | - | - | Setzen des Ausgangssignals RDUC_THRV_BRAS_PPP (0xD0 HDWOBS_PPP) |
| PREFILL | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_PPP (0xD0 HDWOBS_PPP) |
| PRERUN | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_PPP (0xD0 HDWOBS_PPP) |
| GENERATORANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PREP_PPP (0xD0 HDWOBS_PPP) |
| DAUER_IN_MS | m/s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer des Alarms in ms. |
| FUNKTIONSVERFUEGBARKEIT_US | 0-n | high | unsigned char | - | TAB_FUNKTIONSVERFUEGBARKEIT_US | - | - | - | - | - | Zeigt die Funktionsverfügbarkeit an. |

### ARG_0XAB00_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RADAR_KALIBRIERUNG_MODE | + | - | 0-n | - | unsigned char | - | TAB_MRR_KALIBRIERUNG_MODE | - | - | - | - | - | Art der Kalibrierung (statisch - mit Spiegel; dynamisch - bei Fahrt) |

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
| 0x022100 | Energiesparmode aktiv | 0 | - |
| 0x022103 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x022104 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x022108 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02210A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02210B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02210C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02210D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF21 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482130 | Kalibrierung nicht durchgeführt | 0 | - |
| 0x482131 | Funktionsfehler - Sensor - Temporäre Radarstörung durch Einstrahlung/Interferenz | 0 | - |
| 0x482136 | Funktionsfehler - Sensor - Dejustiert | 0 | - |
| 0x48213E | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x48213F | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x482140 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x482141 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x482142 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x482143 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x48214A | Funktionsfehler - Sensor - Blindheit | 0 | - |
| 0x48214B | Radomheizung - Hardwarefehler | 0 | - |
| 0x48214E | Funktionsfehler - Steuergerät defekt | 0 | - |
| 0x482150 | Funktionsfehler - Sensor - ausserhalb Temperaturbereich | 1 | - |
| 0x482151 | Funktionsfehler - Fahrdynamische Grenze erreicht | 1 | - |
| 0x482155 | Steuergerät intern - Hardware eingeschränkt verfügbar | 0 | - |
| 0x482156 | Funktionsfehler - Bremsregelsystem - Stillstandsmanagement inaktiv | 1 | - |
| 0x482157 | Funktionsfehler - Radar - Objektdaten veraltet | 1 | - |
| 0x48215E | Funktionsfehler - Radar/Video Fusion eingeschränkt/ausgefallen | 1 | - |
| 0xD14518 | FAS-CAN Control Module Bus OFF | 0 | - |
| 0xD14BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD1540A | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) fehlt | 1 | - |
| 0xD1540B | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) nicht aktuell | 1 | - |
| 0xD1540C | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Prüfsumme falsch | 1 | - |
| 0xD1540D | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) ungültig | 1 | - |
| 0xD15428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD15429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD1542A | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) Prüfsumme falsch | 1 | - |
| 0xD1542B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD15432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD15433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD15434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD15435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD15436 | Signal(Zustand Fahrzeug, ID: CON_VEH) undefiniert | 1 | - |
| 0xD15437 | Botschaft(Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD15441 | Botschaft(Einheiten BN2020, ID: EINHEITEN_BN2020) fehlt | 1 | - |
| 0xD15444 | Signal(Einheiten BN2020, ID: EINHEITEN_BN2020) ungültig | 1 | - |
| 0xD15448 | Botschaft(Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xD1544E | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 | - |
| 0xD1544F | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 | - |
| 0xD15450 | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 | - |
| 0xD15451 | Signal(Winkel Fahrpedal, ID: ANG_ACPD) ungültig | 1 | - |
| 0xD15452 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD15453 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) nicht aktuell | 1 | - |
| 0xD15454 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Prüfsumme falsch | 1 | - |
| 0xD15455 | Signal(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) ungültig | 1 | - |
| 0xD1549A | Botschaft(Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xD154F2 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xD154F5 | Signal(Status Anhänger, ID: STAT_ANHAENGER) ungültig | 1 | - |
| 0xD15502 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) fehlt | 1 | - |
| 0xD15503 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) nicht aktuell | 1 | - |
| 0xD15504 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Prüfsumme falsch | 1 | - |
| 0xD15505 | Signal(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) ungültig | 1 | - |
| 0xD1550E | Botschaft(Status ECBA, ID: ST_ECBA) fehlt | 1 | - |
| 0xD1550F | Botschaft(Status ECBA, ID: ST_ECBA) nicht aktuell | 1 | - |
| 0xD15510 | Botschaft(Status ECBA, ID: ST_ECBA) Prüfsumme falsch | 1 | - |
| 0xD15511 | Signal(Status ECBA, ID: ST_ECBA) ungültig | 1 | - |
| 0xD15516 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) fehlt | 1 | - |
| 0xD15517 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) nicht aktuell | 1 | - |
| 0xD15518 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD15519 | Signal(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) ungültig | 1 | - |
| 0xD1551E | Botschaft(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) fehlt | 1 | - |
| 0xD15521 | Signal(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) ungültig | 1 | - |
| 0xD15536 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) fehlt | 1 | - |
| 0xD15537 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) nicht aktuell | 1 | - |
| 0xD15538 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) Prüfsumme falsch | 1 | - |
| 0xD15539 | Signal(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) ungültig | 1 | - |
| 0xD1553A | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD1553B | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD1553C | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD1553D | Signal(Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 | - |
| 0xD1553E | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | - |
| 0xD1553F | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) nicht aktuell | 1 | - |
| 0xD15540 | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Prüfsumme falsch | 1 | - |
| 0xD15541 | Signal(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) ungültig | 1 | - |
| 0xD1554E | Botschaft(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) fehlt | 1 | - |
| 0xD15551 | Signal(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) ungültig | 1 | - |
| 0xD15556 | Botschaft(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) fehlt | 1 | - |
| 0xD15559 | Signal(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) ungültig | 1 | - |
| 0xD1556E | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | - |
| 0xD1556F | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 | - |
| 0xD15570 | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 | - |
| 0xD15571 | Signal(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) ungültig | 1 | - |
| 0xD1557E | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xD1557F | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 | - |
| 0xD15580 | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 | - |
| 0xD15581 | Signal(Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 | - |
| 0xD15596 | Botschaft(Abstandsmeldung PDC Vorne 2, ID: GAP_PDC_FS_2) fehlt | 1 | - |
| 0xD15599 | Signal(Abstandsmeldung PDC Vorne 2, ID: GAP_PDC_FS_2) ungültig | 1 | - |
| 0xD155AA | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) fehlt | 1 | - |
| 0xD155AB | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) nicht aktuell | 1 | - |
| 0xD155AC | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) Prüfsumme falsch | 1 | - |
| 0xD155AD | Signal(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) ungültig | 1 | - |
| 0xD155BA | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) fehlt | 1 | - |
| 0xD155BB | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) nicht aktuell | 1 | - |
| 0xD155BC | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD155BD | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) ungültig | 1 | - |
| 0xD155C2 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) fehlt | 1 | - |
| 0xD155C3 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) nicht aktuell | 1 | - |
| 0xD155C4 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Prüfsumme falsch | 1 | - |
| 0xD155C5 | Signal(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) ungültig | 1 | - |
| 0xD155CA | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) fehlt | 1 | - |
| 0xD155CB | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) nicht aktuell | 1 | - |
| 0xD155CC | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Prüfsumme falsch | 1 | - |
| 0xD155CD | Signal(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) ungültig | 1 | - |
| 0xD155D2 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD155D3 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | - |
| 0xD155D4 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD155D5 | Signal(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) ungültig | 1 | - |
| 0xD155D6 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) fehlt | 1 | - |
| 0xD155D7 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) nicht aktuell | 1 | - |
| 0xD155D8 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) Prüfsumme falsch | 1 | - |
| 0xD155D9 | Signal(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) ungültig | 1 | - |
| 0xD155DA | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) fehlt | 1 | - |
| 0xD155DB | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) nicht aktuell | 1 | - |
| 0xD155DC | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) Prüfsumme falsch | 1 | - |
| 0xD155DD | Signal(Masse/Gewicht Fahrzeug, ID: MASS_VEH) ungültig | 1 | - |
| 0xD155DE | Botschaft(Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD155E1 | Signal(Neigung Fahrbahn, ID: TLT_RW) ungültig | 1 | - |
| 0xD15606 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) fehlt | 1 | - |
| 0xD15607 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) nicht aktuell | 1 | - |
| 0xD15608 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) Prüfsumme falsch | 1 | - |
| 0xD15609 | Signal(Status Warnbremskoordinator, ID: ST_WBK) ungültig | 1 | - |
| 0xD1560A | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) fehlt | 1 | - |
| 0xD1560B | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) nicht aktuell | 1 | - |
| 0xD1560C | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Prüfsumme falsch | 1 | - |
| 0xD1560D | Signal(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) ungültig | 1 | - |
| 0xD15612 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 | - |
| 0xD15613 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) nicht aktuell | 1 | - |
| 0xD15614 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Prüfsumme falsch | 1 | - |
| 0xD15615 | Signal(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) ungültig | 1 | - |
| 0xD1561A | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) fehlt | 1 | - |
| 0xD1561B | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) nicht aktuell | 1 | - |
| 0xD1561C | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD1561D | Signal(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) ungültig | 1 | - |
| 0xD1561E | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) fehlt | 1 | - |
| 0xD1561F | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) nicht aktuell | 1 | - |
| 0xD15620 | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) Prüfsumme falsch | 1 | - |
| 0xD15622 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) fehlt | 1 | - |
| 0xD15623 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) nicht aktuell | 1 | - |
| 0xD15624 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD15689 | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) fehlt | 1 | - |
| 0xD1568C | Signal(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) ungültig | 1 | - |
| 0xD15691 | Botschaft(Fahrspur Liste, ID: LNE_LST) fehlt | 1 | - |
| 0xD15692 | Botschaft(Fahrspur Liste, ID: LNE_LST) nicht aktuell | 1 | - |
| 0xD15693 | Botschaft(Fahrspur Liste, ID: LNE_LST) Prüfsumme falsch | 1 | - |
| 0xD15694 | Signal(Fahrspur Liste, ID: LNE_LST) ungültig | 1 | - |
| 0xD15695 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) fehlt | 1 | - |
| 0xD15696 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) nicht aktuell | 1 | - |
| 0xD15697 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) Prüfsumme falsch | 1 | - |
| 0xD15698 | Signal(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) ungültig | 1 | - |
| 0xD15699 | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) fehlt | 1 | - |
| 0xD1569A | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) nicht aktuell | 1 | - |
| 0xD1569B | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) Prüfsumme falsch | 1 | - |
| 0xD1569C | Signal(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) ungültig | 1 | - |
| 0xD1569D | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) fehlt | 1 | - |
| 0xD1569E | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) nicht aktuell | 1 | - |
| 0xD1569F | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) Prüfsumme falsch | 1 | - |
| 0xD156A0 | Signal(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) ungültig | 1 | - |
| 0xD156A1 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) fehlt | 1 | - |
| 0xD156A2 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) nicht aktuell | 1 | - |
| 0xD156A3 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) Prüfsumme falsch | 1 | - |
| 0xD156A4 | Signal(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) ungültig | 1 | - |
| 0xD156D1 | Botschaft(Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) fehlt | 1 | - |
| 0xD156D2 | Botschaft(Status Energieerzeugung, ID: ST_ENERG_GEN) fehlt | 1 | - |
| 0xD156D4 | Signal(Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) ungültig | 1 | - |
| 0xD156DE | Botschaft(Status Fahrlicht, ID: STAT_FAHRLICHT) fehlt | 1 | - |
| 0xD156E8 | Botschaft(Takt Zähler Synchronisation CAN, ID: CCLK_COU_SYNCN_CAN) fehlt | 1 | - |
| 0xD156EE | Botschaft(Takt Zähler Synchronisation Nachlauf, ID: CCLK_COU_SYNCN_FLLUP) fehlt | 1 | - |
| 0xD1573A | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) fehlt | 1 | - |
| 0xD1573B | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) nicht aktuell | 1 | - |
| 0xD1573C | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) Prüfsumme falsch | 1 | - |
| 0xD1573D | Signal(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) ungültig | 1 | - |
| 0xD15742 | Botschaft(Konditionierung Frontraumüberwachung, ID: COND_HDWOBS) fehlt | 1 | - |
| 0xD15744 | Botschaft(Konditionierung Frontraumüberwachung, ID: COND_HDWOBS) nicht aktuell | 1 | - |
| 0xD15745 | Botschaft(Konditionierung Frontraumüberwachung, ID: COND_HDWOBS) Prüfsumme falsch | 1 | - |
| 0xD15746 | Botschaft(Momentenpotential Antriebsstrang CAN, ID: TPO_PT_CAN) fehlt | 1 | - |
| 0xD15747 | Botschaft(Momentenpotential Antriebsstrang CAN, ID: TPO_PT_CAN) nicht aktuell | 1 | - |
| 0xD15748 | Botschaft(Momentenpotential Antriebsstrang CAN, ID: TPO_PT_CAN) Prüfsumme falsch | 1 | - |
| 0xD15749 | Botschaft(Objektdaten ** Frontkamera **, ID: OBJDT_**_FRCA_**) fehlt | 1 | - |
| 0xD1574A | Botschaft(Objektdaten ** Frontkamera **, ID: OBJDT_**_FRCA_**) nicht aktuell | 1 | - |
| 0xD1574B | Botschaft(Objektdaten ** Frontkamera **, ID: OBJDT_**_FRCA_**) Prüfsumme falsch | 1 | - |
| 0xD15752 | Botschaft(Objektdaten Liste, ID: OBJDT_LST) fehlt | 1 | - |
| 0xD15753 | Botschaft(Objektdaten Liste, ID: OBJDT_LST) nicht aktuell | 1 | - |
| 0xD15754 | Botschaft(Objektdaten Liste, ID: OBJDT_LST) Prüfsumme falsch | 1 | - |
| 0xD15755 | Botschaft(Radmoment Antriebsstrang Ist CAN, ID: WMOM_PT_AVL_CAN) fehlt | 1 | - |
| 0xD15756 | Botschaft(Radmoment Antriebsstrang Ist CAN, ID: WMOM_PT_AVL_CAN) nicht aktuell | 1 | - |
| 0xD15757 | Botschaft(Radmoment Antriebsstrang Ist CAN, ID: WMOM_PT_AVL_CAN) Prüfsumme falsch | 1 | - |
| 0xD15758 | Botschaft(Steuerung Freigabe FAS MRR, ID: CTR_RLS_DRS_MRR) fehlt | 1 | - |
| 0xD15759 | Botschaft(Steuerung Freigabe FAS MRR, ID: CTR_RLS_DRS_MRR) nicht aktuell | 1 | - |
| 0xD1575A | Botschaft(Steuerung Freigabe FAS MRR, ID: CTR_RLS_DRS_MRR) Prüfsumme falsch | 1 | - |
| 0xD15782 | Signal(Konditionierung Frontraumüberwachung, ID: COND_HDWOBS) ungültig | 1 | - |
| 0xD15783 | Signal(Radmoment Antriebsstrang Ist CAN, ID: WMOM_PT_AVL_CAN) ungültig | 1 | - |
| 0xD15784 | Signal(Steuerung Freigabe FAS MRR, ID: CTR_RLS_DRS_MRR) ungültig | 1 | - |
| 0xD15835 | Signal(Momentenpotential Antriebsstrang CAN, ID: TPO_PT_CAN) ungültig | 1 | - |
| 0xD15842 | Botschaft(Position Frontkamera, ID: PO_FRCA) fehlt | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Hybrid power Managment Zustand | 0-n | High | 0xFF | TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x2951 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4005 | STAT_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | STAT_QUALIFIER | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | STAT_ FUNKTIONSZUSTAND | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | OBJEKTDATEN_KAMERA_NR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | EVT_DT_QU_OBJDT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400A | EXT_QU_OBJDT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | KAMERA_VERBAUPOSITION_UNGUELTIG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400C | ZEITSYNCHRONISIERUNG_UNGUELTIG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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
| 0x802130 | Fehler Fahrzeug-Security | 0 | - |
| 0x802131 | Justage - Erweiterter Arbeitsbereich aktiv | 1 | - |
| 0x802132 | Objektdaten ** Frontkamera - verworfen | 1 | - |
| 0x802133 | Funktionsfehler - ACC deaktiviert | 1 | - |
| 0x802134 | Funktionsfehler - ACC nicht aktivierbar | 1 | - |
| 0x802135 | Funktionsfehler - Kamera - eingeschränkte Sicht | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Hybrid power Managment Zustand | 0-n | High | 0xFF | TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x2951 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4005 | STAT_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | STAT_QUALIFIER | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | STAT_ FUNKTIONSZUSTAND | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | OBJEKTDATEN_KAMERA_NR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | EVT_DT_QU_OBJDT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400A | EXT_QU_OBJDT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400B | KAMERA_VERBAUPOSITION_UNGUELTIG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x400C | ZEITSYNCHRONISIERUNG_UNGUELTIG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NO_EOL_ALIGNMENT_STARTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of EOL alignment started |
| STAT_NO_EOL_ALIGNMENT_SUCCESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of EOL alignment started and success |
| STAT_NO_SERVICE_ALIGNMENT_STARTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of service alignment started |
| STAT_NO_SERVICE_ALIGNMENT_SUCCESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of service alignment started and success |

### RES_0XAB00_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_KALIBRIERUNG_STATUS_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_MRR_KALIBRIERUNG_DETAIL | - | - | - | Ausführungsstatus |
| STAT_RADAR_KALIBRIERUNG_FEHLER_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_MRR_KALIBRIERUNG_FEHLER_DETAIL | - | - | - | Fehler Detail |
| STAT_RADAR_KALIBRIERUNG_FORTSCHRITT_WERT | - | - | + | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Routinenfortschritt |
| STAT_RADAR_KALIBRIERUNG_STATUS | + | + | - | 0-n | high | unsigned char | - | TAB_MRR_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XAB01_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEICHERN_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_MRR_STATUS_ROUTINE | - | - | - | Status Speichern EOL Winkel Routine |

### RES_0XD3E3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADAR_KORREKTURWINKEL_HORIZONTAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwinkel horizontale Richtung |
| STAT_RADAR_KORREKTURWINKEL_VERTIKAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwinkel vertikale Richtung |
| STAT_RADAR_EOL_HORIZONTAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-Winkel horizontale Richtung |
| STAT_RADAR_EOL_VERTIKAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-Winkel vertikale Richtung |

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
| TARGET_OBJECT_INJECTION_ACTIVATE | 0x4001 | - | Aktiviert Funktion Target Object Injection für die Stände die die Funktion zur Verfügung haben | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4001_D | - |
| TARGET_OBJECT_INJECTION_OBJECTS | 0x4002 | - | Übermittelt die Objektdaten an Target Object Injection wenn die Funktion aktiv ist | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| STATUS_MRR_ALIGNMENT_COUNTER | 0x4003 | - | Liest die Alignment-Counter aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003_D |
| STEUERN_MRR_RESET_ALIGNMENT_COUNTER | 0x4004 | - | Reset alignment counter. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4004_D | - |
| STEUERN_AUSGABE_FCW | 0x4036 | - | Dieser Job muss die Vor -und Akutwarnung, HBA-Umparametrisierung und Prefill für die Fahrzeugwarnung triggern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4036_D | - |
| STEUERN_AUSGABE_PFGS | 0x4038 | - | Dieser Job muss die Vor -und Akutwarnung, HBA-Umparametrisierung, Prefill, PreRun und die Generatoransteuerung für die Reaktion auf Fußgänger triggern. Wenn die Kundenfunktionen nicht durch die Parameter 0 = Aus dieses Jobs abgeschaltet werden, sollen sie spätestens nach 10 Sekunden automatisch abgeschaltet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4038_D | - |
| MRR_KALIBRIERUNG | 0xAB00 | - | Starten und Status von der Radar Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB00_R | RES_0xAB00_R |
| STEUERN_SPEICHERUNG_EOL_WINKEL | 0xAB01 | - | Speichern der EOL Winkel nach erfolgreicher Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB01_R |
| STATUS_MRR_KALIBRIERWINKEL | 0xD3E3 | - | Auslesen der Korrekturwinkel und der EOL-WINKEL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3E3_D |
| BETRIEBSSPANNUNG | 0xDFCC | STAT_UBAT_WERT | Betriebsspannung Steuergerät | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_STEUERGERAET | 0xDFCD | STAT_TEMP_SG_WERT | TEMPERATUR im STEUERGERAET | °C | - | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

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

### TAB_FUNKTIONSVERFUEGBARKEIT_US

| WERT | TEXT |
| --- | --- |
| 0x02 | Funktion verfügbar - Bereit |
| 0x03 | Funktion ist in reversilbler Rückfallebene -Bereit |
| 0x04 | Funktion ist in irreversilbler Rückfallebene -Bereit |
| 0x06 | Funktion ist nicht verfügbar: Fehler |
| 0x0A | Funktion Aktiv |
| 0x0B | Funktion Aktiv - reversible Rückfallebene |
| 0x0C | Funktion Aktiv - irreversible Rückfallebene |
| 0x0E | Funktion ist nicht verfügbar |

### TAB_HBA_PARAMETRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Default |
| 0x01 | Leicht erhöhte Empfindlichkeit |
| 0x02 | Erhöhte Empfindlichkeit |
| 0x03 | Höchste Empfindlichkeit |
| 0x04 | Empfindlichkeit für Zielbremsung 1 |
| 0x05 | Empfindlichkeit für Zielbremsung 2 |
| 0x06 | Empfindlichkeit für Zielbremsung 3 |

### TAB_MRR_KALIBRIERUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolg Spiegelposition 1 |
| 0x01 | Erfolg Spiegelposition 2 |
| 0x02 | Kalibrierung abgebrochen |
| 0x03 | Fehler |
| 0xFF | Wert ungültig |

### TAB_MRR_KALIBRIERUNG_FEHLER_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Leistung zu niedrig |
| 0x02 | Korrekturwinkel horizontal zu hoch |
| 0x03 | Korrekturwinkel vertikal zu hoch |
| 0x04 | Spiegelausrichtung fehlerhaft |
| 0x05 | Störeinflüsse in der Umgebung |
| 0x06 | Zeitüberschreitung Spiegelposition 2 |
| 0x07 | SW Zeitüberschreitung |
| 0x08 | NVM Fehler |
| 0x09 | Abstand Spiegel zu groß |
| 0x0A | Abstand Spiegel zu gering |
| 0xFF | Ungültig |

### TAB_MRR_KALIBRIERUNG_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Statisch Spiegelposition 1 |
| 0x01 | Statisch Spiegelposition 2 |
| 0x02 | Dynamische Kalibrierung |
| 0x03 | Statisch Spiegelposition 1 HO |
| 0x04 | Statisch Spiegelposition 2 HO |

### TAB_MRR_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktiv |
| 0x01 | Erfolgreich |
| 0x02 | Abbruch |
| 0x04 | Fehler |
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
| 0x00 | Defaultwert |
| 0xFF | Wert ungültig |

### TAB_WARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Vorwarnung |
| 0x02 | Akutwarnung |

### TOI_ACTIVATE_RESULT

| WERT | TEXT |
| --- | --- |
| 0xFF | Funktion Status erfolgreich geändert |
| 0x12 | SUBFUNCTIONNOTSUPPORTED: Target Object Injection ist in diesem Stand nicht verfügbar (nicht implementiert) |
| 0x31 | REQUESTOUTOFRANGE: Invalid Wert für Argument (muss entweder 0 oder 1 sein) |

### TOI_OBJECTS_RESULT

| WERT | TEXT |
| --- | --- |
| 0xFF | Funktion Status erfolgreich geändert |
| 0x12 | SUBFUNCTIONNOTSUPPORTED: Target Object Injection ist in diesem Stand nicht verfügbar (nicht implementiert) |
| 0x22 | CONDITIONSNOTCORRECT: TOI muss erst aktiviert werden |
| 0x13 | INCORRECTMESSAGELENGTHORINVALIDFORMAT: Nachrichtlänge ist ungültig oder Protokol Version ist unbekannt, oder Objektformaterkennung ist fehlgeschlagen |

### TAB_0X2951

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |
