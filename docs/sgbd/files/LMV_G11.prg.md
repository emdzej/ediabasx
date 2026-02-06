# LMV_G11.prg

## General

|  |  |
| --- | --- |
| File | LMV_G11.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 58 |
| Origin | BMW EA-515 Häglsperger |
| Revision | 3.002 |
| Author | IAV-GMBH-INGENIEUR- EA-521 Fischer |
| ECU Comment | 18-07-420 Neuer Infospeicher+ DID für fehlenden Kraftschluss nach hinten |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Längsmomentverteilung |  |  |
| ORIGIN | string | BMW EA-515 Häglsperger |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | IAV-GMBH-INGENIEUR- EA-521 Fischer |  |  |
| COMMENT | string | 18-07-420 Neuer Infospeicher+ DID für fehlenden Kraftschluss nach hinten |  |  |
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

### ARG_0X4008_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_EOL_DELTAPHICAL | ° | high | unsigned int | - | - | 64.0 | 1.0 | 0.0 | 0.0 | 120.0 | Winkel der als Erstkalibrierwinkel geschrieben wird |

### ARG_0X4017_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LT_WORKCHAIN | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | ARG_LT_WORKCHAIN |
| ARG_LT_WORKCLUTCH | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | ARG_LT_WORKCLUTCH |
| ARG_LT_WORKDISC1 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | ARG_LT_WORKDISC1 |
| ARG_LT_WORKDISC2 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | ARG_LT_WORKDISC2 |
| ARG_LT_WORKDISC3 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | ARG_LT_WORKDISC3 |
| ARG_LT_INTEGRATOR_KM_TC | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000000.0 | ARG_LT_INTEGRATOR_KM_TC nur Vorhalt - aktuell nicht berücksichtigt |

### ARG_0XDB30_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CLASSGEARBOX | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 3013.0 | 7411.0 | Getriebeklasse Verteilergetriebe |

### ARG_0XDFE9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_WORKDISC1 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reibarbeit zurücksetzten 1 (0 = kein Reset; 1 = Reset) |
| RESET_WORKDISC2 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reibarbeit zurücksetzten 2 (0 = kein Reset; 1 = Reset) |
| RESET_WORKDISC3 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reibarbeit zurücksetzten 3 (0 = kein Reset; 1 = Reset) |
| RESET_WORKCHAIN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Kettenarbeit zurücksetzen (0 = kein Reset; 1 = Reset) |
| RESET_WORKCLUTCH | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Kupplungsarbeit zurücksetzen (0 = kein Reset; 1 = Reset) |
| RESET_KMVEHICLE_SINCE_OILCHANGE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Rücksetzten der Kilometerleistung seit letztem Ölwechsel (0 = kein Reset; 1 = Reset) |

### ARG_0XDFED_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VTG_SN | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt die Seriennummer des Verteilergetriebes |

### ARG_0XDFEF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WORKCHAIN | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | Kettenarbeit Verschleißintegrator |
| ARG_WORKCLUTCH | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | Kupplungsarbeit Verschleißintegrator |
| ARG_KMVEHICLE_SINCE_OILCHANGE | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000000.0 | Gefahrene Kilometer seit letztem Wechsel des Getriebeöls |
| ARG_MOM_UEBERGLZ_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4.294967295E9 | Übergleitungszähler 1 |
| ARG_MOM_UEBERGLZ_2 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4.294967295E9 | Übergleitungszähler 2 |
| ARG_MOM_UEBERGLZ_3 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4.294967295E9 | Übergleitungszähler 3 |

### ARG_0XDFF0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WORKDISC_1 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | Lamellen Verschleißintegrator 1 |
| ARG_WORKDISC_2 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | Lamellen Verschleißintegrator 2 |
| ARG_WORKDISC_3 | kWh | high | unsigned long | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 1193.0 | Lamellen Verschleißintegrator 3 |

### ARG_0XDFF1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_DELTAPHICAL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Kalibrierwinkel auf Initialwert bringen (0 = kein reset; 1 = reset) |
| RESET_ERSTKALIBRIERWINKEL | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Erstkalibrierwinkel auf Initialwert bringen (0 = kein reset; 1 = reset) |

### ARG_0XDFF2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SOLLMOMENT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -2.0 | 1400.0 | Drehmoment (-2, 0...1400 Nm) -2... Kupplung lüften |
| ARG_TIMETICKS | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 300.0 | Ausführungszeit (0...300s) 0... Laufenden Job abbrechen |

