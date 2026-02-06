# x_bco.prg

## General

|  |  |
| --- | --- |
| File | x_bco.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 144 |
| Origin | BMW UX-EE-2 Warneke |
| Revision | 9.005 |
| Author | BMW-Motorrad UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher, |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Body-Controller |  |  |
| ORIGIN | string | BMW UX-EE-2 Warneke |  |  |
| REVISION | string | 9.005 |  |  |
| AUTHOR | string | BMW-Motorrad UX-EE-1 Kiesewetter, Dräxlmaier UX-EE-1 Rätscher,  |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.70 |  |  |
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

### STATUS_LED_HERSTELLDATEN

Liest die Herstelldaten aus dem LED-SW Steuergerät $22 ReadDataByIdentifier 0xE08B LED_EVG_HERSTELLDATEN

_No arguments._

### STATUS_LED_STATISTIK_PCB_TEMP

Liest die Temperatur Statistik der Platine aus dem LED-SW Steuergerät $22 ReadDataByIdentifier 0xE0F7 LED_STATISTIK_PCB_TEMP

_No arguments._

### STATUS_LED_STATISTIK_NTC_TEMP

Liest die Temperatur Statistik des NTC-Fühlers aus dem LED-SW Steuergerät $22 ReadDataByIdentifier 0xE0F9 LED_STATISTIK_NTC_TEMP

_No arguments._

### STATUS_LED_STATISTIK_PWM_LUEFTER

Liest die PWM Statistik des Lüfters aus dem LED-SW Steuergerät $22 ReadDataByIdentifier 0xE0F8 LED_STATISTIK_PWM_LUEFTER

_No arguments._

### STATUS_LED_STATISTIK_EINSCHALTDAUER

Liest die Statistik der Einschaltdauer LED-Strang 1-8 aus dem LED-SW Steuergerät $22 ReadDataByIdentifier 0xE0FB LED_STATISTIK_EINSCHALTDAUER

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

### ARG_0XE010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horn; 1=EIN, 0=AUS |

### ARG_0XE011_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREMSLICHT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem das Bremslicht KL_54 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE086_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZSW1 | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Zusatzscheinwerfer 1 |
| ZSW2 | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Zusatzscheinwerfer 2 |
| BEL_TASTER_ZSW | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Beleuchtung Taster Zusatzscheinwerfer |

### ARG_0XE088_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TFL1 | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Tagfahrlicht 1 |
| TFL2 | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Tagfahrlicht 2 |
| BEL_TASTER_TFL | % | high | unsigned char | - | - | 254.0 | 100.0 | 0.0 | 0.0 | 100.0 | PWM Wert Beleuchtung Taster Tagfahrlicht |

### ARG_0XE090_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLINKER_VR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Blinker vorne rechts 1=EIN, 0=AUS |
| BLINKER_VL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Blinker vorne links 1=EIN, 0=AUS |
| BLINKER_HR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Blinker hinten rechts 1=EIN, 0=AUS |
| BLINKER_HL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Blinker hinten links 1=EIN, 0=AUS |

### ARG_0XE091_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBLENDLICHT_PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem der Ausgang Abblendlicht angesteuert werden soll -> 0% bis 100% -> Wobei 0%  aus  bedeutet bei Codierung XENON: nur 0 oder 100% zulässig |

### ARG_0XE092_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERNLICHT_PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert, mit dem der Ausgang Fernlicht angesteuert werden soll -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE093_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STANDLICHT_VORN_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Standlicht vorne 1; 1=EIN, 0=AUS |
| STANDLICHT_VORN_2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Standlicht vorne 2; 1=EIN, 0=AUS |

### ARG_0XE094_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAGFAHRLICHT_PWM | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem das Tagfahrlicht angesteuert werden soll -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE095_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RUECKLICHT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem das Rücklicht (Kl_58R) angesteuert werden soll -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE096_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KENNZEICHENLEUCHTE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Kennzeichenleuchte |

### ARG_0XE097_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRIFFHEIZUNG_LINKS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem der linke Heizgriff betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| GRIFFHEIZUNG_RECHTS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert in %, mit dem der rechte Heizgriff betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### ARG_0XE099_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STECKDOSE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steckdose 0 ==> aus; 1 ==> ein |

### ARG_0XE09C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SZ_STECKER_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Sonderzubehör Stecker |

### ARG_0XE0A1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERNLICHT_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Fernlicht Eingang 1=EIN, 0=AUS |

### ARG_0XE0A2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLINKER_EINGANG | 0-n | - | unsigned char | - | TAB_MR_BLINKER_EINGANG_ARG | 1.0 | 1.0 | 0.0 | - | - | Blinker Eingang |

### ARG_0XE0A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Hupe Eingang 1=EIN, 0=AUS |

### ARG_0XE0A4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREMSSCHALTER_HAND_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bremsschalter Hand Eingang 1 ==> betätigt 0 ==> nicht betätigt |
| BREMSSCHALTER_FUSS_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bremsschalter Fuß Eingang 1 ==> betätigt 0 ==> nicht betätigt |

### ARG_0XE0A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRIFFHEIZUNG_EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_GRIFFHEIZUNG_EINGANG_FKT_ARG | 1.0 | 1.0 | 0.0 | - | - | Griffheizung Eingang |

### ARG_0XE0A8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TANKGEBER_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tankgeber Versorgung; 1=EIN, 0=AUS |

### ARG_0XE0B4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_SCHEINWERFER_FERNLICHT_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Scheinwerfer EVG Fernlicht_1; 1=EIN, 0=AUS |

### ARG_0XE0B6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_SCHEINWERFER_FERNLICHT_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | LED Scheinwerfer EVG Fernlicht_2; 1=EIN, 0=AUS |

### ARG_0XE0B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_SCHEINWERFER_ABBLENDLICHT_EIN | 0-n | high | unsigned char | - | TAB_MR_LED_SCHEINWERFER_ABBLENDLICHT_EIN_ARG | - | - | - | - | - | LED_SCHEINWERFER_ABBLENDLICHT_EIN |

### ARG_0XE181_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GBL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerung Gefahrenbremslicht: 0 = aus, 1 = ein |

### ARG_0XE195_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Präsentationsmodus: 1 = aktiv, 0 = nicht aktiv |

### ARG_0XE1CB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER | 0-n | high | unsigned char | - | TAB_MR_ARG_TASTER_LIN | - | - | - | - | - | LIN Taster (IN_SWCL_EXTS_BOT_MOTBK_2010) |

### ARG_0XF005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZAEHLER | + | - | 0-n | high | unsigned char | - | TAB_MR_ZAEHLER_BCO | - | - | - | - | - | Zähler der zurückgesetzt werden soll |

### ARG_0XFD02_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LAST_HEATING_STEP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Last heating step for Handler Heating |
| LAST_VALID_AMBIENT_TEMPERATURE_WERT | °C | high | unsigned char | - | - | 2.0 | 1.0 | 80.0 | -40.0 | 87.0 | Last Valid Temperature |
| AVG_BAT_VOLTAGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Average Battery Voltage sense |
| FUEL_LEVEL_SENSE_AVG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Fuel Level Sense Average |
| PRODUCTION_MOD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Production Mode |
| HBG_VAL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | hbgval |
| HBG_STATE_FLAG_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | hbg state flag |
| STAT_LIGHT_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | Light state values 0x01 LastValidAdlState 0x02 LastValidDDLState 0x04 LastValidLblState 0x08 LastValidLicenseLightState 0x10 LastValidFrontLight1State 0x20 LastValidFrontLight2State 0x40 LastValidRearLightState 0x80 LastValidLinDdlAsPolState |
| STAT_LIGHT_STATE_THL_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | LastValidThlState RIGHT_ON 3; LEFT_ON 2; HAZARD_ON 1; LIGHTS_OFF 0; |
| STAT_LIGHT_STATE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | - | - | 0x01 LastValidHblState    0x02 LastValidBrlState    0x04 LastValidLEDPOLState |
| STAT_UNUSED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Unused_e25_01 |

### ARG_0XFD06_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUFACTURING_DATA_1_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_2_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_3_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_4_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_5_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_6_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_7_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_8_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_9_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_10_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_11_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_12_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_13_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_14_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_15_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_16_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_17_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_18_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_19_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_20_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | End Of Line  Manufacutering data |

### ARG_0XFD0A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HBG_VOL_WRITE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | It provides the details as 1  write default value  0 No change |

### ARG_0XFD0B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HBG_STATE_FLAG_WRITE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | It provides the details as 1  write default value  0 No change |

### ARG_0XFD20_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_DATA1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01    WakeUpLine 0x02    TurnIndicatorLightRearRight 0x04    ParkingFrontLight2 0x08    TurnIndicatorLightFrontRight 0x10    SpeedSensorSupply 0x20    ParkingFrontLight1 0x40    TurnIndicatorLightFrontLeft 0x80    FutureRequirements |
| STAT_CONTROL_DATA2_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01    PotFuelLevelSupplyMAPPSW 0x02    TurnIndicatorLightRearLeft 0x04    SpeedSensorConti 0x08    VBatPullUpEnable 0x10    Socket 0x20    VCCEnable 0x40    LicensePlate 0x80    PotentFuelLevelSupply |
| STAT_CONTROL_DATA3_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01    SocketHolding 0x02    PowerRST 0x08    B_CANStrobe 0x10    STFETDriversDisable 0x20    OutputBatteryCharge 0x40    ExtraEquipConn 0x80    Horn |
| STAT_CONTROL_DATA4_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x01    EnableLIN1 0x02    TxD_LIN1 |

### ARG_0XFD21_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BRAKLIGHTDUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Brake Light Duty |
| PARKING_REAR_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parking Rear Light Duty |
| LOW_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Low Beam Light Duty |
| DAY_DRIVE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Day Drive Light Duty |
| HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | High Beam Light Duty |
| HANDLER_HEATER_LEFT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Handler Heater Left Duty |
| HANDLER_HEATER_RIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Handler Heater Right Duty |

### BF_LED_EVG_HERSTELLERDATEN_STRUCT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROD_DAY | 0-n | high | unsigned long | 0x0000001F | - | - | - | - | Produktionstag |
| STAT_PROD_MON | 0-n | high | unsigned long | 0x000001E0 | - | - | - | - | Produktionsmonat |
| STAT_PROD_YEAR | 0-n | high | unsigned long | 0x00003E00 | - | - | - | - | Produktionsjahr |
| STAT_HW_MA | 0-n | high | unsigned long | 0x00001C00 | - | - | - | - | Hardware Major Version |
| STAT_HW_MI | 0-n | high | unsigned long | 0x000E0000 | - | - | - | - | Hardware Minor Version |
| STAT_SW_MA | 0-n | high | unsigned long | 0x00700000 | - | - | - | - | Software Major Version |
| STAT_SW_MI | 0-n | high | unsigned long | 0x38000000 | - | - | - | - | Software Minor Version |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DDLONHBLOFFORLBLON

