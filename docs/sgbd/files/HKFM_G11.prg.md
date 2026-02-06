# HKFM_G11.prg

## General

|  |  |
| --- | --- |
| File | HKFM_G11.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 162 |
| Origin | BMW EK-531 Wagenhuber |
| Revision | 16.002 |
| Author | BMW BA-712 Nordalm |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Heck- Funktionsmodul |  |  |
| ORIGIN | string | BMW EK-531 Wagenhuber |  |  |
| REVISION | string | 16.002 |  |  |
| AUTHOR | string | BMW BA-712 Nordalm |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.989 |  |  |
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
| 0x01 | ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | invalid |
| 0x04 | insync, ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | ms ECU overall, comparable |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X3080_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__DATA | DATA | high | data[47] | - | - | 1.0 | 1.0 | 0.0 | - | - | Coding block ARSG_PARAM |

### ARG_0X4100_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMPLITUDE | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0.0 % bis 100.0 % PWM |
| DIRECTION | 0-n | high | unsigned char | - | TAB_MOTOR_RICHTUNG | - | - | - | - | - | 0=Stop, 1=im Uhrzeigersinn, 2=gegen den Uhrzeigersinn, 3=Öffnen, 4=Schließen |
| TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254=angesteuerte Zeit, 255=unendlich |

### ARG_0X4101_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMPLITUDE | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0.0 % bis 100.0 % PWM |
| DIRECTION | 0-n | high | unsigned char | - | TAB_MOTOR_RICHTUNG | - | - | - | - | - | 0=Stop, 1=im Uhrzeigersinn, 2=gegen den Uhrzeigersinn, 3=Öffnen, 4=Schließen |
| TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254=angesteuerte Zeit, 255=unendlich |

### ARG_0X4102_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMPLITUDE | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0.0 % bis 100.0 % PWM |
| DIRECTION | 0-n | high | unsigned char | - | TAB_MOTOR_RICHTUNG | - | - | - | - | - | 0=Stop, 1=im Uhrzeigersinn, 2=gegen den Uhrzeigersinn, 3=Öffnen, 4=Schließen |
| TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254=angesteuerte Zeit, 255=unendlich |

### ARG_0X4104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMPLITUDE | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0.0 % bis 100.0 % PWM |
| DIRECTION | 0-n | high | unsigned char | - | TAB_MOTOR_RICHTUNG | - | - | - | - | - | 0=Stop, 1=im Uhrzeigersinn, 2=gegen den Uhrzeigersinn, 3=Öffnen, 4=Schließen |
| TIME | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254=angesteuerte Zeit, 255=unendlich |

### ARG_0XD221_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Akustikgeber ansteuern: 0 = ausschalten 1 = einschalten |

### ARG_0XD225_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANTRIEB | 0-n | high | unsigned char | - | TAB_HKL_ANTRIEB | - | - | - | - | - | Auswahl Antrieb (siehe TAB_HKL_ANTRIEB) |
| DREHRICHTUNG | 0-n | high | unsigned char | - | TAB_HKL_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_HKL_RICHTUNG) |
| PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe PWM-Wert (0-100%) |
| TIMEOUT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Timeout für die Ansteuerung (0-5s) |

### ARG_0XD23C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANSTEUERUNGSZEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert für die Dauer der Ansteuerung in eine Zwischenposition (Wert 1 = Ansteuerung für 100 ms, Wert 2 = Ansteuerung für 200 ms ... Wert 60 = Ansteuerung für 6000 ms) |

### ARG_0XD23D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | LED: 0x00 = aus 0x01 = ein |

### ARG_0XD23E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Taster für Spoiler: 0x00 = nicht gedrückt 0x01 = gedrückt |

### ARG_0XD23F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT | 0-n | - | signed int | - | TAB_HKL_KONTAKTE | 1.0 | 1.0 | 0.0 | - | - | 1 = HKK = Heckklappenkontakt;  2 = HKKU = Heckklappenkontakt unten (nur E70) |
| AKTION | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0= Kontakt geöffnet; 1= Kontakt geschlossen |

### ARG_0XD247_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER | 0-n | - | signed int | - | TAB_HKL_TASTER | 1.0 | 1.0 | 0.0 | 0.0 | 4.0 | 1 = TOEHK = Taster Heckklappe aussen; 2 = TOEHKK = Taster Heckklappe innen; 3 = TOEHKI = Innenraumtaster Heckklappe; 4 = TOEHKCL = Innenraumtaster Centerlock |
| AKTION | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0= Taster nicht gedrückt; 1= Taster gedrückt |

### ARG_0XD248_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | signed int | - | TAB_BEWEGUNG | 1.0 | 1.0 | 0.0 | - | - | Bewegungsrichtung:  0 = STOPP; 1 = OEFFNEN; 2 = SCHLIESSEN siehe Tabelle: TAB_BEWEGUNG |

### ARG_0XD24B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed int | - | - | - | - | - | - | - | Setzen des Anlieferungs-Zustandes 1 = SETZEN; 0 = keine Aktion |

### ARG_0XD24D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE_WEITERFAHRT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Taste für Weiterfahrt Heckklappe: 0 = nicht gedrückt 1 = gedrückt |

### ARG_0XD24F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_ASP_BEWEGUNG | - | - | - | - | - | Richtung der Bewegung des aktiver Heckspoiler: Siehe Tabelle TAB_ASP_BEWEGUNG |

### ARG_0XD302_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Initialisierungslauf starten; 0 = keine Aktion |

### ARG_0XD30C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Steuert die Laderaumabdeckung an: 0 = untere Postition 1 = obere Position |

### ARG_0XD30D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Reversier-Zähler löschen 1 = löschen |

### ARG_0XD30E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = Anlieferzustand setzen; 0 = keine Aktion |

### ARG_0XD325_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_ROLLO_ANST_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_ROLLO_ANST_RICHTUNG) |

### ARG_0XD326_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_ROLLO_ANST_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB_ROLLO_ANST_RICHTUNG) |
| PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe PWM-Wert (0-100%) |
| TIMEOUT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Timeout für die Ansteuerung (0-15 Sekunden) |

### ARG_0XD33B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Argument Taster:  0 = Taster links  1 = Taster rechts  |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Argument Aktion:  0 = Taster nicht betätigt  1 = Taster betätigt |

### ARG_0XD377_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MODE | 0-n | high | unsigned char | - | TAB_HKL_MAX_POS_ARG | - | - | - | - | - | Vorgabe für die Bestimmung der oberen HKL-Position: 0=maximale Position wird bei der Initialisierung angelernt / 1=maximale Position wird durch CAF-Wert (Codierwert) vorgegeben |

### ARG_0XD3E5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_START | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion / 1 = Initialisierung starten |

### ARG_0XD3E6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_ARSG_ANST_PLANE | - | - | - | - | - | Richtung der Ansteuerung |

### ARG_0XD3E7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_ARSG_ANST_KASSETTE | - | - | - | - | - | Richtung der Ansteuerung |

### ARG_0XD3E8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_ARSG_ANST_STAUFACHKLAPPE | - | - | - | - | - | Richtung der Ansteuerung |

### ARG_0XD3F5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion / 1 = Reset durchführen |

### ARG_0XD3F8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RICHTUNG | 0-n | high | unsigned char | - | TAB_HKFM_CONTROL_SCA_ANTRIEB | - | - | - | - | - | Richtung der Ansteuerung |

### ARG_0XD6B3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANTRIEB | 0-n | high | unsigned char | - | TAB_ARSG_CONTROL_ANTRIEBE | - | - | - | - | - | Auswahl Antrieb (siehe TAB) |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_ARSG_CONTROL_RICHTUNG | - | - | - | - | - | Richtung der Ansteuerung (siehe TAB) |
| TIMEOUT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Timeout für die Ansteuerung (in Sekunden) |

### ARG_0XD6B4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_START | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion / 1 = Parametrierung starten |

### ARG_0XD850_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = keine Aktion / 1 = Anlieferungszustand setzen |

