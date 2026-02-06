# CDM02.prg

## General

|  |  |
| --- | --- |
| File | CDM02.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 92 |
| Origin | BMW EK-721 Katja_Guetlein |
| Revision | 1.005 |
| Author | EDAG-ENGINEERING-GMBH EK-521 Stadler |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Coach door module |  |  |
| ORIGIN | string | BMW EK-721 Katja_Guetlein |  |  |
| REVISION | string | 1.005 |  |  |
| AUTHOR | string | EDAG-ENGINEERING-GMBH EK-521 Stadler |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.87 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC != '-', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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
| 0x5E80 | Stromverteiler hinten | 1 |
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
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
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
| 0x002D | PSA Peugeot Citroën |
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
| 0x013A | ISSI – Integrated Silicon Solution Inc |
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

### ARG_0XA0E0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_KF_CONTROL | - | - | - | - | - | Bestimmt die durchzuführende Aktion |

### ARG_0XA0E1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURTAIN | + | - | 0-n | high | unsigned char | - | TAB_CDM_CURTAIN_CONT | - | - | - | - | - | Auswahl eines Vorhanges (wenn im SG eindeutig, dann 0x00; 0x00 für RR11/31, 0x01..0x03 nur Vorhalt) |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_CURTAIN_CONTROL | - | - | - | - | - | Steuerbefehl |

### ARG_0XA0E2_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURTAIN | + | - | 0-n | high | unsigned char | - | TAB_CDM_CURTAIN_STAT | - | - | - | - | - | Vorhang (für RR11/RR31 sind 0x00, 0x03 und 0x04 gültig) |

### ARG_0XA0E3_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_CID_CONTROL | - | - | - | - | - | Steuern der CID Klappe |

### ARG_0XA0E4_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_HATCH_PW_CONTROL | - | - | - | - | - | Steuern des Schnappers für den Handschuhkasten |

### ARG_0XA0E5_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOOR | + | - | 0-n | high | unsigned char | - | TAB_CDM_ZZH_DOOR | - | - | - | - | - | Auswahl der Tür für die Zuziehhilfe (für RR11/RR31 0x00 für Türen hinten) |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_ZZH_CONTROL | - | - | - | - | - | Steuerbefehl für die Zuziehhilfe |

### ARG_0XA0E6_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOOR | + | - | 0-n | high | unsigned char | - | TAB_CDM_ZZH_DOOR | - | - | - | - | - | Auswahl der Tür für die Zuziehhilfe (für RR11/RR31 0x00 für Türen hinten) |

### ARG_0XA0E7_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COACH_DOOR | + | - | 0-n | high | unsigned char | - | TAB_CDM_COACHDOOR | - | - | - | - | - | Auswahl des Coach-Door |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_COACHDOOR_SECURE | - | - | - | - | - | Steuerbefehl für Coach-Door-Sicherung, 0=Sicherung nicht eingelegt, 1=Sicherung eingelegt |

### ARG_0XA0E8_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA_SET | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl eines Datensatzes (Abbruchereignis); 0x01 = jüngster Datenatz, das Result DATA_SET_COUNT liefert dann die Anzahl der verfügbaren Datensätze; Wertebereich für DATA_SET: 0x01 .. DATA_SET_COUNT |
| DOOR | + | - | 0-n | high | unsigned char | - | TAB_DOOR_ZZH | - | - | - | - | - | Auswahl der Tür Info: bei Satelitten muss 0 als Argument ausgewählt werden; beim HIGH die entsprechende Tür   |

### ARG_0XA136_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_CID_MS_CONTROL | - | - | - | - | - | Steuern der CID Klappe durch Auslösen Mikroschalter |

### ARG_0XA14D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | + | - | 0-n | high | unsigned char | - | TAB_CDM_HATCH_PW_CONTROL | - | - | - | - | - | Steuern des Schnappers für die Durchreiche Partitionwall |