| WERT | TEXT |
| --- | --- |
| 0 | DDL_LHB_OFF |
| 1 | DDL_LHB_HBL_OFF |
| 2 | DDL_LHB_LBL_ON |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### EXTENDED_ENERGY_MODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Erweiterter Betriebsmodus nicht gesetzt |
| 1 | Erweiterter Betriebsmodus 1 |
| 2 | Erweiterter Betriebsmodus 2 |
| 3 | Erweiterter Betriebsmodus 3 |
| 4 | Erweiterter Betriebsmodus 4 |
| 5 | Erweiterter Betriebsmodus 5 |
| 6 | Erweiterter Betriebsmodus 6 |
| 7 | Erweiterter Betriebsmodus 7 |
| 8 | Erweiterter Betriebsmodus 8 |
| 9 | Erweiterter Betriebsmodus 9 |
| 10 | Erweiterter Betriebsmodus 10 |
| 11 | Erweiterter Betriebsmodus 11 |
| 12 | Erweiterter Betriebsmodus 12 |
| 13 | Erweiterter Betriebsmodus 13 |
| 14 | Erweiterter Betriebsmodus 14 |
| 15 | Erweiterter Betriebsmodus 15 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027200 | Energiesparmode  aktiv | 0 |
| 0x800E80 | Präsentationsmodus aktiv | 0 |
| 0x800E81 | Abblendlicht Leitungsunterbrechung | 0 |
| 0x800E82 | Abblendlicht Kurzschluss nach Masse | 0 |
| 0x800E83 | Horn Leitungsunterbrechung | 0 |
| 0x800E84 | Horn Kurzschluss nach Masse | 0 |
| 0x800E85 | SZ-Stecker Kurzschluss nach Masse oder Ueberlast | 0 |
| 0x800E86 | Tagfahrlicht Leitungsunterbrechung | 0 |
| 0x800E87 | Tagfahrlicht Kurzschluss nach Masse | 0 |
| 0x800E88 | Fernlicht Leitungsunterbrechung | 0 |
| 0x800E89 | Fernlicht Kurzschluss nach Masse | 0 |
| 0x800E8A | Heizgriff links Leitungsunterbrechung | 0 |
| 0x800E8B | Heizgriff links Kurzschluss nach Masse | 0 |
| 0x800E8C | Heizgriff rechts Leitungsunterbrechung | 0 |
| 0x800E8D | Heizgriff rechts Kurzschluss nach Masse | 0 |
| 0x800E8E | Bremslicht Leitungsunterbrechung | 0 |
| 0x800E8F | Bremslicht Kurzschluss nach Masse | 0 |
| 0x800E90 | Ruecklicht Leitungsunterbrechung | 0 |
| 0x800E91 | Ruecklicht Kurzschluss nach Masse | 0 |
| 0x800E92 | Blinker vorn links Leitungsunterbrechung oder Kurzschluss nach Ubat | 0 |
| 0x800E93 | Blinker vorn links Kurzschluss nach  Masse | 0 |
| 0x800E94 | Blinker vorn rechts Leitungsunterbrechung  oder Kurzschluss nach Ubat | 0 |
| 0x800E95 | Blinker vorn rechts Kurzschluss nach  Masse | 0 |
| 0x800E96 | Blinker hinten rechts Leitungsunterbrechung  oder Kurzschluss nach Ubat | 0 |
| 0x800E97 | Blinker hinten rechts Kurzschluss  nach  Masse | 0 |
| 0x800E98 | Blinker hinten links Leitungsunterbrechung  oder Kurzschluss nach Ubat | 0 |
| 0x800E99 | Blinker hinten links Kurzschluss  nach  Masse | 0 |
| 0x800E9A | Standlicht vorn 1 Leitungsunterbrechung | 0 |
| 0x800E9B | Standlicht vorn 1 Kurzschluss nach Masse | 0 |
| 0x800E9C | Standlicht vorn 2 Leitungsunterbrechung | 0 |
| 0x800E9D | Standlicht vorn 2 Kurzschluss nach Masse | 0 |
| 0x800E9E | Kennzeichenleuchte Leitungsunterbrechung | 0 |
| 0x800E9F | Kennzeichenleuchte Kurzschluss nach Masse | 0 |
| 0x800EA0 | Steckdose Kurzschluss nach Masse oder Ueberlast | 0 |
| 0x800EA1 | Bremschalter hinten Kurzschluss nach Ubat | 0 |
| 0x800EA2 | Bremsschalter hinten Kurzschluss nach Masse | 0 |
| 0x800EA3 | Bremsschalter vorne Kurzschluss nach Ubat | 0 |
| 0x800EA4 | Bremsschalter vorne Kurzschluss nach Masse | 0 |
| 0x800EA5 | Rad Drehzahlsensor Kurzschluss nach Ubat | 0 |
| 0x800EA6 | Rad Drehzahlsensor Leitungsunterbrechung | 0 |
| 0x800EA7 | Rad Drehzahlsensor Kurzschluss nach Masse | 0 |
| 0x800EA8 | Ladekontrollleuchte aktiv | 0 |
| 0x800EA9 | Tankgeber Leitungsunterbrechung oder Kurzschluss nach Ubat | 0 |
| 0x800EAA | Codierung : Codierdatenübertragungsfehler | 0 |
| 0x800EAB | Tankgeber Kurzschluss nach Masse | 0 |
| 0x800EAC | Tankgeber Versorgung Kurzschluss nach Masse | 0 |
| 0x800EAD | Tankgeber Versorgung Kurzschluss nach Ubat | 0 |
| 0x800EAE | Generatorvorerregung Leitungsunterbrechung | 0 |
| 0x800EAF | Generatorvorerregung Kurzschluss nach Masse | 0 |
| 0x800EB0 | Außentemperatursensor Leitungsunterbrechung | 0 |
| 0x800EB1 | Außentemperatursensor Kurzschluss nach Masse | 0 |
| 0x800EB2 | Steckdose Ueberlast waehrend dem Laden der Batterie | 0 |
| 0x800EB3 | Hardwarefehler Steuergeraet | 0 |
| 0x800EB4 | Softwarefehler Steuergeraet | 0 |
| 0x800EB6 | LED Scheinwerfer EVG  Fehler Spannungsversorgung | 0 |
| 0x800EB7 | LED Scheinwerfer EVG  Leistungsreduzierung Stand | 0 |
| 0x800EB8 | LED Scheinwerfer EVG Fernlicht Kanal 5  Leitungsunterbrechung | 0 |
| 0x800EB9 | LED Scheinwerfer EVG  Fehler Thermomanagement | 0 |
| 0x800EBA | LED Scheinwerfer EVG Abblendlicht  Kanal 1 Kurzschluss | 0 |
| 0x800EBB | LED Scheinwerfer EVG  Leistungsreduzierung Thermomanagement | 0 |
| 0x800EBC | Außentemperatursensor Kurzschluss nach Ubat | 0 |
| 0x800EBD | LED Scheinwerfer EVG  Fehler Kommunikation | 1 |
| 0x800EBE | LED Scheinwerfer EVG  Interner SG Fehler | 0 |
| 0x800EBF | LED Scheinwerfer EVG  Softwareversion ungueltig | 0 |
| 0x800EC0 | Blinker vorne links Kurzschluss  nach  Ubat | 0 |
| 0x800EC1 | Blinker vorne rechts Kurzschluss  nach  Ubat | 0 |
| 0x800EC2 | Blinker hinten links Kurzschluss  nach  Ubat | 0 |
| 0x800EC3 | Blinker hinten rechts Kurzschluss  nach  Ubat | 0 |
| 0x800EC4 | Abblendlicht Kurzschluss nach Ubat | 0 |
| 0x800EC5 | Horn Kurzschluss nach Ubat | 0 |
| 0x800EC6 | Steckdose Ladespannung zu groß waehrend dem Laden der Batterie | 0 |
| 0x800EC7 | Fernlicht Kurzschluss nach Ubat | 0 |
| 0x800EC8 | Heizgriff links Kurzschluss nach Ubat | 0 |
| 0x800EC9 | Heizgriff rechts Kurzschluss nach Ubat | 0 |
| 0x800ECA | Bremslicht Kurzschluss nach Ubat | 0 |
| 0x800ECB | Taster zukuenftige Anforderungen Plausibilisierung | 0 |
| 0x800ECC | Tagfahrlicht Kurzschluss nach Ubat | 0 |
| 0x800ECD | Taster Griffheizung Plausibilisierung | 0 |
| 0x800ECE | Steckdose Ladespannung zu gering waehrend dem Laden der Batterie | 0 |
| 0x800ECF | Generatorvorerregung Kurzschluss nach Ubat | 0 |
| 0x800ED0 | Bremschalter vorne Leitungsunterbrechung | 0 |
| 0x800ED1 | Bremschalter hinten Leitungsunterbrechung | 0 |
| 0x800ED2 | LED Scheinwerfer EVG Abblendlicht Kanal 2  Leitungsunterbrechung | 0 |
| 0x800ED3 | LED Scheinwerfer EVG Fernlicht Kanal 6  Leitungsunterbrechung | 0 |
| 0x800ED4 | LED Scheinwerfer EVG Fernlicht  Kanal 5  Kurzschluss | 0 |
| 0x800ED5 | LED Scheinwerfer EVG  Seriennummer ungueltig | 0 |
| 0x800ED6 | LED Scheinwerfer EVG Tagfahrlicht  Kanal 8 Kurzschluss | 0 |
| 0x800ED7 | LED Scheinwerfer EVG  NTC Abblendlicht ungueltig | 0 |
| 0x800ED8 | LED Scheinwerfer EVG Abblendlicht Kanal 1  Leitungsunterbrechung | 0 |
| 0x800ED9 | LED Scheinwerfer EVG  Notprogramm aktiv | 0 |
| 0x800EDA | LED Scheinwerfer EVG Fernlicht  Kanal 6  Kurzschluss | 0 |
| 0x800EDB | LED Scheinwerfer EVG Abblendlicht  Kanal 2 Kurzschluss | 0 |
| 0x800EDC | LED Scheinwerfer EVG  NTC Fernlicht ungueltig | 0 |
| 0x800EDD | LED Scheinwerfer EVG Tagfahrlicht Kanal 8  Leitungsunterbrechung | 0 |
| 0x800EDE | Codierung : Steuergerät ist nicht codiert | 0 |
| 0x800EDF | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x800EE0 | NVM_E_ERASE_FAILED | 0 |
| 0x800EE1 | FLS_E_COMPARE_FAILED | 0 |
| 0x800EE2 | FLS_E_ERASE_FAILED | 0 |
| 0x800EE3 | NVM_E_READ_FAILED | 0 |
| 0x800EE4 | NVM_E_WRITE_FAILED | 0 |
| 0x800EE5 | NVM_E_READ_ALL_FAILED | 0 |
| 0x800EE6 | FLS_E_WRITE_FAILED | 0 |
| 0x800EE7 | NVM_E_CONTROL_FAILED | 0 |
| 0x800EE8 | Codierung : Codiersignaturfehler | 0 |
| 0x800EE9 | FLS_E_READ_FAILED | 0 |
| 0x800EEA | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x800EF0 | Fehler Tagfahrlicht LIN slave 1 | 0 |
| 0x800EF1 | Fehler Tagfahrlicht LIN slave 2 | 0 |
| 0x800EF2 | Fehler LIN Zusatzscheinwerfer | 0 |
| 0x800EF3 | LED Scheinwerfer EVG Positionslicht  Kanal 8 Kurzschluss | 0 |
| 0x800EF4 | LED Scheinwerfer EVG Positionslicht Kanal 8  Leitungsunterbrechung | 0 |
| 0x800EF5 | Fehler LIN Tagfahrlicht | 0 |
| 0x800FFA | Klemme 15 Hardware unplausibel | 1 |
| 0x800FFD | Unterspannung Batterie | 1 |
| 0x800FFE | Ueberspannung Batterie | 1 |
| 0x800FFF | Weckleitung Kurzschluss nach Masse | 0 |
| 0x804803 | Produktionsmode aktiv | 0 |
| 0x804A7F | LED Scheinwerfer EVG  Fehler LED Kanaele | 0 |
| 0xE5845F | CAN Bus Off | 1 |
| 0xE58C00 | LED EVG Nachricht Zusatzinformation LED Motorrad 2010 Zeitüberschreitung | 0 |
| 0xE58C01 | LED EVG Nachricht Status Kanal LED Motorrad 2010 Zeitüberschreitung | 0 |
| 0xE58C02 | LED EVG Nachricht Spannung LED Motorrad 2010 Zeitüberschreitung | 0 |
| 0xE58C03 | LED EVG Nachricht Status LED Motorrad 2010 Zeitüberschreitung | 0 |
| 0xE58C04 | LIN ZSB Nachricht Eingang_Schalterblock_Erweiterung_Motorrad_2010_LIN Zeitueberschreitung | 0 |
| 0xE5941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59420 | CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xE59422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5942A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5942C | CAN SEB Nachricht Sensorbox_ID1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5942E | CAN SEB Nachricht Sensorbox_ID4_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59432 | CAN DWA Nachricht Status_DWA_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59434 | CAN FSA-BCO Nachricht Status_Erweitert_Funktion_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE59442 | CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59446 | CAN DME Nachricht Modus_Fahrzeug_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xE59454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xE59455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xE5945E | CAN AE Nachricht Daten_Antrieb_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5945F | CAN OBC Nachricht Status_DCDC_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59461 | CAN AE Nachricht Anzeige_Antrieb_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59468 | CAN SEB Nachricht Sensorbox_ID7_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5946D | CAN AE Nachricht Anzeige_Antrieb_Motorrad_2010: Alive Fehler | 1 |
| 0xE5946E | CAN AE Nachricht Anzeige_Antrieb_Motorrad_2010: CRC Fehler | 1 |
| 0xE59474 | CAN AE Nachricht Daten_Antrieb_Motorrad_2010:  Alive Fehler | 1 |
| 0xE59475 | CAN AE Nachricht Daten_Antrieb_Motorrad_2010: CRC Fehler | 1 |
| 0xE59485 | CAN BCA Nachricht Steuerung_Sonderfunktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUNC_DDL_AUTO

| WERT | TEXT |
| --- | --- |
| 0 | DDL_AUTO_OFF |
| 1 | DDL_AUTO_TIME_DEPENDENCE |
| 2 | DDL_AUTO_WAY_DEPENDENCE |
| 3 | DDL_AUTO_TIME_AND_WAY_DEPENDENCE |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | Spannung des Bordnetzes | V | - | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x1604 | KL15 STATUS | 0/1 | High | 0x01 | - | 1.0 | 1.0 | 0.0 |
| 0x1605 | The voltage at the highbeam at the LED-ECU. | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x1606 |  the voltage at the dipped-beam  at the LED-ECU. | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x1607 |  the actual temperature of the the NTC number 1. | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x1608 | the actual temperature of the the NTC number 2. | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x800EEB | DEM_EVENT_E12_WRITE_FAILED | 0 |
| 0x800EEC | DEM_EVENT_E13_WRITE_FAILED | 0 |
| 0x800EED | DEM_EVENT_E17_WRITE_FAILED | 0 |
| 0x800EEE | DEM_EVENT_E18_WRITE_FAILED | 0 |
| 0x800EEF | DEM_EVENT_E19_WRITE_FAILED | 0 |
| 0x800FFB | SEK Unterspannung Batterie | 1 |
| 0x800FFC | SEK Ueberspannung Batterie | 1 |
| 0xE5941D | SEK_CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59421 | SEK_CAN KOMBI Nachricht Eingang_Schalterblock_Links_Motorrad_2010_CAN: Zeitüberschreitung | 1 |
| 0xE59423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59429 | SEK_CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE5942B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59433 | SEK_CAN DWA Nachricht Status_DWA_Motorrad_20100 - Zeitüberschreitung | 1 |
| 0xE59435 | SEK_CAN FSA-BCO Nachricht Status_Erweitert_Funktion_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE59443 | SEK_CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1603 | Spannung des Bordnetzes | V | - | unsigned int | - | 1.0 | 10.0 | 0.0 |
| 0x1604 | KL15 STATUS | 0/1 | High | 0x01 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### MR_DIGITALSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 2 | nicht lesbar |
| 0xFF | undefiniert |

### MR_DIGITAL_OUT_STEUERN

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 2 | intern ansteuern |
| 0xFF | nicht ansteuern |

### MR_STAT_LED_SCHEINWERFER

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | Kurzschluss erkannt |
| 2 | Unterbrechung erkannt |
| 3 | ein |
| 0xFF | ungueltiger Wert |

### MR_TAB_BCO_CALIBRATION

| WERT | TEXT |
| --- | --- |
| 0 | NOT_STARTED |
| 1 | RUNNING |
| 2 | FINISHED_OK |
| 3 | FINISHED_NOK |
| 0xFF | NOT_DEFINED |