### ARG_0XF006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALIDATION | + | - | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | VALIDATION |

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
| 0x021900 | Energiesparmode aktiv | 0 | - |
| 0x021908 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021909 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02190A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02190B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02190C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02190D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x021923 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x021924 | Flexray, externe Ursache (Sammelfehler) | 1 | - |
| 0x021925 | Flexray, interne Ursache (Sammelfehler) | 0 | - |
| 0x021926 | Hardwarefehler (Sammelfehler) | 0 | - |
| 0x021929 | Softwarefehler (Sammelfehler) | 0 | - |
| 0x02FF19 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x440200 | Überspannung erkannt | 1 | - |
| 0x440201 | Unterspannung erkannt | 1 | - |
| 0x440202 | Steuergerät: interner Sammelfehler (Prozessor) | 0 | - |
| 0x440203 | Steuergerät: interner Sammelfehler (Überwachungseinheit) | 0 | - |
| 0x440204 | Steuergerät: interner Sammelfehler (Endstufe) | 0 | - |
| 0x440205 | Steuergerät: interner Sammelfehler (Versorgungseinheit) | 0 | - |
| 0x440206 | Kupplungsfunktion: Fehler Winkelschlauch | 0 | - |
| 0x440207 | Kupplungsfunktion: Anschlagsuche fehlerhaft | 0 | - |
| 0x440208 | Kupplungsfunktion: Kalibrierung fehlerhaft | 0 | - |
| 0x440209 | Kupplungsfunktion: Kalibrierwert unplausibel | 0 | - |
| 0x44020A | Kupplungsfunktion: maximaler Stellwinkel überschritten | 0 | - |
| 0x44020B | Kupplungsfunktion: Temperaturabschaltung erreicht | 1 | - |
| 0x44020C | Steuergerät: Temperaturabschaltung erreicht | 1 | - |
| 0x44020D | Kupplungsfunktion: Ende Lebensdauer erreicht | 0 | - |
| 0x44020E | Kupplungsfunktion: Ölverschleiß | 0 | - |
| 0x44020F | Kupplungsfunktion: Drift der Initialposition | 0 | - |
| 0x440210 | Kupplungsfunktion: Getriebeklassierung ungültig | 0 | - |
| 0x440211 | Kupplungsfunktion: Deaktivierung Notlauf wegen fehlender Flexray Signale | 1 | - |
| 0x440212 | Kupplungsfunktion: Initiale Kalibrierung nicht durchgeführt | 0 | - |
| 0x440213 | Kupplungsfunktion: Kupplungsverschleiß nicht plausibel | 0 | - |
| 0x440214 | Kupplungsfunktion: Timeout bei der Initialpositionserkennung | 1 | - |
| 0x440215 | Kupplungsfunktion: Nicht Flüchtiger Speicher in der Funktionssoftware als fehlerhaft erkannt | 0 | - |
| 0x440220 | Steuergerät Temperatursensor: Kurzschluss Plus | 0 | - |
| 0x440221 | Steuergerät Temperatursensor: Kurzschluss Minus | 0 | - |
| 0x440224 | Steuergerät Temperatursensor: fehlerhafter Gradient bzw. Erkennung Temperatursprung | 0 | - |
| 0x440225 | Steuergerät Temperatursensor: Plausibilisierungsfehler | 0 | - |
| 0x44022F | Steuergerät  Endstufe: Übertemperatur | 0 | - |
| 0x440246 | Steuergerät  Prozessor: Speicherschutzverletzung | 0 | - |
| 0x440250 | Steuergerät  Lagesensor: Temperaturwert ausserhalb Wertebereich | 0 | - |
| 0x440251 | Steuergerät  Lagesensor: Temperaturwert unplausibel (Vergleich) | 0 | - |
| 0x440264 | Steuergerät  Prozessor: Übertemperatur Abschaltung | 0 | - |
| 0x440265 | Steuergerät  Prozessor: Übertemperatur Warnung | 0 | - |
| 0x440274 | Steuergerät Überwachungseinheit: Reset durch Versorgung Unterspannung | 0 | - |
| 0x440278 | Steuergerät Überwachungseinheit: Übertemperatur Abschaltung | 0 | - |
| 0x440279 | Steuergerät Überwachungseinheit: Übertemperatur Warnung | 0 | - |
| 0x440281 | Steuergerät: interner Sammelfehler (Rotorlagesensor) | 0 | - |
| 0x440282 | Steuergerät  Software: Kalibrierdaten ungültig | 0 | - |
| 0x440287 | Steuergerät  Endstufe:  Fehler Motorstrom - Überstrom | 0 | - |
| 0x440288 | Steuergerät: permanente Temperaturabschaltung erreicht | 0 | - |
| 0x440289 | Steuergerät  Lagesensor: Temperaturwert oberhalb Wertebereich | 0 | - |
| 0x440290 | Steuergerät  Prozessor: Temperatur unplausibel | 0 | - |
| 0x440291 | Steuergerät  Prozessor: Temperaturwert unterhalb Wertebereich | 0 | - |
| 0x440292 | Steuergerät Überwachungseinheit: Temperaturwert unterhalb Wertebereich | 0 | - |
| 0x440314 | Kupplungsfunktion: Mechanik defekt | 0 | - |
| 0x440316 | Steuergerät: interner Sammelfehler (Aktuator Software) | 0 | - |
| 0x440318 | Steuergerät Software: Flashspeicher korrupt | 0 | - |
| 0xCF441F | FLEXRAY Physikalischer Busfehler | 0 | - |
| 0xCF4420 | FLEXRAY controller error | 0 | - |
| 0xCF4487 | FLEXRAY StartUpFailed | 0 | - |
| 0xCF4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCF5400 | Botschaft (Drehmoment Kurbelwelle 1 / Winkel Fahrpedal, 40.1.4) fehlt, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5401 | Botschaft (Drehmoment Kurbelwelle 1, 40.1.4) Prüfsumme falsch, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5402 | Botschaft (Drehmoment Kurbelwelle 1, 40.1.4) nicht aktuell, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5403 | Signal (Drehmoment Kurbelwelle 1, 40.1.4) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5404 | Signal (Drehmoment Kurbelwelle 1, 40.1.4) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5408 | Botschaft (Winkel Fahrpedal, 40.1.4) Prüfsumme falsch, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5409 | Botschaft (Winkel Fahrpedal, 40.1.4) nicht aktuell, Empfänger LMV, Sender DME | 1 | - |
| 0xCF540A | Signal (Winkel Fahrpedal, 40.1.4) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF540B | Signal (Winkel Fahrpedal, 40.1.4) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5410 | Botschaft (Radmoment Antrieb 4, 40.3.4) fehlt, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5411 | Botschaft (Radmoment Antrieb 4, 40.3.4) Prüfsumme falsch, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5412 | Botschaft (Radmoment Antrieb 4, 40.3.4) nicht aktuell, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5413 | Signal (Radmoment Antrieb 4, 40.3.4) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5414 | Signal (Radmoment Antrieb 4, 40.3.4) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5420 | Botschaft (Radmoment Antrieb 9, 41.1.2) fehlt, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5421 | Botschaft (Radmoment Antrieb 9, 41.1.2) Prüfsumme falsch, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5422 | Botschaft (Radmoment Antrieb 9, 41.1.2) nicht aktuell, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5423 | Signal (Radmoment Antrieb 9, 41.1.2) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5424 | Signal (Radmoment Antrieb 9, 41.1.2) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5430 | Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5431 | Botschaft (Ist Bremsmoment Summe, 43.3.4) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5432 | Botschaft (Ist Bremsmoment Summe, 43.3.4) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5433 | Signal (Ist Bremsmoment Summe, 43.3.4) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5434 | Signal (Ist Bremsmoment Summe, 43.3.4) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5440 | Botschaft (Ist Drehzahl Rad, 46.0.1) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5441 | Botschaft (Ist Drehzahl Rad, 46.0.1) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5442 | Botschaft (Ist Drehzahl Rad, 46.0.1) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5443 | Signal (Ist Drehzahl Rad, 46.0.1) ungültig Ist_Drehzahl_Rad, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5444 | Signal (Ist Drehzahl Rad, 46.0.1) undefiniert Ist_Drehzahl_Rad_HL, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5450 | Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5451 | Botschaft (Status Stabilisierung DSC, 47.1.2) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5452 | Botschaft (Status Stabilisierung DSC, 47.1.2) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5453 | Signal (Status Stabilisierung DSC, 47.1.2) ungültig, Sender DSC | 1 | - |
| 0xCF5454 | Signal (Status Stabilisierung DSC, 47.1.2) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5470 | Botschaft (Geschwindigkeit Fahrzeug / Geschwindigkeit Fahrzeug 2, 55.3.4) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5471 | Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5472 | Botschaft (Geschwindigkeit Fahrzeug, 55.3.4) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5473 | Signal (Geschwindigkeit Fahrzeug, 55.3.4) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5474 | Signal (Geschwindigkeit Fahrzeug, 55.3.4) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5478 | Botschaft (Geschwindigkeit Fahrzeug 2, 55.3.4) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5479 | Botschaft (Geschwindigkeit Fahrzeug 2, 55.3.4) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF547A | Signal (Geschwindigkeit Fahrzeug 2, 55.3.4) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF547B | Signal (Geschwindigkeit Fahrzeug 2, 55.3.4) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5490 | Botschaft (Neigung Fahrbahn / Lenkwinkel Vorderachse Effektiv,  56.1.2) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5491 | Botschaft (Lenkwinkel Vorderachse Effektiv,  56.1.2) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5492 | Botschaft (Lenkwinkel Vorderachse Effektiv,  56.1.2) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5493 | Signal (Lenkwinkel Vorderachse Effektiv,  56.1.2) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5494 | Signal (Lenkwinkel Vorderachse Effektiv,  56.1.2) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54A0 | Botschaft (Soll Radmoment Antriebsstrang Stabilisierung, 64.1.2) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54A1 | Botschaft (Soll Radmoment Antriebsstrang Stabilisierung, 64.1.2) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54A2 | Botschaft Soll Radmoment Antriebsstrang Stabilisierung, 64.1.2) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54A3 | Signal (Soll Radmoment Antriebsstrang Stabilisierung, 64.1.2) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54A4 | Signal (Soll Radmoment Antriebsstrang Stabilisierung, 64.1.2) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF54B0 | Botschaft (Status Verbrennungsmotor, 117.0.2) fehlt, Empfänger LMV, Sender DME1 | 1 | - |
| 0xCF54B1 | Botschaft (Status Verbrennungsmotor, 117.0.2) Prüfsumme falsch, Empfänger LMV, Sender DME1 | 1 | - |
| 0xCF54B2 | Botschaft (Status Verbrennungsmotor, 117.0.2) nicht aktuell, Empfänger LMV, Sender DME1 | 1 | - |
| 0xCF54B3 | Signal (Status Verbrennungsmotor, 117.0.2) ungültig, Empfänger LMV, Sender DME1 | 1 | - |
| 0xCF54B4 | Signal (Status Verbrennungsmotor, 117.0.2) undefiniert, Empfänger LMV, Sender DME1 | 1 | - |
| 0xCF54C0 | Botschaft (Zustand Fahrzeug, 121.1.2) fehlt, Empfänger LMV, Sender BDC | 1 | - |
| 0xCF54C1 | Botschaft (Zustand Fahrzeug, 121.1.2) Prüfsumme falsch, Empfänger LMV, Sender BDC | 1 | - |
| 0xCF54C2 | Botschaft (Zustand Fahrzeug, 121.1.2) nicht aktuell, Empfänger LMV, Sender BDC | 1 | - |
| 0xCF54C3 | Signal (Zustand Fahrzeug 121.1.2) ungültig, Empfänger LMV, Sender BDC | 1 | - |
| 0xCF54C4 | Signal (Zustand Fahrzeug 121.1.2) undefiniert, Empfänger LMV, Sender BDC | 1 | - |
| 0xCF54D0 | Botschaft (Daten Antriebsstrang 2, 230.0.2) fehlt, Empfänger LMV, Sender DME | 1 | - |
| 0xCF54D1 | Botschaft (Daten Antriebsstrang 2, 230.0.2) Prüfsumme falsch, Empfänger LMV, Sender DME | 1 | - |
| 0xCF54D2 | Botschaft (Daten Antriebsstrang 2, 230.0.2) nicht aktuell, Empfänger LMV, Sender DME | 1 | - |
| 0xCF54D3 | Signal (Daten Antriebsstrang 2, 230.0.2) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF54D4 | Signal (Daten Antriebsstrang 2, 230.0.2) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5500 | Botschaft (Diagnose OBD Motor, 247.1.2) fehlt, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5501 | Signal (Diagnose OBD Motor, 247.1.2) ungültig, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5502 | Signal (Diagnose OBD Motor, 247.1.2) undefiniert, Empfänger LMV, Sender DME | 1 | - |
| 0xCF5540 | Botschaft (Kilometerstand/Reichweite, 276.4.8) fehlt, Empfänger LMV, Sender IKE | 1 | - |
| 0xCF5541 | Signal (Kilometerstand/Reichweite, 276.4.8) ungültig, Empfänger LMV, Sender IKE | 1 | - |
| 0xCF5542 | Signal (Kilometerstand/Reichweite, 276.4.8) undefiniert, Empfänger LMV, Sender IKE | 1 | - |
| 0xCF5560 | Botschaft (Außentemperatur, 252.1.4) fehlt, Empfänger LMV, Sender Kombi | 1 | - |
| 0xCF5561 | Signal (Außentemperatur, 252.1.4) ungültig, Empfänger LMV, Sender Kombi | 1 | - |
| 0xCF5562 | Signal (Außentemperatur, 252.1.4) undefiniert, Empfänger LMV, Sender Kombi | 1 | - |
| 0xCF5570 | Botschaft (Soll Verteilung Längsmoment, 97.1.2) fehlt, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5571 | Botschaft (Soll Verteilung Längsmoment, 97.1.2) Prüfsumme falsch, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5572 | Botschaft (Soll Verteilung Längsmoment, 97.1.2) nicht aktuell, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5573 | Signal (Soll Verteilung Längsmoment, 97.1.2) ungültig, Empfänger LMV, Sender DSC | 1 | - |
| 0xCF5574 | Signal (Soll Verteilung Längsmoment, 97.1.2) undefiniert, Empfänger LMV, Sender DSC | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2342 | BAT_VOLT | V | High | unsigned int | - | 1.0 | 1024.0 | 0.0 |
| 0x4014 | OS_DET_EXC_DEBUG | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | SW_VERSION_UV | HEX | High | unsigned char | - | - | - | - |
| 0x4016 | SW_VERSION_PV | HEX | High | unsigned char | - | - | - | - |
| 0x4020 | CC_ERRORDUMP_INITIAL_POSITION | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4021 | CC_ERRORDUMP_CALIB_ERR | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4022 | CC_ERRORDUMP_CALIB_ANGLE_ERR | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | CC_ERRORDUMP_CLUTCH_PROTECTION | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | CC_ERRORDUMP_CLUTCH_END_OF_LIFE | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4025 | CC_ERRORDUMP_WEAR_OIL | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | CC_ERRORDUMP_PHI_TUBE | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4027 | CC_ERRORDUMP_BROKEN_MECHANICS | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | CC_ERRORDUMP_NO_CALIB | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | CC_ERRORDUMP_CLUTCH_WEAR_PLAUSI | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402A | CC_ERRORDUMP_INITIAL_POSITION_TIMEOUT | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402B | CC_ERRORDUMP_ECU_PROTECTION | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402C | CC_ERRORDUMP_INIT_POSN_DEV | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402D | CC_ERRORDUMP_NVMDATA_CORRUPT | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402E | CC_ERRORDUMP_EX_MAX_ANGLE | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x402F | CC_ERRORDUMP_CLASSIFICATION_NOT_DONE | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4044 | CDD_ERRORDUMP_PMSM_GD_OT_SHDN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4050 | CDD_ERRORDUMP_PMSM_GD_OC_SHDWN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4052 | CDD_ERRORDUMP_TEMP_SENS_SC_HIGH | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | CDD_ERRORDUMP_TEMP_SENS_SC_LOW | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4054 | CDD_ERRORDUMP_TEMP_SENS_TEMP_GRADIENT | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4055 | CDD_ERRORDUMP_TEMP_SENS_CROSS_CHK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4056 | CDD_ERRORDUMP_ECU_OT_WARN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4057 | CDD_ERRORDUMP_ECU_OT_SHDWN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405E | CDD_ERRORDUMP_RPS_TEMP_CROSS_CHK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405F | CDD_ERRORDUMP_RPS_TEMP_RANGE_CHK_LOW | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | CDD_ERRORDUMP_RPS_TEMP_RANGE_CHK_HIGH | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4068 | CDD_ERRORDUMP_MCU_OT_SHDWN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4069 | CDD_ERRORDUMP_MCU_TEMP_PLAUSIB | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406A | CDD_ERRORDUMP_MCU_TEMP_LOW | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4077 | CDD_ERRORDUMP_MU_GLOBAL_UV_RST | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407A | CDD_ERRORDUMP_MU_OT_SHDWN | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407B | CDD_ERRORDUMP_MU_TEMP_PLAUSIB | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407C | CDD_ERRORDUMP_MU_TEMP_LOW | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4082 | CDD_ERRORDUMP_PMSM_CALIBDATA_INVALID | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
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
| 0x440216 | Kupplungsfunktion: Notlauffunktion wurde aktiviert | 0 | - |
| 0x440226 | Steuergerät  Endstufe: Lastversorgung Überspannung | 0 | - |
| 0x440227 | Steuergerät  Endstufe: Lastversorgung Unterspannung | 0 | - |
| 0x440229 | Steuergerät  Endstufe:  Fehler Motorstrom unplausibel | 0 | - |
| 0x44022A | Steuergerät  Endstufe: Fehler Spannungsüberwachung Ladungspumpe | 0 | - |
| 0x44022E | Steuergerät  Endstufe: Fehler interne Spannungsüberwachung | 0 | - |
| 0x440230 | Steuergerät  Endstufe:  Kurzschluss Endstufenausgang | 0 | - |
| 0x440231 | Steuergerät  Endstufe:  Kurzschluss Signalausgagng | 0 | - |
| 0x440232 | Steuergerät  Endstufe:  Konfigurationsfehler | 0 | - |
| 0x440233 | Steuergerät  Endstufe:  Fehler SPI Kommunikation | 0 | - |
| 0x440234 | Steuergerät  Endstufe:  Fehler Selbsttest Abschaltpfad | 0 | - |
| 0x440235 | Steuergerät  Endstufe:  Fehler Mosfet Selbstest | 0 | - |
| 0x440236 | Steuergerät  Endstufe:  Fehler Motorstrombereich | 0 | - |
| 0x440237 | Steuergerät  Endstufe:  Fehler Motorstrom unplausibel | 0 | - |
| 0x440238 | Steuergerät  Endstufe:  Spannungsversorgung unplausibel | 0 | - |
| 0x44023D | Steuergerät  Lagesensor: Fehler Selbsttest | 0 | - |
| 0x44023E | Steuergerät  Lagesensor: Rohwerte ausserhalb Wertebereich | 0 | - |
| 0x440240 | Steuergerät  Lagesensor: Winkelwert unplausibel | 0 | - |
| 0x440241 | Steuergerät  Lagesensor: Fehler SPI Kommunikation | 0 | - |
| 0x440242 | Steuergerät  Lagesensor: Winkelwert unplausibel (Modell) | 0 | - |
| 0x440243 | Steuergerät  Lagesensor: Konfigurationsfehler | 0 | - |
| 0x440244 | Steuergerät  Prozessor: RAM ECC Speicherfehler | 0 | - |
| 0x440247 | Steuergerät  Prozessor: Takt Frequenz | 0 | - |
| 0x44024D | Steuergerät  Prozessor: Selbsttesteinheit | 0 | - |
| 0x440252 | Steuergerät  Prozessor: Recheneinheit | 0 | - |
| 0x44025E | Steuergerät  Prozessor: CRC Register Prüfung | 0 | - |
| 0x44025F | Steuergerät  Prozessor: Timereinheit | 0 | - |
| 0x440263 | Steuergerät  Prozessor: Analog Digital Converter | 0 | - |
| 0x440266 | Steuergerät Überwachungseinheit: interner Fehler Reset Leitung - Leitungsbruch | 0 | - |
| 0x440267 | Steuergerät Überwachungseinheit: interner Fehler FCCU Leitung | 0 | - |
| 0x440268 | Steuergerät Überwachungseinheit: interner Fehler Fail Safe Leitung | 0 | - |
| 0x44026A | Steuergerät Versorgungseinheit: interner Fehler - Konfiguration | 0 | - |
| 0x44026B | Steuergerät Überwachungseinheit: SPI Kommunikation | 0 | - |
| 0x44026D | Steuergerät Überwachungseinheit: interner Fehler - Debug Modus | 0 | - |
| 0x44026E | Steuergerät Überwachungseinheit: interner Fehler - Konfiguration Watchdog Window | 0 | - |
| 0x44026F | Steuergerät Überwachungseinheit: interner Fehler - Konfiguration Monitoring Unit | 0 | - |
| 0x440270 | Steuergerät Überwachungseinheit: interner Fehler - MCU Versorgung - Überspannung | 0 | - |
| 0x440272 | Steuergerät Überwachungseinheit: interner Fehler - 3V3_CORE_DRIFT | 0 | - |
| 0x440273 | Steuergerät Überwachungseinheit: interner Fehler - MCU Versorgung - Unterspannung | 0 | - |
| 0x440275 | Steuergerät Überwachungseinheit: WD Refresh | 0 | - |
| 0x440276 | Steuergerät Überwachungseinheit: Programm Ablauf Kontroller | 0 | - |
| 0x440277 | Steuergerät Überwachungseinheit: MCU Reset | 0 | - |
| 0x44027A | Steuergerät Versorgungseinheit: PMSM_SUPPLY_FAST_UV | 0 | - |
| 0x44027B | Steuergerät Versorgungseinheit: PMSM_SUPPLY_FAST_OV | 0 | - |
| 0x44027C | Steuergerät Versorgungseinheit: BATT_SUPPLY_SLOW_UV | 0 | - |
| 0x44027D | Steuergerät Versorgungseinheit: BATT_SUPPLY_SLOW_OV | 0 | - |
| 0x44027E | Kupplungsfunkton: fehlender Kraftschluss nach hinten | 0 | - |
| 0x440283 | Steuergerät  Software: MODULE_CONFIG_INVALID | 0 | - |
| 0x440284 | Steuergerät  Software: INPUT_RANGE_CHECK | 0 | - |
| 0x440285 | Steuergerät  Endstufe:  unplausibler Signalausgang | 0 | - |
| 0x440286 | Steuergerät  Endstufe:  Fehler Motorstrom (Offset) | 0 | - |
| 0x440302 | MCU_E_LOCK_FAILURE | 0 | - |
| 0x440303 | MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x440304 | MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x440305 | E_OS_ERROR | 0 | - |
| 0x440306 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x440307 | FRSM_DEM_SYNC_LOSS_HANDLE | 0 | - |
| 0x440310 | Steuergerät  Software: CORE_EXCEPTION | 0 | - |
| 0x440311 | EVENT_FRSM_DEM_STARTUP_HANDLE | 0 | - |
| 0x440312 | EVENT_NVM_E_REQ_FAILED | 0 | - |
| 0x440315 | Schutzfunktion: Antriebstrang deaktiviert | 0 | - |
| 0x440317 | Steuergerät Software: Autosar Software Fehler | 0 | - |
| 0x440319 | Kupplungsfunktion: Powertrain-Konfiguration nicht plausibel | 0 | - |
| 0x440320 | SW Dev-Info 1 | 0 | - |
| 0x440321 | SW Dev-Info 2 | 0 | - |
| 0x440322 | Entwicklung: Default-Kodierung aktiv | 1 | - |
| 0x440323 | Entwicklung: Geschwindigkeitsschwelle für Diagnosejobs inaktiv | 1 | - |
| 0x440324 | Entwicklung: Messtechnik-Interface aktiv | 1 | - |
| 0x440325 | Entwicklung: Memory Protection inaktiv | 1 | - |
| 0x440326 | Steuergerät: Unerwarteter Power Down / Reset | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | OS_DET_EXC_DEBUG | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | SW_VERSION_UV | HEX | High | unsigned char | - | - | - | - |
| 0x4016 | SW_VERSION_PV | HEX | High | unsigned char | - | - | - | - |
| 0x4030 | CC_ERRORDUMP_PROTECTIVE_FCN_PT_DEACTIVATED | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4040 | CDD_ERRORDUMP_PMSM_GD_SUPPLY_OV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4041 | CDD_ERRORDUMP_PMSM_GD_SUPPLY_UV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4042 | CDD_ERRORDUMP_PMSM_GD_CHARGE_PUMP | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4043 | CDD_ERRORDUMP_PMSM_GD_INT_SUP_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4045 | CDD_ERRORDUMP_PMSM_GD_SCD | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4046 | CDD_ERRORDUMP_PMSM_GD_OVLD_DO_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4047 | CDD_ERRORDUMP_PMSM_GD_ERR_CONSIST | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4048 | CDD_ERRORDUMP_PMSM_GD_CONFIG_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4049 | CDD_ERRORDUMP_PMSM_GD_SPI_COM_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404A | CDD_ERRORDUMP_PMSM_CU_DISABLE_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404B | CDD_ERRORDUMP_PMSM_MOSFET_PATTERN_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404C | CDD_ERRORDUMP_PMSM_CURRENT_RANGE_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404D | CDD_ERRORDUMP_PMSM_CURRENT_OFFSET_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404E | CDD_ERRORDUMP_PMSM_CURRENT_CROSS_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x404F | CDD_ERRORDUMP_PMSM_CURRENT_PLAUSIB_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4051 | CDD_ERRORDUMP_PMSM_SUPPLY_VOLTAGE_CROSS_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4058 | CDD_ERRORDUMP_RPS_CONFIG_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4059 | CDD_ERRORDUMP_RPS_SYSTEM_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405A | CDD_ERRORDUMP_RPS_SPI_COM_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405B | CDD_ERRORDUMP_RPS_RAW_DATA_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405C | CDD_ERRORDUMP_RPS_SPI_2_IIF_IMPLAUSIBLE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x405D | CDD_ERRORDUMP_RPS_IIF_GRADIENT_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4061 | CDD_ERRORDUMP_MCU_FCCU_ECC_MON | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4062 | CDD_ERRORDUMP_MCU_FCCU_CLK_MON | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4063 | CDD_ERRORDUMP_MCU_FCCU_SELF_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4064 | CDD_ERRORDUMP_MCU_FCCU_CORE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4065 | CDD_ERRORDUMP_MCU_PERIPHERAL_REGCRC | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4066 | CDD_ERRORDUMP_MCU_ETIMER_COMPARE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4067 | CDD_ERRORDUMP_MCU_ADC_CTU_CHECK | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406B | CDD_ERRORDUMP_MU_SPI_COM_FAILURE | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406C | CDD_ERRORDUMP_MU_CHECK_RSTB | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406D | CDD_ERRORDUMP_MU_CHECK_FS0B | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406E | CDD_ERRORDUMP_MU_CHECK_FCCU | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x406F | CDD_ERRORDUMP_PSU_CONFIG | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4070 | CDD_ERRORDUMP_MU_CONFIG_DEBUG | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4071 | CDD_ERRORDUMP_MU_CONFIG_WD_WINDOW | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4072 | CDD_ERRORDUMP_MU_CONFIG_INIT | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4073 | CDD_ERRORDUMP_MU_MCU_SUPPLY_OV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4074 | CDD_ERRORDUMP_MU_3V3CORE_DRIFT | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4075 | CDD_ERRORDUMP_MU_MCU_PFM | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4076 | CDD_ERRORDUMP_MU_MCU_RESET | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4078 | CDD_ERRORDUMP_MU_WD_REFRESH | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | CDD_ERRORDUMP_MU_MCU_SUPPLY_UV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407D | CDD_ERRORDUMP_PMSM_SUPPLY_FAST_UV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407E | CDD_ERRORDUMP_PMSM_SUPPLY_FAST_OV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x407F | CDD_ERRORDUMP_BATT_SUPPLY_SLOW_UV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4080 | CDD_ERRORDUMP_BATT_SUPPLY_SLOW_OV | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4081 | CDD_ERRORDUMP_SW_MODULE_CONF_INVALID | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4083 | CDD_ERRORDUMP_SW_RANGE_CHECK_FAILED | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4084 | CDD_ERRORDUMP_SW_CORE_EXCEPTION | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4085 | VC_ERRORDUMP_PLAUSI_PT_CONFIG | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4090 | SWDEV_ERRORDUMP1 | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4091 | SWDEV_ERRORDUMP2 | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0x4092 | VC_ERRORDUMP_BROKEN_CARDSHAFT | TEXT | High | 23 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht iO |
| 0x01 | iO |

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

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECUMehrmalsProgrammierbar |
| 0x01 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 0x02 | ECUNichtMehrProgrammierbar |

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
| STAT_TMPBLADE_WERT | °C | high | signed long | - | - | 1.0 | 4194304.0 | 0.0 | Temperatur der Lamellen |
| STAT_CNTMISUSEDETLOW_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EE_cntMisUseDetLow |
| STAT_WORKCHAIN_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Work chain lifetime integration value |
| STAT_WORKCLUTCH_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Kupplungsarbeit Lebenszeit Integratorwert |
| STAT_WORKOIL_WERT | kWh | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Oil work  |
| STAT_CMDBACKUPFCN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Backup function request  |
| STAT_DELTAPHICLUTCH_WERT | - | high | signed int | - | - | 1.0 | 4096.0 | 0.0 | Clutch differential speed in rad per 10 ms  |
| STAT_PRCTMPSTRESSCLUTCH_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | V_GuardCluC10_prcTmpStressClu  |
| STAT_IBLDC_WERT | A | high | signed int | - | - | 1.0 | 512.0 | 0.0 | Measured actuator current  |
| STAT_NATR_WERT | - | high | signed int | - | - | 1.0 | 128.0 | 0.0 | Measured and worm gear ratio corrected actuator rotational speed  |
| STAT_PHIATR_WERT | ° | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Measured actuator angle  |
| STAT_UBATT_WERT | V | high | signed int | - | - | 1.0 | 1024.0 | 0.0 | Measured battery voltage  |
| STAT_UBLDC_WERT | V | high | signed int | - | - | 1.0 | 1024.0 | 0.0 | Measured actuator voltage (currently not in use)  |
| STAT_DLTNFRAX2RAX_WERT | - | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Front to rear axle rotational speed difference  |
| STAT_NENGINE_WERT | - | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Engine Speed in rpm  |
| STAT_NENGINE_QF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier of engine speed  |
| STAT_NFRAX_WERT | - | high | signed int | - | - | 1.0 | 2.0 | 0.0 | Front axle rotational speed  |
| STAT_STPTENGAGED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | powertrain engaged  |
| STAT_STPTENGAGED_QF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier of powertrain engaged  |
| STAT_TMPBRIDGE_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Measured bridge temperature  |
| STAT_TRQBRAKEDRIVERREQ_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Torque Brake driver request  |
| STAT_TRQBRAKEDRIVERREQ_QF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier of torque Brake driver request  |
| STAT_TYPEGEARBOX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Type Gearbox   |
| STAT_VFRONTMIN_WERT | km/h | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Minimum front vehicle speed  |
| STAT_VFRONTMIN_QF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier of minimum front vehicle speed  |
| STAT_STMISUSELOWTEMPACTIVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low temperature conpensation is set (SR-FF)  |
| STAT_TRQMISUSESETPOINTMAX_WERT | Nm | high | signed int | - | - | 1.0 | 4.0 | 0.0 | Maximum allowed torque  |
| STAT_WEAROILGAIN_WERT | - | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | W_CharCorr_WearOilGain  |
| STAT_WEAROILOFFSET_WERT | - | high | signed int | - | - | 1.0 | 2.0 | 0.0 | W_CharCorr_WearOilOffset  |
| STAT_PHIINT_WERT | - | high | unsigned int | - | - | 1.0 | 4096.0 | 0.0 | W_MisuseDetC10_phiInt  |
| STAT_MISUSE_TMPBLADE_WERT | °C | high | signed int | - | - | 1.0 | 64.0 | 0.0 | W_MisuseDetC10_tmpBlade  |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLDC_STROM_WERT | A | high | signed long | - | - | 1.0 | 512.0 | 0.0 | gemessener Strom im Fußpunkt der BLDC Halbbrücke  |
| STAT_BLDC_RPS_WINKEL_WERT | ° | high | signed int | - | - | 1.0 | 1.0 | 0.0 | intern gemessener Winkel an der Rotorwelle  |
| STAT_BLDC_BD_STATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Brückentreibers (TLE9180)  |
| STAT_HS_STROM_WERT | A | high | signed long | - | - | 1.0 | 512.0 | 0.0 | High Side Strom  |
| STAT_UDC_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | Zwischenkreisspannung  |
| STAT_UKL30_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | Klemme 30 Spannung  |
| STAT_TEMP_NTC_WERT | °C | high | signed int | - | - | 0.0625 | 1.0 | 0.0 | temperatur gemessen in der Nähe der Halbbrücke  |
| STAT_TEMP_CONTROLLER_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | temperatur micro controller   |
| STAT_TEMP_RPS_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | temperatur position sensor   |
| STAT_TEMP_SBC_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | temperatur external monitoring unit (SBC)   |
| STAT_EXTERNAL_SENSOR_SIGNAL_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | Vorhalt (nicht belegt) - external sensor signalspannung  |
| STAT_EXTERNAL_SENSOR_SUPPLY_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | Vorhalt (nicht belegt) - external sensor Versorgungsspannung  |
| STAT_EXTERNAL_SENSOR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Vorhalt (nicht belegt) - aktueller Wert des externen Sensors  |
| STAT_ACTIVE_BF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktive Schutzfunktion in NIA SW  |
| STAT_ISR_WECT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximal Laufzeit Kommutier Interrupt  |
| STAT_ISR_WEP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | maximal Latenzzeit  |
| STAT_SBC_STATUS_BITS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | kombinierter Status SBC   |
| STAT_BLDC_BD_STATUS_BITS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | kombinierter Status Brückentreiber   |
| STAT_RPS_STATUS_BITS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | kombinierter Status RPS  |
| STAT_SBC_AUFWACH_GRUND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aufwachgrund ECU (SBC)    |
| STAT_ECU_OVERTEMP_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Übertemperatur Zähler |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNTTRQRNG_0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 0 |
| STAT_CNTTRQRNG_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 1 |
| STAT_CNTTRQRNG_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 2 |
| STAT_CNTTRQRNG_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 3 |
| STAT_CNTTRQRNG_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 4 |
| STAT_CNTTRQRNG_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 5 |
| STAT_CNTTRQRNG_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 6 |
| STAT_CNTTRQRNG_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 7 |
| STAT_CNTTRQRNG_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 8 |
| STAT_CNTTRQRNG_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 9 |
| STAT_CNTTRQRNG_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 10 |
| STAT_CNTTRQRNG_11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Umdrehungen des Vorderachstrieblings im Momentenbereich 11 |

