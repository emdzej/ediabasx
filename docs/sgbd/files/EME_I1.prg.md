# EME_I1.prg

## General

|  |  |
| --- | --- |
| File | EME_I1.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 120 |
| Origin | BMW EA-412 Flach |
| Revision | 1.001 |
| Author | MicroNovaAG EA-412 Flach |
| ECU Comment | AE [2] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antriebselektronik |  |  |
| ORIGIN | string | BMW EA-412 Flach |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | MicroNovaAG EA-412 Flach |  |  |
| COMMENT | string | AE [2] |  |  |
| PACKAGE | string | 1.25 |  |  |
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

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### STATUS_MONTAGEMODUS

0x3103F043 STATUS_MONTAGEMODUS Auslesen Montage-Modus

_No arguments._

### _STATUS_BUILD_ID

Gibt die Software-Id zurück (EntwicklerJob)

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3102F043 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STEUERN_MONTAGEMODUS

0x3101F043 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus.

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
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
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
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
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
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5B00 | Zentralinstrument | - |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
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
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semiconductor GmbH |
| 0x0070 | Alfmeier AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0x0073 | ebm-papst St. Georgen GmbH&Co. KG |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021A00 | Energiesparmode aktiv | 0 |
| 0x02FF1A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x21EA00 | interner Fehler, Ebene3, ROM-Fehler mc0 | 0 |
| 0x21EA01 | interner Fehler, Ebene3, RAM-Fehler mc0 | 0 |
| 0x21EA02 | interner Fehler, Ebene3, Stack-Fehler mc0 | 0 |
| 0x21EA06 | interner Fehler, FZM: Systemzustand unplausibel | 0 |
| 0x21EA09 | Parksperre, Sensor: Signal 1 Kurzschluss nach Masse | 0 |
| 0x21EA0A | Parksperre, Sensor: Signal 1 Kurzschluss nach Plus | 0 |
| 0x21EA0B | Parksperre, Sensor: Signal 2 Kurzschluss nach Masse | 0 |
| 0x21EA0C | Parksperre, Sensor: Signal 2 Kurzschluss nach Plus | 0 |
| 0x21EA0D | Parksperre, Sensor: Sensoren inkonsistent | 0 |
| 0x21EA0E | Parksprerre, HB-Spannung: nicht im zulässigen Bereich | 0 |
| 0x21EA10 | Parksprerre, Aktuator: Maximalstromüberwachung | 0 |
| 0x21EA11 | Parksperre, Aktuator: PS-Position in der zulässigen Zeit nicht erreicht | 0 |
| 0x21EA12 | Parksperre, Aktuator: keine Änderung der PS-Position | 0 |
| 0x21EA13 | Parksperre, Aktuator: angeforderte Position konnte nicht erreicht werden | 0 |
| 0x21EA14 | Parksperre, Init: Keine Daten für PS offen/geschlossen im NV-Ram vorhanden | 0 |
| 0x21EA15 | Parksperre, EWS: Abgleich nicht erfolgreich | 0 |
| 0x21EA16 | interner Fehler, Ebene3, Doppelablage-Fehler mc0 | 0 |
| 0x21EA17 | interner Fehler, Ebene3, Interner ADC-Fehler mc0 | 0 |
| 0x21EA19 | interner Fehler, Ebene3, Programablauf-Fehler mc0 | 0 |
| 0x21EA1A | ELUP, Sensor: Unterdrucksensor elektrischer Fehler | 0 |
| 0x21EA1B | ELUP, Aktuator: keine Gegeninduktion | 0 |
| 0x21EA1C | ELUP, Aktuator: Kurzschluss nach Plus | 0 |
| 0x21EA1D | ELUP, Aktuator: Kurzschluss nach Masse | 0 |
| 0x21EA1E | ELUP, Aktuator: Unterbrechung oder nicht angesteckt | 0 |
| 0x21EA1F | ELUP, Treiber: Strom zu hoch | 0 |
| 0x21EA20 | ELUP, Treiber: Schaltet nicht durch | 0 |
| 0x21EA21 | ELUP, Treiber: Temperatur zu hoch | 0 |
| 0x21EA22 | ELUP, Sensor: Temperatur Sensor defekt | 0 |
| 0x21EA23 | interner Fehler, Ebene3, Konfigregister-Fehler mc0 | 0 |
| 0x21EA24 | interner Fehler, Ebene3, Ebene2Prime-Fehler mc0 | 0 |
| 0x21EA25 | interner Fehler, Ebene3, Externer Watchdog-Fehler mc0 | 0 |
| 0x21EA27 | Interner Fehler, Montagemodus aktiv | 0 |
| 0x21EA28 | Parksperre, FUSI: Ebene1/Ebene2 Fehler | 0 |
| 0x21EA29 | FUSI, Längsdynamik: Quadrantenplausibilisierung | 0 |
| 0x21EA60 | DCDC, Messwertüberprüfung, Fataler Fehler in Messwerterfassung U_LV | 0 |
| 0x21EA61 | DCDC, Messwertüberprüfung, Fataler Fehler in Messwerterfassung I_LV | 0 |
| 0x21EA62 | DCDC, Messwertüberprüfung, Fehler in Messwerterfassung_Notlauf möglich | 0 |
| 0x21EA6B | DCDC, ProtectionHandler, Strom auf LV-Seite zu hoch | 0 |
| 0x21EA6E | DCDC, ProtectionHandler, Spannung auf LV-Seite zu hoch | 0 |
| 0x21EA71 | DCDC, Überwachung, Spannung auf HV-Seite zu hoch | 0 |
| 0x21EA72 | DCDC, Überwachung, Spannung auf HV-Seite zu niedrig | 0 |
| 0x21EA76 | DCDC, Überwachung, Fehler Masseanbindung_Notlauf | 0 |
| 0x21EA77 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Klemme 30C | 0 |
| 0x21EA78 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC0 | 0 |
| 0x21EA79 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: CY320 MC2 | 0 |
| 0x21EA95 | interner Fehler, Ebene3, ROM-Fehler mc2 | 0 |
| 0x21EA96 | interner Fehler, Ebene3, RAM-Fehler mc2 | 0 |
| 0x21EA97 | interner Fehler, Ebene3, Stack-Fehler mc2 | 0 |
| 0x21EA98 | interner Fehler, Ebene3, Doppelablage-Fehler mc2 | 0 |
| 0x21EA99 | interner Fehler, Ebene3, Interner ADC-Fehler mc2 | 0 |
| 0x21EA9B | interner Fehler, Ebene3, Programablauf-Fehler mc2 | 0 |
| 0x21EA9C | interner Fehler, Ebene3, Konfigregister-Fehler mc2 | 0 |
| 0x21EA9D | interner Fehler, Ebene3, Ebene2Prime-Fehler mc2 | 0 |
| 0x21EA9E | interner Fehler, Ebene3, Externer Watchdog-Fehler mc2 | 0 |
| 0x21EA9F | interner Fehler, FUSI, Abschaltpfadtest-Fehler mc2 | 0 |
| 0x21EAA1 | Sensorfehler, Messwerterfassung, Winkelgeber/Drehzahlgeber defekt | 0 |
| 0x21EAAE | interner Fehler, AEPH, Zwischenkreisspannung oberen Grenzwert überschritten | 0 |
| 0x21EAAF | interner Fehler, AEPH, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 |
| 0x21EAB2 | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung oberen Grenzwert überschritten | 0 |
| 0x21EAB3 | interner Fehler, AEPH, Gatetreiber Zwischenkreisspannung unteren Grenzwert unterschritten | 0 |
| 0x21EAB4 | interner Fehler, AEPH, Interne 12V-Versorgungsspannung oberen Grenzwert überschritten | 0 |
| 0x21EAB5 | interner Fehler, AEPH, Interne 12V-Versorgungsspannung unteren Grenzwert unterschritten | 0 |
| 0x21EAB6 | interner Fehler, AEPH, Interne 5V-Spannung vom CY320_MC0 oberen Grenzwert überschritten | 0 |
| 0x21EAB7 | interner Fehler, AEPH, Interne 5V-Spannung vom CY320_MC0 unteren Grenzwert unterschritten | 0 |
| 0x21EAB8 | interner Fehler, AEPH, Interne 3V3-Spannung vom CY320_MC0 oberen Grenzwert überschritten | 0 |
| 0x21EAB9 | interner Fehler, AEPH, Interne 3V3-Spannung vom CY320_MC0 unteren Grenzwert unterschritten | 0 |
| 0x21EABA | interner Fehler, AEPH, Interne 1V5-Spannung vom CY320_MC0 oberen Grenzwert überschritten | 0 |
| 0x21EABB | interner Fehler, AEPH, Interne 1V5-Spannung vom CY320_MC0 unteren Grenzwert unterschritten | 0 |
| 0x21EABC | interner Fehler, AEPH, Interne 5V-Spannung vom CY320_MC2 oberen Grenzwert überschritten | 0 |
| 0x21EABD | interner Fehler, AEPH, Interne 5V-Spannung vom CY320_MC2 unteren Grenzwert unterschritten | 0 |
| 0x21EABE | interner Fehler, AEPH, interne 3V3-Spannung vom CY320_MC2 oberen Grenzwert überschritten | 0 |
| 0x21EABF | interner Fehler, AEPH, Interne 3V3-Spannung vom CY320_MC2 unteren Grenzwert unterschritten | 0 |
| 0x21EAC0 | interner Fehler, AEPH, Interne 1V5-Spannung vom CY320_MC2 oberen Grenzwert überschritten | 0 |
| 0x21EAC1 | interner Fehler, AEPH, Interne 1V5-Spannung vom CY320_MC2 unteren Grenzwert unterschritten | 0 |
| 0x21EADA | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC0 oberen Grenzwert überschritten | 0 |
| 0x21EADB | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC0 unteren Grenzwert unterschritten | 0 |
| 0x21EAE0 | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC2 oberen Grenzwert überschritten | 0 |
| 0x21EAE1 | interner Fehler, AEPH, Temperatur auf dem Digitalbord am 320_MC2 unteren Grenzwert unterschritten | 0 |
| 0x21EAE6 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC0 oberen Grenzwert überschritten | 0 |
| 0x21EAE7 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC0 unteren Grenzwert unterschritten | 0 |
| 0x21EAE8 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 oberen Grenzwert überschritten | 0 |
| 0x21EAE9 | interner Fehler, AEPH, Temperatur über internen Temperatursensor des MC2 unteren Grenzwert unterschritten | 0 |
| 0x21EAF0 | EME, Plausibilisierung der Reglerspannungen | 0 |
| 0x21EAF1 | EME, Hochvoltzwischenkreis: Spannungsgrenze Speicher überschritten | 0 |
| 0x21EAF2 | EME, Hochvoltzwischenkreis: Spannungsgrenze Speicher unterschritten | 0 |
| 0x21EAF3 | EME, Hochvoltzwischenkreis: Lade-Stromgrenze Speicher überschritten | 0 |
| 0x21EAF4 | EME, Hochvoltzwischenkreis: Entlade-Stromgrenze Speicher überschritten | 0 |
| 0x21EAF5 | EME, interner Fehler, Momentenpfad: Abweichung Sollmoment Fehler | 0 |
| 0x21EAF6 | EME, Versorgungsspannung, Wertebereichsverletzung: Unterspannung 12V-Versorgung | 0 |
| 0x21EAF7 | Sensorfehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 1 Kurzschluss zu GND | 0 |
| 0x21EAF8 | Sensorfehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 1 Kurzschluss zu UBAT | 0 |
| 0x21EAF9 | Sensorfehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 2 Kurzschluss zu GND | 0 |
| 0x21EAFA | Sensorfehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 2 Kurzschluss zu UBAT | 0 |
| 0x21EAFB | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 Kurzschluss zu GND | 0 |
| 0x21EAFC | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 Kurzschluss zu UBAT | 0 |
| 0x21EAFD | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 Kurzschluss zu GND | 0 |
| 0x21EAFE | Sensorfehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 Kurzschluss zu UBAT | 0 |
| 0x21EAFF | Sensorfehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal Kurzschluss zu GND | 0 |
| 0x21EB00 | Sensorfehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal Kurzschluss zu UBAT | 0 |
| 0x21EB03 | DCDC, Hardware, Bauteilschutz, Unplausibler DutyCycle in Tiefsetzsteller 1 | 0 |
| 0x21EB04 | DCDC, Hardware, Bauteilschutz, Unplausibler DutyCycle in Tiefsetzsteller 2 | 0 |
| 0x21EB05 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Spannung | 0 |
| 0x21EB06 | DCDC, Hardware, Bauteilschutz, Überschreitung max. LV-Strom | 0 |
| 0x21EB07 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 1 | 0 |
| 0x21EB08 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom in Tiefsetzsteller Phase 2 | 0 |
| 0x21EB09 | DCDC, Hardware, Bauteilschutz, Überschreitung max. Grenzspannung am Tiefsetzstellerausgang | 0 |
| 0x21EB0A | DCDC, Hardware, Bauteilschutz, Überschreitung max. Peak-Strom im Resonanzkreis | 0 |
| 0x21EB0B | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Tiefsetzstellers | 0 |
| 0x21EB0C | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gegentaktwandlers | 0 |
| 0x21EB0D | DCDC, Hardware, Bauteilschutz, Überschreitung max. Temperatur am Kühlkörper des Gleichrichters | 0 |
| 0x21EB0E | DCDC, Hardware, Bauteilschutz, Überschreitung der max. Board-Temperatur | 0 |
| 0x21EB0F | DCDC, Hardware, Bauteilschutz, Unplausibler Wirkungsgrad | 0 |
| 0x21EB10 | DCDC, Überwachung, Fehler HW-Regler, Sollwerte werden nicht eingeregelt | 0 |
| 0x21EB11 | DCDC, Hardware, Bauteilschutz, Unplausibles Übersetzungsverhältnis GTW | 0 |
| 0x21EB12 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS1 | 0 |
| 0x21EB13 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter TS2 | 0 |
| 0x21EB14 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS1 | 0 |
| 0x21EB15 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Diode TS2 | 0 |
| 0x21EB16 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS1 | 0 |
| 0x21EB17 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW HS2 | 0 |
| 0x21EB18 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS1 | 0 |
| 0x21EB19 | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GTW LS2 | 0 |
| 0x21EB1A | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp GR1 | 0 |
| 0x21EB1B | DCDC, Hardware, Bauteilschutz, Thermalmodel, JunctionTemp Schalter GR2 | 0 |
| 0x21EB1C | DCDC, Hardware, Bauteilschutz, Unplausibler Resonanzstrom | 0 |
| 0x21EB2A | EME durch EWS gesperrt | 0 |
| 0x21EB2B | Interner Fehler, Messwerterfassung, interner Sensor defekt MC0 | 0 |
| 0x21EB2C | Interner Fehler, Messwerterfassung, interner Sensor defekt MC2 | 0 |
| 0x21EB2D | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC0 | 0 |
| 0x21EB2E | Messwerterfassung, Hardwarekalibrationswerte, eine bzw. mehrere Werte fehlen auf dem MC2 | 0 |
| 0x21EB2F | DCDC, SPI Kommunikation, DCDC- nach Controller-Board fehlerhaft | 0 |
| 0x21EB30 | DCDC, SPI Kommunikation, Controller- nach DCDC-Board fehlerhaft | 0 |
| 0x21EB31 | SLE, SPI Kommunikation, Lader- nach Controller-Board fehlerhaft | 0 |
| 0x21EB32 | SLE, SPI Kommunikation, Controller- nach Lader-Board fehlerhaft | 0 |
| 0x21EB33 | interner Fehler, FUSI, aktive Entladung-Fehler | 0 |
| 0x21EB34 | Qualfierueberwachung, Signalausfall CAN von eDME | 0 |
| 0x21EB35 | Qualfierueberwachung, Signalausfall CAN von SME | 0 |
| 0x21EB36 | Qualfierueberwachung, Signalausfall Intern | 0 |
| 0x21EB37 | Qualfierueberwachung, Signalausfall Resolver | 0 |
| 0x21EB38 | Parksperre, Strommittelwert Kabel PS-Aktuator zu hoch | 0 |
| 0x21EB3B | HW-AKS aktiv, Angefordert durch FUSI, BTS oder Hardwareschaltung | 1 |
| 0x21EB3C | HW-Freilauf aktiv, Angefordert durch FUSI, BTS oder Hardwareschaltung | 1 |
| 0x21EB3D | interne Fehler, Inkompatibilität zwischen TriCore/PIC Softwareversionen | 0 |
| 0x21EB3E | E-Maschine Resolverabgleich nicht durchgeführt oder Rotorlagesensor-Offset nicht im Toleranzband. | 0 |
| 0x21EB40 | Interner Fehler, HVIL, KS Ausgang gegen Masse oder KS Eingang gegen B+ | 0 |
| 0x21EB41 | Interner Fehler, HVIL, KS Ausgang gegen B+ oder KS Eingang gegen Masse | 0 |
| 0x21EB42 | Interner Fehler, HVIL, Kurzschluss Eingang gegen Ausgang oder Leitung offen | 0 |
| 0x21EB43 | Interner Fehler, HVIL, fehlerhaftes Signal | 0 |
| 0x21EB44 | DCDC, Hardware, Bauteilschutz, GateTreiberVersorgung | 0 |
| 0x21EB45 | Inverter, Temperatur ungültig, nicht kompensierbar | 0 |
| 0x21EB46 | Inverter, Temperatur ungültig, kompensierbar | 0 |
| 0x21EB47 | Inverter, Dauerhafte Übertemperatur IGBT/Diode | 0 |
| 0x21EB48 | Inverter, Erhöhte Temperaturspreizung Platine zu IGBT/Diode | 0 |
| 0x21EB49 | Inverter, Dauerhafte Übertemperatur NTC | 0 |
| 0x21EB4A | Inverter, Dauerhafte Übertemperatur Kühlmittel | 0 |
| 0x21EB5C | Interner Fehler, Freilauf Modus aktiv | 0 |
| 0x21EB5D | Interner Fehler, Freilauf Modus und 6km/h überschritten | 0 |
| 0x21EB5E | FUSI, Radblockiererkennung: Anforderung AKS aktiv | 0 |
| 0x21EB5F | Leistungselektronik Pulswechselrichter, Stromregler verhindert Betrieb | 0 |
| 0x21EB62 | FUSI, Nullmomentenplausibilisierung aktiv | 0 |
| 0x21EB63 | Inverter, Fehlerhafter positiver Id-Strom erkannt | 0 |
| 0x21EB64 | Inverter, DC Überstrom erkannt | 0 |
| 0x21EB65 | Interner Fehler, Reset auf MC0 | 0 |
| 0x21EB66 | Interner Fehler, Reset auf MC2 | 0 |
| 0x21EB67 | DCDC, Bauteilschutz, Überspannung U_LV redundante Messung | 0 |
| 0x21EB68 | DCDC, Bauteilschutz, Überstrom I_LV redundante Messung | 0 |
| 0x21EB69 | interner Fehler, AEPH, Temperatur auf dem Digitalboard, Boardmitte oberen Grenzwert überschritten | 0 |
| 0x21EB6A | interner Fehler, AEPH, Temperatur auf dem Digitalboard, Boardmitte unteren Grenzwert unterschritten | 0 |
| 0x21EB6B | interner Fehler, HVSM, Zwischenkreisspannung oberen Grenzwert überschritten | 0 |
| 0x21EB6C | interner Fehler, HVSM, Zwischenkreisspannung unteren Grenzwert unterschritten | 0 |
| 0x21EB6D | FUSI, CPLD AKS Anforderung, CPLD FuSi/BTS Sammelfehler | 0 |
| 0x21EB6E | Funktionssicherheitsmanager, DCDC Gleichrichterabschaltung, Rückmeldung unplausibel | 0 |
| 0x21EB6F | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC0 | 0 |
| 0x21EB70 | Messwerterfassung, Hardwarekalibrationswerte, CRC Fehler MC2 | 0 |
| 0x21EB71 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Hardwarepin | 0 |
| 0x21EB72 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Crash Airbag SG MRS5 | 0 |
| 0x21EB73 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: Dual Port RAM defekt | 0 |
| 0x21EB74 | Hochvoltsicherheitsmanager, HW AKS aktiv, Anforderer: eDME | 0 |
| 0x21EB77 | DCDC, Unzulässige MC6 Software Version | 0 |
| 0x21EB78 | Inverter, Dauerhafte Übertemperatur am Gatetrieber | 0 |
| 0x21EB79 | Inverter, Übertragener Kühlmittelvolumenstrom unterhalb zulässiger Schwelle | 0 |
| 0x21EB7A | Resolver, Fehler Plausibilisierung Winkel | 0 |
| 0x21EE80 | EME, Stromplausibilisierung der drei Phasen: Summe der Phasenströme außerhalb des erlaubten Bereichs | 0 |
| 0x21EEC5 | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung : Untere Schwelle | 0 |
| 0x21EEC6 | Externer Temperatursensor E-Maschine Signal Wertebereichsverletzung: Obere Schwelle | 0 |
| 0x21EF09 | Interne EME-Temperatur Leistungselektronik Pulswechselrichter: Obere Temperaturschwelle überschritten | 0 |
| 0x21EF10 | EME, Stromsensor Phase U: Überstrom oder Sensor defekt | 0 |
| 0x21EF18 | EME, Stromsemnsor Phase V: Überstrom oder Sensor defekt | 0 |
| 0x21EF20 | EME, Stromsemnsor Phase W: Überstrom oder Sensor defekt | 0 |
| 0x21EF41 | EME, E-Maschinenregelung, E-Maschine: Temperatur über 1. Schwelle | 0 |
| 0x21EF42 | EME, E-Maschinenregelung, E-Maschine: Temperatur über 2. Schwelle | 0 |
| 0x21EF43 | EME, E-Maschinenregelung, E-Maschine: Überdrehzahl erkannt | 0 |
| 0xCF8486 | A-CAN Control Module Bus OFF | 0 |
| 0xCF8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xCF9402 | A-CAN, Botschaft ausgefallenl DEGR_MOT_TRCT | 1 |
| 0xCF9403 | A-CAN, Botschaft ausgefallenl ENERG_COSP_ERR_ST_KLE | 1 |
| 0xCF9404 | A-CAN, Botschaft ausgefallen KLEMMEN | 1 |
| 0xCF9405 | A-CAN, Botschaft ausgefallen LIM_CHG_DCHG_HVSTO | 1 |
| 0xCF9406 | A-CAN, Botschaft ausgefallen LIM_KLE | 1 |
| 0xCF9407 | A-CAN, Botschaft ausgefallen ST_CHG_HVSTO_3 | 1 |
| 0xCF940D | A-CAN, Botschaft ausgefallen SPEC_CHGE | 1 |
| 0xCF940E | A-CAN, Botschaft ausgefallen SPEC_DCDC_CNV | 1 |
| 0xCF940F | A-CAN, Botschaft ausgefallen SPEC_ELUP | 1 |
| 0xCF9410 | A-CAN, Botschaft ausgefallen SPEC_MOM_PRET | 1 |
| 0xCF9411 | A-CAN, Botschaft ausgefallen SPEC_MOT_TRCT | 1 |
| 0xCF9412 | A-CAN, Botschaft ausgefallen SPEC_PLK | 1 |
| 0xCF9413 | A-CAN, Botschaft ausgefallen ST_HYB_2 | 1 |
| 0xCF9414 | A-CAN, Botschaft ausgefallen STAT_HVSTO_2 | 1 |
| 0xCF9415 | A-CAN, Botschaft ausgefallen AVL_DT_KLE | 1 |
| 0xCF9416 | A-CAN, Botschaft ausgefallen AVL_DT_KLE_LT | 1 |
| 0xCF9417 | A-CAN, CRC Fehler SPEC_ELUP | 1 |
| 0xCF9418 | A-CAN, Alive-Counter Fehler SPEC_ELUP | 1 |
| 0xCF9419 | A-CAN, CRC Fehler, SPEC_MOT_TRCT | 1 |
| 0xCF941A | A-CAN, Alive-Counter Fehler SPEC-MOT_TRCT | 1 |
| 0xCF941B | A-CAN, CRC Fehler SPEC_PLK | 1 |
| 0xCF941C | A-CAN, Alive-Counter Fehler SPEC_PLK | 1 |
| 0xCF941D | A-CAN, CAN_Signal ungültig RQ_ELUP, Botschaft ELUP_SPEC | 1 |
| 0xCF941E | A-CAN, Botschaft ausgefallen AVL_RPM_WHL_UPRT | 1 |
| 0xCF941F | A-CAN, Botschaft ausgefallen CTR_CRASH_SWO_EKP | 1 |
| 0xCF9420 | A-CAN, Botschaft ausgefallen FZZSTD | 1 |
| 0xCF9421 | A-CAN, Botschaft ausgefallen KILOMETERSTAND | 1 |
| 0xCF9422 | A-CAN, Botschaft ausgefallen RELATIVZEIT | 1 |
| 0xCF9423 | A-CAN, Botschaft ausgefallen V_VEH | 1 |
| 0xCF9424 | A-CAN, CRC Fehler V_VEH | 1 |
| 0xCF9425 | A-CAN, Alive-Counter Fehler V_VEH | 1 |
| 0xCF9426 | A-CAN, Botschaft ausgefallen FAHRGESTELLNUMMER | 1 |
| 0xCF9427 | A-CAN, Botschaft ausgefallen DT_SME_S1 | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### DTCBEREICHE

