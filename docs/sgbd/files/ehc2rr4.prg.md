# ehc2rr4.prg

## General

|  |  |
| --- | --- |
| File | ehc2rr4.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 55 |
| Origin | BMW EF631 Thasler |
| Revision | 1.004 |
| Author | WABCO CAR-PD CarstenPetry, SCL SW-DesignCentre NatarajanRamesh, |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 2-Achs-Luftfeder_RollsRoyce_RR4 |  |  |
| ORIGIN | string | BMW EF631 Thasler |  |  |
| REVISION | string | 1.004 |  |  |
| AUTHOR | string | WABCO CAR-PD CarstenPetry, SCL SW-DesignCentre NatarajanRamesh, |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.32 |  |  |
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
| 0x04 | GWTB | Gateway-Tabelle |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betreibsmode gesetzt | kein Betreibsmode |
| 0xFF | ungültiger Betreibsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023800 | Energiesparmode aktiv | 1 |
| 0x02FF38 | DM_TEST_APPL | 1 |
| 0x480D80 | Sensor hinten links, Sensorspannung oder Versorgung außerhalb Bereich (Kurzschluss nach Masse, Ubat oder Leitungsbruch) | 0 |
| 0x480D82 | aktueller Sensorwert hinten links hat zu große Abweichung zum vorhergehenden Wert | 0 |
| 0x480D83 | Sensor hinten rechts, Sensorspannung oder Versorgung außerhalb Bereich (Kurzschluss nach Masse, Ubat oder Leitungsbruch) | 0 |
| 0x480D85 | aktueller Sensorwert hinten rechts hat zu große Abweichung zum vorhergehenden Wert | 0 |
| 0x480D86 | Sensor vorne links, Sensorspannung oder Versorgung außerhalb Bereich (Kurzschluss nach Masse, Ubat oder Leitungsbruch) | 0 |
| 0x480D88 | aktueller Sensorwert vorn links hat zu große Abweichung zum vorhergehenden Wert | 0 |
| 0x480D89 | Sensor vorne rechts, Sensorspannung oder Versorgung außerhalb Bereich (Kurzschluss nach Masse, Ubat oder Leitungsbruch) | 0 |
| 0x480D8B | aktueller Sensorwert vorn rechts hat zu große Abweichung zum vorhergehenden Wert | 0 |
| 0x480D8C | Sensorspannungsversorgung hinten links außerhalb Betriebsbereich (Kurzschluss nach Masse oder nach U-Bat) | 0 |
| 0x480D8D | Sensorspannungsversorgung hinten rechts außerhalb Betriebsbereich (Kurzschluss nach Masse oder nach U-Bat) | 0 |
| 0x480D8E | Sensorspannungsversorgung vorne links außerhalb Betriebsbereich (Kurzschluss nach Masse oder nach U-Bat) | 0 |
| 0x480D8F | Sensorspannungsversorgung vorne rechts außerhalb Betriebsbereich (Kurzschluss nach Masse oder nach U-Bat) | 0 |
| 0x480D90 | Druckspeichersensor, Signalleitung (Kurzschluss gegen Ubat, Masse oder Leitungsunterbrechung) | 0 |
| 0x480D91 | Druckspeichersensor, Spannungsversorgung größer Fehlergrenzwert  (Kurzschluss gegen Ubat) | 0 |
| 0x480D92 | Druckspeichersensor, Spannungsversorgung kleiner Fehlergrenzwert  (Kurzschluss gegen Masse oder Leitungsunterbrechung) | 0 |
| 0x480D94 | Temperatursensor, Spannung größer als Betriebsbereich (Kurzschluss gegen Ubat oder Leitungsbruch) | 0 |
| 0x480D95 | Temperatursensor, Spannung kleiner als Betriebsbereich (Kurzschluss gegen Masse) | 0 |
| 0x480DA0 | LED Tiefniveau, Spannung größer als Betriebsbereich (Kurzschluss gegen U-Bat oder Leitungsbruch) | 0 |
| 0x480DA1 | LED Tiefniveau, Spannung kleiner als Betriebsbereich (Kurzschluss gegen Masse) | 0 |
| 0x480DA2 | LED Hochniveau, Spannung größer als Betriebsbereich (Kurzschluss gegen U-Bat oder Leitungsbruch) | 0 |
| 0x480DA3 | LED Hochniveau, Spannung kleiner als Betriebsbereich (Kurzschluss gegen Masse) | 0 |
| 0x480DA4 | LED Standardniveau, Spannung größer als Betriebsbereich (Kurzschluss gegen U-Bat oder Leitungsbruch) | 0 |
| 0x480DA5 | LED Standardniveau, Spannung kleiner als Betriebsbereich (Kurzschluss gegen Masse) | 0 |
| 0x480DB0 | Magnetventil hinten links oder hinten rechts, Kurzschluss nach U-Bat | 0 |
| 0x480DB1 | Magnetventil hinten links oder hinten rechts, Kurzschluss nach Masse | 0 |
| 0x480DB2 | Magnetventil zur Steuerung der Luftfeder hinten links, Leitungsunterbrechung | 0 |
| 0x480DB3 | Magnetventil zur Steuerung der Luftfeder hinten rechts, Leitungsunterbrechung | 0 |
| 0x480DB4 | Magnetventil vorne links oder vorne rechts, Kurzschluss nach U-Bat | 0 |
| 0x480DB5 | Magnetventil vorne links oder vorne rechts, Kurzschluss nach Masse | 0 |
| 0x480DB6 | Magnetventil zur Steuerung der Luftfeder vorne links, Leitungsunterbrechung | 0 |
| 0x480DB7 | Magnetventil zur Steuerung der Luftfeder vorne rechts, Leitungsunterbrechung | 0 |
| 0x480DB8 | Ablassventil oder Druckspeicherventil, Kurzschluss nach U-Bat | 0 |
| 0x480DB9 | Ablassventil oder Druckspeicherventil, Kurzschluss nach Masse | 0 |
| 0x480DBA | Ablassventil, Leitungsunterbrechung | 0 |
| 0x480DBC | Druckspeicherventil, Leitungsunterbrechung | 0 |
| 0x480DBD | Kompressorrelais, Kurzschluss nach U-Bat oder Leitungsbruch | 0 |
| 0x480DBE | Kompressorrelais, Kurzschluss nach Masse | 0 |
| 0x480DD0 | Sensoraktivitätsüberwachung hinten links (Korrlation des Schwingungsverhaltens) | 0 |
| 0x480DD1 | Sensoraktivitätsüberwachung hinten rechts (Korrlation des Schwingungsverhaltens) | 0 |
| 0x480DD2 | Sensoraktivitätsüberwachung vorne links (Korrlation des Schwingungsverhaltens) | 0 |
| 0x480DD3 | Sensoraktivitätsüberwachung vorne rechts (Korrlation des Schwingungsverhaltens) | 0 |
| 0x480DD4 | Höhenstandsänderung, falsche Richtung wenn Heben angefordert | 0 |
| 0x480DD5 | Höhenstandsänderung, falsche Richtung wenn Senken angefordert | 0 |
| 0x480DD6 | Zu viel Energie zur Regelung benötigt, Vorderachse | 0 |
| 0x480DD7 | Zu viel Energie zur Regelung benötigt, Hinterachse rechts | 0 |
| 0x480DD8 | Zu viel Energie zur Regelung benötigt, Hinterachse links | 0 |
| 0x480DD9 | Zu viel Energie um die Zielhöhe zu erreichen benötigt, vorne | 0 |
| 0x480DDA | Zu viel Energie um die Zielhöhe zu erreichen benötigt, hinten rechts | 0 |
| 0x480DDB | Zu viel Energie um die Zielhöhe zu erreichen benötigt, hinten links | 0 |
| 0x480DDC | Sensorgestänge der Wegsensoren beschädigt oder fehlerhafte Höhenstandskalibrierung | 0 |
| 0x480DDD | Speicherdruck steigt, wenn Speicher nicht aktiv ist | 0 |
| 0x480DDE | Speicherdruck sinkt, wenn Speicher nicht aktiv ist | 0 |
| 0x480DDF | Speicherdruck bleibt konstant, wenn Speicher füllen angefordert wird | 0 |
| 0x480DE0 | Speicherdruck sinkt, wenn Speicher füllen angefordert wird | 0 |
| 0x480DE1 | Speicherdruck sinkt anfänglich, wenn Speicher füllen angefordert wird | 0 |
| 0x480DE2 | Speicherdruck bleibt konstant, wenn aus dem Speicher nach oben verfahren wird | 0 |
| 0x480DE3 | Speicherdruck steigt, wenn aus dem Speicher nach oben verfahren wird | 0 |
| 0x480E02 | Unterspannung | 1 |
| 0x480E03 | Steuergerät ist nicht codiert oder SG arbeitet mit Default-Codierdaten | 1 |
| 0x480E04 | Fehler während der Codierdaten-Transaktion aufgetreten | 1 |
| 0x480E05 | Signatur über Nettocodierdaten ungültig. Default-Codierdaten verwendet | 1 |
| 0x480E06 | Steuergerät ist nicht für das Fahrzeug codiert, in dem es verbaut ist. Vergleich zwischen CPS und VIN negativ | 1 |
| 0x480E07 | Die während einer Codierdatentransaktion gesendeten Daten sind nicht plausibel | 1 |
| 0x480E08 | Höhenstandsabgleich fehlt oder fehlerhaft (BMW) | 1 |
| 0x480E10 | ECU-interner Fehler, Details im sekundären FS | 0 |
| 0x480E12 | Überspannung | 1 |
| 0xD7040B | K-CAN Bus | 0 |
| 0xD70414 | K-CAN Control Module Bus OFF | 0 |
| 0xD70BFF | DM_TEST_COM | 1 |
| 0xD70DA0 | Timeout , Bus Botschaft  ZV und Klappenzustand  | 1 |
| 0xD70DA1 | Ungültiges Signal, Bus-Botschaft  ZV und Klappenzustand  | 1 |
| 0xD70DA2 | Timeout, Bus-Botschaft  Geschwindigkeit Fahrzeug  | 1 |
| 0xD70DA3 | Ungültiges Signal, Bus-Botschaft  Geschwindigkeit Fahrzeug  | 1 |
| 0xD70DA4 | Timeout, Bus-Botschaft  Klemmen  | 1 |
| 0xD70DA5 | Ungültiges Signal, Bus-Botschaft  Klemmen  | 1 |
| 0xD70DA6 | Timeout, Bus-Botschaft  Status Reifen  | 1 |
| 0xD70DA7 | Ungültiges Signal, Bus-Botschaft  Status Reifen  | 1 |
| 0xD70DA8 | Timeout, Bus-Botschaft  Querbeschleunigung Schwerpunkt  | 1 |
| 0xD70DA9 | Ungültiges Signal, Bus-Botschaft  Querbeschleunigung Schwerpunkt  | 1 |
| 0xD70DAA | Timeout Bus-Botschaft  Drehmoment Kurbelwelle 1  | 1 |
| 0xD70DAB | ungültiges Signal, Bus-Botschaft  Drehmoment Kurbelwelle 1  | 1 |
| 0xD70DAC | Timeout, Bus-Botschaft  Status Stabilisierung DSC   | 1 |
| 0xD70DAD | ungültiges Signal, Bus-Botschaft   Status Stabilisierung DSC    | 1 |
| 0x480DA6 | Temperatursensor, Plausibilitätscheck COMP aktiv | 0 |
| 0x480DA7 | Temperatursensor, Plausibilitätscheck COMP inaktiv | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5000 | ValveStatus-Bitmaske(bit7->bit0)[Reserviert\|Komp\|Ex\|Res\|HL\|HR\|VL\|VR] | - | - | unsigned char | - | - | - | - |
| 0x5001 | Speicherdruck | bar | - | unsigned char | - | - | - | - |
| 0x5002 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 2 | - | - |
| 0x5003 | Batteriespannung | V | - | unsigned char | - | - | 8 | - |
| 0x5004 | durchschn. Fahrzeughoehe | mm | - | signed char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x380E00 | Onboard adapter Kalibierung fehlerhaft (WABCO) | 0 |
| 0x380E01 | Kommunikation PIC - Hauptrechner gestört | 0 |
| 0x380E02 | HSS-Abschaltung über PIC ist erfolgt | 0 |
| 0x380E03 | Steuergerät interner Fehler, Checksummenfehler Flash | 0 |
| 0x380E04 | Steuergerät interner Fehler, Checksummenfehler RAM | 0 |
| 0x384001 | NVM writing operation is failed for a given block. | 0 |
| 0x384002 | NVM reading operation is failed for a given block. | 0 |
| 0x384003 | NVM failed to check the consistency for the given block or restoring of default data for the given block | 0 |
| 0x384004 | NVM erase operation is failed for a given block. | 0 |
| 0x384005 | NVM writing operation is failed for a given block. | 0 |
| 0x384006 | Wrong configuration ID is given for NVM | 0 |
| 0x384007 | NVM reading operation is failed for a request to read all the blocks | 0 |
| 0x38D700 | DM_EVENT_Zeitbotschaft_Timeout | 0 |
| 0x38D701 | DM_Queue_DELETED | 1 |
| 0x38D702 | DM_Queue_FULL | 1 |
| 0x38D703 | Timeout, Bus Botschaft Fahrzeugzustand | 0 |
| 0x38D704 | Radentlastungsfunktion aktiv | 1 |
| 0x380EA6 | Temperatursensor, Plausibilitätscheck COMP aktiv | 0 |
| 0x380EA7 | Temperatursensor, Plausibilitätscheck COMP inaktiv | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5000 | ValveStatus-Bitmaske(bit7->bit0)[Reserviert\|Komp\|Ex\|Res\|HL\|HR\|VL\|VR] | - | - | unsigned char | - | - | - | - |
| 0x5001 | Speicherdruck | bar | - | unsigned char | - | - | - | - |
| 0x5002 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 2 | - | - |
| 0x5003 | Batteriespannung | V | - | unsigned char | - | - | 8 | - |
| 0x5004 | durchschn. Fahrzeughoehe | mm | - | signed char | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_EHC_ECU | 0xDB7F | - | Status: Steuergerät Modus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB7F |
| STEUERN_EHC_ECUMODE | 0xAB65 | - | Steuern: ECU Modus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB65 | - |
| STATUS_EHC_DATALOGGER | 0xDBBE | - | Status: Datenaufzeichnungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBBE |
| STATUS_EHC_SWITCH | 0xDB7E | - | Status: Niveauwechselschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB7E |
| STATUS_EHC_HEIGHT_SENSOR | 0xDB69 | - | Status: Höhenstandssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB69 |
| STEUERN_EHC_MANUAL_LEVELING | 0xDC10 | - | Steuern: Manuelle Höhenverstellung | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDC10 | - |
| STATUS_EHC_MAGNETVALVE | 0xDB7D | - | Status: Magnetventile | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB7D |
| STEUERN_STATUS_EHC_REF | 0xDC0F | - | Steuern/Status: Radentlastungsfunktion | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC0F | RES_0xDC0F |
| STEUERN_EHC_VALUE_LEAK | 0xAB68 | - | Steuern/Status: Leckage Werte | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB68 |
| STATUS_EHC_LED_STAT | 0xDB7C | - | Status: LED Niveauwechselschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB7C |
| STATUS_EHC_INTERNAL | 0xDB8A | - | Status: intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB8A |
| STEUERN_EHC_ACTUATOR | 0xDB8C | - | Steuern: Aktuator | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB8C | - |
| STEUERN_EHC_CLEAR_DATALOGGER | 0xAB6A | - | Steuern: Datenaufzeichnungen löschen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB6A | - |
| STEUERN_EHC_VEHICLE_HEIGHT | 0xDC11 | - | Steuern: Fahrzeughöhe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC11 | - |
| STATUS_EHC_VOLTAGE | 0xDB68 | - | Status: Werteausgabe in Volt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB68 |
| STEUERN_EHC_LEDS | 0xDB7B | - | Steuern: LEDs | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB7B | - |
| STEUERN_EHC_HEIGHT_CALIBRATE | 0xAB64 | - | Steuern/Status: Höhenstandskalibrierung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAB64 | RES_0xAB64 |
| STATUS_EHC_REF_HISTORY | 0xDC0D | - | Status: Radentlastungsfunktion Historie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC0D |
| STATUS_ACTUATOR_VALVE_RL | 0x4011 | STAT_ACTUATOR_VALVE_RL_ON | Status of the Actuator Rear Left | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_RR | 0x4012 | STAT_ACTUATOR_VALVE_RR_ON | Status of the Actuator Rear Right | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_EX | 0x4013 | STAT_ACTUATOR_VALVE_EX_ON | Status of the Actuator Exhaust | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_COMPRESSOR | 0x4014 | STAT_ACTUATOR_COMPRESSOR_ON | Status of the Compressor | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_RES | 0x4015 | STAT_ACTUATOR_VALVE_RES_ON | Status of the Actuator Reservoir | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_HPEX | 0x4016 | STAT_ACTUATOR_VALVE_HPEX_ON | Status of the Actuator High Pressure Exhaust | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_INHIBIT | 0x4017 | STAT_ACTUATOR_INHIBIT_ON | Status of inhibit pin | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_FL | 0x4018 | STAT_ACTUATOR_VALVE_FL_ON | Status of the Actuator Front Left | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_FR | 0x4019 | STAT_ACTUATOR_VALVE_FR_ON | Status of the Actuator Front Right | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_VOLTAGE_HTSENSOR_FL | 0x4001 | STAT_VOLTAGE_HTSENSOR_FL_WERT | Analog Voltage Height sensor FL | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_HTSENSOR_FR | 0x4002 | STAT_VOLTAGE_HTSENSOR_FR_WERT | Analog Voltage Height sensor FR | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_HTSENSOR_RL | 0x4003 | STAT_VOLTAGE_HTSENSOR_RL_WERT | Analog Voltage Height sensor RL | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_TSENSOR_COMP | 0x4006 | STAT_VOLTAGE_TSENSOR_COMP_WERT | Analog Voltage Temp sensor Compressor | V | - | - | int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_U_KL30 | 0x4007 | STAT_VOLTAGE_U_KL30_WERT | Analog Voltage KL30 | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_USENS1 | 0x4008 | STAT_VOLTAGE_USENS1_WERT | Analog Voltage USENS1 RR | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_USENS2 | 0x4009 | STAT_VOLTAGE_USENS2_WERT | Analog Voltage USENS2 RL | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_USENS3 | 0x400A | STAT_VOLTAGE_USENS3_WERT | Analog Voltage USENS3 | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_VOLTAGE_PSENS_GALLERY | 0x400B | STAT_VOLTAGE_PSENS_GALLERY_WERT | Analog Voltage Pressure Sensor Gallery | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_HEIGHT_FL | 0x4050 | STAT_VALUE_HEIGHT_FL_WERT | Value of Height Front Left | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_FR | 0x4051 | STAT_VALUE_HEIGHT_FR_WERT | Value of Height Front Right | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_RL | 0x4052 | STAT_VALUE_HEIGHT_RL_WERT | Value of Height Rear Left | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_RR | 0x4053 | STAT_VALUE_HEIGHT_RR_WERT | Value of Height Rear Right | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_P_RESERVOIR | 0x4054 | STAT_VALUE_P_RESERVOIR_WERT | Value of Pressure in the Reservoir | bar | - | - | int | - | - | 128 | - | - | 22 | - | - |
| STATUS_T_COMPRESSOR | 0x4055 | STAT_VALUE_T_COMPRESSOR_WERT | Value of Temperature in the Compressor | °C | - | - | int | - | - | 100 | - | - | 22 | - | - |
| STATUS_SENSORVALUE_U_KL30 | 0x4056 | STAT_SENSORVALUE_U_KL30_WERT | Value of U_KL30 | count | - | - | int | - | - | 100 | - | - | 22 | - | - |
| STATUS_P_GALLERY | 0x4057 | STAT_VALUE_P_GALLERY_WERT | Value of Pressure in the Gallery | bar | - | - | int | - | - | 128 | - | - | 22 | - | - |
| STATUS_PIC_VERSION | 0x4099 | STAT_PIC_VERSION_WERT | Reads the PIC Version | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_HIGH_SIDE_SWITCH | 0x4097 | STAT_HSS_WERT | Reads the status of High Side Switch | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_VOLTAGE_HTSENSOR_RR | 0x4004 | STAT_VOLTAGE_HTSENSOR_RR_WERT | Analog Voltage Height Sensor RR | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STEUERN_ENDOFLINE | 0x40EE | - | Writes EOL data into EEPROM | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40EE | - |
| STEUERN_RELEASE_ACTUATORS | 0x40A7 | - | Releases Actuator | - | - | - | - | - | - | - | - | - | 2F | ARG_0x40A7 | - |
| STATUS_VOLTAGE_PSENSOR_RES | 0x4005 | STAT_VOLTAGE_PSENSOR_RES_WERT | Analog voltage Reservoir pressure sensor | V | - | - | unsigned int | - | - | 100 | - | - | 22 | - | - |
| STATUS_LOW_SIDE_SWITCH | 0x4098 | STAT_LSS_WERT | Low side switch status | - | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_INFO_PORT | 0x40A8 | - | Reads Port status | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A8 |
| STEUERN_EHC_HSS | 0x4087 | - | Steuern: Ventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4087 | - |
| STEUERN_EHC_LSS | 0x4088 | - | Steuern: Ventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4088 | - |
| STEUERN_ECUSN | 0xF18C | - | Writes ECU Serial No. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xF18C | - |
| STEUERN_VMECUHN | 0xF191 | - | Writes Vehicle Manufacturer ECU Hardware Number | - | - | - | - | - | - | - | - | - | 2E | ARG_0xF191 | - |
| STEUERN_SSECUHN | 0xF192 | - | Writes System Supplier ECU Hardware Number | - | - | - | - | - | - | - | - | - | 2E | ARG_0xF192 | - |
| STEUERN_SSECUHWVN | 0xF193 | - | Writes System Supplier ECU Hardware Version Number | - | - | - | - | - | - | - | - | - | 2E | ARG_0xF193 | - |
| STEUERN_RESETCALIB_DEFAULT | 0x40AA | - | Reset Calibration Values To Default | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_HEIGHT_FL_SLOW | 0x4150 | STAT_VALUE_HEIGHT_FL_SLOW_WERT | Value of Height Front Left Slow | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_FR_SLOW | 0x4151 | STAT_VALUE_HEIGHT_FR_SLOW_WERT | Value of Height Front Right Slow | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_RL_SLOW | 0x4152 | STAT_VALUE_HEIGHT_RL_SLOW_WERT | Value of Height Rear Left Slow | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_RR_SLOW | 0x4153 | STAT_VALUE_HEIGHT_RR_SLOW_WERT | Value of Height RearRight Slow | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_CORRECTION_VA | 0x4154 | STAT_VALUE_HEIGHT_CORRECTION_VA_WERT | Value of Height Correction Front Axle | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_HEIGHT_CORRECTION_HA | 0x4155 | STAT_VALUE_HEIGHT_CORRECTION_HA_WERT | Value of Height Correction Rear Axle | mm | - | - | int | - | - | 8 | - | - | 22 | - | - |
| STATUS_FILTERED_SPEED | 0x4156 | STAT_VALUE_FILTERED_SPEED_WERT | Value of Filtered Speed | km/h | - | - | int | - | - | 16 | - | - | 22 | - | - |