### RES_0XAA10_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NACHLAUFKALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_NACHLAUFKALIBRIERUNG | - | - | - | Status der Nachlaufkalibrierung |

### RES_0XAA11_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERSTKALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_ERSTKALIBRIERUNG | - | - | - | Status der Erstkalibrierung |

### RES_0XAA12_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OELSCHOTT | - | - | + | 0-n | high | unsigned char | - | TAB_OELSCHOTT | - | - | - | Zustand des Ölschotts (1 = offen, 0 = normal) |

### RES_0XDB30_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CLASSGEARBOX_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Getriebeklasse Verteilergetriebe |

### RES_0XDB32_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTMOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 4.0 | 0.0 | Istwert des Moments zur Vorderachse - LMV |
| STAT_QUALIFIER_ISTMOMENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Signalqualifier zum Istmoment |
| STAT_SOLLMOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 4.0 | 0.0 | Sollwert des Moments zur Vorderachse - LMV |
| STAT_QUALIFIER_SOLLMOMENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Signalqualifier zum Sollmoment |

### RES_0XDFDC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLDC_ENERGY_CONST_IGN_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_BLDC_ENERGY_CONST_IGN |
| STAT_HSIDE_ENERGY_CONST_IGN_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_HSIDE_ENERGY_CONST_IGN |
| STAT_LOGIC_ENERGY_CONST_IGN_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_LOGIC_ENERGY_CONST_IGN |
| STAT_OPERATION_TIME_IGN_WERT | h | high | signed long | - | - | 1.0 | 3600.0 | 0.0 | STAT_OPERATION_TIME_IGN |
| STAT_BLDC_ENERGY_CONS_LIFETIME_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_BLDC_ENERGY_CONS_LIFETIME |
| STAT_HSIDE_ENERGY_CONS_LIFETIME_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_HSIDE_ENERGY_CONS_LIFETIME |
| STAT_LOGIC_ENERGY_CONS_LIFETIME_WERT | kWh | high | signed long | - | - | 1.0 | 3600000.0 | 0.0 | STAT_LOGIC_ENERGY_CONS_LIFETIME |
| STAT_OPERATION_TIME_LIFETIME_WERT | h | high | signed long | - | - | 1.0 | 3600.0 | 0.0 | STAT_OPERATION_TIME_LIFETIME |

