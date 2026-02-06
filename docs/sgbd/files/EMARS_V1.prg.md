# EMARS_V1.prg

## General

|  |  |
| --- | --- |
| File | EMARS_V1.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 63 |
| Origin | BMW EF-422 HenryThasler |
| Revision | 4.006 |
| Author | ContiTemic ChassisElectronics DautM, ContiTemic ChassisElectron |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektromechanische Aktive Rollstabilisierung vorne |  |  |
| ORIGIN | string | BMW EF-422 HenryThasler |  |  |
| REVISION | string | 4.006 |  |  |
| AUTHOR | string | ContiTemic ChassisElectronics DautM, ContiTemic ChassisElectron |  |  |
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

### ARG_0X4008

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TORQUE_MISUSE_1 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehmoment-Belastungsgrenze 1 in Nm |
| TORQUE_MISUSE_2 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Drehmoment-Belastungsgrenze 2 in Nm (reserviert) |

### ARG_0X400B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_U | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM duty cycle für U Phase |
| PWM_V | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM duty cycle für V Phase |
| PWM_W | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM duty cycle für W Phase |
| PWM_DAUER | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 10000.0 | PWM Dauer |

### ARG_0X400C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument nicht verwendet |

### ARG_0X400D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHMOMENT | Nm | high | int | - | - | 26.0 | 1.0 | 0.0 | -1214.0 | 1214.0 | Vorgabe Sollmoment |

### ARG_0X4016

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WIDERSTAND_PHASE_1 | mOhm | high | unsigned int | - | - | 65536.0 | 100.0 | 0.0 | - | - | R Phase 1 |
| WIDERSTAND_PHASE_2 | mOhm | high | unsigned int | - | - | 65536.0 | 100.0 | 0.0 | - | - | R Phase 2 |
| WIDERSTAND_PHASE_3 | mOhm | high | unsigned int | - | - | 65536.0 | 100.0 | 0.0 | - | - | R Phase 3 |
| FLUSS | Wb | high | unsigned int | - | - | 6553600.0 | 1.0 | 0.0 | - | - | Psi |
| INDUKTIVITAET_D | H | high | unsigned int | - | - | 6.5536E7 | 1.0 | 0.0 | - | - | Ld |
| INDUKTIVITAET_Q | H | high | unsigned int | - | - | 6.5536E7 | 1.0 | 0.0 | - | - | Lq |

### ARG_0X4101

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F_PT1_ADAPT_FWD | - | high | unsigned long | - | - | 100000.0 | 1.0 | 0.0 | 0.0 | 1.0 | Filterfaktor dPhi/Phi für das Vorwärtsfilter der Kennlinienadaption |
| F_PT1_ADAPT_RWD | - | high | unsigned long | - | - | 100000.0 | 1.0 | 0.0 | 0.0 | 1.0 | Filterfaktor dPhi/Phi für das Rückwärtsfilter der Kennlinienadaption |
| F_PT1_MESSWERTERFASSUNG | - | high | unsigned long | - | - | 100000.0 | 1.0 | 0.0 | 0.0 | 1.0 | Filterfaktor für die Messwerterfassung der Kennlinienadaption |
| TAB_PHI_TORSION_ADAPT_RAD_01 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_02 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_03 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_04 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_05 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_06 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_07 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_08 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_09 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_10 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_11 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_12 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_13 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_14 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_15 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_16 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_17 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_18 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_19 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_20 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_21 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_22 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_23 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_24 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_25 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_26 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_27 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_28 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_29 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_30 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_31 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_32 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_33 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_34 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_PHI_TORSION_ADAPT_RAD_35 | rad | high | int | - | - | 1000.0 | 1.0 | 0.0 | -30.0 | 30.0 | Stützstelle der x-Achse der adaptierten Aktuatorkennlinie (Torsionswinkel) |
| TAB_M_AKTUATOR_ADAPT_NM_01 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_02 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_03 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_04 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_05 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_06 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_07 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_08 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_09 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_10 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_11 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_12 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_13 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_14 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_15 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_16 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_17 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_18 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_19 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_20 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_21 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_22 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_23 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_24 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_25 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_26 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_27 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_28 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_29 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_30 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_31 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_32 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_33 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_34 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |
| TAB_M_AKTUATOR_ADAPT_NM_35 | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | -5000.0 | 5000.0 | Stützstelle der y-Achse der adaptierten Aktuatorkennlinie (Drehmoment) |

### ARG_0X4191

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BDM_PARAMETERS | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | Betriebsdatenmonitor Parameter |

### ARG_0XD69E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBE_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_EKE_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_STABI_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_MOTOR_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_INT_MOMENTENSENSOR_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |

### ARG_0XD6A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENDTEST | 0-n | high | unsigned char | - | TAB_ENDTEST | - | - | - | - | - | ENDTEST Schritte |