| DTC-TYP | MINIMALWERT | MAXIMALWERT | BESCHREIBUNG |
| --- | --- | --- | --- |
| AllgemeinerDTC | 020000 | 02FFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| SystembusDTC | CF8487 | CF848F | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF8473 | CF847C | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF841F | CF843E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF843F | CF8449 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF840B | CF8414 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF8469 | CF8472 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930000 | 930011 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF847D | CF8486 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF8415 | CF841E | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF8501 | CF850A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF8401 | CF840A | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | 930030 | 930055 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF845F | CF8468 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SystembusDTC | CF850B | CF8514 | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SubbusDTC | CF8C00 | CF93FF | Zulässiger Bereich wird mittels Formel berechnet. Enthält physikalische Fehler bzw. Protokollfehler des Systembusses. |
| SignalDTC | CF8BFF | CF8BFF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CF9400 | CFC3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| SignalDTC | CF9400 | CFC3FF | Ist aus einem vorgegebenen Offset-Bereich frei wählbar. Enthält Signalfehler, die SG-spezifisch sind. |
| KomponentenDTC | 21EE00 | 21EFFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |
| KomponentenDTC | 21EA00 | 21EBFF | Die zulässigen Bereiche sind für jedes Steuergerät festgelegt. Es können mehrere gültige Bereiche (Kacheln) definiert werden. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | UBAT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4100 | UWB_AE_EM_DREHZAL | 1/min | High | unsigned int | - | 0.5 | 1.0 | 20000.0 |
| 0x4101 | UWB_AE_PS_AKTUELLER_BEFEHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | UWB_AE_PS_STROM_HBRUECKE | mA | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4103 | UWB_AE_PS_POS_SENS1 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4104 | UWB_AE_PS_POS_SENS2 | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4105 | UWB_AE_PS_SPG_SENS1 | mV | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x4107 | UWB_AE_EM_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4108 | UWB_AE_INV_TEMP_U | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x4109 | UWB_AE_INV_TEMP_V | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410A | UWB_AE_INV_TEMP_W | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x410B | UWB_AE_EM_MD_SOLL | Nm | High | unsigned int | - | 0.5 | 1.0 | -1023.5 |
| 0x410C | UWB_AE_SPI_RDC_FAULT | HEX | High | unsigned char | - | - | - | - |
| 0x410D | UWB_AE_STAT_RESOLVER | HEX | High | unsigned char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x1A0005 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase W fehlerhaft | 0 |
| 0x1A0038 | Interner Fehler, Messwerterfassung, Sensor: Rückmessung interne 32V fehlerhaft | 0 |
| 0x1A0077 | Ebene2 Fehler PS, PS-Positionsänderung ohne gültiges PS-Kommando | 0 |
| 0x1A0003 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase U fehlerhaft | 0 |
| 0x1A001A | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W (redundant) fehlerhaft | 0 |
| 0x1A004B | Interner Fehler, Messwerterfassung, Sensor: Spannung Ausgang  PFC Stufe fehlerhaft | 0 |
| 0x1A0007 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Gatedriver Phase V fehlerhaft | 0 |
| 0x1A0013 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC0 fehlerhaft | 0 |
| 0x1A0049 | Interner Fehler, Messwerterfassung, Sensor: SLE Eingangsspannung fehlerhaft | 0 |
| 0x1A002E | Interner Fehler, Messwerterfassung, Sensor: Strommessung Parksperre Halbbrücke 1 fehlerhaft | 0 |
| 0x002712 | CODING_EVENT_TRANSACTION_FAILED | 0 |
| 0x1A006D | Ebene2 Fehler PS, Sensor-Auswertung E1/E2 unterschiedlich | 0 |
| 0x1A0041 | Interner Fehler, Messwerterfassung, Sensor: Temperatur SLE Gegentaktwandler fehlerhaft | 0 |
| 0x1A0075 | Ebene2 Fehler PS, Unbekannter Zustand Regler beim PS oeffnen | 0 |
| 0x1A001D | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 1 fehlerhaft | 0 |
| 0x002001 | NVM_E_WRITE_FAILED | 0 |
| 0x1A0062 | CPLD AKS Anforderung mit Signal I_S_CPLD_SPARE_1 | 0 |
| 0x1A0058 | Zwischenkreis Brückenkurzschluss über CPLD ermittelt | 0 |
| 0x1A0046 | Interner Fehler, Messwerterfassung, Sensor: SLE PFC-Summenstrom fehlerhaft | 0 |
| 0xC90402 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x1A001B | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Inverter fehlerhaft | 0 |
| 0x1A0004 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Phase V fehlerhaft | 0 |
| 0x1A0017 | Interner Fehler, Messwerterfassung, Sensor: Zwischenkreisspannung fehlerhaft | 0 |
| 0xC90401 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x1A0053 | FUSI, Radblockiererkennung: Anforderung 0 Nm aktiv | 0 |
| 0x1A004E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Pic nicht verbunden | 0 |
| 0x1A002C | Interner Fehler, Messwerterfassung, Sensor: Rückmessung Spannungsversorgung Pedalwergeber1 fehlerhaft | 0 |
| 0x1A0011 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 12V Klemme 30B fehlerhaft | 0 |
| 0x1A0014 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC0 fehlerhaft | 0 |
| 0x1A002F | Interner Fehler, Messwerterfassung, Sensor: Strommessung Parksperre Halbbrücke 2 fehlerhaft | 0 |
| 0x1A003D | Interner Fehler, Messwerterfassung, Sensor: CPLD Version fehlerhaft | 0 |
| 0x1A005B | CPLD AKS Anforderung mit Signal /I_S_AKS_REQ_MC0 | 0 |
| 0x1A001F | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung DC/DC fehlerhaft | 0 |
| 0x1A004F | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 1 Trafo fehlerhaft | 0 |
| 0x1A004C | Interner Fehler, Messwerterfassung, Sensor: SLE Gatetreiber Spannung fehlerhaft | 0 |
| 0x1A0055 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung2 Niedervoltseite fehlerhaft | 0 |
| 0x1A0070 | Ebene2 Fehler PS, Timeout Positionsverstellung | 0 |
| 0x1A0050 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom 2 Trafo fehlerhaft | 0 |
| 0x1A0060 | CPLD AKS Anforderung mit Signal /MC2_VOLT_FAIL | 0 |
| 0x1A004A | Interner Fehler, Messwerterfassung, Sensor: SLE Zwischenkreisspannung fehlerhaft | 0 |
| 0x1A0064 | Qualifierueberwachung, CAN von eDME, Signalausfall 2 | 0 |
| 0x1A0035 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC2 fehlerhaft | 0 |
| 0x1A0008 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Gatedriver Phase W fehlerhaft | 0 |
| 0x1A0048 | Interner Fehler, Messwerterfassung, Sensor: SLE Summenstrom Trafo fehlerhaft | 0 |
| 0x1A0039 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Digitalboard CY320_MC0 fehlerhaft | 0 |
| 0x1A0020 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gegentaktwandler fehlerhaft | 0 |
| 0x1A0018 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U (redundant) fehlerhaft | 0 |
| 0x1A0015 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Digitalboard CY320_MC2 fehlerhaft | 0 |
| 0x1A0042 | Interner Fehler, Messwerterfassung, Sensor: Temperatur SLE Gleichrichter fehlerhaft | 0 |
| 0x001001 | Signal (Zeit_Sekunde_Zaehler_Relativ, 0x328): ungültig | 1 |
| 0x002711 | CODING_EVENT_NOT_CODED | 0 |
| 0x002004 | NVM_E_ERASE_FAILED | 0 |
| 0x1A0030 | Interner Fehler, Messwerterfassung, Sensor: Stromrückmessung Parksperrenaktuator Ansteuerung fehlerhaft | 0 |
| 0x1A0047 | Interner Fehler, Messwerterfassung, Sensor: verstärkter SLE PFC-Summenstrom fehlerhaft | 0 |
| 0x1A0067 | Qualifierueberwachung, CAN von SME, Signalausfall 1 | 0 |
| 0x1A0019 | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V (redundant) fehlerhaft | 0 |
| 0x1A0066 | Qualifierueberwachung, CAN von eDME, Signalausfall 4 | 0 |
| 0x1A000C | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase V fehlerhaft | 0 |
| 0x1A006E | Ebene2 Fehler PS, Strom Aktuator in Ruhe zu hoch | 0 |
| 0x1A0036 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 3.3V CY320_MC2 fehlerhaft | 0 |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x1A005D | CPLD AKS Anforderung mit Signal I_S_KL30C, Eingangssignal vom Einganspin der AE | 0 |
| 0x1A000E | Interner Fehler, Messwerterfassung, Sensor: Versorgungsspannung Inverter Gatetreiber Phase U fehlerhaft | 0 |
| 0x1A0009 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Mux_Adc fehlerhaft | 0 |
| 0x1A0040 | Interner Fehler, Messwerterfassung, Sensor: Temperatur SLE Board fehlerhaft | 0 |
| 0x1A0032 | Interner Fehler, Messwerterfassung, Sensor: Stromsignal der elektrischen Unterdruckpumpe fehlerhaft | 0 |
| 0x1A0071 | Ebene2 Fehler PS, Timeout Init 10ms-Task E1 | 0 |
| 0x002002 | NVM_E_READ_FAILED | 0 |
| 0x1A006C | Ebene2 Fehler PS, EWS-Auswertung E1/E2 unterschiedlich | 0 |
| 0x1A0006 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Inverter Gatedriver Phase U fehlerhaft | 0 |
| 0x002714 | CODING_EVENT_WRONG_VEHICLE | 0 |
| 0x1A0052 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Zwischenkreisspannung fehlerhaft | 0 |
| 0x1A003E | Interner Fehler, Messwerterfassung, Sensor: Temperatur 2 ELUP Endstufe fehlerhaft | 0 |
| 0x1A001C | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Steuer-/Ladeelektronik fehlerhaft | 0 |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x1A006B | Ebene2 Fehler PS, Command-Auswertung E1/E2 unterschiedlich | 0 |
| 0x1A0031 | Interner Fehler, Messwerterfassung, Sensor: Bremsunterdrucksensorsignal fehlerhaft | 0 |
| 0x1A0025 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom auf der Niedervoltseite fehlerhaft | 0 |
| 0x1A0016 | Interner Fehler, Messwerterfassung, Sensor: Temperatur Phasenstromsensoren Temperaturkompensation des gemessenen Stroms MC2 fehlerhaft | 0 |
| 0x1A006A | Qualifierueberwachung, CAN von SME, Signalausfall 4 | 0 |
| 0x1A0057 | Zwischenkreisspannung, Überspannung über CPLD ermittelt | 0 |
| 0x1A002B | Interner Fehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 2 fehlerhaft | 0 |
| 0x1A0010 | Interner Fehler, Messwerterfassung, Sensor: Versorgungsspannung Inverter Gatetreiber Phase W fehlerhaft | 0 |
| 0x1A001E | Interner Fehler, Messwerterfassung, Sensor: DC/DC Tiefsetzsteller-Strom 2 fehlerhaft | 0 |
| 0xE89400 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0x1A0061 | CPLD AKS Anforderung mit Signal /I_S_PHASE_OC_CPLD | 0 |
| 0x1A0074 | Ebene2 Fehler PS, Drehrichtung PS oeffnen falsch | 0 |
| 0x1A0002 | Interner Fehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 2 fehlerhaft | 0 |
| 0x1A0044 | Interner Fehler, Messwerterfassung, Sensor: SLE PFC-Strom 1 fehlerhaft | 0 |
| 0x1A002D | Interner Fehler, Messwerterfassung, Sensor: Rückmessung Spannungsversorgung Pedalwergeber2 fehlerhaft | 0 |
| 0x1A0012 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 5V CY320_MC0 fehlerhaft | 0 |
| 0x1A0024 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Spannung Niedervoltseite fehlerhaft | 0 |
| 0x1A0045 | Interner Fehler, Messwerterfassung, Sensor: SLE PFC-Strom 2 fehlerhaft | 0 |
| 0x1A003F | Interner Fehler, Messwerterfassung, Sensor: Temperatur Digitalboard fehlerhaft | 0 |
| 0x1A0034 | Interner Fehler, Messwerterfassung, Sensor: Temperatur ELUP Endstufe fehlerhaft | 0 |
| 0x1A0022 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Gleichrichter fehlerhaft | 0 |
| 0x1A0033 | Interner Fehler, Messwerterfassung, Sensor: analoges Messsignal Überwachung ELUP-Spannung fehlerhaft | 0 |
| 0x1A005E | CPLD AKS Anforderung mit Signal /I_S_AKS_REQ_MC2 | 0 |
| 0x1A006F | Ebene2 Fehler PS, 10ms-Task E1 nicht aktiv | 0 |
| 0x1A003C | Interner Fehler, Messwerterfassung, Sensor: Variantenerkennung Controllerboard fehlerhaft | 0 |
| 0x1A0001 | Interner Fehler, Messwerterfassung, Sensor: Messsignal Motortemperatur 1 fehlerhaft | 0 |
| 0x1A0021 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Tiefsetzsteller fehlerhaft | 0 |
| 0x1A0069 | Qualifierueberwachung, CAN von SME, Signalausfall 3 | 0 |
| 0x1A000F | Interner Fehler, Messwerterfassung, Sensor: Versorgungsspannung Inverter Gatetreiber Phase V fehlerhaft | 0 |
| 0x1A0059 | CPLD AKS Anforderung mit Signal /I_S_RST5_Cy0 | 0 |
| 0x1A005F | CPLD AKS Anforderung mit Signal I_S_INV_TEMP_CMP | 0 |
| 0x1A0063 | Qualifierueberwachung, CAN von eDME, Signalausfall 1 | 0 |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x1A005C | CPLD AKS Anforderung mit Signal /I_S_CRASH von ACSM und Auswerteschaltung | 0 |
| 0x1A0076 | Ebene2 Fehler PS, PWM im Ruhezustand > 0 | 0 |
| 0x1A000D | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase W fehlerhaft | 0 |
| 0x1A0029 | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang COS-Resolversignal | 0 |
| 0x1A0072 | Ebene2 Fehler PS, Drehrichtung PS schliessen falsch | 0 |
| 0x1A0043 | Interner Fehler, Messwerterfassung, Sensor: Temperatur SLE PFC fehlerhaft | 0 |
| 0x1A000B | Interner Fehler, Messwerterfassung, Sensor: Phasenstrom Inverter Phase U fehlerhaft | 0 |
| 0x1A0054 | Diagnose, AKS via Diagnosejob angefordert | 0 |
| 0x1A0027 | Interner Fehler, Messwerterfassung, Sensor: DC/DC Gatetreiber Spannung fehlerhaft | 0 |
| 0x1A005A | CPLD AKS Anforderung mit Signal /I_S_RST5_Cy2 | 0 |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 |
| 0x002713 | CODING_EVENT_SIGNATURE_ERROR | 0 |
| 0x1A0037 | Interner Fehler, Messwerterfassung, Sensor: Analogsignal Spannungsüberwachung interne 1.5V CY320_MC2 fehlerhaft | 0 |
| 0x1A0028 | Interner Fehler, Messwerterfassung, Sensor: analoger Messeingang SIN-Resolversignal fehlerhaft | 0 |
| 0x1A0073 | Ebene2 Fehler PS, Unbekannter Zustand Regler beim PS schliessen | 0 |
| 0x1A003A | Interner Fehler, Messwerterfassung, Sensor: Temperatur Phasenstromsensoren Temperaturkompensation des gemessenen Stroms MC0 fehlerhaft | 0 |
| 0x1A0065 | Qualifierueberwachung, CAN von eDME, Signalausfall 3 | 0 |
| 0x1A002A | Interner Fehler, Messwerterfassung, Sensor: Sensorsignal Pedalwertgeber 1 fehlerhaft | 0 |
| 0x1A004D | Interner Fehler, Messwerterfassung, Sensor: Steuer-/Ladeelektronik Pic nicht verbunden | 0 |
| 0x1A0051 | Interner Fehler, Messwerterfassung, Sensor: Ausgangsspannung DC/DC Tiefsetzsteller fehlerhaft | 0 |
| 0x002715 | CODING_EVENT_INVALID_DATA | 0 |
| 0x1A0068 | Qualifierueberwachung, CAN von SME, Signalausfall 2 | 0 |
| 0x1A0023 | Interner Fehler, Messwerterfassung, Sensor: Temperatur DC/DC Board fehlerhaft | 0 |
| 0x1A0056 | Interner Fehler, Messwerterfassung, Sensor: DC/DC-Strom2 auf der Niedervoltseite fehlerhaft | 0 |
| 0x1A000A | Interner Fehler, Messwerterfassung, Sensor: DC Strom Inverter fehlerhaft | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EME_AKS_EMK | 0xADF4 | - | E-Maschine in den AKS kommandieren: 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert | - | V_e_DcmAksReq | - | - | - | - | - | - | - | 31 | ARG_0xADF4 | RES_0xADF4 |
| AE_ROTORLAGESENSOR_ANLERNEN | 0xADF6 | - | Anlernen Rotorlagesensor (TA-EOL STEUERN) | - | V_e_Rls_stdiag | - | - | - | - | - | - | - | 31 | ARG_0xADF6 | RES_0xADF6 |
| AE_KLASSIERUNG | 0xADF8 | - | Auslesen der  Drehzahl/Drehmoment-Klassierungsdaten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF8 | RES_0xADF8 |
| AE_DCDC_HISTOGRAMM | 0xADF9 | - | Lesen des angeforderten Histogramm des DCDC-Wandlers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xADF9 | RES_0xADF9 |
| EME_DCDC_LV | 0xDDF6 | - | Spannung / Strom DCDC (12V Bordnetz) am B+ Bolzen | - | AVL_U_LV_DCDC_CNV | - | - | - | - | - | - | - | 22 | - | RES_0xDDF6 |
| EME_HVIL_GESAMT | 0xDE0C | STAT_HVIL_GESAMT_NR | Auslesen des HVIL-Zustandes in der EME; falls HVIL unterbrochen, dann n.i.O. | 0-n | V_e_HvilError | high | unsigned char | TAB_STAT_HVIL_GESAMT_NR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_CPLD_VERSION | 0xDE2D | STAT_CPLD_VERSION_WERT | CPLD-Version | - | V_e_CpldVersion | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_CHARGE_ENABLE | 0xDE71 | STAT_CHARGE_ENABLE_NR | Aussage über die Erteilung der Ladefreigabe | 0-n | ST_CHGNG_ENB | high | unsigned char | TAB_AE_CHARGE_ENABLE | - | - | - | - | 22 | - | - |
| AE_PARKSPERRE_SENSOREN | 0xDE74 | - | Status Sensoren der Parksperre | - | VaPS_StaSen1_CanTx | - | - | - | - | - | - | - | 22 | - | RES_0xDE74 |
| AE_HV_SPANNUNG_LESEN | 0xDE75 | - | Werte aller Zwischenkreisspannungen | - | V_U_SleZk | - | - | - | - | - | - | - | 22 | - | RES_0xDE75 |
| AE_PARKSPERRE_SW | 0xDE76 | STAT_PS_SW_NR | Status Parksperren Software | 0-n | VaPS_Quallifier_CanTx | high | unsigned char | TAB_AE_PARKSPERREN_SW | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_PARKSPERRE | 0xDE77 | - | Zustand Parksperre / Einlegen Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE77 | - |
| AE_PARKSPERRE_EINLERNEN | 0xDE78 | - | Parksperre / Einlernen Parksperre | - | removeJob2 | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE78 | RES_0xDE78 |
| AE_PARKSPERRE_POSITION | 0xDE79 | STAT_POSITION_PARKSPERRE_NR | Aktuelle Position der Parksperre | 0-n | removeJob3 | high | unsigned int | TAB_AE_PARKSPERRE_POSTION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_PARKSPERRE_POSITIONEN | 0xDE7A | - | Rückgabe angelernte Parksperrenpositionen | - | VaPS_PosGeschlossen | - | - | - | - | - | - | - | 22 | - | RES_0xDE7A |
| AE_PARKSPERRE_STROM | 0xDE7B | STAT_STROM_PARKSPERRE_WERT | Aktueller Strom Parksperrenaktuator | A | V_I_Psa | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_PARKSPERRE_SPANNUNGEN | 0xDE7C | - | Spannungen der Parksperre | - | VaPS_HB_Voltage | - | - | - | - | - | - | - | 22 | - | RES_0xDE7C |
| AE_ROHSIG_AUSGANG | 0xDE7D | - | Rohsignale Ausgangspins | - | V_DC_pbwHBModGrad_UE2 | - | - | - | - | - | - | - | 22 | - | RES_0xDE7D |
| AE_ROHSIG_EINGANG_SENS_ELUP_BUDS | 0xDE7E | - | Rohsignale Ausgangspins Sensoren ELUP, BUDS | - | V_T_ElupLe_cal | - | - | - | - | - | - | - | 22 | - | RES_0xDE7E |
| AE_ROHSIG_EINGANG_SENS_EM_INV | 0xDE7F | - | Rohsignale Sensoren/Eingänge für E-Maschine/Umrichter | - | V_T_Motor1_cal | - | - | - | - | - | - | - | 22 | - | RES_0xDE7F |
| AE_ROHSIG_EINGANG_SENS_PARKSPERRE | 0xDE80 | - | Rohsignale Sensoren/Eingänge Parksperre | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE80 |
| AE_ROHSIG_EINGANG_SENS_SG | 0xDE81 | - | Rohsignale Sensoren/Eingänge Steuergerät | - | V_U_Int12V_cal | - | - | - | - | - | - | - | 22 | - | RES_0xDE81 |
| AE_ROHSIG_EINGANG_SENS_DCDC | 0xDE83 | - | Rohsignale Sensoren/Eingänge DC/DC Wandler | - | V_U_DcdcLv_cal | - | - | - | - | - | - | - | 22 | - | RES_0xDE83 |
| AE_SPANNUNG_KLEMME30B | 0xDE88 | STAT_SPANNUNG_KL30B_WERT | aktuelle Spannung an KL30B | V | V_U_Int12V | high | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22 | - | - |
| AE_STROM_DCDC | 0xDE89 | - | Ströme DC/DC Wandler | - | AVL_I_HV_DCDC | - | - | - | - | - | - | - | 22 | - | RES_0xDE89 |
| AE_STROM_MAX | 0xDE8B | - | maximal gemessene Ströme seit letztem Rücksetzen oder Rücksetzen der Werte | - | V_I_DcdcHlDiag_Hv_mx_out | - | - | - | - | - | - | - | 22;2E | ARG_0xDE8B | RES_0xDE8B |
| AE_TEMP_LE | 0xDE8C | - | Temperaturen Steuergerät Antriebselektronik | - | V_T_InvU | - | - | - | - | - | - | - | 22 | - | RES_0xDE8C |
| AE_ZUSTAND_1_DCDC | 0xDE92 | - | Status DC/DC-Wandler | - | AVL_OPMO_DCDC_CNV | - | - | - | - | - | - | - | 22 | - | RES_0xDE92 |
| AE_ELUP | 0xDE93 | - | aktueller Zustand ELUP bzw. aktivieren/deaktivieren ELUP | - | A_S_ELUP | - | - | - | - | - | - | - | 22;2E | ARG_0xDE93 | RES_0xDE93 |
| AE_PARKSPERRE_MAGNET | 0xDE94 | - | Einschalten Magnet Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE94 | - |
| AE_PARKSPERRE_NVRAM_LOESCHEN | 0xDE95 | - | Löscht NV-RAM Daten der Parksperre | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDE95 | - |
| AE_ZUSTAND_DCDC_FEHLERBILD | 0xDE96 | - | Rückgabe aktiver/inaktiver Fehler DC/DC-Wandler | bit | V_e_DcdcHl_ErSt_out | - | BITFIELD | RES_0xDE96 | - | - | - | - | 22 | - | - |
| AE_BUDS | 0xDEA5 | STAT_BUDS_WERT | Sensorwert des Bremsunterdrucks | hPa | AVL_LOWP_BRKFA | high | unsigned char | - | 4.0 | 1.0 | -1000.0 | - | 22 | - | - |
| AE_TEMP_EMASCHINE | 0xDEA6 | - | Wert der aktuellen Temperaturen der E-Maschine in Grad Celsius | - | V_T_Motor1 | - | - | - | - | - | - | - | 22 | - | RES_0xDEA6 |
| AE_ELEKTRISCHE_MASCHINE | 0xDEA7 | - | Auslesen von Drehzahl, Drehmoment und Betriebsart der E-Maschine | - | AVL_RPM_MOT_TRCT | - | - | - | - | - | - | - | 22 | - | RES_0xDEA7 |
| AE_ZUSTAND_2_DCDC | 0xDEA9 | - | Rückgabe verschiederer Status vom DCDC-Wandler | bit | V_e_DcdcHl_St_out | - | BITFIELD | RES_0xDEA9 | - | - | - | - | 22 | - | - |
| AE_PARKSPERRE_VERSION | 0xDEB0 | - | Rückgabe der aktuellen Version der Parksperren-SW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDEB0 |
| AE_ROTORLAGESENSOR_SCHREIBEN | 0xDEB1 | - | Direktes Schreiben des Resolveroffset Winkels | - | V_phi_DcmDiagRlsoffsetMan_def | - | - | - | - | - | - | - | 2E | ARG_0xDEB1 | - |
| AE_DCDC_TEMPHISTOGRAMM_LESEN | 0xDEB2 | - | Auslesen Temperatur-Histogramme DCDC / Rücksetzen Temperatur-Histogramme (0 = kein Reset; 1 = Reset) | - | V_e_DcmDcdcDiag_Histo_T_rst | - | - | - | - | - | - | - | 2E | ARG_0xDEB2 | - |
| AE_DCDC_LEISTUNGSHISTOGRAMM | 0xDEB3 | - | Auslesen Leistungs-Histogramme DCDC-Wandler / Zurücksetzen Leistungs-Histogramme (0 = kein Reset; 1 = Reset) | - | V_e_DcdcDiag_Histo_P_rst | - | - | - | - | - | - | - | 2E | ARG_0xDEB3 | - |
| AE_RESET_TEMP_MIN_MAX | 0xDEB4 | - | Rücksetzen der minimalen und maximalen Temperatur des DC/DC Wandlers (0 = kein Reset; 1 = Reset) | - | V_e_DcmDcdcDiag_T_rst | - | - | - | - | - | - | - | 2E | ARG_0xDEB4 | - |
| AE_PIC_SW_VERSION | 0xDEB5 | - | Gibt aktuellen Versionen der PIC-SW zurück | - | V_s_DcdcSwVersion | - | - | - | - | - | - | - | 22 | - | RES_0xDEB5 |
| AE_ROTORLAGESENSOR_RESET | 0xDEB6 | - | Zurücksetzen des Resolveroffsetwinkels | - | V_e_DcmDiagRlsoffsetReset | - | - | - | - | - | - | - | 2E | ARG_0xDEB6 | - |
| AE_KLASSIERUNG_LOESCHEN | 0xDEB7 | - | Loeschen der gesamten Klassierungsdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDEB7 | - |
| AE_CTRL_VERSION | 0xDEBC | STAT_CTRL_VERSION_WERT | Controllerbord-Version | - | V_e_CtrlVarIn | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AE_SPANNUNG_DCDC | 0xDEBD | - | Spannungen DCDC Wandler | - | V_U_DcdcGtMc6 | - | - | - | - | - | - | - | 22 | - | RES_0xDEBD |
| AE_SPANNUNG_LE | 0xDEBE | - | Interne Spannungen der Leistungselektronik | - | V_U_Int5VMc0 | - | - | - | - | - | - | - | 22 | - | RES_0xDEBE |
| AE_SYSSTATE | 0xDEBF | - | Interne Statuszustände des Steuergerät | - | V_e_VsmDprActive | - | - | - | - | - | - | - | 22 | - | RES_0xDEBF |
| AE_SN_SETZEN | 0x400C | - | Seriennummer | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C | - |
| AE_HWCAL_SETZEN | 0x400D | - | Hardware Kalibrierungsdaten der AE setzen Es kann nicht die Seriennummer gesetz werden (eigener Job _steuern_sn_setzen)!!! | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D | - |
| AE_HWCAL_FLASHEN | 0x400E | - | Schreibt die HWCALs eines bestimmten Blocks ins Flash | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E | - |
| AE_HWCAL_MODE | 0x400F | - | SG in den HWCAL Flash-Mode bringen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400F | - |
| AE_HWCAL_LESEN | 0xF010 | - | Auslesen der HWCALs anhand von Blocknummer und Prozessor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010 | RES_0xF010 |
| AE_RESETINFO_LESEN | 0xF011 | - | Auslesen der Resetinfo aus dem Flash | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF011 | RES_0xF011 |
| AE_FREILAUF_MODUS | 0xF050 | - | Freilauf Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF050 |

