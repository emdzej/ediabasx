# TCB4G.prg

## General

|  |  |
| --- | --- |
| File | TCB4G.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 78 |
| Origin | RECOMPLI-GMBH EI-71 Boehme |
| Revision | 1.003 |
| Author | RECOMPLI-GMBH EI-71 Boehme, RECOMPLI-GMBH EI-71 Stemplinger |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Telematic Communication Board 4G |  |  |
| ORIGIN | string | RECOMPLI-GMBH EI-71 Boehme |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | RECOMPLI-GMBH EI-71 Boehme, RECOMPLI-GMBH EI-71 Stemplinger |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.57 |  |  |
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

### STEUERN_POWERMANAGEMENT_NAD

Auslesen der gespeicherten internen Powermanagement Transitionen 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested Range: 1 (Only one dataset supported) |

### STEUERN_ECALL_LOGGING

Auslesen der gespeicherten internen EU ecall Loggings 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | eCall logging session number requested Range: 1-20 Disable/Enable logging session: 255 |

### STEUERN_PROVISIONING_DATA

Schreiben der Provisionierungsdaten

| Name | Type | Description |
| --- | --- | --- |
| ARG_TYPE | unsigned char | Welche Daten geschrieben werden sollen 0x01 DPAS, 0x03 OTA |
| ARG_PATH | string | absolute and complete path to file that shall be written |

### STEUERN_LOG_MASK

Schreiben der Log Maske

| Name | Type | Description |
| --- | --- | --- |
| ARG_PATH | string | absolute and complete path to file that shall be written |

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

### ARG_0XA020_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | There can only have two Values for the argument: BMW or BROWSER ARG_TYPE =  BMW  or  BROWSER  |
| ARG_PATH | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | path of the certificate |

### ARG_0XA05E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | 0-n | high | unsigned char | - | TAB_ANTENNE_ECALL | - | - | - | - | - | Antenne, die getestet werden sollen Tabelle TAB_ANTENNE_ECALL |

### ARG_0XA05F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | 0-n | - | unsigned long | - | TAB_VERBAU_CECALL | - | - | - | - | - | Routinen, die getestet werden sollen Tabelle TVerbauCECALL |

### ARG_0XA086_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequenz in Hertz. Bereich 400 bis 3400 Hz. Sonst Request out of range |
| ARG_LAUTSTAERKE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lautstaerke von 0-15. Minimal- und Maximalbereich eincodiert. Bei ungueltigen Einganben kommt Request out of range |
| ARG_DAUER | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer des Tons. Wertebereich von 0 bis 255 |