### BF_CDM_HW_VARIANT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BASIS_VARIANT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Basis-Variante |

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
| 0x020500 | Energiesparmode aktiv | 0 | - |
| 0x020508 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020509 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02050A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02050B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02050C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF05 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x031980 | Kühlerfigur, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031981 | Kühlerfigur, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031982 | Kühlerfigur, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031983 | Kühlerfigur, Antrieb: Fehlfunktion | 0 | - |
| 0x031984 | Kühlerfigur, Antrieb: Spielschutz | 0 | - |
| 0x031988 | Kühlerfigur, Hallsensor Position ausgefahren: Kurzschluss nach Minus | 0 | - |
| 0x031989 | Kühlerfigur, Hallsensor Position ausgefahren: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x03198A | Kühlerfigur, Hallsensor Position ausgefahren: Unplausibler Wert | 0 | - |
| 0x031990 | Kühlerfigur, Hallsensor Position eingefahren: Kurzschluss nach Minus | 0 | - |
| 0x031991 | Kühlerfigur, Hallsensor Position eingefahren: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031992 | Kühlerfigur, Hallsensor Position eingefahren: Unplausibler Wert | 0 | - |
| 0x031998 | Kühlerfigur, Motorhaubenkontakt: Dauerbetätigung | 0 | - |
| 0x0319C0 | Vorhang Heck, Antriebe: Leitungsunterbrechung | 0 | - |
| 0x0319C1 | Vorhang Heck, Antriebe: Kurzschluss nach Minus | 0 | - |
| 0x0319C2 | Vorhang Heck, Antriebe: Kurzschluss nach Plus | 0 | - |
| 0x0319C3 | Vorhang Heck, Antriebe: Fehlfunktion | 0 | - |
| 0x0319C4 | Vorhang Heck, Antriebe: Spielschutz | 0 | - |
| 0x0319C8 | Vorhang Heck links, Hallsensor offen: Kurzschluss nach Minus | 0 | - |
| 0x0319C9 | Vorhang Heck links, Hallsensor offen: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x0319CA | Vorhang Heck links, Hallsensor offen: Unplausibler Wert | 0 | - |
| 0x0319D0 | Vorhang Heck links, Hallsensor geschlossen: Kurzschluss nach Minus | 0 | - |
| 0x0319D1 | Vorhang Heck links, Hallsensor geschlossen: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x0319D2 | Vorhang Heck links, Hallsensor geschlossen: Unplausibler Wert | 0 | - |
| 0x0319D8 | Vorhang Heck rechts, Hallsensor offen: Kurzschluss nach Minus | 0 | - |
| 0x0319D9 | Vorhang Heck rechts, Hallsensor offen: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x0319DA | Vorhang Heck rechts, Hallsensor offen: Unplausibler Wert | 0 | - |
| 0x0319E0 | Vorhang Heck rechts, Hallsensor geschlossen: Kurzschluss nach Minus | 0 | - |
| 0x0319E1 | Vorhang Heck rechts, Hallsensor geschlossen: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x0319E2 | Vorhang Heck rechts, Hallsensor geschlossen: Unplausibler Wert | 0 | - |
| 0x031A40 | Zuziehhilfe hinten links, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031A41 | Zuziehhilfe hinten links, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031A42 | Zuziehhilfe hinten links, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031A43 | Zuziehhilfe hinten links, Antrieb: Fehlfunktion | 0 | - |
| 0x031A44 | Zuziehhilfe hinten links, Antrieb: Spielschutz | 1 | - |
| 0x031A50 | Zuziehhilfe hinten links, Drehwinkelsensor: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x031A51 | Zuziehhilfe hinten links, Drehwinkelsensor: Kurzschluss nach Plus | 0 | - |
| 0x031A52 | Zuziehhilfe hinten links, Drehwinkelsensor: Unplausibler Wert | 0 | - |
| 0x031A58 | Zuziehhilfe hinten links, Taste innen: Dauerbetätigung | 0 | - |
| 0x031A70 | Zuziehhilfe hinten rechts, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031A71 | Zuziehhilfe hinten rechts, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031A72 | Zuziehhilfe hinten rechts, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031A73 | Zuziehhilfe hinten rechts, Antrieb: Fehlfunktion | 0 | - |
| 0x031A74 | Zuziehhilfe hinten rechts, Antrieb: Spielschutz | 1 | - |
| 0x031A80 | Zuziehhilfe hinten rechts, Drehwinkelsensor: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x031A81 | Zuziehhilfe hinten rechts, Drehwinkelsensor: Kurzschluss nach Plus | 0 | - |
| 0x031A82 | Zuziehhilfe hinten rechts, Drehwinkelsensor: Unplausibler Wert | 0 | - |
| 0x031A88 | Zuziehhilfe hinten rechts, Taste innen: Dauerbetätigung | 0 | - |
| 0x031AA0 | Zuziehhilfe vorn links, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031AA1 | Zuziehhilfe vorn links, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031AA2 | Zuziehhilfe vorn links, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031AA3 | Zuziehhilfe vorn links, Antrieb: Fehlfunktion | 0 | - |
| 0x031AA4 | Zuziehhilfe vorn links, Antrieb: Spielschutz | 1 | - |
| 0x031AB0 | Zuziehhilfe vorn links, Drehwinkelsensor: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x031AB1 | Zuziehhilfe vorn links, Drehwinkelsensor: Kurzschluss nach Plus | 0 | - |
| 0x031AB2 | Zuziehhilfe vorn links, Drehwinkelsensor: Unplausibler Wert | 0 | - |
| 0x031AB8 | Zuziehhilfe vorn links, Taste innen: Dauerbetätigung | 0 | - |
| 0x031AC8 | Zuziehhilfe vorn links, Taste Fahrer innen: Dauerbetätigung | 0 | - |
| 0x031AD0 | Zuziehhilfe vorn rechts, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031AD1 | Zuziehhilfe vorn rechts, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031AD2 | Zuziehhilfe vorn rechts, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031AD3 | Zuziehhilfe vorn rechts, Antrieb: Fehlfunktion | 0 | - |
| 0x031AD4 | Zuziehhilfe vorn rechts, Antrieb: Spielschutz | 1 | - |
| 0x031AE0 | Zuziehhilfe vorn rechts, Drehwinkelsensor: Kurzschluss nach Minus oder Unterbrechung | 0 | - |
| 0x031AE1 | Zuziehhilfe vorn rechts, Drehwinkelsensor: Kurzschluss nach Plus | 0 | - |
| 0x031AE2 | Zuziehhilfe vorn rechts, Drehwinkelsensor: Unplausibler Wert | 0 | - |
| 0x031AE8 | Zuziehhilfe vorn rechts, Taste innen: Dauerbetätigung | 0 | - |
| 0x031B00 | Coachdoor Sicherung links, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031B01 | Coachdoor Sicherung links, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031B02 | Coachdoor Sicherung links, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031B03 | Coachdoor Sicherung links, Antrieb: Fehlfunktion | 0 | - |
| 0x031B04 | Coachdoor Sicherung links: ZV ohne Reaktion | 1 | - |
| 0x031B05 | Coachdoor Sicherung links, Antrieb: Spielschutz | 1 | - |
| 0x031B06 | Coachdoor Sicherung: beide Türinnengriffe gleichzeitig betätigt | 1 | - |
| 0x031B07 | Coachdoor Sicherung: Versorgungsspannung fehlerhaft | 1 | - |
| 0x031B08 | Coachdoor Sicherung links, Hallsensor Tür Innengriff: Kurzschluss nach Minus | 0 | - |
| 0x031B09 | Coachdoor Sicherung links, Hallsensor Tür Innengriff: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B0A | Coachdoor Sicherung links, Hallsensor Tür Innengriff: Unplausibler Wert | 0 | - |
| 0x031B10 | Coachdoor Sicherung links, Hallsensor Status Cosi: Kurzschluss nach Minus | 0 | - |
| 0x031B11 | Coachdoor Sicherung links, Hallsensor Status Cosi: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B12 | Coachdoor Sicherung links, Hallsensor Status Cosi: Unplausibler Wert | 0 | - |
| 0x031B18 | Coachdoor Sicherung links, Hallsensor Zentralverriegelung: Kurzschluss nach Minus | 0 | - |
| 0x031B19 | Coachdoor Sicherung links, Hallsensor Zentralverriegelung: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B1A | Coachdoor Sicherung links, Hallsensor Zentralverriegelung: Unplausibler Wert | 0 | - |
| 0x031B20 | Coachdoor Sicherung vorn links, Hallsensor Vorraste: Kurzschluss nach Minus | 0 | - |
| 0x031B21 | Coachdoor Sicherung vorn links, Hallsensor Vorraste: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B22 | Coachdoor Sicherung vorn links, Hallsensor Vorraste: Unplausibler Wert | 0 | - |
| 0x031B28 | Coachdoor Sicherung hinten links, Hallsensor Vorraste: Kurzschluss nach Minus | 0 | - |
| 0x031B29 | Coachdoor Sicherung hinten links, Hallsensor Vorraste: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B2A | Coachdoor Sicherung hinten links, Hallsensor Vorraste: Unplausibler Wert | 0 | - |
| 0x031B40 | Coachdoor Sicherung rechts, Antrieb: Leitungsunterbrechung | 0 | - |
| 0x031B41 | Coachdoor Sicherung rechts, Antrieb: Kurzschluss nach Minus | 0 | - |
| 0x031B42 | Coachdoor Sicherung rechts, Antrieb: Kurzschluss nach Plus | 0 | - |
| 0x031B43 | Coachdoor Sicherung rechts, Antrieb: Fehlfunktion | 0 | - |
| 0x031B44 | Coachdoor Sicherung rechts: ZV ohne Reaktion | 1 | - |
| 0x031B45 | Coachdoor Sicherung rechts, Antrieb: Spielschutz | 1 | - |
| 0x031B48 | Coachdoor Sicherung rechts, Hallsensor Tür Innengriff: Kurzschluss nach Minus | 0 | - |
| 0x031B49 | Coachdoor Sicherung rechts, Hallsensor Tür Innengriff: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B4A | Coachdoor Sicherung rechts, Hallsensor Tür Innengriff: Unplausibler Wert | 0 | - |
| 0x031B50 | Coachdoor Sicherung rechts, Hallsensor Status Cosi: Kurzschluss nach Minus | 0 | - |
| 0x031B51 | Coachdoor Sicherung rechts, Hallsensor Status Cosi: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B52 | Coachdoor Sicherung rechts, Hallsensor Status Cosi: Unplausibler Wert | 0 | - |
| 0x031B58 | Coachdoor Sicherung rechts, Hallsensor Zentralverriegelung: Kurzschluss nach Minus | 0 | - |
| 0x031B59 | Coachdoor Sicherung rechts, Hallsensor Zentralverriegelung: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B5A | Coachdoor Sicherung rechts, Hallsensor Zentralverriegelung: Unplausibler Wert | 0 | - |
| 0x031B60 | Coachdoor Sicherung vorn rechts, Hallsensor Vorraste: Kurzschluss nach Minus | 0 | - |
| 0x031B61 | Coachdoor Sicherung vorn rechts, Hallsensor Vorraste: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B62 | Coachdoor Sicherung vorn rechts, Hallsensor Vorraste: Unplausibler Wert | 0 | - |
| 0x031B68 | Coachdoor Sicherung hinten rechts, Hallsensor Vorraste: Kurzschluss nach Minus | 0 | - |
| 0x031B69 | Coachdoor Sicherung hinten rechts, Hallsensor Vorraste: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x031B6A | Coachdoor Sicherung hinten rechts, Hallsensor Vorraste: Unplausibler Wert | 0 | - |
| 0x803881 | Handschuhfach, Taster: Dauerbetätigung | 0 | - |
| 0x803882 | Interner Steuergerätefehler | 0 | - |
| 0x803884 | Unterspannung erkannt | 1 | - |
| 0x803885 | Überspannung erkannt | 1 | - |
| 0x8038C3 | Handschuhfach Motor Kurzschluss | 0 | - |
| 0x8038C7 | CID Motor: LIN Autoadressierung fehlgeschlagen | 0 | - |
| 0x8038C8 | CID Motor Kurzschluss | 0 | - |
| 0x8038C9 | CID Motor Versorgungsspannung Fehler | 0 | - |
| 0x8038CA | CID Motor Temperatur Fehler | 0 | - |
| 0x8038CB | CID Motor Fehler in Elektrik | 0 | - |
| 0x8038CC | CID Kalibrierung ungültig | 0 | - |
| 0x8038CF | Handschuhfach Motor: LIN Autoadressierung fehlgeschlagen | 0 | - |
| 0x8038D0 | Handschuhfach Motor Versorgungsspannung Fehler | 0 | - |
| 0x8038D1 | Handschuhfach Motor Temperatur Fehler | 0 | - |
| 0x8038D2 | Handschuhfach Motor Fehler in Elektrik | 0 | - |
| 0x8038D3 | Handschuhfach Kalibrierung ungültig | 0 | - |
| 0x8038DA | Durchreiche PW, Taster: Dauerbetätigung | 0 | - |
| 0x8038DB | Durchreiche PW Kalibrierung ungültig | 0 | - |
| 0x8038DC | Durchreiche PW Motor: LIN Autoadressierung fehlgeschlagen | 0 | - |
| 0x8038DD | Durchreiche PW Motor Fehler in Elektrik | 0 | - |
| 0x8038DE | Durchreiche PW Motor Kurzschluss | 0 | - |
| 0x8038DF | Durchreiche PW Motor Temperatur Fehler | 0 | - |
| 0x8038E0 | Durchreiche PW Motor Versorgungsspannung Fehler | 0 | - |
| 0xCA4468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xCA4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCA4C00 | LIN-Bus: CID-Modul keine Kommunikation | 0 | - |
| 0xCA4C01 | LIN-Bus: Handschuhfach-Modul keine Kommunikation | 0 | - |
| 0xCA4C02 | LIN-Bus: Durchreiche Partitionwall keine Kommunikation | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
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
| 0xff | ungültig |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

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
| STAT_AVG_CPU_LOAD | 0-n | high | unsigned char | - | - | - | - | - | Avg CPU Load |
| STAT_MAX_CPU_LOAD | 0-n | high | unsigned char | - | - | - | - | - | Max CPU load |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XA0E0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOOD_ORNAMENT_POSITION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_KF_POSITION | - | - | - | Position der Kühlerfigur |
| STAT_HOOD_ORNAMENT_MOVEMENT | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_KF_MOVEMENT | - | - | - | Bewegung der Kühlerfigur |
| STAT_HOOD_ORNAMENT_INITIALISATION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus der Kühlerfigur |
| STAT_HOOD_ORNAMENT_INIT_HALL_WERT | - | - | + | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max. Hallimpulse aus Initialisierung (Normierungsfahrt) |
| STAT_HOOD_ORNAMENT_PLAYPROTECTION_ACTIVE | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Spielschutz nicht aktiv, 1 = Spielschutz aktiv |
| STAT_HOOD_ORNAMENT_PLAYPROTECTION_TIME_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Zeit, bis der Spielschutz wieder deaktiviert wird |
| STAT_HOOD_ORNAMENT_BUSSIGNAL | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_KF_BUSSIGNAL | - | - | - | über den Bus empfangene Anforderungen zum Verfahren der Kühlerfigur |