### RES_0XDFDE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMEDELTA_N_LOW_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_LOW_1_WERT |
| STAT_TIMEDELTA_N_LOW_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_LOW_2_WERT |
| STAT_TIMEDELTA_N_LOW_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_LOW_3_WERT |
| STAT_TIMEDELTA_N_LOW_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_LOW_4_WERT |
| STAT_TIMEDELTA_N_LOW_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_LOW_5_WERT |
| STAT_TIMEDELTA_N_HIGH_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_HIGH_1_WERT |
| STAT_TIMEDELTA_N_HIGH_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_HIGH_2_WERT |
| STAT_TIMEDELTA_N_HIGH_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_HIGH_3_WERT |
| STAT_TIMEDELTA_N_HIGH_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_HIGH_4_WERT |
| STAT_TIMEDELTA_N_HIGH_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_TIMEDELTA_N_HIGH_5_WERT |
| STAT_2WD_DISTANCE_TOTAL_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_2WD_DISTANCE_TOTAL_WERT |

### RES_0XDFE7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTAPHICAL_WERT | ° | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Aktueller Kalibrierwinkel |
| STAT_DELTAPHICALFIRST_WERT | ° | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Erst-Kalibrierwinkel |
| STAT_CNT_CALOK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durchgeführten Nachlaufkalibrierungen |
| STAT_CNT_CALNOK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl, aufgrund von Bedingungen, nicht durchgeführte Kalibrierungen |
| STAT_DELTAPHICALRAW_WERT | ° | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Ungefilterter Kalibrierwinkel |
| STAT_EOL_DELTAPHICALEOL_WERT | ° | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | ErstKalibrierwinkel - am EOL ermittelt, nach EOL Einlauf |
| STAT_WORKOIL4DIAG_WERT | kWh | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Ölverschleiß |
| STAT_WORKCHAIN_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Kettenarbeit Lebenszeit Integratorwert |
| STAT_WORKCLUTCH_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Kupplungsarbeit Lebenszeit Integratorwert |
| STAT_WORKOIL_WERT | kWh | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Öl-Verschleißintegrator |
| STAT_WORKDISC1_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 1 |
| STAT_WORKDISC2_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 2 |
| STAT_WORKDISC3_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 3 |
| STAT_KMVEHICLE_SINCE_OILCHANGE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Kilometer seit letztem Wechsel des Getriebeöls |
| STAT_CNT_MISUSEDET_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen der Manövererkennung |
| STAT_CNT_MISUSEDET_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Deaktivierungen der Manövererkennung (Abschaltpfad Verdrehwinkel) |
| STAT_CNT_MISUSEDET_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt  - Manövererkennung Zähler  |
| STAT_CNT_MISUSEDET_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorhalt  - Manövererkennung Zähler |
| STAT_CNTINITPOS_OK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Anschlagsuchen |
| STAT_FLOAT_CONST_WERT | - | high | unsigned int | - | - | 1.0 | 1310700.0 | 0.0 | NIA-Momentenkonstante; Flußkonstante [Nm/A] |
| STAT_OPERATION_TIME_WERT | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Vorhalt  - Nicht belegt |
| STAT_TIME_REL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit aus Botschaft |
| STAT_MILE_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller FZG Kilometerstand aus Busbotschaft |
| STAT_LT_INTEGRATOR_KM_TC_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke - Getriebe Kilometerstand berechnet aus Busbotschaft |
| STAT_ZEIT_ROLLENERKENNUNG_EINACHSROLLE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler: Zeit Rollenerkennung aktiv - Einachsrolle |
| STAT_ZEIT_ROLLENERKENNUNG_BREMSPRUEFSTAND_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler: Zeit Rollenerkennung aktiv - Bremsenprüfstand |
| STAT_ANZAHL_SOLLPOSITION_NICHT_ERREICHT_AUFBAU_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler: Im Momentaufbau Sollposition (+/-0,25°) nicht erreicht |
| STAT_ANZAHL_SOLLPOSITION_NICHT_ERREICHT_ABBAU_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler: Im Momentabbau Sollposition (+/-0,25°) nicht erreicht |
| STAT_MOM_UEBERGLZ_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Übergleitungszähler 1 |
| STAT_MOM_UEBERGLZ_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Übergleitungszähler 2 |
| STAT_MOM_UEBERGLZ_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Übergleitungszähler 3 |
| STAT_LT_WORKCHAIN_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Kettenarbeit Lebensdauer Integratorwert |
| STAT_LT_WORKCLUTCH_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Kupplungsarbeit Lebensdauer Integratorwert |
| STAT_LT_WORKDISC1_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 1 Lebensdauer |
| STAT_LT_WORKDISC2_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 2 Lebensdauer |
| STAT_LT_WORKDISC3_WERT | kWh | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Lamellen Verschleißintegrator 3 Lebensdauer |
| STAT_CNT_EFF_MODE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Efficiency Mode |
| STAT_KM_TC_EFF_MODE_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke im Efficiency Mode |
| STAT_CNT_NLR_MODE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler NLR Mode |
| STAT_KM_TC_NLR_MODE_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke NLR Mode |
| STAT_KM_TC_NLR20KMH_MODE_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke NLR Mode unter 20 km/h |
| STAT_CNT_IBLDCHIGH_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Zähler Zeit Aktuatorstrom hoch |
| STAT_CNT_IBLDCVERYHIGH_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Zähler Zeit Aktuatorstrom sehr hoch |
| STAT_CNT_IBLDCLOW_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Zähler Zeit Aktuatorstrom niedrig |
| STAT_CNT_IBLDCVERYLOW_WERT | ms | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Zähler Zeit Aktuatorstrom sehr niedrig |