### ARG_0XA089_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOS_DEAKTIVIERUNG | + | - | 0-n | high | unsigned char | - | TAB_SOS_DEAKTIVIERUNG | - | - | - | - | - | 0x00 aktiviert und 0x01 deaktiviert das Senden von SOS-Botschaften über CAN |

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
| 0x026100 | Energiesparmode aktiv | 0 |
| 0x026108 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x026109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02610A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02610B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02610C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF61 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x031786 | SIF: Last State Call | 1 |
| 0x031789 | SIF: Remote Service | 1 |
| 0x03178A | SIF: General Mobile Network Errors | 1 |
| 0x03178C | SIF: E-Call | 1 |
| 0xB7F30D | Keine Kommunikation mit GPS-Empfänger | 0 |
| 0xB7F311 | Kein Zugriff auf interne SIM-Karte | 0 |
| 0xB7F313 | SIM-Karte gesperrt | 0 |
| 0xB7F315 | GPS-Antenne: Kurzschluss nach Plus | 0 |
| 0xB7F316 | GPS-Antenne: Unterbrechung | 0 |
| 0xB7F317 | GPS-Antenne: Kurzschluss nach Masse | 0 |
| 0xB7F318 | Notruf-LED Fehler | 0 |
| 0xB7F319 | Notruf-Taster: Kurzschluss | 0 |
| 0xB7F31A | Notruf-Taster: Unterbrechung | 0 |
| 0xB7F31B | Mikrofon 1: Kurzschluss nach Plus | 0 |
| 0xB7F31D | Telematik-Antenne2: Kurzschluss nach Plus | 0 |
| 0xB7F31E | Telematik-Antenne1: Kurzschluss nach Plus | 0 |
| 0xB7F31F | Telematik-Antenne1: Kurzschluss nach Masse | 0 |
| 0xB7F320 | Hardware Reset | 0 |
| 0xB7F321 | Software Reset | 0 |
| 0xB7F323 | Alive Signal Airbag fehlerhaft | 1 |
| 0xB7F324 | Notruf-Lautsprecher: Kurzschluss nach Plus | 0 |
| 0xB7F325 | Notruf-Lautsprecher: Unterbrechung | 0 |
| 0xB7F326 | Notruf-Lautsprecher: Kurzschluss nach Masse | 0 |
| 0xB7F327 | Mikrofon 1: Kurzschluss nach Masse | 0 |
| 0xB7F328 | Mikrofon 1: Unterbrechung | 0 |
| 0xB7F32B | Telematik-Antenne1: Unterbrechung | 0 |
| 0xB7F32C | Telematik-Antenne2: Kurzschluss nach Masse | 0 |
| 0xB7F32D | Telematik-Antenne2: Unterbrechung | 0 |
| 0xB7F32E | Mikrofon 1: Leitungen kurzgeschlossen | 0 |
| 0xB7F335 | Interner Steuergerätefehler Hardware | 0 |
| 0xB7F336 | Interner Steuergerätefehler Software | 0 |
| 0xB7F338 | Alive Signal Airbag fehlt | 1 |
| 0xB7F339 | Unterspannung erkannt | 1 |
| 0xB7F33A | Überspannung erkannt | 1 |
| 0xB7F33C | Interner Steuergerätefehler | 0 |
| 0xB7F33E | Automatischer Notruf häufig ausgelöst | 1 |
| 0xB7F33F | Notruf durch Diagnose deaktiviert | 0 |
| 0xB7F341 | Backup-Batterie: Hardware defekt | 0 |
| 0xB7F342 | Notruf-Lautsprecher: Leitungen kurzgeschlossen | 0 |
| 0xB7F343 | Backup-Batterie:  Before end of life | 0 |
| 0xB7F345 | Abschaltung wegen Übertemperatur | 0 |
| 0xB7F347 | Provisionierung ohne Signatur Diagnose | 0 |
| 0xB7F348 | Provisionierung ohne Signatur OTA | 0 |
| 0xB7F349 | Zertifikat ohne Signatur | 0 |
| 0xE1445F | BODY- oder IuK-CAN Physikalischer Busfehler | 0 |
| 0xE14468 | BODY- oder IuK-CAN Control Module Bus OFF | 0 |
| 0xE14BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PaketSwitch Registrierung | 0-n | High | 0x0F | TAB_PS_REGSTATE | - | - | - |
| 0x0002 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | TEXT | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17F6 | INFO | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17F7 | APP_TASK | TEXT | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0xD34C | SPANNUNG_WERT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x61001F | Falsche NGTP Keytable | 0 |
| 0x610021 | Backup-Batterie: Kurzschluss nach 12 Volt | 0 |
| 0x610022 | Backup-Batterie: Kurzschluss nach Masse | 0 |
| 0x610023 | Backup-Batterie: Unterbrechung | 0 |
| 0x610025 | Backup-Batterie: End of life | 0 |
| 0x610030 | ECall deaktiviert | 0 |
| 0x610031 | Steuergeräte-Reset Zähler | 0 |
| 0x610032 | NAD-Reset Zähler | 0 |
| 0x610033 | Abschaltung wegen Übertemperatur im NAO-Mode | 0 |
| 0x610034 | Nahe Abschaltung wegen Übertemperatur | 0 |
| 0x610035 | Leistungsreduzierung wegen hoher Temperatur | 0 |
| 0x610036 | Flight Mode aufgrund fehlgeschlagener Netzwerk-Registrierung | 1 |
| 0x930000 | Alive Signal Airbag: Prüfsummenfehler | 1 |
| 0xB7F314 | SIM-Karte nicht freigeschaltet | 0 |
| 0xB7F322 | Alive Signal Airbag fehlt beim Aufstart | 1 |
| 0xB7F337 | Alive Signal Airbag fehlerhaft beim Aufstart | 1 |
| 0xB7F33B | Interner Steuergerätefehler | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | COUNTER | count | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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
| STAT_IMPORT_MASK_WERT | - | high | char | - | - | 1.0 | 1.0 | 0.0 | 0 (= Default) 1 (= special mask already imported) 2 (=error) |
| STAT_IMPORT_MASK_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Default (=0) special mask already imported (=1) error (=2) |
| STAT_LOG_MASK_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | LogMask XML in clear words (for example: 130528_QXDMlog5-3.xml) |

### RES_0XA020_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RET_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_RET_STATUS | - | - | - | Status message |

### RES_0XA05E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAB_ANTENNE_ECALL | - | - | - | gibt an, welche Antenne getestet wurden |
| STAT_TEST_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des gesamten Tests der entsprechenden Antenne wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |
| STAT_FEHLERART_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet |
| STAT_WIDERSTAND_WERT | - | - | + | 0,1kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | der auf der fehlerhaften Antenne gemessene Widerstand in 0.1 kOhm. |

### RES_0XA05F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_VERBAU_CECALL | - | - | - | Ausgeführte Testroutine(n) |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des Verbautests wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |

### RES_0XA079_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING_RESET | - | - | + | 0-n | - | unsigned char | - | TResetStatus | - | - | - | Status Reset Werte gemäß Tabelle TResetStatus 0 UNKNOWN - unbekannt 1 ACTIVE - läuft noch 2 SUCCESS - alles OK 3 FAILED - mit Fehler beendet 4 IDLE - wurde nicht gestartet |

### RES_0XA07A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING | - | - | + | 0-n | - | unsigned char | - | TProvisioningStatusEcall | - | - | - | Status des Provisionierungsprozess Werte gemäß Tabelle TProvisioningStatusEcall |
| STAT_ECALL_OTA_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Version von den aktuellen OTA Daten |
| STAT_ECALL_DAS_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Version von den aktuellen DAS Daten |

### RES_0XA089_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOS_CAN_BOTSCHAFT | - | - | + | 0-n | high | unsigned char | - | TAB_SOS_CAN_BOTSCHAFT | 1.0 | 1.0 | 0.0 | Auslesen des aktuellen Status des Signalmodus (siehe Job STEUERN_SIGNAL_MODE) |

### RES_0XA0B8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_STATE_CALL | - | - | + | 0-n | high | unsigned char | - | TLSC_STATUS | - | - | - | Status des letzten LSC |

