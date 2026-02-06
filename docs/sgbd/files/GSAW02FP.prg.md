# GSAW02FP.prg

## General

|  |  |
| --- | --- |
| File | GSAW02FP.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 224 |
| Origin | BMW EA-511 Plett |
| Revision | 2.002 |
| Author | AISIN-AW-CO.-LTD. EA-521 banno |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 8-Gang-Wandlerautomatikgetriebe mit E-Schaltung |  |  |
| ORIGIN | string | BMW EA-511 Plett |  |  |
| REVISION | string | 2.002 |  |  |
| AUTHOR | string | AISIN-AW-CO.-LTD. EA-521 banno |  |  |
| COMMENT | string | - |  |  |
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

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

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

### _FS_LOESCHEN_FUNKTIONAL

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

### RBM_RATIOS_AUSLESEN

RBM Inhalt ausgeben UDS: $22 ReadDataByCommonIdentifier Modus  : Default

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

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Control paramter of SL |

### ARG_0X4001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SC2 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Control Parameter of SC2 |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SC3 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Control parameter of SC3 |

### ARG_0X4003_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SC4 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Control parameter of SC4 |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_PARKING_SOL | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Device control of parking solenoid |

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SR | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | Control paramenter of SR |

### ARG_0X4007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SAC | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | - | - | SAC control parameter |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SLT_CTRL | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | SLT Control paramter |

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SLU | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | Control parameter of SLU |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL1 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | Control parameter of SL1 |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL2 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | Control parameter of SL2 |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL3 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | control paramenter of SL3 |

### ARG_0X400F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL4 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | Control parameter of SL4 STA |

### ARG_0X4010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL5 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | control parameter of SL5 |

### ARG_0X4011_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SL6 | mA | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 100.0 | 1000.0 | SL6 control (short term adjustment) |

### ARG_0X403B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TARGET_GEAR | 0-n | high | unsigned char | - | TARGET_GEAR | - | - | - | - | - | Gang vorgeben |

### ARG_0XC001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0-n | - | unsigned char | - | TAB_EWS_MODE_ARG | - | - | - | - | - | Der Parameter MODE legt die durchzuführende Aktion fest. |
| DATA | DATA | - | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Legt die Daten für die durchzuführende Aktion fest. Folgende Formate müssen unterstützt werden: 01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF und 0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF. |

### ARG_0XD9CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGELN_ROLLE | 0-n | high | unsigned int | - | TAB_STEUERN_SEGELN_OEKO | - | - | - | - | - | Segeln auf der Rolle aktivieren/deaktivieren |

### ARG_0XDA15_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LERNFKT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Alle Lernfunktionen zurücksetzen = 0 |

### ARG_0XDA66_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOP_DEACTIVATE | 0-n | high | unsigned char | - | TAB_AUTOP_DEACTIVATION | - | - | - | - | - | Deaktivieren von AUTO-P. Siehe Tabelle TAB_AUTOP_DEACTIVATION |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROL_PARAM | + | - | 0-n | high | unsigned char | - | ST_GEARPOSITION_CTRL | - | - | - | - | - | Routine control parameter |

### ARG_0XFD20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRANSMISSION_UNIT_NO | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | - | - | Getriebe Einheit Nummer |
| TRANSMISSION_NO | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | - | - | Getriebe Nummer |
| TORQUE_CONVERTER_NO | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | - | - | Wandler Nummer |

### BF_CODING_3000_BYTE_0_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_0_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Aktiviert, 1: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_0_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_1_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_1_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Aktiviert, 1: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Aktiviert, 1: Deaktiviert |
| STAT_CODING_3000_BYTE_1_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_2_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_2_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_2_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3000_BYTE_3_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3000_BYTE_3_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3000_BYTE_3_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3001_BYTE_0_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3001_BYTE_0_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_0_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_CODING_3001_BYTE_1_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_3001_BYTE_1_BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |
| STAT_CODING_3001_BYTE_1_BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 1: Aktiviert, 0: Deaktiviert |

### BF_DISABLEINFOAGS_BYTE5_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_DSC_FEHLER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_DIAGNOSESTEUERUNG | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DISABLEINFOAGS_BYTE6_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTIEG_GANGSTEUERUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_DREHZAHLSTEUERUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_MOMENTENSTEUERUNG | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_ANHAENGERERKENNUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_BETRIEBSMODUS | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_ECO_TASTER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_AUSSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DISABLEINFOAGS_BYTE7_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_DSC_FEHLER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_AUSSENTEMPERATUR | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DISABLEINFOAGS_BYTE8_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABESTEUERUNG_SAS | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_FREIGABESTEUERUNG_DME | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_INIT_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_INIT_STEIGUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_INIT_LAUFENDER_SEGELAUSSTIEG | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_ECO_TASTER | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0: Falsch; 1: Wahr |
| STAT_EINSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0: Falsch; 1: Wahr |

### BF_DYNAMIC_INDEX_LESEN_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUICKSHIFT | 0-n | high | unsigned int | 0x00C0 | - | - | - | - | 0: QS0; 64: QS1; 128: QS2,192: QS3 (QS = Quickshift, Schaltzeiten) |
| STAT_OPEN_SHIFT | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | 00b: Verboten; 01b: Erlaubt |
| STAT_POSITIVE_TORQUE_REQUEST_CD | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Positiver Momenteneingriff (z.B. beim ausrollen und runterschalten) 0: Verboten; 1: Erlaubt |
| STAT_FIRST_GEAR_ENGINE_BRAKE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Motorbremse im ersten Gang 0: Verboten; 1: Angefordert |
| STAT_INCREASE_LUP_CHGREQ | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | 00b:forbidden;01b:requested |

### BF_ERSATZMASSNAHMEN_AKTIV_0_7_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_001 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Emergency mode 1 (0 = not active, 1 = active) |
| STAT_EM_002 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Emergency mode 2 (0 = not active, 1 = active) |
| STAT_EM_003 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Emergency mode 3 (0 = not active, 1 = active) |
| STAT_EM_004 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Emergency mode 4 (0 = not active, 1 = active) |
| STAT_FS_001_SP_BACKUP | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Backup value of output rev sensor is used (0 = not active, 1 = active) |
| STAT_FS_002_NC_BACKUP | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Backup value of input rev sensor is used (0 = not active, 1 = active) |
| STAT_FS_004_SLU_OFF_FIX | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Lockup on is inhibited (0 = not active, 1 = active) |
| STAT_FS_005_ENST_AVOID | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Failsafe for engine stall avoid (0 = not active, 1 = active) |

### BF_ERSATZMASSNAHMEN_AKTIV_16_23_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_014_NO_LUBE_CTRL | 0/1 | high | unsigned char | 0x01 | - | - | - | - | No lubrication control (0 = not active, 1 = active) |
| STAT_FS_015_LOW_LUBE_MODE | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Low lubrication mode (0 = not active, 1 = active) |
| STAT_FS_016_AVAIL_MODE | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Availability mode (0 = not active, 1 = active) |
| STAT_FS_017_TC_PROTECT_MODE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | TC protection mode (0 = not active, 1 = active) |
| STAT_FS_030_SR_ON_FIX | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Force control SR ON (0 = not active, 1 = active) |
| STAT_INH_001_LRNSFT_A | 0/1 | high | unsigned char | 0x20 | - | - | - | - | No Shifting learning control (0 = not active, 1 = active) |
| STAT_INH_001_LRNSFT_B | 0/1 | high | unsigned char | 0x40 | - | - | - | - | No Shifting learning control (0 = not active, 1 = active) |
| STAT_INH_002_LRNGAR_A | 0/1 | high | unsigned char | 0x80 | - | - | - | - | No Garage learning control (0 = not active, 1 = active) |

### BF_ERSATZMASSNAHMEN_AKTIV_24_31_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INH_002_LRNGAR_B | 0/1 | high | unsigned char | 0x01 | - | - | - | - | No Garage learning control (0 = not active, 1 = active) |
| STAT_INH_003_LRNNCN_A | 0/1 | high | unsigned char | 0x02 | - | - | - | - | No NIC/AFU learning control (0 = not active, 1 = active) |
| STAT_INH_003_LRNNCN_B | 0/1 | high | unsigned char | 0x04 | - | - | - | - | No NIC/AFU learning control (0 = not active, 1 = active) |
| STAT_INH_004_LRNLUP_A | 0/1 | high | unsigned char | 0x08 | - | - | - | - | No LockUp learning control (0 = not active, 1 = active) |
| STAT_INH_004_LRNLUP_B | 0/1 | high | unsigned char | 0x10 | - | - | - | - | No LockUp learning control (0 = not active, 1 = active) |
| STAT_INH_005_LUP | 0/1 | high | unsigned char | 0x20 | - | - | - | - | No L-UP control (0 = not active, 1 = active) |
| STAT_INH_006_SLIP | 0/1 | high | unsigned char | 0x40 | - | - | - | - | No L-UP slip control (0 = not active, 1 = active) |
| STAT_INH_007_NCON | 0/1 | high | unsigned char | 0x80 | - | - | - | - | No NIC function (with Exit control) (0 = not active, 1 = active) |

### BF_ERSATZMASSNAHMEN_AKTIV_32_39_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INH_008_AFU | 0/1 | high | unsigned char | 0x01 | - | - | - | - | No AFU function (with Exit control) (0 = not active, 1 = active) |
| STAT_INH_009_GAR | 0/1 | high | unsigned char | 0x02 | - | - | - | - | No garage shift control (0 = not active, 1 = active) |
| STAT_INH_010_RINH | 0/1 | high | unsigned char | 0x04 | - | - | - | - | No reverse control (0 = not active, 1 = active) |
| STAT_INH_011_NEC | 0/1 | high | unsigned char | 0x08 | - | - | - | - | No E/G rev control / No torque increase control (0 = not active, 1 = active) |
| STAT_INH_012_IDLSTP | 0/1 | high | unsigned char | 0x10 | - | - | - | - | No Sailing function (with Exit control) (0 = not active, 1 = active) |
| STAT_INH_013_IDLCST | 0/1 | high | unsigned char | 0x20 | - | - | - | - | No MSA function (with Exit control) (0 = not active, 1 = active) |
| STAT_INH_015_MPXSFT | 0/1 | high | unsigned char | 0x40 | - | - | - | - | No multiplex shift control (0 = not active, 1 = active) |
| STAT_INH_016_IDLSTP_SMOOTH | 0/1 | high | unsigned char | 0x80 | - | - | - | - | MSA function exit with smooth engagement (0 = not active, 1 = active) |

### BF_ERSATZMASSNAHMEN_AKTIV_40_47_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INH_017_IDLCST_SMOOTH | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Sailing function exit with smooth engagement (0 = not active, 1 = active) |
| STAT_INH_018_IDLSTP_IMMEDIATE | 0/1 | high | unsigned char | 0x02 | - | - | - | - | MSA function exit immediately (0 = not active, 1 = active) |
| STAT_INH_019_IDLCST_IMMEDIATE | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Sailing function exit immediately (0 = not active, 1 = active) |
| STAT_INH_020_B2APP | 0/1 | high | unsigned char | 0x08 | - | - | - | - | No B2 apply control (0 = not active, 1 = active) |
| STAT_RESERVED_1 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Reserved |
| STAT_RESERVED_2 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Reserved |
| STAT_RESERVED_3 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Reserved |
| STAT_RESERVED_4 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Reserved |

### BF_ERSATZMASSNAHMEN_AKTIV_8_15_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_006_REL_ALL | 0/1 | high | unsigned char | 0x01 | - | - | - | - | To release all clutches/brake (0 = not active, 1 = active) |
| STAT_FS_007_ENST_REL_ALL | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Neutral when vehicle stop (0 = not active, 1 = active) |
| STAT_FS_008_SC4_FORCE_DRIVE | 0/1 | high | unsigned char | 0x04 | - | - | - | - | SC4 force drive (0 = not active, 1 = active) |
| STAT_FS_009_SR_FORCE_DRIVE | 0/1 | high | unsigned char | 0x08 | - | - | - | - | SR force drive (0 = not active, 1 = active) |
| STAT_FS_010_SC4_OFF_SOL_PSWCK | 0/1 | high | unsigned char | 0x10 | - | - | - | - | SC4 sol OFF/PSW check (0 = not active, 1 = active) |
| STAT_FS_011_SC4_ON_SOL_PSWCK | 0/1 | high | unsigned char | 0x20 | - | - | - | - | SC4 sol ON/PSW check (0 = not active, 1 = active) |
| STAT_FS_012_SR_OFF_SOL_PSWCK | 0/1 | high | unsigned char | 0x40 | - | - | - | - | SR sol OFF/PSW check (0 = not active, 1 = active) |
| STAT_FS_013_SR_ON_SOL_PSWCK | 0/1 | high | unsigned char | 0x80 | - | - | - | - | SR sol ON/PSW check (0 = not active, 1 = active) |

### BF_FAULT_RELATED_INFORMATION_LESEN_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARM_UP_CYCLE_ACHIEVEMENT | 0/1 | high | unsigned char | 0x80 | - | - | - | - | 0:OFF; 1:ON |
| STAT_DRIVING_CYCLE_ACHIEVEMENT | 0/1 | high | unsigned char | 0x40 | - | - | - | - | 0:OFF; 1:ON |
| STAT_IUP_ERASING_PERMANET_FAULT_CODES | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0:OFF; 1:ON |
| STAT_MIL_REQUEST | 0/1 | high | unsigned char | 0x10 | - | - | - | - | 0:OFF; 1:ON |

### BF_MANUAL_SHIFT_SWITCH_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUAL_SHIFT_SWITCH_ON | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Manuelle Gasse eingelegt: 1, Keine Manuelle Gasse eingelegt: 0 |
| STAT_MANUAL_SHIFT_SWITCH_PLUS | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Manuelle Gasse Tip-Plus an: 1, Manuelle Gasse Tip-Plus aus: 0 |
| STAT_MANUAL_SHIFT_SWITCH_MINUS | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Manuelle Gasse Tip-Minus an: 1, Manuelle Gasse Tip-Minus aus: 0 |

### BF_MSA_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STOP_DISABLE | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0:OFF; 1:ON |
| STAT_TEMPORARY_DEACTIVATION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0:OFF; 1:ON |
| STAT_START_REQUEST | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0:OFF; 1:ON |
| STAT_PERMANENT_DEACTIVATION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | 0:OFF; 1:ON |
| STAT_SIGNAL | 0/1 | high | unsigned char | 0x20 | - | - | - | - | 0:Signal valid; 1:Signal invalid |

### BF_SEGELN_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGELN_DEAK_DAUERHAFT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0: Segeln deaktiviert ist nicht gesetzt; 1: Segeln deaktiviert ist gesetzt |
| STAT_CODING_FUNCTION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Segelfunktion in Kodierdaten aktiviert/deaktiviert: 0: Kodierfunktion; 1: Keine Kodierfunktion |
| STAT_ENABLED_OR_CODED | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Segelfunktion dauerhaft freigegeben oder über Kodierung: 0: Dauerhaft freigegeben; 1: Kodiert |

### BF_SHIFT_LOCK_CONDITION_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS_AUTHENTICATION_CONDITION | 0/1 | high | unsigned char | 0x10 | - | - | - | - | EWS Authentication condition: 0 Authentication failed; 1 Authentication Passed |
| STAT_BRAKE_SHIFT_LOCK_CONDITION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Bremsbedingung: 0: Bremse shiftlock weg (Bedingung nicht erfüllt), 1: Bremse shiftlock darauf (Bedingung erüllt) |
| STAT_REVOLUTION_CONDITION | 0/1 | high | unsigned char | 0x04 | - | - | - | - | RPM Condition: 0:RPM Condition wird nicht erfüllt, 1:  RPM Condition wird erfüllt |
| STAT_READY_DRIVE_CONDITION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Fahrbereitschaftbedingung: 0: Fahrbereitschaft aus (Bedingung nicht erfüllt), 1: Fahrbereitschaft an (Bedingung erüllt) |
| STAT_PWF_CONDITION | 0/1 | high | unsigned char | 0x01 | - | - | - | - | PWF Condition: 0: Keine Fahren, 1: Fahren |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DHCLIENTSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | DH-Abgleichvorgang aktiv (ab Start Berechnung eigener Keyfaktor bis erfolgreiches Speichern DH-SecretKey) |
| 0x02 | E-Label == 1 |
| 0x04 | Reserviert |
| 0x08 | Reserviert |
| 0x10 | Reserviert |
| 0x20 | Reserviert |
| 0x40 | Reserviert |
| 0x80 | Reserviert |
| 0xFF | Wert ungültig |

### DYNOMETER_MODE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Dynometer mode Inactive |
| 0x01 | Dynometer mode Active |
| 0xFF | Invalid |

### EMERGENCY_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Emergency Mode |
| 0x01 | Emergency Mode 1 |
| 0x02 | Emergency Mode 2 |
| 0x03 | Emergency Mode 3 |
| 0x04 | Emergency Mode 4 |
| 0x05 | Emergency Mode 5 |