### RES_0X1700

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DID_1700_KILOMETER_WERT | - | - | unsigned long | - | - | - | - | - | - |

### ARG_0X1700

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_DID_1700_KILOMETER | - | - | unsigned long | - | - | - | - | - | - | - | - |

### TAB_STAT_ROTORLAGESENSOR_STATUS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Die Routine Rotorlagesensor Anlernen ist nicht angefordert. |
| 0x01 | Die Routine Rotorlagesensor Anlernen ist angefordert und aktiv, aber es findet gerade kein aktiver Abgleich statt. |
| 0x02 | Die Routine Rotorlagesensor Anlernen ist angefordert und aktiv. |
| 0x03 | Die Routine Rotorlagesensor Anlernen wurde fehlerhaft beendet. |
| 0x04 | Die Routine Rotorlagesensor Anlernen wurde erfolgreich beendet. |

### TAB_AE_SYSSYSTATE_MCS

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |

### BF_SYSSYSTATE_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSYSTATE_KL153_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Klemmenzustand (bitcodiert): Bit0 = Kl15_3 |
| STAT_SYSSYSTATE_KL15WUP_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Klemmenzustand (bitcodiert): Bit1 = Kl15WUP |
| STAT_SYSSYSTATE_KL30B_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Klemmenzustand (bitcodiert): Bit2 = KL30B |
| STAT_SYSSYSTATE_KL30C_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Klemmenzustand (bitcodiert): Bit3 = KL30C |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

