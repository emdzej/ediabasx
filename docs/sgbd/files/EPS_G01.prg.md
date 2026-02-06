# EPS_G01.prg

## General

|  |  |
| --- | --- |
| File | EPS_G01.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 82 |
| Origin | BMW EF-413 Ludwig |
| Revision | 6.003 |
| Author | BMW EF-414 Eichinger |
| ECU Comment | Referenzstand 19-07-420 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Lenkung |  |  |
| ORIGIN | string | BMW EF-413 Ludwig |  |  |
| REVISION | string | 6.003 |  |  |
| AUTHOR | string | BMW EF-414 Eichinger |  |  |
| COMMENT | string | Referenzstand 19-07-420 |  |  |
| PACKAGE | string | 1.987 |  |  |
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

### ARG_0XA3AA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUB_ZAHNSTANGE | + | - | mm | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | Zahnstangenhub zur Bestimmung der anzufahrenden Positionen der Verfahrbewegung  |
| ZAHNSTANGENGESCHWINDIGKEIT | + | - | mm/s | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 30.0 | Soll-Zahnstangengeschwindigkeit während des Verfahrens |
| ZAHNSTANGENBESCHLEUNIGUNG | + | - | mm/s² | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 0.0 | 500.0 | Soll-Zahnstangenbeschleunigung bis zum Erreichen der Soll-Zahnstangengeschwindigkeit bzw. Soll-Zahnstangenverzögerung bis zum Erreichen des Stillstandes an einer anzufahrenden Position bzw. an der Endposition. |
| MESSBEREICH | + | - | mm | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | Zahnstangenhub bezogen auf die Geradeausfahrt-Position zur Vorgabe des Bereichs in dem jeweils das mittlere EPS-Motormoment bestimmt werden soll. |

### ARG_0XAB56_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | - | unsigned char | - | - | 16.0 | 1.0 | 0.0 | 1.0 | 5.0 | Frequenz Pendelbewegung |
| MAX_AMPLITUDE | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 15.0 | Maximale Amplitude Pendelbewegung |
| NUMBER_OF_CYCLES | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 50.0 | Anzahl Pendelbewegung |

### ARG_0XAB71_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | signed int | - | - | 45.0 | 1.0 | 0.0 | -720.0 | 720.0 | Sollwinkel Lenkrad (relativ oder absolut) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |
| ABSOLUT_EIN | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Referenz Winkel (1 = absolutes Verfahren, 0 = relatives Verfahren) |

### ARG_0XAB72_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WINKEL | + | - | ° | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkel Lenkrad (beidseitig) |
| WINKELGESCHWINDIGKEIT | + | - | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 100.0 | Winkelgeschwindigkeit Lenkrad |
| WINKELBESCHLEUNIGUNG | + | - | °/s² | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 2000.0 | Winkelbeschleunigung Lenkrad |

### ARG_0XDB5A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | - | signed int | - | - | 100.0 | 1.0 | 0.0 | -15.0 | 15.0 | Offset Lenkwinkel |

### ARG_0XF788_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FRICTION_OFFSET | + | - | - | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 1000.0 | - |