### ARG_0XD852_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | unsigned char | - | TAB_EHKU_BEWEGUNG | - | - | - | - | - | Bewegungsrichtung |

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
| 0x020D00 | Energiesparmode aktiv | 0 | - |
| 0x020D08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020D09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x020D0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x020D0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x020D0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x020D0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x020D20 | CAN-Fehler (Sammelfehler) | 0 | - |
| 0x020D21 | EEPROM-Fehler (Sammelfehler) | 0 | - |
| 0x020D23 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x020D26 | Hardwarefehler (Sammelfehler) | 0 | - |
| 0x020D29 | Softwarefehler (Sammelfehler) | 0 | - |
| 0x02FF0D | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x801700 | Untere Heckklappe (eHKU): Spielschutz aktiv | 1 | - |
| 0x801701 | Interner Steuergerätefehler | 0 | - |
| 0x801702 | HKL: Funktionseinschränkung wegen Verlust der Normierung (Position unbekannt) | 0 | - |
| 0x801703 | HKL: Unterspannung erkannt | 1 | - |
| 0x801704 | HKL: Überspannung erkannt | 1 | - |
| 0x801705 | Spannungsversorgung Lastkreis (KL30) defekt | 0 | - |
| 0x801706 | HKL Spielschutz aktiv | 1 | - |
| 0x801707 | HKL-Motor links: Kurzschluss nach Plus | 0 | - |
| 0x801708 | HKL-Motor links: Kurzschluss nach Minus oder KL30 Sicherung defekt | 0 | - |
| 0x801709 | HKL-Motor links: Unterbrechung | 0 | - |
| 0x80170A | HKL-Motor untere Heckklappe (eHKU): Kurzschluss nach Plus | 0 | - |
| 0x80170B | HKL-Motor untere Heckklappe (eHKU): Kurzschluss nach Masse | 0 | - |
| 0x80170C | HKL-Motor untere Heckklappe (eHKU): Leitungsunterbrechung | 0 | - |
| 0x801710 | HKL-Motor rechts: Kurzschluss nach Plus | 0 | - |
| 0x801711 | HKL-Motor rechts: Kurzschluss nach Minus oder KL30 Sicherung defekt | 0 | - |
| 0x801712 | HKL-Motor rechts: Unterbrechung | 0 | - |
| 0x801713 | HKL-Hallsensor 1 links: Kurzschluss nach Minus | 0 | - |
| 0x801714 | HKL-Hallsensor 1 links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801715 | HKL-Hallsensor 2 links: Kurzschluss nach Minus | 0 | - |
| 0x801716 | HKL-Hallsensor 2 links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801717 | HKL-Hallsensor 1 rechts: Kurzschluss nach Minus | 0 | - |
| 0x801718 | HKL-Hallsensor 1 rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801719 | HKL-Hallsensor 2 rechts: Kurzschluss nach Minus | 0 | - |
| 0x801720 | HKL-Hallsensor 2 rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801721 | HKL: Temperatur außerhalb Betriebsbereich | 1 | - |
| 0x801722 | Fahrzeugeschwindigkeit ungültig | 1 | - |
| 0x801723 | Taster Weiterfahrt: Taste klemmt | 0 | - |
| 0x801724 | Fahrzeuggeschwindigkeit bei Betätigung größer Null | 1 | - |
| 0x801725 | Abdeckrollo-SG (LIN): empfangener Parameterdatensatz unplausibel oder fehlerhaft | 0 | - |
| 0x801728 | LARA: Temperatur außerhalb Betriebsbereich | 1 | - |
| 0x80172A | HKL-Hallsensor 1 untere Heckklappe (eHKU): Kurzschluss nach Masse | 0 | - |
| 0x80172B | HKL-Hallsensor 1 untere Heckklappe (eHKU): Kurzschluss nach Plus oder Leitungsunterbrechung | 0 | - |
| 0x80172C | HKL-Hallsensor 2 untere Heckklappe (eHKU): Kurzschluss nach Masse | 0 | - |
| 0x80172D | HKL-Hallsensor 2 untere Heckklappe (eHKU): Kurzschluss nach Plus oder Leitungsunterbrechung | 0 | - |
| 0x80172E | Aktiver Heckspoiler, Sensor für die obere Position: Status des Sensors unplausibel | 0 | - |
| 0x80172F | Aktiver Heckspoiler: Timeout beim Ausfahren oder Einfahren des Heckspoilers (Blockierung) | 0 | - |
| 0x801730 | HKL-Sensorversorgungsspannung Hallsensoren links | 0 | - |
| 0x801731 | HKL-Sensorversorgungsspannung Hallsensoren rechts | 0 | - |
| 0x801732 | Abdeckrollo-SG (LIN), Antrieb für Abdeckklappe im Gepäckraumboden: Leitungsunterbrechung | 0 | - |
| 0x801733 | Abdeckrollo-SG (LIN), Antrieb für Abdeckklappe im Gepäckraumboden: Kurzschluss | 0 | - |
| 0x801734 | Abdeckrollo-SG (LIN), Antrieb für Abdeckklappe im Gepäckraumboden: Blockierung erkannt | 1 | - |
| 0x801735 | Abdeckrollo-SG (LIN), Hallsensor im Antrieb für Abdeckklappe: Leitungsunterbrechung | 0 | - |
| 0x801736 | Abdeckrollo-SG (LIN), Hallsensor im Antrieb für Abdeckklappe: Kurzschluss | 0 | - |
| 0x801737 | Abdeckrollo-SG (LIN), Antrieb für Abdeckrollokassette: Leitungsunterbrechung | 0 | - |
| 0x801738 | Abdeckrollo-SG (LIN), Antrieb für Abdeckrollokassette: Kurzschluss | 0 | - |
| 0x801739 | Abdeckrollo-SG (LIN), Antrieb für Abdeckrollokassette: Blockierung erkannt | 1 | - |
| 0x80173A | Abdeckrollo-SG (LIN), Hallsensor im Antrieb für Abdeckrollokassette: Leitungsunterbrechung | 0 | - |
| 0x80173B | Abdeckrollo-SG (LIN), Hallsensor im Antrieb für Abdeckrollokassette: Kurzschluss | 0 | - |
| 0x80173C | Abdeckrollo-SG (LIN): Überspannung oder Unterspannung erkannt | 1 | - |
| 0x80173D | Abdeckrollo-SG (LIN): Software Überwachungsmonitor - Überkraftbegrenzung fehlerhaft | 0 | - |
| 0x80173E | Abdeckrollo-SG (LIN): interner Steuergerätefehler | 0 | - |
| 0x80173F | Abdeckrollo-SG (LIN): Spielschutz aktiv | 1 | - |
| 0x801740 | LARA-Motor 1, Hallsensor 1: Kurzschluss nach Minus | 0 | - |
| 0x801741 | LARA-Motor 1, Hallsensor 1: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801742 | LARA-Motor 1: Kurzschluss nach Minus | 0 | - |
| 0x801743 | LARA-Motor 1: Kurzschluss nach Plus | 0 | - |
| 0x801744 | LARA-Motor 1: Unterbrechung | 0 | - |
| 0x801745 | LARA-Motor 1, Hallsensor 2: Kurzschluss nach Minus | 0 | - |
| 0x801746 | LARA-Motor 1, Hallsensor 2: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801747 | LARA: Spielschutz aktiv | 1 | - |
| 0x801748 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung Abdeckrollo: ein Taster hängt | 0 | - |
| 0x801749 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung Sitzlehnen 2. Sitzreihe: ein Schalter hängt oder Status unplausibel | 0 | - |
| 0x80174A | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung Sitzlehnen 3. Sitzreihe: ein Schalter hängt oder Status unplausibel | 0 | - |
| 0x80174B | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Sitzverstellung Komfort/Platz: ein Taster hängt | 0 | - |
| 0x80174C | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung 3. Sitzreihe Schalterblock extern links: Kurzschluss oder Leitungsunterbrechung | 0 | - |
| 0x80174D | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung 3. Sitzreihe Schalterblock extern links: ein Schalter hängt oder Status unplausibel | 0 | - |
| 0x80174E | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung 3. Sitzreihe Schalterblock extern rechts: Kurzschluss oder Leitungsunterbrechung | 0 | - |
| 0x80174F | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung 3. Sitzreihe Schalterblock extern rechts: ein Schalter hängt oder Status unplausibel | 0 | - |
| 0x801750 | Betätigung während Motorstart | 1 | - |
| 0x801751 | Aktiver Heckspoiler, Sensor für obere Position: Kurzschluss nach Minus | 0 | - |
| 0x801752 | Aktiver Heckspoiler, Sensor für obere Position: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801753 | Aktiver Heckspoiler, Sensor für obere Position: Signal ungültig | 0 | - |
| 0x801754 | Aktiver Heckspoiler, Hallsensor im Spoiler-Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x801755 | Aktiver Heckspoiler, Hallsensor im Spoiler-Antrieb: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801756 | Aktiver Heckspoiler, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x801757 | Aktiver Heckspoiler, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x801758 | Aktiver Heckspoiler, Antrieb: Unterbrechung | 0 | - |
| 0x801759 | Aktiver Heckspoiler, Taster: Taster hängt | 0 | - |
| 0x80175A | Aktiver Heckspoiler, Sensoren für die Position: Status der Sensoren unplausibel | 0 | - |
| 0x80175B | Aktiver Heckspoiler: Spielschutz aktiv | 0 | - |
| 0x80175C | Aktiver Heckspoiler, Taster-LED: Kurzschluss nach Minus | 0 | - |
| 0x80175D | Aktiver Heckspoiler, Taster-LED: Kurzschluss nach Plus | 0 | - |
| 0x80175E | Abdeckrollo-SG (LIN): Position unbekannt (Verlust der Initialisierung) | 0 | - |
| 0x80175F | HKFM Buzzer: Kurzschluss nach Minus | 0 | - |
| 0x801760 | HKFM Buzzer: Kurzschluss nach Plus | 0 | - |
| 0x801761 | Abdeckrollo-SG (LIN): Normierung ungültig oder fehlerhaft | 0 | - |
| 0x801762 | HKFM Buzzer: Unterbrechung | 0 | - |
| 0x801763 | Lehnenfernentriegelung, Taster links: Unterbrechung | 0 | - |
| 0x801764 | Lehnenfernentriegelung, Taster links: Kurzschluss nach Minus | 0 | - |
| 0x801765 | Lehnenfernentriegelung, Taster links: Kurzschluss nach Plus | 0 | - |
| 0x801766 | Lehnenfernentriegelung, Taster links: Taster hängt | 0 | - |
| 0x801767 | Lehnenfernentriegelung, Taster rechts: Unterbrechung | 0 | - |
| 0x801768 | Lehnenfernentriegelung, Taster rechts: Kurzschluss nach Minus | 0 | - |
| 0x801769 | Lehnenfernentriegelung, Taster rechts: Kurzschluss nach Plus | 0 | - |
| 0x80176A | Lehnenfernentriegelung, Taster rechts: Taster hängt | 0 | - |
| 0x80176B | Lehnenfernentriegelung, Entriegelungsantrieb links: Unterbrechung oder Kurzschluss nach Plus | 0 | - |
| 0x80176C | Lehnenfernentriegelung, Entriegelungsantrieb links: Kurzschluss nach Minus | 0 | - |
| 0x80176D | Lehnenfernentriegelung, Entriegelungsantrieb rechts: Unterbrechung oder Kurzschluss nach Plus | 0 | - |
| 0x80176E | Lehnenfernentriegelung, Entriegelungsantrieb rechts: Kurzschluss nach Minus | 0 | - |
| 0x80176F | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN): interner Fehler | 0 | - |
| 0x801770 | Sonnenrollo, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x801771 | Sonnenrollo, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x801772 | Sonnenrollo, Antrieb: Unterbrechung | 0 | - |
| 0x801773 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung Schiebehimmel Schalter extern: Kurzschluss oder Leitungsunterbrechung | 0 | - |
| 0x801774 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN), Verstellung Schiebehimmel Schalter extern: Schalter hängt oder Status unplausibel | 0 | - |
| 0x80177C | HKL: Blockierung der Heckklappe erkannt | 1 | - |
| 0x80177D | HKL: Blockierung der unteren Heckklappe (eHKU) erkannt | 1 | - |
| 0x80177E | HKL: Heckklappe nicht initialisiert | 0 | - |
| 0x80177F | HKL: untere Heckklappe (eHKU) nicht initialisiert | 0 | - |
| 0x801780 | eSCA links (LIN): Unterspannung oder Überspannung erkannt | 1 | - |
| 0x801781 | eSCA links (LIN): interner Fehler (Hardware defekt) | 0 | - |
| 0x801782 | eSCA links (LIN): interner Fehler (EEPROM defekt) | 0 | - |
| 0x801783 | eSCA links (LIN): Schlosssignal Vorraste unplausibel | 0 | - |
| 0x801784 | eSCA links (LIN): Schlosssignal Hauptraste unplausibel | 0 | - |
| 0x801785 | eSCA links (LIN): Blockierung erkannt durch interne Strommessung | 0 | - |
| 0x801786 | eSCA links (LIN): Timeout während der Zuziehbewegung | 0 | - |
| 0x801787 | Funktion eSCA links: HKFM hat nach einer Funktionsanforderung keine passende Statusmeldung vom LIN-Slave erhalten | 0 | - |
| 0x801788 | eSCA rechts (LIN): Unterspannung oder Überspannung erkannt | 1 | - |
| 0x801789 | eSCA rechts (LIN): interner Fehler (Hardware defekt) | 0 | - |
| 0x80178A | eSCA rechts (LIN): interner Fehler (EEPROM defekt) | 0 | - |
| 0x80178B | eSCA rechts (LIN): Schlosssignal Vorraste unplausibel | 0 | - |
| 0x80178C | eSCA rechts (LIN): Schlosssignal Hauptraste unplausibel | 0 | - |
| 0x80178D | eSCA rechts (LIN): Blockierung erkannt durch interne Strommessung | 0 | - |
| 0x80178E | eSCA rechts (LIN): Timeout während der Zuziehbewegung | 0 | - |
| 0x80178F | Funktion eSCA rechts: HKFM hat nach einer Funktionsanforderung keine passende Statusmeldung vom LIN-Slave erhalten | 0 | - |
| 0x801790 | eSCA (LIN): Spielschutz aktiv | 1 | - |
| 0xCC4468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xCC4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCC4C00 | Abdeckrollo-SG (LIN): fehlender LIN-Slave | 0 | - |
| 0xCC4C01 | Abdeckrollo-SG (LIN): unerwarteter LIN-Slave | 0 | - |
| 0xCC4C02 | LIN-Bus: Kommunikationsfehler durch Abdeckrollo-SG erkannt | 0 | - |
| 0xCC4C03 | eSCA links (LIN): fehlender LIN-Slave | 0 | - |
| 0xCC4C04 | eSCA links (LIN): unerwarteter LIN-Slave | 0 | - |
| 0xCC4C05 | LIN-Bus: Kommunikationsfehler durch eSCA links erkannt | 0 | - |
| 0xCC4C06 | eSCA rechts (LIN): fehlender LIN-Slave | 0 | - |
| 0xCC4C07 | eSCA rechts (LIN): unerwarteter LIN-Slave | 0 | - |
| 0xCC4C08 | LIN-Bus: Kommunikationsfehler durch eSCA rechts erkannt | 0 | - |
| 0xCC4C10 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN): fehlender LIN-Slave | 0 | - |
| 0xCC4C11 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN): unerwarteter LIN-Slave | 0 | - |
| 0xCC4C12 | Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN): falsche Variante verbaut | 0 | - |
| 0xCC4C13 | LIN-Bus: Kommunikationsfehler durch Bedieneinheit Sitze/Abdeckrollo im Gepäckraum (LIN) erkannt | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Stack-Fehler | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | CRC-Fehler | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | Flag-Kompromittierung | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | Reversier-Bewegung | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0005 | Maximale Reversierlänge | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0006 | Bewegung innerhalb 220ms | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | Referenzwert | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | Abschalt-Flag | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | FuSi-Abschaltwert | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000A | PAD Timeout | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000B | Watchdog | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | Bandgap | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | ADC-Konvertierung | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | Temperatur | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | Versorgungsspannung | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | Position | 0/1 | High | 0x8000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4300 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
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
| 0x0D0001 | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x0D0006 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x0D0007 | FLS_E_ERASE_FAILED | 0 | - |
| 0x0D0008 | FLS_E_READ_FAILED | 0 | - |
| 0x0D0009 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x0D000A | FLS_E_WRITE_FAILED | 0 | - |
| 0x0D000B | FLSTST_E_FLSTST_FAILURE | 0 | - |
| 0x0D000C | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x0D000D | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x0D000E | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x0D000F | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x0D0010 | NVM_E_REQ_FAILED | 0 | - |
| 0x0D0011 | NVM_E_VERIFY_FAILED | 0 | - |
| 0x0D0012 | NVM_E_WRITE_PROTECTED | 0 | - |
| 0x0D0013 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x0D0020 | CANNM_E_NETWORK_TIMEOUT | 1 | - |
| 0x0D0021 | EVENT_MCU_E_LOCK_FAILURE | 0 | - |
| 0x0D0022 | EVENT_MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x0D0023 | EVENT_MCU_E_TIMEOUT_TRANSITION | 0 | - |
| 0x0D0024 | SPI_E_HARDWARE_ERROR | 0 | - |
| 0x0D0080 | EEP_E_COMPARE_FAILED | 0 | - |
| 0x0D0081 | EEP_E_ERASE_FAILED | 0 | - |
| 0x0D0082 | EEP_E_READ_FAILED | 0 | - |
| 0x0D0083 | EEP_E_WRITE_FAILED | 0 | - |
| 0x0D0107 | E_OS_CORE | 0 | - |
| 0x0D0108 | E_OS_DISABLEDINT | 0 | - |
| 0x0D0109 | E_OS_ILLEGAL_ADDRESS | 0 | - |
| 0x0D010A | E_OS_INTERFERENCE_DEADLOCK | 0 | - |
| 0x0D010B | E_OS_MISSINGEND | 0 | - |
| 0x0D010C | E_OS_NESTING_DEADLOCK | 0 | - |
| 0x0D010D | E_OS_PROTECTION_ARRIVAL | 0 | - |
| 0x0D010E | E_OS_PROTECTION_EXCEPTION | 0 | - |
| 0x0D010F | E_OS_PROTECTION_LOCKED | 0 | - |
| 0x0D0110 | E_OS_PROTECTION_MEMORY | 0 | - |
| 0x0D0111 | E_OS_PROTECTION_TIME | 0 | - |
| 0x0D0112 | E_OS_SERVICEID | 0 | - |
| 0x0D0113 | E_OS_SPINLOCK | 0 | - |
| 0x0D0114 | E_OS_STACKFAULT | 0 | - |
| 0x0D011A | PDUR_E_INIT_FAILED | 0 | - |
| 0x0D011F | WDG_E_DISABLE_REJECTED | 0 | - |
| 0x0D0120 | WDG_E_MODE_FAILED | 0 | - |
| 0x0D0121 | WDGM_E_IMPROPER_CALLER | 0 | - |
| 0x0D0122 | WDGM_E_MONITORING | 0 | - |
| 0x0D0123 | WDGM_E_SET_MODE | 0 | - |
| 0x0D0124 | WDG_E_MISS_TRIGGER | 0 | - |
| 0x0D1001 | PWM_E_UNEXPECTED_IRQ | 0 | - |
| 0x0D1002 | WDG_E_MODE_SWITCH_FAILED | 0 | - |
| 0x0D1004 | FEE_E_INIT_TIMEOUT | 0 | - |
| 0x0D1005 | NVM_E_INIT_TIMEOUT | 0 | - |
| 0x0D1006 | IOHWAB_E_IO_SEQUENCE | 0 | - |
| 0x0D1008 | ADC_E_TIMEOUT | 0 | - |
| 0x0D100A | ECCHDL_E_CRITICAL_ERROR | 0 | - |
| 0x0D100B | ECCHDL_E_FLASH_ECC_FAIL_NORECOVERY | 0 | - |
| 0x0D100C | ECCHDL_E_RAM_ECC_FAIL_NORECOVERY | 0 | - |
| 0x0D100D | EVENT_CANIF_TT_E_JLE_SYNC | 0 | - |
| 0x0D100E | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x0D1200 | HKL: interner Fehler bei der Stromkalibrierung | 0 | - |
| 0x0D1201 | HKL: interner Fehler bei der Schaltung für Strommessung | 0 | - |
| 0x0D1202 | Aktiver Heckspoiler: RAM Werte der FuSi SW wurden überschrieben | 0 | - |
| 0x0D1203 | Aktiver Heckspoiler: Sensor für obere Position wurde von den FuSi SW-Komponenten unterschiedlich erkannt | 0 | - |
| 0x0D1204 | Aktiver Heckspoiler: Register monitoring check fehlerhaft | 0 | - |
| 0x0D1205 | LARA - Motor1, Hallsensor: Referenzspannungen nicht im gültigen Bereich | 0 | - |
| 0x0D1206 | eHKU - Motor, Hallsensor: Referenzspannungen nicht im gültigen Bereich | 0 | - |
| 0x80177C | HKL: Blockierung der Heckklappe erkannt | 0 | - |
| 0x80177D | HKL: Blockierung der unteren Heckklappe (uHKL) erkannt | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Stack-Fehler | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0002 | CRC-Fehler | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0003 | Flag-Kompromittierung | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0004 | Reversier-Bewegung | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0005 | Maximale Reversierlänge | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0006 | Bewegung innerhalb 220ms | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0007 | Referenzwert | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0008 | Abschalt-Flag | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0009 | FuSi-Abschaltwert | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000A | PAD Timeout | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000B | Watchdog | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000C | Bandgap | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000D | ADC-Konvertierung | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000E | Temperatur | 0/1 | High | 0x2000 | - | - | - | - |
| 0x000F | Versorgungsspannung | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0010 | Position | 0/1 | High | 0x8000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4300 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
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
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

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
| STAT_VERSION_YEAR | 0-n | high | unsigned char | - | - | - | - | - | Version - Year |
| STAT_VERSION_MONTH | 0-n | high | unsigned char | - | - | - | - | - | Version - Month |
| STAT_VERSION_DAY | 0-n | high | unsigned char | - | - | - | - | - | Version - Day |
| STAT_PROJECT_ID | 0-n | high | unsigned char | - | - | - | - | - | Project ID |
| STAT_MODULE_ID | 0-n | high | unsigned char | - | - | - | - | - | Module ID |
| STAT_CONTROLLER_ID | 0-n | high | unsigned char | - | - | - | - | - | Controller ID |
| STAT_HARDWARE_ID | 0-n | high | unsigned char | - | - | - | - | - | Hardware ID |
| STAT_SOFTWARE_ID | 0-n | high | unsigned char | - | - | - | - | - | Software ID |
| STAT_VERSION_INDEX | 0-n | high | unsigned char | - | - | - | - | - | Version - Index |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_PARAM_REFLECTION_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Dummy-Bytes (Reflektion der Motoransteuerungsparameter) |

