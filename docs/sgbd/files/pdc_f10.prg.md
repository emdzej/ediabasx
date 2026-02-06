# pdc_f10.prg

## General

|  |  |
| --- | --- |
| File | pdc_f10.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 32 |
| Origin | BMW EI-612 Ramon_Lopez |
| Revision | 2.001 |
| Author | ESG_für_Valeo_Schalter_und_Sensoren_GmbH EI-612 Werner_Götte, H |
| ECU Comment | PDC - Park Distance Control |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Park Distance Control |  |  |
| ORIGIN | string | BMW EI-612 Ramon_Lopez |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | ESG_für_Valeo_Schalter_und_Sensoren_GmbH EI-612 Werner_Götte, H |  |  |
| COMMENT | string | PDC - Park Distance Control |  |  |
| PACKAGE | string | 1.34 |  |  |
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

_No arguments._

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

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)]

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### PROG_ZAEHLER_LESEN

Programmierzaehler lesen UDS  : $22   ReadDataByIdentifier UDS  : $2502 ProgrammingCounter Modus: Default

_No arguments._

### PROG_MAX_LESEN

Anzahl der maximal möglichen Programmiervorgänge auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2503 ProgrammingCounter Modus: Default

_No arguments._

### STATUS_SIGNALWEGE_SENSOREN

Gibt die Signalwege der Ultraschallsensoren der PDC aus. UDS: $22   ReadDataByIdentifier $D67C Direkte und indirekte Signalwege Modus  : Default

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
| 0x000001 | Reinshagen => Delphi |
| 0x000002 | Kostal |
| 0x000003 | Hella |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako |
| 0x000008 | Bosch |
| 0x000009 | Loewe => Lear |
| 0x000010 | VDO |
| 0x000011 | Valeo |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine |
| 0x000018 | Continental Teves |
| 0x000019 | Elektromatik Suedafrika |
| 0x000020 | Becker |
| 0x000021 | Preh |
| 0x000022 | Alps |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi PHI |
| 0x000028 | DODUCO => BERU |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer |
| 0x000033 | Jatco |
| 0x000034 | Fuba |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE |
| 0x000041 | Megamos |
| 0x000042 | TRW |
| 0x000043 | Wabco |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC (Hella Electronics Corporation) |
| 0x000046 | Gemel |
| 0x000047 | ZF |
| 0x000048 | GMPT |
| 0x000049 | Harman Kardon |
| 0x000050 | Remes |
| 0x000051 | ZF Lenksysteme |
| 0x000052 | Magneti Marelli |
| 0x000053 | Borg Instruments |
| 0x000054 | GETRAG |
| 0x000055 | BHTC (Behr Hella Thermocontrol) |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon |
| 0x000058 | Autoliv |
| 0x000059 | Haberl |
| 0x000060 | Magna Steyr |
| 0x000061 | Marquardt |
| 0x000062 | AB-Elektronik |
| 0x000063 | Siemens VDO Borg |
| 0x000064 | Hirschmann Electronics |
| 0x000065 | Hoerbiger Electronics |
| 0x000066 | Thyssen Krupp Automotive Mechatronics |
| 0x000067 | Gentex GmbH |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steering Europe |
| 0x000071 | NSI B.V |
| 0x000072 | AISIN AW CO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0x000077 | Audio Mobil |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | AKsys GmbH |
| 0x000086 | META System |
| 0x000087 | Hülsbeck & Fürst GmbH & Co KG |
| 0x000088 | Mann & Hummel Automotive GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.A. |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp. |
| 0x000094 | KÜSTER Automotive Control |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental Automotive |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls |
| 0x00009A | Takata- Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN-Driveline |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | PEIKER acustics GmbH |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
| 0x0000A5 | Funkwerk Dabendorf GmbH |
| 0x0000A6 | Lame |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Wanyu |
| 0x0000A9 | Thyssen Krupp Presta |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | SB LiMotive Germany GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
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
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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