### RES_0XA0E2_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURTAIN_POSITION | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_CURTAIN_POSITION | - | - | - | aktuelle Position |
| STAT_CURTAIN_POS_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Position in %, offen=kleiner Wert, geschlossen=großer Wert |
| STAT_CURTAIN_PLAYPROTECTION_ACTIVE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Spielschutz nicht aktiv, 1 = Spielschutz aktiv |
| STAT_CURTAIN_TIME_WERT | + | - | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Zeit, bis der Spielschutz wieder deaktiviert wird |
| STAT_CURTAIN_MOVEMENT | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_CURTAIN_MOVEMENT | - | - | - | Bewegung des Vorhangs |
| STAT_CURTAIN_INITIALISATION | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus des Vorhangs |
| STAT_CURTAIN_INIT_HALL_WERT | + | - | - | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | max. Hallimpulse aus Initialisierung (Normierungsfahrt) |

### RES_0XA0E3_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POSITION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_CID_POSITION | - | - | - | Position der CID Klappe |
| STAT_CID_INITIALISATION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus der CID Klappe |

### RES_0XA0E4_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLOVEBOX_INITIALISATION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus des Hanschuhkasten Schnappers |

### RES_0XA0E6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTATION_ANGLE_SENSOR_WERT | + | - | - | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Spannungswert des Drehwinkelsensors, Wertebereich 0,4.,4.35V |
| STAT_BUTTON_ZZH_PRESSED | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Zuziehhilfe: Taster ZZH: 0= nicht gedrückt, 1= gedrückt |
| STAT_BUTTON_ZZH_DRIVER_FOR_PASSENGER_PRESSED | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Zuziehhilfe: zusätzlicher Taster in Türe Fahrerseite für ZZH Beifahrer: 0= nicht gedrückt, 1= gedrückt nur wenn DOOR = FRONT_LEFT oder FRONT_RIGHT, für hinten immer = 0 |
| STAT_ZZH_CLOSING | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Zuziehhilfe: Tür schließt: 0= schließt nicht, 1= schließt |
| STAT_ZZH_MOTOR | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_ZZH_MOTOR | - | - | - | Zuziehhilfe: Status Motor |
| STAT_STOPPING_THRESHOLD_WERT | + | - | - | °/s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Abschaltschwelle; im Steuergerät als Digits/s codiert, wird im Steuergerät in °/s umgerechnet |
| STAT_CV_TEMPERATURE_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Temperatur |
| STAT_CV_VOLTAGE_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Spannung |
| STAT_CV_PITCH_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Längsneigung |
| STAT_CV_ROLL_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwert Querneigung |
| STAT_ZZH_INITIALISATION | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus der Zuziehhilfe |