### MR_TAB_LED_SCHEINWERFER_LEISTUNGSBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine Leistungsreduzierung |
| 1 | Leistungsreduzierung Thermomanagement |
| 2 | Leistungsreduzierung Stand |
| 0xFF | ungueltiger Wert |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

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

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RES_0X1602_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRG_VERSION_PRE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Pre Point Part of corresponding SGBD Version |
| STAT_PRG_VERSION_PAST_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Past Point Part of corresponding SGBD Version |
| STAT_PRG_VERSION_PATCH_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | prg patch version file |

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernlicht - Zähler Sekunden |
| STAT_FERNLICHT_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fernlicht - Zähler Minuten |
| STAT_FERNLICHT_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fernlicht - Zähler Tage |
| STAT_ABBLENDLICHT_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abblendlicht - Zähler Sekunden |
| STAT_ABBLENDLICHT_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Abblendlicht - Zähler Minuten |
| STAT_ABBLENDLICHT_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Ablendlicht - Zähler Tage |
| STAT_ZUSATZSCHEINWERFER_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zusatzscheinwerfer - Zähler Sekunden |
| STAT_ZUSATZSCHEINWERFER_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zusatzscheinwerfer - Zähler Minuten |
| STAT_ZUSATZSCHEINWERFER_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zusatzscheinwerfer - Zähler Tage |
| STAT_TAGFAHRLICHT_MAN_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht manuell - Zähler Sekunden |
| STAT_TAGFAHRLICHT_MAN_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht manuell - Zähler Minuten |
| STAT_TAGFAHRLICHT_MAN_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht manuell - Zähler Tage |
| STAT_TAGFAHRLICHT_AUTO_INT_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto unterbrochen vom Benutzer - Zähler Sekunden |
| STAT_TAGFAHRLICHT_AUTO_INT_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto unterbrochen vom Benutzer - Zähler Minuten |
| STAT_TAGFAHRLICHT_AUTO_INT_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto unterbrochen vom Benutzer - Zähler Tage |
| STAT_TAGFAHRLICHT_AUTO_AUS_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto aus - Zähler Sekunden |
| STAT_TAGFAHRLICHT_AUTO_AUS_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto aus - Zähler Minuten |
| STAT_TAGFAHRLICHT_AUTO_AUS_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto aus - Zähler Tage |
| STAT_TAGFAHRLICHT_AUTO_EIN_SEK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto ein - Zähler Sekunden |
| STAT_TAGFAHRLICHT_AUTO_EIN_MIN_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto ein - Zähler Minuten |
| STAT_TAGFAHRLICHT_AUTO_EIN_TAGE_WERT | d | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tagfahrlicht auto ein - Zähler Tage |

### RES_0XE010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn; 1=EIN, 0=AUS |

### RES_0XE011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Bremslicht KL_54 betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE086_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZSW1_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Zusatzscheinwerfer 1 |
| STAT_ZSW2_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Zusatzscheinwerfer 2 |
| STAT_BEL_TASTER_ZSW_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Beleuchtung Taster Zusatzscheinwerfer |

### RES_0XE088_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TFL1_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Tagfahrlicht 1 |
| STAT_TFL2_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Tagfahrlicht 2 |
| STAT_BEL_TASTER_TFL_WERT | % | high | unsigned char | - | - | 100.0 | 254.0 | 0.0 | PWM Wert Beleuchtung Taster Tagfahrlicht |

### RES_0XE090_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_VR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker vorne rechts 1=EIN, 0=AUS |
| STAT_BLINKER_VL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker vorne links 1=EIN, 0=AUS |
| STAT_BLINKER_HR_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker hinten rechts 1=EIN, 0=AUS |
| STAT_BLINKER_HL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker hinten links 1=EIN, 0=AUS |

### RES_0XE091_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Abblendlicht betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE092_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Fernlicht betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE093_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STANDLICHT_VORN_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Standlicht vorne 1; 1=EIN, 0=AUS |
| STAT_STANDLICHT_VORN_2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Standlicht vorne 2; 1=EIN, 0=AUS |

### RES_0XE094_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGFAHRLICHT_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Tagfahrlicht betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE095_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKLICHT_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem das Rücklicht (Kl_58R)  betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE096_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNZEICHENLEUCHTE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Kennzeichenleuchte |

### RES_0XE097_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRIFFHEIZUNG_LINKS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem der linke Heizgriff betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |
| STAT_GRIFFHEIZUNG_RECHTS_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert in %, mit dem der rechte Heizgriff betrieben wird -> 0% bis 100% -> Wobei 0%  aus  bedeutet |

### RES_0XE098_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKGEBER_ROH_WERT | mV | - | unsigned char | - | - | 19.6 | 1.0 | 0.0 | Auslesen des Tankgeber Rohwertes; Spannungsfall am Hebelgeber |
| STAT_FUELLSTAND_TANK_WERT | l | - | unsigned int | - | - | 0.05 | 1.0 | 0.0 | Tankinhalt in Liter |

### RES_0XE099_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STECKDOSE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Steckdose 0 ==> aus; 1 ==> ein |
| STAT_STECKDOSE_STROM_WERT | mA | - | int | - | - | 1.0 | 1.0 | 0.0 | Strom Steckdose; Bereich von -10000 bis 10000 mA |
| STAT_STECKDOSE_SPANNUNG_WERT | V | - | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Spannung Steckdose; Bereich von 0 bis 25,4V |

### RES_0XE09B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IMPULSE_WERT | 1/s | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sensorimpulse pro Sekunde (Raddrehzehlsensor Hinterrad) Geschwindigkeit [km/h] = Radumfang[m]/Zähnezahl*3.6*STAT_IMPULSE_WERT MR mit ABS => Ergebnis BCO 65535 1/s |
| STAT_GESCHWINDIGKEIT_WERT | km/h | - | unsigned int | - | - | 0.125 | 1.0 | 0.0 | Geschwindigkeit Hinterrad in km/h MR mit ABS: Ergebnis BCO 511,75 km/h |

### RES_0XE09C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SZ_STECKER_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sonderzubehör Stecker |
| STAT_SZ_STECKER_STROM_WERT | mA | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Laststrom Sonderzubehör Stecker; Bereich von 0 bis 2000 mA |

### RES_0XE09D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSS_HAND_WERT | mV | - | unsigned char | - | - | 19.6 | 1.0 | 0.0 | Bremsschalter Hand Bereich: 0 bis 5  Volt; Bremse betätigt 0,2 -> 1,2 Volt; Bremse nicht betätigt 1,2 -> 3,8 Volt |
| STAT_BREMSS_FUSS_WERT | mV | - | unsigned char | - | - | 19.6 | 1.0 | 0.0 | Bremsschalter Fuss Bereich: 0 bis 5  Volt; Bremse betätigt 0,2 -> 1,2 Volt; Bremse nicht betätigt 1,2 -> 3,8 Volt |
| STAT_BREMSS_HAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Bremsschalter Hand; 0 ==> nicht betätigt 1==> betätigt |
| STAT_BREMSS_FUSS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Bremsschalter Fuss; 0 ==> nicht betätigt 1==> betätigt |

### RES_0XE09E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL_61_WERT | V | - | unsigned char | - | - | 0.1 | 1.0 | 0.0 | analoger Generator Spannungswert (Kl. D+), der am BCO an der Kl. 61 anliegt: Kontrollleuchte geht AUS: Klemme D+ > Spannung_D+_max (12 V, Wert codierbar) Kontrollleuchte geht EIN: Klemme D+ < Spannung_D+_min (5 V, Wert codierbar) |
| STAT_LADEKONTROLLLEUCHTE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ladekontrollleuchte 0 = aus 1 = ein |

### RES_0XE0A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENTEMP_ROH_WERT | mV | - | unsigned char | - | - | 19.6 | 1.0 | 0.0 | Auslesen des Rohwertes Spannung Aussentemperaturfühler |
| STAT_AUSSENTEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatursensor in Grad Celsius |

### RES_0XE0A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fernlicht Eingang 1=EIN, 0=AUS |

### RES_0XE0A2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_EINGANG_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker Eingang links 1 ==> aktiv 0 ==> nicht aktiv |
| STAT_BLINKER_EINGANG_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker Eingang rechts 1 ==> aktiv 0 ==> nicht aktiv |
| STAT_BLINKER_EINGANG_RUECKSTELLUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker Eingang Rueckstellung  1 ==> aktiv 0 ==> nicht aktiv |
| STAT_BLINKER_EINGANG_WARNBLINKEN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blinker Eingang Warnblinken  1 ==> aktiv 0 ==> nicht aktiv |

### RES_0XE0A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hupe Eingang 1=EIN, 0=AUS |

### RES_0XE0A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSSCHALTER_HAND_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bremsschalter Hand Eingang 1 ==> betätigt 0 ==> nicht betätigt |
| STAT_BREMSSCHALTER_FUSS_EINGANG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bremsschalter Fuß Eingang 1 ==> betätigt 0 ==> nicht betätigt |

### RES_0XE0A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRIFFHEIZUNG_EINGANG_MR | 0-n | - | unsigned char | - | TAB_MR_GRIFFHEIZUNG_EINGANG_FKT | 1.0 | 1.0 | 0.0 | Griffheizung Eingang |

### RES_0XE0A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKGEBER_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tankgeber Versorgung; 1=EIN, 0=AUS |

### RES_0XE0B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SCHEINWERFER_1_MR | 0-n | high | unsigned char | - | TAB_MR_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | LED Scheinwerfer EVG Fernlicht_1 |

### RES_0XE0B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SCHEINWERFER_2_MR | 0-n | high | unsigned char | - | TAB_MR_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | LED Scheinwerfer EVG Fernlicht_2 |

### RES_0XE0B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SCHEINWERFER_ABBLENDLICHT_EIN_1 | 0-n | high | unsigned char | - | TAB_MR_LED_SCHEINWERFER_ABBLENDLICHT_EIN | - | - | - | Status LED_SCHEINWERFER_ABBLENDLICHT_EIN |

### RES_0XE0F0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_TEMP_NTC1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -55.0 | aktuelle Temperatur des NTC im Scheinwerfer |

### RES_0XE0F3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVG_LUEFTER_WERT | - | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelle Lüfteransteuerung 0% - 100% wobei 0% bedeutet 0V und 100% bedeutet 5V |

### RES_0XE0F5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_LED_1_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 1 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_2_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 2 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_3_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 3 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_4_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 4 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_5_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 5 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_6_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 6 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_7_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 7 betrieben wird, wobei 0% bedeutet aus |
| STAT_PWM_LED_8_WERT | % | high | unsigned char | - | - | 100.0 | 255.0 | 0.0 | aktuelles PWM Verhältnis 0% bis 100% mit dem der LED-Strang 8 betrieben wird, wobei 0% bedeutet aus |

### RES_0XE0F6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_LED1_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 1 betrieben wird |
| STAT_STROM_LED2_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 2  betrieben wird |
| STAT_STROM_LED3_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 3 betrieben wird |
| STAT_STROM_LED4_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 4 betrieben wird |
| STAT_STROM_LED5_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 5 betrieben wird |
| STAT_STROM_LED6_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 6 betrieben wird |
| STAT_STROM_LED7_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 7 betrieben wird |
| STAT_STROM_LED8_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktueller Strom (Effektivwert) mit dem der LED-Strang 8 betrieben wird |

### RES_0XE181_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GBL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Status Gefahrenbremslicht: 0 = aus, 1 = ein |

### RES_0XE1CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER | 0-n | high | unsigned char | - | TAB_MR_RES_TASTER_LIN | - | - | - | Status LIN Taster (IN_SWCL_EXTS_BOT_MOTBK_2010) |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_K0_CALIBRATION_WERT | - | - | + | Stufen | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | calibrated value of K0 |
| STAT_K1_CALIBRATION_WERT | - | - | + | Stufen | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | calibrated value of K0 |
| STAT_ROUTINE_RESULT | - | - | + | 0-n | - | unsigned char | - | MR_TAB_BCO_CALIBRATION | 1.0 | 1.0 | 0.0 | gives the result of the routine: NOT_STARTED (0) RUNNING (1) FINISHED_OK (2) FINISHED_NOK (3) |