### TAB_AE_SLE_FEHLERZUSTAENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Derating |
| 0x01 | Ladeunterbrechung |
| 0x02 | Notlauf |
| 0x03 | Kommunikationsausfall |
| 0x04 | Reserviert |
| 0xFF | Signal ungültig |

### TAB_AE_SLE_BETRIEBSMODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby |
| 0x02 | HV-DC Laden |
| 0x03 | Reserviert |
| 0x0F | Signal ungültig |

### TAB_AE_RESET_CRASHZAEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | rücksetzen  1.Crashzähler |
| 0x02 | rücksetzen  2.Crashzähler |
| 0x03 | rücksetzen  1.Crashzählers und 2.Crashzählers |
| 0xFE | nicht definiert |
| 0xFF | ungültiger Wert |

### ARG_0XADF4

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 - Kontrolle an EME-SW; 1 - AKS E-Maschine angefordert |

### ARG_0XADF6

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned char | - | TAB_AE_ROTORLAGESENSOR_ANLEREN_AKTION | - | - | - | - | - | 0x00 = Auto RLS-Anlernen 0x01 = Hochdrehen/Freilauf |

### ARG_0XADF8

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_KLASSE | + | - | 0-n | high | unsigned char | - | TAB_AE_DREHZAHL_KLASSE | - | - | - | - | - | Drehzahl-Klasse: 0 = 0-2000 U/min 1 = 2000-4000 U/min 2 = 4000-6000 U/min 3 = 6000-8000 U/min 4 = 8000-10000 U/min 5 = 10000-12000 U/min 6 = 12000-14000 U/min |