### RES_0XD029_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUB_SPANNUNG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batteriespannung als Wert in Millivolt |
| STAT_BUB_TEMPERATUR_WERT | °C | high | int | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur in C° |
| STAT_BUB_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | Status gibt an ob Steuergerät auf Betrieb mit BUB oder ohne codiert ist. 0 = nicht verbaut 1 = verbaut |
| STAT_BUB_SOH_WERT | % | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Relative Health der Backup-Batterie (State of Health) |
| STAT_BUB_JAHR_HEALTH_MESSUNG_WERT | - | high | int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Jahr (Format: JJJJ) |
| STAT_BUB_MONAT_HEALTH_MESSUNG_WERT | - | high | int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Monat (Format: MM) |
| STAT_BUB_TAG_HEALTH_MESSUNG_WERT | - | high | int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Tag (Format: TT) |
| STAT_BUB_LADUNG_ART | 0-n | high | unsigned char | - | TAB_BUB_LADUNG_ART | - | - | - | Gibt das aktuelle Ladungsverfahren an. |

### RES_0XD035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_STATUS | 0-n | high | unsigned char | - | TSimStatus | - | - | - | Status der SIM-Karte |
| STAT_IP_ADRESSE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IP-Adresse z.B. 192.168.0.1 |
| STAT_AKTUELLES_NETZ_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Status des aktuell verfügbaren Netzwerks 000 000 = NMCC NMNC Nmcc= network mobile country code (Land) Nmnc= network mobile network code (Network provider) |
| STAT_SIGNAL_STAERKE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Empfangsstärke des verfügbaren Netzwerks im Bereich von 0-5 0 = kein Signal 5 = volles Signal |

### RES_0XD0CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_SMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Länderkode |
| STAT_SMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Netzwerkkode |
| STAT_NMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Länderkode |
| STAT_NMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Netzwerkkode |
| STAT_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Steuergerätes und des Provisionierungsmanagers |
| STAT_OTA_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | OTA - ID |
| STAT_DAS_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | DAS - ID |
| STAT_CAUSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cause Wert Der Wert gibt den Auslöser der Provisionierung an. 0: Required access data is missing in the DASAS data 1: A required OTAAS is expired 2: Update request by user via the HMI  3: Application trigger 4: The PINGUIN triggered the provisioning  5: ACM triggered provisioning on DPAS Mode 6: Provisioning via Diagnosis |
| STAT_DPAS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Provisionierungszustand |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC - ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |

### RES_0XD0D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_DOWNLOAD_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Download ID |
| STAT_PROVISIONING | 0-n | high | unsigned char | - | TProvisioningStatus | - | - | - | Status vom Schreibvorgang der Provisionierungsdaten. |

### RES_0XD0E1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RECEIVER_SW_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Software Versionsnummer des GPS Receivers |
| STAT_GPS | 0-n | - | unsigned char | - | TGpsStatus | - | - | - | Liest den GPS Status. Siehe Tabelle TGpsStatus. |
| STAT_GPS_LONG_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Längengrad |
| STAT_GPS_LAT_WERT | - | high | long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad |
| STAT_GPS_HEADING_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad |
| STAT_GPS_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Geschwindigkeit in m pro Sekunde. Steuergerät sendet in cm/s, in der SGBD wird auf m/s umgerechnet |
| STAT_GPS_HEIGHT_WERT | m | high | int | - | - | 1.0 | 1.0 | 0.0 | Höhe in Meter |
| STAT_GPS_DATE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum TTMMJJJJ |
| STAT_GPS_TIME_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit HHMMSS |

### RES_0XD0E3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_DISTANCE_1_WERT | m | high | long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem letzten Auslesen des Jobs aus. |
| STAT_GPS_DISTANCE_2_WERT | m | high | long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem zweitletzten Auslesen des Jobs aus. |
| STAT_GPS_DISTANCE_3_WERT | m | high | long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem drittletzten Auslesen des Jobs aus. |