### RES_0XFD01_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOAD_REJECT_CODING_MATRIX_WERT | HEX | high | unsigned long | - | - | - | - | - | Load reject Coding Matrix |
| STAT_CFG_LAGMODETIME_WERT | min | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | Lag mode time |
| STAT_CFG_WAKEUPMODETIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wake up mode time |
| STAT_CFG_REDUCELAGMODETIME_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reduce Lag mode time |
| STAT_LIGHTSTATE_MEMFUNCTION_ELECTRICALVEHICLE_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_Lightstate_LagMode 0x02 cfg_MemoryFunctionLight 0x04 cfg_ElectricalVehicle |
| STAT_CFG_DUTYPARKINGREARL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Parking rear light |
| STAT_CFG_DUTYBRAKELIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Brake light |
| STAT_CFG_DUTYBRAKELSUBFUNRL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Brake Light Substitute Function rear light |
| STAT_CFG_DUTYLOWBEAMLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Low Beam light |
| STAT_CFG_DUTYHIGHBEAMLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle High Beam light |
| STAT_CFG_BASICFREQUENCYPWM_WERT | Hz | high | unsigned char | - | - | 4.0 | 1.0 | 60.0 | Basic PWM freq |
| STAT_BRL_AND_POL_RELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_substFunctionActive 0x02 cfg_CANOrBrakeSwCoding 0x04 cfg_BrakeSwAnalOrHallSens 0x08 cfg_ABSPresent 0x10 cfg_FSAPresent 0x20 cfg_RearLightActive 0x40 cfg_POL1AndPOL2Active |
| STAT_CFG_PARKLTIMESWITCHON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parking Light Time switch on |
| STAT_CFG_PARKLPUSHBUTTONIND_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Parking Light Time Push button activation |
| STAT_CFG_BRAKESWDEBTIMEOCSC_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake switch Debounce time |
| STAT_CFG_ABSSWITCHDEBTIME_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | cfg_AbsSwitchDebTime Avoid switching on the brakelight during 'codified debounce time' due to 'invalid value' or 'switch defect' signal arrival coming from the ABS module. |
| STAT_DEACTIVATIONPOSITIONLIGHT_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_DeactivationPositionLight |
| STAT_LOWBEAMANDAUTHORITYRELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_CharacterHeadlight 0x02 cfg_LowBeamOffManually 0x04 cfg_LowBeamOnManually 0x08 cfg_LowBeamUseOfXenon 0x10 cfg_AuthorLightOFFAct |
| STAT_CFG_DISTANCE_WERT | m | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Elapsed Distance |
| STAT_CFG_ELAPSEDTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Elapsed time |
| STAT_TURNANDHAZARDRELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_DistanceActive      0x02 cfg_ElapsedTimeActive   0x04 cfg_AntiTheftWarnActive 0x08 cfg_USHazardWarnAct     0x10 cfg_AuthorLightOFFAct  0x30 cfg_CharTurnIndLightLoadFrontRi 0xC0 cfg_CharTurnIndLightLoadFrontLe |
| STAT_TURNANDPARKLIGHTRELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x03 cfg_CharTurnIndLightLoadRearRi                               0x0C cfg_ParkFLTypeLoad                                           0x30 cfg_LicenPlateTypeLoad         0xC0 cfg_CharTurnIndLightLoadRearLe |
| STAT_CFG_LAGMODETIMELBL_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LagModeTime Low beam light |
| STAT_CFG_SWITCHOFFTIMER3_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Emergency off (CAN Signal) and speed lower 5km/h and a expired time of XXXsec |
| STAT_CFG_SWITCHOFFTIMER2_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  KL15off  and speed lower 5km/h and a expired time of XXX sec |
| STAT_CFG_SWITCHOFFTIMER1_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | rpm < 500 1/min and speed lower 5km/h and a  expired time of XXXsec |
| STAT_CFG_LOWBEAMSTARTUPDELAY_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Once the application from the ecu wants to activate the output lbl, it must wait until the time is over according to coding parameter. |
| STAT_CFG_SOCKETNOMCURRENT_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Load nominal current socket |
| STAT_CFG_SOCKETOUTVOLTAGE_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Output voltage socket |
| STAT_CFG_SOCKETMINCURRENT_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | minimum load current socket |
| STAT_CFG_SOCKETOVERTIME_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Time overvoltage |
| STAT_CFG_SOCKETOVERRESETTIME_WERT | min | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Time overvoltage reset |
| STAT_CFG_SOCKETOVERCOUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Counter overvoltage |
| STAT_CFG_EECACTIVE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | extra equipment connector |
| STAT_CFG_EECCURRENT_WERT | A | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Load current extra equipment connector |
| STAT_CFG_EECOVERLOADTIME_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer Overload extra equipment connector |
| STAT_CFG_EECNORMALLOADTIMER_WERT | min | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer normal load extra equipment connector |
| STAT_CFG_EECOVERLOADCOUNTER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Counter overvoltage |
| STAT_CFG_BATTCHARGELEVELMAX_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | voltage Level_max. Parameter obsolete since K001-12-08-500. |
| STAT_CFG_BATTCHARGELEVELMIN_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | voltage Level_min. Parameter obsolete since K001-12-08-500. |
| STAT_BATTINDCHARGERELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_BattChargeFunctAct 0x02 cfg_BatChgGeneratorType 0x04 cfg_BatChgAnalysis 0x08 cfg_KL50Latch 0x10 cfg_BatChgKL50 |
| STAT_CFG_BATCHGRPMTHRSH_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Threshold rpm engine. Range is 0...25500 rpm. Resolution is 100 rpm of one digit. DOORS ID6491 |
| STAT_CFG_THRSHBATVTGLAMPON_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Lamp on |
| STAT_CFG_THRSHBATVTGLAMPOFF_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Lamp off |
| STAT_CFG_TIMERBATVTGLAMPON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Lamp on. |
| STAT_CFG_TIMERBATVTGLAMPOFF_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Lamp off. |
| STAT_CFG_TIMERKL50LATCH_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer KL50 Signal latch |
| STAT_CFG_FLSSIDESTAND_WERT | HEX | high | unsigned char | - | - | - | - | - | Use of function sidestand active / not active. |
| STAT_CFG_FLSWKS_WERT | HEX | high | unsigned char | - | - | - | - | - | Type of sensor Potentiometer or Warning Switch. |
| STAT_CFG_FLSMANUFACTURER_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Manufacturer fuel level sensor. 00 Bitron 01 SVDO 10 MAPPS 11 invalid |
| STAT_CFG_FLSTANKCAPACITY_WERT | l | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tank capacity. |
| STAT_CFG_FLSABSCISSA0_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[0] |
| STAT_CFG_FLSABSCISSA1_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[1] |
| STAT_CFG_FLSABSCISSA2_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[2] |
| STAT_CFG_FLSABSCISSA3_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[3] |
| STAT_CFG_FLSABSCISSA4_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[4] |
| STAT_CFG_FLSABSCISSA5_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[5] |
| STAT_CFG_FLSABSCISSA6_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[6] |
| STAT_CFG_FLSABSCISSA7_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[7] |
| STAT_CFG_FLSABSCISSA8_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[8] |
| STAT_CFG_FLSABSCISSA9_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[9] |
| STAT_CFG_FLSABSCISSA10_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[10] |
| STAT_CFG_FLSABSCISSA11_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[11] |
| STAT_CFG_FLSABSCISSA12_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[12] |
| STAT_CFG_FLSABSCISSA13_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[13] |
| STAT_CFG_FLSABSCISSA14_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[14] |
| STAT_CFG_FLSABSCISSA15_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[15] |
| STAT_CFG_FLSABSCISSA16_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[16] |
| STAT_CFG_FLSABSCISSA17_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | xx[17] |
| STAT_CFG_FLSORDINATE0_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[0] |
| STAT_CFG_FLSORDINATE1_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[1] |
| STAT_CFG_FLSORDINATE2_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[2] |
| STAT_CFG_FLSORDINATE3_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[3] |
| STAT_CFG_FLSORDINATE4_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[4] |
| STAT_CFG_FLSORDINATE5_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[5] |
| STAT_CFG_FLSORDINATE6_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[6] |
| STAT_CFG_FLSORDINATE7_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[7] |
| STAT_CFG_FLSORDINATE8_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[8] |
| STAT_CFG_FLSORDINATE9_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[9] |
| STAT_CFG_FLSORDINATE10_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[10] |
| STAT_CFG_FLSORDINATE11_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[11] |
| STAT_CFG_FLSORDINATE12_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[12] |
| STAT_CFG_FLSORDINATE13_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[13] |
| STAT_CFG_FLSORDINATE14_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[14] |
| STAT_CFG_FLSORDINATE15_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[15] |
| STAT_CFG_FLSORDINATE16_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[16] |
| STAT_CFG_FLSORDINATE17_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | yy[17] |
| STAT_CFG_HANDHEATRELATED_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_HAHPushButtonStMach 0x02 cfg_HAHActivBUSOrPushBut 0x04 cfg_HAHPresent 0x08 cfg_HAHAmbTempControl 0x10 cfg_HAHMemoryFunctAct |
| STAT_CFG_HAHNUMSTEPSPUSHBUT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of pwm steps push button |
| STAT_CFG_HAHPWMSTEP1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 1 |
| STAT_CFG_HAHPWMSTEP2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 2 |
| STAT_CFG_HAHPWMSTEP3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 3 |
| STAT_CFG_HAHPWMSTEP4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 4 |
| STAT_CFG_HAHPWMSTEP5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 5 |
| STAT_CFG_HAHPWMSTEP6_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 6 |
| STAT_CFG_HAHCHARCURVETEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Characteristic Curve of the temperature sensor. Temperature range -40...215°C |
| STAT_CFG_HAHCHARCURVETEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Characteristic Curve of the temperature sensor. Temperature range -40...215°C |
| STAT_CFG_HAHCHARCURVETEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Characteristic Curve of the temperature sensor. Temperature range -40...215°C |
| STAT_CFG_HAHCHARCURVETEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Characteristic Curve of the temperature sensor. Temperature range -40...215°C |
| STAT_CFG_HAHCHARCURVETEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Characteristic Curve of the temperature sensor. Temperature range -40...215°C |
| STAT_CFG_HAHCHARCURVEPWM1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 1 |
| STAT_CFG_HAHCHARCURVEPWM2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 2 |
| STAT_CFG_HAHCHARCURVEPWM3_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 3 |
| STAT_CFG_HAHCHARCURVEPWM4_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 4 |
| STAT_CFG_HAHCHARCURVEPWM5_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Handler heating level 5 |
| STAT_CFG_HANDHEATRELATED2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_HAHSWOffEngineIdle 0x02 cfg_HAHSWOffOrDutyCycle 0x0C cfg_HAHRepeatSysEval |
| STAT_CFG_THRSHDRPMENGLOWERLIMIT_WERT | 1/min | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Threshold rpm engine lower limit range 0 to 5100. DOORS ID6071 |
| STAT_CFG_THRSHDRPMENGUPPERLIMIT_WERT | 1/min | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Threshold rpm engine upper limit range 0 to 5100. DOORS ID6072 |
| STAT_CFG_HAHSWOFFTHRSHDRPM_WERT | 1/min | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Threshold rpm engine Handler heater switch off range 0 to 5100. DOORS ID6073 |
| STAT_CFG_HAHSWITCHOFFTHRSHDSPEED_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold speed handler heater Switch Off range 0 to 255 Km/h. DOORS ID6091 |
| STAT_CFG_TIMERDEBENGSPEEDLOWERLIMIT_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer debounce engine speed lower limit. DOORS ID6074 |
| STAT_CFG_TIMERDEBENGSPEEDUPPERLIMIT_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer debounce engine speed upper limit. DOORS ID6075 |
| STAT_CFG_HAHSWOFFTHRSHDSPEEDLOWER_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Speed Lower Threshold Handler Heater Switch. DOORS ID6076 |
| STAT_CFG_HAHSWOFFTHRSHDSPEEDUPPER_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Speed Upper Threshold Handler Heater Switch . DOORS ID6077 |
| STAT_CFG_HAHRIGHTDUTYCYCLEENGIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Idle Switch off Handler heater right. DOORS ID6079 |
| STAT_CFG_HAHLEFTDUTYCYCLEENGIDLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Idle Switch off Handler heater left. DOORS ID6080 |
| STAT_CFG_HAHSWITCHOFFTIMER_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer Handler heater switch off. DOORS ID6082 |
| STAT_CFG_AMBIENTTEMPERATURE_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_ATSPresent      0x02 cfg_ATSTempNotValid |
| STAT_CFG_ATSTHRESHENGINETEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Threshold value engine temperature |
| STAT_CFG_ATSTHRESHSPEEDBIKE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold value speed bike ( speed needed by the bike for cooling down the sensor) |
| STAT_CFG_ATSTIMEVALUE_WERT | s | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Time value (till sensor is cooling down) |
| STAT_CFG_ATSTEMPOFFSET_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Temperature Offset |
| STAT_CFG_EMLESS500THRESVOLT1_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 1 <500 1/min |
| STAT_CFG_EMLESS500TIMERVOLT1_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 1 <500 1/min |
| STAT_CFG_EMLESS500THRESVOLT2_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 2 <500 1/min |
| STAT_CFG_EMLESS500TIMERVOLT2_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 2 <500 1/min |
| STAT_CFG_EMLESS500THRESVOLT4_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 4 <500 1/min |
| STAT_CFG_EMLESS500TIMERVOLT4_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 4 <500 1/min |
| STAT_CFG_EMMORE500THRESVOLT1_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 1 >500 1/min |
| STAT_CFG_EMMORE500TIMERVOLT1_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 1 >500 1/min |
| STAT_CFG_EMMORE500THRESVOLT2_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 2 >500 1/min |
| STAT_CFG_EMMORE500TIMERVOLT2_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 2 >500 1/min |
| STAT_CFG_EMMORE500THRESVOLT3_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 3 >500 1/min |
| STAT_CFG_EMMORE500TIMERVOLT3_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 3 >500 1/min |
| STAT_CFG_EMMORE500THRESVOLT4_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage Stage 4 >500 1/min |
| STAT_CFG_EMMORE500TIMERVOLT4_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage Stage 4 >500 1/min |
| STAT_CFG_EMTHRESVOLTOK_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold battery voltage ok |
| STAT_CFG_EMTIMERVOLTOK_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer battery voltage ok |
| STAT_CFG_EMTHRESRPMENGINE_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Threshold rpm engine |
| STAT_CFG_EMTIMERKL15ON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer  KL15 on  |
| STAT_CFG_EMTIMERRPMAVAIL_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer  RPM available  |
| STAT_CFG_UNDEROVERVOLTAGE_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_OUSOvervoltageAct 0x02 cfg_OUSUndervoltageAct |
| STAT_CFG_OUSTHRESHOLDOVERV_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold Overvoltage |
| STAT_CFG_OUSTIMEROVERV_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer Overvoltage |
| STAT_CFG_OUSTHROPVOLTRANMAX_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold operating voltage range max |
| STAT_CFG_OUSTIMOPVOLTRANMAX_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer operating voltage range max |
| STAT_CFG_OUSTHRESHOLDUNDER_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold Undervoltage |
| STAT_CFG_OUSTIMEROUNDER_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer Undervoltage |
| STAT_CFG_OUSTHROPVOLTRANMIN_WERT | V | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Threshold operating voltage range min |
| STAT_CFG_OUSTIMOPVOLTRANMIN_WERT | s | high | unsigned char | - | - | 0.1 | 1.0 | 0.0 | Timer operating voltage range min |
| STAT_CFG_SPEEDSENSOR_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_SSReadDataProtocol 0x02 cfg_SSManufacturer |
| STAT_CFG_SSREARWHEELCIRCUMF_WERT | m | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Rear wheel circumference |
| STAT_CFG_SSNUMBEROFTEETH_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of teeth speed sensor |
| STAT_CFG_CANTIMEOUT_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_opVehicleTimeout 0x02 cfg_inSCLHTimeout 0x04 cfg_speedTimeout 0x08 cfg_clampStatusTimeout 0x10 cfg_kombiDataTimeout 0x20 cfg_engineData2Timeout 0x40 cfg_IntStExtFnTimeout 0x80 cfg_intMileRelTimeout |
| STAT_CFG_CANTIMEOUT_SET2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_IntStDwaRdcTimeout 0x02 cfg_IntEngDat1Timeout 0x04 cfg_IntStASWTimeout 0x08 cfg_stDcDcTimeout 0x10 cfg_DtDrvTimeout 0x20 cfg_ScDispDrvTimeout 0x40  0x80 |
| STAT_CFG_OL_OUTPUTS_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowBeamLight_OC 0x02 cfg_Horn_OC 0x04 cfg_DayDrivingLight_OC 0x08 cfg_HighBeamLight_OC 0x10 cfg_HandlerHeaterLeft_OC 0x20 cfg_HandlerHeaterRight_OC 0x40 cfg_BrakeLight_OC 0x80 cfg_ParkingRearLight_OC |
| STAT_CFG_OL_OUTPUTS_SET2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_OutputBatteryCharge_OC 0x02 cfg_TurnIndLightFrontLeft_OC 0x04 cfg_TurnIndLightFrontRight_OC 0x08 cfg_TurnIndLightRearRight_OC 0x10 cfg_TurnIndLightRearLeft_OC 0x20 cfg_ParkingFrontLight1_OC 0x40 cfg_ParkingFrontLight2_OC 0x80 cfg_LicensePlate_OC |
| STAT_CFG_OL_INTPUTS_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_Speed_OC 0x02 cfg_PotFuelLevel_OC_STB 0x04 cfg_AmbTempSensor_OC 0x08 cfg_HandSwitch_OC 0x10 cfg_PedalSwitch_OC 0x20  0x40  0x80 |
| STAT_CFG_STGSTB_OUTTPUTS_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LowBeamLight_STG 0x02 cfg_LowBeamLight_STB 0x04 cfg_Horn_STG 0x08 cfg_Horn_STB 0x10 cfg_ExtraEquipConn_STG 0x20 cfg_DayDrivingLight_STG 0x40 cfg_DayDrivingLight_STB 0x80 cfg_HighBeamLight_STG |
| STAT_CFG_STGSTB_OUTTPUTS_SET2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_HighBeamLight_STB 0x02 cfg_HandlerHeaterLeft_STG 0x04 cfg_HandlerHeaterLeft_STB 0x08 cfg_HandlerHeaterRight_STG 0x10 cfg_HandlerHeaterRight_STB 0x20 cfg_BrakeLight_STG 0x40 cfg_BrakeLight_STB 0x80 cfg_ParkingRearLight_STG |
| STAT_CFG_STGSTB_OUTTPUTS_SET3_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_ParkingRearLight_STB 0x02 cfg_OutputBatteryCharge_STG 0x04 cfg_OutputBatteryCharge_STB 0x08 cfg_TurnIndLightFrontLeft_STG 0x10 cfg_TurnIndLightFrontLeft_STB 0x20 cfg_TurnIndLightFrontRight_STG 0x40 cfg_TurnIndLightFrontRight_STB 0x80 cfg_TurnIndLightRearLeft_STG |
| STAT_CFG_STGSTB_OUTTPUTS_SET4_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_TurnIndLightRearLeft_STB 0x02 cfg_TurnIndLightRearRight_STG 0x04 cfg_TurnIndLightRearRight_STB 0x08 cfg_ParkingFrontLight1_STG 0x10 cfg_ParkingFrontLight2_STG 0x20 cfg_LicensePlate_STG 0x40 cfg_AuxiliarySocket_STG 0x80 cfg_FutureRequirements_STG |
| STAT_CFG_STGSTB_INTPUTS_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_PedalSwitch_STB 0x02 cfg_PedalSwitch_STG 0x04 cfg_HandSwitch_STB 0x08 cfg_HandSwitch_STG 0x10 cfg_Speed_STB 0x20 cfg_Speed_STG 0x40 cfg_wakeUpLine_STG 0x80 cfg_PotFuelLevel_STG |
| STAT_CFG_STGSTB_INTPUTS_SET2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WarnSwitchFuel_OC_STB 0x02 cfg_AmbTempSensor_STB 0x04 cfg_AmbTempSensor_STG 0x08 cfg_HandHeatPushButton_STG 0x10 cfg_FuturReqPushButton_STG 0x20  0x40  0x80 |
| STAT_CFG_CCPENABLE_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_CCPEnable |
| STAT_CFG_KL15ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Debouncing period for entering faults in the memory after Terminal 15  on . |
| STAT_CFG_KL50ONDTCDEBOUNCE_WERT | ms | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Debouncing period for entering faults in the memory followin Terminal 50  on . |
| STAT_CFG_VOLTAGEDTCSANDCANBUSOFF_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_OverVoltage 0x02 cfg_UnderVoltage 0x04 cfg_SwFailure 0x08 cfg_HwFailure 0x10 cfg_CANBusOff 0x20 cfg_ChargingOverLoad 0x40 cfg_ChargingOverVoltage 0x80 cfg_ChargingUnderVoltage |
| STAT_CFG_OTHERDTCS_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_KL15HwSwStatus 0x02 cfg_ProductionMode 0x04 cfg_AliveCounter 0x08 cfg_CAN_CRC_Chksum 0x10 cfg_CRC_DtDrv 0x20 cfg_CRC_DispDrv 0x40 cfg_DtDrvAlive 0x80 cfg_DispDrvAlive |
| STAT_CFG_LEDDTCS_SET1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LEDFL_LowBeamChannel1_SC 0x02 cfg_LEDFL_LowBeamChannel1_OC 0x04 cfg_LEDFL_LowBeamChannel2_SC 0x08 cfg_LEDFL_LowBeamChannel2_OC 0x10 cfg_LEDFL_LowBeamChannel3_SC 0x20 cfg_LEDFL_LowBeamChannel3_OC 0x40 cfg_LEDFL_HighBeamChannel5_SC 0x80 cfg_LEDFL_HighBeamChannel5_OC |
| STAT_CFG_LEDDTCS_SET2_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LEDFL_HighBeamChannel6_SC 0x02 cfg_LEDFL_HighBeamChannel6_OC 0x04 cfg_LEDFL_EVG_PwrRedTherManag 0x08 cfg_LEDFL_EVG_PwrRedStanding 0x10 cfg_LEDFL_EVG_CommError 0x20 cfg_LEDFL_EVG_ErrorPwrSupply 0x40 cfg_LEDFL_EVG_ErrorLEDChannel 0x80 cfg_LEDFL_EVG_ErrorTherManag |
| STAT_CFG_LEDDTCS_SET3_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LEDFL_EVG_InternalECUError 0x02 cfg_LEDFL_EVG_EmergOperActive 0x04 cfg_LEDFL_EVG_NTCLowBeamInval 0x08 cfg_LEDFL_EVG_NTCHighBeamInval 0x10 cfg_LEDFL_EVG_SerialNumbInval 0x20 cfg_LEDFL_EVG_SWVersInval 0x40 cfg_LED_StatusTimeout 0x80 cfg_LED_ChnStatusTimeout |
| STAT_CFG_LEDDTCS_SET4_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LED_VtgStatusTimeout 0x02 cfg_LED_AuxInfoStatusTimeout 0x04 cfg_LEDFL_DayDriveLightChannel8_OC 0x08 cfg_LEDFL_DayDriveLightChannel8_SC 0x10 cfg_LEDFL_PositionLightChannel8_OC 0x20 cfg_LEDFL_PositionLightChannel8_SC 0x40 cfg_LIN_Ddl1_Error 0x80 cfg_LIN_Ddl2_Error |
| STAT_CFG_LEDDTCS_SET5_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LIN_ADL_Error 0x02 cfg_LIN_InSwitchClusterTimeout |

