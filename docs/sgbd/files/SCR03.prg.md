# SCR03.prg

## General

|  |  |
| --- | --- |
| File | SCR03.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 113 |
| Origin | BMW EA-722 Philipp_Wolfgramm |
| Revision | 9.000 |
| Author | BMW EA-722 Wolfgramm |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Selective Catalytic Reduction |  |  |
| ORIGIN | string | BMW EA-722 Philipp_Wolfgramm |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | BMW EA-722 Wolfgramm |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.992 |  |  |
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

### ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR

| WERT | TEXT |
| --- | --- |
| 0x0000 | Anforderung MIL aus |
| 0x0001 | Anforderung MIL ein |
| 0xFFFF | Wert ungültig |

### ARG_0XAE64_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOSIERMASSE | + | - | mg | high | unsigned int | - | - | 1.0 | 8.0 | 0.0 | 0.0 | 524280.0 | Dosiermasse in mg |
| MASSENSTROM | + | - | mg/s | high | unsigned int | - | - | 1.0 | 0.015625 | 0.0 | 0.0 | 1023.98437 | Massenstrom in mg/s |

### ARG_0XAE68_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BITMASKE_PARAMETER | + | - | 0-n | high | unsigned int | - | AR_TESTAUSWAHL | - | - | - | - | - | Übergabeparameter für Inbetriebnahme Routine. |

### ARG_0XAE6B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UMPUMPMENGE | + | - | l | high | unsigned int | - | - | 1024.0 | 1.0 | 0.0 | 0.0 | 63.999 | tbd |

### ARG_0XD280_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_FOERDERPUMPE | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 33.0 | Test der Förderpumpe |

### ARG_0XD281_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_RUECKFOERDERPUMPE | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 33.0 | tbd |

### ARG_0XD282_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_AKTIVTANKHEIZUNG | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 100.0 | Test zum Steuern der Aktivtankheizung |

### ARG_0XD283_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERLEITUNGSHEIZUNG | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 100.0 | Test zum Steuern der Dosierleitungsheizung |

### ARG_0XD284_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_DOSIERVENTIL | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 80.0 | Test zum Steuern des Dosierventils |

### ARG_0XD285_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TRANSFERPUMPE | % | high | signed int | - | - | 163.84 | 1.0 | 0.0 | 0.0 | 100.0 | Test zum Steuern der Transferpumpe. |

### ARG_0XD286_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_DOSIERMENGE | g | high | unsigned long | - | - | 1000.0 | 1.0 | 0.0 | 0.0 | 2147483.64 | Langzeiterfassung der Dosiermenge. |

### ARG_0XD287_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LANGZEITERFASSUNG_UMPUMPMENGE | l | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 6553.5 | Langzeiterfassung der Umpumpmenge |

### ARG_0XD290_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_ERSTBEFUELLUNGSSTATUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Setzen des Erstbefüllungsstatus. Neues TFM - Setzen auf 0. Neues SG - Setzen auf1. |

### ARG_0XD291_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_ZEITDAUER_SPULENHEIZEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Rücksetzen der Zeitdauer für das Heizen der Spule des Dosierventils auf 0. |

### ARG_0XD292_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Rücksetzen der Zeitdauer für die Übertemperatur des Dosierventils |

### ARG_0XD293_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_LERNWERT_FOERDERPUMPE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Neuinitialisieren des Lernwerts der Förderpumpe. |

### ARG_0XD294_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_LERNWERT_DOSIERVENTIL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Neuinitialisieren des Lernwerts der Förderpumpe. |

### ARG_0XD29A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_FUELLMENGE_AKTIVTANK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Neuinitialisieren der Füllmenge des Aktivtanks. |

### ARG_0XD29B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_FUELLMENGE_PASSIVTANK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Neuinitialisieren der Füllmenge des Passivtanks. |

### ARG_0XD29C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_INITIALISIERUNG_RAM | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Manuelles Neuinitialisieren zahlreicher nicht OBD-relevanter Systemgrößen. |

### AR_TESTAUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x0001 | Test Druckaufbau |
| 0x0004 | Test Leckage |
| 0x0010 | Test Teilrücksaugen |
| 0x0020 | Test Komplettrücksaugen |
| 0x0040 | Test Trockentaktung |
| 0x0080 | Test Umpumpe |
| 0x0100 | Test Aktivtankheizung |
| 0x0200 | Test Dosierleitungsheizung |
| 0x0400 | Test Dosiermenge |
| 0x0011 | Tests Druckaufbau, Teilrücksaugen |
| 0x0015 | Tests Druckaufbau, Leckage, Teilrücksaugen |
| 0x0315 | Test Heizung, Druckaufbau, Leckage, Teilrücksaugen |
| 0x0345 | Tests Trockentaktung, Heizung, Druckaufbau, Leckage |
| 0x0355 | Tests Trockentaktung, Heizung, Druckaufbau, Leckage, Teilrücksaugen |
| 0x0755 | Systemgutprüfung |

### BF_ACT_INIT_TESTS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACT_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Wenn 1: Teilschritt Druckaufbau läuft gerade. |
| STAT_ACT_LECKAGE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Wenn 1: Teilschritt Leckage läuft gerade. |
| STAT_ACT_TEILRUECKSAUGEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Wenn 1: Teilschritt Teilrücksaugen läuft gerade. |
| STAT_ACT_KOMPLETTRUECKSAUGEN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Wenn 1: Teilschritt Komplettrücksaugen läuft gerade. |
| STAT_ACT_TROCKENTAKTUNG | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Wenn 1: Teilschritt Trockentaktung Dosierventil läuft gerade. |
| STAT_ACT_TRANSFERPUMPE | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Wenn 1: Teilschritt Test der Transferpumpe läuft gerade. |
| STAT_ACT_AKTIVTANKHEIZUNG | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Wenn 1: Teilschritt Test der Aktivtankheizung läuft gerade. |
| STAT_ACT_DOSIERLEITUNGSHEIZUNG | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Wenn 1: Teilschritt Test der Dosierleitungsheizung läuft gerade. |
| STAT_ACT_DOSIERMENGE | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wenn 1: Teilschritt Dosiermengentest läuft gerade. |

### BF_DWIS_ANFORDERUNG_GRUPPE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRUPPE_0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | DWIS-Request Gruppe 0 aktiv |
| STAT_GRUPPE_1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | DWIS-Request Gruppe 1 aktiv |
| STAT_GRUPPE_2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | DWIS-Request Gruppe 2 aktiv |
| STAT_GRUPPE_3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | DWIS-Request Gruppe 3 aktiv |
| STAT_GRUPPE_4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | DWIS-Request Gruppe 4 aktiv |
| STAT_GRUPPE_5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | DWIS-Request Gruppe 5 aktiv |
| STAT_GRUPPE_6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | DWIS-Request Gruppe 6 aktiv |
| STAT_GRUPPE_7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | DWIS-Request Gruppe 7 aktiv |

### BF_DWIS_ANFORDERUNG_TAMPERING

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERY_FAST | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | sehr schnell |
| STAT_FAST | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | schnell |
| STAT_MEDIUM | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | mittel |
| STAT_SLOW | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | langsam |
| STAT_VERY_SLOW | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | sehr langsam |

### BF_FOERDERPUMPE_FEHLER_HIGH_BYTE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTOR_STALL_DIAGNOSIS | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Diagnose Blockierender Rotor |
| STAT_SW_OVER_CURRENT_DIAGNOSIS | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Diagnose SW Überstrom |
| STAT_OPEN_LOAD_HALL_SENSOR_DIAGNOSIS | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Diagnose Leitungsunterbechung Hall Sensoren |
| STAT_SPEED_CONTROLLER_SETPOINT_DIAGNOSIS | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Diagnose Sollwert Geschwindigkeitsregler |
| STAT_ELECTRIC_MOTOR_LOW_CURRENT_CONSUMPTION | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Elektrischer Motor: niedriger Stromverbrauch |
| STAT_INTERMITTENT_OPEN_LOAD_DIAGNOSIS | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Diagnose Wackelkontakt  |

### BF_FOERDERPUMPE_FEHLER_LOW_BYTE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OVER_TEMPERATURE_FLAG | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Übertemperatur |
| STAT_OPEN_LOAD_FOR_BRIDGE_OPERATION | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Leitungsunterbrechung im Brückenbetrieb |
| STAT_SHORT_TO_GROUND_HALF_BRIDGE_1 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Halbbrücke 1: Kurzschluss nach Masse |
| STAT_SHORT_TO_BATTERY_HALF_BRIDGE_1 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Halbbrücke 1: Kurzschluss nach Batterie |
| STAT_SHORT_TO_GROUND_HALF_BRIDGE_2 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Halbbrücke 2: Kurzschluss nach Masse |
| STAT_SHORT_TO_BATTERY_HALF_BRIDGE_2 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Halbbrücke 2: Kurzschluss nach Batterie |
| STAT_SHORT_TO_GROUND_HALF_BRIDGE_3 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Halbbrücke 3: Kurzschluss nach Masse |
| STAT_SHORT_TO_BATTERY_HALF_BRIDGE_3 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Halbbrücke 3: Kurzschluss nach Batterie |
| STAT_OPEN_LOAD_FLAG_FOR_3RD_HALF_BRIDGE | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Dritte Halbbrücke: Leitungsunterbrechung |
| STAT_SHORT_TO_GROUND_3RD_HALF_BRIDGE | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Dritte Halbbrücke: Kurzschluss nach Masse |
| STAT_SHORT_TO_BATTEY_3RD_HALF_BRIDGE | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Dritte Halbbrücke: Kurzschluss nach Batterie |
| STAT_OPEN_LOAD_FLAG_3RD_HALF_BRIDGE | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Dritte Halbbrücke: Leitungsunterbrechung |
| STAT_UNDER_VOLTAGE_FLAG | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Unterspannung |
| STAT_OVER_VOLTAGE_FLAG | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Überspannung |
| STAT_WRONG_COMMAND_OF_BRUSHLESS_MOTOR | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | falscher Befehl des bürstenlosen Motors: - alle HALLx Eingänge bleiben auf 0 oder auf 1 hängen - der Kommutationsschritt (HALLx Kombination) ist nicht mit vorhergehendem Schritt konsistent |
| STAT_CURRENT_LIMITATION_FLAG | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Strombegrenzung |

### BF_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGEWAEHLTE_RELEVANTE_BEDINGUNGEN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Aus dem logischen Bereich vom statischen Fall ausgewaehlte relevante Bedingungen fuer direkten Stand als dynamische Bedingungen |
| STAT_FAHRZEUG_IN_BEWEGUNG | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Fahrzeug in Bewegung |
| STAT_LONGITUDINALE_UND_TRANSVERSALE_BESCHLEUNIGUNG | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Gueltige longitudinale/transversale Beschleunigung |
| STAT_BEENDIGUNG_DER_SENSORAKTIVIERUNG | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Initiale Verzoegerung bei Start für Beendingung der Sensoraktivierung |
| STAT_FREIGABE_DIREKTE_STANDFUNKTION | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Freigabe der direkten Standfunktion |
| STAT_DIREKTE_STANDMESSUNG | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Direkte Standmessung gueltig |
| STAT_DIREKTE_STANDMESSUNG_MIT_ABSCHALTVERZOEGERUNG | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Direkte Standmessung gueltig (mit Abschaltverzoegerung) |
| STAT_TANKTEMPERATUR_UND_AUSSENTEMPERATUR | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Tanktemperatur und Aussentemperature für direkten Stand ok |
| STAT_DIREKTE_STANDMESSUNG_STATISCH | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Direkte Standmessung gueltig (Statische Bedingungen) |
| STAT_DIREKTER_STAND_HOHE_AENDERUNGSPRUEFUNG | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Direkter Stand: hohe Aendungspruefung ok |
| STAT_COMBI_STAND_FUNKTION | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Freigabe Combi-Stand-Funktion |
| STAT_COMBI_STANDMESSUNG | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Combi-Standmessung gueltig |
| STAT_COMBI_STANDMESSUNG_MIT_ABSCHALTVERZOEGERUNG | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Combi-Standmessung gueltig (mit Abschaltverzoegerung) |
| STAT_TANKTEMP_UND_AUSSENTEMP_FUER_COMBI_TEMP | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Tanktemperatur und Aussentemperatur für Combi-Temperature ok |
| STAT_COMBI_STANDMESSUNG_STATISCHE_BEDINGUNG | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Combi-Stand-Messung gueltig (Statische Bedingungen) |
| STAT_COMBI_STAND_HOHE_AENDERUNGSPRUEFUNG | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Combi Stand: hohe Aenderungspruefung ok |

### BF_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURBEDINGUNG | 0/1 | high | unsigned int | 0x01 | - | - | - | - | Temperaturbedingung; Passivtank nicht gefroren  |
| STAT_FREIGABE_FEHLERMANAGEMENT | 0/1 | high | unsigned int | 0x02 | - | - | - | - | Freigabe Fehlermanagement |
| STAT_FUELLSTANDSMESSUNG | 0/1 | high | unsigned int | 0x04 | - | - | - | - | Keine gültige Füllstandmessung |
| STAT_FUELLSTANDSUEBERWACHUNG | 0/1 | high | unsigned int | 0x08 | - | - | - | - | Längere Zeit keine gültige Füllstandsmessung  |
| STAT_FAHRZEUG_IN_BEWEGUNG | 0/1 | high | unsigned int | 0x10 | - | - | - | - | Fahrzeug fährt |
| STAT_BESCHLEUNIGUNGSSIGNALE | 0/1 | high | unsigned int | 0x20 | - | - | - | - | Beschleunigungssignale sind gültig |
| STAT_INITIALSIERUNG_CAN | 0/1 | high | unsigned int | 0x40 | - | - | - | - | Initialisierung CAN abgeschlossen  |

### BF_FREIGABE_ROUTINE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BATTERIESPANNUNG_OK | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Wenn 1: Batteriespannung ok. |
| STAT_MOTORDREHZAHL_OK | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Wenn 1: Drehzahl Verbrennungsmotor ok. |
| STAT_FAHRZEUGGESCHWINDIGKEIT_OK | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Wenn 1: Fahrzeuggeschwindigkeit ok. |
| STAT_AUSSENTEMPERATUR_OK | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Wenn 1: Außentemperatur ok. |
| STAT_AKTIVTANKTEMPERATUR_OK | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Wenn 1: AdBlue-Temperatur im Aktivtank ok. |
| STAT_ABGASTEMPERATUR_OK | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Wenn 1: Abgastemperatur ok. |
| STAT_QUERVERRIEGELUNG_OK | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Wenn 1: Querverriegelungen in der Software ok. |

### BF_LEVELSENSOR_AKTIVTANK_FEHLER

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASIC_ERROR_PDU | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | ASIC PDU (0=kein Fehler, 1=ASIC PDU Fehler) |
| STAT_ASIC_ERROR_MEMORY | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | ASC MEMORY (0=kein Fehler, 1=ASIC MEMORY Fehler) |
| STAT_NTC_ERROR | 0-n | high | unsigned int | 0x000C | NTC_ERROR | - | - | - | NTC Fehler (0=kein Fehler, 4=offene Leitung, 8=Kurzschluss) |
| STAT_PIEZO_TD1_ERROR | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Piezo TD1 Fehler (0=kein Fehler, 1=offene Leitung oder Kurzschluss) |
| STAT_PIEZO_TD2_ERROR | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Piezo TD2 Fehler (0=kein Fehler, 1=offene Leitung oder Kurzschluss) |
| STAT_2ND_PIEZO_VALIDITY | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Zweite Piezo Gültigkeitsdauer (0=nicht gültig, 1=Stufe TD2 verfügbar) |
| STAT_TEMPERATURE_IN_RANGE_FLAG | 0-n | high | unsigned int | 0x0300 | TEMPERATURBEREICH | - | - | - | Temperatur |
| STAT_POWER_SUPPLY_STATUS | 0-n | high | unsigned int | 0x0C00 | STATUS_VERSORGUNGSSPANNUNG | - | - | - | Status Versorgungsspannung |
| STAT_MEASUREMENT_STATUS | 0-n | high | unsigned int | 0x7000 | MESSAUFZEICHNUNG | - | - | - | Status Messaufzeichnung |
| STAT_MEASUREMENT_UPDATE | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Anzeige zur Aktualisierung der Messung (0: Messung läuft, 1: Messwerte werden aktualisiert) |

### BF_LEVELSENSOR_PASSIVTANK_FEHLER

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNGEN | 0-n | high | unsigned int | 0x07 | MESSUNGEN | - | - | - | Der STATE kann als höchsten Wert 5 annehmen (5 gültige Messungen). |

### BF_SCR_INIT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCKAUFBAU | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Wenn 1: Druckaufbau erfolgreich beendet. |
| STAT_LECKAGE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Wenn 1: Leckagetest erfolgreich beendet. |
| STAT_TEILRUECKSAUGEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Wenn 1: Teilrücksaugen erfolgreich beendet. |
| STAT_KOMPLETTRUECKSAUGEN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Wenn 1: Komplettrücksaugen erfolgreich beendet. |
| STAT_TROCKENTAKTUNG | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Wenn 1: Trockentaktung Dosierventil erfolgreich beendet. |
| STAT_TRANSFERPUMPE | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Wenn 1: Test der Transferpumpe erfolgreich beendet. |
| STAT_AKTIVTANKHEIZUNG | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Wenn 1: Test der Aktivtankheizung erfolgreich beendet. |
| STAT_DOSIERLEITUNGSHEIZUNG | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Wenn 1: Test der Dosierleitungsheizung erfolgreich beendet. |
| STAT_DOSIERMENGE | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wenn 1: Dosiermengentest erfolgreich beendet. |

### BF_STATUS_ANTRIEB_FAHRZEUG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBRENNUNGSMOTOR | 0-n | high | unsigned char | 0x1F | VERBRENNUNGSMOTOR | - | - | - | Status des Verbrennungsmotors |
| STAT_E_MASCHINE | 0/1 | high | unsigned char | 0x80 | - | - | - | - | E-Maschine ist nach Anforderung Fahrbereitschaft von CAS/FEM elektrisch fahrbereit oder bereits aktiv: 0x0--- ---- Keine E-Maschine vorhanden: 0x1--- ---- |
| STAT_INIT | 0/1 | high | unsigned char | 0x83 | - | - | - | - | Initialisierung: 1000 0011 |

### BF_STATUS_BEREITSTELLUNG_SCR_ADDITIV

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCR_DOSIERFREIGABE | 0/1 | high | unsigned int | 0x01 | - | - | - | - | SCR-Dosierfreigabe |