### ARG_0X40A7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOCAL_ID_WERT | - | - | unsigned int | - | - | - | - | - | - | - | Local ID : 0x11 MV-RL   0x12 MV-RR 0x13 MV-EX 0x14 COMP                             0x15 MV-RES 0x16 MV-HPEX 0x17 INHIBIT                              0x18 MV-FL                                                 0x19 MV-FR |

### ARG_0X40EE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE_EOL_WERT | - | - | unsigned int | - | - | - | - | - | - | - | 0001- BootProgStatus  0002 - BootProgCounter auf 0  0004 - BootProgData  0008 - SvkHistoryMemory  0018 - SvkHistoryMemory + Aktuelle SVK in SvkSysSupp Eintrag abspeichern  001A - SvkHistoryMemory + Aktuelle SVK in SvkSysSupp Eintrag abspeichern +                                                                                               BootProgCounter auf 1 |
| LOCAL_ID_WERT | - | - | unsigned int | - | - | - | - | - | - | - | Local ID = 0x00EE |

### RES_0X40A8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INFO_P1H_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P1H |
| STAT_INFO_P1L_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P1L |
| STAT_INFO_P2_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P2 |
| STAT_INFO_P8_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P8 |
| STAT_INFO_P7_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P7 |
| STAT_INFO_P4_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P4 |
| STAT_INFO_P3_WERT | - | - | unsigned int | - | - | - | - | - | Port Info P3 |