### RES_0XDFE8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG | 0-n | high | unsigned int | - | KALIBRIERUNG | - | - | - | Aktueller Kalibrierwinkelstatus, abgeleitetet von aktuellem Kalibrierwinkel |
| STAT_EOL_ERSTKAL_WERT | ° | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Erstkalibrierwinkel - am EOL Test ermittelt nach EOL Einlauf |
| STAT_DELTAPHICAL_WERT | ° | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Aktueller Kalibrierwinkel |
| STAT_DELTAPHICALFIRST_WERT | ° | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Erst-Kalibrierwinkel |
| STAT_DELTAPHICALRAW_WERT | ° | high | signed int | - | - | 1.0 | 64.0 | 0.0 | Ungefilterter Kalibrierwinkel |
| STAT_CNT_CALOK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl ausgeführte Kalibrierungen |
| STAT_CNT_CALNOK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl, aufgrund von Bedingungen, nicht durchgeführte Kalibrierungen |

### RES_0XDFEA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QU_SER_BASIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service Basis - Qualifier des LMV |
| STAT_QU_SER_NOTLAUF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Notlaufregler |
| STAT_QU_SER_POSITION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position LMV Stellglied |
| STAT_QU_SER_SCHUTZ_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LMV Schutzfunktion |
| STAT_QU_LMV_LUEFTSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position LMV gelüftet/nicht gelüftet (Normalbetrieb) |
| STAT_QU_SER_VV_KUPPLUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit Kupplung |
| STAT_QU_SER_VV_STELLGLIED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit Stellglied |