### ARG_0X4030

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_EOL_DATA_ALL | DATA | high | data[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten in SG schreiben |

### ARG_0XD388

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSSIGNAL_PDC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PDC simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_TV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für TV simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_RV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für Rückfahrkamera simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_PMA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PMA simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_APDC | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Gibt an, wie das Aktivierungssignal für aktive PDC simuliert  werden soll:  0 = AUS 1 = EIN |

### ARG_0XD673

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Startet den Sensortest für die Ultraschallsensoren. 1 = Start |

### ARG_0XD676

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet das PDC-System an oder aus:  0 = AUS = PDC nicht aktiv,  1 = EIN = PDC aktiv |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x803271 | Akustische Abstandswarnung nicht möglich | 1 |
| 0xE20468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE2167C | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Timeout | 1 |
| 0xE21473 | Botschaftsfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) - Timeout | 1 |
| 0xE21428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xE21744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xE214AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xE214A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Timeout | 1 |
| 0xE214B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xE2158C | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xE2170F | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Alive | 1 |
| 0xE2167B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Timeout | 1 |
| 0xE2170C | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Alive | 1 |
| 0xE216B8 | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Checksumme | 1 |
| 0xE214A6 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Timeout | 1 |
| 0xE21754 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Alive | 1 |
| 0xE216F8 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Checksumme | 1 |
| 0xE21475 | Botschaftsfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) - Alive | 1 |
| 0xE2176A | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Alive | 1 |
| 0xE216C2 | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Checksumme | 1 |
| 0xE21686 | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Timeout | 1 |
| 0xE21496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Alive | 1 |
| 0xE21495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Checksumme | 1 |
| 0xE218E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Timeout | 1 |
| 0xE215A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xE21C1C | Botschaftsfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Timeout | 1 |
| 0xE214BC | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Alive | 1 |
| 0xE214B5 | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Checksumme | 1 |
| 0xE214B4 | Botschaftsfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Timeout | 1 |
| 0xE214CA | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Alive | 1 |
| 0xE214C7 | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Checksumme | 1 |
| 0xE214C6 | Botschaftsfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Timeout | 1 |
| 0xE214D3 | Botschaftsfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Timeout | 1 |
| 0xE214D9 | Botschaftsfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Timeout | 1 |
| 0xE21756 | Botschaftsfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) Alive | 1 |
| 0xE214E2 | Botschaftsfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Timeout | 1 |
| 0xE2175A | Botschaftsfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) Alive | 1 |
| 0x02640B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x026409 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02640A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x026408 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x02640C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF64 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xE20BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0x026400 | Energiesparmode aktiv | 0 |
| 0x803347 | PMA Funktion Abbruch wegen Kameraausfall | 1 |
| 0xE214A7 | Signalfehler  (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Ungültig | 1 |
| 0xE2142C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xE22C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xE219AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xE2144E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xE214B1 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xE214B0 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xE214BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xE21590 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xE2180D | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Undefiniert | 1 |
| 0xE21711 | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Ungültig | 1 |
| 0xE214A5 | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG) - Undefiniert | 1 |
| 0xE214A4 | Signalfehler (Anfrage Aktivierung Funktion Parken, ID: RQ_ACTVN_FN_PKG) - Ungültig | 1 |
| 0xE2180E | Signalfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Undefiniert | 1 |
| 0xE21712 | Signalfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Ungültig | 1 |
| 0xE2147C | Signalfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) - Qualifier | 1 |
| 0xE2147B | Signalfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) - Undefiniert | 1 |
| 0xE21477 | Signalfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) - Ungültig | 1 |
| 0xE2171C | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Ungültig | 1 |
| 0xE22508 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Qualifier | 1 |
| 0xE22C53 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Undefiniert | 1 |
| 0xE21996 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Ungültig | 1 |
| 0xE215A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 |
| 0xE215A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xE22C4A | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Undefiniert | 1 |
| 0xE22C49 | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Ungültig | 1 |
| 0xE214AE | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Undefiniert | 1 |
| 0xE214AD | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Ungültig | 1 |
| 0xE214C5 | Signalfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Qualifier | 1 |
| 0xE214C0 | Signalfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Undefiniert | 1 |
| 0xE214BD | Signalfehler (Status Qualifier Rear-View, ID: ST_QU_RV) - Ungültig | 1 |
| 0xE214D2 | Signalfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Qualifier | 1 |
| 0xE214CF | Signalfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Undefiniert | 1 |
| 0xE214CB | Signalfehler (Status Qualifier Top-View, ID: ST_QU_TVIEW) - Ungültig | 1 |
| 0xE214D4 | Signalfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Ungültig | 1 |
| 0xE214E1 | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Qualifier | 1 |
| 0xE214DB | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Undefiniert | 1 |
| 0xE214DA | Signalfehler (Wegstrecke Rad Hinterachse, ID: MILE_WHL_BAX) - Ungültig | 1 |
| 0xE214E6 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Qualifier | 1 |
| 0xE214E4 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Undefiniert | 1 |
| 0xE214E3 | Signalfehler (Wegstrecke Rad Vorderachse, ID: MILE_WHL_FTAX) - Ungültig | 1 |
| 0x80337F | Spannungsversorgung Lokale Überspannung | 0 |
| 0x803202 | Spannungsversorgung Ultraschallsensoren hinten: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803201 | Spannungsversorgung Ultraschallsensoren vorn: Kurzschluss zwischen Plus und Minus | 0 |
| 0x80337C | Spannungsversorgung Globale Unterspannung extern | 1 |
| 0x80337A | Spannungsversorgung Globale Unterspannung intern | 1 |
| 0x80337D | Spannungsversorgung Globale Überspannung extern | 1 |
| 0x80337B | Spannungsversorgung Globale Überspannung intern | 1 |
| 0x80337E | Spannungsversorgung Lokale Unterspannung | 0 |
| 0x803370 | Steuergerät intern - ADC | 0 |
| 0x803372 | Steuergerät intern - RAM | 0 |
| 0x803373 | Steuergerät intern - RAM-APP | 0 |
| 0x803371 | Steuergerät intern - ROM | 0 |
| 0x80320A | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803209 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80320D | Ultraschallsensor hinten Außen links: Sensor antwortet nicht | 0 |
| 0x803337 | Ultraschallsensor hinten Außen links: Sensor blind | 0 |
| 0x80320B | Ultraschallsensor hinten Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80320C | Ultraschallsensor hinten Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x80320E | Ultraschallsensor hinten Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80321C | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80321B | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80321F | Ultraschallsensor hinten Außen rechts: Sensor antwortet nicht | 0 |
| 0x80333A | Ultraschallsensor hinten Außen rechts: Sensor blind | 0 |
| 0x80321D | Ultraschallsensor hinten Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80321E | Ultraschallsensor hinten Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803220 | Ultraschallsensor hinten Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803210 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x803338 | Ultraschallsensor hinten Mitte links: Sensor blind | 0 |
| 0x803211 | Ultraschallsensor hinten Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803212 | Ultraschallsensor hinten Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803214 | Ultraschallsensor hinten Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803216 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x803339 | Ultraschallsensor hinten Mitte rechts: Sensor blind | 0 |
| 0x803217 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803218 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80321A | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80322E | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80322D | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803231 | Ultraschallsensor vorn Außen links: Sensor antwortet nicht | 0 |
| 0x80333D | Ultraschallsensor vorn Außen links: Sensor blind | 0 |
| 0x80322F | Ultraschallsensor vorn Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803230 | Ultraschallsensor vorn Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x803232 | Ultraschallsensor vorn Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803240 | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80323F | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803243 | Ultraschallsensor vorn Außen rechts: Sensor antwortet nicht | 0 |
| 0x803340 | Ultraschallsensor vorn Außen rechts: Sensor blind | 0 |
| 0x803241 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803242 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803244 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803234 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x80333E | Ultraschallsensor vorn Mitte links: Sensor blind | 0 |
| 0x803235 | Ultraschallsensor vorn Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803236 | Ultraschallsensor vorn Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803238 | Ultraschallsensor vorn Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80323A | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80333F | Ultraschallsensor vorn Mitte rechts: Sensor blind | 0 |
| 0x80323B | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80323C | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80323E | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803228 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803227 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80322B | Ultraschallsensor vorn Seite links: Sensor antwortet nicht | 0 |
| 0x80333C | Ultraschallsensor vorn Seite links: Sensor blind | 0 |
| 0x803229 | Ultraschallsensor vorn Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80322A | Ultraschallsensor vorn Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x80322C | Ultraschallsensor vorn Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803246 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803245 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803249 | Ultraschallsensor vorn Seite rechts: Sensor antwortet nicht | 0 |
| 0x803341 | Ultraschallsensor vorn Seite rechts: Sensor blind | 0 |
| 0x803247 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803248 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80324A | Ultraschallsensor vorn Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80325C | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80325B | Ultraschallsensor vorn Zentral, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80325F | Ultraschallsensor vorn Zentral: Sensor antwortet nicht | 0 |
| 0x803344 | Ultraschallsensor vorn Zentral: Sensor blind | 0 |
| 0x80325D | Ultraschallsensor vorn Zentral: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80325E | Ultraschallsensor vorn Zentral: Sensor defekt (Receivezweig) | 0 |
| 0x803260 | Ultraschallsensor vorn Zentral: Sensor defekt (Verify-Fehler) | 0 |
| 0x80332A | Ultraschallsensoren hinten alle: Andauernder Störschall | 0 |
| 0x80328B | Ultraschallsensoren hinten alle: Sporadischer Störschall | 0 |
| 0x803329 | Ultraschallsensoren vorn alle: Andauernder Störschall | 0 |
| 0x80328A | Ultraschallsensoren vorn alle: Sporadischer Störschall | 0 |
| 0x803282 | RVC nicht aktivierbar | 1 |
| 0x803281 | TVC nicht aktivierbar | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | STAT_AUSSENTEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | STAT_BETRIEBSSPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | STAT_FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4003 | STAT_RADLENKWINKEL | ° | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4004 | QUALIFIER_FUNKTION_PMA | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | STAT_INITIAL_DTC | Text | High | 3 | - | - | - | - |
| 0x4006 | STAT_INTERNER_STATUS | Text | High | 3 | - | - | - | - |
| 0x4007 | STAT_INTERNER_FEHLERCODE | Text | High | 3 | - | - | - | - |
| 0x4008 | STAT_FEHLERSPEICHER_BORDNETZ_SPANNUNG | HEX | High | unsigned char | - | - | - | - |

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
| 0x4823CE | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x4823CF | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x803180 | CANNM_E_INIT_FAILED | 0 |
| 0x803181 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x803280 | PDC nicht aktivierbar | 0 |
| 0x803283 | PMA nicht aktivierbar | 0 |
| 0x803284 | PMA Ausparken nicht aktivierbar | 0 |
| 0x803285 | aPDC nicht aktivierbar | 0 |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 |
| 0x803298 | PMA Ausparken aktiv ohne Aktivierung | 0 |
| 0x803299 | aPDC aktiv ohne Aktivierung | 0 |
| 0x80331D | WDG_E_MISS_TRIGGER | 0 |
| 0x80331E | SPI_SYNCH_TRANSMIT_FAILED | 0 |
| 0x80331F | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x803320 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x803321 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x803322 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x803323 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x803324 | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x803325 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x803326 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x803327 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x803332 | CANSM_E_SETTRANSCEIVERMODE_NETWORK_0 | 0 |
| 0x803333 | Dem_CANTRCV_30_TJA1040_E_NO_TRCV_CONTROL | 0 |
| 0x803334 | SPI_E_TIMEOUT | 0 |
| 0x803335 | ADC_E_TIMEOUT | 0 |
| 0x80334A | CANSM_E_SETTRSCVMODE_NETWORK_0 | 0 |
| 0x80334B | VSM_EVENT_OPMODE | 0 |
| 0x80334D | PDUR_E_PDU_INSTANCE_LOST | 0 |
| 0x80334E | PDUR_E_INIT_FAILED | 0 |
| 0x80334F | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x803350 | MCU_E_QUARTZ_FAILURE | 0 |
| 0x803351 | FEE_E_WRITE_FAILED | 0 |
| 0x803352 | ECUM_E_RAM_CHECKED_FAILED | 0 |
| 0x803353 | CANTRCV_30_X_E_NO_TRCV_CONTROL | 0 |
| 0x803356 | CANSM_E_MODE_CHANGE_NETWORK_0 | 0 |
| 0x803358 | CANIF_E_INVALID_DLC | 0 |
| 0x803359 | WDGM_E_SET_MODE | 0 |
| 0x80335A | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x80335B | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x80335C | WDG_E_DISABLE_REJECTED | 0 |
| 0x80335D | PIA_E_IO_ERROR | 0 |
| 0x80335E | NVM_E_REQ_FAILED | 0 |
| 0x80335F | MCU_E_LOCK_FAILURE | 0 |
| 0x803360 | MCU_E_CLOCK_FAILURE | 0 |
| 0x803361 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x803362 | FLS_E_WRITE_FAILED | 0 |
| 0x803363 | FLS_E_READ_FAILED | 0 |
| 0x803364 | FLS_E_ERASE_FAILED | 0 |
| 0x803365 | FLS_E_COMPARE_FAILED | 0 |
| 0x803366 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x803367 | CNM_E_TX_PATH_FAILED | 0 |
| 0x803368 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x80336A | CANIF_E_STOPPED | 0 |
| 0x80336D | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x80336E | CAN_E_TIMEOUT | 0 |
| 0x80336F | NVM_E_INTEGRITY_FAILED | 0 |
| 0xE20403 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0xE20404 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | STAT_AUSSENTEMPERATUR | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | STAT_BETRIEBSSPANNUNG | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | STAT_FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4003 | STAT_RADLENKWINKEL | ° | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4004 | QUALIFIER_FUNKTION_PMA | HEX | High | unsigned char | - | - | - | - |
| 0x4005 | STAT_INITIAL_DTC | Text | High | 3 | - | - | - | - |
| 0x4006 | STAT_INTERNER_STATUS | Text | High | 3 | - | - | - | - |
| 0x4007 | STAT_INTERNER_FEHLERCODE | Text | High | 3 | - | - | - | - |
| 0x4008 | STAT_FEHLERSPEICHER_BORDNETZ_SPANNUNG | HEX | High | unsigned char | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4030

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_EOL_DATA_ECU_SN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | ECU Seriennummer |
| STAT_VALEO_EOL_DATA_TEST_RES_WERT | HEX | high | unsigned char | - | - | - | - | - | Tester-Ergebnis |
| STAT_VALEO_EOL_DATA_TEST_PROG_WERT | HEX | high | unsigned char | - | - | - | - | - | Prüftart |
| STAT_VALEO_EOL_DATA_PROD_DATE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum |
| STAT_VALEO_EOL_DATA_TEST_NR_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Prüfstandsnummer |
| STAT_VALEO_EOL_DATA_ECU_IDX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | ECU Index |
| STAT_VALEO_EOL_DATA_TRACE_NR_TEXT | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | Trace Nummer |