### RES_0XA0E8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA_SET_COUNT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl verfügbarer Historiy-Einträge |
| STAT_EVENT_TYPE | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_HISTORY_EVENT_TYPE | - | - | - | Kennzeichnet einen Eintrag entweder als Bewegungsabbruch oder als Startverhinterer |
| STAT_KM_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_REASON | + | - | - | 0-n | high | unsigned char | - | TAB_CDM_HISTORY_REASON | - | - | - | Abbruchgrund bzw. Grund für Startverhinderer |
| STAT_DOOR_ANGLE_WERT | + | - | - | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Öffnungswinkel der Türe |
| STAT_DOOR_VELOCITY_WERT | + | - | - | °/s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Winkelgeschwindigkeit |
| STAT_TEMPERATURE_WERT | + | - | - | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Umgebungstemperatur |
| STAT_KLEMME_30B_WERT | + | - | - | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Spannungswert an Klemme 30B |
| STAT_PITCH_INCLINATION_WERT | + | - | - | ° | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Längsneigung |
| STAT_ROLL_INCLINATION_WERT | + | - | - | ° | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Querneigung |

### RES_0XA0E9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADRESSIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_CID | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_GLOVEBOX | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_HATCH_PW | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE_5 | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE_4 | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE_3 | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE_2 | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE_1 | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_CDM_STATUS_AUTOADRESSIERUNG |