### ARG_0XADF9

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HISTOGRAMM_NR | + | - | 0-n | high | unsigned char | - | TAB_AE_DCDC_HISTOGRAMM | - | - | - | - | - | Histogramm das angefordert wird: 0 = PHistoF 1 = PHistoL 2 = T1HistoF 3 = T1HistoL 4 = T2HistoF 5 = T2HistoL 6 = T3HistoF 7 = T3HistoL 8 = T4HistoF 9 = T4HistoL 10 = rUtil 11 = rUtilF |

### ARG_0XDE77

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE | - | - | - | - | - | Ändern des Zustandes der Parksperre ( 0 = kein Einlegen; 1 = Einlegen der Parksperre ) |

### ARG_0XDE78

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_EINLERNEN_STEUERN | 1.0 | 1.0 | 0.0 | - | - | Vorgabe Anlernen ( 0 = kein Anlernen; 1 = Anlernen der Parksperre) |

### ARG_0XDE8B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_RESET_STROM_MAX | - | - | - | - | - | Anforderung der Ströme, die zurückgesetzt werden sollen |

### ARG_0XDE93

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_ELUP_STEUERN | - | - | - | - | - | Ansteuerung der ELUP für 1 Sekunde (elektrische Überwachung bleibt aktiv!) |

### ARG_0XDE94

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_MAGNET_STEUERN | 1.0 | 1.0 | 0.0 | - | - | Mögliche Zustände des Parksperren-Magneten ( 0 = kein Einschalten; 1 = Einschalten ) |

