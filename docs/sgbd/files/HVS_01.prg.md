# HVS_01.prg

## General

|  |  |
| --- | --- |
| File | HVS_01.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 162 |
| Origin | BMW EA-442 Michael_Binder |
| Revision | 0.016 |
| Author | BMW EA-402 Castellnou |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Hochvoltspeicher |  |  |
| ORIGIN | string | BMW EA-442 Michael_Binder |  |  |
| REVISION | string | 0.016 |  |  |
| AUTHOR | string | BMW EA-402 Castellnou |  |  |
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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### ECU_UID_LESEN

Auslesen der ECU-UID UDS   : $22   ReadDataByIdentifier UDS   : $8000 Sub-Parameter ECU-UID

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_CERTIFICATE_MANAGEMENT_READOUT_STATUS

This job reads out the status of the certificate management extensive check

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

### ARG_0X0F2B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURE_ID | + | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Feature ID Byte 1: Type of Feature ID Byte 2-3: App-No or Transition-No |

### ARG_0X0F2D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURE_ID | + | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Feature ID Byte 1: Type of Feature ID Byte 2-3: App-No or Transition-No |

### ARG_0X1104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LCS_NUMBER | 0-n | high | signed char | - | TAB_LCS_NUMBER | - | - | - | - | - | Locking Configuration Switch Number 0x02 - 0x63: reserviert für Systemfunktionen 0x64 - 0xFE: reserviert für individuelle Funktionen |
| LCS_VALUE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der neue Wert des LCS (Locking Configuration Switch). |

### ARG_0X1105_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA_ID | + | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | SecOC dataID des zu setzenden Counters |
| NEW_COUNTER_VALUE | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert des Counters. |

### ARG_0X1106_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA_ID | + | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | SecOC dataID des auszulesenden Counters |

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht ansteuern,  0x01: ansteuern |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_MESSBOTSCHAFTEN | - | - | - | - | - | 0 = nicht aktiv / 1 = EoL-Test / 2 = Stationärspeicher / 255 = unplausibel |

### ARG_0X4003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0-n | high | unsigned char | - | TAB_SHOWROOMMODUS | - | - | - | - | - | 0 = kein Trigger; 1 = Triggern des Showroom-Modus |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Entwicklerjobs. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Keine Übernahme  1 = Übernahme  |

### ARG_0X651B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Passwort zur Ausführung des Entwicklerjobs |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0=geregelt/keine Anforderung, 1=Schütze schließen |

### ARG_0XE546_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XE54F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLERKREISLAUF_VENTIL | - | - | - | - | - | Steuern des Kühlmittel-Ventils: schliessen oder oeffnen |

### ARG_0XE551_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht freigegeben; 1 = freigegeben |

### ARG_0XE556_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XE558_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XE55C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivieren der SOC Rekalbieriung (0 = nicht aktiv; 1 = aktiv) >> Job darf nur bei GEÖFFNETEN Schützen durchgeführt werden! |

### ARG_0XE55F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XE56C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Inkrementieren 1 = Inkrementieren |

### ARG_0XE56D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XE583_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Temperaturhistogramms von Modul x |

### ARG_0XE584_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungsfehlergrenzenhistogramms von Modul x |

### ARG_0XE585_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NR_MODUL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Eingabe der Modulnummer zum Zurücksetzen des Spannungshistogramms von Modul x |

### ARG_0XE586_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0= nicht Zurücksetzen  1 = Zurücksetzen |

### ARG_0XE59B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Sicherheitspasswort für Veränderung des SOC Werts |
| SOC_VORGABE | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Soc Wert vorgeben (-20 - 110%) |

### ARG_0XE59D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht Zurücksetzen,  1 =Zurücksetzen |

### ARG_0XE5B9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| AKTIVIERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 = sperren; 1 = freischalten |

### ARG_0XE5BA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| AKTIVIERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 = sperren; 1 = freischalten |

### ARG_0XE5C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZ_HAUPT_VORLADE | - | - | - | - | - | Auswahl des Schützes |
| ANZAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | - | - | Anzahl der Schützschaltungen |

### ARG_0XE5C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZE_DC_LADEN | - | - | - | - | - | Auswahl des Schützes |
| ANZAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | - | - | Anzahl der Schützschaltungen |

### ARG_0XE5C3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZ_HAUPT_VORLADE | - | - | - | - | - | Auswahl des Schützes |
| SCHALTEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 = schließen; 1 = öffnen |

### ARG_0XE5C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZE_DC_LADEN | - | - | - | - | - | Auswahl des Schützes |
| SCHALTEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 = schließen; 1 = öffnen |

### ARG_0XE5C5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZ_HAUPT_VORLADE | - | - | - | - | - | Auswahl des Schützes |
| ZURUECKSETZEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = zurücksetzen; 0 = nicht zurücksetzen |

### ARG_0XE5C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnose Jobs |
| SCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZE_DC_LADEN | - | - | - | - | - | Auswahl des Schützes |
| ZURUECKSETZEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = zurücksetzen; 0 = nicht zurücksetzen |

