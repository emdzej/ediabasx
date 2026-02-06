# IHKA_G05.prg

## General

|  |  |
| --- | --- |
| File | IHKA_G05.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 177 |
| Origin | BMW EI-431 Manfred_Hanselmann |
| Revision | 6.003 |
| Author | BMW EI-431 Huth |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimaautomatik |  |  |
| ORIGIN | string | BMW EI-431 Manfred_Hanselmann |  |  |
| REVISION | string | 6.003 |  |  |
| AUTHOR | string | BMW EI-431 Huth |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.994 |  |  |
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

### ARG_0X102F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSEMODUS | + | - | 0-n | high | unsigned char | - | PWF_MESSEMODUS | - | - | - | - | - | Das Argument gibt an in welchen Fahrzeugzustand  geschaltet werden soll. |

### ARG_0X403E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | DUMMY_WERT |

### ARG_0XA114_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | 0.0 | 12.7 | Frequenz der Dosierpumpe in Hertz |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA115_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Leistung der Wasserpumpe in Prozent |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA116_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAKTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Taktung des Umschaltventils |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA11E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR | + | - | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | - | - | Name des Klappenmotor (Siehe Tabelle TAB_KLAPPENMOTOR) |

### ARG_0XA11F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR | + | - | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | - | - | Name des Klappenmotor (Siehe Tabelle TAB_KLAPPENMOTOR) |

### ARG_0XA121_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZENTRALANTRIEB | + | - | 0-n | - | unsigned char | - | TAB_ZENTRALANTRIEBE | - | - | - | - | - | Auswahl Zentralantrieb |
| SOLLPOSITION | + | - | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 360.0 | Sollwert Kulissenstellung: 0..360 Grad |

### ARG_0XA122_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | + | - | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | - | - | Auswahl der anzusteuernden Klappe aus der Tabelle TAB_KLAPPENMOTOR |
| KLAPPENOEFFNUNG | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

### ARG_0XA126_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | + | - | 0-n | - | unsigned char | - | TAB_TASTEN_KLIMA | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten. Siehe Tabelle TAB_TASTEN_KLIMA. |
| AKTION | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XA127_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | + | - | 0-n | - | unsigned char | - | TAB_KLIMA_LEDS_ANSTEUERUNG | - | - | - | - | - | Ansteuerung der LEDs |

### ARG_0XA128_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_GEBLAESE | + | - | 0-n | high | unsigned char | - | TAB_VERBAUORT_GEBLAESE | - | - | - | - | - | Verbauort Gebläse; Klimatisierte 3. Sitzreihe über GEBLAESE_HKA |
| GEBLAESELEISTUNG | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XA129_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | + | - | 0-n | high | unsigned char | - | TAB_BITMUSTER | - | - | - | - | - | Gibt an, welches Bitmuster angesteuert werden soll: Siehe Tabelle TAB_BITMUSTER 0x00 = Alle Segmente aus und 0x01 = Alle Segmente ein sind Pflicht, andere Bitmuster können  frei definiert werden. |

### ARG_0XA12A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLWERT_ORT | + | - | 0-n | high | unsigned char | - | TAB_SOLLWERT_ORT | - | - | - | - | - | Ort der einzustellenden Sollwert-Temperatur. Siehe TAB_SOLLWERT_ORT |
| TEMPERATUR | + | - | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 16.0 | 28.0 | Sollwert-Temperatur |

### ARG_0XA12B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ZUHEIZER | + | - | 0-n | high | unsigned char | - | TAB_VERBAUORT_ZUHEIZER | - | - | - | - | - | Gibt an, welcher elektrische Zuheizer angesteuert werden. Siehe Tabelle TAB_VERBAUORT_ZUHEIZER |
| SOLLWERT | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### ARG_0XA12E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTR_MOD_IZR | + | - | 0-n | high | unsigned char | - | TAB_IONISATOR_KLIMA | - | - | - | - | - | Steuern des Ionisators. |

### ARG_0XA12F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| APPLIKATIONSMODUS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Applikationsmodus zur Direktansteuerung der Bedufterklappe. |
| POS_BEDUFTERKLAPPE | + | - | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | Position der Bedufterklappe für den Applikationsmodus.  |
| DUFT | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Auswahl der Duftkartusche im Applikationsmodus. |

### ARG_0XA134_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | + | - | 0-n | high | unsigned char | - | TAB_TASTEN_KLIMA_FKA_3SR | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten. Siehe TAB_TASTEN_KLIMA_FKA_3SR. |
| AKTION | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD89F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UNTERSPANNUNGSABSCHALTSCHWELLE_MILLIVOLT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Status Unterspannungsabschaltschwelle in [mV] |
| ZEITKRITERIUM_UNTERSPANNUNG_SEKUNDEN | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Status Zeitkriterium in [s] für Unterspannung |

### ARG_0XD8C3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Vorgabe der Drehzahl in Prozent. |

### ARG_0XD8C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reset Kältemittelverdichter: 0 = kein Reset 1 = Reset durchführen |

### ARG_0XD8C7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | - | - | Isolationprüfung: 0x00 = kein aktiver Kurzschluss 0x01 = aktiver Kurzschluss Low-Side 0x02 = aktiver Kurzschluss High-Side |

### ARG_0XD8CB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREILAUF_ANFORDERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Isolationprüfung: 0x00 = aktiven Freilauf beenden 0x01 = aktiver Freilauf starten |

### ARG_0XD8E2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Drehzahl EWP_2 |

### ARG_0XD918_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### ARG_0XD927_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD9A7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### ARG_0XD9AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_ABSPERRVENTIL_1 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 1:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_ABSPERRVENTIL_2 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 2:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_ABSPERRVENTIL_3 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 3:  0x00 = Ventil nicht bestromen = offen 0x01 = Ventil bestromen = geschlossen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_ABSPERRVENTIL_4 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Absperrventil 4:  0x00 = Ventil nicht bestromen = geschlossen 0x01 = Ventil bestromen = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_EXP_VENTIL_1 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 1:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_EXP_VENTIL_2 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 2:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |
| POS_EXP_VENTIL_3 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Expansionsventil 3:  0x00 = 0% = geschlossen 0x64 = 100% = offen 0xFF = Bei Ansteuerung nicht berücksichtigt |

### ARG_0XD9DF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VENTIL | 0-n | high | unsigned char | - | TAB_WP_VENTILE | - | - | - | - | - | Angabe des Ventils, welches angesteuert werden soll. Siehe TAB_WP_VENTILE |
| ZUSTAND | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert, mit dem das Ventil angesteuert werden soll: Bei Absperrventil 1-3: 0x00 = Ventil offen, 0x01 = Ventil geschlossen Bei Absperrventil 4: 0x00 = Ventil geschlossen, 0x01 = Ventil offen Bei Expansionsventil: 0 - 100 % 0% = geschlossen, 100% = offen |

### ARG_0XE410_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROL_RES_HMI_CUSTOMER_REQUEST | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Funktion RES in MMI deaktivieren 0x01: Funktion RES in MMI aktivieren |

### BF_IHKA_KONFIGURATION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASSERVENTIL_CODIERT | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_BESCHLAGSSENSOR_CODIERT | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_FONDSCHICHTUNG_CODIERT | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_AUC_SENSOR_CODIERT | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SOLARSENSOR_CODIERT | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_KOMPRESSORKUPPLUNG_CODIERT | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_ELEKTRISCHER_KOMPRESSOR_CODIERT | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_EDH_ZUHEIZER_CODIERT | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_PTC_ZUHEIZER_CODIERT | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_STANDHEIZUNG_CODIERT | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_HECKKLIMA_CODIERT | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_FRONTSCHEIBENHEIZUNG_CODIERT | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_BEDUFTER_CODIERT | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_IONISATOR_CODIERT | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_RECHTSLENKER_CODIERT | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SH_TASTEN_VORN_CODIERT | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SH_TASTEN_HINTEN_CODIERT | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SL_TASTEN_VORN_CODIERT | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SL_TASTEN_HINTEN_CODIERT | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_DRITTE_SITZREIHE_CODIERT | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |
| STAT_SH_TASTEN_DRITTE_SITZREIHE_CODIERT | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |

### BF_KLIMA_BEDIENTEILVARIANTE_HINTEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEDIENTEIL_VARIANTE_HINTEN | 0-n | high | unsigned int | 0x0007 | TAB_BEDIENTEILVAR_HINTEN | - | - | - | Bedienteilvariante hinten |
| STAT_SH_TASTEN_HINTEN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Bedienteil mit Sitzheiungstasten |
| STAT_SL_TASTEN_HINTEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Bedienteil mit Sitzlüftungstasten |

### BF_KLIMA_BEDIENTEILVARIANTE_VORN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEDIENTEIL_VARIANTE_VORN | 0-n | high | unsigned int | 0x0007 | TAB_BEDIENTEILVAR_VORN | - | - | - | Bedienteil Variante |
| STAT_SH_TASTEN_VORN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Bedienteil mit Sitzheizungstasten |
| STAT_SL_TASTEN_VORN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Bedienteil mit Sitzlüftungstasten |
| STAT_BEDUFTER_TASTE | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Bedienteil mit Beduftertaste |
| STAT_KLIMAMENUE_TASTE | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Bedienteil mit Taste Klimamenü |

### BF_STAT_TASTEN_OFF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_OFF_FRONT | 0-n | high | unsigned char | 0x03 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_OFF_2_SR | 0-n | high | unsigned char | 0x0C | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_BYTE_30_RESERVE_1 | 0-n | high | unsigned char | 0x30 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_BYTE_30_RESERVE_2 | 0-n | high | unsigned char | 0xC0 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |

### BF_STAT_TASTEN_TEMP_2_SR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_TEMP_2_SR_LI_MITTE_PLUS | 0-n | high | unsigned char | 0x03 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_2_SR_LI_MITTE_MINUS | 0-n | high | unsigned char | 0x0C | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_2_SR_RE_PLUS | 0-n | high | unsigned char | 0x30 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_2_SR_RE_MINUS | 0-n | high | unsigned char | 0xC0 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |

### BF_STAT_TASTEN_TEMP_FRONT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_TEMP_FRONT_LI_MITTE_PLUS | 0-n | high | unsigned char | 0x03 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_FRONT_LI_MITTE_MINUS | 0-n | high | unsigned char | 0x0C | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_FRONT_RE_PLUS | 0-n | high | unsigned char | 0x30 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_TEMP_FRONT_RE_MINUS | 0-n | high | unsigned char | 0xC0 | TAB_STAT_BF_4_TASTEN | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |

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

