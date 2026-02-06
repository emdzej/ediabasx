# eme_g12.prg

## General

|  |  |
| --- | --- |
| File | eme_g12.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 211 |
| Origin | BMW EA-441 Moritz_Haellfritzsch |
| Revision | 14.005 |
| Author | MAGNA-TELEMOTIVE-GMBH EE-420 Sewerys |
| ECU Comment | I-420 SGBD nach neuem SOP Terminplan |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromotor Elektronik |  |  |
| ORIGIN | string | BMW EA-441 Moritz_Haellfritzsch |  |  |
| REVISION | string | 14.005 |  |  |
| AUTHOR | string | MAGNA-TELEMOTIVE-GMBH EE-420 Sewerys |  |  |
| COMMENT | string | I-420 SGBD nach neuem SOP Terminplan |  |  |
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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

### IS_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $20 dataIdentifier UDS  : $00 alle Info-Meldungen anschließend UDS  : $20 dataIdentifier UDS  : $nn Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME, EME20, AE, REME, EMET, EMEZ ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

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
| 0x4C10 | Klimabedieneinheit | 1 |
| 0x4C20 | Klimabedieneinheit Ext | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4F88 | Elektrischer Zuheizer PTC 48V | 1 |
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
| 0x6730 | Kältekreislauf Dreiwegeventil 1 | 1 |
| 0x6740 | Unbelüfteter Innenraumtemperaturfühler 1 | 1 |
| 0x6750 | Waschventilblock | 1 |
| 0x6760 | Diskrete Klima Erweiterung | 1 |
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
| 0x7E01 | Ultraschallsensor Türgriff vorne links | 1 |
| 0x7E02 | Ultraschallsensor Türgriff hinten links | 1 |
| 0x7E03 | Ultraschallsensor Schweller A-Säule links | 1 |
| 0x7E04 | Ultraschallsensor Schweller B-Säule links | 1 |
| 0x7E05 | Ultraschallsensor Schweller B1-Säule links | 1 |
| 0x7E06 | Ultraschallsensor Schweller B2-Säule links | 1 |
| 0x7E07 | Ultraschallsensor Schweller C-Säule links | 1 |
| 0x7E08 | Ultraschallsensor Türgriff vorne rechts | 1 |
| 0x7E09 | Ultraschallsensor Türgriff hinten rechts | 1 |
| 0x7E0A | Ultraschallsensor Schweller A-Säule rechts | 1 |
| 0x7E0B | Ultraschallsensor Schweller B-Säule rechts | 1 |
| 0x7E0C | Ultraschallsensor Schweller B1-Säule rechts | 1 |
| 0x7E0D | Ultraschallsensor Schweller B2-Säule rechts | 1 |
| 0x7E0E | Ultraschallsensor Schweller C-Säule rechts | 1 |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0XADCB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HV_SYSTEM_HERUNTERFAHREN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Herunterfahren HV System wird eingeleitet: 0 = Nicht herunterfahren; 1 = Herunterfahren |
| HV_SYSTEM_HOCHFAHREN_ERNEUT_VERSUCHEN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Einleitung eines neuen Versuchs das HV-System hochzufahren, wenn HV-System fehlerbedingt heruntergefahren ist: 0 = Nicht hochfahren; 1 = Hochfahren |

### ARG_0XADCC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_DCDC_VORGABEN | + | - | 0-n | high | unsigned char | - | TAB_DIAG_DCDC_VORGABEN | - | - | - | - | - | Übernahme der Vorgaben des Diagnosejobs für die Steuerung des DC/DC-Wandlers |
| SOLL_BETRIEBSART | + | - | 0-n | high | unsigned char | - | TAB_HVPM_SOLL_BETRIEBSART | - | - | - | - | - | Soll-Betriebsart |
| SOLL_SPANNUNG_12V | + | - | V | high | unsigned int | - | - | 64.0 | 1.0 | 0.0 | 10.5 | 15.5 | Soll-Spannung auf 12V Seite |
| MIN_SPANNUNG_HV | + | - | V | high | unsigned int | - | - | 64.0 | 1.0 | 0.0 | 100.0 | 400.0 | Minimal zulässige HV Spannung |
| HV_LEISTUNGSANFORDERUNG | + | - | W | high | signed int | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 3200.0 | HV-Leistungsanforderung an den Leistungskoordinator |

### ARG_0XADCF_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEHISTOGRAM_LOESCHEN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen des Histogramms und Zählers aller Ladevorgänge: 0 = Nein; 1 = Ja |

### ARG_0XADD0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAEUFIGKEIT_LADEHISTORIE_LOESCHEN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen der Historie für die letzten 4 Ladevorgänge: 0 = Nein; 1 = Ja |

### ARG_0XADE5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_KUEHLMITTELTEMPERATUR_MITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_KUEHLMITTELTEMPERATUR | - | - | - | - | - | Auswahl des Kühlmitteltemperatur-Mittelwert |

### ARG_0XADE6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_EM_DREHMOMENTMITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_DREHMOMENT_HUB | - | - | - | - | - | Auswahl des Drehmomentmittelwerts |

### ARG_0XADE7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EM_DREHZAHLMITTELWERT | + | - | 0-n | high | unsigned char | - | TAB_HISTOGRAMM_EMASCHINE_DREHZAHL_HUB | - | - | - | - | - | Auswahl Drehzahlmittelwert |

### ARG_0XADE8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RUECKSETZEN_SZE_WERTE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzen SZE Werte: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### ARG_0XADE9_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAUSCH_REGISTRIEREN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Keinen ZSE Tausch registieren; 1 = ZSE Tausch registieren |

### ARG_0XADEA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOC_REGELUNG_LEISTUNG | + | - | W | high | signed long | - | - | 1.0 | 1.0 | 0.0 | -32768.0 | 32768.0 | Leistung für SOC Regelung |
| SOC_REGELUNG_DREHZAHL_EM1 | + | - | 1/min | high | signed long | - | - | 1.0 | 1.0 | 0.0 | -32768.0 | 32767.0 | Drehzahl für Elektromaschine 1 |
| SOC_REGELUNG_VM_START | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Starten des Verbrennungsmotors: 0 = kein Start; 1 = Start |

### ARG_0XADEB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH_DREHZAHL | + | - | 0-n | high | unsigned char | - | TAB_DREHZAHL_EM_STUETZ | - | - | - | - | - | Auswahl Drehzahlbereichen, in denen die Traktions-Elektromaschine (geordnet nach Drehmoment und Drehzahl) verweilt |

### ARG_0XADED_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_LEISTUNGSMESSUNG_PHEV | + | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_SETZEN | - | - | - | - | - | Auswahl Modus für Leistungsmessung PHEV |

### ARG_0XADF4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADFB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST_WERKSMODUS_PHEV | + | - | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV | - | - | - | - | - | Werksmodus PHEV setzen |

### ARG_0XDB47_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANFORDERUNG_AC_I_LIMIT_AMPERE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen:  0 = Kein Setzen;  1 = Setzen; |
| AC_STROM_LIMIT_AMPERE | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 64.0 | Stromgrenze für AC-Laden |

### ARG_0XDE19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANZAHL_BREMSBETAETIGUNG | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Bremsbetätigungen der ELUP |
| LAUFZEIT_ELUP | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Laufzeit der ELUP |
| ANLAEUFE_ELUP | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Anläufe der ELUP |

### ARG_0XDE23_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | - | - | siehe Tabelle |

### ARG_0XDE93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | - | - | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | - | - | Temperatur des ELUP-Treibers |

### ARG_0XDF18_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Änderung: 0 = Nicht löschen; 1 = NVRAM löschen |

### ARG_0XDF19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 1 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 2 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 3 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 4 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 5 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_6_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 6 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 7 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 8 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_9_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 9 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_10_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 10 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_11_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 11 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_12_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 12 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_13_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 13 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_14_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 14 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_15_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 15 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_16_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 16 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_17_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 17 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_18_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 18 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_19_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 19 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_20_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 20 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_21_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 21 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_22_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 22 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_23_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 23 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_24_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 24 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_25_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 25 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_26_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 26 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_27_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 27 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_28_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 28 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_29_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 29 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_30_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 30 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_31_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 31 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_32_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 32 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_33_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 33 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_34_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 34 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_35_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 35 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_36_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 36 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_37_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 37 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_38_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 38 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_39_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 39 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_40_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 40 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_41_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 41 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_42_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 42 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_43_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 43 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_44_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 44 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_45_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 45 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_46_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 46 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_47_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 47 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_48_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 48 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_49_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 49 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_50_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 50 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_51_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 51 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_52_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 52 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_53_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 53 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_54_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 54 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_55_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 55 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_56_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 56 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_57_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 57 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_58_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 58 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_59_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 59 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_60_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 60 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_61_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 61 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_62_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 62 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_63_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 63 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_64_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 64 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_65_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 65 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_66_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 66 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_67_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 67 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_68_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 68 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_69_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 69 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_70_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 70 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_71_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 71 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_72_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 72 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_73_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 73 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_74_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 74 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_75_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 75 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_76_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 76 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_77_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 77 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_78_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 78 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_79_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 79 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_80_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 80 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_81_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 81 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_82_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 82 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_83_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 83 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_84_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 84 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_85_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 85 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_86_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 86 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_87_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 87 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_88_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 88 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_89_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 89 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_90_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 90 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_91_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 91 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_92_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 92 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_93_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 93 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_94_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 94 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_95_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 95 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_96_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 96 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_97_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 97 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_98_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 98 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_99_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 99 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_100_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 100 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_101_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 101 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_102_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 102 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_103_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 103 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_104_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 104 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_105_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 105 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_106_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 106 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_107_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 107 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_108_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 108 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_109_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 109 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_110_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 110 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_111_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 111 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_112_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 112 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_113_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 113 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_114_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 114 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_115_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 115 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_116_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 116 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_117_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 117 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_118_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 118 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_119_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 119 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_120_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 120 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_121_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 121 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_122_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 122 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_123_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 123 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_124_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 124 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_125_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 125 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_126_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 126 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_127_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 127 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_128_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Element 128 aus Array des NVRAM-Spiegels |

### ARG_0XDF48_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANFORDERUNG_AC_I_LIMIT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen: 0 = Kein Setzen; 1 = Setzen |
| AC_LOW_I_LIMIT | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_LOW | - | - | - | - | - | Stromgrenze für AC-Low Laden |
| AC_HIGH_I_LIMIT | 0-n | high | unsigned char | - | TAB_AC_I_LIMIT_HIGH | - | - | - | - | - | Stromgrenze für AC-High Laden |

### ARG_0XDF4A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_WERKSLADEMODUS_NR | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS_WERK | - | - | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_ZIEL_SOC_WERKSLADEMODUS_WERT | % | high | unsigned int | - | - | 512.0 | 1.0 | 0.0 | 0.0 | 100.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### ARG_0XDF51_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### ARG_0XDF5C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Schwingungdämpfung: 0 = nicht deaktivieren; 1 = deaktivieren |

### ARG_0XDF5D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl Aktion: 0 = nicht zurücksetzen; 1 = zurücksetzen |

### ARG_0XDFB4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKSETZEN_HISTOGRAMM_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Auswahl: 0 = Keine Aktion; 1 = Rücksetzen |

### ARG_0XDFE0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_REGELUNG_WERK_ZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Regelung nicht aktiv 0x01: Regelung aktiv |
| STAT_SOC_REGELUNG_WERK_AUSGEWAEHLTER_SOC | % | high | signed long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabewert absoluter SOC als Vorgabe für SOC Regelung |

### BF_FEHLER_STATUS_DCDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_DCDC_HV_UNTERSPANNUNG | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Bit 0: Abschaltung aufgrund zu geringer HV-Spannung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DCDC_HV_UEBERSPANNUNG | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Bit 1: Abschaltung aufgrund zu hoher HV-Spannung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DCDC_UEBERTEMPERATUR | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Bit 2: Abschaltung aufgrund zu hoher Temperatur: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DCDC_BAUTEILSCHUTZ | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Bit 3: Abschaltung durch Bauteilschutzfunktion: 0=Nicht aktiv; 1=Aktiv |

### BF_GRUND_LADEUNTERBRECHUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_LADEUNTERBRECHUNG_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Bit 0: Gewalttrennung des Steckers (konduktiv) / Thermische Überlastung (Induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Bit 1: AC-Spannung fehlt oder Netzverbindung instabil: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Bit 2: Stecker nicht verriegelt (konduktiv) / AC-Überstrom (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Bit 3: DC-Unterspannung (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Bit 4: DC-Überspannung (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Bit 5: DC-Überstrom (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Bit 6: Lebendes Objekt erkannt (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Bit 7: Kommunikation unterbrochen (induktiv): 0=Nicht aktiv; 1=Aktiv |

### BF_HV_START_FEHLER

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_HV_START_FEHLER_ISO_WARN | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Isolationswarnung: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_ISO_FEHLER | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Isolationsfehler: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_EINFACHER_SCHUETZKLEBER | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Einfacher Schützkleber: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_DOPPELTER_SCHUETZKLEBER | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Doppelter Schützkleber: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_INTERLOCK_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Interlock-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_INTERLOCK_FEHLER | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Interlock-Fehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_SERVICE_DISCONNECT | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | Service Disconnect abgesteckt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_6_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV-Batterie Kategorie-6-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_6_FEHLER | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | HV-Batterie Kategorie-6-Fehler: 0 = Nicht aktiv, 1 = Aktiv  |
| STAT_BF_HV_START_FEHLER_KAT_7_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | HV-Batterie Kategorie-7-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_7_FEHLER | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | HV-Batterie Kategorie-7-Fehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HVB_KOMM_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | HV-Batterie Kommunikationsfehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HVB_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | HV-Batterie Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_LE_KOMM_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Leistungselektronik Kommunikationsfehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_LE_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Leistungselektronik Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KLIMA_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Klimaanlage Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_ENTLADESCHUTZ | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | Entladeschutz aktiv: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_CRASH_SCHWERE_1 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Crash der Schwere 1 erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_CRASH_SCHWERE_2 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Crash der Schwere 2 erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_FLASH_ECU | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Flashen der ECU erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HV_AUS | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | HV-System sicher heruntergefahren und spannungsfrei: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_NACHLAUF_KL30B | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Nachlaufzeit der Klemme 30b kritisch: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_REQUEST_HV_POWERDOWN_JOB | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Anforderung zum Herunterfahren des HV-Systems aufgrund von Diagnose-Job: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_REQUEST_HV_POWERDOWN | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Anforderung zum Herunterfahren des HV-Systems aufgrund von Power-Down-Mode: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT1_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | HV-Batterie Kategorie-1-Fehlerverdacht: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT1_FEHLER | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | HV-Batterie Kategorie-1-Fehler: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT5_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | HV-Batterie Kategorie-5-Fehlerverdacht: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT5_FEHLER | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | HV-Batterie Kategorie-5-Fehler: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_BATTERIELOSER_BETRIEB | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | Batterieloser Betrieb: 0=Nicht angefordert; 1=Angefordert |
| STAT_BF_HV_START_FEHLER_ABSCHALTUNG_FID | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | HV-System-Abschaltung per FID: 0=Nicht angefordert; 1=Angefordert |

### BF_STATUS_LSC_AUSWAHL_LADEN_MODUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0 = Laden auf Abfahrtszeit aktiv; 1 = Immer_Sofort_Laden |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0 = Günstig Laden inaktiv; 1 = Günstig Laden aktiv (wenn Laden_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt) |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0 = Intelligent Laden inaktiv; 1 = Intelligent Laden aktiv, wenn Lademodus_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt |

### BF_STAT_ISO_ERROR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_ISO_ERROR_DCDC_WANDLER | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | DCDC-12V-Wandler befindet sich im Buck-Mode: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EMASCHINE_AKS | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Elektromaschine ist in AKS kommandiert: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EMASCHINE_FREILAUF | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Elektromaschine ist in Freilauf kommandiert: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_LADEELEKTRONIK | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Ladeelektronik wurde als aktiv erkannt: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EKMV | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | eKMV ist aktiv: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_EDH | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | eDH ist aktiv: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_HV_BATTERIE_ISOWARNUNG | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | HV-Batterie signalisiert eine Isolationswarnung: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_HV_BATTERIE_ISOFEHLER | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV-Batterie signalisiert einen Isolationsfehler: 0=Nicht aktiv; 1=Aktiv |

### BF_STAT_VERSORGUNG_DCDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DCDC_12V_BN_VERSORGUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 12V-Bordnetz-Versorgung: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_ST_DCDC_WANDLER_AUSFALL | 0/1 | high | unsigned char | 0x02 | - | - | - | - | DC/DC-Wandler Ausfall: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_ST_DCDC_HV_VERFUEGBARKEIT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Eingeschränkte HV-Energieverfügbarkeit / Anfrage Energiesparen: 0 = Nicht aktiv; 1 = Aktiv |