### RES_0XD108_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUORT | 0-n | high | unsigned char | - | TAB_VERBAUORT_TELEMATIK_ECU | - | - | - | Gibt den Verbauort an. Siehe Tabelle:  |
| STAT_WLAN | 0-n | high | unsigned char | - | TAB_JA_NEIN | - | - | - | Gibt an ob Telematiksteuergerät WLAN unterstützt. |
| STAT_NETZ_TECHNOLOGIE | 0-n | high | unsigned char | - | TAB_NETZ_TECHNOLOGIE | - | - | - | Gibt an welche Mobilfunk Netzwerk Technologie unterstützt wird. |
| STAT_LAENDERVARIANTE | 0-n | high | unsigned char | - | TAB_LAENDERVARIANTE_TELEMATIK | - | - | - | Gibt die Laendervariante des Telematik Steuergeräts an. |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_LOG_MASK | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | status of reset |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| LOG_MASK | 0x4000 | - | Reads the actually used logging mask  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| UNIVERSAL_TRANSPORT_LAYER | 0xA020 | - | Dummy für UTL Transport-Schicht | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA020_R | RES_0xA020_R |
| TEST_ANTENNE_ECALL | 0xA05E | - | Startet und bewertet die Prüfung für eine definierte Antenne | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05E_R | RES_0xA05E_R |
| TEST_VERBAU_ECALL | 0xA05F | - | Test Verbau CECALL | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05F_R | RES_0xA05F_R |
| PROVISIONING_RESET | 0xA079 | - | Setzt die standard Telematik Konfigurationswerte zurück und löscht die OTA (Over The Air) Daten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA079_R |
| PROVISIONING_ECALL | 0xA07A | - | Startet die Provisionierung der Telematikdienste OTA | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA07A_R |
| SOS_SPEAKER_TEST | 0xA086 | - | Spielt einen Ton mit parametrierbarer Frequenz, Dauer, Lautstärke auf dem SOS-Lautsprecher ab | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA086_R | - |
| SIGNAL_MODE_ECALL | 0xA089 | - | Aktiviert bzw. deaktiviert das Senden von SOS-Botschaften (via CAN) zu Testzwecken des SOS-Tasters | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA089_R | RES_0xA089_R |
| LAST_STATE_CALL_TRANSMIT | 0xA0B8 | - | Job zum Absetzen eines Last State Call | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0B8_R |
| BACKUP_BATTERIE | 0xD029 | - | Backup-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD029_D |
| LAST_CONNECTION_TEL | 0xD035 | - | Auslesen des SIM Status und IP Adresse der letzte Verbindung Argument beschreibt welches Gerät für das die letze Verbindung abgefragt wird | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD035_D |
| ICC_ID_LESEN | 0xD05A | STAT_ICC_ID_TEXT | Auslesen des ICC (Integrated Circuit Card) -ID des internen Telefonmoduls | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IMEI_LESEN | 0xD06B | STAT_IMEI_TEXT | Auslesen des IMEI (International Mobile Equipment Identity) des internen Telefonmoduls | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TDA_AKTIVIERUNG | 0xD091 | STAT_DIENSTE_AKTIVIERUNG | Status TDA BMW Dienste | 0-n | - | - | unsigned char | TAB_TDAActivationState | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOS_TASTER | 0xD09B | STAT_SOS_TASTER | Gibt an, ob der SOS-Taster gedrückt (0x01) oder nicht gedrückt (0x00) ist. | 0-n | - | High | unsigned char | TAB_TASTER_STATUS | - | - | - | - | 22 | - | - |
| PROVISIONING_PARAMETER | 0xD0CE | - | Liest die Parameter der Provisionierung aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CE_D |
| PROVISIONING_DATA | 0xD0D3 | - | Liest Status des Schreibens der Provisionierungsdatei. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D3_D |
| SELBSTTEST | 0xD0D7 | STAT_SELBSTTEST | Gibt den Status des Tests wieder. | 0-n | - | - | unsigned char | TAB_TESTSTATUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_GPS_ECALL | 0xD0E1 | - | GPS Status des Telematiksteuergeräts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0E1_D |
| STATUS_GPS_DISTANCE | 0xD0E3 | - | Zurückgelegte Strecke gemessen über GPS. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0E3_D |
| PROVISIONING_FORMAT | 0xD0EB | STAT_STAT_SIGNATURE | dient dazu, eine signierte Bereitstellungsdatei zu verstehen  | 0-n | - | High | unsigned char | TAB_NO_YES | - | - | - | - | 22 | - | - |
| TELEMATIK_VARIANTE | 0xD108 | - | Gibt an welche Variante des Telematiksteuergeräts eingebaut ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD108_D |
| RESET_LOG_MASK | 0xF001 | - | Reset of logging mask | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_ANTENNE_ECALL

| WERT | TEXT |
| --- | --- |
| 0x01 | Telematik-Antenne1 |
| 0x02 | Telematik-Antenne2 |
| 0x04 | GPS-Antenne |
| 0x08 | WLAN-Antenne |
| 0xFF | Ungültig |

### TAB_BUB_LADUNG_ART

| WERT | TEXT |
| --- | --- |
| 0x00 | Ladung BUB aus |
| 0x01 | Normale Ladung |
| 0x02 | Erhaltungsladung |
| 0x03 | Keine Ladung: Voll geladen |
| 0x04 | Keine Ladung: Temperatur |
| 0x05 | Keine Ladung: BUB Betrieb |

### TAB_CD_ENVIRONMENT_CONDITION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | Netzwerk nicht verfügbar |
| 0x02 | Datenverbindung nicht verfügbar / konnte nicht aufgebaut werden |
| 0x03 | Fehler in HTTP Kommunikation mit Backend |
| 0x04 | Fehler in rückgemeldeten Daten vom Backend |
| 0x05 | Sprachanruf konnte nicht aufgebaut werden / wurde abgebrochen |
| 0x06 | Applikation abgestürzt |
| 0x07 | SSL Zertifikat nicht validierbar |
| 0x08 | Registrierung abgelehnt |
| 0x09 | Keine Bilder von iCAM verfügbar |
| 0x0A | iCAM meldet Fehler |
| 0x0B | SMS konnte nicht gesendet werden |
| 0x0C | SIM Reset durch Flight Mode |
| 0x0D | Ausführung des Service nicht erlaubt/abgebrochen |
| 0xFF | nicht definiert |

### TAB_CD_MOBILE_NETWORK_TECHNOLOGY

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | GSM |
| 0x02 | GSM_COMPACT |
| 0x03 | UTRAN |
| 0x04 | GSM_WITH_EGPRS |
| 0x05 | UTRAN_WITH_HSDPA |
| 0x06 | UTRAN_WITH_HSUPA |
| 0x07 | UTRAN_WITH_HSDPA_AND_HSUPA |
| 0x08 | E_UTRAN |
| 0xFF | nicht definiert |

### TAB_CS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x10 | Nicht registriert und nicht suchend |
| 0x20 | Registriert |
| 0x30 | Nicht registriert und suchend |
| 0x40 | Registrierung abgelehnt |
| 0x50 | Registriert und Roaming |
| 0x60 | Registriert und Roaming OFF NET |
| 0x70 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_LAENDERVARIANTE_TELEMATIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Europa |
| 0x01 | US |
| 0x02 | China |
| 0x03 | Rest of world |
| 0x04 | Brasilien |
| 0xFF | nicht definiert |