### RES_0XDFED_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VTG_SN_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Getriebes |

### RES_0XDFEE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UKL30_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | LMV Klemmenspannung  |
| STAT_UKL30_VPS_WERT | V | high | unsigned int | - | - | 1.0 | 1024.0 | 0.0 | Spannung nach dem Verpolschutz |

### RES_0XDFF4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_CON_VEH_WERT | HEX | high | unsigned char | - | - | - | - | - | Signal Status_Zustand_Fahrzeug beschreibt den Fahrzeugzustand (Lastenheft Parken, Wohnen, Fahren, 10000924) aus Kundensicht. Anhand dieses Zustandes wird festgelegt, welche (Kunden-)Funktionen aktuell verfügbar sein sollen. |
| STAT_NM3_BS_PRTNT_AFR_WERT | HEX | high | unsigned int | - | - | - | - | - | Zustand der Kommunikation. Signal gibt Information zurück, ob in aktuellem Fahrzeugzustand Kommunikation benötigt wird (Definition eines Basisteilnetzes). |
| STAT_NM3_FKTN_PRTNT_AFR_WERT | HEX | high | unsigned long | - | - | - | - | - | Signal gibt die Information zurück welche funktionalen Teilnetze (z.B. Entertainment, Laden) aktiv sind.  |

