# IHKA1RR.prg

## General

|  |  |
| --- | --- |
| File | IHKA1RR.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 100 |
| Origin | BMW LR-EI-2 Michael_Holzner |
| Revision | 2.000 |
| Author | BMW LR-EI-3 Stamboliev |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimaautomatik 1 Rolls Royce |  |  |
| ORIGIN | string | BMW LR-EI-2 Michael_Holzner |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW LR-EI-3 Stamboliev |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.84 |  |  |
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
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

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

### ARG_0XA11E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR | + | - | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | - | - | Name des Klappenmotor (Siehe Tabelle TAB_KLAPPENMOTOR) |

### ARG_0XA11F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPENMOTOR | + | - | 0-n | high | unsigned char | - | TAB_KLAPPENMOTOR | - | - | - | - | - | Name des Klappenmotor (Siehe Tabelle TAB_KLAPPENMOTOR) |

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
| VERBAUORT_GEBLAESE | + | - | 0-n | high | unsigned char | - | TAB_VERBAUORT_GEBLAESE | - | - | - | - | - | Verbauort Gebläse |
| GEBLAESELEISTUNG | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XA12A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLWERT_ORT | + | - | 0-n | high | unsigned char | - | TAB_SOLLWERT_ORT | - | - | - | - | - | Ort der einzustellenden Sollwert-Temperatur. Siehe TAB_SOLLWERT_ORT |
| TEMPERATUR | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Sollwert-Temperatur in % (0% entspricht 16°C; 100% entspricht 28°C) |

### ARG_0XA12B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ZUHEIZER | + | - | 0-n | high | unsigned char | - | TAB_VERBAUORT_ZUHEIZER | - | - | - | - | - | Gibt an, welcher elektrische Zuheizer angesteuert werden. Siehe Tabelle TAB_VERBAUORT_ZUHEIZER |
| SOLLWERT | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### ARG_0XA12E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTR_MOD_IZR | + | - | 0-n | high | unsigned char | - | TAB_IONISATOR_KLIMA | - | - | - | - | - | Steuern des Ionisators. |

### ARG_0XD918_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### ARG_0XD927_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD994_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_KLIMASTIL_LINKS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | - | - | Vorgabe des eingestellten Klimastils vorn links. |
| STAT_KLIMA_VORN_KLIMASTIL_RECHTS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | - | - | Vorgabe des eingestellten Klimastils vorn rechts. |
| STAT_KLIMA_HINTEN_KLIMASTIL_LINKS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | - | - | Vorgabe des eingestellten Klimastils hinten links. |
| STAT_KLIMA_HINTEN_KLIMASTIL_RECHTS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | - | - | Vorgabe des eingestellten Klimastils hinten rechts. |
| STAT_KLIMA_HINTEN_KLIMASTIL_ZENTRAL | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | - | - | Vorgabe des eingestellten Klimastils hinten zentral. |