### TAB_NETZ_TECHNOLOGIE

| WERT | TEXT |
| --- | --- |
| 0x00 | 2 Generation |
| 0x01 | 3 Generation |
| 0x02 | 4 Generaton |
| 0xFF | nicht definiert |

### TAB_NO_YES

| WERT | TEXT |
| --- | --- |
| 0x00 | no |
| 0x01 | yes |
| 0xFF | not defined |

### TAB_PS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht registriert und nicht suchend |
| 0x02 | Registriert |
| 0x03 | Nicht registriert und suchend |
| 0x04 | Registrierung abgelehnt |
| 0x05 | Registriert und Roaming |
| 0x06 | Registriert und Roaming OFF NET |
| 0x07 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_RET_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | prepostprocessing neg. response |
| 0x02 | prepostprocessing timeout |
| 0x03 | ret_data exceeds 0xF000 bytes |
| 0xFF | Wert ungültig |

### TAB_SOS_CAN_BOTSCHAFT

| WERT | TEXT |
| --- | --- |
| 0x00 | SOS-Botschaften werden gesendet |
| 0x01 | SOS-Botschaften werden nicht gesendet |

### TAB_SOS_DEAKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Senden von SOS-Nachrichten aktivieren |
| 0x01 | Senden von SOS-Nachrichten deaktivieren |

### TAB_TASTER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Taste nicht betätigt |
| 0x01 | Taste betätigt |
| 0x02 | nicht verbaut oder codiert |
| 0xFF | Ungültig |

### TAB_TDAACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Leerlauf, derzeit nicht aktiv |
| 0x02 | Aktivierung läuft |
| 0x03 | Aktivierung fehlgeschlagen |
| 0x04 | Aktivierung erfolgreich |
| 0xFF | nicht definiert |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TAB_VERBAUORT_TELEMATIK_ECU

| WERT | TEXT |
| --- | --- |
| 0x00 | Kofferraum |
| 0x01 | Dach |
| 0x02 | Instrumententafel |
| 0xFF | nicht definiert |