### ARG_0XD6A1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_ROTORLAGESENSOR | ° | high | unsigned int | - | - | 65536.0 | 360.0 | 0.0 | - | - | Offset Rotorlagesensor |

### ARG_0XD6A2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET_TEMPERATURSENSOREN_LOGIKBOARD | ° | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | OFFSET_TEMPERATURSENSOREN_LOGIKBOARD |
| OFFSET_TEMPERATURSENSOREN_POWERBOARD | ° | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | OFFSET_TEMPERATURSENSOREN_powerBOARD |
| OFFSET_TEMPERATURSENSOREN_MOTOR | ° | high | unsigned char | - | - | 1.0 | 1.0 | 40.0 | -40.0 | 215.0 | OFFSET_TEMPERATURSENSOREN_MOTOR |

### ARG_0XD6A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | Nm | high | int | - | - | 26.0 | 1.0 | 0.0 | -1214.0 | 1214.0 | Offset |
| STEIGUNG | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Steigung |

### ARG_0XDB20

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RGL_VERST_DZ_EMOT_P_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuator Regler P Verstärkung |
| STAT_RGL_VERST_DZ_EMOT_I_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuator Regler I Verstärkung |
| STAT_RGL_LIM_DZ_EMOT_I_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuator Regler I Grenze |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022500 | Energiesparmode aktiv | 0 |
| 0x022508 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022509 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02250A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02250B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02250C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02250D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x022523 | Flash Memory Fehler (Sammelfehler) | 0 |
| 0x022526 | Hardwarefehler (Sammelfehler) | 0 |
| 0x02FF25 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x483400 | E-Motor Sammelfehler | 0 |
| 0x483403 | Momentensensor - Überlast | 1 |
| 0x483404 | Momentensensor - Offset-Fehler | 1 |
| 0x483405 | Aktuator Falschverbau | 1 |
| 0x483408 | Momentensensor - Kommunikationsfehler | 0 |
| 0x483409 | Momentensensor - temporärer Fehler | 0 |
| 0x48340A | Momentensensor - permanenter Fehler | 0 |
| 0x48340E | Aktuator Bruch Stabilisatoren | 0 |
| 0x483410 | Aktuator Stabilisatoren blockiert | 0 |
| 0x483413 | Spannungsversorgung - Lokale Unterspannung | 0 |
| 0x483415 | Spannungsversorgung - Globale Unterspannung extern | 1 |
| 0x483416 | Spannungsversorgung - Globale Überspannung extern | 1 |
| 0x483417 | Spannungsversorgung - Lokale Überspannung | 0 |
| 0x48341A | Steuergerät intern - Sammelfehler | 0 |
| 0x48342D | Steuergerät intern - Sammelfehler SW | 0 |
| 0x48342E | Steuergerät intern - Sammelfehler HW | 0 |
| 0x48342F | Spannungsversorgung – Degradation Unter oder Überspannung extern | 1 |
| 0x48347A | Steuergerät intern - Übertemperatur | 0 |
| 0x48347C | E-Motor Übertemperatur | 0 |
| 0xD2441F | Flexray:  Physikalischer Busfehler | 0 |
| 0xD24420 | FLEXRAY Controller Error | 0 |
| 0xD24487 | FLEXRAY StartUpFailed | 0 |
| 0xD24BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD2546C | Botschaftsfehler (Steuerung ARS, ID: CTR_ARS) Checksumme | 1 |
| 0xD254A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) - Timeout | 1 |
| 0xD254B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD254B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD254BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD254BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD254F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD254FE | Botschaftsfehler (Steuerung Obergrenze ARS, ID: CTR_UPLIM_ARS) Checksumme | 1 |
| 0xD254FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 |
| 0xD25562 | Botschaftsfehler (Steuerung ARS, ID: CTR_ARS) Alive | 1 |
| 0xD25564 | Botschaftsfehler (Steuerung Obergrenze ARS, ID: CTR_UPLIM_ARS) Alive | 1 |
| 0xD25565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 |
| 0xD25601 | Botschaftsfehler (Steuerung ARS, ID: CTR_ARS) Timeout | 1 |
| 0xD2560B | Botschaftsfehler (Steuerung Obergrenze ARS, ID: CTR_UPLIM_ARS) Timeout | 1 |
| 0xD2560C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 |
| 0xD2565B | Signalfehler (Steuerung ARS, ID: CTR_ARS) Ungültig | 1 |
| 0xD2565D | Signalfehler (Steuerung Obergrenze ARS, ID: CTR_UPLIM_ARS) Ungültig | 1 |
| 0xD2565E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 |
| 0xD25966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 |
| 0xD259CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 |
| 0xD259DF | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD25A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 |
| 0xD25A80 | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Checksumme | 1 |
| 0xD25AE9 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | signed long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x400E | EMOTOR_TEMP_ABSCHIRMUNG | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5000 | Batteriestrom | A | High | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x5001 | Stromgrenze Last | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5002 | Stromgrenze Reku | A | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5003 | Aktuatormoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | E-Motor Sollmoment | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x5005 | E-Motor Istmoment | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x5006 | E-Motor Drehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5007 | E-Motor Rotorwinkel | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5008 | E-Motor Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5009 | E-Motor Magnettemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500A | Temperatur Powerboard | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500B | Temperatur Logikboard | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500C | Betriebsstunden | h | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x500D | U_DC-Link | V | High | unsigned int | - | 1.0 | 1640.0 | 0.0 |
| 0x500E | Qualifier Eingang Motor-Control | HEX | High | unsigned char | - | - | - | - |
| 0x500F | Qualifier Ausgang Motor-Control | HEX | High | unsigned int | - | - | - | - |
| 0x5010 | SysState_SubStates | HEX | High | unsigned long | - | - | - | - |
| 0x5011 | SysState_SubStates_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5017 | SysState | HEX | High | unsigned int | - | - | - | - |
| 0x5018 | TORQ_ERR_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x030C60 | VDMEARSAR - Aktuatorregelung Nullpositionsregelung durchgeführt | 0 |
| 0x483401 | E-Motorfehler - Temperatursensor Außerhalb des gültigen Bereichs | 0 |
| 0x483402 | E-Motorfehler - Detail | 0 |
| 0x483406 | Rotorlagesensorfehler | 0 |
| 0x48340B | Rotorlagesensor - Kommunikation | 0 |
| 0x48340C | Rotorlagesensor - Wertebereich Signal | 0 |
| 0x48340D | Rotorlagesensor - Interner Sensorfehler | 0 |
| 0x48340F | Momentensensor - Interner Fehler - Versorgungsspannung ECU-seitig | 0 |
| 0x483411 | Momentensensor - Interner Fehler - Leitungsbruch | 0 |
| 0x483419 | Steuergerät intern - Endstufentreiber | 0 |
| 0x48341B | Steuergerät intern - Mikrocontroller | 0 |
| 0x48341C | Steuergerät intern - Spannungsversorgung | 0 |
| 0x48341D | Steuergerät intern - Systembasischip | 0 |
| 0x48341E | Steuergerät intern - Temperaturfehler | 0 |
| 0x48341F | Steuergerät intern - Endstufentreiber - GDU Fehler Kurzschluss | 0 |
| 0x483420 | Steuergerät intern - Endstufentreiber - GDU Fehler Unterspannung | 0 |
| 0x483421 | Steuergerät intern - Endstufentreiber - GDU Fehler Temperatur | 0 |
| 0x483422 | Steuergerät intern - Temperaturfehler - Powerboard - Temperatursensor außerhalb des gültigen Bereichs | 0 |
| 0x483423 | Steuergerät intern - Temperaturfehler - Logiktemperatursensor außerhalb des gültigen Bereichs | 0 |
| 0x483424 | Steuergerät intern - Systembasischip - Watchdog | 0 |
| 0x483425 | Steuergerät intern - Systembasischip - F-Mon | 0 |
| 0x483426 | Steuergerät intern - Spannungsversorgung - Interne Spannungsversorgung | 0 |
| 0x483427 | Steuergerät intern - Mikrocontroller - RAM/ROM | 0 |
| 0x48347B | Steuergerät intern - OS | 0 |
| 0x48347D | Momentensensor Kommunikationsfehler | 0 |
| 0x48347E | Momentensensor temporärer Fehler | 0 |
| 0x48347F | Momentensensor Versorgungsspannung | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C2 | URSACHE_EARSAR | 0-n | High | 0xFF | TAB_URSACHE_EARSAR | - | - | - |
| 0x400E | EMOTOR_TEMP_ABSCHIRMUNG | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5000 | Batteriestrom | A | High | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x5001 | Stromgrenze Last | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5002 | Stromgrenze Reku | A | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5003 | Aktuatormoment | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | E-Motor Sollmoment | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x5005 | E-Motor Istmoment | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x5006 | E-Motor Drehzahl | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5007 | E-Motor Rotorwinkel | ° | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5008 | E-Motor Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5009 | E-Motor Magnettemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500A | Temperatur Powerboard | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500B | Temperatur Logikboard | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x500C | Betriebsstunden | h | High | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x500D | U_DC-Link | V | High | unsigned int | - | 1.0 | 1640.0 | 0.0 |
| 0x500E | Qualifier Eingang Motor-Control | HEX | High | unsigned char | - | - | - | - |
| 0x500F | Qualifier Ausgang Motor-Control | HEX | High | unsigned int | - | - | - | - |
| 0x5012 | Motor_Error_Data | Text | High | 36 | - | 1.0 | 1.0 | 0.0 |
| 0x5013 | GDU_Data | Text | High | 17 | - | 1.0 | 1.0 | 0.0 |
| 0x5014 | OS_Data | Text | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0x5015 | Rotor_Data | Text | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0x5016 | Data | Text | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0x5018 | TORQ_ERR_STATUS | HEX | High | unsigned long | - | - | - | - |
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