### ARG_0XD9A7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### BF_GEBLAESE_FKA_LI_RE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_FKA_GEBL_LI | 0-n | high | unsigned char | 0x0F | TAB_GEBLAESESTUFEN_RR_FOND | - | - | - | Gebläsestufe FKA links |
| STAT_KLIMA_FKA_GEBL_RE | 0-n | high | unsigned char | 0xF0 | TAB_GEBLAESESTUFEN_RR_FOND | - | - | - | Gebläsestufe FKA rechts |

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
| STAT_TRENNWAND_CODIERT | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | 0 = Nicht codiert, 1 = codiert |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027800 | Energiesparmode aktiv | 0 |
| 0x027808 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x027809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02780A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02780B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02780C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02780D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF78 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x801100 | Motor Frischluft oder Frischluft-Umluft: Blockierung | 0 |
| 0x801101 | Motor Frischluft oder Frischluft-Umluft: interner Motorfehler | 0 |
| 0x801102 | Motor Frischluft oder Frischluft-Umluft: Initialisierungsfehler | 0 |
| 0x801103 | Motor Umluft: Blockierung | 0 |
| 0x801104 | Motor Umluft: interner Motorfehler | 0 |
| 0x801105 | Motor Umluft: Initialisierungsfehler | 0 |
| 0x801106 | Motor Entfrostung: Blockierung | 0 |
| 0x801107 | Motor Entfrostung: interner Motorfehler | 0 |
| 0x801108 | Motor Entfrostung: Initialisierungsfehler | 0 |
| 0x801109 | Motor Belüftung links: Blockierung | 0 |
| 0x80110A | Motor Belüftung links: Initialisierungsfehler | 0 |
| 0x80110B | Motor Belüftung links: Interner Motorfehler | 0 |
| 0x80110C | Motor Belüftung rechts: Blockierung | 0 |
| 0x80110D | Motor Belüftung rechts: interner Motorfehler | 0 |
| 0x80110E | Motor Belüftung rechts: Initialisierungsfehler | 0 |
| 0x80110F | Motor Schichtung links: Blockierung | 0 |
| 0x801110 | Motor Schichtung links: interner Motorfehler | 0 |
| 0x801111 | Motor Schichtung links: Initialisierungsfehler | 0 |
| 0x801112 | Motor Schichtung rechts: Blockierung | 0 |
| 0x801113 | Motor Schichtung rechts: interner Motorfehler | 0 |
| 0x801114 | Motor Schichtung rechts: Initialisierungsfehler | 0 |
| 0x801115 | Motor Fussraum links: Blockierung | 0 |
| 0x801116 | Motor Fussraum links: interner Motorfehler | 0 |
| 0x801117 | Motor Fussraum links: Initialisierungsfehler | 0 |
| 0x801118 | Motor Fussraum rechts: Blockierung | 0 |
| 0x801119 | Motor Fussraum rechts: interner Motorfehler | 0 |
| 0x80111A | Motor Fussraum rechts: Initialisierungsfehler | 0 |
| 0x80111B | Motor Luftverteilung hinten links: Blockierung | 0 |
| 0x80111C | Motor Luftverteilung hinten links: interner Motorfehler | 0 |
| 0x80111D | Motor Luftverteilung hinten links: Initialisierungsfehler | 0 |
| 0x80111E | Motor Luftverteilung hinten rechts: Blockierung | 0 |
| 0x80111F | Motor Luftverteilung hinten rechts: interner Motorfehler | 0 |
| 0x801120 | Motor Luftverteilung hinten rechts: Initialisierungsfehler | 0 |
| 0x801121 | Motor Mischluft links: Blockierung | 0 |
| 0x801122 | Motor Mischluft links: Initialisierungsfehler | 0 |
| 0x801123 | Motor Mischluft links: interner Motorfehler | 0 |
| 0x801124 | Motor Mischluft rechts: Blockierung | 0 |
| 0x801125 | Motor Mischluft rechts: interner Motorfehler | 0 |
| 0x801126 | Motor Mischluft rechts: Initialisierungsfehler | 0 |
| 0x801127 | Motor Mischluft hinten links: Blockierung | 0 |
| 0x801128 | Motor Mischluft hinten links: interner Motorfehler | 0 |
| 0x801129 | Motor Mischluft hinten links: Initialisierungsfehler | 0 |
| 0x80112A | Motor Mischluft hinten rechts: Blockierung | 0 |
| 0x80112B | Motor Mischluft hinten rechts: interner Motorfehler | 0 |
| 0x80112C | Motor Mischluft hinten rechts: Initialisierungsfehler | 0 |
| 0x80115E | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0x80115F | Mischverbau: Klappenmotoren von verschiedenen Hersteller erkannt | 0 |
| 0x801160 | Verdampfertemperatursensor: Kurzschluss nach Minus | 0 |
| 0x801161 | Verdampfertemperatursensor: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801168 | Belüftungstemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x801169 | Belüftungstemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80116A | Belüftungstemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x80116B | Belüftungstemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80116C | Fussraumtemperatursensor links: Kurzschluss nach Minus | 0 |
| 0x80116D | Fussraumtemperatursensor links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80116E | Fussraumtemperatursensor rechts: Kurzschluss nach Minus | 0 |
| 0x80116F | Fussraumtemperatursensor rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801198 | Gebläseendstufe: Interner Fehler | 0 |
| 0x801199 | Gebläseendstufe: Kurzschluss oder blockiert | 0 |
| 0x80119A | Gebläseendstufe: Übertemperaturbegrenzung aktiv | 1 |
| 0x8011A0 | Plunger Mitte links: Kurzschluss nach Minus | 0 |
| 0x8011A1 | Plunger Mitte links: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011A2 | Plunger Mitte rechts: Kurzschluss nach Minus | 0 |
| 0x8011A3 | Plunger Mitte rechts: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x801208 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x801209 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 |
| 0x80120A | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0x80120B | Kompressor: Abschaltung wegen Unterdruck im Kältemittelkreislauf | 0 |
| 0x801228 | IHKA Bedienteil: Interner Fehler | 0 |
| 0x801229 | IHKA Bedienteil: Falsche Variante verbaut | 0 |
| 0x801230 | Ionisator: Interner Modulfehler | 0 |
| 0x801231 | Ionisator: Emmitent(en) nicht gesteckt | 0 |
| 0x801240 | PTC-Modul vorn: Kurzschluss im Heizstrang | 0 |
| 0x801242 | PTC-Modul vorn: Übertemperatur | 1 |
| 0x801244 | PTC-Modul vorn: Unter- oder Überspannung | 0 |
| 0x801246 | PTC-Modul vorn: Unterbrechung im Heizstrang | 0 |
| 0x801308 | AC-LIN Spannungsversorgung: Kurzschluss nach Masse | 0 |
| 0x801309 | AC-LIN Spannungsversorgung: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x80130A | Keine Kommunikation über AC-LIN möglich | 0 |
| 0x80130B | Keine Kommunikation über AC-LIN2 möglich | 0 |
| 0x80130D | Keine Kommunikation über K-LIN möglich | 0 |
| 0x801310 | Interner Steuergerätefehler | 0 |
| 0x801318 | IHKA: 12V Unterspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0x801319 | IHKA: 12V Überspannung erkannt. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0x801329 | Standklimatisierung: Abbruch, Verhinderung wegen Niedervolt-Powermanagement (Verbraucherabschaltung) | 1 |
| 0x80132E | Standklimatisierung: Funktionsabschaltung - Maximale Laufzeit erreicht ODER Voraussetzungen nicht mehr erfüllt | 1 |
| 0x801358 | Gebläseendstufe, PWM-Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x801359 | Gebläseendstufe, PWM-Signalleitung: Kurzschluss nach Plus | 0 |
| 0x801368 | FKA Bedienteil links oder Mitte: Interner Fehler | 0 |
| 0x801369 | FKA Bedienteil links oder Mitte: Falsche Variante verbaut | 0 |
| 0x80136A | FKA Bedienteil rechts: Interner Fehler | 0 |
| 0x80136B | FKA Bedienteil rechts: Falsche Variante verbaut | 0 |
| 0x8013FA | Micro-Controller Peripherie Fehler (IHKA) | 0 |
| 0x8013FB | RAM Speicher Fehler (IHKA) | 0 |
| 0x8013FC | ROM/Flash Speicher Fehler (IHKA) | 0 |
| 0x8013FD | EEPROM Speicher Fehler (IHKA) | 0 |
| 0x8013FE | Software Laufzeitfehler (IHKA) | 0 |
| 0x8013FF | Software Watchdogfehler (IHKA) | 0 |
| 0xE70415 | IuK-CAN Physikalischer Busfehler | 0 |
| 0xE7041E | IuK-CAN Control Module Bus OFF | 0 |
| 0xE70BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE70C00 | AC-LIN: Motor Frischluft oder Frischluft-Umluft antwortet nicht | 0 |
| 0xE70C01 | AC-LIN: Motor Umluft antwortet nicht | 0 |
| 0xE70C02 | AC-LIN: Motor Entfrostung antwortet nicht | 0 |
| 0xE70C03 | AC-LIN: Motor Belüftung links antwortet nicht | 0 |
| 0xE70C04 | AC-LIN: Motor Belüftung rechts antwortet nicht | 0 |
| 0xE70C05 | AC-LIN: Motor Schichtung links antwortet nicht | 0 |
| 0xE70C06 | AC-LIN: Motor Schichtung rechts antwortet nicht | 0 |
| 0xE70C07 | AC-LIN: Motor Fussraum links antwortet nicht | 0 |
| 0xE70C08 | AC-LIN: Motor Fussraum rechts antwortet nicht | 0 |
| 0xE70C09 | AC-LIN: Motor Luftverteilung hinten links antwortet nicht | 0 |
| 0xE70C0A | AC-LIN: Motor Luftverteilung hinten rechts antwortet nicht | 0 |
| 0xE70C0B | AC-LIN: Motor Mischluft links antwortet nicht | 0 |
| 0xE70C0C | AC-LIN: Motor Mischluft rechts antwortet nicht | 0 |
| 0xE70C0D | AC-LIN: Motor Mischluft hinten links antwortet nicht | 0 |
| 0xE70C0E | AC-LIN: Motor Mischluft hinten rechts antwortet nicht | 0 |
| 0xE70C2D | AC-LIN: Gebläseendstufe antwortet nicht | 0 |
| 0xE70C2E | AC-LIN: Elektrischer Zuheizer antwortet nicht | 0 |
| 0xE70C32 | K-LIN: IHKA-Bedienteil antwortet nicht | 0 |
| 0xE70C33 | K-LIN: FKA-Bedienteil links oder Mitte antwortet nicht | 0 |
| 0xE70C34 | K-LIN: FKA-Bedienteil rechts antwortet nicht | 0 |
| 0xE70C3B | AC-LIN: Ionisator antwortet nicht | 0 |
| 0xE71400 | Botschaft (0x2CA, Außentemperatur): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0xE71401 | Botschaft (0x202, Dimmung): Ausfall | 1 |
| 0xE71402 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0xE71403 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xE71406 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 |
| 0xE71407 | Botschaft (0x3D3, Status Solarsensor): Ausfall | 1 |
| 0xE71408 | Botschaft (0x22A, Status BFS): Ausfall | 1 |
| 0xE71409 | Botschaft (0x2D2 Status Druck Kältekreislauf): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0xE7140A | Botschaft (0x232, Status FAS): Ausfall | 1 |
| 0xE7140B | Botschaft (0x2D1, Status Beschlag Scheibe V): Ausfall | 1 |
| 0xE7140E | Botschaft (0x2D0, Status Sensor AUC): Ausfall | 1 |
| 0xE71410 | Botschaft (0x2D6, Status Ventil Klimakompressor): Ausfall | 1 |
| 0xE71411 | Botschaft (0x2CF, Status Zusatzwasserpumpe): Ausfall | 1 |
| 0xE71413 | Botschaft (0x0A5, Drehmoment Kurbelwelle 1): Ausfall | 1 |
| 0xE71414 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE71415 | Botschaft (0x3FB, Daten Antriebsstrang 1): Ausfall | 1 |
| 0xE71416 | Botschaft (0x1B9, Wärmemanagement Motorsteuerung): Ausfall | 1 |
| 0xE71417 | Signal (Temperatur_Außen in 0x2CA): ungültig empfangen | 1 |
| 0xE71418 | Signal (Steuerung_Beleuchtung_Schalter in 0x202): ungültig empfangen | 1 |
| 0xE7141A | Signal (Temperatur_Motor_Antrieb in 0x3F9): ungültig empfangen | 1 |
| 0xE7141C | Signal (Status_Solarsensor_BF in 0x3D3): ungültig empfangen | 1 |
| 0xE7141D | Signal (Status_Solarsensor_FA in 0x3D3): ungültig empfangen | 1 |
| 0xE7141E | Signal (Status_Sitzheizung_BF in 0x22A): ungültig empfangen | 1 |
| 0xE7141F | Signal (Status_Sitzklima_BF in 0x22A): ungültig empfangen | 1 |
| 0xE71420 | Signal (Daten_Drucksensor_Kältekreislauf in 0x2D2): ungültig empfangen | 1 |
| 0xE71421 | Signal (Status_Sitzheizung_FA in 0x232): ungültig empfangen | 1 |
| 0xE71422 | Signal (Status_Sitzklima_FA in 0x232): ungültig empfangen | 1 |
| 0xE71423 | Signal (Daten_Beschlag_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0xE71429 | Signal (Daten_Sensor_AUC in 0x2D0): ungültig empfangen | 1 |
| 0xE7142C | Signal (Status_Klima_Kompressor_Kupplung in 0x2D6): ungültig empfangen | 1 |
| 0xE7142D | Signal (Status_Zusatzwasserpumpe in 0x2CF): ungültig empfangen | 1 |
| 0xE71431 | Signal (Ist_Drehzahl_Motor_Kurbelwelle in 0x0A5): ungültig empfangen | 1 |
| 0xE71432 | Signal (Geschwindigkeit_Fahrzeug_Schwerpunkt in 0x1A1): ungültig empfangen | 1 |
| 0xE71436 | Signal (Steuerung_Standverbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71439 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall. (OBD-relevant für Hybridfahrzeuge.) | 1 |
| 0xE7144D | Signal (Daten_Temperatur_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6002 | FUELLSTAND_TANK | l | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x600A | STAT_KLIMA_STAND | 0/1 | High | 0x01 | - | - | - | - |
| 0x600B | RQR_PFN | 0/1 | High | 0x01 | - | - | - | - |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x80119B | Gebläseendstufe: Unter- oder Überspannung erkannt | 1 |
| 0x80119D | Gebläseendstufe: Strombegrenzung aktiv | 1 |
| 0x801241 | PTC-Modul vorn: Kommunikationsfehler | 1 |
| 0x801243 | PTC-Modul vorn: Reduzierung Heizleistung wegen Powermanagement | 1 |
| 0x801245 | PTC-Modul vorn: Timeout | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6002 | FUELLSTAND_TANK | l | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

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
| STAT_ADRESSIERUNG_RESERVE5 | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
| STAT_ADRESSIERUNG_RESERVE6 | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_AUTOADRESSIERUNG | 1.0 | 1.0 | 0.0 | Status der Autoadressierung. Siehe Tabelle TAB_STATUS_AUTOADRESSIERUNG |
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
| STAT_TASTE_LENKRADHEIZUNG_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_RESERVIERT3_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |
| STAT_TASTE_FKA_WIPPE_PLUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_WIPPE_MINUS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_LV_TOGGLE_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SH_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SH_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SL_LINKS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_SL_RECHTS_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_MAX_AC_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_AUTO_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | 0=Taste nicht betätigt, 1=Taste betätigt, 2=nicht verbaut |
| STAT_TASTE_FKA_RESERVIERT3_EIN | - | - | + | 0-n | high | unsigned char | - | TAB_TASTENSTATUS_KLIMA | - | - | - | Reserviertes Result |

### RES_0XA128_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEBLAESE_VORN_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung vorn |
| STAT_GEBLAESE_FKA_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung FKA links |
| STAT_GEBLAESE_FKA_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung FKA rechts |
| STAT_GEBLAESE_FKA_MITTE_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gebläseleistung FKA Mitte |

### RES_0XA12A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLWERT_TEMPERATUR_OBEN_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_UNTEN_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_OBEN_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_UNTEN_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_FKA_RECHTS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |
| STAT_SOLLWERT_TEMPERATUR_FKA_LINKS_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Temperatur in % des Verstellbereiches. (0% = kalt; 100% = warm; 255 = Zone nicht codiert) |

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

### RES_0XA133_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEFUELLUNG_KAELTEMITTEL | - | - | + | 0-n | high | unsigned char | - | TAB_BEFUELLUNG_KAELTEMITTEL | - | - | - | 0x00 Diagnosejob läuft nicht; 0x01 Diagnosejob gestartet, alle Ventile in der erforderlichen Position bzw. keine relevanten Ventile vorhanden; 0x02 Diagnosejob gestartet, jedoch mind. 1 Ventil nicht in der erforderlichen Position |

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
| STAT_TEMP_INNENRAUM_HINTEN_UNGEDAEMPFT_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ungedämpfter Innenraumtemperatursensor hinten |
| STAT_TEMP_RESERVE_3_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_TEMP_RESERVE_4_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |
| STAT_TEMP_RESERVE_5_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 5 |
| STAT_TEMP_RESERVE_6_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Reserve 6 |

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
| STAT_BUS_IN_DREHMOMENT_FREIGABE_WERT | Nm | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Seitens DME/DDE maximal freigegebenes Drehmoment für den mKMV (Signal LIN_TORQ_CRSH_ACCM). Wertebereich 0 .. 30 Nm (nur für mKMV verwendet) |
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
| STAT_KLIMA_VORN_PRG_LRH_EIN | 0-n | high | unsigned char | - | TAB_KLIMA_LENKRADHEIZUNG | - | - | - | Lenkradheizung:  Siehe Tabelle TAB_KLIMA_LENKRADHEIZUNG |
| STAT_KLIMA_VORN_PRG_DEFROST_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Defrost-Programm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_AUTO_LINKS_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AUTO_RECHTS_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AUTO_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_PRG_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaprogramm: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_MAX_AC_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm maximal Kühlen: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_STANDHEIZEN_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm Standheizung: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Programm Standlüften: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_OFF_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Klimaanlage OFF: 0 = Klimanalage EIN, 1 = Klimaanlage AUS |
| STAT_KLIMA_VORN_GEBL_LI_STUFE | 0-n | high | unsigned char | - | TAB_GEBLAESESTUFEN_RR | - | - | - | Gebläsestufe links |
| STAT_KLIMA_VORN_GEBL_RE_STUFE | 0-n | high | unsigned char | - | TAB_GEBLAESESTUFEN_RR | - | - | - | Gebläsestufe rechts |
| - | Bit | high | BITFIELD | - | BF_GEBLAESE_FKA_LI_RE | - | - | - | Gebläsestufe FKA links/rechts |
| STAT_KLIMA_SH_VORN_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_VORN_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_VORN_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_VORN_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_FKA_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SH_FKA_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzheizung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_FKA_LINKS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_SL_FKA_RECHTS_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Sitzlüftung: 0..3, 255 = ungültig |
| STAT_KLIMA_FKA_GEBL_STUFE | 0-n | high | unsigned char | - | TAB_GEBLAESESTUFEN_RR | - | - | - | Gebläsestufe FKA |

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

### RES_0XD993_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDLAGESCHALTER_PLUNGER_VORNE_LI_AUSSEN_EIN | 0-n | high | unsigned char | - | TAB_PLUNGER_ENDLAGENSCHALTER | - | - | - | Status des Endlageschalters am Plunger vorne links aussen: 0 = offen, 1 = geschlossen |
| STAT_ENDLAGESCHALTER_PLUNGER_VORNE_RE_AUSSEN_EIN | 0-n | high | unsigned char | - | TAB_PLUNGER_ENDLAGENSCHALTER | - | - | - | Status des Endlageschalters am Plunger vorne rechts aussen: 0 = offen, 1 = geschlossen |
| STAT_PLUNGER_VORNE_LI_MITTE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der aktuellen Position Plunger vorne Mitte links (0...100%; 255 = Signal ungültig) |
| STAT_PLUNGER_VORNE_RE_MITTE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der aktuellen Position Plunger vorne Mitte rechts (0...100%; 255 = Signal ungültig) |
| STAT_PLUNGER_HINTEN_LI_AUSSEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Plunger hinten Aussen li (0%=offen; 100%=geschl.; 255=Signal ungültig) |
| STAT_PLUNGER_HINTEN_RE_AUSSEN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Plunger hinten Aussen rechts (0%=offen; 100%=geschl.; 255=Signal ungültig) |
| STAT_ENDLAGESCHALTER_PLUNGER_HINTEN_LI_MITTE_EIN | 0-n | high | unsigned char | - | TAB_PLUNGER_ENDLAGENSCHALTER | - | - | - | Status des Endlageschalters am Plunger hinten Mitte links: 0 = offen, 1 = geschlossen. |
| STAT_ENDLAGESCHALTER_PLUNGER_HINTEN_RE_MITTE_EIN | 0-n | high | unsigned char | - | TAB_PLUNGER_ENDLAGENSCHALTER | - | - | - | Status des Endlageschalters am Plunger hinten rechts Mitte: 0 = offen, 1 = geschlossen |

### RES_0XD994_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_KLIMASTIL_LINKS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Klimastils am Wählrad vorn links. |
| STAT_KLIMA_VORN_KLIMASTIL_RECHTS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Klimastils am Wählrad vorn rechts. |
| STAT_KLIMA_HINTEN_KLIMASTIL_LINKS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Klimastils am Wählrad hinten links. |
| STAT_KLIMA_HINTEN_KLIMASTIL_RECHTS | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Klimastils am Wählrad hinten rechts. |
| STAT_KLIMA_HINTEN_KLIMASTIL_ZENTRAL | 0-n | high | unsigned char | - | TAB_KLIMASTIL_STUFEN | - | - | - | Ausgabe des eingestellten Klimastils am Wählrad hinten rechts. |

### RES_0XD9A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | Freigabe für Einlaufschutz: 0 = Keine Freigabe (gesperrt) = Einlaufroutine kann nicht automatisch gestartet werden. 1 = Freigabe nach Einschaltbedingungen |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| KLAPPENMOTOR_EINZELABFRAGE | 0xA11E | - | Status und Werte eines Klappenmotors | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA11E_R | RES_0xA11E_R |
| KLAPPENMOTOR_EINZELTEST | 0xA11F | - | Klappenmotoren Einzeltest | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA11F_R | RES_0xA11F_R |
| KLAPPENMOTOREN_SELBSTTEST | 0xA120 | - | Klappenmotoren Selbsttest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA120_R |
| KLAPPENMOTOREN_POSITIONEN | 0xA122 | - | Klappenmotoren Positionen 0..100 % | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA122_R | RES_0xA122_R |
| KLAPPENMOTOR_KALIBRIERLAUF | 0xA124 | - | Kalibrierlauf Klappenmotoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA124_R |
| KLAPPENMOTOREN_AUTOADRESSIERUNG | 0xA125 | - | Autoadressierung der Klappenmotoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA125_R |
| TASTEN_KLIMA_BT | 0xA126 | - | Tasten im Bedienteil Klima | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA126_R | RES_0xA126_R |
| LEDS_KLIMA_BT | 0xA127 | - | LEDs vom Klima Bedienteil | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA127_R | - |
| GEBLAESE_KLIMA | 0xA128 | - | Gebläsesteuerung Klima IHKA, FKA, HKA | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA128_R | RES_0xA128_R |
| SOLLWERT_TEMPERATUREN_KLIMA | 0xA12A | - | Sollwert-Temperaturen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12A_R | RES_0xA12A_R |
| ZUHEIZER_PTC_EDH | 0xA12B | - | Elektrischer Zuheizer PTC-Modul und eDH-Modul | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12B_R | RES_0xA12B_R |
| LIN_KLIMA | 0xA12C | - | LIN-Bus der Klima | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA12C_R |
| IONISATOR_KLIMA | 0xA12E | - | Ionisator | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA12E_R | RES_0xA12E_R |
| BEFUELLUNG_KAELTEMITTEL | 0xA133 | - | Steuerung der Ventile im Kältemittelkreislauf für die Befüllung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA133_R |
| IHKA_KONFIGURATION | 0xD8D5 | - | Konfiguration vom Klimasteuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D5_D |
| TEMPERATURSENSOREN_KLIMA | 0xD8D7 | - | Temperatursensoren Klimaanlage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D7_D |
| BUS_IN_SIGNALE_KLIMA | 0xD8D9 | - | Eingehende Signale über Systembus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8D9_D |
| FUNKTIONSSTATUS_KLIMA | 0xD8DB | - | Funktionsstatus der Klimaanlage | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DB_D |
| SOLLWERT_ELEKTRISCHER_ZUHEIZER_VORN | 0xD902 | STAT_SOLLWERT_ELEKTRISCHER_ZUHEIZER_WERT | Elektrischer Zuheizer (PTC oder EDH) Sollwert in Prozent 0 - 100 % | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | - | Ermittlung der verbleibenden Restzeit beim Einlaufschutz. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD905_D |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder Schreiben des neuen Status. Erst nach vollständigem Einlauf wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918_D | RES_0xD918_D |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927_D | - |
| PLUNGER | 0xD993 | - | Plunger Belüftungsklappen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD993_D |
| KLIMA_KLIMASTIL_SOLLWERT | 0xD994 | - | Klimastil an den Wahlrädern | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD994_D | RES_0xD994_D |
| FREIGABE_KOMPRESSOREINLAUF | 0xD9A7 | - | Freigabe für Kompressoreinlauf | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD9A7_D | RES_0xD9A7_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _STAT_FASTA_DATEN_LESEN | 0x4031 | STAT_FASTA_DATEN_DATA | Ausgabe der Fasta Daten | DATA | - | High | data[169] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |

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

### TAB_GEBLAESESTUFEN_RR

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | SOFT |
| 0x02 | Zwischenposition SOFT/MEDIUM |
| 0x03 | MEDIUM |
| 0x04 | Zwischenposition MEDIUM/HIGH |
| 0x05 | HIGH |
| 0x0E | MAX |
| 0x0F | ungültig |
| 0xFF | Wert ungültig |

### TAB_GEBLAESESTUFEN_RR_FOND

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | SOFT |
| 0x02 | Zwischenposition SOFT/MEDIUM |
| 0x03 | MEDIUM |
| 0x04 | Zwischenposition MEDIUM/HIGH |
| 0x05 | HIGH |
| 0x0E | MAX |
| 0x0F | ungültig |
| 0x10 | SOFT |
| 0x20 | Zwischenposition SOFT/MEDIUM |
| 0x30 | MEDIUM |
| 0x40 | Zwischenposition MEDIUM/HIGH |
| 0x50 | HIGH |
| 0xE0 | MAX |
| 0xF0 | ungültig |
| 0xFF | Wert ungültig |

### TAB_IONISATOR_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | Ionisator aus |
| 0x01 | Kundenmodus |
| 0x02 | Prüfmodus |
| 0xFF | Ungültiger Wert |

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

### TAB_KLIMASTIL_STUFEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Klima aus |
| 0x01 | Klimastil Low |
| 0x02 | Klimastil Low-Medium |
| 0x03 | Klimastil Medium |
| 0x04 | Klimastil Medium-High |
| 0x05 | Klimastil High |
| 0x06 | Klima Max AC |

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

### TAB_KLIMA_LENKRADHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | Getaktet |
| 0xFF | Wert ungültig |

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

### TAB_PLUNGER_ENDLAGENSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0xFD | nicht codiert oder an IHKA2RR angeschlossen |
| 0xFE | nicht codiert oder an IHKA1RR angeschlossen |
| 0xFF | Wert ungültig |

### TAB_PRODUKTLINIE_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | LG_G |
| 0x01 | LG_X |
| 0x02 | LK_M |
| 0x03 | LK_K |
| 0x04 | LR |
| 0xFF | ungültiger Wert |

### TAB_SELBSTTEST_KLAPPENMOTOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test ohne Fehler beendet |
| 0x03 | Test mit Fehler beendet, Ergebnis im Fehlerspeicher |
| 0xFF | Ungültiger Wert |

### TAB_SOLLWERT_ORT

| WERT | TEXT |
| --- | --- |
| 0x01 | OBEN_LINKS |
| 0x02 | UNTEN_LINKS |
| 0x03 | OBEN_RECHTS |
| 0x04 | UNTEN_RECHTS |
| 0x05 | FKA_LINKS |
| 0x06 | FKA_RECHTS |

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
| 0x29 | LENKRAD_HEIZUNG |

### TAB_VERBAUORT_GEBLAESE

| WERT | TEXT |
| --- | --- |
| 0x01 | GEBLAESE_VORN |
| 0x02 | GEBLAESE_FKA_LINKS |
| 0x03 | GEBLAESE_FKA_RECHTS |
| 0x04 | GEBLAESE_FKA_MITTE |

### TAB_VERBAUORT_ZUHEIZER

| WERT | TEXT |
| --- | --- |
| 0x01 | ZUHEIZER_VORN |