### TAB_VERBAU_CECALL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle |
| 0x00000001 | Telematik-Antenne1 |
| 0x00000002 | Telematik-Antenne2 |
| 0x00000004 | GPS-Antenne |
| 0x00000008 | Backup-Lautsprecher |
| 0x00000010 | E-Call-Button |
| 0x00000020 | E-Call-LED |
| 0x00000040 | E-Batterie |
| 0x00000080 | Airbag-Leitung |
| 0x00000100 | WLAN-Antenne |
| 0x00000200 | Mikrophon1 |
| 0xFFFFFFFF | nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### TEVENTECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | TIME_UPDATE_1 |
| 0x02 | TIME_UPDATE_2 |
| 0x03 | MILAGE_1 |
| 0x04 | MILAGE_2 |
| 0x05 | MILAGE_3 |
| 0x06 | MILAGE_4 |
| 0x07 | GPS_QUALITY_1 |
| 0x08 | GPS_QUALITY_2 |
| 0x09 | GPS_POS_LONGITUDE_1 |
| 0x0A | GPS_POS_LONGITUDE_2 |
| 0x0B | GPS_POS_LONGITUDE_3 |
| 0x0C | GPS_POS_LONGITUDE_4 |
| 0x0D | GPS_POS_LATITUDE_1 |
| 0x0E | GPS_POS_LATITUDE_2 |
| 0x0F | GPS_POS_LATITUDE_3 |
| 0x10 | GPS_POS_LATITUDE_4 |
| 0x11 | AIRBAG_CONTEXT |
| 0x12 | NETWORK_MCC_1 |
| 0x13 | NETWORK_MCC_2 |
| 0x14 | NETWORK_MCC_3 |
| 0x15 | NETWORK_MCC_4 |
| 0x16 | NETWORK_MNC_1 |
| 0x17 | NETWORK_MNC_2 |
| 0x18 | NETWORK_MNC_3 |
| 0x19 | NETWORK_MNC_4 |
| 0x1A | NETWORK_CELL_ID_1 |
| 0x1B | NETWORK_CELL_ID_2 |
| 0x1C | NETWORK_SIGNAL_STRENGTH_1 |
| 0x1D | NETWORK_SIGNAL_STRENGTH_2 |
| 0x1E | PHONE_NUMBER_DIGIT_1 |
| 0x1F | PHONE_NUMBER_DIGIT_2 |
| 0x20 | PHONE_NUMBER_DIGIT_3 |
| 0x21 | PHONE_NUMBER_DIGIT_4 |
| 0x22 | PHONE_NUMBER_DIGIT_5 |
| 0x23 | PHONE_NUMBER_DIGIT_6 |
| 0x24 | PHONE_NUMBER_DIGIT_7 |
| 0x25 | PHONE_NUMBER_DIGIT_8 |
| 0x26 | PHONE_NUMBER_DIGIT_9 |
| 0x27 | PHONE_NUMBER_DIGIT_10 |
| 0x28 | PHONE_NUMBER_DIGIT_11 |
| 0x29 | PHONE_NUMBER_DIGIT_12 |
| 0x2A | PHONE_NUMBER_DIGIT_13 |
| 0x2B | PHONE_NUMBER_DIGIT_14 |
| 0x2C | PHONE_NUMBER_DIGIT_15 |
| 0x2D | PHONE_NUMBER_DIGIT_16 |
| 0x2E | PHONE_NUMBER_DIGIT_17 |
| 0x2F | PHONE_NUMBER_DIGIT_18 |
| 0x30 | PHONE_NUMBER_DIGIT_19 |
| 0x31 | PHONE_NUMBER_DIGIT_20 |
| 0x32 | PHONE_NUMBER_DIGIT_21 |
| 0x33 | PHONE_NUMBER_DIGIT_22 |
| 0x34 | PHONE_NUMBER_DIGIT_23 |
| 0x35 | PHONE_NUMBER_DIGIT_24 |
| 0x36 | PHONE_NUMBER_DIGIT_25 |
| 0x37 | PHONE_NUMBER_DIGIT_26 |
| 0x38 | PHONE_NUMBER_DIGIT_27 |
| 0x39 | PHONE_NUMBER_DIGIT_28 |
| 0x3A | SUPPORTED_TYPE_PROVISIONING |
| 0x3B | SUPPORTED_TYPE_CODING |
| 0x4B | TIME_ECALL_TRIGGER_UPDATE |
| 0x4C | TIME_ECALL_ACTIVE |
| 0x4D | TIME_ECALL_ABORTED |
| 0x4E | TIME_NETWORK_REGISTRATION |
| 0x4F | TIME_ANTENNA_SWITCHED |
| 0x50 | TIME_FIRE_FORGET_SMS_STARTED |
| 0x51 | TIME_FIRE_FORGET_SMS_DELIVERED |
| 0x52 | TIME_VOICE_CALL_DIALING |
| 0x53 | TIME_VOICE_CALL_ESTABLISHED |
| 0x54 | TIME_VOICE_CALL_TERMINATED_USER |
| 0x55 | TIME_VOICE_CALL_TERMINATED_COMMAND |
| 0x56 | TIME_VOICE_CALL_TERMINATED_REMOTE |
| 0x57 | TIME_INCOMING_VOICE_CALL_ACCEPTED |
| 0x58 | TIME_EU_ECALL_DATA_TRANSMISSION_STARTED |
| 0x59 | TIME_EU_ECALL_DATA_TRANSMISSION_SUCCESS |
| 0x5A | TIME_ASSIST_ECALL_DATA_SEND_STARTED |
| 0x5B | TIME_ASSIST_ECALL_DATA_SEND_SUCCESS |
| 0x5C | TIME_ASSIST_ECALL_DATA_TRANSMISSION_SUCCESS |
| 0x5D | TIME_ECALL_INACTIVE |
| 0x5E | TIME_ECALL_STANDBY_STARTED |
| 0x5F | TIME_ECALL_STANDBY_ENDED |
| 0x60 | TIME_SWITCH_POWER_SUPPLY |
| 0x7D | TRIGGER_SOURCE |
| 0x7E | CLAMP_STATUS |
| 0x7F | VEH_MOVEMENT |
| 0x80 | LAST_WAKEUP_REASON |
| 0x81 | ENGINE_STATUS |
| 0x82 | SELECTED_ANTENNA |
| 0x83 | TERMINATION_SOURCE |
| 0x84 | TERMINATION_REASON |
| 0x85 | BEARER |
| 0x86 | VEH_BATTERY_STATUS |
| 0x87 | VEH_BUS_STATUS |
| 0x88 | NEW_POWER_SOURCE |
| 0x89 | DISABLE_ENABLE_REASON |
| 0x8A | NEW_STATUS_ECALL_AUTOMATIC |
| 0x8B | NEW_STATUS_ECALL_MANUAL |
| 0xFF | Nicht definiert |

### TGPSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstuetzt: Kein GPS |
| 0x01 | Nicht unterstuetzt: Kommunikationsfehler |
| 0x02 | Receiverfehler |
| 0x03 | Kein almanac |
| 0x04 | Suche Satelliten |
| 0x05 | Ortung Satellit 1 |
| 0x06 | Ortung Satellit 2 |
| 0x07 | Ortung Satellit 3 |
| 0x08 | Ortung Satellit 4 |
| 0x09 | Ortung Satellit 5 |
| 0x0A | Ortung Satellit 6 |
| 0x0B | 2D Position |
| 0x0C | 3D Position |
| 0xFF | Nicht definiert |

### TLSC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gestartet |
| 0x01 | läuft noch |
| 0x02 | beendet ohne Fehler |
| 0x03 | beendet mit Fehlern |
| 0x04 | untebrochen |
| 0xFF | nicht definiert |

### TPOWERGUARDNAD

| WERT | TEXT |
| --- | --- |
| 0x00FF | N/A |
| 0x0100 | isRunningOnBubGr5s |
| 0x0101 | isNeedCanMcu |
| 0x0102 | isRemoteService |
| 0x0103 | isNetworkReg |
| 0x0104 | doWakeupVehicle |
| 0x0105 | NaoCountDown |
| 0x0106 | isECall |
| 0x0107 | CanMcuShutdownTargetNao |
| 0x0108 | isRapidPowerDown |
| 0x0109 | isTeleservice |
| 0x010A | CP_NaoTrace |
| 0x01FF | N/A |
| 0x02FF | N/A |
| 0x03FF | N/A |
| 0xFFFF | Nicht definiert |

### TPOWERSTATENAD