### EWS4STATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Client authentisiert |
| 0x02 | Nicht authentische Response |
| 0x04 | Reserviert |
| 0x08 | Reserviert |
| 0x10 | Reserviert |
| 0x20 | Reserviert |
| 0x40 | Reserviert |
| 0x80 | SK verriegelt |
| 0xFF | Wert ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021800 | Energiesparmode aktiv | 0 | - |
| 0x021808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02180A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02180B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02180C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02180D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x021823 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x02FF18 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x420002 | Elektrisches Drucksteuerventil Hauptdruck: Kurzschluss nach Plus | 0 | - |
| 0x420006 | Elektrisches Drucksteuerventil Hauptdruck: Kurzschluss nach Masse | 0 | - |
| 0x420007 | Elektrisches Drucksteuerventil Hauptdruck: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420012 | Elektrisches Drucksteuerventil C2: Kurzschluss nach Plus | 0 | - |
| 0x420013 | Elektrisches Drucksteuerventil C2: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420016 | Elektrisches Drucksteuerventil C2: Kurzschluss nach Masse | 0 | - |
| 0x420032 | Elektrisches Drucksteuerventil C3: Kurzschluss nach Plus | 0 | - |
| 0x420033 | Elektrisches Drucksteuerventil C3: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420036 | Elektrisches Drucksteuerventil C3: Kurzschluss nach Masse | 0 | - |
| 0x420042 | Elektrisches Drucksteuerventil C1: Kurzschluss nach Plus | 0 | - |
| 0x420046 | Elektrisches Drucksteuerventil C1: Kurzschluss nach Masse | 0 | - |
| 0x420047 | Elektrisches Drucksteuerventil C1: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420050 | Elektrisches Drucksteuerventil C1: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420051 | Elektrisches Drucksteuerventil C2: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420052 | Elektrisches Drucksteuerventil Wandlerüberbrückungskupplung: Kurzschluss nach Plus | 0 | - |
| 0x420053 | Elektrisches Drucksteuerventil Wandlerüberbrückungskupplung: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420054 | Elektrisches Drucksteuerventil C3: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420055 | Elektrisches Drucksteuerventil C4: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420056 | Elektrisches Drucksteuerventil Wandlerüberbrückungskupplung: Kurzschluss nach Masse | 0 | - |
| 0x420057 | Elektrisches Drucksteuerventil B1: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420058 | Elektrisches Drucksteuerventil B2: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420059 | Elektrisches Drucksteuerventil Hauptdruck: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x42005A | Elektrisches Drucksteuerventil Wandlerüberbrückungskupplung: Rückmeldesignal Differenzwert hängt | 0 | - |
| 0x420071 | Magnetventil SC2: Kurzschluss nach Masse | 0 | - |
| 0x420072 | Magnetventil SC2: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420081 | Magnetventil SC3: Kurzschluss nach Masse | 0 | - |
| 0x420082 | Magnetventil SC3: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420091 | Magnetventil SC4: Kurzschluss nach Masse | 0 | - |
| 0x420092 | Magnetventil SC4: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420096 | Magnetventil SC4: fehlerhaft offen | 0 | - |
| 0x420097 | Magnetventil SC4: fehlerhaft geschlossen | 0 | - |
| 0x4200A1 | Magnetventil SL: Kurzschluss nach Masse | 0 | - |
| 0x4200A2 | Magnetventil SL: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x4200B1 | Magnetventil SPH: Kurzschluss nach Masse | 0 | - |
| 0x4200B2 | Magnetventil SPH: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x4200B3 | Magnetventil SPH: fehlerhaft offen | 0 | - |
| 0x4200B4 | Magnetventil SPH: fehlerhaft geschlossen | 0 | - |
| 0x4200C1 | Magnetventil SC4: fehlerhaft geschlossen oder Öldruckschalter für SC4: fehlerhaft aus | 0 | - |
| 0x4200C2 | Magnetventil Druckspeicher: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x4200C3 | Magnetventil Druckspeicher: Kurzschluss nach Masse | 0 | - |
| 0x4200C5 | Magnetventil SC2 oder SC3: fehlerhaft offen | 0 | - |
| 0x4200D1 | Magnetventil SR: fehlerhaft geschlossen oder Öldruckschalter für SR: fehlerhaft aus | 0 | - |
| 0x4200E1 | Magnetventil SC4: hängt in Position ein oder Öldruckschalter für SC4: fehlerhaft ein | 0 | - |
| 0x4200F1 | Magnetventil SR: Kurzschluss nach Masse | 0 | - |
| 0x4200F2 | Magnetventil SR: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x4200F3 | Magnetventil SR: fehlerhaft geschlossen | 0 | - |
| 0x4200F4 | Magnetventil SR: fehlerhaft offen | 0 | - |
| 0x4200F5 | Magnetventil SR: hängt in Position aus oder Öldruckschalter für SR: fehlerhaft ein | 0 | - |
| 0x4200F6 | Magnetventil SAC: fehlerhaft offen | 0 | - |
| 0x420101 | MSA: funktionaler Ausfall | 0 | - |
| 0x420112 | Elektrisches Drucksteuerventil B1: Kurzschluss nach Plus | 0 | - |
| 0x420113 | Elektrisches Drucksteuerventil B1: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420114 | Elektrisches Drucksteuerventil B2: Kurzschluss nach Plus | 0 | - |
| 0x420115 | Elektrisches Drucksteuerventil B2: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420116 | Elektrisches Drucksteuerventil B1: Kurzschluss nach Masse | 0 | - |
| 0x420118 | Elektrisches Drucksteuerventil B2: Kurzschluss nach Masse | 0 | - |
| 0x420122 | Elektrisches Drucksteuerventil C4: Kurzschluss nach Plus | 0 | - |
| 0x420123 | Elektrisches Drucksteuerventil C4: Rückmeldesignal fehlerhaft | 0 | - |
| 0x420126 | Elektrisches Drucksteuerventil C4: Kurzschluss nach Masse | 0 | - |
| 0x420146 | Elektrisches Drucksteuerventil C1: Unterbrechung | 0 | - |
| 0x420147 | Elektrisches Drucksteuerventil C2: Unterbrechung | 0 | - |
| 0x420148 | Elektrisches Drucksteuerventil C3: Unterbrechung | 0 | - |
| 0x420149 | Elektrisches Drucksteuerventil C4: Unterbrechung | 0 | - |
| 0x420150 | Elektrisches Drucksteuerventil B1: Unterbrechung | 0 | - |
| 0x420151 | Elektrisches Drucksteuerventil B2: Unterbrechung | 0 | - |
| 0x420152 | Elektrisches Drucksteuerventil Hauptdruck: Unterbrechung | 0 | - |
| 0x420153 | Elektrisches Drucksteuerventil Wandlerüberbrückungskupplung: Unterbrechung | 0 | - |
| 0x420201 | Wandlerüberbrückungskupplung: hängt in Position offen | 0 | - |
| 0x420211 | Wandlerüberbrückungskupplung: hängt in Position geschlossen | 0 | - |
| 0x4202E1 | Übersetzungsüberwachung Gang 8: Kupplung C2 oder B1 fehlerhaft offen | 0 | - |
| 0x4203A1 | Übersetzungsüberwachung Gang 2: Kupplung C1 oder B1 fehlerhaft offen | 0 | - |
| 0x4203B1 | Übersetzungsüberwachung Gang 3: Kupplung C1 oder C3 fehlerhaft offen | 0 | - |
| 0x4203C1 | Übersetzungsüberwachung Gang 4: Kupplung C1 oder C4 fehlerhaft offen | 0 | - |
| 0x4203D1 | Übersetzungsüberwachung Gang 5: Kupplung C1 oder C2 fehlerhaft offen | 0 | - |
| 0x4203E1 | Übersetzungsüberwachung Gang 6: Kupplung C2 oder C4 fehlerhaft offen | 0 | - |
| 0x4204F1 | Übersetzungsüberwachung Gang 7: Kupplung C2 oder C3 fehlerhaft offen | 0 | - |
| 0x420511 | Versorgungsspannung: Unterspannung | 1 | - |
| 0x420521 | Versorgungsspannung: Überspannung | 1 | - |
| 0x420602 | Abtriebsdrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420604 | Abtriebsdrehzahlsensor: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420605 | Abtriebsdrehzahlsensor: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420606 | Abtriebsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420622 | Getriebeeingangsdrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420624 | Getriebeeingangsdrehzahlsensor: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420626 | Getriebeeingangsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420671 | Funktionale Sicherheit: Hydraulikventil klemmt mechanisch | 0 | - |
| 0x420701 | Getriebeöltemperatursensor 1: Kurzschluss nach Masse | 0 | - |
| 0x420704 | Getriebeöltemperatursensor 1: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420706 | Getriebeöltemperatursensor 1: hängendes Signal | 0 | - |
| 0x420709 | Getriebeöltemperatursensor 1: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x42070A | Getriebeöltemperatursensor 1: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420711 | Temperatursensor 1 Steuergerät: Kurzschluss nach Masse | 0 | - |
| 0x420713 | Temperatursensor 1 Steuergerät: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420714 | Temperatursensor 1 Steuergerät: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420715 | Temperatursensor 1 oder 2 Steuergerät: hängendes Signal | 0 | - |
| 0x42071A | Temperatursensor 1 Steuergerät: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420731 | Temperatursensor 2 Steuergerät: Kurzschluss nach Masse | 0 | - |
| 0x420733 | Temperatursensor 2 Steuergerät: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x420734 | Temperatursensor 2 Steuergerät: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420735 | Temperatursensor 1 Steuergerät: hängendes Signal | 0 | - |
| 0x420736 | Temperatursensor 2 Steuergerät: hängendes Signal | 0 | - |
| 0x420737 | Temperatursensor 1 Steuergerät: zu hoher Gradient | 0 | - |
| 0x420738 | Temperatursensor 2 Steuergerät: zu hoher Gradient | 0 | - |
| 0x42073A | Temperatursensor 2 Steuergerät: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420753 | Übersetzungsüberwachung Gang 1: Kupplung C1 fehlerhaft offen | 0 | - |
| 0x420852 | Funktionale Sicherheit: Arbeitsspeicher Datenschutz | 1 | - |
| 0x420872 | Funktionale Sicherheit: Lesespeicher Datenüberprüfung | 1 | - |
| 0x420892 | Funktionale Sicherheit: Prozessor Kernprüfung | 1 | - |
| 0x4208C1 | Funktionale Sicherheit: Überwachung Takt | 1 | - |
| 0x4208C2 | Funktionale Sicherheit: Programm Flusskontrolle | 1 | - |
| 0x4208D1 | Funktionale Sicherheit: Überwachung Spannungsversorgung | 1 | - |
| 0x4208E1 | Funktionale Sicherheit: BIST Fehler | 0 | - |
| 0x4208E2 | Funktionale Sicherheit: Fehler Rückwärtsgangsperre | 1 | - |
| 0x4208F1 | Funktionale Sicherheit: Fehler ECM Eigendiagnose | 0 | - |
| 0x420901 | Funktionale Sicherheit: Batterie und Spannungsregler: Unterspannung | 0 | - |
| 0x420911 | Steuergerät: Lesespeicher Prüfsummenfehler | 0 | - |
| 0x421000 | Abtriebsdrehzahlsensor: kein Impuls und ABS Geschwindigkeit Fehler | 0 | - |
| 0x421001 | Abtriebsdrehzahlsensor: elektrischer Fehler und ABS Geschwindigkeit Fehler | 0 | - |
| 0x421002 | Getriebeeingangsdrehzahlsensor: elektrischer Fehler und Motordrehzahl Fehler | 0 | - |
| 0x421021 | Steuergerät: Arbeitsspeicher fehlerhafter Zugriff | 0 | - |
| 0x421061 | EWS: Wählhebelposition P verlassen wurde durch EWS verhindert | 1 | - |
| 0x421101 | Magnetventile gemeinsame Masse (SL1, SL2, SL4, SL5): Unterbrechung | 0 | - |
| 0x421102 | Magnetventile gemeinsame Masse (SL3, SL6, SLT): Unterbrechung | 0 | - |
| 0x421191 | Steuergerät: Kommunikationsfehler zwischen Prozessor und Treiber elektrisches Drucksteuerventil | 0 | - |
| 0x421271 | Abtriebsdrehzahlsensor: kein Signal | 0 | - |
| 0x421278 | Abtriebsdrehzahlsensor: Plausibilitätsfehler | 0 | - |
| 0x421279 | Abtriebsdrehzahlsensor: falsche Drehrichtung | 0 | - |
| 0x42127A | Abtriebsdrehzahlsensor: keine Drehrichtung | 0 | - |
| 0x42141F | Getriebepositionssensor: Nebensignal Botschaftsfehler | 0 | - |
| 0x421420 | Getriebepositionssensor: Hauptsignal Botschaftsfehler | 0 | - |
| 0x421421 | Getriebepositionssensor: hängendes Signal | 0 | - |
| 0x421423 | Getriebepositionssensor: Hauptsignal Überschreitung oberer Schwellenwert | 0 | - |
| 0x421424 | Getriebepositionssensor: Nebensignal Überschreitung oberer Schwellenwert | 0 | - |
| 0x421425 | Getriebepositionssensor: hängendes Hauptsignal | 0 | - |
| 0x421426 | Getriebepositionssensor: hängendes Nebensignal | 0 | - |
| 0x421429 | Getriebepositionssensor: Hauptsignal Unterschreitung unterer Schwellenwert | 0 | - |
| 0x42142A | Getriebepositionssensor: Nebensignal Unterschreitung unterer Schwellenwert | 0 | - |
| 0x421461 | Getriebeeingangsdrehzahlsensor: kein Signal | 0 | - |
| 0x421468 | Getriebeeingangsdrehzahlsensor: Plausibilitätsfehler | 0 | - |
| 0x421502 | Funktionale Sicherheit: Kommunikation Datenüberprüfung für PCU | 1 | - |
| 0x421503 | Funktionale Sicherheit: CAN Datenüberprüfung senden | 1 | - |
| 0x421711 | Getriebepositionssensor: Position P nicht angelernt | 0 | - |
| 0x421741 | Übersetzungsüberwachung Gang 1 im Schub: Kupplung B2 fehlerhaft offen | 0 | - |
| 0x421742 | Übersetzungsüberwachung Gang 1 im Schub: Kupplung C2 oder C3 oder C4 oder B1 klemmt | 0 | - |
| 0x421751 | Übersetzungsüberwachung Gang 1: Kupplung B1 oder C2 oder C4 oder C3 klemmt | 0 | - |
| 0x421761 | Übersetzungsüberwachung Gang 2: Kupplung C2 oder C3 oder C4 oder B2 klemmt | 0 | - |
| 0x421771 | Übersetzungsüberwachung Gang 3: Kupplung B1 oder C2 oder C4 oder B2 klemmt | 0 | - |
| 0x421781 | Übersetzungsüberwachung Gang 4: Kupplung B1 oder C2 oder C3 oder B2 klemmt | 0 | - |
| 0x421791 | Übersetzungsüberwachung Gang 5: Kupplung B1 oder C4 oder C3 oder B2 klemmt | 0 | - |
| 0x4217A1 | Übersetzungsüberwachung Gang 6: Kupplung C1 oder C3 oder B1 klemmt | 0 | - |
| 0x4217B1 | Übersetzungsüberwachung Gang 7: Kupplung B1 oder C1 oder C4 klemmt | 0 | - |
| 0x4217C1 | Übersetzungsüberwachung Gang 8: Kupplung C1 oder C3 oder C4 klemmt | 0 | - |
| 0x4217E1 | Übersetzungsüberwachung Rückwärtsgang: Kupplung C3 oder B2 klemmt | 0 | - |
| 0x421801 | Elektrisches Drucksteuerventil C1: maximaler Druck | 0 | - |
| 0x421802 | Elektrisches Drucksteuerventil C1: minimaler Druck | 0 | - |
| 0x421806 | Elektrisches Drucksteuerventil C2: minimaler Druck | 0 | - |
| 0x421807 | Elektrisches Drucksteuerventil C3: minimaler Druck | 0 | - |
| 0x421808 | Elektrisches Drucksteuerventil C4: minimaler Druck | 0 | - |
| 0x421809 | Elektrisches Drucksteuerventil B1: minimaler Druck | 0 | - |
| 0x421811 | Elektrisches Drucksteuerventil C2: maximaler Druck | 0 | - |
| 0x421821 | Elektrisches Drucksteuerventil C3: maximaler Druck | 0 | - |
| 0x421831 | Elektrisches Drucksteuerventil B1: maximaler Druck | 0 | - |
| 0x421841 | Elektrisches Drucksteuerventil C4: maximaler Druck | 0 | - |
| 0x421851 | Funktionale Sicherheit: Hydraulikventil fehlerhaft angesteuert | 0 | - |
| 0x421871 | Funktionale Sicherheit: fehlerhafte Gangwahl | 0 | - |
| 0x421881 | Elektrisches Drucksteuerventil B2: maximaler Druck | 0 | - |
| 0x421891 | Funktionale Sicherheit: fehlerhafte positive Drehmomentanforderung | 0 | - |
| 0x4218A1 | Funktionale Sicherheit: sicherer Zustand unmöglich | 0 | - |
| 0x4218D2 | Funktionale Sicherheit: Fehler Fahrtrichtung | 0 | - |
| 0x4218F2 | Funktionale Sicherheit: Anforderung Neutral über CAN-Botschaft | 1 | - |
| 0x421907 | Getriebeöltemperatursensor 1: zu hoher Gradient | 0 | - |
| 0x421910 | Getriebeöltemperatursensor 1: hängendes Signal bei Vergleich mit Kühlmitteltemperatur | 0 | - |
| 0x421962 | Öldruckschalter für SLB2: fehlerhaft ein | 0 | - |
| 0x421971 | Öldruckschalter für SC4: fehlerhaft aus | 0 | - |
| 0x421972 | Öldruckschalter für SC4: fehlerhaft ein | 0 | - |
| 0x421981 | Öldruckschalter für SR: fehlerhaft aus | 0 | - |
| 0x421982 | Öldruckschalter für SR: fehlerhaft ein | 0 | - |
| 0x4219D2 | Öldruckschalter 6 für SL6: fehlerhaft aus | 0 | - |
| 0x422001 | Funktionale Sicherheit: unberechtigte Motorstartfreigabe | 0 | - |
| 0x422022 | Steuergerät: Fehler bei Programmierung | 0 | - |
| 0x422041 | Funktionale Sicherheit: fehlerhaftes Einlegen der Parksperre erkannt | 0 | - |
| 0x422042 | Funktionale Sicherheit: ungewolltes Auslegen von P | 0 | - |
| 0x422043 | Funktionale Sicherheit: fehlerhafte Erkennung Parksperre | 0 | - |
| 0x4220A3 | E-Schaltung: Missbrauch der elektrischen Getriebenotentriegelung | 0 | - |
| 0x4220A9 | Parksperre eingelegt und Geschwindigkeit erkannt | 0 | - |
| 0x4220AA | Automatisches Einlegen der Parksperre bei Zündung aus ist deaktiviert | 0 | - |
| 0x4220AC | E-Schaltung: Missbrauch der elektrischen Getriebenotentriegelung bei niedriger Geschwindigkeit | 0 | - |
| 0x4220AD | E-Schaltung: Parksperre: Missbrauch bei hoher Geschwindigkeit | 0 | - |
| 0x4220B2 | Mikrokontroller-Komponenten: Lese-/Schreibe-Fehler nichtflüchtiger Speicher | 0 | - |
| 0x4220B4 | E-Schaltung: Fahrstufe einlegen verhindern | 0 | - |
| 0x422102 | Funktionale Sicherheit: Drehzahl Getriebestrang Abtrieb | 0 | - |
| 0x422112 | Funktionale Sicherheit: Drehzahl Getriebestrang Turbine | 0 | - |
| 0x422122 | Funktionale Sicherheit: Positionsanzeige Getriebe | 0 | - |
| 0x422132 | Funktionale Sicherheit: Status Gangwahl Getriebe abgesichert | 0 | - |
| 0x422172 | Funktionale Sicherheit: Verstärkung Antriebsstrang unplausibel | 0 | - |
| 0x422203 | Funktionale Sicherheit: Magnetventil | 0 | - |
| 0x423001 | Prüfung Signatur fehlerhaft | 0 | - |
| 0xCF0472 | LP-CAN Control Module Bus OFF | 0 | - |
| 0xCF0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCF1401 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1402 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1403 | Botschaft (Drehmoment Kurbelwelle 1, 0xA5) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1406 | Botschaft (Potentialvektor Beschleunigung, 0x1FF) fehlt, Sender DSC | 1 | - |
| 0xCF1411 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1412 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1413 | Botschaft (Drehmoment Kurbelwelle 2, 0xA6) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1421 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1422 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1423 | Botschaft (Drehmoment Kurbelwelle 3, 0xA7) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1431 | Botschaft (Antriebsstrang 1, 0x3FB) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1441 | Botschaft (Antriebsstrang 2, 0x3F9) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1442 | Botschaft (Antriebsstrang 2, 0x3F9) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1443 | Botschaft (Antriebsstrang 2, 0x3F9) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1451 | Botschaft (Winkel Fahrpedal, 0xD9) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1452 | Botschaft (Winkel Fahrpedal, 0xD9) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1453 | Botschaft (Winkel Fahrpedal, 0xD9) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1459 | Botschaft (Zustand Fahrzeug, 0x3C) nicht aktuell, Sender BDC | 1 | - |
| 0xCF145A | Botschaft (Zustand Fahrzeug, 0x3C) Prüfsumme falsch, Sender BDC | 1 | - |
| 0xCF145F | Botschaft (Status Stillstandsfunktionen DSC, 0x2B5) nicht aktuell,Sender DSC | 1 | - |
| 0xCF1460 | Botschaft (Status Stillstandsfunktionen DSC, 0x2B5) Prüfsumme falsch, Sender DSC | 1 | - |
| 0xCF1461 | Botschaft (Diagnose OBD Motor, 0x397) fehlt, Sender DME/DDE | 1 | - |
| 0xCF1473 | LP-CAN: Kommunikationsfehler | 1 | - |
| 0xCF1481 | Botschaft (Radmoment 3, 0x145) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B1 | Botschaft (Radmoment 1, 0x8F) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B2 | Botschaft (Radmoment 1, 0x8F) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14B3 | Botschaft (Radmoment 1, 0x8F): Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C1 | Botschaft (Status MSA, 0x30B) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C2 | Botschaft (Status MSA, 0x30B) nicht aktuell, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14C3 | Botschaft (Status MSA, 0x30B) Prüfsumme falsch, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF14E1 | Botschaft (Daten Antriebsstrang 4, 0x1FC) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1551 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1552 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) nicht aktuell,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1553 | Botschaft (Drehmoment Kurbelwelle 4, 0xC2) Prüfsumme falsch,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1571 | Botschaft (Daten Voraussage Betriebsstrategie, 0xFE) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1581 | Botschaft (Information Antriebsstrang, 0x138) fehlt,  Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xCF1591 | Botschaft (Daten EWS 4, 0x413) fehlt, Sender DME | 1 | - |
| 0xCF15C1 | Botschaft (Konfiguration Stellhebel Antrieb Fahrerlebnis, 0x324) fehlt, Sender DME | 1 | - |
| 0xCF1601 | Botschaft (Ist Drehzahl Rad ungesichert, 0x254) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1611 | Botschaft (Status Stabilisierung DSC, 0x173) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1612 | Botschaft (Status Stabilisierung DSC, 0x173) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1613 | Botschaft (Status Stabilisierung DSC, 0x173) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1621 | Botschaft (Ist Bremsmoment Summe, 0xEF) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1622 | Botschaft (Ist Bremsmoment Summe, 0xEF) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1623 | Botschaft (Ist Bremsmoment Summe, 0xEF) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1704 | Botschaft (Status Gangwahlschalter, 0x197) fehlt,  Empfänger EGS, Sender GWS | 1 | - |
| 0xCF1705 | Botschaft (Status Gangwahlschalter, 0x197) nicht aktuell,  Empfänger EGS, Sender GWS | 1 | - |
| 0xCF1706 | Botschaft (Status Gangwahlschalter, 0x197) Prüfsumme falsch,  Empfänger EGS, Sender GWS | 1 | - |
| 0xCF17D1 | Botschaft (Status Stillstandsfunktionen DSC, 0x2B5) fehlt, Sender DSC | 1 | - |
| 0xCF1811 | Botschaft (Neigung Fahrbahn, 0x163) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1821 | Botschaft (Längsbeschleunigung Schwerpunkt, 0x199) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1831 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1851 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1852 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) nicht aktuell, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1853 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) Prüfsumme falsch, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1861 | Botschaft (Giergeschwindigkeit Fahrzeug, 0x19F) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1871 | Botschaft (Masse/Gewicht Fahrzeug, 0x2E0) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1881 | Botschaft (Lenkwinkel Vorderachse Effektiv, 0x302) fehlt, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF1901 | Botschaft (Relativzeit, 0x328) fehlt, Empfänger EGS, Sender KOMBI | 1 | - |
| 0xCF1911 | Botschaft (Außentemperatur, 0x2CA) fehlt, Sender KOMBI | 1 | - |
| 0xCF1912 | Botschaft (Geschwindigkeit Fahrzeug 2, 0x175) fehlt, Sender DSC | 1 | - |
| 0xCF1913 | Botschaft (Geschwindigkeit Fahrzeug 2, 0x175) nicht aktuell, Sender DSC | 1 | - |
| 0xCF1915 | Botschaft (Geschwindigkeit Fahrzeug 2, 0x175) Prüfsumme falsch, Sender DSC | 1 | - |
| 0xCF1931 | Botschaft (Kilometerstand/Reichweite, 0x330) fehlt, Empfänger EGS, Sender KOMBI | 1 | - |
| 0xCF2011 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2012 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) nicht aktuell, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2013 | Botschaft (Status Türsensoren Abgesichert , 0x1E1) Prüfsumme falsch, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2021 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Sender ZGW; Empfänger EGS | 1 | - |
| 0xCF2061 | Botschaft (Zustand Fahrzeug, 0x3C) fehlt, Sender BDC | 1 | - |
| 0xCF2091 | Botschaft (Information Fahrzeug Antrieb , 0x65) fehlt, Sender BDC | 1 | - |
| 0xCF20D1 | Botschaft (Blinken, 0x1F6) fehlt,  Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2101 | Botschaft (Bedienung Schaltpaddel, 0x207) fehlt, Empfänger EGS, Sender BDC | 1 | - |
| 0xCF2501 | Botschaft (Status Anhänger, 0x2E4) fehlt, Empfänger EGS, Sender AAG | 1 | - |
| 0xCF2B51 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 0xE9) fehlt,  Empfänger EGS, Sender LMV_FQ | 1 | - |
| 0xCF2C11 | Signal (Drehmoment Kurbelwelle 1, 0xA5) ungültig Ist Drehmoment Kurbelwelle, Sender DME/DDE | 1 | - |
| 0xCF2C12 | Signal (Drehmoment Kurbelwelle 1, 0xA5) ungültig Ist Drehmoment Kurbelwelle DME/EGS, Sender DME | 1 | - |
| 0xCF2C14 | Signal (Drehmoment Kurbelwelle 3, 0xA7) ungültig Ist Drehmoment Kurbelwelle Fahrerwunsch FAS, Sender DME | 1 | - |
| 0xCF2C21 | Signal (Drehmoment Kurbelwelle 1, 0xA5) ungültig oder eingeschränkte Nutzsignalqualität Ist Drehzahl Motor Kurbelwelle, Sender DME/DDE | 1 | - |
| 0xCF2C44 | Signal (Drehmoment Kurbelwelle 2, 0xA6) ungültig , Sender DME | 1 | - |
| 0xCF2CA1 | Signal (Drehmoment Kurbelwelle 3, 0xA7) ungültig Anforderung Betriebsart Getriebestrang FAS, Sender DME | 1 | - |
| 0xCF2CE1 | Signal (Winkel Fahrpedal, 0xD9) ungültig oder eingeschränkte Nutzsignalqualität Ist Winkel Fahrpedal, Sender DME/DDE | 1 | - |
| 0xCF2CF0 | Signal (Status Türsensoren Abgesichert, 0x1E1): ungültig Status Türkontakt FAT Abgesichert, Sender BDC | 0 | - |
| 0xCF2CF1 | Signal (Drehmoment Kurbelwelle 3, 0xA7) ungültig Qualifier Anforderung Sperre Getriebestrang, Sender DME | 1 | - |
| 0xCF2CF2 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Steuerung Shiftlock Antrieb, Sender DME | 0 | - |
| 0xCF2CF8 | Signal (Radmoment Antrieb 1, 0x8F) ungültig Fahrer Verfügbarkeit Schnell, Sender DME | 1 | - |
| 0xCF2D01 | Signal (Diagnose OBD Motor, 0x397) ungültig Status OBD Zyklus, Sender DME/DDE | 1 | - |
| 0xCF2D11 | Signal (Diagnose OBD Motor, 0x397) ungültig OBD Modellwert Last Motor, Sender DME | 1 | - |
| 0xCF2D21 | Signal (Diagnose OBD Motor, 0x397) ungültig OBD Position Drosselklappe Motor, Sender DME | 1 | - |
| 0xCF2D54 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Soll Drehzahl Leerlauf Antrieb, Sender DME/DDE | 1 | - |
| 0xCF2DE1 | Signal (Daten Antriebsstrang 2, 0x3F9) ungültig Temperatur Motor Antrieb, Sender DME | 1 | - |
| 0xCF2E31 | Signal (Ist Bremsmoment Summe, 0xEF) ungültig Ist Bremsmoment Summe Fahrerwunsch, Sender DSC | 1 | - |
| 0xCF2EC2 | Signal (Ist Drehzahl Rad ungesichert, 0x254) ungültig Ist Drehzahl Rad HL, Sender DSC | 1 | - |
| 0xCF2ED2 | Signal (Ist Drehzahl Rad ungesichert, 0x254) ungültig Ist Drehzahl Rad HR, Sender DSC | 1 | - |
| 0xCF2EE2 | Signal (Ist Drehzahl Rad ungesichert, 0x254) ungültig Ist Drehzahl Rad VL, Sender DSC | 1 | - |
| 0xCF2EF2 | Signal (Ist Drehzahl Rad ungesichert, 0x254) ungültig Ist Drehzahl Rad VR, Sender DSC | 1 | - |
| 0xCF2F41 | Signal (Außentemperatur, 0x2CA) ungültig Temperatur Außen, Sender Kombi | 1 | - |
| 0xCF3104 | Signal (Status Gangwahlschalter, 0x197) ungültig Bedienung Gangwahlschalter, Sender GWS | 1 | - |
| 0xCF3106 | Signal (Status Gangwahlschalter, 0x197) ungültig Bedienung Gangwahlschalter Taster Parken, Sender GWS | 1 | - |
| 0xCF3251 | Signal (Bedienung Schaltpaddel, 0x207) ungültig Bedienung Schaltpaddel, Sender BDC | 1 | - |
| 0xCF3501 | Signal (Status Stabilisierung DSC, 0x173) ungültig Status Bremsung Fahrer, Sender DSC | 1 | - |
| 0xCF3661 | Signal (Drehmoment Kurbelwelle 4, 0xC2) ungültig Ist Drehzahl Motor Kurbelwelle Low extrapoliert, Sender DME | 1 | - |
| 0xCF36A1 | Signal (Sammelfehler Signale Sender BDC) ungültig, Sender BDC | 1 | - |
| 0xCF3853 | Signal (Information Antriebsstrang, 0x138) ungültig Status Zustand MSA Erweitert, Sender DME | 1 | - |
| 0xCF3854 | Signal (Geschwindigkeit Fahrzeug, 0x1A1) ungültig Fahrzustand Fahrzeug, Sender DSC | 0 | - |
| 0xCF3855 | Signal (Information Fahrzeug Antrieb, 0x65) ungültig Anforderung Funktion Antrieb, Sender BDC | 1 | - |
| 0xCF3856 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Luftdruck Motor Antrieb , Sender DME | 1 | - |
| 0xCF3857 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Status Schalter Warmlauf Antrieb , Sender DME | 1 | - |
| 0xCF3859 | Signal (Relativzeit BN2020, 0x328) ungültig Zeit Sekunde Zähler Relativ, Sender Kombi | 1 | - |
| 0xCF3860 | Signal (Zustand Fahrzeug, 0x3C) ungültig Status Zustand Fahrzeug, Sender BDC | 1 | - |
| 0xCF3861 | Signal (Information Fahrzeug Antrieb, 0x65) ungültig Status Bedienung Start-Stop-Taster, Sender DME | 1 | - |
| 0xCF3862 | Signal (Drehmoment Kurbelwelle 3, 0xA7) ungültig Soll Betriebsart Antriebsstrang Getriebe, Sender DME | 1 | - |
| 0xCF3863 | Signal (Winkel Fahrpedal, 0xD9) ungültig Ist Winkel Fahrpedal Virtuell, Sender DME | 1 | - |
| 0xCF3864 | Signal (Ist Bremsmoment Summe, 0xEF) ungültig Ist Bremsmoment Summe, Sender DSC | 1 | - |
| 0xCF3865 | Signal (Status Stillstandsfunktionen DSC, 0x2B5) ungültig Status AutoH, Sender DSC | 1 | - |
| 0xCF3866 | Signal (Status Stillstandsfunktionen DSC, 0x2B5) ungültig Status Parkbremse, Sender DSC | 1 | - |
| 0xCF3867 | Signal (Geschwindigkeit Fahrzeug, 0x1A1) ungültig Geschwindigkeit Fahrzeug Schwerpunkt, Sender DSC | 1 | - |
| 0xCF3868 | Signal (Status Stillstandsfunktionen DSC, 0x2B5) ungültig Status Anfahrassistent, Sender DSC | 1 | - |
| 0xCF3869 | Signal (Geschwindigkeit Fahrzeug 2, 0x175) ungültig Status Rollenmodus, Sender DSC | 1 | - |
| 0xCF386A | Signal (Geschwindigkeit Fahrzeug 2, 0x175) ungültig Status Bandendemodus, Sender DSC | 1 | - |
| 0xCF386C | Signal (Geschwindigkeit Fahrzeug 2, 0x175) ungültig Fahrtrichtung Fahrzeug Bestätigt, Sender DSC | 1 | - |
| 0xCF3A51 | Signal (Sammelfehler Signale Sender DME) ungültig, Sender DME | 1 | - |
| 0xCF3B01 | Signal (Sammelfehler Signale Sender AAG) ungültig, Sender AAG | 1 | - |
| 0xCF3B21 | Signal (Sammelfehler Signale Sender LMV-FQ) ungültig, Sender LMV-FQ | 1 | - |
| 0xCF3B61 | Signal (Sammelfehler Signale Sender DSC) ungültig, Sender DSC | 1 | - |
| 0xCF3C61 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Status Schubabschaltung Antrieb, Sender DME | 1 | - |
| 0xCF3D58 | Signal (Status Verteilung Längsmoment Vorderachse Hinterachse, 0xE9) ungültig Ist Verteilung Längsmoment Vorderachse Hinterachse, Sender LMV-FQ | 1 | - |
| 0xCF3D61 | Signal (Neigung Fahrbahn, 0x163) ungültig Ist Längsneigung Fahrbahn, Sender DSC | 1 | - |
| 0xCF3D62 | Signal (Längsbeschleunigung Schwerpunkt, 0x199) ungültig Längsbeschleunigung Schwerpunkt, Sender DSC | 1 | - |
| 0xCF3D72 | Signal (Information Antriebsstrang, 0x138) ungültig Anforderung Ersatz Reaktion Getriebe, Sender DME | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | STAT_SL | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4001 | STAT_SC2 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4002 | STAT_SC3 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4003 | STAT_SC4 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4005 | STAT_PARKING_SOL | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4006 | STAT_SR | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4007 | STAT_SC5 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4009 | Getriebeausgangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x400A | STAT_SLT_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400B | STAT_SLT_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400C | STAT_SL1_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400D | STAT_SL2_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400E | STAT_SL3_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400F | STAT_SL4_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4010 | STAT_SL5_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4011 | STAT_SL6_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4012 | Motordrehmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | Pedalstellung | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4019 | Wählhebelposition | 0-n | High | 0xFF | TBL_SHIFTLEVEL | - | - | - |
| 0x401C | Getriebeeingangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x401D | Wählhebelstellung in der manuellen Gasse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x401F | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | Eingelegte Fahrstufe | 0-n | High | 0xFF | STATUS_ACTUAL_GEAR | - | - | - |
| 0x4029 | Motordrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x403D | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4048 | Status der Parksperre | 0-n | High | 0xFF | STATUS_PLOCK | - | - | - |
| 0x405C | STAT_CTRL_MODULE_VOL_WERT | V | High | signed int | - | 0.001 | 1.0 | 0.0 |
| 0x405E | Magnetventil S2 | 0-n | High | 0xFF | - | - | - | - |
| 0x405F | Shiftlock Magnet | 0-n | High | 0xFF | - | - | - | - |
| 0x40A1 | STAT_CARDAN_SHAFT_WERT | Nm | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x40A2 | STAT_TARGET_TORQUE_REQUEST_WERT | Nm | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x40A3 | STAT_LSD_TEMPERATURE_WERT | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x40A4 | STAT_LSD_DIFFERENTIAL_SPEED_WERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40A5 | STAT_ATF_TEMPERATURE_CONTROL_VALUE_WERT | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x421062 | EWS: Manipulationsversuch | 1 | - |
| 0x421681 | Infozähler: Gangstufe N, Tür offen | 0 | - |
| 0x421691 | Infozähler: Gang konnte ohne Betätigung des Bremspedals eingelegt werden | 0 | - |
| 0x4218C1 | Infozähler: Hohe Getriebeöl- oder Wandlertemperatur | 0 | - |
| 0x422021 | Infozähler: P-Taster Einzelfehler | 0 | - |
| 0x4220A1 | E-Schaltung: elektrische Getriebenotentriegelung aktiviert | 0 | - |
| 0x4220A2 | E-Schaltung: Aktivierung der elektrischen Getriebenotentriegelung ist fehlgeschlagen | 0 | - |
| 0x4220A4 | E-Schaltung: automatisches Einlegen von P bei Fahrzeug verlassen | 0 | - |
| 0x4220A5 | E-Schaltung: Fahreranwesenheit nicht eindeutig ermittelbar | 0 | - |
| 0x4220A6 | E-Schaltung: Automatisches Einlegen von N durch erkannten Gegenbremsbetrieb | 0 | - |
| 0x4220A7 | E-Schaltung: Infozähler für Hilferuf von DSC oder EMF in Getriebeposition D/R | 0 | - |
| 0x4220A8 | E-Schaltung: Infozähler für Hilferuf von DSC oder EMF in Getriebeposition N | 0 | - |
| 0x4220AE | E-Schaltung: Auto-N PWF-Wechsel in D/R/N | 0 | - |
| 0x4220AF | Prüfung Plausibilität Kurbelwellenmoment | 0 | - |
| 0x4220B0 | E-Schaltung: Fahrerabbruch nach Fahrzeugwäsche | 0 | - |
| 0x4220B1 | E-Schaltung: Fahrerabbruch nach Abwürgen des Motors | 0 | - |
| 0x4220B3 | Infozähler: Begrenzung Sperrdifferenzial aktiviert | 0 | - |
| 0x4220B5 | E-Schaltung: Funktion ohne 12V-Batterie | 0 | - |
| 0xCF27A1 | Botschaft (Navigation System Information, 0x34E) fehlt, Empfänger EGS, Sender DME/DDE | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4000 | STAT_SL | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4001 | STAT_SC2 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4002 | STAT_SC3 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4003 | STAT_SC4 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4005 | STAT_PARKING_SOL | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4006 | STAT_SR | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4007 | STAT_SC5 | 0-n | High | 0xFF | TB_SHIFT_SOL | - | - | - |
| 0x4009 | Getriebeausgangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x400A | STAT_SLT_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400B | STAT_SLT_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400C | STAT_SL1_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400D | STAT_SL2_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400E | STAT_SL3_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x400F | STAT_SL4_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4010 | STAT_SL5_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4011 | STAT_SL6_WERT | mA | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x4012 | Motordrehmoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | Pedalstellung | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4019 | Wählhebelposition | 0-n | High | 0xFF | TBL_SHIFTLEVEL | - | - | - |
| 0x401C | Getriebeeingangsdrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x401D | Wählhebelstellung in der manuellen Gasse | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x401F | Fahrzeuggeschwindigkeit | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | Eingelegte Fahrstufe | 0-n | High | 0xFF | STATUS_ACTUAL_GEAR | - | - | - |
| 0x4029 | Motordrehzahl | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x403D | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4048 | Status der Parksperre | 0-n | High | 0xFF | STATUS_PLOCK | - | - | - |
| 0x405C | STAT_CTRL_MODULE_VOL_WERT | V | High | signed int | - | 0.001 | 1.0 | 0.0 |
| 0x405E | Magnetventil S2 | 0-n | High | 0xFF | - | - | - | - |
| 0x405F | Shiftlock Magnet | 0-n | High | 0xFF | - | - | - | - |
| 0x40A1 | STAT_CARDAN_SHAFT_WERT | Nm | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x40A2 | STAT_TARGET_TORQUE_REQUEST_WERT | Nm | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x40A3 | STAT_LSD_TEMPERATURE_WERT | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x40A4 | STAT_LSD_DIFFERENTIAL_SPEED_WERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40A5 | STAT_ATF_TEMPERATURE_CONTROL_VALUE_WERT | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### QU_AVL_LOGR_RW

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x02 | Signal value is valid |
| 0x0A | Signal value is valid, temporary state/status |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0C | Substitute value, temporary state/status |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### RC_RR_F007

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset successfully |
| 0x01 | Reset failed |
| 0xFF | Wert ungültig |