### BF_VERHINDERUNG_SPANNUNGSFREIHEIT_ANZEIGE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_EKMV_SCHWELLE | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Spannung des elektrischen Kältemittelverdichters über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_INVERTER | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Spannung des Inverters der Leistungselektronik: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_INVERTER_SCHWELLE | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Spannung des Inverters der Leistungselektronik über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_HVB | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Spannung der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_HVB_SCHWELLE | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Spannung der HV-Batterie über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_DCDC | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | HV-Spannung des HV DC/12V DC Wandlers: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_DCDC_SCHWELLE | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV Spannung HV DC/12V DC Wandler über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_GESCHWINDIGKEIT | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | Fahrzeuggeschwindigkeit: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_GESCHWINDIGKEIT_SCHWELLE | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | Fahrzeuggeschwindigkeit über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_DREHZAHL_EM | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | Drehzahl der Elektromaschine: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_DREHZAHL_EM_SCHWELLE | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | Drehzahl der E-Maschine über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_LADESTECKER_STATUS | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | Ladestecker ist gesteckt oder Status Ladestecker ist unbekannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_HVB_STATUS | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Interlock Status der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_HVB_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Interlock der HV-Batterie geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_LE_STATUS | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Status HV Interlock ermittelt in der Leistungselektronik: 0 = Gültig, 1 = Ungültig  |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_LE_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | HV Interlock der Leistungselektronik geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SERVICE_DISCONNECT | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Status Service Disconnect: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SERVICE_DISCONNECT_GESTECKT | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Service Disconnect ist gesteckt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Status der Schütze in der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | Schütze der HV-Batterie sind geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZKLEBER_HVB | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Status Schützkleber der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB_VERKLEBT | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Schütze der HV-Batterie sind verklebt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_KLEMME_15 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Status der emulierten Klemme 15: 0 = Nicht aktiv, 1 = Aktiv |

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
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x023A00 | Energiesparmode aktiv | 0 | - |
| 0x023A08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023A09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x023A0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x023A0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x023A0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x023A0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF3A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030E70 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Hardware Version falsch | 0 | - |
| 0x030E71 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Software Version falsch | 0 | - |
| 0x030E72 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): falsche Parameterdaten | 0 | - |
| 0x030E73 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Zähler Batteriewechsel lesen | 0 | - |
| 0x030E74 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Checksumme Parameterdaten lesen | 0 | - |
| 0x030E75 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Fehlerzähler lesen | 0 | - |
| 0x030E76 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service HW-Version lesen | 0 | - |
| 0x030E77 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Ruhestromhistogramme lesen | 0 | - |
| 0x030E78 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Parameter Download | 0 | - |
| 0x030E79 | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Seriennummer lesen | 0 | - |
| 0x030E7A | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service SW-Version lesen | 0 | - |
| 0x030E7B | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service Zellspannung lesen | 0 | - |
| 0x030E7C | Intelligenter Batteriesensor 2 (Zustarteinrichtung): Kommunikationsfehler - Service ZUSBAU lesen | 0 | - |
| 0x030EC1 | HVPM - Laden - Ausfall Ladegerät | 1 | - |
| 0x030EC2 | HVPM - Laden - Ladegerät - Degradation-Abbruch | 1 | - |
| 0x030EC3 | HVPM - Laden - Degradation Ladegerät | 1 | - |
| 0x030EC6 | HVPM - Laden - Ausfall DC/DC-Wandler | 1 | - |
| 0x030EC7 | HVPM - Laden - Vollladen nicht möglich | 1 | - |
| 0x030EC8 | HVPM - Laden - Ladestörung da Wegfall AC-Spannung | 1 | - |
| 0x030EC9 | HVPM - Laden - AC-Spannung ohne Ladebereitschaft | 1 | - |
| 0x030ECA | HVPM - Laden - Kommunikationsausfall HV-Speicher | 1 | - |
| 0x030ECB | HVPM - Laden - Kommunikationsausfall zum Ladegerät | 1 | - |
| 0x030ECD | HVPM - Laden - Ladefehler aufgrund Zustandsautomaten | 1 | - |
| 0x030ECE | HVPM - Laden - Störung | 1 | - |
| 0x030ECF | HVPM - Laden - Ladekabel - Verriegelung | 1 | - |
| 0x030ED0 | HVPM - Laden - Werksladen gesetzt | 1 | - |
| 0x030ED1 | HVPM - Laden - Klappe der Lade-Buchse offen | 1 | - |
| 0x030EDC | HVPM - Leistungskoordinator - Leistungsfreigaben DC/DC überschritten | 1 | - |
| 0x030EDD | HVPM - Leitungskoordinator - Leistungsfreigaben DC/DC unterschritten | 0 | - |
| 0x030EE0 | HVPM - Start - Abschaltgrund - Crash Schwere 1 | 1 | - |
| 0x030EE1 | HVPM - Start - Abschaltgrund - Crash Schwere 2 | 1 | - |
| 0x030EE3 | HVPM - Start - Abschaltgrund - System-Interlock | 1 | - |
| 0x030EE4 | HVPM - Start-Isolationsüberwachung - ISO-Fehler | 1 | - |
| 0x030EE6 | HVPM - Start - HV-Speicher - Einfacher Schützkleber | 1 | - |
| 0x030EE7 | HVPM - Start - HV-Speicher - Doppelter Schützkleber | 1 | - |
| 0x030EE8 | HVPM - Start - Signalausfall - Klimafunktionen | 1 | - |
| 0x030EE9 | HVPM - Start - Signalausfall - Antriebselektronik | 1 | - |
| 0x030EEA | HVPM - Start - Signalausfall  - HV-Batterie | 1 | - |
| 0x030EEB | HVPM - Start - HV-Bereitschaft nicht möglich trotz Anforderung | 1 | - |
| 0x030EEC | HVPM - Start - HV-System sicher abgeschaltet | 1 | - |
| 0x030EED | HVPM - Start - Powerdown-Fehler - Entladezeit-Überschreitung | 1 | - |
| 0x030EF4 | HVPM - Start - HV-System sicher abgeschaltet - China | 1 | - |
| 0x030EF5 | HVPM - Induktives Laden - Ladegerät - Degradation | 1 | - |
| 0x030EF6 | HVPM - Induktives Laden - Ladegerät - Abbruch aufgrund Degradation | 1 | - |
| 0x030EF7 | HVPM - Induktives Laden - Ladefehler | 1 | - |
| 0x030EF8 | HVPM - Induktives Laden - Ladestörung - Lebendes Objekt erkannt | 1 | - |
| 0x030EF9 | HVPM - Induktives Laden - Infrastruktur - Verlust AC-Spannung | 1 | - |
| 0x030EFA | HVPM - Induktives Laden - Aktivierung AC-Laden nicht möglich | 1 | - |
| 0x030EFB | HVPM - Induktives Laden - Aktivierung Induktiv-Laden nicht möglich | 1 | - |
| 0x030EFC | HVPM - Induktives Laden - Ladegerät - Kommunikationsfehler | 1 | - |
| 0x030EFD | HVPM - Induktives Laden - Ladegerät - Fehler | 1 | - |
| 0x030F00 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - China | 1 | - |
| 0x030F01 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - Version 2 | 1 | - |
| 0x030F02 | HVPM - Start-Isolationsüberwachung - ISO-Warnung | 1 | - |
| 0x030F03 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - China - Version 2 | 1 | - |
| 0x030F85 | DC/DC-Wandler - HV Stromsensor - Kurzschluss nach Plus | 0 | - |
| 0x030F86 | DC/DC-Wandler - HV Stromsensor - Kurzschluss nach Masse | 0 | - |
| 0x030F87 | DC/DC-Wandler - HV Stromsensor - Oberer Schwellwert überschritten | 0 | - |
| 0x030F88 | DC/DC-Wandler - HV Stromsensor - Unterer Schwellwert unterschritten | 0 | - |
| 0x030F89 | DC/DC-Wandler - HV-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x030F8A | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x030F8B | DC/DC-Wandler - LV Spannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x030F8C | DC/DC-Wandler - LV Spannungssensor - Oberer Schwellwert überschritten | 0 | - |
| 0x030F8D | DC/DC-Wandler - LV Spannungssensor - Unterer Schwellwert unterschritten | 0 | - |
| 0x030F8E | DC/DC-Wandler - LV-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x030F94 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Plus | 0 | - |
| 0x030F95 | DC/DC-Wandler - Temperatursensor - Kurzschluss nach Masse | 0 | - |
| 0x030F96 | DC/DC-Wandler - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x030F97 | DC/DC-Wandler - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x030F98 | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler | 0 | - |
| 0x030F9A | DC/DC-Wandler - Masseband-Diagnose - Kurzschluss Messleitung nach Masse | 0 | - |
| 0x030F9B | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Kurzschluss nach Plus | 0 | - |
| 0x030F9D | DC/DC-Wandler - Masseband-Diagnose - Eingangsspannung - Oberer Schwellenwert überschritten | 0 | - |
| 0x030FA0 | DC/DC-Wandler - Masseband-Diagnose - starke Alterung festgestellt - Abschaltung | 0 | - |
| 0x030FA1 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt | 0 | - |
| 0x030FA2 | DC/DC-Wandler - Masseband-Diagnose - Alterung festgestellt - Leistung reduziert | 0 | - |
| 0x031040 | ELUP - Control - Förderleistung mech. Pumpe zu gering | 0 | - |
| 0x031041 | ELUP - Control - Rückschlagventil - Leckage erkannt | 0 | - |
| 0x031042 | ELUP - Control - max. Laufzeit überschritten | 0 | - |
| 0x031043 | ELUP - Control - Förderleistung zu gering | 0 | - |
| 0x031044 | ELUP - Control - Unterdruckniveau zu gering | 0 | - |
| 0x031045 | ELUP - Control - Vakuumsensor - außerhalb gülten Bereich | 0 | - |
| 0x03104A | ELUP - Aktuator - Kurzschluss nach Masse | 0 | - |
| 0x03104B | ELUP - Aktuator - Kurzschluss nach Plus | 0 | - |
| 0x03104C | ELUP - Aktuator - Pumpe blockiert | 0 | - |
| 0x031053 | ELUP - Aktuator - Steckerverbindung - offene Leitung | 0 | - |
| 0x031055 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x031056 | ELUP - Ausgangsspannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x031057 | ELUP - Ausgangsspannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031058 | ELUP - Ausgangsspannungssensor - Spannung unplausibel | 0 | - |
| 0x031059 | ELUP - Ausgangsspannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03105B | ELUP - Eingangsspannungssensor - Kurzschluss nach Masse | 0 | - |
| 0x03105C | ELUP - Eingangsspannungssensor - Kurzschluss nach Plus | 0 | - |
| 0x03105D | ELUP - Eingangsspannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03105E | ELUP - Eingangsspannungssensor - Spannung unplausibel | 0 | - |
| 0x03105F | ELUP - Eingangsspannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031063 | ELUP - Stromsensor 1 - Kurzschluss nach Masse | 0 | - |
| 0x031064 | ELUP - Stromsensor 1 - Kurzschluss nach Plus | 0 | - |
| 0x031065 | ELUP - Stromsensor 1 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031066 | ELUP - Stromsensor 1 - unplausibel | 0 | - |
| 0x031067 | ELUP - Stromsensor 1 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031077 | ELUP - Übertemperatur | 0 | - |
| 0x031078 | ELUP - Treiber - Schaltet nicht durch | 0 | - |
| 0x03107A | ELUP - Treiber - Strom zu hoch | 0 | - |
| 0x031100 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Masse | 0 | - |
| 0x031101 | KV-IR - Kältemittelabsperrventil - Kurzschluss nach Plus oder Übertemperatur | 0 | - |
| 0x031102 | KV-IR - Kältemittelabsperrventil - Leitungsunterbrechung | 0 | - |
| 0x031103 | KV-IR - Kältemittelabsperrventil - Plausibilitätsfehler | 0 | - |
| 0x031200 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase U | 0 | - |
| 0x031201 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase V | 0 | - |
| 0x031202 | EM 1 Verbrennernah - Phasenleitungen - Offene Leitung Phase W | 0 | - |
| 0x031204 | EM 1 Verbrennernah - Kommunikation - Erkennung einer ungültig anforderten Betriebsart | 1 | - |
| 0x031205 | EM 1 Verbrennernah - Rotorlagesensor - Amplitudendifferenz unplausibel | 0 | - |
| 0x031206 | EM 1 Verbrennernah - Rotorlagesensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031208 | EM 1 Verbrennernah - Rotorlagesensor - Überdrehzahl | 0 | - |
| 0x031209 | EM 1 Verbrennernah - Rotorlagesensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03120A | EM 1 Verbrennernah - Rotorlagesensor - Winkeloffset unplausibel oder nicht angelernt | 0 | - |
| 0x03120C | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x03120D | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x031210 | EM 1 Verbrennernah - Rotorlagesensor - Cosinusleitung - Offene Leitung | 0 | - |
| 0x031212 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Plus | 0 | - |
| 0x031213 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Kurzschluss nach Masse | 0 | - |
| 0x031214 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Oberer Schwellenwert überschritten | 0 | - |
| 0x031215 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031216 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Offene Leitung | 0 | - |
| 0x031217 | EM 1 Verbrennernah - Rotorlagesensor - Erregerleitung - Signal unplausibel | 0 | - |
| 0x031218 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Plus | 0 | - |
| 0x031219 | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Kurzschluss nach Masse | 0 | - |
| 0x03121C | EM 1 Verbrennernah - Rotorlagesensor - Sinusleitung - Offene Leitung | 0 | - |
| 0x03121E | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Plus | 0 | - |
| 0x03121F | EM 1 Verbrennernah - Temperatursensor 1 - Kurzschluss nach Masse | 0 | - |
| 0x031220 | EM 1 Verbrennernah - Temperatursensor 1 - Oberer Schwellenwert überschritten | 0 | - |
| 0x031221 | EM 1 Verbrennernah - Temperatursensor 1 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031223 | EM 1 Verbrennernah - Temperatursensor 1 - Signal eingefroren (Stuck) | 0 | - |
| 0x031224 | EM 1 Verbrennernah - Temperatursensor 1 - Signal unplausibel nach Kaltstart | 0 | - |
| 0x031225 | EM 1 Verbrennernah - Temperatursensor 1 - Gradient unplausibel | 0 | - |
| 0x031226 | EM 1 Verbrennernah - Temperatursensor - Übertemperatur | 0 | - |
| 0x031229 | EM 1 Verbrennernah - Wirkungsgrad - unplausibel (motorisch oder generatorisch) | 0 | - |
| 0x031400 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Oberer Schwellenwert überschritten | 0 | - |
| 0x031401 | Inverter 1 Verbrennernah - Spannung Gatetreiber - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031404 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x031405 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031407 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - HW Überspannung | 0 | - |
| 0x031408 | Inverter 1 Verbrennernah - Spannungssensor - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03140B | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Oberer Schwellenwert überschritten | 0 | - |
| 0x03140C | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03140D | Inverter 1 Verbrennernah - Spannungssensor 2 - Zwischenkreis - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03140E | Inverter 1 Verbrennernah - Stromsensoren - HW-Phasenüberstrom | 0 | - |
| 0x03140F | Inverter 1 Verbrennernah - Stromsensoren - Summenstrom der 3 Phasen unplausibel | 0 | - |
| 0x031410 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Plus | 0 | - |
| 0x031411 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Kurzschluss nach Masse | 0 | - |
| 0x031412 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x031413 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031414 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offene Leitung | 0 | - |
| 0x031416 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offset unplausibel | 0 | - |
| 0x031417 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Amplitude unplausibel | 0 | - |
| 0x031418 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Plus | 0 | - |
| 0x031419 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Kurzschluss nach Masse | 0 | - |
| 0x03141A | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x03141B | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03141C | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offene Leitung | 0 | - |
| 0x03141E | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offset unplausibel | 0 | - |
| 0x03141F | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Amplitude unplausibel | 0 | - |
| 0x031420 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Plus | 0 | - |
| 0x031421 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Kurzschluss nach Masse | 0 | - |
| 0x031422 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x031423 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031424 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offene Leitung | 0 | - |
| 0x031426 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offset unplausibel | 0 | - |
| 0x031427 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Amplitude unplausibel | 0 | - |
| 0x03143A | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Oberer Schwellenwert überschritten | 0 | - |
| 0x03143B | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03143D | Inverter 1 Verbrennernah - Temperatursensor - Phase U - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031440 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Oberer Schwellenwert überschritten | 0 | - |
| 0x031441 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031443 | Inverter 1 Verbrennernah - Temperatursensor - Phase V - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x03144C | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Oberer Schwellenwert überschritten | 0 | - |
| 0x03144D | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03144F | Inverter 1 Verbrennernah - Temperatursensor - Phase W - Signal unplausibel nach Redundanzüberwachung | 0 | - |
| 0x031450 | Inverter 1 Verbrennernah - Stromsensoren - SW-Phasenüberstrom | 0 | - |
| 0x031451 | Inverter 1 Verbrennernah - Stromsensoren - Phase U - Offsetabgleich außerhalb Toleranz | 0 | - |
| 0x031452 | Inverter 1 Verbrennernah - Stromsensoren - Phase V - Offsetabgleich außerhalb Toleranz | 0 | - |
| 0x031453 | Inverter 1 Verbrennernah - Stromsensoren - Phase W - Offsetabgleich außerhalb Toleranz | 0 | - |
| 0x031682 | Notlaufmanager - Ersatzwertberechnung - DSC - Fahrzeuggeschwindigkeit | 0 | - |
| 0x031683 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten links | 0 | - |
| 0x031684 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl hinten rechts | 0 | - |
| 0x031685 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn links | 0 | - |
| 0x031686 | Notlaufmanager - Ersatzwertberechnung - DSC - Raddrehzahl vorn rechts | 0 | - |
| 0x031687 | Notlaufmanager - Ersatzwertberechnung - EGS - Gesamtübersetzung | 0 | - |
| 0x031688 | Notlaufmanager - Ersatzwertberechnung - EM 1 - Verlustleistung | 0 | - |
| 0x03168C | Notlaufmanager - Externe Signaldiagnose - EGS - Abtriebsdrehzahl | 0 | - |
| 0x03168D | Notlaufmanager - Externe Signaldiagnose - Gesamtübersetzung | 0 | - |
| 0x03168E | Notlaufmanager - Externe Signaldiagnose - Übersetzung Hinterachse | 0 | - |
| 0x03168F | Notlaufmanager - Externe Signaldiagnose - DME - Drehzahl Kurbelwelle | 0 | - |
| 0x031690 | Notlaufmanager - Externe Signaldiagnose - DME - Fahrbereitschaft | 0 | - |
| 0x031693 | Notlaufmanager - Externe Signaldiagnose - DME - Ist-Zustand Antrieb | 0 | - |
| 0x031695 | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Betriebsart EM 1 | 0 | - |
| 0x031699 | Notlaufmanager - Externe Signaldiagnose - DME - Sollmoment EM 1 | 0 | - |
| 0x03169B | Notlaufmanager - Externe Signaldiagnose - DME - Soll-Zustand Antrieb | 0 | - |
| 0x03169C | Notlaufmanager - Externe Signaldiagnose - DME - Startleistung VM | 0 | - |
| 0x03169D | Notlaufmanager - Externe Signaldiagnose - DME - Wunsch-Zustand Antrieb | 0 | - |
| 0x03169E | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Ladezustand | 0 | - |
| 0x0316A0 | Notlaufmanager - Externe Signaldiagnose - SME - Ist-Strom | 0 | - |
| 0x0316A1 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler Ladestrom | 0 | - |
| 0x0316A2 | Notlaufmanager - Externe Signaldiagnose - SME - Maximaler oder minimaler Ladezustand | 0 | - |
| 0x0316A3 | Notlaufmanager - Externe Signaldiagnose - SME - Minimaler Entladestrom | 0 | - |
| 0x0316A5 | Notlaufmanager - Folgefehler - EGS - ENPG1FIX | 1 | - |
| 0x0316A6 | Notlaufmanager - Folgefehler - EGS - ENPG1FIX und Drehzahlunterschreitung | 1 | - |
| 0x0316A8 | Notlaufmanager - Folgefehler - ELUP - Ausgefallen | 1 | - |
| 0x0316AC | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Hardwarefehler | 1 | - |
| 0x0316AD | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Überspannung | 1 | - |
| 0x0316AE | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - Übertemperatur | 1 | - |
| 0x0316AF | Notlaufmanager - Folgefehler - DC/DC-Wandler - Deaktiviert - zu hohen Stroms | 1 | - |
| 0x0316B3 | Notlaufmanager - Folgefehler - DME - HV Verbraucher reduzieren | 0 | - |
| 0x0316B5 | Notlaufmanager - Folgefehler - DME - Momentenreduzierung EM 1 | 1 | - |
| 0x0316B7 | Notlaufmanager - Folgefehler - DME - NV Verbraucher reduzieren | 0 | - |
| 0x0316B8 | Notlaufmanager - Folgefehler - DME - SOC Hold Betrieb | 0 | - |
| 0x0316B9 | Notlaufmanager - Folgefehler - DME - Steuergerätausfall | 1 | - |
| 0x0316BA | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss | 1 | - |
| 0x0316BB | Notlaufmanager - Folgefehler - EM 1 - Aktiver Kurzschluss und Übertemperatur | 1 | - |
| 0x0316BE | Notlaufmanager - Folgefehler - EM 1 - Fehler Rotorlagesensor | 1 | - |
| 0x0316BF | Notlaufmanager - Folgefehler - EM 1 - Freilauf aktiv | 1 | - |
| 0x0316C0 | Notlaufmanager - Folgefehler - EM 1 - Hardware Fehler | 1 | - |
| 0x0316C1 | Notlaufmanager - Folgefehler - EM 1 - Null-Momentenanforderung | 1 | - |
| 0x0316C2 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler China | 1 | - |
| 0x0316C3 | Notlaufmanager - Folgefehler - EM 1 - Temperaturfehler Inverter 1 | 1 | - |
| 0x0316C4 | Notlaufmanager - Folgefehler - EM 1 - Überschreitung max. Drehzahl | 0 | - |
| 0x0316C5 | Notlaufmanager - Folgefehler - EM 1 - Übertemperatur | 1 | - |
| 0x0316D0 | Notlaufmanager - Folgefehler - SME - Erkennung Service Disconnect AE | 1 | - |
| 0x0316D1 | Notlaufmanager - Folgefehler - SME - Kategorie 1 Fehler | 1 | - |
| 0x0316D3 | Notlaufmanager - Folgefehler - SME - Kategorie 3 Fehler | 1 | - |
| 0x0316D4 | Notlaufmanager - Folgefehler - SME - Kategorie 4 Fehler | 1 | - |
| 0x0316D5 | Notlaufmanager - Folgefehler - SME - Kategorie 5 Fehler | 1 | - |
| 0x0316D6 | Notlaufmanager - Folgefehler - SME - Kategorie 6 Fehler | 1 | - |
| 0x0316D7 | Notlaufmanager - Folgefehler - SME - Kategorie 7 Fehler | 1 | - |
| 0x0316D8 | Notlaufmanager - Folgefehler - SME - niedriger Ladezustand oder geringe Reichweite | 1 | - |
| 0x0316D9 | Notlaufmanager - Folgefehler - SME - Steuergerätausfall | 1 | - |
| 0x0316DA | Notlaufmanager - Folgefehler - SME - Thermisches Ereignis | 0 | - |
| 0x0316DB | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Betriebsart | 0 | - |
| 0x0316DC | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Drehzahl | 0 | - |
| 0x0316DD | Notlaufmanager - Interne Signaldiagnose - EM 1 - Ist-Moment | 0 | - |
| 0x0316E0 | Notlaufmanager - Interne Signaldiagnose - EM 1- Maximales generatorisches Moment | 0 | - |
| 0x0316E1 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximales motorisches Moment | 0 | - |
| 0x0316E2 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung generatorisch | 0 | - |
| 0x0316E3 | Notlaufmanager - Interne Signaldiagnose - EM 1 - Maximale Verlustleistung motorisch | 0 | - |
| 0x0316EB | Notlaufmanager - Folgefehler - EM 1 - Stecker überhitzt | 0 | - |
| 0x0316EC | Notlaufmanager - Folgefehler - DME - Drehzahl reduzieren EM 1 | 0 | - |
| 0x0316ED | Notlaufmanager - Folgefehler - ELUP - Ausgefallen und kein VM Start möglich | 0 | - |
| 0x0317C2 | FuSi - HV - Crash Softwaresignal | 0 | - |
| 0x0317C3 | FuSi - HV - Fehler aktive Entladung | 0 | - |
| 0x0317C4 | FuSi - HV - Hochvoltkreis offen | 0 | - |
| 0x0317C5 | FuSi - HV - Crash Klemme 30C | 0 | - |
| 0x0317C6 | FuSi - HV - Maximale Spannung in Hochvoltsystem überschritten | 0 | - |
| 0x0317C9 | FuSi - LD - Abschaltung - AKS angefordert | 0 | - |
| 0x0317CA | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Drehmoment Kurbelwelle 1) | 1 | - |
| 0x0317CB | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 | - |
| 0x0317CC | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 | - |
| 0x0317CD | FuSi - LD - Abschaltung BWP - Sicherer Zustand angefordert wegen fehlerhafte DME kommunikation | 1 | - |
| 0x0317CE | FuSi - LD - Abschaltung - Freilauf angefordert | 0 | - |
| 0x0317CF | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von DME (Kurbelwelle Drehmoment Daten Hybrid) | 1 | - |
| 0x0317D0 | FuSi - LD - Abschaltung FWP - Sicherer Zustand angefordert von EGS (Drehmoment Getriebe Hybrid) | 1 | - |
| 0x0317D1 | FuSi - LD - BWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 | - |
| 0x0317D2 | FuSi - LD - FWP - Sicherer Zustand angefordert wegen Sammelfehler Momentengrenzen | 0 | - |
| 0x0317D5 | FuSi - LD - Radblockiererkennung - Sicherer Zustand angefordert | 0 | - |
| 0x0317D6 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Masse oder Ausgang kurzgeschlossen zu Batterie | 0 | - |
| 0x0317D7 | FuSi - HV - HVIL - Eingang kurzgeschlossen zu Batterie oder Ausgang kurzgeschlossen zu Masse | 0 | - |
| 0x0317D9 | FuSi - HV - Ausfall Überlastschutz (Lader) | 0 | - |
| 0x0317DB | FuSi - HV - Inverter 1 - Überlast Kabelbaum - AC-Seite | 0 | - |
| 0x0317DE | FuSi - HV - Kurzschluss intern | 0 | - |
| 0x222243 | DC/DC-Wandler - Kommunikation - Interner Kurzschluss durch HW erkannt | 0 | - |
| 0x222245 | DC/DC-Wandler - Bauteilschutz - Überstrom HV-Seite | 0 | - |
| 0x222246 | DC/DC-Wandler - Bauteilschutz - 12V Bordnetz | 0 | - |
| 0x222248 | DC/DC-Wandler - Betriebsmodus Buck - unplausibel | 0 | - |
| 0x22224E | DC/DC-Wandler - Kein Betrieb | 0 | - |
| 0x222264 | DC/DC-Wandler - Bauteilschutz - Übertemperatur | 0 | - |
| 0x222265 | DC/DC-Wandler - HW Interrupt | 0 | - |
| 0x222286 | DC/DC-Wandler - Spannungregelung  - Eingangssignalfehler | 0 | - |
| 0x222287 | DC/DC-Wandler  - LV Spannung - Abweichung zwischen Soll- und Istspannung | 0 | - |
| 0x222361 | Umrichter Traktions-Elektromaschine: Hardware Shutdown der Leistungsstufen | 0 | - |
| 0x222362 | Umrichter, Kontrollleiterplatte: Elektronikbaustein CPLD Takt Fehler | 0 | - |
| 0x222363 | Umrichter: Falsche CPLD Version erkannt | 0 | - |
| 0x222365 | Umrichter Traktions-Elektromaschine: Sicherheitsfunktion / Schaltung Freilauf für elektrische Maschine nicht möglich (1) | 0 | - |
| 0x222366 | Umrichter Traktions-Elektromaschine: Sicherheitsfunktion / Schaltung Freilauf für elektrische Maschine nicht möglich (2) | 0 | - |
| 0x222367 | Umrichter: Überspannung 12V erkannt | 0 | - |
| 0x222368 | Umrichter: Unterspannung 12V erkannt | 0 | - |
| 0x22237C | Umrichter, Hauptrelais: Unerwartetes Öffnen | 0 | - |
| 0x22237D | Umrichter, Hauptrelais: Unplausibles Öffnen erkannt | 0 | - |
| 0x22237E | Umrichter, HV Microprozessor, externe Referenzspannung: Oberer Schwellenwert überschritten | 0 | - |
| 0x22237F | Umrichter, HV Microprozessor, externe Referenzspannung: Unterer Schwellenwert unterschritten | 0 | - |
| 0x222383 | Umrichter Traktions-Elektromaschine: HV Microprozessor arbeitet nicht korrekt | 0 | - |
| 0x2223A5 | Umrichter, Highside Treiber: Controller des Gate Treibers außer Betrieb | 0 | - |
| 0x2223A6 | Umrichter, Lowside Treiber: Controller des Gate Treiber außer Betrieb | 0 | - |
| 0x2223A7 | Umrichter, Highside Treiber: Spannungsversorgung außerhalb Bereich oder Kommunikationsfehler | 0 | - |
| 0x2223A8 | Umrichter, Lowside Treiber: Spannungsversorgung außerhalb Bereich oder Kommunikationsfehler | 0 | - |
| 0x2223A9 | Umrichter, Gatetreiber: Kurzschluss auf Highside oder Unterbrechung auf Lowside | 0 | - |
| 0x2223AA | Umrichter, Gatetreiber: Kurzschluss auf Lowside oder Unterbrechung auf Highside | 0 | - |
| 0x2223B1 | Umrichter: Komponentenschutz, Übertemperatur | 0 | - |
| 0x2223B2 | Umrichter: Komponentenschutz, Stromlimits überschritten | 0 | - |
| 0x222610 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Überspannung | 0 | - |
| 0x222611 | Spannungsversorgung - Klemme 30B - Versorgungsspannung - Unterspannung | 0 | - |
| 0x22278A | Funktionssicherheit, Level 3, Watchdog Fehler: Fehlerzähler des externen Überwachungsmoduls entspricht nicht dem Gegenstück im Controller | 0 | - |
| 0x2228C6 | Werksmodus eFahren zur Überführung aktiv | 0 | - |
| 0x2228C7 | Werksmodus Fahrdynamische Prüfung aktiv | 0 | - |
| 0x222B7B | DC/DC-Wandler - Versorgung Treiber 30V - Kurzschluss nach Plus | 0 | - |
| 0x222B7C | DC/DC-Wandler - Versorgung Treiber 30V - Kurzschluss nach Masse | 0 | - |
| 0x222BAB | interner Fehler, Messwerterfassung: Rotorlage nicht plausibel | 0 | - |
| 0x222BAC | interner Fehler, Überwachung: Überführung in den sicheren Zustand fehlerhaft | 0 | - |
| 0x222BAD | interner Fehler, Messwerterfassung: Phasenströme nicht plausibel | 0 | - |
| 0x222BB0 | interner Fehler, Messwerterfassung: Zwischenkreisspannung nicht plausibel | 0 | - |
| 0x222BB1 | interner Fehler, Messwerterfassung: Anforderung sicherer Zustand | 0 | - |
| 0x222BB6 | EM 1 Verbrennernah - Rotorlagesensor - Auswerteverfahren instabil | 0 | - |
| 0x222C02 | EWS - Manipulationsschutz - erwartete Antwort unplausibel | 0 | - |
| 0x222C03 | EWS - Leitungselektronik durch EWS gesperrt | 0 | - |
| 0x222C08 | Montagemodus aktiv | 0 | - |
| 0x222D6B | Leistungselektronik, interner Fehler, Ebene 2: Alivecounter im Snapshot unplausibel | 0 | - |
| 0x222D6D | Leistungselektronik, interner Fehler, Ebene 2: Istmoment unplausibel | 0 | - |
| 0x222D6E | Leistungselektronik, interner Fehler, Ebene 2: Autorisiertes Momentenband verletzt | 0 | - |
| 0x222D6F | Leistungselektronik, interner Fehler, Ebene 2: Rotorwinkeloffset ausserhalb der Toleranz | 0 | - |
| 0x222D71 | Leistungselektronik, interner Fehler, Ebene 2: Rotorstromkomponenten unplausibel | 0 | - |
| 0x222D72 | Leistungselektronik, interner Fehler, Ebene 2: Phasenstromsumme unplausibel | 0 | - |
| 0x222D76 | Leistungselektronik, interner Fehler, Ebene 2: Drehzahl unplausibel | 0 | - |
| 0x222F0F | Steuergerät intern - Interner Controllerfehler | 0 | - |
| 0x222FCF | DC/DC-Wandler - Kommunikation - Botschafts-Timeout-Sammelfehler | 0 | - |
| 0x222FD2 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Kurzschluss nach Masse | 0 | - |
| 0x222FD3 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Kurzschluss nach Masse | 0 | - |
| 0x222FD4 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Kurzschluss nach Plus | 0 | - |
| 0x222FD5 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Oberer Schwellenwert überschritten | 0 | - |
| 0x222FD6 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Plausibilitätsfehler - DC/DC aktiv | 0 | - |
| 0x222FD7 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Plausibilitätsfehler - DC/DC nicht aktiv | 0 | - |
| 0x222FD8 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Unterer Schwellenwert unterschritten | 0 | - |
| 0x222FD9 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Untere Schwelle | 0 | - |
| 0x222FDA | DC/DC-Wandler - Ungewollte Energieübertragung DC/DC aus | 0 | - |
| 0x223027 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Unterer Schwellenwert überschritten | 0 | - |
| 0x223028 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Signal unplausibel | 0 | - |
| 0x223029 | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Oberer Schwellenwert überschritten | 0 | - |
| 0x22302A | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Kurzschluss nach Plus | 0 | - |
| 0x22302B | Inverter 1 Verbrennernah - Temperatursensoren - Phase VW - Massendifferenz Kurzschluss nach Masse | 0 | - |
| 0x22302C | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Unterer Schwellenwert überschritten | 0 | - |
| 0x22302D | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Signal unplausibel | 0 | - |
| 0x22302E | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Oberer Schwellenwert überschritten | 0 | - |
| 0x22302F | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Kurzschluss nach Plus | 0 | - |
| 0x223030 | Inverter 1 Verbrennernah - Temperatursensoren - Phase UV - Massendifferenz Kurzschluss nach Masse | 0 | - |
| 0x223031 | Inverter 1 Verbrennernah - Stromsensoren - Versorgungspannung fehlerhaft | 0 | - |
| 0x223032 | Inverter 1 Verbrennernah - Stromsensoren - EEPROM Daten unplausibel | 0 | - |
| 0x223033 | Inverter 1 Verbrennernah - Softwareversion - ungültig | 0 | - |
| 0x223034 | Inverter 1 Verbrennernah - Seriennummer - ungültig | 0 | - |
| 0x223035 | Inverter 1 Verbrennernah - Gatetreiber - Status unplausibel | 0 | - |
| 0x223036 | Inverter 1 Verbrennernah - Gatetreiber - SPI Kommunikation fehlerhaft | 0 | - |
| 0x223037 | Inverter 1 Verbrennernah - Gatetreiber - Parity Fehler | 0 | - |
| 0x223038 | Inverter 1 Verbrennernah - Gatetreiber - Datenübertragung zu langsam | 0 | - |
| 0x223039 | Inverter 1 Verbrennernah - Gatetreiber - Botschaftsfehler | 0 | - |
| 0x22303A | Inverter 1 Verbrennernah - Gatetreiber - Aktivierungsleitung Kurzschluss zwischen High und Low | 0 | - |
| 0x22303B | Inverter 1 Verbrennernah - CPLD - Status unplausibel | 0 | - |
| 0x22303C | Inverter 1 Verbrennernah - CPLD - SPI Kommunikation fehlerhaft | 0 | - |
| 0x22303E | EM 1 Verbrennernah - Temperatursensor 1 - Unplausible Bereichsumschaltung | 0 | - |
| 0x223040 | Inverter 1 Verbrennernah - ZK-Entladung - Stufe 1 | 0 | - |
| 0x223041 | Inverter 1 Verbrennernah - ZK-Entladung - Stufe 2 | 0 | - |
| 0x223042 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Oberer Schwellenwert überschritten | 0 | - |
| 0x223043 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Unterer Schwellenwert überschritten | 0 | - |
| 0x223044 | Inverter 1 Verbrennernah - Interne Versorgungsspannungserzeugung - Funktionaler Check | 0 | - |
| 0x223061 | Inverter 1 Verbrennernah - ZK-Entladung - Abschaltung 30V Step-up Converter nicht möglich | 0 | - |
| 0x223062 | Inverter 1 Verbrennernah - ZK-Entladung - HV-Spannung nach aktiver Entladung | 0 | - |
| 0x223064 | ELUP - Hauptschalter schaltet nicht | 0 | - |
| 0x223065 | ELUP - Hauptschalter durchkontaktiert | 0 | - |
| 0x223066 | ELUP - Anlaufstrombegrenzung - Schalter schaltet nicht durch | 0 | - |
| 0x223067 | ELUP - Anlaufstrombegrenzung - Strom durch Schalter zu hoch | 0 | - |
| 0x22306B | Batteriesensor IBS 2 - Zustart - Checksumme Parameterdaten erneut lesen | 0 | - |
| 0x223071 | FuSi - EEPROM Fehler - Phasenstrom | 0 | - |
| 0x223072 | FuSi - Plausifehler - Phasenstrom Offset | 0 | - |
| 0x2232A1 | 12V Spannungssensor 1 - Pin Pointing - Plausibilitätsfehler | 0 | - |
| 0x2232A2 | 12V Spannungssensor 2 - Pin Pointing - Plausibilitätsfehler | 0 | - |
| 0x2232A3 | E-Fuse - Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x2232A4 | Crash-Hardware-Leitung - Plausibilitätsfehler | 0 | - |
| 0x2232A5 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Kurzschluss nach Plus | 0 | - |
| 0x2232A6 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Obere Schwelle | 0 | - |
| 0x2232A7 | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Ground switch | 0 | - |
| 0x2232A8 | DC/DC-Wandler - LV-Spannungssensor - Synchrongleichrichter - Hardware Überspannung | 0 | - |
| 0x2232A9 | DC/DC-Wandler - LV-Spannung - Oberer Schwellenwert überschritten | 0 | - |
| 0x2232AA | DC/DC-Wandler - LV-Spannung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2232AB | DC/DC-Wandler - HV-Spannung - Oberer Schwellenwert überschritten | 0 | - |
| 0x2232AC | DC/DC-Wandler - HV-Spannung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2232AD | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler - Modell | 0 | - |
| 0x2232AE | DC/DC-Wandler - Abschaltpfadtest - Step2 | 0 | - |
| 0x2232AF | DC/DC-Wandler - Abschaltpfadtest - Step1 geschlossen | 0 | - |
| 0x2232B0 | DC/DC-Wandler - Abschaltpfadtest - Step1 offen | 0 | - |
| 0x2232B1 | DC/DC-Wandler - Keine Energieübertragung möglich | 0 | - |
| 0x2232B2 | DC/DC-Wandler - Versorgung Treiber 15V - Kurzschluss nach Plus | 0 | - |
| 0x2232B3 | DC/DC-Wandler - Versorgung Treiber 5V - Kurzschluss nach Plus | 0 | - |
| 0x2232B4 | DC/DC-Wandler - Versorgung Treiber 3.3V - Kurzschluss nach Plus | 0 | - |
| 0x2232B5 | DC/DC-Wandler - Versorgung Treiber 15V - Kurzschluss nach Masse | 0 | - |
| 0x2232B6 | DC/DC-Wandler - Versorgung Treiber 5V - Kurzschluss nach Masse | 0 | - |
| 0x2232B7 | DC/DC-Wandler - Versorgung Treiber 3.3V - Kurzschluss nach Masse | 0 | - |
| 0x2232D3 | DC/DC-Wandler - DC/DC interne Kommunikation - Sammelfehler | 0 | - |
| 0x2232D4 | DC/DC-Wandler - Kommunikation - FuSi-Sammelfehler | 0 | - |
| 0x2232D5 | FuSi - HV - Zwischenkreis - Spannungssensorik - Plausibilitätsfehler | 0 | - |
| 0x2232DC | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Plausibilitätsfehler | 0 | - |
| 0x2232DD | E-Fuse - Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2232DE | E-Fuse - Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x2232DF | E-Fuse - Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x2232E0 | E-Fuse - Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x2232E1 | E-Fuse - Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2232E2 | E-Fuse - Schalter - Plausibilitätsfehler | 0 | - |
| 0x22331C | E-Fuse - Stromsensor - Kurzschluss nach Plus | 0 | - |
| 0x22335D | FuSi - Plausiblisierung COM Stack | 0 | - |
| 0x22335E | DC/DC-Wandler - LV-Spannungssensor - Inverse Pfade - Plausibilitätsfehler 2 | 0 | - |
| 0x223360 | Inverter 1 Verbrennernah - Temperatursensor - Phase 1 - Kurzschluss nach Plus | 0 | - |
| 0x223361 | Inverter 1 Verbrennernah - Temperatursensor - Phase 1 - Kurzschluss nach Masse | 0 | - |
| 0x223362 | Inverter 1 Verbrennernah - Temperatursensor - Phase 2 - Kurzschluss nach Plus | 0 | - |
| 0x223363 | Inverter 1 Verbrennernah - Temperatursensor - Phase 2 - Kurzschluss nach Masse | 0 | - |
| 0x223364 | Inverter 1 Verbrennernah - Temperatursensor - Phase 3 - Kurzschluss nach Masse | 0 | - |
| 0x223365 | Inverter 1 Verbrennernah - Temperatursensor - Phase 3 - Kurzschluss nach Plus | 0 | - |
| 0x223366 | Inverter 1 Verbrennernah - Gatetreiber - HighSide - Konfigurationsfehler | 0 | - |
| 0x223367 | Inverter 1 Verbrennernah - Gatetreiber - LowSide - Konfigurationsfehler | 0 | - |
| 0x223368 | Inverter 1 Verbrennernah - Gatetreiber - LowSide - Überstromabschaltung | 0 | - |
| 0x223369 | Inverter 1 Verbrennernah - Gatetreiber - HighSide - Überstromabschaltung | 0 | - |
| 0x223376 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Kurzschluss nach Plus | 0 | - |
| 0x223377 | Inverter 1 Verbrennernah - Bordnetzpegelsensorik - Kurzschluss nach Masse | 0 | - |
| 0x223385 | Steuergerät intern - Inkorrekte Datenübertragung über RTE-Schnittstelle | 0 | - |
| 0x223386 | DC/DC-Wandler - Abschaltpfadtest - Timeout | 0 | - |
| 0x223387 | Steuergerät intern - NVRAM - Lesen | 0 | - |
| 0x223388 | Steuergerät intern - NVRAM - Schreiben | 0 | - |
| 0x22338A | Steuergerät intern - Mikrocontroller - SafeState - Ebene 3 | 0 | - |
| 0x22338B | Steuergerät intern - CHIP ID - Zulassung | 0 | - |
| 0x22338C | Steuergerät intern - Chip - Abgleich fehlgeschlagen | 0 | - |
| 0x22338D | ELUP - Treiber - Hardware - Überstromabschaltung | 0 | - |
| 0x223394 | ELUP - Eingangsspannungssensor - Oberer Schwellenwert überschritten - 16V | 0 | - |
| 0x223395 | ELUP - Eingangsspannungssensor - Unterer Schwellenwert unterschritten - 9V | 0 | - |
| 0x2233A4 | Werksmodus - Bandendefunktion - aktiv | 0 | - |
| 0x2233A6 | FUSI - HV - Inverter 1 - Überlast Kabelbaum - AC Seite - sicherer Zustand | 0 | - |
| 0x2233A7 | EWS - Ergebnis Programmcheck | 0 | - |
| 0x2233A8 | EWS - Ergebnis Datencheck | 0 | - |
| 0x2233A9 | FA-CAN - Leitungsunterbrechung | 0 | - |
| 0x2233AB | LE-CAN - Leitungsunterbrechung | 0 | - |
| 0x2233AD | DC/DC-Wandler - HV - Stromsensor S9 - Kurzschluss nach Plus | 0 | - |
| 0x2233AE | DC/DC-Wandler - HV - Stromsensor S9 - Kurzschluss nach Masse | 0 | - |
| 0x2233AF | DC/DC-Wandler - HV- Stromsensor S9 - Oberer Schwellenwert überschritten | 0 | - |
| 0x2233B0 | DC/DC-Wandler - HV-Stromsensor S9 - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2233B1 | DC/DC-Wandler - HV - Stromsensor S9 - Plausibilitätsfehler | 0 | - |
| 0x2233B2 | EM 1 Verbrennernah - Rotor - Übertemperatur | 0 | - |
| 0x2233B3 | FuSi - LD - Unerlaubter Freilauf | 0 | - |
| 0x2233B4 | FuSi - LD - Außerhalb gültigen Bereich | 0 | - |
| 0x2233B9 | Inverter 1 Verbrennernah - Niedertemperatur Kreislauf - Kühlleistung unplausibel | 1 | - |
| 0xD7840A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xD7841F | FLEXRAY Physikalischer Busfehler | 0 | - |
| 0xD78420 | FLEXRAY controller error | 0 | - |
| 0xD7847C | LE-CAN Control Module Bus OFF | 0 | - |
| 0xD78BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD79400 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) fehlt | 1 | - |
| 0xD79401 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) nicht aktuell | 1 | - |
| 0xD79402 | Botschaft (Absicherung Antriebsstrang, ID: SAFG_PT) Prüfsumme falsch | 1 | - |
| 0xD79403 | Signal (Absicherung Antriebsstrang, ID: SAFG_PT) ungültig | 1 | - |
| 0xD7940C | Botschaft (Anforderung Drehmoment Betriebsstrategie, ID: RQ_TORQ_OSTR) fehlt | 1 | - |
| 0xD7940F | Signal (Anforderung Drehmoment Betriebsstrategie, ID: RQ_TORQ_OSTR) ungültig | 1 | - |
| 0xD79410 | Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) fehlt | 1 | - |
| 0xD79413 | Signal (Anforderung Drehmoment Kurbelwelle Getriebe 2, ID: RQ_TORQ_CRSH_GRB_2) ungültig | 1 | - |
| 0xD7941C | Botschaft (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) fehlt | 1 | - |
| 0xD7941F | Signal (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) ungültig | 1 | - |
| 0xD79420 | Botschaft (Anforderung Klimaanlage, ID: RQ_AIC) fehlt | 1 | - |
| 0xD79423 | Signal (Anforderung Klimaanlage, ID: RQ_AIC) ungültig | 1 | - |
| 0xD79430 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) fehlt | 1 | - |
| 0xD79431 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) nicht aktuell | 1 | - |
| 0xD79432 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) Prüfsumme falsch | 1 | - |
| 0xD79433 | Signal (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) ungültig | 1 | - |
| 0xD79444 | Botschaft (Anzeige Leistung Antrieb, ID: DISP_PWR_DRV) fehlt | 1 | - |
| 0xD79447 | Signal (Anzeige Leistung Antrieb, ID: DISP_PWR_DRV) ungültig | 1 | - |
| 0xD79450 | Botschaft (Begrenzung Komfort Ladeelektronik, ID: LIM_KLE) fehlt | 1 | - |
| 0xD79453 | Signal (Begrenzung Komfort Ladeelektronik, ID: LIM_KLE) ungültig | 1 | - |
| 0xD79454 | Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher, ID: LIM_CHG_DCHG_HVSTO) fehlt | 1 | - |
| 0xD79457 | Signal (Begrenzung Ladung Entladung Hochvoltspeicher, ID: LIM_CHG_DCHG_HVSTO) ungültig | 1 | - |
| 0xD79458 | Botschaft (Daten Antriebsstrang 1, ID: DT_PT_1) fehlt | 1 | - |
| 0xD7945B | Signal (Daten Antriebsstrang 1, ID: DT_PT_1) ungültig | 1 | - |
| 0xD7945C | Botschaft (Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 | - |
| 0xD7945F | Signal (Daten Antriebsstrang 2, ID: DT_PT_2) ungültig | 1 | - |
| 0xD79460 | Botschaft (Daten Antriebsstrang 3, ID: DT_PT_3) fehlt | 1 | - |
| 0xD79463 | Signal (Daten Antriebsstrang 3, ID: DT_PT_3) ungültig | 1 | - |
| 0xD79464 | Botschaft (Daten Anzeige Getriebestrang, ID: DT_DISP_GRDT) fehlt | 1 | - |
| 0xD79467 | Signal (Daten Anzeige Getriebestrang, ID: DT_DISP_GRDT) ungültig | 1 | - |
| 0xD7946C | Botschaft (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) fehlt | 1 | - |
| 0xD7946F | Signal (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) ungültig | 1 | - |
| 0xD79474 | Botschaft (Daten Hochvoltspeicher 2, ID: DT_HVSTO_2) fehlt | 1 | - |
| 0xD79477 | Signal (Daten Hochvoltspeicher 2, ID: DT_HVSTO_2) ungültig | 1 | - |
| 0xD79478 | Botschaft (Daten Hochvoltspeicher, ID: DT_HVSTO) fehlt | 1 | - |
| 0xD7947B | Signal (Daten Hochvoltspeicher, ID: DT_HVSTO) ungültig | 1 | - |
| 0xD7947C | Botschaft (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) fehlt | 1 | - |
| 0xD7947F | Signal (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) ungültig | 1 | - |
| 0xD79488 | Botschaft (Diagnose OBD Motor, ID: DIAG_OBD_ENG) fehlt | 1 | - |
| 0xD7948B | Signal (Diagnose OBD Motor, ID: DIAG_OBD_ENG) ungültig | 1 | - |
| 0xD7948C | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) fehlt | 1 | - |
| 0xD7948D | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) nicht aktuell | 1 | - |
| 0xD7948E | Botschaft (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) Prüfsumme falsch | 1 | - |
| 0xD7948F | Signal (Drehmoment Getriebe Hybrid, ID: TORQ_GRB_HYB) ungültig | 1 | - |
| 0xD79490 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | - |
| 0xD79491 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 | - |
| 0xD79492 | Botschaft (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 | - |
| 0xD79493 | Signal (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) ungültig | 1 | - |
| 0xD79494 | Botschaft (Drehzahl Wasserpumpe, ID: RPM_WAP) fehlt | 1 | - |
| 0xD79497 | Signal (Drehzahl Wasserpumpe, ID: RPM_WAP) ungültig | 1 | - |
| 0xD794BC | Botschaft (Energieverbrauch Fehlerstatus Komfort Ladeelektronik, ID: ENERG_COSP_ERR_ST_KLE) fehlt | 1 | - |
| 0xD794BF | Signal (Energieverbrauch Fehlerstatus Komfort Ladeelektronik, ID: ENERG_COSP_ERR_ST_KLE) ungültig | 1 | - |
| 0xD794CF | Signal (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) ungültig | 1 | - |
| 0xD794D0 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 | - |
| 0xD794D3 | Signal (Fahrzeugzustand, ID: FZZSTD) ungültig | 1 | - |
| 0xD794D4 | Botschaft (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) fehlt | 1 | - |
| 0xD794D7 | Signal (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) ungültig | 1 | - |
| 0xD794E0 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) fehlt | 1 | - |
| 0xD794E1 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) nicht aktuell | 1 | - |
| 0xD794E2 | Botschaft (Hybrid Vorgabe, ID: HYB_SPEC) Prüfsumme falsch | 1 | - |
| 0xD794E3 | Signal (Hybrid Vorgabe, ID: HYB_SPEC) ungültig | 1 | - |
| 0xD794E4 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD794E7 | Signal (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) ungültig | 1 | - |
| 0xD794E8 | Botschaft (Ist Daten Komfort Ladeelektronik Langzeit, ID: AVL_DT_KLE_LT) fehlt | 1 | - |
| 0xD794EB | Signal (Ist Daten Komfort Ladeelektronik Langzeit, ID: AVL_DT_KLE_LT) ungültig | 1 | - |
| 0xD794EC | Botschaft (Ist Daten Komfort Ladeelektronik, ID: AVL_DT_KLE) fehlt | 1 | - |
| 0xD794EF | Signal (Ist Daten Komfort Ladeelektronik, ID: AVL_DT_KLE) ungültig | 1 | - |
| 0xD794F8 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | - |
| 0xD794F9 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 | - |
| 0xD794FA | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 | - |
| 0xD794FB | Signal (Ist Drehzahl Rad, ID: AVL_RPM_WHL) ungültig | 1 | - |
| 0xD794FC | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xD794FF | Signal (Kilometerstand/Reichweite, ID: KILOMETERSTAND) ungültig | 1 | - |
| 0xD7950C | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) fehlt | 1 | - |
| 0xD7950D | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) nicht aktuell | 1 | - |
| 0xD7950E | Botschaft (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) Prüfsumme falsch | 1 | - |
| 0xD7950F | Signal (Kurbelwelle Drehmoment Daten Hybrid, ID: CRSH_TORQ_DT_HYB) ungültig | 1 | - |
| 0xD79514 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD79515 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | - |
| 0xD79516 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD79517 | Signal (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) ungültig | 1 | - |
| 0xD79518 | Botschaft (Modus Spannungsgesteuert, ID: MOD_VC) fehlt | 1 | - |
| 0xD7951B | Signal (Modus Spannungsgesteuert, ID: MOD_VC) ungültig | 1 | - |
| 0xD7951C | Botschaft (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP) fehlt | 1 | - |
| 0xD7951F | Signal (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP) ungültig | 1 | - |
| 0xD79524 | Botschaft (Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 | - |
| 0xD79527 | Signal (Navigation System Information, ID: NAV_SYS_INF) ungültig | 1 | - |
| 0xD79528 | Botschaft (Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD79529 | Botschaft (Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 | - |
| 0xD7952A | Botschaft (Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 | - |
| 0xD7952B | Signal (Neigung Fahrbahn, ID: TLT_RW) ungültig | 1 | - |
| 0xD79534 | Botschaft (OBD Anfrage Begrenzung Drehmoment, ID: OBD_INQY_LIM_TORQ) fehlt | 1 | - |
| 0xD79537 | Signal (OBD Anfrage Begrenzung Drehmoment, ID: OBD_INQY_LIM_TORQ) ungültig | 1 | - |
| 0xD79538 | Botschaft (Powermanagement Niederspannung, ID: PWMG_LV) fehlt | 1 | - |
| 0xD7953B | Signal (Powermanagement Niederspannung, ID: PWMG_LV) ungültig | 1 | - |
| 0xD79540 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xD79541 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 | - |
| 0xD79542 | Botschaft (Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 | - |
| 0xD79543 | Signal (Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 | - |
| 0xD79548 | Botschaft (Radmoment Antrieb 9, ID: WMOM_DRV_9) fehlt | 1 | - |
| 0xD7954B | Signal (Radmoment Antrieb 9, ID: WMOM_DRV_9) ungültig | 1 | - |
| 0xD7954C | Botschaft (Radmoment Antrieb Ist, ID: WMOM_PT_AVL) fehlt | 1 | - |
| 0xD7954F | Signal (Radmoment Antrieb Ist, ID: WMOM_PT_AVL) ungültig | 1 | - |
| 0xD79550 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xD79553 | Signal (Relativzeit BN2020, ID: RELATIVZEIT) ungültig | 1 | - |
| 0xD79578 | Botschaft (Schlafbereitschaft Global FZM, ID: SLRDI_GLB_FZM) fehlt | 1 | - |
| 0xD7957B | Signal (Schlafbereitschaft Global FZM, ID: SLRDI_GLB_FZM) ungültig | 1 | - |
| 0xD79588 | Botschaft (Status Crash, ID: ST_CR) fehlt | 1 | - |
| 0xD79589 | Botschaft (Status Crash, ID: ST_CR) nicht aktuell | 1 | - |
| 0xD7958A | Botschaft (Status Crash, ID: ST_CR) Prüfsumme falsch | 1 | - |
| 0xD7958B | Signal (Status Crash, ID: ST_CR) ungültig | 1 | - |
| 0xD7958C | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) fehlt | 1 | - |
| 0xD7958D | Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) nicht aktuell | 1 | - |
| 0xD79590 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) fehlt | 1 | - |
| 0xD79591 | Botschaft (Status Diagnose OBD 2 Antriebsstrang:ST_DIAG_OBD_2_PT) nicht aktuell | 1 | - |
| 0xD79594 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) fehlt | 1 | - |
| 0xD79595 | Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) nicht aktuell | 1 | - |
| 0xD79598 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) fehlt | 1 | - |
| 0xD79599 | Botschaft (Status Diagnose OBD Slave 1, ID: ST_DIAG_OBD_SLV_1) nicht aktuell | 1 | - |
| 0xD7959C | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) fehlt | 1 | - |
| 0xD7959D | Botschaft (Status Diagnose OBD Slave 2, ID: ST_DIAG_OBD_SLV_2) nicht aktuell | 1 | - |
| 0xD795A0 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) fehlt | 1 | - |
| 0xD795A1 | Botschaft (Status Diagnose OBD Slave 3, ID :ST_DIAG_OBD_SLV_3) nicht aktuell | 1 | - |
| 0xD795A4 | Botschaft (Status Energieerzeugung, ID: ST_ENERG_GEN) fehlt | 1 | - |
| 0xD795A7 | Signal (Status Energieerzeugung, ID: ST_ENERG_GEN) ungültig | 1 | - |
| 0xD795AC | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) fehlt | 1 | - |
| 0xD795AD | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) nicht aktuell | 1 | - |
| 0xD795AE | Botschaft (Status Getriebe Hybrid, ID: ST_GRB_HYB) Prüfsumme falsch | 1 | - |
| 0xD795AF | Signal (Status Getriebe Hybrid, ID: ST_GRB_HYB) ungültig | 1 | - |
| 0xD795B0 | Botschaft (Status Getriebesteuergerät, ID: ST_GRB_ECU) fehlt | 1 | - |
| 0xD795B3 | Signal (Status Getriebesteuergerät, ID: ST_GRB_ECU) ungültig | 1 | - |
| 0xD795B7 | Signal (Status Getriebestrang, ID: ST_GRDT) ungültig | 1 | - |
| 0xD795BC | Botschaft (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) fehlt | 1 | - |
| 0xD795BF | Signal (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) ungültig | 1 | - |
| 0xD795C0 | Botschaft (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) fehlt | 1 | - |
| 0xD795C3 | Signal (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) ungültig | 1 | - |
| 0xD795C4 | Botschaft (Status Hochvoltspeicher 4, ID: ST_HVSTO_4) fehlt | 1 | - |
| 0xD795C7 | Signal (Status Hochvoltspeicher 4, ID: ST_HVSTO_4) ungültig | 1 | - |
| 0xD795C8 | Botschaft (Status Hybrid 2, ID: ST_HYB_2) fehlt | 1 | - |
| 0xD795CB | Signal (Status Hybrid 2, ID: ST_HYB_2) ungültig | 1 | - |
| 0xD795CC | Botschaft (Status Induktiv Laden, ID: ST_IDT_CHGNG) fehlt | 1 | - |
| 0xD795CF | Signal (Status Induktiv Laden, ID: ST_IDT_CHGNG) ungültig | 1 | - |
| 0xD795D0 | Botschaft (Status Information Verbrennungsmotor, ID: ST_INFO_CENG) fehlt | 1 | - |
| 0xD795D3 | Signal (Status Information Verbrennungsmotor, ID: ST_INFO_CENG) ungültig | 1 | - |
| 0xD795D4 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) fehlt | 1 | - |
| 0xD795D5 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) nicht aktuell | 1 | - |
| 0xD795D6 | Botschaft (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) Prüfsumme falsch | 1 | - |
| 0xD795D7 | Signal (Status Ladeschnittstelle 2, ID: ST_CHGINTF_2) ungültig | 1 | - |
| 0xD795D8 | Botschaft (Status Ladeschnittstelle, ID: ST_CHGINTF) fehlt | 1 | - |
| 0xD795DB | Signal (Status Ladeschnittstelle, ID: ST_CHGINTF) ungültig | 1 | - |
| 0xD795DC | Botschaft (Status Ladung Hochvoltspeicher 1, ID: ST_CHG_HVSTO_1) fehlt | 1 | - |
| 0xD795DF | Signal (Status Ladung Hochvoltspeicher 1, ID: ST_CHG_HVSTO_1) ungültig | 1 | - |
| 0xD795E0 | Botschaft (Status Ladung Hochvoltspeicher 2, ID: ST_CHG_HVSTO_2) fehlt | 1 | - |
| 0xD795E3 | Signal (Status Ladung Hochvoltspeicher 2, ID: ST_CHG_HVSTO_2) ungültig | 1 | - |
| 0xD795E4 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) fehlt | 1 | - |
| 0xD795E5 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) nicht aktuell | 1 | - |
| 0xD795E6 | Botschaft (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) Prüfsumme falsch | 1 | - |
| 0xD795E7 | Signal (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) ungültig | 1 | - |
| 0xD795E8 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD795E9 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD795EA | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD795EB | Signal (Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 | - |
| 0xD795EC | Botschaft (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) fehlt | 1 | - |
| 0xD795EF | Signal (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) ungültig | 1 | - |
| 0xD795F8 | Botschaft (Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD795F9 | Botschaft (Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD795FB | Signal (Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD79603 | Signal (Teleservice Call Status, ID: TS_CALL_ST) ungültig | 1 | - |
| 0xD79604 | Botschaft (Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 | - |
| 0xD79607 | Signal (Uhrzeit/Datum, ID: UHRZEIT_DATUM) ungültig | 1 | - |
| 0xD79614 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 | - |
| 0xD79615 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 | - |
| 0xD79616 | Botschaft (Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 | - |
| 0xD79617 | Signal (Winkel Fahrpedal, ID: ANG_ACPD) ungültig | 1 | - |
| 0xD79618 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD79619 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD7961A | Botschaft (Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD7961B | Signal (Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD7963C | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD7963F | Signal (Außentemperatur, ID: A_TEMP) ungültig | 1 | - |
| 0xD79648 | Botschaft (Geschwindigkeit Fahrzeug:V_VEH) fehlt | 1 | - |
| 0xD79649 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD7964A | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD7964B | Signal (Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 | - |
| 0xD79660 | Botschaft (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) fehlt | 1 | - |
| 0xD79663 | Signal (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) ungültig | 1 | - |
| 0xD79677 | Signal (Nav-Graph 2 Route Beschreibung, ID: NAVGRPH_2_RT_DESCR) ungültig | 1 | - |
| 0xD79678 | Botschaft (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) fehlt | 1 | - |
| 0xD7967B | Signal (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS)  ungültig | 1 | - |
| 0xD796B4 | Botschaft (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) fehlt | 1 | - |
| 0xD796B7 | Signal (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) ungültig | 1 | - |
| 0xD7971C | Botschaft (Anforderung Klimaanlage 1, ID: RQ_AIC_1) fehlt | 1 | - |
| 0xD7971F | Signal (Anforderung Klimaanlage 1, ID: RQ_AIC_1) ungültig | 1 | - |
| 0xD79720 | Botschaft (Anfrage Leistung Funktionen Klima 1, ID: INQY_PWR_FNS_AIC_1) fehlt | 1 | - |
| 0xD79723 | Signal (Anfrage Leistung Funktionen Klima 1, ID: INQY_PWR_FNS_AIC_1) ungültig | 1 | - |
| 0xD79724 | Botschaft (Anfrage Leistung Funktionen Klima 2:INQY_PWR_FNS_AIC_2) fehlt | 1 | - |
| 0xD79727 | Signal (Anfrage Leistung Funktionen Klima 2:INQY_PWR_FNS_AIC_2) ungültig | 1 | - |
| 0xD79728 | Botschaft (Begrenzung Induktiv Laden, ID: LIM_IDT_CHGNG) fehlt | 1 | - |
| 0xD7972B | Signal (Begrenzung Induktiv Laden, ID: LIM_IDT_CHGNG) ungültig | 1 | - |
| 0xD7972C | Botschaft (Drehmoment Antriebsstrang Hybrid 1, ID:TORQ_PT_HYB_1) fehlt | 1 | - |
| 0xD7972F | Signal (Drehmoment Antriebsstrang Hybrid 1, ID:TORQ_PT_HYB_1) ungültig | 1 | - |
| 0xD79730 | Botschaft (Energie Verbrauch Fehler Status Induktiv Laden, ID: ENERG_COSP_ERR_ST_IDT_CHGNG) fehlt | 1 | - |
| 0xD79733 | Signal (Energie Verbrauch Fehler Status Induktiv Laden, ID: ENERG_COSP_ERR_ST_IDT_CHGNG) ungültig | 1 | - |
| 0xD79734 | Botschaft (Ist Daten Induktiv Laden Langzeit, ID: AVL_DT_IDT_CHGNG_LT) fehlt | 1 | - |
| 0xD79737 | Signal (Ist Daten Induktiv Laden Langzeit, ID: AVL_DT_IDT_CHGNG_LT) ungültig | 1 | - |
| 0xD79738 | Botschaft (Ist Daten Induktiv Laden, ID: AVL_DT_IDT_CHGNG) fehlt | 1 | - |
| 0xD7973B | Signal (Ist Daten Induktiv Laden, ID: AVL_DT_IDT_CHGNG) ungültig | 1 | - |
| 0xD79740 | Botschaft (GPS Rohdaten:, ID: GPS_RWDT) fehlt | 1 | - |
| 0xD79743 | Signal (GPS Rohdaten:, ID: GPS_RWDT) ungültig | 1 | - |
| 0xD7974B | Signal (Nav-Graph 2 Ereignis Profil, ID: NAVGRAPH_2_EVT_PROFIL) ungültig | 1 | - |
| 0xD7974F | Signal (Nav-Graph 2 Profil, ID: NAVGRAPH_2_PROFIL) ungültig | 1 | - |
| 0xD79750 | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) fehlt | 1 | - |
| 0xD79753 | Signal (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) ungültig | 1 | - |
| 0xD7975C | Botschaft (Anforderung Drehzahl Hinterachse, ID: RQ_RPM_BAX) fehlt | 1 | - |
| 0xD79763 | Signal (Anforderung Drehzahl Hinterachse, ID: RQ_RPM_BAX) ungültig | 1 | - |
| 0xD79765 | Botschaft (Daten Getriebestrang Abgesichert, ID: DT_GRDT_VRFD) nicht aktuell | 1 | - |
| 0xD79766 | Botschaft (Daten Getriebestrang Abgesichert, ID: DT_GRDT_VRFD) Prüfsumme falsch | 1 | - |
| 0xD79768 | Botschaft (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | - |
| 0xD7976C | Botschaft (Daten Getriebestrang Abgesichert, ID: DT_GRDT_VRFD) fehlt | 1 | - |
| 0xD7976F | Signal (Daten Getriebestrang Abgesichert, ID: DT_GRDT_VRFD) ungültig | 1 | - |
| 0xD79783 | Signal (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) ungültig | 1 | - |
| 0xD79784 | Botschaft (Konfiguration SOC Hold, ID: SU_SOC_HLD) fehlt | 1 | - |
| 0xD79787 | Signal (Konfiguration SCharge Remote, ID: SU_SCHRG_REM) ungültig | 1 | - |
| 0xD79797 | Signal (Konfiguration SOC Hold, ID: SU_SOC_HLD) ungültig | 1 | - |
| 0xD797EB | Signal (Status Klima Interne Regelinfo, ID: STAT_KLIMA_INTERN) ungültig | 1 | - |
| 0xD797EC | Botschaft (Status Klima Interne Regelinfo, ID: STAT_KLIMA_INTERN) fehlt | 1 | - |
| 0xD79801 | Botschaft (Spannung Zelle Hochvoltspeicher 1, ID: U_CELL_HVSTO_1) fehlt | 1 | - |
| 0xD79805 | Botschaft (Spannung Zelle Hochvoltspeicher 2, ID: U_CELL_HVSTO_2) fehlt | 1 | - |
| 0xD79809 | Botschaft (Spannung Zelle Hochvoltspeicher 3, ID: U_CELL_HVSTO_3) fehlt | 1 | - |
| 0xD7980D | Botschaft (Spannung Zelle Hochvoltspeicher 4, ID: U_CELL_HVSTO_4) fehlt | 1 | - |
| 0xD79811 | Botschaft (Spannung Zelle Hochvoltspeicher 5, ID: U_CELL_HVSTO_5) fehlt | 1 | - |
| 0xD79815 | Botschaft (Spannung Zelle Hochvoltspeicher 6, ID: U_CELL_HVSTO_6) fehlt | 1 | - |
| 0xD79819 | Botschaft (Spannung Zelle Hochvoltspeicher 7, ID: U_CELL_HVSTO_7) fehlt | 1 | - |
| 0xD7981D | Botschaft (Spannung Zelle Hochvoltspeicher 8, ID: U_CELL_HVSTO_8) fehlt | 1 | - |
| 0xD79821 | Botschaft (Spannung Zelle Hochvoltspeicher 9, ID: U_CELL_HVSTO_9) fehlt | 1 | - |
| 0xD79825 | Botschaft (Spannung Zelle Hochvoltspeicher 10, ID: U_CELL_HVSTO_10) fehlt | 1 | - |
| 0xD79829 | Botschaft (Spannung Zelle Hochvoltspeicher 11, ID: U_CELL_HVSTO_11) fehlt | 1 | - |
| 0xD7982D | Botschaft (Spannung Zelle Hochvoltspeicher 12, ID: U_CELL_HVSTO_12) fehlt | 1 | - |
| 0xD79831 | Botschaft (Spannung Zelle Hochvoltspeicher 13, ID: U_CELL_HVSTO_13) fehlt | 1 | - |
| 0xD79835 | Botschaft (Spannung Zelle Hochvoltspeicher 14, ID: U_CELL_HVSTO_14) fehlt | 1 | - |
| 0xD79839 | Botschaft (Temperatur Sensor Hochvoltspeicher 1, ID: TEMP_SEN_HVSTO_1) fehlt | 1 | - |
| 0xD7983D | Botschaft (Temperatur Sensor Hochvoltspeicher 2, ID: TEMP_SEN_HVSTO_2) fehlt | 1 | - |
| 0xD79841 | Botschaft (Temperatur Sensor Hochvoltspeicher 3, ID: TEMP_SEN_HVSTO_3) fehlt | 1 | - |
| 0xD79845 | Botschaft (Temperatur Sensor Hochvoltspeicher 4, ID: TEMP_SEN_HVSTO_4) fehlt | 1 | - |
| 0xD79849 | Botschaft (Temperatur Sensor Hochvoltspeicher 5, ID: TEMP_SEN_HVSTO_5) fehlt | 1 | - |
| 0xD7984D | Botschaft (Temperatur Sensor Hochvoltspeicher 6, ID: TEMP_SEN_HVSTO_6) fehlt | 1 | - |
| 0xD79851 | Botschaft (Konfiguration SCharge KEY, ID: SU_SCHRG_KEY) fehlt | 1 | - |
| 0xD79854 | Signal (Konfiguration SCharge KEY, ID: SU_SCHRG_KEY) ungültig | 1 | - |
| 0xD79855 | Botschaft (Bedienung Laden Strom Begrenzung 2, ID: OP_ST_CHGNG_I_LIM_2) fehlt | 1 | - |
| 0xD79858 | Signal (Bedienung Laden Strom Begrenzung 2, ID: OP_ST_CHGNG_I_LIM_2) ungültig | 1 | - |
| 0xD79859 | Botschaft (Erkennung Verkehrszeichen, ID: RCOG_TRSG) fehlt | 1 | - |
| 0xD7985C | Signal (Erkennung Verkehrszeichen, ID: RCOG_TRSG) ungültig | 1 | - |
| 0xD79861 | Botschaft (Status System Parken 2, ID: ST_SY_PKG_2) fehlt | 1 | - |
| 0xD79864 | Signal (Status System Parken 2, ID: ST_SY_PKG_2) ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_ASWDCDC_ERROR | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SHOFFPAH_ERROR | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_UOVER_ERROR | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_CDDIHM_ERROR | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMRX_ERROR | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SBNETSHCIRC_ERROR | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DCDC_GLOBAL_ENABLE_GRUND_PERMANENT_ERROR | 0/1 | High | 0x80 | - | - | - | - |
| 0x0008 | EWS_4_6_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0009 | MONTAGEMODUS_AKTIV | 0/1 | High | 0x0002 | - | - | - | - |
| 0x000A | STEUERN_RL_SENSOR_ANLERNEN_AKTIV | 0/1 | High | 0x0004 | - | - | - | - |
| 0x000B | STEUERN_AKS_EMK_START_AKTIV | 0/1 | High | 0x0008 | - | - | - | - |
| 0x000C | STEUERN_FREILAUFMODUS_AKTIV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x000D | HVSM_SSREQ_BWP_AKTIV | 0/1 | High | 0x0020 | - | - | - | - |
| 0x000E | HVSM_SSREQ_FWP_AKTIV | 0/1 | High | 0x0040 | - | - | - | - |
| 0x000F | VORGABE_STANDBY | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0010 | VORGABE_AKTIVER_KURZSCHLUSS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0011 | VORGABE_FREILAUF | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0012 | SOLLBETRIEBSART | 0-n | High | 0xFF | TAB_SOLLBETRIEBSART | - | - | - |
| 0x0013 | STERRMOT1_AKS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0014 | STERRMOT1_FREILAUF | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0015 | STERRMOT1_EM_UEBERTEMPERATUR | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0016 | STERRMOT1_RESOLVER_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0017 | STERRMOT1_HW_FEHLER | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0018 | STERRMOT1_INVERTER_UEBERTEMP | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0019 | BETRIEBSART | 0-n | High | 0xFF | TAB_BETRIEBSART | - | - | - |
| 0x001A | OP_MODE | 0-n | High | 0xFF | TAB_OP_MODE | - | - | - |
| 0x001B | UWB_HVSTART_ISO_ERROR_DCDC_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0x001C | UWB_HVSTART_ISO_ERROR_UMRICHTER_IN_AKS | 0/1 | High | 0x02 | - | - | - | - |
| 0x001D | UWB_HVSTART_ISO_ERROR_UMRICHTER_IN_FREILAUF | 0/1 | High | 0x04 | - | - | - | - |
| 0x001E | UWB_HVSTART_ISO_ERROR_LADEGERAET_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x001F | UWB_HVSTART_ISO_ERROR_EDH_AKTIV | 0/1 | High | 0x10 | - | - | - | - |
| 0x0020 | UWB_HVSTART_ISO_ERROR_EKMV_AKTIV | 0/1 | High | 0x20 | - | - | - | - |
| 0x0021 | UWB_HVSTART_ISO_ERROR_ISO_WARN_AKTIV | 0/1 | High | 0x40 | - | - | - | - |
| 0x0022 | UWB_HVSTART_ISO_ERROR_ISO_ERR_AKTIV | 0/1 | High | 0x80 | - | - | - | - |
| 0x0023 | DFC_RBE_CDDHVMCU_HVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0024 | DFC_RBE_CDDHVMCU_HVMCURXDSBC_AKTIV | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0025 | DFC_RBE_CDDHVMCU_LVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0026 | DFC_RBE_CDDHVMCU_LVMCURXTOUT_AKTIV | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0027 | DFC_RBE_CDDHVMCU_HVMCURXTOUT_AKTIV | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0028 | DFC_RBE_CDDHVMCU_HVMCURXBUFOVF_AKTIV | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0029 | DFC_RBE_CDDHVMCU_LVMCURXDMADESTADRERR_AKTIV | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x002A | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMADESTADRERR_AKTIV | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x002B | DFC_RBE_CDDHVMCU_LVMCURXDMASRCADRERR_AKTIV | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x002C | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMASRCADRERR_AKTIV | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x002D | DFC_RBE_CDDHVMCU_LVMCURXDMAERR_AKTIV | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x002E | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMAERR_AKTIV | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x002F | DFC_RBE_CDDHVMCU_LVMCURXDMABUSERR_AKTIV | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0030 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMABUSERR_AKTIV | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0031 | DFC_RBE_CDDHVMCU_HVMCUTSKNOTSYNCD_AKTIV | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0032 | DFC_RBE_CDDHVMCU_HVMCUTSKPERDERR_AKTIV | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0033 | DFC_RBE_CDDHVMCU_LVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0034 | DFC_RBE_CDDHVMCU_HVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0035 | DFC_RBE_CDDHVMCU_LVMCURXFIFOOVF_AKTIV | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0036 | DFC_RBE_CDDHVMCU_LVMCUTXFIFOOVF_AKTIV | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0037 | DFC_RBE_CDDHVMCU_STPSGATERMSM_AKTIV | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0038 | UWB_HVLADEN_ERROR_LADEGERAET_HW_FEHLER | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0039 | UWB_HVLADEN_ERROR_LADEGERAET_AC_SPANNUNG | 0/1 | High | 0x0002 | - | - | - | - |
| 0x003A | UWB_HVLADEN_ERROR_DCDC_NICHT_VERFUEGBAR | 0/1 | High | 0x0004 | - | - | - | - |
| 0x003B | UWB_HVLADEN_ERROR_HV_NICHT VERFUEGBAR | 0/1 | High | 0x0008 | - | - | - | - |
| 0x003C | UWB_HVLADEN_ERROR_AC_SPANNUNG_NICHT_VORHANDEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x003D | UWB_HVLADEN_ERROR_STECKER_UNERWARTET_GEZOGEN | 0/1 | High | 0x0020 | - | - | - | - |
| 0x003E | UWB_HVLADEN_ERROR_STECKER_UNERWARTET_ENTRIEGELT | 0/1 | High | 0x0040 | - | - | - | - |
| 0x003F | UWB_HVLADEN_ERROR_LADEGERAET_UNGUELTIGE_BETRIEBSART | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0040 | UWB_HVLADEN_ERROR_LADERGERAET_CRASH | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0041 | UWB_HVLADEN_ERROR_LADEGERAET_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0042 | UWB_HVLADEN_ERROR_LADEGERAET_UNTERBRECHUNG | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0043 | UWB_HVLADEN_ERROR_AC_STROMGRENZE_GLEICH_NULL | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0044 | UWB_HVLADEN_ERROR_KOMMFEHLER_HVS_ODER_LADEINTERFACE | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0045 | UWB_HVLADEN_ERROR_KOMMFEHLER_LADEGERAET | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0046 | UWB_HVSTART_ERROR_ISOLATION_WARNUNG | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0047 | UWB_HVSTART_ERROR_ISOLATIONS_FEHLER | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0048 | UWB_HVSTART_ERROR_EINFACHER_SCHUETZKLEBER | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0049 | UWB_HVSTART_ERROR_DOPPELTER_SCHUETZKLEBER | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x004A | UWB_HVSTART_ERROR_SYSTEMINTERLOCK_FEHLERVERDACHT | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x004B | UWB_HVSTART_ERROR_SYSTEMINTERLOCK | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x004C | UWB_HVSTART_ERROR_SERVICE_DISCONNECT_OFFEN | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x004D | UWB_HVSTART_ERROR_KAT6_SME_VERDACHT | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x004E | UWB_HVSTART_ERROR_KAT6_SME | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x004F | UWB_HVSTART_ERROR_KAT7_SME_VERDACHT | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0050 | UWB_HVSTART_ERROR_KAT7_SME | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0051 | UWB_HVSTART_ERROR_SIGNALAUSFALL_SME_VERDACHT | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0052 | UWB_HVSTART_ERROR_SIGNALAUSFALL_SME | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0053 | UWB_HVSTART_ERROR_SIGNALAUSFALL_EME_VERDACHT | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0054 | UWB_HVSTART_ERROR_SIGNALAUSFALL_EME | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0055 | UWB_HVSTART_ERROR_SIGNALAUSFALL_IHKA | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0056 | UWB_HVSTART_ERROR_ENTLADESCHUTZ_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0057 | UWB_HVSTART_ERROR_CRASH_SCHWERE_1 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0058 | UWB_HVSTART_ERROR_CRASH_SCHWERE_2 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0059 | UWB_HVSTART_ERROR_FLASH_MODE_EME | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x005A | UWB_HVSTART_ERROR_HV_SYSTEM_SICHER_ABGESCHALTET_CCM636 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x005B | UWB_HVSTART_ERROR_RESTLAUFZEIT_30B_KRITISCH | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x005C | UWB_HVSTART_ERROR_DIAGNOSEJOB_HVPM_ZUM_HV_POWERDOWN | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x005D | UWB_HVSTART_ERROR_DIAGNOSEJOB_FUNCTIONAL_SLEEP_GESAMTFAHRZEUG | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x005E | UWB_HVSTART_ERROR_KAT1_SME_VERDACHT | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x005F | UWB_HVSTART_ERROR_KAT1_SME | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0060 | UWB_HVSTART_ERROR_KAT5_SME_VERDACHT | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x0061 | UWB_HVSTART_ERROR_KAT5_SME | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x0062 | UWB_HVSTART_ERROR_BB_ANGEFORDERT_VON_NLM | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x170C | VERSORGUNGSSPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | DCDC_SPANNUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6100 | AUSSENTEMP | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6101 | MOTORTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6102 | GESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x6103 | AKTIVZEIT | min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x6104 | VKL30 | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6105 | STATUS_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6106 | ABSTELLZEIT | min | High | unsigned int | - | 4.0 | 1.0 | 0.0 |
| 0x6107 | 30V_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6108 | ASIC_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6109 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x610A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610B | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x610C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610D | ISTDREHZAHL | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x610E | ISTMOMENT | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x610F | STATORTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x6110 | KUEHLMITTELTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6111 | KUEHLWASSERTEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6112 | HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x6113 | HV_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6114 | STATORSTROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6115 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6116 | VKL30_DCDC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x6117 | IKL30_DCDC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6118 | HVI_DCDC | A | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x611D | DCDC_BA_TARGET | 0-n | High | 0xFF | - | - | - | - |
| 0x6124 | KL30_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6125 | 30V_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6126 | CY327_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6127 | ANFORDERUNG_ZWISCHENKREISENTLADUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6129 | INVERTER_VERLUSTLEISTUNG | W | High | signed int | - | 1.0 | 4.0 | 0.0 |
| 0x612A | KUHLMITTELPUMPE_DREHZAHL | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x612B | KUHLMITTEL_DURCHFLUSS | l/h | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x612C | IGBT_DIODENTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612D | IGBT_TEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612E | HV_SPANNUNG_BATTERIE | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x612F | STATORSTROM_EFFEKTIV_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6130 | PHASE_U_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6131 | PHASE_V_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6132 | PHASE_W_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6133 | PHASE_U_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6134 | PHASE_V_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6135 | PHASE_W_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6136 | RESETINFO_CTRST_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x6137 | RESETINFO_CTGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6138 | RESETINFO_XGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6139 | RESETINFO_XLD_COPY | HEX | High | unsigned int | - | - | - | - |
| 0x613A | RESETINFO_XUSERVALUE_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x613B | RESET_HIST_BUFFER_0 | HEX | High | unsigned int | - | - | - | - |
| 0x613C | RESET_HIST_BUFFER_1 | HEX | High | unsigned int | - | - | - | - |
| 0x613D | RESET_HIST_BUFFER_2 | HEX | High | unsigned int | - | - | - | - |
| 0x613E | RESET_HIST_BUFFER_3 | HEX | High | unsigned int | - | - | - | - |
| 0x613F | RESET_HIST_BUFFER_4 | HEX | High | unsigned int | - | - | - | - |
| 0x6140 | RESET_HIST_BUFFER_5 | HEX | High | unsigned int | - | - | - | - |
| 0x6141 | RESET_HIST_BUFFER_6 | HEX | High | unsigned int | - | - | - | - |
| 0x6142 | RESET_HIST_BUFFER_7 | HEX | High | unsigned int | - | - | - | - |
| 0x6143 | DCDC_GLOBAL_ENABLE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6144 | MOTOR_ANTRIEB_LUFTDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x6145 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6146 | BITMASKE_SAMMELFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6147 | MONITORING_ERR_REACT_REQ | 0/1 | High | 0x01 | - | - | - | - |
| 0x6148 | MONITORING_NO_TRQ_ALLOWED | 0/1 | High | 0x01 | - | - | - | - |
| 0x614A | MONITORING_ST_MOD_ACT_INT | HEX | High | unsigned char | - | - | - | - |
| 0x614B | MONITORING_COM_CNTR_ERR_FC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614C | MONITORING_COM_CNTR_ERR_MM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614D | MONITORING_COMRX_UDCLNK_BMWRX | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614E | MONITORING_COMRX_UHV_CMFT_CHRGN_ELECTC_ACT | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614F | MONITORING_IPHA_IQAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6150 | MONITORING_IPHA_IDAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6151 | MONITORING_IPHA_FLGL_DETD | 0/1 | High | 0x01 | - | - | - | - |
| 0x6152 | MONITORING_IPHA_IAMP_VECTLFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6153 | MONITORING_PWMST_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x6154 | MONITORING_COMINT_AGRTRELECWOOFFS | ° | High | unsigned int | - | 1.0 | 182.044444 | 0.0 |
| 0x6155 | DIAG_ACTVSC_DSMAPIDTC | HEX | High | unsigned long | - | - | - | - |
| 0x6156 | DIAG_ACTVSC_REQEMTQLIMN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6157 | DIAG_ACTVSC_FWD_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6158 | DIAG_ACTVSC_BACK_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6159 | DIAG_ACTVSC_FUSI_FWP_LDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615A | DIAG_ACTVSC_FUSILDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615B | CRASHSEV | 0-n | High | 0xFF | TAB_CRASHSEV | - | - | - |
| 0x615C | MONITORING_FLG_ERR_REAC_REQD | 0/1 | High | 0x01 | - | - | - | - |
| 0x615D | HVMCU_ST_MOD | 0-n | High | 0xFF | TAB_HVMCU_ST_MOD | - | - | - |
| 0x615E | 15V_L_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x615F | 15V_L_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6160 | HVMCU_I_DCHA_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6161 | HVMCU_I_DCHA_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6162 | PCB_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6163 | EFUSE_I_SENSR_LOWRES | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6164 | EFUSE_I_SENSR_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6165 | EFUSE_U_SPLY_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6166 | EFUSE_U_SPLY_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6167 | ST_GATEDRV | 0-n | High | 0xFF | TAB_ST_GATEDRV | - | - | - |
| 0x6168 | ST_HVBCNTCT | 0-n | High | 0xFF | TAB_ST_HVBCNTCT | - | - | - |
| 0x6169 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x616A | VKL30_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616B | 30V_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616C | ASIC_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616D | STATORSTROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x616E | KL30_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616F | 30V_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6170 | CY327_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6171 | HV_SPANNUNG_BATTERIE_LOWRES | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x6172 | STATORSTROM_EFFEKTIV_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6173 | PHASE_U_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6174 | PHASE_V_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6175 | PHASE_W_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6176 | PHASE_U_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6177 | PHASE_V_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6178 | PHASE_W_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6179 | IGBT_DIODENTEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617A | IGBT_TEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617B | RESETINFO_MONITORING_EMM_CORE0 | HEX | High | unsigned long | - | - | - | - |
| 0x617C | RESETINFO_MONITORING_EMM_CORE1 | HEX | High | unsigned long | - | - | - | - |
| 0x617D | RESETINFO_MONITORING_EMM_CORE2 | HEX | High | unsigned long | - | - | - | - |
| 0x617E | RBA_MEMDIAG_EXTD_NRLSTREADSGNERR | HEX | High | unsigned int | - | - | - | - |
| 0x617F | RBA_MEMDIAG_NRLSTREADERR | HEX | High | unsigned int | - | - | - | - |
| 0x6180 | RBA_MEMDIAG_NRLSTWRERR | HEX | High | unsigned int | - | - | - | - |
| 0x6181 | ELUP_STOVRCURR | 0/1 | High | 0x01 | - | - | - | - |
| 0x7000 | UWB_DCDC_Target_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7001 | UWB_DCDC_Target_Voltage_HV_Min | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x7002 | UWB_DCDC_Maximum_Input_Power | W | High | unsigned char | - | 3100.0 | 255.0 | 0.0 |
| 0x7003 | UWB_DCDC_Target_BA | 0-n | High | 0xFF | TAB_DCDC_BA_TARGET | - | - | - |
| 0x7004 | UWB_DCDC_Actual_Current_HV | A | High | unsigned char | - | 2.0 | 10.0 | 0.0 |
| 0x7005 | UWB_DCDC_Actual_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7007 | UWB_DCDC_Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x7008 | UWB_DCDC_Actual_BA | 0-n | High | 0xFF | TAB_UWB_DCDC_ACTUAL_BA | - | - | - |
| 0x7009 | UWB_DCDC_Actual_Filtered_Current_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700A | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700B | UWB_ELUP_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700C | UWB_ELUP_STROM_CH1 | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x7013 | UWB_EM1_TEMPERATUR_STATOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7014 | UWB_EM1_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7015 | UWB_EM1_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7016 | UWB_EM1_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7017 | UWB_EM1_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7018 | UWB_EM1_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7019 | UWB_INV1_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701A | UWB_INV1_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701B | UWB_INV1_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701C | UWB_INV1_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701D | UWB_INV1_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x701E | UWB_INV1_DERATING_STATUS | HEX | High | unsigned char | - | - | - | - |
| 0x701F | UWB_E_ANTRIEB_1_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART | - | - | - |
| 0x7020 | UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | - | - | - |
| 0x7021 | UWB_INV1_TEMPERATUR_IGBT_DIODE_MAX | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7037 | UWB_HVSTART_STATE | 0-n | High | 0xFF | TAB_UWB_HVSTART_STATE | - | - | - |
| 0x7038 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x703A | UWB_HVB_SOC_MIN | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x703C | UWB_STATUS_ENTLADESCHUTZ | 0-n | High | 0xFF | TAB_UWB_STATUS_ENTLADESCHUTZ | - | - | - |
| 0x703D | UWB_U_DC_LE_IST | V | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x703F | UWB_HVLADEN_STATE | 0-n | High | 0xFFFF | TAB_UWB_HVLADEN_STATE | - | - | - |
| 0x7040 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x7041 | UWB_HVLADEN_CHARGE_WISH | 0-n | High | 0xFFFF | TAB_UWB_HVLADEN_CHARGE_WISH | - | - | - |
| 0x7042 | UWB_VOKO_FREIGABE | 0/1 | High | 0x0001 | - | - | - | - |
| 0x7043 | UWB_LK_P_IHKA_IST | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7044 | UWB_LK_P_IHKA_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7045 | UWB_LK_P_HVB_MOT_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7046 | UWB_LK_P_HVB_GEN_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7047 | UWB_LK_STATE | 0-n | High | 0xFF | TAB_UWB_LK_STATE | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704D | UWB_DCDC_Actual_Power_HV | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x704E | UWB_DCDC_Actual_Load | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7058 | UWB_FUSI_BOSCH_STATUS | 0-n | High | 0xFFFF | TAB_FUSI_BOSCH_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1800.0 | 65536.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
| 0x705B | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x7085 | UWB_DCDC_RATIO_PHASE_SHIFT | % | High | unsigned int | - | 100.0 | 65535.0 | 0.0 |
| 0x7086 | UWB_I_HV_TRANSFORMER | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0x7087 | UWB_I_LV_DCDC_OUTPUT | A | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x7088 | UWB_DCDC_U_LV_SETPOINT | V | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0x7089 | UWB_STATUS_DCDC_LV_CONTROL_DIAGNOSIS | 0-n | High | 0xFF | TAB_DCDC_DIAG_STATUS | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020708 | DOBD - SME - Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020709 | DOBD - SME - Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02070A | DOBD - SME - Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02070B | DOBD - SME - Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02070C | DOBD - SME - Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02070D | DOBD - SME - Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x030EDA | HVPM - Leistungskoordinator - zu geringe Leistungsaufnahme IHKA | 1 | - |
| 0x030EDB | HVPM - Leistungskoordinator - Leistungsfreigaben IHKA überschritten | 1 | - |
| 0x030EE2 | HVPM - Start - Abschaltgrund - Entladeschutzfunktion | 1 | - |
| 0x030EE5 | HVPM - Start-Isolationsüberwachung - ISO-Warnung | 1 | - |
| 0x030EEE | HVPM - Start - Abschaltkategorien - Sofortiger befehlerbedinger Shutdown Hochvolt | 0 | - |
| 0x030EEF | HVPM - Start - Abschaltkategorien - Kontrollierter fehlerbedingter Shutdown Hochvolt | 0 | - |
| 0x030EF0 | HVPM - Start - Abschaltkategorien - Regulärer Shutdown | 0 | - |
| 0x030EF1 | HVPM - Start - Batterieloser Betrieb nicht verfügbar | 0 | - |
| 0x030EF2 | HVPM - Start - IHKA - VoKo | 0 | - |
| 0x030EF3 | HVPM - Start-Isolationsüberwachung - ISO-Fehler - Info | 0 | - |
| 0x031047 | ELUP - Control - Unterdruckaufbau nicht möglich | 0 | - |
| 0x0316B0 | Notlaufmanager - Folgefehler - CCM Zyklus | 0 | - |
| 0x0317D8 | FuSi - LD - Radblockiererkennung - 0-Moment angefordert | 0 | - |
| 0x21E600 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Out of range High | 0 | - |
| 0x21E604 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Out of range Low | 0 | - |
| 0x21E607 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Out of range High | 0 | - |
| 0x21E608 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Out of range Low | 0 | - |
| 0x21E609 | DOBD - OBC - Ladeelektronik: ECU interner Kommunikationsfehler | 0 | - |
| 0x21E60B | DOBD - OBC - Ladeelektronik: Software-Fehler | 0 | - |
| 0x21E615 | DOBD - OBC - Ladeelektronik: Wirkungsgrad außerhalb Bereich (Low) | 0 | - |
| 0x21E616 | DOBD - OBC - Ladeelektronik: Wirkungsgrad außerhalb Bereich (High) | 0 | - |
| 0x21E61B | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Kurzschluss nach Masse | 0 | - |
| 0x21E622 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E623 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E624 | DOBD - OBC - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E625 | DOBD - OBC - Ladeelektronik, HV DC Spannung: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E626 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E627 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E629 | DOBD - OBC - Ladeelektronik: HV AC Spannung unplausibel | 0 | - |
| 0x21E646 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x21E647 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x21E648 | DOBD - OBC - Ladeelektronik, AC Eingang: Strom unplausibel (Low) | 0 | - |
| 0x21E649 | DOBD - OBC - Ladeelektronik, AC Eingang: Strom unplausibel (High) | 0 | - |
| 0x21E64C | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Masse | 0 | - |
| 0x21E64D | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Kurzschluss nach Plus | 0 | - |
| 0x21E64E | DOBD - OBC - Ladeelektronik: HV DC Stromsensor unplausibel und zu niedrig | 0 | - |
| 0x21E64F | DOBD - OBC - Ladeelektronik: HV DC Stromsensor unplausibel und zu hoch | 0 | - |
| 0x21E662 | DOBD - OBC - Ladeelektronik, HV DC Spannungssensor-2: Kurzschluss nach Plus | 0 | - |
| 0x21E663 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Out of range High | 0 | - |
| 0x21E664 | DOBD - OBC - Ladeelektronik, HV AC Spannungssensor: Out of range Low | 0 | - |
| 0x21E669 | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Out of range High | 0 | - |
| 0x21E66A | DOBD - OBC - Ladeelektronik, HV DC Stromsensor: Out of range Low | 0 | - |
| 0x21E66B | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Kurzschluss nach Masse | 0 | - |
| 0x21E66C | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Kurzschluss nach Plus | 0 | - |
| 0x21E66D | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Out of range High | 0 | - |
| 0x21E66E | DOBD - OBC - Ladeelektronik, HV DC Stromsensor-2: Out of range Low | 0 | - |
| 0x21E6BA | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Out of range Low | 0 | - |
| 0x21E6BD | DOBD - OBC - Ladeelektronik, HV AC Stromsensor: Out of range High | 0 | - |
| 0x21E6BF | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0x21E6C0 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0x21E6C1 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Out of range High | 0 | - |
| 0x21E6C2 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor: Out of range Low | 0 | - |
| 0x21E6C3 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Kurzschluss nach Masse | 0 | - |
| 0x21E6C4 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Kurzschluss nach Plus | 0 | - |
| 0x21E6C5 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Out of range High | 0 | - |
| 0x21E6C6 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor-2: Out of range Low | 0 | - |
| 0x21E6C7 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Kurzschluss nach Masse | 0 | - |
| 0x21E6C8 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Kurzschluss nach Plus | 0 | - |
| 0x21E6C9 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Out of range High | 0 | - |
| 0x21E6CA | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Out of range Low | 0 | - |
| 0x21E6CB | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Kurzschluss nach Masse | 0 | - |
| 0x21E6CC | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Kurzschluss nach Plus | 0 | - |
| 0x21E6CD | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Out of range High | 0 | - |
| 0x21E6CE | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Out of range Low | 0 | - |
| 0x21E6CF | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Kurzschluss nach Masse | 0 | - |
| 0x21E6D0 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Kurzschluss nach Plus | 0 | - |
| 0x21E6D1 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Out of range High | 0 | - |
| 0x21E6D2 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Out of range Low | 0 | - |
| 0x21E6D3 | DOBD - OBC - Ladeelektronik, HV DC Spannung-2: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6D4 | DOBD - OBC - Ladeelektronik, HV DC Spannung-2: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E6D9 | DOBD - OBC - Ladeelektronik: HV DC Stromsensor-2 unplausibel und zu niedrig | 0 | - |
| 0x21E6DA | DOBD - OBC - Ladeelektronik: HV DC Stromsensor-2 unplausibel und zu hoch | 0 | - |
| 0x21E6DF | DOBD - OBC - Ladeelektronik, HV PFC Spannung: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6E0 | DOBD - OBC - Ladeelektronik, HV PFC Spannung: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E6E2 | DOBD - OBC - Ladeelektronik, HV PFC Spannung-2: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6E3 | DOBD - OBC - Ladeelektronik, HV PFC Spannung-2: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E6E4 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6E5 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E6E6 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6E7 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E6E8 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel und zu niedrig | 0 | - |
| 0x21E6EA | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel und zu hoch | 0 | - |
| 0x21E730 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Out of range High | 0 | - |
| 0x21E731 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Out of range Low | 0 | - |
| 0x21E732 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel | 0 | - |
| 0x21E733 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel zu hoch | 0 | - |
| 0x21E734 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Messwert unplausibel zu niedrig | 0 | - |
| 0x21E738 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Messwert unplausibel zu niedrig | 0 | - |
| 0x21E739 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Messwert unplausibel zu hoch | 0 | - |
| 0x21E73A | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Messwert unplausibel zu niedrig | 0 | - |
| 0x21E73B | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Messwert unplausibel zu hoch | 0 | - |
| 0x21E73C | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Kurzschluss nach Masse | 0 | - |
| 0x21E73D | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Kurzschluss nach Plus | 0 | - |
| 0x21E73E | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Out of range Low | 0 | - |
| 0x21E73F | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Out of range High | 0 | - |
| 0x21E740 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Out of range Low | 0 | - |
| 0x21E741 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Out of range High | 0 | - |
| 0x21E742 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Kurzschluss nach Masse | 0 | - |
| 0x21E743 | DOBD - OBC - Ladeelektronik, HV AC Stromsensor-2: Kurzschluss nach Plus | 0 | - |
| 0x21E744 | DOBD - OBC - Ladeelektronik, Temperatursensor Front: Messwert unplausibel | 0 | - |
| 0x21E745 | DOBD - OBC - Ladeelektronik, Temperatursensor Back: Messwert unplausibel | 0 | - |
| 0x21E746 | DOBD - OBC - Ladeelektronik, Temperatursensor Trafo: Messwert unplausibel | 0 | - |
| 0x21E747 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Kurzschluss nach Masse | 0 | - |
| 0x21E748 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Kurzschluss nach Plus | 0 | - |
| 0x21E749 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Out of range Low | 0 | - |
| 0x21E74A | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Messwert unplausibel | 0 | - |
| 0x21E74B | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V primary DSP: Out of range High | 0 | - |
| 0x21E74C | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Kurzschluss nach Masse | 0 | - |
| 0x21E74D | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Kurzschluss nach Plus | 0 | - |
| 0x21E74E | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Out of range Low | 0 | - |
| 0x21E74F | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 12V primary DSP: Out of range High | 0 | - |
| 0x21E750 | DOBD - OBC - Ladeelektronik, HV PFC Spannungssensor 3.3V secondary DSP: Messwert unplausibel | 0 | - |
| 0x21E754 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Kurzschluss nach Plus | 0 | - |
| 0x21E755 | DOBD - OBC - Ladeelektronik, Temperatursensor Cooling liquid: Kurzschluss nach Masse | 0 | - |
| 0x21F007 | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Masse | 0 | - |
| 0x21F008 | DOBD - SME - HVS: Stromversorgung CSC- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F009 | DOBD - SME - HVS: Stromversorgung CSC- - offene Leitung | 0 | - |
| 0x21F00A | DOBD - SME - HVS: CSC Treiberfehler | 0 | - |
| 0x21F00B | DOBD - SME - SME: Werte der Echtzeituhr unplausibel | 0 | - |
| 0x21F00D | DOBD - SME - Kühlventil: Kurzschluss nach Masse | 0 | - |
| 0x21F00E | DOBD - SME - Kühlventil: Kurzschluss nach Ubatt | 0 | - |
| 0x21F00F | DOBD - SME - Kühlventil: offene Leitung | 0 | - |
| 0x21F010 | DOBD - SME - Kühlventil: Treiberfehler | 0 | - |
| 0x21F011 | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (oben) | 0 | - |
| 0x21F012 | DOBD - SME - HVS: Temp.-Sensor Kühlung: außerhalb Bereich (unten) | 0 | - |
| 0x21F013 | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluss nach Masse | 0 | - |
| 0x21F014 | DOBD - SME - HVS: Temp.-Sensor Kühlung: Kurzschluß nach Ubatt oder offene Leitung | 0 | - |
| 0x21F015 | DOBD - SME - SME: EEPROM, NV-Daten- - Interner Fehler | 0 | - |
| 0x21F016 | DOBD - SME - SME: unerwarteter Reset festgestellt | 0 | - |
| 0x21F018 | DOBD - SME - SME: RAM Defekt in Initialisierungsphase | 0 | - |
| 0x21F019 | DOBD - SME - SME: RAM Defekt in Laufzeitphase | 0 | - |
| 0x21F01A | DOBD - SME - SME: ROM Defekt in Laufzeitphase | 0 | - |
| 0x21F01E | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (oben) | 0 | - |
| 0x21F01F | DOBD - SME - U/i-Sensor: Meßbereichsüberschreitung Stromsensor (unten) | 0 | - |
| 0x21F020 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (oben) | 0 | - |
| 0x21F021 | DOBD - SME - U/i-Sensor: Messbereichsüberschreitung Ubatt (unten) | 0 | - |
| 0x21F022 | DOBD - SME - SBOX: Messbereichsüberschreitung U_ZK (oben) | 0 | - |
| 0x21F023 | DOBD - SME - SBOX: Messbereichsüberschreitung U_ZK (unten) | 0 | - |
| 0x21F024 | DOBD - SME - HVS: SBOX - BUS OFF | 0 | - |
| 0x21F025 | DOBD - SME - HVS: SBOX -  CRC-Fehler erkannt auf SME | 0 | - |
| 0x21F029 | DOBD - SME - HVS: SBOX -  Fehler Maincontroller | 0 | - |
| 0x21F02A | DOBD - SME - HVS: SBOX -  Sensorfehler | 0 | - |
| 0x21F044 | DOBD - SME - HVS: Wasserpumpe -  Event1 Trockenlauf | 0 | - |
| 0x21F045 | DOBD - SME - HVS: Wasserpumpe -  offene Leitung | 0 | - |
| 0x21F046 | DOBD - SME - HVS: Wasserpumpe -  Kurzschluss nach UBATT | 0 | - |
| 0x21F047 | DOBD - SME - HVS: Wasserpumpe -  Event2 Blockierung oder Überstrom oder Unterschreitung der Minimaldrehzahl | 0 | - |
| 0x21F048 | DOBD - SME - HVS: Wasserpumpe -  Event3 Übertemperatur erkannt | 0 | - |
| 0x21F04A | DOBD - SME - HVS: Wasserpumpe -  Kurzschluss nach Masse | 0 | - |
| 0x21F04B | DOBD - SME - HVS: CSC CAN: Steuerungsmodul BUS OFF | 0 | - |
| 0x21F04D | DOBD - SME - HVS: CSC CAN: CSC 1 fehlt | 0 | - |
| 0x21F04E | DOBD - SME - HVS: CSC CAN: CSC 2 fehlt | 0 | - |
| 0x21F04F | DOBD - SME - HVS: CSC CAN: CSC 3 fehlt | 0 | - |
| 0x21F050 | DOBD - SME - HVS: CSC CAN: CSC 4 fehlt | 0 | - |
| 0x21F051 | DOBD - SME - HVS: CSC CAN: CSC 5 fehlt | 0 | - |
| 0x21F052 | DOBD - SME - HVS: CSC CAN: CSC 6 fehlt | 0 | - |
| 0x21F053 | DOBD - SME - HVS: CSC CAN: CSC 7 fehlt | 0 | - |
| 0x21F054 | DOBD - SME - HVS: CSC CAN: CSC 8 fehlt | 0 | - |
| 0x21F055 | DOBD - SME - HVS: CSC CAN: CSC 9 fehlt | 0 | - |
| 0x21F056 | DOBD - SME - HVS: CSC CAN: CSC 10 fehlt | 0 | - |
| 0x21F057 | DOBD - SME - HVS: CSC CAN: CSC 11 fehlt | 0 | - |
| 0x21F058 | DOBD - SME - HVS: CSC CAN: CSC 12 fehlt | 0 | - |
| 0x21F061 | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F062 | DOBD - SME - HVS: CSC 1 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F063 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F064 | DOBD - SME - HVS: CSC 2 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F065 | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F066 | DOBD - SME - HVS: CSC 3 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F067 | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F068 | DOBD - SME - HVS: CSC 4 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F069 | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06A | DOBD - SME - HVS: CSC 5 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06B | DOBD - SME - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06C | DOBD - SME - HVS: CSC 6 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06D | DOBD - SME - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F06E | DOBD - SME - HVS: CSC 7 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F06F | DOBD - SME - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F070 | DOBD - SME - HVS: CSC 8 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F071 | DOBD - SME - HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F072 | DOBD - SME - HVS: CSC 9 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F073 | DOBD - SME - HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F074 | DOBD - SME - HVS: CSC 10 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F075 | DOBD - SME - HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F076 | DOBD - SME - HVS: CSC 11 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F077 | DOBD - SME - HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (oben) | 0 | - |
| 0x21F078 | DOBD - SME - HVS: CSC 12 Funktion: mind. eine Zellspannung im Modul außerhalb Bereich (unten) | 0 | - |
| 0x21F0A1 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A2 | DOBD - SME - HVS: CSC 1 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A3 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A4 | DOBD - SME - HVS: CSC 2 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A5 | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A6 | DOBD - SME - HVS: CSC 3 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A7 | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0A8 | DOBD - SME - HVS: CSC 4 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0A9 | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AA | DOBD - SME - HVS: CSC 5 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AB | DOBD - SME - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AC | DOBD - SME - HVS: CSC 6 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AD | DOBD - SME - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0AE | DOBD - SME - HVS: CSC 7 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0AF | DOBD - SME - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B0 | DOBD - SME - HVS: CSC 8 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B1 | DOBD - SME - HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B2 | DOBD - SME - HVS: CSC 9 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B3 | DOBD - SME - HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B4 | DOBD - SME - HVS: CSC 10 Funktion: Modulspannung außerhalb Bereich (Low) | 1 | - |
| 0x21F0B5 | DOBD - SME - HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B6 | DOBD - SME - HVS: CSC 11 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0B7 | DOBD - SME - HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (High) | 0 | - |
| 0x21F0B8 | DOBD - SME - HVS: CSC 12 Funktion: Modulspannung außerhalb Bereich (Low) | 0 | - |
| 0x21F0C2 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 1 aufgetreten | 0 | - |
| 0x21F0C3 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 2 aufgetreten | 0 | - |
| 0x21F0C4 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 3 aufgetreten | 0 | - |
| 0x21F0C5 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 4 aufgetreten | 0 | - |
| 0x21F0C6 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 5 aufgetreten | 0 | - |
| 0x21F0C7 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 6 aufgetreten | 0 | - |
| 0x21F0C8 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 7 aufgetreten | 0 | - |
| 0x21F0C9 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 8 aufgetreten | 0 | - |
| 0x21F0CA | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 9 aufgetreten | 0 | - |
| 0x21F0CB | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 10 aufgetreten | 0 | - |
| 0x21F0CC | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 11 aufgetreten | 0 | - |
| 0x21F0CD | DOBD - SME - HVS: CSC Funktion: offene Leitung einer Zellspannungsmessung in Modul 12 aufgetreten | 0 | - |
| 0x21F0E3 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 1 | 0 | - |
| 0x21F0E4 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 2 | 0 | - |
| 0x21F0E5 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 3 | 0 | - |
| 0x21F0E6 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 4 | 0 | - |
| 0x21F0E7 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 5 | 0 | - |
| 0x21F0E8 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 6 | 0 | - |
| 0x21F0E9 | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 7 | 0 | - |
| 0x21F0EA | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 8 | 0 | - |
| 0x21F0EB | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 9 | 0 | - |
| 0x21F0EC | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 10 | 0 | - |
| 0x21F0ED | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 11 | 0 | - |
| 0x21F0EE | DOBD - SME - HVS: CSC Funktion: offene Leitung einer T-Messung aufgetreten in Modul 12 | 0 | - |
| 0x21F0F6 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 1 | 0 | - |
| 0x21F0F7 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 2 | 0 | - |
| 0x21F0F8 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 3 | 0 | - |
| 0x21F0F9 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 4 | 0 | - |
| 0x21F0FA | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 5 | 0 | - |
| 0x21F0FB | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 6 | 0 | - |
| 0x21F0FC | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 7 | 0 | - |
| 0x21F0FD | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 8 | 0 | - |
| 0x21F0FE | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 9 | 0 | - |
| 0x21F0FF | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 10 | 0 | - |
| 0x21F100 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 11 | 0 | - |
| 0x21F101 | DOBD - SME - HVS: CSC Funktion: Überspannung an der Versorgungsleitung in Modul 12 | 0 | - |
| 0x21F10A | DOBD - SME - Service Disconnect: Auswertung unplausibel | 0 | - |
| 0x21F110 | DOBD - SME - Kühlventil: Ventil lässt sich nicht schließen | 0 | - |
| 0x21F111 | DOBD - SME - Kühlventil: Ventil lässt sich nicht öffnen | 0 | - |
| 0x21F115 | DOBD - SME - HVS: Hauptschalter: neg. Schütz klebt | 0 | - |
| 0x21F116 | DOBD - SME - HVS: Hauptschalter: neg. Schütz lässt sich nicht schließen | 0 | - |
| 0x21F117 | DOBD - SME - HVS: Hauptschalter: pos. Schütz klebt | 0 | - |
| 0x21F118 | DOBD - SME - HVS: Hauptschalter: pos. Schütz lässt sich nicht schließen oder Sicherung ausgelöst | 0 | - |
| 0x21F119 | DOBD - SME - HVS: Hauptschalter: Vorlade Schütz klebt | 0 | - |
| 0x21F11A | DOBD - SME - HVS: Hauptschalter: Vorlade Schütz lässt sich nicht schließen | 0 | - |
| 0x21F11E | DOBD - SME - Stromüberwachung: Toleranzüberschreitung untere Strombegrenzung | 0 | - |
| 0x21F11F | DOBD - SME - Stromüberwachung: Toleranzüberschreitung obere Strombegrenzung | 0 | - |
| 0x21F122 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F123 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F124 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F125 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F126 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F127 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F128 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F129 | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F12A | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F12B | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F12C | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F12D | DOBD - SME - Zellspannung -  Toleranzüberschreitung obere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F133 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 1 | 0 | - |
| 0x21F134 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 2 | 0 | - |
| 0x21F135 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 3 | 0 | - |
| 0x21F136 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 4 | 0 | - |
| 0x21F137 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 5 | 0 | - |
| 0x21F138 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 6 | 0 | - |
| 0x21F139 | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 7 | 0 | - |
| 0x21F13A | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 8 | 0 | - |
| 0x21F13B | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 9 | 0 | - |
| 0x21F13C | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 10 | 0 | - |
| 0x21F13D | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 11 | 0 | - |
| 0x21F13E | DOBD - SME - Zellspannung -  Toleranzüberschreitung untere Spannungsbegrenzung in Modul 12 | 0 | - |
| 0x21F145 | DOBD - SME - Batteriespannung: Toleranzüberschreitung obere Spannungsbegrenzung | 0 | - |
| 0x21F146 | DOBD - SME - Batteriespannung: Toleranzüberschreitung untere Spannungsbegrenzung | 0 | - |
| 0x21F147 | DOBD - SME - HVS: HV-Interlock: kein Signal erzeugt | 0 | - |
| 0x21F148 | DOBD - SME - HV-Interlock: offene Leitung | 0 | - |
| 0x21F149 | DOBD - SME - HV-Interlock: Kurzschluss in Schleife | 0 | - |
| 0x21F14A | DOBD - SME - HV-Interlock: Kurzschluss nach Ubatt | 0 | - |
| 0x21F14B | DOBD - SME - HV-Interlock: Kurzschluss nach Masse | 0 | - |
| 0x21F155 | DOBD - SME - Vorladung -  Zeit zu lang | 0 | - |
| 0x21F157 | DOBD - SME - Vorladung -  Kurzschluss im Zwischenkreis detektiert | 0 | - |
| 0x21F159 | DOBD - SME - Plausibilität Stromwert -  Strom unplausibel. Kein Ersatzwert vorhanden | 0 | - |
| 0x21F15B | DOBD - SME - HVS: Plausibilität Zwischenkreisspannung -  Spannung fehlerhaft, kein Ersatzwert vorhanden | 0 | - |
| 0x21F15E | DOBD - SME - HVS: Plausibilität Batteriespannung -  HV-Spannungsmessung unplausibel, kein Ersatzwert vorhanden | 0 | - |
| 0x21F161 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 1 -  Spannung unplausibel | 0 | - |
| 0x21F162 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 2 -  Spannung unplausibel | 0 | - |
| 0x21F163 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 3 -  Spannung unplausibel | 0 | - |
| 0x21F164 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 4 -  Spannung unplausibel | 0 | - |
| 0x21F165 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 5 -  Spannung unplausibel | 0 | - |
| 0x21F166 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 6 -  Spannung unplausibel | 0 | - |
| 0x21F167 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 7 -  Spannung unplausibel | 0 | - |
| 0x21F168 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 8 -  Spannung unplausibel | 0 | - |
| 0x21F169 | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 9 -  Spannung unplausibel | 0 | - |
| 0x21F16A | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 10 -  Spannung unplausibel | 0 | - |
| 0x21F16B | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 11 -  Spannung unplausibel | 0 | - |
| 0x21F16C | DOBD - SME - HVS: Plausibillität Spannungssensorik CSC 12 -  Spannung unplausibel | 0 | - |
| 0x21F171 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 1 unplausibel | 0 | - |
| 0x21F172 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 2 unplausibel | 0 | - |
| 0x21F173 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 3 unplausibel | 0 | - |
| 0x21F174 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 4 unplausibel | 0 | - |
| 0x21F175 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 5 unplausibel | 0 | - |
| 0x21F176 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 6 unplausibel | 0 | - |
| 0x21F177 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 7 unplausibel | 0 | - |
| 0x21F178 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 8 unplausibel | 0 | - |
| 0x21F179 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 9 unplausibel | 0 | - |
| 0x21F17A | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 10 unplausibel | 0 | - |
| 0x21F17B | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 11 unplausibel | 0 | - |
| 0x21F17C | DOBD - SME - HVS: Zelltemperaturen -  Modultemperatur CSC 12 unplausibel | 0 | - |
| 0x21F183 | DOBD - SME - HVS: Zelltemperaturen: Zu viele Sensoren unplausibel oder ausgefallen | 0 | - |
| 0x21F184 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 1 ausgefallen | 0 | - |
| 0x21F185 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 2 ausgefallen | 0 | - |
| 0x21F186 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 3 ausgefallen | 0 | - |
| 0x21F187 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 4 ausgefallen | 0 | - |
| 0x21F188 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 5 ausgefallen | 0 | - |
| 0x21F189 | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 6 ausgefallen | 0 | - |
| 0x21F18A | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 7 ausgefallen | 0 | - |
| 0x21F18B | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 8 ausgefallen | 0 | - |
| 0x21F18C | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 9 ausgefallen | 0 | - |
| 0x21F18D | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 10 ausgefallen | 0 | - |
| 0x21F18E | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 11 ausgefallen | 0 | - |
| 0x21F18F | DOBD - SME - HVS: Zelltemperaturen -  Modultemperaturen CSC 12 ausgefallen | 0 | - |
| 0x21F197 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 1, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F198 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 2, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F199 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 3, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19A | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 4, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19B | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 5, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19C | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 6, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19D | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 7, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19E | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 8, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F19F | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 9, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A0 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 10, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A1 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 11, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A2 | DOBD - SME - HVS: Zelltemperaturen: Hohe Temperatur in Modul 12, Leistungsbegrenzung aktiv | 0 | - |
| 0x21F1A7 | DOBD - SME - HVS: Zelltemperaturen: CSC 1 Übertemperatur | 0 | - |
| 0x21F1A8 | DOBD - SME - HVS: Zelltemperaturen: CSC 2 Übertemperatur | 0 | - |
| 0x21F1A9 | DOBD - SME - HVS: Zelltemperaturen: CSC 3 Übertemperatur | 0 | - |
| 0x21F1AA | DOBD - SME - HVS: Zelltemperaturen: CSC 4 Übertemperatur | 0 | - |
| 0x21F1AB | DOBD - SME - HVS: Zelltemperaturen: CSC 5 Übertemperatur | 0 | - |
| 0x21F1AC | DOBD - SME - HVS: Zelltemperaturen: CSC 6 Übertemperatur | 0 | - |
| 0x21F1AD | DOBD - SME - HVS: Zelltemperaturen: CSC 7 Übertemperatur | 0 | - |
| 0x21F1AE | DOBD - SME - HVS: Zelltemperaturen: CSC 8 Übertemperatur | 0 | - |
| 0x21F1AF | DOBD - SME - HVS: Zelltemperaturen: CSC 9 Übertemperatur | 0 | - |
| 0x21F1B0 | DOBD - SME - HVS: Zelltemperaturen: CSC 10 Übertemperatur | 0 | - |
| 0x21F1B1 | DOBD - SME - HVS: Zelltemperaturen: CSC 11 Übertemperatur | 0 | - |
| 0x21F1B2 | DOBD - SME - HVS: Zelltemperaturen: CSC 12 Übertemperatur | 0 | - |
| 0x21F1BA | DOBD - SME - HVS: Batteriealterung: SOH niedrig (Fehlerschwelle) | 0 | - |
| 0x21F1BD | DOBD - SME - Ladungszustand: kritische untere SoC-Grenze erreicht | 0 | - |
| 0x21F1C3 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 1 festgestellt | 0 | - |
| 0x21F1C4 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 2 festgestellt | 0 | - |
| 0x21F1C5 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 3 festgestellt | 0 | - |
| 0x21F1C6 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 4 festgestellt | 0 | - |
| 0x21F1C7 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 5 festgestellt | 0 | - |
| 0x21F1C8 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 6 festgestellt | 0 | - |
| 0x21F1C9 | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 7 festgestellt | 0 | - |
| 0x21F1CA | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 8 festgestellt | 0 | - |
| 0x21F1CB | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 9 festgestellt | 0 | - |
| 0x21F1CC | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 10 festgestellt | 0 | - |
| 0x21F1CD | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 11 festgestellt | 0 | - |
| 0x21F1CE | DOBD - SME - HVS: Zellüberwachung: Zelldefekt in Modul 12 festgestellt | 0 | - |
| 0x21F205 | DOBD - SME - HVS: Sicherheitskonzept, Ebene 2: Strom zu niedrig/hoch | 0 | - |
| 0x21F20D | DOBD - SME - SME: Sicherheitskonzept -  Abschaltung durch Ebene2 | 0 | - |
| 0x21F21D | DOBD - SME - HVS: Sicherheitskonzept, Ebene 2: Strom außerhalb der Leitungsschutzgrenzen | 0 | - |
| 0x21F220 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Masse | 0 | - |
| 0x21F221 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - Kurzschluss nach Ubatt | 0 | - |
| 0x21F222 | DOBD - SME - HVS: Stromversorgung U/i-Sensor- - offene Leitung | 0 | - |
| 0x21F227 | DOBD - SME - Plausibilität Kühlmittelsensor - Kühlmittelsensor liefert unplausible Werte zurück | 0 | - |
| 0x21F277 | DOBD - SME-05 - HVS: SBOX Temperatursensorik NTC OOR high | 0 | - |
| 0x21F278 | DOBD - SME-05 - HVS: SBOX Temperatursensorik NTC OOR low | 0 | - |
| 0x21F279 | DOBD - SME-05 - HVS: SBOX Temperatursensorik Plausibilitätsfehler | 0 | - |
| 0x21F2C1 | DOBD - SME - HVS: Symmetrierschaltung Modul 1 ausgefallen | 0 | - |
| 0x21F2C2 | DOBD - SME - HVS: Symmetrierschaltung Modul 2 ausgefallen | 0 | - |
| 0x21F2C3 | DOBD - SME - HVS: Symmetrierschaltung Modul 3 ausgefallen | 0 | - |
| 0x21F2C4 | DOBD - SME - HVS: Symmetrierschaltung Modul 4 ausgefallen | 0 | - |
| 0x21F2C5 | DOBD - SME - HVS: Symmetrierschaltung Modul 5 ausgefallen | 0 | - |
| 0x21F2C6 | DOBD - SME - HVS: Symmetrierschaltung Modul 6 ausgefallen | 0 | - |
| 0x21F2C7 | DOBD - SME - HVS: Symmetrierschaltung Modul 7 ausgefallen | 0 | - |
| 0x21F2C8 | DOBD - SME - HVS: Symmetrierschaltung Modul 8 ausgefallen | 0 | - |
| 0x21F2C9 | DOBD - SME - HVS: Symmetrierschaltung Modul 9 ausgefallen | 0 | - |
| 0x21F2CA | DOBD - SME - HVS: Symmetrierschaltung Modul 10 ausgefallen | 0 | - |
| 0x21F2CB | DOBD - SME - HVS: Symmetrierschaltung Modul 11 ausgefallen | 0 | - |
| 0x21F2CC | DOBD - SME - HVS: Symmetrierschaltung Modul 12 ausgefallen | 0 | - |
| 0x222222 | DTC zum mappen von Entwicklungs-DFCs (DTC wird zu Serie entfernt) | 0 | - |
| 0x22224C | DC/DC-Wandler - Kommunikation - CAN Timeout Botschaften von Inverter 1 | 0 | - |
| 0x22224D | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler von empfangenen Botschaften erkannt | 0 | - |
| 0x222F10 | Platzhalter - DOBD DTCs | 0 | - |
| 0x222FD1 | DC/DC-Wandler - Kommunikation - Checksummen Fehler auf interner CAN Kommunikation | 0 | - |
| 0x222FDB | DC/DC-Wandler - Hardware und Software nicht kompatibel | 0 | - |
| 0x222FDC | DC/DC-Wandler - Inverter 1 und DC/DC-SW nicht kompatibel | 0 | - |
| 0x223045 | Steuergerät intern - SG Reset - Traps Core 0 | 0 | - |
| 0x223046 | Steuergerät intern - SG Reset - Traps Core 1 | 0 | - |
| 0x223047 | Steuergerät intern - SG Reset - Traps Core 3 | 0 | - |
| 0x223048 | Steuergerät intern - SG Reset - Bus Fehler (XBAR) | 0 | - |
| 0x223049 | Steuergerät intern - SG Reset - CDDMONHW Reset | 0 | - |
| 0x22304A | Steuergerät intern - SG Reset - Calibration - SoftwareReset-ID | 0 | - |
| 0x22304B | Steuergerät intern - SG Reset - Calibration - SoftwareReset-ID | 0 | - |
| 0x22304C | Steuergerät intern - SG Reset - Calibration - SoftwareReset-Group-ID | 0 | - |
| 0x22304D | Inverter 1 Verbrennernah - Spannungssensor - Checksumme -HvMcu | 0 | - |
| 0x22304E | Inverter 1 Verbrennernah - Spannungssensor - Checksumme -LvMcu | 0 | - |
| 0x22304F | Inverter 1 Verbrennernah - Spannungssensor - Timeout - LvMcu | 0 | - |
| 0x223050 | Inverter 1 Verbrennernah - Spannungssensor - Timeout - HvMcu | 0 | - |
| 0x223051 | Inverter 1 Verbrennernah - Spannungssensor - Überlauf 1-bit-Buffers | 0 | - |
| 0x223052 | Inverter 1 Verbrennernah - Spannungssensor - Check - UART Interface | 0 | - |
| 0x223053 | Inverter 1 Verbrennernah - Spannungssensor - Zeitstempel PMW Tasks | 0 | - |
| 0x223054 | Inverter 1 Verbrennernah - Spannungssensor - Plausiüberwachung - PWM Task | 0 | - |
| 0x223055 | Inverter 1 Verbrennernah - Spannungssensor - DMA Bus Error UART | 0 | - |
| 0x223056 | Inverter 1 Verbrennernah - Spannungssensor - DMA Bus Error Rx | 0 | - |
| 0x223057 | Inverter 1 Verbrennernah - Spannungssensor - DMA Destination Adress Error UART | 0 | - |
| 0x223058 | Inverter 1 Verbrennernah - Spannungssensor - DMA Destination Adress Error UART | 0 | - |
| 0x223059 | Inverter 1 Verbrennernah - Spannungssensor - DMA Error UART | 0 | - |
| 0x22305A | Inverter 1 Verbrennernah - Spannungssensor - DMA Error Rx Timestamp | 0 | - |
| 0x22305B | Inverter 1 Verbrennernah - Spannungssensor - DMA Source adress error UART | 0 | - |
| 0x22305C | Inverter 1 Verbrennernah - Spannungssensor - DMA source adress error Rx | 0 | - |
| 0x22305D | Inverter 1 Verbrennernah - Spannungssensor - Message Counter check LvMcu | 0 | - |
| 0x22305E | Inverter 1 Verbrennernah - Spannungssensor - Message Counter check HvMcu | 0 | - |
| 0x22305F | Inverter 1 Verbrennernah - Spannungssensor - Überlauf FIFO Puffers Rx | 0 | - |
| 0x223060 | Inverter 1 Verbrennernah - Spannungssensor - Überlauf FIFO Puffers Tx | 0 | - |
| 0x22306C | Steuergerät intern - SG Reset - Core Mpu Violation | 0 | - |
| 0x22306D | Steuergerät intern - SG Reset - Xbar Mpu Violation | 0 | - |
| 0x22306E | Steuergerät intern - SG Reset - Interrupt Fehler | 0 | - |
| 0x22306F | Steuergerät intern - SG Reset - Sammelfehler | 0 | - |
| 0x223070 | Steuergerät intern - Diagnosejob AKS Grund | 0 | - |
| 0x2232B8 | DC/DC-Wandler - Kommunikation - Detection of private CAN BusOff | 0 | - |
| 0x2232B9 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdc10 | 0 | - |
| 0x2232BA | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdc10 | 0 | - |
| 0x2232BB | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdc11 | 0 | - |
| 0x2232BC | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdc10 | 0 | - |
| 0x2232BD | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdc11 | 0 | - |
| 0x2232BE | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdc11 | 0 | - |
| 0x2232BF | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdc11 | 0 | - |
| 0x2232C0 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdc11 | 0 | - |
| 0x2232C1 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcFailure | 0 | - |
| 0x2232C2 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcFailure | 0 | - |
| 0x2232C3 | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcFailure | 0 | - |
| 0x2232C4 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcFailure | 0 | - |
| 0x2232C5 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw | 0 | - |
| 0x2232C6 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw | 0 | - |
| 0x2232C7 | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw | 0 | - |
| 0x2232C8 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw | 0 | - |
| 0x2232C9 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw2 | 0 | - |
| 0x2232CA | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw2 | 0 | - |
| 0x2232CB | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw2 | 0 | - |
| 0x2232CC | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw2 | 0 | - |
| 0x2232CD | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcRaw3 | 0 | - |
| 0x2232CE | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcRaw3 | 0 | - |
| 0x2232CF | DC/DC-Wandler - Kommunikation - Checksummenfehler Botschaft CanMsgDcdcRaw3 | 0 | - |
| 0x2232D0 | DC/DC-Wandler - Kommunikation - Fehler Botschaftszähler Botschaft CanMsgDcdcRaw3 | 0 | - |
| 0x2232D1 | DC/DC-Wandler - Kommunikation - Timeout Botschaft CanMsgDcdcInfo | 0 | - |
| 0x2232D2 | DC/DC-Wandler - Kommunikation - Falsche Botschaftslänge Botschaft CanMsgDcdcInfo | 0 | - |
| 0x22332D | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332E | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22332F | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223330 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223331 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x223332 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x22335F | Inverter 1 Verbrennernah - ZK-Entladung - Plausibilitätsfehler - Gatewiderstandsumschaltung | 0 | - |
| 0x22336A | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CAL ID Timeout | 0 | - |
| 0x22336B | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CAL ID Timeout | 0 | - |
| 0x22336C | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CAL ID Timeout | 0 | - |
| 0x22336D | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CAL ID Timeout | 0 | - |
| 0x22336E | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CAL ID Timeout | 0 | - |
| 0x22336F | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CAL ID Timeout | 0 | - |
| 0x223370 | Plausibilität - Botschaft (Status Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_1_PT) CVN Timeout | 0 | - |
| 0x223371 | Plausibilität - Botschaft (Status Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_2_PT) CVN Timeout | 0 | - |
| 0x223372 | Plausibilität - Botschaft (Status Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_3_PT) CVN Timeout | 0 | - |
| 0x223373 | Plausibilität - Botschaft (Status Slave Diagnose OBD 1 Antriebsstrang, ID: ST_DIAG_OBD_SLV_1) CVN Timeout | 0 | - |
| 0x223374 | Plausibilität - Botschaft (Status Slave Diagnose OBD 2 Antriebsstrang, ID: ST_DIAG_OBD_SLV_2) CVN Timeout | 0 | - |
| 0x223375 | Plausibilität - Botschaft (Status Slave Diagnose OBD 3 Antriebsstrang, ID: ST_DIAG_OBD_SLV_3) CVN Timeout | 0 | - |
| 0x223389 | Steuergerät intern - NVRAM - Nicht redundante abgelegte Daten | 0 | - |
| 0x22338E | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CAL ID Timeout | 0 | - |
| 0x22338F | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) CVN Timeout | 0 | - |
| 0x223390 | Plausibilität - Botschaft (Status Diagnose OBD 17 Antriebsstrang, ID: ST_DIAG_OBD_17_PT) Kommunikationsfehler Diagnosestatusnachricht | 0 | - |
| 0x2233A5 | FUSI - HV - Inverter 1 - Überlast Kabelbaum - AC Seite - Warnung | 0 | - |
| 0x2233B4 | FuSi - LD - Außerhalb gültigen Bereich | 0 | - |
| 0x801180 | DOBD - IHKA - BDC Drucksensor Kältemittel: Plausibilität | 0 | - |
| 0x801181 | DOBD - IHKA - BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x801182 | DOBD - IHKA - BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011B8 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 0 | - |
| 0x8011B9 | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 | - |
| 0x8011BB | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011BC | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011BD | DOBD - IHKA - eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 | - |
| 0x8011C4 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss nach Minus | 0 | - |
| 0x8011C5 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Kurzschluss nach Plus | 0 | - |
| 0x8011C7 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011C8 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011C9 | DOBD - IHKA - eKMV: OBD HV-Spannungssensor Plausibilität | 0 | - |
| 0x8011CA | DOBD - IHKA - eKMV: OBD Spannungssensor am Motortreiber Kurzschluss nach Minus | 0 | - |
| 0x8011CB | DOBD - IHKA - eKMV: OBD Spannungssensor am Motortreiber Kurzschluss nach Plus | 0 | - |
| 0x8011CD | DOBD - IHKA - eKMV: OBD Spannungssensor am Motortreiber oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011CE | DOBD - IHKA - eKMV: OBD Spannungssensor am Motortreiber unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D0 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss nach Minus | 0 | - |
| 0x8011D1 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Kurzschluss nach Plus | 0 | - |
| 0x8011D3 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D4 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D5 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 | - |
| 0x8011D6 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss nach Minus | 0 | - |
| 0x8011D7 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Kurzschluss nach Plus | 0 | - |
| 0x8011D9 | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011DA | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011DB | DOBD - IHKA - eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 | - |
| 0x8011E2 | DOBD - IHKA - eKMV: OBD Speicherfehler RAM | 0 | - |
| 0x8011E3 | DOBD - IHKA - eKMV: OBD Speicherfehler ROM | 0 | - |
| 0x8011E4 | DOBD - IHKA - eKMV: OBD Speicherfehler EEPROM | 0 | - |
| 0x8011E5 | DOBD - IHKA - eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x8011E6 | DOBD - IHKA - eKMV: OBD Softwarefehler Watchdog | 0 | - |
| 0x8011E7 | DOBD - IHKA - eKMV: OBD Fehler Micro-Controller-Peripherie | 0 | - |
| 0x8011E8 | DOBD - IHKA - eKMV: OBD Stromsensor HV-DC Kurzschluss zu Masse | 0 | - |
| 0x8011E9 | DOBD - IHKA - eKMV: OBD Stromsensor HV-DC Kurzschluss zu Batterie | 0 | - |
| 0x8011EA | DOBD - IHKA - eKMV: OBD Stromsensor HV-DC Unterbrechung | 0 | - |
| 0x8011EB | DOBD - IHKA - eKMV: OBD Stromsensor HV-DC oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011ED | DOBD - IHKA - eKMV: OBD Stromsensor HV-DC Plausibilität | 0 | - |
| 0x8011F3 | DOBD - IHKA - eKMV: OBD Funktionsprüfung eKMV | 0 | - |
| 0x8011F4 | DOBD - IHKA - OBDM:eKMV Kommunikationsfehler Diagnose-Statusnachricht | 0 | - |
| 0x8011F5 | DOBD - IHKA - OBDM:eKMV Timeout OBD Diagnosebotschaft | 0 | - |
| 0x8011F6 | DOBD - IHKA - OBDM:eKMV OBD Diagnosebotschaft - Alive Counter Fehler | 0 | - |
| 0x8011FC | DOBD - IHKA - eKMV: Leistungsminderung oder Abschaltung während HV-Batteriekühlung aufgrund eKMV interner Betriebstrategie. | 0 | - |
| 0x801216 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Unterdruck | 0 | - |
| 0x801217 | DOBD - IHKA - Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Überdruck | 0 | - |
| 0x801254 | DOBD - IHKA - eDH: OBD Temperaturfühler Platine - Plausibilitätsfehler | 0 | - |
| 0x801255 | DOBD - IHKA - eDH: OBD Funktionsprüfung eDH | 0 | - |
| 0x801256 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - Kurzschluss nach Minus | 0 | - |
| 0x801257 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - Kurzschluss nach Plus | 0 | - |
| 0x801258 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - Leitungsunterbrechung | 0 | - |
| 0x801259 | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - oberhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x80125A | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - unterhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x80125B | DOBD - IHKA - eDH: OBD Temperaturfühler Kühlmittel - Plausibilitätsfehler | 0 | - |
| 0x80125C | DOBD - IHKA - eDH: OBD Temperaturfühler Platine - Kurzschluss nach Minus | 0 | - |
| 0x80125D | DOBD - IHKA - eDH: OBD Temperaturfühler Platine - Kurzschluss nach Plus | 0 | - |
| 0x80125F | DOBD - IHKA - eDH: OBD Temperaturfühler Platine - oberhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x801260 | DOBD - IHKA - eDH: OBD Temperaturfühler Platine - unterhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x801263 | DOBD - IHKA - eDH: OBD Speicherfehler RAM | 0 | - |
| 0x801264 | DOBD - IHKA - eDH: OBD Speicherfehler ROM | 0 | - |
| 0x801265 | DOBD - IHKA - eDH: OBD Speicherfehler EEPROM | 0 | - |
| 0x801266 | DOBD - IHKA - eDH: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x801267 | DOBD - IHKA - eDH: OBD Softwarefehler Watchdog | 0 | - |
| 0x801268 | DOBD - IHKA - eDH: OBD Fehler in der Micro-Controller-Peripherie | 0 | - |
| 0x801269 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus | 0 | - |
| 0x80126A | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 | - |
| 0x80126E | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 | - |
| 0x80126F | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus | 0 | - |
| 0x801270 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 | - |
| 0x801274 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 | - |
| 0x801275 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus | 0 | - |
| 0x801276 | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 | - |
| 0x80127A | DOBD - IHKA - eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 | - |
| 0x80127B | DOBD - IHKA - eDH: OBD Stromsensor 1  Kurzschluss nach Minus | 0 | - |
| 0x80127C | DOBD - IHKA - eDH: OBD Stromsensor 1 Kurzschluss nach Plus | 0 | - |
| 0x801280 | DOBD - IHKA - eDH: OBD Stromsensor 1  Plausibilitätsfehler | 0 | - |
| 0x801281 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss nach Minus | 0 | - |
| 0x801282 | DOBD - IHKA - eDH: OBD Stromsensor 2 Kurzschluss nach Plus | 0 | - |
| 0x801286 | DOBD - IHKA - eDH: OBD Stromsensor 2 Plausibilitätsfehler | 0 | - |
| 0x801287 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss nach Minus | 0 | - |
| 0x801288 | DOBD - IHKA - eDH: OBD Stromsensor 3 Kurzschluss nach Plus | 0 | - |
| 0x80128C | DOBD - IHKA - eDH: OBD Stromsensor 3 Plausibilitätsfehler | 0 | - |
| 0x80128D | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Minus | 0 | - |
| 0x80128E | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Plus | 0 | - |
| 0x801292 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 1 - Plausibilität | 0 | - |
| 0x801293 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Minus | 0 | - |
| 0x801294 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Plus | 0 | - |
| 0x801298 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 2 - Plausibilität | 0 | - |
| 0x801299 | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Minus | 0 | - |
| 0x80129A | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Plus | 0 | - |
| 0x80129E | DOBD - IHKA - eDH: OBD Spannungssensor oberhalb Mosfets 3 - Plausibilität | 0 | - |
| 0x80129F | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss nach Minus | 0 | - |
| 0x8012A0 | DOBD - IHKA - eDH: OBD HV Spannungssensor Kurzschluss nach Plus | 0 | - |
| 0x8012A2 | DOBD - IHKA - eDH: OBD HV-Spannungssensor - über Betriebsbereich | 0 | - |
| 0x8012A3 | DOBD - IHKA - eDH: OBD HV-Spannungssensor - unter Betriebsbereich | 0 | - |
| 0x8012A4 | DOBD - IHKA - eDH: OBD HV Spannungssensor Plausibilitätsfehler | 0 | - |
| 0x8012A5 | DOBD - IHKA - OBDM:eDH Kommunikationsfehler Diagnose-Statusnachricht | 0 | - |
| 0x8012A6 | DOBD - IHKA - OBDM:eDH Timeout OBD Diagnosebotschaft | 0 | - |
| 0x8012A7 | DOBD - IHKA - OBDM:eDH OBD Diagnosebotschaft - Alive Counter Fehler | 0 | - |
| 0x8012F1 | DOBD - IHKA - OBD: Kältekreislauf - HV-Batterie - Kühlleistung unplausibel | 0 | - |
| 0x80130B | DOBD - IHKA - Keine Kommunikation über AC-LIN2 möglich | 0 | - |
| 0x801318 | DOBD - IHKA - IHKA: 12V Unterspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x801319 | DOBD - IHKA - IHKA: 12V Überspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x80131A | DOBD - IHKA - IHKA: 12V Spannungssensor Kurzschluss nach Masse oder Leitungsunterbrechung. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x80131C | DOBD - IHKA - IHKA: 12V Spannungssensor Plausibilität. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x8013FA | DOBD - IHKA - Micro-Controller Peripherie Fehler (IHKA) | 0 | - |
| 0x8013FB | DOBD - IHKA - RAM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FC | DOBD - IHKA - ROM/Flash Speicher Fehler (IHKA) | 0 | - |
| 0x8013FD | DOBD - IHKA - EEPROM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FE | DOBD - IHKA - Software Laufzeitfehler (IHKA) | 0 | - |
| 0x8013FF | DOBD - IHKA - Software Watchdogfehler (IHKA) | 0 | - |
| 0x805500 | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Leitungsunterbrechung | 0 | - |
| 0x805501 | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Masse | 0 | - |
| 0x805502 | DOBD - OBC - Ladeanschlussklappe: Verriegelung, Kurzschluss nach Plus | 0 | - |
| 0xCAC47C | DOBD - SME - LE-CAN Control Module Bus OFF | 0 | - |
| 0xCAC486 | DOBD - SME - A-CAN Control Module Bus OFF | 0 | - |
| 0xCAD401 | DOBD - SME - Botschaft (Außentemperatur, 0x2CA) fehlt | 0 | - |
| 0xCAD403 | DOBD - SME - Botschaft (Zustand Fahrzeug 0x3C) fehlt | 0 | - |
| 0xCAD409 | DOBD - SME - Botschaft (Freigabe Kühlung Hochvolt-Batterie, 0x37B) fehlt | 0 | - |
| 0xCAD40C | DOBD - SME - Botschaft (Klemmen, 0x12F) fehlt | 0 | - |
| 0xCAD415 | DOBD - SME - Botschaft (Trennschalter HVS, 0x10B) fehlt | 0 | - |
| 0xCAD416 | DOBD - SME - Schnittstelle AE Vorgabe Trennschalter Hochvoltspeicher, 0x10B: Signal ungültig | 0 | - |
| 0xCE040A | DOBD - OBC - FA-CAN Control Module Bus OFF | 0 | - |
| 0xCE047C | DOBD - OBC - LE-CAN Control Module Bus OFF | 0 | - |
| 0xCE0486 | DOBD - OBC-01, OBC-02 - A-CAN Control Module Bus OFF | 0 | - |
| 0xCE1400 | DOBD - OBC - Message SPEC_CF_CHGE (Vorgabe Komfort Ladeelektronik, 0x153) missing, receiver SLE, sender EME | 0 | - |
| 0xCE1401 | DOBD - OBC - Message STAT_HVSTO_2 (Status Hochvoltspeicher 2, 0x112) missing, receiver SLE, sender HVS | 0 | - |
| 0xCE1404 | DOBD - OBC - Message CHGNG_ST (Daten Hochvoltspeicher, 0x3E9) missing, receiver SLE, sender EME | 0 | - |
| 0xCE140D | DOBD - OBC - Message DT_PT_2 (Daten Antriebsstrangr, 0x3F9) missing, receiver SLE, sender DME1 | 0 | - |
| 0xCE140E | DOBD - OBC - Signal TAR_PWR_CF_CHGNG (Target power, 0x153) invalid receiver SLE, sender EME | 0 | - |
| 0xCE140F | DOBD - OBC - Signal TAR_OPMO_CF_CHGE (Target operating mode, 0x153) invalid receiver SLE, sender EME | 0 | - |
| 0xCE1410 | DOBD - OBC - Signal TAR_OPMO_CF_CHGE (Target operating mode, 0x153) undefined receiver SLE, sender EME | 0 | - |
| 0xCE1411 | DOBD - OBC - Signal SPEC_I_MAX_DC_CF_CHGE (Current DC max, 0x153) invalid receiver SLE, sender EME | 0 | - |
| 0xCE1412 | DOBD - OBC - Signal SPEC_I_MAX_ALTC_CF_CHGE (Current AC max, 0x153) invalid receiver SLE, sender EME | 0 | - |
| 0xCE1413 | DOBD - OBC - Signal SPEC_U_MAX_CHG_CHGE (Voltage DC max, 0x153) invalid receiver SLE, sender EME | 0 | - |
| 0xCE1414 | DOBD - OBC - Signal ST_CLSY (Status central locking station,  0x2FC) invalid receiver SLE, sender BDC2015 | 0 | - |
| 0xCE1415 | DOBD - OBC - Signal AVL_U_HVSTO (Status HVSTO,  0x112) undefineid receiver SLE, sender HVS | 0 | - |
| 0xCE1416 | DOBD - OBC - Signal AVL_U_HVSTO (Status HVSTO,  0x112) invalid receiver SLE, sender HVS | 0 | - |
| 0xCE1417 | DOBD - OBC - Signal AVL_U_LINK (Actual voltage  HVSTO,  0x112) undefined receiver SLE, sender HVS | 0 | - |
| 0xCE1418 | DOBD - OBC - Signal AVL_U_LINK (Actual voltage  HVSTO,  0x112) invalid receiver SLE, sender HVS | 0 | - |
| 0xCE1419 | DOBD - OBC - Signal ST_CHGRDI (Status charge readiness,  0x3E9) undefined receiver SLE, sender EME | 0 | - |
| 0xCE141A | DOBD - OBC - Signal ST_CHGRDI (Status charge readiness,  0x3E9) invalid receiver SLE, sender EME | 0 | - |
| 0xCE141B | DOBD - OBC - Signal ST_GRSEL_DRV (Status gear selection drive, 0x3F9) undefined receiver SLE, sender DME | 0 | - |
| 0xCE141C | DOBD - OBC - Signal ST_GRSEL_DRV (Status gear selection drive, 0x3F9) invalid receiver SLE, sender DME | 0 | - |
| 0xCE1430 | DOBD - OBC - Message STAT_ZV_KLAPPEN (Status central locking sytem and flap, 0x2FC) missing, receiver SLE, sender BDC2015 | 0 | - |
| 0xE7041E | DOBD - IHKA - IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE70C30 | DOBD - IHKA - AC-LIN: eKMV antwortet nicht | 0 | - |
| 0xE70C3A | DOBD - IHKA - AC-LIN: EDH antwortet nicht | 0 | - |
| 0xE71400 | DOBD - IHKA - Botschaft (0x2CA, Außentemperatur): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71402 | DOBD - IHKA - Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71409 | DOBD - IHKA - Botschaft (0x2D2 Status Druck Kältekreislauf): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71439 | DOBD - IHKA - Botschaft (0x3A0, Fahrzeugzustand): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE7143A | DOBD - IHKA - Botschaft (0x38C, Steuerung Klimakompressor): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE7143D | DOBD - IHKA - Botschaft (0x1FA, Status Hochvoltspeicher 1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71440 | DOBD - IHKA - Botschaft (0x389, Status Ventil Hochvoltbatterie-Kühlung): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE7144E | DOBD - IHKA - Botschaft (0x397, Diagnose OBD Motor): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE7144F | DOBD - IHKA - Botschaft (0x3E8, Diagnose OBD Motorsteuerung Elektrisch): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71450 | DOBD - IHKA - Botschaft (0x2DF, Freigabe Leistung Funktionen Klima 1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71451 | DOBD - IHKA - Botschaft (0x12F, Klemmen): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71452 | DOBD - IHKA - Botschaft (0x328, Relativzeit BN2020): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71453 | DOBD - IHKA - Botschaft (0x112, Status Hochvoltspeicher 2): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71454 | DOBD - IHKA-PR02 - Botschaft (0x1B9, Wärmemanagement Motorsteuerung): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0xE71455 | DOBD - IHKA - Botschaft (0x304, DME IBS_1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71458 | DOBD - IHKA - AC-LIN: Botschaft (0x15, Status_Diagnose_System_EKMV20_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71459 | DOBD - IHKA - AC-LIN: Botschaft (0xD,Status_Diagnose_System_eDH_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71460 | DOBD - IHKA - Botschaft (0x432, Modus Spannungsgesteuert MOD_VC): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71461 | DOBD - IHKA - Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71462 | DOBD - IHKA - AC-LIN: Botschaft (0x11, Status_eDH_LIN ST_eDH_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71463 | DOBD - IHKA - AC-LIN: Botschaft (0x1F, Status_EKMV20_LIN ST_EKMV20_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_ASWDCDC_ERROR | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SHOFFPAH_ERROR | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_UOVER_ERROR | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMINT_CDDIHM_ERROR | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_COMRX_ERROR | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | DCDC_GLOBAL_ENABLE_GRUND_DCDC_SBNETSHCIRC_ERROR | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | DCDC_GLOBAL_ENABLE_GRUND_PERMANENT_ERROR | 0/1 | High | 0x80 | - | - | - | - |
| 0x0008 | EWS_4_6_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0009 | MONTAGEMODUS_AKTIV | 0/1 | High | 0x0002 | - | - | - | - |
| 0x000A | STEUERN_RL_SENSOR_ANLERNEN_AKTIV | 0/1 | High | 0x0004 | - | - | - | - |
| 0x000B | STEUERN_AKS_EMK_START_AKTIV | 0/1 | High | 0x0008 | - | - | - | - |
| 0x000C | STEUERN_FREILAUFMODUS_AKTIV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x000D | HVSM_SSREQ_BWP_AKTIV | 0/1 | High | 0x0020 | - | - | - | - |
| 0x000E | HVSM_SSREQ_FWP_AKTIV | 0/1 | High | 0x0040 | - | - | - | - |
| 0x000F | VORGABE_STANDBY | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0010 | VORGABE_AKTIVER_KURZSCHLUSS | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0011 | VORGABE_FREILAUF | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0012 | SOLLBETRIEBSART | 0-n | High | 0xFF | TAB_SOLLBETRIEBSART | - | - | - |
| 0x0013 | STERRMOT1_AKS | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0014 | STERRMOT1_FREILAUF | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0015 | STERRMOT1_EM_UEBERTEMPERATUR | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0016 | STERRMOT1_RESOLVER_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0017 | STERRMOT1_HW_FEHLER | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0018 | STERRMOT1_INVERTER_UEBERTEMP | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0019 | BETRIEBSART | 0-n | High | 0xFF | TAB_BETRIEBSART | - | - | - |
| 0x001A | OP_MODE | 0-n | High | 0xFF | TAB_OP_MODE | - | - | - |
| 0x001B | UWB_HVSTART_ISO_ERROR_DCDC_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0x001C | UWB_HVSTART_ISO_ERROR_UMRICHTER_IN_AKS | 0/1 | High | 0x02 | - | - | - | - |
| 0x001D | UWB_HVSTART_ISO_ERROR_UMRICHTER_IN_FREILAUF | 0/1 | High | 0x04 | - | - | - | - |
| 0x001E | UWB_HVSTART_ISO_ERROR_LADEGERAET_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x001F | UWB_HVSTART_ISO_ERROR_EDH_AKTIV | 0/1 | High | 0x10 | - | - | - | - |
| 0x0020 | UWB_HVSTART_ISO_ERROR_EKMV_AKTIV | 0/1 | High | 0x20 | - | - | - | - |
| 0x0021 | UWB_HVSTART_ISO_ERROR_ISO_WARN_AKTIV | 0/1 | High | 0x40 | - | - | - | - |
| 0x0022 | UWB_HVSTART_ISO_ERROR_ISO_ERR_AKTIV | 0/1 | High | 0x80 | - | - | - | - |
| 0x0023 | DFC_RBE_CDDHVMCU_HVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0024 | DFC_RBE_CDDHVMCU_HVMCURXDSBC_AKTIV | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0025 | DFC_RBE_CDDHVMCU_LVMCURXCRCMSM_AKTIV | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0026 | DFC_RBE_CDDHVMCU_LVMCURXTOUT_AKTIV | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0027 | DFC_RBE_CDDHVMCU_HVMCURXTOUT_AKTIV | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0028 | DFC_RBE_CDDHVMCU_HVMCURXBUFOVF_AKTIV | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0029 | DFC_RBE_CDDHVMCU_LVMCURXDMADESTADRERR_AKTIV | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x002A | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMADESTADRERR_AKTIV | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x002B | DFC_RBE_CDDHVMCU_LVMCURXDMASRCADRERR_AKTIV | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x002C | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMASRCADRERR_AKTIV | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x002D | DFC_RBE_CDDHVMCU_LVMCURXDMAERR_AKTIV | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x002E | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMAERR_AKTIV | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x002F | DFC_RBE_CDDHVMCU_LVMCURXDMABUSERR_AKTIV | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0030 | DFC_RBE_CDDHVMCU_LVMCURXTISTAMPDMABUSERR_AKTIV | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0031 | DFC_RBE_CDDHVMCU_HVMCUTSKNOTSYNCD_AKTIV | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0032 | DFC_RBE_CDDHVMCU_HVMCUTSKPERDERR_AKTIV | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0033 | DFC_RBE_CDDHVMCU_LVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0034 | DFC_RBE_CDDHVMCU_HVMCURXMSGCNTRMSM_AKTIV | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0035 | DFC_RBE_CDDHVMCU_LVMCURXFIFOOVF_AKTIV | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0036 | DFC_RBE_CDDHVMCU_LVMCUTXFIFOOVF_AKTIV | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0037 | DFC_RBE_CDDHVMCU_STPSGATERMSM_AKTIV | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0038 | UWB_HVLADEN_ERROR_LADEGERAET_HW_FEHLER | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0039 | UWB_HVLADEN_ERROR_LADEGERAET_AC_SPANNUNG | 0/1 | High | 0x0002 | - | - | - | - |
| 0x003A | UWB_HVLADEN_ERROR_DCDC_NICHT_VERFUEGBAR | 0/1 | High | 0x0004 | - | - | - | - |
| 0x003B | UWB_HVLADEN_ERROR_HV_NICHT VERFUEGBAR | 0/1 | High | 0x0008 | - | - | - | - |
| 0x003C | UWB_HVLADEN_ERROR_AC_SPANNUNG_NICHT_VORHANDEN | 0/1 | High | 0x0010 | - | - | - | - |
| 0x003D | UWB_HVLADEN_ERROR_STECKER_UNERWARTET_GEZOGEN | 0/1 | High | 0x0020 | - | - | - | - |
| 0x003E | UWB_HVLADEN_ERROR_STECKER_UNERWARTET_ENTRIEGELT | 0/1 | High | 0x0040 | - | - | - | - |
| 0x003F | UWB_HVLADEN_ERROR_LADEGERAET_UNGUELTIGE_BETRIEBSART | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0040 | UWB_HVLADEN_ERROR_LADERGERAET_CRASH | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0041 | UWB_HVLADEN_ERROR_LADEGERAET_FEHLER | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0042 | UWB_HVLADEN_ERROR_LADEGERAET_UNTERBRECHUNG | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0043 | UWB_HVLADEN_ERROR_AC_STROMGRENZE_GLEICH_NULL | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0044 | UWB_HVLADEN_ERROR_KOMMFEHLER_HVS_ODER_LADEINTERFACE | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0045 | UWB_HVLADEN_ERROR_KOMMFEHLER_LADEGERAET | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0046 | UWB_HVSTART_ERROR_ISOLATION_WARNUNG | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0047 | UWB_HVSTART_ERROR_ISOLATIONS_FEHLER | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0048 | UWB_HVSTART_ERROR_EINFACHER_SCHUETZKLEBER | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0049 | UWB_HVSTART_ERROR_DOPPELTER_SCHUETZKLEBER | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x004A | UWB_HVSTART_ERROR_SYSTEMINTERLOCK_FEHLERVERDACHT | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x004B | UWB_HVSTART_ERROR_SYSTEMINTERLOCK | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x004C | UWB_HVSTART_ERROR_SERVICE_DISCONNECT_OFFEN | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x004D | UWB_HVSTART_ERROR_KAT6_SME_VERDACHT | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x004E | UWB_HVSTART_ERROR_KAT6_SME | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x004F | UWB_HVSTART_ERROR_KAT7_SME_VERDACHT | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0050 | UWB_HVSTART_ERROR_KAT7_SME | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0051 | UWB_HVSTART_ERROR_SIGNALAUSFALL_SME_VERDACHT | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0052 | UWB_HVSTART_ERROR_SIGNALAUSFALL_SME | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0053 | UWB_HVSTART_ERROR_SIGNALAUSFALL_EME_VERDACHT | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0054 | UWB_HVSTART_ERROR_SIGNALAUSFALL_EME | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0055 | UWB_HVSTART_ERROR_SIGNALAUSFALL_IHKA | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0056 | UWB_HVSTART_ERROR_ENTLADESCHUTZ_AKTIV | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0057 | UWB_HVSTART_ERROR_CRASH_SCHWERE_1 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0058 | UWB_HVSTART_ERROR_CRASH_SCHWERE_2 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0059 | UWB_HVSTART_ERROR_FLASH_MODE_EME | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x005A | UWB_HVSTART_ERROR_HV_SYSTEM_SICHER_ABGESCHALTET_CCM636 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x005B | UWB_HVSTART_ERROR_RESTLAUFZEIT_30B_KRITISCH | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x005C | UWB_HVSTART_ERROR_DIAGNOSEJOB_HVPM_ZUM_HV_POWERDOWN | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x005D | UWB_HVSTART_ERROR_DIAGNOSEJOB_FUNCTIONAL_SLEEP_GESAMTFAHRZEUG | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x005E | UWB_HVSTART_ERROR_KAT1_SME_VERDACHT | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x005F | UWB_HVSTART_ERROR_KAT1_SME | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0060 | UWB_HVSTART_ERROR_KAT5_SME_VERDACHT | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x0061 | UWB_HVSTART_ERROR_KAT5_SME | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x0062 | UWB_HVSTART_ERROR_BB_ANGEFORDERT_VON_NLM | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1702 | SAE_CODE | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x170C | VERSORGUNGSSPANNUNG | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | DCDC_SPANNUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6026 | UWB_DCDC_U_GND_DIFF | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x6027 | UWB_DCDC_R_Masseband | mOhm | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x6028 | UWB_DCDC_I_LV_MAX_MASSE | A | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x6100 | AUSSENTEMP | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6101 | MOTORTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6102 | GESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x6103 | AKTIVZEIT | min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x6104 | VKL30 | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6105 | STATUS_KL15 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6106 | ABSTELLZEIT | min | High | unsigned int | - | 4.0 | 1.0 | 0.0 |
| 0x6107 | 30V_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6108 | ASIC_SPANNUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6109 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x610A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610B | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x610C | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x610D | ISTDREHZAHL | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x610E | ISTMOMENT | Nm | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x610F | STATORTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x6110 | KUEHLMITTELTEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6111 | KUEHLWASSERTEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6112 | HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x6113 | HV_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6114 | STATORSTROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6115 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6116 | VKL30_DCDC | V | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x6117 | IKL30_DCDC | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6118 | HVI_DCDC | A | High | signed int | - | 1.0 | 512.0 | 0.0 |
| 0x611D | DCDC_BA_TARGET | 0-n | High | 0xFF | - | - | - | - |
| 0x6124 | KL30_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6125 | 30V_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6126 | CY327_SPANNUNG_VOR_QUALIFIZIERUNG | V | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x6127 | ANFORDERUNG_ZWISCHENKREISENTLADUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x6129 | INVERTER_VERLUSTLEISTUNG | W | High | signed int | - | 1.0 | 4.0 | 0.0 |
| 0x612A | KUHLMITTELPUMPE_DREHZAHL | 1/min | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x612B | KUHLMITTEL_DURCHFLUSS | l/h | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x612C | IGBT_DIODENTEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612D | IGBT_TEMPERATUR | °C | High | signed int | - | 1.0 | 64.0 | 0.0 |
| 0x612E | HV_SPANNUNG_BATTERIE | V | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x612F | STATORSTROM_EFFEKTIV_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6130 | PHASE_U_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6131 | PHASE_V_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6132 | PHASE_W_STROM | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6133 | PHASE_U_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6134 | PHASE_V_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6135 | PHASE_W_STROM_VOR_QUALIFIZIERUNG | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6136 | RESETINFO_CTRST_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x6137 | RESETINFO_CTGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6138 | RESETINFO_XGRP_COPY | HEX | High | unsigned char | - | - | - | - |
| 0x6139 | RESETINFO_XLD_COPY | HEX | High | unsigned int | - | - | - | - |
| 0x613A | RESETINFO_XUSERVALUE_COPY | HEX | High | unsigned long | - | - | - | - |
| 0x613B | RESET_HIST_BUFFER_0 | HEX | High | unsigned int | - | - | - | - |
| 0x613C | RESET_HIST_BUFFER_1 | HEX | High | unsigned int | - | - | - | - |
| 0x613D | RESET_HIST_BUFFER_2 | HEX | High | unsigned int | - | - | - | - |
| 0x613E | RESET_HIST_BUFFER_3 | HEX | High | unsigned int | - | - | - | - |
| 0x613F | RESET_HIST_BUFFER_4 | HEX | High | unsigned int | - | - | - | - |
| 0x6140 | RESET_HIST_BUFFER_5 | HEX | High | unsigned int | - | - | - | - |
| 0x6141 | RESET_HIST_BUFFER_6 | HEX | High | unsigned int | - | - | - | - |
| 0x6142 | RESET_HIST_BUFFER_7 | HEX | High | unsigned int | - | - | - | - |
| 0x6143 | DCDC_GLOBAL_ENABLE | 0/1 | High | 0x01 | - | - | - | - |
| 0x6144 | MOTOR_ANTRIEB_LUFTDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x6145 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6146 | BITMASKE_SAMMELFEHLER | HEX | High | unsigned long | - | - | - | - |
| 0x6147 | MONITORING_ERR_REACT_REQ | 0/1 | High | 0x01 | - | - | - | - |
| 0x6148 | MONITORING_NO_TRQ_ALLOWED | 0/1 | High | 0x01 | - | - | - | - |
| 0x614A | MONITORING_ST_MOD_ACT_INT | HEX | High | unsigned char | - | - | - | - |
| 0x614B | MONITORING_COM_CNTR_ERR_FC | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614C | MONITORING_COM_CNTR_ERR_MM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x614D | MONITORING_COMRX_UDCLNK_BMWRX | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614E | MONITORING_COMRX_UHV_CMFT_CHRGN_ELECTC_ACT | V | High | signed int | - | 1.0 | 32.0 | 0.0 |
| 0x614F | MONITORING_IPHA_IQAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6150 | MONITORING_IPHA_IDAFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6151 | MONITORING_IPHA_FLGL_DETD | 0/1 | High | 0x01 | - | - | - | - |
| 0x6152 | MONITORING_IPHA_IAMP_VECTLFILD | A | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x6153 | MONITORING_PWMST_ERR | HEX | High | unsigned int | - | - | - | - |
| 0x6154 | MONITORING_COMINT_AGRTRELECWOOFFS | ° | High | unsigned int | - | 1.0 | 182.044444 | 0.0 |
| 0x6155 | DIAG_ACTVSC_DSMAPIDTC | HEX | High | unsigned long | - | - | - | - |
| 0x6156 | DIAG_ACTVSC_REQEMTQLIMN | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6157 | DIAG_ACTVSC_FWD_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6158 | DIAG_ACTVSC_BACK_HVSMSTATLAT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6159 | DIAG_ACTVSC_FUSI_FWP_LDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615A | DIAG_ACTVSC_FUSILDUWB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x615B | CRASHSEV | 0-n | High | 0xFF | TAB_CRASHSEV | - | - | - |
| 0x615C | MONITORING_FLG_ERR_REAC_REQD | 0/1 | High | 0x01 | - | - | - | - |
| 0x615D | HVMCU_ST_MOD | 0-n | High | 0xFF | TAB_HVMCU_ST_MOD | - | - | - |
| 0x615E | 15V_L_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x615F | 15V_L_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6160 | HVMCU_I_DCHA_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6161 | HVMCU_I_DCHA_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6162 | PCB_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6163 | EFUSE_I_SENSR_LOWRES | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6164 | EFUSE_I_SENSR_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6165 | EFUSE_U_SPLY_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6166 | EFUSE_U_SPLY_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6167 | ST_GATEDRV | 0-n | High | 0xFF | TAB_ST_GATEDRV | - | - | - |
| 0x6168 | ST_HVBCNTCT | 0-n | High | 0xFF | TAB_ST_HVBCNTCT | - | - | - |
| 0x6169 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x616A | VKL30_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616B | 30V_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616C | ASIC_SPANNUNG_LOWRES | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616D | STATORSTROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x616E | KL30_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x616F | 30V_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6170 | CY327_SPANNUNG_LOWRES_VOR_QUALIFIZIERUNG | V | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6171 | HV_SPANNUNG_BATTERIE_LOWRES | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x6172 | STATORSTROM_EFFEKTIV_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6173 | PHASE_U_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6174 | PHASE_V_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6175 | PHASE_W_STROM_LOWRES | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6176 | PHASE_U_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6177 | PHASE_V_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6178 | PHASE_W_STROM_LOWRES_VOR_QUALIFIZIERUNG | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x6179 | IGBT_DIODENTEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617A | IGBT_TEMPERATUR_LOWRES | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x617B | RESETINFO_MONITORING_EMM_CORE0 | HEX | High | unsigned long | - | - | - | - |
| 0x617C | RESETINFO_MONITORING_EMM_CORE1 | HEX | High | unsigned long | - | - | - | - |
| 0x617D | RESETINFO_MONITORING_EMM_CORE2 | HEX | High | unsigned long | - | - | - | - |
| 0x617E | RBA_MEMDIAG_EXTD_NRLSTREADSGNERR | HEX | High | unsigned int | - | - | - | - |
| 0x617F | RBA_MEMDIAG_NRLSTREADERR | HEX | High | unsigned int | - | - | - | - |
| 0x6180 | RBA_MEMDIAG_NRLSTWRERR | HEX | High | unsigned int | - | - | - | - |
| 0x6181 | ELUP_STOVRCURR | 0/1 | High | 0x01 | - | - | - | - |
| 0x7000 | UWB_DCDC_Target_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7001 | UWB_DCDC_Target_Voltage_HV_Min | V | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x7002 | UWB_DCDC_Maximum_Input_Power | W | High | unsigned char | - | 3100.0 | 255.0 | 0.0 |
| 0x7003 | UWB_DCDC_Target_BA | 0-n | High | 0xFF | TAB_DCDC_BA_TARGET | - | - | - |
| 0x7004 | UWB_DCDC_Actual_Current_HV | A | High | unsigned char | - | 2.0 | 10.0 | 0.0 |
| 0x7005 | UWB_DCDC_Actual_Voltage_LV | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7007 | UWB_DCDC_Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x7008 | UWB_DCDC_Actual_BA | 0-n | High | 0xFF | TAB_UWB_DCDC_ACTUAL_BA | - | - | - |
| 0x7009 | UWB_DCDC_Actual_Filtered_Current_LV | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700A | UWB_ELUP_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700B | UWB_ELUP_VERSORGUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x700C | UWB_ELUP_STROM_CH1 | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x700E | UWB_ELUP_UNTERDRUCKMMESSWERT | hPa | High | unsigned char | - | 4.0 | 1.0 | -1000.0 |
| 0x700F | UWB_ELUP_UMGEBUNGSDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x7013 | UWB_EM1_TEMPERATUR_STATOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7014 | UWB_EM1_TEMPERATUR_ROTOR | °C | High | unsigned char | - | 290.0 | 255.0 | -40.0 |
| 0x7015 | UWB_EM1_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | -30000.0 |
| 0x7016 | UWB_EM1_SOLL_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7017 | UWB_EM1_IST_DREHMOMENT | Nm | High | unsigned char | - | 1275.0 | 255.0 | -635.0 |
| 0x7018 | UWB_EM1_DERATING_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7019 | UWB_INV1_TEMPERATUR_PHASE_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701A | UWB_INV1_TEMPERATUR_PHASE_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701B | UWB_INV1_TEMPERATUR_PHASE_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701C | UWB_INV1_TEMPERATUR_KUEHLMITTEL | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x701D | UWB_INV1_SPANNUNG_DC | V | High | unsigned char | - | 1020.0 | 255.0 | 0.0 |
| 0x701E | UWB_INV1_DERATING_STATUS | HEX | High | unsigned char | - | - | - | - |
| 0x701F | UWB_E_ANTRIEB_1_IST_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART | - | - | - |
| 0x7020 | UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | 0-n | High | 0xFF | TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART | - | - | - |
| 0x7021 | UWB_INV1_TEMPERATUR_IGBT_DIODE_MAX | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x7023 | UWB_E_ANTRIEB_1_FEHLER_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x7035 | UWB_HV_BATTERIE_SOC | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0x7036 | UWB_HV_BATTERIE_STROM_DC | A | High | unsigned char | - | 2040.0 | 255.0 | -1020.0 |
| 0x7037 | UWB_HVSTART_STATE | 0-n | High | 0xFF | TAB_UWB_HVSTART_STATE | - | - | - |
| 0x7038 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x703A | UWB_HVB_SOC_MIN | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x703C | UWB_STATUS_ENTLADESCHUTZ | 0-n | High | 0xFF | TAB_UWB_STATUS_ENTLADESCHUTZ | - | - | - |
| 0x703D | UWB_U_DC_LE_IST | V | High | unsigned int | - | 1.0 | 64.0 | 0.0 |
| 0x703F | UWB_HVLADEN_STATE | 0-n | High | 0xFFFF | TAB_UWB_HVLADEN_STATE | - | - | - |
| 0x7040 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x7041 | UWB_HVLADEN_CHARGE_WISH | 0-n | High | 0xFFFF | TAB_UWB_HVLADEN_CHARGE_WISH | - | - | - |
| 0x7042 | UWB_VOKO_FREIGABE | 0/1 | High | 0x0001 | - | - | - | - |
| 0x7043 | UWB_LK_P_IHKA_IST | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7044 | UWB_LK_P_IHKA_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7045 | UWB_LK_P_HVB_MOT_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7046 | UWB_LK_P_HVB_GEN_MAX | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x7047 | UWB_LK_STATE | 0-n | High | 0xFF | TAB_UWB_LK_STATE | - | - | - |
| 0x7048 | UWB_KMV_SPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x7049 | UWB_KMV_STROM | A | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x704A | UWB_KMV_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x704B | UWB_KMV_PWM_AUSGANGPEGEL_HIGH | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704C | UWB_KMV_PWM_AUSGANGPEGEL_LOW | - | High | unsigned int | - | 1.0 | 400.0 | 0.0 |
| 0x704D | UWB_DCDC_Actual_Power_HV | W | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x704E | UWB_DCDC_Actual_Load | % | High | unsigned int | - | 1.0 | 512.0 | 0.0 |
| 0x704F | UWB_FUSI_BACK_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_BACK_HVSM_STATUS_AKKU | - | - | - |
| 0x7050 | UWB_FUSI_FWD_HVSM_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_FWD_HVSM_STATUS_AKKU | - | - | - |
| 0x7051 | UWB_FUSI_WBD_STATUS_AKKU | 0-n | High | 0xFFFF | TAB_FUSI_WBD_STATUS_AKKU | - | - | - |
| 0x7054 | UWB_FUSI_VEHICLE_SPEED | km/h | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x7055 | UWB_FUSI_KL15 | 0/1 | High | 0x01 | - | - | - | - |
| 0x7056 | UWB_FUSI_BACK_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_BACK_LD_STATUS | - | - | - |
| 0x7057 | UWB_FUSI_FWD_LD_STATUS | 0-n | High | 0xFF | TAB_FUSI_FWD_LD_STATUS | - | - | - |
| 0x7058 | UWB_FUSI_BOSCH_STATUS | 0-n | High | 0xFFFF | TAB_FUSI_BOSCH_STATUS | - | - | - |
| 0x7059 | UWB_FUSI_I_INV_DC | A | High | signed int | - | 1800.0 | 65536.0 | 0.0 |
| 0x705A | UWB_FUSI_OPMO_CHGE | 0-n | High | 0xFF | TAB_FUSI_OPMO_CHGE | - | - | - |
| 0x705B | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x7085 | UWB_DCDC_RATIO_PHASE_SHIFT | % | High | unsigned int | - | 100.0 | 65535.0 | 0.0 |
| 0x7086 | UWB_I_HV_TRANSFORMER | A | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0x7087 | UWB_I_LV_DCDC_OUTPUT | A | High | unsigned int | - | 1.0 | 32.0 | 0.0 |
| 0x7088 | UWB_DCDC_U_LV_SETPOINT | V | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0x7089 | UWB_STATUS_DCDC_LV_CONTROL_DIAGNOSIS | 0-n | High | 0xFF | TAB_DCDC_DIAG_STATUS | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X1721_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_XHISTBUF_01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[0] |
| STAT_RESET_XHISTBUF_02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[1] |
| STAT_RESET_XHISTBUF_03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[2] |
| STAT_RESET_XHISTBUF_04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[3] |
| STAT_RESET_XHISTBUF_05_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[4] |
| STAT_RESET_XHISTBUF_06_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[5] |
| STAT_RESET_XHISTBUF_07_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[6] |
| STAT_RESET_XHISTBUF_08_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reset_xHistBuf_[7] |

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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SA1_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA1_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA1_HVSM_BWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA1_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA1_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA1_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA1_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA1_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA1_RPM_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA1_ULINK_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA1_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA1_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA1_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA1_ST_ERR_MOT_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA1_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA2_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA2_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA2_HVSM_BWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA2_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA2_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA2_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA2_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA2_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA2_RPM_WERT | 1/s | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA2_ULINK_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA2_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA2_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA2_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA2_ST_ERR_MOT_1_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA2_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA3_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA3_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA3_HVSM_BWP_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort HVSM Bwp |
| STAT_SA3_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA3_FUSI_ARAD_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA3_AKS_REASON_IN_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA3_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA3_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA3_RPM_WERT | 1/s | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA3_ULINK_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA3_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA3_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA3_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA3_ST_ERR_MOT_1_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA3_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA4_FUSI_LD_FWP_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD Fwp  |
| STAT_SA4_FUSI_LD_WERT | HEX | high | unsigned char | - | - | - | - | - | Statuswort Fusi LD  |
| STAT_SA4_HVSM_BWP_WERT | HEX | high | signed int | - | - | - | - | - | Statuswort HVSM Bwp  |
| STAT_SA4_HVSM_FWP_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort HVSM Fwp  |
| STAT_SA4_FUSI_ARAD_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fusi ARAD  |
| STAT_SA4_AKS_REASON_IN_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Messpunkt Eingangsverarbeitung Betriebsartenvorgabe RB Systemmanager  |
| STAT_SA4_ZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit  |
| STAT_SA4_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  |
| STAT_SA4_RPM_WERT | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist Drehzahl E-Maschine  |
| STAT_SA4_ULINK_WERT | V | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Zwischenkreisspannung  |
| STAT_SA4_SOLLBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollbetriebsart  |
| STAT_SA4_ISTBETRIEBSART_WERT | HEX | high | unsigned char | - | - | - | - | - | Istbetriebsart  |
| STAT_SA4_CRASH_SEVERITY_WERT | HEX | high | unsigned char | - | - | - | - | - | Crash Schwere  |
| STAT_SA4_ST_ERR_MOT_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statuswort Fehler E-Maschine  |
| STAT_SA4_DISCHARGE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung an die Antriebselektronik den Zwischenkreis zu entladen  |
| STAT_SA1_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code |
| STAT_SA2_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 2 |
| STAT_SA3_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 3 |
| STAT_SA4_DTC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Diagnostic Trouble Code 4 |

### RES_0X4048_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FIFO_POS_CNT_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_ASW4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HASH_DS4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STRESULT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[27] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[43] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[229] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[227] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[53] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_15_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_16_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_17_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_13_DATA | DATA | high | data[219] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X6007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | testtest |
| STAT_RESULT_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_RESULT_12_DATA | DATA | high | data[249] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XADE5_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_KUEHLMITTELHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM unterhalb der Stützstelle 1 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 6 und Stützstelle 7 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Kühlmitteltemperaturhübe der EM oberhalb Stützstelle 10 (Kühlmitteltemperaturmittelwert je nach Job-Argument) |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_01_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_02_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_03_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_04_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_05_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELMITTELWERT_ST_06_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperatur-Mittelwert |
| STAT_EM_KUEHLMITTELHUB_ST_01_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_02_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_03_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_04_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_05_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_06_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_07_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_08_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_09_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Kühlmitteltemperatur-Hub |
| STAT_EM_KUEHLMITTELHUB_ST_10_WERT | + | - | - | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Kühlmitteltemperatur-Hub |

### RES_0XADE6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHMOMENTHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM unterhalb der Stützstelle 1 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 6 und Stützstelle 7 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehmomenthübe der EM oberhalb Stützstelle 10 (Drehmomentmittelwert je nach Job-Argument) |
| STAT_EM_DREHMOMENTMITTELWERT_ST_01_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_02_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_03_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_04_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_05_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_06_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_07_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_08_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_09_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_10_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTMITTELWERT_ST_11_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 für Drehmomentmittelwert |
| STAT_EM_DREHMOMENTHUB_ST_01_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_02_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_03_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_04_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_05_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_06_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_07_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_08_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_09_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehmomenthub |
| STAT_EM_DREHMOMENTHUB_ST_10_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehmomenthub |

### RES_0XADE7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHLHUB_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM unterhalb der Stützstelle 1 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 1 und Stützstelle 2 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 2 und Stützstelle 3 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 3 und Stützstelle 4 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 4 und Stützstelle 5 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 5 und Stützstelle 6 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 6 und Stützstelle7 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 7 und Stützstelle 8 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 8 und Stützstelle 9 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 9 und Stützstelle 10 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 10 und Stützstelle 11 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 11 und Stützstelle 12 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 12 und Stützstelle 13 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 13 und Stützstelle 14 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM zwischen Stützstelle 14 und Stützstelle 15 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLHUB_16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit der Drehzahlhübe der EM oberhalb der Stützstelle 15 (Drehzahlmittelwert je nach Job-Argument) |
| STAT_EM_DREHZAHLMITTELWERT_ST_01_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_02_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_03_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_04_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_05_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_06_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_07_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLMITTELWERT_ST_08_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehzahlmittelwert |
| STAT_EM_DREHZAHLHUB_ST_01_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_02_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_03_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_04_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_05_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_06_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_07_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_08_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_09_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_10_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_11_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_12_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_13_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_14_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 für Drehzahlhub |
| STAT_EM_DREHZAHLHUB_ST_15_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 15 für Drehzahlhub |

### RES_0XADEA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_REGELUNG_VM_START | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand des Verbrennungsmotors bei SOC Regelung: 0 = Nicht gestartet, 1 = Gestartet |

### RES_0XADEB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DREHZAHL_DREHMOMENT_01_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine unterhalb der Drehmomentstützstelle 1 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_02_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 1 und Drehmomentstützstelle 2 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_03_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 2 und Drehmomentstützstelle 3 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_04_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 3 und Drehmomentstützstelle 4 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_05_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 4 und Drehmomentstützstelle 5 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_06_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 5 und Drehmomentstützstelle 6 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_07_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 6 und Drehmomentstützstelle 7 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_08_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 7 und Drehmomentstützstelle 8 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_09_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 8 und Drehmomentstützstelle 9 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_10_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 9 und Drehmomentstützstelle 10 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_11_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 10 und Drehmomentstützstelle 11 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_12_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 11 und Drehmomentstützstelle 12 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_13_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 12 und Drehmomentstützstelle 13 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_14_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 13 und Drehmomentstützstelle 14 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_15_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 14 und Drehmomentstützstelle 15 (Drehzahlbereich je nach Job-Argument) in 5Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_16_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 15 und Drehmomentstützstelle 16 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_17_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 16 und Drehmomentstützstelle 17 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_18_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 17 und Drehmomentstützstelle 18 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_19_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 18 und Drehmomentstützstelle 19 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_20_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine zwischen Drehmomentstützstelle 19 und Drehmomentstützstelle 20 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_DREHMOMENT_21_WERT | + | - | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der E-Maschine oberhalb Drehmomentstützstelle 21 (Drehzahlbereich je nach Job-Argument) in Sekunden |
| STAT_EM_DREHZAHL_ST_01_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_02_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_03_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_04_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_05_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_06_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_07_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_08_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_09_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_10_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_11_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_12_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_13_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 Drehzahlachse |
| STAT_EM_DREHZAHL_ST_14_WERT | + | - | - | 1/min | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 Drehzahlachse |
| STAT_EM_DREHMOMENT_ST_01_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_02_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_03_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_04_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_05_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_06_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_07_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_08_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_09_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_10_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_11_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 11 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_12_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 12 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_13_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 13 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_14_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 14 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_15_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 15 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_16_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 16 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_17_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 17 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_18_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 18 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_19_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 19 der Drehmomentachse |
| STAT_EM_DREHMOMENT_ST_20_WERT | + | - | - | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 20 der Drehmomentachse |
| STAT_TEM_MD_VZ_WECHSEL_HIST_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl an Vorzeichenwechsel des Drehmoments der Traktions-Elektromaschine |

### RES_0XADED_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNGSMESSUNG_PHEV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSMESSUNG_PHEV_STATUS | - | - | - | Aktueller Mode der Leistungsmessung PHEV |

### RES_0XADF0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_ROTORLAGESENSOR_STATUS_MODE_GEN3 | - | - | - | aktueller Status und Modus |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | ° | high | signed int | - | - | 5493164.0625 | 1000000000.0 | 0.0 | EPS Offset Wert |
| STAT_ROTORLAGESENSOR_ABBRUCHGRUND | - | - | + | 0-n | high | unsigned int | - | TAB_ROTORLAGE_SENSOR_ABBRUCHGRUND | - | - | - | Abbruchgrund bei nicht erfolgreichem Anlernversuch |

### RES_0XADF4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | + | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADFB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSMODUS_PHEV_NR | - | + | + | 0-n | high | unsigned char | - | TAB_WERKSMODUS_PHEV_ERGEBNIS | - | - | - | Status Werksmodus PHEV |

### RES_0XDB47_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_AC_STROM_LIMIT_AMPERE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen:  0 = Abgeschlossen;  1 = In Ausführung |
| STAT_AC_STROM_LIMIT_AMPERE_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stromgrenze für AC-Laden |

### RES_0XDE19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BREMSBTG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsbetätigungen |
| STAT_LAUFZEIT_ELUP_S_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Laufzeit Elup |
| STAT_ANLAUFE_ELUP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anläufe Elup |

### RES_0XDE23_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OEFFNEN_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN | - | - | - | siehe Tabelle |

### RES_0XDE2E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |
| STAT_SACHNUMMER_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Sachnummer des Steuergeräts |
| STAT_RESERVE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve (keine Änderung des Werts) |
| STAT_AENDERUNGSINDEX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Änderungsindex des Steuergeräts |

### RES_0XDE75_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HV_DCDC_WERT | V | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_SPANNUNG_HV_UMRICHTER_WERT | V | high | unsigned int | - | - | 1.0 | 32.0 | 0.0 | HV Spannung im Umrichter |

### RES_0XDE8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_U_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase U |
| STAT_STROM_AC_V_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase V |
| STAT_STROM_AC_W_WERT | A | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | Momentaner Zuleitungsstrom Phase W |

### RES_0XDE8C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_UMRICHTER_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Umrichter |
| STAT_TEMP_EMASCHINE_STATOR_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Stator Emaschine |
| STAT_TEMP_EMASCHINE_ROTOR_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Temperatur Rotor Emaschine |
| STAT_TEMP_KUEHLMITTEL_MODELLIERT_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Modellierte Temperatur Kühlmittel |

### RES_0XDE92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Bordnetzspannung |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_ELUP | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des ELUP-Treibers |

### RES_0XDEA6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_E_MOTOR_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | E-Motor Temperatur 1 |
| STAT_TEMP2_E_MOTOR_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | E-Motor Temperatur 2 |

### RES_0XDEA7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 26.77 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 10.0 | 0.0 | SOLL Moment der E-Maschine |
| STAT_ELEKTRISCHE_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_ELEKTRISCHE_BETRIEBSART | - | - | - | aktuelle Betriebsart der E-Maschine |

### RES_0XDEED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_3214_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3214 |
| STAT_ANTR_HIST_3215_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3215 |
| STAT_ANTR_HIST_3216_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3216 |
| STAT_ANTR_HIST_3217_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3217 |
| STAT_ANTR_HIST_3218_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3218 |
| STAT_ANTR_HIST_3219_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3219 |
| STAT_ANTR_HIST_3220_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3220 |
| STAT_ANTR_HIST_3221_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3221 |
| STAT_ANTR_HIST_1601_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1601 |
| STAT_ANTR_HIST_1602_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1602 |
| STAT_ANTR_HIST_1603_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1603 |
| STAT_ANTR_HIST_1604_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1604 |
| STAT_ANTR_HIST_1605_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1605 |
| STAT_ANTR_HIST_1606_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1606 |
| STAT_ANTR_HIST_32113_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32113 |
| STAT_ANTR_HIST_32114_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32114 |
| STAT_ANTR_HIST_32115_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32115 |
| STAT_ANTR_HIST_32116_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32116 |
| STAT_ANTR_HIST_32117_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32117 |
| STAT_ANTR_HIST_32118_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32118 |
| STAT_ANTR_HIST_32119_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32119 |
| STAT_ANTR_HIST_32120_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32120 |
| STAT_ANTR_HIST_32121_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32121 |
| STAT_ANTR_HIST_32122_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32122 |
| STAT_ANTR_HIST_3290_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3290 |
| STAT_ANTR_HIST_1607_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1607 |
| STAT_ANTR_HIST_1608_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1608 |
| STAT_ANTR_HIST_1609_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1609 |
| STAT_ANTR_HIST_1610_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1610 |
| STAT_ANTR_HIST_1611_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1611 |
| STAT_ANTR_HIST_1612_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1612 |
| STAT_ANTR_HIST_3285_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3285 |
| STAT_ANTR_HIST_3286_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3286 |
| STAT_ANTR_HIST_3287_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3287 |
| STAT_ANTR_HIST_3288_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3288 |
| STAT_ANTR_HIST_3289_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3289 |
| STAT_ANTR_HIST_32103_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32103 |
| STAT_ANTR_HIST_32104_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32104 |
| STAT_ANTR_HIST_32105_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32105 |
| STAT_ANTR_HIST_32106_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32106 |
| STAT_ANTR_HIST_32107_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32107 |
| STAT_ANTR_HIST_32108_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32108 |
| STAT_ANTR_HIST_32109_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32109 |
| STAT_ANTR_HIST_32110_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32110 |
| STAT_ANTR_HIST_32111_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32111 |
| STAT_ANTR_HIST_32112_WERT | - | high | unsigned long | - | - | 0.1 | 1.0 | 0.0 | Historienwert ANTR_HIST_32112 |
| STAT_ANTR_HIST_1613_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1613 |
| STAT_ANTR_HIST_1614_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1614 |
| STAT_ANTR_HIST_1615_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1615 |
| STAT_ANTR_HIST_1616_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1616 |
| STAT_ANTR_HIST_1617_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_1617 |
| STAT_ANTR_HIST_0028_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0028 |
| STAT_ANTR_HIST_0029_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0029 |
| STAT_ANTR_HIST_0030_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0030 |
| STAT_ANTR_HIST_0031_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0031 |
| STAT_ANTR_HIST_0032_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0032 |
| STAT_ANTR_HIST_0033_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0033 |
| STAT_ANTR_HIST_0034_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0034 |
| STAT_ANTR_HIST_0035_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0035 |
| STAT_ANTR_HIST_3296_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3296 |
| STAT_ANTR_HIST_3297_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3297 |
| STAT_ANTR_HIST_3298_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3298 |
| STAT_ANTR_HIST_3299_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_3299 |
| STAT_ANTR_HIST_32100_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32100 |
| STAT_ANTR_HIST_32101_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32101 |
| STAT_ANTR_HIST_32102_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32102 |
| STAT_ANTR_HIST_0036_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0036 |
| STAT_ANTR_HIST_0037_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0037 |
| STAT_ANTR_HIST_0038_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_0038 |

### RES_0XDEEF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTR_HIST_3238_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3238 |
| STAT_ANTR_HIST_3239_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3239 |
| STAT_ANTR_HIST_3240_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3240 |
| STAT_ANTR_HIST_3241_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3241 |
| STAT_ANTR_HIST_3242_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3242 |
| STAT_ANTR_HIST_3243_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3243 |
| STAT_ANTR_HIST_3244_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3244 |
| STAT_ANTR_HIST_3245_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3245 |
| STAT_ANTR_HIST_3246_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3246 |
| STAT_ANTR_HIST_3247_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3247 |
| STAT_ANTR_HIST_3248_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3248 |
| STAT_ANTR_HIST_3249_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3249 |
| STAT_ANTR_HIST_3250_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3250 |
| STAT_ANTR_HIST_3251_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3251 |
| STAT_ANTR_HIST_3252_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3252 |
| STAT_ANTR_HIST_3253_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3253 |
| STAT_ANTR_HIST_3254_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3254 |
| STAT_ANTR_HIST_3255_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3255 |
| STAT_ANTR_HIST_3256_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3256 |
| STAT_ANTR_HIST_3257_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3257 |
| STAT_ANTR_HIST_3258_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3258 |
| STAT_ANTR_HIST_3259_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3259 |
| STAT_ANTR_HIST_3260_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3260 |
| STAT_ANTR_HIST_3261_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3261 |
| STAT_ANTR_HIST_3262_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3262 |
| STAT_ANTR_HIST_3263_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3263 |
| STAT_ANTR_HIST_3264_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3264 |
| STAT_ANTR_HIST_3265_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3265 |
| STAT_ANTR_HIST_3266_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3266 |
| STAT_ANTR_HIST_3267_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3267 |
| STAT_ANTR_HIST_3268_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3268 |
| STAT_ANTR_HIST_3269_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3269 |
| STAT_ANTR_HIST_3270_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3270 |
| STAT_ANTR_HIST_3271_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3271 |
| STAT_ANTR_HIST_3272_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3272 |
| STAT_ANTR_HIST_3273_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3273 |
| STAT_ANTR_HIST_3274_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3274 |
| STAT_ANTR_HIST_3275_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3275 |
| STAT_ANTR_HIST_3276_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3276 |
| STAT_ANTR_HIST_3277_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3277 |
| STAT_ANTR_HIST_3222_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3222 |
| STAT_ANTR_HIST_3223_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3223 |
| STAT_ANTR_HIST_3224_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3224 |
| STAT_ANTR_HIST_3225_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3225 |
| STAT_ANTR_HIST_3226_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3226 |
| STAT_ANTR_HIST_3227_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3227 |
| STAT_ANTR_HIST_3228_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3228 |
| STAT_ANTR_HIST_3229_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3229 |
| STAT_ANTR_HIST_3230_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3230 |
| STAT_ANTR_HIST_3231_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3231 |
| STAT_ANTR_HIST_3232_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3232 |
| STAT_ANTR_HIST_3233_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3233 |
| STAT_ANTR_HIST_3234_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3234 |
| STAT_ANTR_HIST_3235_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3235 |
| STAT_ANTR_HIST_3236_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3236 |
| STAT_ANTR_HIST_3237_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_3237 |
| STAT_ANTR_HIST_32123_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32123; Status Vorausschau Betriebsstrategie: Aktiv |
| STAT_ANTR_HIST_32124_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32124; Status Vorausschau Betriebsstrategie: Gefälle |
| STAT_ANTR_HIST_32125_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32125; Status Vorausschau Betriebsstrategie: Langsamfahrzone |
| STAT_ANTR_HIST_32126_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32126; Status Vorausschau Betriebsstrategie: eFahr-Zone |
| STAT_ANTR_HIST_32127_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32127; Status Vorausschau Betriebsstrategie: Stau |
| STAT_ANTR_HIST_32128_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32128; Status Vorausschau Betriebsstrategie: Zielzone |
| STAT_ANTR_HIST_32129_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Historienwert ANTR_HIST_32129; Status Vorausschau Betriebsstrategie: Fehler |
| STAT_ANTR_HIST_32130_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32130; Status Batterieheizen 0 |
| STAT_ANTR_HIST_32131_WERT | - | high | unsigned long | - | - | 0.01 | 1.0 | 0.0 | Historienwert ANTR_HIST_32131; Em Soll Betriebsart 6 |

### RES_0XDF18_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | kein Result, nur für AUTOSAR4 notwendig |

### RES_0XDF19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVRAM_BLOCK_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 1 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 2 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 3 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 4 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 5 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_6_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 6 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_7_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 7 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_8_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 8 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_9_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 9 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_10_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 10 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_11_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 11 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_12_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 12 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_13_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 13 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_14_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 14 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_15_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 15 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_16_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 16 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_17_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 17 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_18_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 18 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_19_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 19 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_20_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 20 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_21_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 21 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_22_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 22 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_23_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 23 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_24_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 24 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_25_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 25 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_26_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 26 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_27_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 27 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_28_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 28 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_29_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 29 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_30_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 30 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_31_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 31 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_32_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 32 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_33_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 33 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_34_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 34 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_35_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 35 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_36_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 36 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_37_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 37 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_38_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 38 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_39_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 39 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_40_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 40 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_41_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 41 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_42_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 42 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_43_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 43 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_44_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 44 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_45_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 45 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_46_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 46 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_47_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 47 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_48_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 48 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_49_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 49 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_50_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 50 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_51_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 51 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_52_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 52 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_53_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 53 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_54_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 54 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_55_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 55 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_56_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 56 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_57_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 57 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_58_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 58 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_59_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 59 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_60_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 60 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_61_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 61 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_62_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 62 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_63_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 63 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_64_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 64 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_65_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 65 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_66_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 66 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_67_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 67 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_68_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 68 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_69_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 69 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_70_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 70 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_71_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 71 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_72_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 72 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_73_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 73 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_74_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 74 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_75_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 75 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_76_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 76 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_77_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 77 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_78_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 78 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_79_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 79 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_80_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 80 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_81_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 81 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_82_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 82 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_83_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 83 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_84_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 84 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_85_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 85 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_86_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 86 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_87_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 87 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_88_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 88 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_89_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 89 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_90_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 90 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_91_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 91 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_92_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 92 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_93_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 93 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_94_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 94 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_95_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 95 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_96_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 96 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_97_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 97 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_98_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 98 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_99_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 99 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_100_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 100 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_101_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 101 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_102_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 102 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_103_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 103 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_104_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 104 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_105_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 105 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_106_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 106 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_107_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 107 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_108_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 108 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_109_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 109 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_110_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 110 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_111_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 111 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_112_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 112 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_113_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 113 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_114_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 114 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_115_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 115 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_116_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 116 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_117_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 117 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_118_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 118 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_119_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 119 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_120_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 120 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_121_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 121 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_122_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 122 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_123_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 123 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_124_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 124 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_125_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 125 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_126_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 126 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_127_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 127 aus Array des NVRAM-Spiegels |
| STAT_NVRAM_BLOCK_128_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Element 128 aus Array des NVRAM-Spiegels |

### RES_0XDF1A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_KOMMUNIKATIONSFEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Kommunikationsfehler |
| STAT_ZAEHLER_FEHLER_CHECKSUMME_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Fehler Parameter Checksumme |
| STAT_ZAEHLER_POWER_ON_RESET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Power-On-Reset |
| STAT_ZAEHLER_RESET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Reset |
| STAT_ZAEHLER_SYSTEMFEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Systemfehler |
| STAT_ZAEHLER_LIN_WAKEUP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler LIN Wakeups |
| STAT_ZAEHLER_RESET_WATCHDOG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Watchdog Resets |
| STAT_RELATIVZEIT_IBS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit IBS Resets |

### RES_0XDF1B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_REF_NUMMER_IBS2015_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Software-Referenz-Nummer von IBS2015 |
| STAT_SERIENNUMMER_IBS2015_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer 1-5 von IBS2015 |
| STAT_ZUSBAUNUMMER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Zusbaunummer von IBS2015 |

### RES_0XDF48_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_AC_STROM_LIMIT | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen: 0 = Abgeschlossen; 1 = In Ausführung |
| STAT_AC_LOW_I_LIMIT | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Stromgrenze für AC-Low Laden |
| STAT_AC_HIGH_I_LIMIT | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Stromgrenze für AC-High Laden |

### RES_0XDF49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNG_HIST_EXT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 1 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 2 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 3 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 4 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 5 vom externen Ladegerät |
| STAT_LEISTUNG_HIST_EXT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Leistungshistrogramm Wert 6 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 1 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 2 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 3 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 4 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 5 vom externen Ladegerät |
| STAT_TEMP_HIST_EXT_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Temperaturhistogramm Wert 6 vom externen Ladegerät |

### RES_0XDF4A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_WERKSLADEMODUS_NR | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_ZIEL_SOC_WERKSLADEMODUS_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XDF4F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_KOMM | 0-n | high | unsigned char | - | TAB_HVPM_BA_DCDC_KOMM | - | - | - | Kommandierte Soll-Betriebsart |
| STAT_LEISTUNG_DCDC_KOMM_MAX_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Kommandierte maximale HV-Leistungsaufnahme |
| STAT_SPANNUNG_DCDC_KOMM_HV_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Kommandierte minimale HV-Spannung |
| STAT_SPANNUNG_DCDC_KOMM_12V_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Kommandierte Soll-Spannung auf 12V Seite |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_HVPM_BA_DCDC_IST | - | - | - | Ist-Betriebsart |
| - | Bit | high | BITFIELD | - | BF_STAT_VERSORGUNG_DCDC | - | - | - | Status der 12V-Bordnetz-Versorgung |
| - | Bit | high | BITFIELD | - | BF_FEHLER_STATUS_DCDC | - | - | - | Fehler Status |
| STAT_AUSLASTUNG_DCDC_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Auslastung |
| STAT_SPANNUNG_DCDC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Spannung auf HV Seite |
| STAT_STROM_DCDC_HV_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Strom auf HV Seite |
| STAT_LEISTUNG_DCDC_HV_IST_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Leistungsaufnahme auf HV-Seite |
| STAT_SPANNUNG_DCDC_12V_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Spannung auf 12V Seite |
| STAT_STROM_DCDC_12V_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Strom auf 12V Seite |
| STAT_LEISTUNG_DCDC_12V_IST_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Leistungsabgabe auf 12V Seite |
| STAT_STROM_DCDC_12V_MAX_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Maximaler Strom der durch den DC/DC-Wandler generiert werden kann |

### RES_0XDF51_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSWAHL_AKTION | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl: 0 = Nicht zurücksetzen; 1 = Zurücksetzen |

### RES_0XDF5C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHWINGUNGSDAEMPFUNG | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl Schwingungdämpfung: 0 = nicht deaktivieren; 1 = deaktivieren |

### RES_0XDF5D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKTION_RESET | 0/1 | high | unsigned char | - | - | - | - | - | Status zum Zurücksetzen der gespeicherten Histogramme der Traktions-Elektromaschine: 0 = Zurücksetzen nicht angefordert; 1 = Zurücksetzen angefordert |

### RES_0XDF5F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | - | - | - | Zustand HV-Ready (0 = Nicht hergestellt; 1 = Hergestellt) |
| STAT_EBN_FAHRBEREIT_NR | 0-n | high | unsigned char | - | TAB_FAHRBEREITSCHAFT_HV_SYSTEM | - | - | - | Status Fahrbereitschaft des HV-Systems |
| STAT_SPANNUNG_DC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Zwischenkreis-Spannung (gemessen an Leistungselektronik) |
| STAT_HDCAC_EREQ_NR | 0-n | high | unsigned char | - | TAB_HDCAC_EREQ | - | - | - | Anforderung Schließen der Schütze an SME |
| STAT_ANF_BZKOEM_NR | 0-n | high | unsigned char | - | TAB_ANF_BETRIEBSARTEN_KOORDINATOR_EM | - | - | - | Anforderung an EM-Betriebsartenkoordinator |
| STAT_ANF_ZK_ENTL | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Zwischenkreis-Entladung (0 = Nicht entladen, 1 = Entladen) |
| STAT_HVSTART_KOMM_NR | 0-n | high | unsigned char | - | TAB_HV_START_KOMM | - | - | - | Status des HV-Start-Zustandsautomaten |
| - | Bit | high | BITFIELD | - | BF_HV_START_FEHLER | - | - | - | Fehlerstatus des HV-Systems |
| STAT_ENTLADESCHUTZ_NR | 0-n | high | unsigned char | - | TAB_ENTLADESCHUTZ | - | - | - | Status des Entladeschutz-Zustandsautomaten |
| - | Bit | high | BITFIELD | - | BF_VERHINDERUNG_SPANNUNGSFREIHEIT_ANZEIGE | - | - | - | Verhinderungsgründe der Spannungsfreiheitsanzeige |
| STAT_AKTUELLER_SOC_HV_BATTERIE_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Aktueller SOC der HV-Batterie |
| STAT_MINIMALER_SOC_HV_BATTERIE_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Minimaler SOC der HV-Batterie |
| - | Bit | high | BITFIELD | - | BF_STAT_ISO_ERROR | - | - | - | Statuswort des Isolationsfehlers |

### RES_0XDFB4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKSETZEN_HISTOGRAMM_LADEGERAET | 0/1 | high | unsigned char | - | - | - | - | - | Auswahl: 0 = Keine Aktion; 1 = Rücksetzen |

### RES_0XDFD1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 1 |
| STAT_DTC_1_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 1 |
| STAT_DTC_1_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 1 |
| STAT_DTC_2_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 2 |
| STAT_DTC_2_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 2 |
| STAT_DTC_2_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 2 |
| STAT_DTC_3_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 3 |
| STAT_DTC_3_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 3 |
| STAT_DTC_3_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 3 |
| STAT_DTC_4_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 4 |
| STAT_DTC_4_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 4 |
| STAT_DTC_4_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 4 |
| STAT_DTC_5_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 5 |
| STAT_DTC_5_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 5 |
| STAT_DTC_5_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 5 |
| STAT_DTC_6_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 6 |
| STAT_DTC_6_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 6 |
| STAT_DTC_6_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 6 |
| STAT_DTC_7_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 7 |
| STAT_DTC_7_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 7 |
| STAT_DTC_7_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 7 |
| STAT_DTC_8_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 8 |
| STAT_DTC_8_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 8 |
| STAT_DTC_8_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 8 |
| STAT_DTC_9_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 9 |
| STAT_DTC_9_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 9 |
| STAT_DTC_9_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 9 |
| STAT_DTC_10_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 10 |
| STAT_DTC_10_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 10 |
| STAT_DTC_10_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 10 |
| STAT_DTC_11_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 11 |
| STAT_DTC_11_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 11 |
| STAT_DTC_11_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 11 |
| STAT_DTC_12_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 12 |
| STAT_DTC_12_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 12 |
| STAT_DTC_12_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 12 |
| STAT_DTC_13_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 13 |
| STAT_DTC_13_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 13 |
| STAT_DTC_13_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 13 |
| STAT_DTC_14_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 14 |
| STAT_DTC_14_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 14 |
| STAT_DTC_14_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 14 |
| STAT_DTC_15_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 15 |
| STAT_DTC_15_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 15 |
| STAT_DTC_15_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 15 |
| STAT_DTC_16_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 16 |
| STAT_DTC_16_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 16 |
| STAT_DTC_16_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 16 |
| STAT_DTC_17_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 17 |
| STAT_DTC_17_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 17 |
| STAT_DTC_17_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 17 |
| STAT_DTC_18_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 18 |
| STAT_DTC_18_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 18 |
| STAT_DTC_18_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 18 |
| STAT_DTC_19_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 19 |
| STAT_DTC_19_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 19 |
| STAT_DTC_19_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 19 |
| STAT_DTC_20_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 20 |
| STAT_DTC_20_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 20 |
| STAT_DTC_20_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 20 |
| STAT_DTC_21_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 21 |
| STAT_DTC_21_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 21 |
| STAT_DTC_21_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 21 |
| STAT_DTC_22_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 22 |
| STAT_DTC_22_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 22 |
| STAT_DTC_22_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 22 |
| STAT_DTC_23_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 23 |
| STAT_DTC_23_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 23 |
| STAT_DTC_23_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 23 |
| STAT_DTC_24_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 24 |
| STAT_DTC_24_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 24 |
| STAT_DTC_24_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 24 |
| STAT_DTC_25_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 25 |
| STAT_DTC_25_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 25 |
| STAT_DTC_25_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 25 |
| STAT_DTC_26_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 26 |
| STAT_DTC_26_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 26 |
| STAT_DTC_26_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 26 |
| STAT_DTC_27_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 27 |
| STAT_DTC_27_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 27 |
| STAT_DTC_27_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 27 |
| STAT_DTC_28_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 28 |
| STAT_DTC_28_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 28 |
| STAT_DTC_28_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 28 |
| STAT_DTC_29_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 29 |
| STAT_DTC_29_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 29 |
| STAT_DTC_29_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 29 |
| STAT_DTC_30_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 30 |
| STAT_DTC_30_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 30 |
| STAT_DTC_30_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 30 |
| STAT_DTC_31_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 31 |
| STAT_DTC_31_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 31 |
| STAT_DTC_31_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 31 |
| STAT_DTC_32_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 32 |
| STAT_DTC_32_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 32 |
| STAT_DTC_32_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 32 |
| STAT_DTC_33_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 33 |
| STAT_DTC_33_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 33 |
| STAT_DTC_33_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 33 |
| STAT_DTC_34_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 34 |
| STAT_DTC_34_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 34 |
| STAT_DTC_34_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 34 |
| STAT_DTC_35_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 35 |
| STAT_DTC_35_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 35 |
| STAT_DTC_35_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 35 |
| STAT_DTC_36_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 36 |
| STAT_DTC_36_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 36 |
| STAT_DTC_36_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 36 |
| STAT_DTC_37_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 37 |
| STAT_DTC_37_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 37 |
| STAT_DTC_37_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 37 |
| STAT_DTC_38_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 38 |
| STAT_DTC_38_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 38 |
| STAT_DTC_38_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 38 |
| STAT_DTC_39_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 39 |
| STAT_DTC_39_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 39 |
| STAT_DTC_39_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 39 |
| STAT_DTC_40_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 40 |
| STAT_DTC_40_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 40 |
| STAT_DTC_40_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 40 |
| STAT_DTC_41_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 41 |
| STAT_DTC_41_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 41 |
| STAT_DTC_41_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 41 |
| STAT_DTC_42_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 42 |
| STAT_DTC_42_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 42 |
| STAT_DTC_42_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 42 |
| STAT_DTC_43_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 43 |
| STAT_DTC_43_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 43 |
| STAT_DTC_43_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 43 |
| STAT_DTC_44_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 44 |
| STAT_DTC_44_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 44 |
| STAT_DTC_44_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 44 |
| STAT_DTC_45_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 45 |
| STAT_DTC_45_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 45 |
| STAT_DTC_45_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 45 |
| STAT_DTC_46_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 46 |
| STAT_DTC_46_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 46 |
| STAT_DTC_46_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 46 |
| STAT_DTC_47_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 47 |
| STAT_DTC_47_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 47 |
| STAT_DTC_47_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 47 |
| STAT_DTC_48_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 48 |
| STAT_DTC_48_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 48 |
| STAT_DTC_48_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 48 |
| STAT_DTC_49_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 49 |
| STAT_DTC_49_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 49 |
| STAT_DTC_49_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 49 |
| STAT_DTC_50_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 50 |
| STAT_DTC_50_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 50 |
| STAT_DTC_50_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 50 |
| STAT_DTC_51_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 51 |
| STAT_DTC_51_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 51 |
| STAT_DTC_51_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 51 |
| STAT_DTC_52_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 52 |
| STAT_DTC_52_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 52 |
| STAT_DTC_52_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 52 |
| STAT_DTC_53_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 53 |
| STAT_DTC_53_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 53 |
| STAT_DTC_53_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 53 |
| STAT_DTC_54_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 54 |
| STAT_DTC_54_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 54 |
| STAT_DTC_54_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 54 |
| STAT_DTC_55_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 55 |
| STAT_DTC_55_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 55 |
| STAT_DTC_55_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 55 |
| STAT_DTC_56_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 56 |
| STAT_DTC_56_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 56 |
| STAT_DTC_56_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 56 |
| STAT_DTC_57_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 57 |
| STAT_DTC_57_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 57 |
| STAT_DTC_57_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 57 |
| STAT_DTC_58_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 58 |
| STAT_DTC_58_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 58 |
| STAT_DTC_58_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 58 |
| STAT_DTC_59_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 59 |
| STAT_DTC_59_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 59 |
| STAT_DTC_59_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 59 |
| STAT_DTC_60_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 60 |
| STAT_DTC_60_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 60 |
| STAT_DTC_60_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 60 |
| STAT_DTC_61_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 61 |
| STAT_DTC_61_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 61 |
| STAT_DTC_61_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 61 |
| STAT_DTC_62_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 62 |
| STAT_DTC_62_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 62 |
| STAT_DTC_62_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 62 |
| STAT_DTC_63_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 63 |
| STAT_DTC_63_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 63 |
| STAT_DTC_63_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 63 |
| STAT_DTC_64_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 64 |
| STAT_DTC_64_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 64 |
| STAT_DTC_64_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 64 |
| STAT_DTC_65_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 65 |
| STAT_DTC_65_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 65 |
| STAT_DTC_65_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 65 |
| STAT_DTC_66_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 66 |
| STAT_DTC_66_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 66 |
| STAT_DTC_66_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 66 |
| STAT_DTC_67_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 67 |
| STAT_DTC_67_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 67 |
| STAT_DTC_67_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 67 |
| STAT_DTC_68_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 68 |
| STAT_DTC_68_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 68 |
| STAT_DTC_68_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 68 |
| STAT_DTC_69_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 69 |
| STAT_DTC_69_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 69 |
| STAT_DTC_69_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 69 |
| STAT_DTC_70_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 70 |
| STAT_DTC_70_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 70 |
| STAT_DTC_70_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 70 |
| STAT_DTC_71_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 71 |
| STAT_DTC_71_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 71 |
| STAT_DTC_71_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 71 |
| STAT_DTC_72_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 72 |
| STAT_DTC_72_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 72 |
| STAT_DTC_72_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 72 |
| STAT_DTC_73_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 73 |
| STAT_DTC_73_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 73 |
| STAT_DTC_73_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 73 |
| STAT_DTC_74_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 74 |
| STAT_DTC_74_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 74 |
| STAT_DTC_74_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 74 |
| STAT_DTC_75_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 75 |
| STAT_DTC_75_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 75 |
| STAT_DTC_75_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 75 |
| STAT_DTC_76_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 76 |
| STAT_DTC_76_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 76 |
| STAT_DTC_76_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 76 |
| STAT_DTC_77_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 77 |
| STAT_DTC_77_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 77 |
| STAT_DTC_77_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 77 |
| STAT_DTC_78_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 78  |
| STAT_DTC_78_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 78 |
| STAT_DTC_78_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 78 |
| STAT_DTC_79_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 79 |
| STAT_DTC_79_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 79 |
| STAT_DTC_79_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 79 |
| STAT_DTC_80_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 80 |
| STAT_DTC_80_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 80 |
| STAT_DTC_80_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 80 |
| STAT_DTC_81_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 81 |
| STAT_DTC_81_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 81 |
| STAT_DTC_81_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 81 |
| STAT_DTC_82_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 82 |
| STAT_DTC_82_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 82 |
| STAT_DTC_82_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 82 |
| STAT_DTC_83_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 83 |
| STAT_DTC_83_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 83 |
| STAT_DTC_83_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 83 |
| STAT_DTC_84_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 84 |
| STAT_DTC_84_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 84 |
| STAT_DTC_84_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 84 |
| STAT_DTC_85_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 85 |
| STAT_DTC_85_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 85 |
| STAT_DTC_85_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 85 |
| STAT_DTC_86_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 86 |
| STAT_DTC_86_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 86 |
| STAT_DTC_86_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 86 |
| STAT_DTC_87_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 87 |
| STAT_DTC_87_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 87 |
| STAT_DTC_87_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 87 |
| STAT_DTC_88_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 88  |
| STAT_DTC_88_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 88 |
| STAT_DTC_88_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 88 |
| STAT_DTC_89_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 89 |
| STAT_DTC_89_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 89 |
| STAT_DTC_89_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 89 |
| STAT_DTC_90_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 90 |
| STAT_DTC_90_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 90 |
| STAT_DTC_90_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 90 |
| STAT_DTC_91_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 91 |
| STAT_DTC_91_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 91 |
| STAT_DTC_91_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 91 |
| STAT_DTC_92_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 92 |
| STAT_DTC_92_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 92 |
| STAT_DTC_92_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 92 |
| STAT_DTC_93_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 93 |
| STAT_DTC_93_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 93 |
| STAT_DTC_93_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 93 |
| STAT_DTC_94_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 94 |
| STAT_DTC_94_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 94 |
| STAT_DTC_94_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 94 |
| STAT_DTC_95_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 95 |
| STAT_DTC_95_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 95 |
| STAT_DTC_95_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 95 |
| STAT_DTC_96_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 96 |
| STAT_DTC_96_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 96 |
| STAT_DTC_96_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 96 |
| STAT_DTC_97_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 97 |
| STAT_DTC_97_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 97 |
| STAT_DTC_97_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 97 |
| STAT_DTC_98_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 98  |
| STAT_DTC_98_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 98 |
| STAT_DTC_98_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 98 |
| STAT_DTC_99_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 99 |
| STAT_DTC_99_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 99 |
| STAT_DTC_99_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 99 |
| STAT_DTC_100_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 100 |
| STAT_DTC_100_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 100 |
| STAT_DTC_100_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 100 |
| STAT_DTC_101_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 101 |
| STAT_DTC_101_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 101 |
| STAT_DTC_101_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 101 |
| STAT_DTC_102_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 102 |
| STAT_DTC_102_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 102 |
| STAT_DTC_102_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 102 |
| STAT_DTC_103_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 103 |
| STAT_DTC_103_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 103 |
| STAT_DTC_103_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 103 |
| STAT_DTC_104_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 104 |
| STAT_DTC_104_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 104 |
| STAT_DTC_104_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 104 |
| STAT_DTC_105_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 105 |
| STAT_DTC_105_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 105 |
| STAT_DTC_105_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 105 |
| STAT_DTC_106_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 106 |
| STAT_DTC_106_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 106 |
| STAT_DTC_106_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 106 |
| STAT_DTC_107_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 107 |
| STAT_DTC_107_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 107 |
| STAT_DTC_107_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 107 |
| STAT_DTC_108_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 108  |
| STAT_DTC_108_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 108 |
| STAT_DTC_108_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 108 |
| STAT_DTC_109_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 109 |
| STAT_DTC_109_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 109 |
| STAT_DTC_109_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 109 |
| STAT_DTC_110_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 110 |
| STAT_DTC_110_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 110 |
| STAT_DTC_110_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 110 |
| STAT_DTC_111_HEXCODE_WERT | HEX | high | unsigned long | - | - | - | - | - | HexCode von DTC 111 |
| STAT_DTC_111_NUM_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Numerator von DTC 111 |
| STAT_DTC_111_DEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Denominator von DTC 111 |

### RES_0XDFD2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DAUER_MAGNET_TEMP_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Magnettemperaturen oberhalb Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_MAGNET_TEMP_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Magnettemperaturen |
| STAT_EM_DAUER_MAGNET_TEMP_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Magnettemperaturen |
| STAT_EM_DAUER_TEMP_WK_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen unterhalb der Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen zwischen Stützstelle 9 und Stützstelle 10 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Wickelkopf-Temperaturen oberhalb der Stützstelle 10 in Sekunden |
| STAT_EM_DAUER_TEMP_WK_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Wickelkopf Temperaturen |
| STAT_EM_DAUER_TEMP_WK_ST_10_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 10 für Wickelkopf Temperaturen |
| STAT_EM_VERBAND_BLECH_GEHAUSE_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator |
| STAT_EM_VERBAND_BLECH_GEHAUSE_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine unterhalb der Stützstelle 1 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 1 und Stützstelle 2 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 2 und Stützstelle 3 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 3 und Stützstelle 4 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5  der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine zwischen Stützstelle 4 und Stützstelle 5 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 1 und Stützstelle 2 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 2 und Stützstelle 3 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 3 und Stützstelle 4 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 4 und Stützstelle 5 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 5 und Stützstelle 6 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine  oberhalb der Stützstelle 5 der Kühlmitteltemperatur und zwischen Stützstelle 6 und Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bewertet Belastung des Pressverbandes Blech-Gehäuse der Traktions E-Maschine oberhalb der Stützstelle 5 der Kühlmitteltemperatur und oberhalb der Stützstelle 7 der Temperaturhübe des Unterschieds zwischen Kühlmittel und Stator. |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperatur Achse beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_10_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_11_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |
| STAT_EM_VERBAND_BLECH_GEHAUSE_ST_12_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Achse zu Temperaturdifferenz zwischen Kühlmittel und Wickelkopf der Elektromaschine beim Pressverband |

### RES_0XDFD7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HFK_LADESTECKER_EINGESTECKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Einsteckvorgänge des Ladestecker |
| STAT_NETZ_ENTNOMMENE_ENERGIE_GESAMT_WERT | kWh | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte entnommene Netzenergie |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn unter 10% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 11% und 20% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 21% und 30% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 31% und 40% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 41% und 50% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 51% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 61% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn über 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende unter 35% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 36% und 48% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 49% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 61% und 70% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 71% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 81% und 90% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende über 90% |
| STAT_HFK_LADEENDE_URSACHE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = unbekannt |
| STAT_HFK_LADEENDE_URSACHE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ziel erreicht |
| STAT_HFK_LADEENDE_URSACHE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ladestopp vom Fahrer angefordert |
| STAT_HFK_LADEENDE_URSACHE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ladestecker abgezogen |
| STAT_HFK_LADEENDE_URSACHE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Netzausfall (auch 230V/110V-Stecker abgezogen) |
| STAT_HFK_LADEENDE_URSACHE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Fehler im HV-System |
| STAT_HFK_LADEENDE_URSACHE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Vorhalt |

### RES_0XDFD8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_PARKEN_0_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Laden - aktueller Vorgang |
| STAT_ZUSTAND_PARKEN_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Laden - letzter Vorgang |
| STAT_ZUSTAND_PARKEN_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Laden - vorletzter Vorgang |
| STAT_ZUSTAND_PARKEN_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Laden - drittletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in Minuten nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in Minuten nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in Minuten nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_BEGINN_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Beginn (in Minuten nach Mitternacht) - drittletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in Minuten nach Mitternacht) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in Minuten nach Mitternacht) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in Minuten nach Mitternacht) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEFENSTER_ENDE_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ladefenster Ende (in Minuten nach Mitternacht) - drittletzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladestecker gesteckt - aktueller Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladestecker gesteckt - letzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladestecker gesteckt - vorletzter Vorgang |
| STAT_SYSTEMZEIT_EINSTECKEN_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladestecker gesteckt - drittletzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladeende - aktueller Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladeende - letzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladeende - vorletzter Vorgang |
| STAT_SYSTEMZEIT_LADEENDE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel bei Ladeende - drittletzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladeende mit gesetzter Abfahrtszeit (rel. zu Ladestart) - aktueller Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladeende mit gesetzter Abfahrtszeit (rel. zu Ladestart) - letzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladeende mit gesetzter Abfahrtszeit (rel. zu Ladestart) - vorletzter Vorgang |
| STAT_EINSTELLUNG_LADEENDE_WUNSCH_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladeende mit gesetzter Abfahrtszeit (rel. zu Ladestart) - 3.letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (mit Innenraumvorkonditionierung) - aktueller Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (mit Innenraumvorkonditionierung) - letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (mit Innenraumvorkonditionierung) - vorletzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_MIT_VORK_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (mit Innenraumvorkonditionierung) - drittletzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (ohne Vorkonditionierung) - aktueller Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (ohne Vorkonditionierung) - letzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (ohne Vorkonditionierung) - vorletzter Vorgang |
| STAT_PROGNOSE_LADEDAUER_OHNE_VORK_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauerprognose (ohne Vorkonditionierung) - drittletzter Vorgang |
| STAT_LADEDAUER_0_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer (ohne Innenraumvorkonditionierung aber mit Speichervorkonditionierung) - aktueller Vorgang |
| STAT_LADEDAUER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer (ohne Innenraumvorkonditionierung aber mit Speichervorkonditionierung) - letzter Vorgang |
| STAT_LADEDAUER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer (ohne Innenraumvorkonditionierung aber mit Speichervorkonditionierung) - vorletzter Vorgang |
| STAT_LADEDAUER_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer (ohne Innenraumvorkonditionierung aber mit Speichervorkonditionierung) - drittletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_0_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Hausnetz - aktueller Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_1_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Hausnetz - letzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_2_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Hausnetz - vorletzter Vorgang |
| STAT_EINSTELLUNG_STROMBEGRENZUNG_3_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Hausnetz - drittletzter Vorgang |
| STAT_EINSTELLUNG_KABELBEGRENZUNG_0_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Ladekabel - aktueller Vorgang |
| STAT_EINSTELLUNG_KABELBEGRENZUNG_1_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Ladekabel - letzter Vorgang |
| STAT_EINSTELLUNG_KABELBEGRENZUNG_2_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Ladekabel - vorletzter Vorgang |
| STAT_EINSTELLUNG_KABELBEGRENZUNG_3_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | AC-Strombegrenzung Ladekabel - drittletzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_0_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladestart - aktueller Vorgang |
| STAT_HVB_SOC_EINSTECKEN_1_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladestart - letzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_2_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladestart - vorletzter Vorgang |
| STAT_HVB_SOC_EINSTECKEN_3_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladestart - drittletzter Vorgang |
| STAT_HVB_SOC_LADEENDE_0_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladeende - aktueller Vorgang |
| STAT_HVB_SOC_LADEENDE_1_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladeende - letzter Vorgang |
| STAT_HVB_SOC_LADEENDE_2_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladeende - vorletzter Vorgang |
| STAT_HVB_SOC_LADEENDE_3_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC des HV-Speichers bei Ladeende -  drittletzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_0_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Maximale Netzspannung - aktueller Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Maximale Netzspannung - letzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Maximale Netzspannung - vorletzter Vorgang |
| STAT_NETZ_SPANNUNG_SPITZENLEISTUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Maximale Netzspannung - drittletzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_0_WERT | kW | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Maximale Netzleistung - aktueller Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_1_WERT | kW | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Maximale Netzleistung - letzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_2_WERT | kW | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Maximale Netzleistung - vorletzter Vorgang |
| STAT_NETZ_SPITZENLEISTUNG_3_WERT | kW | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Maximale Netzleistung - drittletzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_0_WERT | kWh | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | Entnommene Netzenergie bis Ladeende - aktueller Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_1_WERT | kWh | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | Entnommene Netzenergie bis Ladeende - letzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_2_WERT | kWh | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | Entnommene Netzenergie bis Ladeende - vorletzter Vorgang |
| STAT_NETZ_ENTNOMMENE_ENERGIE_3_WERT | kWh | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | Entnommene Netzenergie bis Ladeende - 3.letzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - aktueller Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - letzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - vorletzter Vorgang |
| STAT_NETZ_AUSSETZER_ANZAHL_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Netzqualität: Anzahl der Netzaussetzer (t > 1s) - drittletzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_LOW_0 | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-Low Laden - aktueller Vorgang |
| STAT_STROMBEGRENZUNG_AC_LOW_1 | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-Low Laden  - letzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_LOW_2 | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-Low Laden - vorletzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_LOW_3 | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-Low Laden  - drittletzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_HIGH_0 | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-High Laden - aktueller Vorgang |
| STAT_STROMBEGRENZUNG_AC_HIGH_1 | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-High Laden  - letzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_HIGH_2 | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-High Laden - vorletzter Vorgang |
| STAT_STROMBEGRENZUNG_AC_HIGH_3 | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Eingestellte Strombegrenzung für AC-High Laden  - drittletzter Vorgang |
| STAT_LADEART_0 | 0-n | high | unsigned char | - | TAB_LADEART_HVPM | - | - | - | Gewähltes Ladeverfahren  - aktueller Vorgang |
| STAT_LADEART_1 | 0-n | high | unsigned char | - | TAB_LADEART_HVPM | - | - | - | Gewähltes Ladeverfahren  - letzter Vorgang |
| STAT_LADEART_2 | 0-n | high | unsigned char | - | TAB_LADEART_HVPM | - | - | - | Gewähltes Ladeverfahren  - vorletzter Vorgang |
| STAT_LADEART_3 | 0-n | high | unsigned char | - | TAB_LADEART_HVPM | - | - | - | Gewähltes Ladeverfahren  - drittletzter Vorgang |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (Standklimatisierung/Heizung) ausgewählt - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (Standklimatisierung/Heizung) ausgewählt - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (Standklimatisierung/Heizung) ausgewählt - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (Standklimatisierung/Heizung) ausgewählt - drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden eingestellt  - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden eingestellt  - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden eingestellt - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_EINSTELLUNG_ZEITGESTEUERTES_LADEN_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Zeitgesteuertes Laden eingestellt  - drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_REMOTE_AENDERUNG_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Beliebige Änderungen per Remote-Funktion durchgeführt - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_REMOTE_AENDERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Beliebige Änderungen per Remote-Funktion durchgeführt - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_REMOTE_AENDERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Beliebige Änderungen per Remote-Funktion durchgeführt- vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_REMOTE_AENDERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Beliebige Änderungen per Remote-Funktion durchgeführt- drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_0 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_1 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_2 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_KONFLIKT_WEGEN_REMOTE_AENDERUNG_3 | 0/1 | high | unsigned char | - | - | - | - | - | Ladezielkonflikt durch Änderung per Remote-Funktion entstanden - drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung durchgeführt - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung durchgeführt - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung durchgeführt - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_HVB_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Speichervorkonditionierung durchgeführt - 3.letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_VORKONDITIONNIERUNG_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (wie eingestellt) durchgeführt - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_VORKONDITIONNIERUNG_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (wie eingestellt) durchgeführt - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_VORKONDITIONNIERUNG_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (wie eingestellt) durchgeführt - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_VORKONDITIONNIERUNG_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Innenraumvorkonditionierung (wie eingestellt) durchgeführt - drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_NETZ_AUSSETZER_EIN_0 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten - aktueller Vorgang: 0 = Nein; 1 = Ja |
| STAT_NETZ_AUSSETZER_EIN_1 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten - letzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_NETZ_AUSSETZER_EIN_2 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten - vorletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_NETZ_AUSSETZER_EIN_3 | 0/1 | high | unsigned char | - | - | - | - | - | Netzaussetzer (ab 30s Dauer) sind aufgetreten - drittletzter Vorgang: 0 = Nein; 1 = Ja |
| STAT_LADEENDE_URSACHE_0 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE_HVPM | - | - | - | Ursache für Ladeende - aktueller Vorgang |
| STAT_LADEENDE_URSACHE_1 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE_HVPM | - | - | - | Ursache für Ladeende - letzter Vorgang |
| STAT_LADEENDE_URSACHE_2 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE_HVPM | - | - | - | Ursache für Ladeende - vorletzter Vorgang |
| STAT_LADEENDE_URSACHE_3 | 0-n | high | unsigned char | - | TAB_LADEN_URSACHE_LADEENDE_HVPM | - | - | - | Ursache für Ladeende - drittletzter Vorgang |
| STAT_AUSWAHL_LADEN_MODUS_0 | 0-n | high | unsigned char | - | TAB_STAT_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden aus Abfahrtszeit - aktueller Vorgang |
| STAT_AUSWAHL_LADEN_MODUS_1 | 0-n | high | unsigned char | - | TAB_STAT_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden aus Abfahrtszeit - letzter Vorgang |
| STAT_AUSWAHL_LADEN_MODUS_2 | 0-n | high | unsigned char | - | TAB_STAT_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden aus Abfahrtszeit - vorletzter Vorgang |
| STAT_AUSWAHL_LADEN_MODUS_3 | 0-n | high | unsigned char | - | TAB_STAT_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden aus Abfahrtszeit - drittletzter Vorgang |

### RES_0XDFD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEVERFAHREN | 0-n | high | unsigned char | - | TAB_LADEVERFAHREN_HVPM | - | - | - | Art des Ladeverfahrens |
| STAT_LADESTATUS | 0-n | high | unsigned char | - | TAB_LADESTATUS | - | - | - | Statusinformation über den Ladezyklus |
| STAT_LADESTECKER | 0-n | high | unsigned char | - | TAB_LADESTECKER_HVPM | - | - | - | Status des Ladesteckers |
| STAT_HVB_SOC_DISP_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Display-SOC der HV-Batterie |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Aktuelle AC-Ladespannung (AC-Laden) |
| STAT_LADEN_STROM_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Maximaler AC-Ladestrom (AC-Laden) |
| STAT_STROMBEGRENZUNG_AC_LOW | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Status der Strombegrenzung bei AC-Low-Laden |
| STAT_STROMBEGRENZUNG_AC_HIGH | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Status der Strombegrenzung bei AC-High-Laden |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Von der HV-Batterie prognostizierte Dauer bis zum Ladeende |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer des HVPM: 0 - 65531 - Wertebereich; 65533 - Nicht verfügbar; 65532 - Initialisierung; 65534 - Fehler; 65535 - Signal ugültig |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Prognostizierter Energieinhalt der HV-Batterie in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt der HV-Batterie |
| STAT_BEGINN_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beginn des günstigen Ladefensters (AC-Laden) |
| STAT_BEGINN_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beginn des günstigen Ladefensters (AC-Laden) |
| STAT_ENDE_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ende des günstigen Ladefensters (AC-Laden) |
| STAT_ENDE_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ende des günstigen Ladefensters (AC-Laden) |
| STAT_LSC_TRIGGER_GRUND | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_HVPM | - | - | - | Status und Grund des LSC-Triggers |
| STAT_POLY_TIME_1_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 1. Stützpunktes |
| STAT_POLY_SOC_1_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 1. Stützpunktes |
| STAT_POLY_TIME_2_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 2. Stützpunktes |
| STAT_POLY_SOC_2_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 2. Stützpunktes |
| STAT_POLY_TIME_3_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 3. Stützpunktes |
| STAT_POLY_SOC_3_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 3. Stützpunktes |
| STAT_POLY_TIME_4_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 4. Stützpunktes |
| STAT_POLY_SOC_4_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 4. Stützpunktes |
| STAT_POLY_TIME_5_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 5. Stützpunktes |
| STAT_POLY_SOC_5_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 5. Stützpunktes |
| STAT_LADEMODUS | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS | - | - | - | Lademodus (konduktiv / induktiv) |
| STAT_POSITIONIERUNG | 0-n | high | unsigned char | - | TAB_STATUS_POSITIONIERUNG | - | - | - | Status Positionierung |
| - | Bit | high | BITFIELD | - | BF_GRUND_LADEUNTERBRECHUNG | - | - | - | Grund Ladeunterbrechung |
| STAT_HVB_SOC_IST_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist-SOC der HV-Batterie |
| - | Bit | high | BITFIELD | - | BF_STATUS_LSC_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden Abfahrtszeit |
| STAT_LSC_PROGNOSEMODE | 0-n | high | unsigned char | - | TAB_LSC_PROGNOSE_MODE | - | - | - | Aktueller LSC-Prognosemodus |
| STAT_LSC_VERSION | 0-n | high | unsigned char | - | TAB_STATUS_LSC_VERSION | - | - | - | LSC-Versionsnummer |
| STAT_AKT_PHASE_COUNT_AC_CHARGING | 0-n | high | unsigned char | - | TAB_AKTUELLE_PHASE_COUNT_AC_CHARGING | - | - | - | Anzahl der Phasen beim Laden |
| STAT_HV_BATTERY_SIZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler Brutto-Batterieinhalt vor Auslieferung an Kunden in Wh (nach SW-Regelung, nicht alternder und nicht von Temperatur abhängiger Wert) |
| STAT_ENERGIEDELTA_VOLL_WERT | kWh | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Benötigte Energie zum Vollladen |
| STAT_LADEENDE_URSACHE | 0-n | high | unsigned char | - | TAB_URSACHE_LADEENDE | - | - | - | Ladeende Ursache (nur bei Ladeende gültig) |
| STAT_LSC_AUSWAHL_LADEN_SOFORT_MODUS | 0-n | high | unsigned char | - | TAB_HVPM_LSC_AUSWAHL_LADEN_SOFORT_MODUS | - | - | - | Einstellung Lademodus Sofortladen |
| STAT_LADEFENSTER1_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_LADEFENSTER1_AUSWAHL_NR | - | - | - | Auswahl des ersten günstigen Ladefensters (nur bei Zwei-Zeit-Wecker verfügbar) |
| STAT_LADEFENSTER2_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_STAT_LADEFENSTER2_AUSWAHL | - | - | - | Auswahl des zweiten günstigen Ladefensters |

### RES_0XDFDA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_DAUER_TEMP_COOLANT_01_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen unterhalb von Stützstelle 1 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_02_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 1 und Stützstelle 2 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_03_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 2 und Stützstelle 3 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_04_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 3 und Stützstelle 4 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_05_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 4 und Stützstelle 5 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_06_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 5 und Stützstelle 6 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_07_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 6 und Stützstelle 7 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_08_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 7 und Stützstelle 8 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_09_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen zwischen Stützstelle 8 und Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nutzung der Traktions E-Maschine bei Kühlmitteltemperaturen oberhalb von Stützstelle 9 in Sekunden |
| STAT_EM_DAUER_TEMP_COOLANT_ST_01_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 1 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_02_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 2 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_03_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 3 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_04_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 4 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_05_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 5 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_06_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 6 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_07_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 7 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_08_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 8 für Kühlmitteltemperaturen |
| STAT_EM_DAUER_TEMP_COOLANT_ST_09_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stützstelle 9 für Kühlmitteltemperaturen |
| STAT_EM_LEISTUNGSGRADIENT_01_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine unterhalb Stützstelle 1 |
| STAT_EM_LEISTUNGSGRADIENT_02_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 1 und Stützstelle 2 |
| STAT_EM_LEISTUNGSGRADIENT_03_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 2 und Stützstelle 3 |
| STAT_EM_LEISTUNGSGRADIENT_04_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 3 und Stützstelle 4 |
| STAT_EM_LEISTUNGSGRADIENT_05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 4 und Stützstelle 5 |
| STAT_EM_LEISTUNGSGRADIENT_06_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 5 und Stützstelle 6 |
| STAT_EM_LEISTUNGSGRADIENT_07_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 6 und Stützstelle 7 |
| STAT_EM_LEISTUNGSGRADIENT_08_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 7 und Stützstelle 8 |
| STAT_EM_LEISTUNGSGRADIENT_09_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 8 und Stützstelle 9 |
| STAT_EM_LEISTUNGSGRADIENT_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 9 und Stützstelle 10 |
| STAT_EM_LEISTUNGSGRADIENT_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 10 und Stützstelle 11 |
| STAT_EM_LEISTUNGSGRADIENT_12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 11 und Stützstelle 12 |
| STAT_EM_LEISTUNGSGRADIENT_13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 12 und Stützstelle 13 |
| STAT_EM_LEISTUNGSGRADIENT_14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 13 und Stützstelle 14 |
| STAT_EM_LEISTUNGSGRADIENT_15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 14 und Stützstelle 15 |
| STAT_EM_LEISTUNGSGRADIENT_16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 15 und Stützstelle 16 |
| STAT_EM_LEISTUNGSGRADIENT_17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 16 und Stützstelle 17 |
| STAT_EM_LEISTUNGSGRADIENT_18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 17 und Stützstelle 18 |
| STAT_EM_LEISTUNGSGRADIENT_19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 18 und Stützstelle 19 |
| STAT_EM_LEISTUNGSGRADIENT_20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine zwischen Stützstelle 19 und Stützstelle 20 |
| STAT_EM_LEISTUNGSGRADIENT_21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit des Leistungsgradient der Elektromaschine oberhalb Stützstelle 20 |
| STAT_EM_LEISTUNGSGRADIENT_ST_01_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 1 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_02_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 2 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_03_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 3 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_04_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 4 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_05_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 5 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_06_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 6 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_07_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 7 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_08_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 8 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_09_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 9 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_10_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 10 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_11_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 11 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_12_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 12 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_13_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 13 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_14_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 14 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_15_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 15 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_16_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 16 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_17_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 17 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_18_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 18 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_19_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 19 für Leistungsgradient (in W/s) |
| STAT_EM_LEISTUNGSGRADIENT_ST_20_WERT | - | high | signed int | - | - | 100.0 | 1.0 | 0.0 | Stützstelle 20 für Leistungsgradient (in W/s) |

### RES_0XDFE0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_REGELUNG_WERK_ZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Regelung nicht aktiv 0x01: Regelung aktiv |
| STAT_SOC_REGELUNG_WERK_AUSGEWAEHLTER_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert absoluter SOC als Vorgabe für SOC Regelung |

### RES_0XF050_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | signed char | - | TAB_AKTIV | - | - | - | Status Freilauf: 0=inaktiv; 1=aktiv |

### RES_0XF098_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREISCHALTUNG_AKTIV_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des aktuellen Status der Freischaltung (0 = inaktiv; 1 = aktiv) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| RESET_REASON | 0x1721 | - | Werte fuer den Reset Grund. Die Werte sind vom Zulieferer festzulegen. DefaultWert: 0xFF. Hinweis: Dieser DID ist optional, muss aber beim Reset dann zumindest mit 0xFF befuellt werden. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1721_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _STATUS_AKS_DIAG_INFO | 0x4009 | - | Diagnoseinformation zu fehlerbedingtem AKS bzw. Freilauf | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| STATUS_TYPCHECKNR | 0x4047 | STAT_TYPCHECKNR_WERT | Typprüfnummer (notwendig für Mode$9 / Infotyp 4) | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HISTORIE_ZYKLISCHE_SIGNATURPRUEFUNG | 0x4048 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048_D |
| XCP_SWITCHOVER2_READING_KALTSTARTS | 0x4895 | STAT__WERT | - | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STATUS_BOSCH_FELDDATEN_BLOCK0 | 0x6000 | - | BOSCH_FELDDATEN_BLOCK0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6000_D |
| _STATUS_BOSCH_FELDDATEN_BLOCK1 | 0x6001 | - | BOSCH_FELDDATEN_BLOCK1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6001_D |
| _BOSCH_FELDDATEN_BLOCK2 | 0x6002 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6002_D |
| _BOSCH_FELDDATEN_BLOCK3 | 0x6003 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6003_D |
| _BOSCH_FELDDATEN_BLOCK4 | 0x6004 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6004_D |
| _BOSCH_FELDDATEN_BLOCK5 | 0x6005 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6005_D |
| _BOSCH_FELDDATEN_BLOCK6 | 0x6006 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6006_D |
| _BOSCH_FELDDATEN_BLOCK7 | 0x6007 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6007_D |
| HVPM_HV_SYSTEM_OFF_RETRY | 0xADCB | - | HV-System herunterfahren oder hochfahren erneut versuchen (HVPM 2015) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADCB_R | - |
| HVPM_DCDC | 0xADCC | - | Steuern des DC/DC Wandlers (HVPM 2015) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADCC_R | - |
| HVPM_LADEHISTOGRAMM_LOESCHEN | 0xADCF | - | Löschen des Histogramms und Zählers aller Ladevorgänge (HVPM2015) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADCF_R | - |
| HVPM_LADEHISTORIE_LOESCHEN | 0xADD0 | - | Löschen der Historie für die letzten 4 Ladevorgänge (HVPM2015) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADD0_R | - |
| HISTOGRAMM_EMASCHINE_TEMPERATUR_KUEHLMITTEL_HUB | 0xADE5 | - | Häufigkeit von Kühlmitteltemperaturhüben der Traktions E-Maschine, geordnet nach Kühlmitteltemperaturhub und Kühlmitteltemperaturmittelwert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE5_R | RES_0xADE5_R |
| HISTOGRAMM_EMASCHINE_DREHMOMENT_HUB | 0xADE6 | - | Abstastung der Drehmoment im 10ms-Raster Bestimmung des Drehmomenthubs und des Mittelwertes des Hubes | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE6_R | RES_0xADE6_R |
| HISTOGRAMM_EMASCHINE_DREHZAHL_HUB | 0xADE7 | - | Abstastung der Drehzahl im 10ms-Raster Bestimmung des Drehzahlhubs und des Mittelwertes des Hubes | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE7_R | RES_0xADE7_R |
| ZSE_BATTERIE_SZE_WERTE_LOESCHEN | 0xADE8 | - | Löschen der SZE Werte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE8_R | - |
| ZSE_BATTERIE_TAUSCH_REGISTRIEREN | 0xADE9 | - | Tausch der ZSE Batterie registrieren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADE9_R | - |
| SOC_REGELUNG | 0xADEA | - | Vorgeben und Auslesen SOC Regelung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEA_R | RES_0xADEA_R |
| LAST_HISTOGRAMM_EMASCHINE | 0xADEB | - | Auslesen Histogramm mit Drehzahl-Drehmoment Bereiche der elektrische Maschine und Auslesen Anzahl an Vorzeichenwechsel des Drehmoments der Traktions E-Maschine zur Abschätzung der Lager-Alterung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADEB_R | RES_0xADEB_R |
| LEISTUNGSMESSUNG_PHEV | 0xADED | - | Setzen/Beenden und Auslesen des Modus Leisungsmessung für PHEVs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADED_R | RES_0xADED_R |
| EME_ROTORLAGESENSOR_ANLERNEN | 0xADF0 | - | Anlernen Rotorlagesensor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xADF0_R |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF4_R | RES_0xADF4_R |
| WERKSMODUS_PHEV | 0xADFB | - | Aktivieren/Deaktivieren des Werksmodus PHEV sowie Auslesen Status Werksmodus PHEV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADFB_R | RES_0xADFB_R |
| AKUSTIKWERT_EME | 0xD7A2 | STAT_AKUSTIKWERT_WERT | Im Werk gemessener Lautstärkewert der EME. | dBm | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| HVPM_LADESTROM_EINSTELLUNG_AMPERE | 0xDB47 | - | Auslesen/Ändern der Ladestrombegrenzung (ABK2018) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB47_D | RES_0xDB47_D |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | V_e_HvilError | High | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_KL30C_SPANNUNG | 0xDE0F | STAT_KL30C_STATUS_EIN | 0=Crash nicht erkannt, 1=Crash erkannt | 0/1 | rba_IHM_flgCrashHw | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EME_ELUP | 0xDE19 | - | Anzahl der Bremsbetätigungen, Laufzeit und Anläufe der ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE19_D | RES_0xDE19_D |
| EME_KAELTEMITTEL_ABSPERRVENTIL | 0xDE23 | - | Ansteuerung des Kältemittelabsperrventils | - | V_e_KMV_IR_tester_ctl_ducy_req | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE23_D | RES_0xDE23_D |
| EME_SERIENNUMMERN_BOSCH | 0xDE2E | - | Serien-, Sach- und Änderungsnummer des Steuergeräts (Bosch) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE2E_D |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE75_D |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | ISC_UT30 | High | unsigned int | - | 1.0 | 512.0 | 0.0 | - | 22 | - | - |
| AE_STROM_EMASCHINE | 0xDE8A | - | Ströme E-Maschine / Umrichter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8A_D |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C_D |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE92_D |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE93_D | RES_0xDE93_D |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | High | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6_D |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7_D |
| KAELTEMITTEL_ABSPERRVENTIL_ON_OFF_PWM | 0xDEC0 | STAT_AKAV_ON_WERT | Status des Kältemittelabsperrventils; 0% = Ventil geschlossen; 100% = Ventil offen | % | V_e_KMV_IR_tester_ducy | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | 0xDEE4 | STAT_AKAV_EL_DIAGNOSE_NR | Ergebnis der elektrischen Diagnose vom Kältemittelabsperrventil | 0-n | V_e_KMV_IR_tester_diag_state | High | unsigned char | TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG | - | - | - | - | 22 | - | - |
| HISTOGRAMM_ANTRIEB | 0xDEED | - | Historienwerte für Antrieb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEED_D |
| HISTOGRAMM_DEGRADATION | 0xDEEF | - | Historienwerte Degradation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEEF_D |
| SUPPLIER01_NV_RAM_RESET | 0xDF18 | - | Rücksetzen von Daten aus einem definierten Bereich des NVRAM-Spiegels auf Wert 0x00 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF18_D | RES_0xDF18_D |
| SUPPLIER01_NV_RAM | 0xDF19 | - | Auslesen/Schreiben auf einen definierten Bereich eines NVRAM-Spiegels eines Lieferanten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDF19_D | RES_0xDF19_D |
| ZSE_BATTERIE_IBS_FEHLERZAEHLER | 0xDF1A | - | Auslesen des Fehlerzählers vom IBS der ZSE Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF1A_D |
| IDENT_IBS2015_ZSE | 0xDF1B | - | Identifikation IBS2015 ZSE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF1B_D |
| MASSEBAND_DIAGNOSE | 0xDF22 | STAT_WIDERSTAND_WERT | Aktueller Widerstandswert der Masseanbindung DCDC-Wandler | mOhm | RTE_BMWgnldg_r_ActGnd_ub | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| HVPM_LADESTROM_EINSTELLUNG | 0xDF48 | - | Auslesen/Ändern der Ladestrombegrenzung (HVPM2015) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF48_D | RES_0xDF48_D |
| HISTOGRAMM_LADEKOORDINATOR | 0xDF49 | - | Histogramme des Ladekoordinators | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF49_D |
| HVPM_LADEMODUS_WERK | 0xDF4A | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC - HVPM 2015) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF4A_D | RES_0xDF4A_D |
| HVPM_DCDC_LESEN | 0xDF4F | - | Rückgabewerte des HVPM für die Ansteuerung des DC/DC-Wandlers (HVPM 2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF4F_D |
| ELUP_DATEN_RESET | 0xDF51 | - | Zurücksetzen aller Statisikdaten der ELUP | - | V_e_ElupDatenReset | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF51_D | RES_0xDF51_D |
| SCHWINGUNGSDAEMPFUNG_DEAKTIVIEREN | 0xDF5C | - | Deaktivierung der Schwingungsdämpfung | - | Tqc_Diag_ada_disable | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF5C_D | RES_0xDF5C_D |
| LAST_HISTOGRAMM_EMASCHINE_RESET | 0xDF5D | - | Zurücksetzen der gespeicherten Lasthistogramm-Daten der Elektromaschine oder Auslesen des Zustandes vom Zurücksetzen | - | V_e_hist_EM_rst | - | - | - | - | - | - | - | 2E;22 | ARG_0xDF5D_D | RES_0xDF5D_D |
| HVPM_HV_SYSTEM | 0xDF5F | - | Informationen zum Hochvolt System (HVPM 2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDF5F_D |
| LADEGERAET_HISTOGRAMM_RESET | 0xDFB4 | - | Zurücksetzen der Histogramme vom Ladegerät | - | V_e_SleDiag_Histo_T_rst | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFB4_D | RES_0xDFB4_D |
| RBM_INFO | 0xDFD1 | - | RBM Information für die unterbrochenen REME Diagnosen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD1_D |
| HISTOGRAMM_EMASCHINE_TEMPERATUR | 0xDFD2 | - | Temperatur Histogramme der Elektromaschine für Magnet, Wickelkopf und Pressverband | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD2_D |
| HVPM_LADEHISTOGRAMM_LESEN | 0xDFD7 | - | Auslesen des Ladehistogramms (HVPM2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD7_D |
| HVPM_LADEHISTORIE_LESEN | 0xDFD8 | - | Auslesen der Ladehistorie (HVPM2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD8_D |
| HVPM_LAST_STATE_CALL | 0xDFD9 | - | Lesen des Last-State-Calls (HVPM2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD9_D |
| HISTOGRAMM_EMASCHINE_KUEHLMITTEL_TEMPERATUR_LEISTUNGSGRADIENT | 0xDFDA | - | Histogramm der Traktions-Elektromaschine für Kühlmitteltemperatur und Leistungsgradient: - Aufzeichnung der Kühlmittel-Temperatur der Traktions E-Maschine im 1s-Raster und Zuordnung in entsprechende Klassen nach Zeit [s]. - Abstastung von Drehzahl und Drehmoment im 10 ms-Raster Bestimmung der Leistung, Ableitung dieser und Zuordnung zu den Klassen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFDA_D |
| SOC_REGELUNG_ANTRIEB_WERK | 0xDFE0 | - | Werksmodus zur Vorgabe eines Ziel Absolut-SOC für die Regelung des Ladezustands der HV Batterie über Lastpunktvorgabe des Verbrennungsmotors. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDFE0_D | RES_0xDFE0_D |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050_R |
| FREI_MESSUNG_XCP | 0xF098 | - | Temporäres Freischalten Messung über XCP und Auslesen Status temporäres Freischalten Messung über XCP | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF098_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AC_HIGH_I_LIMIT_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximal |
| 0x01 | Reduziert |
| 0xFF | Wert ungültig |

### TAB_AC_I_LIMIT_HIGH

| WERT | TEXT |
| --- | --- |
| 0 | Maximal |
| 1 | Reduziert |

### TAB_AC_I_LIMIT_LOW

| WERT | TEXT |
| --- | --- |
| 0 | Maximal |
| 1 | Reduziert |
| 2 | Minimal |

### TAB_AC_LOW_I_LIMT_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximal |
| 0x01 | Reduziert |
| 0x02 | Minimal |
| 0xFF | Wert ungültig |

### TAB_AE_ELEKTRISCHE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentenregelung |
| 0x02 | Reserviert |
| 0x03 | EM-Spannungsregelung |
| 0x04 | Reserviert |
| 0x05 | Drehzahlregelung mit Momentenvorsteuerung |
| 0x06 | HV Batterie Stromregelung |
| 0x07 | Anlernen Rotorlagesensor |
| 0x08 | Aktiver Kurzschluss (AKS) |
| 0x09 | Reserviert |
| 0x0A | Freilauf |
| 0x0B | Reserviert |
| 0x0C | Sicherer Zustand / Fehler |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |
| 0x0F | Signal ungültig |

### TAB_AE_ELUP_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion! |
| 0x01 | ELUP ansteuern |

### TAB_AE_ZST_AKTIV_NAKTIV

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht aktiv |
| 0x02 | Aktiv |
| 0xFF | Wert ungültig |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### TAB_AKTUELLE_PHASE_COUNT_AC_CHARGING

| WERT | TEXT |
| --- | --- |
| 0x01 | 1-phasig |
| 0x02 | 2-phasig |
| 0x03 | 3-phasig |
| 0xFF | Wert ungültig |

### TAB_ANF_BETRIEBSARTEN_KOORDINATOR_EM

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x02 | Anforderung einer Isolationsmessung |
| 0x03 | Nullstromanforderung |

### TAB_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0 | NotActive |
| 1 | Drvinit |
| 2 | SensCalFW |
| 3 | Standby |
| 4 | alOffsetCalFW |
| 5 | alOffsetCalAcc |
| 6 | nCtl1 |
| 7 | nCtl2 |
| 8 | TrqCtl |
| 9 | UdcCtlBat |
| 0x0A | UdcCtl |
| 0x0B | nCtl3 |
| 0x0C | IsCtl |
| 0x0D | Failure |
| 0x0E | DisCharge |
| 0x0F | MoCSOP |
| 0x10 | FwCtrl |
| 0x11 | TestPulse |
| 0x12 | agOffsCalStrt |
| 0x13 | agOffsCalFinshd |
| 0x14 | psiExctCal |
| 0x15 | Prec |
| 0xFF | Wert ungültig |

### TAB_CRASHSEV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Crash |
| 0x01 | Crash Schwere 1 |
| 0x02 | Crash Schwere 2 |
| 0x03 | CAN Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_DCDC_BA_TARGET

| WERT | TEXT |
| --- | --- |
| 0x0 | Init |
| 0x1 | Standby |
| 0x2 | Buck |
| 0x3 | Error |
| 0x4 | Crash |

### TAB_DCDC_DIAG_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | UBnetDiagLockd - Diagnose gesperrt |
| 1 | UBnetDiagDisadErr - Diagnose deaktiviert aufgrund bestätigem Fehler |
| 2 | UBnetDiagPrelimChkFailr - Vorprüfungsfehler der Eingänge |
| 3 | UBnetDiagDeactvd -  Diagnose deaktiviert aufgrund ungültiger Eingangssignale |
| 4 | UBnetDiagInpErr -  Eingangsfehler Diagnose |
| 5 | UBnetCtrlDeOk - Deaktivierung OK (Innerhalb Limit) |
| 6 | UBnetCtrlDeNOk - Deaktivierung nicht OK |
| 0xFF | Wert ungültig |

### TAB_DIAG_DCDC_VORGABEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine DC/DC Wandler Vorgaben übernehmen |
| 0x01 | SOLL Betriebsart übernehmen |
| 0x02 | SOLL Spannung 12V übernehmen |
| 0x03 | Mindest Spannung HV übernehmen |
| 0x04 | Leistungsanforderung übernehmen |
| 0x05 | Alle DC/DC Wandler Vorgaben übernehmen |

### TAB_DREHZAHL_EM_STUETZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Unterhalb Drehzahlstützstelle 1 |
| 0x01 | Zwischen Drehzahlstützstelle 1 und Drehzahlstützstelle 2 |
| 0x02 | Zwischen Drehzahlstützstelle 2 und Drehzahlstützstelle 3 |
| 0x03 | Zwischen Drehzahlstützstelle 3 und Drehzahlstützstelle 4 |
| 0x04 | Zwischen Drehzahlstützstelle 4 und Drehzahlstützstelle 5 |
| 0x05 | Zwischen Drehzahlstützstelle 5 und Drehzahlstützstelle 6 |
| 0x06 | Zwischen Drehzahlstützstelle 6 und Drehzahlstützstelle 7 |
| 0x07 | Zwischen Drehzahlstützstelle 7 und Drehzahlstützstelle 8 |
| 0x08 | Zwischen Drehzahlstützstelle 8 und Drehzahlstützstelle 9 |
| 0x09 | Zwischen Drehzahlstützstelle 9 und Drehzahlstützstelle 10 |
| 0x0A | Zwischen Drehzahlstützstelle 10 und Drehzahlstützstelle 11 |
| 0x0B | Zwischen Drehzahlstützstelle 11 und Drehzahlstützstelle 12 |
| 0x0C | Zwischen Drehzahlstützstelle 12 und Drehzahlstützstelle 13 |
| 0x0D | Zwischen Drehzahlstützstelle 13 und Drehzahlstützstelle 14 |
| 0x0E | Oberhalb Drehzahlstützstelle 14 |

### TAB_ENTLADESCHUTZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Entladeschutz nicht aktiv - SOC okay |
| 0x01 | Entladeschutz nicht aktiv - SOC niedrig |
| 0x02 | Entladeschutz aktiv |

### TAB_FAHRBEREITSCHAFT_HV_SYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrbereitschaft freigegeben / HV ist nicht verfügbar |
| 0x01 | Fahrbereitschaft freigegeben / HV ist verfügbar |
| 0x02 | Fahrbereitschaft nicht freigegeben / HV ist verfügbar |
| 0x03 | Fahrbereitschaft nicht freigegeben / HV ist nicht verfügbar |

### TAB_FUSI_BACK_HVSM_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x00 | AE internal wheel block detection. |
| 0x01 | Longitudinal dynamic Fusi safe state. |
| 0x02 | DME requests low torque. Issue during drive. |
| 0x03 | DME communication bad. |
| 0x04 | DME requests safe state. |
| 0x05 | DME communication bad. |
| 0x06 | Fusi torque limitation function which requests safe state if limitation is exceeded. |
| 0x08 | EGS requests safe state. |
| 0x09 | EGS communication bad und torque is lower than -38 Nm. |
| 0x0A | DME communication bad. |
| 0x0B | Supplier triggers safe state. |
| 0x0C | If HVSM forward path requests safe state HVSM backward path does it as well and the other way round. |
| 0x0D | Internal qualifier from FWP. |
| 0xFFFF | Wert ungültig |

### TAB_FUSI_BACK_LD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | static braking torque limit (SM2B) |
| 0x01 | MSR torque request limit (SM27A) |
| 0x02 | invalid quadrant (SM14) |
| 0x03 | overspeed error on Main micro (SM10A) |
| 0x04 | CPL (current plausi) |
| 0x05 | Qualifier issue |
| 0x06 | resolver offset error |
| 0xFF | Wert ungültig |

### TAB_FUSI_BOSCH_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | EWS 4/6 |
| 0x01 | Tester STEUERN_MONTAGEMODUS (RC 0xF043) |
| 0x02 | Tester STEUERN_ROTORLAGESENSOR_ANLERNEN (RC 0xADF0) |
| 0x03 | Tester STEUERN_AKS_EMK_START (RC 0xADF4) |
| 0x04 | Tester STEUERN_FREILAUFMODUS (RC 0xF050) |
| 0x05 | HVSM safe state req backward path |
| 0x06 | HVSM safe state req forward path |
| 0x07 | Standby |
| 0x08 | SIC (speed controller/nureg) AKS |
| 0x09 | SIC (speed controller/nureg) Freewheeling |
| 0x0A | ZF freewheeling request |
| 0x0B | ZF shut down request |
| 0x0C | SC due to PWF state |
| 0xFFFF | Wert ungültig |

### TAB_FUSI_FWD_HVSM_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x01 | Classical longitudinal dynamic Fusi safe state. |
| 0x04 | DME requests safe state. |
| 0x05 | DME communication bad. |
| 0x06 | New Fusi torque limitation function which requests safe state if limitation is exceeded. |
| 0x08 | EGS requests safe state.  |
| 0x09 | EGS communication bad und torque is lower than -38 Nm. |
| 0x0B | Supplier requests safe state. |
| 0x0C | If HVSM backward path requests safe state HVSM forward path does it as well and the other way round. |
| 0x0D | Internal qualifier from BWP. |
| 0x0E | Qualifier of supplier request bad. |
| 0xFFFF | Wert ungültig |

### TAB_FUSI_FWD_LD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | static braking torque limit (SM2B).  |
| 0x03 | overspeed error on Main micro (SM10A) |
| 0x04 | CPL (current plausi) |
| 0x06 | Resolver offset error |
| 0xFF | Wert ungültig |

### TAB_FUSI_OPMO_CHGE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | DC-HV-Laden |
| 0x03 | Derating |
| 0x04 | Ladeunterbrechung |
| 0x05 | Error |
| 0x06 | Crash |
| 0x07 | Betriebsartwechsel |
| 0x08 | Ladeinitialisierung |
| 0x09 | Ladeinitialisierung abgeschlossen |
| 0x0D | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x0E | Funktion_meldet_Fehler |
| 0x0F | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_FUSI_WBD_STATUS_AKKU

| WERT | TEXT |
| --- | --- |
| 0x00 | Standard static slip detection |
| 0x01 | Wheel speed signal failure (AVL_RPM_WHL) or vehicle speed signal failure (V_VEH) |
| 0x02 | Wheel speed plausibility check failure with gearbox output speed |
| 0x03 | DSC slip condition in case of driver braking (not yet implemented) |
| 0x04 | Dynamic slip detection |
| 0x05 | Slip error integral |
| 0x06 | Summarized rear axle slip activation conditions |
| 0x07 | Current EM torque exceeded determined torque threshold (negative only) |
| 0x08 | Zero-Torque Request to level 1 torque limit function (HYM) = Bit 6 AND Bit 7 set and debounced. |
| 0xFFFF | Wert ungültig |

### TAB_HDCAC_EREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | Öffnen |
| 0x01 | Schließen |
| 0x03 | Ungültig |

### TAB_HISTOGRAMM_DREHMOMENT_HUB

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehmomentbereich zwischen 1 und 2 Stützstelle des Drehmomentmittelwertes |
| 0x01 | Drehmomentbereich zwischen 2 und 3 Stützstelle des Drehmomentmittelwertes |
| 0x02 | Drehmomentbereich zwischen 3 und 4 Stützstelle des Drehmomentmittelwertes |
| 0x03 | Drehmomentbereich zwischen 4 und 5 Stützstelle des Drehmomentmittelwertes |
| 0x04 | Drehmomentbereich zwischen 5 und 6 Stützstelle des Drehmomentmittelwertes |
| 0x05 | Drehmomentbereich zwischen 6 und 7 Stützstelle des Drehmomentmittelwertes |
| 0x06 | Drehmomentbereich zwischen 7 und 8 Stützstelle des Drehmomentmittelwertes |
| 0x07 | Drehmomentbereich zwischen 8 und 9 Stützstelle des Drehmomentmittelwertes |
| 0x08 | Drehmomentbereich zwischen 9 und 10 Stützstelle des Drehmomentmittelwertes |
| 0x09 | Drehmomentbereich zwischen 10 und 11 Stützstelle des Drehmomentmittelwertes |

### TAB_HISTOGRAMM_EMASCHINE_DREHZAHL_HUB

| WERT | TEXT |
| --- | --- |
| 0x00 | Zwischen 1 und 2 Stützstelle des Drehzahlmittelwertes |
| 0x01 | Zwischen 2 und 3 Stützstelle des Drehzahlmittelwertes |
| 0x02 | Zwischen 3 und 4 Stützstelle des Drehzahlmittelwertes |
| 0x03 | Zwischen 4 und 5 Stützstelle des Drehzahlmittelwertes |
| 0x04 | Zwischen 5 und 6 Stützstelle des Drehzahlmittelwertes |
| 0x05 | Zwischen 6 und 7 Stützstelle des Drehzahlmittelwertes |
| 0x06 | Zwischen 7 und 8 Stützstelle des Drehzahlmittelwertes |
| 0x07 | Oberhalb der 8 Stützstelle des Drehzahlmittelwertes |

### TAB_HISTOGRAMM_KUEHLMITTELTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kühlmitteltemperaturbereich unterhalb 1 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x01 | Kühlmitteltemperaturbereich zwischen 1 und 2 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x02 | Kühlmitteltemperaturbereich zwischen 2 und 3 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x03 | Kühlmitteltemperaturbereich zwischen 3 und 4 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x04 | Kühlmitteltemperaturbereich zwischen 4 und 5 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x05 | Kühlmitteltemperaturbereich zwischen 5 und 6 Stützstelle des Kühlmitteltemperaturmittelwertes |
| 0x06 | Kühlmitteltemperaturbereich oberhalb 6 Stützstelle des Kühlmitteltemperaturmittelwertes |

### TAB_HVMCU_ST_MOD

| WERT | TEXT |
| --- | --- |
| 0x00 | NormMod |
| 0x01 | OffsCal |
| 0x02 | ActvDcha |
| 0x03 | ActvDchaDfwRvs |
| 0xFF | Wert ungültig |

### TAB_HVPM_BA_DCDC_IST

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |
| 0x03 | Fehler |
| 0x04 | Crash |

### TAB_HVPM_BA_DCDC_KOMM

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |

### TAB_HVPM_LSC_AUSWAHL_LADEN_SOFORT_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Einmaliges Sofort-Laden inaktiv |
| 0x01 | Einmaliges Sofort-Laden aktiv |
| 0xFF | Wert ungültig |

### TAB_HVPM_SOLL_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |

### TAB_HV_START_KOMM

| WERT | TEXT |
| --- | --- |
| 0x00 | HV Initialisierung |
| 0x01 | HV Startup Request |
| 0x02 | HV Ready - HV Power on |
| 0x15 | HV Ready - HV Post Run |
| 0x1F | HV Isolationsmessung - Vorbereitung HV Isolationsmessung |
| 0x20 | HV Isolationsmessung - Start HV Isolationsmessung |
| 0x21 | HV Isolationsmessung - Laufende HV Isolationsmessung |
| 0x29 | Shutdown - Abschalten HV System |
| 0x2A | Shutdown - Öffnen der HV Schütze |
| 0x2B | Shutdown - Entladen HV Zwischenkreis |
| 0x2C | Shutdown - HV aus |
| 0x33 | Notabschaltung - Abschaltung HV |
| 0x34 | Notabschaltung - Öffnen der HV Schütze |
| 0x35 | Notabschaltung - Entladen HV Zwischenkreis |
| 0x36 | Notabschaltung - HV aus |
| 0x3D | Batterieloser Betrieb 1 - Abschalten HV System |
| 0x3E | Batterieloser Betrieb 1 - Regelung HV Spannung |
| 0x3F | Batterieloser Betrieb 1 - Öffnen der HV Schütze |
| 0x47 | Batterieloser Betrieb 2 - Freilauf |
| 0x48 | Batterieloser Betrieb 2 - Regelung HV Spannung Phase 1 |
| 0x49 | Batterieloser Betrieb 2 - Regelung HV Spannung Phase 2 |
| 0x08 | Batterieloser Betrieb - aktiviert |
| 0xFF | Wert ungültig |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_EL_DIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Ok. |
| 0x01 | Kurzschluss nach Masse. |
| 0x02 | Kurzschluss nach Plus. |
| 0x03 | Leitungsunterbrechung. |
| 0x0F | Signal ungültig. |

### TAB_KAELTEMITTEL_ABSPERRVENTIL_OEFFNEN_SCHLIESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Job inaktiv |
| 0x01 | Job aktiv & Ventil öffnen |
| 0x02 | Job aktiv & Ventil schliessen |

### TAB_LADEART_HVPM

| WERT | TEXT |
| --- | --- |
| 0x01 | AC -Low |
| 0x02 | AC-High |
| 0x03 | DC-Laden |
| 0x04 | Induktivladen |

### TAB_LADEFENSTER1_AUSWAHL_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0xFF | Wert ungültig |

### TAB_LADEN_URSACHE_LADEENDE_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt / Diagnose nicht möglich |
| 0x01 | SOC-Ziel erreicht |
| 0x02 | Ladestopp vom Kunden angefordert |
| 0x03 | Ladestecker abgezogen (wird nicht bedient) |
| 0x04 | Netzausfall |
| 0x05 | Fehler im Ladesystem |
| 0x06 | Fehler außerhalb des Fahrzeugs |

### TAB_LADESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Laden |
| 0x01 | Initialisierung |
| 0x02 | Laden aktiv |
| 0x03 | Ladepause |
| 0x04 | Laden beendet |
| 0x05 | Ladefehler |
| 0x0F | Signal ungültig |

### TAB_LADESTECKER_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladekabel angesteckt |
| 0x01 | Ladekabel angesteckt |
| 0x02 | Fehler |
| 0xFF | Wert ungültig |

### TAB_LADEVERFAHREN_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeverfahren |
| 0x01 | AC-Laden mit Typ 1-Stecker (Yazaki) |
| 0x02 | AC-Laden mit Typ 2-Stecker (Mennekes) |
| 0x03 | DC-Laden nach CHAdeMO-Protokoll |
| 0x04 | DC-Laden mit DC-Pins über Typ 1-Combo-Dose |
| 0x05 | AC-Laden China |
| 0x06 | AC-Laden über Typ 1-Combo-Dose |
| 0x07 | AC-Laden über Typ 2-Combo (Kern)-Ladedose |
| 0x08 | DC-Laden mit Kernpins über Typ 2-Combo (Kern)-Ladedose |
| 0x09 | DC-Laden mit DC-Pins über Typ 2-Combo (Kern)-Ladedose |
| 0xFD | Schnittstelle ist nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Wert ungültig |

### TAB_LEISTUNGSMESSUNG_PHEV_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Beenden |
| 0x01 | Nur Verbrennungsmotor |
| 0x02 | Maximale elektrische Leistung |

### TAB_LEISTUNGSMESSUNG_PHEV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Beenden Leistungsmessung |
| 0x01 | Nur Verbrennungsmotor |
| 0x02 | Maximale elektrische Leistung |

### TAB_LSC_PROGNOSE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalmode |
| 0x01 | Step-Mode |
| 0x02 | PLC-Mode |
| 0xFF | Wert ungültig |

### TAB_LSC_TRIGGER_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Trigger |
| 0x01 | Ladestart |
| 0x02 | Prognose-Update |
| 0x04 | Laden beendet |
| 0x05 | Laden abgebrochen - Externer Ladefehler |
| 0x06 | Ladepause |
| 0x09 | Laden abgebrochen - Interner Ladefehler |

### TAB_OP_MODE

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Standby |
| 2 | BUCK |
| 3 | Error |
| 0xFF | Wert ungültig |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_ROTORLAGE_SENSOR_ABBRUCHGRUND

| WERT | TEXT |
| --- | --- |
| 0x0000 | Anlernroutine erfolgreich |
| 0x0001 | Abbruch wegen ungültigem Istmode |
| 0x0002 | Abbruch wegen Drehzahlbandverletzung |
| 0x0004 | Abbruch wegen Rücknahme Abgleichanforderung |
| 0x0008 | Abbruch wegen Stromsensorfehler |
| 0x0010 | Abbruch wegen Rotorlagesensorfehler |
| 0x0020 | Abbruch wegen ungültigem ermittelten Winkel (Wert außerhalb des zulässigen Bereichs) |
| 0x0040 | Abbruch wegen Fehler in Temperatur |
| 0x0080 | Abbruch wegen Überschreitung Anzahl Wiederholversuche |
| 0x0100 | Abbruch wegen Gatedriver nicht im AKS |
| 0x0200 | Abbruch wegen Überschreitung maximale Abgleichzeit (TiMaxOfCal) |
| 0xFFFF | Wert ungültig |

### TAB_SOLLBETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0 | Standby |
| 0x01 | TrqCtl |
| 0x08 | AKS |
| 0x0A | Freilauf |
| 0xFF | Wert ungültig |

### TAB_STATUS_LADEMODUS

| WERT | TEXT |
| --- | --- |
| 0x01 | AC Laden |
| 0x02 | Induktiv Laden |
| 0xFF | Wert ungültig |

### TAB_STATUS_LADEMODUS_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Lademodus Werk aktiv |
| 0x02 | Lademodus Werk nicht aktiv / Reguläres Laden aktiv |

### TAB_STATUS_LSC_VERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | Ist-SOC basiert |
| 0x01 | ABK-SOC-basiert |
| 0xFF | Wert ungültig |

### TAB_STATUS_POSITIONIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht positioniert |
| 0x01 | Teilpositioniert |
| 0x02 | Positioniert |
| 0xFF | Wert ungültig |

### TAB_STAT_AKS_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein AKS |
| 0x01 | AKS |
| 0x02 | Fehler |

### TAB_STAT_AUSWAHL_LADEN_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | Immer Sofortladen |
| 0x02 | Günstig Laden auf Abfahrtszeit |
| 0x03 | Sofortladen; Vorauswahl günstig Laden |
| 0x04 | Intelligent Laden auf Abfahrtszeit |
| 0x05 | Sofortladen; Vorauswahl Intelligent Laden |
| 0xFF | Wert ungültig |

### TAB_STAT_HVIL_GESAMT_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Interlock nicht unterbrochen |
| 0x01 | Interlock unterbrochen |
| 0xFF | nicht definiert |

### TAB_STAT_LADEFENSTER2_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0xFF | Wert ungültig |

### TAB_STAT_ROTORLAGESENSOR_STATUS_MODE_GEN3

| WERT | TEXT |
| --- | --- |
| 0x00 | RLS Abgleich noch nie angefordert |
| 0x01 | RLS Abgleich angefordert, aber nicht aktiv |
| 0x02 | RLS Abgleich aktiv |
| 0x03 | Fehlerhafter RLS Abgleich (Abbruch) |
| 0x04 | Eingelernter Winkeloffset aus erfolgreich beendetem RLS Abgleich liegt vor, kein Abgleich erforderlich |

### TAB_ST_GATEDRV

| WERT | TEXT |
| --- | --- |
| 0x00 | ShortCircuitBot |
| 0x01 | FreeWheel |
| 0x02 | PWMrun |
| 0x03 | Discharge |
| 0x04 | ShortCircuitTop |
| 0xFF | Wert ungültig |

### TAB_ST_HVBCNTCT

| WERT | TEXT |
| --- | --- |
| 0x00 | open |
| 0x01 | PreClsd |
| 0x02 | MaiClsd |
| 0x03 | Failr |
| 0xFF | Wert ungültig |

### TAB_URSACHE_LADEENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt / Diagnose nicht möglich |
| 0x01 | SOC Ziel erreicht |
| 0x02 | Ladestopp vom Kunden angefordert |
| 0x03 | Ladestecker abgezogen (wird nicht bedient) |
| 0x04 | Netzausfall |
| 0x05 | Fehler im Ladesystem |
| 0x06 | Fehler ausserhalb des Fahrzeugs |
| 0xFF | Wert ungültig |

### TAB_UWB_DCDC_ACTUAL_BA

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Standby |
| 2 | Buck |
| 3 | Error |
| 4 | Crash |
| 0xFF | Wert ungültig |

### TAB_UWB_E_ANTRIEB_1_IST_BETRIEBSART

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

### TAB_UWB_E_ANTRIEB_1_SOLL_BETRIEBSART

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

### TAB_UWB_HVLADEN_CHARGE_WISH

| WERT | TEXT |
| --- | --- |
| 0x00 | Laden möglich  |
| 0x01 | Ladeende Speicher voll geladen  |
| 0x03 | Ladeende auf Grund Fehler HV-Batterie  |
| 0x04 | Sondermodus: Kapazitätstestmodus  |
| 0xFFFF | Wert ungültig |

### TAB_UWB_HVLADEN_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0x64 | Idle - NoError |
| 0x6E | Idle - PreError |
| 0x4BB | Setup - Ladung Standby |
| 0x4BC | Setup - HV Request |
| 0x4BD | Setup - Ladung Init |
| 0x4BE | Setup - Ladung vorbereitet |
| 0x5E7 | Ladung - Ladung läuft |
| 0x5E8 | Ladung - Ladung unterbrochen |
| 0x638 | Laden - Ladestörung |
| 0x777 | Abbrechen explizit End Plug |
| 0x781 | Abbrechen explizit End Pil |
| 0x78B | Abbrechen explizit End ChaIntfShared |
| 0x795 | Abbrechen explizit ChaIntfNormal |
| 0x79F | Abbrechen implizit End Laden |
| 0xFFFF | Wert ungültig |

### TAB_UWB_HVSTART_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | HV Init |
| 0x01 | HvUp - HV Start Up Anforderung |
| 0x02 | HV freigeben - HV Power On |
| 0x1F | HV freigeben - HV ISO Messung Vorbereitung |
| 0x20 | HV freigeben - HV ISO Messung Start |
| 0x21 | HV freigeben - HV ISO Messung läuft |
| 0x029 | Abschaltung - HV abschalten |
| 0x2A | Abschaltung - HV Schütze offen |
| 0x2B | Abschaltung - HV Entladung |
| 0x2C | Abschaltung - HV Aus |
| 0x33 | Notabschaltung - HV abschalten |
| 0x34 | Notabschaltung - HV Schütze offen |
| 0x35 | Notabschaltung - HV Entladung |
| 0x36 | Notabschaltung - HV Aus |
| 0x3D | Batterieloser Betrieb 1.0 - HV abschalten |
| 0x3E | Batterieloser Betrieb 1.0 - HV Spannungsregelung |
| 0x3F | Batterieloser Betrieb 1.0 - HV Schütze offen |
| 0x08 | Batterieloser Betrieb 1.0 & 2.0 - Batterieloser Betrieb aktiviert |
| 0x47 | Batterieloser Betrieb 2.0 - Freilauf |
| 0x48 | Batterieloser Betrieb 2.0 - Spannungsregelung Phase 1 |
| 0x49 | Batterieloser Betrieb 2.0 - Spannungsregelung Phase 2 |

### TAB_UWB_LK_STATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nullstromanforderung |
| 0x02 | Notlauf |
| 0x03 | Fahren im batterielosem Betrieb  |
| 0x04 | Fahren im |
| 0x05 | Fahren bei niedrigem HV-SOC  |
| 0x06 | Fahren bei normalem HV-SOC  |
| 0x07 | Ladung bei niedrigem HV-SOC |
| 0x08 | Ladung bei normalen HV-SOC |
| 0x09 | Standfunktionen Default  |
| 0x0A | Kapazitiver Testbetrieb |
| 0xFF | Wert ungültig |

### TAB_UWB_STATUS_ENTLADESCHUTZ

| WERT | TEXT |
| --- | --- |
| 0 | SOC OK |
| 1 | SOC Low |
| 2 | Entladeschutz aktiv |
| 0xFF | Wert ungültig |

### TAB_WERKSMODUS_PHEV

| WERT | TEXT |
| --- | --- |
| 0x01 | eFahren zur Ueberfuehrung |
| 0x02 | Fahrdynamische Pruefung |
| 0x03 | Dauerhafter Verbrennerbetrieb |

### TAB_WERKSMODUS_PHEV_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Werksmodus aktiv |
| 0x01 | eFahren zur Überführung |
| 0x02 | Fahrdynamische Prüfung |

### TAB_0X6109

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0019 |

### TAB_0X610A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 |

### TAB_0X610B

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0012 |

### TAB_0X610C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 |

### TAB_0X6115

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x001A |

### TAB_0X6145

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 |

### TAB_0X6169

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 |

### TAB_0X7038

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 29 | 0x0046 | 0x0047 | 0x0048 | 0x0049 | 0x004A | 0x004B | 0x004C | 0x004D | 0x004E | 0x004F | 0x0050 | 0x0051 | 0x0052 | 0x0053 | 0x0054 | 0x0055 | 0x0056 | 0x0057 | 0x0058 | 0x0059 | 0x005A | 0x005B | 0x005C | 0x005D | 0x005E | 0x005F | 0x0060 | 0x0061 | 0x0062 |

### TAB_0X7040

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 |

### TAB_0X705B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0x03 | DH-Abgleich |
| 0x11 | Direktschreiben des SecretKey und EWS5 |
| 0x12 | Direktschreiben des SecretKey und EWS5 und DH-Abgleich |
| 0x22 | Direktschreiben + EWS6 + DH-Abgleich |
| 0x23 | DH-Abgleich + EWS6 |
| 0xXY | unbekannt |

### DIAGADRTXT

| WERT | NAME |
| --- | --- |
| 0x12 | DME |
| 0x13 | DME2 |
| 0x18 | EGS |
| 0x1A | AE |
| 0x3A | EME20 |
| 0x3A | EME |
| 0x0A | REME |
| 0x1A | EMET |
| 0x0A | EMEZ |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