### ARG_0XFD0A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EPS_HWEL_TS_SGBM_N | HEX | high | unsigned long | - | - | - | - | - | - | - | EPS_HWEL_TS_MAJOR |
| EPS_HWEL_TS_VERSION_MAJOR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | EPS_HWEL_TS_MAJOR |
| EPS_HWEL_TS_VERSION_MINOR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | EPS_HWEL_TS_MINOR |
| EPS_HWEL_TS_VERSION_PATCH | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | EPS_HWEL_TS_PATCH |

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
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x023000 | Energiesparmode aktiv | 0 | - |
| 0x023008 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02300A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02300B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02300C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF30 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482286 | Steuergerät intern - Hardwarefehler - Register - OBD | 0 | - |
| 0x482289 | Sensor - Drehmoment - Lenkmoment - Fallback - Defekt | 0 | - |
| 0x4822A6 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x4822A7 | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x4822A8 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x4822A9 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x4822E7 | Steuergerät intern - Watchdog Ereignis | 0 | - |
| 0x4822E9 | Steuergerät intern - Softwarefehler - OBD | 0 | - |
| 0x4822EB | Fehlerverriegelung - Lenkunterstützung dauerhaft eingeschränkt | 1 | - |
| 0x4822EC | Globales Powermanagement Reduzierung Lenkunterstützung | 1 | - |
| 0x4822EF | Flashen: Datenstand entspricht Anlieferzustand | 0 | - |
| 0x4822F2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf Position ausserhalb zulässiger Bereich | 0 | - |
| 0x4822F3 | Steuergerät intern - Softwarefehler | 0 | - |
| 0x4822F4 | Steuergerät intern - Softwarefehler - Reduzierung Lenkunterstützung | 0 | - |
| 0x4822F6 | Steuergerät intern - Speicherfehler | 0 | - |
| 0x4822F8 | Steuergerät intern - Hardwarefehler - OBD | 0 | - |
| 0x4822F9 | Sensor - Rotorlage - Lenkwinkel - Software defekt | 0 | - |
| 0x4822FB | Steuergerät intern - Abschaltung Momenten-Schnittstelle aufgrund Degradation Lenkunterstützung | 0 | - |
| 0x4822FC | Sensor - Rotorlage - Lenkwinkel - Hardware defekt - Abschaltung Lenkunterstützung | 0 | - |
| 0x4822FD | Hardware defekt | 0 | - |
| 0x48238D | Ruhestrom Plausibilisierung Kl15N lokal mit Bus-Signal | 0 | - |
| 0x482394 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 1 | - |
| 0x48239C | Sensor - Lenkwinkel Index - Defekt | 0 | - |
| 0x4823C2 | Sensor - Rotorlage - Lenkwinkel - Geradeauslauf nicht gelernt | 1 | - |
| 0x4823D2 | Sensor - Rotorlage - Lenkwinkel - Hardware defekt | 0 | - |
| 0x4823EB | Ruhestrom Geringfügig erhöhter Ruhestrom | 0 | - |
| 0x4823EC | Sensor - Drehmoment - Lenkmoment - Defekt | 0 | - |
| 0x4823F4 | Spannungsversorgung - Lokale Überspannung Abschaltung Lenkunterstützung | 1 | - |
| 0x4823F9 | Steuergerät intern - Übertemperatur Reduzierung Lenkunterstützung | 1 | - |
| 0x4823FC | Spannungsversorgung - Lokale Unterspannung Reduzierung Lenkunterstützung | 1 | - |
| 0xD5041F | FLEXRAY Physikalischer Busfehler | 0 | - |
| 0xD50420 | FLEXRAY controller error | 0 | - |
| 0xD50BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD51458 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Timeout | 1 | - |
| 0xD51459 | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Checksumme | 1 | - |
| 0xD5145A | Botschaftsfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Alive | 1 | - |
| 0xD5145B | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Ungültig | 1 | - |
| 0xD5145C | Signalfehler (Offset Quadrant EPS, ID: OFFS_QUAD_EPS) - Undefiniert | 1 | - |
| 0xD514B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 | - |
| 0xD514B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 | - |
| 0xD514BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 | - |
| 0xD514BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 | - |
| 0xD514BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 | - |
| 0xD514C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 | - |
| 0xD514C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 | - |
| 0xD514C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 | - |
| 0xD514C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 | - |
| 0xD514C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Undefiniert | 1 | - |
| 0xD514FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 | - |
| 0xD51542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 | - |
| 0xD51543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 | - |
| 0xD51544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 | - |
| 0xD51548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 | - |
| 0xD51549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Undefiniert | 1 | - |
| 0xD51565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 | - |
| 0xD51600 | Botschaftsfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Timeout | 1 | - |
| 0xD5160C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xD51634 | Botschaftsfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Timeout | 1 | - |
| 0xD51645 | Signalfehler (Energie Degradation Fahrdynamik, ID: ENERG_DGR_DRDY) Ungültig | 1 | - |
| 0xD5165E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xD5169B | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Timeout | 1 | - |
| 0xD516B3 | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Timeout | 1 | - |
| 0xD516D6 | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Checksumme | 1 | - |
| 0xD516ED | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Checksumme | 1 | - |
| 0xD51738 | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Alive | 1 | - |
| 0xD5173C | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Alive | 1 | - |
| 0xD51793 | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Ungültig | 1 | - |
| 0xD51799 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 | - |
| 0xD5183A | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Undefiniert | 1 | - |
| 0xD51845 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Undefiniert | 1 | - |
| 0xD51858 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Undefiniert | 1 | - |
| 0xD5187D | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Ungültig | 1 | - |
| 0xD51896 | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Undefiniert | 1 | - |
| 0xD51966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xD51A38 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Undefiniert | 1 | - |
| 0xD51A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 | - |
| 0xD51A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 | - |
| 0xD51A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 | - |
| 0xD51C12 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Timeout | 1 | - |
| 0xD51C13 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Checksumme | 1 | - |
| 0xD51C14 | Botschaftsfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Alive | 1 | - |
| 0xD51C20 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Timeout | 1 | - |
| 0xD51C21 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Checksumme | 1 | - |
| 0xD51C22 | Botschaftsfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Alive | 1 | - |
| 0xD52C3D | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Ungültig | 1 | - |
| 0xD52C3E | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Undefiniert | 1 | - |
| 0xD52C3F | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Ungültig | 1 | - |
| 0xD52C40 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Undefiniert | 1 | - |
| 0xD52C78 | Signalfehler (Soll Anteil Lenkmoment Fahrer, ID: TAR_QTA_STRMOM_DV) - Qualifier | 1 | - |
| 0xD52C83 | Signalfehler (Soll Lenkmoment Fahrer Stellglied, ID: TAR_STMOM_DV_ACT) - Qualifier | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | MOTOR_LAEUFT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | KALTSTART_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MSA_START_VORHANDEN | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GENERATORENTLASTUNG_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2860 | USP_KALTSTART_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2861 | USP_MSA_START_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2862 | USP_MOTOR_LAEUFT | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2864 | USP_GLOBALE_BITS_VERFUEGBAR | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2873 | STAT_TEMP_AKTUATOR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4001 | DET ID | HEX | High | unsigned char | - | - | - | - |
| 0x4002 | Com State | HEX | High | unsigned char | - | - | - | - |
| 0x4003 | BswM State | HEX | High | unsigned char | - | - | - | - |
| 0x4004 | DCM State | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | FrIf State | HEX | High | unsigned char | - | - | - | - |
| 0x4006 | MEMIF State | HEX | High | unsigned char | - | - | - | - |
| 0x4007 | ECU State | HEX | High | unsigned char | - | - | - | - |
| 0x4008 | CPU Load Ave | % | High | signed long | - | 1.0 | 256.0 | 0.0 |
| 0x4009 | Overheat_Protect_Current_Lim_Motor | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400A | Overheat_Protect_Current_Lim_MOSFET | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5001 | SG_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5002 | SPANNUNG_KL_15N | V | High | unsigned char | - | 128.0 | 1000.0 | 0.0 |
| 0x5004 | ENDSTUFEN_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 80.0 |
| 0x5006 | SYSTEMZUSTAND | 0-n | High | 0xFF | TAB_SYSTEM_STATE | - | - | - |
| 0x5007 | UPTIME | ms | High | signed long | - | 1.0 | 1.0 | 2147483648.0 |
| 0x5008 | FEHLERCODE | 0-n | High | 0xFF | TAB_DUMMY | - | - | - |
| 0x500E | STELLERGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5014 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5016 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5018 | EPS_ZAHNSTANGENHUB | mm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5019 | LENKWINKELGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x501A | HANDMOMENT | Nm | High | signed char | - | 1.0 | 5.0 | 0.0 |
| 0x501B | MOTORMOMENT | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5040 | Energiesparmode | 0-n | High | 0xFF | TAB_ENERGIESPARMODE | - | - | - |
| 0xFD08 | Fault code | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xFD0B | IN_Handwheel_torque | Nm | High | signed int | - | 0.00195312 | 1.0 | 0.0 |
| 0xFD0C | OPC_Pinion_speed | °/s | High | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0xFD0D | TSM1_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD0E | TSM2_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD0F | TSS1_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD10 | TSS2_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD11 | AVL_PO_EPS_Value | mm | High | unsigned int | - | 0.04394531 | 1.0 | -1439.956 |
| 0xFD12 | IN_Motor_Turn_Counter_value | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xFD13 | IN_Motor_Mechanical_Angle_Value | ° | High | unsigned int | - | 0.01757812 | 1.0 | 0.0 |
| 0xFD14 | IN_CrossedIndex_Value | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x100080 | Torque sensor failure: TSM1 out of range | 0 | - |
| 0x100081 | Torque sensor failure: TSM2 out of range | 0 | - |
| 0x100082 | Torque sensor failure: Deviation error check | 0 | - |
| 0x100083 | Torque sensor failure:  CRC check | 0 | - |
| 0x100084 | Torque sensor failure: ID check | 0 | - |
| 0x100085 | Torque sensor failure:  Frame counter check | 0 | - |
| 0x100086 | Torque Sensor Sub:  TSM1 out of range check | 0 | - |
| 0x100087 | Torque Sensor Sub: TSM2 out of range check | 0 | - |
| 0x100088 | Torque Sensor Sub: Deviation error check | 0 | - |
| 0x100089 | Torque Sensor Sub: CRC check | 0 | - |
| 0x10008A | Torque Sensor Sub: ID check | 0 | - |
| 0x10008B | Torque Sensor Sub: Frame counter check | 0 | - |
| 0x10008C | Torque sensor manager: Error in sensor1 and sensor2 | 0 | - |
| 0x10008D | Torque sensor manager: Erorr in configuration data | 0 | - |
| 0x10008E | Torque sensor main: Communication Error counter value | 0 | - |
| 0x10008F | Torque sensor main: Protocol Error in driver | 0 | - |
| 0x100091 | Torque Sensor Sub: Communication Error - counter value | 0 | - |
| 0x100092 | Torque Sensor Sub: Protocol Error in driver | 0 | - |
| 0x100093 | Angle Fonction: Calibration Error - out of Range | 0 | - |
| 0x100095 | Angle Funktion: Calibration Error - Calibration not done | 0 | - |
| 0x100096 | Angle Funktion: Calibration Error - Index missing | 0 | - |
| 0x100097 | Motor rotor position sensor: Signal Error - Constant and abnormal value | 0 | - |
| 0x100098 | Motor rotor position sensor: Signal Error - Out of Range | 0 | - |
| 0x100099 | Temperature Sensor: Thermistors malfunktion - Out of Range | 0 | - |
| 0x10009A | Temperature Sensor: Thermistor consistency | 0 | - |
| 0x10009B | Motor: fault detected in FET driver 1 | 0 | - |
| 0x10009C | Motor: fault detected in FET driver 2 | 0 | - |
| 0x10009D | Motor: measured motor current too high | 0 | - |
| 0x10009E | Motor: Measured motor current too low | 0 | - |
| 0x10009F | Motor: terminal voltage too low or too high at startup | 0 | - |
| 0x1000A1 | PowerSupply: Battery Overvoltage | 0 | - |
| 0x1000A2 | PowerSupply: Battery Overvoltage or Overheat detected by FET driver | 0 | - |
| 0x1000A3 | Power Supply: Battery Undervoltage | 0 | - |
| 0x1000A4 | Power Supply: Local Undervoltage | 0 | - |
| 0x1000A5 | Power Supply: Local Overvoltage | 0 | - |
| 0x1000A6 | Power Supply: Global Undervoltage - intern | 0 | - |
| 0x1000A7 | Power Supply: Global Overervoltage - intern | 0 | - |
| 0x1000A8 | Power Supply: Global Underervoltage - extern | 0 | - |
| 0x1000A9 | Power Supply: Global Overvoltage - extern | 0 | - |
| 0x1000AA | CPU: Signal Error - Inconsistend voltage - FET driver disabled | 0 | - |
| 0x1000AB | CPU: Signal Error - Inconsistend voltage - Motor relay disabled | 0 | - |
| 0x1000AC | CPU: ASIC2 SCDL - out of voltage Range | 0 | - |
| 0x1000AD | CPU: Motor control - Error at Iq (motor current) | 0 | - |
| 0x1000AE | CPU: Main CPU failure - limitation value error | 0 | - |
| 0x1000AF | CPU: Motor control - Error at Vu, Vv or Vw (line voltage) | 0 | - |
| 0x1000B0 | CPU: Motor control - Error at Vq (motor voltage) | 0 | - |
| 0x1000B1 | CPU: BIST (Built In Self Test)  Error - error pattern disabled | 0 | - |
| 0x1000B2 | CPU: CPU Error - CPU check funktion failure | 0 | - |
| 0x1000B3 | CPU: ADC Error - ADC check funktion failure | 0 | - |
| 0x1000B4 | CPU: Watchdog Error - Watchdog funktion failure (ASIL D) | 0 | - |
| 0x1000B5 | SAF Funktion malfunction - Sub CPU: Communication Error - Unmatch of Motor Counter between Main - Sub ( Main CPU Monitoring) | 0 | - |
| 0x1000B6 | SAF Funktion malfunction - Sub CPU: Communication Error - Communication disabled between Main - Sub ( Main CPU Monitoring) | 0 | - |
| 0x1000B7 | SAF Funktion malfunction - Sub CPU: Communication Error - Communication disabled in CRC | 0 | - |
| 0x1000B8 | SAF Function malfunction - Sub CPU: processing of zone determination failure | 0 | - |
| 0x1000B9 | SAF Function malfunction - Sub CPU: Amplitude Signal Error | 0 | - |
| 0x1000BA | SAF Function malfunction - Sub CPU: Motor Turn Counter calculation failure | 0 | - |
| 0x1000BB | SAF Function malfunction - Sub CPU: Motor position calculation failure | 0 | - |
| 0x1000BC | SAF Function malfunction - Sub CPU: Sub CPU initial check sequence failure | 0 | - |
| 0x1000BD | SAF Function malfunction - Sub CPU: Sub CPU initial check sequence failure - clear error | 0 | - |
| 0x1000BE | SAF Function malfunction - Sub CPU: Communication Error - failure between Main and Sub CPU (Main CPU Monitoring) | 0 | - |
| 0x1000BF | SAF Function malfunction - Sub CPU: Communication Error - failure between Sub CPU and ASIC - fault injection of zone determnation | 0 | - |
| 0x1000C0 | SAF Function malfunction - Sub CPU: Communication Error - failure between Sub CPU and ASIC - fault injection of motor turn counter | 0 | - |
| 0x1000C1 | SAF Function malfunction - Sub CPU: Motor position calculation failure - out of Range | 0 | - |
| 0x1000C2 | SAF Function malfunction - Main CPU: Signal Error - Constant and abnormal value of resolver signal | 0 | - |
| 0x1000C3 | SAF Function malfunction - Main CPU: Communication or Prossesing Error - failure between Sub CPU and ASIC | 0 | - |
| 0x1000C4 | SAF Function malfunction - Main CPU: Comparison RAM data failure - data move to Sub CPU failure | 0 | - |
| 0x1000C5 | SAF Function malfunction - Main CPU: Undervoltage on Sub CPU or Watchdog | 0 | - |
| 0x1000C6 | SAF Function malfunction - Main CPU: Communication Error (Sub CPU Monitoring) | 0 | - |
| 0x1000C7 | SAF Function malfunction - Main CPU: Communication Error - Motor turn counter - out of range | 0 | - |
| 0x1000C8 | SAF Function malfunction - Main CPU: Signal Error - Wake up notification signal failure 1 | 0 | - |
| 0x1000C9 | SAF Function malfunction - Main CPU: Communitcation Error between Main and Sub (Sub CPU Monitoring) | 0 | - |
| 0x1000CF | State machine input consistency: Plausibility check HW_KL15N and PWF failure - HW_KL15N turn off | 0 | - |
| 0x1000D0 | Flash Data: Delivery status is flashed | 0 | - |
| 0x1000D1 | SSD/JWILL : substitue strategy switch | 0 | - |
| 0x1000D2 | SSD/JWILL : sporadic errors are detected in steering - no startup of assist | 0 | - |
| 0x1000D3 | Motor: Target voltage on d-axis too high | 0 | - |
| 0x1000D4 | Motor: deviation at motor terminal voltage | 0 | - |
| 0x1000D5 | SAF Function malfunction - Main CPU: Monitoring for Communication or Prozessing failure between Sub CPU and ASIC | 0 | - |
| 0x1000D6 | State machine input consistency: Plausibility check HW_KL15N and PWF failure - HW_KL15N turn on | 0 | - |
| 0x1000D7 | SAF Function malfunction - Main CPU: Signal Error - Wake up notification signal failure 2 | 0 | - |
| 0x1000D8 | Index sensor: Index Lost - No received from index sensor - no signal | 0 | - |
| 0x1000D9 | Index sensor: Index information out of Range - Out of Range | 0 | - |
| 0x1000DA | Index sensor: Power Supply error - Overvoltage or Undervoltage at Index Sensor | 0 | - |
| 0x1000DC | CPU: FET Driver power supply Error - Overvoltage | 0 | - |
| 0x1000DD | CPU - Main CPU: Error - Motor position | 0 | - |
| 0x1000DE | CPU: Offset voltage error - Out of Range | 0 | - |
| 0x1000DF | CPU: Register Programm Error - Initial check error | 0 | - |
| 0x1000E0 | CPU: Lower voltage indicator triggered - shut down FET driver | 0 | - |
| 0x1000E1 | CPU: Memory Protection Unit - Error | 0 | - |
| 0x1000E2 | CPU: Memory ECC error | 0 | - |
| 0x1000E3 | CPU - Main CPU: Error Motor Turn Counter | 0 | - |
| 0x1000E4 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert - entprellt | 1 | - |
| 0x1000E5 | Motor - rotor position sensor - Sin and Cos consistency error under 2PD control | 0 | - |
| 0x1000E6 | Motor - Over current fault of U phase | 0 | - |
| 0x1000E7 | Motor - Over current  fault of V phase | 0 | - |
| 0x1000E8 | Motor - Over current fault of W phase | 0 | - |
| 0x1000E9 | Motor - Current sensor malfunction under normal or RSB control | 0 | - |
| 0x1000EA | Motor - Current sensor malfunction under 2PD control | 0 | - |
| 0x1000EB | Motor - Current deviation fault of U phase | 0 | - |
| 0x1000EC | Motor - Current deviation fault of V phase | 0 | - |
| 0x1000ED | Motor - Current deviation fault of W phase | 0 | - |
| 0x1000EE | Motor - Current deviation fault of U phase under 2PD control | 0 | - |
| 0x1000EF | Motor - Current deviation fault of V phase under 2PD control | 0 | - |
| 0x1000F0 | Motor - Current deviation fault of W phase under 2PD control | 0 | - |
| 0x1000F1 | Motor - 2PD control current fault | 0 | - |
| 0x1000F2 | Motor - Current deviation fault of U phase under RSB control | 0 | - |
| 0x1000F3 | Motor - Current deviation fault of V phase under RSB control | 0 | - |
| 0x1000F4 | Motor - Current deviation fault of W phase under RSB control | 0 | - |
| 0x1000F5 | Motor - NVM malfunction for adjustment of motor current | 0 | - |
| 0x1000F6 | Global Powermanagement - Reduction of power steering | 1 | - |
| 0x1000F7 | Notification of overtemperature - degraded assistance | 1 | - |
| 0x1000F8 | Power hold signal high fixed | 0 | - |
| 0x1000F9 | Steuergerät intern - Abschaltung Momenten-Schnittstelle aufgrund Degradation Lenkunterstützung | 0 | - |
| 0x1000FA | E2EPW_Read pointer error | 0 | - |
| 0x1000FB | E2EPW_Read other error | 0 | - |
| 0x48227F | Steuergerät intern - Security Diagnose Request in verriegeltem Zustand erhalten | 0 | - |
| 0x482451 | Sensor - Rotorlage - Lenkwinkel - Verlust Multiturnwert | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | MOTOR_LAEUFT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | KALTSTART_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MSA_START_VORHANDEN | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GENERATORENTLASTUNG_AKTIV | 0/1 | High | 0x08 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2860 | USP_KALTSTART_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2861 | USP_MSA_START_VORHANDEN | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2862 | USP_MOTOR_LAEUFT | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2864 | USP_GLOBALE_BITS_VERFUEGBAR | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2873 | STAT_TEMP_AKTUATOR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x29FF | TESTER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x4001 | DET ID | HEX | High | unsigned char | - | - | - | - |
| 0x4002 | Com State | HEX | High | unsigned char | - | - | - | - |
| 0x4003 | BswM State | HEX | High | unsigned char | - | - | - | - |
| 0x4004 | DCM State | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | FrIf State | HEX | High | unsigned char | - | - | - | - |
| 0x4006 | MEMIF State | HEX | High | unsigned char | - | - | - | - |
| 0x4007 | ECU State | HEX | High | unsigned char | - | - | - | - |
| 0x4008 | CPU Load Ave | % | High | signed long | - | 1.0 | 256.0 | 0.0 |
| 0x4009 | Overheat_Protect_Current_Lim_Motor | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400A | Overheat_Protect_Current_Lim_MOSFET | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5001 | SG_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5002 | SPANNUNG_KL_15N | V | High | unsigned char | - | 128.0 | 1000.0 | 0.0 |
| 0x5004 | ENDSTUFEN_TEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 80.0 |
| 0x5006 | SYSTEMZUSTAND | 0-n | High | 0xFF | TAB_SYSTEM_STATE | - | - | - |
| 0x5007 | UPTIME | ms | High | signed long | - | 1.0 | 1.0 | 2147483648.0 |
| 0x5008 | FEHLERCODE | 0-n | High | 0xFF | TAB_DUMMY | - | - | - |
| 0x500E | STELLERGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5014 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5016 | FAHRERLENKWINKEL | ° | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x5018 | EPS_ZAHNSTANGENHUB | mm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5019 | LENKWINKELGESCHWINDIGKEIT | °/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x501A | HANDMOMENT | Nm | High | signed char | - | 1.0 | 5.0 | 0.0 |
| 0x501B | MOTORMOMENT | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5040 | Energiesparmode | 0-n | High | 0xFF | TAB_ENERGIESPARMODE | - | - | - |
| 0xFD08 | Fault code | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xFD0B | IN_Handwheel_torque | Nm | High | signed int | - | 0.00195312 | 1.0 | 0.0 |
| 0xFD0C | OPC_Pinion_speed | °/s | High | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0xFD0D | TSM1_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD0E | TSM2_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD0F | TSS1_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD10 | TSS2_value | Nm | High | signed int | - | 0.00478515 | 1.0 | -19.595214 |
| 0xFD11 | AVL_PO_EPS_Value | mm | High | unsigned int | - | 0.04394531 | 1.0 | -1439.956 |
| 0xFD12 | IN_Motor_Turn_Counter_value | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0xFD13 | IN_Motor_Mechanical_Angle_Value | ° | High | unsigned int | - | 0.01757812 | 1.0 | 0.0 |
| 0xFD14 | IN_CrossedIndex_Value | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x5f | garageSession |
| 0x61 | jtektSession |
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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XA3AA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_DIAGNOSE_REIBUNG_AKTIV_NR | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE_EPS | - | - | - | Ausführungsstatus |
| STAT_MITTELWERT_MOTORMOMENT_LINKS_NACH_RECHTS_WERT | - | - | + | Nm | high | signed int | - | - | 1.0 | 3000.0 | 0.0 | Arithmetisches Mittel des EPS-Motormoments beim ersten Durchfahren des Messbereichs |
| STAT_MITTELWERT_MOTORMOMENT_RECHTS_NACH_LINKS_WERT | - | - | + | Nm | high | signed int | - | - | 1.0 | 3000.0 | 0.0 | Arithmetisches Mittel des EPS-Motormoments beim zweiten Durchfahren des Messbereichs |
| STAT_ROUTINE | + | + | - | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XAB56_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_PENDELN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_LENKRADWINKEL_WERT | - | - | + | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Lenkradwinkel |
| STAT_SENSOR_ZUSTAND_NR | - | - | + | 0-n | - | unsigned char | - | TAB_EPS_SENSOR_ZUSTAND | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XAB71_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_VERFAHREN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB72_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE_EPS | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XD6A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich  1, (< Abschaltschwelle - 10 °C), Zähltakt 60s |
| STAT_ZAEHLER_MIDDLE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich 2, (>= Temp1 UND <Abschaltschwelle °C), Zähltakt 60s |
| STAT_ZAEHLER_HIGH_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Temperaturbereich 3, (>= Abschaltschwelle ), Zähltakt 60s |
| STAT_TEMP_MAX_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Maximaler Temperaturwert, Messtakt 100ms |