### RES_0X2502

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4008

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TORQUE_MISUSE_1_WERT | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | Drehmoment-Belastungsgrenze 1 in Nm |
| STAT_RES_WERT | - | high | int | - | - | 1.0 | 1.0 | 0.0 | reserviert |

### RES_0X4009

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAX_ABS_MEAS_TORQ_WERT | Nm | high | int | - | - | 1.0 | 1.0 | 0.0 | maximaler gemessener Wert des Drehmomentsensors |
| STAT_RES_WERT | HEX | high | unsigned int | - | - | - | - | - | reserved |

### RES_0X4016

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIDERSTAND_PHASE_1_WERT | mOhm | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | R Phase 1 |
| STAT_WIDERSTAND_PHASE_2_WERT | mOhm | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | R Phase 2 |
| STAT_WIDERSTAND_PHASE_3_WERT | mOhm | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | R Phase 3 |
| STAT_FLUSS_WERT | Wb | high | unsigned int | - | - | 1.0 | 6553600.0 | 0.0 | Psi |
| STAT_INDUKTIVITAET_D_WERT | H | high | unsigned int | - | - | 1.0 | 6.5536E7 | 0.0 | Ld |
| STAT_INDUKTIVITAET_Q_WERT | H | high | unsigned int | - | - | 1.0 | 6.5536E7 | 0.0 | Lq |