### RES_0XFD02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_HEATING_STEP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Last heating step for Handler Heating |
| STAT_LAST_VALID_AMBIENT_TEMPERATURE_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Last Valid Temperature |
| STAT_AVG_BAT_VOLTAGE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Average Battery Voltage sense |
| STAT_FUEL_LEVEL_SENSE_AVG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fuel Level Sense Average |
| STAT_PRODUCTION_MOD | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Production Mode |
| STAT_HBG_VAL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | hbgval |
| STAT_HBG_STATE_FLAG_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | hbg state flag |
| STAT_LIGHT_STATE_WERT | HEX | high | unsigned char | - | - | - | - | - | Light state values 0x01 LastValidAdlState 0x02 LastValidDDLState 0x04 LastValidLblState 0x08 LastValidLicenseLightState 0x10 LastValidFrontLight1State 0x20 LastValidFrontLight2State 0x40 LastValidRearLightState 0x80 LastValidLinDdlAsPolState |
| STAT_LIGHT_STATE_THL_WERT | HEX | high | unsigned char | - | - | - | - | - | LastValidThlState RIGHT_ON 3; LEFT_ON 2; HAZARD_ON 1; LIGHTS_OFF 0; |
| STAT_LIGHT_STATE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 LastValidHblState    0x02 LastValidBrlState    0x04 LastValidLEDPOLState |
| STAT_UNUSED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unused_e25_01 |

### RES_0XFD03_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    HandHeatPushButton 0x02    HandHeatStep2 0x04    Speed 0x08    SpeedContiData 0x10    KL15Sense 0x20    WakeUpLineSense 0x40    CrankingInterrupt 0x80    RxD_LIN1 |
| STAT_DATA2_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    SpeedInputHigh 0x02    FailPowerDiag |
| STAT_BATTERY_VOLTAGE_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Battery Voltage Sense |
| STAT_SOCKET_CURRENT_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Socket Current Sense |
| STAT_BRAKE_SWITCH_HAND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Brake Switch Hand |
| STAT_BRAKE_SWITCH_PEDAL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Brake Switch Pedal |
| STAT_TEMPERATUR_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TemperatureSensor |
| STAT_POTENTIOMETER_FLS_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Potentiometer FLS |
| STAT_BATTERY_CHARGE_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Battery Charge Volt Sense (KL61) |
| STAT_SOCKET_OUT_VOLT_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Socket Out Volt Sense (O_KLR) |
| STAT_POWER_SENSE_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Power Sense Diag |
| STAT_BRAKE_LIGHT_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Brake Light Diag |
| STAT_LICENSE_PLATE_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | License Plate Diag |
| STAT_TURN_IND_REAR_RIGHT_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Turn Indicator Light Rear Right Diag |
| STAT_TURN_IND_REAR_LEFT_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Turn Indicator Light Rear Left Diag |
| STAT_TURN_IND_FRONT_RIGHT_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Turn Indicator Light Front Right Diag |
| STAT_TURN_IND_FRONT_LEFT_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Turn Indicator Light Front Left Diag |
| STAT_PARKING_REAR_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Parking Rear Light Diag |
| STAT_PARKING_FRONT_1_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Parking Front Light1 Diag |
| STAT_PARKING_FRONT_2_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Parking Front Light 2  Diag |
| STAT_FUEL_SYS_SUP_LOW_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fuel System Supply Low Diag |
| STAT_FUEL_SYS_SUP_HIGH_DIAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fuel System Supply High Diag |
| STAT_SPEED_INPUT_LOW_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Speed Input Low Diag |
| STAT_EXTRA_EQUIP_CON_CURRENT_SENSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EEC Current Sense |
| STAT_LOW_BEAM_LIGHT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low Beam Light (Kl56B) diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_LOW_BEAM_LIGHT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low Beam Light (Kl56B) diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_HORN_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn  diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_HORN_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_OUT_BATT_CHARGE_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output Battery charge diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_OUT_BATT_CHARGE_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Output Battery charge diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_EXTRA_EQUIP_CON_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Extra Equipment Connector diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_EXTRA_EQUIP_CON_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Extra Equipment Connector diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_DAY_DRIVE_LIGHT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Day Drive Light diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_DAY_DRIVE_LIGHT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Day Drive Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_HIGH_BEAM_LIGHTDIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | High Beam Light diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_HIGH_BEAM_LIGHTDIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | High Beam Light diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_HANDLER_HEAT_LEFT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Left diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_HANDLER_HEAT_LEFT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Left diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |
| STAT_HANDLER_HEAT_RIGHT_DIAG_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Right diag feedeback from E switch. 0x01    OC_Diag 0x02    SC_Diag 0x04    OT_Diag 0x08    OS_Diag 0x10    OLOFF_Diag 0x20    OLON_Diag 0x40    OV_Diag 0x80    UV_Diag |
| STAT_HANDLER_HEAT_RIGHT_DIAG_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Rightt diag feedeback from E switch. 0x01    POR_Diag 0x02    NM_Diag 0x04    SOA0_Diag 0x08    SOA1_Diag 0x10    SOA2_Diag 0x20    SOA3_Diag 0x40    SOA4_Diag |

### RES_0XFD04_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    WakeUpLine 0x02    TurnIndicatorLightRearRight 0x04    ParkingFrontLight2 0x08    TurnIndicatorLightFrontRight 0x10    SpeedSensorSupply 0x20    ParkingFrontLight1 0x40    TurnIndicatorLightFrontLeft 0x80    FutureRequirements |
| STAT_DATA2_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    PotFuelLevelSupplyMAPPSW 0x02    TurnIndicatorLightRearLeft 0x04    SpeedSensorConti 0x08    VBatPullUpEnable 0x10    Socket 0x20    VCCEnable 0x40    LicensePlate 0x80    PotentFuelLevelSupply |
| STAT_DATA3_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    SocketHolding 0x02    PowerRST 0x04    Spare 0x08    B_CANStrobe 0x10    STFETDriversDisable 0x20    OutputBatteryCharge 0x40    ExtraEquipConn 0x80    Horn |
| STAT_BRAKLIGHTDUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light Duty |
| STAT_PARKING_REAR_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parking Rear Light Duty |
| STAT_LOW_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low Beam Light Duty |
| STAT_DAY_DRIVE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Day Drive Light Duty |
| STAT_HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | High Beam Light Duty |
| STAT_HANDLER_HEATER_LEFT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Left Duty |
| STAT_HANDLER_HEATER_RIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Right Duty |
| STAT_DATA4_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    EnableLIN1 0x02    TxD_LIN1 |

### RES_0XFD05_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEAR_SW_VERSION_MAJOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version major |
| STAT_LEAR_SW_VERSION_MINOR_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version minor |
| STAT_LEAR_SW_VERSION_PATCH_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lear Software Version Patch |

### RES_0XFD06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MANUFACTURING_DATA_1_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_2_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_3_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_4_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_5_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_6_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_7_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_8_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_9_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_10_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_11_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_12_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_13_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_14_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_15_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_16_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_17_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_18_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_19_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_MANUFACTURING_DATA_20_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | End Of Line  Manufacutering data |
| STAT_K0_SOCKET_CALIB_PARAM_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | K0 Socket Calib Parameter |
| STAT_K1_SOCKET_CALIB_PARAM_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | K1 Socket Calib Parameter |

### RES_0XFD07_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVERAGE_CPU_LOAD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Average CPU load |
| STAT_MAX_CPU_LOAD_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum CPU load |

### RES_0XFD08_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOCKETTYPEOFLOAD | 0-n | high | unsigned char | - | TAB_STECKDOSE_LAST_TYP | - | - | - | - |
| STAT_HBGSTATE_WERT | HEX | high | unsigned char | - | - | - | - | - | - |
| STAT_HBGSTATEFLAGUPDATE | 0/1 | high | unsigned char | - | - | - | - | - | - |
| STAT_FLSVOLTAGE_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HBGFLUIDLEVEL_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_HBGVOLRAW_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_HBGFILFAST_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_HBGFILSLOW_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_HBGFILUFAST_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_HBGKORFAK_WERT | HEX | high | unsigned int | - | - | - | - | - | - |
| STAT_HBGVRGRAD_WERT | m/s² | high | int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HBGSTATEREFILLVOL_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | - |
| STAT_TEMPERATURESENSOR_WERT | HEX | high | unsigned int | - | - | - | - | - | - |
| STAT_HANDHEATSWITCHOFF | 0/1 | high | unsigned char | - | - | - | - | - | - |

### RES_0XFD09_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CFG_HBGFILFASTDEC_WERT | l/s | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_FIL_FAST. Filter fast, max. rate of change decreasing. |
| STAT_CFG_HBGFILSLOWINC_WERT | l/s | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_FIL_SLOW. Filter slow, max. rate of change increasing. |
| STAT_CFG_HBGFILUFASTDEC_WERT | l/s | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_FIL_UFAST. Filter ultra fast, max. rate of change decreasing. |
| STAT_CFG_HBGFLOSSDETECTHYST_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_FLOSS_DETECT_HYST. Fuel loss detection, if filter value (fast) is smaller than the aktual calculated fuellevel - hyst. |
| STAT_CFG_HBGFLOSSPLATEAUTOP_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_FLOSS_PLATEAU_TOP. Range end, plateau start. |
| STAT_CFG_HBGIJVKORFAK_WERT | Stufe | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_IJV_KOR_FAK. korrektion faktor for the CAN fuel consumption from DME |
| STAT_CFG_HBGKORINTERSECT_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_KOR_INTERSECT. Adjust gap from actual computed fuel level to measured value (hbg_fil_slow). This value, consumption in amount of liters, specify the duration, where the deviation will be corrected. |
| STAT_CFG_HBGKORRANGE1DOWN_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_KOR_RANGE1_DOWN.. Range1 down definition, where adjusting from measured filtered to the computed value will be allowed |
| STAT_CFG_HBGKORRANGE1UP_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_KOR_RANGE1_UP. Range1 up definition, where adjusting from measured filtered to the computed value will be allowed. |
| STAT_CFG_HBGKORRANGE2DOWN_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_KOR_RANGE2_DOWN. Range2 down definition, where adjusting from measured filtered to the computed value will be allowed |
| STAT_CFG_HBGKORRANGE2UP_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_KOR_RANGE2_UP. Range2 up definition, where adjusting from measured filtered to the computed value will be allowed. |
| STAT_CFG_HBGMAXVOL_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_MAXVOL. max tank volume - safety gap |
| STAT_CFG_HBGMAXVOLEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_MAXVOL_EN. enables the function to measure the volume above the lever sensor |
| STAT_CFG_HBGREFILLMEAFILSLOWDECONLY_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILLMEA_FILSLOWDECONLY. If after an detected refill the quick fuel metering will be under this value, the precise measuring for the fuel level will use only the decreasing of slow filter. This is only for getting an save value in plateaus because measuring in this area is not very accurate. |
| STAT_CFG_HBGREFILLDETECTFASTHYST_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILL_DETECT_FAST_HY. Refill detection fast, if ultra fast filter (hbg_fil_ufast)  is greater  than  the actual computed value plus this value, an refill will be detected.  |
| STAT_CFG_HBGREFILLDETECTHYST_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILL_DETECT_HYST. Refill detection, if fast filter (hbg_fil_fast) is greater than the actual computed value plus this value, an refill will be detected. |
| STAT_CFG_HBGREFILLDETOFF_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILL_DET_OFF. Refill detection is off, if the corresponding filter value (ufast or fast) is under this value. |
| STAT_CFG_HBGREFILLFASTENABLED_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILL_FAST_ENABLED. Refill fast detection is enabled, if the computed fuel level is lower to this value.  |
| STAT_CFG_HBGREFILLMEASOFFHYS_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_REFILL_MEAS_OFF_HYS. Measuring after refill detected is stopped, if the measured value is smaller than the lowest value in C_HBG_FUEL_TANK plus this hysteresis.  |
| STAT_CFG_HBGREFILLMEAST_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_REFILL_MEAS_T. Time for measuring (filtering) fuel level after refill is detected. |
| STAT_CFG_HBGSTATEPLATEAUTOP_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_STATE_PLATEAU_TOP. Upper level for plateau. |
| STAT_CFG_HBGSTATEREFILLINTT_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_STATE_REFILL_INT_T. Time for the quick fuel metering after a refill is detected |
| STAT_CFG_HBGSTATEREFILLSTOPINT_WERT | m/s² | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_STATE_REFILL_STOP_INT. Stop quick fuel metering after refill if acceleration is over this value.  |
| STAT_CFG_HBGSTATEREFILLSTOPLOCKT_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | P_HBG_STATE_REFILL_S_LOCK_T. Slow down time for an stopped quick fuel metering |
| STAT_CFG_HBGSTATERUNNOIJVHYS_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_STATE_RUN_NOIJV_HYS. If refill is done in the plateaus area the fuel level is not computed with injection valve signal. At this point the main output fuel signal is the measured one over hbg_fil_slow. If hbg_fil_slow is less than P_HBG_STATE_RUN_NOIJV_OUT - P_HBG_STATE_RUN_NOIJV_HYS it switch back to the computed signal. |
| STAT_CFG_HBGSTATERUNNOIJVOUT_WERT | l | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | P_HBG_STATE_RUN_NOIJV_OUT. If refill is done in the plateaus area the fuel level is not computed with injection valve signal. At this point the main output fuel signal is the measured one over hbg_fil_slow. If hbg_fil_slow is less than P_HBG_STATE_RUN_NOIJV_OUT - P_HBG_STATE_RUN_NOIJV_HYS it switch back to the computed signal. |
| STAT_LEDHEADLAMP01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_LEDHeadLightActive |
| STAT_LEDHEADLAMP02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_lhlLokLowBeam  0x02 cfg_lhlLokRearLight  0x04 cfg_lhlLokPosLight_1  0x08 cfg_lhlLokPosLight_2  0x10 cfg_lhlLokLicenseLight  0x20 cfg_lhlLokTurnIndFrontLeft  0x40 cfg_lhlLokTurnIndFrontRight  0x80 cfg_lhlLokTurnIndRearLeft |
| STAT_LEDHEADLAMP03_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_lhlLokTurnIndRearRight  0x02 cfg_lhlLokHighBeam  0x04 (reserved)  0x08 cfg_lhlLokBrakeLight  0x10 cfg_lhlLokHorn  0x20 (reserved)  0x40 cfg_lhlLokExtraEquipConn  0x80 cfg_lhlLokHandlerHeatRight |
| STAT_LEDHEADLAMP04_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_lhlLokHandlerHeatLeft  0x02 cfg_lhlLokSpeed |
| STAT_LEDHLDDL01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_ledDDLActive  0x06 cfg_chacOfTraffic   0x18 cfg_ddlCountryVariant  0x20 cfg_ddlLokLowBeam  0x40 cfg_ddlLokRearLight  0x80 cfg_ddlLokPosLight_1 |
| STAT_LEDHLDDL02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_ddlLokPosLight_2  0x02 cfg_ddlLokLicenseLight  0x04 cfg_ddlLokAdditionalLight  0x08 cfg_hblOnTimeActive  0x10 cfg_lblOnDDLActive  0x20 cfg_ddlPushButOrSwitch  0xC0 cfg_LogicInputPushButton |
| STAT_CFG_HBLONTIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | High Beam ON time |
| STAT_CFG_FUNCTIONMODULEDDL_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Functional module DayDrivingLight automatic. DOORS ID6565 |
| STAT_CFG_DUTYBRIGHTNESSDDLON_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle brightness DayDrivingLight on. DOORS ID6566 |
| STAT_CFG_DUTYBRIGHTNESSDDLOFF_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle brightness DayDrivingLight off. DOORS ID 6575 |
| STAT_CFG_TIMERBRIGHTNESSDDLON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer brightness DayDrivingLight on. DOORS ID 6562 |
| STAT_CFG_TIMERBRIGHTNESSDDLOFF_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer brightness DayDrivingLight off. DOORS ID 6563 |
| STAT_LEDHLDDL03_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_CanDDLAuto  0x02 cfg_IndicatorFuncDDLOff  0x04 cfg_MemDDLHBLOffOrLBLOn  0x08 cfg_DDLAutoSpeedAndRpm |
| STAT_CFG_DDLAUTO | 0-n | high | unsigned char | - | FUNC_DDL_AUTO | - | - | - | Function DayDrivingLight automatic. DOORS ID6564 |
| STAT_CFG_DISTANCEDDLAUTOON_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Distance DayDrivingLight Automatic on. DOORS ID6622 |
| STAT_CFG_DISTANCEDDLAUTOOFF_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Distance DayDrivingLight Automatic off. DOORS ID6633 |
| STAT_CFG_DDLONHBLOFFORLBLON | 0-n | high | unsigned char | - | DDLONHBLOFFORLBLON | - | - | - | DayDrivingLight HighBeamLight off or LowBeamLigh on. DOORS ID6650 |
| STAT_CFG_DDLTHRESHOLDSPEED_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold speed DayDrivingLight. DOORS ID6665 |
| STAT_CFG_DDLTHRESHOLDRPM_WERT | 1/min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold rpm engine DayDrivingLight. Resolution is 20 rpm per one digit. DOORS ID6664 |
| STAT_CFG_DUTYBRIGHTNESSFASTOFF_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle brightness DayDrivingLight fast off. DOORS ID 6850 |
| STAT_CFG_TIMERBRIGHTNESSFASTOFF_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer brightness DayDrivingLight fast off. DOORS ID 6849 |
| STAT_CFG_DISTANCEDDLAUTOFASTOFF_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Distance DayDrivingLight Automatic fast off. DOORS ID 6854 |
| STAT_CFG_LSADL01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_AddLightActive  0x02 cfg_AdlPushButOrSwitch  0x04 cfg_AdlCANStatOrLINCtrl  0x08 cfg_AdlSoftStart  0x10 cfg_AdlSoftStop  0x20 cfg_AdlShiftSwitchOn  0x40 cfg_AdlShiftOutput  0x80 cfg_AdlLagMode |
| STAT_CFG_ADL1DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle additional light 1 |
| STAT_CFG_ADL2DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle additional light 2 |
| STAT_CFG_DUTYLINILLUMADL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Duty Cycle illumination push button / switch Additional light |
| STAT_CFG_ADLLAGMODETIME_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Timer lag mode additional light. |
| STAT_CFG_ADLSHIFTSWITCHONCOUNT_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number Time slots shiftet switch on. |
| STAT_CFG_ADLDUTY1SOFTSTART_00_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTART_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_00_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2(Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2(Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTART_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_00_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY1SOFTSTOP_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 1 (Content of LIN Signal Driving output 1 LIN Slave) Start value |
| STAT_CFG_ADLDUTY2SOFTSTOP_00_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_01_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_02_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_03_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_04_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_05_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_06_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_07_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_08_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_09_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_10_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_11_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_12_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_13_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_14_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_15_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_16_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_ADLDUTY2SOFTSTOP_17_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle Additional light 2 (Content of LIN Signal Driving output 2 LIN Slave) Stop value |
| STAT_CFG_LSADL02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_HblAdlOff  0x02 cfg_HblAdlBehaviourOff  0x04 cfg_SoftStartHbl  0x08 cfg_SoftStopHbl  0x10 cfg_StoreReqAdl |
| STAT_CFG_TIMERADLOFF_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Timer Additionallight off. DOORS ID6774 |
| STAT_CFG_TIMERADLON_WERT | s | high | unsigned char | - | - | 0.01 | 1.0 | 0.0 | Timer Additionallight on. DOORS ID6775 |
| STAT_DDL_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_DayDriveLightAct  0x02 cfg_DDLCtrlCharCurve |
| STAT_CFG_DUTYDAYDRIVINGLIGHT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty cycle Day Drive light. |
| STAT_CFG_LSDDL_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_linSlaveDDL  0x02 cfg_DdlCANStatOrLINCtrl  0x04 cfg_linSlaveDDL1Xor2X  0x08 cfg_DdlMakesPolActive |
| STAT_CFG_DUTYLINDDL1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle DayDrivingLight 1 (Content of LIN Signal Driving output 1 LIN Slave) |
| STAT_CFG_DUTYLINDDL2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle DayDrivingLight 2 (Content of LIN Signal Driving output 2 LIN Slave) |
| STAT_CFG_DUTYLINILLUMDDL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Duty Cycle illumination push button / switch DayDrivingLight |
| STAT_CFG_DUTYDDL1ASPOL1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID 6604: Duty Cycle DayDrivingLight 1 as Positionlight 1 (Content of LIN Signal Driving output 1 LIN Slave) |
| STAT_CFG_DUTYDDL1ASPOL2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID 6605: Duty Cycle DayDrivingLight 2 as Positionlight 2 (Content of LIN Signal Driving output 2 LIN Slave) |
| STAT_CFG_WELCOMEHOME01_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_WelcomeHouseActive  0x02 cfg_whAffectsIndicatorFrontLeft  0x04 cfg_whAffectsIndicatorFrontRight  0x08 cfg_whAffectsIndicatorRearLeft  0x10 cfg_whAffectsIndicatorRearRight  0x20 cfg_whsAffectsLowBeamLight  0x40 cfg_whsAffectsHighBeamLight  0x80 cfg_whsAffectsBrakeLight |
| STAT_CFG_WELCOMEHOME02_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_whAffectsPositionLightFrontLeft  0x02 cfg_whAffectsPositionLightFrontRight  0x04 cfg_whAffectsRearLight  0x08 cfg_whAffectsLicensePlateLight  0x10 cfg_whAffectsLinSlaveAdl  0x20 cfg_whAffectsLinSlaveDdl  0x40 cfg_whAffectsLinSlaveLed  0x80 cfg_whOnKl5On |
| STAT_CFG_WELCOMEHOME03_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x01 cfg_whOffKl15Off  0x02 cfg_whATWActive  0x04 cfg_whATWStartUpDirectly  0x08 cfg_whAffectsLedLbl  0x10 cfg_whAffectsLedHbl  0x20 cfg_whAffectsLedDdl  0x40 cfg_whAffectsLedPol  0x80 cfg_whPositionOn |
| STAT_CFG_WHTIMESTARTUPKL15ON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time StartUp KL15 on. DOORS ID6737 |
| STAT_CFG_WHTIMEPOSDDL_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time Positionlight / DayDrivingLight. DOORS ID6738 |
| STAT_CFG_WHTIMESHUTDOWNLAGMODE_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time ShutDown LagMode. DOORS ID6739 |
| STAT_CFG_WHTIMESHUTDOWNKL15OFF_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time ShutDown KL15 off. DOORS ID6740 |
| STAT_CFG_WHTIMESLEEPMODEKL15ON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time SleepMode KL15 on. DOORS ID6741 |
| STAT_CFG_WHTIMEATWSWITCHONDELAY_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time ATW SwitchOn Delay. DOORS ID6744 |
| STAT_CFG_WHTIMESHUTDOWNKL15ON_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time ShutDown KL15 on. DOORS ID 6777 |

### RES_0XFD20_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    WakeUpLine 0x02    TurnIndicatorLightRearRight 0x04    ParkingFrontLight2 0x08    TurnIndicatorLightFrontRight 0x10    SpeedSensorSupply 0x20    ParkingFrontLight1 0x40    TurnIndicatorLightFrontLeft 0x80    FutureRequirements |
| STAT_DATA2_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    PotFuelLevelSupplyMAPPSW 0x02    TurnIndicatorLightRearLeft 0x04    SpeedSensorConti 0x08    VBatPullUpEnable 0x10    Socket 0x20    VCCEnable 0x40    LicensePlate 0x80    PotentFuelLevelSupply |
| STAT_DATA3_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    SocketHolding 0x02    PowerRST 0x08    B_CANStrobe 0x10    STFETDriversDisable 0x20    OutputBatteryCharge 0x40    ExtraEquipConn 0x80    Horn |
| STAT_DATA4_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x01    EnableLIN1 0x02    TxD_LIN1 |

### RES_0XFD21_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BRAKLIGHTDUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Brake Light Duty |
| STAT_PARKING_REAR_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Parking Rear Light Duty |
| STAT_LOW_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Low Beam Light Duty |
| STAT_DAY_DRIVE_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Day Drive Light Duty |
| STAT_HIGH_BEAM_LIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | High Beam Light Duty |
| STAT_HANDLER_HEATER_LEFT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Left Duty |
| STAT_HANDLER_HEATER_RIGHT_DUTY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Handler Heater Right Duty |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_MR | 0xE010 | - | Hupe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE010_D | RES_0xE010_D |
| BREMSLICHT_MR | 0xE011 | - | Bremslicht KL_54 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE011_D | RES_0xE011_D |
| KL_15_HW_DIGITAL_MR | 0xE013 | STAT_KL_15_HW_DIGITAL_EIN | Status Klemme 15 Hardware digital | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LIN_ZUSATZSCHEINWERFER_AUSGANG | 0xE086 | - | Zustand Zusatzscheinwerfer Ausgang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE086_D | RES_0xE086_D |
| LIN_ZUSATZSCHEINWERFER_EINGANG | 0xE087 | STAT_SCHALTER_EIN | Status Schalter Zusatzscheinwerfer 0 = aus 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| LIN_TAGFAHRLICHT_AUSGANG | 0xE088 | - | Zustand LIN Tagfahrlicht Ausgang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE088_D | RES_0xE088_D |
| LIN_ZUSATZSCHALTERBLOCK | 0xE089 | STAT_ZUSATZSCHALTERBLOCK | Fehlerstatus Zusatzschalterblock | 0-n | - | high | unsigned char | TAB_MR_FEHLER | - | - | - | - | 22 | - | - |
| LIN_TAGFAHRLICHT_EINGANG | 0xE08A | STAT_SCHALTER_EIN | Status Schalter Tagfahrlicht 0 = aus 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| BLINKER_MR | 0xE090 | - | Blinker | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE090_D | RES_0xE090_D |
| ABBLENDLICHT_MR | 0xE091 | - | Abblendlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE091_D | RES_0xE091_D |
| FERNLICHT_MR | 0xE092 | - | Fernlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE092_D | RES_0xE092_D |
| STANDLICHT_MR | 0xE093 | - | Standlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE093_D | RES_0xE093_D |
| TAGFAHRLICHT_MR | 0xE094 | - | Tagfahrlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE094_D | RES_0xE094_D |
| RUECKLICHT_MR | 0xE095 | - | Rücklicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE095_D | RES_0xE095_D |
| KENNZEICHENBELEUCHTUNG_MR | 0xE096 | - | Kennzeichenbeleuchtung | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE096_D | RES_0xE096_D |
| GRIFFHEIZUNG_MR | 0xE097 | - | Griffheizung | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE097_D | RES_0xE097_D |
| TANKGEBER_MR | 0xE098 | - | Tankgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE098_D |
| STECKDOSE_MR | 0xE099 | - | Steckdose | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE099_D | RES_0xE099_D |
| RADDREHZAHL_HINTEN_MR | 0xE09B | - | Raddrehzahl am Hinterrad Sensorimpulsrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE09B_D |
| SZ_STECKER_MR | 0xE09C | - | Sonderzubehör Stecker | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE09C_D | RES_0xE09C_D |
| BREMSSCHALTER_MR | 0xE09D | - | Handbremsschalter und Fußbremsschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE09D_D |
| LADEKONTROLLLEUCHTE_MR | 0xE09E | - | Ladekontrollleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE09E_D |
| TASTER_GRIFFHEIZUNG_MR | 0xE09F | STAT_TASTER_GRIFFHEIZUNG_EIN | Status Taster Griffheizung; 0 ==> nicht betätigt 1==> betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENTEMPERATUR_MR | 0xE0A0 | - | Aussentemperaturfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0A0_D |
| FERNLICHT_EINGANG_MR | 0xE0A1 | - | Fernlicht Eingang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A1_D | RES_0xE0A1_D |
| BLINKER_EINGANG_MR | 0xE0A2 | - | Blinker Eingang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A2_D | RES_0xE0A2_D |
| HUPE_EINGANG_MR | 0xE0A3 | - | Hupe Eingang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A3_D | RES_0xE0A3_D |
| BREMSLICHT_EINGANG_MR | 0xE0A4 | - | Bremslicht Eingang | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A4_D | RES_0xE0A4_D |
| GRIFFHEIZUNG_EINGANG_MR | 0xE0A5 | - | GRIFFHEIZUNG EINGANG | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A5_D | RES_0xE0A5_D |
| TASTER_ZUKUENFTIGE_ANFORDERUNG | 0xE0A6 | STAT_TASTER_RESERVE_EIN | Status Taster Reserve; 0 ==> nicht betätigt 1==> betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANKGEBER_VERSORGUNG_MR | 0xE0A8 | - | Tankgeber Versorgung | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0A8_D | RES_0xE0A8_D |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_1_MR | 0xE0AB | STAT_LED_SCHEINW_ABBL_K1 | Status LED  Scheinwerfer Abblendlicht Kanal  1 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_2_MR | 0xE0AC | STAT_LED_SCHEINW_ABBL_K2 | Status LED  Scheinwerfer Abblendlicht Kanal  2 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_3_MR | 0xE0AD | STAT_LED_SCHEINW_ABBL_K3 | Status LED  Scheinwerfer Abblendlicht Kanal  3 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_5_MR | 0xE0AE | STAT_LED_SCHEINW_ABBL_K5 | Status LED  Scheinwerfer Abblendlicht Kanal  5 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_6_MR | 0xE0AF | STAT_LED_SCHEINW_ABBL_K6 | Status LED  Scheinwerfer Abblendlicht Kanal  6 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_LEISTUNGSBEGRENZUNG_MR | 0xE0B0 | STAT_LED_SCHEINWERFER_LEISTUNGSBEGRENZUNG | LED_SCHEINWERFER_LEISTUNGSBEGRENZUNG | 0-n | - | high | unsigned char | MR_TAB_LED_SCHEINWERFER_LEISTUNGSBEGRENZUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_FEHLERMELDUNG_MR | 0xE0B1 | STAT_LED_SCHEINWERFER_FEHLERMELDUNG | Status LED Scheinwerfer Fehlermeldung | 0-n | - | high | unsigned char | TAB_MR_STAT_LED_SCHEINWERFER_FEHLERMELDUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_NOTLAUF_MR | 0xE0B2 | STAT_LED_SCHEINWERFER_NOTLAUF_MR | Status LED Scheinwerfer Notlauf 00 ==> aus Notprogramm 01 ==> Notprogramm aktiv | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_LICHT_MR | 0xE0B3 | STAT_LED_SCHEINWERFER_LICHT | LED Scheinwerfer Licht | 0-n | - | high | unsigned char | TAB_MR_LED_SCHEINWERFER_LICHT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_FERNLICHT_1_MR | 0xE0B4 | - | LED Scheinwerfer 1 | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0B4_D | RES_0xE0B4_D |
| LED_SCHEINWERFER_FERNLICHT_2_MR | 0xE0B6 | - | LED_SCHEINWERFER_FERNLICHT_2_MR | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0B6_D | RES_0xE0B6_D |
| LED_SCHEINWERFER_ABBLENDLICHT_MR | 0xE0B7 | - | LED_SCHEINWERFER_ABBLENDLICHT | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE0B7_D | RES_0xE0B7_D |
| LED_SCHEINWERFER_GESCHWINDIGKEIT_MR | 0xE0B8 | STAT_LED_SCHEINWERFER_GESCHWINDIGKEIT_WERT | LED Scheinwerfer EVG Geschwindigkeit | km/h | - | high | unsigned int | - | 0.125 | 1.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_KL56A_STATUS_MR | 0xE0ED | STAT_KL56A_WERT | Status Klemme 56A- analoger Spannungswert an Kl56a | V | - | high | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_KL56B_STATUS_MR | 0xE0EE | STAT_KL56B_WERT | Status Klemme 56B - analoger Spannungswert an Kl56b | V | - | high | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_THERMOMANAGEMENT_STATUS_MR | 0xE0EF | STAT_THERMOMANAGEMENT | Status Thermomanagement aktueller Status des LED-EVG Thermomanagement zur Übertemperatur | 0-n | - | high | unsigned char | TAB_MR_LED_THERMOMANAGEMENT | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_TEMPERATUR_NTC_MR | 0xE0F0 | STAT_LED_TEMP_NTC1_WERT | aktuelle Temperatur des NTC im Scheinwerfer | °C | - | high | unsigned char | - | 1.0 | 1.0 | -55.0 | - | 22 | - | - |
| LED_SCHEINWERFER_TEMPERATUR_PCB_MR | 0xE0F2 | STAT_LED_EVG_WERT | aktuelle Temperatur des LED-EVG | °C | - | high | unsigned char | - | 1.0 | 1.0 | -55.0 | - | 22 | - | - |
| LED_SCHEINWERFER_PWM_LUEFTER_MR | 0xE0F3 | STAT_EVG_LUEFTER_WERT | aktuelle Lüfteransteuerung 0% - 100% wobei 0% bedeutet 0V und 100% bedeutet 5V | - | - | high | unsigned char | - | 100.0 | 255.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_AKTUELLE_PWM_LED_STRANG_1_BIS_8_MR | 0xE0F5 | - | aktuelle PWM LED-Strang 1-8 LED-Scheinwerfer MR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0F5_D |
| LED_SCHEINWERFER_AKTUELLER_STROM_LED_STRANG_1_BIS_8_MR | 0xE0F6 | - | aktueller Strom LED-Strang 1-8 LED-Scheinwerfer MR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0F6_D |
| PRODUKTIONSMODE_MR | 0xE0FF | - | Produktionsmode interne Vorgabe RDZ MDZ | - | - | - | - | - | - | - | - | - | 2F | - | - |
| WECKLEITUNG_DIGITAL_MR | 0xE11C | STAT_WECKLEITUNG_DIGITAL_EIN | aktueller Zustand der  Weckleitung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| LED_SCHEINWERFER_EVG_ABBLENDLICHT_KANAL_8_MR | 0xE178 | STAT_LED_SCHEINW_ABBL_K8 | Status LED  Scheinwerfer Abblendlicht Kanal  8 | 0-n | - | high | unsigned char | MR_STAT_LED_SCHEINWERFER | - | - | - | - | 22 | - | - |
| GEFAHRENBREMSLICHT | 0xE181 | - | Status und Steuerung Gefahrenbremslicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE181_D | RES_0xE181_D |
| PRAESENTATIONSMODUS | 0xE195 | - | Aktivierung Präsentationsmodus | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE195_D | - |
| LIN_RUECKFAHRHILFE_EINGANG | 0xE1CA | STAT_TASTER | Status LIN Taster (IN_SWCL_EXTS_BOT_MOTBK_2010) | 0-n | - | high | unsigned char | TAB_MR_RES_TASTER_LIN | - | - | - | - | 22 | - | - |
| LIN_RUECKFAHRHILFE_AUSGANG | 0xE1CB | - | Steuern Ausgang Rückfahrhilfe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1CB_D | RES_0xE1CB_D |
| PRG_VERSION | 0x1602 | - | Stored Version of SGBD File  The SGBD Version should be stored in the Software of the ECU to keep the overview between SGBD-versions and  software Versions  Attention !  This should normally be achieved by the SGBD-Index but does not fit while small development steps. See LH Diagnose Part 3  SGBD-Index  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1602_D |
| _STATISTIK_ZAEHLER_LEUCHTEN | 0x2300 | - | Liest die Statistikzähler für Tagfahrlicht, Abblendlicht, Fernlicht und Zusatzscheinwerfer | - | STAT_FERNLICHT_SEK_WERT | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| STATISTIK_ZAEHLER_STECKDOSE | 0x2301 | STAT_ZAEHLER_BATTERIESCHUTZ_WERT | Statistikzähler Batterieschutz | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOCKET_ROUTINE_CALIBRATION | 0xF001 | - | calibration of the deviation in socket current measure | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| EOL_ECU_SLEEP | 0xF002 | - | From EOL set the module to sleep inmediately. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EOL_STOP_WATCHDOG_REFRESH | 0xF003 | - | stopping the Watchdog  refresh from end of line | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EOL_LIN_BUS_TEST | 0xF004 | - | EOL LIN bus test | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _ZAEHLER_ZURUECKSETZEN | 0xF005 | - | Setzt die Zähler für Tagfahrlicht, Zusatzscheinwerfer, Abblendlicht und Fernlicht zurück | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005_R | - |
| CONFIG_DATA | 0xFD01 | - | Configurable data parameter | - | STAT_LOAD_REJECT_CODING_MATRIX | - | - | - | - | - | - | - | 22 | - | RES_0xFD01_D |
| INTERNAL_DATA_PARAMETER | 0xFD02 | - | Internal configurable data parameter | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD02_D | RES_0xFD02_D |
| END_OF_LINE_INPUT | 0xFD03 | - | Read End Of Line Digital &Analog input | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD03_D |
| END_OF_LINE_OUTPUT | 0xFD04 | - | End of Line Digital  & PWM output | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD04_D |
| LEAR_SW_VERSION | 0xFD05 | - | Read Lear Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD05_D |
| END_OF_LINE_DATA | 0xFD06 | - | end of line data ( manufacturer specific) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD06_D | RES_0xFD06_D |
| CPU_LOAD | 0xFD07 | - | CPU load | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD07_D |
| INTER_APPLICATION_PARAMETER | 0xFD08 | - | Inter Application Parameter | - | STAT_SOCKETTYPEOFLOAD_WERT | - | - | - | - | - | - | - | 22 | - | RES_0xFD08_D |
| CONFIG_DATA_SPLIT | 0xFD09 | - | Rading EEPROM configuration data. Splitting of service as response length more than Biffer Size data | - | STAT_CFG_HBGFILFASTDEC_WERT | - | - | - | - | - | - | - | 22 | - | RES_0xFD09_D |
| HBG_VOL_NV_DEFAULT | 0xFD0A | - | - | - | HBG_VOL_WRITE | - | - | - | - | - | - | - | 2E | ARG_0xFD0A_D | - |
| HBG_STATE_FLAG_DEFAULT | 0xFD0B | - | update the hbg_state_flag with default value. | - | HBG_STATE_FLAG_WRITE | - | - | - | - | - | - | - | 2E | ARG_0xFD0B_D | - |
| DIGITAL_OUTPUT_CONTROL | 0xFD20 | - | Digital Output Control | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFD20_D | RES_0xFD20_D |
| PWM_OUTPUT_CONTROL | 0xFD21 | - | Output PWM Duty Control | - | - | - | - | - | - | - | - | - | 2F | ARG_0xFD21_D | RES_0xFD21_D |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_FZG_VAR

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | F13 |
| 0x02 | K50 |
| 0x03 | undefiniert |
| 0x04 | undefiniert |
| 0x05 | undefiniert |
| 0x06 | undefiniert |
| 0x07 | undefiniert |
| 0x08 | undefiniert |
| 0x09 | undefiniert |
| 0x0A | undefiniert |
| 0x0B | undefiniert |
| 0x0C | undefiniert |
| 0x0D | undefiniert |
| 0x0E | undefiniert |
| 0x0F | undefiniert |

### TAB_LED_PRODDATUM

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | 01 |
| 0x02 | 02 |
| 0x03 | 03 |
| 0x04 | 04 |
| 0x05 | 05 |
| 0x06 | 06 |
| 0x07 | 07 |
| 0x08 | 08 |
| 0x09 | 09 |
| 0x0A | 10 |
| 0x0B | 11 |
| 0x0C | 12 |
| 0x0D | 13 |
| 0x0E | 14 |
| 0x0F | 15 |
| 0x10 | 16 |
| 0x11 | 17 |
| 0x12 | 18 |
| 0x13 | 19 |
| 0x14 | 20 |
| 0x15 | 21 |
| 0x16 | 22 |
| 0x17 | 23 |
| 0x18 | 24 |
| 0x19 | 25 |
| 0x1A | 26 |
| 0x1B | 27 |
| 0x1C | 28 |
| 0x1D | 29 |
| 0x1E | 30 |
| 0x1F | 31 |

### TAB_LED_PRODMONAT

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | 01 |
| 0x02 | 02 |
| 0x03 | 03 |
| 0x04 | 04 |
| 0x05 | 05 |
| 0x06 | 06 |
| 0x07 | 07 |
| 0x08 | 08 |
| 0x09 | 09 |
| 0x0A | 10 |
| 0x0B | 11 |
| 0x0C | 12 |

### TAB_LED_VERSIONNR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0x07 | 7 |

### TAB_LED_ZULIEFERER

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | ZKW |
| 0x02 | Hersteller 2 |
| 0x03 | Hersteller 3 |

### TAB_MR_ABBLENDLICHT

| WERT | TEXT |
| --- | --- |
| 0 | reserviert |
| 1 | Abblendlicht Aus |
| 2 | Abblendlicht Ein |
| 3 | Signal ungueltig |
| 0xFF | undefiniert |

### TAB_MR_ARG_TASTER_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht gedrückt |
| 0x01 | Taster gedrückt |
| 0x02 | Reserviert |
| 0x03 | Signal ungültig |

### TAB_MR_BLINKER_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | kein  Taster gedrückt |
| 1 | Eingang Blinkertaster links aktiv |
| 2 | Eingang Blinkertaster rechts aktiv |
| 3 | Eingang Blinkerrücksteller aktiv |
| 4 | Eingang Warnblinktaster aktiv |
| 0xFF | ungültig |

### TAB_MR_BLINKER_EINGANG_ARG

| WERT | TEXT |
| --- | --- |
| 0 | kein  Taster gedrückt |
| 1 | Eingang Blinkertaster links aktiv |
| 2 | Eingang Blinkertaster rechts aktiv |
| 3 | Eingang Blinkerrücksteller aktiv |
| 4 | Eingang Warnblinktaster aktiv |

### TAB_MR_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler |
| 0xFF | unbekannter Eintrag |

### TAB_MR_GRIFFHEIZUNG_EINGANG_FKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |
| 0x03 | Heizung Stufe 3 |
| 0x04 | Heizung Stufe 4 |
| 0x05 | Heizung Stufe 5 |
| 0x06 | Heizung Stufe 6 |
| 0x07 | Signal ungueltig |

### TAB_MR_GRIFFHEIZUNG_EINGANG_FKT_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung aus |
| 0x01 | Heizung Stufe 1 |
| 0x02 | Heizung Stufe 2 |
| 0x03 | Heizung Stufe 3 |
| 0x04 | Heizung Stufe 4 |
| 0x05 | Heizung Stufe 5 |
| 0x06 | Heizung Stufe 6 |

### TAB_MR_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | Hersteller 1 |
| 0x02 | Hersteller 2 |
| 0x03 | Hersteller 3 |

### TAB_MR_LED_LUEFTERANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Luefter aus |
| 1 | Luefter ein |
| 2 | Reserve |
| 3 | Signal ungueltig |
| 0xFF | ungueltiger Wert |

### TAB_MR_LED_SCHEINWERFER

| WERT | TEXT |
| --- | --- |
| 0 | nicht aufgeblendet |
| 1 | aufgeblendet |
| 2 | reserviert |
| 3 | Signal ungueltig |

### TAB_MR_LED_SCHEINWERFER_ABBLENDLICHT_EIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Abblendlicht aus |
| 0x01 | Tagfahrlicht an |
| 0x02 | Reserviert |
| 0x03 | Abblendlicht an |
| 0x04 | Reserviert |
| 0x08 | Positionslicht |
| 0xFF | Signal ungueltig |

### TAB_MR_LED_SCHEINWERFER_ABBLENDLICHT_EIN_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Abblendlicht aus |
| 0x01 | Tagfahrlicht ein |
| 0x02 | Reserviert |
| 0x03 | Abblendlicht ein |
| 0x04 | Reserviert |
| 0x08 | Positionslicht |

### TAB_MR_LED_SCHEINWERFER_LICHT

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Lichtkanaele aus |
| 0x02 | Tagfahrlicht ein |
| 0x04 | Positionslicht ein |
| 0x08 | Abbiegelicht ein |
| 0x10 | Fernlicht ein |
| 0x20 | Abblendlicht ein |
| 0xFF | ungueltiger Wert |

### TAB_MR_LED_THERMOMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Übertemperatur |
| 0x01 | Übertemperatur Scheinwerefer |
| 0x02 | Übertemperatur EVG |
| 0x03 | Übertemperatur EVG und Scheinwerfer |

### TAB_MR_LED_TOURISTENMODE

| WERT | TEXT |
| --- | --- |
| 0 | Touristenmodus aus |
| 1 | Touristenmodus ein |
| 2 | reserviert |
| 3 | Signal ungueltig |
| 0xFF | ungueltige Eingabe |

### TAB_MR_RES_TASTER_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht gedrückt |
| 0x01 | Taster gedrückt |
| 0x02 | Reserviert |
| 0x03 | Signal ungültig |

### TAB_MR_SEITE

| WERT | TEXT |
| --- | --- |
| 0x00 | unkodiert |
| 0x01 | links |
| 0x02 | rechts |
| 0x03 | ungueltig |

### TAB_MR_STAT_LED_SCHEINWERFER_FEHLERMELDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x02 | Fehler Kommunikation |
| 0x04 | Fehler Versorgung |
| 0x08 | Fehler LED Kanaele |
| 0x10 | Fehler Thermomanagement |
| 0x20 | Fehler Steuergeraeteintern |
| 0xFF | unbekannter Fehler |

### TAB_MR_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | unkodierte |
| 0x01 | F13 |
| 0x02 | K50 |
| 0x03 | ungueltig |

### TAB_MR_ZAEHLER_BCO

| WERT | TEXT |
| --- | --- |
| 0x00 | Zähler für Tagfahrlicht Auto mit Tagfahrlichtbedingung WAHR |
| 0x01 | Zähler für Tagfahrlicht Auto mit Tagfahrlichtbedingung FALSCH |
| 0x02 | Zähler für Tagfahrlicht Auto mit Unterbrechung durch Anwender |
| 0x03 | Zähler für Tagfahrlicht manuell |
| 0x04 | Alle Zähler für Tagfahrlicht |
| 0x05 | Zähler für Zusatzscheinwerfer |
| 0x06 | Zähler für Abblendlicht |
| 0x07 | Zähler für Fernlicht |
| 0x08 | Alle Zähler |
| 0x09 | Zähler für Batterieschutz |

### TAB_SEITENCODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | uncodiert |
| 0x01 | rechts |
| 0x02 | links |
| 0x03 | ungültig |

### TAB_STECKDOSE_LAST_TYP

| WERT | TEXT |
| --- | --- |
| 0 | - |
| 1 | - |
| 2 | - |
| 0xFF | Wert ungültig |