### ARG_0XDE95

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_NVRAM_LOESCHEN | 1.0 | 1.0 | 0.0 | - | - | Mögliche Ausführung des Löschens vom NV-RAM der Parksperre ( 0 = kein Löschen; 1 = Löschen ) |

### ARG_0XDEB1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OFFSET | ° | high | int | - | - | 1.0 | 0.0055 | 0.0 | - | - | Resolver Offset Winkel |

### ARG_0XDEB2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktion: 0 = kein Reset; 1 = Reset |

### ARG_0XDEB6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht rücksetzen; 1 = rücksetzen |

### ARG_0XDEB7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = nicht loeschen 1 = loeschen |

### RES_0XADF4

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_ANFORDERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_AKS_ANFORDERUNG | - | - | - | 0 - kein AKS; 1 - AKS; 2 - Fehler |

### RES_0XADF6

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_ROTORLAGESENSOR_STATUS_ERROR | - | - | + | Bit | high | Bitfield | - | BF_AE_ROTORLAGESENSOR_ERROR | - | - | - | Infos zum Status des Rotorlagesensor Anlernens und zum Fehler |
| STAT_ROTORLAGESENSOR_WERT | - | - | + | - | high | unsigned int | - | - | 0.0055 | 1.0 | -180.22 | EPS Offset |
| STAT_UDSPANNUNG_WERT | - | - | + | V | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rücklesen der Ud Spannung |
| STAT_UQSPANNUNG_WERT | - | - | + | V | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rücklesen der Uq Spannung |
| STAT_DREHZAHL_WERT | - | - | + | 1/min | high | int | - | - | 1.0 | 1.0 | 0.0 | Rücklesen der Drehzahl |

### RES_0XADF8

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_KLASSE | + | - | - | 0-n | high | unsigned char | - | TAB_AE_DREHZAHL_KLASSE | - | - | - | Drehzahl-Klasse |
| STAT_KMSTAND_START_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Start der Klassierung |
| STAT_KMSTAND_AKTUELL_WERT | + | - | - | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der Klassierung (aktuell) |
| STAT_DKVAL01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 01 |
| STAT_DKVAL02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 02 |
| STAT_DKVAL03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 03 |
| STAT_DKVAL04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 04 |
| STAT_DKVAL05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 05 |
| STAT_DKVAL06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 06 |
| STAT_DKVAL07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 07 |
| STAT_DKVAL08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 08 |
| STAT_DKVAL09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 09 |
| STAT_DKVAL10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 10 |
| STAT_DKVAL11_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 11 |
| STAT_DKVAL12_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 12 |
| STAT_DKVAL13_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 13 |
| STAT_DKVAL14_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 14 |
| STAT_DKVAL15_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 15 |
| STAT_DKVAL16_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 16 |
| STAT_DKVAL17_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 17 |
| STAT_DKVAL18_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 18 |
| STAT_DKVAL19_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 19 |
| STAT_DKVAL20_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 20 |
| STAT_DKVAL21_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 21 |
| STAT_DKVAL22_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 22 |
| STAT_DKVAL23_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 23 |
| STAT_DKVAL24_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 24 |
| STAT_DKVAL25_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 25 |
| STAT_DKVAL26_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 26 |
| STAT_DKVAL27_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 27 |
| STAT_DKVAL28_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 28 |
| STAT_DKVAL29_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 29 |
| STAT_DKVAL30_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 30 |
| STAT_DKVAL31_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 31 |
| STAT_DKVAL32_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 32 |
| STAT_DKVAL33_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 33 |
| STAT_DKVAL34_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 34 |
| STAT_DKVAL35_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 35 |
| STAT_DKVAL36_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 36 |
| STAT_DKVAL37_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 37 |
| STAT_DKVAL38_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 38 |
| STAT_DKVAL39_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 39 |
| STAT_DKVAL40_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Drehzahl-Klasse Wert 40 |

### RES_0XADF9

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTVAL_01_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1. Wert des angeforderten Histogramm |
| STAT_HISTVAL_02_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2. Wert des angeforderten Histogramm |
| STAT_HISTVAL_03_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3. Wert des angeforderten Histogramm |
| STAT_HISTVAL_04_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 4. Wert des angeforderten Histogramm |
| STAT_HISTVAL_05_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 5. Wert des angeforderten Histogramm |
| STAT_HISTVAL_06_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 6. Wert des angeforderten Histogramm |
| STAT_HISTVAL_07_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 7. Wert des angeforderten Histogramm |
| STAT_HISTVAL_08_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 8. Wert des angeforderten Histogramm |
| STAT_HISTVAL_09_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 9. Wert des angeforderten Histogramm |
| STAT_HISTVAL_10_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 10. Wert des angeforderten Histogramm |

### RES_0XDDF6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_DCDC_LV_WERT | V | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DCDC Wandler: IST-Spannung LV-Seite am B+ Bolzen |
| STAT_STROM_DCDC_LV_WERT | A | high | int | - | - | 0.1 | 1.0 | 0.0 | DCDC Wandler: IST-Strom LV-Seite am B+ Bolzen |

### RES_0XDE74

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_1_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_SENSOREN | 1.0 | 1.0 | 0.0 | Status Sensor 1 |
| STAT_SENSOR_2_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_SENSOREN | 1.0 | 1.0 | 0.0 | Status Sensor 2 |

### RES_0XDE75

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HV_SLE_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung in der SLE |
| STAT_SPANNUNG_HV_SLE_PFC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE Power Factor Corrector Spannung |
| STAT_SPANNUNG_HV_SLE_AC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | SLE Eingangsspannung |
| STAT_SPANNUNG_HV_DCDC_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im DC/DC-Wandler |
| STAT_SPANNUNG_HV_UMRICHTER_WERT | V | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | HV Spannung im Umrichter |

### RES_0XDE78

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARKSPERRE_EINLERNEN | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_EINLERNEN_STATUS | 1.0 | 1.0 | 0.0 | Einlernzustand Parksperre ( 0 = nicht eingelernt; 1 = eingelernt ) |
| STAT_PARKSPERRE_DIAG_NR | 0-n | high | unsigned char | - | TAB_AE_PARKSPERRE_ZUSTAND | - | - | - | Rückmeldung bzgl. Einlernvorgang |

### RES_0XDE7A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_POSITION_EINGELEGT_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Position der Parksperre eingelegt |
| STAT_PS_POSITION_OFFEN_WERT | % | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Position der Parksperre offen |

### RES_0XDE7C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_SPG_HBRUECKE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannung der H-Brücke |
| STAT_PS_POSITION_OFFEN_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Spannung der Sensierung |

### RES_0XDE7D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE1_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rohsignal Ansteuerung Parksperre (Duty Cycle H-Bruecke). |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE2 | 0/1 | high | unsigned char | - | - | - | - | - | Rohsignal Ansteuerung Parksperre (Richtung). |
| STAT_ROHSIGNAL_ANSTEURUNG_PARKSPERRE_NOTENTRIEGELUNG | 0/1 | high | unsigned char | - | - | - | - | - | Rohsignal Ansteuerung Parksperre Notentrieglungsmagnet ( 0 = nicht angesteuert; 1 = angesteuert ) |
| STAT_ROHSIGNAL_ANSTEURUNG_ELUP_NR | 0-n | high | unsigned char | - | TAB_AE_ELUP_ROHSIGNALE | - | - | - | Rohsignal Ansteuerung ELUP. |