### RES_0X4190

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASK_1MS25_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der 1.25ms Task |
| STAT_TASK_ICC_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der ICC Task |
| STAT_TASK_10MS_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der 10ms Task |
| STAT_TASK_FR_RECEIVE_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der FlexRay Receive Task |
| STAT_TASK_FR_SEND_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der FlexRay Send Task |
| STAT_TASK_TP_DIAG_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der TP/Diag Task |
| STAT_TASK_NVM_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der NvM Task |
| STAT_TASK_BSW_5MS_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der BSW 5ms Task |
| STAT_TASK_BSW_10MS_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der BSW 10ms Task |
| STAT_TASK_BSW_20MS_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der BSW 20ms Task |
| STAT_TASK_BAC_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der BAC Task |
| STAT_TASK_BAC_EVENT_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der BAC Event Task |
| STAT_TASK_INIT_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Init Task |
| STAT_TASK_IDLE_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Idle Task |
| STAT_TASK_FRIF_EXEC_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der FrIf Exec Task |
| STAT_TASK_RES1_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Reserve 1 Task |
| STAT_TASK_RES2_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Reserve 2 Task |
| STAT_TASK_RES3_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Reserve 3 Task |
| STAT_TASK_RES4_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Reserve 4 Task |
| STAT_TASK_RES5_WERT | µs | high | unsigned long | - | - | 1.0 | 120.0 | 0.0 | Maximallaufzeit der Reserve 5 Task |

### RES_0X4191

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BDM_PARAMETERS_DATA | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | Betriebsdatenmonitor Parameter |

### RES_0X4192

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BDM_DATA_OPTIME_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Betriebszeit |
| STAT_BDM_DATA_TORQ_RAINFLOW_1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_4_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_5_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_6_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_7_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_8_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_9_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_10_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_11_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_RAINFLOW_12_DATA | DATA | high | data[166] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor  Drehmoment Rainflow Daten |
| STAT_BDM_DATA_TORQ_DURATIONS_DATA | DATA | high | data[116] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Drehmoment Verweildauern |
| STAT_BDM_DATA_TORQ_EXTREMUM_DATA | DATA | high | data[68] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Drehmoment Extremwerte |
| STAT_BDM_DATA_NMOT_DURATIONS_DATA | DATA | high | data[136] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Drehzahl Motor Verweildauern |
| STAT_BDM_DATA_NMOT_EXTREMUM_DATA | DATA | high | data[136] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Drehzahl Motor Extremwerte |
| STAT_BDM_DATA_IBAT_DURATIONS_DATA | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Batteriestrom Verweildauern |
| STAT_BDM_DATA_IBAT_EXTREMUM_DATA | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Batteriestrom Extremwerte |
| STAT_BDM_DATA_UBAT_DURATIONS_DATA | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Batteriespannung Verweildauern |
| STAT_BDM_DATA_UBAT_EXTREMUM_DATA | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Batteriespannung Extremwerte |
| STAT_BDM_DATA_TEMP_MOT_DURATIONS_DATA | DATA | high | data[52] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Motortemperature Verweildauern |
| STAT_BDM_DATA_TEMP_ECU_DURATIONS_DATA | DATA | high | data[44] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor SG Temperatur Verweildauern |
| STAT_BDM_DATA_TEMP_MAGN_DURATIONS_DATA | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Magnettemperatur Verweildauern |
| STAT_BDM_DATA_QU_FN_DURATIONS_DATA | DATA | high | data[28] | - | - | 1.0 | 1.0 | 0.0 | Ergebnisdaten Betriebsdatenmonitor Funktionsqualifier Verweildauern |