### RC_RR_F01C

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset successfully |
| 0x01 | Reset failed |
| 0xFF | Wert ungültig |

### RC_RR_F01D

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset successfully |
| 0x01 | Reset failed |
| 0xFF | Wert ungültig |

### RC_RR_F01E

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset successfully |
| 0x01 | Reset failed |
| 0xFF | Wert ungültig |

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

### RESERVE

| WERT | TEXT |
| --- | --- |
| 0xFF | Reserve |

### RESET_RESULT_OF_GEAR_LEARNING_CTRL

| WERT | TEXT |
| --- | --- |
| 0x00 | Control Erfolgreich |
| 0x01 | Control fehlgeschlagen: Wählhebelfehler |
| 0x02 | Control fehlgeschlagen: Wählhebel ist nicht in Position P |
| 0x03 | Control fehlgeschlagen: Fahrzeuggeschwindigkeitssensor Fehler |
| 0x04 | Control fehlgeschlagen: Fahrzeuggeschwindigkeit is nicht gleich 0 |
| 0x05 | Control fehlgeschlagen: Motordrehzahl ist nicht gleich 0 |
| 0x06 | Control fehlgeschlagen: EEPROM Fehler |
| 0xFF | Wert ungültig |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

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

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Shift Solenoid SL |

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC2 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of Shift Solenoid SC2 |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC3 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of Shift Solenoid SC3 |

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC4 | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of shift solenoid SC4 |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARKING_SOL | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of parking solenoid |

