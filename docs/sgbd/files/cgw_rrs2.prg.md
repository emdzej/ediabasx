# cgw_rrs2.prg

## General

|  |  |
| --- | --- |
| File | cgw_rrs2.prg |
| Type | PRG |
| Jobs | 27 |
| Tables | 43 |
| Origin | LEAR DCS RalfWistorf |
| Revision | 1.003 |
| Author | LEAR DCS rW |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CGW |  |  |
| ORIGIN | string | LEAR DCS RalfWistorf |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | LEAR DCS rW |  |  |
| COMMENT | string |  |  |  |
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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0x01 | FlashEnabled | FlashEnabled |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021000 | Energiesparmode aktiv | 0 |
| 0x02FF10 | Primaerer Anwendungs-Dummy DTC | 1 |
| 0x801C10 | Anforderung Reset Klemme 30F Wecker | 1 |
| 0x801C11 | Anforderung Abschaltung Klemme 30F Wecker | 1 |
| 0x801C12 | Versenden Powerdown | 1 |
| 0x801C13 | Anforderung Reset Klemme 30F Einschlafen | 1 |
| 0x801C14 | Anforderung Abschaltung Klemme 30F Einschlafen | 1 |
| 0x801C15 | Fehlerhaftes Einschlafen bei 30B | 1 |
| 0x801C73 | Steuergerät internes Kommunikationsprotokoll zwischen Haupt- und Sekundärkontroller gestört | 0 |
| 0x801C75 | Lifecycle Modus CODING ist aktiv | 1 |
| 0x801C76 | Uneindeutiges Routing | 1 |
| 0x801C77 | D-CAN deaktiviert: Debug CAN ist auf den Diagnose-CAN geschaltet | 0 |
| 0x801C78 | Quarz Fehler: HW Fehler - Quarz schwingt nicht | 0 |
| 0xCD040B | KCanPhyError  | 0 |
| 0xCD0440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xCD0468 | ZGWCanBusOff | 0 |
| 0xCD0BFF | Primaerer Netzwerk-Dummy DTC | 1 |
| 0xCD1400 | Empfang keine Fehlerspeichersperre | 1 |
| 0xCD1410 | Empfang keine Systemzeit | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | ja |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4488 | RoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4489 | SubRoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x448A | ControlId des fehlerhaften DiagnoseServices | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4486 | Schreibfehlercode | 0-n | high | 0xFF | TabVcmWriteErrorCode | 1 | 1 | 0 |
| 0x4485 | Lesefehlercode | 0-n | high | 0xFF | TabVcmReadErrorCode | 1 | 1 | 0 |
| 0x4499 | Diagnoseadresse der Anfrage | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448B | EcuStatus_0 - SGInfoFlagsByte2 des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448C | EcuStatus_1 - SGInfoFlagsByte2 des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448D | EcuStatus_2  - SGInfoFlagsByte2 des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4493 | EcuId_3  - Steuergeraeteadresse des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448E | EcuStatus_3  - SGInfoFlagsByte2 des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448F | EcuStatus_4  - SGInfoFlagsByte2 des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44A0 | EcuStatus_5  - SGInfoFlagsByte2 des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4497 | SVT_Ist Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSvtGenerationErrorCode | 1 | 1 | 0 |
| 0x4498 | Liste getauschter Steuergeräte Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSerialGenerationErrorCode | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse des meldenden SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4583 | Grund fuer nicht kompletten Systemkontext | 0-n | high | 0xFF | TabGrundSystemkontextNichtKomplett | 1 | 1 | 0 |
| 0x4584 | Fehlerhaftes Softwaremodul | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodul | 1 | 1 | 0 |
| 0x4100 | UBat - Betriebsspannung am SG | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4040 | Bios Fehler Ursache | 0-n | high | 0xFFFFFFFF | TabBiosFehlercodes | 1 | 1 | 0 |
| 0x4082 | Unterspannung an Vcc | 0-n | high | 0xFF | TabVccUndervoltage | 1 | 1 | 0 |
| 0x4083 | Unterspannung an Vio | 0-n | high | 0xFF | TabVioUndervoltage | 1 | 1 | 0 |
| 0x4084 | Unterspannung an Vbat. Keine Energieversorgung fuer interne Regler und keine Erkennung von Wakeup Symbole | 0-n | high | 0xFF | TabVbatUndervoltage | 1 | 1 | 0 |
| 0x4085 | Uebertemperatur | 0-n | high | 0xFF | TabOvertemperature | 1 | 1 | 0 |
| 0x4086 | TxEn ist permanent unten | 0-n | high | 0xFF | TabTxEnIsPermanentlyLow | 1 | 1 | 0 |
| 0x4087 | Bus Line Plus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBpLineShortedToGND | 1 | 1 | 0 |
| 0x4088 | Bus Line Plus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBpLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x4089 | Bus Line Minus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBmLineShortedToGND | 1 | 1 | 0 |
| 0x408A | Bus Line Minus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBmLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x408B | Bus Line Minus und Plus sind kurzgeschlossen | 0-n | high | 0xFF | TabBusLoadTooHigh | 1 | 1 | 0 |
| 0x408C | Physische Ende auf diesem Branch ist nicht abgeschlossen | 0-n | high | 0xFF | TabBusLoadTooLow | 1 | 1 | 0 |
| 0x1707 | DiagAdr | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x1709 | MOSTMesHeader | text | - | 6 | - | - | - | - |
| 0x170B | NPR | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x170A | FOTTemp | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4502 | Weckende SG - Diagnoseadresse des SGs, dass das Fahrzeug geweckt hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4503 | Weckgrund | 0-n | high | 0xFF | TabWeckgrund | 1 | 1 | 0 |
| 0x4504 | Wachhaltende SG_1 - Diagnoseadresse des 1. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4505 | Wachhaltende SG_2 - Diagnoseadresse des 2. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4506 | Wachhaltende SG_3 - Diagnoseadresse des 3. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4507 | Wachhaltende SG_4 - Diagnoseadresse des 4. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4508 | Wachhaltegrund des 1. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4509 | Wachhaltegrund des 2. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450A | Wachhaltegrund des 3. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450B | Wachhaltegrund des 4. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4602 | Fehlerhaftes Softwaremodul TAS | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodulTAS | 1 | 1 | 0 |
| 0x408E | Flexray Lern Mode | 0-n | high | 0xFF | TabFlexRayLernMode | 1 | 1 | 0 |
| 0x408F | DIAG+ per Hand manipuliert | 0-n | high | 0xFF | TabFlexRayLernDiagPlus | 1 | 1 | 0 |
| 0x4300 | Uneindeutigkeit_1: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4301 | Uneindeutigkeit_1: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |
| 0x4302 | Uneindeutigkeit_2: SG Diagnose Adresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4303 | Uneindeutigkeit_2: gleichwertigen Bussen | 0-n | high | 0xFFFFFFFF | TabBusMaske | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100100 | Kontakt zu FZM Slave verloren | 0 |
| 0x100101 | Einschlafbestaetigungen nicht vollstaendig | 0 |
| 0x100102 | Ungueltige LocalSleepReadiness-Botschaft empfangen | 0 |
| 0x100103 | Shutdown abgebrochen - Durchstart erfolgt | 0 |
| 0x100104 | HW Weckgrund ZGW | 0 |
| 0x1001FF | FZM Logger Fehlerspeichereintrag | 0 |
| 0x1007FF | DEM Logger Fehlerspeichereintrag | 0 |
| 0x100AFF | TP-Router Logger Fehlerspeichereintrag | 0 |
| 0x100CFF | CAN Logger Fehlerspeichereintrag | 0 |
| 0x100DFF | Self-Diagnosis Logger Fehlerspeichereintrag | 0 |
| 0x100E00 | Komponente vom Lifecycle ausgeschlossen | 0 |
| 0x100EFF | Lifecycle Logger Fehlerspeichereintrag | 0 |
| 0x100FFF | EEPROM-Manager Logger Fehlerspeichereintrag | 0 |
| 0x101000 | OSEK OS ErrorHook Fehler | 0 |
| 0x101001 | OSEK OS Stack-Overflow Fehler | 0 |
| 0x101002 | Assert | 0 |
| 0x101003 | OSEK OS Board Invalid | 0 |
| 0x1011FF | Logger Fehlerspeichereintrag fuer sonstige ZGW Komponente | 0 |
| 0x930001 | UnderVoltage Error-Versorgungsspannung: Mindestwert unterschritten  | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4281 | Runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4282 | Index in runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4283 | Lifecycle state of excluded component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4284 | Lifecycle-Modus | 0-n | high | 0xFF | TabLifecycleMode | 1 | 1 | 0 |
| 0x4481 | SoftwareModule | 0-n | high | 0xFF | TabSoftwareModul | 1 | 1 | 0 |
| 0x4482 | SoftwareErrorCode | 0-n | high | 0xFF | TabSoftwareError | 1 | 1 | 0 |
| 0x4483 | SoftwareErrorData | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x47FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x46FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x44FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x457F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x467F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x417F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x497F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x477F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x40FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x41FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x437F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x42FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x447F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x43FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x45FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x48FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4582 | illegales Format der Nachricht | 0-n | high | 0xFF | TabIllegalesNachrichtenformat | 1 | 1 | 0 |
| 0x4585 | allgemeiner Fehlercode fuer Softwarefehler | 0-n | high | 0xFF | TabSWFehlerCode | 1 | 1 | 0 |
| 0x4587 | spezieller Fehlercode fuer Softwarefehler | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4586 | Nachrichten-ID | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4800 | ErrorHook verursachender Task | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4801 | ErrorHook Callee | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | ErrorHook Status | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Stack-Overflow verursachender Task | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4804 | Adresse der AssertionMessage | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4805 | Adresse des AssertionFile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4806 | Adresse der AssertionZeile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x480D | Assertion Return Address | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4807 | Board Invalid Stack Pointer | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4808 | Board Invalid SRR0 | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4809 | Board Invalid Reason | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x480A | Anzahl der Versuche PLL zu rekonfigurieren | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x480B | Erfolgreicher Algorithmus | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x480C | Schritt in der PLL-Routine in dem PLL nicht lockte | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x408D | Zeit der Startup Phase | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4081 | Anzahl der Synchronisationsversuche | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4080 | Anzahl der Verletzungen | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x170C | Ubat | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4501 | FZM Slave ID | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4601 | Aktiver Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4603 | Neuer Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4680 | FZGS-Fehlercode | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4681 | ID des fehler-meldenden SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4682 | ID des fehlerhaften SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x450C | HW Durchstartgrund | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x450D | Error Counter Tx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450E | Error Counter Rx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450F | Transceiver Software State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4510 | Transceiver State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4511 | Return Value | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4512 | HW address | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4513 | HW Weckgrund | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4090 | Received payload length | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4091 | Frame description index | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4092 | CHI Error Flag Register | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4093 | Protocol Interrupt Flag Register 0 | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4094 | Protocol Interrupt Flag Register 1 | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4095 | Wrong Data Offset | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4096 | Buffer Index der mehrmals auftritt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4097 | Erster Buffer in dem der Buffer Index vorkommt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4098 | Zweiter Buffer in dem der Buffer Index vorkommt | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448B | EcuStatus_0 - SGInfoFlagsByte2 des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448C | EcuStatus_1 - SGInfoFlagsByte2 des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448D | EcuStatus_2  - SGInfoFlagsByte2 des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4493 | EcuId_3  - Steuergeraeteadresse des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448E | EcuStatus_3  - SGInfoFlagsByte2 des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448F | EcuStatus_4  - SGInfoFlagsByte2 des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44A0 | EcuStatus_5  - SGInfoFlagsByte2 des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SYSTEMZEIT_LESEN | 0x1701 | STAT_SYSTEMZEIT_WERT | Job:  Result: resetgesicherter Sekundenzähler | sek | SYSTEMZEIT_LESEN | high | unsigned long | - | 1 | 1 | 0 | 0x27 | 22 | - | - |
| STEUERN_VIN_SCHREIBEN | 0xF190 | - | Setzen der VIN. | - | VIN_SCHREIBEN | - | - | - | - | - | - | 0x27 | 2E | ARG_0xF190 | - |