### RES_0XA0EA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 8 |
| STAT_FEHLERSTATUS_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XA137_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MICROSWITCH | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_HATCH_PW_SWITCH | - | - | - | Status Mikroschalter |

### RES_0XA14D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HATCH_PW_INITIALISATION | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_INITIALISATION | - | - | - | Initialisierungsstatus der Durchreiche Partitionwall |

### RES_0XA14E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWITCH_HATCH_PW | - | - | + | 0-n | high | unsigned char | - | TAB_CDM_HATCH_PW_SWITCH | - | - | - | Status Taster Durchreiche PW |

### RES_0XD7B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_DRIVERSIDE | 0-n | high | unsigned char | - | TAB_CDM_CODING_DRIVERSIDE | - | - | - | Codierung der Lenkerseite im Coach-Door-Module |
| STAT_CODING_CURTAIN | 0-n | high | unsigned char | - | TAB_CODING_CURTAIN | - | - | - | Codierung der Vorhänge im Coach-Door-Module |
| - | Bit | high | BITFIELD | - | BF_CDM_HW_VARIANT | - | - | - | Hardwarevarianten |

### RES_0XD7B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HALLSENSOR_LEFT | 0-n | high | unsigned char | - | TAB_CDM_ZV_HALLSENSOR | - | - | - | Status ZV Hallsensor links |
| STAT_ZV_HALLSENSOR_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_ZV_HALLSENSOR | - | - | - | Status ZV Hallsensor rechts |