### FEHLERWERTE_BEDUFTER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Kurzschluss Schrittmotor |
| 2 | Unterbrechung/KS nach Plus Schrittmotor |
| 3 | Blockierung Schrittmotor |
| 4 | unbekannter Fehlerwert |
| 5 | Kurzschluss  Lüftermotor |
| 6 | Unterbrechung Lüftermotor |
| 7 | Blockierung Lüftermotor |
| 8 | unbekannter Fehlerwert |
| 9 | unbekannter Fehlerwert |
| 10 | Unplausible NTC-Widerstandswerte |
| 11 | unbekannter Fehlerwert |
| 12 | Unterspannung |
| 13 | Überspannung |
| 14 | unbekannter Fehlerwert |
| 15 | Signal ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x027800 | Energiesparmode aktiv | 0 | - |
| 0x027808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x027809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02780A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02780B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02780C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02780D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF78 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x0380C4 | Kältekreislauf: Drucktemperatursensor Hochdruck 1 - Plausibilität oder Komponentenfehler | 0 | - |
| 0x0380C5 | Kältekreislauf: Drucktemperatursensor Hochdruck 1 Wert(e) ausserhalb des gültigen Wertebereichs | 0 | - |
| 0x0380C7 | Kältekreislauf: Drucktemperatursensor Niederdruck 1 - Plausibilität oder Komponentenfehler | 0 | - |
| 0x0380C8 | Kältekreislauf: Drucktemperatursensor Niederdruck 1 Wert(e) ausserhalb des gültigen Wertebereichs | 0 | - |
| 0x0380CA | Kältekreislauf: Expansionsventil 1 - Plausibilität oder Komponentenfehler | 0 | - |
| 0x801100 | Motor Frischluft oder Frischluft-Umluft: Blockierung | 0 | - |
| 0x801101 | Motor Frischluft oder Frischluft-Umluft: interner Motorfehler | 0 | - |
| 0x801102 | Motor Frischluft oder Frischluft-Umluft: Initialisierungsfehler | 0 | - |
| 0x801103 | Motor Umluft: Blockierung | 0 | - |
| 0x801104 | Motor Umluft: interner Motorfehler | 0 | - |
| 0x801105 | Motor Umluft: Initialisierungsfehler | 0 | - |
| 0x801106 | Motor Entfrostung oder Belüftung/Entfrostung: Blockierung | 0 | - |
| 0x801107 | Motor Entfrostung oder Belüftung/Entfrostung: interner Motorfehler | 0 | - |
| 0x801108 | Motor Entfrostung oder Belüftung/Entfrostung: Initialisierungsfehler | 0 | - |
| 0x801109 | Motor Belüftung links oder Belüftung-Fussraum: Blockierung | 0 | - |
| 0x80110A | Motor Belüftung links oder Belüftung-Fussraum: Initialisierungsfehler | 0 | - |
| 0x80110B | Motor Belüftung links oder Belüftung-Fussraum: Interner Motorfehler | 0 | - |
| 0x80110C | Motor Belüftung rechts: Blockierung | 0 | - |
| 0x80110D | Motor Belüftung rechts: interner Motorfehler | 0 | - |
| 0x80110E | Motor Belüftung rechts: Initialisierungsfehler | 0 | - |
| 0x80110F | Motor Schichtung links oder Schichtung: Blockierung | 0 | - |
| 0x801110 | Motor Schichtung links oder Schichtung: interner Motorfehler | 0 | - |
| 0x801111 | Motor Schichtung links oder Schichtung: Initialisierungsfehler | 0 | - |
| 0x801112 | Motor Schichtung rechts: Blockierung | 0 | - |
| 0x801113 | Motor Schichtung rechts: interner Motorfehler | 0 | - |
| 0x801114 | Motor Schichtung rechts: Initialisierungsfehler | 0 | - |
| 0x801115 | Motor Fussraum links oder Fussraum: Blockierung | 0 | - |
| 0x801116 | Motor Fussraum links oder Fussraum: interner Motorfehler | 0 | - |
| 0x801117 | Motor Fussraum links oder Fussraum: Initialisierungsfehler | 0 | - |
| 0x801118 | Motor Fussraum rechts: Blockierung | 0 | - |
| 0x801119 | Motor Fussraum rechts: interner Motorfehler | 0 | - |
| 0x80111A | Motor Fussraum rechts: Initialisierungsfehler | 0 | - |
| 0x80111B | Motor Luftverteilung hinten links oder Luftverteilung hinten: Blockierung | 0 | - |
| 0x80111C | Motor Luftverteilung hinten links oder Luftverteilung hinten: interner Motorfehler | 0 | - |
| 0x80111D | Motor Luftverteilung hinten links oder Luftverteilung hinten: Initialisierungsfehler | 0 | - |
| 0x80111E | Motor Luftverteilung hinten rechts: Blockierung | 0 | - |
| 0x80111F | Motor Luftverteilung hinten rechts: interner Motorfehler | 0 | - |
| 0x801120 | Motor Luftverteilung hinten rechts: Initialisierungsfehler | 0 | - |
| 0x801121 | Motor Mischluft links oder Mischluft: Blockierung | 0 | - |
| 0x801122 | Motor Mischluft links oder Mischluft: Initialisierungsfehler | 0 | - |
| 0x801123 | Motor Mischluft links oder Mischluft: interner Motorfehler | 0 | - |
| 0x801124 | Motor Mischluft rechts: Blockierung | 0 | - |
| 0x801125 | Motor Mischluft rechts: interner Motorfehler | 0 | - |
| 0x801126 | Motor Mischluft rechts: Initialisierungsfehler | 0 | - |
| 0x801127 | Motor Mischluft hinten links oder Mischluft hinten: Blockierung | 0 | - |
| 0x801128 | Motor Mischluft hinten links oder Mischluft hinten: interner Motorfehler | 0 | - |
| 0x801129 | Motor Mischluft hinten links oder Mischluft hinten: Initialisierungsfehler | 0 | - |
| 0x80112A | Motor Mischluft hinten rechts: Blockierung | 0 | - |
| 0x80112B | Motor Mischluft hinten rechts: interner Motorfehler | 0 | - |
| 0x80112C | Motor Mischluft hinten rechts: Initialisierungsfehler | 0 | - |
| 0x80112D | Motor Temperatur-Luftmenge hinten: Blockierung | 0 | - |
| 0x80112E | Motor Temperatur-Luftmenge hinten: interner Motorfehler | 0 | - |
| 0x80112F | Motor Temperatur-Luftmenge hinten: Initialisierungsfehler | 0 | - |
| 0x801136 | Motor Indirekte Belüftung: Blockierung | 0 | - |
| 0x801137 | Motor Indirekte Belüftung: interner Motorfehler | 0 | - |
| 0x801138 | Motor Indirekte Belüftung: Initialisierungsfehler | 0 | - |
| 0x801139 | Motor Luftverteilung links oder Luftverteilung: Blockierung | 0 | - |
| 0x80113A | Motor Luftverteilung links oder Luftverteilung: interner Motorfehler | 0 | - |
| 0x80113B | Motor Luftverteilung links oder Luftverteilung: Initialisierungsfehler | 0 | - |
| 0x80113C | Motor Luftverteilung rechts: Blockierung | 0 | - |
| 0x80113D | Motor Luftverteilung rechts: interner Motorfehler | 0 | - |
| 0x80113E | Motor Luftverteilung rechts: Initialisierungsfehler | 0 | - |
| 0x80113F | Motor Zentralantrieb: Blockierung | 0 | - |
| 0x801140 | Motor Zentralantrieb: interner Motorfehler | 0 | - |
| 0x801141 | Motor Zentralantrieb: Initialisierungsfehler | 0 | - |
| 0x80115E | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 | - |
| 0x80115F | Mischverbau: Klappenmotoren von verschiedenen Hersteller erkannt | 0 | - |
| 0x801160 | Verdampfertemperatursensor: Kurzschluss nach Minus | 0 | - |
| 0x801161 | Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801162 | Verdampfertemperatursensor: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x801163 | Verdampfertemperatursensor: Plausibilität | 0 | - |
| 0x801164 | Verdampfertemperatursensor: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x801168 | Belüftungstemperatursensor links oder Belüftungstemperatursensor: Kurzschluss nach Minus | 0 | - |
| 0x801169 | Belüftungstemperatursensor links oder Belüftungstemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80116A | Belüftungstemperatursensor rechts: Kurzschluss nach Minus | 0 | - |
| 0x80116B | Belüftungstemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80116C | Fussraumtemperatursensor links oder Fussraumtemperatursensor: Kurzschluss nach Minus | 0 | - |
| 0x80116D | Fussraumtemperatursensor links oder Fussraumtemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80116E | Fussraumtemperatursensor rechts: Kurzschluss nach Minus | 0 | - |
| 0x80116F | Fussraumtemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801170 | Belüftungstemperatursensor hinten: Kurzschluss nach Masse | 0 | - |
| 0x801171 | Belüftungstemperatursensor hinten: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801172 | Fussraumtemperatursensor hinten: Kurzschluss nach Masse | 0 | - |
| 0x801173 | Fussraumtemperatursensor hinten: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801180 | BDC Drucksensor Kältemittel: Plausibilität | 0 | - |
| 0x801181 | BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 | - |
| 0x801182 | BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 | - |
| 0x801183 | BDC Drucksensor Kältemittel: Kurzschluss nach Masse | 0 | - |
| 0x801184 | BDC Drucksensor Kältemittel: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801190 | AC-LIN: ZUSATZ_WP_LIN antwortet nicht | 0 | - |
| 0x801191 | ZUSATZ_WP_LIN: Übertemperatur erkannt | 1 | - |
| 0x801192 | ZUSATZ_WP_LIN: Trockenlauf erkannt | 1 | - |
| 0x801193 | ZUSATZ_WP_LIN: Über- oder Unterspannung erkannt | 1 | - |
| 0x801194 | ZUSATZ_WP_LIN: Blockierung erkannt | 1 | - |
| 0x801195 | ZUSATZ_WP_LIN: Überstromabschaltung erkannt | 1 | - |
| 0x801196 | ZUSATZ_WP_LIN: Interner Fehler erkannt | 0 | - |
| 0x801197 | ZUSATZ_WP_LIN: Kommunikationsfehler | 0 | - |
| 0x801198 | Gebläseendstufe: Interner Fehler | 0 | - |
| 0x801199 | Gebläseendstufe: Kurzschluss oder blockiert | 0 | - |
| 0x80119A | Gebläseendstufe: Übertemperaturbegrenzung aktiv | 1 | - |
| 0x8011A0 | Schichtungspotentiometer links: Kurzschluss nach Minus | 0 | - |
| 0x8011A1 | Schichtungspotentiometer links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x8011A2 | Schichtungspotentiometer rechts: Kurzschluss nach Minus | 0 | - |
| 0x8011A3 | Schichtungspotentiometer rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x8011B8 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 1 | - |
| 0x8011B9 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 | - |
| 0x8011BB | eKMV: OBD Temperatursensor Platine 1 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011BC | eKMV: OBD Temperatursensor Platine 1 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011BD | eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 | - |
| 0x8011C4 | eKMV: OBD HV-Spannungssensor Kurzschluss nach Minus | 0 | - |
| 0x8011C5 | eKMV: OBD HV-Spannungssensor Kurzschluss nach Plus | 0 | - |
| 0x8011C7 | eKMV: OBD HV-Spannungssensor oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011C8 | eKMV: OBD HV-Spannungssensor unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011C9 | eKMV: OBD HV-Spannungssensor Plausibilität | 0 | - |
| 0x8011CA | eKMV: OBD Spannungssensor am Motortreiber Kurzschluss nach Minus | 0 | - |
| 0x8011CB | eKMV: OBD Spannungssensor am Motortreiber Kurzschluss nach Plus | 0 | - |
| 0x8011CD | eKMV: OBD Spannungssensor am Motortreiber oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011CE | eKMV: OBD Spannungssensor am Motortreiber unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D0 | eKMV: OBD Stromsensor Phase 1 Kurzschluss nach Minus | 0 | - |
| 0x8011D1 | eKMV: OBD Stromsensor Phase 1 Kurzschluss nach Plus | 0 | - |
| 0x8011D3 | eKMV: OBD Stromsensor Phase 1 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D4 | eKMV: OBD Stromsensor Phase 1 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011D5 | eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 | - |
| 0x8011D6 | eKMV: OBD Stromsensor Phase 2 Kurzschluss nach Minus | 0 | - |
| 0x8011D7 | eKMV: OBD Stromsensor Phase 2 Kurzschluss nach Plus | 0 | - |
| 0x8011D9 | eKMV: OBD Stromsensor Phase 2 oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011DA | eKMV: OBD Stromsensor Phase 2 unterhalb des gültigen Wertebereiches | 0 | - |
| 0x8011DB | eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 | - |
| 0x8011E2 | eKMV: OBD Speicherfehler RAM | 0 | - |
| 0x8011E3 | eKMV: OBD Speicherfehler ROM | 0 | - |
| 0x8011E4 | eKMV: OBD Speicherfehler EEPROM | 0 | - |
| 0x8011E5 | eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x8011E6 | eKMV: OBD Softwarefehler Watchdog | 0 | - |
| 0x8011E7 | eKMV: OBD Fehler Micro-Controller-Peripherie | 0 | - |
| 0x8011E8 | eKMV: OBD Stromsensor HV-DC Kurzschluss zu Masse | 0 | - |
| 0x8011E9 | eKMV: OBD Stromsensor HV-DC Kurzschluss zu Batterie | 0 | - |
| 0x8011EA | eKMV: OBD Stromsensor HV-DC Unterbrechung | 0 | - |
| 0x8011EB | eKMV: OBD Stromsensor HV-DC oberhalb des gültigen Wertebereiches | 0 | - |
| 0x8011ED | eKMV: OBD Stromsensor HV-DC Plausibilität | 0 | - |
| 0x8011F3 | eKMV: OBD Funktionsprüfung eKMV | 0 | - |
| 0x8011F4 | OBDM:eKMV Kommunikationsfehler Diagnose-Statusnachricht | 1 | - |
| 0x8011F5 | OBDM:eKMV Timeout OBD Diagnosebotschaft | 1 | - |
| 0x8011F6 | OBDM:eKMV OBD Diagnosebotschaft - Alive Counter Fehler | 1 | - |
| 0x8011FC | eKMV: Leistungsminderung oder Abschaltung während HV-Batteriekühlung aufgrund eKMV interner Betriebstrategie. | 0 | - |
| 0x801208 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 | - |
| 0x801209 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 | - |
| 0x80120A | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 | - |
| 0x80120B | Kompressor: Abschaltung wegen Unterdruck im Kältemittelkreislauf | 0 | - |
| 0x80120C | eKMV: Abschaltung wegen Elektronikfehler | 1 | - |
| 0x80120E | eKMV: Abschaltung wegen Über- oder Unterspannung HV-Versorgung | 1 | - |
| 0x80120F | eKMV: Abschaltung wegen kritischer Übertemperatur Umrichter | 1 | - |
| 0x801210 | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Klima | 1 | - |
| 0x801211 | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Hochvoltspeicher | 1 | - |
| 0x801212 | eKMV: Abschaltung wegen Anlaufprobleme | 0 | - |
| 0x801213 | eKMV: Leistungsreduzierung vom Kühl- oder Heizbetrieb durch Powermanagement | 1 | - |
| 0x801216 | Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Unterdruck | 0 | - |
| 0x801217 | Kompressor: Abschaltung Kältemittelverdichter während Speicherkühlung aufgrund von Kältekreislauf Überdruck | 0 | - |
| 0x801228 | IHKA Bedienteil: Interner Fehler | 0 | - |
| 0x801229 | IHKA Bedienteil: Falsche Variante verbaut | 0 | - |
| 0x80122A | IHKA Bedienteil: ext. UIF-Sensor (KBFG): Kurzschluss oder Unterbrechung | 0 | - |
| 0x801230 | Ionisator: Interner Modulfehler | 0 | - |
| 0x801231 | Ionisator: Emmitent(en) nicht gesteckt | 0 | - |
| 0x801238 | Bedufter: Interner Modulfehler | 0 | - |
| 0x801240 | PTC-Modul vorn: Kurzschluss im Heizstrang | 0 | - |
| 0x801242 | PTC-Modul vorn: Übertemperatur | 1 | - |
| 0x801244 | PTC-Modul vorn: Unter- oder Überspannung | 0 | - |
| 0x801246 | PTC-Modul vorn: Unterbrechung im Heizstrang | 0 | - |
| 0x801249 | eDH: interner eDH-Fehler | 0 | - |
| 0x80124A | eDH: LIN-Timeout | 1 | - |
| 0x80124B | eDH: HV-Spannungssensor über Betriebsbereich | 1 | - |
| 0x80124C | eDH: HV-Spannungssensor unter Betriebsbereich | 1 | - |
| 0x80124D | eDH: Degradation | 0 | - |
| 0x80124E | eDH: Verriegelung wg. Systemfehler Kühlmittelfluss | 0 | - |
| 0x80124F | eDH: Niederspannungsfehler/unplausible Prozessorkommunikation | 0 | - |
| 0x801250 | eDH: Temperaturfühler Kühlmittel Kurzschluss/Leitungsunterbrechung | 0 | - |
| 0x801252 | eDH: Temperaturfühler Platine Kurzschluss/Leitungsunterbrechung | 0 | - |
| 0x801253 | eDH: Temperaturfühler Platine ausserhalb Betriebsbereich | 0 | - |
| 0x801254 | eDH: OBD Temperaturfühler Platine - Plausibilitätsfehler | 0 | - |
| 0x801255 | eDH: OBD Funktionsprüfung eDH | 0 | - |
| 0x801256 | eDH: OBD Temperaturfühler Kühlmittel - Kurzschluss nach Minus | 0 | - |
| 0x801257 | eDH: OBD Temperaturfühler Kühlmittel - Kurzschluss nach Plus | 0 | - |
| 0x801258 | eDH: OBD Temperaturfühler Kühlmittel - Leitungsunterbrechung | 0 | - |
| 0x801259 | eDH: OBD Temperaturfühler Kühlmittel - oberhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x80125A | eDH: OBD Temperaturfühler Kühlmittel - unterhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x80125B | eDH: OBD Temperaturfühler Kühlmittel - Plausibilitätsfehler | 0 | - |
| 0x80125C | eDH: OBD Temperaturfühler Platine - Kurzschluss nach Minus | 0 | - |
| 0x80125D | eDH: OBD Temperaturfühler Platine - Kurzschluss nach Plus | 0 | - |
| 0x80125F | eDH: OBD Temperaturfühler Platine - oberhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x801260 | eDH: OBD Temperaturfühler Platine - unterhalb des spezifizierten Betriebsbereichs | 0 | - |
| 0x801263 | eDH: OBD Speicherfehler RAM | 0 | - |
| 0x801264 | eDH: OBD Speicherfehler ROM | 0 | - |
| 0x801265 | eDH: OBD Speicherfehler EEPROM | 0 | - |
| 0x801266 | eDH: OBD Softwarefehler Laufzeitüberwachung | 0 | - |
| 0x801267 | eDH: OBD Softwarefehler Watchdog | 0 | - |
| 0x801268 | eDH: OBD Fehler in der Micro-Controller-Peripherie | 0 | - |
| 0x801269 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Minus | 0 | - |
| 0x80126A | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Kurzschluss nach Plus | 0 | - |
| 0x80126E | eDH: OBD Spannungssensor zwischen Mosfets Kanal 1 - Plausibilitätsfehler | 0 | - |
| 0x80126F | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Minus | 0 | - |
| 0x801270 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Kurzschluss nach Plus | 0 | - |
| 0x801274 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 2 - Plausibilitätsfehler | 0 | - |
| 0x801275 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Minus | 0 | - |
| 0x801276 | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Kurzschluss nach Plus | 0 | - |
| 0x80127A | eDH: OBD Spannungssensor zwischen Mosfets Kanal 3 - Plausibilitätsfehler | 0 | - |
| 0x80127B | eDH: OBD Stromsensor 1  Kurzschluss nach Minus | 0 | - |
| 0x80127C | eDH: OBD Stromsensor 1 Kurzschluss nach Plus | 0 | - |
| 0x801280 | eDH: OBD Stromsensor 1  Plausibilitätsfehler | 0 | - |
| 0x801281 | eDH: OBD Stromsensor 2 Kurzschluss nach Minus | 0 | - |
| 0x801282 | eDH: OBD Stromsensor 2 Kurzschluss nach Plus | 0 | - |
| 0x801286 | eDH: OBD Stromsensor 2 Plausibilitätsfehler | 0 | - |
| 0x801287 | eDH: OBD Stromsensor 3 Kurzschluss nach Minus | 0 | - |
| 0x801288 | eDH: OBD Stromsensor 3 Kurzschluss nach Plus | 0 | - |
| 0x80128C | eDH: OBD Stromsensor 3 Plausibilitätsfehler | 0 | - |
| 0x80128D | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Minus | 0 | - |
| 0x80128E | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Kurzschluss nach Plus | 0 | - |
| 0x801292 | eDH: OBD Spannungssensor oberhalb Mosfets 1 - Plausibilität | 0 | - |
| 0x801293 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Minus | 0 | - |
| 0x801294 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Kurzschluss nach Plus | 0 | - |
| 0x801298 | eDH: OBD Spannungssensor oberhalb Mosfets 2 - Plausibilität | 0 | - |
| 0x801299 | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Minus | 0 | - |
| 0x80129A | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Kurzschluss nach Plus | 0 | - |
| 0x80129E | eDH: OBD Spannungssensor oberhalb Mosfets 3 - Plausibilität | 0 | - |
| 0x80129F | eDH: OBD HV Spannungssensor Kurzschluss nach Minus | 0 | - |
| 0x8012A0 | eDH: OBD HV Spannungssensor Kurzschluss nach Plus | 0 | - |
| 0x8012A2 | eDH: OBD HV-Spannungssensor - über Betriebsbereich | 1 | - |
| 0x8012A3 | eDH: OBD HV-Spannungssensor - unter Betriebsbereich | 1 | - |
| 0x8012A4 | eDH: OBD HV Spannungssensor Plausibilitätsfehler | 0 | - |
| 0x8012A5 | OBDM:eDH Kommunikationsfehler Diagnose-Statusnachricht | 1 | - |
| 0x8012A6 | OBDM:eDH Timeout OBD Diagnosebotschaft | 1 | - |
| 0x8012A7 | OBDM:eDH OBD Diagnosebotschaft - Alive Counter Fehler | 1 | - |
| 0x8012F1 | OBD: Kältekreislauf - HV-Batterie - Kühlleistung unplausibel | 0 | - |
| 0x801308 | AC-LIN Spannungsversorgung: Kurzschluss nach Masse | 0 | - |
| 0x801309 | AC-LIN Spannungsversorgung: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80130A | Keine Kommunikation über AC-LIN möglich | 0 | - |
| 0x80130B | Keine Kommunikation über AC-LIN2 möglich | 0 | - |
| 0x80130D | Keine Kommunikation über K-LIN möglich | 0 | - |
| 0x801310 | Interner Steuergerätefehler | 0 | - |
| 0x801318 | IHKA: 12V Unterspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0x801319 | IHKA: 12V Überspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0x80131A | IHKA: 12V Spannungssensor Kurzschluss nach Masse oder Leitungsunterbrechung. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x80131C | IHKA: 12V Spannungssensor Plausibilität. (OBD-relevant für Hybridfahrzeuge.) | 0 | - |
| 0x801328 | Standklimatisierung: Abbruch wegen Fehler im eKMV | 0 | - |
| 0x801329 | Standklimatisierung: Abbruch, Verhinderung wegen Niedervolt-Powermanagement (Verbraucherabschaltung) | 1 | - |
| 0x80132A | Standklimatisierung: Abbruch oder Einschaltverhinderung wegen Hochvoltpowermanagement (HVPM) | 1 | - |
| 0x80132B | Standklimatisierung: Abbruch wegen Fehler im eDH | 0 | - |
| 0x80132D | Standklimatisierung: Abbruch wegen Fehler am Kältemittelabsperrventil | 0 | - |
| 0x80132E | Standklimatisierung: Funktionsabschaltung - Maximale Laufzeit erreicht ODER Voraussetzungen nicht mehr erfüllt | 1 | - |
| 0x80132F | Standklimatisierung: Remote-Engine-Start nicht möglich/Abbruch | 1 | - |
| 0x801338 | Heizung dritte Sitzreihe: Interner Komponentenfehler | 0 | - |
| 0x801339 | Heizung dritte Sitzreihe, PTC-Modul: Unterbrechung | 0 | - |
| 0x80133A | Heizung dritte Sitzreihe, PTC-Modul: Kurzschluss | 0 | - |
| 0x80133B | Heizung dritte Sitzreihe, Gebläse: Kurzschluss | 0 | - |
| 0x80133C | Heizung dritte Sitzreihe, Gebläse: Unterbrechung | 0 | - |
| 0x801340 | SenseTouch links: interner Komponentenfehler | 0 | - |
| 0x801341 | SenseTouch rechts: interner Komponentenfehler | 0 | - |
| 0x801348 | Belüftungstemperatursensor hinten links: Kurzschluss nach Masse | 0 | - |
| 0x801349 | Belüftungstemperatursensor hinten links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80134A | Belüftungstemperatursensor hinten rechts: Kurzschluss nach Masse | 0 | - |
| 0x80134B | Belüftungstemperatursensor hinten rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80134C | Fussraumtemperatursensor hinten links: Kurzschluss nach Masse | 0 | - |
| 0x80134D | Fussraumtemperatursensor hinten links: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x80134E | Fussraumtemperatursensor hinten rechts: Kurzschluss nach Masse | 0 | - |
| 0x80134F | Fussraumtemperatursensor hinten rechts: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801351 | Belüftungstemperatursensor 3. Sitzreihe: Kurzschluss nach Masse | 0 | - |
| 0x801352 | Belüftungstemperatursensor 3. Sitzreihe: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801353 | Fussraumtemperatursensor 3. Sitzreihe: Kurzschluss nach Masse | 0 | - |
| 0x801354 | Fussraumtemperatursensor 3. Sitzreihe: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x801358 | Gebläseendstufe, PWM-Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x801359 | Gebläseendstufe, PWM-Signalleitung: Kurzschluss nach Plus | 0 | - |
| 0x801368 | FKA Bedienteil: Interner Fehler | 0 | - |
| 0x801369 | FKA Bedienteil: Falsche Variante verbaut | 0 | - |
| 0x80136C | FKA Bedienteil 3. Sitzreihe: Interner Fehler | 0 | - |
| 0x80136D | FKA Bedienteil 3. Sitzreihe: Falsche Variante verbaut | 0 | - |
| 0x801390 | Standheizgerät, Brennluftgebläse: Blockierschutz | 0 | - |
| 0x801391 | Standheizgerät, Wasserpumpe: Kurzschluß nach Plus oder Unterbrechung | 0 | - |
| 0x801392 | Standheizgerät, Wasserpumpe: Kurzschluß nach Masse | 0 | - |
| 0x801393 | Standheizgerät, Umschaltventil: Kurzschluß nach Plus oder Unterbrechung | 0 | - |
| 0x801394 | Standheizgerät, Umschaltventil: Kurzschluß nach Masse | 0 | - |
| 0x801395 | Standheizgerät, Dosierpumpe: Kurschluß nach Plus oder Unterbrechung | 0 | - |
| 0x801396 | Standheizgerät, Dosierpumpe: Kurzschluß nach Masse | 0 | - |
| 0x801397 | Standheizgerät: Überspannung erkannt | 1 | - |
| 0x801398 | Standheizgerät: Unterspannung erkannt | 1 | - |
| 0x801399 | Standheizgerät: Überhitzung (Heizgerät verriegelt) | 0 | - |
| 0x80139A | Standheizgerät: Heizgerät verriegelt | 0 | - |
| 0x80139B | Standheizgerät: Flammabbruch | 0 | - |
| 0x80139C | Standheizgerät: Flammabbruch - wiederholter Abbruch im Heizzyklus | 0 | - |
| 0x80139D | Standheizgerät: Flamme - kein Start | 0 | - |
| 0x80139E | Standheizgerät: LIN-Kommunikation - Bit Error | 1 | - |
| 0x80139F | Standheizgerät: LIN-Kommunikation - Signal mit Ungültigkeitssignatur | 1 | - |
| 0x8013A0 | Standheizgerät: Überschreitung der max. Heizzeitvorgabe | 1 | - |
| 0x8013A2 | Standheizgerät: Systembedingte Abschaltung - Tankreserve erreicht | 1 | - |
| 0x8013A3 | Standheizgerät: Unzureichender Kühlmitteldurchfluss  (Heizwasserkreislauf) | 0 | - |
| 0x8013A4 | Standheizgerät: Falsches Heizgerät (Kraftstoffvariante) verbaut | 0 | - |
| 0x8013A5 | Standheizgerät: Interner Fehler (Sensoren, Aktoren, Elektronik) | 0 | - |
| 0x8013F9 | PWF Messemodus aktiv | 0 | - |
| 0x8013FA | Micro-Controller Peripherie Fehler (IHKA) | 0 | - |
| 0x8013FB | RAM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FC | ROM/Flash Speicher Fehler (IHKA) | 0 | - |
| 0x8013FD | EEPROM Speicher Fehler (IHKA) | 0 | - |
| 0x8013FE | Software Laufzeitfehler (IHKA) | 0 | - |
| 0x8013FF | Software Watchdogfehler (IHKA) | 0 | - |
| 0xE70415 | IuK-CAN Physikalischer Busfehler | 0 | - |
| 0xE7041E | IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE70C00 | AC-LIN: Motor Frischluft oder Frischluft-Umluft antwortet nicht | 0 | - |
| 0xE70C01 | AC-LIN: Motor Umluft antwortet nicht | 0 | - |
| 0xE70C02 | AC-LIN: Motor Entfrostung  oder Belüftung/Entfrostung antwortet nicht | 0 | - |
| 0xE70C03 | AC-LIN: Motor Belüftung links oder Belüftung-Fussraum antwortet nicht | 0 | - |
| 0xE70C04 | AC-LIN: Motor Belüftung rechts antwortet nicht | 0 | - |
| 0xE70C05 | AC-LIN: Motor Schichtung links oder Schichtung antwortet nicht | 0 | - |
| 0xE70C06 | AC-LIN: Motor Schichtung rechts antwortet nicht | 0 | - |
| 0xE70C07 | AC-LIN: Motor Fussraum links oder Fussraum antwortet nicht | 0 | - |
| 0xE70C08 | AC-LIN: Motor Fussraum rechts antwortet nicht | 0 | - |
| 0xE70C09 | AC-LIN: Motor Luftverteilung hinten links oder Luftverteilung hinten antwortet nicht | 0 | - |
| 0xE70C0A | AC-LIN: Motor Luftverteilung hinten rechts antwortet nicht | 0 | - |
| 0xE70C0B | AC-LIN: Motor Mischluft links oder Mischluft antwortet nicht | 0 | - |
| 0xE70C0C | AC-LIN: Motor Mischluft rechts antwortet nicht | 0 | - |
| 0xE70C0D | AC-LIN: Motor Mischluft hinten links oder Mischluft hinten antwortet nicht | 0 | - |
| 0xE70C0E | AC-LIN: Motor Mischluft hinten rechts antwortet nicht | 0 | - |
| 0xE70C0F | AC-LIN: Motor Temperatur-Luftmenge hinten antwortet nicht | 0 | - |
| 0xE70C12 | AC-LIN: Motor Indirekte Belüftung antwortet nicht | 0 | - |
| 0xE70C13 | AC-LIN: Motor Luftverteilung links oder Luftverteilung antwortet nicht | 0 | - |
| 0xE70C14 | AC-LIN: Motor Luftverteilung rechts antwortet nicht | 0 | - |
| 0xE70C15 | AC-LIN: Motor Zentralantrieb antwortet nicht | 0 | - |
| 0xE70C2D | AC-LIN: Gebläseendstufe antwortet nicht | 0 | - |
| 0xE70C2E | AC-LIN: Elektrischer Zuheizer antwortet nicht | 0 | - |
| 0xE70C2F | AC-LIN: Standheizung antwortet nicht | 0 | - |
| 0xE70C30 | AC-LIN: eKMV antwortet nicht | 0 | - |
| 0xE70C32 | K-LIN: IHKA-Bedienteil antwortet nicht | 0 | - |
| 0xE70C33 | K-LIN: FKA-Bedienteil antwortet nicht | 0 | - |
| 0xE70C34 | K-LIN: FKA-Bedienteil 3. Sitzreihe antwortet nicht | 0 | - |
| 0xE70C3A | AC-LIN: EDH antwortet nicht | 0 | - |
| 0xE70C3B | AC-LIN: Ionisator antwortet nicht | 0 | - |
| 0xE70C3C | AC-LIN: Bedufter antwortet nicht | 0 | - |
| 0xE70C3D | K-LIN: Heizung dritte Sitzreihe antwortet nicht | 0 | - |
| 0xE70C3E | K-LIN: SenseTouch Modul links antwortet nicht | 0 | - |
| 0xE70C3F | K-LIN: SenseTouch Modul rechts antwortet nicht | 0 | - |
| 0xE70C40 | AC-LIN: PT-Sensor Niederdruck 1 antwortet nicht | 0 | - |
| 0xE70C41 | AC-LIN: PT-Sensor Hochdruck 1 antwortet nicht | 0 | - |
| 0xE70C44 | AC-LIN: elekt. Expansionsventil (Chiller) antwortet nicht | 0 | - |
| 0xE71400 | Botschaft (0x2CA, Außentemperatur): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71401 | Botschaft (0x202, Dimmung): Ausfall | 1 | - |
| 0xE71402 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71403 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 | - |
| 0xE71405 | Botschaft (0x393, LCD Helligkeit Regelung): Ausfall | 1 | - |
| 0xE71406 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 | - |
| 0xE71407 | Botschaft (0x3D3, Status Solarsensor): Ausfall | 1 | - |
| 0xE71408 | Botschaft (0x22A, Status BFS): Ausfall | 1 | - |
| 0xE71409 | Botschaft (0x2D2 Status Druck Kältekreislauf): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE7140A | Botschaft (0x232, Status FAS): Ausfall | 1 | - |
| 0xE7140B | Botschaft (0x2D1, Status Beschlag Scheibe V): Ausfall | 1 | - |
| 0xE7140D | Botschaft (0x2D3, Status Schichtung Fond): Ausfall | 1 | - |
| 0xE7140E | Botschaft (0x2D0, Status Sensor AUC): Ausfall | 1 | - |
| 0xE71410 | Botschaft (0x2D6, Status Ventil Klimakompressor): Ausfall | 1 | - |
| 0xE71411 | Botschaft (0x2CF, Status Zusatzwasserpumpe): Ausfall | 1 | - |
| 0xE71413 | Botschaft (0x0A5, Drehmoment Kurbelwelle 1): Ausfall | 1 | - |
| 0xE71414 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 | - |
| 0xE71415 | Botschaft (0x3FB, Daten Antriebsstrang 1): Ausfall | 1 | - |
| 0xE71416 | Botschaft (0x1B9, Wärmemanagement Motorsteuerung): Ausfall | 1 | - |
| 0xE71417 | Signal (Temperatur_Außen in 0x2CA): ungültig empfangen | 1 | - |
| 0xE71418 | Signal (Steuerung_Beleuchtung_Schalter in 0x202): ungültig empfangen | 1 | - |
| 0xE7141A | Signal (Temperatur_Motor_Antrieb in 0x3F9): ungültig empfangen | 1 | - |
| 0xE7141C | Signal (Status_Solarsensor_BF in 0x3D3): ungültig empfangen | 1 | - |
| 0xE7141D | Signal (Status_Solarsensor_FA in 0x3D3): ungültig empfangen | 1 | - |
| 0xE7141E | Signal (Status_Sitzheizung_BF in 0x22A): ungültig empfangen | 1 | - |
| 0xE7141F | Signal (Status_Sitzklima_BF in 0x22A): ungültig empfangen | 1 | - |
| 0xE71420 | Signal (Daten_Drucksensor_Kältekreislauf in 0x2D2): ungültig empfangen | 1 | - |
| 0xE71421 | Signal (Status_Sitzheizung_FA in 0x232): ungültig empfangen | 1 | - |
| 0xE71422 | Signal (Status_Sitzklima_FA in 0x232): ungültig empfangen | 1 | - |
| 0xE71423 | Signal (Daten_Beschlag_Scheibe_V in 0x2D1): ungültig empfangen | 1 | - |
| 0xE71427 | Signal (Daten_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 | - |
| 0xE71428 | Signal (Status_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 | - |
| 0xE71429 | Signal (Daten_Sensor_AUC in 0x2D0): ungültig empfangen | 1 | - |
| 0xE7142C | Signal (Status_Klima_Kompressor_Kupplung in 0x2D6): ungültig empfangen | 1 | - |
| 0xE7142D | Signal (Status_Zusatzwasserpumpe in 0x2CF): ungültig empfangen | 1 | - |
| 0xE71431 | Signal (Ist_Drehzahl_Motor_Kurbelwelle in 0x0A5): ungültig empfangen | 1 | - |
| 0xE71432 | Signal (Geschwindigkeit_Fahrzeug_Schwerpunkt in 0x1A1): ungültig empfangen | 1 | - |
| 0xE71433 | Signal (Ziel_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 | - |
| 0xE71434 | Signal (Dämpfung_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 | - |
| 0xE71436 | Signal (Steuerung_Standverbraucher in 0x3B3): ungültig empfangen | 1 | - |
| 0xE71439 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE7143A | Botschaft (0x38C, Steuerung Klimakompressor): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE7143B | Signal (Freigabe_Klimakompressor in 0x38C): ungültig empfangen | 1 | - |
| 0xE7143D | Botschaft (0x1FA, Status Hochvoltspeicher 1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE7143E | Signal (Ist_Temperatur_Wärmetauscher_Hochvoltspeicher  in 0x1FA): ungültig empfangen | 1 | - |
| 0xE7143F | Signal (Anforderung_Kühlung_Hochvoltspeicher in 0x1FA): ungültig empfangen | 1 | - |
| 0xE71440 | Botschaft (0x389, Status Ventil Hochvoltbatterie-Kühlung): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71441 | Signal (Status_Kälteabsperrventil_Klima in 0x389): ungültig empfangen | 1 | - |
| 0xE71448 | Botschaft (0x30B, Status Motor Start Auto): Ausfall | 1 | - |
| 0xE71449 | Signal (Status_Funktion_MSA in 0x30B): ungültig empfangen | 1 | - |
| 0xE7144A | Botschaft (0x1B2, Status Klima Kälteabsperrventile): Ausfall | 1 | - |
| 0xE7144B | Signal (Status_Kälteabsperrventil_Front in 0x1B2): ungültig empfangen | 1 | - |
| 0xE7144C | Signal (Status_Kälteabsperrventil_Fond in 0x1B2): ungültig empfangen | 1 | - |
| 0xE7144D | Signal (Daten_Temperatur_Scheibe_V in 0x2D1): ungültig empfangen | 1 | - |
| 0xE7144E | Botschaft (0x397, Diagnose OBD Motor): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE7144F | Botschaft (0x3E8, Diagnose OBD Motorsteuerung Elektrisch): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71450 | Botschaft (0x2DF, Freigabe Leistung Funktionen Klima 1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71451 | Botschaft (0x12F, Klemmen): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71452 | Botschaft (0x328, Relativzeit BN2020): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71453 | Botschaft (0x112, Status Hochvoltspeicher 2): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71455 | Botschaft (0x304, DME IBS_1): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71458 | AC-LIN: Botschaft (0x15, Status_Diagnose_System_EKMV20_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71459 | AC-LIN: Botschaft (0xD,Status_Diagnose_System_eDH_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71460 | Botschaft (0x432, Modus Spannungsgesteuert MOD_VC): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71461 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71462 | AC-LIN: Botschaft (0x11, Status_eDH_LIN ST_eDH_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71463 | AC-LIN: Botschaft (0x1F, Status_EKMV20_LIN ST_EKMV20_LIN): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 | - |
| 0xE71467 | AC-LIN:Botschaft (0x2E, DataPTSenHD1LIN): Alive-Counter / CRC-Fehler | 1 | - |
| 0xE71468 | AC-LIN:Botschaft (0x2F, DataPTSenND1LIN): Alive-Counter / CRC-Fehler | 1 | - |
| 0xE71470 | AC-LIN:Botschaft (0x2D, StatusExpansionValve1LIN): Alive-Counter / CRC-Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | ODBM_UW_JHUDM | 0-n | High | 0xFF | WERTETABELLE_OBDM_UW_JHUDM | - | - | - |
| 0x0002 | Aussentemperaturschwelle überschritten | 0/1 | High | 0x01 | - | - | - | - |
| 0x0003 | Fahrzeuggeschwindigkeitsgradientenschwelle überschritten | 0/1 | High | 0x02 | - | - | - | - |
| 0x0004 | Kältekreislauf Unter- oder Überdruck erkannt | 0/1 | High | 0x04 | - | - | - | - |
| 0x0005 | Abweichung zwischen eKMV-Temperatur und Aussentemperatur zu groß | 0/1 | High | 0x08 | - | - | - | - |
| 0x0006 | Abweichung benötigete und freigegebene elektische eKMV-Leistung zu groß | 0/1 | High | 0x10 | - | - | - | - |
| 0x0007 | HV-Spannung am eKMV zu klein | 0/1 | High | 0x20 | - | - | - | - |
| 0x0008 | eKMV Drehzahl zu gering | 0/1 | High | 0x40 | - | - | - | - |
| 0x0009 | Kältemittelabsperrventil am HVS geschlossen | 0/1 | High | 0x80 | - | - | - | - |
| 0x000C | STEPPER_INIT_ERRORCODES | 0/1 | High | 0xFF | - | - | - | - |
| 0x0010 | ST_AVL_COOL_HVSTO_1 | 0/1 | High | 0xC0 | - | - | - | - |
| 0x0011 | AVL_COOL_HVSTO_1 | 0/1 | High | 0x3F | - | - | - | - |
| 0x0012 | ST_AVL_COOL_HVSTO_2 | 0/1 | High | 0xC0 | - | - | - | - |
| 0x0013 | AVL_COOL_HVSTO_2 | 0/1 | High | 0x3F | - | - | - | - |
| 0x0014 | Begrenzung wegen Übertemperatur | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0015 | Begrenzung wegen Überstrom | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0016 | Abschaltung wegen Über-/Unterspannung | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0017 | Abschaltung wegen kritischer Übertemperatur | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0018 | Abschaltung wegen Drehmomentüberschreitung | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0019 | Abschaltung wegen LIN-Kommuniaktionsfehler | 0/1 | High | 0x0020 | - | - | - | - |
| 0x001A | Abschaltung wegen externem Versorgungsfehler | 0/1 | High | 0x0040 | - | - | - | - |
| 0x001B | Abschaltung wegen Fehler Inverterversorgung | 0/1 | High | 0x0080 | - | - | - | - |
| 0x001C | Abschaltung wegen Fehler Sensorik | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001D | Abschaltung wegen Kurzschluss | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001E | Abschaltung wegen Anlauffehler | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001F | UWB_ERR_REM_STA_DTL_BDC_Tab | 0-n | High | 0xFF000000 | TAB_ERR_REM_STA_DTL_BDC | - | - | - |
| 0x0020 | UWB_ERR_REM_STA_DTL_DME_Tab | 0-n | High | 0x0000FF00 | TAB_ERR_REM_STA_DTL_DME | - | - | - |
| 0x0021 | UWB_ERR_REM_STA_DTL_IHKA_Tab | 0-n | High | 0x000000FF | TAB_ERR_REM_STA_DTL_IHKA | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x400A | CPD_Ratio | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x400B | CPD_TAUSSEN | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x400C | UWB_CPD_ACCU_VVEHICLE_GRAD | km/h | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x400D | CPD_PKKL | bar | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x400E | BN_COMB_CPD | HEX | High | unsigned int | - | - | - | - |
| 0x4010 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4011 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4021 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4022 | Kältekreislaufdruck | bar | High | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x4023 | Abschaltung Kältekreislauf Status | 0-n | High | 0xFFFF | UWB_OBDR_EKMV_SHUTDOWN_REFRIGERANT_PRESSURE_STATUS_TABLE | - | - | - |
| 0x4024 | Maximale HV-Batt. temp am Ende der Diagnose | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4025 | Temperatur HV-Batterieverdampfer nach Ventil am Ende der Diagnose | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x4028 | PTSENS_DIAGDATA2_HD | HEX | High | unsigned int | - | - | - | - |
| 0x402B | PTSENS_DIAGDATA1_HD | HEX | High | unsigned char | - | - | - | - |
| 0x402C | EXV_DIAGDATA2 | HEX | High | unsigned int | - | - | - | - |
| 0x402E | EXV_DIAGDATA1 | HEX | High | unsigned char | - | - | - | - |
| 0x4031 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4032 | INNEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4033 | PTSENS_DIAGDATA2_ND | HEX | High | unsigned int | - | - | - | - |
| 0x4034 | PTSENS_DIAGDATA1_ND | HEX | High | unsigned char | - | - | - | - |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6002 | FUELLSTAND_TANK | l | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6007 | EDH_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6008 | SOLLPOSITION | Schritte | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6009 | ISTPOSITION | Schritte | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x600A | STAT_KLIMA_STAND | 0/1 | High | 0x01 | - | - | - | - |
| 0x600B | RQR_PFN | 0/1 | High | 0x01 | - | - | - | - |
| 0x600C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x600D | STEPPER_MEASURED_RANGE | Schritte | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD6FF | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HKLUSV_DIAG_PATH_N

| WERT | TEXT |
| --- | --- |
| 0x02 | Pfad_1 |
| 0x04 | Pfad_2 |
| 0x08 | Pfad_3 |
| 0x0e | Diagnose_Fehler |

### HKLUSV_KLEMMT_IN

| WERT | TEXT |
| --- | --- |
| 0 | Klemmt geschlossen |
| 1 | Klemmt offen |

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
| 0x0380C6 | Kältekreislauf:  Drucktemperatursensor Hochdruck 1  Sonstige Fehler | 0 | - |
| 0x0380C9 | Kältekreislauf:  Drucktemperatursensor Niederdruck 1  Sonstige Fehler | 0 | - |
| 0x0380CB | Kältekreislauf:  Expansionsventil 1  Sonstige Fehler | 0 | - |
| 0x781000 | Standheizgerät, Glühstift: Kurzschuß nach  Plus oder Unterbrechung | 0 | - |
| 0x781001 | Standheizgerät, Glühstift: Kurzschluß nach Masse | 0 | - |
| 0x781002 | Standheizgerät, Glühstift/Flammwächter: Referenzwiderstand nicht erreicht | 0 | - |
| 0x781003 | Standheizgerät, Brennluftgebläse: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x781004 | Standheizgerät, Brennluftgebläse: Kurzschluß nach Masse | 0 | - |
| 0x781005 | Standheizgerät, Temperatursensor: Kurzschluß nach Plus oder Unterbrechung | 0 | - |
| 0x781006 | Standheizgerät, Temperatursensor: Kurzschluß nach Masse | 0 | - |
| 0x781007 | Standheizgerät: Steuergerät defekt (RAM, ROM, SW) | 0 | - |
| 0x781008 | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Plus oder Unterbrechung | 0 | - |
| 0x781009 | Standheizgerät, Glühstift/Flammwächter: Fremdlicht (Wendel defekt/unterbrochen) | 0 | - |
| 0x78100A | Standheizgerät, Flammwächter: Kurzschluß nach Plus oder Unterbrechung | 0 | - |
| 0x78100B | Standheizgerät, Flammwächter: Kurzschluß nach Masse | 0 | - |
| 0x78100C | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Masse | 0 | - |
| 0x78100D | Standheizgerät: Erneute Flammbildung erfolgreich | 1 | - |
| 0x781010 | IHKA Bedienteil:Variantenfehler Anzahl Gebläsewippen | 0 | - |
| 0x781011 | IHKA Bedienteil: Variantenfehler Anzahl Temperatursteller | 0 | - |
| 0x781012 | IHKA Bedienteil: Variantenfehler Taste Bedufter | 0 | - |
| 0x781013 | IHKA Bedienteil: Variantenfehler Taste Klima-Menü | 0 | - |
| 0x781014 | IHKA Bedienteil: Variantenfehler Keramik-Applikation | 0 | - |
| 0x781015 | IHKA Bedienteil: Variantenfehler Fahrzeug-Lenkseite | 0 | - |
| 0x781016 | IHKA Bedienteil: Fehler Ländervariante | 0 | - |
| 0x781017 | IHKA Bedienteil:Variantenfehler Taste Sitzheizung | 0 | - |
| 0x781018 | IHKA Bedienteil:Variantenfehler Taste Sitzlüftung | 0 | - |
| 0x781019 | FKA Bedienteil: Variantenfehler Anzahl Temperatursteller | 0 | - |
| 0x78101A | FKA Bedienteil: Variantenfehler Keramik-Applikation | 0 | - |
| 0x78101B | FKA Bedienteil: Variantenfehler Fahrzeug-Lenkseite | 0 | - |
| 0x78101C | FKA Bedienteil: Fehler Ländervariante | 0 | - |
| 0x78101D | FKA Bedienteil: Fehler FKA Variante | 0 | - |
| 0x78101E | FKA Bedienteil: Variantenfehler Taste Sitzheizung | 0 | - |
| 0x78101F | FKA Bedienteil: Variantenfehler Taste Sitzlüftung | 0 | - |
| 0x781020 | Falsche Zuordnung der Pin-Belegung erkannt | 0 | - |
| 0x781021 | FKA 3.SR Bedienteil: Variantenfehler Taste Sitzheizung | 0 | - |
| 0x781022 | FKA 3.SR Bedienteil: Variantenfehler Taste Sitzlüftung | 0 | - |
| 0x781023 | FKA 3.SR Bedienteil: Fehler Ländervariante | 0 | - |
| 0x781024 | FKA 3.SR Bedienteil: Variantenfehler Keramik-Applikation | 0 | - |
| 0x801130 | eDH: Leistungsreduzierung des Heizbetriebs durch Powermanagement | 0 | - |
| 0x801131 | Entwicklungsfehlercode 1 | 1 | - |
| 0x801132 | Entwicklungsfehlercode 2 | 1 | - |
| 0x801133 | Info - PIA Speicherung Klimaeinstellung wurde unterdrueckt | 1 | - |
| 0x80119B | Gebläseendstufe: Unter- oder Überspannung erkannt | 1 | - |
| 0x80119D | Gebläseendstufe: Strombegrenzung aktiv | 1 | - |
| 0x80120D | eKMV: Abschaltung wegen Systemproblem | 1 | - |
| 0x801215 | eKMV: Leistungsbegrenzung wegen Übertemperatur Umrichter | 1 | - |
| 0x801241 | PTC-Modul vorn: Kommunikationsfehler | 1 | - |
| 0x801243 | PTC-Modul vorn: Reduzierung Heizleistung wegen Powermanagement | 1 | - |
| 0x801245 | PTC-Modul vorn: Timeout | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | PTSENS_DIAGDATA2_HD | HEX | High | unsigned int | - | - | - | - |
| 0x402B | PTSENS_DIAGDATA1_HD | HEX | High | unsigned char | - | - | - | - |
| 0x402C | EXV_DIAGDATA2 | HEX | High | unsigned int | - | - | - | - |
| 0x402E | EXV_DIAGDATA1 | HEX | High | unsigned char | - | - | - | - |
| 0x4033 | PTSENS_DIAGDATA2_ND | HEX | High | unsigned int | - | - | - | - |
| 0x4034 | PTSENS_DIAGDATA1_ND | HEX | High | unsigned char | - | - | - | - |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6002 | FUELLSTAND_TANK | l | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | MESSEMODUS_NICHT_AKTIV |
| 0xFF | Wert ungültig |
| 1 | MESSEMODUS_AKTIV |

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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X403D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASK_DIAGNOSE_MIN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Min Wdg Task Diagnose |
| STAT_TASK_DIAGNOSE_MAX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Max Wdg Task Diagnose |
| STAT_TASK_CLIMATE_MIN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Min Wdg Task Climate-Logic |
| STAT_TASK_CLIMATE_MAX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Max Wdg Task Climate-Logic |
| STAT_TASK_CYCLICBAC_MIN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Min Wdg Task CyclicBAC |
| STAT_TASK_CYCLICBAC_MAX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Max Wdg Task CyclicBAC |
| STAT_TASK_CYCLICPREH_MIN_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Min Wdg Task CyclicPreh |
| STAT_TASK_CYCLICPREH_MAX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Max Wdg Task CyclicPreh |

### RES_0X5028_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIKROSCHALTER_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | aktueller Status des Mikroschalters |
| STAT_MIKROSCHALTER_ENTPRELLT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status des Mikroschalters der Zentralkulisse wird mit und ohne Entprellung ausgegeben |

### RES_0X5032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_MAJOR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Major Versionsnummer des HMI-Modells |
| STAT_HMI_MINOR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Minor Versionsnummer des HMI-Modells |
| STAT_HMI_PATCH_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Patch Versionsnummer des HMI-Modells |
| STAT_DATE_YEAR_WERT | y | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr des Erstelldatums |
| STAT_DATE_MONTH_WERT | mth | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat des Erstelldatums |
| STAT_DATE_DAY_WERT | d | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag des Erstelldatums |

### RES_0X5033_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KFL_MAJOR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Major Versionsnummer des KFL-Modells |
| STAT_KFL_MINOR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Minor Versionsnummer des KFL-Modells |
| STAT_KFL_PATCH_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Patch Versionsnummer des KFL-Modells |
| STAT_DATE_YEAR_WERT | y | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr des Erstelldatums |
| STAT_DATE_MONTH_WERT | mth | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat des Erstelldatums |
| STAT_DATE_DAY_WERT | d | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag des Erstelldatums |

### RES_0XA113_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZGERAETEVERRIEGLUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand Heizgeräteverriegelung = 0 = nicht aktiv. Zustand Heizgeräteverriegelung = 1 = aktiv. |

### RES_0XA11B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDH_VERRIEGELUNG_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Verriegelung (aktiv = 1/nicht aktiv = 0. |
| STAT_EDH_VERRIEGELUNG_ZAEHLER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der bisher aufgetretenen Schutzverriegelungen an. |

### RES_0XA11D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG_EXV | - | - | - | Status der Kalibrierung: 0x00 = Kalibrierung nicht aktiv 0x01 = Kalibrierung aktiv |

### RES_0XA11E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTOR_SOLL_POSITION_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenmotorposition: 0...100 % |
| STAT_MOTOR_IST_POSITION_WERT | + | - | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenmotorposition: 0...100 % |
| STAT_MOTOR_LIN_ADRESSE_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | LIN-Adresse |
| STAT_MOTOR_CODIERT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Motor nicht codiert, 1 = Motor codiert |
| STAT_MOTOR_FEHLER | + | - | - | 0-n | high | unsigned char | - | TAB_MOTOR_FEHLER | - | - | - | Aktuelle Fehler am Klappenmotor. Siehe Tabelle TAB_MOTOR_FEHLER |
| STAT_MOTOR_VERSTELLBEREICH_WERT | + | - | - | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angelernter Verstellbereich, =0:Motor beim Kalibrierlauf blockiert, =65535:Während Kalibierlauf kein Anschlag gefunden |
| STAT_MOTOR_KALIBRIERUNG | + | - | - | 0-n | - | unsigned char | - | TAB_MOTOR_KALIBRIERUNG | - | - | - | Status der Kalibrierung. Siehe Tabelle TAB_MOTOR_KALIBRIERUNG |

### RES_0XA11F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLAPPENMOTOR | - | - | + | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | Name des Klappenmotor (Siehe Tabelle TAB_KLAPPENMOTOR) |
| STAT_SELBSTTEST | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_KLAPPENMOTOREN | - | - | - | Status vom Selbsttest der Klappenmotoren. Siehe Tabelle TAB_SELBSTTEST_KLAPPENMOTOREN |
| STAT_VERSTELLBEREICH_GELERNT_WERT | - | - | + | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gelernter Verstellbereich aus Kalibrierlauf |
| STAT_VERSTELLBEREICH_TESTLAUF_WERT | - | - | + | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gelernter Verstellbereich aus Einzelttestlauf |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | - | - | + | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | - | - | + | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | - | - | + | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |
| STAT_SCHRITTMOTOR_INITIALISIERUNG_FEHLER_WERT | - | - | + | Fehler | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Initialisierungsfehler |

### RES_0XA120_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST | - | - | + | 0-n | high | unsigned char | - | TAB_SELBSTTEST_KLAPPENMOTOREN | - | - | - | Status vom Selbsttest der Klappenmotoren. Siehe Tabelle TAB_SELBSTTEST_KLAPPENMOTOREN |

### RES_0XA121_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOT_ISTPOS_ZENTRALANTRIEB_WERT | - | - | + | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Istwert Kulissenstellung: 0...360 Grad |
| STAT_MOT_SOLLPOS_ZENTRALANTRIEB_WERT | - | - | + | ° | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Kulissenstellung: 0...360 Grad |

### RES_0XA122_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTPOSITION_FRISCHLUFT_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_FRISCHLUFT_UMLUFT_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_UMLUFT_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_ENTFROSTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_BELUEFTUNG_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_BELUEFTUNG_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_BELUEFTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_BELUEFTUNG_FUSSRAUM_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_SCHICHTUNG_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_SCHICHTUNG_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_SCHICHTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_FUSSRAUM_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_FUSSRAUM_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_HINTEN_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_HINTEN_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_HINTEN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_HINTEN_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_HINTEN_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_MISCHLUFT_HINTEN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_TEMPERATUR_LUFTVERTEILUNG_HINTEN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_INDIREKTE_BELUEFTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_LUFTVERTEILUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_RESERVE5_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_RESERVE6_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |
| STAT_ISTPOSITION_RESERVE7_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung: 0...100 %  (255 = Klappe nicht codiert) |

### RES_0XA124_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_KALIBRIERLAUF | - | - | - | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | - | - | + | 0-n | - | unsigned char | - | TAB_KALIB_ERG | - | - | - | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### RES_0XA125_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADRESSIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_FRISCHLUFT | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_FRISCHLUFT_UMLUFT | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_UMLUFT | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_ENTFROSTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_BELUEFTUNG_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_BELUEFTUNG_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_BELUEFTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_BELUEFTUNG_FUSSRAUM | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_SCHICHTUNG_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_SCHICHTUNG_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_SCHICHTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_FUSSRAUM_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_FUSSRAUM_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG_HINTEN_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG_HINTEN_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG_HINTEN | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT_HINTEN_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT_HINTEN_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_MISCHLUFT_HINTEN | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_TEMPERATUR_LUFTVERTEILUNG_HINTEN | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_INDIREKTE_BELUEFTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_LUFTVERTEILUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_FUSSRAUM | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_BELUEFTUNG_ENTFROSTUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_ZENTRALANTRIEB | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | - | - | - | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |

### RES_0XA126_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_UMLUFT_AUC_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_HHS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_ENTFROSTUNG_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_KLIMA_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_MAX_AC_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_ALL_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_REST_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_AUTO_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_AUTO_LI_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_AUTO_RE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_PLUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_MINUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_PLUS_LI_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_MINUS_LI_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_PLUS_RE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_WIPPE_MINUS_RE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_TOGGLE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_TOGGLE_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_TOGGLE_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_ENTFROSTUNG_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_BELUEFTUNG_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_FUSSRAUM_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_BF_BELUEFTUNG_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_LV_BF_FUSSRAUM_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_HFS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_SH_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_SH_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_SL_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_SL_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_MENU_ODER_BEDUFTER_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| - | - | - | + | Bit | high | BITFIELD | - | BF_STAT_TASTEN_OFF | - | - | - | Status OFF-Tasten 1. und 2. Sitzreihe + 2 Reserve |
| - | - | - | + | Bit | high | BITFIELD | - | BF_STAT_TASTEN_TEMP_FRONT | - | - | - | Status Tasten Temperaturen Fahrerer/Beifahrer |
| STAT_TASTE_FKA_WIPPE_PLUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_WIPPE_MINUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_LV_TOGGLE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SH_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SH_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SL_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SL_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_MAX_AC_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_AUTO_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| - | - | - | + | Bit | high | BITFIELD | - | BF_STAT_TASTEN_TEMP_2_SR | - | - | - | Status Tasten Temperatur 2. Sitzreihe (FKA) |
| STAT_RESERVE_1 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 1 |
| STAT_RESERVE_2 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 2 |
| STAT_RESERVE_3 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 3 |
| STAT_RESERVE_4 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 4 |
| STAT_RESERVE_5 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 5 |
| STAT_RESERVE_6 | - | - | + | 0-n | high | unsigned char | - | - | - | - | - | Reserve 6 |

### RES_0XA128_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEBLAESE_VORN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung vorn |
| STAT_GEBLAESE_FKA_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung FKA |
| STAT_GEBLAESE_HKA_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung HKA/Klimatisierung 3. Sitzreihe |

### RES_0XA12A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLWERT_TEMPERATUR_VORN_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_LINKS_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_RECHTS_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_FKA_LINKS_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_FKA_RECHTS_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_HINTEN_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_FKA_3_SITZREIHE_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_RESERVE1_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_RESERVE2_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |
| STAT_RESERVE3_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur. (255 = Zone nicht codiert) |

### RES_0XA12B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUHEIZER_SOLLWERT_VORN_WERT | - | - | + | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Elektrischer Zuheizer (PTC oder EDH) Sollwert in Prozent 0 - 100 % |
| STAT_ZUHEIZER_SPANNUNG_VORN_WERT | - | - | + | V | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Ausgabe der Spannung am Zuheizer (nur eDH) |
| STAT_ZUHEIZER_STROM_VORN_WERT | - | - | + | A | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Ausgabe des Gesamtstroms der Zuheizer auf 1 Ampere genau (nur eDH). |
| STAT_ZUHEIZER_TEMP_VORN_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ausgabe der Temperatur auf der Leiterplatte bei PTC-Modul oder Wasseraustrittstemperatur bei eDH. |

### RES_0XA12C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 16 |
| STAT_SLAVE17_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 17 |
| STAT_SLAVE18_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 18 |
| STAT_SLAVE19_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 19 |
| STAT_SLAVE20_ADR_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 20 |
| STAT_MOT_0X3F_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | + | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XA12E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUS_IONISATOR | - | - | + | 0-n | high | unsigned char | - | TAB_IONISATOR_KLIMA | - | - | - | Status des Ionisators. |
| STAT_FEHLER_IONISATOR | - | - | + | 0-n | high | unsigned char | - | TAB_FEHLER_IONISATOR | - | - | - | Aktuelle Fehler des Ionisators. |

### RES_0XA12F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEDUFTER | - | - | + | 0-n | high | unsigned char | - | STATUS_BEDUFTER | - | - | - | Status des Bedufters. Mapping: STAT_BEDUFTER = ST_SNT_LIN |
| STAT_POS_KLAPPE_WERT | - | - | + | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Aktuelle Klappenposition. Mapping: STAT_POS_KLAPPE_WERT = ST_PO_SNT_LIN |
| STAT_KARTUSCHE_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information zur eingelegten Kartusche für Kartuschenaufnahme 1. Mapping: STAT_KARTUSCHE_1_WERT = ST_CART_1_SNT_LIN 0000 Kartusche betriebsbereit 0001  Kartusche abgelaufen (Haltbarkeitsdatum überschritten) 0010  Kartusche von Fremdhersteller 0011  Kartusche von Fremdhersteller abgelaufen 0100  Kartusche nicht vorhanden 1111  Signal ungültig |
| STAT_KARTUSCHE_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Information zur eingelegten Kartusche für Kartuschenaufnahme 2. Mapping: STAT_KARTUSCHE_2_WERT = ST_CART_2_SNT_LIN 0000 Kartusche betriebsbereit 0001  Kartusche abgelaufen (Haltbarkeitsdatum überschritten) 0010  Kartusche von Fremdhersteller 0011  Kartusche von Fremdhersteller, abgelaufen. 0100  Kartusche nicht vorhanden 1111  Signal ungültig |
| STAT_FARBCODE_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Farbcode Duft 1. Mapping: STAT_FARBCODE_1_WERT =  ST_CLCOD_1_LIN |
| STAT_FARBCODE_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Farbcode  Duft 2. Mapping: STAT_FARBCODE_2_WERT =  ST_CLCOD_2_LIN |
| STAT_DUFTNAME_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duftname Kartusche 1. Mapping: STAT_DUFTNAME_1_WERT = ST_NAM_SME_1_LIN |
| STAT_DUFTNAME_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duftname Kartusche 2. Mapping: STAT_DUFTNAME_2_WERT =  ST_NAM_SME_2_LIN |
| STAT_ICON_1_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Icon zum Duft 1. Mapping: STAT_ICON_1_WERT = ST_ICON_1_SNT_LIN |
| STAT_ICON_2_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Icon zum Duft 2. Mapping: STAT_ICON_2_WERT = ST_ICON_2_SNT_LIN |
| STAT_FUELLSTAND_1_WERT | - | - | + | - | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fuellstand Duft 1. Mapping: STAT_FUELLSTAND_1_WERT = ST_FLLV_1_LIN |
| STAT_FUELLSTAND_2_WERT | - | - | + | - | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fuellstand Duft 2. Mapping: STAT_FUELLSTAND_2_WERT = ST_FLLV_2_LIN |
| STAT_FEHLER_BEDUFTER | - | - | + | 0-n | high | unsigned char | - | FEHLERWERTE_BEDUFTER | - | - | - | Fehlerinformation des Bedufters. Mapping: STAT_FEHLER_BEDUFTER = ERR_ST_SNT_LIN |

### RES_0XA131_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEDUFTER | - | - | + | 0-n | high | unsigned char | - | STATUS_BEDUFTER | - | - | - | Status des Bedufters. |
| STAT_POS_KLAPPE_WERT | - | - | + | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Aktuelle Position Bedufterklappe. |

### RES_0XA133_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEFUELLUNG_KAELTEMITTEL | - | - | + | 0-n | high | unsigned char | - | TAB_BEFUELLUNG_KAELTEMITTEL | - | - | - | 0x00 Diagnosejob läuft nicht; 0x01 Diagnosejob gestartet, alle Ventile in der erforderlichen Position bzw. keine relevanten Ventile vorhanden; 0x02 Diagnosejob gestartet, jedoch mind. 1 Ventil nicht in der erforderlichen Position |

### RES_0XA134_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_FKA_3SR_KLIMA_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_MAX_AC_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_KLIMA_OFF_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_AUTO_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_GEBLAESE_PLUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_GEBLAESE_MINUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_TEMPERATUR_PLUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_TEMPERATUR_MINUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_LV_TOGGLE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_SH_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_SH_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_RESERVE_1_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_RESERVE_2_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_3SR_RESERVE_3_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |

### RES_0XA880_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_TESTLAUF_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SH_TESTLAUF | - | - | - | Ausgabe des Ergebnisses des Testlaufs vom Standheizgerät: siehe Tabelle TAB_SH_TESTLAUF |

### RES_0XD89F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SH_VARIANTE_NR | 0-n | high | unsigned char | - | TAB_SH_KRAFTSTOFFART | 1.0 | 1.0 | 0.0 | Ausgabe der Kraftstoffart des Standheizgerätes: 0x01 Benzin  0x02 Diesel  0x04 RME  0xFF ungültig |
| STAT_UMWAELZPUMPE_VORHANDEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob eine Umwälzpumpe direkt am Standheizgerät angschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_UMSCHALTVENTIL_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein Umschaltventil direkt am Standheizgerät angeschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |

### RES_0XD8C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKMV_DREHZAHL_SOLL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Soll-Drehzahl in % |
| STAT_EKMV_DREHZAHL_IST_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ist-Drehzahl in % |

### RES_0XD8C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der Ist-Drehzahl |
| STAT_LEISTUNG_WERT | kW | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Ausgabe der Leistung in KW auf 2 Nachkommastellen genau. Vom SG wird der Wert mit Faktor 25 geliefert und in der SGBD durch 25 dividiert. |
| STAT_STROM_DC_WERT | A | high | unsigned char | - | - | 1.0 | 4.0 | 0.0 | Ausgabe des Stroms der Hochspannung. |
| STAT_HOCHSPANNUNG_WERT | V | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Ausgabe der Hochspannung in Volt. Ungültigkeitswert = 510 Volt |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Ausgabe der Temperatur in Grad Celsius. Das Steuergerät liefert den Wert mit Offset 50. SGBD subtrahiert 50. |
| STAT_STROM_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Stroms. |

### RES_0XD8C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATUR_EIN | 0/1 | high | unsigned int | 0x0001 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Übertemperatur, 1 = aktiv |
| STAT_UEBERSTROM_EIN | 0/1 | high | unsigned int | 0x0002 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Überstrom, 1 = aktiv |
| STAT_UNTER_UEBERSPANNUNG_EIN | 0/1 | high | unsigned int | 0x0004 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Über-/Unterspannung, 1 = aktiv |
| STAT_ABSCHALTUNG_UEBERTEMP_EIN | 0/1 | high | unsigned int | 0x0008 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen kritischer Übertemperatur, 1 = aktiv |
| STAT_ABSCHALTUNG_DREHMOMENT_EIN | 0/1 | high | unsigned int | 0x0010 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Drehmomentüberschreitung, 1 = aktiv |
| STAT_ABSCHALTUNG_KOMMFEHLER_EIN | 0/1 | high | unsigned int | 0x0020 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen LIN-Kommuniaktionsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_VERSORGUNGSFEHLER_EIN | 0/1 | high | unsigned int | 0x0040 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen externem Versorgungsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_INVFEHLER_EIN | 0/1 | high | unsigned int | 0x0080 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler Inverterversorgung, 1 = aktiv |
| STAT_ABSCHALTUNG_SENSORIK_EIN | 0/1 | high | unsigned int | 0x0100 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler in Sensorik: Temperatur- oder Phasenstromsensor defekt, 1 = aktiv |
| STAT_ABSCHALTUNG_KURZSCHLUSS_EIN | 0/1 | high | unsigned int | 0x0200 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Kurzschluss, 1 = aktiv |
| STAT_ABSCHALTUNG_ANLAUFFEHLER_EIN | 0/1 | high | unsigned int | 0x0400 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Anlauffehler, 1 = aktiv |
| STAT_BETRIEB_NR | 0-n | high | unsigned int | 0x3800 | TAB_BETRIEBSSTATUS_EKMVGEN20 | - | - | - | Status zum Betrieb |
| STAT_KOMMUNIKATION | 0/1 | high | unsigned int | 0x4000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation, 0 = kein Fehler, 1 = Fehler aktiv |
| STAT_KOMMUNIKATION_2 | 0/1 | high | unsigned int | 0x8000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation 2, 0 = kein Fehler, 1 = Fehler aktiv |

### RES_0XD8C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_EKMV | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | Ergebnis der Isolationsprüfung: 0 = kein aktiver Kurzschluss 1 = aktiver Kurzschluss Low-Side 2 = aktiver Kurzschluss High-Side |

### RES_0XD8CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREILAUF_EKMV | 0/1 | high | unsigned char | - | - | - | - | - | Ergebnis der Isolationsprüfung: 0 = kein aktiver Freilauf 1 = aktiver Freilauf |

### RES_0XD8CC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_FUNKTIONSZUSTANDS_NR | 0-n | high | unsigned char | - | TAB_SH_FUNKTIONSZUSTAND | - | - | - | Funktionszustands des Standheizgerätes: siehe Tabelle TAB_SH_FUNKTIONSZUSTAND |
| STAT_WIDERSTAND_GLUEHSTIFT_WERT | mOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand Glühstift: 0xFFFF = Signal ungültig |
| STAT_BETRIEBSSPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Betriebsspannung: 0xFF = Signal ungültig |
| STAT_WASSERTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Wassertemperatur: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_PWM_GLUEHSTIFT_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | PWM Glühstift: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_FREQUENZ_DOSIERPUMPE_WERT | Hz | high | unsigned char | - | - | 0.05 | 1.0 | 0.0 | Frequenz Dosierpumpe: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_DREHZAHL_BRENNLUFTGEBLAESE_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Drehzahl Brennluftgebläse: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_SHZH_BETRIEBSZUSTAND_NR | 0-n | high | unsigned char | - | TAB_SH_BETRIEBSZUSTAND | - | - | - | Betriebszustände Standheizgerät: siehe Tabelle TAB_SH_BETRIEBSZUSTAND |
| STAT_WASSERPUMPE_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Falls die Pumpe an der Standheizung angebracht ist, wird der aktuelle Zustand der Wasserpumpe angezeigt. 0 % = Pumpe ausgeschaltet ... 100 % = Pumpe eingeschaltet (maximal) 130 % =  nicht verbaut  140 % = Fehler 150 % = Signal ungültig |
| STAT_UMSCHALTVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hierin ist der aktuelle Zustand des Umschaltventils (Magnetventils) ablesbar. Dies ist jedoch nur möglich, falls ein Magnetventil an der Standheizung angebracht und codiert ist. Falls das Ventil nicht an der SHZH verbaut ist, wird  nicht verbaut  gemeldet. 0 %: Grosser Kreislauf 100 %: Kleiner Kreislauf (Standheizbetrieb) 253 %:  nicht verbaut  254 %: Fehler 255 %: Signal ungültig |
| STAT_HEIZLEISTUNG_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status der Heizleistung des Heizgeräts.  0 %: Heizung aus ... 100 %: Heizung ein (maximum) 140 %: Fehler 150 %: Signal ungültig |

### RES_0XD8CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WASSERAUSTRITT_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Temperatur des Heizwassers am Wasseraustritt des elektrischen Durchlauferhitzers. |
| STAT_STROM_WERT | A | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | Stromaufnahme (hochvoltseitig) des elektrischen Durchlauferhitzers. |
| STAT_HOCHVOLTSPANNUNG_WERT | V | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | Hochvoltspannung gemessen am elektrischen Durchlauferhitzers. Ungültigkeitswert = 510 Volt. |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verriegelungszähler des elektrischen Durchlauferhitzers. |

### RES_0XD8D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEBLAESE_3_SITZREIHE | 0/1 | high | unsigned char | - | - | - | - | - | Status Gebläse von 3. Sitzreihe: 0x00 = Gebläse aus 0x01 = Gebläse ein |
| STAT_PTC_3_SITZREIHE | 0/1 | high | unsigned char | - | - | - | - | - | Status PTC von 3. Sitzreihe: 0x00 = PTC aus 0x01 = PTC ein |
| STAT_ENDLAGENSCHALTER | 0/1 | high | unsigned char | - | - | - | - | - | Status Endlagenschalter: 0x00 = nicht betätigt 0x01 = betätigt |
| STAT_TASTER_GEBLAESE | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster Gebläse: 0x00 = nicht betätigt 0x01 = betätigt |

### RES_0XD8D2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_KLIMAKOMPRESSOR | 0/1 | high | unsigned char | - | - | - | - | - | HV-Freigabe für eKMV: 0x00 = keine Freigabe 0x01 = Freigabe |
| STAT_LEISTUNG_KLIMAKOMPRESSOR_MAXIMAL_WERT | kW | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximal vom HV-PM für den eKMV bereitgestellte Leistung. |

### RES_0XD8D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABE_EDH | 0/1 | high | unsigned char | - | - | - | - | - | HV-Freigabe für EDH: 0x00 = keine Freigabe 0x01 = Freigabe |
| STAT_LEISTUNG_EDH_MAXIMAL_WERT | kW | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Maximal vom HV-PM für den EDH bereitgestellte Leistung. |

### RES_0XD8D5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRODUKTLINIE | 0-n | high | unsigned char | - | TAB_PRODUKTLINIE_KLIMA | - | - | - | Gibt die im Steuergerät codierte Produktlinie aus. Siehe Tabelle TAB_PRODUKTLINIE_KLIMA |
| STAT_FAHRZEUGART | 0-n | high | unsigned char | - | TAB_FAHRZEUGART_KLIMA | - | - | - | Gibt die im Steuergerät codierte Fahrzeugart aus. Siehe Tabelle TAB_FAHRZEUGART_KLIMA |
| STAT_KLIMA_VARIANTE | 0-n | high | unsigned char | - | TAB_KLIMA_VARIANTEN | - | - | - | Gibt die im Steuergerät codierte Klimavariante aus. Siehe Tabelle TAB_KLIMA_VARIANTEN |
| - | Bit | high | BITFIELD | - | BF_KLIMA_BEDIENTEILVARIANTE_VORN | - | - | - | Gibt die Variante des vorderen Bedienteils aus. |
| - | Bit | high | BITFIELD | - | BF_KLIMA_BEDIENTEILVARIANTE_HINTEN | - | - | - | Gibt die Variante des hinteren Bedienteils aus. |
| STAT_ECU_HW_VARIANTE | 0-n | high | unsigned char | - | TAB_KLIMA_ECU_HW_VARIANTE | - | - | - | Hardwarevariante |
| STAT_KAELTEMITTEL | 0-n | high | unsigned char | - | TAB_KLIMA_KAELTEMITTEL | - | - | - | Kältemittel |
| STAT_WASSERPUMPE_CODIERT | 0-n | high | unsigned char | - | TAB_KLIMA_WASSERPUMPE | - | - | - | Wasserpumpe |
| - | Bit | high | BITFIELD | - | BF_IHKA_KONFIGURATION | - | - | - | IHKA Konfiguration |

### RES_0XD8D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_VERDAMPFER_WERT | °C | high | unsigned char | - | - | 1.0 | 5.0 | -10.0 | Verdampfertemperatursensor |
| STAT_TEMP_BELUEFTUNG_LINKS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Belüftungstemperatursensor links oder Belüftungstemperatursensor (2-zonig) |
| STAT_TEMP_BELUEFTUNG_RECHTS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Belüftungstemperatursensor rechts |
| STAT_TEMP_FUSSRAUM_LINKS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Fussraumtemperatursensor links oder Fussraumtemperatursensor (2-zonig) |
| STAT_TEMP_FUSSRAUM_RECHTS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Fussraumtemperatursensor rechts |
| STAT_TEMP_BELUEFTUNG_HINTEN_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Belüftungstemperatursensor hinten (3-zonig) |
| STAT_TEMP_BELUEFTUNG_HINTEN_LINKS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Belüftungstemperatursensor hinten links (4-zonig) |
| STAT_TEMP_BELUEFTUNG_HINTEN_RECHTS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Belüftungstemperatursensor hinten rechts (4-zonig) |
| STAT_TEMP_FUSSRAUM_HINTEN_LINKS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Fussraumtemperatursensor hinten links (4-zonig) |
| STAT_TEMP_FUSSRAUM_HINTEN_RECHTS_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Fussraumtemperatursensor hinten rechts (4-zonig) |
| STAT_TEMP_INNENRAUM_UNGEDAEMPFT_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ungedämpfter Innenraumtemperatursensor |
| STAT_TEMP_FUSSRAUM_HINTEN_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Fussraumtemperatursensor hinten (3-zonig) |
| STAT_TEMP_BELUEFTUNG_3_SITZREIHE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatursensor Belüftung 3. Sitzreihe (5 Zonen) |
| STAT_TEMP_FUSSRAUM_3_SITZREIHE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatursensor Fussraum 3. Sitzreihe (5 Zonen) |
| STAT_TEMP_RESERVE_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 5 |
| STAT_TEMP_RESERVE_6_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 6 |

### RES_0XD8D8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHICHTUNGSPOTI_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer vorn: 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_SCHICHTUNGSPOTI_LINKS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer links: 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_SCHICHTUNGSPOTI_RECHTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer rechts: 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_SCHICHTUNGSPOTI_HINTEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer hinten (2,5- und 3-zonig): 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_SCHICHTUNGSPOTI_HINTEN_LINKS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer hinten links: 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_SCHICHTUNGSPOTI_HINTEN_RECHTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schichtungspotentiometer hinten rechts: 0 = Kalt, 100 = Warm, 255 = Poti nicht codiert |
| STAT_RESERVE1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Potentiometer |
| STAT_RESERVE2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Potentiometer |
| STAT_RESERVE3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Potentiometer |
| STAT_RESERVE4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Potentiometer |

### RES_0XD8D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_AUC_SENSOR_WERT | Stufe | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Belastungsstufe vom AUC-Sensor |
| STAT_BUS_IN_TEMP_AUSSEN_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Außentemperatur |
| STAT_BUS_IN_RLBS_LUFTFEUCHTIGKEIT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Luftfeuchtigkeit |
| STAT_BUS_IN_RLBS_TEMP_FRONTSCHEIBE_WERT | °C | high | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Temperatur Frontscheibe |
| STAT_BUS_IN_SOLARSENSOR_FA_WERT | W/m² | high | unsigned char | - | - | 4.0158 | 1.0 | 0.0 | Solarsensor |
| STAT_BUS_IN_SOLARSENSOR_BF_WERT | W/m² | high | unsigned char | - | - | 4.0158 | 1.0 | 0.0 | Solarsensor |
| STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | HV-Freigabe für eKMV: 0x00=Keine Freigabe 0x01=Freigabe |
| STAT_BUS_IN_KAELTEKREISLAUF_DRUCK_WERT | bar | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kältemitteldruck im Kältemittelkreislauf |
| STAT_BUS_IN_KUEHLMITTEL_MOTOR_TEMP_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Kühlmitteltemperatur Motor |
| STAT_BUS_IN_DREHMOMENT_FREIGABE_WERT | Nm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Seitens DME/DDE maximal freigegebenes Drehmoment für den mKMV (Signal LIN_TORQ_CRSH_ACCM). Wertebereich 0 .. 30 Nm (nur für mKMV verwendet) |
| STAT_BUS_IN_RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservewert |
| STAT_BUS_IN_RESERVE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservewert |
| STAT_BUS_IN_RESERVE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservewert |

### RES_0XD8DB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_LI_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_RE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN (1-zonig) |
| STAT_KLIMA_VORN_PRG_AUC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatische Umluft Control: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_UMLUFT_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm Umluft: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_HHS_EIN | 0-n | high | unsigned char | - | TAB_KLIMA_SCHEIBENHEIZUNG | - | - | - | Heckscheibenheizung: Siehe Tabelle TAB_KLIMA_SCHEIBENHEIZUNG |
| STAT_KLIMA_VORN_PRG_HFS_EIN | 0-n | high | unsigned char | - | TAB_KLIMA_SCHEIBENHEIZUNG | - | - | - | Frontscheibenheizung:  Siehe Tabelle TAB_KLIMA_SCHEIBENHEIZUNG |
| STAT_KLIMA_VORN_PRG_DEFROST_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Defrost-Programm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_AUTO_LINKS_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AUTO_RECHTS_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AUTO_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaprogramm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_MAX_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm maximal Kühlen: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_STANDHEIZEN_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm Standheizung: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm Standlüften: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_OFF_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaanlage OFF: 0 = Klimanalage EIN, 1 = Klimaanlage AUS |
| STAT_KLIMA_VORN_GEBL_LI_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläsestufe links |
| STAT_KLIMA_VORN_GEBL_RE_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläsestufe rechts |
| STAT_KLIMA_VORN_GEBL_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläsestufe 1-zonig |
| STAT_KLIMA_SH_VORN_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_VORN_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_VORN_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_VORN_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_FKA_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_FKA_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_FKA_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_FKA_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_FKA_GEBL_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläsestufe FKA |

### RES_0XD8DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTE_FLANKE1_LANGE_NOCKE_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schritte zur ersten Flanke der langen Nocke. |
| STAT_SCHRITTE_FLANKE2_LANGE_NOCKE_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schritte zur zweiten Flanke der langen Nocke. |
| STAT_SCHRITTE_FLANKE1_KURZE_NOCKE_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schritte zur ersten Flanke der kurzen Nocke. |
| STAT_SCHRITTE_FLANKE2_KURZE_NOCKE_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schritte zur zweiten Flanke der kurzen Nocke. |
| STAT_SCHRITTE_GANZE_UMDREHUNG_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Schritte für eine ganze Umdrehung der Kulissenscheibe. |

### RES_0XD8DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_FKA_PRG_AUTO_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatikprogramm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_FKA_PRG_MAX_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm maximal Kühlen: 0 = AUS, 1 = EIN |
| STAT_KLIMA_FKA_PRG_OFF_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaanlage OFF: 0 = Klimanalage EIN, 1 = Klimaanlage AUS |
| STAT_KLIMA_SH_FKA_3SR_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_FKA_3SR_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_FKA_3SR_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaprogramm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_FKA_3SR_PRG_AUTO_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Automatikprogramm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_FKA_3SR_PRG_OFF_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaanlage OFF: 0 = Klimanalage EIN, 1 = Klimaanlage AUS |
| STAT_KLIMA_FKA_3SR_PRG_MAX_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm maximal Kühlen: 0 = AUS, 1 = EIN |
| STAT_KLIMA_FKA_3SR_GEBL_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläsestufe 3. Sitzreihe |
| STAT_RESERVE_1 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve 1 |
| STAT_RESERVE_2 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve 2 |
| STAT_RESERVE_3 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve 3 |
| STAT_RESERVE_4 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve 4 |
| STAT_RESERVE_5 | 0/1 | high | unsigned char | - | - | - | - | - | Reserve 5 |

### RES_0XD8DF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_POSITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollposition von 0 - 200 % |
| STAT_IST_POSITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Istposition von 0 - 200 % |
| STAT_SOLL_SCHRITTZAHL_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Soll-Schrittzahl |
| STAT_IST_SCHRITTZAHL_WERT | Schritte | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist-Schrittzahl |
| STAT_MIKROSCHALTER_NOCKE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 = Mikroschalter steht nicht auf Nocke 0x01 = Mikroschalter steht auf Nocke |

### RES_0XD8E1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWP_2_PUMPENMOTOR_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0 = Motor nicht angesteuert; 1 = Motor angesteuert/dreht |
| STAT_EWP_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung an der EWP_2 |
| STAT_EWP_2_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur der EWP_2 |
| STAT_EWP_2_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | Strom der EWP_2 |
| STAT_EWP_2_DREHZAHLUEBERWACHUNG_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Aktive Drehzahlüberwachung der EWP_2 |
| STAT_EWP_2_UEBERTEMPERATUR | 0-n | high | unsigned char | - | - | - | - | - | Status Übertemperatur EWP_2 |
| STAT_EWP_2_UEBERSTROM | 0-n | high | unsigned char | - | - | - | - | - | Status Überstromerkennung EWP_2 |
| STAT_EWP_2_TROCKENLAUF | 0/1 | high | unsigned char | - | - | - | - | - | Status Trockenlauferkennung EWP_2 |
| STAT_EWP_2_BLOCKIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Blockiererkennung EWP_2 |
| STAT_EWP_2_ELECTRICAL_ERROR | 0-n | high | unsigned char | - | - | - | - | - | Fehlererkennung EWP_2 |
| STAT_EWP_2_KOMMUNIKATION_ERROR | 0/1 | high | unsigned char | - | - | - | - | - | Kommunikationsfehler EWP_2 |

### RES_0XD8E2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWP_2_DREHZAHL_SOLL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Solldrehzahl EWP_2 |
| STAT_EWP_2_DREHZAHL_IST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Drehzahl EWP_2 |

### RES_0XD905_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIMER_EINLAUFSCHUTZ_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Restzeit des Einlaufschutzes in Sekunden |
| STAT_TIMER_START_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Startwert vom Timer für Einlaufschutz |

### RES_0XD918_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |
| STAT_EINLAUF_AKTIV_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Ausgabe Status Einlaufschutz: 0 = Einlauf nicht aktiv 1 = Einlauf aktiv |

### RES_0XD9A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### RES_0XD9AC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PT_SENSOR_NIEDERDRUCK_1_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | 0 - nicht verbaut;  1 - verbaut |
| STAT_PT_SENSOR_HOCHDRUCK_1_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | 0 - nicht verbaut;  1 - verbaut |
| STAT_PT_SENSOR_RESERVE_1_VERBAUT | 0-n | high | unsigned char | - | - | - | - | - | 0 - nicht verbaut;  1 - verbaut |
| STAT_PT_SENSOR_RESERVE_2_VERBAUT | 0-n | high | unsigned char | - | - | - | - | - | 0 - nicht verbaut;  1 - verbaut |
| STAT_PT_SENSOR_NIEDERDRUCK_1_DRUCK_WERT | bar | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Druck vom Druck-Temperatursensor Niederdruck 1 |
| STAT_PT_SENSOR_NIEDERDRUCK_1_TEMP_WERT | °C | high | unsigned int | - | - | 0.1 | 1.0 | -40.0 | Temperatur vom Druck-Temperatursensor Niederdruck 1 |
| STAT_PT_SENSOR_HOCHDRUCK_1_DRUCK_WERT | bar | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Druck vom Druck-Temperatursensor Hochdruck 1 |
| STAT_PT_SENSOR_HOCHDRUCK_1_TEMP_WERT | °C | high | unsigned int | - | - | 0.1 | 1.0 | -40.0 | Temperatur vom Druck-Temperatursensor Hochdruck 1 |
| STAT_RESERVE_1_DRUCK_WERT | bar | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_1_TEMP_WERT | °C | high | unsigned int | - | - | 0.1 | 1.0 | -40.0 | Reserve |
| STAT_RESERVE_2_DRUCK_WERT | bar | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_2_TEMP_WERT | °C | high | unsigned int | - | - | 0.1 | 1.0 | -40.0 | Reserve |

### RES_0XD9AD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | - | - | - | - | Absperrventil 1:  0x00 = Ventil nicht bestromt  0x01 = Ventil bestromt 0xFF = nicht codiert |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | - | - | - | - | Absperrventil 2:  0x00 = Ventil nicht bestromt  0x01 = Ventil bestromt 0xFF = nicht codiert |
| STAT_POS_EXP_VENTIL_1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 1:  0% = geschlossen 100% = offen 255 = ungültig |
| STAT_RESERVE_3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 2:  0% = geschlossen 100% = offen 255 = ungültig |
| STAT_RESERVE_4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Expansionsventil 3:  0% = geschlossen 100% = offen 255 = ungültig |

### RES_0XE410_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RES_HMI_CUSTOMER_REQUEST_ACTIVE | 0-n | high | unsigned char | - | TAB_STATUS_RES_CUSTOMER_REQUEST | - | - | - | Auswahl Remote Engine Start aktiviert/deaktiviert in MMI |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | High | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _READ_WATCHDOG_VALUES | 0x403D | - | Min und max Werte der Watchdog Überwachung auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403D_D |
| _RESET_WATCHDOG_VALUES | 0x403E | - | Min und Max Werte der Watchdog Überwachung zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x403E_D | - |
| _MIKROSCHALTER_ZENTRALKULISSE | 0x5028 | - | Status des Mikroschalters der Zentralkulisse | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5028_D |
| _HMI_VERSION_LESEN | 0x5032 | - | Auslesen der verwendeten HMI-Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5032_D |
| _KFL_VERSION_LESEN | 0x5033 | - | Auslesen der verwendeten KFL-Version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5033_D |
| SHZH_STEUERGERAET_RESET | 0xA112 | - | Ausführen eines Resets im Steuergerät des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_VERRIEGELUNG | 0xA113 | - | Setzen- und Rücksetzen der Produktions- und Überhitzungsverriegeung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA113_R |
| SHZH_KT_DOSIERPUMPE | 0xA114 | - | Ansteuerung der Dosierpumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA114_R | - |
| SHZH_KT_WASSERPUMPE | 0xA115 | - | Ansteuerung der Wasserpumpe am Standheizgerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA115_R | - |
| SHZH_KT_UMSCHALTVENTIL | 0xA116 | - | Ansteuerung des Umschaltventils | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA116_R | - |
| STEUERN_FREIGABE_HEIZUNG_3SR | 0xA117 | - | Ansteuerung Leistungsfreigabe 100% der Heizung der dritte Sitzreihe. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_PRUEFBETRIEB | 0xA119 | - | Prüfbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_NORMALBETRIEB | 0xA11A | - | Normalbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EDH_VERRIEGELUNG | 0xA11B | - | Steuern der Schutzverriegelung des eDH. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA11B_R |
| EXP_VENTIL_KALIBRIEREN | 0xA11D | - | Kalibrierung der Expansionsventile durchführen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA11D_R |
| KLAPPENMOTOR_EINZELABFRAGE | 0xA11E | - | Status und Werte eines Klappenmotors | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA11E_R | RES_0xA11E_R |
| KLAPPENMOTOR_EINZELTEST | 0xA11F | - | Klappenmotoren Einzeltest | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA11F_R | RES_0xA11F_R |
| KLAPPENMOTOREN_SELBSTTEST | 0xA120 | - | Klappenmotoren Selbsttest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA120_R |
| KLAPPENMOTOR_ZENTRALANTRIEB | 0xA121 | - | Zentralantrieb 0..360° | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA121_R | RES_0xA121_R |
| KLAPPENMOTOREN_POSITIONEN | 0xA122 | - | Klappenmotoren Positionen 0..100 % | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA122_R | RES_0xA122_R |
| KLAPPENMOTOR_KALIBRIERLAUF | 0xA124 | - | Kalibrierlauf Klappenmotoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA124_R |
| KLAPPENMOTOREN_AUTOADRESSIERUNG | 0xA125 | - | Autoadressierung der Klappenmotoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA125_R |
| TASTEN_KLIMA_BT | 0xA126 | - | Tasten im Bedienteil Klima | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA126_R | RES_0xA126_R |
| LEDS_KLIMA_BT | 0xA127 | - | LEDs vom Klima Bedienteil | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA127_R | - |
| GEBLAESE_KLIMA | 0xA128 | - | Gebläsesteuerung Klima IHKA, FKA, HKA, Klimatisierung 3. Sitzreihe via HKA | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA128_R | RES_0xA128_R |
| DISPLAY_KLIMA_BT | 0xA129 | - | Display von Klimabedienteil | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA129_R | - |
| SOLLWERT_TEMPERATUREN_KLIMA | 0xA12A | - | Sollwert-Temperaturen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12A_R | RES_0xA12A_R |
| ZUHEIZER_PTC_EDH | 0xA12B | - | Elektrischer Zuheizer PTC-Modul und eDH-Modul | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12B_R | RES_0xA12B_R |
| LIN_KLIMA | 0xA12C | - | LIN-Bus der Klima | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA12C_R |
| IONISATOR_KLIMA | 0xA12E | - | Ionisator | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12E_R | RES_0xA12E_R |
| BEDUFTER_KLIMA | 0xA12F | - | Bedufter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12F_R | RES_0xA12F_R |
| BEDUFTER_TESTLAUF | 0xA131 | - | Testlauf für Bedufter mit Ansteuerung der internen Komponenten. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA131_R |
| BEFUELLUNG_KAELTEMITTEL | 0xA133 | - | Steuerung der Ventile im Kältemittelkreislauf für die Befüllung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA133_R |
| TASTEN_KLIMA_BT_3SR | 0xA134 | - | Tasten im Klimabedienteil der 3. Sitzreihe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA134_R | RES_0xA134_R |
| SHZH_TESTLAUF | 0xA880 | - | Testlauf Standheizgerät. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA880_R |
| SHZH_KONFIGURATION | 0xD89F | - | Ausgabe der Konfiguration des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD89F_D | RES_0xD89F_D |
| EKMV_DREHZAHL_GEN20 | 0xD8C3 | - | Drehzahl Kältemitteldichter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C3_D | RES_0xD8C3_D |
| EKMV_ANALOGWERTE_GEN20 | 0xD8C4 | - | Analogwertewerte von Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8C4_D |
| EKMV_BETRIEBSZUSTAND_GEN20 | 0xD8C5 | - | Betriebszustände von Kältemittelverdichter Gen. 2.0 | Bit | - | - | BITFIELD | RES_0xD8C5_D | - | - | - | - | 22 | - | - |
| EKMV_RESET_GEN20 | 0xD8C6 | - | Reset Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8C6_D | - |
| EKMV_AKS_GEN20 | 0xD8C7 | - | Isolationsprüfung eKMV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8C7_D | RES_0xD8C7_D |
| EKMV_FREILAUF | 0xD8CB | - | Freilauf eKMV | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8CB_D | RES_0xD8CB_D |
| SHZH_STATUS | 0xD8CC | - | Status Standheizgerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8CC_D |
| EDH_STATUS | 0xD8CD | - | Statuswerte elektrischer Durchlauferhitzer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8CD_D |
| DRITTE_SITZREIHE | 0xD8D0 | - | Statuswerte der Heizung 3. Sitzreihe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D0_D |
| BUS_IN_HV_POWERMANAGEMENT | 0xD8D2 | - | Die maximal vom HV-PM für die Klima bereitgestellten Leistungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D2_D |
| BUS_IN_HV_PM_EDH | 0xD8D3 | - | Die maximal vom HV-PM für den EDH bereitgestellte Leistung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D3_D |
| IHKA_KONFIGURATION | 0xD8D5 | - | Konfiguration vom Klimasteuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D5_D |
| TEMPERATURSENSOREN_KLIMA | 0xD8D7 | - | Temperatursensoren Klimaanlage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D7_D |
| SCHICHTUNGSPOTIS_KLIMA | 0xD8D8 | - | Schichtungspotentiometern Klima | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D8_D |
| BUS_IN_SIGNALE_KLIMA | 0xD8D9 | - | Eingehende Signale über Systembus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D9_D |
| FUNKTIONSSTATUS_KLIMA | 0xD8DB | - | Funktionsstatus der Klimaanlage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DB_D |
| ZENTRALANTRIEB_SCHRITTE | 0xD8DD | - | Anzahl der Schritte von Zentralantrieb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DD_D |
| FUNKTIONSSTATUS_KLIMA_2 | 0xD8DE | - | Funktionsstatus der Klimaanlage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DE_D |
| ZENTRALANTRIEB_DATEN | 0xD8DF | - | Daten von Zentralantrieb | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DF_D |
| EWP_2_BETRIEBSZUSTAND | 0xD8E1 | - | Status der EWP_2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8E1_D |
| EWP_2_DREHZAHL | 0xD8E2 | - | Drehzahl der EWP_2 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8E2_D | RES_0xD8E2_D |
| TIMER_EINLAUFSCHUTZ | 0xD905 | - | Ermittlung der verbleibenden Restzeit beim Einlaufschutz. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD905_D |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder Schreiben des neuen Status. Erst nach vollständigem Einlauf wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918_D | RES_0xD918_D |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927_D | - |
| FREIGABE_KOMPRESSOREINLAUF | 0xD9A7 | - | Freigabe für Kompressoreinlauf | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD9A7_D | RES_0xD9A7_D |
| LIN_DRUCK_TEMP_SENSOREN | 0xD9AC | - | Sensoren der Wärmepumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9AC_D |
| POSITION_VENTILE | 0xD9AD | - | Position der Ventile | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD9AD_D | RES_0xD9AD_D |
| POSITION_EINZELNE_VENTILE | 0xD9DF | - | Ansteuerung einzelner Ventile | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD9DF_D | - |
| RES_HMI_CUSTOMER_REQUEST | 0xE410 | - | Setzen und auslesen des aktuellen Status HMI Remote Engine-Start | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE410_D | RES_0xE410_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_BEDUFTER

| WERT | TEXT |
| --- | --- |
| 0 | Beduftung zulässig/Testlauf i.O. |
| 1 | Beduftersperre aufgrund Temperaturbereich |
| 2 | Schublade offen |
| 3 | Initialisierung nach Power on |
| 4 | Testlauf abgeschlossen n.i.O. |
| 5 | Testlauf aktiv |
| 7 | Signal ungültig |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_AKS_EKMV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein aktiver Kurzschluss |
| 0x01 | aktiver Kurzschluss Low-Side |
| 0x02 | aktiver Kurzschluss High-Side |

### TAB_AUTOADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung nicht gestartet |
| 0x01 | Autoadressierung läuft |
| 0x02 | Autoadressierung ohne Fehler beendet |
| 0x03 | Autoadressierung mit Fehler beendet |
| 0xFF | Ungültiger Wert |

### TAB_BEDIENTEILVAR_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x0000 | kein FKA Bedienteil verbaut |
| 0x0001 | Basis |
| 0x0002 | Mid |
| 0x0003 | High |
| 0xFFFF | ungültiger Wert |

### TAB_BEDIENTEILVAR_VORN

| WERT | TEXT |
| --- | --- |
| 0x0001 | Basis |
| 0x0002 | Mid |
| 0x0003 | High |
| 0xFFFF | ungültiger Wert |

### TAB_BEFUELLUNG_KAELTEMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Diagnosejob nicht gestartet |
| 0x01 | Diagnosejob gestartet |
| 0x02 | Diagnosejob gestartet mit Ventilfehler |
| 0xFF | Wert ungültig |

### TAB_BETRIEBSSTATUS_EKMVGEN20

| WERT | TEXT |
| --- | --- |
| 0x0000 | eKMV aus |
| 0x0800 | eKMV ein |
| 0x1000 | eKMV in Degradation |
| 0x1800 | eKMV Stopp |
| 0x2000 | eKMV Shutdown |
| 0x2800 | eKMV im Aufstart |
| 0x3000 | eKMV Reset nicht möglich |
| 0x3800 | ungültig |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Segmente aus |
| 0x01 | Alle Segmente ein |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |
| 0x06 | BITMUSTER_7 |
| 0x07 | BITMUSTER_8 |

### TAB_ERR_REM_STA_DTL_BDC

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Kein_Fehler_BDC |
| 0x01000000 | BDC_PWF_nicht_Standfunktionen_oder_Wohnen |
| 0x02000000 | BDC_Montagemode_aktiv |
| 0x03000000 | BDC_Timout_SV_LIN |
| 0x04000000 | BDC_Timeout_RQ_ENGR_PFN |
| 0x05000000 | BDC_Timeout_ST_DRVG_RDI_DRV |
| 0x06000000 | BDC_Startabbruch_ST_DRVG_RDI_DRV |
| 0x07000000 | BDC_RES_Funktion_auscodiert |
| 0x08000000 | BDC_KL50_HW_Fehler |
| 0x09000000 | BDC_keine_RES_Authentisierung |
| 0x10000000 | BDC_Abbruch_RES_Fahreraktion_SST_Remote_Parken |
| 0xFFFFFFFF | Wert ungültig |

### TAB_ERR_REM_STA_DTL_DME

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Kein_Fehler_DME |
| 0x00000100 | DME_RES_Funktion_nicht_freigeschaltet |
| 0x00000200 | DME_ELV_nicht_verriegelt |
| 0x00000300 | DME_Parkbremse_nicht_angezogen |
| 0x00000400 | DME_HS_nicht_in_N |
| 0x00000500 | DME_OBD_Fehler |
| 0x00000600 | DME_Motorfehler |
| 0x00000700 | DME_PWF_nicht_Standfunktionen_oder_Wohnen |
| 0x00000800 | DME_SCR_Tank_leer |
| 0xFFFFFFFF | Wert ungültig |

### TAB_ERR_REM_STA_DTL_IHKA

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Kein_Fehler_IHKA |
| 0x00000001 | IHKA_Tankfuellstand_zu_niedrig |
| 0x00000002 | Maximale_Laufzeit_ueberschritten |
| 0x00000003 | IHKA_Anzahl_Maximale_Aktivierungen_erreicht |
| 0x00000004 | IHKA_Motorhaube_offen |
| 0x00000005 | IHKA_FeTraFla_gesetzt |
| 0x00000006 | IHKA_PWF_nicht_Standfunktionen_oder_Wohnen |
| 0x00000007 | IHKA_RES_Funktion_auscodiert |
| 0x00000008 | IHKA_Timeout_ST_CON_ENGR_PFN |
| 0x00000009 | IHKA_OSFG_erreicht |
| 0x0000000A | IHKA_Abbruch_Standfunktion durch DME / BDC |
| 0xFFFFFFFF | Wert ungültig |

### TAB_FAHRZEUGART_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbrennungsmotor |
| 0x01 | Hybrid |
| 0x02 | Plug-In-Hybrid |
| 0x03 | Elektrisch |
| 0xFF | ungltiger Wert |

### TAB_FEHLER_IONISATOR

| WERT | TEXT |
| --- | --- |
| 0x0 | kein Fehler |
| 0x1 | Steuergerät defekt |
| 0x2 | unbekannter Fehler |
| 0x3 | unbekannter Fehler |
| 0x4 | unbekannter Fehler |
| 0x5 | Kurzschluss Emittent 1 |
| 0x6 | Kurzschluss Emittent 2 |
| 0x7 | Kurzschluss Emittent 1 und 2 |
| 0x8 | unbekannter Fehler |
| 0x9 | Emittent 1 nicht gesteckt |
| 0xA | Emittent 2 nicht gesteckt |
| 0xB | Emittent 1 + 2 nicht gesteckt |
| 0xC | unbekannter Fehler |
| 0xD | unbekannter Fehler |
| 0xE | unbekannter Fehler |
| 0xF | unbekannter Fehler |

### TAB_IONISATOR_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | Ionisator aus |
| 0x01 | Kundenmodus |
| 0x02 | Prüfmodus |
| 0xFF | Ungültiger Wert |

### TAB_KALIBRIERUNG_EXV

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierlauf nicht aktiv |
| 1 | Kalibrierlauf läuft gerade |
| 0xFF | Wert ungültig |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung NIO |
| 0x01 | Kalibrierung IO |
| 0x02 | Klappe nicht verbaut |

### TAB_KLAPPENMOTOR

| WERT | TEXT |
| --- | --- |
| 0x01 | FRISCHLUFT |
| 0x02 | FRISCHLUFT_UMLUFT |
| 0x03 | UMLUFT |
| 0x04 | ENTFROSTUNG |
| 0x05 | BELUEFTUNG_LINKS |
| 0x06 | BELUEFTUNG_RECHTS |
| 0x07 | BELUEFTUNG |
| 0x08 | BELUEFTUNG_FUSSRAUM |
| 0x09 | SCHICHTUNG_LINKS |
| 0x0A | SCHICHTUNG_RECHTS |
| 0x0B | SCHICHTUNG |
| 0x0C | FUSSRAUM_LINKS |
| 0x0D | FUSSRAUM_RECHTS |
| 0x0E | LUFTVERTEILUNG_HINTEN_LINKS |
| 0x0F | LUFTVERTEILUNG_HINTEN_RECHTS |
| 0x10 | LUFTVERTEILUNG_HINTEN |
| 0x11 | MISCHLUFT_LINKS |
| 0x12 | MISCHLUFT_RECHTS |
| 0x13 | MISCHLUFT |
| 0x14 | MISCHLUFT_HINTEN_LINKS |
| 0x15 | MISCHLUFT_HINTEN_RECHTS |
| 0x16 | MISCHLUFT_HINTEN |
| 0x17 | TEMPERATUR_LUFTVERTEILUNG_HINTEN |
| 0x18 | INDIREKTE_BELUEFTUNG |
| 0x19 | ZENTRALANTRIEB |
| 0x1A | LUFTVERTEILUNG_LINKS |
| 0x1B | LUFTVERTEILUNG_RECHTS |
| 0x1C | LUFTVERTEILUNG |
| 0x1D | FUSSRAUM |
| 0x1E | BELUEFTUNG_ENTFROSTUNG |

### TAB_KLIMA_ECU_HW_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x01 | IHKA High mit 3te LIN |
| 0x02 | IHKA High ohne 3te LIN |
| 0x03 | IHKA Low mit 3te LIN |
| 0x04 | IHKA Low ohne 3te LIN |
| 0x05 | HKA |
| 0x06 | IHKA Mid mit 3te LIN |
| 0x07 | IHKA Mid ohne 3te LIN |
| 0xFF | Ungültiger Wert |

### TAB_KLIMA_KAELTEMITTEL

| WERT | TEXT |
| --- | --- |
| 0x00 | R134A |
| 0x01 | R1234YF |
| 0x02 | CO2 |
| 0xFF | Ungültiger Wert |

### TAB_KLIMA_LEDS_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_LEDS_AUS |
| 0x01 | ALLE_LEDS_AN |

### TAB_KLIMA_SCHEIBENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | Getaktet |
| 0xFF | Ungültiger Wert |

### TAB_KLIMA_VARIANTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | IHKR |
| 0x01 | IHKA 1-zonig |
| 0x02 | IHKA 2-zonig |
| 0x03 | IHKA 2,5-zonig |
| 0x04 | IHKA 3-zonig |
| 0x05 | IHKA 4-zonig |
| 0xFF | ungltiger Wert |

### TAB_KLIMA_WASSERPUMPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Wasserpumpe |
| 0x01 | Schaltbare mechanische Wasserpumpe |
| 0x02 | Zusatzwasserpumpe |
| 0x03 | Zusatzwasserpumpe PWM |
| 0x04 | Elektrische Motorwasserpumpe |
| 0x05 | Wasserpumpe von Standheizung |
| 0x06 | LIN-Zusatzwasserpumpe |
| 0x07 | LIN-Zusatzwasserpumpe und Wasserpumpe von Standheizung |
| 0xFF | Ungültiger Wert |

### TAB_MOTOR_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor antwortet nicht |
| 0x01 | Initalisierungsfehler |
| 0x02 | Blockierungs |
| 0x03 | Interner Motorfehler |
| 0x04 | Ungültiger Wert |

### TAB_MOTOR_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht codiert |
| 0x01 | Nicht ansprechbar |
| 0x02 | Nicht kalibriert (Kalib. noch nicht durchgeführt) |
| 0x03 | Kalibrierung in Ordnung |
| 0x04 | Kalibrierung nicht in Ordnung |
| 0xFF | Ungültiger Wert |

### TAB_PRODUKTLINIE_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | LG_G |
| 0x01 | LK_M |
| 0x02 | LK_K |
| 0x03 | LG_X |
| 0x04 | LG_C |
| 0x05 | LU_BMW |
| 0x06 | LK_S |
| 0x07 | LK_X |
| 0x08 | LK_X_BEV |
| 0x09 | LK_K_BEV |
| 0xFF | ungültiger Wert |

### TAB_SELBSTTEST_KLAPPENMOTOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test ohne Fehler beendet |
| 0x03 | Test mit Fehler beendet, Ergebnis im Fehlerspeicher |
| 0xFF | Ungültiger Wert |

### TAB_SH_BETRIEBSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS-Bereit |
| 0x01 | AUS-Nachlauf |
| 0x02 | AUS-Störungsnachlauf_Gemeldet |
| 0x03 | AUS-Störungsnachlauf-Quittiert |
| 0x04 | EIN-Start |
| 0x05 | EIN-Regelpause |
| 0x06 | EIN-Heizgerät aktiv |
| 0x08 | AUS-Heizgeräteverriegelung |
| 0x09 | EIN-Nachlauf-Regelpause |
| 0x0F | Signal ungültig |

### TAB_SH_FUNKTIONSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausbrennen |
| 0x01 | Abschaltung |
| 0x02 | Ausbrennen TRS |
| 0x03 | Ausbrennrampe |
| 0x04 | Auszustand |
| 0x05 | Brennbetrieb Teillast |
| 0x06 | Brennbetrieb Volllast |
| 0x07 | Brennstofffördern |
| 0x08 | Brennermotorstart (Losreissen) |
| 0x09 | Brennstoffunterbrechung |
| 0x0A | Diagnosezustand |
| 0x0B | Dosierpumpenunterbrechung |
| 0x0C | EMK-Messung |
| 0x0D | Entprellen |
| 0x0E | EXIT |
| 0x0F | Flammwächterabfrage |
| 0x10 | Flammwächterkühlung |
| 0x11 | Flammwächter Messphase |
| 0x12 | Flammabfrage bei ZUE |
| 0x13 | Gebläseanlauf |
| 0x14 | Glühstiftrampe |
| 0x15 | Heizgeräteverriegelung |
| 0x16 | Initialisierung |
| 0x17 | Kraftstoffblasenüberbrückung |
| 0x18 | Kaltgebläseanlauf |
| 0x19 | Kaltstartanreicherung |
| 0x1A | Kühlung |
| 0x1B | LastwechselTeil-/Volllast |
| 0x1C | Lüften |
| 0x1D | LastwechselVoll-/Teillast |
| 0x1E | NeueInitialisierung |
| 0x1F | Regelbetrieb |
| 0x20 | Regelpause |
| 0x21 | Sanftanlauf |
| 0x22 | Sicherheitszeit |
| 0x23 | Spülen |
| 0x24 | Start |
| 0x25 | Stabilisierung |
| 0x26 | Startrampe |
| 0x27 | Stromlos |
| 0x28 | Störverriegelung |
| 0x29 | Störverriegelung TRS |
| 0x2A | Stabilisierungszeit |
| 0x2B | Übergang Regelbetrieb |
| 0x2C | Entscheidungsknoten |
| 0x2D | Vorfördern |
| 0x2E | Vorglühen |
| 0x2F | Vorglühen Leistungsregelung |
| 0x30 | VerzögerungvorAbregeln |
| 0x31 | Zähgebläseanlauf |
| 0x32 | Zuglühen |
| 0x33 | Zündpause |
| 0x34 | Zündung |
| 0x35 | Zwischenglühen |
| 0x36 | Applikationsüberwachung |
| 0x37 | Heizgeräteverriegelungsabspeicherung |
| 0x38 | Heizgeräteentriegelung |
| 0x39 | Heizleistungsregelung |
| 0x3A | Umwälzpumpenregelung |
| 0x3B | InitialisierungµP |
| 0x3C | Fremdlichtabfrage |
| 0x3D | Vorlauf |
| 0x3E | Vorzündung |
| 0x3F | Flammzündung |
| 0x40 | Flammstabilisierung |
| 0x41 | Brennbetrieb Standheizen |
| 0x42 | Brennbetrieb Zuheizen |
| 0x43 | Brennstörung Standheizen |
| 0x44 | Brennstörung Zuheizen |
| 0x45 | AusNachlauf |
| 0x46 | Regelpause Nachlauf |
| 0x47 | Störnachlauf |
| 0x48 | Zeitlicher Störnachlauf |
| 0x49 | StörverriegelungUmwälzpumpe |
| 0x4A | Regelpause Standheizen |
| 0x4B | Regelpause Zuheizen |
| 0x4C | RegelpauseZuheizenmitUmwälzpumpe |
| 0x4D | Umwälzpumpe ohne Heizfunktion |
| 0x4E | WarteschleifeÜberspannung |
| 0x4F | Fehlerspeicher aktualisieren |
| 0x50 | Warteschleife |
| 0x51 | Komponententest |
| 0x52 | Boostbetrieb |
| 0x53 | Abkühlen |
| 0x54 | Heizgeräteverriegelung permanent |
| 0x55 | Gebläseunterbrechung |
| 0x56 | Brennermotor losreissen |
| 0x57 | Temperaturabfrage |
| 0x58 | Vorlauf Unterspannung |
| 0x59 | Unfallabfrage |
| 0x5A | Störnachlauf Magnetventil |
| 0x5B | Fehlerspeicher aktualisieren Magnetventil |
| 0x5C | Zeitlicher Störnachlauf Magnetventil |
| 0x5D | Startversuch |
| 0x5E | Vorlaufverlängerung |
| 0x5F | Brennbetrieb |
| 0x60 | zeitlicher Störnachlauf bei Unterspannung |
| 0x61 | Fehlerspeicher aktualisieren beim Ausschalten |
| 0x62 | Rampe Vollast |
| 0x63 | TRS-Kühlung |
| 0x64 | Restwärmenutzung |
| 0x65 | ADR-Zustand aktiviert |
| 0x66 | Bereit |
| 0x67 | Brennerregeneration  |
| 0x68 | Initialisierung_Prozess  |
| 0x69 | Sleep_Mode  |
| 0x6A | Fortsetzung Brennstofffördern  |
| 0x6B | Fortsetzung Stabilisierung, Kaltstart  |
| 0x6C | Fortsetzung Stabilisierung, Warmstart  |
| 0x6D | Nachlauframpe  |
| 0x6E | Restwärmenutzung  |
| 0x6F | Stabilisierung, Kaltstart  |
| 0x70 | PROCESSOR OFF  |
| 0x71 | WAIT STATE  |
| 0x72 | Fortsetzung Stabilisierung  |
| 0x73 | MOTOR CHECK  |
| 0x74 | FLAME MONITOR COOLING  |
| 0x75 | PRE-GLOWING1  |
| 0x76 | PRE-GLOWING2  |
| 0x77 | PRE-GLOWING2 Partial Load Start  |
| 0x78 | FLAME MONITOR CALIBRATION START |
| 0x79 | START1  |
| 0x7A | START2  |
| 0x7B | START3  |
| 0x7C | START4  |
| 0x7D | START5  |
| 0x7E | START6  |
| 0x7F | GLOW PLUG RAMP  |
| 0x80 | FLAME MONITOR MEASURUEMENT1 |
| 0x81 | FLAME MONITOR MEASURUEMENT2 |
| 0x82 | START1 Partial Load Start  |
| 0x83 | START2 Partial Load Start  |
| 0x84 | START3 Partial Load Start  |
| 0x85 | START4 Partial Load Start  |
| 0x86 | START5 Partial Load Start  |
| 0x87 | START6 Partial Load Start  |
| 0x88 | GLOW PLUG RAMP Partial Load Start |
| 0x89 | FLAME MONITOR MEASUREMENT1 Partial Load |
| 0x8A | FLAME MONITOR MEASUREMENT2 Partial Load |
| 0x8B | FULL LOAD  |
| 0x8C | RAMP DOWN  |
| 0x8D | PARTIAL LOAD  |
| 0x8E | RAMP UP  |
| 0x8F | PAUSE  |
| 0x90 | BURN-OUT Full Load  |
| 0x91 | BURN-OUT Partial Load  |
| 0x92 | BURN-OUT Start  |
| 0x93 | BURN-OUT Partial Load Start  |
| 0x94 | BURN-OUT Overheating  |
| 0x95 | COOL1  |
| 0x96 | FLAME MONITOR CALIBRATION  |
| 0x97 | COOL2  |
| 0x98 | BOOST  |
| 0x99 | CONTINUOUS COOLANT TEMPERATURE CONTROL |
| 0x9A | CONTINUOUS COOLANT TEMPERATURE CONTROL-HOLD |
| 0xA0 | Stabilisierung, Warmstart  |
| 0xA1 | Startrampe, Kaltstart  |
| 0xA2 | Startrampe, Warmstart  |
| 0xA3 | Test Restwärmenutzung  |

### TAB_SH_KRAFTSTOFFART

| WERT | TEXT |
| --- | --- |
| 0x01 | Benzin |
| 0x02 | Diesel |
| 0x03 | RME |
| 0xFF | ungültig |

### TAB_SH_TESTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Testlauf niO beendet oder Testlauf noch nicht gestartet |
| 0x01 | Testlauf iO beendet |
| 0x02 | Testbetrieb aktiv |
| 0xFF | ungültig |

### TAB_SOLLWERT_ORT

| WERT | TEXT |
| --- | --- |
| 0x01 | VORN |
| 0x02 | LINKS |
| 0x03 | RECHTS |
| 0x04 | FKA_LINKS |
| 0x05 | FKA_RECHTS |
| 0x06 | HINTEN |
| 0x07 | FKA_3SR |

### TAB_STATUS_AUTOADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung fehlgeschlagen |
| 0x01 | Autoadressierung erfolgreich |
| 0xFE | Motor nicht codiert |
| 0xFF | Ungültiger Wert |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x01 | Kalibrierlauf läuft gerade |
| 0x02 | Kalibrierlauf abgeschlossen |

### TAB_STATUS_RES_CUSTOMER_REQUEST

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiviert |
| 0x01 | aktiviert |
| 0xFE | nicht codiert |
| 0xFF | Wert ungültig |

### TAB_STAT_BF_4_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |
| 0x02 | nicht verbaut |
| 0x03 | Ungültig |
| 0x04 | gedrückt |
| 0x08 | nicht verbaut |
| 0x0C | Ungültig |
| 0x10 | gedrückt |
| 0x20 | nicht verbaut |
| 0x30 | Ungültig |
| 0x40 | gedrückt |
| 0x80 | nicht verbaut |
| 0xC0 | Ungültig |
| 0xFF | Ungültig |

### TAB_TASTENSTATUS_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | gedrückt |
| 0x02 | nicht verbaut |
| 0xFF | Ungültig |

### TAB_TASTEN_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x01 | AUC_UMLUFT |
| 0x02 | HHS |
| 0x03 | ENTFROSTUNG |
| 0x04 | KLIMA |
| 0x05 | MAX_AC |
| 0x06 | ALL |
| 0x07 | KLIMA_OFF |
| 0x08 | REST |
| 0x09 | AUTO |
| 0x0A | AUTO_LI |
| 0x0B | AUTO_RE |
| 0x0C | WIPPE_PLUS |
| 0x0D | WIPPE_MINUS |
| 0x0E | WIPPE_PLUS_LI |
| 0x0F | WIPPE_PLUS_RE |
| 0x10 | WIPPE_MINUS_LI |
| 0x11 | WIPPE_MINUS_RE |
| 0x12 | LV_TOGGLE |
| 0x13 | LV_TOGGLE_LINKS |
| 0x14 | LV_TOGGLE_RECHTS |
| 0x15 | LV_ENTFROSTUNG |
| 0x16 | LV_BELUEFTUNG |
| 0x17 | LV_FUSSRAUM |
| 0x18 | LV_BEIFAHRER_BELUEFTUNG |
| 0x19 | LV_BEIFAHRER_FUSSRAUM |
| 0x1A | HFS |
| 0x1B | SITZHEIZUNG_LI |
| 0x1C | SITZHEIZUNG_RE |
| 0x1D | SITZLUEFTUNG_LI |
| 0x1E | SITZLUEFTUNG_RE |
| 0x1F | FKA_AUTO |
| 0x20 | FKA_WIPPE_PLUS |
| 0x21 | FKA_WIPPE_MINUS |
| 0x22 | FKA_SITZHEIZUNG_LI |
| 0x23 | FKA_SITZHEIZUNG_RE |
| 0x24 | FKA_SITZLUEFTUNG_LI |
| 0x25 | FKA_SITZLUEFTUNG_RE |
| 0x26 | FKA_LV_TOGGLE |
| 0x27 | MENU_ODER_BEDUFTER |
| 0x28 | FKA_AC_MAX |

### TAB_TASTEN_KLIMA_FKA_3SR

| WERT | TEXT |
| --- | --- |
| 0x01 | FKA_3SR_KLIMA |
| 0x02 | FKA_3SR_MAX_A/C |
| 0x03 | FKA_3SR_KLIMA_OFF |
| 0x04 | FKA_3SR_AUTO |
| 0x05 | FKA_3SR_GEBLAESE_PLUS |
| 0x06 | FKA_3SR_GEBLASE_MINUS |
| 0x07 | FKA_3SR_TEMPERATUR_PLUS |
| 0x08 | FKA_3SR_TEMPERATUR_MINUS |
| 0x09 | FKA_3SR_LV_TOGGLE |
| 0x0A | FKA_3SR_SITZHEIZUNG_LINKS |
| 0x0B | FKA_3SR_SITZHEIZUNG_RECHTS |

### TAB_VERBAUORT_GEBLAESE

| WERT | TEXT |
| --- | --- |
| 0x01 | GEBLAESE_VORN |
| 0x02 | GEBLAESE_FKA |
| 0x03 | GEBLAESE_HKA |

### TAB_VERBAUORT_ZUHEIZER

| WERT | TEXT |
| --- | --- |
| 0x01 | ZUHEIZER_VORN |

### TAB_WP_VENTILE

| WERT | TEXT |
| --- | --- |
| 0x01 | ABSPERRVENTIL_1 |
| 0x02 | ABSPERRVENTIL_2 |
| 0x03 | ABSPERRVENTIL_3 |
| 0x04 | ABSPERRVENTIL_4 |
| 0x05 | EXPANSIONSVENTIL_1 |
| 0x06 | EXPANSIONSVENTIL_2 |
| 0x07 | EXPANSIONSVENTIL_3 |

### TAB_ZENTRALANTRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | ZENTRALANTRIEB |

### TAB_0X4001

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 |

### TAB_0X4010

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0010 | 0x0011 |

### TAB_0X4011

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0012 | 0x0013 |

### TAB_0X4021

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E |

### TAB_0X4031

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x001F | 0x0020 | 0x0021 |

### TAB_0X600C

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x000C |

### TAB_0XD6FF

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### UWB_BOTSCHAFTSAUSFALL_URSACHE

| WERT | TEXT |
| --- | --- |
| 0 | Diagnose Fehler. Eintrag ohne Ursache |
| 1 | Timeout |
| 2 | AliveCounter Fehler |
| 3 | Timeout + AliveCounter Fehler |
| 4 | CRC Fehler |
| 5 | Timeout + CRC Fehler |
| 6 | AliveCounter Fehler + CRC Fehler |
| 7 | Timeout + AliveCounter Fehler + CRC Fehler |
| 8 | Signal ungueltig |
| 9 | Timeout + Signal ungueltig |
| 10 | AliveCounter Fehler + Signal ungueltig |
| 11 | Timeout + AliveCounter Fehler + Signal ungueltig |
| 12 | CRC Fehler + Signal ungueltig |
| 13 | Timeout + CRC Fehler + Signal ungueltig |
| 14 | AliveCounter Fehler + CRC Fehler + Signal ungueltig |
| 15 | Timeout + AliveCounter Fehler + CRC Fehler + Signal ungueltig |
| 0xFF | Wert ungültig |

### UWB_OBDR_EKMV_SHUTDOWN_REFRIGERANT_PRESSURE_STATUS_TABLE

| WERT | TEXT |
| --- | --- |
| 0xFFFF | Wert ungültig |

### WERTETABELLE_OBDM_UW_JHUDM

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Umweltbedingung gesetzt |
| 0x01 | MaxMux!=Erwartungswert |
| 0x02 | MuxImme groesser MaxMux |
| 0x03 | MaxMux!=Erwartungswert & MuxImme groesser MaxMux |
| 0x04 | MuxImme reserviert oder ungueltig |
| 0x05 | MaxMux!=Erwartungswert & MuxImme reserviert oder ungueltig |
| 0x06 | MuxImme groesser MaxMux & MuxImme reserviert oder ungueltig |
| 0x07 | MaxMux!=Erwartungswert & MuxImme groesser MaxMux & MuxImme reserviert oder ungueltig |
| 0x08 | MuxImme wurde nicht empfangen |
| 0x09 | MaxMux!=Erwartungswert & MuxImme wurde nicht empfangen |
| 0x0a | MuxImme groesser MaxMux & MuxImme wurde nicht empfangen |
| 0x0b | MaxMux!=Erwartungswert & MuxImme groesser MaxMux & MuxImme wurde nicht empfangen |
| 0x0c | MuxImme reserviert oder ungueltig & MuxImme wurde nicht empfangen |
| 0x0d | MaxMux!=Erwartungswert & MuxImme reserviert oder ungueltig & MuxImme wurde nicht empfangen |
| 0xFF | Wert ungültig |
| 0x0e | MuxImme groesser MaxMux & MuxImme reserviert oder ungueltig & MuxImme wurde nicht empfangen |
| 0x0f | MaxMux!=Erwartungswert & MuxImme groesser MaxMux & MuxImme reserviert oder ungueltig & MuxImme wurde nicht empfangen |