### ARG_0XE5CD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht freigegeben;  1 = freigegeben; |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Diagnosejobs |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HWMODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_U_ERR_GWK

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_U_ERR_GWK_MODUL_1 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | GWK Verletzung Modul 1   |
| STAT_BF_U_ERR_GWK_MODUL_2 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | GWK Verletzung Modul 2  |
| STAT_BF_U_ERR_GWK_MODUL_3 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | GWK Verletzung Modul 3  |
| STAT_BF_U_ERR_GWK_MODUL_4 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | GWK Verletzung Modul 4  |
| STAT_BF_U_ERR_GWK_MODUL_5 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | GWK Verletzung Modul 5  |
| STAT_BF_U_ERR_GWK_MODUL_6 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | GWK Verletzung Modul 6  |
| STAT_BF_U_ERR_GWK_MODUL_7 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | GWK Verletzung Modul 7  |
| STAT_BF_U_ERR_GWK_MODUL_8 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | GWK Verletzung Modul 8  |
| STAT_BF_U_ERR_GWK_MODUL_9 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | GWK Verletzung Modul 9  |
| STAT_BF_U_ERR_GWK_MODUL_10 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | GWK Verletzung Modul 10  |
| STAT_BF_U_ERR_GWK_MODUL_11 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | GWK Verletzung Modul 11  |
| STAT_BF_U_ERR_GWK_MODUL_12 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | GWK Verletzung Modul 12  |
| STAT_BF_U_ERR_GWK_MODUL_13 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | GWK Verletzung Modul 13  |
| STAT_BF_U_ERR_GWK_MODUL_14 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | GWK Verletzung Modul 14 |
| STAT_BF_U_ERR_GWK_MODUL_15 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | GWK Verletzung Modul 15  |
| STAT_BF_U_ERR_GWK_MODUL_16 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | GWK Verletzung Modul 16  |
| STAT_BF_U_ERR_GWK_MODUL_17 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | GWK Verletzung Modul 17  |
| STAT_BF_U_ERR_GWK_MODUL_18 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | GWK Verletzung Modul 18  |
| STAT_BF_U_ERR_GWK_MODUL_19 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | GWK Verletzung Modul 19  |
| STAT_BF_U_ERR_GWK_MODUL_20 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | GWK Verletzung Modul 20  |
| STAT_BF_U_ERR_GWK_MODUL_21 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | GWK Verletzung Modul 21  |
| STAT_BF_U_ERR_GWK_MODUL_22 | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | GWK Verletzung Modul 22  |
| STAT_BF_U_ERR_GWK_MODUL_23 | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | GWK Verletzung Modul 23  |
| STAT_BF_U_ERR_GWK_MODUL_24 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | GWK Verletzung Modul 24  |
| STAT_BF_U_ERR_GWK_MODUL_25 | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | GWK Verletzung Modul 25  |
| STAT_BF_U_ERR_GWK_MODUL_26 | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | GWK Verletzung Modul 26  |
| STAT_BF_U_ERR_GWK_MODUL_27 | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | GWK Verletzung Modul 27  |

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
| 0x020700 | Energiesparmode aktiv | 0 | 0x00000010 |
| 0x020708 | Codierung: Steuergerät ist nicht codiert | 0 | 0x00000020 |
| 0x020709 | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | 0x00000020 |
| 0x02070A | Codierung: Codierdaten nicht qualifiziert | 0 | 0x00000020 |
| 0x020724 | NVM_E_HARDWARE | 0 | 0x00000020 |
| 0x020736 | SecOC: Freshness Value Synchronisation fehlgeschlagen | 0 | 0x00000020 |
| 0x020740 | Spannungsversorgung - Lokale Unterspannung | 0 | 0x00000080 |
| 0x020741 | Spannungsversorgung - Lokale Überspannung | 0 | 0x00000080 |
| 0x020780 | ZERTIFIKATE_UND_BINDINGS_TYP1_WERK_NICHT_BEREIT | 0 | 0x00000020 |
| 0x020781 | ONLINE_ZERTIFIKATE_UND_BINDINGS_TYP2_NICHT_BEREIT | 0 | 0x00000020 |
| 0x020782 | Secure Feature Activation: Tokenprüfung fehlgeschlagen | 0 | 0x00000020 |
| 0x020783 | Secure Feature Activation: Tokenprüfung läuft aktuell oder ungeprüfte Tokens sind gespeichert | 0 | 0x00000020 |
| 0x020784 | Locking Configuration Switch: Einer oder mehrere Schalter nicht gesetzt. | 0 | 0x00000020 |
| 0x020785 | Secure ECU Modes: ECU not in field mode. | 0 | 0x00000020 |
| 0x020790 | SecOC: Keypackprüfung fehlgeschlagen | 0 | 0x00000020 |
| 0x020791 | SecOC: Bypass aktiv - Sichere Onboard Kommunikation deaktivert | 0 | 0x00000010 |
| 0x02FF07 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | 0x00000010 |
| 0x21F00D | Speicher - Kühlventil - Kurzschluss nach Masse | 0 | 0x00000080 |
| 0x21F00E | Speicher - Kühlventil - Kurzschluss nach Plus | 0 | 0x00000080 |
| 0x21F00F | Speicher - Kühlventil - offene Leitung | 0 | 0x00000080 |
| 0x21F010 | Speicher - Kühlventil - Treiberfehler | 0 | 0x00000080 |
| 0x21F028 | U/I-Sensor - HV-Strom - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F02C | U/I-Sensor - HV-Strom - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F04B | Battery Management Unit (BMU) - FUSI - Selbst-Reset ausgelöst | 0 | 0x00000100 |
| 0x21F05D | U/I-Sensor - HV-Strom - Offene Leitung | 0 | 0x00000080 |
| 0x21F05E | U/I-Sensor - HV-Strom - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F05F | U/I-Sensor - HV-Strom - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F061 | Speichermodul 01 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F062 | Speichermodul 01 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F063 | Speichermodul 02 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F064 | Speichermodul 02 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F065 | Speichermodul 03 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F066 | Speichermodul 03 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F067 | Speichermodul 04 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F068 | Speichermodul 04 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F069 | Speichermodul 05 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F06A | Speichermodul 05 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F06B | Speichermodul 06 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F06C | Speichermodul 06 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F06D | Speichermodul 07 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F06E | Speichermodul 07 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F06F | Speichermodul 08 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F070 | Speichermodul 08 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F071 | Speichermodul 09 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F072 | Speichermodul 09 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F073 | Speichermodul 10 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F074 | Speichermodul 10 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F075 | Speichermodul 11 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F076 | Speichermodul 11 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F077 | Speichermodul 12 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F078 | Speichermodul 12 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F081 | Speichermodul 01 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F083 | Speichermodul 02 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F085 | Speichermodul 03 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F087 | Speichermodul 04 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F089 | Speichermodul 05 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F08B | Speichermodul 06 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F08D | Speichermodul 07 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F08F | Speichermodul 08 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F091 | Speichermodul 09 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F093 | Speichermodul 10 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F095 | Speichermodul 11 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F097 | Speichermodul 12 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F0C1 | CSC - Symmetrierschaltung - Temperatursensor - ausgefallen | 0 | 0x00000080 |
| 0x21F0C2 | Speichermodul 01 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C3 | Speichermodul 02 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C4 | Speichermodul 03 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C5 | Speichermodul 04 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C6 | Speichermodul 05 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C7 | Speichermodul 06 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C8 | Speichermodul 07 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0C9 | Speichermodul 08 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0CA | Speichermodul 09 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0CB | Speichermodul 10 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0CC | Speichermodul 11 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0CD | Speichermodul 12 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E3 | Speichermodul 01 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E4 | Speichermodul 02 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E5 | Speichermodul 03 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E6 | Speichermodul 04 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E7 | Speichermodul 05 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E8 | Speichermodul 06 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0E9 | Speichermodul 07 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0EA | Speichermodul 08 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0EB | Speichermodul 09 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0EC | Speichermodul 10 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0ED | Speichermodul 11 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F0EE | Speichermodul 12 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F10F | Battery Management Unit (BMU) - FUSI - Aktive Zwischenkreisentladung - fehlerhaft | 0 | 0x00000100 |
| 0x21F115 | Schütze - Hauptschütz HV-Minus - Schütz dauerhaft offen | 0 | 0x00000080 |
| 0x21F116 | Schütze - Hauptschütz HV-Minus - Schütz dauerhaft geschlossen | 0 | 0x00000080 |
| 0x21F117 | Schütze - Hauptschütz HV-Plus - Schütz dauerhaft geschlossen | 0 | 0x00000080 |
| 0x21F118 | Schütze - Hauptschütz HV-Plus - Schütz dauerhaft offen | 0 | 0x00000080 |
| 0x21F11A | Schütze - Vorladeschütz HV-Plus - Schütz dauerhaft offen | 0 | 0x00000080 |
| 0x21F11C | U/I-Sensor - HV-Strom - Leitungsschutzgrenze verletzt | 0 | 0x00000080 |
| 0x21F11E | U/I-Sensor - HV-Strom - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F11F | U/I-Sensor - HV-Strom - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F120 | Battery Management Unit (BMU) - Interne Uhr ausgefallen | 0 | 0x00000100 |
| 0x21F121 | Battery Management Unit (BMU) - Interne Weckfunktion defekt | 0 | 0x00000100 |
| 0x21F122 | Speichermodul 01 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F123 | Speichermodul 02 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F124 | Speichermodul 03 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F125 | Speichermodul 04 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F126 | Speichermodul 05 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F127 | Speichermodul 06 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F128 | Speichermodul 07 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F129 | Speichermodul 08 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12A | Speichermodul 09 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12B | Speichermodul 10 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12C | Speichermodul 11 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12D | Speichermodul 12 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12E | Speichermodul 13 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F12F | Speichermodul 14 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F130 | Speichermodul 15 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F131 | Speichermodul 16 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F133 | Speichermodul 01 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F134 | Speichermodul 02 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F135 | Speichermodul 03 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F136 | Speichermodul 04 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F137 | Speichermodul 05 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F138 | Speichermodul 06 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F139 | Speichermodul 07 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13A | Speichermodul 08 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13B | Speichermodul 09 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13C | Speichermodul 10 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13D | Speichermodul 11 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13E | Speichermodul 12 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F13F | Speichermodul 13 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F140 | Speichermodul 14 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F141 | Speichermodul 15 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F142 | Speichermodul 16 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F151 | Battery Management Unit (BMU) - FUSI - Service Disconnect undefiniert | 0 | 0x00000100 |
| 0x21F152 | Battery Management Unit (BMU) - FUSI - Service Disconnect offen | 0 | 0x00000100 |
| 0x21F155 | Schütze - Vorladeschütz HV-Plus - Zeitüberschreitung | 0 | 0x00000080 |
| 0x21F157 | Schütze - Vorladeschütz HV-Plus - Kurzschluss im Zwischenkreis | 0 | 0x00000080 |
| 0x21F158 | Battery Management Unit (BMU) - Flashmode - Schütze - Trennelement offen | 0 | 0x00000040 |
| 0x21F159 | U/I-Sensor - HV-Strom - Strom unplausibel | 0 | 0x00000080 |
| 0x21F15A | Battery Management Unit (BMU) - Relais Treiberschaltung - Spulenstrom - Messbereichsverletzung | 0 | 0x00000100 |
| 0x21F161 | Speichermodul 01 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F162 | Speichermodul 02 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F163 | Speichermodul 03 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F164 | Speichermodul 04 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F165 | Speichermodul 05 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F166 | Speichermodul 06 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F167 | Speichermodul 07 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F168 | Speichermodul 08 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F169 | Speichermodul 09 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F16A | Speichermodul 10 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F16B | Speichermodul 11 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F16C | Speichermodul 12 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F171 | Speichermodul 01 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F172 | Speichermodul 02 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F173 | Speichermodul 03 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F174 | Speichermodul 04 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F175 | Speichermodul 05 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F176 | Speichermodul 06 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F177 | Speichermodul 07 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F178 | Speichermodul 08 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F179 | Speichermodul 09 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F17A | Speichermodul 10 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F17B | Speichermodul 11 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F17C | Speichermodul 12 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F184 | Speichermodul 01 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F185 | Speichermodul 02 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F186 | Speichermodul 03 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F187 | Speichermodul 04 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F188 | Speichermodul 05 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F189 | Speichermodul 06 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18A | Speichermodul 07 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18B | Speichermodul 08 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18C | Speichermodul 09 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18D | Speichermodul 10 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18E | Speichermodul 11 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F18F | Speichermodul 12 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F1A7 | Speichermodul 01 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1A8 | Speichermodul 02 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1A9 | Speichermodul 03 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AA | Speichermodul 04 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AB | Speichermodul 05 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AC | Speichermodul 06 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AD | Speichermodul 07 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AE | Speichermodul 08 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1AF | Speichermodul 09 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B0 | Speichermodul 10 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B1 | Speichermodul 11 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B2 | Speichermodul 12 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B3 | Speichermodul 13 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B4 | Speichermodul 14 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B5 | Speichermodul 15 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B6 | Speichermodul 16 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F1B7 | Speichermodul 13 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1B8 | Speichermodul 14 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1B9 | Speichermodul 15 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1BB | Speichermodul 16 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1BC | Speichermodul 17 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1BE | Speichermodul 18 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1C0 | Speichermodul 19 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1C1 | Speichermodul 20 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1C2 | Speichermodul 21 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1C3 | Speichermodul 01 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C4 | Speichermodul 02 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C5 | Speichermodul 03 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C6 | Speichermodul 04 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C7 | Speichermodul 05 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C8 | Speichermodul 06 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1C9 | Speichermodul 07 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CA | Speichermodul 08 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CB | Speichermodul 09 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CC | Speichermodul 10 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CD | Speichermodul 11 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CE | Speichermodul 12 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1CF | Speichermodul 13 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1D0 | Speichermodul 14 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1D1 | Speichermodul 15 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1D2 | Speichermodul 16 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1D3 | Speichermodul 22 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D4 | Speichermodul 23 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D5 | Speichermodul 24 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D6 | Speichermodul 25 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D7 | Speichermodul 26 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D8 | Speichermodul 27 - Temperatursensoren - Oberer Schwellenwert überschritten - (Sicherheitsgrenze) | 0 | 0x00000080 |
| 0x21F1D9 | Speichermodul 13 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DA | Speichermodul 14 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DB | Speichermodul 15 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DC | Speichermodul 16 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DD | Speichermodul 17 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DE | Speichermodul 18 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1DF | Speichermodul 19 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1E0 | Speichermodul 20 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1E1 | Speichermodul 13 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E2 | Speichermodul 14 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E3 | Speichermodul 15 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E4 | Speichermodul 16 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E5 | Speichermodul 17 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E6 | Speichermodul 18 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E7 | Speichermodul 19 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E8 | Speichermodul 20 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1E9 | Speichermodul 17 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1EA | Speichermodul 18 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F1EB | Speichermodul 21 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1EC | Speichermodul 22 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1ED | Speichermodul 23 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1EE | Speichermodul 24 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1EF | Speichermodul 25 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1F0 | Speichermodul 26 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1F1 | Speichermodul 27 - Bauteilschutz - Spannung - Sicherheitsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F1F2 | Speichermodul 21 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1F3 | Speichermodul 22 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1F4 | Speichermodul 23 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1F5 | Speichermodul 24 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1FC | Speichermodul 25 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F1FF | Speichermodul 26 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F202 | Speichermodul 27 - Bauteilschutz - Spannung - Sicherheitsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F206 | Speichermodul 19 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F20E | Speichermodul 20 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F215 | Speichermodul 21 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F216 | Speichermodul 22 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F217 | Speichermodul 23 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F218 | Speichermodul 24 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F219 | Speichermodul 25 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F21A | Speichermodul 26 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F21B | Speichermodul 27 - Bauteilschutz - Zelldefekt festgestellt | 0 | 0x00000080 |
| 0x21F21C | Schütze - Hauptschütze - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F21D | Schütze - Ladeschütze - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F21E | Schütze - Hauptschütze - Max. Schaltzyklenanzahl Überschreitung | 0 | 0x00000080 |
| 0x21F21F | Schütze - Hauptschütze - Absehbare max. Schaltzyklenanzahl Überschreitung | 0 | 0x00000080 |
| 0x21F223 | Schütze - DC Ladeschütze - Max. Schaltzyklenanzahl überschritten | 0 | 0x00000080 |
| 0x21F224 | Schütze - DC Ladeschütze - Absehbare max. Schaltzyklenanzahl Überschreitung | 0 | 0x00000080 |
| 0x21F225 | Schütze - Vorladeschütz HV-Plus - Schütz offen - Schließversuch selbstständig | 0 | 0x00000080 |
| 0x21F226 | Schütze - Hauptschütz HV-Minus - Schütz offen - Schließversuch selbstständig | 0 | 0x00000080 |
| 0x21F227 | Schütze - Ladeschütze - Bauteilschutz - Temperatur - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F228 | Schütze - Ladeschütze - Bauteilschutz - Temperatur - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F229 | U/I-Sensor - Kommunikation ausgefallen | 0 | 0x00000080 |
| 0x21F22A | Schütze - Hauptschütze - nicht freigegeben | 0 | 0x00000100 |
| 0x21F22B | U/I-Sensor - Kommunikation - Invalide Daten | 1 | 0x00080000 |
| 0x21F250 | Speichermodul 13 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F251 | Speichermodul 13 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F252 | Speichermodul 13 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F253 | Speichermodul 13 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F254 | Speichermodul 14 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F255 | Speichermodul 14 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F256 | Speichermodul 14 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F257 | Speichermodul 14 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F258 | Speichermodul 14 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F259 | Speichermodul 15 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F25A | Speichermodul 15 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F25B | Speichermodul 15 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F25C | Speichermodul 15 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F25D | Speichermodul 15 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F25E | Speichermodul 16 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F25F | Speichermodul 16 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F260 | Speichermodul 16 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F261 | Speichermodul 16 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F262 | Speichermodul 16 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F263 | Speichermodul 17 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F264 | Speichermodul 17 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F265 | Speichermodul 17 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F266 | Speichermodul 17 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F267 | Speichermodul 17 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F268 | Speichermodul 18 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F269 | Speichermodul 18 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F26A | Speichermodul 18 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F26B | Speichermodul 18 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F26C | Speichermodul 18 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F26D | Speichermodul 19 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F26E | Speichermodul 19 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F26F | Speichermodul 17 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F274 | Speichermodul 19 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F277 | Speichermodul 19 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F278 | Speichermodul 19 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F279 | Speichermodul 20 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F27A | Speichermodul 20 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F27B | Speichermodul 20 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F27C | Speichermodul 20 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F27D | Speichermodul 20 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F27E | Speichermodul 21 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F27F | Speichermodul 18 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F280 | Speichermodul 21 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F281 | Speichermodul 21 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F282 | Speichermodul 21 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F283 | Speichermodul 21 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F284 | Speichermodul 22 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F285 | Speichermodul 22 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F286 | Speichermodul 22 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F287 | Speichermodul 22 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F288 | Speichermodul 22 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F289 | Speichermodul 23 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F28A | Speichermodul 23 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F28B | Speichermodul 23 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F28C | Speichermodul 23 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F28D | Speichermodul 23 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F28E | Speichermodul 24 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F28F | Speichermodul 24 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F290 | Speichermodul 24 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F291 | Speichermodul 24 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F292 | Speichermodul 24 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F293 | Speichermodul 25 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F294 | Speichermodul 25 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F295 | Speichermodul 25 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F296 | Speichermodul 25 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F297 | Speichermodul 25 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F298 | Speichermodul 26 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F299 | Speichermodul 26 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F29A | Speichermodul 26 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F29B | Speichermodul 26 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F29C | Speichermodul 26 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F29D | Speichermodul 27 - Spannungssensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F29E | Speichermodul 27 - Spannungssensoren - unplausibel | 0 | 0x00000080 |
| 0x21F29F | Speichermodul 27 - Temperatursensoren - ausgefallen | 0 | 0x00000080 |
| 0x21F2A0 | Speichermodul 27 - Temperatursensoren - Offene Leitung | 0 | 0x00000080 |
| 0x21F2A1 | Speichermodul 27 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F2A2 | Speichermodul 13 - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F2A3 | Schütze - Ladeschütz HV-Minus - Schütz dauerhaft geschlossen | 0 | 0x00000080 |
| 0x21F2A4 | Schütze - Ladeschütz HV-Minus - Schütz dauerhaft offen | 0 | 0x00000080 |
| 0x21F2A5 | Schütze - Ladeschütz HV-Plus - Schütz dauerhaft geschlossen | 0 | 0x00000080 |
| 0x21F2A6 | Schütze - Ladeschütz HV-Plus - Schütz dauerhaft offen | 0 | 0x00000080 |
| 0x21F2A7 | Battery Management Unit (BMU) - Powerfuse - Zündung fehlgeschlagen | 0 | 0x00000100 |
| 0x21F2A8 | Battery Management Unit (BMU) - Powerfuse - Zündpille/Ansteuerungselektronik fehlerhaft | 0 | 0x00000100 |
| 0x21F2AA | Speichermodul 19 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2AB | Speichermodul 20 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2AC | Speichermodul 21 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2AD | Speichermodul 22 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2AE | Speichermodul 23 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2AF | Speichermodul 24 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2B0 | Schütze - Ladeschütze - Nicht freigegeben | 0 | 0x00000100 |
| 0x21F2BD | Speichermodul 25 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2BE | Speichermodul 26 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2BF | Speichermodul 27 - Bauteilschutz - Spannung - Betriebsgrenze oben verletzt | 0 | 0x00000080 |
| 0x21F2D0 | Speichermodul 17 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2D1 | Battery Management Unit (BMU) - Vorladewiderstand - Bauteilschutz - Überhitzungsschutz aktiv | 0 | 0x00000100 |
| 0x21F2DD | Speichermodul 18 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2DE | Speichermodul 19 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2DF | Speichermodul 20 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E0 | Speichermodul 21 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E1 | Speichermodul 22 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E2 | Speichermodul 23 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E3 | Speichermodul 24 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E4 | Speichermodul 25 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E5 | Speichermodul 26 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E6 | Speichermodul 27 - Bauteilschutz - Spannung - Betriebsgrenze unten verletzt | 0 | 0x00000080 |
| 0x21F2E7 | Speichermodul 17 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2E8 | Speichermodul 18 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2E9 | Speichermodul 19 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2EA | Speichermodul 20 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2EB | Speichermodul 21 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2EC | Speichermodul 22 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2ED | Speichermodul 23 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2EE | Speichermodul 24 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2EF | Speichermodul 25 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2F0 | Speichermodul 26 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2F1 | Speichermodul 27 - Bauteilschutz - Temperatur - Betriebsgrenze verletzt | 0 | 0x00000080 |
| 0x21F2F2 | U/I-Sensor - HV-Batteriespannung - Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x21F2F3 | U/I-Sensor - Spannung Hauptschütz HV-Plus - Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x21F2F4 | U/I-Sensor - Spannung Hauptschütz HV-Minus - Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x21F2F5 | U/I-Sensor - Spannung Ladeschütz HV-Minus - Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x21F2F6 | U/I-Sensor - Spannung Ladeschütz HV-Plus - Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x21F2F7 | U/I-Sensor - HV-Batteriespannung - Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x21F2F8 | U/I-Sensor - Spannung Hauptschütz HV-Plus - Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x21F2F9 | U/I-Sensor - Spannung Hauptschütz HV-Minus - Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x21F2FA | U/I-Sensor - Spannung Ladeschütz HV-Minus - Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x21F2FB | U/I-Sensor - Spannung Ladeschütz HV-Plus - Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x21F2FC | U/I-Sensor - HV-Batteriespannung - unplausibel | 1 | 0x00000080 |
| 0x21F2FD | U/I-Sensor - Spannung Hauptschütz HV-Plus - unplausibel | 1 | 0x00000080 |
| 0x21F2FE | U/I-Sensor - Spannung Hauptschütz HV-Minus - unplausibel | 1 | 0x00000080 |
| 0x21F2FF | U/I-Sensor - Spannung Ladeschütz HV-Minus - unplausibel | 1 | 0x00000080 |
| 0x21F300 | U/I-Sensor - Spannung Ladeschütz HV-Plus - unplausibel | 1 | 0x00000080 |
| 0x21F301 | Battery Management Unit (BMU) - Vorladung - Zwischenkreis - nicht angeschlossen | 0 | 0x00000100 |
| 0x21F309 | Speicher - Kapazitätsalterung - Kapazität zu gering | 0 | 0x00000080 |
| 0x21F30B | CSC - Symmetrierschaltung - Temperatursensoren - unplausibel | 0 | 0x00000080 |
| 0x21F30C | CSC - Symmetrierschaltung - Temperatursensoren - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F30D | CSC - Symmetrierschaltung - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F30E | CSC - Symmetrierschaltung - Temperatursensoren - Symmetrierung nicht möglich | 0 | 0x00000080 |
| 0x21F30F | CSC - Versorgungspannungssensor - Kurzschluss nach Plus/Masse | 0 | 0x00000080 |
| 0x21F310 | CSC - Versorgungspannungssensor - offene Leitung | 0 | 0x00000080 |
| 0x21F311 | CSC - Versorgungspannungssensor - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F312 | CSC - Versorgungspannungssensor - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F313 | Speicher - Kühlmittel - Temperatursensor 01 - offene Leitung | 0 | 0x00000080 |
| 0x21F314 | Speicher - Kühlmittel - Temperatursensor 01 - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F315 | Speicher - Kühlmittel - Temperatursensor 01 - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F316 | Speicher - Kühlmittel - Temperatursensor 02 - offene Leitung | 0 | 0x00000080 |
| 0x21F317 | Speicher - Kühlmittel - Temperatursensor 02 - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F318 | Speicher - Kühlmittel - Temperatursensor 02 - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F323 | Battery Management Unit (BMU) - Spannungssensor KL30 - unplausibel | 0 | 0x00000080 |
| 0x21F324 | Battery Management Unit (BMU) - Spannungssensor KL30C - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F325 | Battery Management Unit (BMU) - Spannungssensor KL30C - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F328 | Battery Management Unit (BMU) - Vorladung - Zwischenkreis - Niederohmiger Verbraucher | 0 | 0x00000080 |
| 0x21F32A | Battery Management Unit (BMU) - Spannungsfestigkeit - Zähler überschritten | 0 | 0x00000100 |
| 0x21F32B | Battery Management Unit (BMU) - Schnellentladung - nicht verfügbar | 0 | 0x00000100 |
| 0x21F32C | Battery Management Unit (BMU) - Status - Vorladung gesperrt | 0 | 0x00000100 |
| 0x21F32D | Battery Management Unit (BMU) - Powerfuse - ausgelöst | 0 | 0x00000100 |
| 0x21F32E | Isolationsüberwachung - Messung defekt | 0 | 0x00000080 |
| 0x21F34B | CSC 01 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F34C | CSC 02 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F34D | CSC 03 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F34E | CSC 04 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F34F | CSC 05 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F350 | CSC 06 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F351 | CSC 07 - Versorgung - Überspannung | 0 | 0x00000080 |
| 0x21F352 | CSC 01 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F353 | CSC 02 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F354 | CSC 03 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F355 | CSC 04 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F356 | CSC 05 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F357 | CSC 06 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F358 | CSC 07 - Versorgung - Unterspannung | 0 | 0x00000080 |
| 0x21F359 | Battery Management Unit (BMU) - CSC Kommunikation ausgefallen | 0 | 0x00000100 |
| 0x21F35A | Schütze - Ladeschütze - Bauteilschutz - Temperatur - unplausibel | 0 | 0x00000080 |
| 0x21F35B | Schütze - Hauptschütze - Bauteilschutz - Temperatur - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F35C | Schütze - Hauptschütze - Bauteilschutz - Temperatur - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F35D | Schütze - Hauptschütze - Bauteilschutz - Temperatur - unplausibel | 0 | 0x00000080 |
| 0x21F35E | U/I-Sensor - Strommesswiderstand - Bauteilschutz - Temperatur - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F35F | U/I-Sensor - Strommesswiderstand - Bauteilschutz - Temperatur - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F360 | U/I-Sensor - Strommesswiderstand - Bauteilschutz - Temperatur - unplausibel | 0 | 0x00000100 |
| 0x21F361 | Speichermodul 01 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F362 | Speichermodul 02 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F363 | Speichermodul 03 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F364 | Speichermodul 04 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F365 | Speichermodul 05 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F366 | Speichermodul 06 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F367 | Speichermodul 07 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F368 | Speichermodul 08 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F369 | Speichermodul 09 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36A | Speichermodul 10 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36B | Speichermodul 11 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36C | Speichermodul 12 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36D | Speichermodul 13 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36E | Speichermodul 14 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F36F | Speichermodul 15 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F370 | Speichermodul 16 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F371 | Speichermodul 17 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F372 | Speichermodul 18 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F373 | Speichermodul 19 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F374 | Speichermodul 20 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F375 | Speichermodul 21 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F376 | Speichermodul 22 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F377 | Speichermodul 23 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F378 | Speichermodul 24 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F379 | Speichermodul 25 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F37A | Speichermodul 26 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F37B | Speichermodul 27 - Temperatursensoren - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F37C | Crash-Erkennung - ACSM Signal unplausibel | 0 | 0x00000100 |
| 0x21F37E | Crash-Erkennung - Crash erkannt via ACSM Signal | 0 | 0x00000100 |
| 0x21F380 | Crash-Erkennung - KL30C unplausibel | 0 | 0x00000100 |
| 0x21F382 | Crash-Erkennung - Funktion ausgefallen | 0 | 0x00000100 |
| 0x21F385 | Battery Management Unit (BMU), Kurzschlussstrommessung, Offsetkalibrierung: Schwellwert über-/unterschritten | 0 | 0x00000080 |
| 0x21F386 | Battery Management Unit (BMU), EOL: Datenblock ungültig | 0 | 0x00000040 |
| 0x21F387 | Battery Management Unit (BMU), CSC: Showroom Modus nicht möglich | 0 | 0x00000100 |
| 0x21F388 | Battery Management Unit (BMU), Beschädigungs-/Flüssigkeitserkennungssensor: unplausibel | 0 | 0x00000100 |
| 0x21F389 | Battery Management Unit (BMU), Beschädigungs-/Flüssigkeitserkennungssensor: offene Leitung | 0 | 0x00000080 |
| 0x21F38A | Battery Management Unit (BMU), Beschädigungs-/Flüssigkeitserkennungssensor: oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x21F38B | Battery Management Unit (BMU), Beschädigungs-/Flüssigkeitserkennungssensor: unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x21F38D | Battery Management Unit (BMU), Spannungssensor KL30C, Qualifier ungültig: Relais geöffnet | 0 | 0x00000100 |
| 0x21F38E | Battery Management Unit (BMU), Steuergerät intern: Sammelfehler Hardware | 0 | 0x00000200 |
| 0x21F38F | Battery Management Unit (BMU), Steuergerät intern: Sammelfehler Software | 0 | 0x00000400 |
| 0x21F390 | Battery Management Unit (BMU), Steuergerät intern: RAM Fehler | 0 | 0x00000200 |
| 0x21F391 | Battery Management Unit (BMU), Steuergerät intern: ROM Fehler | 0 | 0x00000200 |
| 0x21F392 | Speicher, Thermisches Ereignis erkannt | 0 | 0x00000100 |
| 0x21F393 | Speicher, Sammelfehler: Transportverhindernderter Fehlerspeicher aktiv | 0 | 0x00000100 |
| 0xCAC528 | AE-CAN-FD Control Module Bus OFF | 0 | 0x00001000 |
| 0xCACBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | 0x00000010 |
| 0xCAD434 | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 | 0x00004000 |
| 0xCAD444 | Botschaft (CombinedChargerUnit1000msNo1, ID: CombinedChargerUnit1000msNo1) fehlt | 1 | 0x00004000 |
| 0xCAD448 | Botschaft (CombinedChargerUnit100msNo1, ID: CombinedChargerUnit100msNo1) fehlt | 1 | 0x00004000 |
| 0xCAD44A | Botschaft (CombinedChargerUnit100msNo1, ID: CombinedChargerUnit100msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xCAD450 | Botschaft (CombinedChargerUnit10msNo2, ID: CombinedChargerUnit10msNo2) fehlt | 1 | 0x00004000 |
| 0xCAD454 | Botschaft (CombinedChargerUnit20msNo1, ID: CombinedChargerUnit20msNo1) fehlt | 1 | 0x00004000 |
| 0xCAD456 | Botschaft (CombinedChargerUnit20msNo1, ID: CombinedChargerUnit20msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xCAD490 | Botschaft (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) fehlt | 1 | 0x00004000 |
| 0xCAD498 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 | 0x00004000 |
| 0xCAD4A0 | Botschaft (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) fehlt | 1 | 0x00004000 |
| 0xCAD4B0 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | 0x00004000 |
| 0xCAD4B2 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | 0x00010000 |
| 0xCAD4B8 | Botschaft (HighVoltagePowerManagement200msNo1, ID: HighVoltagePowerManagement200msNo1) fehlt | 1 | 0x00004000 |
| 0xCAD4BA | Botschaft (HighVoltagePowerManagement200msNo1, ID: HighVoltagePowerManagement200msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xCAD558 | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | 0x00004000 |
| 0xCAD5C0 | Botschaft (Netzwerkmanagement-3 AE_CAN_FD, ID: NM3_AE_CAN_FD) fehlt | 1 | 0x00004000 |
| 0xCAD5F8 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | 0x00004000 |
| 0xCAD5FC | Botschaft (Sicher Fahrgestellnummer, ID: SECU_FAHRGESTELLNUMMER) fehlt | 1 | 0x00004000 |
| 0xCAD600 | Botschaft (Sicher Response, ID: SECU_RESP) fehlt | 1 | 0x00004000 |
| 0xCAD618 | Botschaft (Status Crash, ID: ST_CR) fehlt | 1 | 0x00004000 |
| 0xCAD714 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | 0x00004000 |
| 0xCAD716 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | 0x00010000 |
| 0xCAD720 | Botschaft (Wärmemanagement Motorsteuerung, ID: HT_MGT_ENG_CTR) fehlt | 1 | 0x00004000 |
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
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1770 | STATUS_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1771 | STATUS_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1772 | STATUS_OTHER_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1773 | STATUS_ONLINE_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1774 | STATUS_ONLINE_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1821 | STATUS_SYMMETRIC_KEYS | 0-n | High | 0xFF | TAB_SYMMETRIC_KEYS | - | - | - |
| 0x1822 | FAILED_DATA_ID_ENTRY_1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1823 | FAILED_DATA_ID_ENTRY_2 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1824 | FAILED_DATA_ID_ENTRY_3 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1825 | FAILED_DATA_ID_ENTRY_4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1826 | FAILED_DATA_ID_ENTRY_5 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x7080 | UWB_TEMP_ZELL_MAX | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x7081 | UWB_TEMP_ZELL_MIN | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x7082 | UWB_SPANNUNG_ZELL_MAX | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x7083 | UWB_SPANNUNG_ZELL_MIN | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x7084 | UWB_STROM_HV | A | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x70C0 | UWB_TEMP_EXTERN | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x8002 | ECU_MODE | 0-n | High | 0xFF | TAB_ECU_MODE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HWMODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | Erstmuster (Serie) |
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
| 0x21F002 | Speichermodul 01 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 1 | 0x00000000 |
| 0x21F003 | Speichermodul 02 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F006 | Speichermodul 03 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F007 | Speichermodul 04 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F008 | Speichermodul 05 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F017 | Speichermodul 06 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F01B | Speichermodul 07 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F01C | Speichermodul 08 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F026 | Speichermodul 09 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F027 | Speichermodul 10 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F030 | Speichermodul 11 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F031 | Speichermodul 12 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F032 | Speichermodul 13 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F033 | Speichermodul 14 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F034 | Speichermodul 15 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F035 | Speichermodul 16 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F036 | Speichermodul 17 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F037 | Speichermodul 18 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F038 | Speichermodul 19 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F039 | Speichermodul 20 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03A | Speichermodul 21 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03B | Speichermodul 22 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03C | Speichermodul 23 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03D | Speichermodul 24 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03E | Speichermodul 25 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F03F | Speichermodul 26 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F040 | Speichermodul 27 - Bauteilschutz - Temperatur - Leistungsgrenze aktiv | 0 | 0x00000000 |
| 0x21F0F5 | Speicher - Symmetrierschaltung - Hohe Asymmetrie | 0 | 0x00000000 |
| 0x21F2A9 | Battery Management Unit (BMU) - Crasherkennung - kurzzeitiges Crash Event | 0 | 0x00000000 |
| 0x21F2B1 | Speicher - Kühlmittel - Temperatursensor 01 - Kurzschluss nach Plus/Masse | 0 | 0x00000000 |
| 0x21F2B2 | Schütze - Hauptschütz HV-Minus - Zustandsermittlung fehlgeschlagen | 0 | 0x00000000 |
| 0x21F2B3 | Schütze - Hauptschütz HV-Plus - Zustandsermittlung fehlgeschlagen | 0 | 0x00000000 |
| 0x21F2B4 | Schütze - Vorladeschütz HV-Minus - Zustandsermittlung fehlgeschlagen | 0 | 0x00000000 |
| 0x21F2B5 | Schütze - Ladeschütz HV-Minus - Zustandsermittlung fehlgeschlagen | 0 | 0x00000000 |
| 0x21F2B6 | Schütze - Ladeschütz HV-Plus - Zustandsermittlung fehlgeschlagen | 0 | 0x00000000 |
| 0x21F2C0 | Battery Management Unit (BMU) - Status - Vorladung temporär gesperrt | 0 | 0x00000000 |
| 0x21F302 | CSC - Entladeschutz aktiv | 0 | 0x00000000 |
| 0x21F303 | Speicher, Bauteilschutz, Stromgrenzen: Reduzierung aktiv | 0 | 0x00000000 |
| 0x21F319 | Speicher - Kühlmittel - Temperatursensor 02 - Kurzschluss nach Plus/Masse | 0 | 0x00000000 |
| 0x21F31A | CSC 01 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F31B | CSC 02 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F31C | CSC 03 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F31D | CSC 04 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F31E | CSC 05 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F31F | CSC 06 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F320 | CSC 07 - Symmetrierschaltung - Temperatursensoren - Oberer/Unterer Schwellenwert über-/unterschritten | 0 | 0x00000000 |
| 0x21F327 | Battery Management Unit (BMU) - Spannungssensor KL30C - Kurzschluss nach Plus/Masse | 0 | 0x00000000 |
| 0x21F32F | Speichermodul 01 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F330 | Speichermodul 02 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F331 | Speichermodul 03 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F332 | Speichermodul 04 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F333 | Speichermodul 05 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F334 | Speichermodul 06 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F335 | Speichermodul 07 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F336 | Speichermodul 08 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F337 | Speichermodul 09 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F338 | Speichermodul 10 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F339 | Speichermodul 11 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33A | Speichermodul 12 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33B | Speichermodul 13 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33C | Speichermodul 14 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33D | Speichermodul 15 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33E | Speichermodul 16 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F33F | Speichermodul 17 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F340 | Speichermodul 18 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F341 | Speichermodul 19 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F342 | Speichermodul 20 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F343 | Speichermodul 21 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F344 | Speichermodul 22 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F345 | Speichermodul 23 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F346 | Speichermodul 24 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F347 | Speichermodul 25 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F348 | Speichermodul 26 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F349 | Speichermodul 27 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F34A | Speichermodul 28 - Bauteilschutz - Spannungssensoren - Messbereichsverletzung | 0 | 0x00000000 |
| 0x21F38C | Battery Management Unit (BMU), Codierung DC Charging: nicht korrekt | 0 | 0x00000000 |
| 0x800730 | Fehler der Fahrzeug-Security | 0 | 0x00000000 |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROG_DEP_SP21_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | reserved |
| 0x01 | correctResult |
| 0x02 | incorrectResult |
| 0x03 | incorrectResult error SWE - HWE |
| 0x04 | incorrectResult error SWE - SWE |
| 0x05 | correctResult warning SWE - SWE |
| 0x06 | incorrect Result error Master i.O. - Slaves n.i.O. |
| 0xFF | reserved |

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

### RES_0X0F2C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SFA_VERSION_SOFTWARE_DATA | + | - | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Version number for the SFA software in the ECU |
| STAT_SFA_VERSION_TOKEN_DATA | + | - | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Version number for the accepted token format (see SFA_WRITE_TOKEN) which matches the version of the software |

### RES_0X10AB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WORSTCASECHECKTIME_IN_S_WERT | + | - | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Worst Case Laufzeit in Sekunden |

### RES_0X1106_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA_ID_DATA | + | - | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | SecOC dataID |
| STAT_CURRENT_COUNTER_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Aktueller Counterwert. |

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

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_BMU_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Position noch nicht definiert. |
| STAT_TEMP_CPU_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur der CPU |
| STAT_TEMP_POWER_FUSE_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur an der Sicherung |
| STAT_TEMP_GND_HAUPTSCHUETZ_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur am Haupt-GND Relais |
| STAT_TEMP_GND_LADESCHUETZ_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur am DC-GND Relais |
| STAT_TEMP_SHUNT_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Temperatur unter dem Shunt (GPIO0 U/I Sensor) |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_SEC_COU_REL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: BMU-interne Relativzeit berechnet von der LowLevel  |
| STAT_T_SEC_COU_REL_INTERN_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Dauer der letzten Schlafphase der BMU-HL  |
| STAT_WECKZEIT_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Naechste Soll-Weckzeit fuer Periodic-Betrieb |
| STAT_T_SEC_COU_REL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: BMU-interne Relativzeit berechnet von der LowLevel  |
| STAT_T_SEC_COU_REL_INTERN_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Dauer der letzten Schlafphase der BMU-HL  |
| STAT_WECKZEIT_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Naechste Soll-Weckzeit fuer Periodic-Betrieb |
| STAT_T_SEC_COU_REL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: BMU-interne Relativzeit berechnet von der LowLevel  |
| STAT_T_SEC_COU_REL_INTERN_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Dauer der letzten Schlafphase der BMU-HL  |
| STAT_WECKZEIT_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Naechste Soll-Weckzeit fuer Periodic-Betrieb |
| STAT_T_SEC_COU_REL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: BMU-interne Relativzeit berechnet von der LowLevel  |
| STAT_T_SEC_COU_REL_INTERN_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Dauer der letzten Schlafphase der BMU-HL  |
| STAT_WECKZEIT_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Naechste Soll-Weckzeit fuer Periodic-Betrieb |
| STAT_T_SEC_COU_REL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: BMU-interne Relativzeit berechnet von der LowLevel  |
| STAT_T_SEC_COU_REL_INTERN_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Dauer der letzten Schlafphase der BMU-HL  |
| STAT_WECKZEIT_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Naechste Soll-Weckzeit fuer Periodic-Betrieb |

### RES_0X400A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_INDICATOR | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: inactive 0x01: active |

### RES_0X8002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_MODE_TYPE_SUBTYPE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | ECU Mode |
| STAT_ECU_MODE | 0-n | high | unsigned char | - | TAB_ECU_MODE | - | - | - | ECU-Mode |

### RES_0XAE75_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAPAZITAET_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kapazitätsschätzwert in % (Wertebereich 0-100%) bezogen auf Nennkapazität |
| STAT_AKTUELLER_ZUSTAND_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SME_ERMITTLUNG | - | - | - | Rückgabe Ermittlung läuft, erfolgreich oder mit Fehler beendet |

### RES_0XAE77_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM | - | - | + | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_ERGEBNISSE | - | - | - | Status der Symmetrierung |

### RES_0XDDBC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | aktueller Anzeige Soc |
| STAT_MAXIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | obere Grenze des Anzeige Soc |
| STAT_MINIMALE_ANZEIGE_SOC_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | untere Grenze des Anzeige Soc |

### RES_0XDDC0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCORE_SIM_MIN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten minimalen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_SIM_MAX_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten maximalen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_SIM_AVG_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der berechneten durchschnittlichen Zellkerntemperaturen (327,67 = unplausibel) |
| STAT_TCORE_PLAUSIBILITAET | 0-n | high | unsigned char | - | TAB_TCORE_PLAUSI | - | - | - | Bewertung der Temperaturrückgabe: 0 = T_core und T_term unplausibel, 1 = T_core plausibel,  2 = T_term (Ersatzwert bei T_core unplausibel) |

### RES_0XDFA3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINIMALE_RESTSTANDZEIT_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nach max. Entladung durch Kunden (SOC_Lim_warn) minimale Standzeit in Tagen, die ein Kunde ohne Nachladen zur Verfügung hat bis zum Eintreten der Schädigung der Hochvolt-Batterie. |
| STAT_AKTUELLE_RESTSTANDZEIT_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Standzeit in Tagen bis zum Eintreten der Schädigung der HV-Batterie, wenn diese nicht nachgeladen wird. (65535 = unplausibel), plausibel nur bei SHUTDOWN o. PERIODIC |

### RES_0XE4C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_SEC_COU_REL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativer Sekundenzähler der Fahrzeug-Systemzeit |
| STAT_INTERNE_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BMU-interne Relativzeit berechnet von der LowLevel |
| STAT_T_SEC_COU_REL_INTERN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Interner relativer Sekundenzähler der BMU-HL |
| STAT_IST_LEBENSDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ist-Lebensdauer der BMU-HL |
| STAT_HV_OFF_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der aktuellen bzw. letzten HV-OFF-Phase |
| STAT_IST_SCHLAFPHASE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Schlafphase der BMU-HL |
| STAT_WECKZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Naechste Soll-Weckzeit fuer Periodic-Betrieb |

### RES_0XE4C1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SOC_GRENZE_1_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 1 |
| STAT_MIN_SOC_GRENZE_2_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 2 |
| STAT_MIN_SOC_GRENZE_3_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 3 |
| STAT_MIN_SOC_GRENZE_4_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 4 |
| STAT_MIN_SOC_GRENZE_5_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 5 |
| STAT_MIN_SOC_GRENZE_6_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 6 |
| STAT_MIN_SOC_GRENZE_7_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 7 |
| STAT_MIN_SOC_GRENZE_8_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 8 |
| STAT_MIN_SOC_GRENZE_9_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 9 |
| STAT_MIN_SOC_GRENZE_10_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 10 |
| STAT_MIN_SOC_GRENZE_11_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 11 |
| STAT_MIN_SOC_GRENZE_12_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 12 |
| STAT_MIN_SOC_GRENZE_13_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 13 |
| STAT_MIN_SOC_GRENZE_14_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 14 |
| STAT_MIN_SOC_GRENZE_15_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 15 |
| STAT_MIN_SOC_GRENZE_16_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 16 |
| STAT_MIN_SOC_GRENZE_17_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 17 |
| STAT_MIN_SOC_GRENZE_18_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 18 |
| STAT_MIN_SOC_GRENZE_19_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 19 |
| STAT_MIN_SOC_GRENZE_20_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 20 |
| STAT_MIN_SOC_GRENZE_21_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 21 |
| STAT_MIN_SOC_GRENZE_22_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 22 |
| STAT_MIN_SOC_GRENZE_23_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 23 |
| STAT_MIN_SOC_GRENZE_24_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 24 |
| STAT_MIN_SOC_GRENZE_25_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 25 |
| STAT_MIN_SOC_GRENZE_26_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 26 |
| STAT_MIN_SOC_GRENZE_27_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 27 |
| STAT_MIN_SOC_GRENZE_28_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 28 |
| STAT_MIN_SOC_GRENZE_29_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 29 |
| STAT_MIN_SOC_GRENZE_30_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 30 |
| STAT_MIN_SOC_GRENZE_31_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 31 |
| STAT_MIN_SOC_GRENZE_32_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 32 |
| STAT_MIN_SOC_GRENZE_33_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 33 |
| STAT_MIN_SOC_GRENZE_34_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 34 |
| STAT_MIN_SOC_GRENZE_35_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 35 |
| STAT_MIN_SOC_GRENZE_36_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 36 |
| STAT_MIN_SOC_GRENZE_37_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 37 |
| STAT_MIN_SOC_GRENZE_38_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 38 |
| STAT_MIN_SOC_GRENZE_39_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 39 |
| STAT_MIN_SOC_GRENZE_40_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 40 |
| STAT_MIN_SOC_GRENZE_41_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 41 |
| STAT_MIN_SOC_GRENZE_42_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 42 |
| STAT_MIN_SOC_GRENZE_43_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 43 |
| STAT_MIN_SOC_GRENZE_44_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 44 |
| STAT_MIN_SOC_GRENZE_45_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 45 |
| STAT_MIN_SOC_GRENZE_46_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 46 |
| STAT_MIN_SOC_GRENZE_47_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 47 |
| STAT_MIN_SOC_GRENZE_48_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 48 |
| STAT_MIN_SOC_GRENZE_49_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 49 |
| STAT_MIN_SOC_GRENZE_50_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 50 |
| STAT_MIN_SOC_GRENZE_51_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 51 |
| STAT_MIN_SOC_GRENZE_52_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 52 |
| STAT_MIN_SOC_GRENZE_53_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 53 |
| STAT_MIN_SOC_GRENZE_54_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 54 |
| STAT_MIN_SOC_GRENZE_55_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 55 |
| STAT_MIN_SOC_GRENZE_56_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 56 |
| STAT_MIN_SOC_GRENZE_57_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 57 |
| STAT_MIN_SOC_GRENZE_58_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 58 |
| STAT_MIN_SOC_GRENZE_59_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 59 |
| STAT_MIN_SOC_GRENZE_60_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 60 |
| STAT_MIN_SOC_GRENZE_61_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 61 |
| STAT_MIN_SOC_GRENZE_62_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 62 |
| STAT_MIN_SOC_GRENZE_63_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 63 |
| STAT_MIN_SOC_GRENZE_64_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 64 |
| STAT_MIN_SOC_GRENZE_65_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 65 |
| STAT_MIN_SOC_GRENZE_66_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 66 |
| STAT_MIN_SOC_GRENZE_67_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 67 |
| STAT_MIN_SOC_GRENZE_68_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 68 |
| STAT_MIN_SOC_GRENZE_69_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 69 |
| STAT_MIN_SOC_GRENZE_70_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 70 |
| STAT_MIN_SOC_GRENZE_71_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 71 |
| STAT_MIN_SOC_GRENZE_72_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 72 |
| STAT_MIN_SOC_GRENZE_73_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 73 |
| STAT_MIN_SOC_GRENZE_74_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 74 |
| STAT_MIN_SOC_GRENZE_75_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 75 |
| STAT_MIN_SOC_GRENZE_76_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 76 |
| STAT_MIN_SOC_GRENZE_77_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 77 |
| STAT_MIN_SOC_GRENZE_78_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 78 |
| STAT_MIN_SOC_GRENZE_79_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 79 |
| STAT_MIN_SOC_GRENZE_80_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 80 |
| STAT_MIN_SOC_GRENZE_81_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 81 |
| STAT_MIN_SOC_GRENZE_82_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 82 |
| STAT_MIN_SOC_GRENZE_83_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 83 |
| STAT_MIN_SOC_GRENZE_84_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 84 |
| STAT_MIN_SOC_GRENZE_85_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 85 |
| STAT_MIN_SOC_GRENZE_86_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 86 |
| STAT_MIN_SOC_GRENZE_87_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 87 |
| STAT_MIN_SOC_GRENZE_88_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 88 |
| STAT_MIN_SOC_GRENZE_89_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 89 |
| STAT_MIN_SOC_GRENZE_90_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 90 |
| STAT_MIN_SOC_GRENZE_91_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 91 |
| STAT_MIN_SOC_GRENZE_92_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 92 |
| STAT_MIN_SOC_GRENZE_93_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 93 |
| STAT_MIN_SOC_GRENZE_94_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 94 |
| STAT_MIN_SOC_GRENZE_95_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 95 |
| STAT_MIN_SOC_GRENZE_96_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 96 |
| STAT_MIN_SOC_GRENZE_97_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 97 |
| STAT_MIN_SOC_GRENZE_98_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 98 |
| STAT_MIN_SOC_GRENZE_99_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 99 |
| STAT_MIN_SOC_GRENZE_100_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 100 |
| STAT_MIN_SOC_GRENZE_101_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 101 |
| STAT_MIN_SOC_GRENZE_102_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 102 |
| STAT_MIN_SOC_GRENZE_103_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 103 |
| STAT_MIN_SOC_GRENZE_104_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 104 |
| STAT_MIN_SOC_GRENZE_105_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 105 |
| STAT_MIN_SOC_GRENZE_106_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 106 |
| STAT_MIN_SOC_GRENZE_107_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 107 |
| STAT_MIN_SOC_GRENZE_108_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige minimale SOC Grenze in Zelle 108 |
| STAT_MAX_SOC_GRENZE_1_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 1 |
| STAT_MAX_SOC_GRENZE_2_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 2 |
| STAT_MAX_SOC_GRENZE_3_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 3 |
| STAT_MAX_SOC_GRENZE_4_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 4 |
| STAT_MAX_SOC_GRENZE_5_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 5 |
| STAT_MAX_SOC_GRENZE_6_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 6 |
| STAT_MAX_SOC_GRENZE_7_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 7 |
| STAT_MAX_SOC_GRENZE_8_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 8 |
| STAT_MAX_SOC_GRENZE_9_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 9 |
| STAT_MAX_SOC_GRENZE_10_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 10 |
| STAT_MAX_SOC_GRENZE_11_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 11 |
| STAT_MAX_SOC_GRENZE_12_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 12 |
| STAT_MAX_SOC_GRENZE_13_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 13 |
| STAT_MAX_SOC_GRENZE_14_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 14 |
| STAT_MAX_SOC_GRENZE_15_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 15 |
| STAT_MAX_SOC_GRENZE_16_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 16 |
| STAT_MAX_SOC_GRENZE_17_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 17 |
| STAT_MAX_SOC_GRENZE_18_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 18 |
| STAT_MAX_SOC_GRENZE_19_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 19 |
| STAT_MAX_SOC_GRENZE_20_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 20 |
| STAT_MAX_SOC_GRENZE_21_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 21 |
| STAT_MAX_SOC_GRENZE_22_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 22 |
| STAT_MAX_SOC_GRENZE_23_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 23 |
| STAT_MAX_SOC_GRENZE_24_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 24 |
| STAT_MAX_SOC_GRENZE_25_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 25 |
| STAT_MAX_SOC_GRENZE_26_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 26 |
| STAT_MAX_SOC_GRENZE_27_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 27 |
| STAT_MAX_SOC_GRENZE_28_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 28 |
| STAT_MAX_SOC_GRENZE_29_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 29 |
| STAT_MAX_SOC_GRENZE_30_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 30 |
| STAT_MAX_SOC_GRENZE_31_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 31 |
| STAT_MAX_SOC_GRENZE_32_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 32 |
| STAT_MAX_SOC_GRENZE_33_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 33 |
| STAT_MAX_SOC_GRENZE_34_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 34 |
| STAT_MAX_SOC_GRENZE_35_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 35 |
| STAT_MAX_SOC_GRENZE_36_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 36 |
| STAT_MAX_SOC_GRENZE_37_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 37 |
| STAT_MAX_SOC_GRENZE_38_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 38 |
| STAT_MAX_SOC_GRENZE_39_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 39 |
| STAT_MAX_SOC_GRENZE_40_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 40 |
| STAT_MAX_SOC_GRENZE_41_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 41 |
| STAT_MAX_SOC_GRENZE_42_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 42 |
| STAT_MAX_SOC_GRENZE_43_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 43 |
| STAT_MAX_SOC_GRENZE_44_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 44 |
| STAT_MAX_SOC_GRENZE_45_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 45 |
| STAT_MAX_SOC_GRENZE_46_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 46 |
| STAT_MAX_SOC_GRENZE_47_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 47 |
| STAT_MAX_SOC_GRENZE_48_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 48 |
| STAT_MAX_SOC_GRENZE_49_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 49 |
| STAT_MAX_SOC_GRENZE_50_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 50 |
| STAT_MAX_SOC_GRENZE_51_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 51 |
| STAT_MAX_SOC_GRENZE_52_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 52 |
| STAT_MAX_SOC_GRENZE_53_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 53 |
| STAT_MAX_SOC_GRENZE_54_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 54 |
| STAT_MAX_SOC_GRENZE_55_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 55 |
| STAT_MAX_SOC_GRENZE_56_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 56 |
| STAT_MAX_SOC_GRENZE_57_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 57 |
| STAT_MAX_SOC_GRENZE_58_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 58 |
| STAT_MAX_SOC_GRENZE_59_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 59 |
| STAT_MAX_SOC_GRENZE_60_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 60 |
| STAT_MAX_SOC_GRENZE_61_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 61 |
| STAT_MAX_SOC_GRENZE_62_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 62 |
| STAT_MAX_SOC_GRENZE_63_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 63 |
| STAT_MAX_SOC_GRENZE_64_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 64 |
| STAT_MAX_SOC_GRENZE_65_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 65 |
| STAT_MAX_SOC_GRENZE_66_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 66 |
| STAT_MAX_SOC_GRENZE_67_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 67 |
| STAT_MAX_SOC_GRENZE_68_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 68 |
| STAT_MAX_SOC_GRENZE_69_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 69 |
| STAT_MAX_SOC_GRENZE_70_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 70 |
| STAT_MAX_SOC_GRENZE_71_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 71 |
| STAT_MAX_SOC_GRENZE_72_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 72 |
| STAT_MAX_SOC_GRENZE_73_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 73 |
| STAT_MAX_SOC_GRENZE_74_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 74 |
| STAT_MAX_SOC_GRENZE_75_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 75 |
| STAT_MAX_SOC_GRENZE_76_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 76 |
| STAT_MAX_SOC_GRENZE_77_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 77 |
| STAT_MAX_SOC_GRENZE_78_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 78 |
| STAT_MAX_SOC_GRENZE_79_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 79 |
| STAT_MAX_SOC_GRENZE_80_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 80 |
| STAT_MAX_SOC_GRENZE_81_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 81 |
| STAT_MAX_SOC_GRENZE_82_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 82 |
| STAT_MAX_SOC_GRENZE_83_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 83 |
| STAT_MAX_SOC_GRENZE_84_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 84 |
| STAT_MAX_SOC_GRENZE_85_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 85 |
| STAT_MAX_SOC_GRENZE_86_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 86 |
| STAT_MAX_SOC_GRENZE_87_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 87 |
| STAT_MAX_SOC_GRENZE_88_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 88 |
| STAT_MAX_SOC_GRENZE_89_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 89 |
| STAT_MAX_SOC_GRENZE_90_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 90 |
| STAT_MAX_SOC_GRENZE_91_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 91 |
| STAT_MAX_SOC_GRENZE_92_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 92 |
| STAT_MAX_SOC_GRENZE_93_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 93 |
| STAT_MAX_SOC_GRENZE_94_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 94 |
| STAT_MAX_SOC_GRENZE_95_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 95 |
| STAT_MAX_SOC_GRENZE_96_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 96 |
| STAT_MAX_SOC_GRENZE_97_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 97 |
| STAT_MAX_SOC_GRENZE_98_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 98 |
| STAT_MAX_SOC_GRENZE_99_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 99 |
| STAT_MAX_SOC_GRENZE_100_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 100 |
| STAT_MAX_SOC_GRENZE_101_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 101 |
| STAT_MAX_SOC_GRENZE_102_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 102 |
| STAT_MAX_SOC_GRENZE_103_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 103 |
| STAT_MAX_SOC_GRENZE_104_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 104 |
| STAT_MAX_SOC_GRENZE_105_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 105 |
| STAT_MAX_SOC_GRENZE_106_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 106 |
| STAT_MAX_SOC_GRENZE_107_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 107 |
| STAT_MAX_SOC_GRENZE_108_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gültige maximale SOC Grenze in Zelle 108 |

### RES_0XE4C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUTZENERGIE_DYN_AKT_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Aktuell aus dem HVS entladbare Energie, auf Basis der prädizierten mittleren Speicherleistung |
| STAT_NUTZENERGIE_DYN_MAX_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Bei vollgeladenem HVS entladbare Energie, auf Basis der prädizierten mittleren Speicherleistung |
| STAT_NUTZENERGIE_DYN_HVS_QUAL | 0-n | high | unsigned char | - | TAB_HVS_INTERNAL_QUALIFIER | - | - | - | Qualifier für die aktuell aus dem HVS entladbare Energie, auf Basis der prädizierten mittleren Speicherleistung |
| STAT_PRAEDIZIERTE_ENTLADELEISTUNG_HVS_WERT | kW | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Prädizierte mittlere HVS-Entladeleistung (Ungültig 0xFFFF) |
| STAT_PRAEDIZIERTE_LADELEISTUNG_HVS_WERT | kW | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Prädizierte mittlere HVS-Ladeleistung (Ungültig 0xFFFF) |
| STAT_BRUTTOENERGIE_ENTLADEN_AKT_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Aktueller Bruttoenergiegehalt im HVS |
| STAT_BRUTTOENERGIE_ENTLADEN_MAX_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Maximaler Bruttoenergiegehalt im HVS |
| STAT_BRUTTOENERGIE_LADEN_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Zu ladende Energiemenge um den HVS vollzuladen |
| STAT_VERLUSTENERGIE_ENTLADEN_AKT_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Prognostizierte Verlustenergie bei aktuellem Ladezustand bis zur vollständigen Entladung des HVS |
| STAT_VERLUSTENERGIE_ENTLADEN_AKT_HVS_QUAL | 0-n | high | unsigned char | - | TAB_HVS_INTERNAL_QUALIFIER | - | - | - | Qualifier für die prognostizierte Verlustenergie bei aktuellem Ladezustand bis zur vollständigen Entladung des HVS |
| STAT_VERLUSTENERGIE_ENTLADEN_MAX_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Prognostizierte Verlustenergie bei vollgeladenem Ladezustand bis zur vollständigen Entladung des HVS |
| STAT_VERLUSTENERGIE_ENTLADEN_MAX_HVS_QUAL | 0-n | high | unsigned char | - | TAB_HVS_INTERNAL_QUALIFIER | - | - | - | Qualifier für die prognostizierte Verlustenergie bei vollgeladenem Ladezustand bis zur vollständigen Entladung des HVS |
| STAT_VERLUSTENERGIE_LADEN_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Prognostizierte Verlustenergie bei akutellem Ladezustand bis der HVS vollgeladen ist |
| STAT_VERLUSTENERGIE_LADEN_HVS_QUAL | 0-n | high | unsigned char | - | TAB_HVS_INTERNAL_QUALIFIER | - | - | - | Qualifier für die prognostizierte Verlustenergie bei akutellem Ladezustand bis der HVS vollgeladen ist |
| STAT_EL_LADUNG_ENTLADEN_HVS_WERT | Ah | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Elektrische Ladung HVS aktuell entladbar (Ungültig 0xFFFF) |
| STAT_EL_LADUNG_ENTLADEN_MAX_HVS_WERT | Ah | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Elektrische Ladung HVS maximal entladbar (Ungültig 0xFFFF) |
| STAT_EL_LADUNG_LADEN_HVS_WERT | Ah | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Elektrische Ladung HVS aktuell ladbar (Ungültig 0xFFFF) |
| STAT_SOC_AKT_MITTEL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | -20.0 | Mittelwert aller aktueller Ladezustände (Ungültig 0xFFFF) |
| STAT_SOC_LADEENDE_MITTEL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | -20.0 | Mittelwert Ladezustand bei Ladeende |
| STAT_SOC_ENTLADEENDE_MITTELL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | -20.0 | Mittelwert Ladezustand bei Entladeende |
| STAT_SOH_C_MITTEL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | -20.0 | Mittelwert über alle Gesundheitszustände (Ungültig 0xFFFF) |
| STAT_INNENWIEDERSTAND_KORREKTURFAKTOR_MITTEL_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittelwert über alle Innenwiederstands-Korrekturfaktoren; Alpha-Long (Ungültig 0xFFFF) |
| STAT_PRAEDIZIERTE_STROM_ENTLADEN_AKT_HVS_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Prädizierter mittlerer Strom beim Entladen, auf Basis der prädizierten mittleren Speicherleistung |
| STAT_PRAEDIZIERTE_STROM_ENTLADEN_MAX_HVS_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Prädizierter mittlerer Strom beim vollständigen Entladen, auf Basis der prädizierten mittleren Speicherleistung |
| STAT_PRAEDIZIERTE_STROM_LADEN_HVS_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Prädizierter mittlerer Strom beim Laden, auf Basis der prädizierten mittleren Speicherleistung |

### RES_0XE4C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DEGRADIERUNG_RMS_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: RMS  |
| STAT_ANZAHL_DEGRADIERUNG_TEMP_HIGH_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: Temperatur zu hoch |
| STAT_ANZAHL_DEGRADIERUNG_TEMP_LOW_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: Temperatur zu niedrig |
| STAT_ANZAHL_DEGRADIERUNG_ERRCAT_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: Anliegende ErrCat |
| STAT_ANZAHL_DEGRADIERUNG_CNDC_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: Leitungsschutz |
| STAT_ANZAHL_DEGRADIERUNG_IDC_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: I-DC Derating |
| STAT_ANZAHL_DEGRADIERUNG_TESTBENCH_WERT | HEX | high | unsigned int | - | - | - | - | - | Anzahl Degradierung: Testbench Mode |

### RES_0XE4C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_NOP_MOD_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse U < UminLim |
| STAT_HIS_SPANNUNG_NOP_MOD_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_NOP_MOD_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse 3.57 < U <= 3.93 |
| STAT_HIS_SPANNUNG_NOP_MOD_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Minuten in der Klasse 3.93 < U <= UmaxLim |

### RES_0XE541_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEICHER_TYP | 0-n | high | unsigned int | - | TAB_SP_TYP | - | - | - | Speicher-Typ [Ungültig: 0xFFFF] |
| STAT_SPEICHER_NR_WERT | HEX | high | unsigned int | - | - | - | - | - | Speicher-Nummer [Ungültig: 0xFFFF] |

### RES_0XE542_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_LADEVORGAENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Anzahl ALLER Ladevorgänge. |
| STAT_ANZAHL_VOLLLADUNGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Anzahl aller VOLL-Ladevorgänge |

### RES_0XE543_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_C_MIN_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C vor Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximaler SoH_C vor Kapazitätstest |
| STAT_SOH_C_MEAN_VOR_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Mittlerer SoH_C vor Kapazitätstest |
| STAT_SOH_C_MIN_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C nach Kapazitätstest |
| STAT_SOH_C_MAX_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximaler SoH_C nach Kapazitätstest |
| STAT_SOH_C_MEAN_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Mittlerer SoH_C nach Kapazitätstest |
| STAT_ID_SOH_C_MIN_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_ID_SOH_C_MAX_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_SA_SOH_MEAN_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Standardabweichung vom durchschnittlichen SoH-C nach Kapazitätstest |
| STAT_AH_MEAS_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Gemessenes Ah-Integral bei Ladevorgang von Kapazitätstest |
| STAT_AH_CSC_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Geschätzter Ah-Bedarf durch CSC's bei Ladevorgang von Kapazitätstest |
| STAT_AH_EST_DCH_SOH_C_MIN_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Entlade-Ah-Schätzung der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_DCH_SOH_C_MIN_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Korrigierte CV-Kapa-Kompensation der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_CHA_SOH_C_MIN_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Lade-Ah-Schätzung der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_CHA_SOH_C_MIN_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Korrigierte Lade-Kapa-Kompensation der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_DCH_SOH_C_MAX_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Entlade-Ah-Schätzung der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_DCH_SOH_C_MAX_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Korrigierte CV-Kapa-Kompensation der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_CHA_SOH_C_MAX_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Lade-Ah-Schätzung der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_CHA_SOH_C_MAX_TEST_1_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Korrigierte Lade-Kapa-Kompensation der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_SOH_C_MIN_M1_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 1 nach Kapazitätstest |
| STAT_SOH_C_MIN_M2_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 2 nach Kapazitätstest |
| STAT_SOH_C_MIN_M3_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 3 nach Kapazitätstest |
| STAT_SOH_C_MIN_M4_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 4 nach Kapazitätstest |
| STAT_SOH_C_MIN_M5_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 5 nach Kapazitätstest |
| STAT_SOH_C_MIN_M6_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 6 nach Kapazitätstest |
| STAT_SOH_C_MIN_M7_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 7 nach Kapazitätstest |
| STAT_SOH_C_MIN_M8_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 8 nach Kapazitätstest |
| STAT_SOH_C_MIN_M9_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 9 nach Kapazitätstest |
| STAT_SOH_C_MIN_M10_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 10 nach Kapazitätstest |
| STAT_SOH_C_MIN_M11_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 11 nach Kapazitätstest |
| STAT_SOH_C_MIN_M12_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 12 nach Kapazitätstest |
| STAT_SOH_C_MIN_M13_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 13 nach Kapazitätstest |
| STAT_SOH_C_MIN_M14_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 14 nach Kapazitätstest |
| STAT_SOH_C_MIN_M15_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 15 nach Kapazitätstest |
| STAT_SOH_C_MIN_M16_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 16 nach Kapazitätstest |
| STAT_SOH_C_MIN_M17_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 17 nach Kapazitätstest |
| STAT_SOH_C_MIN_M18_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 18 nach Kapazitätstest |
| STAT_SOH_C_MIN_M19_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 19 nach Kapazitätstest |
| STAT_SOH_C_MIN_M20_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 20 nach Kapazitätstest |
| STAT_SOH_C_MIN_M21_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 21 nach Kapazitätstest |
| STAT_SOH_C_MIN_M22_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 22 nach Kapazitätstest |
| STAT_SOH_C_MIN_M23_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 23 nach Kapazitätstest |
| STAT_SOH_C_MIN_M24_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 24 nach Kapazitätstest |
| STAT_SOH_C_MIN_M25_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 25 nach Kapazitätstest |
| STAT_SOH_C_MIN_M26_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 26 nach Kapazitätstest |
| STAT_SOH_C_MIN_M27_NACH_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SoH_C von Modul 27 nach Kapazitätstest |
| STAT_ST_FINISHED_NO_ERROR_TEST_1_WERT | HEX | high | unsigned char | - | - | - | - | - | RB1: Statuswert Kapazitätstest; 1: Bedingungen optimal, sonst: Bedingungen suboptimal |
| STAT_TEMP_MIN_VOR_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Minimale gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MAX_VOR_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Maximale gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MEAN_VOR_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MIN_START_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Minimale gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_START_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Maximale gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_START_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MIN_END_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Minimale gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_END_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Maximale gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_END_DCH_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MIN_END_CHA_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Minimale gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_END_CHA_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Maximale gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_END_CHA_LOW_TEST_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MIN_VOR_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Minimale Zellspannung vor Kapazitätstest |
| STAT_U_MAX_VOR_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Maximale Zellspannung vor Kapazitätstest |
| STAT_U_MEAN_VOR_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Mittlere Zellspannung vor Kapazitätstest |
| STAT_U_MIN_DCH_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Minimale Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MAX_DCH_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Maximale Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MEAN_DCH_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Mittlere Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_ID_U_MIN_DCH_END_LOW_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit der minimalen Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_ID_U_MAX_DCH_END_LOW_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit der maximalen Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_SA_U_MEAN_DCH_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Standardabweichung von U_cell_mean bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MIN_CHA_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Minimale Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MAX_CHA_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Maximale Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MEAN_CHA_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Mittlere Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_ID_U_MIN_CHA_END_LOW_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit der minimalen Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_ID_U_MAX_CHA_END_LOW_TEST_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: ID der Zelle mit der maximalen Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_SA_U_MEAN_CHA_END_LOW_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Standardabweichung von U_cell_mean bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_I_DCH_HIGH_TEST_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: Strom in Entladephase 1 bei Kapazitätstest |
| STAT_I_DCH_LOW_TEST_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RB1: Strom in Entladephase 2 bei Kapazitätstest |
| STAT_P_FRC_PWR_CHGN_TEST_1_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: Prognostizierte Ladeleistung bei Kapazitätstest |
| STAT_P_MEAN_CHA_HIGH_TEST_1_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere Ladeleistung der Ladephase 1 bei Kapazitätstest |
| STAT_ZEITPUNKT_TEST_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB1: Zeitpunkt (SME-Zeit) am Ende von Kapazitätstest |
| STAT_SOC_NENN_DELTA_ASYM_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: SoC-delta beim Ladeende bei Kapazitätstest zwischen U_cell_max und U_cell_min - entladen |
| STAT_U_CELL_DELTA_ASYM_TEST_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Spannungsdelta beim Ladeende bei Kapazitätstest zwischen U_cell_max und U_cell_min - entladen |
| STAT_SOH_C_ASYM_POT_TEST_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Möglicher zusätzlicher SoH-C nach Symmetrierung und erneutem Kapazitätstest nach Kapazitätstest |
| STAT_SOH_C_MIN_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C vor Kapazitätstest |
| STAT_SOH_C_MAX_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximaler SoH_C vor Kapazitätstest |
| STAT_SOH_C_MEAN_VOR_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Mittlerer SoH_C vor Kapazitätstest |
| STAT_SOH_C_MIN_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C nach Kapazitätstest |
| STAT_SOH_C_MAX_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximaler SoH_C nach Kapazitätstest |
| STAT_SOH_C_MEAN_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Mittlerer SoH_C nach Kapazitätstest |
| STAT_ID_SOH_C_MIN_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_ID_SOH_C_MAX_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_SA_SOH_MEAN_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Standardabweichung vom durchschnittlichen SoH-C nach Kapazitätstest |
| STAT_AH_MEAS_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Gemessenes Ah-Integral bei Ladevorgang von Kapazitätstest |
| STAT_AH_CSC_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Geschätzter Ah-Bedarf durch CSC's bei Ladevorgang von Kapazitätstest |
| STAT_AH_EST_DCH_SOH_C_MIN_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Entlade-Ah-Schätzung der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_DCH_SOH_C_MIN_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Korrigierte CV-Kapa-Kompensation der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_CHA_SOH_C_MIN_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Lade-Ah-Schätzung der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_CHA_SOH_C_MIN_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Korrigierte Lade-Kapa-Kompensation der Zelle mit dem minimalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_DCH_SOH_C_MAX_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Entlade-Ah-Schätzung der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_DCH_SOH_C_MAX_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Korrigierte CV-Kapa-Kompensation der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_EST_CHA_SOH_C_MAX_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Lade-Ah-Schätzung der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_AH_KOMP_CHA_SOH_C_MAX_TEST_2_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Korrigierte Lade-Kapa-Kompensation der Zelle mit dem maximalen SoH-C nach Kapazitätstest |
| STAT_SOH_C_MIN_M1_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 1 nach Kapazitätstest |
| STAT_SOH_C_MIN_M2_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 2 nach Kapazitätstest |
| STAT_SOH_C_MIN_M3_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 3 nach Kapazitätstest |
| STAT_SOH_C_MIN_M4_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 4 nach Kapazitätstest |
| STAT_SOH_C_MIN_M5_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 5 nach Kapazitätstest |
| STAT_SOH_C_MIN_M6_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 6 nach Kapazitätstest |
| STAT_SOH_C_MIN_M7_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 7 nach Kapazitätstest |
| STAT_SOH_C_MIN_M8_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 8 nach Kapazitätstest |
| STAT_SOH_C_MIN_M9_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 9 nach Kapazitätstest |
| STAT_SOH_C_MIN_M10_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 10 nach Kapazitätstest |
| STAT_SOH_C_MIN_M11_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 11 nach Kapazitätstest |
| STAT_SOH_C_MIN_M12_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 12 nach Kapazitätstest |
| STAT_SOH_C_MIN_M13_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 13 nach Kapazitätstest |
| STAT_SOH_C_MIN_M14_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 14 nach Kapazitätstest |
| STAT_SOH_C_MIN_M15_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 15 nach Kapazitätstest |
| STAT_SOH_C_MIN_M16_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 16 nach Kapazitätstest |
| STAT_SOH_C_MIN_M17_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 17 nach Kapazitätstest |
| STAT_SOH_C_MIN_M18_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 18 nach Kapazitätstest |
| STAT_SOH_C_MIN_M19_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 19 nach Kapazitätstest |
| STAT_SOH_C_MIN_M20_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 20 nach Kapazitätstest |
| STAT_SOH_C_MIN_M21_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 21 nach Kapazitätstest |
| STAT_SOH_C_MIN_M22_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 22 nach Kapazitätstest |
| STAT_SOH_C_MIN_M23_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 23 nach Kapazitätstest |
| STAT_SOH_C_MIN_M24_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 24 nach Kapazitätstest |
| STAT_SOH_C_MIN_M25_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 25 nach Kapazitätstest |
| STAT_SOH_C_MIN_M26_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 26 nach Kapazitätstest |
| STAT_SOH_C_MIN_M27_NACH_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SoH_C von Modul 27 nach Kapazitätstest |
| STAT_ST_FINISHED_NO_ERROR_TEST_2_WERT | HEX | high | unsigned char | - | - | - | - | - | RB2: Statuswert Kapazitätstest; 1: Bedingungen optimal, sonst: Bedingungen suboptimal |
| STAT_TEMP_MIN_VOR_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Minimale gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MAX_VOR_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Maximale gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MEAN_VOR_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere gemessene Temperatur auf HVS-Ebene vor Kapazitätstest |
| STAT_TEMP_MIN_START_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Minimale gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_START_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Maximale gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_START_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere gemessene Temperatur auf HVS-Ebene bei Beginn der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MIN_END_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Minimale gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_END_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Maximale gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_END_DCH_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere gemessene Temperatur auf HVS-Ebene bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_TEMP_MIN_END_CHA_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Minimale gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_TEMP_MAX_END_CHA_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Maximale gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_TEMP_MEAN_END_CHA_LOW_TEST_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere gemessene Temperatur auf HVS-Ebene bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MIN_VOR_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Minimale Zellspannung vor Kapazitätstest |
| STAT_U_MAX_VOR_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Maximale Zellspannung vor Kapazitätstest |
| STAT_U_MEAN_VOR_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Mittlere Zellspannung vor Kapazitätstest |
| STAT_U_MIN_DCH_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Minimale Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MAX_DCH_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Maximale Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MEAN_DCH_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Mittlere Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_ID_U_MIN_DCH_END_LOW_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit der minimalen Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_ID_U_MAX_DCH_END_LOW_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit der maximalen Zellspannung bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_SA_U_MEAN_DCH_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Standardabweichung von U_cell_mean bei Ende der Entladephase 2 bei Kapazitätstest |
| STAT_U_MIN_CHA_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Minimale Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MAX_CHA_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Maximale Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_U_MEAN_CHA_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Mittlere Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_ID_U_MIN_CHA_END_LOW_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit der minimalen Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_ID_U_MAX_CHA_END_LOW_TEST_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: ID der Zelle mit der maximalen Zellspannung bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_SA_U_MEAN_CHA_END_LOW_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Standardabweichung von U_cell_mean bei Ende der Ladephase 2 bei Kapazitätstest |
| STAT_I_DCH_HIGH_TEST_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: Strom in Entladephase 1 bei Kapazitätstest |
| STAT_I_DCH_LOW_TEST_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RB2: Strom in Entladephase 2 bei Kapazitätstest |
| STAT_P_FRC_PWR_CHGN_TEST_2_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: Prognostizierte Ladeleistung bei Kapazitätstest |
| STAT_P_MEAN_CHA_HIGH_TEST_2_WERT | kW | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere Ladeleistung der Ladephase 1 bei Kapazitätstest |
| STAT_ZEITPUNKT_TEST_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB2: Zeitpunkt (SME-Zeit) am Ende von Kapazitätstest |
| STAT_SOC_NENN_DELTA_ASYM_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: SoC-delta beim Ladeende bei Kapazitätstest zwischen U_cell_max und U_cell_min - entladen |
| STAT_U_CELL_DELTA_ASYM_TEST_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Spannungsdelta beim Ladeende bei Kapazitätstest zwischen U_cell_max und U_cell_min - entladen |
| STAT_SOH_C_ASYM_POT_TEST_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Möglicher zusätzlicher SoH-C nach Symmetrierung und erneutem Kapazitätstest nach Kapazitätstest |

### RES_0XE544_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOH_ADAPT_COUNT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 1. Adaption |
| STAT_GRUND_ADAPTION_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 1. Adaption |
| STAT_AH_CUM_ABS_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_1_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 1. Adaption geöffnet war |
| STAT_TEMP_MEAN1_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 1. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 1. Adaption |
| STAT_UCEL_MIN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 1. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MAX_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_UCEL_MEAN_INIT2_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 1. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 1. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 1. Adaption |
| STAT_OVC1_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 1. Adaption |
| STAT_OVC2_ZELLE1_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 1. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_1_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die erste Adaption |
| STAT_SOH_MIN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 1. Adaption |
| STAT_SOH_MAX_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 1. Adaption |
| STAT_SOH_MEAN_NACH_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 1. Adaption |
| STAT_SOH_ADAPT_COUNT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 2. Adaption |
| STAT_GRUND_ADAPTION_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 2. Adaption |
| STAT_AH_CUM_ABS_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_2_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 2. Adaption geöffnet war |
| STAT_TEMP_MEAN1_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 2. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 2. Adaption |
| STAT_UCEL_MIN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 2. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MAX_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_UCEL_MEAN_INIT2_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 2. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 2. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 2. Adaption |
| STAT_OVC1_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 2. Adaption |
| STAT_OVC2_ZELLE1_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 2. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_2_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die zweite Adaption |
| STAT_SOH_MIN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 2. Adaption |
| STAT_SOH_MAX_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 2. Adaption |
| STAT_SOH_MEAN_NACH_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 2. Adaption |
| STAT_SOH_ADAPT_COUNT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 3. Adaption |
| STAT_GRUND_ADAPTION_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 3. Adaption |
| STAT_AH_CUM_ABS_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_3_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 3. Adaption geöffnet war |
| STAT_TEMP_MEAN1_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 3. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 3. Adaption |
| STAT_UCEL_MIN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 3. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MAX_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_UCEL_MEAN_INIT2_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 3. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 3. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 3. Adaption |
| STAT_OVC1_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 3. Adaption |
| STAT_OVC2_ZELLE1_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 3. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_3_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die dritte Adaption |
| STAT_SOH_MIN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 3. Adaption |
| STAT_SOH_MAX_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 3. Adaption |
| STAT_SOH_MEAN_NACH_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 3. Adaption |
| STAT_SOH_ADAPT_COUNT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 4. Adaption |
| STAT_GRUND_ADAPTION_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 4. Adaption |
| STAT_AH_CUM_ABS_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_4_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 4. Adaption geöffnet war |
| STAT_TEMP_MEAN1_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 4. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 4. Adaption |
| STAT_UCEL_MIN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 4. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MAX_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_UCEL_MEAN_INIT2_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 4. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 4. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 4. Adaption |
| STAT_OVC1_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 4. Adaption |
| STAT_OVC2_ZELLE1_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 4. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_4_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die vierte Adaption |
| STAT_SOH_MIN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 4. Adaption |
| STAT_SOH_MAX_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 4. Adaption |
| STAT_SOH_MEAN_NACH_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 4. Adaption |
| STAT_SOH_ADAPT_COUNT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adaptionszähler von 5. Adaption |
| STAT_GRUND_ADAPTION_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslösegrund des Ringspeicher-Eintrags (0 = SoH_C-Schätzung; 1 = KapaTest mit Übernahme vom Ergebnis in NV; 2 = KapaTest ohne Übernahme vom Ergebnis in NV) |
| STAT_ZEITPUNKT_ADAP_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt (SME-Zeit) der 5. Adaption |
| STAT_AH_CUM_ABS_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Absoluter Ah-Durchsatz der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_AH_INTEGRAL_5_WERT | Ah | high | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Ah-Hub der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Testergebnis in Ah) |
| STAT_HVOFFTIME_ADAP_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer, die die Schütze während der 5. Adaption geöffnet war |
| STAT_TEMP_MEAN1_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene zu Beginn der 5. Adaption bzw. zu Beginn des Tests |
| STAT_TEMP_MEAN2_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Mittlere Temperatur auf HVS-Ebene am Ende der 5. Adaption |
| STAT_UCEL_MIN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Minimale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MAX_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Maximale gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MEAN_INIT1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen zu Beginn der 5. Adaption (Wenn Adaptionsgrund = KapaTest: Mittlere gemessene Ruhespannung beim Aufwachen) |
| STAT_UCEL_MIN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Minimale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MAX_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximale gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_UCEL_MEAN_INIT2_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Mittlere gemessene Ruhespannung der Zellen am Ende der 5. Adaption |
| STAT_SOH_ZELLE1_VOR_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 VOR 5. Adaption |
| STAT_SOH_ZELLE1_NACH_ADAPT_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | SoH_C von Zelle 1 NACH 5. Adaption |
| STAT_OVC1_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 zu Beginn der 5. Adaption |
| STAT_OVC2_ZELLE1_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | OCV Wert von Zelle 1 am Ende der 5. Adaption |
| STAT_SOH_GAIN_FAKTOR_ZELLE1_5_WERT | - | high | unsigned int | - | - | 1.0 | 10000.0 | 0.0 | Gain Faktor von Zelle 1 für die fünfte Adaption |
| STAT_SOH_MIN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH NACH der 5. Adaption |
| STAT_SOH_MAX_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH NACH der 5. Adaption |
| STAT_SOH_MEAN_NACH_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH NACH der 5. Adaption |
| STAT_SOH_MIN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler SOH VOR der ältesten Adaption |
| STAT_SOH_MAX_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler SOH VOR der ältesten Adaption |
| STAT_SOH_MEAN_VOR_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer SOH VOR der ältesten Adaption |

### RES_0XE545_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZKAPAZITAET_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Referenzkapazitaet für SoH_C-Werte |
| STAT_ALTERUNG_KAPA_MIN_HVS_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimaler Alterungszustands der Kapazität (SoH_C_min) des HV-Speichers in % |
| STAT_ALTERUNG_KAPA_MEAN_HVS_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlerer Alterungszustand der Kapazität (SoH_C_mean) des HV-Speichers in % |
| STAT_ALTERUNG_KAPA_MAX_HVS_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximaler Alterungszustand der Kapazität (SoH_C_max) des HV-Speichers in % |
| STAT_KAPAZITAET_MIN_HVS_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Minimale Kapazität des HV-Speichers in Ah |
| STAT_KAPAZITAET_MEAN_HVS_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mittlere Kapazität des HV-Speichers in Ah |
| STAT_KAPAZITAET_MAX_HVS_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximale Kapazität des HV-Speichers in Ah |

### RES_0XE548_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZKAPAZITAET_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Referenzkapazitaet für SoH_C-Werte |
| STAT_ALTERUNG_KAPA_MIN_MOD_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 01 |
| STAT_ALTERUNG_KAPA_MIN_MOD_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 02 |
| STAT_ALTERUNG_KAPA_MIN_MOD_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 03 |
| STAT_ALTERUNG_KAPA_MIN_MOD_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 04 |
| STAT_ALTERUNG_KAPA_MIN_MOD_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 05 |
| STAT_ALTERUNG_KAPA_MIN_MOD_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 06 |
| STAT_ALTERUNG_KAPA_MIN_MOD_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 07 |
| STAT_ALTERUNG_KAPA_MIN_MOD_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 08 |
| STAT_ALTERUNG_KAPA_MIN_MOD_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 09 |
| STAT_ALTERUNG_KAPA_MIN_MOD_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 10 |
| STAT_ALTERUNG_KAPA_MIN_MOD_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 11 |
| STAT_ALTERUNG_KAPA_MIN_MOD_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 12 |
| STAT_ALTERUNG_KAPA_MIN_MOD_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 13 |
| STAT_ALTERUNG_KAPA_MIN_MOD_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 14 |
| STAT_ALTERUNG_KAPA_MIN_MOD_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 15 |
| STAT_ALTERUNG_KAPA_MIN_MOD_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 16 |
| STAT_ALTERUNG_KAPA_MIN_MOD_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 17 |
| STAT_ALTERUNG_KAPA_MIN_MOD_18_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 18 |
| STAT_ALTERUNG_KAPA_MIN_MOD_19_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 19 |
| STAT_ALTERUNG_KAPA_MIN_MOD_20_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 20 |
| STAT_ALTERUNG_KAPA_MIN_MOD_21_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 21 |
| STAT_ALTERUNG_KAPA_MIN_MOD_22_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 22 |
| STAT_ALTERUNG_KAPA_MIN_MOD_23_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 23 |
| STAT_ALTERUNG_KAPA_MIN_MOD_24_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 24 |
| STAT_ALTERUNG_KAPA_MIN_MOD_25_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 25 |
| STAT_ALTERUNG_KAPA_MIN_MOD_26_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 26 |
| STAT_ALTERUNG_KAPA_MIN_MOD_27_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimaler Alterungszustand der Kapazität (SoH_C_min) in % von Modul 27 |

### RES_0XE549_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOKO_HEIZ_DAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Vorkonditionierungs-Heizdauer in Minuten (projektspezifisch) |
| STAT_VOKO_HEIZ_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_VOKO_HEIZ_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_VOKO_HEIZ_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_VOKO_HEIZ_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_VOKO_HEIZ_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_VOKO_HEIZ_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: t > tmax*0.6 |

### RES_0XE54C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximal erlaubte Ladespannung |
| STAT_ENTLADESPANNUNGSGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Maximal erlaubte Entladespannung |

### RES_0XE54F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL | 0-n | high | unsigned char | - | TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE | - | - | - | Status Kühlmittel-Ventil: Geschlossen oder offen |

### RES_0XE550_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOKO_KUEHL_DAUER_MAX_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vordefinierte maximale Vorkonditionierungs-Kuehldauer in Minuten (projektspezifisch) |
| STAT_VOKO_KUEHL_DAUER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: 0 < t <= tmax*0.1 |
| STAT_VOKO_KUEHL_DAUER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.1 < t <= tmax*0.2 |
| STAT_VOKO_KUEHL_DAUER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.2 < t <= tmax*0.3 |
| STAT_VOKO_KUEHL_DAUER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.3 < t <= tmax*0.4 |
| STAT_VOKO_KUEHL_DAUER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: tmax*0.4 < t <= tmax*0.6 |
| STAT_VOKO_KUEHL_DAUER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dauerklasse: t > tmax*0.6 |

### RES_0XE551_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_SCHUETZ_FREIGABE | 1.0 | 1.0 | 0.0 | Liest das Bit zur Freigabe oder Sperrung der Schützschalter |

### RES_0XE553_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UCELL_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | minimale Einzelzellspannung aller Einzelzellen |
| STAT_UCELL_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | maximale Einzelzellspannung aller Einzelzellen |

### RES_0XE554_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZELLSPANNUNG_001_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 001 |
| STAT_ZELLSPANNUNG_002_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 002 |
| STAT_ZELLSPANNUNG_003_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 003 |
| STAT_ZELLSPANNUNG_004_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 004 |
| STAT_ZELLSPANNUNG_005_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 005 |
| STAT_ZELLSPANNUNG_006_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 006 |
| STAT_ZELLSPANNUNG_007_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 007 |
| STAT_ZELLSPANNUNG_008_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 008 |
| STAT_ZELLSPANNUNG_009_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 009 |
| STAT_ZELLSPANNUNG_010_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 010 |
| STAT_ZELLSPANNUNG_011_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 011 |
| STAT_ZELLSPANNUNG_012_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 012 |
| STAT_ZELLSPANNUNG_013_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 013 |
| STAT_ZELLSPANNUNG_014_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 014 |
| STAT_ZELLSPANNUNG_015_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 015 |
| STAT_ZELLSPANNUNG_016_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 016 |
| STAT_ZELLSPANNUNG_017_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 017 |
| STAT_ZELLSPANNUNG_018_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 018 |
| STAT_ZELLSPANNUNG_019_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 019 |
| STAT_ZELLSPANNUNG_020_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 020 |
| STAT_ZELLSPANNUNG_021_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 021 |
| STAT_ZELLSPANNUNG_022_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 022 |
| STAT_ZELLSPANNUNG_023_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 023 |
| STAT_ZELLSPANNUNG_024_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 024 |
| STAT_ZELLSPANNUNG_025_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 025 |
| STAT_ZELLSPANNUNG_026_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 026 |
| STAT_ZELLSPANNUNG_027_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 027 |
| STAT_ZELLSPANNUNG_028_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 028 |
| STAT_ZELLSPANNUNG_029_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 029 |
| STAT_ZELLSPANNUNG_030_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 030 |
| STAT_ZELLSPANNUNG_031_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 031 |
| STAT_ZELLSPANNUNG_032_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 032 |
| STAT_ZELLSPANNUNG_033_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 033 |
| STAT_ZELLSPANNUNG_034_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 034 |
| STAT_ZELLSPANNUNG_035_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 035 |
| STAT_ZELLSPANNUNG_036_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 036 |
| STAT_ZELLSPANNUNG_037_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 037 |
| STAT_ZELLSPANNUNG_038_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 038 |
| STAT_ZELLSPANNUNG_039_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 039 |
| STAT_ZELLSPANNUNG_040_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 040 |
| STAT_ZELLSPANNUNG_041_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 041 |
| STAT_ZELLSPANNUNG_042_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 042 |
| STAT_ZELLSPANNUNG_043_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 043 |
| STAT_ZELLSPANNUNG_044_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 044 |
| STAT_ZELLSPANNUNG_045_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 045 |
| STAT_ZELLSPANNUNG_046_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 046 |
| STAT_ZELLSPANNUNG_047_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 047 |
| STAT_ZELLSPANNUNG_048_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 048 |
| STAT_ZELLSPANNUNG_049_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 049 |
| STAT_ZELLSPANNUNG_050_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 050 |
| STAT_ZELLSPANNUNG_051_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 051 |
| STAT_ZELLSPANNUNG_052_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 052 |
| STAT_ZELLSPANNUNG_053_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 053 |
| STAT_ZELLSPANNUNG_054_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 054 |
| STAT_ZELLSPANNUNG_055_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 055 |
| STAT_ZELLSPANNUNG_056_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 056 |
| STAT_ZELLSPANNUNG_057_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 057 |
| STAT_ZELLSPANNUNG_058_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 058 |
| STAT_ZELLSPANNUNG_059_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 059 |
| STAT_ZELLSPANNUNG_060_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 060 |
| STAT_ZELLSPANNUNG_061_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 061 |
| STAT_ZELLSPANNUNG_062_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 062 |
| STAT_ZELLSPANNUNG_063_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 063 |
| STAT_ZELLSPANNUNG_064_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 064 |
| STAT_ZELLSPANNUNG_065_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 065 |
| STAT_ZELLSPANNUNG_066_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 066 |
| STAT_ZELLSPANNUNG_067_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 067 |
| STAT_ZELLSPANNUNG_068_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 068 |
| STAT_ZELLSPANNUNG_069_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 069 |
| STAT_ZELLSPANNUNG_070_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 070 |
| STAT_ZELLSPANNUNG_071_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 071 |
| STAT_ZELLSPANNUNG_072_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 072 |
| STAT_ZELLSPANNUNG_073_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 073 |
| STAT_ZELLSPANNUNG_074_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 074 |
| STAT_ZELLSPANNUNG_075_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 075 |
| STAT_ZELLSPANNUNG_076_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 076 |
| STAT_ZELLSPANNUNG_077_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 077 |
| STAT_ZELLSPANNUNG_078_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 078 |
| STAT_ZELLSPANNUNG_079_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 079 |
| STAT_ZELLSPANNUNG_080_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 080 |
| STAT_ZELLSPANNUNG_081_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 081 |
| STAT_ZELLSPANNUNG_082_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 082 |
| STAT_ZELLSPANNUNG_083_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 083 |
| STAT_ZELLSPANNUNG_084_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 084 |
| STAT_ZELLSPANNUNG_085_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 085 |
| STAT_ZELLSPANNUNG_086_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 086 |
| STAT_ZELLSPANNUNG_087_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 087 |
| STAT_ZELLSPANNUNG_088_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 088 |
| STAT_ZELLSPANNUNG_089_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 089 |
| STAT_ZELLSPANNUNG_090_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 090 |
| STAT_ZELLSPANNUNG_091_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 091 |
| STAT_ZELLSPANNUNG_092_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 092 |
| STAT_ZELLSPANNUNG_093_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 093 |
| STAT_ZELLSPANNUNG_094_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 094 |
| STAT_ZELLSPANNUNG_095_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 095 |
| STAT_ZELLSPANNUNG_096_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 096 |
| STAT_ZELLSPANNUNG_097_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 097 |
| STAT_ZELLSPANNUNG_098_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 098 |
| STAT_ZELLSPANNUNG_099_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 099 |
| STAT_ZELLSPANNUNG_100_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 100 |
| STAT_ZELLSPANNUNG_101_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 101 |
| STAT_ZELLSPANNUNG_102_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 102 |
| STAT_ZELLSPANNUNG_103_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 103 |
| STAT_ZELLSPANNUNG_104_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 104 |
| STAT_ZELLSPANNUNG_105_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 105 |
| STAT_ZELLSPANNUNG_106_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 106 |
| STAT_ZELLSPANNUNG_107_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 107 |
| STAT_ZELLSPANNUNG_108_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aktuelle Spannung Zelle 108 |

### RES_0XE555_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_SOC_HVOFF_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 1 im Betriebsmodus Schütze geöffnet: SOC <= 0 % |
| STAT_ZEIT_SOC_HVOFF_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 2 im Betriebsmodus Schütze geöffnet: 0 % < SOC <= 10 % |
| STAT_ZEIT_SOC_HVOFF_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 3 im Betriebsmodus Schütze geöffnet: 10 % < SOC <= 20 % |
| STAT_ZEIT_SOC_HVOFF_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 4 im Betriebsmodus Schütze geöffnet: 20 % < SOC <= 30 % |
| STAT_ZEIT_SOC_HVOFF_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 5 im Betriebsmodus Schütze geöffnet: 30 % < SOC <= 40 % |
| STAT_ZEIT_SOC_HVOFF_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 6 im Betriebsmodus Schütze geöffnet: 40 % < SOC <= 50 % |
| STAT_ZEIT_SOC_HVOFF_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 7 im Betriebsmodus Schütze geöffnet: 50 % < SOC <= 60 % |
| STAT_ZEIT_SOC_HVOFF_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 8 im Betriebsmodus Schütze geöffnet: 60 % < SOC <= 70 % |
| STAT_ZEIT_SOC_HVOFF_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 9 im Betriebsmodus Schütze geöffnet: 70 % < SOC <= 80 % |
| STAT_ZEIT_SOC_HVOFF_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 10 im Betriebsmodus Schütze geöffnet: 80 % < SOC <= 90 % |
| STAT_ZEIT_SOC_HVOFF_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 11 im Betriebsmodus Schütze geöffnet: 90 % < SOC <= 100 % |
| STAT_ZEIT_SOC_HVOFF_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 12 im Betriebsmodus Schütze geöffnet:  SOC > 100 %  |
| STAT_ZEIT_SOC_HVON_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 1 im Betriebsmodus Schütze geschlossen: SOC <= 0 % |
| STAT_ZEIT_SOC_HVON_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 2 im Betriebsmodus Schütze geschlossen: 0 % < SOC <= 10 % |
| STAT_ZEIT_SOC_HVON_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 3 im Betriebsmodus Schütze geschlossen: 10 % < SOC <= 20 % |
| STAT_ZEIT_SOC_HVON_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 4 im Betriebsmodus Schütze geschlossen: 20 % < SOC <= 30 % |
| STAT_ZEIT_SOC_HVON_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 5 im Betriebsmodus Schütze geschlossen: 30 % < SOC <= 40 % |
| STAT_ZEIT_SOC_HVON_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 6 im Betriebsmodus Schütze geschlossen: 40 % < SOC <= 50 % |
| STAT_ZEIT_SOC_HVON_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 7 im Betriebsmodus Schütze geschlossen: 50 % < SOC <= 60 % |
| STAT_ZEIT_SOC_HVON_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 8 im Betriebsmodus Schütze geschlossen: 60 % < SOC <= 70 % |
| STAT_ZEIT_SOC_HVON_9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 9 im Betriebsmodus Schütze geschlossen: 70 % < SOC <= 80 % |
| STAT_ZEIT_SOC_HVON_10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 10 im Betriebsmodus Schütze geschlossen: 80 % < SOC <= 90 % |
| STAT_ZEIT_SOC_HVON_11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 11 im Betriebsmodus Schütze geschlossen: 90 % < SOC <= 100 % |
| STAT_ZEIT_SOC_HVON_12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in SOC Klasse 12 im Betriebsmodus Schütze geschlossen: SOC > 100 %  |

### RES_0XE557_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWR_STUETZP_P1_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P1 |
| STAT_PWR_STUETZP_P2_WERT | W | high | unsigned char | - | - | 200.0 | 1.0 | 0.0 | Zur Verfügung stehende Ladeleistung, Stützpunkt P2 |
| STAT_TEMP_STUETZP_T1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T1 |
| STAT_TEMP_STUETZP_T2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T2 |
| STAT_TEMP_STUETZP_T3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T3 |
| STAT_TEMP_STUETZP_T4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Speichertemperatur, Stützpunkt T4 |
| STAT_SOC_STUETZP_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC1 |
| STAT_SOC_STUETZP_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC2 |
| STAT_SOC_STUETZP_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC3 |
| STAT_SOC_STUETZP_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC4 |
| STAT_SOC_STUETZP_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SOC (SOC_akt_max), Stützpunkt SOC5 |
| STAT_FAKT_P1_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC1 |
| STAT_FAKT_P1_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC2 |
| STAT_FAKT_P1_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC3 |
| STAT_FAKT_P1_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC4 |
| STAT_FAKT_P1_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T1_SOC5 |
| STAT_FAKT_P1_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC1 |
| STAT_FAKT_P1_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC2 |
| STAT_FAKT_P1_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC3 |
| STAT_FAKT_P1_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC4 |
| STAT_FAKT_P1_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T2_SOC5 |
| STAT_FAKT_P1_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC1 |
| STAT_FAKT_P1_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC2 |
| STAT_FAKT_P1_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC3 |
| STAT_FAKT_P1_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC4 |
| STAT_FAKT_P1_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T3_SOC5 |
| STAT_FAKT_P1_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC1 |
| STAT_FAKT_P1_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC2 |
| STAT_FAKT_P1_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC3 |
| STAT_FAKT_P1_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC4 |
| STAT_FAKT_P1_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P1_T4_SOC5 |
| STAT_FAKT_P2_T1_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC1 |
| STAT_FAKT_P2_T1_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC2 |
| STAT_FAKT_P2_T1_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC3 |
| STAT_FAKT_P2_T1_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC4 |
| STAT_FAKT_P2_T1_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T1_SOC5 |
| STAT_FAKT_P2_T2_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC1 |
| STAT_FAKT_P2_T2_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC2 |
| STAT_FAKT_P2_T2_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC3 |
| STAT_FAKT_P2_T2_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC4 |
| STAT_FAKT_P2_T2_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T2_SOC5 |
| STAT_FAKT_P2_T3_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC1 |
| STAT_FAKT_P2_T3_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC2 |
| STAT_FAKT_P2_T3_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC3 |
| STAT_FAKT_P2_T3_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC4 |
| STAT_FAKT_P2_T3_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T3_SOC5 |
| STAT_FAKT_P2_T4_SOC1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC1 |
| STAT_FAKT_P2_T4_SOC2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC2 |
| STAT_FAKT_P2_T4_SOC3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC3 |
| STAT_FAKT_P2_T4_SOC4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC4 |
| STAT_FAKT_P2_T4_SOC5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfaktor, Kennwert P2_T4_SOC5 |

### RES_0XE559_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRUND_REKAL_1 | 0-n | high | unsigned char | - | TAB_GRUND_REKAL | - | - | - | RB1: Grund der SOC Rekaibrierung |
| STAT_ZEITPUNKT_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB1: Zeitpunkt der Rekalibrierung |
| STAT_HVOFFTIME_REKAL_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB1: Dauer, während die Schütze letztmalig geöffnet waren |
| STAT_TEMP_MESS_MEAN_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere Messtemperatur auf HVS-Ebene |
| STAT_TEMP_MESS_MEAN_HVOFF_1_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB1: Mittlere Messtemperatur auf HVS-Ebene zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_UCELL_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Minimale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung |
| STAT_UCELL_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Maximale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Mittlere gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MAX_HVOFF_1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB1: Maximale gemessene Zellspannung zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_SOC_MIN_AKT_VOR_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MAX_AKT_VOR_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MEAN_AKT_VOR_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Mittlerer AktSOC VOR Rekalibrierung |
| STAT_SOC_MIN_AKT_NACH_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MAX_AKT_NACH_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MEAN_AKT_NACH_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Mittlerer AktSOC NACH Rekalibrierung |
| STAT_SOH_MIN_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimaler SOH zum Zeitpunkt der Rekalibrierung |
| STAT_KAPA_DURCHSATZ_1_WERT | % | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | RB1: Geflossene Ladungsmenge (Betragswert) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_KAPA_HUB_1_WERT | % | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | RB1: Geflossene Ladungsmenge (vorzeichenbehaftet) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_SOC_AKT_MAX_DELTA_1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximale SOC-Änderung der Zellen |
| STAT_SOC_AKT_MAX_DELTA_ZELLNUMMER_1_WERT | HEX | high | unsigned char | - | - | - | - | - | RB1: Zellnummer der maximalen SOC-Änderung der Zellen |
| STAT_BIT_FULLY_CHARGED_1 | 0/1 | high | unsigned char | - | - | - | - | - | RB1: Vollladezustand erreicht (0 = nicht erreicht, 1 = erreicht) |
| STAT_I_CUTOFF_1_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | RB1: Cut-Off-Strom für das Ladeabbruch-Kriterium der letzten Vollladung |
| STAT_BIT_SYM_ACTIVE_1 | 0/1 | high | unsigned char | - | - | - | - | - | RB1: Status, ob die Symmetrierung seit letztmaligem Öffnen der Schütze stattgefunden hat (0 = nein, 1 = ja) |
| STAT_SOC_CRTN_MIN_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Minimale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_MAX_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Maximale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_AVG_1_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB1: Mittlere SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_GRUND_REKAL_2 | 0-n | high | unsigned char | - | TAB_GRUND_REKAL | - | - | - | RB2: Grund der SOC Rekaibrierung |
| STAT_ZEITPUNKT_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB2: Zeitpunkt der Rekalibrierung |
| STAT_HVOFFTIME_REKAL_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB2: Dauer, während die Schütze letztmalig geöffnet waren |
| STAT_TEMP_MESS_MEAN_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere Messtemperatur auf HVS-Ebene |
| STAT_TEMP_MESS_MEAN_HVOFF_2_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB2: Mittlere Messtemperatur auf HVS-Ebene zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_UCELL_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Minimale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung |
| STAT_UCELL_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Maximale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Mittlere gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MAX_HVOFF_2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB2: Maximale gemessene Zellspannung zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_SOC_MIN_AKT_VOR_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MAX_AKT_VOR_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MEAN_AKT_VOR_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Mittlerer AktSOC VOR Rekalibrierung |
| STAT_SOC_MIN_AKT_NACH_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MAX_AKT_NACH_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MEAN_AKT_NACH_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Mittlerer AktSOC NACH Rekalibrierung |
| STAT_SOH_MIN_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimaler SOH zum Zeitpunkt der Rekalibrierung |
| STAT_KAPA_DURCHSATZ_2_WERT | % | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | RB2: Geflossene Ladungsmenge (Betragswert) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_KAPA_HUB_2_WERT | % | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | RB2: Geflossene Ladungsmenge (vorzeichenbehaftet) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_SOC_AKT_MAX_DELTA_2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximale SOC-Änderung der Zellen |
| STAT_SOC_AKT_MAX_DELTA_ZELLNUMMER_2_WERT | HEX | high | unsigned char | - | - | - | - | - | RB2: Zellnummer der maximalen SOC-Änderung der Zellen |
| STAT_BIT_FULLY_CHARGED_2 | 0/1 | high | unsigned char | - | - | - | - | - | RB2: Vollladezustand erreicht (0 = nicht erreicht, 1 = erreicht) |
| STAT_I_CUTOFF_2_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | RB2: Cut-Off-Strom für das Ladeabbruch-Kriterium der letzten Vollladung |
| STAT_BIT_SYM_ACTIVE_2 | 0/1 | high | unsigned char | - | - | - | - | - | RB2: Status, ob die Symmetrierung seit letztmaligem Öffnen der Schütze stattgefunden hat (0 = nein, 1 = ja) |
| STAT_SOC_CRTN_MIN_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Minimale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_MAX_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Maximale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_AVG_2_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB2: Mittlere SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_GRUND_REKAL_3 | 0-n | high | unsigned char | - | TAB_GRUND_REKAL | - | - | - | RB3: Grund der SOC Rekaibrierung |
| STAT_ZEITPUNKT_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB3: Zeitpunkt der Rekalibrierung |
| STAT_HVOFFTIME_REKAL_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB3: Dauer, während die Schütze letztmalig geöffnet waren |
| STAT_TEMP_MESS_MEAN_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB3: Mittlere Messtemperatur auf HVS-Ebene |
| STAT_TEMP_MESS_MEAN_HVOFF_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB3: Mittlere Messtemperatur auf HVS-Ebene zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_UCELL_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB3: Minimale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung |
| STAT_UCELL_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB3: Maximale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB3: Mittlere gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MAX_HVOFF_3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB3: Maximale gemessene Zellspannung zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_SOC_MIN_AKT_VOR_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Minimaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MAX_AKT_VOR_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Maximaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MEAN_AKT_VOR_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Mittlerer AktSOC VOR Rekalibrierung |
| STAT_SOC_MIN_AKT_NACH_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Minimaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MAX_AKT_NACH_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Maximaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MEAN_AKT_NACH_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Mittlerer AktSOC NACH Rekalibrierung |
| STAT_SOH_MIN_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB3: Minimaler SOH zum Zeitpunkt der Rekalibrierung |
| STAT_KAPA_DURCHSATZ_3_WERT | % | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | RB3: Geflossene Ladungsmenge (Betragswert) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_KAPA_HUB_3_WERT | % | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | RB3: Geflossene Ladungsmenge (vorzeichenbehaftet) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_SOC_AKT_MAX_DELTA_3_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB3: Maximale SOC-Änderung der Zellen |
| STAT_SOC_AKT_MAX_DELTA_ZELLNUMMER_3_WERT | HEX | high | unsigned char | - | - | - | - | - | RB3: Zellnummer der maximalen SOC-Änderung der Zellen |
| STAT_BIT_FULLY_CHARGED_3 | 0/1 | high | unsigned char | - | - | - | - | - | RB3: Vollladezustand erreicht (0 = nicht erreicht, 1 = erreicht) |
| STAT_I_CUTOFF_3_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | RB3: Cut-Off-Strom für das Ladeabbruch-Kriterium der letzten Vollladung |
| STAT_BIT_SYM_ACTIVE_3 | 0/1 | high | unsigned char | - | - | - | - | - | RB3: Status, ob die Symmetrierung seit letztmaligem Öffnen der Schütze stattgefunden hat (0 = nein, 1 = ja) |
| STAT_SOC_CRTN_MIN_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Minimale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_MAX_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Maximale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_AVG_3_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB3: Mittlere SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_GRUND_REKAL_4 | 0-n | high | unsigned char | - | TAB_GRUND_REKAL | - | - | - | RB4: Grund der SOC Rekaibrierung |
| STAT_ZEITPUNKT_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB4: Zeitpunkt der Rekalibrierung |
| STAT_HVOFFTIME_REKAL_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB4: Dauer, während die Schütze letztmalig geöffnet waren |
| STAT_TEMP_MESS_MEAN_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB4: Mittlere Messtemperatur auf HVS-Ebene |
| STAT_TEMP_MESS_MEAN_HVOFF_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB4: Mittlere Messtemperatur auf HVS-Ebene zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_UCELL_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB4: Minimale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung |
| STAT_UCELL_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB4: Maximale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB4: Mittlere gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MAX_HVOFF_4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB4: Maximale gemessene Zellspannung zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_SOC_MIN_AKT_VOR_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Minimaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MAX_AKT_VOR_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Maximaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MEAN_AKT_VOR_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Mittlerer AktSOC VOR Rekalibrierung |
| STAT_SOC_MIN_AKT_NACH_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Minimaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MAX_AKT_NACH_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Maximaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MEAN_AKT_NACH_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Mittlerer AktSOC NACH Rekalibrierung |
| STAT_SOH_MIN_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB4: Minimaler SOH zum Zeitpunkt der Rekalibrierung |
| STAT_KAPA_DURCHSATZ_4_WERT | % | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | RB4: Geflossene Ladungsmenge (Betragswert) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_KAPA_HUB_4_WERT | % | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | RB4: Geflossene Ladungsmenge (vorzeichenbehaftet) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_SOC_AKT_MAX_DELTA_4_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB4: Maximale SOC-Änderung der Zellen |
| STAT_SOC_AKT_MAX_DELTA_ZELLNUMMER_4_WERT | HEX | high | unsigned char | - | - | - | - | - | RB4: Zellnummer der maximalen SOC-Änderung der Zellen |
| STAT_BIT_FULLY_CHARGED_4 | 0/1 | high | unsigned char | - | - | - | - | - | RB4: Vollladezustand erreicht (0 = nicht erreicht, 1 = erreicht) |
| STAT_I_CUTOFF_4_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | RB4: Cut-Off-Strom für das Ladeabbruch-Kriterium der letzten Vollladung |
| STAT_BIT_SYM_ACTIVE_4 | 0/1 | high | unsigned char | - | - | - | - | - | RB4: Status, ob die Symmetrierung seit letztmaligem Öffnen der Schütze stattgefunden hat (0 = nein, 1 = ja) |
| STAT_SOC_CRTN_MIN_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Minimale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_MAX_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Maximale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_AVG_4_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB4: Mittlere SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_GRUND_REKAL_5 | 0-n | high | unsigned char | - | TAB_GRUND_REKAL | - | - | - | RB5: Grund der SOC Rekaibrierung |
| STAT_ZEITPUNKT_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB5: Zeitpunkt der Rekalibrierung |
| STAT_HVOFFTIME_REKAL_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RB5: Dauer, während die Schütze letztmalig geöffnet waren |
| STAT_TEMP_MESS_MEAN_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB5: Mittlere Messtemperatur auf HVS-Ebene |
| STAT_TEMP_MESS_MEAN_HVOFF_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | RB5: Mittlere Messtemperatur auf HVS-Ebene zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_UCELL_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB5: Minimale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung |
| STAT_UCELL_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB5: Maximale gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB5: Mittlere gemessene Zellspannung zum Zeitpunkt der Rekalibrierung. |
| STAT_UCELL_MAX_HVOFF_5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | RB5: Maximale gemessene Zellspannung zum Zeitpunkt, zu dem die Schütze letztmalig geöffnet wurden |
| STAT_SOC_MIN_AKT_VOR_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Minimaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MAX_AKT_VOR_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Maximaler AktSOC VOR Rekalibrierung |
| STAT_SOC_MEAN_AKT_VOR_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Mittlerer AktSOC VOR Rekalibrierung |
| STAT_SOC_MIN_AKT_NACH_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Minimaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MAX_AKT_NACH_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Maximaler AktSOC NACH Rekalibrierung |
| STAT_SOC_MEAN_AKT_NACH_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Mittlerer AktSOC NACH Rekalibrierung |
| STAT_SOH_MIN_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB5: Minimaler SOH zum Zeitpunkt der Rekalibrierung |
| STAT_KAPA_DURCHSATZ_5_WERT | % | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | RB5: Geflossene Ladungsmenge (Betragswert) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_KAPA_HUB_5_WERT | % | high | signed long | - | - | 1.0 | 1000.0 | 0.0 | RB5: Geflossene Ladungsmenge (vorzeichenbehaftet) seit der letzten Rekalibrierung im Verhältnis zur Kapazität unter Berücksichtigung der Alterung |
| STAT_SOC_AKT_MAX_DELTA_5_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | RB5: Maximale SOC-Änderung der Zellen |
| STAT_SOC_AKT_MAX_DELTA_ZELLNUMMER_5_WERT | HEX | high | unsigned char | - | - | - | - | - | RB5: Zellnummer der maximalen SOC-Änderung der Zellen |
| STAT_BIT_FULLY_CHARGED_5 | 0/1 | high | unsigned char | - | - | - | - | - | RB5: Vollladezustand erreicht (0 = nicht erreicht, 1 = erreicht) |
| STAT_I_CUTOFF_5_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | RB5: Cut-Off-Strom für das Ladeabbruch-Kriterium der letzten Vollladung |
| STAT_BIT_SYM_ACTIVE_5 | 0/1 | high | unsigned char | - | - | - | - | - | RB5: Status, ob die Symmetrierung seit letztmaligem Öffnen der Schütze stattgefunden hat (0 = nein, 1 = ja) |
| STAT_SOC_CRTN_MIN_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Minimale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_MAX_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Maximale SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |
| STAT_SOC_CRTN_AVG_5_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | RB5: Mittlere SOC-Korrektur seit letztmaliger Rekalibrierung aller Zellen |

### RES_0XE55A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADUNG_AMP_STUNDEN_WERT | Ah | low | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Die kumulierte Ladung für Ladevorgänge in Ah |
| STAT_ENTLADUNG_AMP_STUNDEN_WERT | Ah | low | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Die kumulierte Ladung für Entladevorgänge in Ah |

### RES_0XE55E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_SOC_GRENZE_MIN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige minimale SOC Grenze (minimaler Zell-SOCmin) |
| STAT_MIN_SOC_GRENZE_MEAN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gütlige minimale SOC Grenze (durschnittlicher Zell-SOCmin) |
| STAT_MIN_SOC_GRENZE_MAX_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige minimale SOC Grenze (maximaler Zell-SOCmin) |
| STAT_MAX_SOC_GRENZE_MIN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige maximale SOC Grenze (minimaler Zell-SOCmax) |
| STAT_MAX_SOC_GRENZE_MEAN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gütlige maximale SOC Grenze (durschnittlicher Zell-SOCmax) |
| STAT_MAX_SOC_GRENZE_MAX_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktuell gültige maximale SOC Grenze (maximaler Zell-SOCmax) |

### RES_0XE562_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTROMGRENZE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Ladestrom |
| STAT_ENTLADESTROMGRENZE_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | maximal erlaubter Entladesstrom |

### RES_0XE56A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZEIT_VORLADUNG_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | zuletzt benötigte Vorladezeit |
| STAT_ZEIT_VORLADUNG_1_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (1 Vorgang zuvor) |
| STAT_ZEIT_VORLADUNG_2_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (2 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_3_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (3 Vorgänge zuvor) |
| STAT_ZEIT_VORLADUNG_4_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | benötigte Vorladezeit (4 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (letzte Vorladung) |
| STAT_MAX_STROM_VORLADUNG_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (1 Vorgang zuvor) |
| STAT_MAX_STROM_VORLADUNG_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (2 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (3 Vorgänge zuvor) |
| STAT_MAX_STROM_VORLADUNG_4_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximaler Vorladestrom (4 Vorgänge zuvor) |
| STAT_MAX_TEMPERATUR_VORLADUNG_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximale Vorladetemperatur (letzte Vorladung) |
| STAT_MAX_TEMPERATUR_VORLADUNG_1_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximale Vorladetemperatur (1 Vorgang zuvor) |
| STAT_MAX_TEMPERATUR_VORLADUNG_2_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximale Vorladetemperatur (2 Vorgänge zuvor) |
| STAT_MAX_TEMPERATUR_VORLADUNG_3_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximale Vorladetemperatur (3 Vorgänge zuvor) |
| STAT_MAX_TEMPERATUR_VORLADUNG_4_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | maximale Vorladetemperatur (4 Vorgänge zuvor) |

### RES_0XE56C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZ_U_FESTIGK_TEST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Zählerwertes der durchgeführten Spannungsfestigkeitstests |

### RES_0XE576_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_MAX_WERT | W | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | Vordefinierter maximaler Leistungswert in Watt (projektspezifisch, auf Gesamtspeicherebene) |
| STAT_ZEIT_POWER_DCHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_DCHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_DCHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_DCHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_DCHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_DCHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_DCHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Entladevorgang (auf Gesamtspeicherebene):  P > Pmax |
| STAT_ZEIT_POWER_CHG_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  0 < P <= Pmax*0.16 |
| STAT_ZEIT_POWER_CHG_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.16 < P <= Pmax*0.33 |
| STAT_ZEIT_POWER_CHG_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.33 < P <= Pmax*0.5 |
| STAT_ZEIT_POWER_CHG_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.5 < P <= Pmax*0.66 |
| STAT_ZEIT_POWER_CHG_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.66 < P <= Pmax*0.80 |
| STAT_ZEIT_POWER_CHG_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  Pmax*0.80 < P <= Pmax |
| STAT_ZEIT_POWER_CHG_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in Leistungsklasse im Ladevorgang (auf Gesamtspeicherebene):  P > Pmax |

### RES_0XE577_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD6_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD7_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD8_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin <= -20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -20°C < TmodMin <= -5°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: -5°C < TmodMin <= 10°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 10°C < TmodMin <= 20°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 20°C < TmodMin <= 30°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 30°C < TmodMin <= 35°C |
| STAT_HIS_TEMP_HVON_MIN_MOD9_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMin > 35°C |

### RES_0XE578_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD6_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD7_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD8_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax <= 35°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 35°C < TmodMax <= 40°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 40°C < TmodMax <= 50°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 50°C < TmodMax <= 60°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 60°C < TmodMax <= 70°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: 70°C < TmodMax <= 80°C |
| STAT_HIS_TEMP_HVON_MAX_MOD9_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer der grössten gemessenen Zelltemperatur bei geschlossen Schützen in der Klasse: TmodMax > 80°C |

### RES_0XE579_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD1_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD2_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD3_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD4_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean <= -20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -20°C < TmodMean <= -5°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: -5°C < TmodMean <= 10°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 10°C < TmodMean <= 20°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 20°C < TmodMean <= 30°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 30°C < TmodMean <= 35°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 35°C < TmodMean <= 40°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 40°C < TmodMean <= 50°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T9_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 50°C < TmodMean <= 60°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T10_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 60°C < TmodMean <= 70°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T11_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: 70°C < TmodMean <= 80°C |
| STAT_HIS_TEMP_HVOFF_AVG_MOD5_T12_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen in der Klasse: TmodMean > 80°C |

### RES_0XE57A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MIN_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für minimale Spannung in Volt (projektspezifischer UminLim) |
| STAT_SPANNUNG_MAX_LIM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Grenzwert für maximale Spannung in Volt (projektspezifischer UmaxLim) |
| STAT_HIS_SPANNUNG_MOD1_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD1_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD1_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD1_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD2_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD2_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD2_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD2_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD3_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD3_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD3_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD3_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD4_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD4_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD4_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD4_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD5_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD5_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD5_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD5_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD6_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD6_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD6_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD6_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD7_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD7_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD7_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD7_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD8_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD8_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD8_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD8_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD9_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD9_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD9_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD9_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD10_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD10_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD10_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD10_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |
| STAT_HIS_SPANNUNG_MOD11_U1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse UminLim <= U <= 3.57 |
| STAT_HIS_SPANNUNG_MOD11_U2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.57 < U <= 3.77 |
| STAT_HIS_SPANNUNG_MOD11_U3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.77 < U <= 3.93 |
| STAT_HIS_SPANNUNG_MOD11_U4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten in der Klasse  3.93 < U <= UmaxLim |

### RES_0XE57B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_VOLT_INT_LIM_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_over] Fehlerschwellwert des ÜBERspannungsintegrals >> Überlaufen von OVER_1 (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) in [V*V*s] |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | [UerrIntLim_under] Fehlerschwellwert des UNTERspannungsintegrals >> Überlaufen von UNDER_1  (Bei Temperaturen < -10°C verändert sich der Fehlerschellwert temperaturabhängig.) in [V*V*s] |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD1_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 01 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD2_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 02 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD3_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 03 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD4_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 04 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD5_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 05 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD6_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 06 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD7_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 07 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD8_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 08 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD9_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 09 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD10_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 10 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_OVER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Laden in der Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_OVER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Laden in der Klasse: UerrInt_over > UerrIntLim_over >>GW-FALL<< |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_UNDER_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Entladen in der Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MOD11_UNDER_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MODUL 11 Dauer in Minuten beim Entladen in der Klasse: UerrInt_under > UerrIntLim_under >>GW-FALL<< |

### RES_0XE57D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYM_ZEIT_ZELLE_001_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 001  |
| STAT_SYM_ZEIT_ZELLE_002_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 002 |
| STAT_SYM_ZEIT_ZELLE_003_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 003 |
| STAT_SYM_ZEIT_ZELLE_004_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 004  |
| STAT_SYM_ZEIT_ZELLE_005_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 005  |
| STAT_SYM_ZEIT_ZELLE_006_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 006 |
| STAT_SYM_ZEIT_ZELLE_007_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 007 |
| STAT_SYM_ZEIT_ZELLE_008_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 008 |
| STAT_SYM_ZEIT_ZELLE_009_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 009  |
| STAT_SYM_ZEIT_ZELLE_010_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 010  |
| STAT_SYM_ZEIT_ZELLE_011_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 011  |
| STAT_SYM_ZEIT_ZELLE_012_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 012  |
| STAT_SYM_ZEIT_ZELLE_013_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 013  |
| STAT_SYM_ZEIT_ZELLE_014_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 014  |
| STAT_SYM_ZEIT_ZELLE_015_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 015 |
| STAT_SYM_ZEIT_ZELLE_016_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 016  |
| STAT_SYM_ZEIT_ZELLE_017_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 017 |
| STAT_SYM_ZEIT_ZELLE_018_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 018  |
| STAT_SYM_ZEIT_ZELLE_019_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 019  |
| STAT_SYM_ZEIT_ZELLE_020_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 020  |
| STAT_SYM_ZEIT_ZELLE_021_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 021 |
| STAT_SYM_ZEIT_ZELLE_022_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 022  |
| STAT_SYM_ZEIT_ZELLE_023_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 023  |
| STAT_SYM_ZEIT_ZELLE_024_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 024 |
| STAT_SYM_ZEIT_ZELLE_025_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 025  |
| STAT_SYM_ZEIT_ZELLE_026_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 026  |
| STAT_SYM_ZEIT_ZELLE_027_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 027  |
| STAT_SYM_ZEIT_ZELLE_028_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 028  |
| STAT_SYM_ZEIT_ZELLE_029_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 029  |
| STAT_SYM_ZEIT_ZELLE_030_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 030  |
| STAT_SYM_ZEIT_ZELLE_031_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 031  |
| STAT_SYM_ZEIT_ZELLE_032_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 032  |
| STAT_SYM_ZEIT_ZELLE_033_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 033  |
| STAT_SYM_ZEIT_ZELLE_034_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 034  |
| STAT_SYM_ZEIT_ZELLE_035_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 035  |
| STAT_SYM_ZEIT_ZELLE_036_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 036  |
| STAT_SYM_ZEIT_ZELLE_037_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 037  |
| STAT_SYM_ZEIT_ZELLE_038_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 038  |
| STAT_SYM_ZEIT_ZELLE_039_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 039  |
| STAT_SYM_ZEIT_ZELLE_040_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 040 |
| STAT_SYM_ZEIT_ZELLE_041_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 041  |
| STAT_SYM_ZEIT_ZELLE_042_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 042 |
| STAT_SYM_ZEIT_ZELLE_043_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 043 |
| STAT_SYM_ZEIT_ZELLE_044_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 044  |
| STAT_SYM_ZEIT_ZELLE_045_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 045 |
| STAT_SYM_ZEIT_ZELLE_046_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 046  |
| STAT_SYM_ZEIT_ZELLE_047_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 047 |
| STAT_SYM_ZEIT_ZELLE_048_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 048  |
| STAT_SYM_ZEIT_ZELLE_049_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 049 |
| STAT_SYM_ZEIT_ZELLE_050_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 050  |
| STAT_SYM_ZEIT_ZELLE_051_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 051 |
| STAT_SYM_ZEIT_ZELLE_052_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 052  |
| STAT_SYM_ZEIT_ZELLE_053_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 053 |
| STAT_SYM_ZEIT_ZELLE_054_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 054 |
| STAT_SYM_ZEIT_ZELLE_055_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 055 |
| STAT_SYM_ZEIT_ZELLE_056_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 056 |
| STAT_SYM_ZEIT_ZELLE_057_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 057 |
| STAT_SYM_ZEIT_ZELLE_058_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 058  |
| STAT_SYM_ZEIT_ZELLE_059_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 059  |
| STAT_SYM_ZEIT_ZELLE_060_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 060  |
| STAT_SYM_ZEIT_ZELLE_061_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 061 |
| STAT_SYM_ZEIT_ZELLE_062_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 062  |
| STAT_SYM_ZEIT_ZELLE_063_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 063 |
| STAT_SYM_ZEIT_ZELLE_064_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 064 |
| STAT_SYM_ZEIT_ZELLE_065_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 065 |
| STAT_SYM_ZEIT_ZELLE_066_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 066 |
| STAT_SYM_ZEIT_ZELLE_067_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 067 |
| STAT_SYM_ZEIT_ZELLE_068_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 068  |
| STAT_SYM_ZEIT_ZELLE_069_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 069  |
| STAT_SYM_ZEIT_ZELLE_070_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 070  |
| STAT_SYM_ZEIT_ZELLE_071_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 071 |
| STAT_SYM_ZEIT_ZELLE_072_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 072  |
| STAT_SYM_ZEIT_ZELLE_073_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 073 |
| STAT_SYM_ZEIT_ZELLE_074_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 074 |
| STAT_SYM_ZEIT_ZELLE_075_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 075 |
| STAT_SYM_ZEIT_ZELLE_076_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 076 |
| STAT_SYM_ZEIT_ZELLE_077_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 077 |
| STAT_SYM_ZEIT_ZELLE_078_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 078  |
| STAT_SYM_ZEIT_ZELLE_079_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 079  |
| STAT_SYM_ZEIT_ZELLE_080_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 080  |
| STAT_SYM_ZEIT_ZELLE_081_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 081 |
| STAT_SYM_ZEIT_ZELLE_082_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 082  |
| STAT_SYM_ZEIT_ZELLE_083_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 083 |
| STAT_SYM_ZEIT_ZELLE_084_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 084 |
| STAT_SYM_ZEIT_ZELLE_085_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 085 |
| STAT_SYM_ZEIT_ZELLE_086_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 086 |
| STAT_SYM_ZEIT_ZELLE_087_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 087 |
| STAT_SYM_ZEIT_ZELLE_088_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 088  |
| STAT_SYM_ZEIT_ZELLE_089_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 089  |
| STAT_SYM_ZEIT_ZELLE_090_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 090  |
| STAT_SYM_ZEIT_ZELLE_091_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 091 |
| STAT_SYM_ZEIT_ZELLE_092_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 092  |
| STAT_SYM_ZEIT_ZELLE_093_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 093 |
| STAT_SYM_ZEIT_ZELLE_094_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 094 |
| STAT_SYM_ZEIT_ZELLE_095_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 095 |
| STAT_SYM_ZEIT_ZELLE_096_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 096 |
| STAT_SYM_ZEIT_ZELLE_097_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 097 |
| STAT_SYM_ZEIT_ZELLE_098_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 098  |
| STAT_SYM_ZEIT_ZELLE_099_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 099  |
| STAT_SYM_ZEIT_ZELLE_100_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 100  |
| STAT_SYM_ZEIT_ZELLE_101_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 101 |
| STAT_SYM_ZEIT_ZELLE_102_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 102  |
| STAT_SYM_ZEIT_ZELLE_103_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 103 |
| STAT_SYM_ZEIT_ZELLE_104_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 104 |
| STAT_SYM_ZEIT_ZELLE_105_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 105 |
| STAT_SYM_ZEIT_ZELLE_106_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 106 |
| STAT_SYM_ZEIT_ZELLE_107_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 107 |
| STAT_SYM_ZEIT_ZELLE_108_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Symmetrierzeit über Lebenszeit Zelle 108  |

### RES_0XE57E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTO_SYM_ZELLANZAHL_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 0 |
| STAT_HISTO_SYM_ZELLANZAHL_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = 1 |
| STAT_HISTO_SYM_ZELLANZAHL_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen:  1 < n <= NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsProModul < n <= NrCellsTotal/2 |
| STAT_HISTO_SYM_ZELLANZAHL_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal/2 < n <= NrCellsTotal-NrCellsProModul |
| STAT_HISTO_SYM_ZELLANZAHL_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: NrCellsTotal-NrCellsProModul < n <= NrCellsTotal-2 |
| STAT_HISTO_SYM_ZELLANZAHL_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n <= NrCellsTotal-1 |
| STAT_HISTO_SYM_ZELLANZAHL_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl zu symmetrierende Zellen: n = NrCellsTotal |

### RES_0XE57F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_SYM_BEDARF_1_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Maximaler Symmetrierbedarf der letzten Symmetrierbedarfsberechnung  |
| STAT_SYM_ZEIT_BEDARF_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Zeitstempel bei Symmetrierbedarfsberechnung |
| STAT_SYM_ZEIT_ENDE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 1: Zeitstempel Symmetrierung abgeschlossen  |
| STAT_BAL_COMPL_1 | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Ringspeicher 1: Status Symmetrierung  |
| STAT_MAX_SYM_BEDARF_2_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Maximaler Symmetrierbedarf der letzten Symmetrierbedarfsberechnung  |
| STAT_SYM_ZEIT_BEDARF_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Zeitstempel bei Symmetrierbedarfsberechnung |
| STAT_SYM_ZEIT_ENDE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 2: Zeitstempel Symmetrierung abgeschlossen  |
| STAT_BAL_COMPL_2 | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Ringspeicher 2: Status Symmetrierung  |
| STAT_MAX_SYM_BEDARF_3_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Maximaler Symmetrierbedarf der letzten Symmetrierbedarfsberechnung  |
| STAT_SYM_ZEIT_BEDARF_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Zeitstempel bei Symmetrierbedarfsberechnung |
| STAT_SYM_ZEIT_ENDE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 3: Zeitstempel Symmetrierung abgeschlossen  |
| STAT_BAL_COMPL_3 | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Ringspeicher 3: Status Symmetrierung  |
| STAT_MAX_SYM_BEDARF_4_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Maximaler Symmetrierbedarf der letzten Symmetrierbedarfsberechnung  |
| STAT_SYM_ZEIT_BEDARF_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Zeitstempel bei Symmetrierbedarfsberechnung |
| STAT_SYM_ZEIT_ENDE_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 4: Zeitstempel Symmetrierung abgeschlossen  |
| STAT_BAL_COMPL_4 | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Ringspeicher 4: Status Symmetrierung  |
| STAT_MAX_SYM_BEDARF_5_WERT | As | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Maximaler Symmetrierbedarf der letzten Symmetrierbedarfsberechnung  |
| STAT_SYM_ZEIT_BEDARF_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Zeitstempel bei Symmetrierbedarfsberechnung |
| STAT_SYM_ZEIT_ENDE_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ringspeicher 5: Zeitstempel Symmetrierung abgeschlossen  |
| STAT_BAL_COMPL_5 | 0-n | high | unsigned char | - | TAB_SME_SYMMETRIERUNG_FERTIG | - | - | - | Ringspeicher 5: Status Symmetrierung  |

### RES_0XE581_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_HV_ON_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Gesamtzeit bei geschlossenen Hauptschaltern |
| STAT_TIME_TOTAL_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die gesamte Batterielebensdauer (Gesamtzeit bei geschlossenen und geöffneten Hauptschaltern) |

### RES_0XE587_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Schwellwert  des Fehlerintegrals der oberen Spannung [UerrIntLim_over] |
| STAT_UNDER_VOLT_INT_LIM_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Schwellwert  des Fehlerintegrals der unteren Spannung [UerrIntLim_under] |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: 0 <UerrInt_under <= UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_UNDER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: UerrInt_under > UerrIntLim_under |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: 0 <UerrInt_over <= UerrIntLim_over |
| STAT_HIS_ERR_LIM_SPANNUNG_MODSMAX_OVER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximum der Dauer in Minuten über alle Module beim  Laden in der  Klasse: UerrInt_over > UerrIntLim_over |

### RES_0XE599_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALPHA_LONG_MAX_MOD_1_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 1 |
| STAT_ALPHA_LONG_MAX_MOD_2_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 2 |
| STAT_ALPHA_LONG_MAX_MOD_3_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 3 |
| STAT_ALPHA_LONG_MAX_MOD_4_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 4 |
| STAT_ALPHA_LONG_MAX_MOD_5_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 5 |
| STAT_ALPHA_LONG_MAX_MOD_6_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 6 |
| STAT_ALPHA_LONG_MAX_MOD_7_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 7 |
| STAT_ALPHA_LONG_MAX_MOD_8_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 8 |
| STAT_ALPHA_LONG_MAX_MOD_9_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 9 |
| STAT_ALPHA_LONG_MAX_MOD_10_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 10 |
| STAT_ALPHA_LONG_MAX_MOD_11_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 11 |
| STAT_ALPHA_LONG_MAX_MOD_12_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 12 |
| STAT_ALPHA_LONG_MAX_MOD_13_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 13 |
| STAT_ALPHA_LONG_MAX_MOD_14_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 14 |
| STAT_ALPHA_LONG_MAX_MOD_15_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 15 |
| STAT_ALPHA_LONG_MAX_MOD_16_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 16 |
| STAT_ALPHA_LONG_MAX_MOD_17_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 17 |
| STAT_ALPHA_LONG_MAX_MOD_18_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 18 |
| STAT_ALPHA_LONG_MAX_MOD_19_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 19 |
| STAT_ALPHA_LONG_MAX_MOD_20_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 20 |
| STAT_ALPHA_LONG_MAX_MOD_21_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 21 |
| STAT_ALPHA_LONG_MAX_MOD_22_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 22 |
| STAT_ALPHA_LONG_MAX_MOD_23_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 23 |
| STAT_ALPHA_LONG_MAX_MOD_24_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 24 |
| STAT_ALPHA_LONG_MAX_MOD_25_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 25 |
| STAT_ALPHA_LONG_MAX_MOD_26_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 26 |
| STAT_ALPHA_LONG_MAX_MOD_27_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Maximum Speichermodul 27 |
| STAT_ALPHA_LONG_MIN_MOD_1_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 1 |
| STAT_ALPHA_LONG_MIN_MOD_2_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 2 |
| STAT_ALPHA_LONG_MIN_MOD_3_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 3 |
| STAT_ALPHA_LONG_MIN_MOD_4_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 4 |
| STAT_ALPHA_LONG_MIN_MOD_5_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 5 |
| STAT_ALPHA_LONG_MIN_MOD_6_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 6 |
| STAT_ALPHA_LONG_MIN_MOD_7_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 7 |
| STAT_ALPHA_LONG_MIN_MOD_8_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 8 |
| STAT_ALPHA_LONG_MIN_MOD_9_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 9 |
| STAT_ALPHA_LONG_MIN_MOD_10_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 10 |
| STAT_ALPHA_LONG_MIN_MOD_11_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 11 |
| STAT_ALPHA_LONG_MIN_MOD_12_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 12 |
| STAT_ALPHA_LONG_MIN_MOD_13_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 13 |
| STAT_ALPHA_LONG_MIN_MOD_14_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 14 |
| STAT_ALPHA_LONG_MIN_MOD_15_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 15 |
| STAT_ALPHA_LONG_MIN_MOD_16_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 16 |
| STAT_ALPHA_LONG_MIN_MOD_17_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 17 |
| STAT_ALPHA_LONG_MIN_MOD_18_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 18 |
| STAT_ALPHA_LONG_MIN_MOD_19_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 19 |
| STAT_ALPHA_LONG_MIN_MOD_20_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 20 |
| STAT_ALPHA_LONG_MIN_MOD_21_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 21 |
| STAT_ALPHA_LONG_MIN_MOD_22_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 22 |
| STAT_ALPHA_LONG_MIN_MOD_23_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 23 |
| STAT_ALPHA_LONG_MIN_MOD_24_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 24 |
| STAT_ALPHA_LONG_MIN_MOD_25_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 25 |
| STAT_ALPHA_LONG_MIN_MOD_26_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 26 |
| STAT_ALPHA_LONG_MIN_MOD_27_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Minimum Speichermodul 27 |
| STAT_ALPHA_LONG_MEAN_MOD_1_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 1 |
| STAT_ALPHA_LONG_MEAN_MOD_2_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 2 |
| STAT_ALPHA_LONG_MEAN_MOD_3_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 3 |
| STAT_ALPHA_LONG_MEAN_MOD_4_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 4 |
| STAT_ALPHA_LONG_MEAN_MOD_5_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 5 |
| STAT_ALPHA_LONG_MEAN_MOD_6_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 6 |
| STAT_ALPHA_LONG_MEAN_MOD_7_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 7 |
| STAT_ALPHA_LONG_MEAN_MOD_8_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 8 |
| STAT_ALPHA_LONG_MEAN_MOD_9_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 9 |
| STAT_ALPHA_LONG_MEAN_MOD_10_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 10 |
| STAT_ALPHA_LONG_MEAN_MOD_11_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 11 |
| STAT_ALPHA_LONG_MEAN_MOD_12_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 12 |
| STAT_ALPHA_LONG_MEAN_MOD_13_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 13 |
| STAT_ALPHA_LONG_MEAN_MOD_14_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 14 |
| STAT_ALPHA_LONG_MEAN_MOD_15_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 15 |
| STAT_ALPHA_LONG_MEAN_MOD_16_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 16 |
| STAT_ALPHA_LONG_MEAN_MOD_17_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 17 |
| STAT_ALPHA_LONG_MEAN_MOD_18_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 18 |
| STAT_ALPHA_LONG_MEAN_MOD_19_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 19 |
| STAT_ALPHA_LONG_MEAN_MOD_20_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 20 |
| STAT_ALPHA_LONG_MEAN_MOD_21_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 21 |
| STAT_ALPHA_LONG_MEAN_MOD_22_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 22 |
| STAT_ALPHA_LONG_MEAN_MOD_23_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 23 |
| STAT_ALPHA_LONG_MEAN_MOD_24_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 24 |
| STAT_ALPHA_LONG_MEAN_MOD_25_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 25 |
| STAT_ALPHA_LONG_MEAN_MOD_26_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 26 |
| STAT_ALPHA_LONG_MEAN_MOD_27_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaLong Mittelwert Speichermodul 27 |
| STAT_ALPHA_SHORT_MEAN_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaShort Mittelwert Speicher |
| STAT_ALPHA_SHORT_MAX_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaShort Maximum Speicher |
| STAT_ALPHA_SHORT_MIN_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Innenwiderstandskorrekturfaktor AlphaShort Minimum Speicher |
| STAT_ALPHA_LONG_ADAPT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anlernungen AlphaLong |
| STAT_ALPHA_SHORT_SPREAD_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spreizung zwischen maximalen Alpha Short auf Zellebene und mittleren Alpha Short auf Speicherebene |
| STAT_ALPHA_SHORT_MAX_CELL_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zell ID mit maximalen Alpha Short |
| STAT_ALPHA_SHORT_MAX_MOD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Modul der Zelle mit maximalen Alpha Short  |

### RES_0XE59A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_CELL_01_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 1 |
| STAT_SOC_CELL_02_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 2 |
| STAT_SOC_CELL_03_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 3 |
| STAT_SOC_CELL_04_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 4 |
| STAT_SOC_CELL_05_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 5 |
| STAT_SOC_CELL_06_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 6 |
| STAT_SOC_CELL_07_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 7 |
| STAT_SOC_CELL_08_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 8 |
| STAT_SOC_CELL_09_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 9 |
| STAT_SOC_CELL_10_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 10 |
| STAT_SOC_CELL_11_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 11 |
| STAT_SOC_CELL_12_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 12 |
| STAT_SOC_CELL_13_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 13 |
| STAT_SOC_CELL_14_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 14 |
| STAT_SOC_CELL_15_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 15 |
| STAT_SOC_CELL_16_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 16 |
| STAT_SOC_CELL_17_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 17 |
| STAT_SOC_CELL_18_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 18 |
| STAT_SOC_CELL_19_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 19 |
| STAT_SOC_CELL_20_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 20 |
| STAT_SOC_CELL_21_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 21 |
| STAT_SOC_CELL_22_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 22 |
| STAT_SOC_CELL_23_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 23 |
| STAT_SOC_CELL_24_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 24 |
| STAT_SOC_CELL_25_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 25 |
| STAT_SOC_CELL_26_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 26 |
| STAT_SOC_CELL_27_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 27 |
| STAT_SOC_CELL_28_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 28 |
| STAT_SOC_CELL_29_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 29 |
| STAT_SOC_CELL_30_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 30 |
| STAT_SOC_CELL_31_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 31 |
| STAT_SOC_CELL_32_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 32 |
| STAT_SOC_CELL_33_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 33 |
| STAT_SOC_CELL_34_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 34 |
| STAT_SOC_CELL_35_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 35 |
| STAT_SOC_CELL_36_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 36 |
| STAT_SOC_CELL_37_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 37 |
| STAT_SOC_CELL_38_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 38 |
| STAT_SOC_CELL_39_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 39 |
| STAT_SOC_CELL_40_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 40 |
| STAT_SOC_CELL_41_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 41 |
| STAT_SOC_CELL_42_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 42 |
| STAT_SOC_CELL_43_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 43 |
| STAT_SOC_CELL_44_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 44 |
| STAT_SOC_CELL_45_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 45 |
| STAT_SOC_CELL_46_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 46 |
| STAT_SOC_CELL_47_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 47 |
| STAT_SOC_CELL_48_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 48 |
| STAT_SOC_CELL_49_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 49 |
| STAT_SOC_CELL_50_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 50 |
| STAT_SOC_CELL_51_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 51 |
| STAT_SOC_CELL_52_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 52 |
| STAT_SOC_CELL_53_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 53 |
| STAT_SOC_CELL_54_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 54 |
| STAT_SOC_CELL_55_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 55 |
| STAT_SOC_CELL_56_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 56 |
| STAT_SOC_CELL_57_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 57 |
| STAT_SOC_CELL_58_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 58 |
| STAT_SOC_CELL_59_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 59 |
| STAT_SOC_CELL_60_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 60 |
| STAT_SOC_CELL_61_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 61 |
| STAT_SOC_CELL_62_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 62 |
| STAT_SOC_CELL_63_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 63 |
| STAT_SOC_CELL_64_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 64 |
| STAT_SOC_CELL_65_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 65 |
| STAT_SOC_CELL_66_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 66 |
| STAT_SOC_CELL_67_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 67 |
| STAT_SOC_CELL_68_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 68 |
| STAT_SOC_CELL_69_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 69 |
| STAT_SOC_CELL_70_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 70 |
| STAT_SOC_CELL_71_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 71 |
| STAT_SOC_CELL_72_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 72 |
| STAT_SOC_CELL_73_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 73 |
| STAT_SOC_CELL_74_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 74 |
| STAT_SOC_CELL_75_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 75 |
| STAT_SOC_CELL_76_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 76 |
| STAT_SOC_CELL_77_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 77 |
| STAT_SOC_CELL_78_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 78 |
| STAT_SOC_CELL_79_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 79 |
| STAT_SOC_CELL_80_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 80 |
| STAT_SOC_CELL_81_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 81 |
| STAT_SOC_CELL_82_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 82 |
| STAT_SOC_CELL_83_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 83 |
| STAT_SOC_CELL_84_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 84 |
| STAT_SOC_CELL_85_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 85 |
| STAT_SOC_CELL_86_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 86 |
| STAT_SOC_CELL_87_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 87 |
| STAT_SOC_CELL_88_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 88 |
| STAT_SOC_CELL_89_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 89 |
| STAT_SOC_CELL_90_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 90 |
| STAT_SOC_CELL_91_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 91 |
| STAT_SOC_CELL_92_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 92 |
| STAT_SOC_CELL_93_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 93 |
| STAT_SOC_CELL_94_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 94 |
| STAT_SOC_CELL_95_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 95 |
| STAT_SOC_CELL_96_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 96 |
| STAT_SOC_CELL_97_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 97 |
| STAT_SOC_CELL_98_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 98 |
| STAT_SOC_CELL_99_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 99 |
| STAT_SOC_CELL_100_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 100 |
| STAT_SOC_CELL_101_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 101 |
| STAT_SOC_CELL_102_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 102 |
| STAT_SOC_CELL_103_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 103 |
| STAT_SOC_CELL_104_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 104 |
| STAT_SOC_CELL_105_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 105 |
| STAT_SOC_CELL_106_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 106 |
| STAT_SOC_CELL_107_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 107 |
| STAT_SOC_CELL_108_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller SOC der Zelle 108 |

### RES_0XE59C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS_SOC_WARN_GRENZEN_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 1 |
| STAT_HIS_SOC_WARN_GRENZEN_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 2 |
| STAT_HIS_SOC_WARN_GRENZEN_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 3 |
| STAT_HIS_SOC_WARN_GRENZEN_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 4 |
| STAT_HIS_SOC_WARN_GRENZEN_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 5 |
| STAT_HIS_SOC_WARN_GRENZEN_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer in: Nutzbereichsanzeiger == 6 |

### RES_0XE5AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLKREISLAUF_VENTIL_ANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | Zustand der Ansteuerung des Ventils (Bestromt/Nicht bestromt) 0x00: nicht bestromt 0x01: bestromt |
| STAT_DUMMY_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Dummy Data |

### RES_0XE5AB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CRASH_ERKENNUNG_GESAMT | 0/1 | high | unsigned char | - | - | - | - | - | Liefert den aggregierten Status aller vorhandenen Schnittstellen zur Crash-Erkennung: 0x00: Kein Crash erkannt; 0x01: Crash erkannt; |
| STAT_CRASH_ERKENNUNG_BUS_SIGNAL | 0-n | high | unsigned char | - | TAB_CRASH_ERKENNUNG | - | - | - | Liefert den Status des Bus-Signals zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_KL30C | 0-n | high | unsigned char | - | TAB_CRASH_ERKENNUNG | - | - | - | Liefert den Status der KL30C zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_DIFFERENZ_SIGNAL | 0-n | high | unsigned char | - | TAB_CRASH_ERKENNUNG | - | - | - | Liefert den Status des Differentiellen-Signals zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_PWM_SIGNAL | 0-n | high | unsigned char | - | TAB_CRASH_ERKENNUNG | - | - | - | Liefert den Status des PWM-Signals zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_SPANNUNG_KL30C_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die aktuelle Spannung der KL30C zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_SPANNUNG_DIFFERENZSIGNAL_PLUS_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die aktuelle Spannung des Differenzsignals Plus zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_SPANNUNG_DIFFERENZSIGNAL_MINUS_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die aktuelle Spannung des Differenzsignals Minus zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_SPANNUNG_PWM_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die aktuelle Spannung des PWM Signals zur Crash-Erkennung |
| STAT_CRASH_ERKENNUNG_TASTGRAD_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert den aktuellen Tastgrad des PWM Signals zur Crash-Erkennung |

### RES_0XE5B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_CSC1_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC1 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC2_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC2 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC3_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC3 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC4_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC4 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC5_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC5 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC6_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC6 (4.294.967,295 = nicht verbaut) |
| STAT_SPANNUNG_CSC7_WERT | V | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | Spannung CSC7 (4.294.967,295 = nicht verbaut) |

### RES_0XE5B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTSCHUETZE_EINZELANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | 0 = Einzelansteuerung gesperrt; 1 = Einzelansteuerung freigeschaltet; |
| STAT_DUMMY_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Dummy Data |

### RES_0XE5BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESCHUETZE_EINZELANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | 0 = Einzelansteuerung gesperrt; 1 = Einzelansteuerung freigeschaltet |
| STAT_DUMMY_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Dummy Data |

### RES_0XE5BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SCHALTUNGEN_HAUPTSCHUETZ_PLUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | Anzahl Schaltungen Hauptschütz Plus |
| STAT_ANZAHL_SCHALTUNGEN_HAUPTSCHUETZ_MINUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | Anzahl Schaltungen Hauptschütz Minus |
| STAT_ANZAHL_SCHALTUNGEN_VORLADESCHUETZ_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | Anzahl Schaltungen Vorladeschütz |

### RES_0XE5BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SCHALTUNGEN_DC_LADESCHUETZ_PLUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | Anzahl Schaltungen DC Ladeschütz Plus |
| STAT_ANZAHL_SCHALTUNGEN_DC_LADESCHUETZ_MINUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 1.0 | Anzahl Schaltungen DC Ladeschütz Minus |

### RES_0XE5BD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTZAEHLER_HAUPTSCHUETZ_PLUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | verbleibende Anzahl von Schaltungen des Hauptschütz Plus |
| STAT_RESTZAEHLER_HAUPTSCHUETZ_MINUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | verbleibende Anzahl von Schaltungen des Hauptschütz Minus |
| STAT_RESTZAEHLER_VORLADESCHUETZ_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | verbleibende Anzahl von Schaltungen des Vorladeschütz |

### RES_0XE5BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTZAEHLER_LADESCHUETZ_PLUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Anzahl von Schaltungen des DC Ladeschütz Plus |
| STAT_RESTZAEHLER_LADESCHUETZ_MINUS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Anzahl von Schaltungen des DC Ladeschütz Minus |

### RES_0XE5BF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_HAUPTSCHUETZ_PLUS | 0-n | high | signed char | - | TAB_SCHUETZ_SCHALTER_HAUPTSCHUETZE | - | - | - | Status der Hauptschütz Plus |
| STAT_STATUS_HAUPTSCHUETZ_MINUS | 0-n | high | signed char | - | TAB_SCHUETZ_SCHALTER_HAUPTSCHUETZE | - | - | - | Status des Hauptschütz Minus |
| STAT_STATUS_VORLADESCHUETZ | 0-n | high | signed char | - | TAB_SCHUETZ_SCHALTER_HAUPTSCHUETZE | - | - | - | Status des Vorladeschütz |

### RES_0XE5C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_DC_LADESCHUETZ_PLUS | 0-n | high | signed char | - | TAB_SCHUETZ_SCHALTER_LADESCHUETZE | - | - | - | Status des DC Ladeschütz Plus |
| STAT_STATUS_DC_LADESCHUETZ_MINUS | 0-n | high | signed char | - | TAB_SCHUETZ_SCHALTER_LADESCHUETZE | - | - | - | Status des DC Ladeschütz Minus |

### RES_0XE5C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUTZENERGIE_STD_AKT_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Aktuell aus dem HV-Speicher entladbare Energie, berechnet mit einer festen Standard-Entladeleistung (600 = unplausibel)  |
| STAT_NUTZENERGIE_STD_MAX_HVS_WERT | kWh | high | unsigned int | - | - | 1.0 | 100.0 | -50.0 | Bei vollgeladenem HV-Speicher entladbare Energie, berechnet mit einer festen Standard-Entladeleistung (600 = unplausibel) |

### RES_0XE5C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_CSC1_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC1  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC2_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC2  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC3_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC3  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC4_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC4  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC5_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC5  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC6_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC6  (327,67 = unplausibel) |
| STAT_TEMPERATUR_CSC7_INTERN_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Aktuelle interne Temperatur der CSC7  (327,67 = unplausibel) |

### RES_0XE5CA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CSC_TEMPERATUR_1_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 1 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_2_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 2 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_3_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 3 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_4_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 4 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_5_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 5 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_6_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 6 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_7_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 7 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_8_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 8 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_9_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 9 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_10_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 10 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_11_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 11 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_12_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 12 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_13_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 13 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_14_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 14 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_15_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 15 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_16_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 16 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_17_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 17 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_18_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 18 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_19_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 19 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_20_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 20 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_21_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 21 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_22_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 22 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_23_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 23 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_24_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 24 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_25_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 25 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_26_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 26 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_27_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 27 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_28_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 28 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_29_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 29 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_30_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 30 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_31_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 31 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_32_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 32 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_33_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 33 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_34_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 34 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_35_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 35 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_36_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 36 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_37_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 37 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_38_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 38 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_39_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 39 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_40_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 40 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_41_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 41 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_42_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 42 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_43_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 43 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_44_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 44 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_45_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 45 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_46_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 46 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_47_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 47 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_48_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 48 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_49_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 49 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_50_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 50 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_51_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 51 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_52_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 52 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_53_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 53 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_54_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 54 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_55_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 55 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_56_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 56 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_57_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 57 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_58_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 58 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_59_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 59 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_60_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 60 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_61_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 61 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_62_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 62 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_63_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 63 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_64_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 64 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_65_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 65 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_66_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 66 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_67_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 67 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_68_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 68(327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_69_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 69 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_70_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 70 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_71_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 71 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_72_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 72 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_73_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 73 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_74_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 74 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_75_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 75 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_76_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 76 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_77_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 77 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_78_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 78 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_79_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 79 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_80_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 80 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_81_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 81 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_82_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 82 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_83_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 83 (327,67 = unplausibel) |
| STAT_CSC_TEMPERATUR_84_WERT | °C | high | signed int | - | - | 1.0 | 100.0 | 0.0 | CSC Temperatur 84 (327,67 = unplausibel) |

### RES_0XE5CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESCHUETZ_FREIGABE | 0-n | high | unsigned char | - | TAB_LADESCHUETZ_FREIGABE | - | - | - | Liest das Bit zur Freigabe oder Sperrung der Ladeschützschalter |
| STAT_DUMMY_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Dummy Data |

### RES_0XE5CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_AVG_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Mittlere Zell-SoC |
| STAT_SOC_MIN_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Minimale Zell-SoC |
| STAT_SOC_MAX_WERT | % | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Maximale Zell-SoC |

### RES_0XE5D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZKAPAZITAET_WERT | Ah | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Referenzkapazitaet für SoH_C-Werte |
| STAT_ALTERUNG_KAPA_ZELLE_01_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 01 |
| STAT_ALTERUNG_KAPA_ZELLE_02_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 02 |
| STAT_ALTERUNG_KAPA_ZELLE_03_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 03 |
| STAT_ALTERUNG_KAPA_ZELLE_04_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 04 |
| STAT_ALTERUNG_KAPA_ZELLE_05_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 05 |
| STAT_ALTERUNG_KAPA_ZELLE_06_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 06 |
| STAT_ALTERUNG_KAPA_ZELLE_07_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 07 |
| STAT_ALTERUNG_KAPA_ZELLE_08_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 08 |
| STAT_ALTERUNG_KAPA_ZELLE_09_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 09 |
| STAT_ALTERUNG_KAPA_ZELLE_10_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 10 |
| STAT_ALTERUNG_KAPA_ZELLE_11_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 11 |
| STAT_ALTERUNG_KAPA_ZELLE_12_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 12 |
| STAT_ALTERUNG_KAPA_ZELLE_13_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 13 |
| STAT_ALTERUNG_KAPA_ZELLE_14_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 14 |
| STAT_ALTERUNG_KAPA_ZELLE_15_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 15 |
| STAT_ALTERUNG_KAPA_ZELLE_16_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 16 |
| STAT_ALTERUNG_KAPA_ZELLE_17_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 17 |
| STAT_ALTERUNG_KAPA_ZELLE_18_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 18 |
| STAT_ALTERUNG_KAPA_ZELLE_19_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 19 |
| STAT_ALTERUNG_KAPA_ZELLE_20_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 20 |
| STAT_ALTERUNG_KAPA_ZELLE_21_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 21 |
| STAT_ALTERUNG_KAPA_ZELLE_22_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 22 |
| STAT_ALTERUNG_KAPA_ZELLE_23_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 23 |
| STAT_ALTERUNG_KAPA_ZELLE_24_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 24 |
| STAT_ALTERUNG_KAPA_ZELLE_25_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 25 |
| STAT_ALTERUNG_KAPA_ZELLE_26_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 26 |
| STAT_ALTERUNG_KAPA_ZELLE_27_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 27 |
| STAT_ALTERUNG_KAPA_ZELLE_28_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 28 |
| STAT_ALTERUNG_KAPA_ZELLE_29_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 29 |
| STAT_ALTERUNG_KAPA_ZELLE_30_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 30 |
| STAT_ALTERUNG_KAPA_ZELLE_31_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 31 |
| STAT_ALTERUNG_KAPA_ZELLE_32_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 32 |
| STAT_ALTERUNG_KAPA_ZELLE_33_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 33 |
| STAT_ALTERUNG_KAPA_ZELLE_34_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 34 |
| STAT_ALTERUNG_KAPA_ZELLE_35_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 35 |
| STAT_ALTERUNG_KAPA_ZELLE_36_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 36 |
| STAT_ALTERUNG_KAPA_ZELLE_37_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 37 |
| STAT_ALTERUNG_KAPA_ZELLE_38_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 38 |
| STAT_ALTERUNG_KAPA_ZELLE_39_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 39 |
| STAT_ALTERUNG_KAPA_ZELLE_40_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 40 |
| STAT_ALTERUNG_KAPA_ZELLE_41_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 41 |
| STAT_ALTERUNG_KAPA_ZELLE_42_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 42 |
| STAT_ALTERUNG_KAPA_ZELLE_43_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 43 |
| STAT_ALTERUNG_KAPA_ZELLE_44_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 44 |
| STAT_ALTERUNG_KAPA_ZELLE_45_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 45 |
| STAT_ALTERUNG_KAPA_ZELLE_46_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 46 |
| STAT_ALTERUNG_KAPA_ZELLE_47_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 47 |
| STAT_ALTERUNG_KAPA_ZELLE_48_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 48 |
| STAT_ALTERUNG_KAPA_ZELLE_49_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 49 |
| STAT_ALTERUNG_KAPA_ZELLE_50_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 50 |
| STAT_ALTERUNG_KAPA_ZELLE_51_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 51 |
| STAT_ALTERUNG_KAPA_ZELLE_52_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 52 |
| STAT_ALTERUNG_KAPA_ZELLE_53_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 53 |
| STAT_ALTERUNG_KAPA_ZELLE_54_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 54 |
| STAT_ALTERUNG_KAPA_ZELLE_55_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 55 |
| STAT_ALTERUNG_KAPA_ZELLE_56_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 56 |
| STAT_ALTERUNG_KAPA_ZELLE_57_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 57 |
| STAT_ALTERUNG_KAPA_ZELLE_58_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 58 |
| STAT_ALTERUNG_KAPA_ZELLE_59_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 59 |
| STAT_ALTERUNG_KAPA_ZELLE_60_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 60 |
| STAT_ALTERUNG_KAPA_ZELLE_61_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 61 |
| STAT_ALTERUNG_KAPA_ZELLE_62_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 62 |
| STAT_ALTERUNG_KAPA_ZELLE_63_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 63 |
| STAT_ALTERUNG_KAPA_ZELLE_64_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 64 |
| STAT_ALTERUNG_KAPA_ZELLE_65_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 65 |
| STAT_ALTERUNG_KAPA_ZELLE_66_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 66 |
| STAT_ALTERUNG_KAPA_ZELLE_67_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 67 |
| STAT_ALTERUNG_KAPA_ZELLE_68_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 68 |
| STAT_ALTERUNG_KAPA_ZELLE_69_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 69 |
| STAT_ALTERUNG_KAPA_ZELLE_70_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 70 |
| STAT_ALTERUNG_KAPA_ZELLE_71_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 71 |
| STAT_ALTERUNG_KAPA_ZELLE_72_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 72 |
| STAT_ALTERUNG_KAPA_ZELLE_73_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 73 |
| STAT_ALTERUNG_KAPA_ZELLE_74_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 74 |
| STAT_ALTERUNG_KAPA_ZELLE_75_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 75 |
| STAT_ALTERUNG_KAPA_ZELLE_76_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 76 |
| STAT_ALTERUNG_KAPA_ZELLE_77_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 77 |
| STAT_ALTERUNG_KAPA_ZELLE_78_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 78 |
| STAT_ALTERUNG_KAPA_ZELLE_79_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 79 |
| STAT_ALTERUNG_KAPA_ZELLE_80_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 80 |
| STAT_ALTERUNG_KAPA_ZELLE_81_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 81 |
| STAT_ALTERUNG_KAPA_ZELLE_82_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 82 |
| STAT_ALTERUNG_KAPA_ZELLE_83_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 82 |
| STAT_ALTERUNG_KAPA_ZELLE_84_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 84 |
| STAT_ALTERUNG_KAPA_ZELLE_85_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 85 |
| STAT_ALTERUNG_KAPA_ZELLE_86_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 86 |
| STAT_ALTERUNG_KAPA_ZELLE_87_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 87 |
| STAT_ALTERUNG_KAPA_ZELLE_88_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 88 |
| STAT_ALTERUNG_KAPA_ZELLE_89_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 89 |
| STAT_ALTERUNG_KAPA_ZELLE_90_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 90 |
| STAT_ALTERUNG_KAPA_ZELLE_91_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 91 |
| STAT_ALTERUNG_KAPA_ZELLE_92_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 92 |
| STAT_ALTERUNG_KAPA_ZELLE_93_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 93 |
| STAT_ALTERUNG_KAPA_ZELLE_94_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 94 |
| STAT_ALTERUNG_KAPA_ZELLE_95_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 95 |
| STAT_ALTERUNG_KAPA_ZELLE_96_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 96 |
| STAT_ALTERUNG_KAPA_ZELLE_97_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 97 |
| STAT_ALTERUNG_KAPA_ZELLE_98_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 98 |
| STAT_ALTERUNG_KAPA_ZELLE_99_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 99 |
| STAT_ALTERUNG_KAPA_ZELLE_100_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 100 |
| STAT_ALTERUNG_KAPA_ZELLE_101_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 101 |
| STAT_ALTERUNG_KAPA_ZELLE_102_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 102 |
| STAT_ALTERUNG_KAPA_ZELLE_103_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 103 |
| STAT_ALTERUNG_KAPA_ZELLE_104_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 104 |
| STAT_ALTERUNG_KAPA_ZELLE_105_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 105 |
| STAT_ALTERUNG_KAPA_ZELLE_106_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 106 |
| STAT_ALTERUNG_KAPA_ZELLE_107_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 107 |
| STAT_ALTERUNG_KAPA_ZELLE_108_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Alterungszustand der Kapazität (SoH_C) in % von Zelle 108 |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | signed char | - | - | - | - | - | 00: Default value for the first version 01-FE: Index of hardware modification FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SFA_CLEAR_FEATURE | 0x0F2B | - | Removing of a feature activation by deleting the corresponding Secure Token | - | - | - | - | - | - | - | - | - | 31 | ARG_0x0F2B_R | - |
| SFA_READ_VERSION | 0x0F2C | - | Read out of the SFA Version | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x0F2C_R |
| SFA_DELETE_TOKEN | 0x0F2D | - | This function ensures a deletion of a Token without deleting the token history | - | - | - | - | - | - | - | - | - | 31 | ARG_0x0F2D_R | - |
| SFA_VERIFY_TOKEN | 0x0F2E | - | This function triggers the import check as specified in SEC1865 of Secure Token in a control unit. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| CERTIFICATE_MANAGEMENT_START_CHECK | 0x10AB | - | Startet die detaillierte Überprüfung der steuergeräteindividuellen Zertifikate. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x10AB_R |
| FALLBACK_FIELD_MODE | 0x1100 | - | This function triggers the Mode change to Field Mode. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LCS | 0x1104 | - | Locking Configuration Switch | - | - | - | - | - | - | - | - | - | 2E | ARG_0x1104_D | - |
| SET_SECOC_COUNTER | 0x1105 | - | Setzt den Counterwert für eine spezifische SecOC dataID. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1105_R | - |
| GET_SECOC_COUNTER | 0x1106 | - | Liest den Counterwert für eine spezifische SecOC dataID aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1106_R | RES_0x1106_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _HUB_OEFFNEN_VOLL | 0x4000 | - | SoC-Min Grenze und Ladeendstromgrenze anpassen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4000_D | - |
| _BMU_INTERNE_TEMPERATUREN | 0x4001 | - | Dieser Entwickler-Job gibt verschiedene BMU interne  Temperaturen zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |
| _MESSBOTSCHAFTEN | 0x4002 | - | Messbotschaften zur Versendung auf dem Fahrzeugbus ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| _SHOWROOM | 0x4003 | - | Mit dem Steuern-Job kann der Showroom-Modus aktiviert/deaktiviert werden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4003_D | - |
| _ZEITEN_HVS_RB | 0x4004 | - | Ringspeicher der internen Zeiten des HVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| _UEBERNAHME_KAPAZITAETSTEST_ERG | 0x4005 | - | Diagnoseschalter um Übernahme vom Ergebnis eines Kapazitätstests in den SoH-C-Schätzer zu steuern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4005_D | - |
| ACTIVE_ERROR_MESSAGE | 0x400A | - | DM: Persistentes aktivieren / deaktivieren / auslesen der aktiven Fehlermeldungen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x400A_R |
| _ANFORDERUNG_SCHUETZE_SCHLIESSEN | 0x651B | - | Mit dem Steuern-Job können im fehlerfreien Speicherzustand die Hauptschütze analog zur Fahrzeuganforderung geschlossen werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x651B_D | - |
| ECUMODES_READ_MODE | 0x8002 | - | Auslesen des aktuellen ECU Modes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x8002_D |
| KAPAZITAETSTEST | 0xAE75 | - | Status/Steuern Kapazitätstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE75_R |
| SYMMETRIERUNG_VALUE | 0xAE77 | - | Symmetrierung ansteueren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE77_R |
| ANZEIGE_SOC | 0xDDBC | - | aktueller Anzeige Soc | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDBC_D |
| TEMPERATUREN_HVS | 0xDDC0 | - | Ausgabe der berechneten Zellkerntemperaturen (minimale, maximale und durchschnittliche) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDDC0_D |
| SERIENNUMMER_ECU | 0xDDCA | STAT_SERIENNUMMER_ECU_TEXT | Seriennummer des SME Steuergeräts | TEXT | - | High | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BATTERY_GUARD_RESTSTANDZEIT | 0xDFA3 | - | Auslesen der minimalen und aktuellen Reststandzeit des Hochvoltspeichers.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFA3_D |
| ZEITEN_HVS_AKT | 0xE4C0 | - | Aktueller Wert der internen Zeiten des HVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C0_D |
| SOC_GRENZEN_ZELLEN | 0xE4C1 | - | Auslesen der aktuell gültigen SOC Grenzen pro Zelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C1_D |
| TASTVERHAELTNIS_PWM_CRASH_SIGNAL | 0xE4C2 | STAT_TASTVERHAELTNIS_PWM_CRASH_SIGNAL_WERT | Tastverhältnis in % | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NUTZENERGIEN_DYNAMISCH_HVS | 0xE4C3 | - | Auslesen der Nutzenergien des HV-Speichers bei einer dynamischen Lade- und Entladeleistung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C3_D |
| GRUND_STROMGRENZEN_REDUZIERUNG | 0xE4C4 | - | Anzahl und Ursachen der Stromdegradierungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C4_D |
| HIS_SPANNUNG_MOD_NOP | 0xE4C8 | - | Zeit in Minuten in verschiedenen Spannungsklassen von allen Modulen während Speicher nicht im Betrieb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C8_D |
| ID_HV_SPEICHER | 0xE541 | - | Auslesen der Speicheridentifikationsnummer des HV-Speichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE541_D |
| ANZAHL_VOLLLADEVORGAENGE | 0xE542 | - | Rückgabe der aktuellen Anzahl aller Vollladevorgänge in Abhängigkeit vom Ladeschluss-Ladeende-Kriterium | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE542_D |
| RB_KAPAZITAETSTEST | 0xE543 | - | Rückgabe der Ergebnisse der letzten 2 HVS-Offboard-Kapatests | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE543_D |
| RB_ALTERUNG_KAPA_VALUE | 0xE544 | - | Rückgabe der Ergebnisse der letzten 5 SoH_C-Adaptionen incl. Kapatests  (Ringspeicher) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE544_D |
| ALTERUNG_KAPAZITAET_HVS | 0xE545 | - | Ausgabe der Kapazität und des Alterungszustands der Kapazität (SoH_C bezogen auf Referenzkapazität) des HV-Speichers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE545_D |
| ENTLADESPANNUNGSGRENZE | 0xE546 | - | Entladespannungsgrenze runter setzen um bei Zellunterspannungen Zuschaltungen zu ermöglichen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE546_D | - |
| ALTERUNG_KAPAZITAET_MIN_MOD | 0xE548 | - | Ausgabe des minimalen Alterungszustands der Kapazität (SoH_C_min bezogen auf Referenzkapazität) jedes Moduls. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE548_D |
| VOKO_HEIZ_DAUER_VALUE | 0xE549 | - | Anzahl der Vorkonditionierungs-Heizdauervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE549_D |
| HV_ZWISCHENKREISSPANNUNG | 0xE54A | STAT_HV_SPANNUNG_WERT | Zwischenkreisspannung zum HV-Anschlussstecker, abhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_AUS_ZELLEN | 0xE54B | STAT_HV_SPANNUNG_BERECHNET_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSPANNUNGSGRENZEN | 0xE54C | - | Ausgabe der momentan gültigen Betriebsspannungsgrenzen des EES für maximal zulässige Ladespannung und minimal zulässige Entladespannung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE54C_D |
| HV_SPANNUNG_BATT | 0xE54D | STAT_HV_SPANNUNG_BATT_WERT | Batteriespannung hinter den Schützen, unabhängig vom Schützzustand | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| KUEHLMITTEL_HVS_TEMP | 0xE54E | STAT_TEMP_KUEHLMITTEL_WERT | Temperatur des Kühlmediums in °C (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| VENTIL_KUEHLKREISLAUF | 0xE54F | - | Status / Steuern Kühlmittel-Ventil: Geschlossen oder offen / schliessen oder öffnen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE54F_D | RES_0xE54F_D |
| VOKO_KUEHLDAUERVORGAENGE | 0xE550 | - | Anzahl der Vorkonditionierungs-Kühldauervorgängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE550_D |
| SCHUETZSCHALTER_FREIGABE | 0xE551 | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der Trennelemente | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE551_D | RES_0xE551_D |
| MIN_MAX_ZELLSPANNUNGEN | 0xE553 | - | Minimale und maximale Einzelzellspannungen werden ausgegeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE553_D |
| AKTUELLE_ZELLSPANNUNGEN | 0xE554 | - | Liefert alle aktuellen gemessenen Zellspannungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE554_D |
| HIS_ZEIT_SOC_KLASSE | 0xE555 | - | Liefert die Aufenthaltsdauer des SoC in SoC-Klassen für die Betriebsmodi Schütze geöffnet (HV-Off) und Schütze geschlossen (HV-On) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE555_D |
| RESET_HIS_ZEIT_SOC_KLASSE | 0xE556 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_HIS_ZEIT_SOC_KLASSE >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE556_D | - |
| LADEZEIT_KENNFELD_ADAPT | 0xE557 | - | Auslesen des Kennfeldes von Lernfaktoren zur Korrektur des Ladezeitprognose-Rohwerts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE557_D |
| RESET_LADEZEIT_KENNFELD_ADAPT | 0xE558 | - | Rücksetzen der Lernfaktoren des Ladezeitkennfeldes auf Initialwert (100%). Der Job ist bei jedem Modultausch auszuführen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE558_D | - |
| RB_REKALIBRIERUNG_SOC | 0xE559 | - | Auslesen des Batteriezustandes VOR und NACH der letzten 5 SOC Rekalibrierungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE559_D |
| CUMULATIVE_ENT_LADUNG_VALUE | 0xE55A | - | Status kumulierte Ladung und Entladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE55A_D |
| REKALIBRIERUNG_SOC | 0xE55C | - | Triggern der SOC Rekalibierungsprozedur (0 = nicht aktiv; 1 = aktiv) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE55C_D | - |
| SOC_GRENZEN_HVS | 0xE55E | - | Auslesen der aktuell gültigen SOC Grenzen im HVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE55E_D |
| CUMULATIVE_ENT_LADUNG_RESET | 0xE55F | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_CUMULATIVE_ENTLADUNG STATUS_CUMULATIVE_LADUNG >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE55F_D | - |
| HV_STROM_VALUE | 0xE561 | STAT_HV_STROM_WERT | HV-Strom in A | A | - | High | signed long | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| STROMGRENZEN_VALUE | 0xE562 | - | Ausgabe der aktuellen temperaturabhängigen Stromgrenzen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE562_D |
| HV_SYSTEM_AUFSTART_VERHINDERER | 0xE567 | STAT_AUFSTART_VERHINDERER | Grund für nicht Aufstarten des HV-Systems | 0-n | - | High | unsigned char | TAB_AUFSTART_VERHINDERER | - | - | - | - | 22 | - | - |
| SERVICE_DISCONNECT_VALUE | 0xE569 | STAT_SERVICE_DISCONNECT | Status des Service Disconnects (0 = offen, 1 = geschlossen, 2 = Signal ungültig) | 0-n | - | High | unsigned char | TAB_ST_SD | - | - | - | - | 22 | - | - |
| VORLADUNG_WERTE | 0xE56A | - | Info über Zeit, Strom und Temperaturen bei Vorladung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE56A_D |
| SPANNUNGSFESTIGKEITSTEST_ZAEHLERWERT | 0xE56C | - | Rückgabe des Zählerwertes der durchgeführten Spannungsfestigkeitstests bzw. inkrementieren des Zählers bei durchgeführtem Spannungsfestigkeitstest. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE56C_D | RES_0xE56C_D |
| SPANNUNGSFESTIGKEITSTEST_RESET_ZAEHLERWERT | 0xE56D | - | Reset des Zählers auf null der durchgeführten Spannungsfestigkeitstests: ANZAHL_SPANNUNGSFESTIGKEITSTESTS | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE56D_D | - |
| ANZAHL_KURZSCHLUESSE | 0xE575 | STAT_ANZAHL_KURZSCHLUESSE_WERT | Anzahl der vorgekommenen Kurschlüsse | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HISTOGRAMM_LADE_ENTLADELEISTUNG | 0xE576 | - | Histogramm der Lade-Entladeleistung Gesamtspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE576_D |
| HISTOGRAMM_TEMP_HVON_MIN_MOD | 0xE577 | - | Zeit in Minuten in mehreren Temperaturklassen der niedrigsten gemessenen Zelltemperatur bei geschlossen Schützen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE577_D |
| HISTOGRAMM_HIS_TEMP_HVON_MAX_MOD | 0xE578 | - | Zeit in Minuten in mehreren Temperaturklassen der höchsten gemessenen Zelltemperatur bei geschlossen Schützen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE578_D |
| HISTOGRAMM_TEMP_HVON_AVG_MOD | 0xE579 | - | Zeit in Minuten in mehreren Temperaturklassen der berechneten durchschnittlichen Zelltemperatur bei offenen Schützen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE579_D |
| HISTOGRAMM_SPANNUNG_MOD | 0xE57A | - | Zeit in Minuten in verschiedenen Spannungsklassen von einzelnen Modulen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE57A_D |
| HISTOGRAMM_ERR_LIM_SPANNUNG_MOD | 0xE57B | - | Ausgabe der Verweildauer in Spannungsfehlergrenzklassen von einzelnen Modulen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE57B_D |
| SYM_ZELLE_LEBENSZEIT | 0xE57D | - | Zeit, wie lange jede Zelle über die gesamte Lebenszeit symmetriert hat | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE57D_D |
| HISTOGRAMM_SYM_ZELLANZAHL | 0xE57E | - | Häufigkeit über Lebensdauer der Zellenanzahl, die zur Symmetrierung angewiesen wurden. Inkrementieren falls Symmertrierbedarf bei einer neuen Berechnung erkannt wird. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE57E_D |
| MAX_SYMMETRIE_DAUER | 0xE57F | - | Maximaler Symmetrierbedarf und maximale Symmetrierdauer der 5 letzten Symmetriervorgänge. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE57F_D |
| BETRIEBSSTUNDEN_BMU | 0xE581 | - | Zeit für geschlossene Hauptschalter und gesamte Batterielebensdauer (geschlossene und geöffnete Zeit der Hauptschalter) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE581_D |
| RESET_HISTOGRAMM_TEMP_MOD | 0xE583 | - | Zurücksetzen des Temperaturhistogramms des ausgetauschten Moduls | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE583_D | - |
| RESET_HISTOGRAMM_ERR_LIM_SPANNUNG_MOD | 0xE584 | - | Zurücksetzen des Spannungsfehlergrenz-histogramms des ausgetauschten Modul | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE584_D | - |
| RESET_HISTOGRAMM_SPANNUNG_MOD | 0xE585 | - | Zurücksetzen des Spannungshistogramms des ausgetauschten Moduls | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE585_D | - |
| RESET_BETRIEBSSTUNDEN_BMU | 0xE586 | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job:  STATUS_BETRIEBSSTUNDEN_BMU. >> Achtung: für alle SME-Funktionen erscheint der gesamte HVS mit diesem Zurücksetzen als absolut NEU. Zurücksetzen ist also nur zu empfehlen bei Tausch von vielen bis allen Modulen! | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE586_D | - |
| HISTOGRAMM_ERR_LIM_SPANNUNG_MAX | 0xE587 | - | Ausgabe der maximalen Verweildauer in Spannungsfehlergrenzenklassen über alle Module in Minuten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE587_D |
| U_ERR_GWK | 0xE596 | - | Verletzung der Gewährleistungsgrenze eingetreten (1 = ja, 0 = nein) inkl. Angabe betroffenen Modul-ID | Bit | - | High | BITFIELD | BF_U_ERR_GWK | - | - | - | - | 22 | - | - |
| ALTERUNG_INNENWIDERSTAND_VALUE | 0xE599 | - | Gibt den Innenwiderstandskorrekturfaktoren Alpha_Long auf  Modulebene und Alpha Short auf Speicherebene zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE599_D |
| SOC_ZELLE | 0xE59A | - | Rückgabe des aktuellen SOCs aller Zellen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE59A_D |
| SOC_VORGABE | 0xE59B | - | Setzen des Soc Wertes (-20-110%) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE59B_D | - |
| HIS_NBA_BEREICHE | 0xE59C | - | Betriebszeit in Minuten in den jeweiligen Bereichen des Nutzbereichsanzeigers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE59C_D |
| RESET_HIS_NBA_BEREICHE | 0xE59D | - | Zurücksetzen des Histogramms, das ausgelesen wird mit dem Job: STATUS_HIS_NBA_BEREICHE >> auszuführen bei Modultausch | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE59D_D | - |
| HV_SPANNUNG_DC_LADEN_MINUS | 0xE59E | STAT_HV_SPANNUNG_DC_LADEN_MINUS_WERT | Spannung am negativen Bezugspunkt der Ladespannung | V | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_DC_LADEN_PLUS | 0xE59F | STAT_HV_SPANNUNG_DC_LADEN_PLUS_WERT | Spannung am positiven Bezugspunkt der Ladespannung | V | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_LADEN | 0xE5A0 | STAT_DC_LADE_SPANNUNG_WERT | Ladespannung der Batterie | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_ZWISCHENKREIS_MINUS | 0xE5A1 | STAT_ZWISCHENKREIS_MINUS_WERT | Spannung am negativen Bezugspunkt der Zwischenkreisspannung | V | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| HV_SPANNUNG_ZWISCHENKREIS_PLUS | 0xE5A2 | STAT_ZWISCHENKREIS_PLUS_WERT | Spannung am positiven Bezugspunkt der Zwischenkreisspannung | V | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_HAUPTSCHUETZE | 0xE5A3 | STAT_TEMP_HAUPTSCHUETZ_WERT | Aktueller Temperaturmesswert am Hauptschütz (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_LADESCHUETZE | 0xE5A4 | STAT_TEMP_LADESCHUETZ_WERT | Aktueller Temperaturmesswert am Ladeschütz (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| LETZTE_ANSPRECHBARE_CSC | 0xE5A6 | STAT_LETZTE_ANSPRECHBARE_CSC_DATA | Letzte ansprechbare CSC | DATA | - | High | data[1] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NV_KL30 | 0xE5A7 | STAT_SPANNUNG_KL30_WERT | Versorgungsspannung an KL30 | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| KUEHLKREISLAUF_VENTIL_ANSTEUERUNG | 0xE5AA | - | Zustand der Ansteuerung des Ventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5AA_D |
| CRASH_ERKENNUNG | 0xE5AB | - | Status der Crash Erkennung aller vorhandenen Schnittstellen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5AB_D |
| NV_SPANNUNG_KL30C | 0xE5B6 | STAT_KL30C_SPANNUNG_WERT | Spannung an KL30C | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| SPANNUNGEN_CSC | 0xE5B8 | - | Liest die Versorgungsspannungen der CSCs aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5B8_D |
| AKTIVIERUNG_EINZELANSTEUERUNG_HAUPTSCHUETZE | 0xE5B9 | - | Status der Aktivierung der Einzelansteuerung der Hauptschütze | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE5B9_D | RES_0xE5B9_D |
| AKTIVIERUNG_EINZELANSTEUERUNG_LADESCHUETZE | 0xE5BA | - | Status der Aktivierung der Einzelansteuerung der Ladeschütze | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE5BA_D | RES_0xE5BA_D |
| ANZAHL_SCHALTUNGEN_HAUPTSCHUETZE | 0xE5BB | - | Anzahl der Schaltungen der Hauptschütze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5BB_D |
| ANZAHL_SCHALTUNGEN_LADESCHUETZE | 0xE5BC | - | Anzahl der Schaltungen der Ladeschütze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5BC_D |
| SCHUETZE_RESTZAEHLER_HAUPTSCHUETZE | 0xE5BD | - | Noch mögliche Anzahl von Schaltungen der Hauptschuetze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5BD_D |
| SCHUETZE_RESTZAEHLER_LADESCHUETZE | 0xE5BE | - | Noch mögliche Anzahl von Schaltungen der Ladeschuetze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5BE_D |
| SCHUETZ_SCHALTER_HAUPTSCHUETZE | 0xE5BF | - | Status Hauptschütze: geschlossen, offen, verschweißte Kontakte oder nicht definiert | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5BF_D |
| SCHUETZ_SCHALTER_LADESCHUETZE | 0xE5C0 | - | Status Ladeschütze: geschlossen, offen, verschweißte Kontakte oder nicht definiert | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5C0_D |
| ANZAHL_SCHUETZSCHALTUNGEN_HAUPTSCHUETZ | 0xE5C1 | - | Setzen der Anzahl der Schaltungen eines Hauptschützes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C1_D | - |
| ANZAHL_SCHUETZSCHALTUNGEN_LADESCHUETZ | 0xE5C2 | - | Setzen der Anzahl der Schaltungen eines Ladeschützes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C2_D | - |
| SCHUETZ_HAUPTSCHUETZ | 0xE5C3 | - | Öffnet oder Schließt ein Hauptschütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C3_D | - |
| SCHUETZ_LADESCHUETZ | 0xE5C4 | - | Öffnet oder schließt ein DC Ladeschütz | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C4_D | - |
| SCHUETZ_RESTZAEHLER_ZURUECKSETZEN_HAUPTSCHUETZ | 0xE5C5 | - | Zurücksetzen des Restzählers eines Hauptschützes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C5_D | - |
| SCHUETZ_RESTZAEHLER_ZURUECKSETZEN_LADESCHUETZ | 0xE5C6 | - | Zurücksetzen des Restzählers eines Ladeschützes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5C6_D | - |
| NUTZENERGIE_STANDARD_HVS | 0xE5C7 | - | Aus dem HV-Speicher entladbare Energien  (aktuell und im vollgeladenen Zustand)  berechnet mit einer festen Standard-Entladeleistung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5C7_D |
| TEMPERATUR_POWERFUSE | 0xE5C8 | STAT_TEMP_POWERFUSE_WERT | aktueller Temperaturmesswert an der Powerfuse (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| CSC_TEMPERATUREN_INTERN | 0xE5C9 | - | Dieser Job liest die internen Temperatursensoren der CSC aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5C9_D |
| CSC_TEMPERATUR_SENSOREN | 0xE5CA | - | Dieser Job liest die an den CSC angeschlossenen Temperatursensoren der Zellmodule zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5CA_D |
| LADESCHUETZE_FREIGABE | 0xE5CD | - | Schreibt bzw. liest das Bit zur Freigabe oder Sperrung der DC-Ladeschütze | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE5CD_D | RES_0xE5CD_D |
| SOC_AVG_MIN_MAX | 0xE5CE | - | Ausgabe der minimalen, mittleren und maximalen Zell-SoCs | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5CE_D |
| TEMPERATUR_SHUNT | 0xE5CF | STAT_TEMP_SHUNT_WERT | aktueller Temperaturmesswert am Strommesswiderstand (327,67 = unplausibel) | °C | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ALTERUNG_ZELLKAPAZITAETEN | 0xE5D0 | - | Ausgabe des Alterungszustands der Kapazität (SoH_C bezogen auf Referenzkapazitaet) jeder Zelle. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5D0_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_AUFSTART_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | interner Fehler |
| 0x02 | nicht interner Fehler |
| 0xFF | nicht definiert |

### TAB_CRASH_ERKENNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Crash erkannt |
| 0x01 | Crash erkannt |
| 0x02 | Schnittstelle nicht vorhanden |
| 0x03 | Fehler |
| 0xFF | Wert ungültig |

### TAB_ECU_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Plant Mode |
| 0x01 | Engineering Mode |
| 0x02 | Field Mode |
| 0xFF | Wert ungültig |

### TAB_GRUND_REKAL

| WERT | TEXT |
| --- | --- |
| 0x00 | OCV reached Ucell_Qlf OK |
| 0x02 | 12V Reset Ucell_Qlf NICHT OK |
| 0x03 | 12V Reset Ucell_Qlf OK |
| 0x04 | NVs Reset Ucell_Qlf NICHT OK |
| 0x05 | NVs Reset Ucell_Qlf OK |
| 0xFF | ungültiger Wert |

### TAB_HVS_INTERNAL_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | RESERVED |
| 0x02 | RESERVED |
| 0x03 | RESERVED |
| 0x04 | RESERVED |
| 0x05 | RESERVED |
| 0x06 | INACTIVE |
| 0x07 | RESERVED |
| 0x08 | DEBOUNCING |
| 0x09 | INIT |
| 0x0A | RESERVED |
| 0x0B | RESERVED |
| 0x0C | NOT AVAILABLE |
| 0x0D | RESERVED |
| 0x0E | RESERVED |
| 0x0F | ERROR |
| 0xFF | Wert ungültig |

### TAB_KUEHLERKREISLAUF_VENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | schliessen |
| 0x01 | oeffnen |
| 0x02 | Rueckgabe ans Steuergeraet |

### TAB_KUEHLKREISLAUF_VENTIL_RUECKGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | Fehler |
| 0xFF | ungültiger Wert |

### TAB_LADESCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### TAB_LCS_NUMBER

| WERT | TEXT |
| --- | --- |
| 0x00 | Service Pack functionality switch |
| 0x01 | SecOC by-pass switch |
| 0xFF | Wert ungültig |

### TAB_MESSBOTSCHAFTEN

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv - keine Botschaft versenden |
| 1 | Messbotschaften für EoL-Test versenden |
| 2 | Messbotschaften für Stationärspeicher versenden |
| 255 | unplausibel |

### TAB_SCHUETZE_DC_LADEN

| WERT | TEXT |
| --- | --- |
| 0x01 | DC Ladeschütz Plus |
| 0x02 | DC Ladeschütz Minus |

### TAB_SCHUETZ_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht freigegeben |
| 0x01 | freigegeben |
| 0xFF | nicht definiert |

### TAB_SCHUETZ_HAUPT_VORLADE

| WERT | TEXT |
| --- | --- |
| 0x01 | Hauptschütz Plus |
| 0x02 | Hauptschütz Minus |
| 0x03 | Vorladeschütz |

### TAB_SCHUETZ_SCHALTER_HAUPTSCHUETZE

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |
| 0xFF | Wert ungültig |

### TAB_SCHUETZ_SCHALTER_LADESCHUETZE

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | verschweisste Kontakte |
| 0x03 | nicht definiert |
| 0xFF | Wert ungültig |

### TAB_SFA_FEATURE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initial Disabled (no Secure Token yet received) |
| 0x01 | Enabled |
| 0x02 | Disabled |
| 0x03 | Expired |
| 0xFF | Wert ungültig |

### TAB_SFA_FEATURE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | all Feature IDs |
| 0x01 | System Functions Feature-ID-Type: 00 |
| 0x02 | Application Feature-ID-Type: 01-FF |

### TAB_SFA_VALIDATION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | E_OK: Check successful |
| 0x01 | E_UNCHECKED: Check did not run yet. |
| 0x02 | E_MALFORMED: Format not correct. Could not parse data. |
| 0x03 | E_EMPTY: Data is needed but was not written yet. |
| 0x04 | E_ERROR: An Error occured. |
| 0x05 | E_SECURITY_ERROR: Signature check failed. |
| 0x06 | E_WRONG_LINKTOID: Link-to-ID doesn't match. |
| 0x07 | E_CHECK_RUNNING: Check is still running. |
| 0x08 | E_TIMESTAMP: Timestamp of creation too old or equal |
| 0x09 | E_VERSION: Token Version not supported |
| 0x0A | E_FEATUREID: Feature ID not supported |
| 0xFF | E_OTHER: Other error occured. |

### TAB_SFA_VALIDITY_CONDITIONS

| WERT | TEXT |
| --- | --- |
| 0x01 | Unlimited |
| 0x02 | Expiration date |
| 0x03 | Time period |
| 0x04 | Days after activation |
| 0x05 | Start and end odometer reading |
| 0x06 | [km] after activation |
| 0x07 | Number of Executions |
| 0x80 | Local relative time |
| 0x81 | Number of driving cycles |
| 0x82 | Speed threshold |
| 0xFF | Wert ungültig |

### TAB_SHOWROOMMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Inaktiv |
| 1 | Aktiv |

### TAB_SME_ERMITTLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ermittlung läuft nicht |
| 0x01 | Ermittlung läuft: Entladungsphase bis SoC min |
| 0x02 | Ermittlung läuft: Ladungsphase bis SoC max |
| 0x03 | Ermittlung läuft: Entladungsphase bis mittleren SoC |

### TAB_SME_SYMMETRIERUNG_ERGEBNISSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Symmetrierung nicht aktiv, kein Symmetrierbedarf |
| 0x01 | Symmetrierung aktiv |
| 0x02 | Symmetrierung nicht aktiv, Zellen nicht in Ruhepause. 10 min warten. |
| 0x03 | Symmetrierung nicht aktiv, Symmetrierverhinderer aktiv |

### TAB_SME_SYMMETRIERUNG_FERTIG

| WERT | TEXT |
| --- | --- |
| 0x00 | abgeschlossen |
| 0x01 | nicht abgeschlossen |
| 0xFF | Wert ungültig |

### TAB_SP_TYP

| WERT | TEXT |
| --- | --- |
| 0x0001 | SH |
| 0x0002 | SE |
| 0x0003 | SP |
| 0xFFFF | Wert ungültig |

### TAB_STATUS_BYTE_ENUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Überprüfung erfolgreich. |
| 0x01 | Überprüfung noch nicht durchgeführt. |
| 0x02 | Ein Formatfehler ist aufgetreten. |
| 0x03 | Keine Daten zur Prüfung vorhanden. |
| 0x04 | Daten sind nicht vollständig. |
| 0x05 | Signaturprüfung fehlgeschlagen. |
| 0x06 | Bindings passen nicht zur VIN17. |
| 0x07 | Überprüfung läuft. |
| 0xFF | Ein unbekannter Fehler ist aufgetreten. |

### TAB_ST_SD

| WERT | TEXT |
| --- | --- |
| 0 | offen |
| 1 | geschlossen |
| 2 | Signal ungültig |
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

### TAB_SYMMETRIC_KEYS

| WERT | TEXT |
| --- | --- |
| 0x00 | E_OK |
| 0x01 | E_UNCHECKED |
| 0x02 | E_MALFORMED |
| 0x03 | E_EMPTY |
| 0x04 | E_INCOMPLETE |
| 0x05 | E_SECURITY_ERROR |
| 0x06 | E_WRONG_VIN17 |
| 0x07 | E_CHECK_RUNNING |
| 0x08 | E_ISSUER_CERT_ERROR |
| 0x09 | E_WRONG_ECU_UID |
| 0x0A | E_DECRYPTION_ERROR |
| 0x0B | E_OWN_CERT_NOT_PRESENT |
| 0x0C | E_OUTDATED |
| 0xFF | E_OTHER |

### TAB_TCORE_PLAUSI

| WERT | TEXT |
| --- | --- |
| 0x00 | T_core und T_term unplausibel |
| 0x01 | T_core plausibel |
| 0x02 | T_term (Ersatzwert bei T_core unplausibel) |
| 0xFF | Rückgabewert unplausibel |