### RES_0X4101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_PARAM_REFLECTION_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Dummy-Bytes (Reflektion der Motoransteuerungsparameter) |

### RES_0X4102_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_PARAM_REFLECTION_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Dummy-Bytes (Reflektion der Motoransteuerungsparameter) |

### RES_0X4104_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_PARAM_REFLECTION_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Dummy-Bytes (Reflektion der Motoransteuerungsparameter) |

### RES_0X4200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UC_39_AIN_FET_TEMP_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_39_AIN_FET_TEMP |
| STAT_UC_40_AIN_LINSENS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_40_AIN_LINSENS |
| STAT_UC_41_AIN_KL30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_41_AIN_KL30 |
| STAT_UC_42_AIN_U12S_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_42_AIN_U12S |
| STAT_UC_44_AIN_M1_VOLT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_44_AIN_M1_VOLT |
| STAT_UC_44_AIN_M1_VOLT_RAW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_44_AIN_M1_VOLT_RAW |
| STAT_UC_45_AIN_M1M2_CUR_HS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_45_AIN_M1M2_CUR_HS |
| STAT_UC_46_AIN_M1M2_VOLT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_46_AIN_M1M2_VOLT |
| STAT_UC_46_AIN_M1M2_VOLT_RAW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_46_AIN_M1M2_VOLT_RAW |
| STAT_UC_48_AIN_M2_VOLT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_48_AIN_M2_VOLT |
| STAT_UC_48_AIN_M2_VOLT_RAW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_48_AIN_M2_VOLT_RAW |
| STAT_UC_50_AIN_KL30E_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_50_AIN_KL30E |
| STAT_UC_54_AIN_M5_OPEN_VOLT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_54_AIN_M5_OPEN_VOLT |
| STAT_UC_55_AIN_ANTIPS1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_55_AIN_ANTIPS1 |
| STAT_UC_56_AIN_ANTIPS2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_56_AIN_ANTIPS2 |
| STAT_UC_57_AIN_ANTIPS3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_57_AIN_ANTIPS3 |
| STAT_UC_58_AIN_M1_CUR_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_58_AIN_M1_CUR_LS |
| STAT_UC_61_AIN_MUX1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_61_AIN_MUX1 |
| STAT_UC_62_AIN_M1M2_CUR_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_62_AIN_M1M2_CUR_LS |
| STAT_UC_63_AIN_M5_CLOSE_VOLT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_63_AIN_M5_CLOSE_VOLT |
| STAT_UC_64_AIN_PCB_TEMP_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_64_AIN_PCB_TEMP |
| STAT_UC_66_AIN_BEEP_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UC_66_AIN_BEEP_DIAG |
| STAT_UNALLOCATED_ANALOG_IN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UNALLOCATED_ANALOG_IN_1 |
| STAT_UNALLOCATED_ANALOG_IN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UNALLOCATED_ANALOG_IN_2 |
| STAT_UNALLOCATED_ANALOG_IN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UNALLOCATED_ANALOG_IN_3 |
| STAT_UNALLOCATED_ANALOG_IN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | UNALLOCATED_ANALOG_IN_4 |
| STAT_UNALLOCATED_DIGITAL_IN_1_WERT | HEX | high | unsigned char | - | - | - | - | - | UNALLOCATED_DIGITAL_IN_1 |