### RES_0XDFF7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMETEMP_HISTORY_0_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 1 |
| STAT_TIMETEMP_HISTORY_1_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 2 |
| STAT_TIMETEMP_HISTORY_2_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 3 |
| STAT_TIMETEMP_HISTORY_3_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 4 |
| STAT_TIMETEMP_HISTORY_4_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 5 |
| STAT_TIMETEMP_HISTORY_5_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 6 |
| STAT_TIMETEMP_HISTORY_6_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 7 |
| STAT_TIMETEMP_HISTORY_7_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 8 |
| STAT_TIMETEMP_HISTORY_8_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 9 |
| STAT_TIMETEMP_HISTORY_9_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 10 |
| STAT_TIMETEMP_HISTORY_10_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 11 |
| STAT_TIMETEMP_HISTORY_11_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 12 |
| STAT_TIMETEMP_HISTORY_12_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 13 |
| STAT_TIMETEMP_HISTORY_13_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 14 |
| STAT_TIMETEMP_HISTORY_14_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 15 |
| STAT_TIMETEMP_HISTORY_15_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 16 |
| STAT_TIMETEMP_HISTORY_16_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 17 |
| STAT_TIMETEMP_HISTORY_17_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 18 |
| STAT_TIMETEMP_HISTORY_18_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 19 |
| STAT_TIMETEMP_HISTORY_19_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 20 |
| STAT_TIMETEMP_HISTORY_20_WERT | s | high | unsigned long | - | - | 2.0 | 1.0 | 0.0 | Intervallzähler Temperaturbereich 21 |