### RES_0XD6A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_USP1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 1, (< 6V), Messtakt 1ms |
| STAT_ZAEHLER_USP2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 2, (>=6 V UND < 6,8V), Messtakt 1ms |
| STAT_ZAEHLER_USP3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 3, (>= 6,8V UND < 8V), Messtakt 1ms |
| STAT_ZAEHLER_USP4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Spannungsbereich 4, (>=8V), Messtakt 1ms |

### RES_0XD6A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPG_KLASSE_U1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | < 6,8V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 6,8V UND <9V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >=9V UND < 11V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 11V UND < 18V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 18V UND < 27V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_KLASSE_U6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | >= 27V, Messtakt: halbe Filterzeit ms |
| STAT_SPG_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung unterster Wert, Messtakt: halbe Filterzeit ms |
| STAT_SPG_MAX_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannung oberster Wert, Messtakt: halbe Filterzeit ms |

### RES_0XD6A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_KLASSE_I1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > 0,5*Imax UND <= 0,75*Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_KLASSE_I2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > 0,75*Imax UND <= Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_KLASSE_I3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | > Imax, Messtakt: halbe Filterzeit ms |
| STAT_STROM_MIN_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | -100.0 | Strom unterster Wert (Rückspeisung), Messtakt: 10 ms |
| STAT_STROM_MAX_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom oberster Wert, Messtakt: 10 ms |