### ARG_0XF18C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPENO_BYTE1_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | - |
| TYPENO_BYTE2_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | - |
| RESERVED_WERT | - | - | unsigned char | - | - | - | - | - | 255 | 255 | - |
| SERIALNO_BYTE1_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | - |
| SERIALNO_BYTE2_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | - |
| SERIALNO_BYTE3_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | - |

### ARG_0XF191

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE1_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |
| BYTE2_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |
| BYTE3_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |
| BYTE4_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |
| BYTE5_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |
| BYTE6_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vehicle Manufacturer ECU Hardware No. |

### ARG_0XF192

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE1_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware No. |
| BYTE2_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware No. |
| BYTE3_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware No. |
| BYTE4_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware No. |
| BYTE5_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware No. |

### ARG_0XF193

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE1_WERT | - | - | unsigned char | - | - | - | - | - | 0 | 255 | System Supplier ECU Hardware Version No. |

### ARG_0X4087

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALVE_SW_NR | - | - | unsigned int | - | - | - | - | - | - | - | Bit0: HSS_FRONT,  Bit1: HSS_REAR,  Bit2: HSS_RES,  Bit3: Reserved,  Bit4: Reserved,  Bit5: PWR_UPULL,  Bit6: Reserved,  Bit7: Reserved; Bit8: PWR_SENS1,  Bit9: PWR_SENS2,  Bit10: PWR_SENS3,  Bit11 - Bit15 :Reserved; |