### RES_0X4006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SR | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of SR |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAC | 0-n | high | unsigned char | - | TB_SHIFT_SOL | - | - | - | Status of SAC |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLT_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SLT |

### RES_0X400B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLU_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SLU |

### RES_0X400C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL1_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL1 |

### RES_0X400D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL2_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL2 |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL3_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL3 |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL4_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL4 |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL5_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL5 |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SL6_WERT | mA | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status of SL6 |

### RES_0X402F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEAR_POSITION_LEARN | 0/1 | high | unsigned char | - | - | - | - | - | The status of gear position learning |
| STAT_ADJUSTMENT1_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Position sensor adjustment 1 |
| STAT_ADJUSTMENT2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Position sensor adjustment 2 |

### RES_0X403B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEAR_DISPLAY | 0-n | high | unsigned char | - | STAT_GEAR_DISPLAY | - | - | - | Status Gang |

### RES_0X406A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_0_STRUCT | - | - | - | Coding 3000 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_1_STRUCT | - | - | - | Coding 3000 Byte 1 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_2_STRUCT | - | - | - | Coding 3000 Byte 2 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_3_STRUCT | - | - | - | Coding 3000 Byte 3 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_0_STRUCT | - | - | - | Coding 3001 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_1_STRUCT | - | - | - | Coding 3001 Byte 1 |

### RES_0X406D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_0_STRUCT | - | - | - | Coding 3000 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_1_STRUCT | - | - | - | Coding 3000 Byte 1 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_2_STRUCT | - | - | - | Coding 3000 Byte 2 |
| - | Bit | high | BITFIELD | - | BF_CODING_3000_BYTE_3_STRUCT | - | - | - | Coding 3000 Byte 3 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_0_STRUCT | - | - | - | Coding 3001 Byte 0 |
| - | Bit | high | BITFIELD | - | BF_CODING_3001_BYTE_1_STRUCT | - | - | - | Coding 3001 Byte 1 |

### RES_0X4076_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCU_RESET_COUNT_CPU_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (CPU Core Fehler) |
| STAT_TCU_RESET_COUNT_RAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (RAM Fehler) |
| STAT_TCU_RESET_COUNT_ROM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (ROM Fehler) |
| STAT_TCU_RESET_COUNT_FLOW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Flow Fehler) |
| STAT_TCU_RESET_COUNT_CLOCK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Clock Fehler) |
| STAT_TCU_RESET_COUNT_POWER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Power Supply Monitor Fehler) |
| STAT_TCU_RESET_COUNT_BIST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (BIST comparator Fehler) |
| STAT_TCU_RESET_COUNT_COMMUNICATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Steuergeräteresets (Communication data Fehler) |

### RES_0X4080_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit kleiner 7V |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit zwischen 7V und 9V |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit zwischen 9V und 10,5V |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit zwischen 10.5V und 14.7V |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit zwischen 14.7V und 16V |
| STAT_MINUTE6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit größer 16V |

### RES_0X4082_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur kleiner -40°C |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen -40°C und -20°C |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen -20°C und 0°C |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 0°C und 20°C |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 20°C und 40°C |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 40°C und 60°C |
| STAT_MINUTE6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 60°C und 80°C |
| STAT_MINUTE7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 80°C und 90°C |
| STAT_MINUTE8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 90°C und 95°C |
| STAT_MINUTE9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 95°C und 100°C |
| STAT_MINUTE10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 100°C und 105°C |
| STAT_MINUTE11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 105°C und 110°C |
| STAT_MINUTE12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 110°C und 115°C |
| STAT_MINUTE13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 115°C und 120°C |
| STAT_MINUTE14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 120°C und 125°C |
| STAT_MINUTE15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 125°C und 130°C |
| STAT_MINUTE16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 130°C und 135°C |
| STAT_MINUTE17_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 135°C und 140°C |
| STAT_MINUTE18_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur größer 140°C |

### RES_0X4083_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINUTE0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur kleiner -20°C |
| STAT_MINUTE1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen -20°C und -10°C |
| STAT_MINUTE2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen -10°C und 0°C |
| STAT_MINUTE3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 0°C und 20°C |
| STAT_MINUTE4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 20°C und 55°C |
| STAT_MINUTE5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 55°C und 80°C |
| STAT_MINUTE6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 80°C und 90°C |
| STAT_MINUTE7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 90°C und 95°C |
| STAT_MINUTE8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 95°C und 100°C |
| STAT_MINUTE9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 100°C und 105°C |
| STAT_MINUTE10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 105°C und 110°C |
| STAT_MINUTE11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 110°C und 115°C |
| STAT_MINUTE12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 115°C und 120°C |
| STAT_MINUTE13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 120°C und 130°C |
| STAT_MINUTE14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur zwischen 130°C und 140°C |
| STAT_MINUTE15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur größer 140°C |
| STAT_MINUTE16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit, Temperatur invalid |

### RES_0X4086_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_SEGELN_STRUCT | - | - | - | Status Segelfunktion |
| STAT_DISABLECAN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0--- ---0 SV Segeln Aus 0--- ---1 SV Segeln An 0--- --0- SV Segeln Einstieg Aus 0--- --1- SV Segeln Einstieg An 0--- -0-- SV 2 Aus 0--- -1-- SV 2 An 0--- 0--- SV 3 Aus 0--- 1--- SV 3 An 0--0 ---- SV 4 Aus 0--1 ---- SV 4 An 0-0- ---- SV 5 Aus 0-1- ---- SV 5 An 00-- ---- SV 6 Aus 01-- ---- SV 6 An 1111 1101 Funktionsschnittstelle_ist_nicht_verfuegbar 1111 1110 Funktion_meldet_Fehler 1111 1111 Signal_unbefuellt |
| STAT_MODESAS | 0-n | high | unsigned char | - | STATUS_MODESAS | - | - | - | Segeln freigeben über Software SAS/AGS |
| STAT_REQAGS | 0-n | high | unsigned char | - | STATUS_REQAGS | - | - | - | Segelanforderung AGS |
| STAT_MODEGRB | 0-n | high | unsigned char | - | STATUS_MODE_GRB | - | - | - | Status Segeln |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE5_STRUCT | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE6_STRUCT | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE7_STRUCT | - | - | - | Segelbedingungen |
| - | Bit | high | BITFIELD | - | BF_DISABLEINFOAGS_BYTE8_STRUCT | - | - | - | Segelbedingungen |

### RES_0X4087_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOCKUP_CLUTCH_TEMPERATURE_COUNT_LOW_AREA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wandlerkupplungtemperaturzähler: Unterer Temperaturbereich |
| STAT_LOCKUP_CLUTCH_TEMPERATURE_COUNT_HIGH_AREA_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wandlerkupplungtemperaturzähler: Oberer Temperaturbereich |

### RES_0X4088_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_Q_MONITOR1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data1 in TCU |
| STAT_Q_MONITOR2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data2 in TCU |
| STAT_Q_MONITOR3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data3 in TCU |
| STAT_Q_MONITOR4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data4 in TCU |
| STAT_Q_MONITOR5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data5 in TCU |
| STAT_Q_MONITOR6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data6 in TCU |
| STAT_Q_MONITOR7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data7 in TCU |
| STAT_Q_MONITOR8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data8 in TCU |
| STAT_Q_MONITOR9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data9 in TCU |
| STAT_Q_MONITOR10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data10 in TCU |
| STAT_Q_MONITOR11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data11 in TCU |
| STAT_Q_MONITOR12_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data12 in TCU |
| STAT_Q_MONITOR13_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data13 in TCU |
| STAT_Q_MONITOR14_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data14 in TCU |
| STAT_Q_MONITOR15_DATA | DATA | high | data[47] | - | - | 1.0 | 1.0 | 0.0 | Read Q Monitor Data15 in TCU |

### RES_0X4089_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARNDATA_INIT_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LEARNDATA_SQ_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_RESERVE_01_DATA | DATA | high | data[62] | - | - | 1.0 | 1.0 | 0.0 | Reserved for version field |
| STAT_TIMESERVO_A_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_LRN_COLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_LRN_STROKE_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Adaptive data of TIMESERVO_A_LRN_STROKE |
| STAT_P_SERVO2_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_LRN_COLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2TIE_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_1_2_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_2_3_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_3_4_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_4_5_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_5_6_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_6_7_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S_GUARD_A_LRN_7_8_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_TSA_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_PS2_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_SGA_L_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_UPAUTO_CNTRU_SGA_H_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRK_LRN_STATE_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Adaptive data of Strk_lrn_State |
| STAT_CNT_TSA_HOLD_INC_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Adaptive data of cnt_TSA_hold_inc |
| STAT_CNT_TSA_HOLD_DEC_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Adaptive data of cnt_TSA_hold_dec |
| STAT_CNT_UPSHIFTSTROKE_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Adaptive data of cnt_UPshiftStroke |
| STAT_TIMESERVO_A_CST_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_CST_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_COAST_REL_LRN_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_21_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_31_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_41_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_51_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_32_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_42_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_52_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_82_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_43_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_53_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_73_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_54_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_64_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_65_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_75_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_85_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_76_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_86_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PS1INIT_LRN_DOWN_87_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_2_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_3_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_4_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_5_4_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_6_5_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_7_6_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_STRPA_DOWN_POFFDW_LRN_8_7_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_PRELHOLD_DOWN_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_POFFDW_LRN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_PBASE_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_TSERVO_LRN_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_CNTRU_NRS_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_CNTRU_NRB_ND_NR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_REL_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_RESERVE_02_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_BASE_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APP_PNC_LRN_C1_C2_C3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APDC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGBUFF_C_1_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGBUFF_C_2_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_NCTIMELAGBUFF_C_3_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_C_1_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_C_2_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_C_3_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BKPRS_NCONLRN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLOPENCONOFF_MEM_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_UP_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_UP_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_CD_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_CD_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_MD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_MD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LTIMESERVOA_NC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LPEPAP1_NC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTRNCS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTRNCE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LPS_TOS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LTIMESERVOA_TOS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_LRN_TOSWAIT_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LAST_IGON_FLAG_C1_C2_C3_C4_B1_B2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APDC_SUB_IS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_APPSUBLRN_IS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_RESERVE_03_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_XBUFF_SUB_IS_SUBLRNAVE_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_CST_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIMESERVO_A_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_SERVO2_POFFDW_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LTIMESERVOA_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LPEPAP1_NC_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_NCL_C1APP_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_REL_PNC_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_PBASE_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_G_TSERVO_LRN_C1APP_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_COUNT_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_C1CD_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_C1POFFDW_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_ND_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCONREL_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCONBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_COMPNC_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_COUNT_OT_NCLOWBASE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APDC_SUB_IC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_APPSUBLRN_IC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_SUB_IC_SUBLRNAVE_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTRUTSA_DW_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTRUPS2_DW_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTRUSAD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTSFT_DW_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_NCAPP_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_NCAPP_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_COMPNC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_COMPNC_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_GAR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_GAR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_APPSUBLRN2_IS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_APDC_SUB2_IS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_XBUFF_SUB2_IS_SUBLRNAVE_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LAST_FIRSTGAR_FLAG_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LAST_FIRSTGAR_FLAG_PS2_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LAST_CNT_LEAKAGE_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_POFF_SLSTATE_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLGOODFREQ_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_TIME_SERVOA_IS_ACCU_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_P_APPSUB_IS_ACCU_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLTIMESERVOA_SUM_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLTIMESERVOA_COLD_SUM_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLP_SERVO2_SUM_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLP_SERVO2_COLD_SUM_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_12_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_23_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_34_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_45_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_56_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_67_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_L_DLS_GUARD_A_SUM_78_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_FOR_HOLD_STATE_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_LOW_FOR_HOLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_HIGH_FOR_HOLD_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_C1HISLIP_EG_0_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_C1HISLIP_EG_1_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_C1HISLIP_EG_2_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_BASE_PNC_LRN_FLG_C1HISLIP_EG_3_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2_BASE_PNC_LRN_C1HISLIP_EG_0_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2_BASE_PNC_LRN_C1HISLIP_EG_1_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2_BASE_PNC_LRN_C1HISLIP_EG_2_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_S2_BASE_PNC_LRN_C1HISLIP_EG_3_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_COUNT_OT_COMPNC_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNT_DISTANCE_SL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SLCNV_STATE_ISAPPACCU_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_SL_GOOD_FREQ_ISAPPACCU_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_RESERVE_04_DATA | DATA | high | data[120] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_RESERVE_05_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_RESERVE_06_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_RESERVE_07_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_RESERVE_08_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_RESERVE_09_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | blank |
| STAT_LRNWAITPRESS_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNRELAYTIME_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_ACC_LEARNFF_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CST_LEARNFF_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNMINCNT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNTLUPLRN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNMIN_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNWAITPRESSCST_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_LRNRELAYTIMECST_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CSTLUPLRNEXEC_FLAG_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_THRESHOLDENLARGEALLOW_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_CNT_TSALOWER_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Read adaptive data for 8sp project |
| STAT_RESERVE_10_DATA | DATA | high | data[171] | - | - | 1.0 | 1.0 | 0.0 | blank |

### RES_0X4090_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCUTEMP_SENSOR1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | TCU Temperatursensor 1 |
| STAT_TCUTEMP_SENSOR2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | TCU Temperatursensor 2 |

### RES_0X4092_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OIL_TEMPERATURE_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | Wert Öltemperatursensor 1 |
| STAT_OIL_TEMPERATURE_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | Wert Öltemperatursensor 2 |

### RES_0X4093_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OWC_SLIP_CNT01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the first temperature area (Less than -25 degrees Celsius) |
| STAT_OWC_SLIP_CNT02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the second temperature area (higher than -25 degrees Celsius and lower than -20) |
| STAT_OWC_SLIP_CNT03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the third temperature area (higher than -20 degrees Celsius and lower than -15) |
| STAT_OWC_SLIP_CNT04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the fourth temperature area (higher than -15 degrees Celsius and lower than -10) |
| STAT_OWC_SLIP_CNT05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | OWC Slip Counter for the fifth temperature area (higher than -10 degrees Celsius) |

### RES_0X4095_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STALL_CNT01_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the first temperature area (low than -25 degrees Celsius) |
| STAT_STALL_CNT02_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the second temperature area (higher thatn -25 degree Celsiius and low than -20 degrees Celsius) |
| STAT_STALL_CNT03_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the third temperature area (higher thatn -20 degree Celsiius and low than -15 degrees Celsius) |
| STAT_STALL_CNT04_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the fourth temperature area (higher thatn -15 degree Celsiius and low than -10 degrees Celsius) |
| STAT_STALL_CNT05_OWCSLIP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | stall counter due to owc slip in the fifth temperature area (higer than -10 degrees Celsius) |

### RES_0X4096_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APP_HASH0_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of app #0 |
| STAT_CAL_HASH0_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of cal #0 |
| STAT_VERIFY_RESULT0_WERT | HEX | high | unsigned char | - | - | - | - | - | Verification result of history memory #0 Bit7: app verify result 0: OK; 1; NOK Bit6: cal verify result 0: OK; 1; NOK |
| STAT_APP_HASH1_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of app #1 |
| STAT_CAL_HASH1_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of cal #1 |
| STAT_VERIFY_RESULT1_WERT | HEX | high | unsigned char | - | - | - | - | - | Verification result of history memory #1 Bit7: app verify result 0: OK; 1; NOK Bit6: cal verify result 0: OK; 1; NOK |
| STAT_APP_HASH2_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of app #2 |
| STAT_CAL_HASH2_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of cal #2 |
| STAT_VERIFY_RESULT2_WERT | HEX | high | unsigned char | - | - | - | - | - | Verification result of history memory #2 Bit7: app verify result 0: OK; 1; NOK Bit6: cal verify result 0: OK; 1; NOK |
| STAT_APP_HASH3_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of app #3 |
| STAT_CAL_HASH3_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of cal #3 |
| STAT_VERIFY_RESULT3_WERT | HEX | high | unsigned char | - | - | - | - | - | Verification result of history memory #3 Bit7: app verify result 0: OK; 1; NOK Bit6: cal verify result 0: OK; 1; NOK |
| STAT_APP_HASH4_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of app #4 |
| STAT_CAL_HASH4_WERT | HEX | high | unsigned long | - | - | - | - | - | Hash value of cal #4 |
| STAT_VERIFY_RESULT4_WERT | HEX | high | unsigned char | - | - | - | - | - | Verification result of history memory #4 Bit7: app verify result 0: OK; 1; NOK Bit6: cal verify result 0: OK; 1; NOK |

### RES_0X4097_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CL_PATTERN_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_CL_PATTERN_TIME_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_GEAR_TRAIN_TYPE_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_NEW_GEAR_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_SFT_KIND_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_TMR_WTRQREIN_MAX_DATA | DATA | high | data[18] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_THRESHOLD_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_GEAR_RATIO_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_SHIFT_STS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_TAEGET_GEAR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_TARGET_GEAR_OLD_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_CURRENT_GEAR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_ESTG_TBL_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_MAX_GEAR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |
| STAT_DETECT_GEAR_RATIO_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Read Environment Condition of SF85 |

### RES_0X409A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_SIGNAL_1_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on signal Index #1 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_SIGNAL_2_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on signal Index #2 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_SIGNAL_3_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on signal Index #3 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_SIGNAL_4_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on signal Index #4 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_ESTIMATED_1_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on estimated torque Index #1 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_ESTIMATED_2_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on estimated torque Index #2 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_ESTIMATED_3_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on estimated torque Index #3 |
| STAT_ENGINE_TORQUE_OVER_TIME_BASED_ON_ESTIMATED_4_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Based on estimated torque Index #4 |
| STAT_TORQUE_THRESHOLD_1_WERT | Nm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Torque Threshold Index 1 |
| STAT_TORQUE_THRESHOLD_2_WERT | Nm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Torque Threshold Index 2 |
| STAT_TORQUE_THRESHOLD_3_WERT | Nm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Torque Threshold Index 3 |
| STAT_TORQUE_THRESHOLD_4_WERT | Nm | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Torque Threshold Index 4 |

### RES_0X40A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LSD_VERSION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | LSD record version |
| STAT_LSD_PADDING_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | LSD one byte padding |
| STAT_MAX_OIL_TEMPERATURE_WERT | °C | low | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximum of LSD oil temperature |
| STAT_LSD_RECORD_A_10_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record A 01~10 |
| STAT_LSD_RECORD_A_20_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record A 11~20 |
| STAT_LSD_RECORD_A_30_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record A 21~30 |
| STAT_LSD_RECORD_A_40_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record A 31~40 |
| STAT_LSD_RECORD_A_50_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record A 41~50 |
| STAT_LSD_RECORD_B_10_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record B 01~10 |
| STAT_LSD_RECORD_B_20_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record B 11~20 |
| STAT_LSD_RECORD_B_30_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record B 21~30 |
| STAT_LSD_RECORD_B_40_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record B 31~40 |
| STAT_LSD_RECORD_B_50_DATA | DATA | high | data[140] | - | - | 1.0 | 1.0 | 0.0 | LSD data record B 41~50 |

### RES_0XC000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS4STATE | 0-n | high | unsigned char | - | EWS4STATE | - | - | - | EWS4STATE |
| STAT_DHCLIENTSTATE | 0-n | high | unsigned char | - | DHCLIENTSTATE | - | - | - | DHclientState |
| STAT_FKT0_INT_WERT | HEX | high | unsigned char | - | - | - | - | - | interner Zustand im Steuergerät |
| STAT_FKT1_INT_WERT | HEX | high | unsigned char | - | - | - | - | - | interner Zustand im Steuergerät |
| STAT_FKT0_EXT_WERT | HEX | high | unsigned char | - | - | - | - | - | von INFO_EWS eingelesener Zustand |
| STAT_FKT1_EXT_WERT | HEX | high | unsigned char | - | - | - | - | - | von INFO_EWS eingelesener Zustand |
| STAT_RESERVE | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_FREIE_SECRETKEYS0_WERT | HEX | high | unsigned char | - | - | - | - | - | Anzahl freier SecretKeys0 FE: Speicher-Ablage nicht begrenzt 0..n: Verbleibende Anzahl Speicher-ablagen |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | RESERVE | - | - | - | Reserve |
| STAT_VERSION | 0-n | high | unsigned char | - | VERSION | - | - | - | Version |

### RES_0XD9C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_0_7_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 0-7  (0 = nicht aktiv, 1 = aktiv) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_8_15_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 8-15  (0 = nicht aktiv, 1 = aktiv) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_16_23_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 16-23  (0 = nicht aktiv, 1 = aktiv) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_24_31_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 24-31  (0 = nicht aktiv, 1 = aktiv) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_32_39_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 32-39  (0 = nicht aktiv, 1 = aktiv) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_AKTIV_40_47_STRUCT | - | - | - | Bitfeld mit Status von Ersatzmaßnahmen 40-47  (0 = nicht aktiv, 1 = aktiv) |

### RES_0XD9D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANGSDREHZAHL_MOTOR_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Eingangsdrehzahl Motor |
| STAT_AUSGANGSDREHZAHL_GETRIEBE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Ausgangsdrehzahl Getriebe |
| STAT_OEL_TEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | Öltemperatursensor 1 |
| STAT_OEL_TEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | Öltemperatursensor 2 |
| STAT_EGS_TEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | EGS-Temperatursensor 1 |
| STAT_EGS_TEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -60.0 | EGS-Temperatursensor 2 |
| STAT_OELDRUCK_SCHALTER2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 2:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 3:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER4_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 4:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER5_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 5:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER6_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 6:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER7_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 7:  0x00 = aus;  0x01 = ein |
| STAT_OELDRUCK_SCHALTER8_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Öldruckschalter 8:  0x00 = aus;  0x01 = ein |
| STAT_GETRIEBEPOSITION_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Status des Getriebepositionssensors |
| STAT_VBATT_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status der Versorgungsspannung |

### RES_0XD9D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAGNETVENTIL_SC2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SC2:  0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SC3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SC3:  0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SC4_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SC4:  0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SL:  0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SPH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SPH: 0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SR_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SR:  0x00 = aus;  0x01 = ein |
| STAT_MAGNETVENTIL_SAC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status von Magnetventil SAC:  0x00 = aus;  0x01 = ein |
| STAT_DRUCKSTEUERVENTIL_B1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil B1 |
| STAT_DRUCKSTEUERVENTIL_B2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil B2 |
| STAT_DRUCKSTEUERVENTIL_C1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil C1 |
| STAT_DRUCKSTEUERVENTIL_C2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil C2 |
| STAT_DRUCKSTEUERVENTIL_C3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil C3 |
| STAT_DRUCKSTEUERVENTIL_C4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status von Drucksteuerventil C4 |
| STAT_DRUCKSTEUERVENTIL_SLT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Hauptdruck-Steuerventils |
| STAT_DRUCKSTEUERVENTIL_SLU_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Drucksteuerventils für die Wandlerüberbrückungskupplung |

### RES_0XDA20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANGANZEIGE | 0-n | high | unsigned char | - | TAB_GANGANZEIGE | - | - | - | Ganganzeige im Kombi als Text Siehe table TAB_GANGANZEIGE |
| STAT_FAHRSTUFE | 0-n | high | unsigned char | - | TAB_WAEHLHEBELANZEIGE | - | - | - | Status der aktuellen Fahrstufe P, R, N, D, ungültig Siehe Tabelle TAB_WAEHLHEBELANZEIGE |

### RES_0XDA2E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTGANG | 0-n | high | unsigned char | - | TAB_ISTGANG | - | - | - | Eingelegter Gang im Getriebe: P, R, N, 0-8 |
| STAT_FAHRSTUFE | 0-n | high | unsigned char | - | TAB_FAHRSTUFE | - | - | - | Eingelegte Fahrstufe: P, R, N, D, M |

### RES_0XDA37_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_D_ZAEHLER_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer in Position D gefahren ist |
| STAT_S_ZAEHLER_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer in Position S gefahren ist |
| STAT_M_ZAEHLER_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Zeit, die der Fahrer im Manuellen Modus gefahren ist |

### RES_0XDA65_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBW_CTR_PD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung P nach D |
| STAT_SBW_CTR_PR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung P nach R |
| STAT_SBW_CTR_PN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung P nach N |
| STAT_SBW_CTR_RD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung R nach D |
| STAT_SBW_CTR_RN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung R nach N |
| STAT_SBW_CTR_RP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung R nach P |
| STAT_SBW_CTR_ND_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung N nach D |
| STAT_SBW_CTR_NR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung N nach R |
| STAT_SBW_CTR_NP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung N nach P |
| STAT_SBW_CTR_DR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung D nach R |
| STAT_SBW_CTR_DN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung D nach N |
| STAT_SBW_CTR_DP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Auslesen Wert von Shift-by-Wire Zähler für Schaltung D nach P |
| STAT_SBW_CTR_AUTON_ROLLING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auto-N Rollen falsche Fahrtrichtung |
| STAT_SBW_CTR_AUTOP_LEAVE_CAR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auto-P bei Fzg. Verlassen |
| STAT_SBW_CTR_BELT_DUMMY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gurtdummyerkennung (Tür auf , Gurt gesteckt bei FB an und D/R) |
| STAT_SBW_CTR_CAR_WASH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Waschtraßenzähler (N und SST) |
| STAT_SBW_CTR_DRIVING_READINESS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrbereitschaftsverlustzähler (FB aus ohne SST) |
| STAT_SBW_CTR_AUTOP_HANDBRAKE_PULLED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auto-P bei angezogener Handbremse |
| STAT_SBW_CTR_P_OVER_5KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P bei v>5km/h |
| STAT_SBW_CTR_EGNER_OK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | eGNER  erfolgreich |
| STAT_SBW_CTR_EGNER_NOK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | eGNER nicht erfolgreich |
| STAT_SBW_CTR_EGNER_MISUSE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | eGNER Missbrauch (Abschleppen Fahrzeug und P) |
| STAT_SBW_CTR_BRSYS_HLP_DR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hilferuf Bremssystem in D, R |
| STAT_SBW_CTR_BRSYS_HLP_N_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hilferuf Bremssystem in N |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_RESULT | + | - | - | 0-n | high | unsigned char | - | RESET_RESULT_OF_GEAR_LEARNING_CTRL | - | - | - | Learn or Reset Parking Position |

### RES_0XF007_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_RESULT | + | - | - | 0-n | high | signed char | - | RC_RR_F007 | - | - | - | routineResult |

### RES_0XF01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_RESULT | + | - | - | 0-n | high | signed char | - | RC_RR_F01C | - | - | - | routineResult |

### RES_0XF01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_RESULT | + | - | - | 0-n | high | signed char | - | RC_RR_F01D | - | - | - | routineResult |

### RES_0XF01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_RESULT | + | - | - | 0-n | high | signed char | - | RC_RR_F01E | - | - | - | routineResult |