### RES_0XD388

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_PDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PDC über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_TV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung TV über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_RV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung Rückfahrkamera über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_PMA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PMA über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_APDC_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Signal für De-/ Aktivierung aPDC über BUS:  0 = nicht aktiviert,  1 = aktiviert |

### RES_0XD66D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ANHAENGER_VORHANDEN | 0/1 | - | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Status des Anhängers:  0 = Anhänger nicht vorhanden 1 = Anhänger vorhanden |
| STAT_BUS_IN_STATUS_KUPPLUNG | 0/1 | - | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Status Anhängervorrichtung: 0 = Anhängerkupplung eingefahren 1 = Anhängerkupplung ausgefahren |

### RES_0XD66F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PDC_ANZAHL_LAUTSPRECHER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der direkt am Steuergerät angeschlossenen Lautsprecher |
| STAT_PDC_ANZAHL_SENSOREN_VORN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren vorn. |
| STAT_PDC_ANZAHL_SENSOREN_HINTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren hinten. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_AKTIVIERUNGSIGNAL | 0xD388 | - | Liefert oder simuliert die Signale der Aktivierung  von PDC, TV, RV, aPDC und PMA, wie sie über BUS empfangen wird. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD388 | RES_0xD388 |
| PDC_FUNKTIONSANZEIGE | 0xD640 | STAT_FUNKTIONSANZEIGE_PDC | Status der Funktionsanzeige:  0= AUS; 1= EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSL_ABSTAND_WERT | 0xD644 | STAT_PDC_VSL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ABSTAND_WERT | 0xD645 | STAT_PDC_VAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ABSTAND_WERT | 0xD646 | STAT_PDC_VML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ABSTAND_WERT | 0xD647 | STAT_PDC_VAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ABSTAND_WERT | 0xD648 | STAT_PDC_VMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSR_ABSTAND_WERT | 0xD649 | STAT_PDC_VSR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ABSTAND_WERT | 0xD64B | STAT_PDC_HAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ABSTAND_WERT | 0xD64C | STAT_PDC_HML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ABSTAND_WERT | 0xD64D | STAT_PDC_HAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ABSTAND_WERT | 0xD64E | STAT_PDC_HMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSL_ASZ_WERT | 0xD650 | STAT_PDC_VSL_ASZ_WERT | Ausschwingzeit Sensor vorn seitlich links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ASZ_WERT | 0xD651 | STAT_PDC_VAL_ASZ_WERT | Ausschwingzeit Sensor vorn außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ASZ_WERT | 0xD652 | STAT_PDC_VML_ASZ_WERT | Ausschwingzeit Sensor vorn mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ASZ_WERT | 0xD653 | STAT_PDC_VAR_ASZ_WERT | Ausschwingzeit Sensor vorn außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ASZ_WERT | 0xD654 | STAT_PDC_VMR_ASZ_WERT | Ausschwingzeit Sensor vorn mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSR_ASZ_WERT | 0xD655 | STAT_PDC_VSR_ASZ_WERT | Ausschwingzeit Sensor vorn seitlich rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ASZ_WERT | 0xD657 | STAT_PDC_HAL_ASZ_WERT | Ausschwingzeit Sensor hinten außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ASZ_WERT | 0xD658 | STAT_PDC_HML_ASZ_WERT | Ausschwingzeit Sensor hinten mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ASZ_WERT | 0xD659 | STAT_PDC_HAR_ASZ_WERT | Ausschwingzeit Sensor hinten außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VZE_ABSTAND_WERT | 0xD65B | STAT_PDC_VZE_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ASZ_WERT | 0xD66A | STAT_PDC_HMR_ASZ_WERT | Ausschwingzeit Sensor hinten mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_ANHAENGER_VORHANDEN | 0xD66D | - | Liefert den Status des Anhängers über Bus. | bit | - | - | BITFIELD | RES_0xD66D | - | - | - | - | 22 | - | - |
| BUS_IN_PDC_TASTE_EIN | 0xD66E | STAT_BUS_IN_PDC_TASTE_EIN | Auslesen Status der PDC-Taste über Bus : 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_KONFIGURATION | 0xD66F | - | Liefert die (zuvor) codierte Konfiguration des Systems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD66F |
| BUS_IN_KILOMETERSTAND_WERT | 0xD670 | STAT_BUS_IN_KILOMETERSTAND_WERT | Signal Kilometerstand des Fahrzeugs über BUS | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_STAT_SYSTEM | 0xD671 | STAT_PDC_SYSTEM | Status des Systems:  0 = PDC nicht aktiv,  1 = PDC aktiv,  2 = PDC hat Fehler erkannt | 0-n | - | - | unsigned char | TAB_PDC_STATUS | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SENSORTEST | 0xD673 | - | Startet die Eigendiagnose der Sensoren, Ergebnisse werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD673 | - |
| PDC_SENSORTEST | 0xD674 | STAT_PDC_SENSORTEST_NR | Ausgabe des Status des Sensortests:  Siehe Tabelle TAB_PDC_SENSORTEST | 0-n | - | - | unsigned char | TAB_PDC_SENSORTEST | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SYSTEM | 0xD676 | - | Aufruf aktiviert oder deaktiviert das PDC-System. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD676 | - |
| BUS_IN_STATUS_ROLLEN | 0xD679 | STAT_BUS_IN_STATUS_ROLLEN | Status der Fahrzeugbewegung:  0 = Fahrzeug steht,  1 = Fahrzeug fährt vorwärts, 2 = Fahrzeug fährt rückwärts, 3 = Fahrzeug fährt,  255 ungültig | 0-n | - | - | unsigned char | TAB_PDC_ROLLEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_WEGSTRECKE_WERT | 0xD67A | STAT_BUS_IN_WEGSTRECKE_WERT | Signal Wegstrecke des Fahrzeugs über BUS | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_RUECKWAERTSGANG | 0xD67B | STAT_BUS_IN_RUECKWAERTSGANG_EIN | Status des Rückwärtsgang:  0 = Rückwärtsgang nicht eingelegt;  1 = Rückwärtsgang eingelegt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VZE_ASZ_WERT | 0xD67E | STAT_PDC_VZE_ASZ_WERT | Ausschwingzeit Sensor vorn zentral | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | unsigned int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_15_WERT | 0xDAD1 | STAT_SPANNUNG_KLEMME_15_WERT | Spannungswert am Steuergerät an Klemme 15 (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| PKM_SWC_VERSION_LESEN | 0xDD34 | STAT_PKM_SWC_VERSION_WERT_DATA | STAT_PKM_SWC_VERSION_WERT Versionsinformationen der auf dem SG implementierten SWC | DATA | - | high | data[7] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VALEO_ICT_DATEN | 0x402F | STAT_VALEO_ICT_DATA | ICT Daten lesen | DATA | - | high | data[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VALEO_EOL_DATEN | 0x4030 | - | EndOfLine Daten lesen/schreiben | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4030 | RES_0x4030 |

### TAB_PDC_ROLLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug fährt vorwärts |
| 0x02 | Fahrzeug fährt rückwärts |
| 0x03 | Fahrzeug fährt |
| 0xFF | ungültiger Wert |

### TAB_PDC_SENSORTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht angefordert |
| 0x01 | Test läuft |
| 0x02 | Test Ergebnis OK |
| 0x03 | Test Ergebnis nicht OK |
| 0x04 | Test Stopp. System aktuell nicht bereit den Test zu starten oder Test abgebrochen. |
| 0xFF | Ungültiger Wert |

### TAB_PDC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC nicht aktiv |
| 0x01 | PDC aktiv |
| 0x02 | PDC hat Fehler erkannt |