### ARG_0X4088

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALVE_SW_NR | - | - | unsigned int | - | - | - | - | - | - | - | Bit0: MV_FR,  Bit1: MV_FL,  Bit2: MV_RR,  Bit3: MV_RL,  Bit4: MV_RES,  Bit5: MV_EX,  Bit6: C_SW,  Bit7: Reserved, Bit8: MV_HPEX,  Bit9 - Bit15: Reserved; |

### RES_0XDBBE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKT_NO_PREMODE_WERT | - | - | unsigned int | - | - | - | - | - | Gesamtaktivierungen Kompressor im Stand und Motor aus |
| STAT_RUNTIME_COLD_PREMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start kalt im Stand und Motor aus |
| STAT_RUNTIME_WARM_PREMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start warm im Stand und Motor aus |
| STAT_RUNTIME_HOT_PREMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start heiß im Stand und Motor aus |
| STAT_CUT_OFF_PREMODE_WERT | - | - | unsigned int | - | - | - | - | - | Thermische Abschaltungen des Kompressors im Stand und Motor aus |
| STAT_AKT_NO_UNDER_4SEC_PREMODE_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen kleiner/gleich 4 sec im Stand und Motor aus |
| STAT_AKT_NO_4SEC_10SEC_PREMODE_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen zwischen 4 sec und 10 sec im Stand und Motor aus |
| STAT_AKT_NO_NORMALMODE_WERT | - | - | unsigned int | - | - | - | - | - | Gesamtaktivierungen Kompressor im Stand und Motor an |
| STAT_RUNTIME_COLD_NORMALMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start kalt im Stand und Motor an |
| STAT_RUNTIME_WARM_NORMALMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start warm im Stand und Motor an |
| STAT_RUNTIME_HOT_NORMALMODE_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start heiß im Stand und Motor an |
| STAT_CUT_OFF_NORMALMODE_WERT | - | - | unsigned int | - | - | - | - | - | Thermische Abschaltungen des Kompressors im Stand und Motor an |
| STAT_AKT_NO_UNDER_4SEC_NORMALMODE_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen kleiner/gleich 4 sec im Stand und Motor an |
| STAT_AKT_NO_4SEC_10SEC_NORMALMODE_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen zwischen 4 sec und 10 sec im Stand und Motor an |
| STAT_AKT_NO_DRIVING_WERT | - | - | unsigned int | - | - | - | - | - | Gesamtaktivierungen Kompressor während der Fahrt |
| STAT_RUNTIME_COLD_DRIVING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start kalt während der Fahrt |
| STAT_RUNTIME_WARM_DRIVING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start warm während der Fahrt |
| STAT_RUNTIME_HOT_DRIVING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start heiß während der Fahrt |
| STAT_CUT_OFF_DRIVING_WERT | - | - | unsigned int | - | - | - | - | - | Thermische Abschaltungen des Kompressors während der Fahrt |
| STAT_AKT_NO_UNDER_4SEC_DRIVING_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen kleiner/gleich 4 sec während der Fahrt |
| STAT_AKT_NO_4SEC_10SEC_DRIVING_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen zwischen 4 sec und 10 sec während der Fahrt |
| STAT_AKT_NO_MANUALLEVELING_WERT | - | - | unsigned int | - | - | - | - | - | Gesamtaktivierungen Kompressor manuelle Höhenänderung |
| STAT_RUNTIME_COLD_MANUALLEVELING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start kalt manuelle Höhenänderung |
| STAT_RUNTIME_WARM_MANUALLEVELING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start warm manuelle Höhenänderung |
| STAT_RUNTIME_HOT_MANUALLEVELING_WERT | s | - | unsigned long | - | - | - | - | - | Kompressorlaufzeit Start heiß manuelle Höhenänderung |
| STAT_CUT_OFF_MANUALLEVELING_WERT | - | - | unsigned int | - | - | - | - | - | Thermische Abschaltungen des Kompressors manuelle Höhenänderung |
| STAT_AKT_NO_UNDER_4SEC_MANUALLEVELING_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen kleiner/gleich 4 sec manuelle Höhenänderung |
| STAT_AKT_NO_4SEC_10SEC_MANUALLEVELING_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen zwischen 4 sec und 10 sec manuelle Höhenänderung |
| STAT_AKT_NO_SWITCH_MANUALLEVELING_WERT | - | - | unsigned int | - | - | - | - | - | Kompressoraktivierungen bezogen auf Schalteraktivierungen |