### RES_0XFD20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TM_UNITNO_TEXT | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Getriebe Einheit Nummer |
| STAT_TRANSMISSION_NO_TEXT | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Getriebe Nummer |
| STAT_TORQUE_CONVERTER_NO_TEXT | TEXT | high | string[20] | - | - | 1.0 | 1.0 | 0.0 | Wandler Nummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SL | 0x4000 | - | Shift Solenoid SL (For LUP) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4000_D | RES_0x4000_D |
| SC2 | 0x4001 | - | Shift Solenoid SC2 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4001_D | RES_0x4001_D |
| SC3 | 0x4002 | - | Shift Solenoid SC3 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4002_D | RES_0x4002_D |
| SC4 | 0x4003 | - | Shift Solenoid SC4 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4003_D | RES_0x4003_D |
| PARKING_SOL | 0x4005 | - | parking solenoid | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4005_D | RES_0x4005_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| SR | 0x4006 | - | Solenoid for lubrication | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4006_D | RES_0x4006_D |
| SAC | 0x4007 | - | Solenoid for Accumulatior | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4007_D | RES_0x4007_D |
| STATUS_TM_OUTPUT_REVOLUTION_LESEN | 0x4009 | STAT_TM_OUTPUT_REVOLUTION_WERT | Ausgangsdrehzahl Getriebe lesen | 1/min | - | High | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| SLT | 0x400A | - | Line Pressure solenoid | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400A_D | RES_0x400A_D |
| SLU | 0x400B | - | Lockup Solenoid | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400B_D | RES_0x400B_D |
| SL1 | 0x400C | - | Linear Solenoid SL1 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400C_D | RES_0x400C_D |
| SL2 | 0x400D | - | linear solenoid SL2 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400D_D | RES_0x400D_D |
| SL3 | 0x400E | - | Linear Solenoid SL3 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400E_D | RES_0x400E_D |
| SL4 | 0x400F | - | Linear Solenoid SL4 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400F_D | RES_0x400F_D |
| SL5 | 0x4010 | - | Linear Solenoid SL5 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4010_D | RES_0x4010_D |
| SL6 | 0x4011 | - | Linear solenoid SL6 | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4011_D | RES_0x4011_D |
| STATUS_ENGINE_TORQUE_LESEN | 0x4012 | STAT_NEWTON_METRE_WERT | Motor-Drehmoment lesen | Nm | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_DRIVER_REQUESTED_TORQUE_LESEN | 0x4013 | STAT_NEWTON_METRE_WERT | Vom Fahrer angefordertes Drehmoment | Nm | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACCELERATOR_PEDAL_ACTUAL_LESEN | 0x4014 | STAT_ACCELERATOR_PEDAL_ACTUAL_WERT | Pedalstellung | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACCELERATOR_PEDAL_VIRTUAL_LESEN | 0x4015 | STAT_CALCULATED_PEDAL_POSITION_WERT | Berechnete Pedalstellung | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TORQUE_CONTROL_REQUEST_LESEN | 0x4016 | STAT_TORQUE_CONTROL_REQUEST_LESEN | Status vom Regler angefordertes Drehmoment | 0-n | - | High | unsigned char | TB_TORQUE_CONTROL_REQUEST | - | - | - | - | 22 | - | - |
| STATUS_TORQUE_LIMITATION_REQUEST_LESEN | 0x4017 | STAT_NEWTON_METRE_WERT | Vom Regler limitiertes Drehmoment | Nm | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TORQUE_INCREASE_REQUEST_LESEN | 0x4018 | STAT_NEWTON_METRE_WERT | Vom Regler angefordertes steigendes Drehmoment lesen | Nm | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SHIFT_LEVER_POSITION_LESEN | 0x4019 | STAT_SHIFT_LEVER_POSITION | Position der Wählstufe | 0-n | - | High | unsigned char | TBL_SHIFTLEVEL | - | - | - | - | 22 | - | - |
| PARKING_POSITION | 0x401A | STAT_PARKING | Status P oder nicht P | 0-n | - | High | unsigned char | TBL_PARKING_POSITION | - | - | - | - | 22 | - | - |
| STATUS_TM_INPUT_REVOLUTION_LESEN | 0x401C | STAT_TM_INPUT_REVOLUTION_LESEN_WERT | Getriebeeingangsdrezahl | 1/min | - | High | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| STATUS_MANUAL_SHIFT_SWITCH_LESEN | 0x401D | - | Statusinformation über die manuelle Schaltgasse | Bit | - | High | BITFIELD | BF_MANUAL_SHIFT_SWITCH_STRUCT | - | - | - | - | 22 | - | - |
| WARM_UP_CYCLE_COUNTER | 0x401E | STAT_WARM_UP_CYCLE_COUNTER_WERT | Warm-up-Zyklus Zähler | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VEHICLE_SPEED | 0x401F | STAT_VEHICLE_SPEED_WERT | Fahrzeuggeschwindigkeit | km/h | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FAULT_RELATED_INFORMATION_LESEN | 0x4022 | - | Fehlerbezogene Informationen lesen | Bit | - | High | BITFIELD | BF_FAULT_RELATED_INFORMATION_LESEN_STRUCT | - | - | - | - | 22 | - | - |
| STATUS_TORQUE_CONVERTER_LOCKUP_CLUTCH_STATUS_LESEN | 0x4023 | STAT_TORQUE_CONVERTER_LOCKUP_CLUTCH | Status Wandlerkupplung | 0-n | - | High | unsigned char | TB_TORQUE_CONVERTER_LOCKUP_CLUTCH | - | - | - | - | 22 | - | - |
| STATUS_ACTUAL_GEAR_LESEN | 0x4024 | STAT_ACTUAL_GEAR | Fahrstufe | 0-n | - | High | unsigned char | STATUS_ACTUAL_GEAR | - | - | - | - | 22 | - | - |
| STATUS_SHIFT_LOGIC_INFORMATION_LESEN | 0x4025 | STAT_SHIFT_LOGIC_INFORMATION | Schaltlogik informationen lesen | 0-n | - | High | unsigned char | SHIFT_LOGIC_INFORMATION | - | - | - | - | 22 | - | - |
| STATUS_EMERGENCY_MODE_LESEN | 0x4026 | STAT_EMERGENCY_MODE | Status Notlaufprogramm | 0-n | - | High | unsigned char | EMERGENCY_MODE | - | - | - | - | 22 | - | - |
| ENGINE_RPM | 0x4029 | STAT_ENGINE_RPM_WERT | Motordrehzahl | 1/min | - | High | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| GEAR_POSITION_LEARN_STATUS | 0x402F | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402F_D |
| STATUS_NIC_STATUS_LESEN | 0x4030 | STAT_NIC | Status NIC lesen | 0-n | - | High | unsigned char | STATUS_NIC | - | - | - | - | 22 | - | - |
| STATUS_BRAKE_SIGNAL_LESEN | 0x4031 | STAT_BRAKE_SIGNAL | Status des Bremssignals | 0-n | - | High | unsigned char | STATUS_BRAKE_SIGNAL | - | - | - | - | 22 | - | - |
| STATUS_SHIFT_ACTIVE_LESEN | 0x4032 | STAT_SHIFT_ACTIVE | Status ob Schaltvorgang aktiv ist | 0-n | - | High | unsigned char | TB_STAT_SHIFT_ACTIVE | - | - | - | - | 22 | - | - |
| GEAR_DISPLAY | 0x403B | - | Gang | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x403B_D | RES_0x403B_D |
| STATUS_DISTANCE_TRAVELED_MIL_ACTIVE | 0x403E | STAT_DISTANCE_TRAVELED_MIL_ACTIVE_WERT | Distance Traveled while MIL is Activated | km | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_PLOCK_STATUS_LESEN | 0x4048 | STAT_PARKING_LOCK | Status of parking lock | 0-n | - | High | unsigned char | STATUS_PLOCK | - | - | - | - | 22 | - | - |
| STATUS_EG_START_LESEN | 0x4049 | STAT_EG_START | Motorstartfreigabe | 0-n | - | High | unsigned char | STATUS_EG_START | - | - | - | - | 22 | - | - |
| STATUS_CALCULATED_LOAD_VALUE | 0x404C | STAT_CLACULATED_LOAD_VALUE_WERT | Berechnetes Motormoment | % | - | High | unsigned char | - | 100.0 | 255.0 | 0.0 | - | 22 | - | - |
| STATUS_ENGINE_COOLANT_TEMPERATURE_LESEN | 0x404D | STAT_ENGINE_COOLANT_TEMPERATURE_WERT | Motor-Kühlmitteltemperatur | °C | - | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_BUILDPHASE | 0x404E | STAT_BUILDPHASE_TEXT | Bauphase | TEXT | - | High | string[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SHIFTLOCK_CONDITION_LESEN | 0x4050 | - | Shift-Lock Bedingungen | Bit | - | High | BITFIELD | BF_SHIFT_LOCK_CONDITION_STRUCT | - | - | - | - | 22 | - | - |
| STATUS_TARGET_GEAR_LESEN | 0x4052 | STAT_TARGET_GEAR | Zielgang lesen | 0-n | - | High | unsigned char | TAB_TARGET_GEAR | - | - | - | - | 22 | - | - |
| STATUS_DYNAMIC_INDEX_LESEN | 0x4053 | - | Dynamik index | Bit | - | High | BITFIELD | BF_DYNAMIC_INDEX_LESEN_STRUCT | - | - | - | - | 22 | - | - |
| STATUS_TARGET_SLIP_LESEN | 0x4056 | STAT_TARGET_SLIP_WERT | Zielschlupf zwischen Getriebeeingangs- und ausgangsdrehzahl [rpm] | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ACTUAL_SLIP_LESEN | 0x4057 | STAT_ACTUAL_SLIP_WERT | Ist-Schlupf zwischen Getriebeeingangs- und ausgangsdrehzahl [rpm] | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | -10000.0 | - | 22 | - | - |
| STATUS_CONTROL_MODUL_VOLTAGE | 0x405C | STAT_CONTROL_MODUL_VOLTAGE_WERT | EGS Versorgungsspannung | V | - | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SAILING_STATUS_LESEN | 0x4063 | STAT_SAILING | Status segeln | 0-n | - | High | unsigned char | STATUS_SAILING | - | - | - | - | 22 | - | - |
| STATUS_CODING | 0x406A | - | Codierstatus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406A_D |
| STATUS_RACE_START_COUNT | 0x406B | STAT_RACE_START_COUNT_WERT | Race Start Count | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CODING_IN_FUNCTION | 0x406D | - | Current activated coding status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406D_D |
| STATUS_TCU_RESET_COUNT_LESEN | 0x4076 | - | Zähler für Steuergeräteresets | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4076_D |
| STATUS_SAILING_COUNT_LESEN | 0x4077 | STAT_SAILING_COUNT_WERT | Zähler für Segelbetrieb | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_NIC_COUNT_LESEN | 0x4078 | STAT_NIC_COUNT_WERT | Zähler für NIC (Automatische Kraftschlussunterbrechung im Stillstand bei Motor an und Bremse getreten) | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_MSA_COUNT_LESEN | 0x4079 | STAT_MSA_COUNT_WERT | Zähler für MSA (Automatischer Motor-Start/Stop bei Stillstand und Bremse getreten) | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_BATTERY_TIME_LESEN | 0x4080 | - | Zeit, wie lange die Batterie in welchen Spannungsbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4080_D |
| STATUS_TCU_TEMPERATURE_TIME_LESEN | 0x4082 | - | Zeit, wie lange das Steuergerät in welchen Temperaturbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4082_D |
| STATUS_ATF_TEMPERATURE_TIME_LESEN | 0x4083 | - | Zeit, wie lange die Getriebeöltemperatur in welchen Zeitbereichen ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4083_D |
| STATUS_SEGELN_LESEN | 0x4086 | - | Status Segelfunktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4086_D |
| STATUS_LOCKUP_CLUTCH_TEMPERATURE_COUNT_LESEN | 0x4087 | - | Temperaturzähler Wandlerkupplung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4087_D |
| STATUS_QMONITOR_LESEN | 0x4088 | - | Lesen Q Monitor Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4088_D |
| STATUS_LEARNDATA_8SP_LESEN | 0x4089 | - | Read adaptive data for 8sp project | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4089_D |
| STATUS_TCUTEMP_SENSORS_LESEN | 0x4090 | - | Report TCU temperatures for TCU temperature sensor 1 and sensor 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4090_D |
| STATUS_TCU_TEMP_CAN_LESEN | 0x4091 | STAT_TCU_TEMP_CAN_LESEN_WERT | TCU Umgebungstemperatur | °C | - | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| STATUS_OIL_TEMPERATURE_LESEN | 0x4092 | - | Öltemperatur von Öltemperatursensor 1 und 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4092_D |
| OWC_SLIP_COUNTER | 0x4093 | - | OWC Slip Zähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4093_D |
| STALL_COUNTER_AFTER_OWC_SLIP | 0x4095 | - | stall counters due to owc slip | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4095_D |
| HISTORY_MEMORY | 0x4096 | - | Signature verification history memory | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4096_D |
| ENVIRONMENT_CONDITION_OF_SF85 | 0x4097 | - | Environment Condition of SF85 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4097_D |
| ENGINE_TORQUE_OVER_TIME | 0x409A | - | Engine Torque Over Time | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x409A_D |
| DYNOMETER_MODE_STATUS | 0x409B | STAT_DYNOMETER_MODE_STATUS | Dynometer Mode Status | 0-n | - | High | unsigned char | DYNOMETER_MODE_STATUS | - | - | - | - | 22 | - | - |
| LSD_RECORD | 0x40A0 | - | Read LSD record | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A0_D |
| CANSIG_AVL_WMOM_PT_SUM | 0x4200 | STAT_AVL_WMOM_PT_SUM_WERT | Read CAN signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -32000.0 | - | 22 | - | - |
| CANSIG_QU_AVL_WMOM_PT_SUM | 0x4201 | STAT_QU_AVL_WMOM_PT_SUM | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_AVL_WMOM_PT_SUM | - | - | - | - | 22 | - | - |
| CANSIG_AVL_TORQ_CRSH | 0x4210 | STAT_AVL_TORQ_CRSH_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_QU_AVL_RPM_ENG_CRSH | 0x4213 | STAT_QU_AVL_RPM_ENG_CRSH | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_AVL_RPM_ENG_CRSH | - | - | - | - | 22 | - | - |
| CANSIG_AVL_TORQ_CRSH_MIN | 0x4220 | STAT_AVL_TORQ_CRSH_MIN_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_AVL_TORQ_CRSH_MAX | 0x4221 | STAT_AVL_TORQ_CRSH_MAX_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_AVL_TORQ_CRSH_SPAR_NEG | 0x4222 | STAT_AVL_TORQ_CRSH_SPAR_NEG_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_AVL_TORQ_CRSH_DVCH_DRS | 0x4230 | STAT_AVL_TORQ_CRSH_DVCH_DRS_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_RQ_OPMO_GRDT_DRS | 0x4231 | STAT_RQ_OPMO_GRDT_DRS_WERT | 0--0 Dynamic transmission operating mode 0--1 Static transmission operating mode 0-0- Avoid adjustment discontinuities in the traction 0-1- Allow adjustment discontinuities in the traction 00-- ACC / DCC / HDC / PMA_LQ / RCP shift program inactive 01-- ACC / DCC shift program active 10-- HDC shift program active 1100 SLD active 1101 EDL active 1110 PMA_LQ / RCP shift program active 1111 Signal invalid | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_QU_RQ_ILK_GRDT | 0x4232 | STAT_QU_RQ_ILK_GRDT | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_RQ_ILK_GRDT | - | - | - | - | 22 | - | - |
| CANSIG_TAR_WMOM_DRV_SUM_COOTD | 0x4233 | STAT_TAR_WMOM_DRV_SUM_COOTD_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -32000.0 | - | 22 | - | - |
| CANSIG_TAR_INTV_GRB_TRCT | 0x4234 | STAT_TAR_INTV_GRB_TRCT_WERT | --00 No request --01 High drivetrain boost requested --10 Avoid load reversal 0-11 Load reduction in order to increase vehicle stability 00-- Torque implementation with maximum adjustment dynamics 01-- Torque implementation with limited adjustment dynamics 1111 Signal invalid | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_QU_AVL_ANG_ACPD | 0x4241 | STAT_QU_AVL_ANG_ACPD | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_AVL_ANG_ACPD | - | - | - | - | 22 | - | - |
| CANSIG_AVL_WMOM_PT_SUM_DTORQ_BOT | 0x4251 | STAT_AVL_WMOM_PT_SUM_DTORQ_BOT_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -32000.0 | - | 22 | - | - |
| CANSIG_ST_FN_MSA | 0x4260 | STAT_ST_FN_MSA | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_FN_MSA | - | - | - | - | 22 | - | - |
| CANSIG_ST_AVAI_SAIL_DME | 0x4261 | STAT_ST_AVAI_SAIL_DME_WERT | 0--- ---0 Coasting preventer Coasting off 0--- ---1 Coasting preventer Coasting on 0--- --0- Coasting preventer Coasting entry off 0--- --1- Coasting preventer Coasting entry on 0--- -0-- Coasting preventer 2 off 0--- -1-- Coasting preventer 2 on 0--- 0--- Coasting preventer 3 off 0--- 1--- Coasting preventer 3 on 0--0 ---- Coasting preventer 4 off 0--1 ---- Coasting preventer 4 on 0-0- ---- Coasting preventer 5 off 0-1- ---- Coasting preventer 5 on 00-- ---- Coasting preventer 6 off 01-- ---- Coasting preventer 6 on 1111 1101 Functional_interface_is_not_available 1111 1110 Function_reports_error 1111 1111 Signal_unfilled | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_ST_OBD_CYC | 0x4270 | STAT_ST_OBD_CYC_WERT | -- 0--0 Warm-up cycle not active -- 0--1 Warm-up cycle active -- 0-0- Driving cycle not active -- 0-1- Driving cycle active 0- 00-- RBM cycle not active 0- 01-- RBM cycle active 1- 00-- RBM cycle cannot be completed -0 0--- No PFC cycle -1 0--- PFC cycle completed 11 1111  Signal invalid | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_OBD_PO_THVA_ENG | 0x4271 | STAT_OBD_PO_THVA_ENG_WERT | Read CAN Signal via tester | % | - | High | unsigned char | - | 0.3937 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_TEMP_EOI_DRV | 0x4284 | STAT_TEMP_EOI_DRV_WERT | Read CAN Signal via tester | °C | - | High | unsigned char | - | 1.0 | 1.0 | -48.0 | - | 22 | - | - |
| CANSIG_RDUC_DOCTR_RPM_DRV_2 | 0x4285 | STAT_RDUC_DOCTR_RPM_DRV_2 | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RDUC_DOCTR_RPM_DRV_2 | - | - | - | - | 22 | - | - |
| CANSIG_RPM_ENG_MAX_ALW | 0x4286 | STAT_RPM_ENG_MAX_ALW_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned char | - | 50.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_AIP_ENG_DRV | 0x4290 | STAT_AIP_ENG_DRV_WERT | 598: Initial or no pressure sensor installed; 1108: Signal invalid | hPa | - | High | unsigned char | - | 2.0 | 1.0 | 598.0 | - | 22 | - | - |
| CANSIG_TAR_RPM_IDLG_DRV | 0x4291 | STAT_TAR_RPM_IDLG_DRV_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned char | - | 5.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_ST_SW_WAUP_DRV | 0x4292 | STAT_ST_SW_WAUP_DRV | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_SW_WAUP_DRV | - | - | - | - | 22 | - | - |
| CANSIG_RQ_SHPA_GRB_REGE_PAFI | 0x4294 | STAT_RQ_SHPA_GRB_REGE_PAFI | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_SHPA_GRB_REGE_PAFI | - | - | - | - | 22 | - | - |
| CANSIG_RQ_STASS_ENGMG | 0x4295 | STAT_RQ_STASS_ENGMG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_STASS_ENGMG | - | - | - | - | 22 | - | - |
| CANSIG_CTR_SLCK_DRV | 0x4296 | STAT_CTR_SLCK_DRV | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_CTR_SLCK_DRV | - | - | - | - | 22 | - | - |
| CANSIG_ST_INFS_DRV | 0x4297 | STAT_ST_INFS_DRV | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_INFS_DRV | - | - | - | - | 22 | - | - |
| CANSIG_RQ_SHPA_GRB_CHGBLC | 0x4298 | STAT_RQ_SHPA_GRB_CHGBLC | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_SHPA_GRB_CHGBLC | - | - | - | - | 22 | - | - |
| CANSIG_TAR_RPM_IDLG_DRV_EXT | 0x4299 | STAT_TAR_RPM_IDLG_DRV_EXT_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_TARVL_GRDT_MOM_GRAD_LIM | 0x429A | STAT_TARVL_GRDT_MOM_GRAD_LIM_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 16.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_CHL_TORQ_CRSH_4 | 0x42B0 | STAT_CHL_TORQ_CRSH_4_WERT | Read CAN Signal via tester | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_AVL_RPM_ENG_CRSH_LOW_EPL | 0x42B1 | STAT_AVL_RPM_ENG_CRSH_LOW_EPL_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | -900.0 | - | 22 | - | - |
| CANSIG_AVL_BRTORQ_SUM | 0x42C0 | STAT_AVL_BRTORQ_SUM_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -32000.0 | - | 22 | - | - |
| CANSIG_QU_AVL_BRTORQ_SUM | 0x42C1 | STAT_QU_AVL_BRTORQ_SUM | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_AVL_BRTORQ_SUM | - | - | - | - | 22 | - | - |
| CANSIG_QU_AVL_BRTORQ_SUM_DVCH | 0x42C2 | STAT_QU_AVL_BRTORQ_SUM_DVCH | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_AVL_BRTORQ_SUM_DVCH | - | - | - | - | 22 | - | - |
| CANSIG_AVL_BRTORQ_SUM_DVCH | 0x42C3 | STAT_AVL_BRTORQ_SUM_DVCH_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -32000.0 | - | 22 | - | - |
| CANSIG_QU_FN_FDR | 0x42D0 | STAT_QU_FN_FDR_WERT | 0010 ---- 0--- Funktion verfügbar und bereit, nicht aktiv, Schlupfschwellen normal 0010 ---- 1--- Funktion verfügbar und bereit, nicht aktiv, Schlupfschwellen aufgeweitet 1010 ---1 ---- Funktion verfügbar und aktiv, FDR Regeleingriff VL 1010 --1- ---- Funktion verfügbar und aktiv, FDR Regeleingriff VR 1010 -1-- ---- Funktion verfügbar und aktiv, FDR Regeleingriff HL 1010 1--- ---- Funktion verfügbar und aktiv, FDR Regeleingriff HR 1010 ---- 0--- Funktion verfügbar und aktiv, Schlupfschwellen normal 1010 ---- 1--- Funktion verfügbar und aktiv, Schlupfschwellen aufgeweitet 0110 ---- ---- Funktion nicht verfügbar: Fehler 1110 ---- ---- Funktion nicht verfügbar: Ausgeschaltet 1000 ---- ---- reserviert 0010 ---- ---- reserviert 0011 ---- 0--- reserviert 0011 ---- 1--- reserviert 1111 1111 1111 Signal ungültig | HEX | - | High | unsigned int | - | - | - | - | - | 22 | - | - |
| CANSIG_QU_FN_ABS | 0x42D1 | STAT_QU_FN_ABS_WERT | 1000 ---- ---- Reserved 0010 ---- ---- ABS function available, no control intervention takes place 1010 ---1 ---- ABS function is active - ABS control intervention F/L 1010 --1- ---- ABS function is active - ABS control intervention F/R 1010 -1-- ---- ABS function is active - ABS control intervention R/L 1010 1--- ---- ABS function is active - ABS control intervention R/R 0011 ---- ---- ABS in fall-back level - no control intervention takes place 1011 ---1 ---- ABS in fall-back level - ABS control intervention F/L 1011 --1- ---- ABS in fall-back level - ABS control intervention F/R 1011 -1-- ---- ABS in fall-back level - ABS control intervention R/L 1011 1--- ---- ABS in fall-back level - ABS control intervention R/R 0110 ---- ---- ABS function not available - error 1110 ---- ---- ABS function not available - standby 1111 1111 1111 Signal invalid | HEX | - | High | unsigned int | - | - | - | - | - | 22 | - | - |
| CANSIG_QU_FN_ASC | 0x42D2 | STAT_QU_FN_ASC_WERT | Refer to CAN catalogue(ID 173h) | HEX | - | High | unsigned int | - | - | - | - | - | 22 | - | - |
| CANSIG_AVL_RPM_WHL_RLH | 0x42D4 | STAT_AVL_RPM_WHL_RLH_WERT | Read CAN Signal via tester | rad/s | - | High | unsigned int | - | 0.015625 | 1.0 | -511.984 | - | 22 | - | - |
| CANSIG_AVL_RPM_WHL_RRH | 0x42D5 | STAT_AVL_RPM_WHL_RRH_WERT | Read CAN Signal via tester | rad/s | - | High | unsigned int | - | 0.015625 | 1.0 | -511.984 | - | 22 | - | - |
| CANSIG_AVL_RPM_WHL_FLH | 0x42D6 | STAT_AVL_RPM_WHL_FLH_WERT | Read CAN Signal via tester | rad/s | - | High | unsigned int | - | 0.015625 | 1.0 | -511.984 | - | 22 | - | - |
| CANSIG_AVL_RPM_WHL_FRH | 0x42D7 | STAT_AVL_RPM_WHL_FRH_WERT | Read CAN Signal via tester | rad/s | - | High | unsigned int | - | 0.015625 | 1.0 | -511.984 | - | 22 | - | - |
| CANSIG_AVL_LOGR_RW | 0x42F0 | STAT_AVL_LOGR_RW_WERT | Read CAN Signal via tester | ° | - | High | unsigned int | - | 0.05 | 1.0 | -64.0 | - | 22 | - | - |
| CANSIG_QU_AVL_LOGR_RW | 0x42F1 | STAT_QU_AVL_LOGR_RW | Read CAN Signal via tester | 0-n | - | High | unsigned char | QU_AVL_LOGR_RW | - | - | - | - | 22 | - | - |
| CANSIG_ACLNX_COG | 0x4300 | STAT_ACLNX_COG_WERT | Read CAN Signal via tester | m/s² | - | High | unsigned int | - | 0.002 | 1.0 | -65.0 | - | 22 | - | - |
| CANSIG_QU_ACLNX_COG | 0x4301 | STAT_QU_ACLNX_COG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_STAT_QU_ACLNX_COG | - | - | - | - | 22 | - | - |
| CANSIG_ACLNY_COG | 0x4310 | STAT_ACLNY_COG_WERT | Read CAN Signal via tester | m/s² | - | High | unsigned int | - | 0.002 | 1.0 | -65.0 | - | 22 | - | - |
| CANSIG_QU_ACLNY_COG | 0x4311 | STAT_QU_ACLNY_COG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_ACLNY_COG | - | - | - | - | 22 | - | - |
| CANSIG_VYAW_VEH | 0x4320 | STAT_VYAW_VEH_WERT | Read CAN Signal via tester | °/s | - | High | unsigned int | - | 0.005 | 1.0 | -163.84 | - | 22 | - | - |
| CANSIG_QU_VYAW_VEH | 0x4321 | STAT_QU_VYAW_VEH | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_VYAW_VEH | - | - | - | - | 22 | - | - |
| CANSIG_V_VEH_COG | 0x4330 | STAT_V_VEH_COG_WERT | Read CAN Signal via tester | km/h | - | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_QU_V_VEH_COG | 0x4331 | STAT_QU_V_VEH_COG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_V_VEH_COG | - | - | - | - | 22 | - | - |
| CANSIG_DVCO_VEH | 0x4332 | STAT_DVCO_VEH | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DVCO_VEH | - | - | - | - | 22 | - | - |
| CANSIG_MASS_VEH | 0x4340 | STAT_MASS_VEH_WERT | Read CAN Signal via tester | kg | - | High | unsigned int | - | 20.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_QU_MASS_VEH | 0x4341 | STAT_QU_MASS_VEH | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_MASS_VEH | - | - | - | - | 22 | - | - |
| CANSIG_STEA_FTAX_EFFV | 0x4342 | STAT_STEA_FTAX_EFFV_WERT | Read CAN Signal via tester | ° | - | High | unsigned int | - | 0.002747 | 1.0 | -90.0 | - | 22 | - | - |
| CANSIG_QU_STEA_FTAX_EFFV | 0x4343 | STAT_QU_STEA_FTAX_EFFV | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_QU_STEA_FTAX_EFFV | - | - | - | - | 22 | - | - |
| CANSIG_OP_SPD | 0x4360 | STAT_OP_SPD | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_OP_SPD | - | - | - | - | 22 | - | - |
| CANSIG_ST_DSW_DRD_VRFD | 0x4370 | STAT_ST_DSW_DRD_VRFD | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_DSW_DRD_VRFD | - | - | - | - | 22 | - | - |
| CANSIG_DRVDIR_VEH_CFD | 0x4380 | STAT_DRVDIR_VEH_CFD | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DRVDIR_VEH_CFD | - | - | - | - | 22 | - | - |
| CANSIG_DRVDIR_VEH_UCNFR | 0x4381 | STAT_DRVDIR_VEH_UCNFR | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DRVDIR_VEH_UCNFR | - | - | - | - | 22 | - | - |
| CANSIG_TEMP_EX | 0x43A0 | STAT_TEMP_EX_WERT | Read CAN Signal via tester | °C | - | High | unsigned char | - | 0.5 | 1.0 | -40.0 | - | 22 | - | - |
| CANSIG_T_SEC_COU_REL | 0x43A1 | STAT_T_SEC_COU_REL_WERT | Read CAN Signal via tester | s | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_ST_TRAI | 0x43A5 | STAT_ST_TRAI | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_TRAI | - | - | - | - | 22 | - | - |
| CANSIG_OP_GWS | 0x43B0 | STAT_OP_GWS | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_OP_GWS | - | - | - | - | 22 | - | - |
| CANSIG_OP_GWS_PUBU_PKG | 0x43B1 | STAT_OP_GWS_PUBU_PKG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_OP_GWS_PUBU_PKG | - | - | - | - | 22 | - | - |
| CANSIG_ST_IDC | 0x43D0 | STAT_ST_IDC | Read CAN signal via tester | 0-n | - | High | unsigned char | TB_CANSIG_ST_IDC | - | - | - | - | 22 | - | - |
| CANSIG_TAR_TORQ_CRSH_SLOW | 0x4400 | STAT_TAR_TORQ_CRSH_SLOW_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_DRAW_TORQ_CRSH_GRB | 0x4402 | STAT_DRAW_TORQ_CRSH_GRB_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 0.5 | 1.0 | -1023.5 | - | 22 | - | - |
| CANSIG_TAR_RPM_ENG_CRSH_GRB | 0x4404 | STAT_TAR_RPM_ENG_CRSH_GRB_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned int | - | 2.5 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_TAR_MOD_SHFT_DVCH | 0x4410 | STAT_TAR_MOD_SHFT_DVCH_WERT | Read CAN Signal via tester | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_TORQ_COMPT_RISE | 0x4411 | STAT_TORQ_COMPT_RISE_WERT | Read CAN Signal via tester | Nm | - | High | unsigned int | - | 1.0 | 1.0 | -2000.0 | - | 22 | - | - |
| CANSIG_ST_TORQ_COMPT_RISE | 0x4412 | STAT_ST_TORQ_COMPT_RISE | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_TORQ_COMPT_RISE | - | - | - | - | 22 | - | - |
| CANSIG_IDX_GRB_DYN | 0x4414 | STAT_IDX_GRB_DYN | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_IDX_GRB_DYN | - | - | - | - | 22 | - | - |
| CANSIG_DISP_RPM_ENG_CRSH_GRB | 0x4420 | STAT_DISP_RPM_ENG_CRSH_GRB_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned int | - | 10.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_RQ_GRB_DYNS_RPM_ENG | 0x4421 | STAT_RQ_GRB_DYNS_RPM_ENG | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_GRB_DYNS_RPM_ENG | - | - | - | - | 22 | - | - |
| CANSIG_GRB_REIN_VRFD | 0x4430 | STAT_GRB_REIN_VRFD_WERT | Read CAN Signal via tester | 1/m | - | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_RPM_GRDT_TURB_VRFD | 0x4431 | STAT_RPM_GRDT_TURB_VRFD_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | -2000.0 | - | 22 | - | - |
| CANSIG_RPM_GRDT_NEGL_VRFD | 0x4432 | STAT_RPM_GRDT_NEGL_VRFD_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | -2000.0 | - | 22 | - | - |
| CANSIG_LSS_TORQ_OUT_GRB_VRFD | 0x4433 | STAT_LSS_TORQ_OUT_GRB_VRFD_WERT | Read CAN Signal via tester | Nm | - | High | unsigned char | - | 2.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_RQ_MIL_DIAG_OBD_GRB | 0x4440 | STAT_RQ_MIL_DIAG_OBD_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_MIL_DIAG_OBD_GRB | - | - | - | - | 22 | - | - |
| CANSIG_RQ_BST_RPM_IDLG_GRB | 0x4450 | STAT_RQ_BST_RPM_IDLG_GRB_WERT | Read CAN Signal via tester | 1/min | - | High | unsigned char | - | 8.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_TEMP_TROI | 0x4451 | STAT_TEMP_TROI_WERT | Read CAN Signal via tester | °C | - | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| CANSIG_RQ_COOL_GRB | 0x4452 | STAT_RQ_COOL_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RQ_COOL_GRB | - | - | - | - | 22 | - | - |
| CANSIG_ST_GRCT | 0x4453 | STAT_ST_GRCT | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_GRCT | - | - | - | - | 22 | - | - |
| CANSIG_ST_GRSEL_GRB | 0x4456 | STAT_ST_GRSEL_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_GRSEL_GRB | - | - | - | - | 22 | - | - |
| CANSIG_ST_VRS_GRB | 0x4457 | STAT_ST_VRS_GRB_WERT | 0--0 Comfort shifter 0--1 Sports button 000- EGS 001- DKG 010- Reserve 1 011- Reserve 2 1111 Signal invalid | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_ST_RCOG_FSHUP_GRB | 0x445B | STAT_ST_RCOG_FSHUP_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_RCOG_FSHUP_GRB | - | - | - | - | 22 | - | - |
| CANSIG_ST_RSTA_2 | 0x445C | STAT_ST_RSTA_2 | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_RSTA_2 | - | - | - | - | 22 | - | - |
| CANSIG_RLS_RSTA_EGS | 0x445D | STAT_RLS_RSTA_EGS | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_RLS_RSTA_EGS | - | - | - | - | 22 | - | - |
| CANSIG_DISP_PRG_GRB | 0x4461 | STAT_DISP_PRG_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DISP_PRG_GRB | - | - | - | - | 22 | - | - |
| CANSIG_DISP_PO_IDC_GRB | 0x4462 | STAT_DISP_PO_IDC_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DISP_PO_IDC_GRB | - | - | - | - | 22 | - | - |
| CANSIG_DISP_PO_GRB | 0x4463 | STAT_DISP_PO_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DISP_PO_GRB | - | - | - | - | 22 | - | - |
| CANSIG_DISP_SSC_IDC_GRB | 0x4464 | STAT_DISP_SSC_IDC_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_DISP_SSC_IDC_GRB | - | - | - | - | 22 | - | - |
| CANSIG_DISP_RQ_GR_GRB | 0x4465 | STAT_DISP_RQ_GR_GRB_WERT | 0000 Dark-switching 0001 1st gear 0010 2nd gear 0011 3rd gear 0100 4th gear 0101 5th gear 0110 6th gear 0111 7th gear 1000 8th gear 1001 9th gear 1101 Reserved 1110 Reserved 1111 Signal_unfilled | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_ST_PENG_GRB | 0x4470 | STAT_ST_PENG_GRB_WERT | 0000 No_traction 0001 Traction_present 0010 Transition_phase_Traction_being_canceled 0100 Transition_phase_Traction_being_established 0101 NIC_active 1000 Change_of_traction_status_not_possible 1101 Reserved 1110 Reserved 1111 Signal_unfilled | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_ST_GRSEL_GRB_VRFD | 0x4473 | STAT_ST_GRSEL_GRB_VRFD | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_GRSEL_GRB_VRFD | - | - | - | - | 22 | - | - |
| CANSIG_ST_RLS_MSA_EXT | 0x4474 | STAT_ST_RLS_MSA_EXT_WERT | 0000 0001 Abschaltverhinderer_Retry 0000 0010 Abschaltverhinderer_Getriebetemperatur 0000 0011 Abschaltverhinderer_MSA_Startkomfort 0000 0100 Abschaltverhinderer_Gang 0000 0101 Abschaltverhinderer_vnab 0000 0110 Abschaltverhinderer_PosR 0000 0111 Freigabe_Motorstopp 0000 1000 Freigabe_Motorstopp_mit_Teilentkopplung 0000 1001 Freigabe_Motorstopp_und_Start_Kraftschlussfrei 0000 1010 Einschaltaufforderer_PosP 0000 1011 Einschaltaufforderer_PosR 0000 1100 MSA_Getriebe_Systemfehler 0000 1110 Abschaltverhinderer_MSA_passiv 0000 1101 Abschaltverhinderer_AGS 0000 1111 Einschaltaufforderer_AGS 0001 0001 Einschaltverhinderer_Einlegen_PosP 0001 0000 Einschaltaufforderer_Druckspeicher 1111 1110 Reserviert 1111 1101 Funktionsschnittstelle_ist_nicht_verfuegbar 1111 1111 Signal_unbefuellt | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CANSIG_NO_CC_GRB | 0x4491 | STAT_NO_CC_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned int | TB_NO_CC_GRB | - | - | - | - | 22 | - | - |
| CANSIG_ST_CC_GRB | 0x4492 | STAT_ST_CC_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_CC_GRB | - | - | - | - | 22 | - | - |
| CANSIG_TRANF_CC_GRB | 0x4493 | STAT_TRANF_CC_GRB_WERT | 1..14  Cyclic 15  Signal invalid | s | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CANSIG_ST_IDC_CC_GRB | 0x4494 | STAT_ST_IDC_CC_GRB | Read CAN Signal via tester | 0-n | - | High | unsigned char | TB_ST_IDC_CC_GRB | - | - | - | - | 22 | - | - |
| ADAPTIONSWERTE_ZURUECKSETZEN | 0xAE31 | - | Adaptionswerte zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_RESET_PLANTDATA | 0xAE32 | - | Rücksetzen Adaptionswerte im Werk | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_EWS | 0xC000 | - | Steuergeräte interner Zustand der EWS Funktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xC000_D |
| STEUERN_EWS4_SK | 0xC001 | - | EWS4-data schreiben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xC001_D | - |
| STATUS_EWS4_KF | 0xC003 | STAT_KF_DATA | Rohdaten des KF | DATA | - | High | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ERSATZMASSNAHMEN_AKTIV | 0xD9C9 | - | Auslesen der aktiven Ersatzmaßnahmen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9C9_D |
| _STEUERN_LL_SEGELN_ROLLE_OEKO_INNO_NACHWEIS | 0xD9CA | - | Segeln im Rollenbetrieb aktivieren und deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD9CA_D | - |
| _STATUS_LL_SEGELN_ROLLE_OEKO_INNO_NACHWEIS | 0xD9CB | STAT_SEGELN_ROLLE | aktueller Status der Segeln-Funktion: 0x00: Segeln aktiv 0x01: Segeln inaktiv | 0-n | - | High | unsigned char | TAB_STATUS_SEGELN_ROLLE | - | - | - | - | 22 | - | - |
| EGS_SENSOREN | 0xD9D0 | - | Sensorwerte vom Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D0_D |
| EGS_AKTUATOREN | 0xD9D1 | - | Aktuatoren vom Getriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D1_D |
| STEUERN_LERNFKT_RUECKSETZEN | 0xDA15 | - | Rücksetzen der Lernfunktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA15_D | - |
| GANGANZEIGE | 0xDA20 | - | Ganganzeige in KOMBI | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA20_D |
| ISTGANG | 0xDA2E | - | Aktuell eingelegter Gang | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA2E_D |
| D_S_M_ZAEHLER | 0xDA37 | - | Die Zeit, die der Fahrer in Getriebeposition D, in S und in Manuellem Modus gefahren ist | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA37_D |
| SBW_COUNTER | 0xDA65 | - | Auslesen der Shift-by-Wire Zähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA65_D |
| AUTO_P_DEACTIVATE | 0xDA66 | - | Deaktivieren von Auto-P bei KL15_Aus / bei PWF-Zustandswechsel-Funktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA66_D | - |
| AUTO_P_DEACTIVATE_STATUS | 0xDA67 | STAT_AUTO_P_DEACTIVATE | Status von Auto-P Deaktivieren. Siehe Tabelle TAB_AUTOP_DEACTIVATION_STAT | 0-n | - | High | unsigned char | TAB_AUTOP_DEACTIVATION_STAT | - | - | - | - | 22 | - | - |
| OBD_LOCK_BIT | 0xE2EC | STAT_LOCK_BIT | 0x00: Verriegelungsbit nicht gesetzt 0x01: Verriegelungsbit gesetzt | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| GEARSELECTOR_ADJUSTMENT | 0xF000 | - | Anlernen Getriebepositionssensor nach Steuergeräte-Tausch | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| RESET_ADAPTATION_VALUES | 0xF001 | - | Rücksetzen der Adaptionen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_CLUTCH_ADAPTATION_VALUES | 0xF002 | - | Rücksetzen der allgemeinen Kupplungsadaptionen (ohne Wandlerkupplung) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_LOCKUP_ADAPTATION_VALUES | 0xF003 | - | Rücksetzen der Wandlerkupplungsadaption (ohne die allgemeinen Kupplungsadaptionen) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_ENVIRONMENT_CONDITION_OF_SF85 | 0xF007 | - | Reset Environment Condition of SF85 | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF007_R |
| RESET_TCU_RESET_COUNT | 0xF014 | - | Lösche TCU-Resetzähler | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_SAILING_COUNT | 0xF015 | - | Zähler Segeln zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_NIC_COUNT | 0xF016 | - | NIC-Zähler zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_MSA_COUNT | 0xF017 | - | MSA-Zähler zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_BATTERY_TIME | 0xF018 | - | Löschen Batteriezeit | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_TEMPERATURE_TIME | 0xF019 | - | Löschen EGS Temperaturzeit und Öltemperaturzeit | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_LOCKUP_CLUTCH_TEMPERATURE_COUNT | 0xF01A | - | Temperaturzähler Wandlerkupplung löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_ENGINE_TORQUE_OVER_TIME | 0xF01B | - | TCU radiert das Motordrehmoment Über Time in EEPROM aus. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_OWC_COUNT | 0xF01C | - | Reset OWC count | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01C_R |
| RESET_LSD_IN_QMONITOR | 0xF01D | - | Reset LSD data inside Q-Monitor | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01D_R |
| RESET_LSD_RECORD | 0xF01E | - | Reset LSD record | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01E_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| TRANSMISSION_PART_NO | 0xFD20 | - | Getriebe Einheit Nummer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD20_D | RES_0xFD20_D |

### SHIFT_LEVER_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Stufe P |
| 0x01 | Stufe R |
| 0x02 | Stufe N |
| 0x03 | Stufe D |
| 0xFF | Fehler |

### SHIFT_LOGIC_INFORMATION

| WERT | TEXT |
| --- | --- |
| 0x00 | DS2_XE |
| 0x01 | DS2_E |
| 0x02 | DS2_S |
| 0x03 | DS2_XS |
| 0x04 | DS2_A1 |
| 0x05 | DS2_A2 |
| 0x06 | DS2_A3 |
| 0x07 | DS2_A4 |
| 0x08 | DS2_STEPTR |
| 0x09 | DS2_SO |
| 0x10 | DS2_B0 |
| 0x11 | DS2_LM |
| 0x12 | DS2_HM |
| 0x13 | DS2_WL |
| 0x14 | DS2_LD |
| 0x15 | DS2_ACC |
| 0x16 | DS2_A5 |
| 0x17 | DS2_TMS |

### STATUS_ACTUAL_GEAR

| WERT | TEXT |
| --- | --- |
| 0x00 | aus D-Auswahl |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 (Nur bei 8-Gang-Getriebe) |
| 0x08 | Gang 8 (Nur bei 8-Gang-Getriebe) |
| 0x0F | Ungültig |
| 0xFF | Ungültig |

### STATUS_BRAKE_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |
| 0x3F | Ungültig |

### STATUS_EG_START

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Motorstart |
| 0x01 | Motorstart zulassen - Getriebe in N |
| 0x02 | Motorstart zulassen, Motorstop zulassen - Getriebe in P |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### STATUS_MODESAS

| WERT | TEXT |
| --- | --- |
| 0x00 | Sailing disabled by conditions of shift-execution-control (SAS) |
| 0x01 | Sailing enabled by conditions of shift-execution-control (SAS) |
| 0x02 | Change to sailing active (Confirmation of sailing request from AGS) |
| 0x03 | Sailing active |
| 0x04 | Change to sailing inactive (Confirmation of no sailing request from AGS) |
| 0xFF | Wert ungültig |

### STATUS_MODE_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln deaktiviert |
| 0x01 | Segeln freigegeben aber nicht aktiv |
| 0x02 | Wechseln zu Segeln |
| 0x03 | Segeln aktiv |
| 0x04 | Wechseln zu Segeln inaktiv |
| 0x0D | Segeln nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | Wert ungültig |

### STATUS_NIC

| WERT | TEXT |
| --- | --- |
| 0x00 | NIC off or release wait phase or apply phase, NIC Low release phase or apply wait phase, AFU off |
| 0x01 | AFU on |
| 0x02 | NIC Low neutral phase (D position) |
| 0x07 | Ungültig |
| 0x03 | NIC High apply wait phase (D position), NIC apply wait phase (R position) |
| 0x05 | NIC High neutral phase (D position), NIC neutral phase (R position) |
| 0x06 | NIC High release phase (D position), NIC release phase (R position) |
| 0xFF | Wert ungültig |

### STATUS_PLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht Verfügbar |
| 0x01 | Wählhebel gesperrt |
| 0x02 | Wählhebel freigegeben |
| 0x03 | Ungültig |

### STATUS_PRESSURE_SW_1

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_PRESSURE_SW_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter 2 AUS |
| 0x01 | Öldruckschalter 2 AN |

### STATUS_PRESSURE_SW_3

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter 3 AUS |
| 0x01 | Öldruckschalter 3 AN |

### STATUS_PRESSURE_SW_4

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_PRESSURE_SW_5

| WERT | TEXT |
| --- | --- |
| 0x00 | Öldruckschalter AUS |
| 0x01 | Öldruckschalter AN |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### STATUS_REQAGS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Segel-Anforderung der AGS |
| 0x01 | Segel-Anforderung der AGS |

### STATUS_SAILING

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln gesperrt |
| 0x01 | Segeln freigegeben aber nicht aktiv |
| 0x02 | Wechsel in Segelmodus |
| 0x03 | Fahrzeug segelt |
| 0x04 | Wechsel zu segeln nicht aktiv |
| 0x0D | Segeln nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Ungültig |

### STAT_GEAR_DISPLAY

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anzeige |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 (Nur für 8-Gang Getriebe) |
| 0x08 | Gang 8 (Nur für 8-Gang Getriebe) |

### ST_GEARPOSITION_CTRL

| WERT | TEXT |
| --- | --- |
| 0x00 | Gear Position Sensor Learning |
| 0x01 | Reset Gear Position Sensor Learning |

### TAB_AUTOP_DEACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Auto-P deaktivieren |
| 0x02 | Auto-P aktivieren |

### TAB_AUTOP_DEACTIVATION_STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Auto-P aktiv |
| 0x01 | Auto-P inaktiv |
| 0xFF | Ungültiger Wert |

### TAB_EWS_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x07 | M7: Unlock & delete Client-SK mit SK |
| 0x11 | M17: Unlock & delete Client-SK mit Hash (SK |

### TAB_FAHRSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | P - parken |
| 0x01 | R - rückwärts |
| 0x02 | N - neutral |
| 0x03 | D - dauer |
| 0x04 | M - manuelle Schaltgasse |
| 0xFF | ungültiger Wert |

### TAB_GANGANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung, P, R, N, D |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0x07 | 7 |
| 0x08 | 8 |
| 0xFF | Signal ungültig |

### TAB_ISTGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | P - parken |
| 0x01 | R - rückwärts |
| 0x02 | N - neutral |
| 0x03 | Gang 1 |
| 0x04 | Gang 2 |
| 0x05 | Gang 3 |
| 0x06 | Gang 4 |
| 0x07 | Gang 5 |
| 0x08 | Gang 6 |
| 0x09 | Gang 7 |
| 0x10 | Gang 8 |
| 0xFF | ungültiger Wert |

### TAB_STATUS_SEGELN_ROLLE

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln aktiv |
| 0x01 | Segeln inaktiv |
| 0x02 | Segeln bei über 40km/h aktiv |
| 0xFF | Ungültig |

### TAB_STEUERN_SEGELN_OEKO

| WERT | TEXT |
| --- | --- |
| 0x0100 | Segeln deaktivieren |
| 0x0001 | Segeln aktivieren |
| 0x0002 | Segeln aktive bei groesser 40km/h |
| 0xFFFF | Wert ungültig |

### TAB_TARGET_GEAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Gang |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 |
| 0x08 | Gang 8 |

### TAB_WAEHLHEBELANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung |
| 0x01 | P |
| 0x02 | R |
| 0x03 | N |
| 0x04 | D |
| 0x05 | M |
| 0xFF | Signal ungültig |

### TARGET_GEAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anzeige |
| 0x01 | Gang 1 |
| 0x02 | Gang 2 |
| 0x03 | Gang 3 |
| 0x04 | Gang 4 |
| 0x05 | Gang 5 |
| 0x06 | Gang 6 |
| 0x07 | Gang 7 |
| 0x08 | Gang 8 |

### TBL_PARKING_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Not in parking position |
| 0x01 | In parking position |
| 0x02 | Parking position unknown |
| 0xFF | Wert ungültig |

### TBL_SHIFTLEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Stufe N |
| 0x01 | Stufe D |
| 0x02 | Stufe R |
| 0x04 | undefiniert |
| 0x05 | undefiniert D |
| 0x06 | undefiniert R |
| 0x07 | undefiniert RD |
| 0xFF | Wert ungültig |

### TB_CANSIG_ST_IDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Both turn signals OFF |
| 0x01 | Left turn signal ON |
| 0x02 | Right turn signal ON |
| 0x03 | Both turn signals ON |
| 0x07 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_CTR_SLCK_DRV

| WERT | TEXT |
| --- | --- |
| 0x00 | Not permitted |
| 0x01 | No shift-lock request |
| 0x02 | Shift-lock request |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_DISP_PO_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Dark-switching (off) |
| 0x01 | P |
| 0x02 | R |
| 0x03 | N |
| 0x04 | D |
| 0x07 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_DISP_PO_IDC_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Not flashing |
| 0x01 | Flashing |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_DISP_PRG_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Dark-switching |
| 0x01 | S program |
| 0x02 | M program |
| 0x03 | L program |
| 0x04 | C program |
| 0x07 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_DISP_SSC_IDC_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Not flashing |
| 0x01 | Flashing |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_DRVDIR_VEH_CFD

| WERT | TEXT |
| --- | --- |
| 0x0 | Fahrzeug steht |
| 0x1 | Fahrzeug fährt vorwärts |
| 0x2 | Fahrzeug fährt rückwärts |
| 0x3 | Fahrzeug fährt |
| 0xD | Reserviert |
| 0xE | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TB_DRVDIR_VEH_UCNFR

| WERT | TEXT |
| --- | --- |
| 0x0 | Fahrzeug steht |
| 0x1 | Fahrzeug fährt vorwärts |
| 0x2 | Fahrzeug fährt rückwärts |
| 0x3 | Fahrzeug fährt |
| 0xD | Reserviert |
| 0xE | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TB_DVCO_VEH

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug fährt vorwärts |
| 0x02 | Fahrzeug fährt rückwärts |
| 0x03 | Fahrzeug fährt |
| 0x04 | Fahrzeug steht, Hinterachse auf Rollenprüfstand erkannt |
| 0x05 | Fahrzeug steht, Zwei-Achs-Rollenbetrieb gesetzt |
| 0x06 | Fahrzeug steht, Vorderachse auf Rollenprüfstand erkannt |
| 0x07 | Signal ungültig |
| 0xFF | Wert ungültig |

### TB_IDX_GRB_DYN

| WERT | TEXT |
| --- | --- |
| 0x00 | Index 0 |
| 0x01 | Index 1 |
| 0x02 | Index 2 |
| 0x03 | Index 3 |
| 0x04 | Index 4 |
| 0x05 | Index 5 |
| 0x06 | Index 6 |
| 0x07 | Index 7 |
| 0x08 | Index 8 |
| 0x09 | Index 9 |
| 0x0A | Index 10 |
| 0x0B | Index 11 |
| 0x0C | Index 12 |
| 0x0D | Index 13 |
| 0x0E | Index 14 |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_NO_CC_GRB

| WERT | TEXT |
| --- | --- |
| 0xFFFD | No messages |
| 0x67 | CC Message ID103. Transmission too hot. |
| 0xAA | CC Message ID170. Drive train fault. |
| 0xAD | CC Message ID173. Transmission. Drive moderately. |
| 0xAE | CC Message ID174. Gearbox in position P only at standstill. |
| 0xAF | CC Message ID175. Secure vehicle against rolling. |
| 0xCB | CC Message ID203. Transmission in position N. |
| 0xF4 | CC Message ID244. To engage gear, press brake. |
| 0xFA | CC Message ID250. Press brake to engage gear. |
| 0xFC | CC Message ID252. P-pushbutton single error. |
| 0x0146 | CC Message ID326. Protect against rolling away. |
| 0x0170 | CC Message ID368. Transmission fault. |
| 0x018A | CC Message ID394. Unable to change transmission position. |
| 0x01A3 | CC Message ID419. Drive train fault. |
| 0x01A4 | CC Message ID420. Transmission fault. Drive moderately. |
| 0x01BE | CC Message ID446. Launch Control active. |
| 0x0235 | CC Message ID565. Gearbox in position P only at standstill! |
| 0x0316 | CC Message ID790. Emergency release. For manoeuvring only. |
| 0x0339 | CC Message ID825. The continuous gong. |
| 0x033C | CC Message ID828. Vehicle ready for driving. |
| 0x07D8 | CC Message ID2008. Driving step changes not possibly. |
| 0xFFFF | Invalid(Not used) |

### TB_OP_GWS

| WERT | TEXT |
| --- | --- |
| 0x00 | NA |
| 0x01 | R |
| 0x02 | N |
| 0x03 | D |
| 0x04 | M- |
| 0x05 | M+ |
| 0x06 | M/S |
| 0x07 | M |
| 0x0E | INIT |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_OP_GWS_PUBU_PKG

| WERT | TEXT |
| --- | --- |
| 0x00 | P not actuated / Init |
| 0x01 | P actuated |
| 0x02 | Single-point error |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_OP_SPD

| WERT | TEXT |
| --- | --- |
| 0x00 | Paddle not actuated, init |
| 0x01 | Tip - actuated, not debounced |
| 0x02 | Tip + actuated, not debounced |
| 0x05 | Tip - actuated and debounced |
| 0x06 | Tip + actuated and debounced |
| 0x03 | Paddle error |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_ACLNY_COG

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x09 | Signal value is valid and validated, temporary state/status |
| 0x02 | Signal value is valid |
| 0x0A | Signal value is valid, temporary state/status |
| 0x03 | Signal quality and/or monitoring limited |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0C | Substitute value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_AVL_ANG_ACPD

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x0C | Adjustment value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_AVL_BRTORQ_SUM

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x06 | Signal value is invalid |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_AVL_BRTORQ_SUM_DVCH

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x02 | Signal value is valid |
| 0x04 | Substitute value set in useful signal |
| 0x0C | Adjustment value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_AVL_REPAT_XTRQ_FTAX_BAX

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x02 | Signal value is valid |
| 0x0A | Signal value is valid, recalibration demand |
| 0x0C | Adjustment value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_AVL_RPM_ENG_CRSH

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialisierung |
| 0x01 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x02 | Signalwert ist gueltig Nockenwellennotlauf |
| 0x06 | Fehler |
| 0x0E | Reserviert |
| 0xFF | Signal unbefuellt |

### TB_QU_AVL_WMOM_PT_SUM

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x02 | Signal value is valid |
| 0x0A | Signal value is valid, temporary state/status |
| 0x03 | Signal quality and/or monitoring limited |
| 0x0C | Adjustment value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_MASS_VEH

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x02 | Signal value is valid |
| 0x03 | Signal quality and/or monitoring limited |
| 0x04 | Substitute value set in useful signal |
| 0x06 | Signal value is invalid |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x07 | Sensor not present |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_RQ_ILK_GRDT

| WERT | TEXT |
| --- | --- |
| 0x02 | Drivetrain locked |
| 0x0A | Maximum drivetrain decoupling |
| 0x0E | Drivetrain not locked |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_STEA_FTAX_EFFV

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x09 | Signal value is valid and validated, temporary state/status |
| 0x03 | Signal quality and/or monitoring limited |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0C | Substitute value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_VYAW_VEH

| WERT | TEXT |
| --- | --- |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x02 | Signal value is valid |
| 0x03 | Signal quality and/or monitoring limited |
| 0x06 | Signal value is invalid |
| 0x08 | Initialization |
| 0x09 | Signal value is valid and validated, temporary state/status |
| 0x0A | Signal value is valid, temporary state/status |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0C | Substitute value: Adjustment value set in the useful signal, temporary state/status |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_QU_V_VEH_COG

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x01 | Signal value is valid and validated and a plausibility check performed |
| 0x0A | Signal value is valid, temporary state/status |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RDUC_DOCTR_RPM_DRV_2

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | Small reduction in down control speed |
| 0x02 | Large reduction in down control speed |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RLS_RSTA_EGS

| WERT | TEXT |
| --- | --- |
| 0x00 | Racing start EGS not possible |
| 0x01 | Racing start EGS possible |
| 0x02 | Racing start not available |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_BAX_ABM_STAB

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | Do not allow torque buildup |
| 0x02 | Allow torque buildup |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_COOL_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | No request |
| 0x01 | Cooling stage 1 |
| 0x02 | Cooling stage 2 |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_FTAX_ABM_STAB

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | Do not allow torque buildup |
| 0x02 | Allow torque buildup |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_GRB_DYNS_RPM_ENG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Dynamisierung angefordert |
| 0x01 | Dynamisierung angefordert |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TB_RQ_MIL_DIAG_OBD_GRB

| WERT | TEXT |
| --- | --- |
| 0x01 | MIL OFF request |
| 0x02 | MIL ON request |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_SHPA_GRB_CHGBLC

| WERT | TEXT |
| --- | --- |
| 0x00 | No gearshift point adjustment requested |
| 0x01 | Gearshift point adjustment requested |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_SHPA_GRB_REGE_PAFI

| WERT | TEXT |
| --- | --- |
| 0x00 | No gearshift point adjustment requested |
| 0x01 | Gearshift point adjustment requested |
| 0x02 | Delayed gearshift point adjustment |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_RQ_STASS_ENGMG

| WERT | TEXT |
| --- | --- |
| 0x00 | No drive-off support requested |
| 0x01 | Emergency drive-off support requested |
| 0x02 | Standard drive-off support requested |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_SHIFT_SOL

| WERT | TEXT |
| --- | --- |
| 0x00 | Magnetventil Aus |
| 0x01 | Magnetventil An |
| 0xFF | Wert ungültig |

### TB_STATUS_PRESSURE_SW

| WERT | TEXT |
| --- | --- |
| 0x00 | Switch off |
| 0x01 | Switch on |
| 0xFF | Wert ungültig |

### TB_STAT_QU_ACLNX_COG

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialization |
| 0x02 | Signal value is valid |
| 0x0A | Signal value is valid, temporary state/status |
| 0x03 | Signal quality and/or monitoring limited |
| 0x0B | Signal quality and/or monitoring limited, temporary state/status |
| 0x0C | Substitute value set in the useful signal, temporary state/status |
| 0x06 | Signal value is invalid |
| 0x0E | Signal value is invalid, temporary state/status |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_STAT_SHIFT_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | No shift process |
| 0x01 | Shift process active |
| 0x02 | Shifting ( rotation speed control ) |
| 0x03 | Invalid |
| 0xFF | Wert ungültig |

### TB_ST_CC_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset |
| 0x01 | Set |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_DSW_DRD_VRFD

| WERT | TEXT |
| --- | --- |
| 0x00 | Door is closed |
| 0x01 | Door is open |
| 0x02 | Signal implausible |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_FN_MSA

| WERT | TEXT |
| --- | --- |
| 0x00 | MSA deactivated |
| 0x01 | MSA activated |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_GRCT

| WERT | TEXT |
| --- | --- |
| 0x00 | No malfunction |
| 0x01 | Malfunction present |
| 0x02 | Fusi Safe State Neutral |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_GRSEL_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialization |
| 0x01 | N |
| 0x02 | R |
| 0x03 | P |
| 0x04 | N Parklock fault |
| 0x05 | 1 |
| 0x06 | 2 |
| 0x07 | 3 |
| 0x08 | 4 |
| 0x09 | 5 |
| 0x0A | 6 |
| 0x0B | 7 |
| 0x0C | 8 |
| 0x0D | 9 |
| 0x0F | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_GRSEL_GRB_VRFD

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialization |
| 0x01 | N |
| 0x02 | R |
| 0x03 | P |
| 0x04 | NP |
| 0x05 | 1 |
| 0x06 | 2 |
| 0x07 | 3 |
| 0x08 | 4 |
| 0x09 | 5 |
| 0x0a | 6 |
| 0x0b | 7 |
| 0x0c | 8 |
| 0x0d | 9 |
| 0x3f | Signal_unfilled |
| 0xFF | Wert ungültig |

### TB_ST_IDC_CC_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | No flashing |
| 0x01 | Slow flashing |
| 0x02 | Rapid flashing |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_IDLG_ENG_DRV

| WERT | TEXT |
| --- | --- |
| 0x00 | Internal combustion engine in idling |
| 0x01 | Internal combustion engine not in idling |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_INFS_DRV

| WERT | TEXT |
| --- | --- |
| 0x00 | No influence |
| 0x01 | Overrun fuel cut-off active |
| 0x02 | Non-adjustable range |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_KL

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x02 | KL30 |
| 0x03 | KL30F change |
| 0x04 | KL30F on |
| 0x05 | KL30B change |
| 0x06 | KL30B On |
| 0x07 | KLR change |
| 0x08 | KLR On |
| 0x09 | KL15 change |
| 0xa | KL15 On |
| 0xb | KL50 delay |
| 0xc | KL50 change |
| 0xd | KL50 On |
| 0xe | Error |
| 0xf | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_LIM_STORQ_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | No request |
| 0x01 | Request active |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_RCOG_FSHUP_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Forced upshifting present |
| 0x01 | No forced upshifting |
| 0x02 | Forced upshifting present Compliance with maximum speed not ensured |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_RSTA_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Racing start inactive |
| 0x01 | Racing start active |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_SW_WAUP_DRV

| WERT | TEXT |
| --- | --- |
| 0x00 | Engine in warm-up |
| 0x01 | Engine at normal operating temperature |
| 0x02 | Engine overtemperature |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_TORQ_COMPT_RISE

| WERT | TEXT |
| --- | --- |
| 0x00 | Value valid |
| 0x01 | Value invalid |
| 0x02 | Value with limited validity |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_ST_TRAI

| WERT | TEXT |
| --- | --- |
| 0x00 | No trailer present |
| 0x01 | Trailer present |
| 0x03 | Signal invalid |
| 0xFF | Wert ungültig |

### TB_TORQUE_CONTROL_REQUEST

| WERT | TEXT |
| --- | --- |
| 0x00 | No torque request |
| 0x01 | Torque increase (SLOW and FAST) |
| 0x02 | Torque reduction control |
| 0x03 | Engine revolution control |
| 0x04 | Torque reduction control by relative torque |
| 0x06 | Torque increase by relative torque (only SLOW) |
| 0x07 | Preparation control for ZKP function or torque increase (only SLOW) |
| 0x08 | Torque reduction control with cylinder cut |
| 0x09 | Torque decrease(SLOW and FAST) in up shift during SLOW or FAST is sent |
| 0x0A | Torque increase by relative torque (SLOW and FAST) |
| 0x0B | Torque reduction control with cylinder cut by relative torque |
| 0x0C | Torque decrease(SLOW and FAST) by relative torque in up shift during SLOW or FAST is sent |
| 0x0F | Invalid (Only used for init value) |
| 0xFF | Wert ungültig |

### TB_TORQUE_CONVERTER_LOCKUP_CLUTCH

| WERT | TEXT |
| --- | --- |
| 0x00 | LOCKUP_OPEN |
| 0x01 | SLIP_CONTROL_LOW |
| 0x03 | LOCKUP_CLOSE_LOW |
| 0x04 | LOCKUP_CLOSE_HIGH |
| 0x08 | CHANGE TO OPEN |
| 0x09 | CHANGE TO SLIP CONTROL LOW |
| 0x0B | CHANGE TO CLOSED LOW |
| 0x0C | CHANGE TO CLOSED HIGH |
| 0x0F | INIT or INVALID |
| 0xFF | Wert ungültig |

### VERSION

| WERT | TEXT |
| --- | --- |
| 0x01 | Direktschreiben + EWS4 |
| 0x02 | Direktschreiben + EWS4 + DH-Abgleich |
| 0x03 | DH-Abgleich + EWS4 |
| 0x11 | Direktschreiben + EWS5 |
| 0x12 | Direktschreiben + EWS5 + DH-Abgleich |
| 0x22 | Direktschreiben + EWS6 + DH-Abgleich |
| 0x23 | DH-Abgleich + EWS6 |
| 0x24 | DH-Abgleich +EWS6 +ECC |
| 0xFF | Wert ungültig |