### BF_STATUS_OBD_ZYKLUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARM_UP_CYCLE | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Warm-Up-Zyklus nicht aktiv/aktiv (0/1) |
| STAT_DRIVING_CYLCE | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Driving-Zyklus nicht aktiv/aktiv (0/1) |
| STAT_PFC_CYCLE | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Kein PFC-Zyklus/PFC-Zyklus erfuellt (0/1) |
| STAT_RBM_CYCLE | 0-n | high | unsigned char | 0x24 | RBM_CYCLE | - | - | - | RBM-Zyklus nicht aktiv/aktiv/nicht erfuellbar |
| STAT_SIGNAL_UNGUELTIG | 0/1 | high | unsigned char | 0x3F | - | - | - | - | Signal ungültig |

### BF_STATUS_SPERRE_SCR_SYSTEM

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNGSINFORMATION_0 | 0/1 | high | unsigned int | 0x01 | - | - | - | - | Verriegelungsinformation 0 |
| STAT_VERRIEGELUNGSINFORMATION_1 | 0/1 | high | unsigned int | 0x02 | - | - | - | - | Verriegelungsinformation 1 |
| STAT_VERRIEGELUNGSINFORMATION_2 | 0/1 | high | unsigned int | 0x04 | - | - | - | - | Verriegelungsinformation 2 |
| STAT_VERRIEGELUNGSINFORMATION_3 | 0/1 | high | unsigned int | 0x08 | - | - | - | - | Verriegelungsinformation 3 |
| STAT_VERRIEGELUNGSINFORMATION_4 | 0/1 | high | unsigned int | 0x10 | - | - | - | - | Verriegelungsinformation 4 |