### RES_0XDB7F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DUMP_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Speicherausdruck aktiv/ Zusatzbotschaften fuer FESTUS |
| STAT_BAND_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Aktivierungs-Sperre/ Modus1 |
| STAT_VERLADE_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Einstellungen fuer den Transport |
| STAT_LOWTOL_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Aktiviert sehr enge Toleranzen |
| STAT_EMV_KUNDEN_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | fuer webaco EMV-Tests |
| STAT_HANDSTEUER_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Freischaltung fuer I/O Status-Vorgabe |
| STAT_NOPLAU_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | fuer Laborauto Tests |
| STAT_NOUSER_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | SG reagiert nicht mehr auf Benutzeranforderungen/  Modus1 |
| STAT_ZYKEMV_MODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Modus um im EMV Test zyklische Ventilansteuerungen zu haben/ Modus2 |
| STAT_NOPREVENTMODUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Modus um Regelungsverhinderer zu deaktivieren |
| STAT_ECUMOD1_WERT | - | - | unsigned char | - | - | - | - | - | Status Steuergeraet (Modus) Bit0:  CYCLIC EMC,  Bit1: No Prevent,  Bit2: reserved,  Bit3: reserved; Bit4: reserved,  Bit5: reserved,  Bit6: reserved,  Bit7: reserved |
| STAT_ECUMOD2_WERT | - | - | unsigned char | - | - | - | - | - | Status Steuergeraet (Modus) Bit0: Dump Modus,  Bit1: Band Modus,  Bit2: Verlademodus,  Bit3: Lowtolmodus; Bit4: EMV Kundenmodus,  Bit5: Handsteuermodus,  Bit6: Noplausmodus,  Bit7: Nousermodus |