### RES_0XD499

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL30_WERT | - | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung Klemme 30 |
| STAT_KL15_WERT | - | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung Klemme 15 |

### RES_0XD699

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_AKTUATOR_IST_WERT | Nm | high | int | - | - | 1.0 | 26.0 | 0.0 | Ist-Moment-Aktuator |
| STAT_DREHZAHL_MOTOR_IST_WERT | 1/min | high | int | - | - | 1.0 | 3.0 | 0.0 | Ist-Drehzahl-Motor |
| STAT_WINKEL_MOTOR_IST_WERT | ° | high | int | - | - | 1.0 | 1.0 | 0.0 | Ist-Winkel-Motor |

### RES_0XD69A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_MOTOR_MOMENT_WERT | Nm | high | int | - | - | 1.0 | 3276.0 | 0.0 | Soll-Moment Motor |
| STAT_IST_MOTOR_MOMENT_WERT | Nm | high | int | - | - | 1.0 | 3276.0 | 0.0 | Ist-Moment Motor |

### RES_0XD69B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHASENSTROM_RMS_WERT | A | high | int | - | - | 1.0 | 150.0 | 0.0 | eff. Phasenstrom |
| STAT_STROM_D_ACHSE_WERT | A | high | int | - | - | 1.0 | 150.0 | 0.0 | Strom d-Achse |
| STAT_STROM_Q_ACHSE_WERT | A | high | int | - | - | 1.0 | 150.0 | 0.0 | Strom q-Achse |

### RES_0XD69C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_D_ACHSE_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung d-Achse |
| STAT_SPANNUNG_Q_ACHSE_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung q-Achse |
| STAT_U1_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U1 |
| STAT_U2_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U2 |
| STAT_U3_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U3 |
| STAT_U4_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U4 |
| STAT_U5_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U5 |
| STAT_U6_WERT | V | high | unsigned int | - | - | 1.0 | 1638.0 | 0.0 | Spannung U6 |

### RES_0XD69D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_E_MOTOR_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur E-Motor |
| STAT_TEMPERATUR_MOTORMAGNETE_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Motormagnete |
| STAT_TEMPERATUR_POWERBOARD_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Power-Board |
| STAT_TEMPERATUR_LOGIKBOARD_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur Logik-Board |

### RES_0XD69E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBE_WERT | HEX | high | unsigned long | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_EKE_WERT | HEX | high | unsigned long | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_STABI_WERT | HEX | high | unsigned long | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_MOTOR_WERT | HEX | high | unsigned long | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |
| STAT_INT_MOMEMTENSENSOR_WERT | HEX | high | unsigned long | - | - | - | - | - | Byte 1: ID, Byte 2: Hauptversion, Byte 3: Unterversion, Byte 4: Patchversion |

### RES_0XD6A1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_ROTORLAGESENSOR_WERT | ° | high | unsigned int | - | - | 360.0 | 65536.0 | 0.0 | Offset Rotorlagesensor |

### RES_0XD6A4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_WERT | Nm | high | int | - | - | 1.0 | 26.0 | 0.0 | Offset |
| STAT_STEIGUNG_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Steigung |