### RES_0X4201_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AIN_KL30P_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Klemme30B Eingang |
| STAT_AIN_KL30E_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Klemme30F Eingang |
| STAT_AIN_U12V_S_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am U12V_S Eingang |
| STAT_AIN_PCB_TEMP_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am PCB Temperatur Sensor |
| STAT_AIN_M1_CLOSE_CUR_HS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der high-side Strommessung |
| STAT_AIN_M1M2_OPEN_CUR_HS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der high-side Strommessung |
| STAT_AIN_M1M2_OPEN_CURE_LS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der low-side Strommessung |
| STAT_AIN_M2_CLOSE_CUR_HS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der high-side Strommessung |
| STAT_AIN_M1_CLOSE_VOLT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der HKL Motor1 Spannungsmessung |
| STAT_AIN_M1M2_OPEN_VOLT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der HKL common-line Spannungsmessung |
| STAT_AIN_M2_CLOSE_VOLT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der HKL Motor2 Spannungsmessung |
| STAT_AIN_S8_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der eLFE Taster Links Eingang |
| STAT_AIN_S9_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der eLFE Taster Rechts Eingang |
| STAT_AIN_S7_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der untere Heckklappe Eingang |
| STAT_AIN_BEEP_DIAG_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswer an der Beeper Diagnose |
| STAT_DI_S1 | 0/1 | high | unsigned char | - | - | - | - | - | DSL Reedkontakt |
| STAT_DI_S4 | 0/1 | high | unsigned char | - | - | - | - | - | DSL Reedkontakt 2 |
| STAT_DI_S2 | 0/1 | high | unsigned char | - | - | - | - | - | Aktiver Heckspoiler Taster |
| STAT_AIN_S3_HALL_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der Aktiver Heckspoiler obere Endpositionsschalter |
| STAT_AIN_LED1_DIAG_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Diagnosespannung für den AHS Taster |
| STAT_AIN_M3_HALL1_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der DSL/AHS Halsensor1 |
| STAT_AIN_M3_HALL2_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der DSL Motor Hallsensor2 |
| STAT_AIN_M3_CLOSE_CUR_HS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der DSL/AHS Motor high-side Strommessung |
| STAT_AIN_M3_OPEN_CUR_LS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der DSL/AHS Motor low-side Strommessung |
| STAT_AIN_M3_OPEN_CUR_HS_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der DSL/AHS Motor high-side Strommessung |
| STAT_AIN_M3_CLOSE_VOLT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der DSL/AHS Motor Spannungsmessung |
| STAT_AIN_M3_OPEN_VOLT_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert an der DSL/AHS Motor Spannungsmessung |
| STAT_AIN_M6M7_CUR_WERT | Digits | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromwert an der eLFE Strommessung |

### RES_0XA171_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NORMIERUNG_ABDECKROLLO | - | - | + | 0-n | high | unsigned char | - | TAB_ARSG_STATUS_INIT | - | - | - | Status der Normierung (Staufachklappe, Abdeckrollo und Abdeckrollokassette) |
| STAT_NORMIERLAUF_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Status des Normierlaufs: 0 = nicht aktiv / 1 = aktiv |
| STAT_NORMIERLAUF_FEHLER | - | - | + | 0-n | high | unsigned char | - | TAB_ARSG_STAT_INIT_ERROR | - | - | - | Status Normierlauf beendet |

### RES_0XD221_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_BUZZER | 0/1 | high | signed int | - | - | - | - | - | Akustikgeber (Buzzer) codiert und vorhanden: 0 = nicht vorhanden 1 = vorhanden |

### RES_0XD223_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRE_HKL | 0/1 | high | unsigned char | - | - | - | - | - | Status der Funktionssperre für HKL: 0 = Sperre nicht aktiv 1 = Sperre aktiv |
| STAT_SPERRE_LARA | 0/1 | high | unsigned char | - | - | - | - | - | Status der Funktionssperre für LARA: 0 = Sperre nicht aktiv 1 = Sperre aktiv |
| STAT_SPERRE_EHKU | 0/1 | high | unsigned char | - | - | - | - | - | Status der Funktionssperre für elektrische Heckklappe unten: 0 = Sperre nicht aktiv 1 = Sperre aktiv |

### RES_0XD229_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_LARA_VERFAHREN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der LARA-Fahrzyklen (Rollo ist eingehängt) |
| STAT_ANZAHL_LARA_NICHT_VERFAHREN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Zyklen in denen LARA nicht verfahren wurde (Rollo war nicht eingehängt) |
| STAT_ANZAHL_ROLLO_EINHAENGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einhängvorgänge für Rollo |
| STAT_ANZAHL_ROLLO_AUSHAENGEN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aushängvorgänge für Rollo |
| STAT_ANZAHL_LARA_BLOCKIERUNG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle für Laderaumabdeckung (LARA) |
| STAT_RESERVE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |

### RES_0XD22A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich <= -21°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von -20°C bis -10°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von -9°C bis +9°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von +10°C bis +28°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich >=  +29°C |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 0-19% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 20-39% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 40-59% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 60-79% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 80-99% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 0-19% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 20-39% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 40-59% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 60-79% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 80-99% |
| STAT_ANZAHL_MMI_VERSTELLUNG_POS_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Höhenverstellungen auf MMI Position 1 |
| STAT_ANZAHL_MMI_VERSTELLUNG_POS_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Höhenverstellungen auf MMI Position 2 |
| STAT_ANZAHL_MMI_VERSTELLUNG_POS_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Höhenverstellungen auf MMI Position 3 |
| STAT_ANZAHL_MMI_VERSTELLUNG_POS_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Höhenverstellungen auf MMI Position 4 |
| STAT_ANZAHL_MMI_VERSTELLUNG_POS_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Höhenverstellungen auf MMI Position 5 |
| STAT_ANZAHL_BETAETIGUNG_WEITERFAHREN_HKL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen für Weiterfahrfunktion HKL |
| STAT_ANZAHL_POSITIONSVERLUST_HKL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Positionsverluste wg. Abschaltung Klemme 30F bei geöffneter Heckklappe |
| STAT_ANZAHL_CCMELDUNG_HKL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der versendeten HKL Check-Control-Meldungen |
| STAT_ANZAHL_OEFFNEN_HECKKLAPPE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Öffnungsvorgänge für die Heckklappe (Statuswechsel beim Heckklappenschloss) |
| STAT_ANZAHL_OEFFNEN_HECKSCHEIBE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Öffnungsvorgänge für die Heckscheibe (beim Touring) |
| STAT_ANZAHL_ABBRUCH_BEWEGUNG_HKL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Bewegungsabbrüche der oberen HKL aufgrund Kollisionsvermeidung (Einfahren in den Kollisionsbereich) |
| STAT_ANZAHL_VERHINDERTE_BEWEGUNG_HKL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der verhinderten Bewegungen der oberen HKL aufgrund Kollisionsvermeidung (Einfahren in den Kollisionsbereich) |
| STAT_RESERVE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |

### RES_0XD22B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LETZTE_BEWEGUNG | 0/1 | high | unsigned char | - | - | - | - | - | Status letzte Bewegung HKL: 0=Bewegung komplett durchgeführt, 1=Bewegung abgebrochen |
| STAT_ABBRUCHGRUND_1 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | letzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_2 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | vorletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_3 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | drittletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_4 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | viertletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_5 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | fünftletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |

### RES_0XD22C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_EINTRAG_1 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status letzte Initialisierung HKL (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_2 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status vorletzte Initialisierung HKL (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_3 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status drittletzte Initialisierung HKL (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_4 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status viertletzte Initialisierung HKL (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_5 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status fünftletzte Initialisierung HKL (siehe TAB_HKL_ABBRUCH_INIT) |

### RES_0XD22F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALLSENSOR_OBEN | 0-n | high | unsigned char | - | TAB_ASP_HALLSENSOREN | - | - | - | Hallsensor für obere Position (ausgefahren) Siehe Tabelle TAB_ASP_HALLSENSOREN |
| STAT_HALLSENSOR_MOTOR | 0-n | high | unsigned char | - | TAB_ASP_HALLSENSOREN | - | - | - | Hallsensor für Motordrehung. Siehe Tabelle TAB_ASP_HALLSENSOREN |
| STAT_MICROSCHALTER_UNTEN | 0/1 | high | unsigned char | - | - | - | - | - | Microschalter unten (eingefahren) 0x00 = nicht betätigt 0x01 = betätigt |

### RES_0XD230_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_POS_M_LINKS_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position links (Inkremente vom Hallsensor) |
| STAT_IST_POS_M_RECHTS_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position rechts (Inkremente vom Hallsensor) |
| STAT_OEFF_WINKEL_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Oeffnungswinkel der Heckklappe (in Prozent des max. Winkels) |
| STAT_MAX_POS_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Liefert die maximale obere Position in Inkrementen (angelernt oder über Codierparameter vorgegeben) |

### RES_0XD236_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNG_MOTOR_HKL_LINKS | 0-n | - | unsigned char | - | TAB_LARA_BEWEGUNG | - | - | - | Bewegungsrichtung links, siehe Tabelle: TAB_LARA_BEWEGUNG |
| STAT_BEWEGUNG_MOTOR_HKL_RECHTS | 0-n | - | unsigned char | - | TAB_LARA_BEWEGUNG | - | - | - | Bewegungsrichtung rechts, siehe Tabelle: TAB_LARA_BEWEGUNG |
| STAT_MOTORSTROM_HKL_LINKS_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert des linken Motorstroms in Ampere |
| STAT_MOTORSTROM_HKL_RECHTS_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert des rechten Motorstroms in Ampere |
| STAT_PWM_HKL_LINKS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert für Antrieb links in %, Wert 255 = ungültig oder Antrieb nicht verbaut |
| STAT_PWM_HKL_RECHTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert für Antrieb rechts in %, Wert 255 = ungültig oder Antrieb nicht verbaut |

### RES_0XD23E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_ASP | 0/1 | high | unsigned char | - | - | - | - | - | Taster für Spoiler: 0x00 = nicht gedrückt 0x01 = gedrückt |

### RES_0XD24D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_WEITERFAHRT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taste für Weiterfahrt Heckklappe: 0 = nicht gedrückt 1 = gedrückt |

### RES_0XD24F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASP_BEWEGUNG | 0-n | high | unsigned char | - | TAB_ASP_BEWEGUNG | - | - | - | Bewegung des aktiver Heckspoiler: Siehe Tabelle TAB_ASP_BEWEGUNG |
| STAT_ASP_POSITION | 0-n | high | unsigned char | - | TAB_ASP_POSITION | - | - | - | Position des Heckspoilers: Siehe Tabelle TAB_ASP_POSITION |
| STAT_ASP_MODUS | 0-n | high | unsigned char | - | TAB_ASP_MODUS | - | - | - | Modus von Heckspoiler: Siehe Tabelle TAB_ASP_MODUS |
| STAT_ASP_FEHLER | 0/1 | high | unsigned char | - | - | - | - | - | Fehler beim aktiven Heckspoiler: 0 = keine Fehler vorhanden 1 = Fehler vorhanden |

### RES_0XD301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LARA_POSITION_NR | 0-n | - | unsigned char | - | TAB_LARA_POSITION_G | - | - | - | Position der Laderaumabdeckung (siehe TAB_LARA_POSITION_G) |
| STAT_LARA_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verfahrweg LARA in Prozent 0% = unterer Anschlag 100% = oberer Anschlag |

### RES_0XD302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LARA_ROLLO_INIT | 0-n | - | unsigned char | - | TAB_LARA_INIT | - | - | - | Status Initialisierung der Laderaumabdeckung (siehe TAB_LARA_INIT) |

### RES_0XD30D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LARA_REV_ZAEHLER_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Zähler für Reversierung LARA |