### RES_0XDB69

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIGHT_SENSOR_FRONT_LEFT_WERT | mm | - | int | - | - | - | 8 | - | Wert Höhenstandssensor vorne links in mm. |
| STAT_HEIGHT_SENSOR_FRONT_RIGHT_WERT | mm | - | int | - | - | - | 8 | - | Wert Höhenstandssensor vorne rechts in mm. |
| STAT_HEIGHT_SENSOR_REAR_LEFT_WERT | mm | - | int | - | - | - | 8 | - | Wert Höhenstandssensor hinten links in mm. |
| STAT_HEIGHT_SENSOR_REAR_RIGHT_WERT | mm | - | int | - | - | - | 8 | - | Wert Höhenstandssensor hinten rechts in mm. |
| STAT_PRESSURE_RESERVOIRE_WERT | bar | - | int | - | - | - | 128 | - | Speicherdruck in bar. |
| STAT_TEMPERATURE_COMPRESSOR_WERT | °C | - | int | - | - | - | 100 | - | Temperatur Kompressor in ° C. |
| STAT_PRESSURE_GALLERY_WERT | bar | - | int | - | - | - | 128 | - | Reserviert |

### RES_0XDB8A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PREVENT_CURVE_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Kurve Aktiv |
| STAT_PREVENT_ACCEL_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Laengsbeschleunigung Aktiv |
| STAT_PREVENT_PLAUS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Plausibilitaet Aktiv |
| STAT_PREVENT_CARLIFT_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Wagenheber Aktiv |
| STAT_PREVENT_DOOR_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Tür Aktiv |
| STAT_PREVENT_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Verschraenkung Aktiv |
| STAT_PREVENT_VALVE_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Ventil ED Aktiv |
| STAT_PREVENT_BRAKES_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer Bremse Aktiv |
| STAT_PREVENT_USER_ON | 0/1 | - | unsigned char | - | - | - | - | - | Regelungsverhinderer unterbrochenes Absenken Aktiv |
| STAT_CAN_V_CAR_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Fahrzeuggeschwindigkeit |
| STAT_CAN_ABS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus DSC Aktivitaet |
| STAT_CAN_N_MOT_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Motordrehzahl |
| STAT_CAN_KM_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Kilometerstand |
| STAT_CAN_A_Q_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Querbeschleunigung |
| STAT_CAN_BAS_FBR_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Fahrerbremsung |
| STAT_CAN_S_ANH_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Anhaenger |
| STAT_CAN_S_TNS_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Tag/Nachtumschaltung |
| STAT_CAN_S_HBR_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Handbremse |
| STAT_CAN_L_ASC_DEF_ON | 0/1 | - | unsigned char | - | - | - | - | - | Empfangsstatus Fehlerstatus DSC |
| STAT_GMMNGR_OPMODE_ON_WERT | - | - | unsigned char | - | - | - | - | - | Global Modemanager Opmode |
| STAT_REG_SLOW_ON | 0/1 | - | unsigned char | - | - | - | - | - | Slowfilter aktiv |
| STAT_REG_NORMTOL_ON | 0/1 | - | unsigned char | - | - | - | - | - | Normales Toleranzband aktiv |
| STAT_REG_EXTTOL_ON | 0/1 | - | unsigned char | - | - | - | - | - | Erweitertes Toleranzband aktiv |
| STAT_REG_LOWTOL_ON | 0/1 | - | unsigned char | - | - | - | - | - | Enges Toleranzband aktiv |
| STAT_REG_WUPTOL_ON | 0/1 | - | unsigned char | - | - | - | - | - | Wakeup Toleranzband aktiv |
| STAT_REG_KERB_ON | 0/1 | - | unsigned char | - | - | - | - | - | Randsteinerkennung aktiv |
| STAT_REG_OTEMP_FILL_ON | 0/1 | - | unsigned char | - | - | - | - | - | ÖlTemperatur zu hoch |
| STAT_REG_OTEMP_REG_ON | 0/1 | - | unsigned char | - | - | - | - | - | ÖlTemperatur regulär |
| STAT_UNDERVOLTAGE_ON | 0/1 | - | unsigned char | - | - | - | - | - | Unterspannung aktiv |
| STAT_OVERVOLTAGE_ON | 0/1 | - | unsigned char | - | - | - | - | - | Ueberspannung aktiv |
| STAT_XXXSTATEFR_ON_WERT | - | - | unsigned char | - | - | - | - | - | Zustand des Reglerblocks Vorderachse |
| STAT_XXXSTATERR_ON_WERT | - | - | unsigned char | - | - | - | - | - | Zustand des Reglerblocks hinten rechts |
| STAT_XXXSTATERL_ON_WERT | - | - | unsigned char | - | - | - | - | - | Zustand des Reglerblocks hinten links |
| STAT_VLVCTRL_STATE_ON_WERT | - | - | unsigned char | - | - | - | - | - | Zustand des ValveCtrl Blocks |
| STAT_ACTUATOR_BA_WARN_ON_WERT | - | - | unsigned int | - | - | - | - | - | actuator_ba_warn Variable |