### RES_0XD7B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COSI_LEFT | 0-n | high | unsigned char | - | TAB_CDM_COSI | - | - | - | Status Coach-Door-Sicherung links |
| STAT_COSI_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_COSI | - | - | - | Status Coach-Door-Sicherung rechts |
| STAT_DOOR_INSIDE_HANDLE_LEFT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Türinnengriff links |
| STAT_DOOR_INSIDE_HANDLE_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Türinnengriff rechts |
| STAT_DOOR_PRECATCH_LEFT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Tür Vorraste links |
| STAT_DOOR_PRECATCH_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Tür Vorraste rechts |
| STAT_DOOR_MAINCATCH_LEFT | 0-n | high | unsigned char | - | TAB_CDM_MAINCATCH | - | - | - | Status Tür Hauptraste links |
| STAT_DOOR_MAINCATCH_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_MAINCATCH | - | - | - | Status Tür Hauptraste rechts |
| STAT_COSI_LEFT_ERROR_COUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerzähler für Coach-Door Sicherung links |
| STAT_COSI_RIGHT_ERROR_COUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fehlerzähler für Coach-Door Sicherung rechts |

### RES_0XD7B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DOOR_PRECATCH_LEFT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Tür Vorraste links |
| STAT_DOOR_PRECATCH_RIGHT | 0-n | high | unsigned char | - | TAB_CDM_DOOR_CATCH | - | - | - | Status Tür Vorraste rechts |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| HOOD_ORNAMENT | 0xA0E0 | - | Kühlerfigur Steuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E0_R | RES_0xA0E0_R |
| CURTAIN_CONTROL | 0xA0E1 | - | Steuerung der Vorhänge | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E1_R | - |
| CURTAIN_STATUS | 0xA0E2 | - | Statusabfrage Vorhang | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E2_R | RES_0xA0E2_R |
| CID | 0xA0E3 | - | Status und Steuern für die CID Klappe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E3_R | RES_0xA0E3_R |
| GLOVEBOX | 0xA0E4 | - | Status und Steuern für den Handschuhkasten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E4_R | RES_0xA0E4_R |
| CLOSING_DOOR_ASSIST_CONTROL | 0xA0E5 | - | Steuern Zuziehhilfe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E5_R | - |
| CLOSING_DOOR_ASSIST_STATUS | 0xA0E6 | - | Status für Zuziehhilfe auslesen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E6_R | RES_0xA0E6_R |
| COACHDOOR_SECURE | 0xA0E7 | - | Ansteuerung der Coach-Door-Sicherung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E7_R | - |
| CLOSING_ASSIST_FAULT_HISTORY | 0xA0E8 | - | Fehlerhistorie für die Zuziehhilfe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0E8_R | RES_0xA0E8_R |
| LIN_AUTOADDRESSING | 0xA0E9 | - | Autoadressierung LIN-Bus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0E9_R |
| LIN_RESET | 0xA0EA | - | Führt einen Reset des Lin-Bus durch | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0EA_R |
| CDM_CID_CONTROL | 0xA136 | - | steuert die CID Klappe ausgelöst durch Mikroschalter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA136_R | - |
| CDM_CID_MS_STATE | 0xA137 | - | Status vom MS ZBE | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA137_R |
| HATCH_PARTITIONWALL | 0xA14D | - | Status und Steuern für die Durchreiche Partitionwall | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA14D_R | RES_0xA14D_R |
| CDM_HATCH_PW_SWICH | 0xA14E | - | Status vom Schalter Durchreiche PW | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA14E_R |
| CURTAIN_BUTTONS | 0xD7B1 | STAT_BUS_IN_CURTAIN_BUTTONS | Schalterbetätigung für Vorhangsteuerung | 0-n | - | High | unsigned char | TAB_CDM_CURTAIN_BUTTONS | - | - | - | - | 22 | - | - |
| CDM_VARIANT | 0xD7B2 | - | Codieroptionen Coach-Door-Modul | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7B2_D |
| HOTEL_MODE | 0xD7B3 | STAT_HOTEL_MODE | Status Hotel-Mode | 0-n | - | High | unsigned char | TAB_CDM_HOTELMODE | - | - | - | - | 22 | - | - |
| CHILDLOCK | 0xD7B4 | STAT_CHILDLOCK | Status Kindersicherung | 0-n | - | High | unsigned char | TAB_CDM_CHILDLOCK | - | - | - | - | 22 | - | - |
| VOLTAGE_KLEMME_30B | 0xD7B5 | STAT_KLEMME_30B_WERT | Spannungswert an Klemme 30B | V | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ZV_HALLSENSORS | 0xD7B6 | - | Sensoren Zentralverriegelung (Coach-Door-Modul) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7B6_D |
| COACHDOORS | 0xD7B7 | - | Status der Coach-Doors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7B7_D |
| DOORS_PRECATCH_FRONT | 0xD7B8 | - | Status Vorrasten Türen vorne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7B8_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| CPU_LOAD | 0x4000 | - | Derive CPU load of ECU, sampled every 1 second. | - | % | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AUTOADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung nicht gestartet |
| 0x01 | Autoadressierung läuft |
| 0x02 | Autoadressierung ohne Fehler beendet |
| 0x03 | Autoadressierung mit Fehler beendet |
| 0xFF | Ungültiger Wert |