### BF_STATUS_SYSTEM_FEHLER_OBD_SCR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OBD_FEHLER_1 | 0/1 | high | unsigned int | 0x01 | - | - | - | - | OBD Fehler 1 |
| STAT_OBD_FEHLER_2 | 0/1 | high | unsigned int | 0x02 | - | - | - | - | OBD Fehler 2 |
| STAT_OBD_FEHLER_3 | 0/1 | high | unsigned int | 0x04 | - | - | - | - | OBD Fehler 3 |
| STAT_OBD_FEHLER_4 | 0/1 | high | unsigned int | 0x08 | - | - | - | - | OBD Fehler 4 |
| STAT_OBD_FEHLER_5 | 0/1 | high | unsigned int | 0x10 | - | - | - | - | OBD Fehler 5 |

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
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020B00 | Energiesparmode aktiv | 0 | - |
| 0x02FF0B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x805270 | Aktivtank, Förderpumpe, Hall-Sensor, Signalfehler. | 0 | - |
| 0x805271 | Aktivtank, Förderpumpe, Kurzschluss nach Masse. | 0 | - |
| 0x805272 | Aktivtank, Förderpumpe, Kurzschluss nach Plus. | 0 | - |
| 0x805273 | Aktivtank, Förderpumpe, Leitungsunterbrechung. | 0 | - |
| 0x805275 | Aktivtank, Förderpumpe klemmt. | 0 | - |
| 0x805276 | Aktivtank, Datencheckfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805277 | Aktivtank, Datencheckfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x805278 | Aktivtank, Initialisierungsfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805279 | Aktivtank, Initialisierungsfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527A | Aktivtank, Kommunikationsfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x80527B | Aktivtank, Kommunikationsfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527C | Aktivtank, Signalfehler SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x80527D | Aktivtank, Signalfehler SENT_2 (Druck, Temperatur_2). | 0 | - |
| 0x80527E | Aktivtank, Datenfehler Multiplexing SENT_1 (Level, Temperatur_1, Qualität). | 0 | - |
| 0x805280 | Heizung, mehrfacher Fehler. | 0 | - |
| 0x805281 | Aktivtankheizung, Leistung zu gering. | 0 | - |
| 0x805282 | Aktivtankheizung, Leistung zu hoch. | 0 | - |
| 0x805283 | Aktivtankheizung, Leitungsunterbrechung. | 0 | - |
| 0x805284 | Aktivtankheizung, Low Side, Kurschluss nach Masse. | 0 | - |
| 0x805285 | Aktivtankheizung, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x805286 | Aktivtankheizung, Signal Range Check high. | 0 | - |
| 0x805287 | Aktivtankheizung, Fehler bei aktiver Heizanforderung. | 0 | - |
| 0x805288 | Aktivtank leer. | 0 | - |
| 0x805289 | Dosierleitungsheizung, Leistung zu gering. | 0 | - |
| 0x80528A | Dosierleitungsheizung, Leistung zu hoch. | 0 | - |
| 0x80528B | Dosierleitungsheizung, Leitungsunterbrechung. | 0 | - |
| 0x80528C | Dosierleitungsheizung, Low Side, Kurschluss nach Masse. | 0 | - |
| 0x80528D | Dosierleitungsheizung, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x80528E | Dosierleitungsheizung, Signal Range Check high. | 0 | - |
| 0x80528F | Dosierleitungsheizung, Fehler bei aktiver Heizanforderung. | 0 | - |
| 0x805290 | Dosiermengenabweichung, dosierte Menge gemäß Fördervolumen zu gering. | 0 | - |
| 0x805291 | Dosiermengenabweichung, dosierte Menge gemäß Fördervolumen zu hoch. | 0 | - |
| 0x805292 | Dosierventil, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x805293 | Dosierventil, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x805294 | Dosierventil, Leitungsunterbrechung. | 0 | - |
| 0x805295 | Dosierventil, Low Side, Kurzschluss nach Masse. | 0 | - |
| 0x805296 | Dosierventil, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x805297 | Dosierventil, Spulenstrom zu hoch. | 0 | - |
| 0x805298 | Dosierventil, Spulenstrom zu niedrig. | 0 | - |
| 0x80529A | Dosierventil, unzureichende Kühlung. | 0 | - |
| 0x80529B | Heizung, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x80529C | Heizung, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x80529D | Aktivtankheizung, Kurzschluss nach Last. | 0 | - |
| 0x80529F | Dosierleitungsheizung, Kurzschluss nach Last. | 0 | - |
| 0x8052A0 | Passivtank, Levelsensor, Echofehler. | 0 | - |
| 0x8052A1 | Passivtank, Levelsensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052A2 | Passivtank, Levelsensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052A3 | Passivtank, Levelsensor, Sensorfehler. | 0 | - |
| 0x8052A4 | Passivtank, Sensorsignal PWM (Level, Temperatur), Kurzschluss nach Plus oder Leitungsunterbrechung. | 0 | - |
| 0x8052A5 | Passivtank, Sensorsignal PWM (Level, Temperatur), Kurzschluss nach Masse. | 0 | - |
| 0x8052A6 | Aktivtank, Level-Quality-Sensor, Fehler im Direkt-Piezo. | 0 | - |
| 0x8052A7 | Aktivtank, Level-Quality-Sensor, Fehler im Kombi-Piezo. | 0 | - |
| 0x8052A8 | Aktivtank, Level-Quality-Sensor, Fehler im Temperatursensor. | 0 | - |
| 0x8052A9 | Aktivtank, Level-Quality-Sensor, Fehler im ASIC. | 0 | - |
| 0x8052AA | Aktivtank, Level-Quality-Sensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AB | Aktivtank, Level-Quality-Sensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052AC | Aktivtank, Drucksensor, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AD | Aktivtank, Drucksensor, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052AE | Dosierventil, Spulentemperatur, Offset zu Referenztemperatur zu groß (positiv). | 0 | - |
| 0x8052AF | Dosierventil, Spulentemperatur, Offset zu Referenztemperatur zu groß (negativ). | 0 | - |
| 0x8052B0 | Systemdruck, Druckabbaufehler. | 0 | - |
| 0x8052B1 | Systemdruck, Druckaufbaufehler. | 0 | - |
| 0x8052B3 | Systemdruck, Druck vor Motorstart zu niedrig. | 0 | - |
| 0x8052B4 | Systemdruck, Druck vor Motorstart zu hoch. | 0 | - |
| 0x8052B7 | Systemdruck, Leckageerkennung, Systemdruck nach Dosierpause zu niedrig. | 0 | - |
| 0x8052B8 | Systemdruck, Überdruckfehler im Dosierbetrieb. | 0 | - |
| 0x8052B9 | Systemdruck, Unterdruckfehler im Dosierbetrieb. | 0 | - |
| 0x8052BC | Passivtank, Sensorsignal PWM (Level), Signal Range Check, high. | 0 | - |
| 0x8052BD | Passivtank, Sensorsignal PWM (Level), Signal Range Check, low. | 0 | - |
| 0x8052BE | Passivtank, Sensorsignal PWM (Temperatur), Signal Range Check, high. | 0 | - |
| 0x8052BF | Passivtank, Sensorsignal PWM (Temperatur), Signal Range Check, low. | 0 | - |
| 0x8052C0 | Transferpumpe, Fördermenge ungenügend (Füllstand im Aktivtank steigt nicht). | 0 | - |
| 0x8052C1 | Transferpumpe, High Side, Kurzschluss nach Masse. | 0 | - |
| 0x8052C2 | Transferpumpe, High Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052C3 | Transferpumpe, Leitungsunterbrechung. | 0 | - |
| 0x8052C4 | Transferpumpe, Low Side, Kurzschluss nach Masse. | 0 | - |
| 0x8052C5 | Transferpumpe, Low Side, Kurzschluss nach Plus. | 0 | - |
| 0x8052C6 | Systemleckage, Aktivtankfüllstand gemäß eindosierter Menge zu niedrig. | 0 | - |
| 0x8052C7 | Dosiermengenabweichung, dosierte Menge gemäß Aktivtankfüllstand zu gering. | 0 | - |
| 0x8052C8 | Dosiermengenabweichung, dosierte Menge gemäß Aktivtankfüllstand zu hoch. | 0 | - |
| 0x8052C9 | Aktivtank, AdBlue-Qualität, Signal ohne Veränderung. | 0 | - |
| 0x8052CA | Aktivtank, Förderpumpe, Geschwindigkeitsregler am Anschlag. | 0 | - |
| 0x8052CB | Aktivtank, Datencheckfehler SENT_2 slow channel (Druck, Temperatur_2). | 0 | - |
| 0x8052CD | Aktivtank, Kommunikationsfehler SENT_2 slow channel (Druck, Temperatur_2). | 0 | - |
| 0x8052CE | Aktivtank, Signalfehler SENT_2 slow channel (Druck, Temperatur_2). | 0 | - |
| 0x8052D0 | Aktivtank, Förderpumpe fördert Luft. | 0 | - |
| 0x8052D1 | Aktivtank, Drucksensor, Messwert Druck unplausibel. | 0 | - |
| 0x8052D2 | Systemdruck, Blockage zwischen Förderpumpe und Dosierventil. | 0 | - |
| 0x8052D3 | Dosierbereitschaft zu spät (TTCL) oder unplausibel entfallen. | 0 | - |
| 0x8052D4 | Aktivtank, Drucksensor, Messwert Temperatur_2 unplausibel (slow channel). | 0 | - |
| 0x8052D5 | Aktivtank, Drucksensor, Messwert Temperatur_2 unplausibel (fast channel). | 0 | - |
| 0x8052D6 | Dosierventil blockiert. | 0 | - |
| 0x8052D7 | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Echofehler | 0 | - |
| 0x8052D8 | Aktivtank, Level-Quality-Sensor (Kombi-Piezo), Echofehler. | 0 | - |
| 0x8052D9 | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), Signal zu hoch. | 0 | - |
| 0x8052DA | Aktivtank, Level-Quality-Sensor, Qualitätssignal nicht verfügbar. | 0 | - |
| 0x8052DB | Aktivtank, Level-Quality-Sensor, Vergleich beider Piezosignale unplausibel. | 0 | - |
| 0x8052DC | Aktivtank, Level-Quality-Sensor, keine Messung verfügbar. | 0 | - |
| 0x8052DD | Aktivtank, Level-Quality-Sensor (Direkt-Piezo), keine Änderung bei dynamischer Fahrt. | 0 | - |
| 0x8052DE | Aktivtank, Level-Quality-Sensor (Kombi-Piezo), keine Änderung bei dynamischer Fahrt. | 0 | - |
| 0x8052DF | Anforderung Warnmeldung. | 0 | - |
| 0x8052E0 | Dosiermengenabweichung, dosierte Menge gemäß Druckstufen zu gering. | 0 | - |
| 0x8052E1 | Dosiermengenabweichung, dosierte Menge gemäß Druckstufen zu hoch. | 0 | - |
| 0x8052E2 | Dosiermengenabweichung, dosierte Menge zu gering, Summenfehler. | 0 | - |
| 0x8052E3 | Dosiermengenabweichung, dosierte Menge zu hoch, Summenfehler. | 0 | - |
| 0x8052E4 | Dosierunterbrechung zur Diagnose einer Dosiermengenabweichung (dosierte Menge zu gering). | 0 | - |
| 0x8052E5 | Dosierunterbrechung zur Diagnose einer Dosiermengenabweichung (dosierte Menge zu hoch). | 0 | - |
| 0x805350 | SCR-Steuergerät, 5V-Ausgang, Überspannung. | 0 | - |
| 0x805351 | SCR-Steuergerät, 5V-Ausgang, Unterspannung. | 0 | - |
| 0x805352 | SCR-Steuergerät, 12V-Ausgang, Überspannung. | 0 | - |
| 0x805354 | SCR-Steuergerät, 12V-Ausgang, Unterspannung. | 0 | - |
| 0x805355 | SCR-Steuergerät, Klemme 30 (Heizerversorgung), Überspannung. | 0 | - |
| 0x805356 | SCR-Steuergerät, Klemme 30 (Heizerversorgung), Unterspannung. | 0 | - |
| 0x805357 | SCR-Steuergerät, Klemme 30B (Logik, Sensorik, Dosierventil, Pumpenversorgung), Überspannung. | 0 | - |
| 0x805358 | SCR-Steuergerät, Klemme 30B (Logik, Sensorik, Dosierventil, Pumpenversorgung), Unterspannung. | 0 | - |
| 0x805359 | Aktivtank, Förderpumpe, Strom zu hoch. | 0 | - |
| 0x80535A | SCR-Steuergerät, Transferpumpe High Side, Mosfet offen. | 0 | - |
| 0x80535B | SCR-Steuergerät, Transferpumpe Low Side, Mosfet offen. | 0 | - |
| 0x80535C | SCR-Steuergerät, Endstufe Förderpumpe, SPI-Kommunikation gestört. | 0 | - |
| 0x80535D | SCR-Steuergerät, Endstufen Low Sides, SPI-Kommunikation gestört. | 0 | - |
| 0x80535E | SCR-Steuergerät, 12V-Ausgang, Kurzschluss nach Plus. | 0 | - |
| 0x80535F | SCR-Steuergerät, 12V-Ausgang, Kurzschluss nach Masse. | 0 | - |
| 0x805360 | SCR-Steuergerät, Dosierventil High Side, Mosfet offen. | 0 | - |
| 0x805362 | SCR-Steuergerät, Dosierventil Low Side, Mosfet offen. | 0 | - |
| 0x805363 | SCR-Steuergerät, Dosierventil Low Side, Mosfet Kurzschluss. | 0 | - |
| 0x805364 | SCR-Steuergerät, Heizung High Side, Mosfet offen. | 0 | - |
| 0x805365 | SCR-Steuergerät, Aktivtankheizung Low Side, Mosfet offen. | 0 | - |
| 0x805366 | SCR-Steuergerät, Aktivtankheizung Low Side, Mosfet Kurzschluss. | 0 | - |
| 0x805367 | SCR-Steuergerät, Dosierleitungsheizung Low Side, Mosfet offen. | 0 | - |
| 0x805368 | SCR-Steuergerät, Dosierleitungsheizung Low Side, Mosfet Kurzschluss. | 0 | - |
| 0x80536A | SCR-Steuergerät, RAM-Fehler. | 0 | - |
| 0x80536B | SCR-Steuergerät, Checksummenfehler Bootloader Continental. | 0 | - |
| 0x80536C | SCR-Steuergerät, Checksummenfehler Bootloader BMW. | 0 | - |
| 0x80536D | SCR-Steuergerät, Checksummenfehler Programmstand. | 0 | - |
| 0x80536E | SCR-Steuergerät, Checksummenfehler Datenstand. | 0 | - |
| 0x805371 | SCR-Steuergerät, Montagemodus aktiv. | 0 | - |
| 0x805372 | SCR-Steuergerät, Nachlauf gestört. | 0 | - |
| 0x805373 | SCR-Steuergerät, Nachlauf nicht abgeschlossen. | 0 | - |
| 0x805375 | Fahrzeugstatus nicht plausibel zu Klemmenstatus bzw. PWF-Zustand. | 0 | - |
| 0x805377 | OBD-relevanter Fehler im Fahrzyklus erkannt aber nicht im nichtflüchtigen Speicher gesichert. | 0 | - |
| 0x80537A | Motorabstellzeit, Summenfehler für Plausibilisierungen. | 0 | - |
| 0x80537B | Motorabstellzeit, unplausibel bei Motorstart nach abgeschlossenem SCR-Nachlauf. | 0 | - |
| 0x80537C | Motorabstellzeit, unplausibel bei laufendem Motor. | 0 | - |
| 0x80537D | Motorabstellzeit, unplausibel bei Motorstart während SCR-Nachlauf. | 0 | - |
| 0x80537E | Motorabstellzeit, unplausibel zu Motorabstellzeit der DDE. | 0 | - |
| 0xCBC401 | FA-CAN Physikalischer Busfehler | 0 | - |
| 0xCBC40A | FA-CAN Control Module Bus OFF | 0 | - |
| 0xCBC469 | LP-CAN Physikalischer Busfehler | 0 | - |
| 0xCBC472 | LP-CAN Control Module Bus OFF | 0 | - |
| 0xCBCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCBD400 | Botschaft fehlt: Längsbeschleunigung Schwerpunkt, 0x199, Sender DSC_Modul. | 1 | - |
| 0xCBD401 | Botschaft fehlt: Querbeschleunigung Schwerpunkt, 0x19A, Sender DSC_Modul. | 1 | - |
| 0xCBD403 | Botschaft fehlt: Drehmoment Kurbelwelle 1, 0xA5, Sender Sender DME1. | 1 | - |
| 0xCBD404 | Botschaft fehlt: Geschwindigkeit Fahrzeug, 0x1A1, Sender DSC_Modul. | 1 | - |
| 0xCBD405 | Botschaft fehlt: Kilometerstand/Reichweite, 0x330, Sender Kombi/IKE. | 1 | - |
| 0xCBD406 | Botschaft fehlt: Daten Antriebsstrang 2, 0x3F9, Sender DME1. | 1 | - |
| 0xCBD407 | Botschaft fehlt: Daten Antriebsstrang 1, 0x3FB, Sender DME1. | 1 | - |
| 0xCBD408 | Botschaft fehlt: Bereitstellung Daten SCR, 0x188, Sender DME1. | 1 | - |
| 0xCBD409 | Botschaft fehlt: Anforderung Bereitstellung SCR-Additiv, 0x84, Sender DME1. | 1 | - |
| 0xCBD40A | Botschaft fehlt: Außentemperatur, 0x2CA, Sender Kombi/IKE. | 1 | - |
| 0xCBD40B | Botschaft fehlt: Relativzeit BN2020, 0x328, Sender Kombi/IKE. | 1 | - |
| 0xCBD40C | Botschaft fehlt: Temperatur Daten Motor, 0x2CB, Sender DME1. | 1 | - |
| 0xCBD40E | Botschaft fehlt: Diagnose OBD Motor, 0x397, Sender DME1. | 1 | - |
| 0xCBD40F | Botschaft fehlt: Klemmen, 0x12F, Sender BDC. | 1 | - |
| 0xCBD410 | Botschaft fehlt: Fahrzeugzustand, 0x3A0, Sender BDC/BDC_2015. | 1 | - |
| 0xCBD411 | Botschaft fehlt: Zustand Fahrzeug (35up), 0x3C, Sender BDC_2015. | 1 | - |
| 0xCBD412 | Botschaft fehlt: Status Verbrauch Kraftstoff Motor, 0x2C4, Sender DME1. | 1 | - |
| 0xCBD413 | Botschaft fehlt: Status Motor Betrieb, 0x3DE, Sender DME1. | 1 | - |
| 0xCBD420 | Signalfehler: Soll_Bereitstellung_Einspritzmenge_SCR-Additiv (TAR_RESG_IJV_SCRA), Sender DME1. | 1 | - |
| 0xCBD422 | Signalfehler: Status_Abgas_Massenstrom (ST_EXH_MFLOW), Sender DME1. | 1 | - |
| 0xCBD423 | Signalfehler: Status_Initialisierung_Filter_Wert_DME (ST_INIT_FIL_VL_DME), Sender DME1. | 1 | - |
| 0xCBD424 | Signalfehler: Temperatur_Außen (TEMP_EX), Sender Kombi/IKE. | 1 | - |
| 0xCBD427 | Signalfehler: Luftdruck_Motor_Antrieb (AIP_ENG_DRVI), Sender DME1. | 1 | - |
| 0xCBD428 | Signalfehler: Temperatur_Motor_Antrieb (TEMP_ENG_DRV), Sender DME1. | 1 | - |
| 0xCBD429 | Signalfehler: Status_Antrieb_Fahrzeug (ST_DRV_VEH), Sender DME1. | 1 | - |
| 0xCBD42A | Signalfehler: Status_OBD-Zyklus (ST_OBD_CYC), Sender DME1. | 1 | - |
| 0xCBD42B | Signalfehler: OBD_Position_Drosselklappe_Motor (OBD_PO_THVA_ENG), Sender DME1. | 1 | - |
| 0xCBD42C | Signalfehler: OBD_Modellwert_Last_Motor (OBD_CALCVL_LD_ENG), Sender DME1. | 1 | - |
| 0xCBD42D | Signalfehler: Ist_Drehmoment_Kurbelwelle (AVL_TORQ_CRSH), Sender DME1. | 1 | - |
| 0xCBD42E | Signalfehler: Ist_Drehzahl_Motor_Kurbelwelle (AVL_RPM_ENG_CRSH), Sender DME1. | 1 | - |
| 0xCBD42F | Signalfehler: Status_Sperre_Fehlerspeicher_FZM (ST_ILK_ERRM_FZM), Sender BDC/BDC2015. | 1 | - |
| 0xCBD430 | Signalfehler: Geschwindigkeit_Fahrzeug_Schwerpunkt (V_VEH_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD431 | Signalfehler: Wegstrecke_Kilometer (MILE_KM), Sender Kombi/IKE. | 1 | - |
| 0xCBD432 | Signalfehler: Status_Diagnose_Verdampfer_Zyklus (ST_DIAG_EVA_CYC), Sender DME1. | 1 | - |
| 0xCBD433 | Signalfehler: Status_Klemme (ST_KL), Sender BDC. | 1 | - |
| 0xCBD434 | Signalfehler: Längsbeschleunigung_Schwerpunkt (ACLNX_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD435 | Signalfehler: Qualifier_Längsbeschleunigung_Schwerpunkt (QU_ACLNX_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD436 | Signalfehler: Querbeschleunigung_Schwerpunkt (ACLNY_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD437 | Signalfehler: Qualifier_Querbeschleunigung_Schwerpunkt (QU_ACLNY_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD438 | Signalfehler: Zeit_Sekunde_Zähler_Relativ (T_SEC_COU_REL), Sender Kombi/IKE. | 1 | - |
| 0xCBD439 | Signalfehler: Temperatur_SCR-Katalysator (TEMP_SCAT), Sender DME1. | 1 | - |
| 0xCBD43B | Signalfehler: Temperatur_Kraftstoff (TEMP_FU), Sender DME1. | 1 | - |
| 0xCBD43C | Signalfehler: Drehmoment_Fahrerwunsch_PID_SCR-System (TORQ_DVCH_PID_SCRS), Sender DME1. | 1 | - |
| 0xCBD43D | Signalfehler: Drehmoment_Aktuelle_PID_SCR-System (TORQ_PRES_PID_SCRS), Sender DME1. | 1 | - |
| 0xCBD43E | Signalfehler: Status_Zustand_Fahrzeug (ST_CON_VEH), Sender BDC_2015. | 1 | - |
| 0xCBD43F | Signalfehler: Einspritzmenge_Kraftstoff_Motor (INJV_FU_ENG), Sender DME1. | 1 | - |
| 0xCBD443 | Signalfehler: Qualifier_Ist_Drehzahl_Motor_Kurbelwelle (QU_AVL_RPM_ENG_CRSH), Sender DME1. | 1 | - |
| 0xCBD444 | Signalfehler: Qualifier_Geschwindigkeit_Fahrzeug_Schwerpunkt (QU_V_VEH_COG), Sender DSC_Modul. | 1 | - |
| 0xCBD445 | Signalfehler: Steuerung_Basis_Teilnetze (CTR_BS_PRTNT), Sender BDC2015. | 1 | - |
| 0xCBD446 | Signalfehler: Restlaufleistung_SCR-Additv (RMMI_SCRA), Sender DME1. | 1 | - |
| 0xCBD447 | Signalfehler: Status_FID_SCR-System (ST_FID_SCRS), Sender DME1. | 1 | - |
| 0xCBD448 | Signalfehler: Motor_Aus_Zeit (ENG_OFF_T), Sender DME1. | 1 | - |
| 0xCBD449 | Signalfehler: Status_Motor_Aus_Zeit (ST_ENG_OFF_T), Sender DME1. | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD28D | UWB_CAN_RX_MOTOR_AUS_ZEIT | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD28E | UWB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0-n | High | 0xFFFF | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - |
| 0xD28F | UWB_CAN_RX_STATUS_FID_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2B7 | UWB_CAN_RX_SOLL_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | g | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD2B9 | UWB_CAN_RX_STATUS_ABGAS_MASSENSTROM | kg/h | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2BB | UWB_CAN_RX_TEMPERATUR_AUSSEN | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD2BE | UWB_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | hPa | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 |
| 0xD2BF | UWB_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | °C | High | unsigned int | - | 1.0 | 1.0 | -40.0 |
| 0xD2C4 | UWB_CAN_RX_IST_DREHMOMENT_KURBELWELLE | Nm | High | signed int | - | 0.03125 | 1.0 | 0.0 |
| 0xD2C5 | UWB_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2C6 | UWB_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0-n | High | 0xFFFF | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - |
| 0xD2C7 | UWB_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | km/h | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CA | UWB_CAN_RX_STATUS_KLEMME | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CB | UWB_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 0.0008475 | 1.0 | 0.0 |
| 0xD2CC | UWB_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CD | UWB_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 0.0008475 | 1.0 | 0.0 |
| 0xD2CE | UWB_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2D0 | UWB_CAN_RX_TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2D2 | UWB_CAN_RX_TEMPERATUR_KRAFTSTOFF | °C | High | unsigned int | - | 1.0 | 1.0 | -50.0 |
| 0xD2DF | UWB_CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E0 | UWB_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0-n | High | 0xFFFF | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - |
| 0xD2E1 | UWB_CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E2 | UWB_CAN_TX_STATUS_SPERRE_SYR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E3 | UWB_CAN_TX_IST_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | g | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD2E4 | UWB_CAN_TX_LIM_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2E5 | UWB_CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E9 | UWB_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD3F9 | UWB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0-n | High | 0xFFFF | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - |
| 0xD3FB | UWB_CAN_TX_IST_STROM_VERBRAUCHER_FEPM | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46B | UWB_FOERDERPUMPE_FEHLER_HIGH_BYTE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46C | UWB_FOERDERPUMPE_FEHLER_LOW_BYTE | - | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46D | UWB_DWIS_ANFORDERUNG_CCM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46E | UWB_DWIS_ANFORDERUNG_GRUPPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD48F | UWB_AKTIVTANKHEIZUNG_PWM | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD490 | UWB_DOSIERLEITUNGSHEIZUNG_PWM | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD491 | UWB_AKTIVTANKHEIZUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD492 | UWB_DOSIERLEITUNGSHEIZUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD493 | UWB_AKTIVTANKHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD494 | UWB_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD495 | UWB_AKTIVTANKHEIZUNG_STROM | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD496 | UWB_DOSIERLEITUNGSHEIZUNG_STROM | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD497 | UWB_AKTIVTANKHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD498 | UWB_DOSIERLEITUNGSHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD49B | UWB_FOERDERPUMPE_STROM | A | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD49C | UWB_FOERDERPUMPE_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD49D | UWB_DRUCKREGELUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD49E | UWB_DRUCKREGELUNG_GEPRUEFT | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD49F | UWB_DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN | ml | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4A0 | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A1 | UWB_TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A2 | UWB_TEMPERATUR_DRUCKSENSOR_ROHWERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A3 | UWB_FOERDERPUMPE_DREHZAHL_SOLLWERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4A4 | UWB_DRUCK_ROHWERT | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A5 | UWB_DRUCK_GEFILTERT | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A6 | UWB_DRUCK_NOMINAL | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A7 | UWB_DRUCK_ABWEICHUNG_VON_NOMINAL | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A8 | UWB_SCHALLGESCHWINDIGKEIT_ROHWERT | m/s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4A9 | UWB_QUALITAET_ROHWERT | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AA | UWB_QUALITAET | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AB | UWB_LEVELSENSOR_AKTIVTANK_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4AC | UWB_LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4AD | UWB_LEVELSIGNAL_GUELTIG_AKTIVTANK_KOMBI_PIEZO | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4AE | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4AF | UWB_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B0 | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B1 | UWB_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B2 | UWB_AMPLITUDE_ECHO_1_DIREKT_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B3 | UWB_AMPLITUDE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B4 | UWB_AMPLITUDE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B5 | UWB_AMPLITUDE_ECHO_3_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B6 | UWB_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B7 | UWB_FUELLMENGE_AKTIVTANK_KOMBI_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4C3 | UWB_BATTERIESPANNUNG_SCR | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD4D0 | UWB_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D1 | UWB_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D2 | UWB_FUELLMENGE_AKTIVTANK_RELATIV | % | High | unsigned int | - | 0.39215686 | 1.0 | 0.0 |
| 0xD4D3 | UWB_NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4D6 | UWB_NACHTANKERKENNUNG | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4D7 | UWB_AUFTAUZEIT_AKTUELL | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D8 | UWB_AUFTAUZEIT_VORGABE | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D9 | UWB_AUFTAUZEIT_EPA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4DA | UWB_AUFTAUEN_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DB | UWB_AUFTAUEN_ABGESCHLOSSEN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DC | UBW_TEMPERATUR_AKTIVTANK_GESPEICHERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4DE | UWB_AKTIVTANK_GEFROREN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DF | UWB_LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E1 | UWB_TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4E4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E5 | UWB_NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4E6 | UWB_PASSIVTANK_VERBAUT | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4E7 | UWB_LANGZEIT_UMPUMPMENGE | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4E8 | UWB_TEMPERATUR_SCR_STEUERGERAET | °C | High | unsigned int | - | 0.75 | 1.0 | -48.0 |
| 0xD4E9 | UWB_ZUSTAND_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4EA | UWB_NACHLAUF_GESTARTET | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4EC | UWB_NACHLAUF_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4ED | UWB_NACHLAUF_ABGESCHLOSSEN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4EE | UWB_NACHLAUFZEIT | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4EF | UWB_ZEIT_SEIT_MOTORSTOPP | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4F0 | UWB_ZEIT_SEIT_MOTORSTART | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4F1 | UWB_TEMPERATUR_DOSIERVENTIL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4F2 | UWB_WIDERSTAND_DOSIERVENTIL_GEMESSEN | Ohm | High | unsigned int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F3 | UWB_WIDERSTAND_DOSIERVENTIL_OFFSET_ROHWERT | Ohm | High | signed int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F4 | UWB_WIDERSTAND_DOSIERVENTIL_OFFSETWERT | Ohm | High | signed int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F5 | UWB_STROM_DOSIERVENTIL | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4F6 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_ANFORDERUNG | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD4F7 | UWB_FREQUENZ_DOSIERVENTIL_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4F9 | UWB_MASSENSTROM_DOSIERVENTIL | mg/s | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4FA | UWB_LANGZEIT_DOSIERMENGE | g | High | unsigned int | - | 32.768 | 1.0 | 0.0 |
| 0xD4FB | UWB_DOSIERVENTIL_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4FE | UWB_KILOMETER_AKTUELLER_DC | km | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4FF | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E0 | UWB_LAUFZEIT_ECHO_1_DIREKT_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E1 | UWB_LAUFZEIT_ECHO_1_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E2 | UWB_LAUFZEIT_ECHO_2_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E3 | UWB_LAUFZEIT_ECHO_3_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E4 | UWB_SIGNALGUETE_ECHO_1_DIREKT_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E5 | UWB_SIGNALGUETE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E6 | UWB_SIGNALGUETE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E7 | UWB_SIGNALGUETE_ECHO_3_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E8 | UWB_ZEIT_REHEATING | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6EA | UWB_FUELLSTAND_PASSIVTANK_ROHWERT | mm | High | unsigned int | - | 0.25 | 1.0 | 0.0 |
| 0xD6EB | UWB_FUELLMENGE_PASSIVTANK_RELATIV | % | High | unsigned int | - | 0.5 | 1.0 | 0.0 |
| 0xD6EC | UWB_FUELLMENGE_PASSIVTANK_ROHWERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6ED | UWB_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD6EF | UWB_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD6F0 | UWB_ERSTBEFUELLUNGSSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD6F2 | UWB_LERNWERT_FOERDERPUMPE | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6F3 | UWB_TEMPERATUR_DOSIERVENTIL_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD6F7 | UWB_PRODUKTIONSDATUM_LQS | HEX | High | unsigned int | - | - | - | - |
| 0xD6FB | UWB_KAVITAETSERKENNUNG_GUELTIG | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD7C1 | UWB_CDM2_SUMME_NACHFUELLMENGE | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7C2 | UWB_TEMPERATUR_FOERDERPUMPE | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7C4 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C5 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C6 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7D4 | UWB_DOSIERMENGE_AKTUELLER_DC | mg | High | unsigned int | - | 16.0 | 1.0 | 0.0 |
| 0xD7D5 | UWB_FOERDERPUMPE_PWM_SOLL | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD7D6 | UWB_FOERDERPUMPE_PWM_IST | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD7D8 | UWB_CDM2_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD7DA | UWB_CDM2_FUELLMENGE_AKTIVTANK_ENDE | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7DB | UWB_CDM2_FUELLMENGE_AKTIVTANK_ANFANG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7DC | UWB_TEMPERATUR_ABGAS_DOSIERVENTIL | °C | High | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0xD7DE | UWB_TEMPERATUR_DRUCKSENSOR_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7DF | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7EE | UWB_TEMPERATUR_DOSIERVENTIL_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD7EF | UWB_SYSTEMLECKAGE_DIAGNOSE | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD810 | UWB_SYSTEMLECKAGE_GEMESSEN | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD812 | UWB_VOLUMENSTROM_ANGEFORDERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD813 | UWB_CDM1_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD814 | UWB_DOSIERVENTIL_SPANNUNG_HIGH_SIDE | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD815 | UWB_DOSIERVENTIL_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD816 | UWB_SPANNUNG_KLEMME_30B_LOGIK | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD818 | UWB_SPANNUNG_KLEMME_30_HEIZER | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD826 | UWB_DRUCKSENSOR_DATEN_FAST_CHANNEL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD827 | UWB_DRUCKSENSOR_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD828 | UWB_LECKAGE_FUELLSTANDSBASIERT_BITFELD | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD829 | UWB_CDM3_DOSIERMENGENABWEICHUNG_RELATIV | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD82A | UWB_CDM3_DOSIERMENGE_IST_AUS_DRUCKSTUFEN | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82B | UWB_CDM3_DOSIERMENGE_SOLL | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82D | UWB_SUMME_DRUCKSTUFEN_INJ_BLOCK | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD82E | UWB_SUMME_DRUCKSTUFEN_PUMP_AIR | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD84E | UWB_CDM2_HIGH_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD84F | UWB_CDM2_LOW_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD854 | UWB_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xD855 | UWB_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD856 | UWB_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xD857 | UWB_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD858 | UWB_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8F6 | UWB_SYSTEMSTEIFIGKEIT_BERECHNET | - | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 |
| 0xD8F7 | UWB_SYSTEM_LECKAGE_ADAPTIERT | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F8 | UWB_SYSTEM_LECKAGE_CDM1 | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F9 | UWB_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8FA | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FB | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FC | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE38B | UWB_GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN | mg | High | unsigned int | - | 16.0 | 1.0 | 0.0 |
| 0xE38C | UWB_AKTIVTANKHEIZUNG_LEISTUNG_SETPOINT | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xE38D | UWB_DOSIERLEITUNGSHEIZUNG_LEISTUNG_SETPOINT | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
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
| 0x100001 | Puffer für ausgehende Fehlermeldungen ist voll | 1 | - |
| 0x100002 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 | - |
| 0x100003 | SCR-Steuergerät-Reset. | 0 | - |
| 0x8052D0 | Aktivtank, Förderpumpe fördert Luft. | 0 | - |
| 0x8052E0 | Dosiermengenabweichung, dosierte Menge gemäß Druckstufen zu gering. | 0 | - |
| 0x8052E1 | Dosiermengenabweichung, dosierte Menge gemäß Druckstufen zu hoch. | 0 | - |
| 0x80537B | Motorabstellzeit, unplausibel bei Motorstart nach abgeschlossenem SCR-Nachlauf. | 0 | - |
| 0x80537E | Motorabstellzeit, unplausibel zu Motorabstellzeit der DDE. | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD28D | UWB_CAN_RX_MOTOR_AUS_ZEIT | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD28E | UWB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0-n | High | 0xFFFF | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - |
| 0xD28F | UWB_CAN_RX_STATUS_FID_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2B7 | UWB_CAN_RX_SOLL_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | g | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD2B9 | UWB_CAN_RX_STATUS_ABGAS_MASSENSTROM | kg/h | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2BB | UWB_CAN_RX_TEMPERATUR_AUSSEN | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD2BE | UWB_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | hPa | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 |
| 0xD2BF | UWB_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | °C | High | unsigned int | - | 1.0 | 1.0 | -40.0 |
| 0xD2C4 | UWB_CAN_RX_IST_DREHMOMENT_KURBELWELLE | Nm | High | signed int | - | 0.03125 | 1.0 | 0.0 |
| 0xD2C5 | UWB_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2C6 | UWB_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0-n | High | 0xFFFF | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - |
| 0xD2C7 | UWB_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | km/h | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CA | UWB_CAN_RX_STATUS_KLEMME | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CB | UWB_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 0.0008475 | 1.0 | 0.0 |
| 0xD2CC | UWB_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2CD | UWB_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | m/s² | High | signed int | - | 0.0008475 | 1.0 | 0.0 |
| 0xD2CE | UWB_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2D0 | UWB_CAN_RX_TEMPERATUR_SCR_KATALYSATOR | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD2D2 | UWB_CAN_RX_TEMPERATUR_KRAFTSTOFF | °C | High | unsigned int | - | 1.0 | 1.0 | -50.0 |
| 0xD2DF | UWB_CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E0 | UWB_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0-n | High | 0xFFFF | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - |
| 0xD2E1 | UWB_CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E2 | UWB_CAN_TX_STATUS_SPERRE_SYR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E3 | UWB_CAN_TX_IST_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | g | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD2E4 | UWB_CAN_TX_LIM_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | mg/s | High | unsigned int | - | 0.0625 | 1.0 | 0.0 |
| 0xD2E5 | UWB_CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD2E9 | UWB_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | km | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD3F9 | UWB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0-n | High | 0xFFFF | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - |
| 0xD3FB | UWB_CAN_TX_IST_STROM_VERBRAUCHER_FEPM | A | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46B | UWB_FOERDERPUMPE_FEHLER_HIGH_BYTE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46C | UWB_FOERDERPUMPE_FEHLER_LOW_BYTE | - | Low | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46D | UWB_DWIS_ANFORDERUNG_CCM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD46E | UWB_DWIS_ANFORDERUNG_GRUPPE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD48F | UWB_AKTIVTANKHEIZUNG_PWM | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD490 | UWB_DOSIERLEITUNGSHEIZUNG_PWM | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD491 | UWB_AKTIVTANKHEIZUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD492 | UWB_DOSIERLEITUNGSHEIZUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD493 | UWB_AKTIVTANKHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD494 | UWB_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD495 | UWB_AKTIVTANKHEIZUNG_STROM | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD496 | UWB_DOSIERLEITUNGSHEIZUNG_STROM | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD497 | UWB_AKTIVTANKHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD498 | UWB_DOSIERLEITUNGSHEIZUNG_LEISTUNG | W | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD49B | UWB_FOERDERPUMPE_STROM | A | High | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0xD49C | UWB_FOERDERPUMPE_DREHZAHL | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD49D | UWB_DRUCKREGELUNG_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD49E | UWB_DRUCKREGELUNG_GEPRUEFT | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD49F | UWB_DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN | ml | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4A0 | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A1 | UWB_TEMPERATUR_AKTIVTANK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A2 | UWB_TEMPERATUR_DRUCKSENSOR_ROHWERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4A3 | UWB_FOERDERPUMPE_DREHZAHL_SOLLWERT | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4A4 | UWB_DRUCK_ROHWERT | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A5 | UWB_DRUCK_GEFILTERT | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A6 | UWB_DRUCK_NOMINAL | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A7 | UWB_DRUCK_ABWEICHUNG_VON_NOMINAL | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4A8 | UWB_SCHALLGESCHWINDIGKEIT_ROHWERT | m/s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4A9 | UWB_QUALITAET_ROHWERT | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AA | UWB_QUALITAET | % | High | unsigned int | - | 0.01 | 1.0 | -10.0 |
| 0xD4AB | UWB_LEVELSENSOR_AKTIVTANK_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4AC | UWB_LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4AD | UWB_LEVELSIGNAL_GUELTIG_AKTIVTANK_KOMBI_PIEZO | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4AE | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4AF | UWB_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO_ROHWERT | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B0 | UWB_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B1 | UWB_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO | mm | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0xD4B2 | UWB_AMPLITUDE_ECHO_1_DIREKT_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B3 | UWB_AMPLITUDE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B4 | UWB_AMPLITUDE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B5 | UWB_AMPLITUDE_ECHO_3_KOMBI_PIEZO | - | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B6 | UWB_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4B7 | UWB_FUELLMENGE_AKTIVTANK_KOMBI_PIEZO_UNGEFILTERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4C3 | UWB_BATTERIESPANNUNG_SCR | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD4D0 | UWB_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D1 | UWB_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D2 | UWB_FUELLMENGE_AKTIVTANK_RELATIV | % | High | unsigned int | - | 0.39215686 | 1.0 | 0.0 |
| 0xD4D3 | UWB_NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4D4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4D6 | UWB_NACHTANKERKENNUNG | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4D7 | UWB_AUFTAUZEIT_AKTUELL | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D8 | UWB_AUFTAUZEIT_VORGABE | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4D9 | UWB_AUFTAUZEIT_EPA | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4DA | UWB_AUFTAUEN_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DB | UWB_AUFTAUEN_ABGESCHLOSSEN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DC | UBW_TEMPERATUR_AKTIVTANK_GESPEICHERT | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4DE | UWB_AKTIVTANK_GEFROREN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4DF | UWB_LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E1 | UWB_TEMPERATUR_PASSIVTANK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4E4 | UWB_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4E5 | UWB_NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4E6 | UWB_PASSIVTANK_VERBAUT | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4E7 | UWB_LANGZEIT_UMPUMPMENGE | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4E8 | UWB_TEMPERATUR_SCR_STEUERGERAET | °C | High | unsigned int | - | 0.75 | 1.0 | -48.0 |
| 0xD4E9 | UWB_ZUSTAND_SCR_SYSTEM | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4EA | UWB_NACHLAUF_GESTARTET | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4EC | UWB_NACHLAUF_AKTIV | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4ED | UWB_NACHLAUF_ABGESCHLOSSEN | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD4EE | UWB_NACHLAUFZEIT | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4EF | UWB_ZEIT_SEIT_MOTORSTOPP | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4F0 | UWB_ZEIT_SEIT_MOTORSTART | s | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4F1 | UWB_TEMPERATUR_DOSIERVENTIL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD4F2 | UWB_WIDERSTAND_DOSIERVENTIL_GEMESSEN | Ohm | High | unsigned int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F3 | UWB_WIDERSTAND_DOSIERVENTIL_OFFSET_ROHWERT | Ohm | High | signed int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F4 | UWB_WIDERSTAND_DOSIERVENTIL_OFFSETWERT | Ohm | High | signed int | - | 0.00195313 | 1.0 | 0.0 |
| 0xD4F5 | UWB_STROM_DOSIERVENTIL | A | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD4F6 | UWB_TASTVERHAELTNIS_DOSIERVENTIL_ANFORDERUNG | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD4F7 | UWB_FREQUENZ_DOSIERVENTIL_ANFORDERUNG | Hz | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4F9 | UWB_MASSENSTROM_DOSIERVENTIL | mg/s | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD4FA | UWB_LANGZEIT_DOSIERMENGE | g | High | unsigned int | - | 32.768 | 1.0 | 0.0 |
| 0xD4FB | UWB_DOSIERVENTIL_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD4FE | UWB_KILOMETER_AKTUELLER_DC | km | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD4FF | UWB_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E0 | UWB_LAUFZEIT_ECHO_1_DIREKT_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E1 | UWB_LAUFZEIT_ECHO_1_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E2 | UWB_LAUFZEIT_ECHO_2_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E3 | UWB_LAUFZEIT_ECHO_3_KOMBI_PIEZO | µs | High | unsigned int | - | 0.015625 | 1.0 | 0.0 |
| 0xD6E4 | UWB_SIGNALGUETE_ECHO_1_DIREKT_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E5 | UWB_SIGNALGUETE_ECHO_1_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E6 | UWB_SIGNALGUETE_ECHO_2_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E7 | UWB_SIGNALGUETE_ECHO_3_KOMBI_PIEZO | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6E8 | UWB_ZEIT_REHEATING | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6EA | UWB_FUELLSTAND_PASSIVTANK_ROHWERT | mm | High | unsigned int | - | 0.25 | 1.0 | 0.0 |
| 0xD6EB | UWB_FUELLMENGE_PASSIVTANK_RELATIV | % | High | unsigned int | - | 0.5 | 1.0 | 0.0 |
| 0xD6EC | UWB_FUELLMENGE_PASSIVTANK_ROHWERT | l | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6ED | UWB_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD6EF | UWB_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD6F0 | UWB_ERSTBEFUELLUNGSSTATUS | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD6F2 | UWB_LERNWERT_FOERDERPUMPE | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD6F3 | UWB_TEMPERATUR_DOSIERVENTIL_MAXIMAL | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD6F7 | UWB_PRODUKTIONSDATUM_LQS | HEX | High | unsigned int | - | - | - | - |
| 0xD6FB | UWB_KAVITAETSERKENNUNG_GUELTIG | 0/1 | High | 0x0001 | - | - | - | - |
| 0xD7C1 | UWB_CDM2_SUMME_NACHFUELLMENGE | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7C2 | UWB_TEMPERATUR_FOERDERPUMPE | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7C4 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C5 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7C6 | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD7D4 | UWB_DOSIERMENGE_AKTUELLER_DC | mg | High | unsigned int | - | 16.0 | 1.0 | 0.0 |
| 0xD7D5 | UWB_FOERDERPUMPE_PWM_SOLL | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD7D6 | UWB_FOERDERPUMPE_PWM_IST | % | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0xD7D8 | UWB_CDM2_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD7DA | UWB_CDM2_FUELLMENGE_AKTIVTANK_ENDE | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7DB | UWB_CDM2_FUELLMENGE_AKTIVTANK_ANFANG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD7DC | UWB_TEMPERATUR_ABGAS_DOSIERVENTIL | °C | High | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0xD7DE | UWB_TEMPERATUR_DRUCKSENSOR_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7DF | UWB_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | °C | High | unsigned int | - | 0.0625 | 1.0 | -273.15 |
| 0xD7EE | UWB_TEMPERATUR_DOSIERVENTIL_CROSSCHECK | °C | High | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0xD7EF | UWB_SYSTEMLECKAGE_DIAGNOSE | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD810 | UWB_SYSTEMLECKAGE_GEMESSEN | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD812 | UWB_VOLUMENSTROM_ANGEFORDERT | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD813 | UWB_CDM1_VERBRAUCH_IST_ZU_SOLL | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD814 | UWB_DOSIERVENTIL_SPANNUNG_HIGH_SIDE | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD815 | UWB_DOSIERVENTIL_SPANNUNG_LOW_SIDE | V | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 |
| 0xD816 | UWB_SPANNUNG_KLEMME_30B_LOGIK | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD818 | UWB_SPANNUNG_KLEMME_30_HEIZER | V | High | signed int | - | 0.01953125 | 1.0 | 0.0 |
| 0xD826 | UWB_DRUCKSENSOR_DATEN_FAST_CHANNEL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD827 | UWB_DRUCKSENSOR_FEHLER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD828 | UWB_LECKAGE_FUELLSTANDSBASIERT_BITFELD | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD829 | UWB_CDM3_DOSIERMENGENABWEICHUNG_RELATIV | % | High | signed int | - | 0.1 | 1.0 | 0.0 |
| 0xD82A | UWB_CDM3_DOSIERMENGE_IST_AUS_DRUCKSTUFEN | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82B | UWB_CDM3_DOSIERMENGE_SOLL | mg | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD82D | UWB_SUMME_DRUCKSTUFEN_INJ_BLOCK | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD82E | UWB_SUMME_DRUCKSTUFEN_PUMP_AIR | bar | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD84E | UWB_CDM2_HIGH_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD84F | UWB_CDM2_LOW_RELATIV | % | High | signed int | - | 0.01 | 1.0 | 0.0 |
| 0xD854 | UWB_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xD855 | UWB_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD856 | UWB_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | l | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 |
| 0xD857 | UWB_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD858 | UWB_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | l | High | signed int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8F6 | UWB_SYSTEMSTEIFIGKEIT_BERECHNET | - | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 |
| 0xD8F7 | UWB_SYSTEM_LECKAGE_ADAPTIERT | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F8 | UWB_SYSTEM_LECKAGE_CDM1 | - | High | unsigned int | - | 0.03125 | 1.0 | 0.0 |
| 0xD8F9 | UWB_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | l | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xD8FA | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FB | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xD8FC | UWB_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | µl | High | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### MESSAUFZEICHNUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Messung ungültig |
| 0x1000 | Konzentrationsmessung vorhanden |
| 0x2000 | TD1 Füllstandsmessung vorhanden |
| 0x3000 | TD1 Füllstandsmessung und Konzentration vorhanden |
| 0x4000 | Messung unplausibel |
| 0x5000 | Messung unplausibel und Konzentration vorhanden |
| 0x6000 | - |
| 0x7000 | Messung nicht durchgeführt |
| 0xFFFF | Wert ungültig |

### MESSUNGEN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0/5 plausible Messungen |
| 0x01 | 1/5 plausible Messungen |
| 0x02 | 2/5 plausible Messungen |
| 0x03 | 3/5 plausible Messungen |
| 0x04 | 4/5 plausible Messungen |
| 0x05 | 5/5 plausible Messungen |
| 0xFF | Wert ungültig |

### NTC_ERROR

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x0004 | offene Leitung |
| 0x0008 | Kurzschluss |
| 0xFFFF | Wert ungültig |

### PASSIVTANK_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Passivtank verbaut. |
| 0x01 | Passivtank verbaut. |
| 0xFF | Wert ungültig |

### QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x8 | Initialisierung |
| 0x1 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x9 | reserviert |
| 0x2 | reserviert |
| 0xA | Signalwert ist gültig, Zustand/Status temporär |
| 0x3 | reserviert |
| 0xB | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x4 | reserviert |
| 0xC | reserviert |
| 0x6 | reserviert |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0x7 | reserviert |
| 0xF | Signal ungültig |
| 0xFF | Wert ungültig |

### QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE

| WERT | TEXT |
| --- | --- |
| 0x8 | Initialisierung |
| 0x1 | Signalwert ist gültig und abgesichert und plausibilisiert |
| 0x9 | reserviert |
| 0x2 | Signalwert ist gültig, Zustand/Status permanent |
| 0xA | reserviert |
| 0x3 | reserviert |
| 0xB | reserviert |
| 0x4 | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status permanent |
| 0xC | Abgleichwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x6 | Signalwert ist ungültig |
| 0xE | reserviert |
| 0x7 | reserviert |
| 0xF | Signal ungültig |
| 0xFF | Wert ungültig |

### QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x8 | Initialisierung |
| 0x1 | reserviert |
| 0x9 | reserviert |
| 0x2 | Signalwert ist gültig |
| 0xA | Signalwert ist gültig, Zustand/Status temporär |
| 0x3 | Signalqualität bzw. Überwachung eingeschränkt |
| 0xB | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x4 | reserviert |
| 0xC | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x6 | Signalwert ist ungültig |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0x7 | reserviert |
| 0xF | Signal ungültig |
| 0xFF | Wert ungültig |

### QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT

| WERT | TEXT |
| --- | --- |
| 0x8 | Initialisierung |
| 0x1 | reserviert |
| 0x9 | reserviert |
| 0x2 | Signalwert ist gültig |
| 0xA | Signalwert ist gültig, Zustand/Status temporär |
| 0x3 | Signalqualität bzw. Überwachung eingeschränkt |
| 0xB | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x4 | reserviert |
| 0xC | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x6 | Signalwert ist ungültig |
| 0xE | Signalwert ist ungültig, Zustand/Status temporär |
| 0x7 | reserviert |
| 0xF | Signal ungültig |
| 0xFF | Wert ungültig |

### RBM_CYCLE

| WERT | TEXT |
| --- | --- |
| 0x00 | RBM Zyklus nicht aktiv |
| 0x04 | RBM Zyklus aktiv |
| 0x24 | RBM Zyklus nicht erfüllbar |
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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XAE60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_KOMPLETTRUECKSAUGEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_RUECKSAUGEN_DETAIL | - | - | - | Detaillierter Status der Routine Komplettrücksaugen. |

### RES_0XAE61_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_TEILRUECKSAUGEN_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_RUECKSAUGEN_DETAIL | - | - | - | Detaillierter Status der Routine Teilrücksaugen. |

### RES_0XAE62_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_LECKAGEERKENNUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_LECKAGEERKENNUNG_DETAIL | - | - | - | Detaillierter Status der Routine Leckageerkennung. |

### RES_0XAE63_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_DRUCKAUFBAU_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_DRUCKAUFBAU_DETAIL | - | - | - | Detaillierter Status der Routine Druckaufbau. |

### RES_0XAE64_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_DOSIERMENGENTEST_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_DOSIERMENGENTEST_DETAIL | - | - | - | Detaillierter Status für die Routine Dosiermengentest. |

### RES_0XAE68_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_ACT_INIT_TESTS | - | - | - | Aktuell laufender Teilschritt. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SCR_INIT | - | - | - | Status Inbetriebnahmesquenz. |

### RES_0XAE6A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_TROCKENTAKTUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_TROCKENTAKTUNG_DETAIL | - | - | - | Detaillierter Status der Routine Trockentaktung. |

### RES_0XAE6B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_TRANSFERPUMPE_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_TRANSFERPUMPE_DETAIL | - | - | - | Detaillierter Status der Routine Test Transferpumpe. |

### RES_0XAE6C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_AKTIVTANKHEIZUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Deatillierter Status der Routine Test Aktivtankheizung. |

### RES_0XAE6D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| - | - | - | + | Bit | high | BITFIELD | - | BF_FREIGABE_ROUTINE | - | - | - | Status der Start- und Freigabebedingungen für die Routine. |
| STAT_DOSIERLEITUNGSHEIZUNG_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_HEIZUNG_DETAIL | - | - | - | Detaillierter Zustand der Routine Test Dosierleitungsheizung. |

### RES_0XAE6E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| STAT_SCR_DEAKTIVIERUNG_SCHUTZDOSIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_DEAKTIVIERUNG_SCHUTZDOSIERUNG | - | - | - | Status der Deaktivierung der Schutzdosierung. |

### RES_0XAE6F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_ROUTINE | - | - | - | Zustand der Routine. |
| STAT_SCR_MONTAGEMODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATE_MONTAGEMODUS | - | - | - | Zustand des Montagemodus. 0 = Montagemodus inaktiv. 1 = Montagemodus aktiv. |

### SCR_SYSTEM_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x0000 | ES_ON - Zündung an, Motor aus |
| 0x0001 | ASYN_ON - Zündung an und  asynchrone Kurbelwellenrotation |
| 0x0002 | SYN_ON - Zündung an und synchrone Kurbelwellenrotation |
| 0x0003 | SYN_OFF - Zündung aus und synchrone Kurbelwellenrotation |
| 0x0004 | PWL - Nachlauf |
| 0x0005 | WAIT - Vorlauf |
| 0x0006 | DEAC - SG geht in den Ruhezustand |
| 0xFFFF | Wert ungültig |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| SCR_KOMPLETTRUECKSAUGEN | 0xAE60 | - | Komplettrücksaugen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE60_R |
| SCR_TEILRUECKSAUGEN | 0xAE61 | - | Teilrücksaugen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE61_R |
| SCR_LECKAGEERKENNUNG | 0xAE62 | - | Leckageerkennung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE62_R |
| SCR_DRUCKAUFBAU | 0xAE63 | - | Druckaufbau | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE63_R |
| SCR_TEST_DOSIERMENGE | 0xAE64 | - | Dosiermengentest | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE64_R | RES_0xAE64_R |
| SCR_SYSTEMCHECK_INIT | 0xAE68 | - | Inbetriebnahmeroutine im Werk | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE68_R | RES_0xAE68_R |
| SCR_TROCKENTAKTUNG | 0xAE6A | - | Funktionstest Dosierventil. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6A_R |
| SCR_TRANSFERPUMPE | 0xAE6B | - | Funktionstest Transferpumpe. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE6B_R | RES_0xAE6B_R |
| SCR_TEST_AKTIVTANKHEIZUNG | 0xAE6C | - | Funktionstest Aktivtankheizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6C_R |
| SCR_TEST_DOSIERLEITUNGSHEIZUNG | 0xAE6D | - | Funktionstest Dosierleitungsheizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6D_R |
| SCR_DEAKTIVIERUNG_SCHUTZDOSIERUNG | 0xAE6E | - | Manuelles Deaktivieren der AdBlue-Schutzdosierung für den Werkstattdiagnosetest der SCR-Abgaskomponenten.  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6E_R |
| MONTAGEMODUS | 0xAE6F | - | Steuern des Montagemodus für das SCR Gen3 SG. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE6F_R |
| STEUERN_FOERDERPUMPE | 0xD280 | - | Test zum Steuern der Förderpumpe. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD280_D | - |
| STEUERN_RUECKFOERDERPUMPE | 0xD281 | - | Test zum Steuern der Förderpumpe (Rückwärtslauf). | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD281_D | - |
| STEUERN_AKTIVTANKHEIZUNG | 0xD282 | - | Test zum Steuern der Aktivtankheizung. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD282_D | - |
| STEUERN_DOSIERLEITUNGSHEIZUNG | 0xD283 | - | Test zum Steuern der Dosierleitungsheizung. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD283_D | - |
| STEUERN_DOSIERVENTIL | 0xD284 | - | Test zum Steuern des Dosierventils. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD284_D | - |
| STEUERN_TRANSFERPUMPE | 0xD285 | - | Test zum Steuern der Transferpumpe. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD285_D | - |
| STEUERN_LANGZEIT_DOSIERMENGE | 0xD286 | - | Schreiben der Langzeitdosiermenge. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD286_D | - |
| STEUERN_LANGZEIT_UMPUMPMENGE | 0xD287 | - | Schreiben der Langzeitumpumpmenge. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD287_D | - |
| CAN_RX_MOTORABSTELLZEIT | 0xD28D | STAT_CAN_RX_MOTOR_AUS_ZEIT_WERT | T_ES_CAN | min | T_ES_CAN | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_MOTOR_AUS_ZEIT | 0xD28E | STAT_CAN_RX_STATUS_MOTOR_AUS_ZEIT | STATE_T_ES_CAN | 0-n | STATE_T_ES_CAN | High | unsigned int | TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT | - | - | - | - | 22 | - | - |
| CAN_RX_STATUS_FID_SCR_SYSTEM | 0xD28F | STAT_CAN_RX_STATUS_FID_SCR_SYSTEM_WERT | LF_FID_INH_CUS_COM_RX_TMP | - | LF_FID_INH_CUS_COM_RX_TMP | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_ERSTBEFUELLUNGSSTATUS | 0xD290 | - | Schreiben des Erstbefüllungsstatus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD290_D | - |
| STEUERN_ZEITDAUER_SPULENHEIZEN | 0xD291 | - | Schreiben der Zeitdauer für das Spulenheizen des Dosierventils. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD291_D | - |
| STEUERN_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | 0xD292 | - | Manuelles Rücksetzen der Zeitdauer für die Übertemperatur des Dosierventils. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD292_D | - |
| STEUERN_INITIALISIERUNG_LERNWERT_FOERDERPUMPE | 0xD293 | - | Manuelles Neuinitialisieren des Lernwerts der Förderpumpe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD293_D | - |
| STEUERN_INITIALISIERUNG_LERNWERT_DOSIERVENTIL | 0xD294 | - | Manuelles Neuinitialisieren des Spulenwiderstands des Dosierventils. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD294_D | - |
| STEUERN_INITIALISIERUNG_FUELLMENGE_AKTIVTANK | 0xD29A | - | Manuelles Neuinitialisieren der Füllmenge des Aktivtanks. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD29A_D | - |
| STEUERN_INITIALISIERUNG_FUELLMENGE_PASSIVTANK | 0xD29B | - | Manuelles Neuinitialisieren der Füllmenge des Passivtanks. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD29B_D | - |
| STEUERN_INITIALISIERUNG_RAM | 0xD29C | - | Neuinitialisierung zahlreicher nicht OBD-relevanter Systemgrößen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD29C_D | - |
| CAN_RX_SOLL_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | 0xD2B7 | STAT_CAN_RX_SOLL_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV_WERT | MASS_RAG_TAR_INJ_DOWN | g | MASS_RAG_TAR_INJ_DOWN | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_ABGAS_MASSENSTROM | 0xD2B9 | STAT_CAN_RX_STATUS_ABGAS_MASSENSTROM_WERT | MFL_EG_KGH | kg/h | MFL_EG_KGH | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_INITIALISIERUNG_FILTER_WERT_DME | 0xD2BA | STAT_CAN_RX_STATUS_INITIALISIERUNG_FILTER_WERT_DME | LV_M_RAG_REQ_SYN_SCRM | 0-n | LV_M_RAG_REQ_SYN_SCRM | High | unsigned char | STATUS_INITIALISIERUNG_FILTER_WERT_DME | - | - | - | - | 22 | - | - |
| CAN_RX_TEMPERATUR_AUSSEN | 0xD2BB | STAT_CAN_RX_TEMPERATUR_AUSSEN_WERT | TAA | °C | TAA | High | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB | 0xD2BE | STAT_CAN_RX_LUFTDRUCK_MOTOR_ANTRIEB_WERT | AMP | hPa | AMP | High | unsigned int | - | 0.08291752 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_TEMPERATUR_MOTOR_ANTRIEB | 0xD2BF | STAT_CAN_RX_TEMPERATUR_MOTOR_ANTRIEB_WERT | TCO_1_SYS | °C | TCO_1_SYS | High | unsigned int | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| CAN_RX_STATUS_ANTRIEB_FAHRZEUG | 0xD2C0 | - | STATE_DRIV_VEH | Bit | ST_DRV_VEH | High | BITFIELD | BF_STATUS_ANTRIEB_FAHRZEUG | - | - | - | - | 22 | - | - |
| CAN_RX_STATUS_OBD_ZYKLUS | 0xD2C1 | - | STATE_OBD_CYC_TMP | Bit | ST_OBD_CYC | High | BITFIELD | BF_STATUS_OBD_ZYKLUS | - | - | - | - | 22 | - | - |
| CAN_RX_OBD_POSITION_DROSSELKLAPPE_MOTOR | 0xD2C2 | STAT_CAN_RX_OBD_POSITION_DROSSELKLAPPE_MOTOR_WERT | FAC_TPS_1_SAE | % | FAC_TPS_1_SAE | High | unsigned char | - | 0.3921568 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_OBD_MODELLWERT_LAST_MOTOR | 0xD2C3 | STAT_CAN_RX_OBD_MODELLWERT_LAST_MOTOR_WERT | LOAD_CLC_SAE_CAN | % | LOAD_CLC_SAE_CAN | High | unsigned char | - | 0.3921568 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_IST_DREHMOMENT_KURBELWELLE | 0xD2C4 | STAT_CAN_RX_IST_DREHMOMENT_KURBELWELLE_WERT | TQI_SP | Nm | TQI_SP | High | signed int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE | 0xD2C5 | STAT_CAN_RX_IST_DREHZAHL_MOTOR_KURBELWELLE_WERT | N | 1/min | N | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | 0xD2C6 | STAT_CAN_RX_STATUS_SPERRE_FEHLERSPEICHER_FZM | LV_CDN_COM_DIAG | 0-n | LV_CDN_COM_DIAG | High | unsigned int | STATUS_SPERRE_FEHLERSPEICHER_FZM | - | - | - | - | 22 | - | - |
| CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0xD2C7 | STAT_CAN_RX_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT_WERT | VS | km/h | VS | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_WEGSTRECKE_KILOMETER | 0xD2C8 | STAT_CAN_RX_WEGSTRECKE_KILOMETER_WERT | DIST_KM | km | DIST_KM | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_STATUS_KLEMME | 0xD2CA | STAT_CAN_RX_STATUS_KLEMME | STATE_IGK_CAN | 0-n | STATE_IGK_CAN | High | unsigned int | STATUS_KLEMME | - | - | - | - | 22 | - | - |
| CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CB | STAT_CAN_RX_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | AC_VEH | m/s² | AC_VEH | High | signed int | - | 0.0008475 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CC | STAT_CAN_RX_QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | STATE_AC_LGT_VEH | 0-n | QU_ACLNX_COG | High | unsigned int | QUALIFIER_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CD | STAT_CAN_RX_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | AC_TRV_VEH | m/s² | AC_TRV_VEH | High | signed int | - | 0.0008475 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | 0xD2CE | STAT_CAN_RX_QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | STATE_AC_TRV_VEH | 0-n | QU_ACLNY_COG | High | unsigned int | QUALIFIER_QUERBESCHLEUNIGUNG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_ZEIT_SEKUNDE_ZAEHLER_RELATIV | 0xD2CF | STAT_CAN_RX_ZEIT_SEKUNDE_ZAEHLER_RELATIV_WERT | T_ABSV_COM | s | T_ABSV_COM | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_TEMPERATUR_SCR_KATALYSATOR | 0xD2D0 | STAT_CAN_RX_TEMPERATUR_SCR_KATALYSATOR_WERT | TEG_CAT_UP | °C | TEG_CAT_UP | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| CAN_RX_TEMPERATUR_KRAFTSTOFF | 0xD2D2 | STAT_CAN_RX_TEMPERATUR_KRAFTSTOFF_WERT | TFU | °C | TFU | High | unsigned int | - | 1.0 | 1.0 | -50.0 | - | 22 | - | - |
| CAN_RX_DREHMOMENT_FAHRERWUNSCH_PID_SCR_SYSTEM | 0xD2D3 | STAT_CAN_RX_DREHMOMENT_FAHRERWUNSCH_PID_SCR_SYSTEM_WERT | TQ_REQ_CAN_SAE | % | TQ_REQ_CAN_SAE | High | unsigned char | - | 1.0 | 1.0 | -125.0 | - | 22 | - | - |
| CAN_RX_DREHMOMENT_AKTUELLE_PID_SCR_SYSTEM | 0xD2D4 | STAT_CAN_RX_DREHMOMENT_AKTUELLE_PID_SCR_SYSTEM_WERT | TQI_AV_SAE | % | TQI_AV_SAE | High | unsigned char | - | 1.0 | 1.0 | -125.0 | - | 22 | - | - |
| CAN_RX_STATUS_ZUSTAND_FAHRZEUG | 0xD2D5 | STAT_CAN_RX_STATUS_ZUSTAND_FAHRZEUG | STATE_PTL_NET | 0-n | ST_CON_VEH | High | unsigned char | STATUS_ZUSTAND_FAHRZEUG | - | - | - | - | 22 | - | - |
| CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR | 0xD2D6 | STAT_CAN_RX_EINSPRITZMENGE_KRAFTSTOFF_MOTOR_WERT | FCO_SUM_CAN_H_RNG | µl | FCO_SUM_CAN_H_RNG | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | 0xD2DA | STAT_CAN_RX_QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | STATE_N_CAN | 0-n | QU_AVL_RPM_ENG_CRSH | High | unsigned char | QUALIFIER_IST_DREHZAHL_MOTOR_KURBELWELLE | - | - | - | - | 22 | - | - |
| CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | 0xD2DB | STAT_CAN_RX_QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | STATE_VS_CAN | 0-n | QU_V_VEH_COG | High | unsigned char | QUALIFIER_GESCHWINDIGKEIT_FAHRZEUG_SCHWERPUNKT | - | - | - | - | 22 | - | - |
| CAN_RX_STEUERUNG_BASIS_TEILNETZE | 0xD2DC | STAT_CAN_RX_STEUERUNG_BASIS_TEILNETZE_WERT | STATE_CTL_BAS_PTL_NET | - | STATE_CTL_BAS_PTL_NET | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV | 0xD2DF | STAT_CAN_RX_RESTLAUFLEISTUNG_SCR_ADDITIV_WERT | DIST_AVL_RAG_VOL_TANK_ECU_ENVD | km | DIST_AVL_RAG_VOL_TANK_ECU_ENVD | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | 0xD2E0 | STAT_CAN_TX_ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | LV_MIL_REQ_ON | 0-n | LV_MIL_REQ_ON | High | unsigned int | ANFORDERUNG_MIL_DIAGNOSE_OBD_SCR | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_SYSTEM_FEHLER_OBD_SCR | 0xD2E1 | - | LF_DWIS_REQ_EXTN | Bit | LF_DWIS_REQ_EXTN | High | BITFIELD | BF_STATUS_SYSTEM_FEHLER_OBD_SCR | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_SPERRE_SCR_SYSTEM | 0xD2E2 | - | STATE_SCR_LOCK_TMP | Bit | ST_ILK_SCRS | High | BITFIELD | BF_STATUS_SPERRE_SCR_SYSTEM | - | - | - | - | 22 | - | - |
| CAN_TX_IST_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | 0xD2E3 | STAT_CAN_TX_IST_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV_WERT | MASS_RAG_AVL_SCR | g | MASS_RAG_AVL_SCR | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_LIM_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV | 0xD2E4 | STAT_CAN_TX_LIM_BEREITSTELLUNG_EINSPRITZMENGE_SCR_ADDITIV_WERT | MFL_RAG_TAR_INJ_LIM_MAX[0] | mg/s | MFL_RAG_TAR_INJ_LIM_MAX[0] | High | unsigned int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_BEREITSTELLUNG_SCR_ADDITIV | 0xD2E5 | - | LV_ENA_RAG_INJ | Bit | LV_ENA_RAG_INJ | High | BITFIELD | BF_STATUS_BEREITSTELLUNG_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | 0xD2E6 | STAT_CAN_TX_STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | LV_M_RAG_AVL_SYN_RASL | 0-n | tbd | High | unsigned char | STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_IST_QUALITAET_SCR_ADDITIV | 0xD2E7 | STAT_CAN_TX_IST_QUALITAET_SCR_ADDITIV_WERT | CONC_RAG_VLD | % | CONC_RAG_VLD | High | unsigned int | - | 0.01 | 1.0 | -10.0 | - | 22 | - | - |
| CAN_TX_TEMPERATUR_SCR_ADDITIV | 0xD2E8 | STAT_CAN_TX_TEMPERATUR_SCR_ADDITIV_WERT | TEMP_RAG_TANK | °C | TEMP_RAG_TANK | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV | 0xD2E9 | STAT_CAN_TX_STATUS_RESTLAUFLEISTUNG_SCR_ADDITIV_WERT | DIST_AVL_RAG_VOL_TANK_ENVD | km | DIST_AVL_RAG_VOL_TANK_ENVD | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_NACHTANKEN_SCR_ADDITIV | 0xD2EA | STAT_CAN_TX_STATUS_NACHTANKEN_SCR_ADDITIV | LV_RAG_TANK_FILL_DET_EXTN_ACT | 0-n | ST_RFG_SCRA | High | unsigned char | STATUS_NACHTANKEN_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_FUELLSTAND_GEBER_SCR_ADDITIV | 0xD2EB | STAT_CAN_TX_STATUS_FUELLSTAND_GEBER_SCR_ADDITIV | STATE_RAG_TANK_VOL_WARN_LVL | 0-n | STATE_RAG_TANK_VOL_WARN_LVL | High | unsigned char | STATUS_FUELLSTAND_GEBER_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_STATUS_FUELLSTAND_NIVEAU_SCR_ADDITIV | 0xD2EC | STAT_CAN_TX_STATUS_FUELLSTAND_NIVEAU_SCR_ADDITIV | STATE_RAG_VOL_TANK_LEVEL | 0-n | ST_FLLV_LEV_SCRA | High | unsigned char | STATUS_FUELLSTAND_NIVEAU_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_VERHAELTNIS_GEMISCH_SCR_ADDITIV | 0xD2ED | STAT_CAN_TX_VERHAELTNIS_GEMISCH_SCR_ADDITIV_WERT | RAG_VOL_FILL_BFR_FILL_PERC | % | RAG_VOL_FILL_BFR_FILL_PERC | High | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_FUELLSTAND_SCR_ADDITIV | 0xD2EE | STAT_CAN_TX_FUELLSTAND_SCR_ADDITIV_WERT | RAG_VOL_TANK_PERC | % | RAG_VOL_TANK_PERC | High | unsigned char | - | 0.39215686 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_NACHFUELLMENGE_SCR_ADDITIV | 0xD2EF | STAT_CAN_TX_NACHFUELLMENGE_SCR_ADDITIV_WERT | RAG_VOL_TANK_MAX_FILL | l | RAG_VOL_TANK_MAX_FILL | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | 0xD3F9 | STAT_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | STATE_CONC_RAG_VLD | 0-n | STATE_CONC_RAG_VLD | High | unsigned int | TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV | - | - | - | - | 22 | - | - |
| CAN_TX_ID_ENERGIE_BORDNETZ_VERBRAUCHER_STROM_FEPM | 0xD3FA | STAT_CAN_TX_ID_ENERGIE_BORDNETZ_VERBRAUCHER_STROM_FEPM_WERT | EGY_IDX_CUR_BN_SCR | - | EGY_IDX_CUR_BN_SCR | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_IST_STROM_VERBRAUCHER_FEPM | 0xD3FB | STAT_CAN_TX_IST_STROM_VERBRAUCHER_FEPM_WERT | CUR_VALUE_AV_SCR | A | CUR_VALUE_AV_SCR | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_VORAUSSAGE_FEPM | 0xD3FC | STAT_CAN_TX_VERBRAUCHER_STROM_VORAUSSAGE_FEPM_WERT | CUR_VALUE_PRED_SCR | A | CUR_VALUE_PRED_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_BEDARF_FEPM | 0xD3FD | STAT_CAN_TX_VERBRAUCHER_STROM_BEDARF_FEPM_WERT | CUR_VALUE_RSV_SCR | A | CUR_VALUE_RSV_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_STROM_VERFUEGBAR_FEPM | 0xD3FE | STAT_CAN_TX_VERBRAUCHER_STROM_VERFUEGBAR_FEPM_WERT | CUR_VALUE_AVL_SCR | A | CUR_VALUE_AVL_SCR | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_TX_VERBRAUCHER_KLASSE_FEPM | 0xD3FF | STAT_CAN_TX_VERBRAUCHER_KLASSE_FEPM | CUR_CLAS_SCR | 0-n | CUR_CLAS_SCR | High | unsigned char | VERBRAUCHER_KLASSE_FEPM | - | - | - | - | 22 | - | - |
| FOERDERPUMPE_FEHLER_HIGH_BYTE | 0xD46B | - | LF_ERR_STATE_RAG_PUMP_CTL (high word) | Bit | LF_ERR_STATE_RAG_PUMP_CTL (high word) | High | BITFIELD | BF_FOERDERPUMPE_FEHLER_HIGH_BYTE | - | - | - | - | 22 | - | - |
| FOERDERPUMPE_FEHLER_LOW_BYTE | 0xD46C | - | LF_ERR_STATE_RAG_PUMP_CTL (low word) | Bit | LF_ERR_STATE_RAG_PUMP_CTL (low word) | High | BITFIELD | BF_FOERDERPUMPE_FEHLER_LOW_BYTE | - | - | - | - | 22 | - | - |
| DWIS_ANFORDERUNG_CCM | 0xD46D | - | LF_DWIS_FAIL_EXTN | Bit | LF_DWIS_FAIL_EXTN | High | BITFIELD | BF_DWIS_ANFORDERUNG_TAMPERING | - | - | - | - | 22 | - | - |
| DWIS_ANFORDERUNG_GRUPPE | 0xD46E | - | LF_DWIS_REQ_GRP | Bit | LF_DWIS_REQ_GRP | High | BITFIELD | BF_DWIS_ANFORDERUNG_GRUPPE | - | - | - | - | 22 | - | - |
| AKTIVTANKHEIZUNG_PWM | 0xD48F | STAT_AKTIVTANKHEIZUNG_PWM_WERT | PWM_WUP_RAG_HEAT[0] | % | PWM_WUP_RAG_HEAT[0] | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_PWM | 0xD490 | STAT_DOSIERLEITUNGSHEIZUNG_PWM_WERT | PWM_WUP_RAG_HEAT[1] | % | PWM_WUP_RAG_HEAT[1] | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_AKTIV | 0xD491 | STAT_AKTIVTANKHEIZUNG_AKTIV | LV_RAG_HEAT_ACT[0] | 0/1 | LV_RAG_HEAT_ACT[0] | High | unsigned int | - | - | - | - | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_AKTIV | 0xD492 | STAT_DOSIERLEITUNGSHEIZUNG_AKTIV | LV_RAG_HEAT_ACT[1] | 0/1 | LV_RAG_HEAT_ACT[1] | High | unsigned int | - | - | - | - | - | 22 | - | - |
| AKTIVTANKHEIZUNG_STROM_ROHWERT | 0xD493 | STAT_AKTIVTANKHEIZUNG_STROM_ROHWERT_WERT | VP_CFB_RAG_HEAT[0] | V | VP_CFB_RAG_HEAT[0] | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT | 0xD494 | STAT_DOSIERLEITUNGSHEIZUNG_STROM_ROHWERT_WERT | VP_CFB_RAG_HEAT[1] | V | VP_CFB_RAG_HEAT[1] | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_STROM | 0xD495 | STAT_AKTIVTANKHEIZUNG_STROM_WERT | CFB_RAG_HEAT[0] | A | CFB_RAG_HEAT[0] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_STROM | 0xD496 | STAT_DOSIERLEITUNGSHEIZUNG_STROM_WERT | CFB_RAG_HEAT[1] | A | CFB_RAG_HEAT[1] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_LEISTUNG | 0xD497 | STAT_AKTIVTANKHEIZUNG_LEISTUNG_WERT | POW_RAG_HEAT_TANK_CNS | W | POW_RAG_HEAT_TANK_CNS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_LEISTUNG | 0xD498 | STAT_DOSIERLEITUNGSHEIZUNG_LEISTUNG_WERT | POW_RAG_HEAT_TUBE_CNS | W | POW_RAG_HEAT_TUBE_CNS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_STROM | 0xD49B | STAT_FOERDERPUMPE_STROM_WERT | CUR_EM_RMS | A | CUR_EM_RMS | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_DREHZAHL | 0xD49C | STAT_FOERDERPUMPE_DREHZAHL_WERT | N_RAG_PUMP_MES | 1/min | N_RAG_PUMP_MES | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKREGELUNG_AKTIV | 0xD49D | STAT_DRUCKREGELUNG_AKTIV | LV_PRS_CTL_RAG_ON | 0/1 | LV_PRS_CTL_RAG_ON | High | unsigned int | - | - | - | - | - | 22 | - | - |
| DRUCKREGELUNG_GEPRUEFT | 0xD49E | STAT_DRUCKREGELUNG_GEPRUEFT | LV_PRS_CTL_RAG_CHK_OK | 0/1 | LV_PRS_CTL_RAG_CHK_OK | High | unsigned int | - | - | - | - | - | 22 | - | - |
| DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN | 0xD49F | STAT_DOSIERLEITUNG_FUELLUNGSGRAD_NACH_RUECKSAUGEN_WERT | RAG_VOL_PUMP_DOWN | ml | RAG_VOL_PUMP_DOWN | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT | 0xD4A0 | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_ROHWERT_WERT | TEMP_RAG_TANK_SENS | °C | TEMP_RAG_TANK_SENS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_AKTIVTANK | 0xD4A1 | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_WERT | TEMP_RAG_SYS | °C | TEMP_RAG_SYS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_DRUCKSENSOR_ROHWERT | 0xD4A2 | STAT_TEMPERATUR_DRUCKSENSOR_ROHWERT_WERT | TEMP_PRS_RAG_SENS | °C | TEMP_PRS_RAG_SENS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| FOERDERPUMPE_DREHZAHL_SOLLWERT | 0xD4A3 | STAT_FOERDERPUMPE_DREHZAHL_SOLL_WERT | N_SP_EM | 1/min | N_SP_EM | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCK_ROHWERT | 0xD4A4 | STAT_DRUCK_ROHWERT_WERT | PRS_RAG_SENT (relativ) | bar | PRS_RAG_SENT | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCK_GEFILTERT | 0xD4A5 | STAT_DRUCK_GEFILTERT_WERT | PRS_RAG_FIL (absolut) | bar | PRS_RAG_FIL | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCK_NOMINAL | 0xD4A6 | STAT_DRUCK_NOMINAL_WERT | PRS_RAG_SP | bar | PRS_RAG_SP | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCK_ABWEICHUNG_VON_NOMINAL | 0xD4A7 | STAT_DRUCK_ABWEICHUNG_VON_NOMINAL_WERT | PRS_CTL_DIF_RAG_FIL | bar | PRS_CTL_DIF_RAG_FIL | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| SCHALLGESCHWINDIGKEIT_ROHWERT | 0xD4A8 | STAT_SCHALLGESCHWINDIGKEIT_ROHWERT_WERT | VEL_RAG_UCLS | m/s | VEL_RAG_UCLS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| QUALITAET_ROHWERT | 0xD4A9 | STAT_QUALITAET_ROHWERT_WERT | CONC_RAG_SENS | % | CONC_RAG_SENS | High | unsigned int | - | 0.01 | 1.0 | -10.0 | - | 22 | - | - |
| QUALITAET | 0xD4AA | STAT_QUALITAET_WERT | CONC_RAG_VLD | % | CONC_RAG_VLD | High | unsigned int | - | 0.01 | 1.0 | -10.0 | - | 22 | - | - |
| LEVELSENSOR_AKTIVTANK_FEHLER | 0xD4AB | - | LF_STATE_RAG_UCLS_SENT | Bit | LF_STATE_RAG_UCLS_SENT | High | BITFIELD | BF_LEVELSENSOR_AKTIVTANK_FEHLER | - | - | - | - | 22 | - | - |
| LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO | 0xD4AC | STAT_LEVELSIGNAL_GUELTIG_AKTIVTANK_DIREKT_PIEZO | LV_RAG_RTL_INFO_NOT_REL | 0/1 | LV_RAG_RTL_INFO_NOT_REL | High | unsigned int | - | - | - | - | - | 22 | - | - |
| LEVELSIGNAL_GUELTIG_AKTIVTANK_KOMBI_PIEZO | 0xD4AD | STAT_LEVELSIGNAL_GUELTIG_AKTIVTANK_KOMBI_PIEZO | LV_RAG_RTL_INFO_NOT_VLD_2 | 0/1 | LV_RAG_RTL_INFO_NOT_VLD_2 | High | unsigned int | - | - | - | - | - | 22 | - | - |
| FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT | 0xD4AE | STAT_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_ROHWERT_WERT | RTL_MES_SENS[0] | mm | RTL_MES_SENS[0] | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_AKTIVTANK_KOMBI_PIEZO_ROHWERT | 0xD4AF | STAT_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO_ROHWERT_WERT | RTL_MES_SENS[1] | mm | RTL_MES_SENS[1] | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_AKTIVTANK_DIREKT_PIEZO | 0xD4B0 | STAT_FUELLSTAND_AKTIVTANK_DIREKT_PIEZO_WERT | RTL_MES_SENS_FIL[0] | mm | RTL_MES_SENS_FIL[0] | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_AKTIVTANK_KOMBI_PIEZO | 0xD4B1 | STAT_FUELLSTAND_AKTIVTANK_KOMBI_PIEZO_WERT | RTL_MES_SENS_FIL[1] | mm | RTL_MES_SENS_FIL[1] | High | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_1_DIREKT_PIEZO | 0xD4B2 | STAT_AMPLITUDE_ECHO_1_DIREKT_PIEZO_WERT | AMPL_RAG_UCLS[3] | - | AMPL_RAG_UCLS[3] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_1_KOMBI_PIEZO | 0xD4B3 | STAT_AMPLITUDE_ECHO_2_DIREKT_PIEZO_WERT | AMPL_RAG_UCLS[0] | - | AMPL_RAG_UCLS[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_2_KOMBI_PIEZO | 0xD4B4 | STAT_AMPLITUDE_ECHO_1_KOMBI_PIEZO_WERT | AMPL_RAG_UCLS[1] | - | AMPL_RAG_UCLS[1] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AMPLITUDE_ECHO_3_KOMBI_PIEZO | 0xD4B5 | STAT_AMPLITUDE_ECHO_2_KOMBI_PIEZO_WERT | AMPL_RAG_UCLS[2] | - | AMPL_RAG_UCLS[2] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT | 0xD4B6 | STAT_FUELLMENGE_AKTIVTANK_DIREKT_PIEZO_UNGEFILTERT_WERT | RTL_CONT_SENS_VCT[0] | l | RTL_CONT_SENS_VCT[0] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_KOMBI_PIEZO_UNGEFILTERT | 0xD4B7 | STAT_FUELLMENGE_AKTIVTANK_KOMBI_PIEZO_UNGEFILTERT_WERT | RTL_CONT_SENS_VCT[1] | l | RTL_CONT_SENS_VCT[1] | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_SPULENHEIZEN | 0xD4B8 | STAT_ZEITDAUER_SPULENHEIZEN_WERT | T_TOT_RDU_ANST_HEAT[0] | s | T_TOT_RDU_ANST_HEAT[0] | High | unsigned long | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| BATTERIESPANNUNG_SCR | 0xD4C3 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung gemessen vom SCR Steuergerät. VB_H_RES. | V | VB_H_RES | High | signed int | - | 0.01953125 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT | 0xD4D0 | STAT_FUELLMENGE_AKTIVTANK_SCHNELL_GEFILTERT_WERT | RTL_VOL_FIL_H_RES[0] | l | RTL_VOL_FIL_H_RES[0] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT | 0xD4D1 | STAT_FUELLMENGE_AKTIVTANK_LANGSAM_GEFILTERT_WERT | RTL_VOL_FIL_H_RES[1] | l | RTL_VOL_FIL_H_RES[1] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_AKTIVTANK_RELATIV | 0xD4D2 | STAT_FUELLMENGE_AKTIVTANK_RELATIV_WERT | RAG_VOL_TANK_PERC | % | RAG_VOL_TANK_PERC | High | unsigned int | - | 0.39215686 | 1.0 | 0.0 | - | 22 | - | - |
| NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT | 0xD4D3 | STAT_NACHFUELLBARE_MENGE_AKTIVTANK_GEFILTERT_WERT | RAG_VOL_TANK_MAX_FILL | l | RAG_VOL_TANK_MAX_FILL | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | 0xD4D4 | - | LF_RTL_SENS_MES_VLD_DET | Bit | LF_RTL_SENS_MES_VLD_DET | High | BITFIELD | BF_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_AKTIVTANK | - | - | - | - | 22 | - | - |
| NACHTANKERKENNUNG | 0xD4D6 | STAT_NACHTANKERKENNUNG | LV_RS_SENS_REAC_FILL | 0/1 | LV_RS_SENS_REAC_FILL | High | unsigned int | - | - | - | - | - | 22 | - | - |
| AUFTAUZEIT_AKTUELL | 0xD4D7 | STAT_AUFTAUZEIT_AKTUELL_WERT | T_TOT_DUR_CUR_WUP_RAG_HEAT | s | T_TOT_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUZEIT_VORGABE | 0xD4D8 | STAT_AUFTAUZEIT_VORGABE_WERT | T_MAX_DUR_CUR_WUP_RAG_HEAT_COR | s | T_MAX_DUR_CUR_WUP_RAG_HEAT_COR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUZEIT_EPA | 0xD4D9 | STAT_AUFTAUZEIT_EPA_WERT | T_MAX_DUR_CUR_WUP_RAG_HEAT | s | T_MAX_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| AUFTAUEN_AKTIV | 0xD4DA | STAT_AUFTAUEN_AKTIV | LV_RAG_WUP_HEAT_ACT | 0/1 | LV_RAG_WUP_HEAT_ACT | High | unsigned int | - | - | - | - | - | 22 | - | - |
| AUFTAUEN_ABGESCHLOSSEN | 0xD4DB | STAT_AUFTAUEN_ABGESCHLOSSEN | LV_RAG_WUP_HEAT_CMPL | 0/1 | LV_RAG_WUP_HEAT_CMPL | High | unsigned int | - | - | - | - | - | 22 | - | - |
| TEMPERATUR_AKTIVTANK_GESPEICHERT | 0xD4DC | STAT_TEMPERATUR_AKTIVTANK_GESPEICHERT_WERT | TEMP_RAG_SYS_HEAT_ST | °C | TEMP_RAG_SYS_HEAT_ST | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| AKTIVTANK_GEFROREN | 0xD4DE | STAT_AKTIVTANK_GEFROREN | LV_RAG_TANK_ICE | 0/1 | LV_RAG_TANK_ICE | High | unsigned int | - | - | - | - | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_ANZAHL_ECHOS | 0xD4DF | - | STATE_RAG_TANK_SENS | Bit | STATE_RAG_TANK_SENS | High | BITFIELD | BF_LEVELSENSOR_PASSIVTANK_FEHLER | - | - | - | - | 22 | - | - |
| TEMPERATUR_PASSIVTANK | 0xD4E1 | STAT_TEMPERATUR_PASSIVTANK_WERT | TEMP_RAG_TANK_PAS | °C | TEMP_RAG_TANK_PAS | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_SIGNALZEIT_ROHWERT | 0xD4E2 | STAT_LEVELSENSOR_PASSIVTANK_SIGNALZEIT_ROHWERT_TEXT | T_PER_L_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | TEXT | T_PER_L_PWM_RAG_TANK_SENS[0..4] | High | string[10] | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LEVELSENSOR_PASSIVTANK_SIGNALPERIODE_ROHWERT | 0xD4E3 | STAT_LEVELSENSOR_PASSIVTANK_SIGNALPERIODE_ROHWERT_TEXT | T_PER_PWM_RAG_TANK_SENS[x] Array mit 5 Elementen | TEXT | T_PER_PWM_RAG_TANK_SENS[0..4] | High | string[10] | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | 0xD4E4 | - | LF_RTL_SENS_PAS_MES_VLD_DET | Bit | LF_RTL_SENS_PAS_MES_VLD_DET | High | BITFIELD | BF_FREIGABEMASKE_FUER_FUELLSTANDSFUNKTION_PASSIVTANK | - | - | - | - | 22 | - | - |
| NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT | 0xD4E5 | STAT_NACHFUELLBARE_MENGE_PASSIVTANK_GEFILTERT_WERT | RAG_VOL_TANK_PAS_MAX_FILL | l | RAG_VOL_TANK_PAS_MAX_FILL | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| PASSIVTANK_VERBAUT | 0xD4E6 | STAT_PASSIVTANK_VERBAUT | LV_RAG_TANK_PAS_CPT_AVL | 0-n | LV_RAG_TANK_PAS_CPT_AVL | High | unsigned int | PASSIVTANK_VERBAUT | - | - | - | - | 22 | - | - |
| LANGZEIT_UMPUMPMENGE | 0xD4E7 | STAT_LANGZEIT_UMPUMPMENGE_WERT | RAG_VOL_TOT_TRF_PUMP | l | RAG_VOL_TOT_TRF_PUMP | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_SCR_STEUERGERAET | 0xD4E8 | STAT_TEMPERATUR_SCR_STEUERGERAET_WERT | TEMP_HEAT_ECU | °C | TEMP_HEAT_ECU | High | unsigned int | - | 0.75 | 1.0 | -48.0 | - | 22 | - | - |
| ZUSTAND_SCR_SYSTEM | 0xD4E9 | STAT_ZUSTAND_SCR_SYSTEM | STATE_ECU | 0-n | STATE_ECU | High | unsigned int | SCR_SYSTEM_ZUSTAND | - | - | - | - | 22 | - | - |
| NACHLAUF_GESTARTET | 0xD4EA | STAT_NACHLAUF_GESTARTET | LV_PWL | 0/1 | LV_PWL | High | unsigned int | - | - | - | - | - | 22 | - | - |
| NACHLAUF_AKTIV | 0xD4EC | STAT_NACHLAUF_AKTIV | LV_PWL_ACT | 0/1 | LV_PWL_ACT | High | unsigned int | - | - | - | - | - | 22 | - | - |
| NACHLAUF_ABGESCHLOSSEN | 0xD4ED | STAT_NACHLAUF_ABGESCHLOSSEN | LV_PWL_END | 0/1 | LV_PWL_END | High | unsigned int | - | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT | 0xD4EE | STAT_NACHLAUFZEIT_WERT | T_PWL_LST_DC | s | T_PWL_LST_DC | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_SEIT_MOTORSTOPP | 0xD4EF | STAT_ZEIT_SEIT_MOTORSTOPP_WERT | T_ES_CUS | min | T_ES_CUS | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_SEIT_MOTORSTART | 0xD4F0 | STAT_ZEIT_SEIT_MOTORSTART_WERT | T_AST | s | T_AST | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL | 0xD4F1 | STAT_TEMPERATUR_DOSIERVENTIL_WERT | TEMP_RDU_COIL[0] | °C | TEMP_RDU_COIL[0] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_GEMESSEN | 0xD4F2 | STAT_WIDERSTAND_DOSIERVENTIL_GEMESSEN_WERT | R_RDU_MES[0] | Ohm | R_RDU_MES[0] | High | unsigned int | - | 0.00195313 | 1.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_OFFSET_ROHWERT | 0xD4F3 | STAT_WIDERSTAND_DOSIERVENTIL_ROHWERT_WERT | R_RAW_RDU_PIN_CBL[0] | Ohm | R_RAW_RDU_PIN_CBL[0] | High | signed int | - | 0.00195313 | 1.0 | 0.0 | - | 22 | - | - |
| WIDERSTAND_DOSIERVENTIL_OFFSETWERT | 0xD4F4 | STAT_WIDERSTAND_DOSIERVENTIL_OFFSETWERT_WERT | R_RDU_PIN_CBL[0] | Ohm | R_RDU_PIN_CBL[0] | High | signed int | - | 0.00195313 | 1.0 | 0.0 | - | 22 | - | - |
| STROM_DOSIERVENTIL | 0xD4F5 | STAT_STROM_DOSIERVENTIL_WERT | CFB_RDU[0] | A | CFB_RDU[0] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| TASTVERHAELTNIS_DOSIERVENTIL_ANFORDERUNG | 0xD4F6 | STAT_TASTVERHAELTNIS_DOSIERVENTIL_ANFORDERUNG_WERT | PWM_RAG_INJ[0] | % | PWM_RAG_INJ[0] | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| FREQUENZ_DOSIERVENTIL_ANFORDERUNG | 0xD4F7 | STAT_FREQUENZ_DOSIERVENTIL_ANFORDERUNG_WERT | FRQ_RAG_INJ[0] | Hz | FRQ_RAG_INJ | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| MASSENSTROM_DOSIERVENTIL | 0xD4F9 | STAT_MASSENSTROM_DOSIERVENTIL_WERT | MFL_RAG_AVL_SCR | mg/s | MFL_RAG_AVL_SCR | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| LANGZEIT_DOSIERMENGE | 0xD4FA | STAT_LANGZEIT_DOSIERMENGE_WERT | M_RAG_CNS_TOT_ENVD | g | M_RAG_CNS_TOT_ENVD | High | unsigned int | - | 32.768 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_FEHLER | 0xD4FB | STAT_DOSIERVENTIL_FEHLER | LV_RDU_STUCK_DET[0] | 0/1 | LV_RDU_STUCK_DET[0] | High | unsigned int | - | - | - | - | - | 22 | - | - |
| KILOMETER_AKTUELLER_DC | 0xD4FE | STAT_KILOMETER_AKTUELLER_DC_WERT | DIST_DC_ENVD | km | DIST_DC_ENVD | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL | 0xD4FF | STAT_ZEITDAUER_UEBERTEMPERATUR_DOSIERVENTIL_WERT | T_TOT_TEMP_RDU_OVER_MAX[0] | s | T_TOT_TEMP_RDU_OVER_MAX_ENVD[0] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPULENHEIZEN_AKTIV | 0xD508 | STAT_SPULENHEIZEN_AKTIV | LV_TEMP_RDU_COIL_CTL_ON[0] | 0/1 | LV_TEMP_RDU_COIL_CTL_ON[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| SPULENHEIZEN_GEREGELT_AKTIV | 0xD509 | STAT_SPULENHEIZEN_GEREGELT_AKTIV | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[0] | 0/1 | LV_TEMP_RDU_COIL_CTL_HEAT_CYC_L[0] | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LAUFZEIT_ECHO_1_DIREKT_PIEZO | 0xD6E0 | STAT_LAUFZEIT_ECHO_1_DIREKT_PIEZO_WERT | RT_RAG_UCLS[3] | µs | RT_RAG_UCLS[3] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_ECHO_1_KOMBI_PIEZO | 0xD6E1 | STAT_LAUFZEIT_ECHO_1_KOMBI_PIEZO_WERT | RT_RAG_UCLS[0] | µs | RT_RAG_UCLS[0] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_ECHO_2_KOMBI_PIEZO | 0xD6E2 | STAT_LAUFZEIT_ECHO_2_KOMBI_PIEZO_WERT | RT_RAG_UCLS[1] | µs | RT_RAG_UCLS[1] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| LAUFZEIT_ECHO_3_KOMBI_PIEZO | 0xD6E3 | STAT_LAUFZEIT_ECHO_3_KOMBI_PIEZO_WERT | RT_RAG_UCLS[2] | µs | RT_RAG_UCLS[2] | High | unsigned int | - | 0.015625 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_1_DIREKT_PIEZO | 0xD6E4 | STAT_SIGNALGUETE_ECHO_1_DIREKT_PIEZO_WERT | QLY_RAG_UCLS[3] | - | QLY_RAG_UCLS[3] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_1_KOMBI_PIEZO | 0xD6E5 | STAT_SIGNALGUETE_ECHO_1_KOMBI_PIEZO_WERT | QLY_RAG_UCLS[0] | - | QLY_RAG_UCLS[0] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_2_KOMBI_PIEZO | 0xD6E6 | STAT_SIGNALGUETE_ECHO_2_KOMBI_PIEZO_WERT | QLY_RAG_UCLS[1] | - | QLY_RAG_UCLS[1] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIGNALGUETE_ECHO_3_KOMBI_PIEZO | 0xD6E7 | STAT_SIGNALGUETE_ECHO_3_KOMBI_PIEZO_WERT | QLY_RAG_UCLS[2] | - | QLY_RAG_UCLS[2] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZEIT_REHEATING | 0xD6E8 | STAT_ZEIT_REHEATING_WERT | T_ACT_DUR_CUR_WUP_RAG_HEAT | s | T_ACT_DUR_CUR_WUP_RAG_HEAT | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLSTAND_PASSIVTANK_ROHWERT | 0xD6EA | STAT_FUELLSTAND_PASSIVTANK_ROHWERT_WERT | RTL_TANK_SENS_RAW [0] | mm | RTL_TANK_SENS_RAW[0] | High | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_RELATIV | 0xD6EB | STAT_FUELLMENGE_PASSIVTANK_RELATIV_WERT | RAG_VOL_TANK_PAS_PERC | % | RAG_VOL_TANK_PAS_PERC | High | unsigned int | - | 0.5 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_ROHWERT | 0xD6EC | STAT_FUELLMENGE_PASSIVTANK_ROHWERT_WERT | RTL_CONT_SENS_TANK_PAS | l | RTL_CONT_SENS_TANK_PAS | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT | 0xD6ED | STAT_FUELLMENGE_PASSIVTANK_SCHNELL_GEFILTERT_WERT | RTL_VOL_SENS_PAS_FIL[0] | l | RTL_VOL_SENS_PAS_FIL[0] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT | 0xD6EF | STAT_FUELLMENGE_PASSIVTANK_LANGSAM_GEFILTERT_WERT | RTL_VOL_SENS_PAS_FIL[1] | l | RTL_VOL_SENS_PAS_FIL[1] | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| ERSTBEFUELLUNGSSTATUS | 0xD6F0 | STAT_ERSTBEFUELLUNGSSTATUS | LV_RAG_REAC_FILL_FIRST_CMPL | 0/1 | LV_RAG_REAC_FILL_FIRST_CMPL | High | unsigned int | - | - | - | - | - | 22 | - | - |
| LERNWERT_FOERDERPUMPE | 0xD6F2 | STAT_LERNWERT_FOERDERPUMPE_WERT | RAG_VOL_PUMP_STK_FIL | µl | RAG_VOL_PUMP_STK_FIL | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_MAXIMAL | 0xD6F3 | STAT_TEMPERATUR_DOSIERVENTIL_MAXIMAL_WERT | TEMP_RDU_COIL_MES_MAX[0] | °C | TEMP_RDU_COIL_MES_MAX[0] | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| PRODUKTIONSDATUM_LQS | 0xD6F7 | STAT_PRODUKTIONSDATUM_LQS_WERT | Enthält Produktionsjahr, -Woche und -Tag des Level-Quality-Sensors. | HEX | DATA_PROD_NR_UCLS | High | unsigned int | - | - | - | - | - | 22 | - | - |
| PRODUKTIONSNUMMER_LQS | 0xD6F8 | STAT_PRODUKTIONSNUMMER_LQS_DATA | Enthält die eindeutige Produktionsnummer des Level-Quality-Sensors. | DATA | DATA_SRL_NR_UCLS | High | data[8] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UMDREHUNGEN_FOERDERPUMPE_LANGZEIT | 0xD6F9 | STAT_UMDREHUNGEN_FOERDERPUMPE_LANGZEIT_WERT | NR_RAG_PUMP_ROT_TOT | - | NR_RAG_PUMP_ROT_TOT | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UMDREHUNGEN_FOERDERPUMPE_DRUCKAUFBAU_CDM | 0xD6FA | STAT_UMDREHUNGEN_FORDERPUMPE_DRUCKAUFBAU_CDM_WERT | CTR_ROT_RAG_VOL_PUMP | - | CTR_ROT_RAG_VOL_PUMP | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KAVITAETSERKENNUNG_GUELTIG | 0xD6FB | STAT_KAVITAETSERKENNUNG_GUELTIG | LV_RAG_TANK_VAC_DET_VLD | 0/1 | LV_RAG_TANK_VAC_DET_VLD | High | unsigned int | - | - | - | - | - | 22 | - | - |
| KAVITAETSERKENNUNG_GUELTIG_NVMY | 0xD6FC | STAT_KAVITAETSERKENNUNG_GUELTIG_NVMY | LV_RAG_TANK_VAC_DET_VLD_NVMY | 0/1 | LV_RAG_TANK_VAC_DET_VLD_NVMY | High | unsigned char | - | - | - | - | - | 22 | - | - |
| MANIPULATION | 0xD6FD | STAT_MANIPULATION | LV_DWIS_FAIL_TOT | 0/1 | LV_DWIS_FAIL_TOT | High | unsigned char | - | - | - | - | - | 22 | - | - |
| AUFTAUZEIT_MAXIMAL_MSA | 0xD7C0 | STAT_AUFTAUZEIT_MAXIMAL_MSA_WERT | T_MAX_DUR_CUR_WUP_RAG_HEAT_STST | s | T_MAX_DUR_CUR_WUP_RAG_HEAT_STST | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_SUMME_NACHFUELLMENGE | 0xD7C1 | STAT_CDM2_SUMME_NACHFUELLMENGE_WERT | RAG_VOL_FILL_SUM_CNS_ERR | l | RAG_VOL_FILL_SUM_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_FOERDERPUMPE | 0xD7C2 | STAT_TEMPERATUR_FOERDERPUMPE_WERT | TEMP_RAG_PUMP_MDL | °C | TEMP_RAG_PUMP_MDL | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_FOERDERPUMPE_ZU_HOCH | 0xD7C3 | STAT_TEMPERATUR_FOERDERPUMPE_ZU_HOCH | LV_TEMP_RAG_SYS_OVER_HEAT | 0/1 | LV_TEMP_RAG_SYS_OVER_HEAT | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT | 0xD7C4 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_WERT | VOL_PUMP_STK_STND_FIL_CNS_ERR | µl | VOL_PUMP_STK_STND_FIL_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER | 0xD7C5 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_WERT | VOL_PUMP_STK_STND_FIRST_CNS_ERR | µl | VOL_PUMP_STK_STND_FIRST_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ | 0xD7C6 | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_WERT | VOL_PUMP_STK_STND_REF_CNS_ERR | µl | VOL_PUMP_STK_STND_REF_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKREGLER_INTEGRAL_ANTEIL | 0xD7C7 | STAT_DRUCKREGLER_INTEGRAL_ANTEIL_WERT | VFL_RAG_PUMP_I_CLL_CTL, [Mikroliter/Sekunde] | - | VFL_RAG_PUMP_I_CLL_CTL | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERTE_MENGE_LUFTERKENNUNG | 0xD7C8 | STAT_DOSIERTE_MENGE_LUFTERKENNUNG_WERT | M_RAG_COR_AIR_INJ_TOT | mg | M_RAG_COR_AIR_INJ_TOT | High | signed int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERTE_MENGE_LUFTERKENNUNG_KORREKTUR | 0xD7C9 | STAT_DOSIERTE_MENGE_LUFTERKENNUNG_KORREKTUR_WERT | M_RAG_COR_AIR_INJ_REL | mg | M_RAG_COR_AIR_INJ_REL | High | signed int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| SOFTWARE_VERSION_LQS | 0xD7CA | STAT_SOFTWARE_VERSION_LQS_TEXT | DATA_SW_VERS_CAL_IDF_UCLS[0..3] | TEXT | DATA_SW_VERS_CAL_IDF_UCLS[0..3] | High | string[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMPENLECKAGE_ADAPTIONSKENNFELD | 0xD7CB | STAT_PUMPENLECKAGE_ADAPTIONSKENNFELD_DATA | IP_AD_VFL_LEAK_RAG | DATA | IP_AD_VFL_LEAK_RAG | High | data[20] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PUMPENLECKAGE_ADAPTIONSWERT_MINIMUM | 0xD7CC | STAT_PUMPENLECKAGE_ADAPTIONSWERT_MINIMUM_WERT | VFL_LEAK_RAG_AD_MIN, [Mikroliter/Sekunde] | - | VFL_LEAK_RAG_AD_MIN | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| PUMPENLECKAGE_ADAPTIONSWERT_MAXIMUM | 0xD7CD | STAT_PUMPENLECKAGE_ADAPTIONSWERT_MAXIMUM_WERT | VFL_LEAK_RAG_AD_MAX [Mikroliter/Sekunde] | - | VFL_LEAK_RAG_AD_MAX | High | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_MASSE_AKTUELLER_DC | 0xD7CE | STAT_SCHUTZDOSIERUNG_MASSE_AKTUELLER_DC_WERT | MASS_RAG_TEMP_RDU_PROT_DC | g | MASS_RAG_TEMP_RDU_PROT_DC[0] | High | unsigned int | - | 0.02 | 1.0 | 0.0 | - | 22 | - | - |
| SCHUTZDOSIERUNG_ANZAHL_AKTUELLER_DC | 0xD7CF | STAT_SCHUTZDOSIERUNG_ANZAHL_AKTUELLER_DC_WERT | CTR_RAG_TEMP_RDU_PROT_DC | - | CTR_RAG_TEMP_RDU_PROT_DC[0] | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_NCAT_NUMERATOR | 0xD7D0 | STAT_RBM_NCAT_NUMERATOR_WERT | CTR_MOD_9_RBM[4] | - | CTR_MOD_9_RBM[4] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_NCAT_DENOMINATOR | 0xD7D1 | STAT_RBM_NCAT_DENOMINATOR_WERT | CTR_MOD_9_RBM[5] | - | CTR_MOD_9_RBM[5] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_DENOMINATOR | 0xD7D2 | STAT_RBM_DENOMINATOR_DATA | CTR_CDN_RBM[x] | DATA | CTR_CDN_RBM[x] | High | data[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RBM_NUMERATOR | 0xD7D3 | STAT_RBM_NUMERATOR_DATA | CTR_COMP_RBM[x] | DATA | CTR_COMP_RBM[x] | High | data[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERMENGE_AKTUELLER_DC | 0xD7D4 | STAT_DOSIERMENGE_AKTUELLER_DC_WERT | M_RAG_CNS_DC_ENVD | mg | M_RAG_CNS_DC_ENVD | High | unsigned int | - | 16.0 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_PWM_SOLL | 0xD7D5 | STAT_FOERDERPUMPE_PWM_SOLL_WERT | PWM_EM_DUCY | % | PWM_EM_DUCY | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| FOERDERPUMPE_PWM_IST | 0xD7D6 | STAT_FOERDERPUMPE_PWM_IST_WERT | PWM_RAG_PUMP | % | PWM_RAG_PUMP | High | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_VERBRAUCH_IST_ZU_SOLL | 0xD7D8 | STAT_CDM2_VERBRAUCH_IST_ZU_SOLL_WERT | RAG_VOL_DIF_CNS_ERR_PERC | % | RAG_VOL_DIF_CNS_ERR_PERC | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_FUELLMENGE_AKTIVTANK_ENDE | 0xD7DA | STAT_CDM2_FUELLMENGE_AKTIVTANK_ENDE_WERT | RTL_VOL_FIL_HLD_END_CNS_ERR | l | RTL_VOL_FIL_HLD_END_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_FUELLMENGE_AKTIVTANK_ANFANG | 0xD7DB | STAT_CDM2_FUELLMENGE_AKTIVTANK_ANFANG_WERT | RTL_VOL_FIL_HLD_ST_CNS_ERR | l | RTL_VOL_FIL_HLD_ST_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_ABGAS_DOSIERVENTIL | 0xD7DC | STAT_TEMPERATUR_ABGAS_DOSIERVENTIL_WERT | TEG_RAG_INJ_BK_1 | °C | TEG_RAG_INJ_BK_1 | High | signed int | - | 0.0625 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_DRUCKSENSOR_CROSSCHECK | 0xD7DE | STAT_TEMPERATUR_DRUCKSENSOR_CROSSCHECK_WERT | TEMP_PRS_RAG_SENS_HLD_CRCH | °C | TEMP_PRS_RAG_SENS_HLD_CRCH | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK | 0xD7DF | STAT_TEMPERATUR_LEVELSENSOR_AKTIVTANK_CROSSCHECK_WERT | TEMP_RAG_TANK_SENS_HLD_CRCH | °C | TEMP_RAG_TANK_SENS_HLD_CRCH | High | unsigned int | - | 0.0625 | 1.0 | -273.15 | - | 22 | - | - |
| TEMPERATUR_DOSIERVENTIL_CROSSCHECK | 0xD7EE | STAT_TEMPERATUR_DOSIERVENTIL_CROSSCHECK_WERT | TEMP_RDU_COIL_MES_HLD_CRCH | °C | TEMP_RDU_COIL_MES_HLD_CRCH | High | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEMLECKAGE_DIAGNOSE | 0xD7EF | STAT_SYSTEMLECKAGE_DIAGNOSE_WERT | VFL_RAG_LEAK_DIAG, [Mikroliter/Sekunde] | - | VFL_RAG_LEAK_DIAG | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEMLECKAGE_GEMESSEN | 0xD810 | STAT_SYSTEMLECKAGE_GEMESSEN_WERT | VFL_LEAK_RAG_MES, [Mikroliter/Sekunde] | - | VFL_LEAK_RAG_MES | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| VOLUMENSTROM_ANGEFORDERT | 0xD812 | STAT_VOLUMENSTROM_ANGEFORDERT_WERT | VFL_RAG_PUMP_PCTL, [Mikroliter/Sekunde] | - | VFL_RAG_PUMP_CTL | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VERBRAUCH_IST_ZU_SOLL | 0xD813 | STAT_CDM1_VERBRAUCH_IST_ZU_SOLL_WERT | VOL_PUMP_STK_DIF_CNS_ERR_PERC | % | VOL_PUMP_STK_DIF_CNS_ERR_PERC | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_SPANNUNG_HIGH_SIDE | 0xD814 | STAT_DOSIERVENTIL_SPANNUNG_HIGH_SIDE_WERT | VP_FB_RAG_INJ_H_SIDE | V | VP_FB_RAG_INJ_H_SIDE | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERVENTIL_SPANNUNG_LOW_SIDE | 0xD815 | STAT_DOSIERVENTIL_SPANNUNG_LOW_SIDE_WERT | VP_FB_RAG_INJ_L_SIDE | V | VP_FB_RAG_INJ_L_SIDE | High | unsigned int | - | 0.00015258 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30B_LOGIK | 0xD816 | STAT_SPANNUNG_KLEMME_30B_LOGIK_WERT | VP_PWR[0] | V | VP_PWR[0] | High | signed int | - | 0.01953125 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30_HEIZER | 0xD818 | STAT_SPANNUNG_KLEMME_30_HEIZER_WERT | VP_PWR[1] | V | VP_PWR[1] | High | signed int | - | 0.01953125 | 1.0 | 0.0 | - | 22 | - | - |
| SERIENNUMMER_VOLLSTAENDIG | 0xD820 | STAT_SERIENNUMMER_VOLLSTAENDIG_DATA | DATA_MATRIX_CODE_PCB Vollständige eindeutige 16-stellige Seriennummer des SCR-Steuergeräts. | DATA | DATA_MATRIX_CODE_PCB | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_HIGH_FEHLER_BIS_UEBERGABE_CDM2 | 0xD821 | STAT_CDM1_HIGH_FEHLER_BIS_UEBERGABE_CDM2_WERT | CTR_RAG_CNS_H_RTL_MIL_REQ | - | CTR_RAG_CNS_H_RTL_MIL_REQ | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_LOW_FEHLER_BIS_UEBERGABE_CDM2 | 0xD822 | STAT_CDM1_LOW_FEHLER_BIS_UEBERGABE_CDM2_WERT | CTR_RAG_CNS_L_RTL_MIL_REQ | - | CTR_RAG_CNS_L_RTL_MIL_REQ | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_VERBRAUCH_SUMME | 0xD823 | STAT_CDM2_VERBRAUCH_SUMME_WERT | RAG_VOL_INJ_SUM_INT_CNS_ERR | µl | RAG_VOL_INJ_SUM_INT_CNS_ERR | High | unsigned long | - | 0.00390625 | 1.0 | 0.0 | - | 22 | - | - |
| ZAEHLER_DC_RBM | 0xD824 | STAT_ZAEHLER_DC_RBM_WERT | CTR_CDN_OBD_RBM | - | CTR_CDN_OBD_RBM | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZAEHLER_DC | 0xD825 | STAT_ZAEHLER_DC_WERT | CTR_IGK_CYC_RBM | - | CTR_IGK_CYC_RBM | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_DATEN_FAST_CHANNEL | 0xD826 | STAT_DRUCKSENSOR_DATEN_FAST_CHANNEL_WERT | DATA_CHN_SENS_SENT[0][UREA_PRS] | - | DATA_CHN_SENS_SENT[0][UREA_PRS] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_FEHLER | 0xD827 | STAT_DRUCKSENSOR_FEHLER_WERT | DATA_ERR_SRL_SENS_SENT[UREA_PRS] | - | DATA_ERR_SRL_SENS_SENT[UREA_PRS] | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_FUELLSTANDSBASIERT_BITFELD | 0xD828 | STAT_LECKAGE_FUELLSTANDSBASIERT_BITFELD_WERT | LF_RTL_CNS_LEAK_DIAG_ENA_CDN | - | LF_RTL_CNS_LEAK_DIAG_ENA_CDN | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM3_DOSIERMENGENABWEICHUNG_RELATIV | 0xD829 | STAT_CDM3_DOSIERMENGENABWEICHUNG_RELATIV_WERT | M_RAG_DIF_CNS_ERR_PERC | % | M_RAG_DIF_CNS_ERR_PERC | High | signed int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM3_DOSIERMENGE_IST_AUS_DRUCKSTUFEN | 0xD82A | STAT_CDM3_DOSIERMENGE_IST_AUS_DRUCKSTUFEN_WERT | M_RAG_PRS_SUM_CNS_ERR_ENVD | mg | M_RAG_PRS_SUM_CNS_ERR_ENVD | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CDM3_DOSIERMENGE_SOLL | 0xD82B | STAT_CDM_DOSIERMENGE_SOLL_WERT | M_RAG_TAR_SUM_CNS_ERR_ENVD | mg | M_RAG_TAR_SUM_CNS_ERR_ENVD | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SUMME_DRUCKSTUFEN_INJ_BLOCK | 0xD82D | STAT_SUMME_DRUCKSTUFEN_INJ_BLOCK_WERT | PRS_DIF_SUM_INJ_BLOCK[0] | bar | PRS_DIF_SUM_INJ_BLOCK[0] | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| SUMME_DRUCKSTUFEN_PUMP_AIR | 0xD82E | STAT_SUMME_DRUCKSTUFEN_PUMP_AIR_WERT | PRS_DIF_SUM_PUMP_AIR | bar | PRS_DIF_SUM_PUMP_AIR | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_HIGH_RELATIV | 0xD84E | STAT_CDM2_HIGH_RELATIV_WERT | RAG_CNS_H_RTL_PERC_SAE | % | RAG_CNS_H_RTL_PERC_SAE | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_LOW_RELATIV | 0xD84F | STAT_CDM2_LOW_RELATIV_WERT | RAG_CNS_L_RTL_PERC_SAE | % | RAG_CNS_L_RTL_PERC_SAE | High | signed int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR | 0xD854 | STAT_LECKAGE_REFERENZ_DOSIERMENGE_INJEKTOR_WERT | RAG_INJ_CNS_WIN_SUM_LEAK_DIAG_ENVD | l | RAG_INJ_CNS_WIN_SUM_LEAK_DIAG_ENVD | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | 0xD855 | STAT_CDM2_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG_WERT | RAG_VOL_DIF_SUM_CNS_ERR | l | RAG_VOL_DIF_SUM_CNS_ERR | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSAENDERUNG | 0xD856 | STAT_LECKAGE_DOSIERMENGE_AUS_FUELLSTANDSERFASSUNG_WERT | RAG_VOL_DIF_WIN_SUM_LEAK_DIAG_ENVD | l | RAG_VOL_DIF_WIN_SUM_LEAK_DIAG_ENVD | High | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_REFERENZ_DOSIERMENGE_INJEKTOR | 0xD857 | STAT_CDM2_REFERENZ_DOSIERMENGE_INJEKTOR_WERT | RAG_VOL_INJ_SUM_CNS_ERR | l | RAG_VOL_INJ_SUM_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG | 0xD858 | STAT_CDM2_VOLUMEN_AUS_FUELLSTANDSAENDERUNG_WERT | RTL_DIF_SYM_FAST_CNS_ERR | l | RTL_DIF_SYM_FAST_CNS_ERR | High | signed int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEMSTEIFIGKEIT_BERECHNET | 0xD8F6 | STAT_SYSTEMSTEIFIGKEIT_BERECHNET_WERT | STFN_RAG_SYS | - | STFN_RAG_SYS | High | unsigned int | - | 0.00012207 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_LECKAGE_ADAPTIERT | 0xD8F7 | STAT_SYSTEM_LECKAGE_ADAPTIERT_WERT | VFL_LEAK_RAG_AD | - | VFL_LEAK_RAG_AD | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| SYSTEM_LECKAGE_CDM1 | 0xD8F8 | STAT_SYSTEM_LECKAGE_CDM1_WERT | VFL_RAG_LEAK_CNS_ERR | - | VFL_RAG_LEAK_CNS_ERR | High | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG | 0xD8F9 | STAT_CDM1_VOLUMEN_AUS_DOSIERANFORDERUNG_WERT | VOL_DIF_SYM_FAST_CNS_ERR | l | VOL_DIF_SYM_FAST_CNS_ERR | High | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2 | 0xD8FA | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_GEFILTERT_2_WERT | VOL_PUMP_STK_FIL_CNS_ERR | µl | VOL_PUMP_STK_FIL_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2 | 0xD8FB | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_ERSTER_2_WERT | VOL_PUMP_STK_FIRST_CNS_ERR | µl | VOL_PUMP_STK_FIRST_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2 | 0xD8FC | STAT_CDM1_VOLUMEN_FOERDERPUMPE_LERNWERT_REFERENZ_2_WERT | VOL_PUMP_STK_REF_CNS_ERR | µl | VOL_PUMP_STK_REF_CNS_ERR | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN | 0xE38B | STAT_GESAMTDOSIERMENGE_AKTUELLER_DC_TANK_GEFROREN_WERT | Gen3: M_RAG_CNS_DC_TOT_ENVD Gen4: M_RAG_CNS_DC_TOT | mg | M_RAG_CNS_DC_TOT_ENVD | High | unsigned int | - | 16.0 | 1.0 | 0.0 | - | 22 | - | - |
| AKTIVTANKHEIZUNG_LEISTUNG_SETPOINT | 0xE38C | STAT_AKTIVTANKHEIZUNG_LEISTUNG_SETPOINT_WERT | POW_RAG_HEAT_TANK_SEL_SP | W | POW_RAG_HEAT_TANK_SEL_SP | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| DOSIERLEITUNGSHEIZUNG_LEISTUNG_SETPOINT | 0xE38D | STAT_DOSIERLEITUNGSHEIZUNG_LEISTUNG_SETPOINT_WERT | POW_RAG_HEAT_TUBE_SEL_SP | W | POW_RAG_HEAT_TUBE_SEL_SP | High | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_FUELLSTAND_GEBER_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0 | unter Restriction Level |
| 0x1 | über Restriction Level |
| 0x3 | Signal ungültig |

### STATUS_FUELLSTAND_NIVEAU_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0 | Leer |
| 0x1 | Begrenzung |
| 0x2 | Warnung |
| 0x3 | OK |
| 0x4 | Voll |
| 0x7 | Signal ungültig |
| 0xFF | Wert ungültig |

### STATUS_INITIALISIERUNG_FILTER_WERT_DME

| WERT | TEXT |
| --- | --- |
| 0x0 | CT1 Filterwert nicht initialisiert |
| 0x1 | CT1 Filterwert wurde initialisiert |
| 0x3 | Signal ungültig |
| 0xFF | Wert ungültig |

### STATUS_INITIALISIERUNG_FILTER_WERT_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0 | CT1 Filterwert nicht initialisiert |
| 0x1 | CT1 Filterwert wurde initialisiert |
| 0x3 | Signal ungültig |

### STATUS_KLEMME

| WERT | TEXT |
| --- | --- |
| 0x00 | Klemme 15 aus |
| 0x01 | Klemme 15 an |
| 0xFF | Wert ungültig |

### STATUS_NACHTANKEN_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine Nachbetankung |
| 0x1 | Nachbetankung erkannt |
| 0x3 | Signal ungültig |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### STATUS_SPERRE_FEHLERSPEICHER_FZM

| WERT | TEXT |
| --- | --- |
| 0x0000 | Fehlerspeichersperre aktiv |
| 0x0001 | Fehlerspeichersperre nicht aktiv |
| 0xFFFF | Wert ungültig |

### STATUS_VERSORGUNGSSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Versorgungsspannung im Bereich |
| 0x0400 | Versorgungsspannung zu hoch |
| 0x0800 | Versorgungsspannung zu niedrig |
| 0x0C00 | Signal nicht erkannt |
| 0xFFFF | Wert ungültig |

### STATUS_ZUSTAND_FAHRZEUG

| WERT | TEXT |
| --- | --- |
| 0x0 | keine Kommunikation |
| 0x1 | Parken_BN_niO |
| 0x2 | Parken_BN_iO |
| 0x3 | Standfunktionen_Kunde_nicht_im_FZG |
| 0x4 | keine Kommunikation |
| 0x5 | Wohnen |
| 0x6 | keine Kommunikation |
| 0x7 | Pruefen_Analyse_Diagnose |
| 0x8 | Fahrbereitschaft_herstellen |
| 0x9 | keine Kommunikation |
| 0xA | Fahren |
| 0xB | keine Kommunikation |
| 0xC | Fahrbereitschaft_beenden |
| 0xD | keine Kommunikation |
| 0xE | keine Kommunikation |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_CAN_RX_STATUS_MOTOR_AUS_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert gültig |
| 0x01 | Fehler und Ersatzwert |
| 0x03 | Abstellzeit nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_CAN_TX_STATUS_IST_QUALITAET_SCR_ADDITIV

| WERT | TEXT |
| --- | --- |
| 0x0000 | Wert gültig |
| 0x0001 | Messung ungültig und Ersatzwert |
| 0x0002 | Sensorfehler und Ersatzwert |
| 0xFFFF | Wert ungültig |

### TAB_DOSIERMENGENTEST_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Eindosierung nicht erlaubt |
| 0x5 | Freigabe für Eindosierung nicht mehr vorhanden |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_DRUCKAUFBAU_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau kann nur begrenzt erfolgen |
| 0x5 | Freigabe für Druckaufbau nicht mehr vorhanden |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | frei |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_HEIZUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Heizerschutz aktiv |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_LECKAGEERKENNUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau nicht erfolgt. |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_RUECKSAUGEN_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Druckaufbau nicht OK, Systemdruck zu niedrig |
| 0x5 | frei |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | frei |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_STATE_DEAKTIVIERUNG_SCHUTZDOSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Schutzdosierung aktiv |
| 0x01 | Schutzdosierung deaktiviert |
| 0xFF | Wert ungültig |

### TAB_STATE_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x0 | Montagemodus nicht aktiv |
| 0x1 | Montagemodus aktiv |
| 0xFF | Wert ungültig |

### TAB_STATE_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x0 | Routine noch nicht gestartet |
| 0x1 | Start-/Ansteuerbedingung nicht erfüllt |
| 0x2 | Parameter ungültig |
| 0x3 | Warten auf Freigabe |
| 0x5 | Routine läuft |
| 0x7 | Routine abgebrochen (kein Zyklusflag/ Readiness gesetzt) |
| 0x8 | Routine vollständig durchlaufen und kein Fehler erkannt |
| 0x9 | Routine vollständig durchlaufen und Fehler erkannt. |
| 0xFF | Wert ungültig |

### TAB_TRANSFERPUMPE_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Füllstandssignal ungültig |
| 0x5 | Aktivtank voll / Passivtank leer |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | Funktion vollständig, aber zu langsam durchlaufen |
| 0x9 | Funktion vollständig, aber zu schnell durchlaufen |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TAB_TROCKENTAKTUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion noch nicht gestartet |
| 0x1 | System in Vorbereitung |
| 0x2 | Funktion kann wegen Fehlerspeichereintrag / FID nicht gestartet werden |
| 0x3 | Funktion läuft |
| 0x4 | Startbedingung nicht erfüllt: Systemdruck zu hoch |
| 0x5 | Unerwartete Änderung des Systemdrucks oder der Bedingungen für Öffnen des Dosierventils |
| 0x6 | Funktion vollständig und fehlerfrei durchlaufen |
| 0x7 | Funktion fehlerhaft beendet |
| 0x8 | frei |
| 0x9 | frei |
| 0xF0 | frei |
| 0xF1 | System hinter Förderpumpe nicht befüllt |
| 0xF2 | Auftauen erforderlich oder Dosierleitung nicht entleert |
| 0xF3 | Rücksaugen aktiv |
| 0xF4 | Hohe Abgastemperatur |
| 0xF5 | Auftauen erforderlich |
| 0xF6 | Erneutes Heizen erforderlich |
| 0xF7 | Fahrzeug in Bewegung |
| 0xF8 | Umgebungslufttemperatur nicht OK |
| 0xF9 | Aktivtanktemperatur nicht OK |
| 0xFA | Aktivtankfüllstand nicht OK |
| 0xFB | Berechnete Aktivtankfüllmenge nicht OK |
| 0xFC | Batteriespannung nicht OK |
| 0xFD | Zündung aus |
| 0xFE | Verbrennungsmotor läuft |
| 0xFF | Verbrennungsmotor läuft nicht |

### TEMPERATURBEREICH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Temperatur innerhalb der Grenzen |
| 0x0100 | Temperatur zu hoch |
| 0x0200 | Temperatur zu niedrig |
| 0x0300 | Signal nicht erkannt |
| 0xFFFF | Wert ungültig |

### VERBRAUCHER_KLASSE_FEPM

| WERT | TEXT |
| --- | --- |
| 0x1 | Klasse 1 |
| 0x2 | Klasse 2 |
| 0x3 | Klasse 3 |
| 0x4 | Klasse 4 |
| 0x7 | Signal ungültig |

### VERBRENNUNGSMOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor steht durch Fahrerwunsch. |
| 0x01 | Verbrennungsmotor startet durch Fahrerwunsch. |
| 0x02 | Verbrennungsmotor läuft. |
| 0x04 | Startankündigung des Verbrennungsmotors durch Fahrerwunsch |
| 0x06 | Stoppankündigung des Verbrennungsmotors durch Fahrerwunsch. |
| 0x08 | Verbrennungsmotor steht durch MSA-Anforderung. |
| 0x09 | Verbrennungsmotor startet durch MSA-Anforderung. |
| 0x0C | Startankündigung des Verbrennungsmotors durch MSA-Anforderung. |
| 0x0D | Stoppankündigung des Verbrennungsmotors durch MSA-Anforderung. |
| 0x12 | Verbrennungsmotor im Auslauf durch Fahrerwunsch. |
| 0x1A | Verbrennungsmotor im Auslauf durch MSA-Anforderung. |
| 0x1D | Verbrennungsmotor im Auslauf mit Startankündigung durch MSA-Anforderung. |
| 0xFF | Wert ungültig |