### RES_0XD6AB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_AGB_V1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler  stillstandsnaher Bereich                             (0 - 5Km/h) |
| STAT_ZAEHLER_AGB_V2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler  unterer Geschwindigkeitsbereich         (>5 - <=50Km/h) |
| STAT_ZAEHLER_AGB_V3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler  oberer Geschwindigkeitsbereich           (>50 Km/h) |

### RES_0XD6AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LINKS_KURZ_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, kleiner als 100ms |
| STAT_ZAEHLER_LINKS_MITTEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, 101-1000ms |
| STAT_ZAEHLER_LINKS_LANG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | links, größer gleich 1 Sekunde |
| STAT_ZAEHLER_RECHTS_KURZ_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, kleiner als 100ms |
| STAT_ZAEHLER_RECHTS_MITTEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, 101-1000ms |
| STAT_ZAEHLER_RECHTS_LANG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | rechts, größer gleich 1 Sekunde |

### RES_0XD6AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAHLER_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler untere Lenkleistung (0  -  600W) (P1, t5) |
| STAT_ZAHLER_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler mittlere Lenkleistung (601  -  900W) (P2, t5) |
| STAT_ZAHLER_EXTENDED_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler gehobene Lenkleistung (901W - 1150W)   (P3,  t5) |
| STAT_ZAHLER_UPPER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler obere Lenkleistung (1151W - 1400W) (P4, t5) |
| STAT_ZAHLER_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler max Lenkleistung (mehr als 1401W) (P5, t5) |

### RES_0XD6B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler untere Lenkgeschwindigkeitsschwelle (0 - 300°/s)  |
| STAT_ZAEHLER_MIDDLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler mittlere Lenkgeschwindigkeitsschwelle (301 - 600°/s)  |
| STAT_ZAEHLER_HIGH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler obere Lenkgeschwindigkeitsschwelle (mehr als 601 °/s) |

### RES_0XD7FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SFE_INPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des über den Bus angeforderten Lenkgefühls-Modus.  SFE -Steering Feel |
| STAT_KENNLINIE | 0-n | high | unsigned char | - | TAB_KENNLINIE | - | - | - | - |

### RES_0XDB3C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORGABE_MAXSTROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal zulässigen DC-Last-Strom am Stecker des SGs (Signal HSR: Maximal_Strom_Vorgabe_Hinterachse_Lenkung; Signal EPS: Maximal_Strom_Vorgabe_EPS) |
| STAT_FEHLERSPEICHERSPERRE | 0-n | high | unsigned char | - | TAB_FEHLERSPEICHERSPERRE | - | - | - | Info zur vorgabe Fehlerspeichersperre (Signal: Status_Sperre_Fehlerspeicher_FZM) |
| STAT_STATUS_ENERGIE | 0-n | high | unsigned char | - | TAB_STATUS_ENERGIE | - | - | - | Status Energie-Info vom FZM (Signal: Status_Energie_FZM) |
| STAT_FEHLERSPEICHER_BORDNETZ_SPANNUNG_WERT | HEX | high | signed char | - | - | - | - | - | Info zu Spannungsschwellen für das Fehlerspeicherhandling (Signal: Steuerung_Fehlerspeicher_Bordnetz_Spannung) |
| STAT_ENTLASTUNG_GENERATOR | 0-n | high | unsigned char | - | TAB_ENTLASTUNG_GENERATOR | - | - | - | Zustand der Generator Entlastungsfunktion (Signal: Status_Entlastung_Generator) |
| STAT_SPANNUNGSEINBRUCH_BORDNETZ | 0-n | high | unsigned char | - | TAB_SPANNUNSEINBRUCH_BORDNETZ | - | - | - | Ankündigung des Startspannungseinbruch vor dem Start und anzeigen während dem Start. (Signal: Status_Spannungseinbruch) |
| STAT_STEUERUNG_BASIS_TEILNETZE | 0-n | high | unsigned char | - | TAB_STEUERUNG_BASIS_TEILNETZE | - | - | - | Gibt an, ob im aktuellen Fahrzeugzustand (PWF)Kommunikation benötigt wird.(Signal: Steuerung_Basis_Teilnetze) |
| STAT_ZUSTAND_FAHRZEUG | 0-n | high | unsigned char | - | TAB_ZUSTAND_FAHRZEUG_1 | - | - | - | Beschreibung des Fahrzeugzustands (PWF) aus Kundensicht(Signal: Status_Zustand_Fahrzeug ) |
| STAT_STEUERUNG_FUNKTIONALE_TEILNETZE_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt an, welche funktionalen Teilnetze aktiv sind. (Signal: Steuerung_Funktionale_Teilnetze) |
| STAT_KL15N | 0/1 | high | unsigned char | - | - | - | - | - | Status Hardware Kl15N; 0 - Aus, 1 - Ein |
| STAT_UBAT_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | An Klemme 30 gemessene Versorgungsspannung |

### RES_0XDB57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RITZELWINKEL_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Ritzelwinkel |
| STAT_RITZELWINKELGESCHWINDIGKEIT_WERT | °/s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ritzelwinkel Winkelgeschwindigkeit |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | unsigned char | - | TAB_EPS_SENSOR_ZUSTAND | - | - | - | Zustand Sensor Ritzelwinkelsensor |

### RES_0XDB59_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDANSCHLAG_LINKS_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAG_RECHTS_WERT | ° | - | signed long | - | - | 1.0 | 100.0 | 0.0 | Endanschlag bezogen offsetbehafteten Mitte (Lenkradmittenstellung) |
| STAT_ENDANSCHLAEGE_GELERNT_NR | 0-n | - | unsigned char | - | TAB_EPS_ENDANSCHLAEGE_GELERNT | - | - | - | Status Endanschlaege und Offset |

### RES_0XDB5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LW_OFFSET_WERT | ° | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Offset Lenkwinkel |

### RES_0XDB6E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUB_ZAHNSTANGE_WERT | mm | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Zahnstangenhub |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | unsigned char | - | TAB_EPS_SENSOR_ZUSTAND | - | - | - | Zustand Sensor |
| STAT_GESCHWINDIGKEIT_ZAHNSTANGE_WERT | m/s | - | signed int | - | - | 1.0 | 10000.0 | 0.0 | Zahnstangengeschwindigkeit |

### RES_0XDB99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_WERT | Nm | - | signed int | - | - | 1.0 | 128.0 | 0.0 | Aktuelles Moment |
| STAT_SENSOR_ZUSTAND_NR | 0-n | - | signed char | - | TAB_EPS_MOMENTENSENSOR | - | - | - | Zustand Sensor Lenkmoment |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XF783_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_N0_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N1_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N2_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N3_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N4_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N5_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N6_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N7_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N8_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N9_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N10_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_N11_INDEX_CALIBRATION_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ALPHA0_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA1_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA2_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA3_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA4_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA5_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA6_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA7_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA8_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA9_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA10_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ALPHA11_INDEX_CALIBRATION_WERT | - | - | + | ° | high | unsigned int | - | - | 0.125 | 1.0 | 0.0 | - |
| STAT_ENDLOCK_POSITION_INDEX_CALIBRATION_WERT | - | - | + | mm | high | unsigned int | - | - | 0.015625 | 1.0 | 0.0 | - |
| STAT_CAL_COMPLETED_INDEX_CALIBRATION | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | - |
| STAT_CAL_INTERRUPTED_INDEX_CALIBRATION | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | - |

### RES_0XF785_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_TSM_OFFSET_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | EPS_TSM_OFFSET |
| STAT_EPS_TSS_OFFSET_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | EPS_TSS_OFFSET |
| STAT_INHIBITION_BYTE_DATA | + | - | + | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Inhibition condition Byte |

### RES_0XF787_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRICTION_OFFSET_WERT | - | - | + | - | high | unsigned int | - | - | 0.5 | 1.0 | 0.0 | - |
| STAT_EPS_FRICTION_STATUS_DATA | - | - | + | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XF788_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRICTION_OFFSET_WERT | - | - | + | - | high | unsigned int | - | - | 0.5 | 1.0 | 0.0 | - |

### RES_0XF789_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T0_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T1_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T2_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T3_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T4_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T5_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T6_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T7_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T8_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T9_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |
| STAT_T10_TORQUE_WERT | - | - | + | Nm | high | signed int | - | - | 0.00195312 | 1.0 | 0.0 | - |

### RES_0XFD09_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EPS_HWEL_TS_SGBM_N_WERT | HEX | high | unsigned long | - | - | - | - | - | STAT_EPS_HWEL_TS_MAJOR |
| STAT_EPS_HWEL_TS_VERSION_MAJOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_EPS_HWEL_TS_MAJOR |
| STAT_EPS_HWEL_TS_VERSION_MINOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_EPS_HWEL_TS_MINOR |
| STAT_EPS_HWEL_TS_VERSION_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_EPS_HWEL_TS_PATCH |

### RES_0XFD15_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPORADICASSISTOFFCOUNTER | 0-n | high | unsigned char | - | - | - | - | - | - |
| STAT_SPORADICASSISTOFFCOUNTER_INCR | 0-n | high | unsigned char | - | - | - | - | - | - |
| STAT_SPORADICASSISTOFFCOUNTER_HEAT_INCR | 0-n | high | unsigned char | - | - | - | - | - | - |
| STAT_SPORADICASSISTOFFCOUNTER_DECR | 0-n | high | unsigned char | - | - | - | - | - | - |
| STAT_SPORADICASSISTOFFCOUNTER_THRE | 0-n | high | unsigned char | - | - | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| STEUERN_EPS_PULLDRIFT_OFFSET_RESET | 0xA2BB | - | Reset EPS Pull-Drift Langzeit-Offset  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_DIAGNOSE_REIBUNG | 0xA3AA | - | Starten, Stoppen und Status Diagnoseroutine - Reibung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA3AA_R | RES_0xA3AA_R |
| EPS_PENDELN | 0xAB56 | - | Starten, Stoppen und Status EPS Pendelroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB56_R | RES_0xAB56_R |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG_RESET | 0xAB69 | - | Reset Offset Lenkwinkel | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INITIALISIERUNG_SERVICE | 0xAB6C | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB6C_R |
| EPS_VERFAHREN | 0xAB71 | - | Starten, Stoppen und Status Lenkverfahrroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB71_R | RES_0xAB71_R |
| EPS_INITIALISIERUNG_WERK | 0xAB72 | - | Starten, Stoppen und Status Initialisierungsroutine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB72_R | RES_0xAB72_R |
| STATUS_TEMPERATUR_MW | 0xD6A6 | - | Statistikwerte der Steuergeräte Temperatur (Endstufe/Leistungsteil) (Abschaltschwelle EPS: 105, HSR: 95°, ASA: 85°) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A6_D |
| STATUS_USP_MSA_MW | 0xD6A7 | - | Unterspannung während MSA-Start MSA-Minimalspannung: Counter darf nur bei aktivem MSA-Start zählen; Es ist nur ein Zählvorgang für jeden MSA-Start zulässig, der niedrigste Wert wird gezählt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A7_D |
| STATUS_SPANNUNG_MW | 0xD6A8 | - | Statistikzähler Spannung Eingangsgröße: gefiltete Spannung (100 ms Filterzeit um Kurzzeitpeaks herauszufiltern) außerhalb Motorstart (Kalt- und Warmstart) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A8_D |
| STATUS_STROM_MW | 0xD6A9 | - | Statistikzähler Strom | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6A9_D |
| STATUS_MLW_INIT_MW | 0xD6AA | STAT_ZAEHLER_MLW_INIT_WERT | Zähler der Initialisierungsläufe im Kundenbetrieb (keine Werks/HO-Inbetriebnahme) | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_AGB_DEGRADATION_MW | 0xD6AB | - | Anzahl Aktuator-Geschwindigkeits-Begrenzungen Degradationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AB_D |
| STATUS_ZAEHLER_LENKANSCHLAG_MW | 0xD6AE | - | Zähler Lenkungs-Endanschläge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AE_D |
| STATUS_ZAEHLER_LENKLEISTUNG_MW | 0xD6AF | - | Lenkleistungsbedarf (jeweils Mittelwert über 100ms) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AF_D |
| EPS_FEHLERVERRIEGELUNG_FEHLERZAEHLER | 0xD6B1 | STAT_ANZAHL_FEHLERVERRIEGELUNGEN_WERT | Liefert die Anzahl der Fehlerverriegelungen zurück | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ZAEHLER_LENKGESCHWINDIGKEIT_MW | 0xD6B2 | - | Zahnstangenhub pro Zeit Zähltakt 60s | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B2_D |
| STATUS_LESEN_BEDATUNGSKENNLINIE | 0xD7FF | - | Auslesen aktive Variante der EPS-Bedatungskennlinien | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7FF_D |
| EPS_GESAMTZAHNSTANGENHUB | 0xDAF2 | STAT_HUB_ZAHNSTANGE_GESAMT_WERT | Offsetkompensierter Zahnstangenhub | mm | - | High | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_FZG_BORDNETZ | 0xDB3C | - | Status Fahrzeug und Bordnetz | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB3C_D |
| EPS_RITZELWINKELSENSOR | 0xDB57 | - | Auslesen Daten EPS Ritzelwinkel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB57_D |
| EPS_ENDANSCHLAEGE_WINKEL | 0xDB59 | - | Auslesen Daten EPS Software-Endanschläge winkelbezogen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB59_D |
| EPS_LENKWINKELSENSOR_KALIBRIERUNG | 0xDB5A | - | Auslesen bzw. Vorgeben Offset Lenkwinkel  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDB5A_D | RES_0xDB5A_D |
| EPS_ZAHNSTANGENHUB | 0xDB6E | - | Auslesen Daten EPS Zahnstangenhub | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6E_D |
| EPS_MOMENTENSENSOR | 0xDB99 | - | Auslesen Daten Sensor Lenkmoment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB99_D |
| EPS_GESAMTRITZELWINKEL | 0xDB9A | STAT_GESAMTRITZELWINKEL_WERT | Gesamtritzelwinkel | ° | - | - | signed int | - | 1.0 | 32.0 | 0.0 | - | 22 | - | - |
| READ_RESOLVER_GAIN_CALIB_STATE | 0xE2FB | STAT_ERGEBNIS_RESOLVER_GAIN_CALIB_STATE | Argument beschreibt ob der Korrekturfaktor angewendet wird.  | 0-n | - | High | unsigned char | TAB_KORREKTUR_ROTORPOSITION | - | - | - | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| CPU_LOAD_RESET | 0xF782 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_INDEX_CALIBRATION | 0xF783 | - | EPS calibration of Index, for JTEKT use.  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF783_R |
| EPS_MODE_BNP_ASSIST_LAW | 0xF784 | - | EPS  'Mode BNP assistance low' , for JTEKT use. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_TS_AUTOCALIBRATION | 0xF785 | - | EPS Torque Sensor Autocalibration, for JTEKT use. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF785_R |
| STEUERN_EPS_INDEX_CALIBRATION_RESET | 0xF786 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EPS_FRICTION | 0xF787 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF787_R |
| EPS_FRICTION_MEMORIZATION | 0xF788 | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF788_R | RES_0xF788_R |
| EPS_TORQUE | 0xF789 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF789_R |
| EPS_MODE_LITTLE_JWILL | 0xF78A | - | - | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STAT_AVERAGE_CPU_LOAD | 0xFD04 | STAT_AVERAGE_CPU_LOAD_WERT | Average CPU load value. | % | - | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| STAT_MAXIMUM_CPU_LOAD | 0xFD05 | STAT_MAXIMUM_CPU_LOAD_WERT | Maximum CPU Load value. | % | - | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| STAT_EPS_HWEL_TS | 0xFD09 | - | This job shall return the SGBM-ID of the HWEL for Torque Sensor The data shall be read out of the following positive response: (byte 4) STAT_EPS_HWEL_TS_MAJOR (byte 5) STAT_EPS_HWEL_TS_MINOR (byte 6) STAT_EPS_HWEL_TS_PATCH  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD09_D |
| EPS_HWEL_TS | 0xFD0A | - | This job write the SGBM-ID of the HWEL for Torque Sensor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD0A_D | - |
| READ_SPORADIC_ERROR_COUNTER | 0xFD15 | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD15_D |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_DUMMY