### TAB_CDM_CHILDLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Kindersicherung inaktiv |
| 0x01 | Kindersicherung aktiv |
| 0xFF | Wert ungültig |

### TAB_CDM_CID_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | OPEN |
| 0x01 | CLOSE |
| 0x03 | INITIALISATION |

### TAB_CDM_CID_MS_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | MS not active |
| 0x01 | MS active |

### TAB_CDM_CID_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Klappe geschlossen |
| 0x01 | Klappe geöffnet |
| 0x02 | Klappe in Bewegung |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CDM_COACHDOOR

| WERT | TEXT |
| --- | --- |
| 0x00 | COACHDOOR_BOTH |
| 0x01 | COACHDOOR_LEFT |
| 0x02 | COACHDOOR_RIGHT |

### TAB_CDM_COACHDOOR_SECURE

| WERT | TEXT |
| --- | --- |
| 0x00 | DISENGAGED |
| 0x01 | ENGAGED |

### TAB_CDM_CODING_DRIVERSIDE

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültige Lenkerseite |
| 0x01 | Linkslenker |
| 0x02 | Rechtslenker |
| 0xFF | nicht definiert |

### TAB_CDM_COSI

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht eingelegt |
| 0x01 | eingelegt |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0xFF | Wert ungültig |

### TAB_CDM_CURTAIN_BUTTONS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Taste betätigt |
| 0x01 | Bedienung Seite rechts durch hinten rechts |
| 0x02 | Bedienung Seite links durch hinten rechts |
| 0x03 | Bedienung Seite rechts durch hinten links |
| 0x04 | Bedienung Seite links durch hinten links |
| 0x05 | Bedienung Heck durch Fahrer |
| 0x06 | Bedienung Heck durch hinten rechts |
| 0x07 | Bedienung Heck durch hinten links |
| 0xFF | Wert ungültig |

### TAB_CDM_CURTAIN_CONT

| WERT | TEXT |
| --- | --- |
| 0x00 | CURTAIN |
| 0x01 | CURTAIN_LEFT |
| 0x02 | CURTAIN_RIGHT |
| 0x03 | CURTAIN_REAR |

### TAB_CDM_CURTAIN_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | OPEN |
| 0x02 | CLOSE |
| 0x03 | INITIALISATION |

### TAB_CDM_CURTAIN_MOVEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bewegung |
| 0x01 | Schließt |
| 0x02 | Öffnet |
| 0x03 | Fehler: Zeitüberschreitung beim Schließen |
| 0x04 | Fehler: Zeitüberschreitung beim Öffnen |
| 0xFF | nicht definiert |

### TAB_CDM_CURTAIN_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Endposition geöffnet |
| 0x01 | Zwischenstellung |
| 0x02 | Endposition geschlossen |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CDM_CURTAIN_STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | SIDE_CURTAIN |
| 0x01 | SIDE_CURTAIN_LEFT |
| 0x02 | SIDE_CURTAIN_RIGHT |
| 0x03 | REAR_CURTAIN_LEFT |
| 0x04 | REAR_CURTAIN_RIGHT |

### TAB_CDM_DOOR_CATCH

| WERT | TEXT |
| --- | --- |
| 0x00 | geöffnet |
| 0x01 | geschlossen |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0xFF | Wert ungültig |

### TAB_CDM_HATCH_PW_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | OPEN |
| 0x01 | INITIALISATION |

### TAB_CDM_HATCH_PW_SWITCH

| WERT | TEXT |
| --- | --- |
| 0x00 | switch not active |
| 0x01 | switch active |
| 0xFF | Wert ungültig |

### TAB_CDM_HISTORY_EVENT_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Bewegungsabbruch |
| 0x01 | Start verhindert |
| 0xFF | Wert ungültig |

### TAB_CDM_HISTORY_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Blockierung |
| 0x01 | Spannung |
| 0x02 | PWF-Zustand |
| 0x03 | Zeitüberschreitung Aktivierung |
| 0x04 | Tür Geschwindigkeit beim Öffnen |
| 0x10 | Temperatur |
| 0x11 | Längsneigung |
| 0x12 | Querneigung |
| 0x13 | Kindersicherung |
| 0x14 | Tür Geschwindigkeit zu hoch |
| 0x15 | Spielschutz |
| 0xFE | sonstige |
| 0xFF | Wert ungültig |

### TAB_CDM_HOTELMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Hotel-Mode inaktiv |
| 0x01 | Hotel-Mode aktiv |
| 0xFF | Wert ungültig |

### TAB_CDM_INITIALISATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Initialisierung |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung IO |
| 0x03 | Initialisierung NIO |
| 0xFF | nicht definiert |

### TAB_CDM_KF_BUSSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Verfahranforderung vorhanden |
| 0x01 | Kühlerfigur einfahren |
| 0x02 | Kühlerfigur ausfahren |
| 0x03 | Signal ungültig |
| 0xFF | nicht definiert |

### TAB_CDM_KF_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | RETRACT |
| 0x01 | EXTEND |
| 0x02 | INITIALISATION |
| 0x03 | ASSEMBLING_POSITION |

### TAB_CDM_KF_MOVEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Bewegung |
| 0x01 | Kühlerfigur ausfahren |
| 0x02 | Kühlerfigur einfahren |
| 0x03 | Fehler: Zeitüberschreitung beim Ausfahren |
| 0x04 | Fehler: Zeitüberschreitung beim Einfahren |
| 0xFF | nicht definiert |

### TAB_CDM_KF_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Eingefahren |
| 0x01 | Ausgefahren |
| 0x02 | Zwischenstellung |
| 0x03 | Montageposition |
| 0xFF | nicht definiert |

### TAB_CDM_MAINCATCH

| WERT | TEXT |
| --- | --- |
| 0x00 | geöffnet |
| 0x01 | geschlossen |
| 0xFF | Wert ungültig |

### TAB_CDM_STATUS_AUTOADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung fehlgeschlagen |
| 0x01 | Autoadressierung erfolgreich |
| 0xFE | Teilnehmer nicht codiert |
| 0xFF | Wert ungültig |

### TAB_CDM_ZV_HALLSENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht eingelegt |
| 0x01 | eingelegt |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Plus oder Unterbrechung |
| 0xFF | Wert ungültig |

### TAB_CDM_ZZH_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | CLOSE |
| 0x02 | RESET_INITIALISATION |
| 0x03 | INITIALISATION |

### TAB_CDM_ZZH_DOOR

| WERT | TEXT |
| --- | --- |
| 0x00 | REAR |
| 0x01 | REAR_LEFT |
| 0x02 | REAR_RIGHT |
| 0x03 | FRONT_LEFT |
| 0x04 | FRONT_RIGHT |

### TAB_CDM_ZZH_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor ist aus |
| 0x01 | Motor läuft |
| 0x02 | Motor blockiert |
| 0xFF | ungültiger Wert |

### TAB_CODING_CURTAIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Vorhänge kodiert |
| 0x01 | Seitenvorhänge kodiert |
| 0x02 | Heckvorhänge kodiert |
| 0x03 | Heck- und Seitenvorhänge codiert |
| 0xFF | nicht definiert |

### TAB_DOOR_ZZH

| WERT | TEXT |
| --- | --- |
| 0x00 | DOOR |
| 0x01 | LEFT_DOOR |
| 0x02 | RIGHT_DOOR |