### RES_0XDE7E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_ENDSTUFE_ELUP_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Temperaturmessung Endstufe für ELUP. |
| STAT_ROHSIGNAL_BUDS_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal BUDS. |

### RES_0XDE7F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_TEMP_EMASCHINE_STATOR_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Temperatursensor E-Maschine Stator |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_U_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase U. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_V_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase V. |
| STAT_ROHSIGNAL_TEMP_UMRICHTER_PHASE_W_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Temperatursensor Umrichter Phase W. |
| STAT_ROHSIGNAL_SPANNUNG_HVDC_UMRICHTER_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal HV DC Spannung Umrichter |
| STAT_ROHSIGNAL_STROM_HVDC_UMRICHTER_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal HV DC Strom Umrichter. |
| STAT_ROHSIGNAL_STROM_U_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Stromsensor Phase U. |
| STAT_ROHSIGNAL_STROM_V_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Stromsensor Phase V. |
| STAT_ROHSIGNAL_STROM_W_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Stromsensor Phase W. |
| STAT_ROHSIGNAL_ROTORLAGESENSOR_WERT | rad | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Rotorlagesensor korrigierte elektrische Winkelposition (Radian) |
| STAT_ROHSIGNAL_SPANNUNG_U_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Spannungssensor Phase U. |
| STAT_ROHSIGNAL_SPANNUNG_V_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Spannungssensor Phase V. |
| STAT_ROHSIGNAL_SPANNUNG_W_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Spannungssensor Phase W. |

### RES_0XDE80

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_STROM_PARKSPERRE_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Strommessung Parksperre. |
| STAT_ROHSIGNAL_POSITION_PARKSPERRE3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rohsignal 3 Positionsmessung Parksperre ( 0-1000=0-100%; 2000=ungueltig) |
| STAT_ROHSIGNAL_POSITION_PARKSPERRE4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rohsignal 4 Positionsmessung Parksperre (0-1000=0-100%; 2000=ungueltig) |

### RES_0XDE81

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_KL30B_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Spannungsmessung Klemme30b |
| STAT_ROHSIGNAL_KL15WUO_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal  Klemme 15WUO (0 = nicht aktiv, 1 = aktiv) |
| STAT_ROHSIGNAL_KL15_3_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Klemme 15_3 ( 0 = nicht aktiv; 1 = aktiv ) |
| STAT_ROHSIGNAL_KL30C_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Klemme 30c; elektrisch ( 0 = nicht aktiv; 1 = aktiv ) |
| STAT_ROHSIGNAL_CRASHSIGNAL_NR | 0-n | high | unsigned char | - | TAB_AE_ROHSIGNAL_ZUSTAND | - | - | - | Rohsignal Crasheingang Crashsignal elektrisch ( 0 = nicht aktiv; 1 = aktiv ) |

### RES_0XDE83

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROHSIGNAL_SPANNUNG_LV_DCDC_WERT | V | high | unsigned long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Spannungsmessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_LV_DCDC_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Strommessung LV DCDC Wandler. |
| STAT_ROHSIGNAL_STROM_HV_DCDC_WERT | A | high | long | - | - | 0.0010 | 1.0 | 0.0 | Rohsignal Strommessung HV DCDC Wandler. |

### RES_0XDE89

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DCDC_WANDLER_HV_WERT | A | high | unsigned int | - | - | 0.05 | 1.0 | -100.0 | Strom des DCDC-Wandlers auf der HV-Seite |
| STAT_STROM_DCDC_WANDLER_12V_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | -1000.0 | Strom des DCDC-Wandlers auf der 12V-Seite |
| STAT_STROM_DCDC_TS1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 1 |
| STAT_STROM_DCDC_TS2_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Tiefsetzsteller-Strom 2 |
| STAT_STROM_DCDC_TRAFO1_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Trafostrom 1 |
| STAT_STROM_DCDC_TRAFO2_WERT | A | high | unsigned int | - | - | 0.01 | 1.0 | 0.0 | DC/DC Trafostrom 2 |

### RES_0XDE8B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_DCDC_HV_IST_MAX_WERT | A | high | unsigned int | - | - | 0.05 | 1.0 | -100.0 | Maximaler betragsmäßiger HV Stroms des DCDC-Wandlers |
| STAT_STROM_DCDC_LV_IST_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | -512.0 | Maximaler betragsmäßiger LV Stroms DCDC-Wandler |
| STAT_STROM_EKMV_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler Strom zum eKMV |
| STAT_ERREGERSTROM_MAX_WERT | A | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Maximaler Erregerstrom der Emaschine |
| STAT_STROM_DC_HV_UMRICHTER_MOTOR_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Max. HV-DC Strom des Umrichters für den EM-Stator im motorischen Betrieb |
| STAT_STROM_DC_HV_UMRICHTER_GENERATOR_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Max. HV-DC Strom des Umrichters für den EM-Stator im generatorischem Betrieb |
| STAT_STROM_SLE_DC_HV_IST_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler betragsmäßiger HV Stroms der SLE DC HV |
| STAT_STROM_SLE_AC_RMS_IST_MAX_WERT | A | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler betragsmäßiger HV Stroms der SLE AC RMS |

### RES_0XDE8C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_UMRICHTER_PHASE_U_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase U |
| STAT_TEMP_UMRICHTER_PHASE_V_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase V |
| STAT_TEMP_UMRICHTER_PHASE_W_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Umrichter Phase W |
| STAT_TEMP_UMRICHTER_GT_PHASE_U_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver Phase U |
| STAT_TEMP_UMRICHTER_GT_PHASE_V_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver Phase U |
| STAT_TEMP_UMRICHTER_GT_PHASE_W_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Inverter Gatedriver Phase W |
| STAT_TEMP_UMRICHTER_MUX_ADC_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur am MUX_ADC des Inverters |
| STAT_TEMP_DCDC_BO_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_DCDC_GTW_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Gegentaktwandler |
| STAT_TEMP_DCDC_TS_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur DC/DC-Tiefsetzer |
| STAT_TEMP_DCDC_GR_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des DCDC Boards |
| STAT_TEMP_SLE_PFC_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-PowerFactorCorrection |
| STAT_TEMP_SLE_GR_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gleichrichter |
| STAT_TEMP_SLE_GTW_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur SLE-Gegentaktwandler |
| STAT_TEMP_SLE_BO_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur des SLE Boards |
| STAT_TEMP_ELUP_LE_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Powerbord - Messstelle ELUP Leistungsendstufe |
| STAT_TEMP_DIG_CY320_MC0_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Digitalbord am CY320_MC0 |
| STAT_TEMP_DIG_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Digitalbord |
| STAT_TEMP_DIG_CY320_MC2_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur auf dem Digitalbord am CY320_MC2 |
| STAT_TEMP_PROZESSOR_MC0_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC0 |
| STAT_TEMP_PROZESSOR_MC2_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | Temperatur Prozessor MC2 |

### RES_0XDE92

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_AE_ZST_AKTIV_NAKTIV | - | - | - | Ist-Betriebsart des DCDC-Wandlers |
| STAT_SPANNUNG_LV_IST_WERT | V | high | unsigned int | - | - | 0.05 | 1.0 | 0.0 | - |
| STAT_AUSLASTUNG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung des DCDC-Wandlers |

### RES_0XDE93

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUP_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktueller Schaltzustand der ELUP ( 0 = aus; 1 = an ) |
| STAT_ELUP_SPANNUNG_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Spannung am ELUP Ausgang |
| STAT_ELUP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Strom am ELUP-Ausgang |
| STAT_ELUP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des ELUP-Treibers |

### RES_0XDE96

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLER_BIT0_EIN | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 0: Shutdown Undervoltage 0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT1_EIN | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 1: Shutdown Overvoltage  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT2_EIN | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 2: Shutdown Overtemperature  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT3_EIN | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 3: Shutdown Overcurrent  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT4_EIN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 4: Interlock Fault  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT5_EIN | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 5: Not in commanded mode  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT6_EIN | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 6: Genereller HW-Fehler (Err_State)  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT7_EIN | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 7: -Vorhalt- Verfeinerung HW-Fehler 1  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT8_EIN | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit 8: -Vorhalt- Verfeinerung HW-Fehler 2  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT9_EIN | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit9: -Vorhalt- Verfeinerung HW-Fehler 3  0=nicht aktiv 1=aktiv |
| STAT_FEHLER_BIT10_EIN | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Diagnosestatus des DCDC-Wandler: Bit10: -Vorhalt- Verfeinerung HW-Fehler 4  0=nicht aktiv 1=aktiv |

### RES_0XDEA6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_E_MOTOR_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 1 |
| STAT_TEMP2_E_MOTOR_WERT | °C | high | int | - | - | 0.0156 | 1.0 | 0.0 | E-Motor Temperatur 2 |

### RES_0XDEA7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELEKTRISCHE_MASCHINE_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 0.5 | 1.0 | -5000.0 | Drehzahl der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_IST_MOMENT_WERT | Nm | high | int | - | - | 0.5 | 1.0 | 0.0 | IST Moment der E-Maschine |
| STAT_ELEKTRISCHE_MASCHINE_SOLL_MOMENT_WERT | Nm | high | int | - | - | 0.5 | 1.0 | 0.0 | SOLL Moment der E-Maschine |
| STAT_ELEKTRISCHE_BETRIEBSART_NR | 0-n | high | unsigned char | - | TAB_AE_ELEKTRISCHE_BETRIEBSART | - | - | - | aktuelle Betriebsart der E-Maschine |

### RES_0XDEA9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Limitierung durch die kommandierte Leistungsgrenze: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Limitierung der Ausgangsleistung wegen Spannungskriterium: 0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Limitierung durch kommandierte Minimalspannung auf HV-Seite:  0=nicht aktiv 1=aktiv |
| STAT_DIAG_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Limitierung wegen Temperaturkriterium: 0=nicht aktiv 1=aktiv |

### RES_0XDEB0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PS_VERSION_MAIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Main-Version Parksperren-SW |
| STAT_PS_VERSION_SUB_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Revision Parksperren-SW |

### RES_0XDEB5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_SW_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Softwareversion des DCDC Pics |
| STAT_SLE_SW_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Softwareversion des SLE Pics |

### RES_0XDEBD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_GT_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | DC/DC Gatetreiber Spannung |
| STAT_SPANNUNG_LV_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | DC/DC-Spannung Niedervoltseite |

### RES_0XDEBE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_CY0_5V0_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_5V0_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 5V von CY320_MC2 |
| STAT_SPANNUNG_CY0_3V3_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC0 |
| STAT_SPANNUNG_CY2_3V3_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 3,3V von CY320_MC2 |
| STAT_SPANNUNG_CY0_1V5_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC0 |
| STAT_SPANNUNG_CY2_1V5_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Spannungsüberwachung der internen 1,5V von CY320_MC2 |
| STAT_SPANNUNG_PWG1_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Rückmessung der Spannungsversorgung des PWG1 |
| STAT_SPANNUNG_PWG2_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Rückmessung der Spannungsversorgung des PWG2 |
| STAT_SPANNUNG_32V_WERT | V | high | unsigned int | - | - | 0.0010 | 1.0 | 0.0 | Rückmessung der internen 32 V |