| WERT | TEXT |
| --- | --- |
| 0 | Dummy1 |
| 1 | Dummy2 |

### TAB_ENERGIESPARMODE

| WERT | TEXT |
| --- | --- |
| 0 | Energiesparmode nicht gesetzt |
| 1 | Energiesparmode gesetzt |
| 0xFF | Wert ungültig |

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
| 0xFF | Wert ungültig |

### TAB_EPS_ENDANSCHLAEGE_GELERNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht gelernt |
| 1 | gelernt |
| 2 | gelernt in Fahrt |
| 3 | nicht referenzierbar |
| 0xFF | ungültig |

### TAB_EPS_MOMENTENSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK |

### TAB_EPS_SENSOR_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Geradeausfahrt-Position nicht bekannt und Lenkgetriebemitte nicht gefunden |
| 0x01 | Geradeausfahrt-Position nicht bekannt,  Lenkgetriebemitte gefunden |
| 0x02 | Geradeausfahrt-Position bekannt, Lenkgetriebemitte nicht gefunden |
| 0x03 | Geradeausfahrt-Position bekannt und Lenkgetriebemitte gefunden |
| 0x04 | Kalibrierung EPS-Position abgeschlossen, Multiturnverlust liegt vor |
| 0xFF | Wert ungültig |

### TAB_FEHLERSPEICHERSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Fehlerspeicherfreigabe |
| 1 | Fehlerspeichersperre |
| 2 | Reserve |
| 3 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_KENNLINIE

| WERT | TEXT |
| --- | --- |
| 0 | Kennlinie 0 |
| 1 | Kennlinie 1 |
| 2 | Kennlinie 2 |
| 3 | Kennlinie 3 |
| 4 | Kennlinie 4 |
| 5 | Kennlinie 5 |
| 6 | Kennlinie 6 |
| 7 | Kennlinie 7 |
| 8 | Kennlinie 8 |
| 9 | Kennlinie 9 |
| 10 | Kennlinie 10 |
| 11 | Kennlinie 11 |
| 12 | Kennlinie 12 |
| 13 | Kennlinie 13 |
| 14 | Kennlinie 14 |
| 15 | Kennlinie 15 |
| 16 | Kennlinie 16 |
| 17 | Kennlinie 17 |
| 18 | Kennlinie 18 |
| 19 | Kennlinie 19 |
| 20 | Kennlinie 20 |
| 21 | Kennlinie 21 |
| 22 | Kennlinie 22 |
| 23 | Kennlinie 23 |
| 24 | Kennlinie 24 |
| 25 | Kennlinie 25 |
| 26 | Kennlinie 26 |
| 27 | Kennlinie 27 |
| 28 | Kennlinie 28 |
| 29 | Kennlinie 29 |
| 30 | Kennlinie 30 |
| 31 | Kennlinie 31 |
| 32 | Kennlinie 32 |
| 33 | Kennlinie 33 |
| 34 | Kennlinie 34 |
| 35 | Kennlinie 35 |
| 36 | Kennlinie 36 |
| 37 | Kennlinie 37 |
| 38 | Kennlinie 38 |
| 39 | Kennlinie 39 |
| 40 | Kennlinie 40 |
| 41 | Kennlinie 41 |
| 42 | Kennlinie 42 |
| 43 | Kennlinie 43 |
| 44 | Kennlinie 44 |
| 45 | Kennlinie 45 |
| 46 | Kennlinie 46 |
| 47 | Kennlinie 47 |
| 48 | Kennlinie 48 |
| 49 | Kennlinie 49 |
| 50 | Kennlinie 50 |
| 51 | Kennlinie 51 |
| 52 | Kennlinie 52 |
| 53 | Kennlinie 53 |
| 54 | Kennlinie 54 |
| 55 | Kennlinie 55 |
| 56 | Kennlinie 56 |
| 57 | Kennlinie 57 |
| 58 | Kennlinie 58 |
| 59 | Kennlinie 59 |
| 60 | Kennlinie 60 |
| 61 | Kennlinie 61 |
| 62 | Kennlinie 62 |
| 63 | Kennlinie 63 |
| 64 | Kennlinie 64 |
| 65 | Kennlinie 65 |
| 66 | Kennlinie 66 |
| 67 | Kennlinie 67 |
| 68 | Kennlinie 68 |
| 69 | Kennlinie 69 |
| 70 | Kennlinie 70 |
| 71 | Kennlinie 71 |
| 72 | Kennlinie 72 |
| 73 | Kennlinie 73 |
| 74 | Kennlinie 74 |
| 75 | Kennlinie 75 |
| 76 | Kennlinie 76 |
| 77 | Kennlinie 77 |
| 78 | Kennlinie 78 |
| 79 | Kennlinie 79 |
| 80 | Kennlinie 80 |
| 81 | Kennlinie 81 |
| 82 | Kennlinie 82 |
| 83 | Kennlinie 83 |
| 84 | Kennlinie 84 |
| 85 | Kennlinie 85 |
| 86 | Kennlinie 86 |
| 87 | Kennlinie 87 |
| 88 | Kennlinie 88 |
| 89 | Kennlinie 89 |
| 90 | Kennlinie 90 |
| 91 | Kennlinie 91 |
| 92 | Kennlinie 92 |
| 93 | Kennlinie 93 |
| 94 | Kennlinie 94 |
| 95 | Kennlinie 95 |
| 96 | Kennlinie 96 |
| 97 | Kennlinie 97 |
| 98 | Kennlinie 98 |
| 99 | Kennlinie 99 |
| 100 | Kennlinie 100 |
| 101 | Kennlinie 101 |
| 102 | Kennlinie 102 |
| 103 | Kennlinie 103 |
| 104 | Kennlinie 104 |
| 105 | Kennlinie 105 |
| 106 | Kennlinie 106 |
| 107 | Kennlinie 107 |
| 108 | Kennlinie 108 |
| 109 | Kennlinie 109 |
| 110 | Kennlinie 110 |
| 111 | Kennlinie 111 |
| 112 | Kennlinie 112 |
| 113 | Kennlinie 113 |
| 114 | Kennlinie 114 |
| 115 | Kennlinie 115 |
| 116 | Kennlinie 116 |
| 117 | Kennlinie 117 |
| 118 | Kennlinie 118 |
| 119 | Kennlinie 119 |
| 120 | Kennlinie 120 |
| 121 | Kennlinie 121 |
| 122 | Kennlinie 122 |
| 123 | Kennlinie 123 |
| 124 | Kennlinie 124 |
| 125 | Kennlinie 125 |
| 126 | Kennlinie 126 |
| 127 | Kennlinie 127 |
| 128 | Kennlinie 128 |
| 129 | Kennlinie 129 |
| 130 | Kennlinie 130 |
| 131 | Kennlinie 131 |
| 132 | Kennlinie 132 |
| 133 | Kennlinie 133 |
| 134 | Kennlinie 134 |
| 135 | Kennlinie 135 |
| 136 | Kennlinie 136 |
| 137 | Kennlinie 137 |
| 138 | Kennlinie 138 |
| 139 | Kennlinie 139 |
| 140 | Kennlinie 140 |
| 141 | Kennlinie 141 |
| 142 | Kennlinie 142 |
| 143 | Kennlinie 143 |
| 144 | Kennlinie 144 |
| 145 | Kennlinie 145 |
| 146 | Kennlinie 146 |
| 147 | Kennlinie 147 |
| 148 | Kennlinie 148 |
| 149 | Kennlinie 149 |
| 150 | Kennlinie 150 |
| 151 | Kennlinie 151 |
| 152 | Kennlinie 152 |
| 153 | Kennlinie 153 |
| 154 | Kennlinie 154 |
| 155 | Kennlinie 155 |
| 156 | Kennlinie 156 |
| 157 | Kennlinie 157 |
| 158 | Kennlinie 158 |
| 159 | Kennlinie 159 |
| 160 | Kennlinie 160 |
| 161 | Kennlinie 161 |
| 162 | Kennlinie 162 |
| 163 | Kennlinie 163 |
| 164 | Kennlinie 164 |
| 165 | Kennlinie 165 |
| 166 | Kennlinie 166 |
| 167 | Kennlinie 167 |
| 168 | Kennlinie 168 |
| 169 | Kennlinie 169 |
| 170 | Kennlinie 170 |
| 171 | Kennlinie 171 |
| 172 | Kennlinie 172 |
| 173 | Kennlinie 173 |
| 174 | Kennlinie 174 |
| 175 | Kennlinie 175 |
| 176 | Kennlinie 176 |
| 177 | Kennlinie 177 |
| 178 | Kennlinie 178 |
| 179 | Kennlinie 179 |
| 180 | Kennlinie 180 |
| 181 | Kennlinie 181 |
| 182 | Kennlinie 182 |
| 183 | Kennlinie 183 |
| 184 | Kennlinie 184 |
| 185 | Kennlinie 185 |
| 186 | Kennlinie 186 |
| 187 | Kennlinie 187 |
| 188 | Kennlinie 188 |
| 189 | Kennlinie 189 |
| 190 | Kennlinie 190 |
| 191 | Kennlinie 191 |
| 192 | Kennlinie 192 |
| 193 | Kennlinie 193 |
| 194 | Kennlinie 194 |
| 195 | Kennlinie 195 |
| 196 | Kennlinie 196 |
| 197 | Kennlinie 197 |
| 198 | Kennlinie 198 |
| 199 | Kennlinie 199 |
| 200 | Kennlinie 200 |
| 201 | Kennlinie 201 |
| 202 | Kennlinie 202 |
| 203 | Kennlinie 203 |
| 204 | Kennlinie 204 |
| 205 | Kennlinie 205 |
| 206 | Kennlinie 206 |
| 207 | Kennlinie 207 |
| 208 | Kennlinie 208 |
| 209 | Kennlinie 209 |
| 210 | Kennlinie 210 |
| 211 | Kennlinie 211 |
| 212 | Kennlinie 212 |
| 213 | Kennlinie 213 |
| 214 | Kennlinie 214 |
| 215 | Kennlinie 215 |
| 216 | Kennlinie 216 |
| 217 | Kennlinie 217 |
| 218 | Kennlinie 218 |
| 219 | Kennlinie 219 |
| 220 | Kennlinie 220 |
| 221 | Kennlinie 221 |
| 222 | Kennlinie 222 |
| 223 | Kennlinie 223 |
| 224 | Kennlinie 224 |
| 225 | Kennlinie 225 |
| 226 | Kennlinie 226 |
| 227 | Kennlinie 227 |
| 228 | Kennlinie 228 |
| 229 | Kennlinie 229 |
| 230 | Kennlinie 230 |
| 231 | Kennlinie 231 |
| 232 | Kennlinie 232 |
| 233 | Kennlinie 233 |
| 234 | Kennlinie 234 |
| 235 | Kennlinie 235 |
| 236 | Kennlinie 236 |
| 237 | Kennlinie 237 |
| 238 | Kennlinie 238 |
| 239 | Kennlinie 239 |
| 240 | Kennlinie 240 |
| 241 | Kennlinie 241 |
| 242 | Kennlinie 242 |
| 243 | Kennlinie 243 |
| 244 | Kennlinie 244 |
| 245 | Kennlinie 245 |
| 246 | Kennlinie 246 |
| 247 | Kennlinie 247 |
| 248 | Kennlinie 248 |
| 249 | Kennlinie 249 |
| 250 | Kennlinie 250 |
| 251 | Kennlinie 251 |
| 252 | Kennlinie 252 |
| 253 | Kennlinie 253 |
| 254 | Kennlinie 254 |
| 255 | Ungueltig |

