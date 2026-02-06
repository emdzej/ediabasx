# ZBE7.prg

## General

|  |  |
| --- | --- |
| File | ZBE7.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 53 |
| Origin | BMW EI-823 Sefik_Uzun |
| Revision | 2.001 |
| Author | PREH-GMBH EI-510 Meier |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Bedieneinheit |  |  |
| ORIGIN | string | BMW EI-823 Sefik_Uzun |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | PREH-GMBH EI-510 Meier |  |  |
| COMMENT | string | - |  |  |
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

### ARG_0XD134_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | 0-n | - | unsigned char | - | TAB_ARG_STELLGLIED_POSITIONEN | - | - | - | - | - | Ansteuerung des Stellglieds:  NULLSTELLUNG, NORDEN ( nicht bei ZBE Low), OSTEN,  SUEDEN ( nicht bei ZBE Low), WESTEN |

### ARG_0XD14D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned int | - | TAB_ZBE_TASTEN | - | - | - | - | - | Ansteuerung der ZBE Tasten. Siehe Tabelle TAB_ZBE_TASTEN |
| AKTION | HEX | - | unsigned char | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT, 2 = BERUEHRT, 3 = DAUERHAFT GEDRUECKT, 4 = DAUERHAFT BERUEHRT |

### ARG_0XD26F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TASTEN_HAPTIK | 0-n | high | unsigned char | - | TAB_TASTEN_HAPTIK | - | - | - | - | - | Ansteuerung der Tasten Haptik |

### ARG_0XD598_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNALMODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | SIGNALMODE:  0 = NICHT BLOCKIERT = Signale werden verschickt,  1 = BLOCKIERT = Signale werden blockiert, keine Auswirkung auf andere Funktionen (Steuergeräte) |

### ARG_0XD60E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivierung Touchpad: 0x00 = aus (zurück in den Ausgangszustand) 0x01 = ein |

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
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x026700 | Energiesparmode aktiv | 0 | - |
| 0x026723 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x026726 | Hardwarefehler (Sammelfehler) | 0 | - |
| 0x026729 | Softwarefehler (Sammelfehler) | 0 | - |
| 0x02FF67 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x801400 | Stellglied (Kippen/Rotieren): Unplausible Position erkannt | 0 | - |
| 0x801405 | Unterspannung erkannt | 1 | - |
| 0x801406 | Überspannung erkannt | 1 | - |
| 0x801409 | Interner Komponetenfehler Touchfeld | 0 | - |
| 0x801422 | Interner Steuergerätefehler | 0 | - |
| 0xE2C41E | IuK-CAN Control Module Bus OFF | 0 | - |
| 0xE2CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE2D400 | Botschaft (0x202, Dimmung): Ausfall | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
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
| 0x670003 | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x670006 | FLS_E_READ_FAILED | 0 | - |
| 0x670007 | FLS_E_WRITE_FAILED | 0 | - |
| 0x670008 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x67000A | FLS_E_ERASE_FAILED | 0 | - |
| 0x67000B | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x67000D | FLSTST_E_FLSTST_FAILURE | 0 | - |
| 0x67000E | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x67000F | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x670010 | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x670011 | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x670012 | NVM_E_REQ_FAILED | 0 | - |
| 0x670013 | NVM_E_VERIFY_FAILED | 0 | - |
| 0x670014 | NVM_E_WRITE_PROTECTED | 0 | - |
| 0x670015 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x670016 | RAMTST_E_RAM_FAILURE | 0 | - |
| 0x670037 | MCU_E_QUARTZ_FAILURE | 0 | - |
| 0x670039 | WDGM_E_MONITORING | 0 | - |
| 0x67003A | WDGM_E_SET_MODE | 0 | - |
| 0x67003B | ACTIVE_HAPTIC_PLAYPROTECTION | 0 | - |
| 0x670080 | SBC_CONFIGCHECK | 0 | - |
| 0x670081 | SBC_SETCONFIG | 0 | - |
| 0x670082 | ACTIVE_HAPTIC_CURVEFAIL | 0 | - |
| 0x670200 | TOUCHPAD_SENSOR_SHORT | 0 | - |
| 0x670201 | TOUCHPAD_SENSOR_OPEN | 0 | - |
| 0x670202 | TOUCHPAD_COMMUNICATION_ERROR | 0 | - |
| 0x670203 | TOUCHPAD_COMMUNICATION_TIMEOUT_ERROR | 0 | - |
| 0x670204 | TOUCHPAD_COMMUNICATION_CRC_ERROR | 0 | - |
| 0x670205 | TOUCHPAD_HARDWARE_ERROR | 0 | - |
| 0x670206 | CONTROLLER_BFRID_ERROR | 0 | - |
| 0x670207 | ACTIVE_HAPTIC_DIAGTRANSISTOR | 0 | - |
| 0x670208 | ACTIVE_HAPTIC_DIAG_OUTOFRANGE | 0 | - |
| 0x67FF02 | TOUCHPAD_SGBMID_NOTMATCHING | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
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
| 0x4F | developmentSession |
| 0xff | ungültig |
| 0xFF | Wert ungültig |

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