### RES_0XD6BB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STRG_FKT_XA_ARS | 0-n | high | unsigned char | - | TAB_EARSAR_STRG_FKT_XA_ARS | - | - | - | Ansteuerungsstatus vom VDP an den jeweiligen Aktor (BN-Signal: CTR_FN_FTAX_ARS oder CTR_FN_BAX_ARS).  XA: Vorderachse oder Hinterachse, je nach Steuergerät. |
| STAT_SOLLMOM_STABI_ARS_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Sollmoment (Stabilisatormoment bis +/-900 Nm), das vom VDP an den Aktorregler geschickt wird. Die Umsetzung des Aktormomentes wird erst über das Ansteuerstatus aktiviert (BN-Signal: TAR_TORQ_STAB_FTAX_ARS oder TAR_TORQ_STAB_BAX_ARS). |
| STAT_WNKL_VERDRHNG_EXTN_XA_ARS_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Verdrehung des Stabilisators von aussen über die Stabiaugen, auf Motorebene umgerechnet (~ * Übersetzung 158). (BN-Signal: ANG_TN_EXTN_FTAX_ARS oder ANG_TN_EXTN_BAX_ARS). XA: Vorderachse oder Hinterachse, je nach Steuergerät |
| STAT_QU_WNKL_VERDRHNG_EXTN_XA_ARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus vom Flexraysignal der Externen Verdrehung des Aktors. (2: IO, 6: NIO, 255 Com-Fehler) |
| STAT_ST_FN_XA_ARS | 0-n | high | unsigned char | - | TAB_EARSAR_ST_FN_XAX_ARS | - | - | - | Status des Aktorreglers im emARS-Steuergerät. Der Status ist abhängig von Eingangssignalen des Aktorreglers. Dies sind Soll- und Steuerungssignale des VDPs und Sensorsignale des Aktors. (BN-Signal: ST_FN_FTAX_ARS oder ST_FN_BAX_ARS). XA: Vorderachse oder Hinterachse, je nach Steuergerät. |
| STAT_KONF_ENA_MOT_ARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktivierungsbefehl vom Aktorregler an den Motorregler. Bei Aktivbedingung wird das Sollmoment für den Elektromotor vom Motorregler angesteuert. 0: Deaktiviert, 1: Aktiviert |
| STAT_SOLL_MOM_MOT_ARS_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Sollmoment vom Aktorregler (Stabilisatormoment bis 900 Nm) an den Motorregler (Elektromotormoment bis +/-7,5 Nm). Der Momentenwert wird vom Motorregler am Elektromotor nur eingeregelt, wenn das Aktivierbit aktiv ist. |
| STAT_EARSARSBS_B_NPR_AKTIV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktivierungsstatus der Nullpositionsregelung am Aktor. Die Nullposition wird entweder vom VDP angefordert, oder ein Signal- oder Sensorfehler führt selbständig im Aktorregler zu der Ansteuerung. |
| STAT_EARSARSBS_NULLPOSITION_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gespeicherte Nullposition (Motorposition mit Multiturnzählung) in diesem Klemmenzyklus, bei der der Aktor kein Moment bewirkt, soweit das Fahrzeug auf einer horizontalen Ebene steht. Dieser Winkel wird bei Aktivierung der Nullpositionsregelung (NPR) eingeregelt. Die Nullposition wird zunächst als die Position beim Aufstarten definiert und bei Geradeausfahrt nachgelernt. |
| STAT_IST_WNKL_ABS_EMOT_ARS_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktueller Motorwinkel mit Aufsummierung bei Mehrfachumdrehung. Beim Aufstarten wird der Winkel auf den Anfangswert (0 bis 1/2 Umdrehung) festgelegt. Von dieser Position aus wird der Winkel positiv wie negativ bei einer Verdrehung aufsummiert. |
| STAT_QU_IST_WNKL_ABS_EMOT_ARS_WERT | Nm | high | char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus vom Sensorsignal des Motorwinkels. (2: IO, 6: NIO, 255 Com-Fehler) |
| STAT_IST_DREHZHL_EMOT_ARS_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Drehzahl des Elektromotors direkt aus dem Hardwaresensor ermittelt. Sensor kann bis zu +/- 10.000 U/min messen. (FR:  |
| STAT_QU_IST_DREHZHL_EMOT_ARS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifierstatus vom Sensorsignal der Motordrehzahl. (2: IO, 6: NIO, 255 Com-Fehler) |
| STAT_ISTMOM_STABI_ARS_WERT | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelles Stabilisatormoment (Messbereich +/-1200 Nm), das am entsprechenden Aktor anliegt (BN-Signal: AVL_TORQ_STAB_FTAX_ARS oder AVL_TORQ_STAB_BAX_ARS) |
| STAT_QU_ISTMOM_STABI_ARS | 0-n | high | unsigned char | - | TAB_EARSAR_QU_AVL_TORQ_STAB_XAX_ARS | - | - | - | Qualifierstatus vom Sensorsignal des Stabilisatormomentes. |

### RES_0XD8F0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKEL_1_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_1_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_2_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_2_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_3_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_3_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_4_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_4_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_5_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_5_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_6_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_6_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_7_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_7_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_8_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_8_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_9_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_9_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_10_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_10_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_11_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_11_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_12_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_12_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_13_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_13_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_14_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_14_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_15_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_15_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_16_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_16_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_17_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_17_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_18_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_18_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_19_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_19_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_20_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_20_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_21_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_21_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_22_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_22_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_23_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_23_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_24_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_24_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_25_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_25_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_26_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_26_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_27_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_27_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_28_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_28_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_29_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_29_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_30_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_30_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_31_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_31_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_32_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_32_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_33_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_33_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_34_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_34_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |
| STAT_WINKEL_35_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Winkel |
| STAT_DREHMOMENT_35_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drehmoment |

### RES_0XDB20

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RGL_VERST_DZ_EMOT_P_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuator Regler P Verstärkung |
| STAT_RGL_VERST_DZ_EMOT_I_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuator Regler I Verstärkung |
| STAT_RGL_LIM_DZ_EMOT_I_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuator Regler I Grenze |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502 |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504 |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _MISUSE_TORQUE | 0x4008 | - | Aktordrehmoment-Misuse | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4008 | RES_0x4008 |
| _MAX_ABS_MEASURED_TORQUE | 0x4009 | - | Maximales absolutes gemessenes Aktordrehmoment | - | - | - | - | - | - | - | - | - | 22;2C | - | RES_0x4009 |
| _SPANNUNGSVEKTOR_ROTORAUSRICHTUNG | 0x400B | - | Spannungsvektor zur Rotorausrichtung (Kalibrieren)  PWM duty cycle für U,V,W in [%] Zeitdauer in [ms] | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B | - |
| _DREHWINKELSIGNAL_FLEXRAY | 0x400C | - | temporäres Ersetzen von MOM_STAB_ESTI_FTAX_ARS mit elektr. Drehwinlkelsignal auf dem FlexRay Bus | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C | - |
| _KALIBRIEREN_SENSOR | 0x400D | - | Vorgabe von Drehmomentwerten für Kalibrieren des Drehmomentsensors in der SAG Fertigung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D | - |
| _MOTOR_DATEN | 0x4016 | - | Motorabgleichdaten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4016 | RES_0x4016 |
| _MOTORWINKEL_ELEKTR | 0x4017 | STAT_WINKEL_ELEKTR_WERT | Motorwinkel Elektrisch | ° | - | high | unsigned int | - | 360.0 | 65536.0 | 0.0 | - | 22 | - | - |
| _VARIANTEN_BRUCHERKENNUNG | 0x4101 | - | Variantenabhängige Bedatung zur Brucherkennung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4101 | - |
| _RUNTIME | 0x4190 | - | Maximalwerte Taskzeiten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4190 |
| _BDM_PARAM | 0x4191 | - | Betriebsdatenmonitor Parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4191 | RES_0x4191 |
| _BDM_DATA | 0x4192 | - | Betriebsdatenmonitor Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4192 |
| RESET_KENNLINIE_MECHANIK_DIAGNOSE | 0xA195 | - | Reset der Kennlinie der Aktuator Diagnose | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_ERKENNUNG_MECHANIK_DIAGNOSE | 0xA196 | - | Reset der Fehlererkennung der Mechanikdiagnose nach Reparatur. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EXTERNE_SPANNUNGEN | 0xD499 | - | Klemme 30 + Klemme 15 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD499 |
| SENSOREN | 0xD699 | - | Status Sensoren: Ist-Moment-Aktuator; Ist-Drehzahl-Motor; Ist-Winkel-Motor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD699 |
| MOTORMOMENT | 0xD69A | - | Soll-Moment Motor; Ist-Moment-Motor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD69A |
| PHASENSTROM | 0xD69B | - | eff. Phasenstrom; Strom d-Achse; Strom q-Achse | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD69B |
| INTERNE_SPANNUNGEN | 0xD69C | - | Spannung d-Achse; Spannung q-Achse; U1; U2; U3; U4; U5; U6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD69C |
| TEMPERATUREN_SG | 0xD69D | - | Temperatur E-Motor; Temperatur Motormagnete; Temperatur Power-Board; Temperatur Logik-Board | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD69D |
| VERSION_MECHANIK | 0xD69E | - | Auslesen und Setzen der Versionen der Unterkomponenten: Getriebe, EKE, Stabi, Motor, int. Momentensensor | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD69E | RES_0xD69E |
| TRACE_NR_ECU | 0xD69F | STAT_TRACE_NR_WERT | ECU Trace-Nummer | - | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ENDTEST | 0xD6A0 | - | io/nio | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6A0 | - |
| ABGLEICH_ROTORLAGESENSOR | 0xD6A1 | - | Offset | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD6A1 | RES_0xD6A1 |
| ABGLEICH_TEMPERATURSENSOREN | 0xD6A2 | - | 3x Offset (Motor, Logic, Power) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6A2 | - |
| ABGLEICH_MOMENTENSENSOR | 0xD6A4 | - | Offset + Steigung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD6A4 | RES_0xD6A4 |
| ARS_AKTUATORSIGNALE | 0xD6BB | - | Auslesen von Signalen des Aktuators zu Analysezwecken. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6BB |
| LESEN_KENNLINIE | 0xD8F0 | - | Aktuelle Kennlinie des Aktuators inkl. der Adaption. Wird für die Aktuatordiagnose (Brucherkennung benötigt). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8F0 |
| EOL_PARAMETER | 0xDB20 | - | EOL Parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB20 | RES_0xDB20 |
| DREHWINKELSIGNAL | 0xDB21 | STAT_DREHWINKELSIGNAL_AKTUATOR_IST_WERT | Ist-Drehwinkel Aktuator | ° | - | high | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EXZENTR_ROTORLAGESENSOR | 0xF001 | - | Abgleich Exzentrität Rotorlagesensor | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| DELETE_RUNTIME | 0xF190 | - | Maximalwerte der Laufzeitmessung löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DELETE_BDM_DATA | 0xF192 | - | Daten des Betriebsdatenmonitors löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |

### TAB_EARSAR_QU_AVL_TORQ_STAB_XAX_ARS

| WERT | TEXT |
| --- | --- |
| 1 | Wert gültig, höchste Qualität |
| 2 | Wert gültig, einfache Qualität |
| 3 | Wert eingeschränkt gültig, dauerhaft |
| 4 | Fehler temporär |
| 6 | Fehler |
| 9 | Wert gültig, mittlere Signalqualität |
| 11 | Wert eingeschränkt gültig, temporär |
| 14 | Wert nicht verfügbar |
| 0xFF | Signal unbefüllt |

### TAB_EARSAR_STRG_FKT_XA_ARS

| WERT | TEXT |
| --- | --- |
| 16 | keine Regelung |
| 39 | Sollwert umsetzen - Vollfunktion - Normalfunktion |
| 35 | Sollwert umsetzen- Vollfunktion - nur Drehzahlregelung |
| 40 | Sollwert umsetzen- Vollfunktion - Regelung Ausrampen |
| 47 | Sollwert umsetzen- Vollfunktion - Normalfunktion Fail-Safe-Nullposition initialisieren |
| 151 | Sollwert umsetzen-Degradation - Normalfunktion |
| 147 | Sollwert umsetzen- Degradation - nur Drehzahlregelung |
| 152 | Sollwert umsetzen- Degradation - Regelung Ausrampen |
| 159 | Sollwert umsetzen- Degradation - Normalfunktion Fail-Safe-Nullposition initialisieren |
| 161 | Sondermodus - Motormomentenebene |
| 162 | Sondermodus - Drehzahlebene |
| 163 | Sondermodus - Drehzahlebene mit Motormomentenvorgabe |
| 164 | Sondermodus - Stabilisatormomentenebene |
| 165 | Sondermodus - Stabilisatormomentenebene mit Motormomentenvorgabe |
| 166 | Sondermodus - Stabilisatormomentenebene mit Motordrehzahlvorgabe |
| 167 | Sondermodus - Stabilisatormomentenebene mit Drehzahl- und Motormomentenvorgabe |
| 224 | Sollwert_ist_nicht_verfuegbar |
| 253 | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 254 | Funktion_meldet_Fehler |
| 0xFF | Signal_unbefuellt |

### TAB_EARSAR_ST_FN_XAX_ARS

| WERT | TEXT |
| --- | --- |
| 16 | Regelung bereit / alles IO, Regelung nicht angefordert |
| 32 | Regelung ohne Vorsteuerung ? bereit / Signale für Vorsteuerung fehlerhaft, sonst IO, passiv |
| 48 | Nullpositionsregelung - bereit / nur noch NPR möglich, aber nicht angefordert |
| 96 | Fehler / Keine Regelung möglich |
| 144 | Regelung aktiv / alles IO, Regelung angefordert |
| 160 | Regelung ohne Vorsteuerung - aktiv / Signale für Vorsteuerung fehlerhaft, sonst IO, aktiv |
| 176 | Nullpositionsregelung - aktiv / Reserviert |
| 177 | Nullpositionsregelung - aktiv - Fehler Aktor / NPR eigenst¿ndig wegen Fehler |
| 178 | Nullpositionsregelung - aktiv - Vorgabe VDP / NPR wegen Anforderung |
| 179 | Nullpositionsregelung - aktiv - Fehler und Vorgabe / NPR eigenst¿ndig wegen Fehler und Anforderung |
| 0xFF | Signal_unbefuellt / Sendefunktion nicht in Betrieb |

### TAB_ENDTEST

| WERT | TEXT |
| --- | --- |
| 0 | Schritt 1 |
| 1 | Schritt 2 |
| 2 | Schritt 3 |
| 3 | Schritt 4 |
| 4 | Schritt 5 |
| 5 | Schritt 6 |

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

### TAB_URSACHE_EARSAR

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Ursache 1 |
| 0x02 | Ursache 2 |
| 0x03 | Ursache 3 |
| 0x04 | Ursache 4 |
| 0x05 | Ursache 5 |
| 0x06 | Ursache 6 |
| 0x07 | Ursache 7 |
| 0xFF | Signal ungültig |