### RES_0XDFF8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRQDELTAPHICLUTCH11_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 11 |
| STAT_TRQDELTAPHICLUTCH12_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 12 |
| STAT_TRQDELTAPHICLUTCH13_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 13 |
| STAT_TRQDELTAPHICLUTCH14_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 14 |
| STAT_TRQDELTAPHICLUTCH15_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 15 |
| STAT_TRQDELTAPHICLUTCH21_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 21 |
| STAT_TRQDELTAPHICLUTCH22_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 22 |
| STAT_TRQDELTAPHICLUTCH23_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 23 |
| STAT_TRQDELTAPHICLUTCH24_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 24 |
| STAT_TRQDELTAPHICLUTCH25_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 25 |
| STAT_TRQDELTAPHICLUTCH31_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 31 |
| STAT_TRQDELTAPHICLUTCH32_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 32 |
| STAT_TRQDELTAPHICLUTCH33_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 33 |
| STAT_TRQDELTAPHICLUTCH34_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 34 |
| STAT_TRQDELTAPHICLUTCH35_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 35 |
| STAT_TRQDELTAPHICLUTCH41_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 41 |
| STAT_TRQDELTAPHICLUTCH42_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 42 |
| STAT_TRQDELTAPHICLUTCH43_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 43 |
| STAT_TRQDELTAPHICLUTCH44_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 44 |
| STAT_TRQDELTAPHICLUTCH45_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 45 |
| STAT_TRQDELTAPHICLUTCH51_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 51 |
| STAT_TRQDELTAPHICLUTCH52_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 52 |
| STAT_TRQDELTAPHICLUTCH53_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 53 |
| STAT_TRQDELTAPHICLUTCH54_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 54 |
| STAT_TRQDELTAPHICLUTCH55_HISTORY_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Delta Winkel Kupplung Historie 55 |

### RES_0XDFF9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMETEMP_STDISC_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 0 |
| STAT_TIMETEMP_STDISC_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 1 |
| STAT_TIMETEMP_STDISC_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 2 |
| STAT_TIMETEMP_STDISC_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 3 |
| STAT_TIMETEMP_STDISC_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 4 |
| STAT_TIMETEMP_STDISC_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 5 |
| STAT_TIMETEMP_STDISC_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 6 |
| STAT_TIMETEMP_STDISC_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 7 |
| STAT_TIMETEMP_STDISC_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 8 |
| STAT_TIMETEMP_STDISC_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 9 |
| STAT_TIMETEMP_STDISC_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 10 |
| STAT_TIMETEMP_STDISC_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler Zeit Stahllamellentemperatur Bereich 11 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_CC_ECU_DATA | 0x4004 | - | Interne SG-Daten des CC ausgeben | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| STATUS_NIA | 0x4005 | - | Status NIA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| STEUERN_EOL_ERSTKALIBRIERWINKEL_SETZEN | 0x4008 | - | Setzen des Erstkalibrierwinkel der Aktuatorik | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4008_D | - |
| STATUS_NIA_IEM | 0x400B | STAT_IEM_DATA | interne Fehlerzustände (Pointer Address to literal string) | DATA | - | High | data[200] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_NIA_MST | 0x400C | STAT_MST_DATA | Status CDD Events (MPT Qualifier) | DATA | - | High | data[80] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HISTOGRAMM_CNTTRQRNG | 0x4010 | - | Histogrammdaten Anzahl Umdrehungen des Vorderachstrieblings über Momentenbereiche (Lastkollektiv) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| STEUERN_LT_INTEGRATOREN_SCHREIBEN | 0x4017 | - | Schreiben der LT Integratoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4017_D | - |
| KUPPLUNG_NACHLAUFKALIBRIERUNG | 0xAA10 | - | Durchführen einer Nachlaufkalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA10_R |
| KUPPLUNG_ERSTKALIBRIERUNG | 0xAA11 | - | Druchführen einer Erstkalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA11_R |
| OELSCHOTT | 0xAA12 | - | Ansteuern des Ölschotts (starten der Routine = öffnen des Ölschotts; stop der Routine = schließen des Ölschotts) und auslesen des Ölschottstatus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA12_R |
| GETRIEBEKLASSE | 0xDB30 | - | Schreiben und Lesen der Klassierinformation im EEPROM | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB30_D | RES_0xDB30_D |
| LMV_MOMENT | 0xDB32 | - | LMV Drehmomenten Istwert und Qualifier auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB32_D |
| NIA_ENERGY | 0xDFDC | - | Status NIA energy | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFDC_D |
| STATUS_HISTOGRAM_2WD | 0xDFDE | - | Histogramdaten des 2WD-Modus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFDE_D |
| DATEN_VERTEILERGETRIEBE | 0xDFE7 | - | Verteilergetriebedaten auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFE7_D |
| KALIBRIERUNG | 0xDFE8 | - | Auslesen der Kalibrierdaten/-stati | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFE8_D |
| INTEGRATOREN | 0xDFE9 | - | Auslesen und zurücksetzen der HO Getriebe und Lamellen Schädigungs-Integratoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFE9_D | - |
| KUPPLUNGSSTATUS | 0xDFEA | - | Service - Qualifier des LMV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFEA_D |
| VTG_SN | 0xDFED | - | Lesen und Schreiben der Seriennummer des Verteilergetriebes | - | DIAGJOB_STAT_VTG_SN_TEXT | - | - | - | - | - | - | - | 22;2E | ARG_0xDFED_D | RES_0xDFED_D |
| SPANNUNG | 0xDFEE | - | LMV Spannungen auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFEE_D |
| GETRIEBE_INTEGRATOREN_SCHREIBEN | 0xDFEF | - | Schreibt die HO Getriebe Integratoren und den Intervall km-Stand ins EEPROM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFEF_D | - |
| LAMELLEN_INTEGRATOREN_SCHREIBEN | 0xDFF0 | - | Schreibt die HO Lamellen Integratoren ins EEPROM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFF0_D | - |
| KALIBRIERUNG_LOESCHEN | 0xDFF1 | - | Löschen der Kalibrierdaten/-stati | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFF1_D | - |
| LMV_SOLLMOMENT_SETZEN | 0xDFF2 | - | Schreiben einer Sollmomentvorgabe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDFF2_D | - |
| FAHRZEUGZUSTAND | 0xDFF4 | - | Rückgabe des Fahrzeugszustandes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFF4_D |
| HISTOGRAMM_TIMETEMP | 0xDFF7 | - | Gemessene Steuergerätetemperatur in 21 Intervallen von -40°C bis 150°C eingeteilt. Alle 2sec wird ein der Temperatur zugeordneter Intervallzähler inkrementiert, solange das LMV NIA SG im aktuellen Fahrzyklus aktiv ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFF7_D |
| HISTOGRAMM_TRQDELTAPHICLUTCH | 0xDFF8 | - | Der ermittelte Betriebspunkt der Kupplung (gestelltes Moment und auftretende Differenzdrehzahl) wird in 25 Sektoren eingeteilt und solange das LMV NIA SG im aktuellen Fahrzyklus aktiv ist, alle 10ms ein dem jeweiligen Sektor zugeordneter Intervallzählerstand inkrementiert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFF8_D |
| HISTOGRAMM_TEMP_STDISC | 0xDFF9 | - | Simulierte Stahllamellentemperatur in 12 Intervallen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFF9_D |
| NVRAM_PAGE_CHANGE | 0xF006 | - | NVRAM-Seitenwechsel initiieren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF006_R | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_ERSTKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | not executed |
| 0x01 | pending |
| 0x02 | running |
| 0x03 | finished with error |
| 0x04 | finished without error |
| 0xFF | Wert ungültig |

### TAB_NACHLAUFKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | not executed |
| 0x01 | pending |
| 0x02 | running |
| 0x03 | finished with error |
| 0x04 | finished without error |
| 0xFF | Wert ungültig |

### TAB_OELSCHOTT

| WERT | TEXT |
| --- | --- |
| 0x00 | normal |
| 0x01 | offen |
| 0xFF | undefinierter Wert |