### RES_0XD134_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STELLGLIED_N_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Stellglied-Position Nord: 0 = nicht betätigt, 1 = betätigt;  |
| STAT_STELLGLIED_E_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Stellglied-Position Ost: 0 = nicht betätigt, 1 = betätigt |
| STAT_STELLGLIED_S_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Stellglied-Position Süd: 0 = nicht betätigt, 1 = betätigt, |
| STAT_STELLGLIED_W_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stellglied-Position West: 0 = nicht betätigt, 1 = betätigt |
| STAT_STELLGLIED_NR | 0-n | - | unsigned char | - | TAB_STELLGLIED_POSITIONEN | - | - | - | 0 = Keine Betätigung,  1 = Stellglied gedr. nach Nord 2 = Stellglied gedr. nach Ost 3 = Stellglied gedr. nach Süd 4 = Stellglied gedr. nach West |

### RES_0XD14D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTEN | 0-n | high | unsigned int | - | TAB_ZBE_TASTEN | - | - | - | Gibt aus, welche Tasten gedrückt sind. |
| STAT_TASTEN_BERUEHRT | 0-n | high | unsigned int | - | TAB_ZBE_TASTEN | - | - | - | Gibt aus, welche Tasten berührt sind. |
| STAT_TASTER_MENU_FAV_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_BACK_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_OPTION_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_RADIO_COM_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_MEDIA_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_NAV_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_TEL_MAP_EIN_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt |
| STAT_TASTER_CONNECTEDDRIVE_WERT | HEX | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt, 2 Taste berührt  |
| STAT_TASTER_PUSH_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0=Taste nicht betätigt, 1 Taste betätigt |

### RES_0XD213_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD214_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD215_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD216_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD217_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD218_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD219_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD21A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD21B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RASTEN_IM_UHRZEIGERSINN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Rasten im Uhrzeigersinn |
| STAT_RELATIVZEIT_IM_UHRZEIGERSINN_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit der letzten Drehung gegen den Uhrzeigersinn |
| STAT_RASTEN_GEGEN_UHRZEIGERSINN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Rasten gegen Uhrzeigersinn |
| STAT_RELATIVZEIT_GEGEN_UHRZEIGERSINN_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzte Drehung gegen den Uhrzeigersinn |
| STAT_UNDERFLOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Underflow, Anschlag links |
| STAT_RELATIVZEIT_UNDERFLOW_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Underflow |
| STAT_OVERFLOW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Overflow, Anschlag rechts |
| STAT_RELATIVZEIT_OVERFLOW_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Overflow |
| STAT_KM_DREH_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand der letzten Drehaktion  |

### RES_0XD21C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD21D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD21E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD21F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### RES_0XD228_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELATIVZEIT_VERBAU_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Zeit des Erstverbau |
| STAT_KM_VERBAU_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand beim Verbau |
| STAT_VIN_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | VIN |
| STAT_RELATIVZEIT_LETZTVERBAU_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit Letztverbau |
| STAT_KM_LETZTVERBAU_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand Letztverbau |
| STAT_VIN_LETZTVERBAU_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Fahrgestellnummer Letztverbau |

### RES_0XD60E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TOUCHPAD_AKTIVIERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Status der Aktivierung vom Touchpad: 0x00 = Touchpad nicht aktiviert 0x01 = Touchpad aktiviert |

### RES_0XD7A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_DRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Druck |
| STAT_RELATIVZEIT_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Druck |
| STAT_ANZAHL_LANGDRUCK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Langdruck |
| STAT_RELATIVZEIT_LANGDRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Langdruck |
| STAT_ANZAHL_HAENGER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hänger |
| STAT_RELATIVZEIT_HAENGER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Relativzeit letzter Hänger |
| STAT_KM_DRUCK_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | KM-Stand letzter Druck, Langdruck oder Hänger |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STELLGLIED_POSITIONEN | 0xD134 | - | Stellgliedposition | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD134_D | RES_0xD134_D |
| VARIANTE_ZBE | 0xD137 | STAT_ZBE_VARIANTE_NR | Variante ZBE: 0 = Low Variante 1 = Mid Variante  2 = High Variante 255 = Ungültiger Wert oder ZBE nicht codiert | 0-n | - | High | unsigned char | TAB_ZBE_VARIANTE | - | - | - | - | 22 | - | - |
| ZBE_TASTEN | 0xD14D | - | Ansteuerung der angegebenen Taste. Simuliert eine normale Tastenbetätigung. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD14D_D | RES_0xD14D_D |
| SCHRITTE_ROTRAD | 0xD14E | STAT_REGISTER_ROTRAD_WERT | Ausgabe vom aktuellen Wert für die Stellung des Rotationsrad. Wert 0, wenn Drehgeber nicht konfiguriert wurde | - | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LOGGING_TASTE1 | 0xD213 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD213_D |
| LOGGING_TASTE2 | 0xD214 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD214_D |
| LOGGING_TASTE3 | 0xD215 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD215_D |
| LOGGING_TASTE4 | 0xD216 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD216_D |
| LOGGING_TASTE5 | 0xD217 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD217_D |
| LOGGING_TASTE6 | 0xD218 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD218_D |
| LOGGING_TASTE7 | 0xD219 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD219_D |
| LOGGING_TASTE8 | 0xD21A | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21A_D |
| LOGGING_DREHSTELLER | 0xD21B | - | Logging des Drehstellers (Drehen, Kippen) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21B_D |
| LOGGING_DREHSTELLER_NORD | 0xD21C | - | Logging der Tasten  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21C_D |
| LOGGING_DREHSTELLER_OST | 0xD21D | - | Logging der Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21D_D |
| LOGGING_DREHSTELLER_SUED | 0xD21E | - | Logging der Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21E_D |
| LOGGING_DREHSTELLER_WEST | 0xD21F | - | Logging der Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD21F_D |
| LOGGING_VERBAU | 0xD228 | - | Auslesen, wann die Komponente verbaut wurde | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD228_D |
| TASTEN_HAPTIK | 0xD26F | - | Steuert die aktive Haptik der Tasten an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD26F_D | - |
| STEUERN_SIGNALMODE | 0xD598 | - | Stellt ein, ob bei Betätigung der Bedienelemente die Signale auf den CAN nach außen verschickt werden (unterdrückt = Arg 1). Wird bei Klemmenwechsel automatisch deaktiviert (bei Fahrzeugen mit Klemmen) oder bei Arg. 0. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD598_D | - |
| TOUCHPAD_BERUEHRUNG | 0xD60D | STAT_TOUCHPAD_BERUEHRUNG | Berührungserkennung Touchpad: 0x00 = keine Berührung erkannt 0x01 = Berührung erkannt | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| TOUCHPAD_AKTIVIERUNG | 0xD60E | - | Aktivierung vom Touchpad | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD60E_D | RES_0xD60E_D |
| TOUCHPAD_ANNAEHERUNG | 0xD68D | STAT_TOUCHPAD_ANNAEHERUNG | Annäherungsserkennung Touchpad: 0x00 = keine Annäherung erkannt 0x01 = Annäherung erkannt | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LOGGING_TASTE9 | 0xD7A9 | - | Loggingdaten der Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7A9_D |
| SPANNUNG_KLEMME_30B_WERT | 0xDAD9 | STAT_SPANNUNG_KLEMME_30B_WERT | Spannungswert am Steuergerät an Klemme 30B (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_ARG_STELLGLIED_POSITIONEN

| WERT | TEXT |
| --- | --- |
| 0 | NULLSTELLUNG |
| 1 | NORDEN |
| 2 | OSTEN |
| 3 | SUEDEN |
| 4 | WESTEN |
| 0xFF | Wert ungültig |

### TAB_STELLGLIED_POSITIONEN

| WERT | TEXT |
| --- | --- |
| 0 | Keine Betätigung |
| 1 | Stellglied nach Norden gedrückt |
| 2 | Stellglied nach Osten gedrückt |
| 3 | Stellglied nach Süden gedrückt |
| 4 | Stellglied nach Westen gedrückt |
| 0xFF | Wert ungültig |

### TAB_TASTEN_HAPTIK

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | PUSH |
| 0x02 | RELEASE |

### TAB_ZBE_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Taste gedrückt |
| 0x01 | MENU/FAV |
| 0x02 | BACK |
| 0x04 | OPTION |
| 0x08 | RADIO/COM |
| 0x10 | MEDIA |
| 0x20 | NAV |
| 0x40 | TEL/MAP |
| 0x80 | ConnectedDrive |
| 0x100 | PUSH |
| 0xFF | Ungültiger Wert |

### TAB_ZBE_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Low-Variante |
| 0x01 | Mid-Variante |
| 0x02 | High-Variante |
| 0xFF | Ungültiger Wert oder ZBE nicht codiert |