### RES_0XD313_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LETZTE_BEWEGUNG | 0/1 | high | unsigned char | - | - | - | - | - | Status letzte Bewegung LARA: 0=Bewegung komplett durchgeführt, 1=Bewegung abgebrochen |
| STAT_ABBRUCHGRUND_1 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_BEW | - | - | - | letzter Abbruchgrund (siehe TAB_LARA_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_2 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_BEW | - | - | - | vorletzter Abbruchgrund (siehe TAB_LARA_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_3 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_BEW | - | - | - | drittletzter Abbruchgrund (siehe TAB_LARA_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_4 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_BEW | - | - | - | viertletzter Abbruchgrund (siehe TAB_LARA_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_5 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_BEW | - | - | - | fünftletzter Abbruchgrund (siehe TAB_LARA_ABBRUCH_BEW) |

### RES_0XD316_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_EINTRAG_1 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_INIT | - | - | - | Status letzte Initialisierung LARA (siehe TAB_LARA_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_2 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_INIT | - | - | - | Status vorletzte Initialisierung LARA (siehe TAB_LARA_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_3 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_INIT | - | - | - | Status drittletzte Initialisierung LARA (siehe TAB_LARA_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_4 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_INIT | - | - | - | Status viertletzte Initialisierung LARA (siehe TAB_LARA_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_5 | 0-n | high | unsigned char | - | TAB_LARA_ABBRUCH_INIT | - | - | - | Status fünftletzte Initialisierung LARA (siehe TAB_LARA_ABBRUCH_INIT) |

### RES_0XD31A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNG_ANTRIEB_1_LARA | 0-n | - | unsigned char | - | TAB_LARA_BEWEGUNG | - | - | - | Bewegungsrichtung Antrieb 1, siehe Tabelle: TAB_LARA_BEWEGUNG |
| STAT_BEWEGUNG_ANTRIEB_2_LARA | 0-n | - | unsigned char | - | TAB_LARA_BEWEGUNG | - | - | - | Bewegungsrichtung Antrieb 2, siehe Tabelle: TAB_LARA_BEWEGUNG |
| STAT_MOTORSTROM_LARA_ANTRIEB_1_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert des Motorstroms Antrieb 1 in Ampere |
| STAT_MOTORSTROM_LARA_ANTRIEB_2_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert des Motorstroms Antrieb 2 in Ampere |
| STAT_PWM_LARA_ANTRIEB_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert für Antrieb 1 in %, Wert 255 = ungültig oder Antrieb nicht verbaut |
| STAT_PWM_LARA_ANTRIEB_2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert für Antrieb 2 in %, Wert 255 = ungültig oder Antrieb nicht verbaut |

### RES_0XD31C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | SW Hauptversion |
| STAT_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | SW Unterversion |
| STAT_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | SW Patchversion |
| STAT_VERSION_DATE_YEAR_HI | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (higher bit) |
| STAT_VERSION_DATE_YEAR_LO | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (lower bit) |
| STAT_VERSION_DATE_MONTH | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Monat |
| STAT_VERSION_DATE_DAY | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Tag |

### RES_0XD31D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | SW Hauptversion |
| STAT_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | SW Unterversion |
| STAT_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | SW Patchversion |
| STAT_VERSION_DATE_YEAR_HI | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (higher bit) |
| STAT_VERSION_DATE_YEAR_LO | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (lower bit) |
| STAT_VERSION_DATE_MONTH | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Monat |
| STAT_VERSION_DATE_DAY | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Tag |

### RES_0XD31E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | SW Hauptversion |
| STAT_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | SW Unterversion |
| STAT_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | SW Patchversion |
| STAT_VERSION_DATE_YEAR_HI | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (higher bit) |
| STAT_VERSION_DATE_YEAR_LO | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (lower bit) |
| STAT_VERSION_DATE_MONTH | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Monat |
| STAT_VERSION_DATE_DAY | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Tag |

### RES_0XD32C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_ROLLO_BEWEGUNG | - | - | - | Status der Ansteuerung des Sonnenrollos (siehe TAB_ROLLO_BEWEGUNG) |
| STAT_ROLLO_POSITION | 0-n | high | unsigned char | - | TAB_ROLLO_POSITION | - | - | - | Position des Sonnenrollos (siehe TAB_ROLLO_POSITION) |

### RES_0XD339_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELFE_TASTER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster links: 0 = nicht betätigt / 1 = betätigt |
| STAT_ELFE_TASTER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster rechts: 0 = nicht betätigt / 1 = betätigt |

### RES_0XD33F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | SW Hauptversion |
| STAT_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | SW Unterversion |
| STAT_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | SW Patchversion |
| STAT_VERSION_DATE_YEAR_HI | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (higher bit) |
| STAT_VERSION_DATE_YEAR_LO | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (lower bit) |
| STAT_VERSION_DATE_MONTH | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Monat |
| STAT_VERSION_DATE_DAY | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Tag |

### RES_0XD34E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_AUSFAHREN_TEMPBEREICH_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausfahrvorgänge im Temperaturbereich unter -10°C |
| STAT_ANZAHL_AUSFAHREN_TEMPBEREICH_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausfahrvorgänge im Temperaturbereich von -9°C bis 0°C |
| STAT_ANZAHL_AUSFAHREN_TEMPBEREICH_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausfahrvorgänge im Temperaturbereich von 1°C bis 5°C |
| STAT_ANZAHL_AUSFAHREN_TEMPBEREICH_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausfahrvorgänge im Temperaturbereich von 6°C bis 15°C |
| STAT_ANZAHL_AUSFAHREN_TEMPBEREICH_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausfahrvorgänge im Temperaturbereich über 16°C |
| STAT_ANZAHL_EINFAHREN_TEMPBEREICH_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einfahrvorgänge im Temperaturbereich unter -10°C |
| STAT_ANZAHL_EINFAHREN_TEMPBEREICH_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einfahrvorgänge im Temperaturbereich von -9°C bis 0°C |
| STAT_ANZAHL_EINFAHREN_TEMPBEREICH_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einfahrvorgänge im Temperaturbereich von 1°C bis 5°C |
| STAT_ANZAHL_EINFAHREN_TEMPBEREICH_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einfahrvorgänge im Temperaturbereich von 6°C bis 15°C |
| STAT_ANZAHL_EINFAHREN_TEMPBEREICH_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Einfahrvorgänge im Temperaturbereich über 16°C |
| STAT_ANZAHL_BETAETIGUNG_TASTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen für Taster AHS |
| STAT_RESERVE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |

### RES_0XD377_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORGABE | 0-n | high | unsigned char | - | TAB_HKL_MAX_POS_STAT | - | - | - | Aktuell aktivierte Vorgabe für die Bestimmung der oberen HKL-Position |
| STAT_HKL_CAF_MAX_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuell codierter Wert für die max. Position (bei Wert 0 ist keine Umstellung auf Vorgabe der max. Position über CAF-Wert möglich) |
| STAT_RESERVE_1 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve für eventuelle Änderungen in der Zukunft |
| STAT_RESERVE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve für eventuelle Änderungen in der Zukunft |

### RES_0XD3E5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POS_ABDECKPLANE_WERT | Inkremente | high | unsigned char | - | - | 12.0 | 1.0 | -11.0 | Position der Abdeckrollokassette bzw. Plane (Inkremente des Hallsensors vom Aktuator Abdeckrollo) |
| STAT_ABDECKROLLO_KASSETTE | 0-n | high | unsigned char | - | TAB_ARSG_STAT_ABDECKROLLOKASSETTE | - | - | - | Status der Abdeckrollokassette |
| STAT_ABDECKROLLO_STAUFACHKLAPPE | 0-n | high | unsigned char | - | TAB_ARSG_STAT_STAUFACHKLAPPE | - | - | - | Status der Staufachklappe |
| STAT_NORMIERUNG | 0-n | high | unsigned char | - | TAB_ARSG_STATUS_INIT | - | - | - | Status Normierung (Abdeckrollo, Abdeckrollokassette und Staufachklappe) |
| STAT_FEHLER_FUNKTION | 0-n | high | unsigned char | - | TAB_ARSG_STAT_ERROR_FUNCTION | - | - | - | Status der Funktion Abdeckrollo |

### RES_0XD3EE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTERBLOCK_GPR_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand Schalterblock im Gepäckraum (LIN): 0 = nicht verbaut / 1 = im Fahrzeug verbaut |
| STAT_EXT_SCHALTER_3SR_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand externe Schalter für 3. Sitzreihe: 0 = nicht verbaut / 1 = im Fahrzeug verbaut |
| STAT_EXT_TASTER_SHD_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Verbauzustand externer Taster für Schiebehimmel: 0 = nicht verbaut / 1 = im Fahrzeug verbaut |
| STAT_TASTER_ABDECKROLLO_KASSETTE_AUF_AB | 0-n | high | unsigned char | - | TAB_HKFM_TASTER_AR | - | - | - | Status Taster für Abdeckrollo-Kassette (Bewegung nach oben/unten) |
| STAT_TASTER_ABDECKROLLO_VOR_ZURUECK | 0-n | high | unsigned char | - | TAB_HKFM_TASTER_AR | - | - | - | Status Taster für Abdeckrollo (Bewegung vor/zurück) |
| STAT_TASTER_SV_MAX_KOMFORT | 0-n | high | unsigned char | - | TAB_HKFM_TASTER_SV_MAX | - | - | - | Status Taster für Sitzverstellung (max. Komfort) |
| STAT_TASTER_SV_MAX_PLATZ | 0-n | high | unsigned char | - | TAB_HKFM_TASTER_SV_MAX | - | - | - | Status Taster für Sitzverstellung (max. Platz) |
| STAT_SCHALTER_LEHNE_2SR_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Status Schalter für Lehnenneigung - 2. Sitzreihe Lehne links |
| STAT_SCHALTER_LEHNE_2SR_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Status Schalter für Lehnenneigung - 2. Sitzreihe Lehne rechts |
| STAT_SCHALTER_LEHNE_3SR_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Status Schalter für Lehnenneigung - 3. Sitzreihe Lehne links |
| STAT_SCHALTER_LEHNE_3SR_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Status Schalter für Lehnenneigung - 3. Sitzreihe Lehne rechts |
| STAT_SB_EXT_L_SCHALTER_LEHNE_3SR_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_EXT | - | - | - | Externer Schalterblock C-Säule links Taster Lehnenfernentriegelung 3. Sitzreihe Lehne links |
| STAT_SB_EXT_L_SCHALTER_LEHNE_3SR_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_EXT | - | - | - | Externer Schalterblock C-Säule rechts Taster Lehnenfernentriegelung 3. Sitzreihe Lehne rechts |
| STAT_SB_EXT_R_SCHALTER_LEHNE_3SR_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_EXT | - | - | - | Externer Schalterblock C-Säule links Taster Lehnenfernentriegelung 3. Sitzreihe Lehne rechts |
| STAT_SB_EXT_R_SCHALTER_LEHNE_3SR_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_EXT | - | - | - | Externer Schalterblock C-Säule rechts Taster Lehnenfernentriegelung 3. Sitzreihe Lehne links |
| STAT_SB_EXT_TASTER_SCHIEBEHIMMEL | 0-n | high | unsigned char | - | TAB_HKFM_TASTER_EXT_SHD | - | - | - | Status externer Taster für die Schiebehimmel-Verstellung |
| STAT_SCHALTER_RESERVE_1 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |
| STAT_SCHALTER_RESERVE_2 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |
| STAT_SCHALTER_RESERVE_3 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |
| STAT_SCHALTER_RESERVE_4 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |
| STAT_SCHALTER_RESERVE_5 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |
| STAT_SCHALTER_RESERVE_6 | 0-n | high | unsigned char | - | TAB_HKFM_SCHALTER_LEHNE_INT | - | - | - | Reserveergebnis |

### RES_0XD3F7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORRASTE_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Status Vorrastkontakt links |
| STAT_HAUPTRASTE_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Status Hauptrastkontakt links |
| STAT_VORRASTE_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Status Vorrastkontakt rechts |
| STAT_HAUPTRASTE_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Status Hauptrastkontakt rechts |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Reserve-Ergebnis |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_SCHLOSS | - | - | - | Reserve-Ergebnis |

### RES_0XD3F8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_E_SCA_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeugkonfiguration eSCA (LIN): 0 = im Fahrzeug nicht vorhanden / 1 = im Fahrzeug vorhanden |
| STAT_SCA_ANTRIEB_LINKS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_ANTRIEB | - | - | - | Status eSCA-Antrieb links |
| STAT_SCA_ANTRIEB_RECHTS | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_ANTRIEB | - | - | - | Status eSCA-Antrieb rechts |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_ANTRIEB | - | - | - | Reserve-Ergebnis |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_HKFM_STAT_SCA_ANTRIEB | - | - | - | Reserve-Ergebnis |

### RES_0XD692_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_NORMIERUNGEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl durchgeführter Normierungen |
| STAT_BLOCK_ROLLO_EINGEFAHREN_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Block Rollo eingefahren |
| STAT_BLOCK_ROLLO_AUSGEFAHREN_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Block Rollo ausgefahren |
| STAT_BLOCK_STAUFACHKLAPPE_ZU_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Block Staufachklappe geschlossen |
| STAT_BLOCK_STAUFACHKLAPPE_AUF_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Block Staufachklappe offen |
| STAT_SOFTSTOPP_ROLLO_EINGEFAHREN_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Softstopp Rollo einfahren |
| STAT_SOFTSTOPP_ROLLO_AUSGEFAHREN_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Softstopp Rollo ausfahren |
| STAT_SOFTSTOPP_STAUFACHKLAPPE_ZU_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Softstopp Staufachklappe schließen |
| STAT_SOFTSTOPP_STAUFACHKLAPPE_AUF_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der gezählten Inkremente bei Softstopp Staufachklappe öffnen |
| STAT_BETRIEBSSTUNDEN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden in Minuten |

### RES_0XD84A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EHKU_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration elektrische Heckklappe unten: 0 = eHKU nicht vorhanden / 1 = eHKU vorhanden |
| STAT_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | Reserveergebnis |

### RES_0XD84B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LETZTE_BEWEGUNG | 0/1 | high | unsigned char | - | - | - | - | - | Status letzte Bewegung eHKU: 0=Bewegung komplett durchgeführt, 1=Bewegung abgebrochen |
| STAT_ABBRUCHGRUND_1 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | letzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_2 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | vorletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_3 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | drittletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_4 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | viertletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |
| STAT_ABBRUCHGRUND_5 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_BEW | - | - | - | fünftletzter Abbruchgrund (siehe TAB_HKL_ABBRUCH_BEW) |

### RES_0XD84C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_EINTRAG_1 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status letzte Initialisierung (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_2 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status vorletzte Initialisierung (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_3 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status drittletzte Initialisierung (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_4 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status viertletzte Initialisierung (siehe TAB_HKL_ABBRUCH_INIT) |
| STAT_INIT_EINTRAG_5 | 0-n | high | unsigned char | - | TAB_HKL_ABBRUCH_INIT | - | - | - | Status fünftletzte Initialisierung (siehe TAB_HKL_ABBRUCH_INIT) |

### RES_0XD84D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | SW Hauptversion |
| STAT_VERSION_MINOR | 0-n | high | unsigned char | - | - | - | - | - | SW Unterversion |
| STAT_VERSION_PATCH | 0-n | high | unsigned char | - | - | - | - | - | SW Patchversion |
| STAT_VERSION_DATE_YEAR_HI | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (higher bit) |
| STAT_VERSION_DATE_YEAR_LO | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Jahr (lower bit) |
| STAT_VERSION_DATE_MONTH | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Monat |
| STAT_VERSION_DATE_DAY | 0-n | high | unsigned char | - | - | - | - | - | SW Releasedatum: Tag |

### RES_0XD850_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EHKU_INIT | 0-n | - | unsigned char | - | TAB_EHKU_INIT | - | - | - | Status der Initialisierung (siehe TAB) |

### RES_0XD851_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_POS_EHKU_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ist-Position (Inkremente vom Hallsensor) |
| STAT_OEFF_WINKEL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Oeffnungswinkel der unteren Heckklappe (in Prozent des max. Winkels) |
| STAT_MAX_POS_WERT | Inkremente | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Liefert die maximale obere Position in Inkrementen (angelernt oder über Codierparameter vorgegeben) |
| STAT_RESERVE_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserveergebnis |

### RES_0XD852_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEWEGUNG_ANTRIEB_EHKU | 0-n | - | unsigned char | - | TAB_LARA_BEWEGUNG | - | - | - | Bewegungsrichtung (siehe TAB) |
| STAT_MOTORSTROM_ANTRIEB_WERT | A | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Wert des Motorstroms |
| STAT_PWM_ANTRIEB_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert für den Antrieb (Wert 255 = ungültig oder Antrieb nicht verbaut) |

### RES_0XD853_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EHKU_TASTER | 0/1 | high | unsigned char | - | - | - | - | - | 0 = nicht betätigt / 1 = betätigt |
| STAT_RESERVE | 0/1 | high | unsigned char | - | - | - | - | - | Reserveergebnis |

### RES_0XDAE4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich <= -21°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von -20°C bis -10°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von -9°C bis +9°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich von +10°C bis +28°C |
| STAT_ANZAHL_BETAETIGUNG_TEMPBEREICH_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Betätigungen im Temperaturbereich >= +29°C |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 0-19% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 20-39% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 40-59% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 60-79% |
| STAT_ANZAHL_BLOCK_BEI_OEFFNEN_SEGMENT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Öffnen im Segment 80-99% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 0-19% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 20-39% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 40-59% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 60-79% |
| STAT_ANZAHL_BLOCK_BEI_SCHLIESSEN_SEGMENT_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Blockierfälle während Schliessen im Segment 80-99% |
| STAT_ANZAHL_CCMELDUNG_EHKU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der versendeten eHKU Check-Control-Meldungen |
| STAT_ANZAHL_OEFFNEN_EHKU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Öffnungsvorgänge für die untere Heckklappe (Statuswechsel bei der eSCA) |
| STAT_ANZAHL_ABBRUCH_BEWEGUNG_EHKU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Bewegungsabbrüche der uHKL aufgrund Kollisionsvermeidung (Einfahren in den Kollisionsbereich) |
| STAT_ANZAHL_VERHINDERTE_BEWEGUNG_EHKU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der verhinderten Bewegungen der uHKL aufgrund Kollisionsvermeidung (Einfahren in den Kollisionsbereich) |
| STAT_RESERVE_0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |
| STAT_RESERVE_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Erweiterungen |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _COD_ARSG_PARAM | 0x3080 | - | Codierblock ARSG_PARAM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x3080_D | - |
| _DBG_IDENTIFICATION | 0x4000 | - | Identifikationsdaten für UltraDbg | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _IO_HKL_M1 | 0x4100 | - | Ansteuerung Heckdeckel, Motor 1 | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4100_D | RES_0x4100_D |
| _IO_HKL_M2 | 0x4101 | - | Ansteuerung Heckdeckel, Motor 2 | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4101_D | RES_0x4101_D |
| _IO_DSL_M | 0x4102 | - | Ansteuerung Laderaumabdeckung, Motor | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4102_D | RES_0x4102_D |
| _IO_AHS_M | 0x4104 | - | Ansteuerung Spoiler, Motor | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4104_D | RES_0x4104_D |
| _CONTROLLER_INPUTS | 0x4200 | - | Alle am Controller anliegenden analogen und digitalen Eingänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4200_D |
| _CONTROLLER_INPUTS_MAX | 0x4201 | - | Alle am Controller anliegenden analogen und digitalen Eingänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4201_D |
| ABDECKROLLO_NORMIERUNG | 0xA171 | - | Komplette Normierung des Abdeckrollos | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA171_R |
| HKL_BUZZER | 0xD221 | - | Akustikgeber (Buzzer) für Heckklappenlift | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD221_D | RES_0xD221_D |
| SPANNUNG_LASTKREIS | 0xD222 | STAT_SPANNUNG_LASTKREIS_WERT | Spannungswert am Steuergerät (Lastkreis, Klemme 30) | V | - | High | signed int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| SPERRE_FUNKTION | 0xD223 | - | Auslesen der Funktionssperre für HKL und LARA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD223_D |
| HKL_CONFIG | 0xD224 | STAT_HKL_CONFIG | Konfiguration des Heckklappenliftes (siehe TAB_HKL_CONFIG) | 0-n | - | High | unsigned char | TAB_HKL_CONFIG | - | - | - | - | 22 | - | - |
| HKL_ANTRIEBE | 0xD225 | - | Ansteuerung HKL-Antriebe einzeln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD225_D | - |
| LARA_FASTA_DATEN | 0xD229 | - | FASTA-Daten für Laderaumabdeckung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD229_D |
| HKL_FASTA_DATEN | 0xD22A | - | FASTA-Daten für Heckklappenlift | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD22A_D |
| HKL_ABBRUCH_BEWEGUNG | 0xD22B | - | Abbruchgründe für HKL-Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD22B_D |
| HKL_ABBRUCH_INIT | 0xD22C | - | Abbruchgründe für HKL-Initialisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD22C_D |
| ASP_SENSOREN | 0xD22F | - | Sensoren von aktiven Heckspoiler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD22F_D |
| STATUS_IST_POSITION | 0xD230 | - | HKL-Ist-Position  (Hallinkremente) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD230_D |
| ANLERNVORGANG_HKL_INIT | 0xD232 | STAT_ANLERNVORGANG_HKL_INIT | Status der Initialisierung (siehe TAB_HKFM_INIT)  | 0-n | - | - | signed int | TAB_HKFM_INIT | - | - | - | - | 22 | - | - |
| OEFFNUNGSWINKEL_MMI_HKL_WERT | 0xD233 | STAT_OEFFNUNGSWINKEL_MMI_HKL_WERT | Öffnungswinkel in % im Steuergerät gespeichert | % | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HKKU_GESCHLOSSEN | 0xD235 | STAT_HKKU_GESCHLOSSEN | Status Heckklappe unten (bei zweiteiliger Klappe): 0 = untere Heckklappe nicht geschlossen / 1 = untere Heckklappe geschlossen | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| BEWEGUNG_MOTOR_HKL | 0xD236 | - | Liefert Status der HKL-Motoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD236_D |
| HKL_CODIERUNG_SPERRE | 0xD23A | STAT_HKL_CODIERSPERRE_EIN | Sperre HKL über Codierung: 0 = HKL-Funktion nicht gesperrt 1 = HKL-Funktion gesperrt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LARA_CODIERUNG_SPERRE | 0xD23B | STAT_LARA_CODIERSPERRE_EIN | Sperre LARA über Codierung: 0 = LARA-Funktion nicht gesperrt 1 = LARA-Funktion gesperrt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZWISCHENPOSITION_SPOILER | 0xD23C | - | Aktiven Heckspoiler in eine Zwischenposition steuern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD23C_D | - |
| LED_SPOILERMODUS | 0xD23D | - | LED für Spoilermodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD23D_D | - |
| TASTER_ASP_MODUS | 0xD23E | - | Taster APS-Modus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD23E_D | RES_0xD23E_D |
| STEUERN_KONTAKT_HKL | 0xD23F | - | Simuliert die Signale der Kontakte für den Heckklappenlift. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD23F_D | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_AUSSENTEMPERATUR_WERT | 0xD241 | STAT_BUS_IN_AUSSENTEMPERATUR_WERT | Signal Aussentemperatur über BUS | °C | - | Low | signed int | - | 1.0 | 256.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHK_EIN | 0xD242 | STAT_BUS_IN_TOEHK_EIN | Signal Taster Heckklappe aussen über BUS, 0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKK_EIN | 0xD243 | STAT_BUS_IN_TOEHKK_EIN | Signal Taster Heckklappe innen über BUS: 0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKI_EIN | 0xD244 | STAT_BUS_IN_TOEHKI_EIN | Signal Taster Innenraum für Heckklappe über BUS,  0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_HKK_GESCHLOSSEN | 0xD245 | STAT_BUS_IN_HKK_GESCHLOSSEN | Ausgabe des Status des Heckklappenkontakt: 0 = offen, 1 = geschlossen | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TOEHKCL_EIN | 0xD246 | STAT_BUS_IN_TOEHKCL_EIN | Signal Taster Centerlock für Heckklappe über BUS,  0= Taster nicht gedrückt, 1= Taster gedrückt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_TASTEN_HKL | 0xD247 | - | Simuliert die Signale der Tasten für den Heckklappenlift. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD247_D | - |
| STEUERN_HECKKLAPPENANTRIEB | 0xD248 | - | Ansteuerung der Heckklappe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD248_D | - |
| SET_ANLIEFERUNGSZUSTAND_HKL | 0xD24B | - | Setzen des Anlieferungs-Zustandes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD24B_D | - |
| HKL_VORHANDEN | 0xD24C | STAT_VORHANDEN_HKL | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_HKL_WEITERFAHRT | 0xD24D | - | Taste für Weiterfahrt der Öffnung von  Heckklappe bei F07 in Richtung offen. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD24D_D | RES_0xD24D_D |
| HECKSPOILER_VORHANDEN | 0xD24E | STAT_VORHANDEN_HECKSPOILER | Status aktiver Heckspoiler vorhanden (0 = nicht vorhanden; 1 = vorhanden) | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| POSITION_AKTIVER_HECKSPOILER | 0xD24F | - | Position aktiver Heckspoiler | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD24F_D | RES_0xD24F_D |
| BUS_IN_HSK_EIN | 0xD300 | STAT_BUS_IN_HSK_EIN | 0= Heckscheibe offen (Nachricht über Bus);  1= Heckscheibe geschlossen (Nachricht über Bus) | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LARA_POSITION | 0xD301 | - | Liefert den Zustand der Laderaumabdeckung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD301_D |
| LARA_ROLLO_INIT | 0xD302 | - | Liefert den Zustand der Initialisierung des Rollos der Laderaumabdeckung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD302_D | RES_0xD302_D |
| LARA_VORHANDEN | 0xD303 | STAT_VORHANDEN_LARA | 0: nicht vorhanden 1: vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LARA_STEUERN_POSITION | 0xD30C | - | Steuert die Position der Laderaumabdeckung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD30C_D | - |
| LARA_REVERSIERUNG | 0xD30D | - | Zähler für die Reversierer der Laderaumabdeckung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD30D_D | RES_0xD30D_D |
| LARA_ANLIEFERZUSTAND | 0xD30E | - | Setzen des Anlieferzustandes | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD30E_D | - |
| LARA_REEDKONTAKT | 0xD30F | STAT_LARA_REEDKONTAKT_EIN | Reedkontakt: 0 = Offen = keine unterere Position oder Rollo nicht eingehängt 1 = Geschlossen = unterere Position und Rollo eingehängt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LARA_ABBRUCH_BEWEGUNG | 0xD313 | - | Abbruchgründe für LARA-Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD313_D |
| LARA_ABBRUCH_INIT | 0xD316 | - | Abbruchgründe für LARA-Initialisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD316_D |
| LARA_CONFIG | 0xD319 | STAT_LARA_CONFIG | Konfiguration der Laderaumabdeckung (siehe Tabelle TAB_LARA_CONFIG) | 0-n | - | High | unsigned char | TAB_LARA_CONFIG | - | - | - | - | 22 | - | - |
| LARA_ANTRIEBE | 0xD31A | - | Statusabfrage LARA-Antriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD31A_D |
| LARA_POS_PLAUSIBEL | 0xD31B | STAT_POSITION | Plausibilität der LARA-Position (siehe TAB_LARA_PLAUSIBEL) | 0-n | - | High | unsigned char | TAB_LARA_PLAUSIBEL | - | - | - | - | 22 | - | - |
| VERSION_BEDIENLOGIK_HKL | 0xD31C | - | Softwareversion der Bedienlogik für Heckklappenlift (HKL) im HKFM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD31C_D |
| VERSION_BEDIENLOGIK_LARA | 0xD31D | - | Softwareversion der Bedienlogik für Laderaumabdeckung (LARA) im HKFM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD31D_D |
| VERSION_BEDIENLOGIK_AHS | 0xD31E | - | Softwareversion der Bedienlogik für aktiven Heckspoiler (AHS) im HKFM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD31E_D |
| SONNENROLLO_CONFIG | 0xD323 | STAT_SONNENROLLO_CONFIG | Konfiguration des Sonnenrollos | 0-n | - | High | unsigned char | TAB_SONNENROLLO_CONFIG | - | - | - | - | 22 | - | - |
| SONNENROLLO | 0xD325 | - | Funktion Sonnenrollo im HKFM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD325_D | - |
| SONNENROLLO_ANTRIEB | 0xD326 | - | Antrieb Sonnenrollo | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD326_D | - |
| SONNENROLLO_POSITION | 0xD32C | - | Position Sonnenrollo im HKFM | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD32C_D |
| ELFE_VORHANDEN | 0xD337 | STAT_ELFE_VORHANDEN | Konfiguration elektrische Lehnenfernentriegelung: 0 = eLFE nicht vorhanden / 1 = eLFE vorhanden | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| ELFE_TASTER | 0xD339 | - | Taster für Lehnenfernentriegelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD339_D |
| ELFE_STEUERN_TASTER | 0xD33B | - | Steuern Taster Lehnenfernentriegelung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD33B_D | - |
| VERSION_BEDIENLOGIK_ELFE | 0xD33F | - | Version Bedienlogik Lehnenfernentriegelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD33F_D |
| AHS_FASTA_DATEN | 0xD34E | - | FASTA-Daten für aktiven Heckspoiler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD34E_D |
| HKL_VORGABE_MAX_POS | 0xD377 | - | Vorgabe für obere HKL-Position | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD377_D | RES_0xD377_D |
| ABDECKROLLO_VORHANDEN | 0xD3E4 | STAT_ARSG_VORHANDEN | Konfiguration Abdeckrollo-SG verbaut: 0 = ARSG nicht vorhanden / 1 = ARSG vorhanden | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| ABDECKROLLO | 0xD3E5 | - | Gesamtstatus Abdeckrollo (LIN) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3E5_D | RES_0xD3E5_D |
| ABDECKROLLO_PLANE | 0xD3E6 | - | Abdeckrollo-Plane | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E6_D | - |
| ABDECKROLLO_KASSETTE | 0xD3E7 | - | Abdeckrollo-Kassette | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E7_D | - |
| ABDECKROLLO_STAUFACHKLAPPE | 0xD3E8 | - | Abdeckrollo-Staufachklappe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E8_D | - |
| SCHALTERBLOCK_GEPAECKRAUM | 0xD3EE | - | Schalterblock im Gepäckraum (LIN) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3EE_D |
| ABDECKROLLO_SG_RESET | 0xD3F5 | - | Reset Abdeckrollo-SG | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3F5_D | - |
| SCA_SCHLOSSSIGNALE | 0xD3F7 | - | Schlosssignale der eSCA links/rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3F7_D |
| SCA_ANTRIEBE | 0xD3F8 | - | Antriebe eSCA (LIN) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3F8_D | RES_0xD3F8_D |
| ABDECKROLLO_SG_VERSORGUNG | 0xD691 | STAT_VERSORGUNGSSPANNUNG_WERT | Höhe der Versorgungsspannung von Abdeckrollo-SG | V | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| ABDECKROLLO_STATISTIKZAEHLER | 0xD692 | - | Statistikdaten Abdeckrollo-SG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD692_D |
| ABDECKROLLO_ANTRIEBE | 0xD6B3 | - | Antriebe für Abdeckrollo | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B3_D | - |
| ABDECKROLLO_PARAMETRIERUNG | 0xD6B4 | - | Abdeckrollo-SG (LIN) parametrieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B4_D | - |
| EHKU_VORHANDEN | 0xD84A | - | el. Heckklappe unten vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD84A_D |
| EHKU_ABBRUCH_BEWEGUNG | 0xD84B | - | Abbruchgründe für eHKU-Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD84B_D |
| EHKU_ABBRUCH_INIT | 0xD84C | - | Abbruchgründe für Initialisierung eHKU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD84C_D |
| VERSION_BEDIENLOGIK_EHKU | 0xD84D | - | Version Bedienlogik eHKU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD84D_D |
| EHKU_INITIALISIERUNG | 0xD850 | - | Initialisierung eHKU (Anlernvorgang) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD850_D | RES_0xD850_D |
| EHKU_POSITION | 0xD851 | - | Position elektrische Heckklappe unten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD851_D |
| EHKU_ANTRIEB | 0xD852 | - | Antrieb für el. Heckklappe unten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD852_D | RES_0xD852_D |
| EHKU_TASTER | 0xD853 | - | Taster für eHKU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD853_D |
| EHKU_FASTA_DATEN | 0xDAE4 | - | FASTA-Daten für untere Heckklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAE4_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_ARSG_ANST_KASSETTE

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | KASSETTE_NACH_OBEN |
| 0x02 | KASSETTE_NACH_UNTEN |

### TAB_ARSG_ANST_PLANE

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | PLANE_AUSFAHREN |
| 0x02 | PLANE_EINFAHREN |

### TAB_ARSG_ANST_STAUFACHKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | KLAPPE_OEFFNEN |
| 0x02 | KLAPPE_SCHLIESSEN |

### TAB_ARSG_CONTROL_ANTRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | ANTRIEB_STAUFACHKLAPPE |
| 0x01 | ANTRIEB_ABDECKROLLOKASSETTE |

### TAB_ARSG_CONTROL_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | NACH_OBEN |
| 0x02 | NACH_UNTEN |

### TAB_ARSG_STATUS_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Abdeckrollo ist nicht normiert |
| 0x01 | Abdeckrollo ist normiert |
| 0xFF | Wert ungültig |

### TAB_ARSG_STAT_ABDECKROLLOKASSETTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Abdeckrollokassette steht ganz oben, Plane eingefahren |
| 0x01 | Abdeckrollokassette bzw. Plane wird eingefahren |
| 0x02 | Abdeckrollokassette bzw. Plane wird ausgefahren |
| 0x03 | Abdeckrollokassette steht ganz unten (verstaut) |
| 0x04 | Abdeckrollokassette bzw. Plane steht |
| 0x05 | Fehler - Abdeckrollokassette bzw. Plane kann nicht verfahren werden (Blockiererkennung) |
| 0x06 | Abdeckrollokassette oben, Plane komplett eingefahren |
| 0x07 | Abdeckrollokassette oben, Plane wird eingefahren |
| 0x08 | Abdeckrollokassette oben, Plane wird ausgefahren |
| 0x09 | Abdeckrollokassette oben, Plane komplett ausgefahren |
| 0x0A | Abdeckrollokassette oben, Plane steht in Zwischenstellung |
| 0x0B | Fehler - Plane kann nicht verfahren werden |
| 0x0C | Position unbekannt |
| 0x0D | Status unbekannt |
| 0x0E | Fehler in der Funktion erkannt |
| 0x0F | Status unbekannt |
| 0xFF | Wert ungültig |

### TAB_ARSG_STAT_ERROR_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler vorhanden |
| 0xFF | Wert ungültig |

### TAB_ARSG_STAT_INIT_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | noch nicht durchgeführt oder nicht abgeschlossen |
| 0x01 | abgeschlossen ohne Fehler |
| 0x02 | abgebrochen wegen einem internen Fehler |
| 0x03 | abgebrochen wegen einem Fehler in den Antrieben |
| 0x04 | abgebrochen wegen Unterspannung/Überspannung |
| 0x05 | abgebrochen wegen Thermoschutz |
| 0x06 | abgebrochen durch Diagnosebefehl |
| 0x07 | abgebrochen durch Tasterbetätigung (Panikabbruch) |
| 0xFF | Wert ungültig |

### TAB_ARSG_STAT_STAUFACHKLAPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Staufachklappe komplett geöffnet |
| 0x01 | Staufachklappe wird verfahren |
| 0x02 | Staufachklappe komplett geschlossen |
| 0x03 | Fehler - Staufachklappe kann nicht verfahren werden |
| 0x04 | Position unbekannt |
| 0x05 | Status unbekannt |
| 0x06 | Fehler in der Funktion erkannt |
| 0x0F | Initialisierungslauf wird durchgeführt |
| 0xFF | Wert ungültig |

### TAB_ASP_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Faehrt nicht, Spoiler stopp |
| 0x01 | Faehrt aus, Spoiler ausfahren |
| 0x02 | Faehrt ein, Spoiler einfahren |
| 0xFF | ungültiger Status |

### TAB_ASP_HALLSENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | aktiv |
| 0x02 | Sensorsignal ungültig |
| 0xFF | Ungültig |

### TAB_ASP_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Automatikmodus |
| 0x01 | Manueller Modus |
| 0xFF | Ungültiger Wert |

### TAB_ASP_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgefahren |
| 0x01 | Zwischenposition |
| 0x02 | Eingefahren |
| 0x03 | Unbekannt |
| 0xFF | Ungültiger Wert |

### TAB_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |

### TAB_EHKU_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | STOPP |
| 0x01 | OEFFNEN |
| 0x02 | SCHLIESSEN |

### TAB_EHKU_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert oder Initialisierung ist nicht in Ordnung |
| 0x01 | Initialisierung ist in Ordnung |
| 0xFF | Wert ungültig |

### TAB_HKFM_CONTROL_SCA_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | SCA_ANZIEHEN |
| 0x02 | SCA_REVERSIEREN |

### TAB_HKFM_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert oder Initialisierung ist nicht in Ordnung |
| 0x01 | Initialisierung ist in Ordnung |
| 0xFFFF | Wert ungültig |

### TAB_HKFM_SCHALTER_LEHNE_EXT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Verstellung vor |
| 0x02 | Verstellung zurück |
| 0x04 | Fehler erkannt - Kurzschluss oder Unterbrechung |
| 0x05 | im Fahrzeug nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_HKFM_SCHALTER_LEHNE_INT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | Verstellung vor |
| 0x02 | Verstellung zurück |
| 0x05 | im Fahrzeug nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_HKFM_STAT_SCA_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 | SCA-Antrieb steht |
| 0x01 | SCA-Antrieb zieht an |
| 0x02 | SCA-Antrieb reversiert |
| 0xFF | Wert ungültig |

### TAB_HKFM_STAT_SCA_SCHLOSS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0xFF | Wert ungültig |

### TAB_HKFM_TASTER_AR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0x05 | im Fahrzeug nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_HKFM_TASTER_EXT_SHD

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0x04 | Fehler erkannt - Kurzschluss oder Unterbrechung |
| 0x05 | im Fahrzeug nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_HKFM_TASTER_SV_MAX

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | betätigt |
| 0x05 | im Fahrzeug nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_HKL_ABBRUCH_BEW

| WERT | TEXT |
| --- | --- |
| 0x00 | bisher kein Eintrag vorhanden |
| 0x01 | Reserve |
| 0x02 | Fehler beim HKL-Antrieb |
| 0x03 | Position der Heckklappe unbekannt oder unplausibel |
| 0x04 | Fehler beim Hallsensor im HKL-Antrieb |
| 0x05 | Blockierung erkannt |
| 0x06 | Reserve |
| 0x07 | Überspannung erkannt |
| 0x08 | Unterspannung erkannt |
| 0x09 | Reserve |
| 0x0A | Timeout für Bewegung |
| 0x0B | Reserve |
| 0x0C | Reserve |
| 0x0D | Reserve |
| 0x0E | Reserve |
| 0x0F | Reserve |
| 0xFF | ungültig |

### TAB_HKL_ABBRUCH_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | bisher kein Eintrag vorhanden |
| 0x01 | Initialisierung ohne Abbruch erfolgreich abgeschlossen |
| 0x02 | Reserve |
| 0x03 | Abbruch wegen Fehler beim HKL-Antrieb |
| 0x04 | Abbruch wegen ungültiger Position der Heckklappe |
| 0x05 | Abbruch wegen Fehler beim Hallsensor im HKL-Antrieb |
| 0x06 | Abbruch wegen Blockierung |
| 0x07 | Abbruch wegen Überspannung |
| 0x08 | Abbruch wegen Unterspannung |
| 0x09 | Reserve |
| 0x0A | Reserve |
| 0x0B | Reserve |
| 0x0C | Reserve |
| 0x0D | Reserve |
| 0x0E | Reserve |
| 0x0F | Abbruch wegen Timeout |
| 0xFF | ungültig |

### TAB_HKL_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 | beide HKL-Antriebe (links und rechts) |
| 0x01 | HKL-Antrieb links |
| 0x02 | HKL-Antrieb rechts |
| 0x03 | Antrieb Heckklappe unten |

### TAB_HKL_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | zwei Antriebe verbaut |
| 0x01 | nur Antrieb links verbaut |
| 0x02 | nur Antrieb rechts verbaut |
| 0x03 | Konfiguration unbekannt |
| 0xFF | ungültiger Wert |

### TAB_HKL_KONTAKTE

| WERT | TEXT |
| --- | --- |
| 0x01 | HKK |
| 0x02 | HKKU |

### TAB_HKL_MAX_POS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | INITIALIZATION_RUN |
| 0x01 | CODING_PARAMETER |

### TAB_HKL_MAX_POS_STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | max. obere Position wird bei der Initialisierung angelernt |
| 0x01 | max. obere Position wird durch CAF-Wert (Codierwert) vorgegeben |
| 0xFF | Wert ungültig |

### TAB_HKL_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop/Freilauf |
| 0x01 | Richtung öffnen |
| 0x02 | Richtung schließen |

### TAB_HKL_TASTER

| WERT | TEXT |
| --- | --- |
| 0x01 | TOEHK, Taster Heckklappe aussen |
| 0x02 | TOEHKK, Taster Heckklappe innen |
| 0x03 | TOEHKI, Innenraumtaster Heckklappe |
| 0x04 | TOEHKCL, Innenraumtaster Centerlock |

### TAB_LARA_ABBRUCH_BEW

| WERT | TEXT |
| --- | --- |
| 0x00 | bisher kein Eintrag vorhanden |
| 0x01 | Reserve |
| 0x02 | Fehler beim Antrieb |
| 0x03 | Position unbekannt oder unplausibel |
| 0x04 | Blockierung erkannt |
| 0x05 | Reserve |
| 0x06 | Überspannung erkannt |
| 0x07 | Unterspannung erkannt |
| 0x08 | Reserve |
| 0x09 | Timeout für Bewegung |
| 0x0A | Reserve |
| 0x0B | Reserve |
| 0x0C | Reserve |
| 0x0D | Reserve |
| 0x0E | Reserve |
| 0x0F | Temperatur |
| 0xFF | ungültig |

### TAB_LARA_ABBRUCH_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | bisher kein Eintrag vorhanden oder Initialisierung ohne Abbruch erfolgreich abgeschlossen |
| 0x01 | Abbruch wegen Fehler beim Antrieb |
| 0x02 | Abbruch wegen ungültiger Position |
| 0x03 | Reserve |
| 0x04 | Abbruch wegen Überspannung |
| 0x05 | Abbruch wegen Unterspannung |
| 0x06 | Timeout für Bewegung |
| 0x07 | Abbruch wegen Temperatur |
| 0x08 | Abbruch wegen falscher Kodierung für Plausibilisierung von Verfahrweg |
| 0x09 | Abbruch wegen inkorrekter Plausibilisierung |
| 0x0A | Reserve |
| 0x0B | Reserve |
| 0x0C | Reserve |
| 0x0D | Reserve |
| 0x0E | Reserve |
| 0x0F | Reserve |
| 0xFF | ungültig |

### TAB_LARA_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Bewegung |
| 0x01 | Oeffnen |
| 0x02 | Schliessen |
| 0x03 | nicht verbaut |
| 0xFF | ungültig |

### TAB_LARA_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | zwei Antriebe verbaut |
| 0x01 | nur Antrieb 1 verbaut |
| 0x02 | nur Antrieb 2 verbaut |
| 0x03 | Konfiguration unbekannt |
| 0xFF | ungültiger Wert |

### TAB_LARA_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert oder Initialisierung ist nicht in Ordnung |
| 0x01 | Initialisierung ist in Ordnung |
| 0xFF | Wert ungültig |

### TAB_LARA_PLAUSIBEL

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Initialisierung durchgeführt |
| 0x01 | Reserve |
| 0x02 | Reserve |
| 0x03 | Fehler Position |
| 0x04 | Kalibrierlauf über Diagnose gestartet |
| 0x05 | mehrmalige Blockierung an der gleichen Stelle |
| 0x06 | Plausibilitätsprüfung für Position nicht erfolgreich |
| 0x07 | Position der Laderaumabdeckung unbekannt wegen dem harten Reset |
| 0x08 | Reserve |
| 0x09 | automatischer Kalibrierlauf gestartet |
| 0xFF | ungültig |

### TAB_LARA_POSITION_G

| WERT | TEXT |
| --- | --- |
| 0x00 | Laderaumabdeckung unterer Anschlag |
| 0x01 | Laderaumabdeckung oberer Anschlag |
| 0x02 | Zwischenposition |
| 0x03 | Position unbekannt |
| 0xFF | Wert ungültig |

### TAB_MOTOR_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop |
| 0x01 | im Uhrzeigersinn |
| 0x02 | gegen den Uhrzeigersinn |
| 0x03 | Öffnen |
| 0x04 | Schließen |

### TAB_ROLLO_ANST_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stopp |
| 0x01 | Ansteuerung nach oben |
| 0x02 | Ansteuerung nach unten |

### TAB_ROLLO_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x01 | verfährt nach oben |
| 0x02 | verfährt nach unten |
| 0xFF | Wert ungültig |

### TAB_ROLLO_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sonnenrollo unten |
| 0x01 | Zwischenstellung |
| 0x02 | Sonnenrollo oben |
| 0x03 | Position unbekannt |
| 0x04 | Blockierung erkannt |
| 0xFF | Wert ungültig |

### TAB_SONNENROLLO_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Antrieb Sonnenrollo verbaut |
| 0x01 | Antrieb Sonnenrollo verbaut |
| 0x02 | Konfiguration unbekannt |
| 0xFF | Wert ungültig |

### TAB_0X4300

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0005 | 0x0004 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |
