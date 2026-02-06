# CPM_G30.prg

## General

|  |  |
| --- | --- |
| File | CPM_G30.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 71 |
| Origin | BMW EI-415 Opl |
| Revision | 8.000 |
| Author | ALTRAN-DEUTSCHLAND-S.A.S.&-CO. EE-922 Sander |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Car Pad Modul |  |  |
| ORIGIN | string | BMW EI-415 Opl |  |  |
| REVISION | string | 8.000 |  |  |
| AUTHOR | string | ALTRAN-DEUTSCHLAND-S.A.S.&-CO. EE-922 Sander |  |  |
| COMMENT | string | - |  |  |
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

### ARG_0XD0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Aktivierungswert |

### ARG_0XDE6C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SSID_GPM | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | ID des GPM für den die Daten gelöscht werden müssen. 00000 = Löschen der kompletten Liste |

### ARG_0XDFBF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_FOD_LOD | 0-n | high | unsigned char | - | RESET_FOD_LOD | - | - | - | - | - | zu zurücksetzender Messwert |

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

### FOD_TAB_ACTIVATION_ARG_

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | ENABLE |
| 0x02 | STANDARD_SW_CONTROL |

### FOD_TAB_ACTIVATION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | ENABLE |
| 0x02 | STANDARD_SW_CONTROL |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021B00 | Energiesparmode aktiv | 0 | - |
| 0x021B08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021B09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x021B0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x021B0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x021B0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x021B0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF1B | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x80738A | GPM: Living Object Detected (LOD) | 1 | - |
| 0x80738B | GPM: Foreign Object Detected (FOD) | 1 | - |
| 0x80738D | CPM: Versorgungspannung LV Fehler | 0 | - |
| 0x8073A0 | Montagemodus aktiv | 1 | - |
| 0x8073A1 | Mindestens ein Hochvolt-Stecker ist nicht gesteckt. | 0 | - |
| 0x8073A5 | GPM: Derating oder Ladeunterbrechung aufgrund GPM (Sammelfehler) | 1 | - |
| 0x8073A6 | GPM: Interner Hardwarefehler (Sammelfehler) | 1 | - |
| 0x80740C | CPM, HVDC-Anschluss: Unterspannung | 0 | - |
| 0x80740D | CPM, HVDC-Anschluss: Überspannung | 0 | - |
| 0x80740E | CPM, HVDC-Anschluss: Überstrom | 0 | - |
| 0x80740F | CPM: Ladeunterbrechung, da Temperaturüberschreitung Schwelle 2 | 1 | - |
| 0x807410 | CPM: Degradation, Temperaturüberschreitung Schwelle 1 | 1 | - |
| 0x807411 | CPM, Temperatursensor: Defekt | 0 | - |
| 0x807413 | CPM: Kein HVDC-Strom trotz Ladeanforderung | 0 | - |
| 0x807414 | CPM: HVDC-Spannung unplausibel | 0 | - |
| 0x807417 | CPM: HVDC-Strom unplausibel | 0 | - |
| 0x80741A | CPM: Positionierung fehlerhaft | 0 | - |
| 0x80741B | CPM: CrowBar wurde ausgelöst | 1 | - |
| 0x80741C | WPT: Koppelfaktor zu gering | 1 | - |
| 0x80741D | WPT: Wirkungsgrad unplausibel | 1 | - |
| 0x80741E | WPT: Keine optimaler Arbeitspunkt oder Arbeitsfrequenz gefunden | 1 | - |
| 0x80741F | WPT: Degradation, schlechte Positionierung | 1 | - |
| 0x807420 | CPM, WLAN: Kommunikationsfehler | 0 | - |
| 0x807421 | Überspannung erkannt | 1 | - |
| 0x807422 | Unterspannung erkannt | 1 | - |
| 0x807423 | WLAN deaktiviert | 1 | - |
| 0x807424 | CPM, Crowbar Selbsttest: Defekt | 0 | - |
| 0x807425 | CPM: Interner HW-Defekt (Sammelfehler) | 0 | - |
| 0x807426 | WPT: Positionierung ohne HVDC unmöglich | 0 | - |
| 0xCFC47C | LE-CAN Control Module Bus OFF | 0 | - |
| 0xCFCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCFD400 | Botschaft (SPEC_IDT_CHGNG FDh) fehlt, Empfänger CPM, Sender EME | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | SPANNUNG_KL30 | V | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_GPM_AC_ANSCHLUSS_UNTERSPANNUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4105 | UWB_GPM_AC_ANSCHLUSS_UEBERSPANNUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4106 | UWB_GPM_AC_ANSCHLUSS_UEBERSTROM | 0/1 | High | 0x01 | - | - | - | - |
| 0x4107 | UWB_GPM_POSITIONIERUNG_FEHLERHAFT | 0/1 | High | 0x01 | - | - | - | - |
| 0x4108 | UWB_GPM_LOD_FUNKTION_DEFEKT | 0/1 | High | 0x01 | - | - | - | - |
| 0x4109 | UWB_GPM_FOD_FUNKTION_DEFEKT | 0/1 | High | 0x01 | - | - | - | - |
| 0x410B | UWB_GPM_DEGRADATION_UEBERTEMPERATUR | 0/1 | High | 0x01 | - | - | - | - |
| 0x410C | UWB_GPM_TEMPERATURSENSOR_DEFEKT | 0/1 | High | 0x01 | - | - | - | - |
| 0x410D | UWB_GPM_PRIMAERSPULE_UEBERSTROM | 0/1 | High | 0x01 | - | - | - | - |
| 0x410E | UWB_GPM_PRIMAERSPULE_UEBERSPANNUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x410F | UWB_GPM_FILTER_UEBERSTROM | 0/1 | High | 0x01 | - | - | - | - |
| 0x4110 | UWB_GPM_DC_LINK_UEBERSPANNUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4111 | UWB_GPM_KEIN_LADEN_TROTZ_ANFORDERUNG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4112 | UWB_GPM_VERSORGUNGSPANNUNG_LV_FEHLER | 0/1 | High | 0x01 | - | - | - | - |
| 0x4115 | UWB_GPM_HV_AC_SPANNUNG_UNPLAUSIBEL | 0/1 | High | 0x01 | - | - | - | - |
| 0x4116 | UWB_GPM_LUEFTER_STELLGLIED_BLOCKIERT | 0/1 | High | 0x01 | - | - | - | - |
| 0x4117 | UWB_GPM_PRECHARGE_FEHLER_AC | 0/1 | High | 0x01 | - | - | - | - |
| 0x4118 | UWB_GPM_DEGRADATION_STROM_IM_FILTER | 0/1 | High | 0x01 | - | - | - | - |
| 0x4119 | UWB_GPM_HV_AC_STROM_UNPLAUSIBEL | 0/1 | High | 0x01 | - | - | - | - |
| 0x411A | UWB_GPM_CROWBAR_SELBSTTEST_DEFEKT | 0/1 | High | 0x01 | - | - | - | - |
| 0x411B | UWB_GPM_WATCHDOG_TRIGGER | 0/1 | High | 0x01 | - | - | - | - |
| 0x411C | UWB_GPM_LUEFTER_VERDECKT_UEBERTEMPERATUR | 0/1 | High | 0x01 | - | - | - | - |
| 0x4131 | UWB_HV_STROM | A | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4132 | UWB_HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4133 | UWB_SYSTEM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_INDUKTIVES_LADEN_ZUSTAND | - | - | - |
| 0x4134 | UWB_GPM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_ICS_BETRIEBSZUSTAND | - | - | - |
| 0x4135 | UWB_CPM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_ICS_BETRIEBSZUSTAND | - | - | - |
| 0x4136 | UWB_WLAN_STATUS | 0-n | High | 0xFF | TAB_WLAN_STATE | - | - | - |
| 0x4138 | UWB_CPM_TEMPERATUR_DIODE | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4139 | UWB_CPM_TEMPERATUR_CAPS | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x413A | UWB_CPM_TEMPERATUR_POWER | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x413B | UWB_CPM_TEMPERATUR_SYSTEM | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x413C | UWB_CPM_TEMPERATUR_MIKROCONTROLLER | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x413E | UWB_FZG_POSITION_X | cm | High | unsigned int | - | 1.0 | 1.0 | -2047.0 |
| 0x413F | UWB_FZG_POSITION_Y | cm | High | unsigned int | - | 1.0 | 1.0 | -2047.0 |
| 0x4140 | UWB_IST_DC_LEISTUNG | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4142 | UWB_AC_LEISTUNG | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4143 | UWB_LADEZEIT | h | High | signed long | - | 0.0167 | 1.0 | 0.0 |
| 0x4146 | UWB_AC_EFF_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4147 | UWB_LOD_ARBEITSFREQUENZ | kHz | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x414A | UWB_AC_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x414B | UWB_AC_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GPM_DERATING_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Kein Derating |
| 1 | Übertemperatur |
| 2 | Stromnetz Frequenz zu klein |
| 3 | außerhalb Betriebsbereich |
| 4 | Strom Begrenzung |
| 5 | Stromnetz Leistung zu klein |
| 0xFF | Wert ungültig |

### GPM_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Vorladung |
| 2 | Ladebereit |
| 3 | Ladebetrieb |
| 4 | Abgeschaltet |
| 5 | Filter Wechsel |
| 15 | Fehler |
| 0xFF | Wert ungültig |

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
| 0x807384 | GPM, AC-Anschluss: Unterspannung | 1 | - |
| 0x807385 | GPM, AC-Anschluss: Überspannung | 1 | - |
| 0x807386 | GPM, AC-Anschluss: Überstrom | 1 | - |
| 0x807387 | GPM: Positionierung fehlerhaft | 1 | - |
| 0x807388 | GPM, LOD-Funktion: Defekt | 1 | - |
| 0x807389 | GPM, FOD-Funktion: Defekt | 1 | - |
| 0x80738E | GPM: Ladeunterbrechung, da Temperaturüberschreitung Schwelle 2 | 1 | - |
| 0x80738F | GPM: Degradation, Temperaturüberschreitung Schwelle 1 | 1 | - |
| 0x807390 | GPM, Temperatursensor: Defekt | 1 | - |
| 0x807391 | GPM, Primärspule: Überstrom | 1 | - |
| 0x807393 | GPM, Primärspule: Überspannung | 1 | - |
| 0x807395 | GPM, Filter: Überstrom | 1 | - |
| 0x807396 | GPM, DC-Link: Überspannung | 1 | - |
| 0x807398 | GPM: Kein Laden trotz Ladeanforderung | 1 | - |
| 0x80739D | GPM: Versorgungspannung LV Fehler | 1 | - |
| 0x8073A4 | GPM: HVAC-Spannung unplausibel | 1 | - |
| 0x8073AA | GPM, Lüfter: Stellglied blockiert | 1 | - |
| 0x807400 | GPM, Precharge: Fehler AC | 1 | - |
| 0x807401 | GPM: Degradation, Strom im Filter | 1 | - |
| 0x807459 | GPM: HVAC-Strom unplausibel | 1 | - |
| 0x80745E | GPM, Crowbar Selbsttest: Defekt | 1 | - |
| 0x807460 | GPM: Lüfter verdeckt, Übertemperatur | 1 | - |
| 0x807461 | GPM: Neue SW-Version vorhanden | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | SPANNUNG_KL30 | V | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4131 | UWB_HV_STROM | A | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x4132 | UWB_HV_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4133 | UWB_SYSTEM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_INDUKTIVES_LADEN_ZUSTAND | - | - | - |
| 0x4134 | UWB_GPM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_ICS_BETRIEBSZUSTAND | - | - | - |
| 0x4135 | UWB_CPM_BETRIEBSZUSTAND | 0-n | High | 0xFF | TAB_ICS_BETRIEBSZUSTAND | - | - | - |
| 0x4136 | UWB_WLAN_STATUS | 0-n | High | 0xFF | TAB_WLAN_STATE | - | - | - |
| 0x413E | UWB_FZG_POSITION_X | cm | High | unsigned int | - | 1.0 | 1.0 | -2047.0 |
| 0x413F | UWB_FZG_POSITION_Y | cm | High | unsigned int | - | 1.0 | 1.0 | -2047.0 |
| 0x4140 | UWB_IST_DC_LEISTUNG | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4142 | UWB_AC_LEISTUNG | W | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4143 | UWB_LADEZEIT | h | High | signed long | - | 0.0167 | 1.0 | 0.0 |
| 0x4146 | UWB_AC_EFF_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4147 | UWB_LOD_ARBEITSFREQUENZ | kHz | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x414A | UWB_AC_STROM | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x414B | UWB_AC_SPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### LOD_TAB_ACTIVATION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | ENABLE |
| 0x02 | STANDARD_SW_CONTROL |

### LOD_TAB_SAFETY_SHUTDOWN_AT_DETECTION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | PFC ON |
| 0x02 | POWER TRANSFER ON |
| 0x03 | STANDARD_SW_CONTROL |

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

### RESET_FOD_LOD

| WERT | TEXT |
| --- | --- |
| 1 | Reset LOD Zähler |
| 2 | Reset FOD Zähler |
| 3 | Reset LOD Zeit |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_VER_HI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen der ersten Versionswert des GPM-Software. |
| STAT_SW_VER_MID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen der mitte Versionswert des GPM-Software. |
| STAT_SW_VER_LOW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen der lersten Versionswert des GPM-Software. |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VER_YEAR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen von der Jahr des GPM Hardware-Version |
| STAT_HW_VER_WEEK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen von der Woche des GPM Hardware-Version |
| STAT_HW_VER_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen von dem Patch des GPM Hardware-Version |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0XD0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Aktivierungswert |

### RES_0XDE85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIRKUNGSGRAD_LADEZYKLUS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Ladezyklus |
| STAT_WIRKUNGSGRAD_DC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad DC |
| STAT_SLE_DC_HV_LEISTUNG_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abgegebende Momentanleistung in den Zwischenkreis |

### RES_0XDE86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_RMS_AC_PHASE_1_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Effektivwerte der AC Leiterspannungen (Phase1) |
| STAT_SPANNUNG_DC_HV_OBERGRENZE_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV DC Spannungsobergrenze |
| STAT_SPANNUNG_DC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV DC Spannung |
| STAT_SPANNUNG_KL30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL30 Spannung |
| STAT_SPANNUNG_KL30C_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | KL30C Spannung (CPM: nicht relevant) |

### RES_0XDE87_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_AC_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Strom |
| STAT_STROM_AC_MAX_GESPEICHERT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximal gespeicherter AC Strom (CPM: nicht relevant) |
| STAT_STROM_HV_DC_WERT | A | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | HV DC Strom |
| STAT_STROM_HV_DC_MAX_LIMIT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximal erlaubter HV DC Strom (CPM: nicht relevant) |
| STAT_STROM_HV_DC_MAX_GESPEICHERT_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Maximal gespeicherter DC Strom (CPM: nicht relevant) |

### RES_0XDFB0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDEN_GLOBAL_LADE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Ladezeit in Sekunden |
| STAT_SEKUNDEN_LADEZYKLUS_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezeit in Sekunden |

### RES_0XDFB1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NTC1_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 1) (CPM: Diode) |
| STAT_NTC2_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 2) (CPM: Kondensator) |
| STAT_NTC3_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 3) (CPM: Power) |
| STAT_NTC4_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 4) (CPM: System) |
| STAT_NTC5_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 5) (CPM: Mikrokontroller) |
| STAT_NTC6_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 6) (nur UCX) |
| STAT_NTC7_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | interne Temperatur (Temperatursensor 7)  (nur UCX: erst ab HWEL 001_024_001) |

### RES_0XDFBE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_KOMMUNIKATION | 0-n | high | unsigned char | - | TAB_WLAN_STATUS | - | - | - | Status WLAN Kommunikation |
| STAT_POSITIONIERUNG | 0-n | high | unsigned char | - | TAB_POSITIONIERUNG_STATUS | - | - | - | Status Positionierung mit Boden-Spule |
| STAT_BETRIEBSART | 0-n | high | unsigned char | - | TAB_INDUKTIVES_LADEN_ZUSTAND | - | - | - | Status aktuelle Betriebsart Ladeelektronik |

### RES_0XDFBF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FOD_LOD | 0-n | high | unsigned char | - | TAB_FOD_LOD | - | - | - | Status der Erkennung |
| STAT_FOD_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fremdkörper Erkennungszähler |
| STAT_LOD_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lebewesen Erkennungszähler |
| STAT_LOD_ZEITDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte Zeit mit aktiver Lebewesenerkennung während Laden. |

### RES_0XDFDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENERGIEVERBRAUCH_LADEZYKLUS_WERT | kWh | high | unsigned char | - | - | 0.2 | 1.0 | 0.0 | Energieverbrauch des letzten/aktuellen Ladezyklus |
| STAT_ENERGIEVERBRAUCH_GESAMT_WERT | kWh | high | unsigned long | - | - | 0.2 | 1.0 | 0.0 | Gesamter Energieverbrauch vom CPM (Lifetime: ab erster Ladevorgang) |

### RES_0XE2B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPM_SPANNUNG_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_1_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_1_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_1_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_1_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_1_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_1_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_1_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_1_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_1_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_1 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_1 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_1 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_1_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_2_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_2_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_2_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_2_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_2_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_2_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_2_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_2_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_2_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_2_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_2_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_2 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_2 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_2 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_2_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_3_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_3_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_3_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_3_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_3_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_3_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_3_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_3_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_3_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_3_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_3_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_3 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_3 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_3 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_3_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_4_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_4_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_4_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_4_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_4_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_4_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_4_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_4_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_4_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_4_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_4_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_4 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_4 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_4 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_4_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_5_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_5_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_5_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_5_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_5_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_5_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_5_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_5_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_5_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_5_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_5_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_5 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_5 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_5 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_5_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_6_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_6_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_6_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_6_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_6_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_6_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_6_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_6_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_6_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_6_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_6_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_6_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_6 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_6 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_6 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_6_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_7_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_7_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_7_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_7_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_7_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_7_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_7_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_7_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_7_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_7_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_7_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_7_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_7 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_7 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_7 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_7_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_8_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_8_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_8_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_8_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_8_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_8_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_8_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_8_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_8_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_8_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_8_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_8_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_8_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_8 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_8 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_8 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_8_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_9_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_9_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_9_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_9_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_9_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_9_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_9_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_9_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_9_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_9_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_9_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_9_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_9_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_9 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_9 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_9 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_9_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_9_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_GPM_SPANNUNG_MIN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MAX_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale Spannung während des Ladevorgangs |
| STAT_GPM_SPANNUNG_MEAN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche Spannung während des Ladevorgangs |
| STAT_GPM_STROM_MAX_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | GPM Maximaler Strom während des Ladevorgangs |
| STAT_LADEDAUER_10_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladedauer |
| STAT_ZEIT_LOD_ERKENNUNG_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit LOD Erkennung aktiv (65534 = Überlauf) |
| STAT_ZEIT_FOD_ERKENNUNG_10_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer mit FOD Erkennung aktiv (65534 = Überlauf) |
| STAT_GPM_ENERGIE_IN_10_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | GPM Energie |
| STAT_CPM_ENERGIE_OUT_10_WERT | kWh | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | CPM Energie |
| STAT_MAX_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Ladeleistung |
| STAT_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate x |
| STAT_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ladekoordinate y |
| STAT_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Kopplung |
| STAT_CPM_U_DC_MIN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Minimale DC-Spannung |
| STAT_CPM_U_DC_MAX_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | CPM Maximale DC-Spannung |
| STAT_ANZ_SCHLUESSEL_SUCHE_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Key Suche |
| STAT_GPM_ZK_SPANNUNG_MIN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MAX_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale ZK Spannung |
| STAT_GPM_ZK_SPANNUNG_MEAN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche ZK Spannung |
| STAT_GPM_STROM_EFFEKTIV_MIN_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Minimaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MAX_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Maximaler Effektivwert |
| STAT_GPM_STROM_EFFEKTIV_MEAN_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GPM Strom, Durchschnittlicher Effektivwert |
| STAT_CPM_TEMP_1_MIN_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Min |
| STAT_CPM_TEMP_1_MAX_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 1 Max |
| STAT_CPM_TEMP_2_MIN_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Min |
| STAT_CPM_TEMP_2_MAX_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | CPM Temperatur 2 Max |
| STAT_GPM_TEMP_1_MAX_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 1 Max |
| STAT_GPM_TEMP_2_MAX_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 2 Max |
| STAT_GPM_TEMP_3_MAX_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | GPM Temperatur 3 Max |
| STAT_GPM_U1_SPANNUNG_MIN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Minimale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MAX_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Maximale U1 Spannung |
| STAT_GPM_U1_SPANNUNG_MEAN_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | GPM Durchschnittliche U1 Spannung |
| STAT_GPM_SSID_10_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | GPM Identifikation (SSID) |
| STAT_GPM_SW_VERSION_10_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | GPM SW Version (XX-XX-XX-TXX) |
| STAT_CPM_SW_VERSION_10_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CPM SW Version (XX-XX-XX-TXX) |
| STAT_DATUM_ZEIT_WLAN_VERBINDUNG_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Verbindung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_START_LADEN_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des ersten Start für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_STOPP_LADEN_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit des letzten Stopp für Energie Übertragung (YY-MM-DD HH-MM-SS) |
| STAT_DATUM_ZEIT_WLAN_TRENNUNG_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Datum und Zeit der WLAN Trennung (YY-MM-DD HH-MM-SS) |
| STAT_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Min Wert |
| STAT_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FOD Max Wert |
| STAT_E1_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Aufgetretener Fehlerort |
| STAT_E1_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Häufigkeit des Events |
| STAT_E1_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM Spannung  |
| STAT_E1_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom |
| STAT_E1_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladeleistung |
| STAT_E1_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate x |
| STAT_E1_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 1: Ladekoordinate y |
| STAT_E1_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 1: Kopplung |
| STAT_E1_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM DC-Spannung |
| STAT_E1_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 1: CPM Strom |
| STAT_E1_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM ZK Spannung |
| STAT_E1_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 1: GPM Strom Effektiv |
| STAT_E1_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 1 |
| STAT_E1_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: CPM Temperatur 2 |
| STAT_E1_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 1 |
| STAT_E1_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 2 |
| STAT_E1_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 1: GPM Temperatur 3 |
| STAT_E1_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: GPM U1 Spannung |
| STAT_E1_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Min Wert |
| STAT_E1_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 1: FOD Max Wert |
| STAT_E1_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 1: GPM Derating Status |
| STAT_E1_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: GPM Status Forderung |
| STAT_E1_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 1: GPM aktueller Status |
| STAT_E1_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM Status Forderung |
| STAT_E1_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 1: CPM aktueller Status |
| STAT_E1_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 1: CPM Spannungsversorgung |
| STAT_E1_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 1: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E2_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Aufgetretener Fehlerort |
| STAT_E2_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Häufigkeit des Events |
| STAT_E2_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM Spannung  |
| STAT_E2_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom |
| STAT_E2_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladeleistung |
| STAT_E2_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate x |
| STAT_E2_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 2: Ladekoordinate y |
| STAT_E2_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 2: Kopplung |
| STAT_E2_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM DC-Spannung |
| STAT_E2_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 2: CPM Strom |
| STAT_E2_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM ZK Spannung |
| STAT_E2_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 2: GPM Strom Effektiv |
| STAT_E2_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 1 |
| STAT_E2_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: CPM Temperatur 2 |
| STAT_E2_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 1 |
| STAT_E2_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 2 |
| STAT_E2_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 2: GPM Temperatur 3 |
| STAT_E2_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: GPM U1 Spannung |
| STAT_E2_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Min Wert |
| STAT_E2_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 2: FOD Max Wert |
| STAT_E2_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 2: GPM Derating Status |
| STAT_E2_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: GPM Status Forderung |
| STAT_E2_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 2: GPM aktueller Status |
| STAT_E2_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM Status Forderung |
| STAT_E2_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 2: CPM aktueller Status |
| STAT_E2_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 2: CPM Spannungsversorgung |
| STAT_E2_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 2: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E3_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Aufgetretener Fehlerort |
| STAT_E3_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Häufigkeit des Events |
| STAT_E3_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM Spannung  |
| STAT_E3_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom |
| STAT_E3_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladeleistung |
| STAT_E32_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate x |
| STAT_E3_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 3: Ladekoordinate y |
| STAT_E3_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 3: Kopplung |
| STAT_E3_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM DC-Spannung |
| STAT_E3_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 3: CPM Strom |
| STAT_E3_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM ZK Spannung |
| STAT_E3_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 3: GPM Strom Effektiv |
| STAT_E3_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 1 |
| STAT_E3_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: CPM Temperatur 2 |
| STAT_E3_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 1 |
| STAT_E3_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 2 |
| STAT_E3_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 3: GPM Temperatur 3 |
| STAT_E3_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: GPM U1 Spannung |
| STAT_E3_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Min Wert |
| STAT_E3_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 3: FOD Max Wert |
| STAT_E3_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 3: GPM Derating Status |
| STAT_E3_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: GPM Status Forderung |
| STAT_E3_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 3: GPM aktueller Status |
| STAT_E3_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM Status Forderung |
| STAT_E3_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 3: CPM aktueller Status |
| STAT_E3_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 3: CPM Spannungsversorgung |
| STAT_E3_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 3: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E4_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Aufgetretener Fehlerort |
| STAT_E4_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Häufigkeit des Events |
| STAT_E4_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM Spannung  |
| STAT_E4_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom |
| STAT_E4_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladeleistung |
| STAT_E4_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate x |
| STAT_E4_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 4: Ladekoordinate y |
| STAT_E4_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 4: Kopplung |
| STAT_E4_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM DC-Spannung |
| STAT_E4_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 4: CPM Strom |
| STAT_E4_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM ZK Spannung |
| STAT_E4_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 4: GPM Strom Effektiv |
| STAT_E4_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 1 |
| STAT_E4_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: CPM Temperatur 2 |
| STAT_E4_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 1 |
| STAT_E4_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 2 |
| STAT_E4_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 4: GPM Temperatur 3 |
| STAT_E4_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: GPM U1 Spannung |
| STAT_E4_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Min Wert |
| STAT_E4_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 4: FOD Max Wert |
| STAT_E4_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 4: GPM Derating Status |
| STAT_E4_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: GPM Status Forderung |
| STAT_E4_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 4: GPM aktueller Status |
| STAT_E4_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM Status Forderung |
| STAT_E4_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 4: CPM aktueller Status |
| STAT_E4_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 4: CPM Spannungsversorgung |
| STAT_E4_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 4: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E5_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Aufgetretener Fehlerort |
| STAT_E5_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Häufigkeit des Events |
| STAT_E5_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM Spannung  |
| STAT_E5_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom |
| STAT_E5_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladeleistung |
| STAT_E5_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate x |
| STAT_E5_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 5: Ladekoordinate y |
| STAT_E5_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 5: Kopplung |
| STAT_E5_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM DC-Spannung |
| STAT_E5_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 5: CPM Strom |
| STAT_E5_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM ZK Spannung |
| STAT_E5_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 5: GPM Strom Effektiv |
| STAT_E5_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 1 |
| STAT_E5_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: CPM Temperatur 2 |
| STAT_E5_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 1 |
| STAT_E5_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 2 |
| STAT_E5_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 5: GPM Temperatur 3 |
| STAT_E5_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: GPM U1 Spannung |
| STAT_E5_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Min Wert |
| STAT_E5_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 5: FOD Max Wert |
| STAT_E5_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 5: GPM Derating Status |
| STAT_E5_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: GPM Status Forderung |
| STAT_E5_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 5: GPM aktueller Status |
| STAT_E5_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM Status Forderung |
| STAT_E5_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 5: CPM aktueller Status |
| STAT_E5_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 5: CPM Spannungsversorgung |
| STAT_E5_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 5: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_E6_FORT_NR_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Aufgetretener Fehlerort |
| STAT_E6_HFK_EVENT_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Häufigkeit des Events |
| STAT_E6_GPM_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM Spannung  |
| STAT_E6_GPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom |
| STAT_E6_LADELEISTUNG_10_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladeleistung |
| STAT_E6_X_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate x |
| STAT_E6_Y_KOORDINATE_10_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Event 6: Ladekoordinate y |
| STAT_E6_KOPPLUNG_10_WERT | % | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Event 6: Kopplung |
| STAT_E6_CPM_U_DC_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM DC-Spannung |
| STAT_E6_CPM_STROM_10_WERT | A | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Event 6: CPM Strom |
| STAT_E6_GPM_ZK_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM ZK Spannung |
| STAT_E6_GPM_STROM_EFFEKTIV_10_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event 6: GPM Strom Effektiv |
| STAT_E6_CPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 1 |
| STAT_E6_CPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: CPM Temperatur 2 |
| STAT_E6_GPM_TEMP1_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 1 |
| STAT_E6_GPM_TEMP2_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 2 |
| STAT_E6_GPM_TEMP3_10_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Event 6: GPM Temperatur 3 |
| STAT_E6_GPM_U1_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: GPM U1 Spannung |
| STAT_E6_FOD_MIN_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Min Wert |
| STAT_E6_FOD_MAX_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Event 6: FOD Max Wert |
| STAT_E6_GPM_DERATING_STATE_10 | 0-n | high | unsigned char | - | GPM_DERATING_STATUS | - | - | - | Event 6: GPM Derating Status |
| STAT_E6_GPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: GPM Status Forderung |
| STAT_E6_GPM_STATUS_10 | 0-n | high | unsigned char | - | GPM_STATUS | - | - | - | Event 6: GPM aktueller Status |
| STAT_E6_CPM_STATUS_FORDERUNG_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM Status Forderung |
| STAT_E6_CPM_STATUS_10 | 0-n | high | unsigned char | - | STATUS_FORDERUNG | - | - | - | Event 6: CPM aktueller Status |
| STAT_E6_CPM_LV_SPANNUNG_10_WERT | V | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Event 6: CPM Spannungsversorgung |
| STAT_E6_DATUM_ZEIT_EVENT_10_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Event 6: Datum und Zeit des Events (YY-MM-DD HH-MM-SS) |
| STAT_ENTRY_NB_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |
| STAT_ENTRY_NB_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Entry Number |

### RES_0XF043_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTIONSSTATUS_MONTAGEMODUS | - | - | + | 0-n | high | unsigned char | - | TAB_FUNKTIONSSTATUS_MONTAGEMODUS | - | - | - | Aussage über die Funktion Montagemodus |
| STAT_ZUSTAND_MONTAGEMODUS | - | - | + | 0-n | high | unsigned char | - | TAB_ZUSTAND_MONTAGEMODUS | - | - | - | Zustand des Montagemodus |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| _GPM_SW_VERSION | 0x4001 | - | Auslesen der GPM-SW-VERSION | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |
| _GPM_HW_VERSION | 0x4002 | - | Auslesen der GPM-HW-VERSION | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _CPM_WLAN_POWER | 0x4016 | STAT_CPM_WLAN_RSSI_WERT | The RSSI value is an indicator for the WLAN signal strength: The higher the value, the stronger the signal. | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CPM_MAC_ADRESSE | 0x4017 | STAT_MAC_ADRESSE_DATA | Auslesen der MAC-Adresse | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WLAN_ACTIVATION | 0xD0A3 | - | WLAN Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A3_D | RES_0xD0A3_D |
| BEKANNTE_GPM_LISTE | 0xDE6C | - | Induktives Laden: Liste der letzten bekannten verbundenen GPM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE6C_D | - |
| AE_SLE_LEISTUNG | 0xDE85 | - | Leistungswerte Zwischenkreis der SLE | - | xle_P_IntLe_hv_ist | - | - | - | - | - | - | - | 22 | - | RES_0xDE85_D |
| AE_SLE_SPANNUNG | 0xDE86 | - | AC und DC Spannungen SLE | - | V_U_SleAc | - | - | - | - | - | - | - | 22 | - | RES_0xDE86_D |
| AE_SLE_STROM | 0xDE87 | - | AC und DC Ströme SLE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE87_D |
| LADEGERAET_LADEDAUER | 0xDFB0 | - | Information zur Ladedauer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB0_D |
| LADEGERAET_TEMPERATUREN | 0xDFB1 | - | Auslesen Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFB1_D |
| INDUKTIVES_LADEN_ZUSTAND | 0xDFBE | - | Zustand vom Induktiven Laden: Kommunikation und Positionierung mit Boden-Spule, Betriebszustand.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFBE_D |
| ERKENNUNG_FOD_LOD | 0xDFBF | - | Induktives Laden - Erkennung von Fremdkörpern und Lebewesen. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDFBF_D | RES_0xDFBF_D |
| LADEGERAET_ENERGIEVERBRAUCH | 0xDFDF | - | Energieverbrauch vom Ladegerät  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFDF_D |
| INDUKTIV_LADEHISTORIE | 0xE2B5 | - | Ladehistorie (induktives Laden) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2B5_D |
| _GPM_FLASH | 0xF03F | - | Diese Routinejob wird den Flash des GPM triggern  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MONTAGE_MODUS | 0xF043 | - | Aktivieren/Deaktivieren des Montagemodus oder Auslesen des Zustandes vom Montagemodus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_FORDERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Getrennt |
| 2 | Verbunden |
| 3 | Positionnierung |
| 4 | Stand By |
| 5 | Aktualisierung |
| 6 | Vorladung |
| 7 | Bereit zum Laden |
| 8 | Ladebetrieb |
| 9 | OpSwitch |
| 10 | Unterbrechung |
| 11 | Abschaltung |
| 15 | Fehler |
| 0xFF | Wert ungültig |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_ACTIVATION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | ENABLE |
| 0x02 | STANDARD_SW_CONTROL |

### TAB_ACTIVATION_FAN

| WERT | TEXT |
| --- | --- |
| 0x00 | DEACTIVATION |
| 0x01 | MANUAL |
| 0x02 | AUTOMATIC |

### TAB_CHARGE_POSSIBLE

| WERT | TEXT |
| --- | --- |
| 0x00 | Octagon Not OK |
| 0x01 | Octagon OK |
| 0x02 | Coupling Not OK |
| 0x03 | Coupling OK |
| 0x04 | Position Not OK |
| 0x05 | Position OK |
| 0xFF | Wert ungültig |

### TAB_CPM_CROWBAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Deactivated |
| 0x01 | Activated through hardware |
| 0x02 | Activated through software |
| 0x03 | Last charging cycle was stopped by HW path and SW path ist actually active |
| 0xFF | Wert ungültig |

### TAB_DISABLE_SAFETY_SHUTDOWN_LOD

| WERT | TEXT |
| --- | --- |
| 0x00 | DISABLE |
| 0x01 | PFC_ON |
| 0x02 | POWER_TRANSFER_ON |
| 0x03 | STANDARD_SW_CONTROL |

### TAB_DITHERING

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | MIN |
| 0x02 | MED |
| 0x03 | MAX |

### TAB_FOD_LOD

| WERT | TEXT |
| --- | --- |
| 1 | Nichts erkannt |
| 2 | Fremdkörper erkannt |
| 3 | Lebewesen erkannt |
| 4 | Fremdkörper und Lebewesen erkannt |
| 5 | Fehler |
| 0xFF | Wert ungültig |

### TAB_FOD_LOD_ERKENNUNG

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivieren |
| 1 | Aktivieren |
| 2 | Kommandierung aufheben |

### TAB_FUNKTIONSSTATUS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfüllt |
| 0x02 | Übergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | Nicht verfügbarer Wert |
| 0x05 | Funktion läuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | Nicht definiert |
| 0xFF | Ungültiger Wert |

### TAB_GPM_LISTE_FLAG

| WERT | TEXT |
| --- | --- |
| 0x00 | WpaKey wird geschrieben |
| 0x01 | ConnectPriority wird geschrieben |
| 0x02 | WpaKey und ConnectPriority werden geschrieben |

### TAB_HANDSHAKE_GENERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_HANDSHAKE |
| 0x01 | GENERATE_1_HANDSHAKE |
| 0x02 | GENERATE_MULTIPLE_HANDSHAKE |
| 0x03 | SW_CONTROL |

### TAB_ICS_BETRIEBSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Ruhemodus |
| 0x01 | Getrennt |
| 0x02 | Verbunden |
| 0x03 | Positionierung |
| 0x04 | Standby |
| 0x05 | GPM-Update |
| 0x06 | Precharge |
| 0x07 | Ladebereit |
| 0x08 | Lade |
| 0x09 | Operation Switch |
| 0x0A | Unterbrechung |
| 0x0B | Abschaltung |
| 0x0F | Fehler |
| 0x3C | SNA |
| 0xFF | Wert ungültig |

### TAB_INDUKTIVES_LADEN_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Ruhezustand |
| 0x02 | WLAN Suche |
| 0x03 | WLAN Authentisierung |
| 0x04 | Positionierung |
| 0x05 | Ladeinitialisierung |
| 0x06 | HV DC Ladebetrieb |
| 0x07 | Ladeunterbrechung |
| 0x08 | Fehler |
| 0x09 | Leistungsreduzierung |
| 0x0A | Betriebsartwechsel |
| 0xFF | Wert ungültig |

### TAB_MODE_CAN_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Low Power Mode |
| 0x02 | Charging |
| 0xFF | Wert ungültig |

### TAB_MOTAGE_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montagemodus Inaktiv |
| 0x01 | Montagemodus Aktiv |
| 0xFF | Wert ungültig |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_POSITIONIERUNG_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Positionieren |
| 2 | Position korrekt |
| 4 | Position nicht korrekt |
| 5 | Fehler |
| 0xFF | Wert ungültig |

### TAB_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Parken_BN_niO |
| 0x01 | Parken_BN_iO |
| 0x02 | Standfunktionen_Kunden_nicht_im_Fahrzeug |
| 0x03 | Wohnen |
| 0x04 | Prüfen_Analyse_Diagnose |
| 0x05 | Fahrbereitschaft_herstellen |
| 0x06 | Fahren |
| 0x07 | Fahrbereitschaft_beenden |
| 0xFE | Nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_FLASH_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Noch nicht gestartet |
| 0x01 | Running |
| 0x02 | Erfolgreich durchgeführt |
| 0x03 | Nicht erfolgreich durchgeführt |
| 0x04 | Fehler |
| 0xFF | Wert ungültig |

### TAB_WLAN_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht verbunden |
| 0x01 | Verbindung noch nicht erledigt |
| 0x02 | Authentifizierung fehlgeschlagen |
| 0x03 | GPM schon verbunden |
| 0x04 | Verbindung fehlgeschlagen |
| 0x05 | Verbindung hergestellt |
| 0xFF | Wert ungültig |

### TAB_WLAN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Suchen |
| 2 | Verbunden |
| 3 | Fehler |
| 0xFF | Wert ungültig |

### TAB_ZUSTAND_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montagemodus ist inaktiv |
| 0x01 | Montagemodus ist aktiv |
| 0xFE | Nicht definiert |
| 0xFF | Wert ungültig |