### ARG_0XF190

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VIN | - | - | string[17] | - | - | - | - | - | - | - | Fahrgestellnummer / VIN (17 Byte) |

### TABFEHLERHAFTESSOFTWAREMODUL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Diagnosemaster |
| 0x02 | TroubleTicketCreator |
| 0x03 | TesterRequestHandler |
| 0x04 | SystemContextMgmt |
| 0x05 | MemoryAccess |
| 0x06 | LifeCycle |
| 0x07 | EventMsgMgmt |
| 0x08 | ErrorHandlerAdapter |
| 0xFF | Ungueltiger Wert |

### TABVCMSERIALGENERATIONERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung vollständig, getauschte SG vorhanden |
| 0x02 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15 |
| 0x03 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS |
| 0xFF | Ungueltiger Wert |

### TABBPLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVBATUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBPLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBMLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABOVERTEMPERATURE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSLOADTOOLOW

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNDIAGPLUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DIAG+ ist nicht aktiv.Es wurden keine FlexRay Branches manuell deaktiviert oder aktiviert |
| 0x01 | DIAG+ ist aktiv.Es wurden manuell FlexRay Branches deaktiviert oder aktiviert |
| 0xFF | ungueltiger Wert |

### TABFEHLERHAFTESSOFTWAREMODULTAS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Tester Assistant |
| 0x02 | TAS_Activation - Tester Assistant Aktivierung |
| 0x03 | TAS_ErrorHandler - Tester Assistant Fehler-Manager |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNMODE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | FlexRay Lern Mode wurde durchgeführt |
| 0x01 | FlexRay Lern Mode wurde noch nicht durchgeführt |
| 0xFF | ungueltiger Wert |

### TABVCCUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCMSVTGENERATIONERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15  (Abbruch durch KL15 nach Testerauftrag) |
| 0x02 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS (nach Testerauftrag) |
| 0xFF | Ungueltiger Wert |

### TABVIOUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABTXENISPERMANENTLYLOW

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBIOSFEHLERCODES

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | NO_BIOS_ERROR |
| 0x00000001 | CO_MICRO_COMMUNIKATION |
| 0x00000002 | SPI_COMMUNIKATION |
| 0x00000004 | INPUT |
| 0x00000008 | OUPUT |
| 0x00000010 | CAN |
| 0x00000020 | SCI |
| 0x00000040 | IDLE_HAENDLER |
| 0x00000080 | POWER_SUPPLY |
| 0x00000100 | SLEEP |
| 0x00000200 | ETHERNET_FEC |
| 0x00000400 | ETHERNET_PHY |
| 0x00000800 | BOARD_HW_STAND |
| 0x00001000 | EEPROM |
| 0x00002000 | MOST_PHY |
| 0xFFFFFFFF | ALL_BIOS_ERROR |

### TABVCMREADERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Leerer Speicher |
| 0x02 | Ungültige Datengröße |
| 0x03 | Fehlerhafte Datenlänge aus EEPROM |
| 0x04 | Fehlerhafte Datencontainer aus EEPROM |
| 0x05 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x06 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x07 | EEPROM-Manager Fehler |
| 0xFF | ungueltiger Wert |

### TABBMLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABWECKGRUND

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Reset |
| 0x01 | Diebstahlwarnanlage |
| 0x02 | Restwärme |
| 0x03 | CO2-Erkennung |
| 0x04 | Eject-Button |
| 0x05 | Abschaltung Klemme VA |
| 0x06 | Außenspiegel |
| 0x07 | Remote Services |
| 0x08 | Emergency call |
| 0x10 | Tuerkontakt vorne links |
| 0x11 | Tuerkontakt vorne rechts |
| 0x12 | Tuerkontakt hinten links |
| 0x13 | Tuerkontakt hinten rechts |
| 0x14 | Taster Fahrertuer (CA) |
| 0x15 | Taster Beifahrertuer (CA) |
| 0x16 | Taster Heckklappe oeffnen innen (TOEHKI) |
| 0x17 | Taster Oeffner Heckklappe (TOEHK) |
| 0x18 | Taster Oeffner Heckscheibe (TOEHS) |
| 0x19 | Heckklappenstatus (HKK) |
| 0x1A | Eingang Heckscheibenkontakt (HKK) |
| 0x1B | Motorhaubenkontakt |
| 0x1C | Tuerschloss entriegeln/Komfortoeffnen (Fahrertuer) |
| 0x1D | Tuerschloss verriegeln/Komfortschliessen (Fahrertuer) |
| 0x1E | Kurzschluss Klemme 30B |
| 0x20 | Start Stop Taster A |
| 0x21 | Start Stop Taster B |
| 0x22 | Hallsensor Eject |
| 0x23 | Center Lock/Unlock |
| 0x24 | Parkstellung Automatik |
| 0x25 | Lichtschalter ein (redundant) |
| 0x26 | Schalter Warnblinken |
| 0x27 | Lenkstocktaster in Richtung  Blinken links  |
| 0x28 | Lenkstocktaster in Richtung  Blinken rechts  |
| 0x29 | Lenkstocktaster in Richtung  Lichthupe  |
| 0x2A | Schalter Innenbeleuchtung (Dachmodul) |
| 0x2B | Klemme 15 |
| 0x2C | EMF-Taster |
| 0x2D | Entertainment |
| 0x2E | Lenksaeulenverstellschalter |
| 0x2F | Niveauregulierung Luftfeder |
| 0x30 | Fernbedienungsdienste / RKE |
| 0x31 | Wakeup-Signal von TCU |
| 0x32 | Hotelschalter |
| 0x33 | Intelligenter Batterie Sensor, via LIN |
| 0x34 | Ablauf Timer Standheizung/lueften/klima |
| 0x35 | Kuehlmittelabfrage durch Kombi |
| 0x36 | Klemme 15 Wakeupleitung |
| 0x37 | Taster Fahrertuer hinten entriegeln (CA) |
| 0x38 | Taster Beifahrertuer hinten entriegeln (CA) |
| 0x39 | Taster Fahrertuer entriegeln kapazitiv (CA) |
| 0x3A | Taster Beifahrertuer entriegeln kapazitiv (CA) |
| 0x3B | Taster Fahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3C | Taster Beifahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3D | Bremslichtschalter |
| 0x3E | Kupplungsschalter |
| 0x3F | ungueltiger Weckgrund, Weckgrund nicht gesetzt |
| 0x81 | Weckursache  MOST |
| 0x82 | Weckursache  I_CAN |
| 0x84 | Weckursache  FA_CAN |
| 0x88 | Weckursache  BODY_CAN |
| 0x90 | Weckursache  D_CAN |
| 0xA0 | Weckursache  WECKLEITUNG |
| 0xC0 | Weckursache  ETHERNET_AKTIVIERUNGSLEITUNG |
| 0xFF | Weckursache ungultig |

### TABBUSLOADTOOHIGH

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABGRUNDSYSTEMKONTEXTNICHTKOMPLETT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ErrorMessage-Queue für eingehende Fehler ist voll |
| 0x02 | DiagnoseMaster Fehlerspeicher voll: keine Zuordnung möglich |
| 0x03 | DiagnoseMaster Fehlerspeicher voll: keine Umweltbedingungsdaten möglich |
| 0x04 | Softwarefehler: NULL_ZEIGER |
| 0x05 | ErrorMessage-Queue für eingehende CC-Meldungen ist voll |
| 0xFF | ungueltiger Wert |

### TABBUSMASKE

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | Default Wert |
| 0x00000001 | B-CAN |
| 0x00000002 | FA-CAN |
| 0x00000003 | B-CAN und FA-CAN |
| 0x00000004 | K-CAN |
| 0x00000005 | K-CAN und B-CAN |
| 0x00000006 | K-CAN und FA-CAN |
| 0x00000007 | K-CAN und FA-CAN  und B-CAN |
| 0x00000008 | D-CAN |
| 0x00000009 | D-CAN und B-CAN |
| 0x0000000A | D-CAN und FA-CAN |
| 0x0000000B | D-CAN und FA-CAN und B-CAN |
| 0x0000000C | D-CAN und K-CAN |
| 0x0000000D | D-CAN und K-CAN und B-CAN |
| 0x0000000E | D-CAN und K-CAN und FA-CAN |
| 0x0000000F | D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000010 | ZSG-CAN |
| 0x00000011 | ZSG-CAN und B-CAN |
| 0x00000012 | ZSG-CAN und FA-CAN |
| 0x00000013 | ZSG-CAN und B-CAN und FA-CAN |
| 0x00000014 | ZSG-CAN und K-CAN |
| 0x00000015 | ZSG-CAN und K-CAN und B-CAN |
| 0x00000016 | ZSG-CAN und K-CAN und FA-CAN |
| 0x00000017 | ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000018 | ZSG-CAN und D-CAN |
| 0x00000019 | ZSG-CAN und D-CAN und B-CAN |
| 0x0000001A | ZSG-CAN und D-CAN und FA-CAN |
| 0x0000001B | ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000001C | ZSG-CAN und D-CAN und K-CAN |
| 0x0000001D | ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000001E | ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000001F | ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000020 | FLEXRAY |
| 0x00000021 | FLEXRAY und B-CAN |
| 0x00000022 | FLEXRAY und FA-CAN |
| 0x00000023 | FLEXRAY und B-CAN und FA-CAN |
| 0x00000024 | FLEXRAY und K-CAN |
| 0x00000025 | FLEXRAY und K-CAN und B-CAN |
| 0x00000026 | FLEXRAY und K-CAN und FA-CAN |
| 0x00000027 | FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000028 | FLEXRAY und D-CAN |
| 0x00000029 | FLEXRAY und D-CAN und B-CAN |
| 0x0000002A | FLEXRAY und D-CAN und FA-CAN |
| 0x0000002B | FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000002C | FLEXRAY und D-CAN und K-CAN |
| 0x0000002D | FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000002E | FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000002F | FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000030 | ZSG-CAN und FLEXRAY |
| 0x00000031 | ZSG-CAN und FLEXRAY und B-CAN |
| 0x00000032 | ZSG-CAN und FLEXRAY und FA-CAN |
| 0x00000033 | ZSG-CAN und FLEXRAY und B-CAN und FA-CAN |
| 0x00000034 | ZSG-CAN und FLEXRAY und K-CAN |
| 0x00000035 | ZSG-CAN und FLEXRAY und K-CAN und B-CAN |
| 0x00000036 | ZSG-CAN und FLEXRAY und K-CAN und FA-CAN |
| 0x00000037 | ZSG-CAN und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000038 | ZSG-CAN und FLEXRAY und D-CAN |
| 0x00000039 | ZSG-CAN und FLEXRAY und D-CAN und B-CAN |
| 0x0000003A | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN |
| 0x0000003B | ZSG-CAN und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000003C | ZSG-CAN und FLEXRAY und D-CAN und K-CAN |
| 0x0000003D | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000003E | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000003F | ZSG-CAN und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000040 | MOST |
| 0x00000041 | MOST und B-CAN |
| 0x00000042 | MOST und FA-CAN |
| 0x00000043 | MOST und B-CAN und FA-CAN |
| 0x00000044 | MOST und K-CAN |
| 0x00000045 | MOST und K-CAN und B-CAN |
| 0x00000046 | MOST und K-CAN und FA-CAN |
| 0x00000047 | MOST und K-CAN und FA-CAN  und B-CAN |
| 0x00000048 | MOST und D-CAN |
| 0x00000049 | MOST und D-CAN und B-CAN |
| 0x0000004A | MOST und D-CAN und FA-CAN |
| 0x0000004B | MOST und D-CAN und FA-CAN und B-CAN |
| 0x0000004C | MOST und D-CAN und K-CAN |
| 0x0000004D | MOST und D-CAN und K-CAN und B-CAN |
| 0x0000004E | MOST und D-CAN und K-CAN und FA-CAN |
| 0x0000004F | MOST und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000050 | MOST und ZSG-CAN |
| 0x00000051 | MOST und ZSG-CAN und B-CAN |
| 0x00000052 | MOST und ZSG-CAN und FA-CAN |
| 0x00000053 | MOST und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000054 | MOST und ZSG-CAN und K-CAN |
| 0x00000055 | MOST und ZSG-CAN und K-CAN und B-CAN |
| 0x00000056 | MOST und ZSG-CAN und K-CAN und FA-CAN |
| 0x00000057 | MOST und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000058 | MOST und ZSG-CAN und D-CAN |
| 0x00000059 | MOST und ZSG-CAN und D-CAN und B-CAN |
| 0x0000005A | MOST und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000005B | MOST und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000005C | MOST und ZSG-CAN und D-CAN und K-CAN |
| 0x0000005D | MOST und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000005E | MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000005F | MOST und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000060 | MOST und FLEXRAY |
| 0x00000061 | MOST und FLEXRAY und B-CAN |
| 0x00000062 | MOST und FLEXRAY und FA-CAN |
| 0x00000063 | MOST und FLEXRAY und B-CAN und FA-CAN |
| 0x00000064 | MOST und FLEXRAY und K-CAN |
| 0x00000065 | MOST und FLEXRAY und K-CAN und B-CAN |
| 0x00000066 | MOST und FLEXRAY und K-CAN und FA-CAN |
| 0x00000067 | MOST und FLEXRAY und K-CAN und FA-CAN  und B-CAN |
| 0x00000068 | MOST und FLEXRAY und D-CAN |
| 0x00000069 | MOST und FLEXRAY und D-CAN und B-CAN |
| 0x0000006A | MOST und FLEXRAY und D-CAN und FA-CAN |
| 0x0000006B | MOST und FLEXRAY und D-CAN und FA-CAN und B-CAN |
| 0x0000006C | MOST und FLEXRAY und D-CAN und K-CAN |
| 0x0000006D | MOST und FLEXRAY und D-CAN und K-CAN und B-CAN |
| 0x0000006E | MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN |
| 0x0000006F | MOST und FLEXRAY und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000070 | MOST und FLEXRAY und ZSG-CAN |
| 0x00000071 | MOST und FLEXRAY und ZSG-CAN und B-CAN |
| 0x00000072 | MOST und FLEXRAY und ZSG-CAN und FA-CAN |
| 0x00000073 | MOST und FLEXRAY und ZSG-CAN und B-CAN und FA-CAN |
| 0x00000074 | MOST und FLEXRAY und ZSG-CAN und K-CAN |
| 0x00000075 | MOST und FLEXRAY und ZSG-CAN und K-CAN und B-CAN |
| 0x00000076 | MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN |
| 0x00000077 | MOST und FLEXRAY und ZSG-CAN und K-CAN und FA-CAN  und B-CAN |
| 0x00000078 | MOST und FLEXRAY und ZSG-CAN und D-CAN |
| 0x00000079 | MOST und FLEXRAY und ZSG-CAN und D-CAN und B-CAN |
| 0x0000007A | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN |
| 0x0000007B | MOST und FLEXRAY und ZSG-CAN und D-CAN und FA-CAN und B-CAN |
| 0x0000007C | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN |
| 0x0000007D | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und B-CAN |
| 0x0000007E | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN |
| 0x0000007F | MOST und FLEXRAY und ZSG-CAN und D-CAN und K-CAN und FA-CAN und B-CAN |
| 0x00000080 | ETHERNET |
| 0x00000100 | Eigene Diagnose |
| 0x00000200 | TAS |
| 0xFFFFFFFF | ungueltig |

### TABVCMWRITEERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | EEPROM-Manager Fehler |
| 0x02 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x03 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x04 | Maximale Datenlänge überschritten |
| 0x05 | Allgemeiner Fehler |
| 0xFF | ungueltiger Wert |