### RES_0XDEBF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_DPR | 0/1 | high | unsigned char | - | - | - | - | - | Dualported RAM aktiv 0 = nicht aktiv 1 = aktiv |
| STAT_SYSSTATE_MC0_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC0 |
| STAT_SYSSTATE_MC2_NR | 0-n | high | unsigned char | - | TAB_AE_SYSSTATE_MCS | - | - | - | Systemzustand des MC2 |
| STAT_SYSSTATE_KLX | Bit | high | Bitfield | - | BF_SYSSTATE_KLEMMEN | - | - | - | Klemmenzustand |

### ARG_0X400C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIENNUMMER | - | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | Seriennummer (10 Zeichen) |
| JAHR | HEX | high | unsigned char | - | - | - | - | - | - | - | JAHR in HEX-Format  Bsp.: 15.12.2011 JAHR=0x11 |
| MONAT | HEX | high | unsigned char | - | - | - | - | - | - | - | MONAT in HEX-Format  Bsp.: 15.12.2011 MONAT=0x12 |
| TAG | HEX | high | unsigned char | - | - | - | - | - | - | - | TAG in HEX-Format  Bsp.: 15.12.2011 TAG=0x15 |

### ARG_0X400D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | 1.0 | 1.0 | 0.0 | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = nicht definiert 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0 = nicht definiert 1-63 = Nummer des Sensors 64 - 255  = nicht definiert |
| GAIN | HEX | high | unsigned long | - | - | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| OFFSET | HEX | high | unsigned long | - | - | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |

### ARG_0X400E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | 0-n | high | unsigned char | - | TAB_PROZESSOR | 1.0 | 1.0 | 0.0 | - | - | Prozessor |
| SENSOR_BLOCK | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK | - | - | - | - | - | Sensor-Block, der geschrieben werden soll 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |

### ARG_0X400F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Hardwarekalibrationsmode setzen (0/1): 0 = keine Aktion 1 = Hardwarekalibrationsmode |

### ARG_0XF010

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROZESSOR | + | - | 0-n | high | unsigned char | - | TAB_PROZESSOR | 1.0 | 1.0 | 0.0 | - | - | Prozessor auf dem die HWCALs geschrieben werden sollen |
| SENSOR_BLOCK | + | - | 0-n | high | unsigned char | - | TAB_SENSOR_BLOCK_SETHWCAL | - | - | - | - | - | Sensor Block: 0 = Seriennummer 1 = CPU-Sensoren 2 = PCP-Sensoren 3 = PIC-SensorenA 4 = PIC-SensorenB |
| SENSOR_NR | + | - | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des Sensors im ausgewählten Sensor Block: 0 = nicht definiert 1-63 = Nummer des Sensors 64 - 255  = nicht definiert |

### ARG_0XF011

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_NR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 64.0 | Nummer des Resets der im Flash abgespeichert wurde |

### RES_0XF010

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAIN_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Gain-Korrektur des Sensors im HEX-Format (4Byte) |
| STAT_OFFSET_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Offset-Korrektur des Sensors im HEX-Format (4Byte) |

### RES_0XF011

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMENTRY_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nummer des angeforderten Reset Slots |
| STAT_TYPE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Single Reset=1; Permanent Reset=2 |
| STAT_CAUSE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Resetgrund: POWERUP_RST = 0, EXT_WATCHDOG_RST=1, INT_WATCHDOG_RST=2, SOFTWARE_RST=3, EXCEPTION_RST=4, UNKNOWN_RST=5 |
| STAT_EXCADDR_WERT | + | - | - | HEX | high | unsigned long | - | - | - | - | - | Erweiterte Adresse |
| STAT_EXCCLASS_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterte Klasse |
| STAT_EXCTIN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | excTin |
| STAT_WD_ERRCTR_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Watchdog-Error-Counter |
| STAT_OWN_VSMSTATE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eigener System State |
| STAT_PARTNER_VSMSTATE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Partner System State |
| STAT_OWN_SYNCSTATE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eigener Sync State |
| STAT_PARTNER_SYNCSTATE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Partner Sync State |
| STAT_RESETDUMP_DATA | + | - | - | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Hex-Dump des Resets-Slots aus dem Flash |

### RES_0XF050

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS | - | - | + | 0-n | high | char | - | TAB_AKTIV | - | - | - | 0=inaktiv; 1=aktiv |

### TAB_SENSOR_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x0 | Seriennummer |
| 0x1 | CPU-Sensoren |
| 0x2 | PCP-Sensoren |
| 0x3 | PIC-SensorenA |
| 0x4 | PIC-SensorenB |
| 0xff | nicht definiert |

### TAB_AE_PARKSPERRE_SENSOREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | In Bewegung |
| 0x03 | Ungültig |

### TAB_AE_CHARGE_ENABLE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | wahr |
| 0x02 | falsch |
| 0x03 | ungültig |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### BF_AE_ROTORLAGESENSOR_ERROR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status Code: Bit 0: Abgleich erfolgreich beendet  0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status Code: Bit 1: Abgleich ungültig beendet 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Status Code: Bit 2: Beschleunigungsphase aktiv 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Status Code: Bit 3: Abgleichsphase aktiv 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Error Code: Bit 4: Beschleunigungszeit zu hoch 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Error Code: Bit 5: Auslaufzeit zu gering 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Error Code: Bit 6: Ermittelter Offsetwert ungültig 0=nicht aktiv 1=aktiv |
| STAT_ROTORLAGESENSOR_STATUS_ERROR_7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Error Code: Bit 7: Nullstromabweichung in Abgleichphase 0=nicht aktiv 1=aktiv |

### TAB_AE_PARKSPERRE_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Einlernvorgang abgeschlossen und OK |
| 0x01 | Einlernvorgang abgeschlossen und NOK |
| 0x02 | Einlernvorgang aktiv |

### TAB_AE_ELEKTRISCHE_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby (AKS) |
| 0x01 | Drehmomentenregelung |
| 0x0C | sicherer Zustand / Fehler (AKS) |
| 0x0D | Initialisierung |
| 0x0E | Zwischenkreisvorladung |

### TAB_AE_PARKSPERREN_SW

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Fehler |
| 0x01 | Fehler steht an! |

### TAB_AE_PARKSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Einlegen der Parksperre |
| 0x02 | Auslegen der Parksperre |

### TAB_AE_PARKSPERRE_NVRAM_LOESCHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Löschen |
| 0x01 | Löschen des NV-Ram (Parksperre) |

### TAB_AE_PARKSPERRE_EINLERNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperre nicht eingelernt |
| 0x01 | Parksperre eingelernt |

### TAB_STAT_HVIL_GESAMT_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Interlock nicht unterbrochen |
| 0x01 | Interlock unterbrochen |
| 0xFF | nicht definiert |

### TAB_AE_DCDC_HISTOGRAMM

| WERT | TEXT |
| --- | --- |
| 0x00 | PHistoF |
| 0x01 | PHistoL |
| 0x02 | T1HistoF |
| 0x03 | T1HistoL |
| 0x04 | T2HistoF |
| 0x05 | T2HistoL |
| 0x06 | T3HistoF |
| 0x07 | T3HistoL |
| 0x08 | T4HistoF |
| 0x09 | T4HistoL |
| 0x0A | rUtil |
| 0x0B | rUtilF |

### TAB_AE_DREHZAHL_KLASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0-2000 U/min |
| 0x01 | 2000-4000 U/min |
| 0x02 | 4000-6000 U/min |
| 0x03 | 6000-8000 U/min |
| 0x04 | 8000-10000 U/min |
| 0x05 | 10000-12000 U/min |
| 0x06 | 12000-14000 U/min |

### TAB_STAT_AKS_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein AKS |
| 0x01 | AKS |
| 0x02 | Fehler |

### TAB_PROZESSOR

| WERT | TEXT |
| --- | --- |
| 0x0 | undefiniert |
| 0x1 | mc0 |
| 0x2 | mc2 |

### TAB_AE_ELUP_ROHSIGNALE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht definiert |
| 0x01 | Ausschalten |
| 0x02 | Einschalten |

### TAB_AE_SYSSTATE_MCS

| WERT | TEXT |
| --- | --- |
| 0x00 | eINITIALIZATION |
| 0x01 | ePREDRIVE |
| 0x02 | eREADY |
| 0x03 | eWAITSLEEPACKNOWLEDGE |
| 0x04 | eFUNCTIONPOSTDRIVE |

### TAB_AE_PARKSPERRE_POSTION

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | nicht definiert |

### TAB_AE_ROTORLAGESENSOR_ANLEREN_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Auto RLS-Anlernen |
| 0x01 | Hochdrehen/Freilauf |

### BF_SYSSTATE_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSSTATE_KL153_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Klemmenzustand (bitcodiert): Bit0 = Kl15_3 |
| STAT_SYSSTATE_KL15WUP_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Klemmenzustand (bitcodiert): Bit1 = Kl15WUP |
| STAT_SYSSTATE_KL30B_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Klemmenzustand (bitcodiert): Bit2 = KL30B |
| STAT_SYSSTATE_KL30C_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Klemmenzustand (bitcodiert): Bit3 = KL30C |

### TAB_SENSOR_BLOCK_SETHWCAL

| WERT | TEXT |
| --- | --- |
| 0x0 | nicht definiert |
| 0x1 | CPU-Sensoren |
| 0x2 | PCP-Sensoren |
| 0x3 | PIC-SensorenA |
| 0x4 | PIC-SensorenB |
| 0xff | nicht definiert |

### TAB_AE_ELUP_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion! |
| 0x01 | ELUP ansteuern |

### TAB_AE_PARKSPERRE_EINLERNEN_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Anlernen |
| 0x01 | Anlernen der Parksperre |

### TAB_AE_PARKSPERRE_MAGNET_STEUERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Einschalten |
| 0x01 | Einschalten des Parksperren-Magneten |

### TAB_AE_ZST_AKTIV_NAKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AE_ROHSIGNAL_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |

### TAB_AE_RESET_STROM_MAX

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion. |
| 0x01 | Alle maximale Ströme zurücksetzen. |
| 0x02 | Strom zum eKMV zurücksetzen. |
| 0x03 | Strom zum EDH zurücksetzen. |
| 0x04 | Strom zur E-Maschine zurücksetzen. |
| 0x05 | Maximalen Strom zur SLE zurücksetzen. |
| 0x06 | Maximalen Strom zum DC/DC Wandler zurücksetzen. |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0x03 | DH-Abgleich |
| 0x11 | Direktschreiben des SecretKey und EWS5 |
| 0x12 | Direktschreiben des SecretKey und EWS5 und DH-Abgleich |
| 0xXY | unbekannt |

### TAB_AE_FUNKSTAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht verfuegbarer Wert |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |

### TAB_AE_STAT_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montage-Modus ist inaktiv |
| 0x01 | Montage-Modus ist aktiv |
| 0xFE | nicht definiert |
| 0xFF | ungueltiger Wert |