| WERT | TEXT |
| --- | --- |
| 0x0000 | Sleep Power Off |
| 0x0001 | Normal Operation |
| 0x0002 | Nad Always On |
| 0x0003 | Nad Always On Debug |
| 0x0004 | MTS |
| 0x0005 | MTS Sleep |
| 0x0006 | Temperature Shutdown |
| 0x0100 | IpcActivity |
| 0x0101 | BubPowerDown |
| 0x0102 | ECall |
| 0x0103 | IpcShutdown |
| 0x0104 | IpcDeinit |
| 0x0105 | IpcDeinitNoteStart |
| 0x0106 | IpcStart |
| 0x0107 | IpcInit |
| 0x0108 | IpcInitNoteShutdown |
| 0x0109 | IpcStartApplications |
| 0x010A | IpcInitApps |
| 0x010B | IpcInitAppsNoteSd |
| 0x010C | IpcWait |
| 0x010D | Nao |
| 0x010E | NaoIdleLowPower |
| 0x010F | NaoLowPower |
| 0x0110 | IpcWaitLowPower |
| 0x0111 | LowPowerCanMcu |
| 0x0112 | LowPowerTraceDelay |
| 0x0113 | IsNaDe |
| 0x0114 | IsNeCaMc |
| 0x0115 | NoNetworkReg |
| 0x0116 | WakeupCanMcuNao |
| 0x0117 | IsNaoDebug |
| 0x0118 | NormalOperation |
| 0x0119 | NoService |
| 0x011A | NoServiceWait |
| 0x011B | RapidPowerDown |
| 0x011C | RemoteService |
| 0x011D | Teleservice |
| 0x011E | IpcOff |
| 0x011F | NaoExit |
| 0x0120 | NaoTimerOff |
| 0x0121 | NaoTimerLastMinute |
| 0x0122 | NaoTimerStopped |
| 0x0123 | NaoTimerRunning |
| 0x0200 | Init |
| 0x0201 | BB Powerup |
| 0x0202 | BB Startup |
| 0x0203 | Normal |
| 0x0204 | Prepare Shutdown |
| 0x0205 | BB Powerdown |
| 0x0206 | Shutdown |
| 0x0207 | BB Error |
| 0x0208 | Uninit |
| 0x0310 | Startup |
| 0x0311 | Startup One |
| 0x0312 | Startup Two |
| 0x0320 | Wakeup |
| 0x0321 | Wakeup One |
| 0x0322 | Wakeup Validation |
| 0x0323 | Wakeup Reaction |
| 0x0324 | Wakeup Two |
| 0x0325 | Wakeup Wake Sleep |
| 0x0326 | Wakeup TTII |
| 0x0330 | Run |
| 0x0332 | App Run |
| 0x0333 | App Post Run |
| 0x0340 | Shutdown |
| 0x0344 | Prepare Shutdown |
| 0x0349 | Go Sleep |
| 0x034D | Go Off One |
| 0x034E | Go Off Two |
| 0x0350 | Sleep |
| 0x0390 | Reset |
| 0x0380 | Off |
| 0x03FF | Error |
| 0xFFFF | Nicht definiert |

### TPOWERSTMNAD

| WERT | TEXT |
| --- | --- |
| 0x00 | System |
| 0x01 | BB LCM |
| 0x02 | CAN MCU |
| 0x03 | CAN MCU EcuM |
| 0xFF | Nicht definiert |

### TPOWERTRIGGERNAD

| WERT | TEXT |
| --- | --- |
| 0x0000 | Initial Power Up |
| 0x0001 | CAN Bus Off |
| 0x0002 | CAN Bus On |
| 0x0003 | NAO Maximum Time Expired |
| 0x0004 | No Network Registration |
| 0x0100 | EVTGUARD32 |
| 0x0101 | trgMTSModeUpdate |
| 0x0102 | trgCanMcuConnectionStartup |
| 0x0103 | EVTGUARD31 |
| 0x0104 | trgRemoteServiceStart |
| 0x0105 | EVTGUARD30 |
| 0x0106 | trgNeedVehicle |
| 0x0107 | trgCanMcuConnectionShutdown |
| 0x0108 | Wait_Nao_60s |
| 0x0109 | trgCodingUpdate |
| 0x010A | trgNetworkReg |
| 0x010B | trgECallFinished |
| 0x010C | EVTGUARD24 |
| 0x010D | EVTGUARD23 |
| 0x010E | EVTGUARD22 |
| 0x010F | EVTGUARD21 |
| 0x0110 | EVTGUARD20 |
| 0x0111 | EVTGUARD29 |
| 0x0112 | EVTGUARD28 |
| 0x0113 | NotRunningOnBub |
| 0x0114 | EVTGUARD27 |
| 0x0115 | EVTGUARD26 |
| 0x0116 | trgLatBufferEmpty |
| 0x0117 | EVTGUARD25 |
| 0x0118 | WaitLPTDelay_1s |
| 0x0119 | trgTeleserviceStart |
| 0x011A | trgStartNaoTimer |
| 0x011B | trgTeleserviceFinished |
| 0x011C | trgRemoteServiceFinished |
| 0x011D | EVTGUARD14 |
| 0x011E | EVTGUARD15 |
| 0x011F | EVTGUARD16 |
| 0x0120 | EVTGUARD17 |
| 0x0121 | EVTGUARD18 |
| 0x0122 | EVTGUARD19 |
| 0x0123 | trgNoNetworkReg |
| 0x0124 | trgLatBufferNonEmpty |
| 0x0125 | trgNotNeedCanMcu |
| 0x0126 | EVTGUARD10 |
| 0x0127 | EVTGUARD11 |
| 0x0128 | EVTGUARD12 |
| 0x0129 | EVTGUARD13 |
| 0x012A | Wait_NoNetworkReg_10s |
| 0x012B | trgCanMcuConnectedWakeup |
| 0x012C | runninggOnBubGr5s |
| 0x012D | trgRapidPowerDown |
| 0x012E | trgProvisioningUpdate |
| 0x012F | trgIpcDeinitialized |
| 0x0130 | trgNaoTimerExpired |
| 0x0131 | trgVehicleIgnitionOn |
| 0x0132 | trgIpcInitialized |
| 0x0133 | trgECallStart |
| 0x0134 | trgNaoOff |
| 0x0135 | EVTGUARD6 |
| 0x0136 | EVTGUARD5 |
| 0x0137 | EVTGUARD8 |
| 0x0138 | EVTGUARD7 |
| 0x0139 | EVTGUARD9 |
| 0x013A | EVTGUARD0 |
| 0x013B | trgNeedCanMcu |
| 0x013C | EVTGUARD1 |
| 0x013D | EVTGUARD2 |
| 0x013E | EVTGUARD3 |
| 0x013F | EVTGUARD4 |
| 0x0140 | Wait_NoService_1s |
| 0x02FF | N/A |
| 0x03FF | N/A |
| 0xFFFF | Nicht definiert |

### TPROVISIONINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IDLE wurde nicht gestartet |
| 0x01 | ACTIVE laeuft noch |
| 0x02 | SUCCESS alles OK |
| 0x03 | mit Fehler beendet |
| 0xFF | Nicht definiert |

### TPROVISIONINGSTATUSECALL

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler beendet |
| 0x04 | wurde nicht gestartet |
| 0xFF | nicht definiert |

### TRESETSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler |
| 0x04 | wurde nicht gestartet |
| 0xFF | undefinierter Zustand |

### TSTATEECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x0000 | DEFAULT |
| 0x7D00 | ECALL_SOURCE_COMMON |
| 0x7D01 | ECALL_SOURCE_MOST |
| 0x7D02 | ECALL_SOURCE_BUTTON |
| 0x7D03 | ECALL_SOURCE_AUTOMATIC |
| 0x7D04 | ECALL_SOURCE_EXTERNAL |
| 0x7E01 | CLAMP_RESERVE |
| 0x7E02 | CLAMP_30 |
| 0x7E03 | CLAMP_30F_CHANGE |
| 0x7E04 | CLAMP_30_ON |
| 0x7E05 | CLAMP_30B_CHANGE |
| 0x7E06 | CLAMP_30B_ON |
| 0x7E07 | CLAMP_R_CHANGE |
| 0x7E08 | CLAMP_R_ON |
| 0x7E09 | CLAMP_15_CHANGE |
| 0x7E0A | CLAMP_15_ON |
| 0x7E0B | CLAMP_50_DELAY |
| 0x7E0C | CLAMP_50_CHANGE |
| 0x7E0D | CLAMP_50_ON |
| 0x7E0E | CLAMP_ERROR |
| 0x7E0F | CLAMP_INVALID |
| 0x7F00 | MOVEMENT_NO |
| 0x7F01 | MOVEMENT_YES |
| 0x8000 | WAKEUP_REASON_UNKNOWN |
| 0x8001 | WAKEUP_REASON_REGULAR |
| 0x8002 | WAKEUP_REASON_REMOTE |
| 0x8100 | ENGINE_OFF |
| 0x8101 | ENGINE_ON |
| 0x8200 | ANTENNA_UNKNOWN |
| 0x8201 | ANTENNA_MAIN |
| 0x8202 | ANTENNA_BACKUP |
| 0x8300 | TERM_SOURCE_UNKNOWN |
| 0x8301 | TERM_SOURCE_MFL |
| 0x8302 | TERM_SOURCE_MMI |
| 0x8400 | TERM_REASON_UNKNOWN |
| 0x8401 | TERM_REASON_NETWORK |
| 0x8402 | TERM_REASON_HANGUP |
| 0x8500 | BEARER_UNKNOWN |
| 0x8501 | BEARER_SMS |
| 0x8502 | BEARER_INBAND |
| 0x8503 | BEARER_DTMF |
| 0x8600 | BATT_RELIABLE_NO |
| 0x8601 | BATT_RELIABLE_YES |
| 0x8700 | BUS_ACTIVE_NO |
| 0x8701 | BUS_ACTIVE_YES |
| 0x8800 | POWER_SOURCE_UNKNONW |
| 0x8801 | POWER_SOURCE_VEHICLE |
| 0x8802 | POWER_SOURCE_BACKUP_BATTERY |
| 0x8900 | REASON_PROVISIONING |
| 0x8901 | REASON_DIAG |
| 0x8902 | REASON_CODING |
| 0x8903 | REASON_MMI |
| 0x8904 | REASON_MMI_STARTUP |
| 0x8A00 | AUTO_ENABLED_ANY_NETWORK_NO |
| 0x8A01 | AUTO_ENABLED_ANY_NETWORK_YES |
| 0x8B00 | MAN_ENABLED_ANY_NETWORK_NO |
| 0x8B01 | MAN_ENABLED_ANY_NETWORK_YES |
| 0xFFFF | Nicht definiert |

### TSIMSTATUS

| WERT | TEXT |
| --- | --- |
| 0xff | undefinierter Status |
| 0x00 | nicht eingebucht, sucht kein Netz |
| 0x01 | eingebucht |
| 0x02 | nicht eingebucht, sucht ein Netz |
| 0x03 | einbuchen verweigert |
| 0x04 | eingebucht und roaming |
| 0x05 | eingebucht und roaming off-net |
| 0x10 | Emergency Call bereit |

### TAB_0X17F5

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0001 | 0x0002 |