### RES_0XDB7C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STANDARD_ON | 0/1 | - | char | - | - | - | - | - | Standardniveau LED: an |
| STAT_OFFROAD_ON | 0/1 | - | char | - | - | - | - | - | Hochniveau LED: an |
| STAT_ACCESS_ON | 0/1 | - | char | - | - | - | - | - | Tiefniveau LED: an |

### RES_0XDB7D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAGNETVALVE_FRONT_LEFT_ON | 0/1 | - | int | - | - | - | - | - | Magnetventil vorn links: auf/ zu |
| STAT_MAGNETVALVE_FRONT_RIGHT_ON | 0/1 | - | int | - | - | - | - | - | Magnetventil vorn rechts: auf/ zu |
| STAT_MAGNETVALVE_REAR_LEFT_ON | 0/1 | - | int | - | - | - | - | - | Magnetventil hinten links: auf/ zu |
| STAT_MAGNETVALVE_REAR_RIGHT_ON | 0/1 | - | int | - | - | - | - | - | Magnetventil hinten rechts: auf/ zu |
| STAT_MAGNETVALVE_RESERVOIRE_ON | 0/1 | - | int | - | - | - | - | - | Magnetventil-Speicher: auf/ zu |
| STAT_MAGNETVALVE_EXHAUST_ON | 0/1 | - | int | - | - | - | - | - | Großes AuslassVentil |
| STAT_COMPRESSOR_SWITCH_ON | 0/1 | - | int | - | - | - | - | - | Kompressor-Schalter |
| STAT_MAGNETVALVE_HIGH_PRESSURE_EXHAUST_ON | 0/1 | - | int | - | - | - | - | - | AuslassVentil zum Abbau hoher Druckspitzen/ aktiv vor der Öffnung des großen AuslassVentils |

### RES_0XDC0D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REF_STATUS1_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON1_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO1_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |
| STAT_REF_STATUS2_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON2_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO2_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |
| STAT_REF_STATUS3_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON3_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO3_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |
| STAT_REF_STATUS4_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON4_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO4_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |
| STAT_REF_STATUS5_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON5_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO5_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |
| STAT_REF_STATUS6_WERT | - | - | unsigned char | - | - | - | - | - | REF Status |
| STAT_REF_REASON6_WERT | - | - | unsigned char | - | - | - | - | - | REF Grund / Anlass |
| STAT_MILEAGE_INFO6_WERT | - | - | unsigned long | - | - | 8 | - | - | Kilometerstand |

### RES_0XDB7E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWITCH_UP_ON | 0/1 | - | char | - | - | - | - | - | Niveauwechselschalter aufwärts: EIN |
| STAT_SWITCH_DOWN_ON | 0/1 | - | char | - | - | - | - | - | Niveauwechselschalter runter: EIN |
| STAT_VA_ON | 0/1 | - | char | - | - | - | - | - | Signalunterdrückung: Niveauwechselschalter |

### RES_0XDB68

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOLTAGE_FRONT_LEFT_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Höhenstandssensor vorne links in [V]. |
| STAT_VOLTAGE_FRONT_RIGHT_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Höhenstandssensor vorne rechts in [V]. |
| STAT_VOLTAGE_REAR_LEFT_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Höhenstandssensor hinten links in [V]. |
| STAT_VOLTAGE_REAR_RIGHT_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Höhenstandssensor hinten rechts in [V]. |
| STAT_VOLTAGE_RESERVOIR_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Reservoire in [V]. |
| STAT_VOLTAGE_COMPRESSOR_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Kompressor in [V]. |
| STAT_SPANNUNG_KLEMME_30_WERT | V | - | int | - | - | - | 100 | - | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) |
| STAT_VOLTAGE_SENS1_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Sensor 1 in [V]. |
| STAT_VOLTAGE_SENS2_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Sensor 2 in [V]. |
| STAT_VOLTAGE_SENS3_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Sensor 3 in [V]. |
| STAT_VOLTAGE_GALLERY_WERT | V | - | int | - | - | - | 100 | - | Spannungswert Gallery in [V]. |

### ARG_0XDB8C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLOPTION_NR | 0/1 | - | int | - | - | - | - | - | - | - | 1 = EIN  0 = AUS |
| TIME_NR | - | - | int | - | - | - | - | - | 0 | 760 | Ansteuerzeit = 0-760  * 30ms |
| LOCAL_ID_NR | 0-n | - | int | - | TAB_EHC_AKTUATOR_LOCAL_ID | - | - | - | - | - | Local ID :  0x11 Magnetventil hinten links (MV-RL), 0x12 Magnetventil hinten rechts (MV-RR), 0x13 Magnetventil Ablassventil (MV-EX), 0x14 Kompressor (COMP), 0x15 Magnetventil Speicherventil (MV-RES), 0x16 Magnetventil Hochdruckablassventil (MV-HPEX), 0x17 (INHIBIT), 0x18 Magnetventil vorne links (MV-FL), 0x19 Magnetventil vorne rechts (MV-FR) |

### TAB_EHC_AKTUATOR_LOCAL_ID

| WERT | TEXT |
| --- | --- |
| 0x11 | MV-RL |
| 0x12 | MV-RR |
| 0x13 | MV-EX |
| 0x14 | COMP |
| 0x15 | MV-RES |
| 0x16 | MV-HPEX |
| 0x17 | INHIBIT |
| 0x18 | MV_FL |
| 0x19 | MV_FR |

### ARG_0XAB6A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | unsigned int | - | - | - | - | - | - | - | - |

### ARG_0XAB65

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECUMODE_WERT | + | + | 0-n | - | unsigned char | - | TAB_EHC_ECUMODE | - | - | - | - | - | Werte gemäß Tabelle TAB_EHC_ECUMODE |

### TAB_EHC_ECUMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset all modes |
| 0x01 | Dump Mode |
| 0x02 | Reserved |
| 0x03 | Reserved |
| 0x04 | Low Tolerance Mode |
| 0x05 | EMC Mode |
| 0x06 | Hand Mode |
| 0x07 | NoPlaus Mode |
| 0x08 | NoUser Mode |
| 0x09 | Cyclic EMC Mode |
| 0x0A | Band ECU Mode |
| 0x0B | NoPrevent Mode |
| 0x0C | WABCO HW Mode |

### RES_0XAB64

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HCNT_FL_OFFSET_WERT | + | - | + | count | - | unsigned int | - | - | - | - | - | Offset Wert vorne links |
| STAT_HCNT_FR_OFFSET_WERT | + | - | + | count | - | unsigned int | - | - | - | - | - | Offset Wert vorne rechts |
| STAT_HCNT_RL_OFFSET_WERT | + | - | + | count | - | unsigned int | - | - | - | - | - | Offset Wert hinten links |
| STAT_HCNT_RR_OFFSET_WERT | + | - | + | count | - | unsigned int | - | - | - | - | - | Offset Wert hinten rechts |
| STAT_FL_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert vorne links |
| STAT_FR_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert vorne rechts |
| STAT_RL_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert hinten links |
| STAT_RR_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert hinten rechts |

### ARG_0XAB64

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEIGHT_LEFT_WERT | + | - | mm | - | int | - | - | 8 | - | - | - | - | Höhe links |
| HEIGHT_RIGHT_WERT | + | - | mm | - | int | - | - | 8 | - | - | - | - | Höhe rechts |
| AXLE_WERT | + | - | - | - | char | - | - | - | - | - | - | - | Abzugleichende Achse |

### ARG_0XDB7B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS_NR | - | - | int | - | - | - | - | - | - | - | Bit0: Tiefniveau, Bit1: Reserviert, Bit2: Standardniveau,   Bit3: Hochniveau,  Bit4: Reserviert,  Bit5: Reserviert, Bit6: Reserviert,   Bit7: Reserviert |

### ARG_0XDC10

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOCAL_ID_NR | 0-n | - | unsigned int | - | TAB_EHC_MANUAL_LEVELING_LOCAL_ID | - | - | - | 1 | 7 | Local ID:  0x0001 -  Vorder Achse 0x0002 -  Hinter Achse  0x0003 -  Vorne links 0x0004 -  Vorne rechts                 0x0005 -  Hinten links 0x0006 -  Hinten rechts 0x0007 -  Speicher |
| CONTROLOPTION_NR | 0-n | - | unsigned char | - | TAB_EHC_MANUAL_LEVELING_CONTROLOPTION | - | - | - | 0 | 2 | ControlOption: 0x00 -  Stop 0x01 -  Heben / Füllen 0x02 -  Senken / Entleeren |
| TIME_NR | - | - | unsigned char | - | - | - | - | - | 0 | 25 | Ansteuerzeit: 1 Sekunde bis max. 25 Sekunden |

### TAB_EHC_MANUAL_LEVELING_LOCAL_ID

| WERT | TEXT |
| --- | --- |
| 0x0001 | Vorderachse |
| 0x0002 | Hinterachse |
| 0x0003 | vorne links |
| 0x0004 | vorne rechts |
| 0x0005 | hinten links |
| 0x0006 | hinten rechts |
| 0x0007 | Speicher |

### TAB_EHC_MANUAL_LEVELING_CONTROLOPTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop |
| 0x01 | Heben/Fuellen |
| 0x02 | Senken/Entleeren |

### RES_0XAB68

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FL_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert vorne links |
| STAT_FR_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert vorne rechts |
| STAT_RL_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert hinten links |
| STAT_RR_LEAK_WERT | + | - | + | mm | - | int | - | - | - | 8 | - | Leckage Wert hinten rechts |

### ARG_0XDC11

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NIVEAU_WERT | 0-n | - | unsigned int | - | TAB_EHC_VEHICLE_HEIGHT | - | - | - | - | - | Werte gemäß Tabelle TAB_EHC_VEHICLE_HEIGHT 0x0002 = Tiefnevieau; 0x0008 = Standardniveau; 0x0010 = Hochniveau; |

### TAB_EHC_VEHICLE_HEIGHT

| WERT | TEXT |
| --- | --- |
| 0x0002 | Tiefniveau |
| 0x0008 | Standardniveau |
| 0x0010 | Hochniveau |

### RES_0XDC0F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REF_WERT | - | - | unsigned char | - | - | - | - | - | Status: Radentlastungsfunktion |

### ARG_0XDC0F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLOPTION_WERT | 0-n | - | unsigned char | - | TAB_EHC_REF | - | - | - | - | - | Steuern: Radentlastungsfunktion (REF) 0x00 = Deaktivierung REF 0x01 = Aktivierung REF Platten hinten rechts 0x02 = Aktivierung REF Platten hinten links 0x03 = Aktivierung REF Platten vorne rechts 0x04 = Aktivierung REF Platten vorne links |

### TAB_EHC_REF

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktivierung REF |
| 0x01 | Aktivierung REF Platten HR |
| 0x02 | Aktivierung REF Platten HL |
| 0x03 | Aktivierung REF Platten VR |
| 0x04 | Aktivierung REF Platten VL |