### TAB_KORREKTUR_ROTORPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion zur Korrektur der Rotorposition ist nicht aktiv. |
| 0x01 | Funktion zur Korrektur der Rotorposition aktiv. Kalibrierdaten im NvM und innerhalb des Wertebereichs. |
| 0x02 | Funktion zur Korrektur der Rotorposition aktiv mit Rückfallfaktor. Kalibrierdaten im NvM aber ausserhalb des Wertebereichs oder korrupt. |
| 0xFF | Ungültig |

### TAB_SPANNUNSEINBRUCH_BORDNETZ

| WERT | TEXT |
| --- | --- |
| 0 | Kein Spannungseinbruch |
| 1 | Startspannungseinbruch bis maximal Spannungsschwelle 1 (Warmstart) |
| 2 | Startspannungseinbruch bis maximal Spannungsschwelle 2 (Kaltstart) |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_STATUS_ENERGIE

| WERT | TEXT |
| --- | --- |
| 0 | ENSTATE_GOOD |
| 1 | ENSTATE_OK |
| 2 | ENSTATE_SHORTAGE |
| 3 | ENSTATE_SEVERE_SHORTAGE |
| 15 | Signal ungültig |

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

### TAB_STATUS_ROUTINE_EPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0x0A | kein garage mode |
| 0x0B | Geschwindigkeit Fahrzeug zu hoch |
| 0x0C | Hands on detection |
| 0x0D | allgemeine Abschaltung |
| 0x0E | Index nicht gefunden |
| 0x0F | Geradeausfahrt-Position nicht bekannt |
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

### TAB_STEUERUNG_BASIS_TEILNETZE

| WERT | TEXT |
| --- | --- |
| 0 | Keine Kommunikation |
| 1 | Kom_Parken_BN_niO |
| 2 | Kom_Parken_BN_iO |
| 3 | Kom_Standfunktionen_Kunde_nicht_im_FZG |
| 4 | reserviert |
| 5 | Kom_Wohnen |
| 6 | reserviert |
| 7 | Kom_Pruefen_Analyse_Diagnose |
| 8 | Kom_Fahrbereitschaft_herstellen |
| 9 | reserviert |
| 10 | Kom_Fahren |
| 11 | reserviert |
| 12 | Kom_Fahrbereitschaft_beenden |
| 13 | reserviert |
| 14 | Nicht verfügbar |
| 15 | Signal ungültig |
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

### TAB_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Assistance off |
| 0x01 | Assistance on |
| 0x02 | Failure determined with motor off |
| 0xFF | Wert ungültig |

### TAB_ZUSTAND_FAHRZEUG_1

| WERT | TEXT |
| --- | --- |
| 0 | reserviert |
| 1 | Parken BN niO |
| 2 | Parken BN iO |
| 3 | Standfunktionen Kunde nicht im FZG |
| 5 | Wohnen |
| 7 | Pruefen Analyse Diagnose |
| 8 | Fahrbereitschaft herstellen |
| 10 | Fahren |
| 12 | Fahrbereitschaft beenden |
| 14 | Nicht verfügbar |
| 15 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_0X5014

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |
