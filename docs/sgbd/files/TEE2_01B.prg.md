# TEE2_01B.prg

## General

|  |  |
| --- | --- |
| File | TEE2_01B.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 143 |
| Origin | BMW EA-441 Jochen_Tempelhoff |
| Revision | 0.008 |
| Author | BMW EA-402 Castellnou |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Traktions-E-Maschinenelektronik 2, inkompatible Änderung |  |  |
| ORIGIN | string | BMW EA-441 Jochen_Tempelhoff |  |  |
| REVISION | string | 0.008 |  |  |
| AUTHOR | string | BMW EA-402 Castellnou |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.991 |  |  |
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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### ECU_UID_LESEN

Auslesen der ECU-UID UDS   : $22   ReadDataByIdentifier UDS   : $8000 Sub-Parameter ECU-UID

_No arguments._

### STATUS_LCS_READ

Read Locking Configuration Switches UDS  : $22   ReadDataByIdentifier UDS  : $1104 Data Identifier Modus  : Default

_No arguments._

### STATUS_CERTIFICATE_MANAGEMENT_READOUT_STATUS

This job reads out the status of the certificate management extensive check

_No arguments._

### STATUS_RESETINFO_LESEN

Auslesen der aktuellen bzw. abgespeicherten ResetInformationen

| Name | Type | Description |
| --- | --- | --- |
| TARGET | unsigned char | Selects the action performed: 1 ==> READ_RAM : Read ResetInfo from RAM (512B) 2 ==> READ_FLASH_BLOCK_ID : Read stored ResetInfo block in PFLASH by index if exist (512B) 3 ==> READ_FLASH_LAST : Read last stored ResetInfo block in PFLASH if exist (512B) 4 ==> READ_FLASH_RAW : Read all ResetInfo blocks in PFLASH (16384B) 5 ==> READ_FLASH_NUM_ENTRIES : Read number of stored ResetInfo blocks in PFLASH (4B) 6 ==> READ_NVM : Read NVM block Mirror from last driving cycle (512B) |
| TARGETPARAMETERS | unsigned long | case READ_FLASH_BLOCK_ID: provide EntryNum from 1 to 32, an entry shall exist existing entry can be fetch with READ_FLASH_NUM_ENTRIES, i.e. if 3, entries 1, 2 and 3 are available |

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B30 | Elektrische Wasserpumpe 22 | 1 |
| 0x3B40 | Elektrische Wasserpumpe 23 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x6700 | Hochdruck- Temperatursensor 1 | 1 |
| 0x6710 | Niederdruck- Temperatursensor 1 | 1 |
| 0x6720 | Elektrisches Expansionsventil | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5B50 | AR (augmented reality) Kamera | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5C10 | Wasserstand Sensor 1 | 1 |
| 0x5C18 | Wasserstand Sensor 2 | 1 |
| 0x5C20 | Diebstahlschutz Client für Airbag | 1 |
| 0x5C28 | Diebstahlschutz Client für Lenkrad | 1 |
| 0x5C30 | zentrale Lenkrad Elektronik | 1 |
| 0x5C40 | Funkempfänger vorne links | 1 |
| 0x5C44 | Funkempfänger vorne rechts | 1 |
| 0x5C48 | Funkempfänger hinten links | 1 |
| 0x5C4C | Funkempfänger hinten rechts | 1 |
| 0x5C50 | Türgriffelektronik Fahrer | 1 |
| 0x5C54 | Türgriffelektronik Beifahrer | 1 |
| 0x5C58 | Türgriffelektronik Fahrer hinten | 1 |
| 0x5C5C | Türgriffelektronik Beifahrer hinten | 1 |
| 0x5C60 | Sitzheizung Fahrer dritte Sitzreihe | 1 |
| 0x5C68 | Sitzheizung Beifahrer dritte Sitzreihe | 1 |
| 0x5C70 | Armauflagenheizung mitte hinten | 1 |
| 0x5C78 | Armauflagenheizung + Infrarotheizung Mittelkonsole vorne | 1 |
| 0x5C80 | Infrarotheizung Fahrer | 1 |
| 0x5C84 | Infrarotheizung Beifahrer | 1 |
| 0x5C88 | Infrarotheizung vorne | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
| 0x5E4F | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer oben | 1 |
| 0x5E50 | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer unten | 1 |
| 0x5E51 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne oben | 1 |
| 0x5E52 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne unten | 1 |
| 0x5E53 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten oben | 1 |
| 0x5E54 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten unten | 1 |
| 0x5E55 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne oben | 1 |
| 0x5E56 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne unten | 1 |
| 0x5E57 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten oben | 1 |
| 0x5E58 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten unten | 1 |
| 0x5E59 | Innenbeleuchtung Hochtöner Fahrertür vorne | 1 |
| 0x5E5A | Innenbeleuchtung Hochtöner Beifahrertür vorne | 1 |
| 0x5E5B | Innenbeleuchtung Mitteltöner Fahrertür vorne | 1 |
| 0x5E5C | Innenbeleuchtung Mitteltöner Beifahrertür vorne | 1 |
| 0x5E5D | Innenbeleuchtung Mitteltöner Fahrertür hinten | 1 |
| 0x5E5E | Innenbeleuchtung Mitteltöner Beifahrertür hinten | 1 |
| 0x5E5F | Innenbeleuchtung Centerspeaker | 1 |
| 0x5E60 | Innenbeleuchtung Fireplace Mittelkonsole vorne | 1 |
| 0x5E61 | Innenbeleuchtung Fireplace Mittelkonsole hinten | 1 |
| 0x5E62 | Innenbeleuchtung Konturlinie Fahrertür vorne hinten | 1 |
| 0x5E63 | Innenbeleuchtung Konturlinie Fahrertür hinten hinten | 1 |
| 0x5E64 | Innenbeleuchtung Konturlinie Beifahrertür vorne hinten | 1 |
| 0x5E65 | Innenbeleuchtung Konturlinie Beifahrertür hinten hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5E90 | Stromverteiler vorne | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
| 0xF080 | Motorrad Radiobedienteil | 1 |
| 0xF090 | Motorrad Kombischalter links | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroen |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0091 | Mahle |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x00B5 | Fishman Thermo Technologies  LTD |
| 0x00B6 | Novalog Ltd |
| 0x00B7 | Hanon Systems USA |
| 0x00B8 | Leggett & Platt Automotive Group |
| 0x00B9 | Tremec |
| 0x00BA | Check Corporation |
| 0x00BB | Federal-Mogul Corporation |
| 0x00BC | fischer automotive systems |
| 0x00BD | Hi-Lex Europe GmbH |
| 0x00BE | SGX Sensortech |
| 0x00BF | AGM Automotive |
| 0x00C0 | Melecs |
| 0x00C1 | Robertshaw Controls Company |
| 0x00D0 | Dometic |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
| 0xFFFF | unbekannter Hersteller |

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

### ARGUMENT_TABELLE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Job nicht aktiv |
| 0x01 | AKS aktiv |
| 0x02 | FREILAUF aktiv |

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
| NEW_COUNTER_VALUE | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert des Counters. |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | HEX | high | signed char | - | - | - | - | - | - | - | Index des übertragenden  Blocks |
| DATENBLOCK | TEXT | high | string[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | 32 bytes großer Datenblock |

### ARG_0X4003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPTION | HEX | high | unsigned char | - | - | - | - | - | - | - | Parameter zum Steuern |

### ARG_0X4007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COPY | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Copy des Winkeloffsets inactive  0x01: Copy des Winkeloffsets active  |

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_SETZEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Reset ist nicht gesetzt  0x01: Reset ist gesetzt |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_SETZEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00:Reset nicht setzen   0x01:Reset setzen  |

### ARG_0X4013_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLOCK_NUMMER | HEX | high | unsigned char | - | - | - | - | - | - | - | Nummer des aktuellen Blocks |
| GAIN | HEX | low | unsigned long | - | - | - | - | - | - | - | Gain Faktor |
| OFFSET | HEX | low | unsigned long | - | - | - | - | - | - | - | Offset Wert |

### ARG_0X4015_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | HEX | high | unsigned char | - | - | - | - | - | - | - | Zu verwendender Mode. |

### ARG_0XE3C3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0-n | high | unsigned char | - | TAB_EWS_WR_MODE | - | - | - | - | - | Auswahl der auszuführenden Aktion (siehe TAB_EWS_WR_MODE). DH-Clients unterstützen nur MODE  CLR. |
| DATA1 | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die zu schreibenden Daten Teil 1. |
| DATA2 | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die zu schreibenden Daten Teil 2. |

### ARG_0XE51A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Zurücksetzen des Rotorlagesensors Winkels: 0 = nicht zurücksetzen; 1 = zurücksetzen |

### ARG_0XE528_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MONTAGEMODUS_ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_MONTAGEMODUS | - | - | - | - | - | Ansteuerung des Montagemodus |

### ARG_0XE52C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | low | unsigned long | - | - | 4294967295.0 | 360.0 | 0.0 | 0.0 | 360.0 | Rotorlagesensor  Offset Winkel |

### ARG_0XE58D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENABLE_DREHZAHLVORGABE_GBX_OILPMP | 0/1 | low | unsigned int | - | - | - | - | - | - | - | 0x00: Manuelle Vorgabe deaktivieren 0x01: Manuelle Vorgabe aktivieren |
| STAT_GBX_OILPMP_SPEED | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | Drehzahl elektr. Getriebeölpumpe |

### ARG_0XE590_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CONTROL_GBX_PARKLOCK | 0-n | low | unsigned int | - | TAB_ARG_Control_GBX_Parklock | - | - | - | - | - | 0: Keine manuelle Vorgabe Parksperre,  1: Parksperre schließen. 2: Parksperre öffnen. |

### ARG_0XE597_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART | 0-n | high | unsigned char | - | ARGUMENT_TABELLE_BETRIEBSART | - | - | - | - | - | Status über den entsprechenden Modus von der Emaschine |

### ARG_0XE598_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RLS_ANLERNEN | 0-n | high | unsigned char | - | TAB_RLS_ANLERNEN | - | - | - | - | - | Steuern RLS Anlernen |

### ARG_0XE5CB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLWINKEL | ° | low | unsigned int | - | - | 65535.0 | 360.0 | 0.0 | 0.0 | 360.0 | Rotorposition Winkel Vorgabe für Regler |

### ARG_0XE5CC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Chiffetext vom Rotorlagesensor Winkel |

### ARG_0XE5D7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ROTORSTROM | A | low | unsigned int | - | - | 65535.0 | 50.0 | 0.0 | 0.0 | 50.0 | Soll Strom Vorgabe für Rotor  |

### ARG_0XE5D8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Setzen und Zurücksetzen vom Freilauf im Stator:   0= Zurücksetzen vom Freilauf im Stator   1= Setzen vom Freilauf im Stator  |

### ARG_0XE5DF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ausschalten (nicht aktiv),   0x01: Einschalten (Aktiv)   |
| DREHZAHL | 1/min | low | signed int | - | - | 1.0 | 1.2207 | 0.0 | -39999.897 | 39998.6769 | Sollvorgabe Drehzahl |
| GRADIENT | 1/min/s | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | Sollvorgabe Gradient der Drehzahl |

### ARG_0XE5E7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_CODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht löschen,  0x01: löschen |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HWMODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_DUMMY

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMMY | 0/1 | high | unsigned char | 0xFF | - | - | - | - | 0x00: Beschreibung angeben... 0x01: Beschreibung angeben... |

### BF_IM_STAT_SERVER_INFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INFO_EWS_SERVER_ENABLE | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0=EWS Server gesperrt, 1=EWS Server freigeschaltet |
| STAT_INFO_EWS_SERVER_CALC | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0=Berechnung möglich, 1=Berechnung nicht möglich |
| STAT_INFO_EWS_SERVER_LOCK | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0=SK verriegelt, 1=SK nicht verriegelt |
| STAT_INFO_RES_SERVER_ENABLE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0=RES Server gesperrt, 1=RES Server freigeschaltet |

### BF_IM_STAT_SERVER_RESP

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESP_EWS_SERVER_ENABLE | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0=EWS Server gesperrt, 1=EWS Server freigegeben |
| STAT_RESP_EWS_SERVER_CALC | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0=Berechnung möglich, 1=Berechnung nicht möglich |
| STAT_RESP_EWS_SERVER_LOCK | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0=SK verriegelt, 1=SK nicht verriegelt |
| STAT_RESP_RES_SERVER_ENABLE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0=RES Server gesperrt, 1=RES Server freigeschaltet |

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
| 0x026F00 | Energiesparmode aktiv | 0 | 0x00000010 |
| 0x026F24 | NVM_E_HARDWARE | 0 | 0x00000020 |
| 0x026F36 | SecOC: Freshness Value Synchronisation fehlgeschlagen | 0 | 0x00000020 |
| 0x026F40 | Spannungsversorgung - Lokale Unterspannung | 0 | 0x00000080 |
| 0x026F41 | Spannungsversorgung - Lokale Überspannung | 0 | 0x00000080 |
| 0x026F80 | ZERTIFIKATE_UND_BINDINGS_TYP1_WERK_NICHT_BEREIT | 0 | 0x00000020 |
| 0x026F81 | ONLINE_ZERTIFIKATE_UND_BINDINGS_TYP2_NICHT_BEREIT | 0 | 0x00000020 |
| 0x026F82 | Secure Feature Activation: Tokenprüfung fehlgeschlagen | 0 | 0x00000020 |
| 0x026F83 | Secure Feature Activation: Tokenprüfung läuft aktuell oder ungeprüfte Tokens sind gespeichert | 0 | 0x00000020 |
| 0x026F84 | Locking Configuration Switch: Einer oder mehrere Schalter nicht gesetzt. | 0 | 0x00000020 |
| 0x026F85 | Secure ECU Modes: ECU not in field mode. | 0 | 0x00000020 |
| 0x026F90 | SecOC: Keypackprüfung fehlgeschlagen | 0 | 0x00000020 |
| 0x026F91 | SecOC: Bypass aktiv - Sichere Onboard Kommunikation deaktivert | 0 | 0x00000010 |
| 0x026F93 | SecOC: Security error von empfangenen Nachrichten | 0 | 0x00000020 |
| 0x026FA0 | EWS: Secret Key nicht vorhanden | 1 | 0x00000040 |
| 0x026FA1 | EWS: Antwort nicht authentisch | 1 | 0x00000100 |
| 0x026FA2 | EWS: Fehler Datenablage | 0 | 0x00000200 |
| 0x026FA4 | EWS: Ungültiger Schlüssel empfangen | 1 | 0x00000040 |
| 0x02FF6F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | 0x00000010 |
| 0x03F4C0 | Elektromaschine: Überdrehzahl erkannt | 0 | 0x00000080 |
| 0x03F4C1 | Elektromaschine: Maschinenparameter unplausibel | 0 | 0x00000080 |
| 0x03F4C2 | Elektromaschine, Stator, Bauteilschutz: Übertemperatur | 0 | 0x00000080 |
| 0x03F4C3 | Elektromaschine, Rotor, Bauteilschutz: Übertemperatur | 0 | 0x00000080 |
| 0x03F4C4 | E-Maschine - Bürstenmodul - Bauteilschutz - Verschleiß | 0 | 0x00000100 |
| 0x03F4C5 | Elektromaschine, Phasenleitung Phase V: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x03F4C6 | Elektromaschine, Phasenleitung Phase U: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x03F4C8 | Elektromaschine, Phasenleitung Phase W: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x03F4C9 | E-Maschine - Rotorlagesensor außerhalb Betriebsbereich | 0 | 0x00000100 |
| 0x03F4CA | E-Maschine - Rotorlagesensor außerhalb Betriebsbereich (2) | 0 | 0x00000100 |
| 0x03F4CB | E-Maschine - Rotorlagesensor - Cosinusleitung 2 - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4CC | E-Maschine - Rotorlagesensor - Cosinusleitung 2 - Offene Leitung | 0 | 0x00000080 |
| 0x03F4CD | E-Maschine - Rotorlagesensor - Cosinusleitung 2 - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4CE | E-Maschine - Rotorlagesensor - Cosinusleitung - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4CF | E-Maschine - Rotorlagesensor - Cosinusleitung - Offene Leitung | 0 | 0x00000080 |
| 0x03F4D0 | E-Maschine - Rotorlagesensor - Cosinusleitung - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4D1 | E-Maschine - Rotorlagesensor - DIAG - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4D2 | E-Maschine - Rotorlagesensor - DIAG - Offene Leitung | 0 | 0x00000080 |
| 0x03F4D3 | E-Maschine - Rotorlagesensor - DIAG - Sensorfehler | 0 | 0x00000080 |
| 0x03F4D4 | E-Maschine - Rotorlagesensor - DIAG - Signal eingefroren | 0 | 0x00000100 |
| 0x03F4D5 | E-Maschine - Rotorlagesensor - DIAG - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4D6 | Elektromaschine, DC-Stecker, Temperatursensor-SensCon: Sensor defekt | 0 | 0x00000100 |
| 0x03F4D8 | E-Maschine - Rotorlagesensor - Interner Tempsensor - Übertemperatur | 0 | 0x00000100 |
| 0x03F4DA | E-Maschine - Rotorlagesensor - Sin/Cos 2 - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4DB | E-Maschine - Rotorlagesensor - Sin/Cos 2 - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4DC | E-Maschine - Rotorlagesensor - Sin/Cos - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4DD | E-Maschine - Rotorlagesensor - Sin/Cos - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4DE | E-Maschine - Rotorlagesensor - Sinusleitung 2 - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4DF | E-Maschine - Rotorlagesensor - Sinusleitung 2 - Offene Leitung | 0 | 0x00000080 |
| 0x03F4E0 | E-Maschine - Rotorlagesensor - Sinusleitung - Offene Leitung | 0 | 0x00000080 |
| 0x03F4E1 | E-Maschine - Rotorlagesensor - Sinusleitung - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4E2 | E-Maschine - Rotorlagesensor - VDIAG - Fehler beim Rücklesen | 0 | 0x00000080 |
| 0x03F4E3 | E-Maschine - Rotorlagesensor - Sinusleitung - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4E4 | E-Maschine - Rotorlagesensor - Sinusleitung 2 - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4E5 | E-Maschine - Rotorlagesensor - Winkel unplausibel | 0 | 0x00000100 |
| 0x03F4E6 | E-Maschine - Rotorlagesensor - Winkel unplausibel (2) | 0 | 0x00000100 |
| 0x03F4E7 | E-Maschine - Rotorlagesensor - Winkeloffset unplausibel oder nicht angelernt | 0 | 0x00000100 |
| 0x03F4EB | E-Maschine - Rotorlagesensor - VDIAG - Offene Leitung | 0 | 0x00000080 |
| 0x03F4EC | E-Maschine - Rotorlagesensor - VDIAG - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4ED | E-Maschine - Rotorlagesensor - VDIAG - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4EE | E-Maschine - Rotorlagesensor - VDIAG - Signal eingefroren | 0 | 0x00000100 |
| 0x03F4EF | E-Maschine - Rotorleitung - Offene Leitung | 0 | 0x00000080 |
| 0x03F4F1 | E-Maschine - Temperatursensor - Gradient unplausibel | 0 | 0x00000100 |
| 0x03F4F2 | E-Maschine - Temperatursensor - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4F3 | E-Maschine - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F4F4 | E-Maschine - Temperatursensor - Signal eingefroren (Stuck) | 0 | 0x00000100 |
| 0x03F4F5 | E-Maschine - Temperatursensor - Signal unplausibel nach Kaltstart | 0 | 0x00000100 |
| 0x03F4F6 | E-Maschine - Temperatursensor - Unplausible Bereichsumschaltung | 0 | 0x00000100 |
| 0x03F4FD | E-Maschine - Temperatursensor-Kühlwasser - Gradient unplausibel | 0 | 0x00000100 |
| 0x03F4FE | E-Maschine - Temperatursensor-Kühlwasser - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F4FF | E-Maschine - Temperatursensor-Kühlwasser - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F500 | E-Maschine - Temperatursensor-Kühlwasser - Signal eingefroren (Stuck) | 0 | 0x00000100 |
| 0x03F520 | Umrichter, AC-Seite: Phasenüberstrom (Hardware) | 0 | 0x00000080 |
| 0x03F521 | Umrichter, DC-Seite: Überspannung (Hardware) | 0 | 0x00000080 |
| 0x03F522 | Montagemode aktiv - Drehmoment stellen | 0 | 0x00000080 |
| 0x03F524 | Umrichter, HV-Seite, Temperatursensor: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F525 | Umrichter, HV-Seite, Temperatursensor: Signal eingefroren | 0 | 0x00000100 |
| 0x03F526 | Umrichter, HV-Seite, Temperatursensor: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F527 | Aufprall-Erkennung: Aufprall erkannt aufgrund ACSM Signal | 0 | 0x00000100 |
| 0x03F528 | Aufprall-Erkennung: Aufprall erkannt aufgrund Klemme 30C | 0 | 0x00000100 |
| 0x03F529 | Umrichter, Stromsensoren: Plausicheck gegeneinander | 0 | 0x00000100 |
| 0x03F52A | Umrichter, Kühlmittel: Übertemperatur | 0 | 0x00000080 |
| 0x03F52B | Umrichter: Übertemperatur | 0 | 0x00000080 |
| 0x03F52C | Umrichter: Entladung des Zwischenkreiskondensators nicht möglich | 0 | 0x00000080 |
| 0x03F531 | Umrichter, Exciter, Stromsensoren: Überstrom erkannt | 0 | 0x00000080 |
| 0x03F532 | Umrichter, Exciter: Übertemperatur | 0 | 0x00000100 |
| 0x03F533 | Umrichter, Exciter: Überstrom | 0 | 0x00000080 |
| 0x03F534 | Umrichter, Exciter, Temperatursensor: Gradient unplausibel | 0 | 0x00000100 |
| 0x03F535 | Umrichter, Exciter, Temperatursensor: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F536 | Umrichter, Exciter, Temperatursensor: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F537 | Umrichter, Exciter, Temperatursensor: Signal eingefroren (Stuck) | 0 | 0x00000100 |
| 0x03F538 | Umrichter, Exciter, Temperatursensor: Signal unplausibel nach Kaltstart | 0 | 0x00000100 |
| 0x03F539 | Umrichter: Fehler beim Abschaltpfadtest | 0 | 0x00000100 |
| 0x03F53A | Umrichter, Exciter, Stromsensor: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F53B | Umrichter, Exciter, Stromsensor: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F53C | Umrichter, Exciter, Stromsensor: Sensorwert unplausibel | 0 | 0x00000100 |
| 0x03F53E | Umrichter, Exciter, Stromsensor 2: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F53F | Umrichter, Exciter, Stromsensor 2: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F542 | Umrichter, Gatetreiber: Sammelfehler | 0 | 0x00000100 |
| 0x03F543 | Umrichter, Gatetreiber: Sammelfehler (schwerwiegend) | 0 | 0x00000100 |
| 0x03F544 | Umrichter, Gatetreiber: maximale Anzahl Überstromereignisse erreicht | 0 | 0x00000080 |
| 0x03F545 | Umrichter, Versorgung Gatetreiber: Überstrom | 0 | 0x00000080 |
| 0x03F549 | Inverter - Spannungssensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F54A | Inverter - Spannungssensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F54B | Inverter - Spannungssensor - Zwischenkreis - Signal eingefroren | 0 | 0x00000100 |
| 0x03F54C | Inverter - Spannungssensor - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F54E | Umrichter, Stromsensoren: Summenstrom der 3 Phasen unplausibel | 0 | 0x00000100 |
| 0x03F54F | Umrichter, Stromsensoren, Phase U: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F550 | Umrichter, Stromsensoren, Phase U: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F552 | Umrichter, Stromsensoren, Phase U: Offsetabgleich außerhalb Toleranz | 0 | 0x00000100 |
| 0x03F553 | Umrichter, Stromsensoren, Phase U: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F554 | Umrichter, Stromsensoren, Phase V: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F555 | Umrichter, Stromsensoren, Phase V: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F557 | Umrichter, Stromsensoren, Phase V: Offsetabgleich außerhalb Toleranz | 0 | 0x00000100 |
| 0x03F558 | Umrichter, Stromsensoren, Phase V: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F559 | Umrichter, Stromsensoren, Phase W: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F55A | Umrichter, Stromsensoren, Phase W: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F55C | Umrichter, Stromsensoren, Phase W: Offsetabgleich außerhalb Toleranz | 0 | 0x00000100 |
| 0x03F55D | Umrichter, Stromsensoren, Phase W: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F55E | Umrichter, Temperaturensensor(en): min. 2 Sensoren defekt | 0 | 0x00000080 |
| 0x03F55F | Umrichter, Temperatursensor, Phase U: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F560 | Umrichter, Temperatursensor, Phase U: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F562 | Umrichter, Temperatursensor, Phase U: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F563 | Umrichter, Temperatursensor, Phase V: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F564 | Umrichter, Temperatursensor, Phase V: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F566 | Umrichter, Temperatursensor, Phase V: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F567 | Umrichter, Temperatursensor, Phase W: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F568 | Umrichter, Temperatursensor, Phase W: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F56A | Umrichter, Temperatursensor, Phase W: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F56B | Umrichter, Temperatursensor, Phase U plus: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F56C | Umrichter, Temperatursensor, Phase U plus: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F56E | Umrichter, Temperatursensor, Phase U plus: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F56F | Umrichter, Temperatursensor, Phase V plus: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F570 | Umrichter, Temperatursensor, Phase V plus: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F572 | Umrichter, Temperatursensor, Phase V plus: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F573 | Umrichter, Temperatursensor, Phase W plus: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F574 | Umrichter, Temperatursensor, Phase W plus: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F576 | Umrichter, Temperatursensor, Phase W plus: Signal unplausibel nach Redundanzüberwachung | 0 | 0x00000100 |
| 0x03F577 | FUSI - Inverter - CPLD Versionesvergleich - fehlgeschlagen | 1 | 0x00000080 |
| 0x03F578 | FUSI - E-Maschine - Momentenvergleich unplausibel | 0 | 0x00000080 |
| 0x03F579 | FUSI - ASIL-C - E-Maschine - Rotorlagesensor - Winkel-Cross-Check | 0 | 0x00000080 |
| 0x03F57A | Spannungsversorgung, Niedervolt: Interne Spannungsversorgung fehlerhaft | 0 | 0x00000080 |
| 0x03F57B | Spannungsversorgung, Hochvolt: Interne Spannungsversorgung fehlerhaft | 0 | 0x00000080 |
| 0x03F57C | Spannungsversorgung, Niedervolt: Interne Spannungsversorgung unplausibel | 0 | 0x00000080 |
| 0x03F57D | Steuergerät: interner Fehler (SPI Intern) | 0 | 0x00000400 |
| 0x03F57E | Steuergerät: interner Fehler (Zeitstempel) | 0 | 0x00000400 |
| 0x03F57F | Steuergerät: interner Fehler (Sammelfehler Software) | 0 | 0x00000400 |
| 0x03F580 | Steuergerät: interner Fehler (Sammelfehler Hardware) | 0 | 0x00000200 |
| 0x03F581 | Steuergerät: interner Fehler (Safety) | 0 | 0x00000400 |
| 0x03F584 | Steuergerät: interner Fehler (NvRam Software) | 0 | 0x00000400 |
| 0x03F586 | Steuergerät, interner Fehler: Kalibrierdaten: korrupt oder nicht vorhanden (Hardware) | 0 | 0x00000200 |
| 0x03F58E | FUSI - ARB Überwachung - Momentengrenze verletzt | 0 | 0x00000100 |
| 0x03F58F | FUSI - Feste Momentengrenze angefordert | 0 | 0x00000100 |
| 0x03F590 | FUSI - ARB Überwachung - Momentenlimitierung | 0 | 0x00000100 |
| 0x03F591 | FUSI - ARB Überwachung - Drehzahlverletzung | 0 | 0x00000100 |
| 0x03F5A9 | Steuergerät: interner Fehler (CPLD Protokoll Kommunikationsfehler) | 0 | 0x00000400 |
| 0x03F5AA | Umrichter,  LV Seite, Termperatursensor, Stromsensoren nah: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x03F5AB | Umrichter,  LV Seite, Termperatursensor, Stromsensoren nah: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x03F5AC | Umrichter,  LV Seite, Termperatursensor, Stromsensoren nah: Signal eingefroren | 0 | 0x00000100 |
| 0x03F5AD | Umrichter, DC-Strom: Plausicheck gegeneinander | 0 | 0x00000100 |
| 0x04F4C0 | Ölmodul, LIN Kommunikation: Sammelfehler | 0 | 0x00000100 |
| 0x04F4C1 | Getriebölpumpe: Pumpe defekt | 0 | 0x00000100 |
| 0x04F4C2 | Getriebeölpumpe: Massestrom unplausibel | 0 | 0x00000100 |
| 0x04F4C3 | Getriebeölpumpe, Bauteilschutz: Überstrom | 0 | 0x00000080 |
| 0x04F4C4 | Getriebeölpumpe, Bauteilschutz: Abschlatung aufgrund Übertemperatur | 0 | 0x00000100 |
| 0x04F4C5 | Getriebeölpumpe, Bauteilschutz: Überspannung oder Unterspannung | 0 | 0x00000080 |
| 0x04F4C7 | Getriebeölpumpe: Software inkompatibel | 0 | 0x00000100 |
| 0x04F4C8 | Ölmodul: Programmierung fehlgeschlagen | 0 | 0x00000040 |
| 0x04F4C9 | Ölmodul, Sicherheitsfunktion: Unterschreitung Mindestdruck | 0 | 0x00000100 |
| 0x04F4CA | Ölmodul, Sicherheitsfunktion: Unterschreitung Mindestdrehzahl | 0 | 0x00000100 |
| 0x04F4CB | Ölmodul, Getriebeöltemperatur: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4CC | Ölmodul, Öldrucksensor: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4CD | Ölmodul, Öldrucksensor: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x04F4CE | Ölmodul, Öldrucksensor: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x04F4CF | Ölmodul, Öldrucksensor: Signal unplausibel | 0 | 0x00000100 |
| 0x04F4D0 | Ölmodul, Ölsumpfmodell: Plausibilisierung fehlerhaft | 0 | 0x00000100 |
| 0x04F4D1 | Ölmodul, Temperatursensor: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4D2 | Ölmodul, Temperatursensor: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x04F4D3 | Ölmodul, Temperatursensor: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x04F4D4 | Ölmodul, Temperatursensor: HL Werte Plausibilisierung | 0 | 0x00000100 |
| 0x04F4D5 | Ölmodul, Temperatursensor: Rationality Sensor Crosscheck | 0 | 0x00000100 |
| 0x04F4D6 | Ölmodul, Temperatursensor 2: Oberer Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4D7 | Ölmodul, Temperatursensor 2: Unterer Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x04F4D8 | Ölmodul, Temperatursensor 2: Leitungsunterbrechung | 0 | 0x00000080 |
| 0x04F4D9 | Ölmodul, Temperatursensor 2: HL Werte Plausibilisierung | 0 | 0x00000100 |
| 0x04F4DB | Parksperre, Aktor, Sicherheitsfunktion: Sammelfehler | 0 | 0x00000100 |
| 0x04F4DC | Parksperre, Aktor: Geforderte Parksperrenposition nicht erreichbar | 0 | 0x00000100 |
| 0x04F4DD | Parksperre, Aktor: Keine Änderung der Parksperrenposition | 1 | 0x00000080 |
| 0x04F4E2 | Parksperre, Aktor: Position unplausibel | 0 | 0x00000100 |
| 0x04F4E3 | Parksperre, Aktor: Strommittelwert zu hoch | 0 | 0x00000080 |
| 0x04F4E4 | Parksperre, Aktor, Stromsensor 1: Allgemeiner Messfehler | 0 | 0x00000100 |
| 0x04F4E5 | Parksperre, Aktor, Stromsensor 1: Obere Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4E6 | Parksperre, Aktor, Stromsensor 1: Untere Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x04F4E7 | Parksperre, Aktor, Stromsensor 1: PWM zu Strom unplausibel | 0 | 0x00000100 |
| 0x04F4E8 | Parksperre, Aktor, Stromsensor 2: Allgemeiner Messfehler | 0 | 0x00000100 |
| 0x04F4E9 | Parksperre, Aktor, Stromsensor 2: Obere Schwellenwert überschritten | 0 | 0x00000080 |
| 0x04F4EA | Parksperre, Aktor, Stromsensor 2: Untere Schwellenwert unterschritten | 0 | 0x00000080 |
| 0x04F4EB | Parksperre, Aktor, Stromsensor 2: PWM zu Strom unplausibel | 0 | 0x00000080 |
| 0x04F4EC | Parksperre, Aktor: Überspannung H-Brücke | 1 | 0x00000080 |
| 0x04F4ED | Parksperre, Aktor: Überstrom H-Brücke | 1 | 0x00000080 |
| 0x04F4EE | Parksperre, EWS: Abgleich nicht erfolgt | 1 | 0x00000080 |
| 0x04F4EF | Parksperre, Mechanik: Ratsch-Erkennung | 0 | 0x00000080 |
| 0x04F4F0 | Parksperre: Parksperrenposition und Fahrzeuggeschindigkeit unplausibel | 1 | 0x00000080 |
| 0x04F4F1 | Parksperre, Positionssensorik: mindestens zwei Sensoren ausgefallen | 1 | 0x00000080 |
| 0x04F4F2 | Parksperre, Positionssensorik: Toleranzabgleich fehlerhaft | 0 | 0x00000100 |
| 0x04F4F3 | Parksperre, Positionssensor 1: Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x04F4F4 | Parksperre, Positionssensor 1: Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0x04F4F6 | Parksperre, Positionssensor: Oberer Schwellenwert überschritten | 1 | 0x00000080 |
| 0x04F4F7 | Parksperre, Positionssensor: Unterer Schwellenwert unterschritten | 1 | 0x00000080 |
| 0xBA0640 | EWS: Leistungselektronik durch EWS gesperrt | 1 | 0x00040000 |
| 0xE4C528 | AE-CAN-FD Control Module Bus OFF | 0 | 0x00001000 |
| 0xE4CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | 0x00000010 |
| 0xE4D404 | Botschaft (Anforderung Drehzahl Hinterachse, ID: RQ_RPM_BAX) fehlt | 1 | 0x00004000 |
| 0xE4D405 | Botschaft (Anforderung Drehzahl Hinterachse, ID: RQ_RPM_BAX) nicht aktuell | 1 | 0x00010000 |
| 0xE4D406 | Botschaft (Anforderung Drehzahl Hinterachse, ID: RQ_RPM_BAX) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D408 | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) fehlt | 1 | 0x00004000 |
| 0xE4D409 | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) nicht aktuell | 1 | 0x00010000 |
| 0xE4D40A | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D434 | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 | 0x00004000 |
| 0xE4D444 | Botschaft (CombinedChargerUnit1000msNo1, ID: CombinedChargerUnit1000msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D448 | Botschaft (CombinedChargerUnit100msNo1, ID: CombinedChargerUnit100msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D449 | Botschaft (CombinedChargerUnit100msNo1, ID: CombinedChargerUnit100msNo1) nicht aktuell | 1 | 0x00010000 |
| 0xE4D44A | Botschaft (CombinedChargerUnit100msNo1, ID: CombinedChargerUnit100msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D44C | Botschaft (CombinedChargerUnit10msNo1, ID: CombinedChargerUnit10msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D44D | Botschaft (CombinedChargerUnit10msNo1, ID: CombinedChargerUnit10msNo1) nicht aktuell | 1 | 0x00010000 |
| 0xE4D44E | Botschaft (CombinedChargerUnit10msNo1, ID: CombinedChargerUnit10msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D450 | Botschaft (CombinedChargerUnit10msNo2, ID: CombinedChargerUnit10msNo2) fehlt | 1 | 0x00004000 |
| 0xE4D470 | Botschaft (EWS BEV 2 Antwort, ID: EWS_BEV_2_ANSW) fehlt | 1 | 0x00004000 |
| 0xE4D474 | Botschaft (EWS Global, ID: EWS_GLB) fehlt | 1 | 0x00004000 |
| 0xE4D488 | Botschaft (Erweiterung ARB Schnittstelle, ID: EXTS_ARB_INTF) fehlt | 1 | 0x00004000 |
| 0xE4D489 | Botschaft (Erweiterung ARB Schnittstelle, ID: EXTS_ARB_INTF) nicht aktuell | 1 | 0x00010000 |
| 0xE4D48A | Botschaft (Erweiterung ARB Schnittstelle, ID: EXTS_ARB_INTF) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D498 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 | 0x00004000 |
| 0xE4D4B0 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | 0x00004000 |
| 0xE4D4B1 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | 0x00010000 |
| 0xE4D4B2 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D4C4 | Botschaft (HighVoltageStorage10msNo1, ID: HighVoltageStorage10msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D4C8 | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) fehlt | 1 | 0x00004000 |
| 0xE4D4C9 | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) nicht aktuell | 1 | 0x00010000 |
| 0xE4D4CA | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D4CC | Botschaft (HighVoltageStorage200msNo1, ID: HighVoltageStorage200msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D558 | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | 0x00004000 |
| 0xE4D578 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | 0x00004000 |
| 0xE4D579 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | 0x00010000 |
| 0xE4D57A | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D5BC | Botschaft (Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | 0x00004000 |
| 0xE4D5BD | Botschaft (Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 | 0x00010000 |
| 0xE4D5BE | Botschaft (Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D5E4 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) fehlt | 1 | 0x00004000 |
| 0xE4D5E5 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) nicht aktuell | 1 | 0x00010000 |
| 0xE4D5E6 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D5F8 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | 0x00004000 |
| 0xE4D618 | Botschaft (Status Crash, ID: ST_CR) fehlt | 1 | 0x00004000 |
| 0xE4D619 | Botschaft (Status Crash, ID: ST_CR) nicht aktuell | 1 | 0x00010000 |
| 0xE4D61A | Botschaft (Status Crash, ID: ST_CR) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D630 | Botschaft (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) fehlt | 1 | 0x00004000 |
| 0xE4D634 | Botschaft (Status Hybrid 2, ID: ST_HYB_2) fehlt | 1 | 0x00004000 |
| 0xE4D644 | Botschaft (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | 0x00004000 |
| 0xE4D648 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | 0x00004000 |
| 0xE4D649 | Botschaft (Status Stabilisierung DSC: ID: ST_STAB_DSC) nicht aktuell | 1 | 0x00010000 |
| 0xE4D64A | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D64C | Botschaft (Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) fehlt | 1 | 0x00004000 |
| 0xE4D714 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | 0x00004000 |
| 0xE4D715 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | 0x00010000 |
| 0xE4D716 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D724 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | 0x00004000 |
| 0xE4D725 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 | 0x00010000 |
| 0xE4D726 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D738 | Botschaft (ParkByWire50msNo1, ID: ParkByWire50msNo1) fehlt | 1 | 0x00004000 |
| 0xE4D739 | Botschaft (ParkByWire50msNo1, ID: ParkByWire50msNo1) nicht aktuell | 1 | 0x00010000 |
| 0xE4D73A | Botschaft (ParkByWire50msNo1, ID: ParkByWire50msNo1) Prüfsumme falsch | 1 | 0x00010000 |
| 0xE4D742 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | 0x00004000 |
| 0xE4D799 | Botschaft (TestSecOcEA_CCU, ID: TestSecOcEA_CCU) fehlt | 1 | 0x00004000 |
| 0xE4D79C | Botschaft (TestSecOcEA_HVS, ID: TestSecOcEA_HVS) fehlt | 1 | 0x00004000 |
| 0xE4D7A5 | Botschaft (Kilometerstand_2, ID: Kilometerstand_2) fehlt | 1 | 0x00004000 |
| 0xE4D7CC | Botschaft (SecocCntMessage, ID: SecocCntMessage) fehlt | 1 | 0x00004000 |
| 0xE4D7CF | Botschaft (SecocCntResyncReq, ID: SecocCntResyncReq) fehlt | 1 | 0x00004000 |
| 0xE4D7D2 | Botschaft (SecocCntResyncRespPart1, ID: SecocCntResyncRespPart1) fehlt | 1 | 0x00004000 |
| 0xE4D7D5 | Botschaft (SecocCntResyncRespPart2, ID: SecocCntResyncRespPart2) fehlt | 1 | 0x00004000 |
| 0xE4D7E1 | Botschaft (TactCounterSynchronizationFupCANAR, ID: TactCounterSynchronizationFupCANAR) fehlt | 1 | 0x00004000 |
| 0xE4D7E4 | Botschaft (TactCounterSynchronizationSyncCANAR, ID: TactCounterSynchronizationSyncCANAR) fehlt | 1 | 0x00004000 |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_DERATING_INFO | 0-n | Low | 0xFFFFFFFF | TAB_DERATING_INFO | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1770 | STATUS_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1771 | STATUS_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1772 | STATUS_OTHER_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1773 | STATUS_ONLINE_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1774 | STATUS_ONLINE_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1821 | STATUS_SYMMETRIC_KEYS | 0-n | High | 0xFF | TAB_SYMMETRIC_KEYS | - | - | - |
| 0x2200 | VERIFICATION_FAILED_DATA_ID_1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2201 | VERIFICATION_FAILED_DATA_ID_2 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2202 | VERIFICATION_FAILED_DATA_ID_3 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2203 | VERIFICATION_FAILED_DATA_ID_4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2204 | VERIFICATION_FAILED_DATA_ID_5 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2205 | VERIFICATION_TIMER_VALUE | ms | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x500D | UWB_INTERN_SAFETY_0 | HEX | High | unsigned long | - | - | - | - |
| 0x500E | UWB_INTERN_SAFETY_1 | HEX | High | unsigned long | - | - | - | - |
| 0x500F | UWB_INTERN_SAFETY_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5010 | UWB_INTERN_SAFETY_3 | HEX | High | unsigned long | - | - | - | - |
| 0x7013 | UWB_EM_TEMPERATUR_STATOR | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7015 | UWB_EM_DREHZAHL | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7017 | UWB_EM_IST_DREHMOMENT | Nm | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701C | UWB_INV_TEMPERATUR_KUEHLMITTEL | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701D | UWB_INV_SPANNUNG_DC | V | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x705E | UWB_ERWEITERTE_SYSTEMZEIT | s | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x7063 | UWB_GBX_TEMPERATUR_SENSOR_1 | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7064 | UWB_GBX_TEMPERATUR_SENSOR_2 | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7065 | UWB_GBX_OIL_MASSFLOW | kg/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7066 | UWB_GBX_OIL_MASSFLOW_REQ_EM | kg/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7067 | UWB_GBX_OIL_MASSFLOW_REQ_GBX | kg/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x7068 | UWB_GBX_TARGET_SPEED_OILPUMP | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7069 | UWB_GBX_SPEED_OILPUMP | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x706C | UWB_EM_ABSCHALT_GRUND | 0-n | High | 0xFF | TAB_EM_ABSCHALT_GRUND | - | - | - |
| 0x706D | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x77CF | UWB_SG_RESET_ART | 0-n | High | 0xFF | TAB_UWB_SG_RESET_ART | - | - | - |
| 0x77D0 | UWB_SG_RESET_URSACHE | HEX | High | unsigned char | - | - | - | - |
| 0x77D1 | UWB_SG_RESET_PROZESSOR_KERN | HEX | High | unsigned char | - | - | - | - |
| 0x77D2 | UWB_SG_RESET_SCHEMA_VERSION | HEX | High | unsigned char | - | - | - | - |
| 0x77D3 | UWB_SG_RESET_REGISTER_01 | HEX | High | unsigned long | - | - | - | - |
| 0x77D4 | UWB_SG_RESET_REGISTER_02 | HEX | High | unsigned long | - | - | - | - |
| 0x77D5 | UWB_SG_RESET_REGISTER_03 | HEX | High | unsigned long | - | - | - | - |
| 0x77D6 | UWB_SG_RESET_REGISTER_04 | HEX | High | unsigned long | - | - | - | - |
| 0x77D7 | UWB_SG_RESET_REGISTER_05 | HEX | High | unsigned long | - | - | - | - |
| 0x77D8 | UWB_SG_RESET_REGISTER_06 | HEX | High | unsigned long | - | - | - | - |
| 0x77D9 | UWB_SG_RESET_REGISTER_07 | HEX | High | unsigned long | - | - | - | - |
| 0x77DA | UWB_SG_RESET_REGISTER_08 | HEX | High | unsigned long | - | - | - | - |
| 0x77DB | UWB_SG_RESET_REGISTER_09 | HEX | High | unsigned long | - | - | - | - |
| 0x77DC | UWB_SG_RESET_REGISTER_10 | HEX | High | unsigned long | - | - | - | - |
| 0x77E2 | UWB_ECU_FUSIERROR_FLAGS_0 | HEX | High | unsigned long | - | - | - | - |
| 0x77E3 | UWB_ECU_FUSIERROR_FLAGS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x77E4 | UWB_ECU_RESET_RESERVED_0 | HEX | High | unsigned long | - | - | - | - |
| 0x77E5 | UWB_ECU_RESET_RESERVED_1 | HEX | High | unsigned long | - | - | - | - |
| 0x77E8 | UWB_ECU_SCU0_RSTSTAT | HEX | High | unsigned long | - | - | - | - |
| 0x77E9 | UWB_ECU_SCU0_RSTCON2 | HEX | High | unsigned long | - | - | - | - |
| 0x77EB | UWB_ECU_SCU0_EVRSTAT | HEX | High | unsigned long | - | - | - | - |
| 0x77EC | UWB_ECU_SMU_0 | HEX | High | unsigned long | - | - | - | - |
| 0x77ED | UWB_ECU_SMU_1 | HEX | High | unsigned long | - | - | - | - |
| 0x77EE | UWB_ECU_SMU_2 | HEX | High | unsigned long | - | - | - | - |
| 0x77EF | UWB_ECU_SMU_3 | HEX | High | unsigned long | - | - | - | - |
| 0x77F0 | UWB_ECU_SMU_4 | HEX | High | unsigned long | - | - | - | - |
| 0x77F1 | UWB_ECU_SMU_5 | HEX | High | unsigned long | - | - | - | - |
| 0x77F2 | UWB_ECU_SMU_6 | HEX | High | unsigned long | - | - | - | - |
| 0x77F3 | UWB_ECU_TLF_SYSFAIL | HEX | High | unsigned char | - | - | - | - |
| 0x77F4 | UWB_ECU_TLF_INITERR | HEX | High | unsigned char | - | - | - | - |
| 0x77F5 | UWB_ECU_TLF_MONSF0 | HEX | High | unsigned char | - | - | - | - |
| 0x77F6 | UWB_ECU_TLF_MONSF1 | HEX | High | unsigned char | - | - | - | - |
| 0x77F7 | UWB_ECU_TLF_MONSF2 | HEX | High | unsigned char | - | - | - | - |
| 0x77F8 | UWB_ECU_TLF_MONSF3 | HEX | High | unsigned char | - | - | - | - |
| 0x77F9 | UWB_ECU_TLF_OTFAIL | HEX | High | unsigned char | - | - | - | - |
| 0x77FA | UWB_ECU_TLF_OTWRNSF | HEX | High | unsigned char | - | - | - | - |
| 0x77FB | UWB_ECU_TLF_FWDSTAT0 | HEX | High | unsigned char | - | - | - | - |
| 0x77FE | UWB_SG_RESET_FEHLER_ADRESSE | HEX | High | unsigned long | - | - | - | - |
| 0x77FF | UWB_SG_RESET_PROGRAMMZAEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x8003 | ECU_MODE | 0-n | High | 0xFF | TAB_ECU_MODE | - | - | - |
| 0xE3C2 | Public Key | TEXT | High | 65 | - | 1.0 | 1.0 | 0.0 |
| 0xE3C5 | Response | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0xE3C6 | Challenge | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0xE3C7 | EWS Signale | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
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

### IM_ERR_DH_GEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Fehler bei Generierung des öffentlichen Schlüssels |
| 0x02 | Timeout PDU Public Key DH-Server |
| 0x03 | PDU Negative Public Key DH-Server mit Status BUSY empfangen |
| 0x04 | PDU Negative Public Key DH-Server mit Status SERVER GESPERRT empfangen |
| 0x05 | Fehler ungültiges Kompressionsformat empfangen |
| 0x06 | Fehler ungültigen öffentlichen Schlüssel empfangen |
| 0x07 | Fehler bei Generierung des Shared Secret |
| 0x08 | Max. Fehleranzahl bei Schlüssel-Generierung erreicht |
| 0x09 | NVM Fehler |
| 0xFF | Wert ungültig |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x031180 | EWS: Fehler Generierung DH Schlüssel | 0 | 0x00000000 |
| 0x03125A | Dummy Fehlerspeicher Umweltbedingungen | 0 | 0x00000000 |
| 0x03F4E9 | Elektromaschine, Fehlerreaktion: sicherer Zustand | 0 | 0x00000000 |
| 0x03F52D | Umrichter, AC-Seite, Phase U: Überstrom (Hardware) | 1 | 0x00000000 |
| 0x03F52E | Umrichter, AC-Seite, Phase V: Überstrom (Hardware) | 1 | 0x00000000 |
| 0x03F52F | Umrichter, AC-Seite, Phase W: Überstrom (Hardware) | 1 | 0x00000000 |
| 0x03F530 | Umrichter, Hochvolt-Zwischenkreisspannung: Spannung außerhalb Grenzen | 0 | 0x00000000 |
| 0x03F587 | Steuergerät: interner Fehler (Safety Management Unit Error) | 0 | 0x00000000 |
| 0x03F588 | Steuergerät: interner Fehler (Reset oder OS Shutdown) | 0 | 0x00000000 |
| 0x03F589 | Steuergerät: interner Fehler (Error bei Memory Protection Unit Core 0) | 0 | 0x00000000 |
| 0x03F58A | Steuergerät: interner Fehler (Error bei Memory Protection Unit Core 1) | 0 | 0x00000000 |
| 0x03F58B | Steuergerät: interner Fehler (Error bei Memory Protection Unit Core 2) | 0 | 0x00000000 |
| 0x03F58C | Steuergerät: interner Fehler (Programm Flow Monitoring Error) | 0 | 0x00000000 |
| 0x03F58D | FUSI, ASD Überwachung: Momentenlimitierung | 0 | 0x00000000 |
| 0x04F4F9 | Ölmodul - Ölpumpe - Betriebsstunden überschritten | 0 | 0x00000000 |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | UWB_DERATING_INFO | 0-n | Low | 0xFFFFFFFF | TAB_DERATING_INFO | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x5000 | UWB_INTERN_E3FUSI_0 | HEX | High | unsigned long | - | - | - | - |
| 0x5001 | UWB_INTERN_E3FUSI_1 | HEX | High | unsigned long | - | - | - | - |
| 0x5002 | UWB_INTERN_E3FUSI_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5003 | UWB_INTERN_E3FUSI_3 | HEX | High | unsigned long | - | - | - | - |
| 0x5004 | UWB_INTERN_E3FUSI_4 | HEX | High | unsigned long | - | - | - | - |
| 0x5005 | UWB_INTERN_E3FUSI_5 | HEX | High | unsigned long | - | - | - | - |
| 0x5006 | UWB_INTERN_SMU_ALMGRP_0 | HEX | High | unsigned long | - | - | - | - |
| 0x5007 | UWB_INTERN_SMU_ALMGRP_1 | HEX | High | unsigned long | - | - | - | - |
| 0x5008 | UWB_INTERN_SMU_ALMGRP_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5009 | UWB_INTERN_SMU_ALMGRP_3 | HEX | High | unsigned long | - | - | - | - |
| 0x500A | UWB_INTERN_SMU_ALMGRP_4 | HEX | High | unsigned long | - | - | - | - |
| 0x500B | UWB_INTERN_SMU_ALMGRP_5 | HEX | High | unsigned long | - | - | - | - |
| 0x500C | UWB_INTERN_SMU_ALMGRP_6 | HEX | High | unsigned long | - | - | - | - |
| 0x7013 | UWB_EM_TEMPERATUR_STATOR | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7014 | UWB_EM_TEMPERATUR_ROTOR | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7015 | UWB_EM_DREHZAHL | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7016 | UWB_EM_SOLL_DREHMOMENT | Nm | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7017 | UWB_EM_IST_DREHMOMENT | Nm | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7019 | UWB_INV_TEMPERATUR_PHASE_U | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701A | UWB_INV_TEMPERATUR_PHASE_V | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701B | UWB_INV_TEMPERATUR_PHASE_W | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701C | UWB_INV_TEMPERATUR_KUEHLMITTEL | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x701D | UWB_INV_SPANNUNG_DC | V | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7021 | UWB_INV_TEMPERATUR_IGBT_DIODE_MAX | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7059 | UWB_FUSI_I_INV_DC | A | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x705C | UWB_EM_TEMPERATUR_SENSOR_STATOR | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x705E | UWB_ERWEITERTE_SYSTEMZEIT | s | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x705F | UWB_INV_TEMPERATUR_EXCITER | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7060 | UWB_FUSI_ASD_Torque | Nm | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7061 | UWB_EM_LIMITED_SOLL_DREHMOMENT | Nm | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7063 | UWB_GBX_TEMPERATUR_SENSOR_1 | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7064 | UWB_GBX_TEMPERATUR_SENSOR_2 | °C | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7065 | UWB_GBX_OIL_MASSFLOW | kg/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7066 | UWB_GBX_OIL_MASSFLOW_REQ_EM | kg/h | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7067 | UWB_GBX_OIL_MASSFLOW_REQ_GBX | kg/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x7068 | UWB_GBX_TARGET_SPEED_OILPUMP | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x7069 | UWB_GBX_SPEED_OILPUMP | 1/min | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x706A | UWB_EM_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_EM_IST_BETRIEBSART | - | - | - |
| 0x706B | UWB_EM_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_EM_SOLL_BETRIEBSART | - | - | - |
| 0x706C | UWB_EM_ABSCHALT_GRUND | 0-n | High | 0xFF | TAB_EM_ABSCHALT_GRUND | - | - | - |
| 0x706D | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x706F | UWB_EXCITER_STROM_DC | A | Low | intel float | - | 1.0 | 1.0 | 0.0 |
| 0x77DD | UWB_ECU_CPUX_DIEAR | HEX | High | unsigned long | - | - | - | - |
| 0x77DE | UWB_ECU_CPUX_DIETR | HEX | High | unsigned long | - | - | - | - |
| 0x77DF | UWB_ECU_OSERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x77E0 | UWB_ECU_OSERROR_FAULTYSERVICEID | HEX | High | unsigned int | - | - | - | - |
| 0x77E1 | UWB_ECU_OSERROR_EXTENDED_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x77E8 | UWB_ECU_SCU0_RSTSTAT | HEX | High | unsigned long | - | - | - | - |
| 0x77E9 | UWB_ECU_SCU0_RSTCON2 | HEX | High | unsigned long | - | - | - | - |
| 0x77EB | UWB_ECU_SCU0_EVRSTAT | HEX | High | unsigned long | - | - | - | - |
| 0x77F3 | UWB_ECU_TLF_SYSFAIL | HEX | High | unsigned char | - | - | - | - |
| 0x77F4 | UWB_ECU_TLF_INITERR | HEX | High | unsigned char | - | - | - | - |
| 0x77F5 | UWB_ECU_TLF_MONSF0 | HEX | High | unsigned char | - | - | - | - |
| 0x77F6 | UWB_ECU_TLF_MONSF1 | HEX | High | unsigned char | - | - | - | - |
| 0x77F7 | UWB_ECU_TLF_MONSF2 | HEX | High | unsigned char | - | - | - | - |
| 0x77F8 | UWB_ECU_TLF_MONSF3 | HEX | High | unsigned char | - | - | - | - |
| 0x77F9 | UWB_ECU_TLF_OTFAIL | HEX | High | unsigned char | - | - | - | - |
| 0x77FA | UWB_ECU_TLF_OTWRNSF | HEX | High | unsigned char | - | - | - | - |
| 0x77FB | UWB_ECU_TLF_FWDSTAT0 | HEX | High | unsigned char | - | - | - | - |
| 0x77FC | UWB_ECU_EXCEPTION_CLASS | HEX | High | unsigned char | - | - | - | - |
| 0x77FD | UWB_ECU_ECEPTION_TIN | HEX | High | unsigned char | - | - | - | - |
| 0xE3C8 | Fehlercode | 0-n | High | 0xFF | IM_ERR_DH_GEN | - | - | - |
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

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X1075_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RSU_ACTIVATION_HV_SUPPORT_RETURN_CODE | + | - | - | 0-n | high | unsigned char | - | TAB_RSU_ACTIVATION_HV_SUPPORT_RETURNCODE | - | - | - | Rückgabe des Status zum Request STEUERN_RSU_TEILNETZ_HV_STUETZUNG_ACTIVATION |
| STAT_RSU_DEACTIVATION_HV_SUPPORT_RETURN_CODE | - | + | - | 0-n | high | unsigned char | - | TAB_RSU_DEACTIVATION_HV_SUPPORT_RETURNCODE | - | - | - | Rückgabe des Status zum Request STEUERN_RSU_TEILNETZ_HV_STUETZUNG_DEACTIVATION |

### RES_0X10AB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WORSTCASECHECKTIME_IN_S_WERT | + | - | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Worst Case Laufzeit in Sekunden |

### RES_0X1106_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_LOAD_CORE_0_WERT | % | low | intel float | - | - | 1.0 | 1.0 | 0.0 | CPU_LOAD_CORE_0 |
| STAT_CPU_LOAD_CORE_1_WERT | % | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | CPU_LOAD_CORE_1 |
| STAT_CPU_LOAD_CORE_2_WERT | % | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | CPU_LOAD_CORE_2 |
| STAT_TEST_TEXT | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | TEST |
| STAT_TESTERGEBNIS_WERT | HEX | low | unsigned long | - | - | - | - | - | TEST |
| STAT_TESTDATA_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | TEST |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | 1/min | low | signed int | - | - | 1.0 | 1.0 | 0.0 | Drehzhal wert  |
| STAT_DIAGCPLD_WERT | HEX | low | unsigned int | - | - | - | - | - | DiagStatus CPLD  |
| - | Bit | high | BITFIELD | - | BF_DUMMY | - | - | - | DT Error beim ersten Gatetreiber  |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_EM_STATOR01_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_TEMP_EM_STATOR02_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_TEMP_EM_STATOR03_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_TEMP_EM_STATOR04_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_TEMP_EM_STATOR05_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_TEMP_EM_STATOR06_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_TEMP_EM_STATOR07_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_TEMP_EM_STATOR08_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_TEMP_EM_STATOR09_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_TEMP_EM_STATOR10_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 9 und Stützstelle 10 in Sekunden |
| STAT_TEMP_EM_STATOR11_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 10 und Stützstelle 11 in Sekunden |
| STAT_TEMP_EM_STATOR12_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen oberhalb von Stützstelle 11 in Sekunden |
| STAT_TEMP_EM_ROTOR01_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_TEMP_EM_ROTOR02_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_TEMP_EM_ROTOR03_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_TEMP_EM_ROTOR04_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_TEMP_EM_ROTOR05_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Statortemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_TEMP_EM_ROTOR06_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_TEMP_EM_ROTOR07_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_TEMP_EM_ROTOR08_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_TEMP_EM_ROTOR09_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_TEMP_EM_ROTOR10_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 9 und Stützstelle 10 in Sekunden |
| STAT_TEMP_EM_ROTOR11_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen zwischen Stützstelle 10 und Stützstelle 11 in Sekunden |
| STAT_TEMP_EM_ROTOR12_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Rotortemperaturen oberhalb von Stützstelle 11 in Sekunden |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WHY_FIS_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | WhyFis |
| STAT_WHY_FIS_FIRST_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | WhyFis First |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_LOAD_0_SUX_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_0_SUX |
| STAT_CPU_LOAD_0_ACT_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_0_ACT |
| STAT_CPU_LOAD_0_SMA_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_0_SMA |
| STAT_CPU_LOAD_0_MIN_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_0_MIN |
| STAT_CPU_LOAD_0_MAX_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_0_MAX |
| STAT_CPU_LOAD_1_SUX_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_1_SUX |
| STAT_CPU_LOAD_1_ACT_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_1_ACT |
| STAT_CPU_LOAD_1_SMA_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_1_SMA |
| STAT_CPU_LOAD_1_MIN_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_1_MIN |
| STAT_CPU_LOAD_1_MAX_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_1_MAX |
| STAT_CPU_LOAD_2_SUX_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_2_SUX |
| STAT_CPU_LOAD_2_ACT_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_2_ACT |
| STAT_CPU_LOAD_2_SMA_WERT | % | low | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_2_SMA |
| STAT_CPU_LOAD_2_MIN_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | CPU_LOAD_2_MIN |
| STAT_CPU_LOAD_2_MAX_WERT | % | low | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPU_LOAD_2_MAX |

### RES_0X400A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_INDICATOR | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_INDICATOR | - | - | - | Status der Aktiven Fehlermeldung 0x00: inactive 0x01: active |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BMWSSM_STB_FCTNSFTYSTIVTR_WERT | HEX | high | unsigned long | - | - | - | - | - | BMWssm_stb_FctnSftyStIvtr |
| STAT_BMWSSM_STB_FCTNSFTYSTIVTRFIRST_WERT | HEX | high | unsigned long | - | - | - | - | - | BMWssm_stb_FctnSftyStIvtrFirst |
| STAT_BMW_STB_SFTYSAFEST_WERT | HEX | high | signed char | - | - | - | - | - | BMW_stb_SftySafeSt |
| STAT_BMW_STB_SFTYSAFESTLTCH_WERT | HEX | high | signed char | - | - | - | - | - | BMW_stb_SftySafeStLtch |
| STAT_BMWFRM_N_FRMPRIO_UB_WERT | HEX | high | signed char | - | - | - | - | - | BMWfrm_n_FrmPrio_ub |
| STAT_BMW_SWC_INTFDH_WHYFIS_WERT | HEX | high | unsigned int | - | - | - | - | - | BMW_SWC_IntFdh_WhyFis |
| STAT_BMW_SWC_INTFDH_WHYFIS_FIRST_WERT | HEX | high | unsigned int | - | - | - | - | - | BMW_SWC_IntFdh_WhyFis_First |
| STAT_BMWCPLDSPI_ST_DIAG_WERT | HEX | high | unsigned int | - | - | - | - | - | BMWcpldspi_st_Diag |
| STAT_BMWCPLDSPI_ST_FUSIDIAG_WERT | HEX | high | unsigned int | - | - | - | - | - | BMWcpldspi_st_FuSiDiag |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTOGRAMM_EM3_1_DATA | DATA | high | data[80] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 1 |
| STAT_HISTOGRAMM_EM3_2_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 2 |
| STAT_HISTOGRAMM_EM3_3_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 3 |
| STAT_HISTOGRAMM_EM3_4_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 4 |
| STAT_HISTOGRAMM_EM3_5_DATA | DATA | high | data[195] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 5 |
| STAT_HISTOGRAMM_EM3_6_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 6 |
| STAT_HISTOGRAMM_EM3_7_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 7 |
| STAT_HISTOGRAMM_EM3_8_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 8 |
| STAT_HISTOGRAMM_EM3_9_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 9 |
| STAT_HISTOGRAMM_EM3_10_DATA | DATA | high | data[75] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 10 |
| STAT_HISTOGRAMM_EM3_11_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 11 |
| STAT_HISTOGRAMM_EM3_12_DATA | DATA | high | data[60] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 3, part 12 |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTOGRAMM_IVTR1_1_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 1 |
| STAT_HISTOGRAMM_IVTR1_2_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 2 |
| STAT_HISTOGRAMM_IVTR1_3_DATA | DATA | high | data[90] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 3 |
| STAT_HISTOGRAMM_IVTR1_4_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 4 |
| STAT_HISTOGRAMM_IVTR1_5_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 5 |
| STAT_HISTOGRAMM_IVTR1_6_DATA | DATA | high | data[90] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 6 |
| STAT_HISTOGRAMM_IVTR1_7_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 7 |
| STAT_HISTOGRAMM_IVTR1_8_DATA | DATA | high | data[129] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 8 |
| STAT_HISTOGRAMM_IVTR1_9_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 9 |
| STAT_HISTOGRAMM_IVTR1_10_DATA | DATA | high | data[185] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 10 |
| STAT_HISTOGRAMM_IVTR1_11_DATA | DATA | high | data[240] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 11 |
| STAT_HISTOGRAMM_IVTR1_12_DATA | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 12 |
| STAT_HISTOGRAMM_IVTR1_13_DATA | DATA | high | data[240] | - | - | 1.0 | 1.0 | 0.0 | Histogramm 1, part 13 |

### RES_0X4016_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWCAL_HEAD_WERT | HEX | low | unsigned int | - | - | - | - | - | Start Pattern |
| STAT_HWCAL_STRUCT_VER_WERT | HEX | low | unsigned char | - | - | - | - | - | Versionsnummer Struktur |
| STAT_HWCAL_DATA_VER_WERT | HEX | low | unsigned char | - | - | - | - | - | Versionsnummer Daten |
| STAT_HWCAL_STATUS_WERT | HEX | low | unsigned int | - | - | - | - | - | Interner Status der HW CAL Werte |
| STAT_SENSOR_1_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_1_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_2_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_2_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_3_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_3_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_4_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_4_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_5_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_5_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_6_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_6_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_7_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_7_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_8_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_8_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_9_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_9_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_10_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_10_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_11_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_11_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_12_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_12_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_13_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_13_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_14_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_14_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_15_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_15_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_16_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_16_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_17_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_17_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_18_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_18_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_19_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_19_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_20_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_20_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_21_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_21_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_22_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_22_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_23_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_23_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_24_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_24_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_25_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_25_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_26_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_26_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_27_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_27_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_28_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_28_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_29_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_29_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_30_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_30_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_31_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_31_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_32_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_32_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_33_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_33_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_34_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_34_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_35_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_35_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_36_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_36_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_37_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_37_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_38_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_38_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_39_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_39_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_40_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_40_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_41_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_41_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_42_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_42_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_43_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_43_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_44_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_44_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_45_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_45_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_46_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_46_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_47_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_47_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_48_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_48_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_49_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_49_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_50_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_50_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_51_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_51_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_52_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_52_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_53_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_53_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_54_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_54_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_55_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_55_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_56_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_56_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_57_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_57_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_58_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_58_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_59_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_59_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_60_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_60_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_61_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_61_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_62_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_62_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_63_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_63_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_64_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_64_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_65_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_65_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_66_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_66_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_67_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_67_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_68_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_68_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_69_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_69_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_70_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_70_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_71_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_71_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_72_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_72_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_73_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_73_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_74_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_74_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_75_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_75_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_76_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_76_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_77_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_77_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_SENSOR_78_GAIN_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert GAIN Faktor |
| STAT_SENSOR_78_OFFSET_WERT | HEX | low | unsigned long | - | - | - | - | - | Rohwert OFFSET |
| STAT_HWCAL_STOP_PATTERN_WERT | HEX | low | unsigned int | - | - | - | - | - | Stop Pattern |
| STAT_CRC_WERT | HEX | low | unsigned int | - | - | - | - | - | Checksumme |

### RES_0X8002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_MODE_TYPE_SUBTYPE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | ECU Mode |
| STAT_ECU_MODE | 0-n | high | unsigned char | - | TAB_ECU_MODE | - | - | - | ECU-Mode |

### RES_0XE3C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS_GEN | 0-n | high | unsigned char | - | TAB_EWS_GEN | - | - | - | EWS Generation, die gegenwärtig im Steuergerät aktiviert ist. |
| STAT_CLIENT_TYPE | 0-n | high | unsigned char | - | TAB_EWS_CLIENT_TYPE | - | - | - | Typ des EWS Clients. |
| STAT_CLIENT_INITIALIZED | 0-n | high | unsigned char | - | TAB_EWS_CLIENT_INITIALIZED | - | - | - | Verriegelungszustand des EWS Clients/DH-Clients |
| STAT_CLIENT_RELEASED | 0-n | high | unsigned char | - | TAB_EWS_CLIENT_RELEASED | - | - | - | Freischaltzustand des EWS Clients/DH-Clients. |
| STAT_SK_EWS_STATE | 0-n | high | unsigned char | - | TAB_EWS_DATA_STATE | - | - | - | Status der Datenablage des EWS Secret Keys |
| STAT_SK_RES_STATE | 0-n | high | unsigned char | - | TAB_EWS_DATA_STATE | - | - | - | Status der Datenablage des RES Secret Keys |
| STAT_E6_HASH_STATE | 0-n | high | unsigned char | - | TAB_EWS_DATA_STATE | - | - | - | Status der Datenablage des EWS6 Hashes (Fingerprint) |
| STAT_E6_RES_STATE | 0-n | high | unsigned char | - | TAB_EWS_DATA_STATE | - | - | - | Status der Datenablage des EWS6R Keys |
| STAT_CLIENT_AUTH | 0-n | high | unsigned char | - | TAB_EWS_CLIENT_AUTHENTICATION | - | - | - | Status der letzten EWS oder RES Authentisierung. |
| STAT_CLIENT_AUTH_ERROR | 0-n | high | unsigned char | - | TAB_EWS_CLIENT_AUTH_ERROR | - | - | - | Fehlercoder der letzten EWS oder RES Authentisierung. |
| - | Bit | high | BITFIELD | - | BF_IM_STAT_SERVER_INFO | - | - | - | Status des Servers in der letzten empfangenen PDU INFO_EWS. |
| - | Bit | high | BITFIELD | - | BF_IM_STAT_SERVER_RESP | - | - | - | Status des Servers in der letzten empfangenen PDU positive/negative Response EWS/RES. |
| STAT_FKT_INFO_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Wert der Signale FKT0 und FKT1 in der zuletzt empfangenen INFO_EWS PDU. |
| STAT_FKT_RESP_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Wert der Signale FKT0 und FKT1 in der zuletzt empfangenen Response. |

### RES_0XE513_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPLD_VERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | CPLD-Version |
| STAT_CPLD_UNTERVERSION_WERT | HEX | high | unsigned char | - | - | - | - | - | CPLD-Unterversion |

### RES_0XE514_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_U_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase U |
| STAT_STROM_AC_V_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase V |
| STAT_STROM_AC_W_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase W |

### RES_0XE515_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_EMASCHINE_STATOR_WERT | °C | low | unsigned int | - | - | 1.0 | 64.0 | -50.0 | Temperatur Stator Emaschine |
| STAT_TEMP_UMRICHTER_WERT | °C | low | unsigned int | - | - | 1.0 | 64.0 | -50.0 | Temperatur Umrichter |
| STAT_TEMP_KUEHLMITTEL_MODELLIERT_WERT | °C | low | unsigned int | - | - | 1.0 | 64.0 | -50.0 | Modellierte Temperatur Kühlmittel |
| STAT_TEMP_EMASCHINE_ROTOR_WERT | °C | low | unsigned int | - | - | 1.0 | 64.0 | -50.0 | Temperatur Rotor Emaschine |

### RES_0XE518_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | low | signed int | - | - | 1.0 | 1.0 | 0.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | low | signed int | - | - | 1.0 | 27.0 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | low | signed int | - | - | 1.0 | 27.0 | 0.0 | SOLL Moment der E-Maschine |
| STAT_ELEKTRISCHE_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_ELEKTRISCHE_BETRIEBSART | - | - | - | aktuelle Betriebsart der E-Maschine |

### RES_0XE51B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_BEREICH_1_WERT | s | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolutzeit im kritischen E-Maschinen Drehzahl Bereich 1 (Sekunden) |
| STAT_DREHZAHL_BEREICH_2_WERT | s | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Absolutzeit im kritischen E-Maschinen Drehzahl Bereich 2 (Sekunden) |

### RES_0XE520_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPHISTOGRAMM_UMRICHTER1_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Relative Häufigkeit Temperatur 1 |
| STAT_TEMPHISTOGRAMM_UMRICHTER2_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Relative Häufigkeit Temperatur 2 |
| STAT_TEMPHISTOGRAMM_UMRICHTER3_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Relative Häufigkeit Temperatur 3 |
| STAT_TEMPHISTOGRAMM_UMRICHTER4_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Relative Häufigkeit Temperatur 4 |
| STAT_TEMPHISTOGRAMM_UMRICHTER5_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Relative Häufigkeit Temperatur 5 |

### RES_0XE528_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MONTAGEMODUS_AKTIV | 0-n | high | unsigned char | - | TAB_MONTAGEMODUS | - | - | - | Zustand des Montagemodus |

### RES_0XE529_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_5V_UC_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 5V von CY325_MC0 |
| STAT_SPANNUNG_3V3_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY325_MC0 |
| STAT_SPANNUNG_1V3_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 1,3V von MC0 |
| STAT_SPANNUNG_12V_WERT | V | low | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungsüberwachung der internen 12V zur KL30B Plausibilisierung  |
| STAT_SPANNUNG_UZK_WERT | V | low | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannungsüberwachung der Zwischenkreisspannung  |
| STAT_SPANNUNG_TLF_5V_STBY_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 5V Standby (TLF35584) |
| STAT_SPANNUNG_TLF_5V_COM_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 5V für Kommunikation  |
| STAT_SPANNUNG_TLF_5V_T1_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 5V zur Parksperre Versorgung [TLF35584]  |
| STAT_SPANNUNG_TLF_5V_T2_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der internen 5V zur Versorgung für TEE Detektion und xMR Diagnostizierung [TLF35584] |
| STAT_SPANNUNG_TLF_5V_VREF_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Referenz 5V interne Versorgungspannung  |
| STAT_SPANNUNG_16V_HVM_WERT | V | low | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannungsüberwachung der 16V Versorgung  mittels MUX-ADC auf die HV Seite des CPLDs  |
| STAT_SPANNUNG_1V8_HVM_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der 1,8V Versorgung  mittels MUX-ADC auf die HV Seite des CPLDs |
| STAT_SPANNUNG_3V3_HVM_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der 3,3V Versorgung  mittels MUX-ADC auf die HV Seite des CPLDs |
| STAT_SPANNUNG_5V_HVM_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung der 5V Versorgung  mittels MUX-ADC auf die HV Seite des CPLDs |
| STAT_SPANNUNG_XMR_VDIAG_WERT | V | low | unsigned int | - | - | 1.0 | 6000.0 | 0.0 | Spannungsüberwachung und Diagnostizierung der Versorgungspannung des xMR Sensors |

### RES_0XE52C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_A_WERT | ° | low | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Rotorlagesensor Offset Winkel Asil A  |
| STAT_OFFSET_C_WERT | ° | low | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Rotorlagesensor Offset Winkel Asil C  |

### RES_0XE530_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEARBOXTEMP1_WERT | °C | low | signed long | - | - | 0.1 | 1.0 | -40.0 | Temperatur Getriebetemperatursensor 1 |
| STAT_GEARBOXTEMP2_WERT | °C | low | signed long | - | - | 0.1 | 1.0 | -40.0 | Temperatur Getriebetemperatursensor 2 |
| STAT_GEARBOX_PRESSURE_WERT | bar | low | signed long | - | - | 0.01 | 1.0 | 0.0 | Druckwert Getriebedrucksensor |

### RES_0XE531_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_PBW_PROZENT_WERT | % | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Winkelposition Parksperrenaktuator in % |
| STAT_POSITION_PBW_STATUS | 0-n | high | unsigned char | - | TAB_POSITION_PBW_STATUS | - | - | - | Zustand Parksperrenaktuator (Eingelegt, Ausgelegt, Zwischenposition) |

### RES_0XE58E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOFTWARE_GEARBOX_OELPUMPE_APPLIKATIONSSOFTWARE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Software Gearbox Ölpumpe Applikationssoftware |
| STAT_SOFTWARE_GEARBOX_OELPUMPE_BOOTLOADER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Software Gearbox Ölpumpe Bootloader |

### RES_0XE591_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THERMOMODELL_GBX_1_WERT | °C | low | signed long | - | - | 0.1 | 1.0 | -40.0 | Interne Temperatur Thermodell GBX. |
| STAT_TEMP_THERMOMODELL_GBX_2_WERT | °C | low | signed long | - | - | 0.1 | 1.0 | -40.0 | Interne Temperatur Thermodell GBX. |
| STAT_TEMP_THERMOMODELL_GBX_3_WERT | °C | low | signed long | - | - | 0.1 | 1.0 | -40.0 | Interne Temperatur Thermodell GBX. |

### RES_0XE597_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART | 0-n | high | unsigned char | - | TABELLE_BETRIEBSART | - | - | - | Status über den entsprechenden Modus von der Emaschine |

### RES_0XE598_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RLS_ANLERNEN | 0-n | high | unsigned char | - | TAB_RLS_STATUS | - | - | - | Status über den RLS Anlernen |

### RES_0XE5CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_WERT | ° | low | unsigned int | - | - | 360.0 | 65535.0 | 0.0 | Aktueller Rotorposition |

### RES_0XE5CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_CODE_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Chiffetext vom Rotorlagesensor Winkel |

### RES_0XE5DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GBX_KLASSE_1A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1a |
| STAT_GBX_KLASSE_1B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1b |
| STAT_GBX_KLASSE_1C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1c |
| STAT_GBX_KLASSE_1D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1d |
| STAT_GBX_KLASSE_1E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1e |
| STAT_GBX_KLASSE_1F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1f |
| STAT_GBX_KLASSE_1G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1g |
| STAT_GBX_KLASSE_1H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1h |
| STAT_GBX_KLASSE_2A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2a |
| STAT_GBX_KLASSE_2B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2b |
| STAT_GBX_KLASSE_2C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2c |
| STAT_GBX_KLASSE_2D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2d |
| STAT_GBX_KLASSE_2E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2e |
| STAT_GBX_KLASSE_2F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2f |
| STAT_GBX_KLASSE_2G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2g |
| STAT_GBX_KLASSE_2H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2h |
| STAT_GBX_KLASSE_3A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3a |
| STAT_GBX_KLASSE_3B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3b |
| STAT_GBX_KLASSE_3C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3c |
| STAT_GBX_KLASSE_3D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3d |
| STAT_GBX_KLASSE_3E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3e |
| STAT_GBX_KLASSE_3F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3f |
| STAT_GBX_KLASSE_3G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3g |
| STAT_GBX_KLASSE_3H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3h |
| STAT_GBX_KLASSE_4A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4a |
| STAT_GBX_KLASSE_4B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4b |
| STAT_GBX_KLASSE_4C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4c |
| STAT_GBX_KLASSE_4D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4d |
| STAT_GBX_KLASSE_4E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4e |
| STAT_GBX_KLASSE_4F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4f |
| STAT_GBX_KLASSE_4G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4g |
| STAT_GBX_KLASSE_4H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4h |
| STAT_GBX_KLASSE_5A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5a |
| STAT_GBX_KLASSE_5B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5b |
| STAT_GBX_KLASSE_5C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5c |
| STAT_GBX_KLASSE_5D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5d |
| STAT_GBX_KLASSE_5E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5e |
| STAT_GBX_KLASSE_5F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5f |
| STAT_GBX_KLASSE_5G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5g |
| STAT_GBX_KLASSE_5H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5h |
| STAT_GBX_KLASSE_6A_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6a |
| STAT_GBX_KLASSE_6B_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6b |
| STAT_GBX_KLASSE_6C_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6c |
| STAT_GBX_KLASSE_6D_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6d |
| STAT_GBX_KLASSE_6E_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6e |
| STAT_GBX_KLASSE_6F_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6f |
| STAT_GBX_KLASSE_6G_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6g |
| STAT_GBX_KLASSE_6H_WERT | - | low | signed long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6h |

### RES_0XE5DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GBX_KLASSE_1_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_1 |
| STAT_GBX_KLASSE_2_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_2 |
| STAT_GBX_KLASSE_3_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_3 |
| STAT_GBX_KLASSE_4_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_4 |
| STAT_GBX_KLASSE_5_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_5 |
| STAT_GBX_KLASSE_6_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_6 |
| STAT_GBX_KLASSE_7_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_7 |
| STAT_GBX_KLASSE_8_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_8 |
| STAT_GBX_KLASSE_9_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_9 |
| STAT_GBX_KLASSE_10_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_10 |
| STAT_GBX_KLASSE_11_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_11 |
| STAT_GBX_KLASSE_12_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_12 |
| STAT_GBX_KLASSE_13_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_13 |
| STAT_GBX_KLASSE_14_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_14 |
| STAT_GBX_KLASSE_15_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_15 |
| STAT_GBX_KLASSE_16_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_16 |
| STAT_GBX_KLASSE_17_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_17 |
| STAT_GBX_KLASSE_18_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_18 |
| STAT_GBX_KLASSE_19_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_19 |
| STAT_GBX_KLASSE_20_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_20 |
| STAT_GBX_KLASSE_21_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | GBX_Klasse_21 |

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
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| RSU_TEILNETZ_HV_STUETZUNG_ACTIVATION | 0x1075 | - | RID zur Aktivierung / Deaktivierung des Teilnetz: HV-Stützung während RSU-Aktivierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1075_R |
| CERTIFICATE_MANAGEMENT_START_CHECK | 0x10AB | - | Startet die detaillierte Überprüfung der steuergeräteindividuellen Zertifikate. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x10AB_R |
| FALLBACK_FIELD_MODE | 0x1100 | - | This function triggers the Mode change to Field Mode. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LCS | 0x1104 | - | Locking Configuration Switch | - | - | - | - | - | - | - | - | - | 2E | ARG_0x1104_D | - |
| SET_SECOC_COUNTER | 0x1105 | - | Setzt den Counterwert für eine spezifische SecOC dataID. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1105_R | - |
| GET_SECOC_COUNTER | 0x1106 | - | Liest den Counterwert für eine spezifische SecOC dataID aus. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1106_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PRODUKTIONSDATEN_SETZEN | 0x4002 | - | Schreibt die HWEL und Produktionsdaten im Bootmanager | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| _PRODUKTIONSDATEN_FLASHEN | 0x4003 | - | Flash die Produktionsdaten HWEL, Seriennummer, Produktionsdatum | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4003_D | - |
| _ECU_PARAMETER | 0x4004 | - | Ausgabe wichtiger interner ECU Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| TEST | 0x4005 | - | TestJob für Ergebnisse  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| RLS_OFFSET_COPY | 0x4007 | - | zur Kopieren des Winkeloffsets | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4007_D | - |
| HISTOGRAMM_EM1 | 0x4008 | - | Ausgabe EM-Histogramme, Satz 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008_D |
| STATUS_WHY_FIS | 0x4009 | - | Interne Ausgabe welcher Grund für den Fehlerspeicher vorliegt  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| _STATUS_CPU_LOAD | 0x400A | - | Interne CPU-Load Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| ACTIVE_ERROR_MESSAGE | 0x400A | - | DM: Persistentes aktivieren / deaktivieren / auslesen der aktiven Fehlermeldungen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x400A_R |
| HISTOGRAMM_IVTR_RESET | 0x400B | - | mit dem job kann man die Histrogramme von Inverter resetieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| HISTROGRAMM_EM_RESET | 0x400C | - | mit der Durchführung des Jobs werden die Histogramme von EM resetiert | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| HISTOGRAMM_EM2 | 0x400D | STAT_DUMMY_WERT | STAT_DUMMY | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DIAG_ERWEITERT | 0x400E | - | Statuswoerter einiger FuSi Funktionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| HISTOGRAMM_EM3 | 0x400F | - | Histrogramm von EM  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| HISTOGRAMM_IVTR1 | 0x4010 | - | Lesenjob um Inverterhistogramme auszugeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| _HW_CAL_SETZEN | 0x4013 | - | Übertragen der einzelnen HWCAL Parameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4013_D | - |
| _HW_CAL_FLASHEN | 0x4015 | - | Schreibt die HWCAL Daten permanent. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4015_D | - |
| _HW_CAL_DATEN_AKTUELL | 0x4016 | - | HW CAL Sensor Daten lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4016_D |
| ECUMODES_READ_MODE | 0x8002 | - | Auslesen des aktuellen ECU Modes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x8002_D |
| IM_CLIENT | 0xE3C0 | - | Zustand des EWS-Clients sowie der im EWS-Client gespeicherten EWS-Daten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3C0_D |
| IM_PUB_KEY | 0xE3C2 | STAT_PUB_KEY_CLIENT_DATA | Öffentlicher Schlüssel des EWS-DH-Clients im unkomprimierten ANSI x9.63 Format. | DATA | - | High | data[65] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IM_CLIENT_SK | 0xE3C3 | - | EWS Daten für EWS-Client/EWS-DH-Client | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE3C3_D | - |
| CPLD_VERSION | 0xE513 | - | Gibt die aktuelle Version und Unterversion der CPLD-SW zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE513_D |
| STROM | 0xE514 | - | Status Strom | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE514_D |
| TEMPERATUR | 0xE515 | - | Temperaturen Steuergerät Leistungselektronik.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE515_D |
| ELEKTRISCHE_MASCHINE | 0xE518 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE518_D |
| RLS_OFFSET_RESET | 0xE51A | - | Zurücksetzen des Rotorlagesensors (RLS) Winkels | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE51A_D | - |
| E_MASCHINE_MAX_DREHZAHL | 0xE51B | - | Auslesen der Absolutzeit im kritischen E-Maschinen Drehzahl Bereich | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE51B_D |
| UMRICHTER_SCHALTZUSTAND | 0xE51E | STAT_SCHALTZUSTAND_UMRICHTER | Schaltzustand der Leistungshalbleiter im Umrichter der Traktions-Elektromaschine (bit-codierter Wert) | 0-n | - | High | unsigned char | TAB_UMRICHTER_SCHALTZUSTAND | - | - | - | - | 22 | - | - |
| UMRICHTER_TEMPHISTOGRAMM | 0xE520 | - | Temperaturhistogramm Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE520_D |
| MONTAGE_MODUS | 0xE528 | - | Ansteuerung, Deaktivierung und Auslesen des Status vom Montagemodus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE528_D | RES_0xE528_D |
| SPANNUNG_VALUE | 0xE529 | - | Spannungswert lesen (interne Spannung Leistungselektronik, Zwischenkreisspannungs Wert, XMR Sensor ).  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE529_D |
| RLS_OFFSET | 0xE52C | - | Schreiben  oder Auslesen des Rotorlagesensors (RLS) Offsets Winkels | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE52C_D | RES_0xE52C_D |
| SENSOREN_GETRIEBE | 0xE530 | - | Sensorwerte der Getriebesensoren (Temperatur- und Drucksensoren) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE530_D |
| PBW_POSITION | 0xE531 | - | Position Parksperre | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE531_D |
| DREHZAHL_OELPUMPE | 0xE57C | STAT_GBX_OILPMP_SPEED_WERT | Drehzahl elektr. Getriebeölpumpe | - | - | Low | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CURRENT_GBXOILPMP | 0xE58C | STAT_CUR_GBX_OILPMP_WERT | Stromaufnahme der elektr. GBX Ölpumpe | mA | - | Low | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DREHZAHL_GBXOILPMP | 0xE58D | - | Vorgabe Drehzahl der elektr. Getriebeölpumpe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE58D_D | - |
| SOFTWARE_GEARBOX_OILPMP | 0xE58E | - | Softwareversion der elektr. Getriebeölpumpe für Bootloader und Applikationssoftware | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE58E_D |
| GBX_OILPMP | 0xE58F | STAT_GBX_OILPMP_WERT | Status GBX Ölpumpe | - | - | Low | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GBX_CONTROL_PARKLOCK | 0xE590 | - | Ansteuerung Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE590_D | - |
| TEMPERATUREN_THERMOMODELL_GBX | 0xE591 | - | Auslesen der internen Temperaturen des Thermomodells Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE591_D |
| BETRIEBSART_MODUS | 0xE597 | - | AKS Modus oder Freilauf Modus  von der E-Maschine lesen bzw. steuern | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE597_D | RES_0xE597_D |
| RLS | 0xE598 | - | Anlernen des Rotorlagesensors | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE598_D | RES_0xE598_D |
| ROTORWINKEL | 0xE5CB | - | Vorgeben oder Auslesen des Rotorwinkels für den Rotorpositionregler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE5CB_D | RES_0xE5CB_D |
| RLS_WINKELCODE | 0xE5CC | - | Auslesen oder Setzen des Rotorlagesensorwinkels nach Entschlüsseln | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE5CC_D | RES_0xE5CC_D |
| ROTOR_STROM_AKTUELL | 0xE5D6 | STAT_ROTORSTROM_WERT | Aktueller Wert des Rotorstroms  | A | - | Low | unsigned int | - | 50.0 | 65535.0 | 0.0 | - | 22 | - | - |
| ROTOR_STROM_VORGABE | 0xE5D7 | - | Steuern vom bestimmten Strom im Rotor  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5D7_D | - |
| STATOR_FREILAUF | 0xE5D8 | - | Separat Setzen vom Freilauf im Stator  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5D8_D | - |
| GBX_KLASSIERUNG_KUEHLMITTEL | 0xE5DA | - | Ergebnis Klassierung Getriebe Kühlmitteltemperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5DA_D |
| GBX_KLASSIERUNG_OELTEMPERATUR | 0xE5DC | - | Ergebnis Klassierung Getriebe Öltemperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5DC_D |
| DREHZAHL_VORGABE | 0xE5DF | - | Setzen der Soll Drehzahl bei bestimmten Gradienten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5DF_D | - |
| GBX_KLASSIERDATEN_LOESCHEN | 0xE5E7 | - | Löschen der GBX Klassierdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5E7_D | - |
| _STEUERN_CPU_LOAD_RESET | 0xF000 | - | CPU Lastwerte rücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TABELLE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Job nicht aktiv  |
| 0x01 | AKS aktiv  |
| 0x02 | FREILAUF aktiv  |
| 0xFF | Wert ungültig |

### TAB_ARG_CONTROL_GBX_PARKLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine manuelle Vorgabe Parksperre. |
| 0x01 | Parksperre schließen. |
| 0x02 | Parksperre öffnen. |

### TAB_DERATING_INFO

| WERT | TEXT |
| --- | --- |
| 0 | Derating torque due to HV-DC-voltage limit (motor mode)     SiEm |
| 1 | Derating torque due to HV-DC-voltage limit (generator mode)     SiEm |
| 2 | Derating torque due to HV-DC current limit (motor mode)     SiEm |
| 3 | Derating torque due to HV-DC current limit (generator mode)     SiEm |
| 4 | Derating torque due to gearbox protection     Gbx |
| 5 | Derating torque due to Emsc request (motor mode)     Emsc |
| 6 | Derating torque due to Emsc request (generator mode)     Emsc |
| 7 | Derating torque due to maximal power (motor mode)     SiEm |
| 8 | Derating torque due to maximal power (generator mode)     SiEm |
| 9 | - |
| 10 | Info: Fieldcontrol active     EM-Sonstiges |
| 11 | Derating torque due to temperature stator     EM |
| 12 | Derating torque due to temperature rotor     EM |
| 13 | Derating torque due to speed     EM |
| 14 | Derating torque due to IAC current limit reached     EM |
| 15 | - |
| 16 | - |
| 17 | Derating torque due to ARB limit     ARB |
| 18 | Derating torque due to calibration parameter (motor mode)     SiEm |
| 19 | Derating torque due to calibration parameter (generator mode)     SiEm |
| 20 | Derating AC-current due to temperature IGBT/Diode     INV |
| 21 | - |
| 22 | Derating AC-current due to temperature NTC     INV |
| 23 | Derating AC-current due to temperature coolant     INV |
| 24 | Derating torque due to switching voltage limit at IGBT     INV |
| 25 | Derating AC-current due to asymmetric phase load at low speed     INV |
| 26 | Info: low coolant flowrate     INV |
| 27 | - |
| 28 | Derating AC-current due to DC-plug     INV |
| 29 | Derating AC-current due to temperature gradient IGBT     INV |
| 30 | Derating AC-current due to temperature DC-link capacitor     INV |
| 0xFF | Wert ungültig |

### TAB_ECU_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Plant Mode |
| 0x01 | Engineering Mode |
| 0x02 | Field Mode |
| 0xFF | Wert ungültig |

### TAB_ELEKTRISCHE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Momentenregelung |
| 0x02 | Nullmomentenregelung |
| 0x03 | DC_Spannungsregelung |
| 0x05 | Drehzahlregelung_mit_Momentenvorsteuerung |
| 0x06 | IHVBCTL_mit_Momentenvorsteuerung |
| 0x08 | Isolationspruefung |
| 0x0A | Freilauf |
| 0x0B | HEAT_wird_initialisiert |
| 0x0C | Sicherer_Zustand |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0x0F | Zwischenkreisentladung |
| 0x10 | Kl30C_gezogen |
| 0x14 | Anlernen_aktiv |
| 0x15 | Locked_Standby |
| 0x16 | Werksjob_steuert |
| 0x1E | Shut_off_path_test_laeuft |
| 0x1F | Shut_off_path_test_beendet |
| 0x28 | Werksmodus_aktiv |
| 0xFD | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0xFE | Funktion_meldet_Fehler |
| 0xFF | Signal_unbefuellt |

### TAB_EM_ABSCHALT_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehlermodus |
| 0x01 | keine Momentenregelung aufgrund Systemfehler |
| 0x02 | Systemfehler aufgrund HVIL oder Crash |
| 0x03 | Systemfehler: Fehler SPI Kommunikation |
| 0x04 | Hardware ISC aufgrund Systemfehler |
| 0x05 | Keine Ansteuerung aufgrund Systemfehler |
| 0x08 | Software Schutz, AKS |
| 0x09 | Fehlerbedingter Leerlauf aufgrund Systemfehler |
| 0x0A | Fehlerbedingter ISC Modus aufgrund Gerätefehlers  |
| 0x0B | Fehlerbedingter Abschalt-Modus aufgrund Systemfehlers |
| 0x0C | 12 V Batterie unterhalb der Schwelle |
| 0xFF | Wert ungültig |

### TAB_EM_IST_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x03 | EM-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x07 | Position Sensor Offset Learning mode |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0C | Sicherer Zustand Fehlerbedingt |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0xFF | Wert ungültig |

### TAB_EM_SOLL_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x03 | DC-Spannungsregelung |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0x0D | Reserviert |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_EWS_CLIENT_AUTHENTICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | In diesem Alive-Zyklus noch keine Authentisierung durchgeführt |
| 0x01 | EWS Authentisierung läuft |
| 0x02 | EWS Authentisierung erfolgreich |
| 0x03 | EWS Authentisierung fehlerhaft |
| 0x11 | RES Authentisierung läuft |
| 0x12 | RES Authentisierung erfolgreich |
| 0x13 | RES Authentisierung fehlerhaft |
| 0x21 | DH-Testauthentisierung läuft |
| 0x22 | DH-Testauthentisierung erfolgreich |
| 0x23 | DH-Testauthentisierung fehlerhaft |
| 0xFF | ungültig |

### TAB_EWS_CLIENT_AUTH_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | In diesem Alive Zyklus noch keine Authentisierung durchgeführt |
| 0x01 | Authentisierung fehlerfrei |
| 0x02 | Authentisierung fehlgeschlagen, Response nicht authentisch |
| 0x03 | Authentisierung fehlgeschlagen, negative Response empfangen |
| 0x04 | Authentisierung fehlgeschlagen, Response Timeout |
| 0xFF | ungültig |

### TAB_EWS_CLIENT_INITIALIZED

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert (unverriegelt) |
| 0x01 | initialisiert (verriegelt) |
| 0x02 | DH-Client: Initialisierung läuft |
| 0xFF | ungültig |

### TAB_EWS_CLIENT_RELEASED

| WERT | TEXT |
| --- | --- |
| 0x00 | Motorlauf & Traktion gesperrt |
| 0x01 | Motorlauf & Traktion freigeschaltet, kurze Bestätigungszeit |
| 0x02 | Motorlauf & Traktion freigeschaltet, langeBestätigungszeit |
| 0x03 | Motorlauf ohne Traktion freigeschaltet, kurze Bestätigungszeit |
| 0x04 | Motorlauf ohne Traktion freigeschaltet, lange Bestätigungszeit |
| 0x10 | Gang und Parksperre gesperrt |
| 0x11 | Gang und Parksperre freigeschaltet |
| 0x20 | ELV gesperrt |
| 0x21 | ELV freigeschaltet |
| 0x30 | Traktion und Parksperre gesperrt |
| 0x31 | Traktion gesperrt, Parksperre freigeschaltet |
| 0x32 | Traktion freigeschaltet, kurze Bestätigungszeit. Parksperre gesperrt |
| 0x33 | Traktion freigeschaltet, lange Bestätigungszeit. Parksperre gesperrt |
| 0x34 | Traktion freigeschaltet, lange Bestätigungszeit. Parksperre freigeschaltet |
| 0x35 | Traktion freigeschaltet, lange Bestätigungszeit. Parksperre freigeschaltet |
| 0x40 | Traktion gesperrt |
| 0x41 | Traktion freigeschaltet, kurze Bestätigungszeit |
| 0x42 | Traktion freigeschaltet, lange Bestätigungszeit |
| 0xFF | ungültig |

### TAB_EWS_CLIENT_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Direktschreiben Client |
| 0x01 | Diffie Hellman Client |
| 0x02 | Direktschreiben & Diffie Hellman Client |
| 0xFF | ungültig |

### TAB_EWS_DATA_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden und 100% konsistent und Mehrfachablage in Ordnung |
| 0x02 | vorhanden und 100% konsistent aber Mehrfachablage eingeschränkt |
| 0x03 | vorhanden aber ggf. nicht konsistent |
| 0xFF | ungültig |

### TAB_EWS_GEN

| WERT | TEXT |
| --- | --- |
| 0x00 | EWS4 |
| 0x01 | EWS5 |
| 0x02 | EWS6 |
| 0x03 | EWS6 & RES |
| 0x04 | EWS6 GEN5 (EWS6.2) |
| 0x05 | EWS6 GEN5 (EWS6.2) & RES GEN5 |
| 0xFF | ungültig |

### TAB_EWS_WR_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CLR |
| 0x01 | WR_PLAIN |
| 0x10 | WR_CIPHER |
| 0xFF | ungültig |

### TAB_LCS_NUMBER

| WERT | TEXT |
| --- | --- |
| 0x00 | Service Pack functionality switch |
| 0x01 | SecOC by-pass switch |
| 0xFF | Wert ungültig |

### TAB_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montagemodus beendet |
| 0x01 | Montagemodus aktiv |
| 0xFF | Wert ungültig |

### TAB_POSITION_PBW_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Parksperre eingelegt |
| 0x02 | Parksperre ausgelegt |
| 0x03 | Zwischenposition |
| 0xFF | Wert ungültig |

### TAB_RLS_ANLERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Job nicht aktiv |
| 0x01 | RLS Anlernen Steuern |

### TAB_RLS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Job nicht aktiv |
| 0x01 | RLS Anlernen erfolgreich  |
| 0x02 | RLS Anlernen nicht erfolgreich  |
| 0xFF | Wert ungültig |

### TAB_RSU_ACTIVATION_HV_SUPPORT_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Activation of Partial Network for HV support during RSU successfully triggered |
| 0x01 | Activation of Partial Network for HV support during RSU not successfully triggered |
| 0xFF | Invalid value |

### TAB_RSU_DEACTIVATION_HV_SUPPORT_RETURNCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Deactivation of Partial Network for HV support during RSU successfully triggered |
| 0x01 | Deactivation of Partial Network for HV support during RSU not successfully triggered |
| 0xFF | invalid value |

### TAB_SFA_FEATURE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | INITIALLY_DISABLED |
| 0x01 | ENABLED |
| 0x02 | DISABLED |
| 0x03 | EXPIRED |
| 0xFF | INVALID_VALUE |

### TAB_SFA_FEATURE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | all Feature IDs |
| 0x01 | System Functions Feature-ID-Type: 00 |
| 0x02 | Application Feature-ID-Type: 01-FF |

### TAB_SFA_VALIDATION_STATUS

| WERT | VALIDATION_K | TEXT |
| --- | --- | --- |
| 0x00 | E_OK | Check successful |
| 0x01 | E_UNCHECKED | Check did not run yet. |
| 0x02 | E_MALFORMED | Format not correct. Could not parse data. |
| 0x03 | E_EMPTY | Data is needed but was not written yet. |
| 0x04 | E_ERROR | An Error occured. |
| 0x05 | E_SECURITY_ERROR | Signature check failed. |
| 0x06 | E_WRONG_LINKTOID | Link-to-ID doesn't match. |
| 0x07 | E_CHECK_RUNNING | Check is still running. |
| 0x08 | E_TIMESTAMP | Timestamp of creation too old or equal |
| 0x09 | E_VERSION | Token Version not supported |
| 0x0A | E_FEATUREID | Feature ID not supported |
| 0xFF | E_OTHER | Other error occured. |

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

### TAB_STATUS_BYTE_ENUM

| WERT | NAME | TEXT |
| --- | --- | --- |
| 0x00 | OK | Überprüfung erfolgreich. |
| 0x01 | UNCHECKED | Überprüfung noch nicht durchgeführt. |
| 0x02 | MALFORMED | Ein Formatfehler ist aufgetreten. |
| 0x03 | EMPTY | Keine Daten zur Prüfung vorhanden. |
| 0x04 | INCOMPLETE | Daten sind nicht vollständig. |
| 0x05 | SECURITY_ERROR | Signaturprüfung fehlgeschlagen. |
| 0x06 | WRONG_VIN17 | Bindings/Zertifikate passen nicht zur (ungeschützten) VIN17. |
| 0x07 | CHECK_RUNNING | Überprüfung läuft. |
| 0x08 | ISSUER_CERT_ERROR | Validierung des Zertifikats des Herausgebers fehlgeschlagen. |
| 0x09 | WRONG_ECU_UID | Validierung der ECU-UID fehlgeschlagen. |
| 0x0A | DECRYPTION_ERROR | Kein Decryption key gefunden. |
| 0x0B | OWN_CERT_NOT_PRESENT | Eigenes Zertifikat für Validierung nicht vorhanden. |
| 0x0C | OUTDATED | Veraltetes Item angegeben. |
| 0xFF | OTHER | Ein unbekannter Fehler ist aufgetreten. |

### TAB_STATUS_INDICATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung temporär inaktiv |
| 0x01 | Aktive Fehlermeldung aktiv |
| 0x02 | Aktive Fehlermeldung abgeschalten |
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

### TAB_UMRICHTER_SCHALTZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x0F | Unbekannt |

### TAB_UWB_SG_RESET_ART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Reset oder unbekannt |
| 0x01 | Einmaliger Reset |
| 0x02 | Permanenter Reset |
| 0xFF | Wert ungültig |

### TAB_0X706D

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_BSR_LCS_NUMBER

| WERT | TEXT | VALUETABLE |
| --- | --- | --- |
| 0x00 | SERVICE PACK FUNCTIONALITY SWITCH | TAB_SP_SWITCH |
| 0x01 | SECOC BY-PASS SWITCH | TAB_SECOC_BYPASS |
| 0xFF | INVALID VALUE | - |

### TAB_SP_SWITCH

| WERT | TEXT |
| --- | --- |
| 0x01 | SP2018 |
| 0x02 | SP2021 |
| 0xFF | Invalid value |

### TAB_SECOC_BYPASS

| WERT | TEXT |
| --- | --- |
| 0x01 | ON |
| 0x02 | OFF |
| 0xFF | Invalid value |

### TAB_RESETINFO_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0x21 | ESR1 reset |
| 0x22 | SMU reset |
| 0x23 | Software reset |
| 0x24 | STM0 reset |
| 0x25 | STM1 reset |
| 0x26 | STM2 reset |
| 0x28 | CB0 reset |
| 0x29 | CB1 reset |
| 0x2A | CB3 reset |
| 0x2B | EVR13 Regulator reset |
| 0x2C | EVR33 Regulator reset |
| 0x2D | Supply Watchdog reset |
| 0x2E | Standby Regulator reset |
| 0x2F | Tuning Protection reset |
| 0x30 | Software exception reset |
| 0x31 | OS Error |
| 0x3F | Combination of RSTSTAT resets |
| 0x40 | TLF_SYSFAIL_VOLTSELERR |
| 0x41 | TLF_SYSFAIL_OTF |
| 0x42 | TLF_SYSFAIL_VMONF |
| 0x43 | TLF_SYSFAIL_ABISTERR |
| 0x44 | TLF_SYSFAIL_INITF |
| 0x45 | TLF_INITERR_VMONF |
| 0x46 | TLF_INITERR_WWDF |
| 0x47 | TLF_INITERR_FWDF |
| 0x48 | TLF_INITERR_ERRF |
| 0x49 | TLF_INITERR_SOFTRES |
| 0x4A | TLF_INITERR_HARDRES |
| 0x5F | TLF Multiple |
| 0x60 | FUSI software error |
| 0x80 | Power ON |
| 0x81 | Debugger Reset |
| 0x82 | xETK Reset |
| 0x83 | Software commanded reset |
| 0xF0 | Reset is undefined |

### TAB_RESETINFO_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0x01 | Single Reset |
| 0x02 | Permanent Reset |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_CORE

| WERT | TEXT |
| --- | --- |
| 0x00 | Core 0 |
| 0x01 | Core 1 |
| 0x02 | Core 2 |
| 0xFF | - |

### TAB_RESETINFO_OSERRCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0x01 | OS_ACCESS |
| 0x02 | OS_CALLEVEL |
| 0x03 | OS_ID |
| 0x04 | OS_LIMIT |
| 0x05 | OS_NOFUNC |
| 0x06 | OS_RESOURCE |
| 0x07 | OS_STATE |
| 0x08 | OS_VALUE |
| 0x09 | OS_QUEUE_OVERFLOW |
| 0x0A | OS_DISABLEDINT |
| 0x0B | OS_SYS_ERROR |
| 0x0C | OS_SERVICEID |
| 0x0D | OS_ILLEGAL_ADDRESS |
| 0x0E | OS_PARAM_POINTER |
| 0x0F | OS_MISSINGEND |
| 0x10 | OS_STACKFAUL |
| 0x11 | OS_PROTECTION_MEMORY |
| 0x12 | OS_PROTECTION_TIME |
| 0x13 | OS_PROTECTION_ARRIVAL |
| 0x14 | OS_PROTECTION_LOCKED |
| 0x15 | OS_PROTECTION_EXCEPTION |
| 0x16 | OS_UNHANDLED_INT |
| 0x17 | OS_CALL_SEQUENCE |
| 0x18 | OS_NESTING_LEVEL |
| 0x19 | OS_ERROR_OVERFLOW |
| 0x1A | OS_CORE |
| 0x1B | OS_INTERFERENCE_DEADLOCK |
| 0x1C | OS_NESTING_DEADLOCK |
| 0x1D | OS_SPINLOCK |
| 0x1E | OS_SYS_INTERNAL |
| 0xFF | ungueltiger Wert |

### TAB_RESETINFO_STORED

| WERT | TEXT |
| --- | --- |
| 0x00 | RESET NOT STORED |
| 0x01 | RESET ALREADY STORED |
| 0x02 | RESET STORE ERROR |
| 0x12 | FLASH WRITE FAILED |
| 0x22 | FLASH INIT FAILED |
| 0x42 | FLASH NO SPACE |
