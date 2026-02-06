# X_BMSE2B.prg

## General

|  |  |
| --- | --- |
| File | X_BMSE2B.prg |
| Type | PRG |
| Jobs | 28 |
| Tables | 51 |
| Origin | BMW UX-EA-7 UweKnauf |
| Revision | 7.000 |
| Author | MagnetiMarelli Powertrain FabioFelici, MagnetiMarelli Powertrai |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Motorsteuerung BMSE2B K03 |  |  |
| ORIGIN | string | BMW UX-EA-7 UweKnauf |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | MagnetiMarelli Powertrain FabioFelici, MagnetiMarelli Powertrai |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### POWER_DOWN

SG im Nachlauf abschalten UDS  : $11 ECUReset UDS  : $41 PowerDownInErrorCase Modus: Default

_No arguments._

### STATUS_GEMISCHADAPTION_WARM

Reading of warm fuel adaption table UDS   : $22   ReadDataByIdentifier UDS   : $668E Sub-Parameter

_No arguments._

### STATUS_GEMISCHADAPTION_KALT

Reading of cold fuel adaption table UDS   : $22   ReadDataByIdentifier UDS   : $668F Sub-Parameter

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

### ARG_0X66C8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEUTRAL_ADAPTION_FLAGS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Flags der Neutral-Adaption: 0 = nicht adaptiert, 1= adaptiert |
| STAT_GANG_ADAPTION | HEX | high | unsigned char | - | - | - | - | - | - | - | Status des Gang-Adaption |
| STAT_GANG_0_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung des Neutral-Gangs |
| STAT_GANG_1_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 1 |
| STAT_GANG_2_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 2 |
| STAT_GANG_3_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 3 |
| STAT_GANG_4_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 4 |
| STAT_GANG_5_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 5 |
| STAT_GANG_6_SPANNUNG | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | - | - | Adaptionswert der Spannung Gang 6 |

### ARG_0X66C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRGESTELLNUMMER | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | EWS-Fahrgestellnummer |

### ARG_0X66CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_STARTUNTERDRUECKUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktiviert oder Deaktiviert die Start-Unterdrückung: 0x01 = Aktiv, 0x00 = Nicht aktiv |

### ARG_0X66CF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_SHOWROOM_MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Aktivierung oder Deaktivierung des Show-Room-Modus: 0x01 = Aktiv, 0x00 = Nicht aktiv |

### ARG_0X66F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Elektrokraftstoffpumpe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X66F1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LR_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Last-Relais in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X66F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELUE_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Motor-Lüfter in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X66F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Einspritzventile in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| EV_ANSTEUERN_NUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, zB. 9 = 00001001b: Ansteuerung des 1. und 4. Ventils |

### ARG_0X66F4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Tank-Entlüftungs-Ventils in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| TEV_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tastverhältnis der Ansteuerung des Tank-Entlüftungs-Ventils in Prozent |

### ARG_0X66F5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SLV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Sekundär-Luft-Ventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| SLV_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tastverhältnis der Ansteuerung des Sekundär-Luft-Ventils in Prozent |

### ARG_0X66F6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LH_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Lambda-Sonden-Heizung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LH_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tastverhältnis der Ansteuerung der Lambda-Sonden-Heizung in Prozent |

### ARG_0X66F7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Stepper-Motor in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| STP_ANSTEUERN_START_POSITION | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Startposition des Steppers in Prozent |
| STP_ANSTEUERN_END_POSITION | % | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Endposition des Steppers in Prozent |
| STP_ANSTEUERN_GESCHWINDIGKEIT | %/s | high | unsigned long | - | - | 10000.0 | 1.0 | 0.0 | - | - | Geschwindigkeit mit der von Start-Position zu End-Position gewechselt werden soll |

### ARG_0X66F8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MWL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Motor-Warnleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X66F9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OTWL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Übertemperatur-Warnleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE12C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_TAG | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tag, an dem der nächste Service fällig ist |
| SERVICE_MONAT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Monat, an dem der nächste Service fällig ist |
| SERVICE_JAHR | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr, an dem der nächste Service fällig ist |

### ARG_0XE12D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESTWEG | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Wegstreckenintervalles bis zur nächsten Seviceanzeige |

### BF_MR_MM_AUTOMATISCHE_GANG_ADAPTION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BIT0_GANG_NEUTRAL | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Gang Neutral (Bit 0): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT1_GANG_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Gang 1 (Bit 1): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT2_GANG_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Gang 2 (Bit 2): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT3_GANG_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Gang 3 (Bit 3): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT4_GANG_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Gang 4 (Bit 4): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT5_GANG_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Gang 5 (Bit 5): 0 = nicht adaptiert, 1 = adaptiert |
| STAT_BIT6_GANG_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Gang 6 (Bit 6): 0 = nicht adaptiert, 1 = adaptiert |

### BF_MR_MM_SYNCHRONISATION_MOTOR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BIT0_WARTEN_AUF_SYNCHRONISATION | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Warten auf Synchronisation (Bit 0): 0 =nicht warten, 1 = warten |
| STAT_BIT1_KURBELWELLENGEBER | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Kurbelwellengeber (Bit 1): 0 = vorhanden, 1 = nicht vorhanden |
| STAT_BIT2_KURBELWELLENSIGNAL | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Kurbelwellensignal (Bit 2): 0 = nicht erkannt, 1 = erkannt |
| STAT_BIT3_SYSTEM_KURBELWELLE_SYNCH | 0/1 | high | unsigned char | 0x08 | - | - | - | - | System auf Kurbelwelle synchronisiert (Bit 3): 0 = nicht synchronisiert, 1 = synchronisiert |
| STAT_BIT4_NOCKENWELLENGEBER | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Nockenwellengeber (Bit 4): 0 = nicht vorhanden, 1 = vorhanden |
| STAT_BIT5_NOCKENWELLENSIGNAL | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Nockenwellensignal (Bit 5): 0 = Ok, 1 = Fehler |
| STAT_BIT6_SYSTEM_NOCKENWELLE_SYNCH | 0/1 | high | unsigned char | 0x40 | - | - | - | - | System auf Nockenwelle synchonisiert (Bit 6): 0 = nicht synchronisiert, 1 = synchronisiert |
| STAT_BIT7_SYSTEM_DREHUNGLEICHFOERMIGKEIT_SYNCH | 0/1 | high | unsigned char | 0x80 | - | - | - | - | System auf Drehungleichförmigkeit synchronisiert (Bit 7): 0 = nicht synchronisiert, 1 = synchronisiert |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmode aktiv | 0 |
| 0x3A2010 | Drucksensor 1, Unterspannung | 0 |
| 0x3A2011 | Drucksensor 1, Überspannung | 0 |
| 0x3A2020 | Lambda-Sonde 1, Kurzschluß nach Masse | 0 |
| 0x3A2021 | Lambda-Sonde 1, Kurzschluß nach VBatt | 0 |
| 0x3A2022 | Lambda-Sonde 1, Messwert nicht plausibel | 0 |
| 0x3A2023 | Lambda-Sonde 1, Heizung, Kurzschluß nach Masse | 0 |
| 0x3A2024 | Lambda-Sonde 1, Heizung, Kurzschluß nach VBatt | 0 |
| 0x3A2025 | Lambda-Sonde 1, Heizung, offene Leitung | 0 |
| 0x3A2030 | Kühlwasser-Temperatur-Sensor, Kurzschluß nach Masse | 0 |
| 0x3A2031 | Kühlwasser-Temperatur-Sensor, Kurzschluß nach VBatt/Offene Leitung | 0 |
| 0x3A2032 | Kühlwasser-Temperatur-Sensor, nicht plausibel | 0 |
| 0x3A2040 | Ansaugluft Temperatur-Sensor, Kurzschluß nach Masse | 0 |
| 0x3A2041 | Ansaugluft Temperatur-Sensor, Kurzschluß nach VBatt/Offene Leitung | 0 |
| 0x3A2060 | Batterie-Spannung, Unterspannung | 0 |
| 0x3A2061 | Batterie-Spannung, Überspannung | 0 |
| 0x3A2080 | Kurbelwellen Sensor, Kurzschluß nach Masse/Offene Leitung | 0 |
| 0x3A2090 | Einspritzventil Zylinder 1, Kurzschluß nach Masse/offene Leitung | 0 |
| 0x3A2091 | Einspritzventil Zylinder 1, Kurzschluß nach VBatt | 0 |
| 0x3A20B0 | Zündspule Zylinder 1, Kurzschluß nach Masse/offene Leitung | 0 |
| 0x3A20B1 | Zündspule Zylinder 1, Kurzschluß nach VBatt | 0 |
| 0x3A20D0 | Last-Relais, Kurzschluß nach Masse | 0 |
| 0x3A20D1 | Last-Relais, Kurzschluß nach VBatt/offene Leitung | 0 |
| 0x3A20E0 | Kraftstoff-Pumpe Relais, Kurzschluß nach Masse | 0 |
| 0x3A20E1 | Kraftstoff-Pumpe Relais, Kurzschluß nach VBatt | 0 |
| 0x3A20E2 | Kraftstoff-Pumpe Relais, offene Leitung | 0 |
| 0x3A20F0 | Tankentlüftung, Kurzschluß nach Masse | 0 |
| 0x3A20F1 | Tankentlüftung, Kurzschluß nach VBatt | 0 |
| 0x3A20F2 | Tankentlüftung, offene Leitung | 0 |
| 0x3A2100 | Sekundärluft-Ventil, Kurzschluß nach Masse | 0 |
| 0x3A2101 | Sekundärluft-Ventil, Kurzschluß nach VBatt | 0 |
| 0x3A2102 | Sekundärluft-Ventil, offene Leitung | 0 |
| 0x3A2120 | Lüfter-Relais, Kurzschluß nach Masse | 0 |
| 0x3A2121 | Lüfter-Relais, Kurzschluß nach VBatt | 0 |
| 0x3A2122 | Lüfter-Relais, offene Leitung | 0 |
| 0x3A2130 | Starter-Relais, Kurzschluß nach Masse/offene Leitung | 0 |
| 0x3A2131 | Starter-Relais, Kurzschluß nach VBatt | 0 |
| 0x3A2140 | Schalter Seitenständer, Signale beider Kanäle zueinander unplausibel | 0 |
| 0x3A2141 | Schalter Seitenständer, nicht eingeklappter Seitenstützständer während der Fahrt | 0 |
| 0x3A2161 | Fahrzeuggeschwindigkeit, CAN, kein Signal oder Wert | 0 |
| 0x3A2162 | Fahrzeuggeschwindigkeit, Vorderrad, ABS, unplausibles Signal oder Wert | 0 |
| 0x3A2163 | Fahrzeuggeschwindigkeit, Hinterrad, ABS, unplausibles Signal oder Wert | 0 |
| 0x3A2180 | Stepper-Motor, Kurzschluß nach Masse/offene Leitung | 0 |
| 0x3A2181 | Stepper-Motor, Kurzschluß nach VBatt | 0 |
| 0x3A2182 | Stepper-Motor, offene Leitung | 0 |
| 0x3A2190 | Motor Leerlauf Kontrolle, Signal nicht plausibel | 0 |
| 0x3A21A0 | RAM Test, RAM nicht plausibel | 0 |
| 0x3A21B0 | EEPROM Test, EEPROM nicht plausibel | 0 |
| 0x3A21C0 | ROM Test, ROM nicht plausibel | 0 |
| 0x3A21D0 | Gang-Sensor, Kurzschluß nach Masse | 0 |
| 0x3A21D1 | Gang-Sensor, Kurzschluß nach VBatt | 0 |
| 0x3A21D2 | Gang-Sensor, Adaption nicht abgeschlossen | 0 |
| 0x3A21F0 | Showroom-Modus, Aktivierungs-Signal nicht plausibel | 0 |
| 0x3A2200 | Drosselklappe 1, Sensor-Kanal 1, Kurzschluß nach Masse | 0 |
| 0x3A2201 | Drosselklappe 1, Sensor-Kanal 1, Kurzschluß nach VBatt/offene Leitung | 0 |
| 0x3A2230 | Fehlverbau, Motorsteuergerät, BMS passt nicht zum Fahrzeug | 0 |
| 0xCD845F | CAN Bus Off | 1 |
| 0xCD941C | CAN KOMBI Nachricht Bedienung_Fahrzeug_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9426 | CAN KOMBI Nachricht Kombidaten_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xCD9436 | CAN SLZ Nachricht Status_Fahrzeug_Zugriff_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xCD9454 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: CRC Fehler | 1 |
| 0xCD9455 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Alive Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x66D0 | UWB_MM_MOTORDREHZAHL_MR | 1/min | High | unsigned char | - | 50.0 | 1.0 | 0.0 |
| 0x66D1 | UWB_MM_KUEHLWASSER_TEMP_MR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x66D2 | UWB_MM_DROSSELKLAPPE_POSITION_MR | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x66D3 | UWB_MM_BATTERIESPANNUNG_MR | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
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
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X6603_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIGITAL_SEITENSTUETZE | 0/1 | high | unsigned char | - | - | - | - | - | Status Seitenstütze: 0 = eingeklappt, 1 = ausgeklappt |
| STAT_DIGITAL_SST_KANAL1 | 0/1 | high | unsigned char | - | - | - | - | - | Status SST-Kanal 1: 0 = offen, 1 = geschlossen |
| STAT_DIGITAL_SST_KANAL2 | 0/1 | high | unsigned char | - | - | - | - | - | Status SST-Kanal 2: 0 = offen, 1 = geschlossen |

### RES_0X66C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEUTRAL_ADAPTION_FLAGS | 0/1 | high | unsigned char | - | - | - | - | - | Flags der Neutral-Adaption: 0 = nicht adaptiert, 1 = adaptiert |
| STAT_GANG_ADAPTION_WERT | HEX | high | unsigned char | - | - | - | - | - | Status des Gang-Adaption |
| STAT_GANG_0_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung des Neutral-Gangs |
| STAT_GANG_1_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 1 |
| STAT_GANG_2_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 2 |
| STAT_GANG_3_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 3 |
| STAT_GANG_4_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 4 |
| STAT_GANG_5_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 5 |
| STAT_GANG_6_SPANNUNG_WERT | mV | high | unsigned int | - | - | 488.0 | 100.0 | 0.0 | Adaptionswert der Spannung Gang 6 |

### RES_0X66C9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | EWS-Fahrgestellnummer |

### RES_0XE119_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GWSZ_WERT | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | aktueller GWSZ-Wert |

### RES_0XE12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Tag, an dem der nächste Service fällig ist |
| STAT_SERVICE_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Monat, an dem der nächste Service fällig ist |
| STAT_SERVICE_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Jahr, an dem der nächste Service fällig ist |

### RES_0XE12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTWEG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibendes Wegstreckenintervall bis wegabhängiger Service als überfällig angezeigt wird |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| EXHAUST_REGULATION_OR_TYPEAPPROVAL_NUMBER | 0xF196 | STAT_TYPPRUEFNUMMER_TEXT | Typprüfnummer | TEXT | - | high | string[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_DIGITAL_KL15_MR | 0x6600 | STAT_DIGITAL_KL15 | Status Klemme  15: 0 = Aus, 1 = Ein | 0/1 | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_KILL_MR | 0x6601 | STAT_DIGITAL_KILL | Status KILL-Schalter: 0 = nicht betätigt, 1= betätigt | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_START_MR | 0x6602 | STAT_DIGITAL_START | Status START-Schalter: 0 = nicht betätigt, 1 = betätigt | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_SEITENSTUETZE_MR | 0x6603 | - | Status Seitenstütze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6603_D |
| MM_DIGITAL_LASTRELAIS_MR | 0x6605 | STAT_DIGITAL_LASTRELAIS | Status Lastrelais: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_START_RELAIS_MR | 0x6606 | STAT_START_RELAIS | Status START-Relais:  0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_EL_KRAFTSTOFF_PUMPE_RELAIS_MR | 0x6607 | STAT_DIGITAL_EL_KRAFTSTOFF_PUMPE_RELAIS | Status Elektrische Kraftstoffpumpe-Relais: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_LUEFTER_RELAIS_MR | 0x6608 | STAT_DIGITAL_LUEFTER_RELAIS | Status Lüfter-Relais: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_WARNLEUCHTE_UEBERTEMP_MR | 0x6609 | STAT_DIGITAL_WARNLEUCHTE_UEBERTEMP | Status Übertemperaturwarnleuchte: 0 = nicht angesteuert, 1 = angesteuert | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_START_FREIGABE_MR | 0x660A | STAT_DIGITAL_START_FREIGABE | Startfreigabe: 0 = Start nicht möglich, 1 = Start möglich | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_MODUS_SHOWROOM_MR | 0x660C | STAT_DIGITAL_MODUS_SHOWROOM | Showroommodus: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_STARTUNTERDRUECKUNG_MOTOR_MR | 0x660D | STAT_DIGITAL_STARTUNTERDRUECKUNG_MOTOR | Motor-Startunterdrückung: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_ROM_CHECKSUM_MR | 0x660E | STAT_ROM_CHECKSUM | ROM-Checksum: 0 = nicht berechnet, 1 = berechnet | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_DIGITAL_MOTORLAST_MR | 0x6610 | STAT_DIGITAL_MOTORLAST | Motorlast | 0-n | - | high | unsigned int | TAB_MR_MM_MOTORLAST | - | - | - | - | 22 | - | - |
| MM_DIGITAL_WARNLEUCHTE_MOTOR_MR | 0x6611 | STAT_DIGITAL_WARNLEUCHTE_MOTOR | Status engine warning lamp | 0-n | - | high | unsigned int | TAB_MR_MM_WARNLEUCHTE_MOTOR | - | - | - | - | 22 | - | - |
| MM_DIGITAL_SYNCHRONISATION_MOTOR_MR | 0x6613 | - | Status Motorsynchronisation | Bit | - | high | BITFIELD | BF_MR_MM_SYNCHRONISATION_MOTOR | - | - | - | - | 22 | - | - |
| MM_DIGITAL_AUTOMATISCHE_GANG_ADAPTION_MR | 0x6614 | - | Status automatische Gang-Adaption | Bit | - | high | BITFIELD | BF_MR_MM_AUTOMATISCHE_GANG_ADAPTION | - | - | - | - | 22 | - | - |
| MM_BATTERIESPANNUNG_ROHWERT_MR | 0x6620 | STAT_BATTERIESPANNUNG_ROHWERT_WERT | Bordnetzspannung Rohwert | mV | - | high | unsigned int | - | 24.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_BATTERIESPANNUNG_MR | 0x6621 | STAT_BATTERIESPANNUNG_WERT | Bordnetzspannung | V | - | high | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| MM_KUPPLUNGSSCHALTER_ROHWERT_MR | 0x6624 | STAT_KUPPLUNGSSCHALTER_ROHWERT_WERT | Spannung Kupplungseingang Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_KUPPLUNGSSCHALTER_MR | 0x6625 | STAT_KUPPLUNGSSCHALTER | Status Kupplungsschalter: 0 = betätigt, 1 = nicht betätigt | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_KUEHLWASSER_TEMP_ROHWERT_MR | 0x662A | STAT_KUEHLWASSER_TEMP_ROHWERT_WERT | Spannung Kühlwassertemperatur Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_KUEHLWASSER_TEMP_MR | 0x662B | STAT_KUEHLWASSER_TEMP_WERT | Kühlwassertemperatur | °C | - | high | unsigned int | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| MM_ANSAUGLUFT_TEMP_ROHWERT_MR | 0x662C | STAT_ANSAUGLUFT_TEMP_ROHWERT_WERT | Spannung Ansauglufttemperatur Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_ANSAUGLUFT_TEMP_MR | 0x662D | STAT_ANSAUGLUFT_TEMP_WERT | Ansauglufttemperatur | °C | - | high | unsigned int | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| MM_LAMBDA_ROHWERT_MR | 0x662E | STAT_LAMBDA_ROHWERT_WERT | Spannung Lambdasonde Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_LAMBDA_MR | 0x662F | STAT_LAMBDA | Status Lambda | 0-n | - | high | unsigned int | TAB_MR_MM_LAMBDA | - | - | - | - | 22 | - | - |
| MM_UMGEBUNGSDRUCK_ROHWERT_MR | 0x6630 | STAT_UMGEBUNGSDRUCK_ROHWERT_WERT | Umgebungsdruck Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_UMGEBUNGSDRUCK_MR | 0x6631 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungdruck | mbar | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_ROHWERT_MR | 0x6640 | STAT_DROSSELKLAPPE_ROHWERT_WERT | Spannung Drosselklappe Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_ROHWERT_ADP_MR | 0x6641 | STAT_DROSSELKLAPPE_ROHWERT_ADP_WERT | Spannung Drosselklappe Rohwert adaptiert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_WINKEL_MR | 0x6642 | STAT_DROSSELKLAPPE_WINKEL_WERT | Drosselklappenwinkel | ° | - | high | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_POSITION_MR | 0x6643 | STAT_DROSSELKLAPPE_POSITION_WERT | Drosselklappenposition | % | - | high | unsigned int | - | 100.0 | 256.0 | 0.0 | - | 22 | - | - |
| MM_GETRIEBEEIGANG_ROHWERT_MR | 0x6644 | STAT_GETRIEBEEIGANG_ROHWERT_WERT | Spannung Getriebeeingang Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 1.0 | - | 22 | - | - |
| MM_GANG_MR | 0x6646 | STAT_GANG | Status Gang | 0-n | - | high | unsigned char | TAB_MR_MM_GANG | - | - | - | - | 22 | - | - |
| MM_DIGITAL_LAMBDA_HEIZUNG_MR | 0x6648 | STAT_DIGITAL_LAMBDA_HEIZUNG | Lambdasondenheizung: 0 =Aus, 1 = Ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_LAMBDA_REGELFAKTOR_MR | 0x6649 | STAT_LAMBDA_REGELFAKTOR_WERT | Lambdaregelfaktor | % | - | high | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| MM_LAMBDA_REGELADAPTION_MR | 0x664A | STAT_LAMBDA_REGELADAPTION_WERT | Lambdaregeladaption | - | - | high | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| MM_DIGITAL_LAMBDA_REGELUNG_MR | 0x664B | STAT_DIGITAL_LAMBDA_REGELUNG | Status Lambdaregelung: 0 = nicht aktiv, 1 = aktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| MM_ZYLINDER1_ZUENDZEITPUNKT_MR | 0x6650 | STAT_ZYLINDER1_ZUENDZEITPUNKT_WERT | Zündzeitpunkt Zylinder 1 | ° | - | high | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| MM_ZYLINDER1_SCHLIESSZEIT_MR | 0x6651 | STAT_ZYLINDER1_SCHLIESSZEIT_WERT | Schließzeit Zylinder 1 | ms | - | high | unsigned int | - | 1.0 | 500.0 | 0.0 | - | 22 | - | - |
| MM_ZYLINDER1_EINSPRITZDAUER_MR | 0x6652 | STAT_ZYLINDER1_EINSPRITZDAUER_WERT | Einspritzdauer Zylinder 1 | ms | - | high | unsigned long | - | 1.0 | 500.0 | 0.0 | - | 22 | - | - |
| MM_GANG_1_ADP_MR | 0x6658 | STAT_GANG_1_ADP_WERT | Adaptionswert Gang 1 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_GANG_2_ADP_MR | 0x6659 | STAT_GANG_2_ADP_WERT | Adaptionswert Gang 2 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_GANG_3_ADP_MR | 0x665A | STAT_GANG_3_ADP_WERT | Adaptionswert Gang 3 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_GANG_4_ADP_MR | 0x665B | STAT_GANG_4_ADP_WERT | Adaptionswert Gang 4 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_GANG_5_ADP_MR | 0x665C | STAT_GANG_5_ADP_WERT | Adaptionswert Gang 5 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_GANG_6_ADP_MR | 0x665D | STAT_GANG_6_ADP_WERT | Adaptionswert Gang 6 | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_MOTORDREHZAHL_MR | 0x6680 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_FAHRZEUG_GESCHWINDIGKEIT_MR | 0x6681 | STAT_FAHRZEUG_GESCHWINDIGKEIT_WERT | Status Fahrzeuggeschwindigkeit | km/h | - | high | unsigned int | - | 1.0 | 4.0 | 0.0 | - | 22 | - | - |
| MM_VENTIL_TANKENTLUEFTUNG_PWM_MR | 0x6682 | STAT_VENTIL_TANKENTLUEFTUNG_PWM_WERT | Status Tankentlüftungs-Ventil | % | - | high | unsigned int | - | 1.0 | 16.0 | 0.0 | - | 22 | - | - |
| MM_VENTIL_SEKUNDAERLUFT_PWM_MR | 0x6683 | STAT_VENTIL_SEKUNDAERLUFT_PWM_WERT | Status Sekundärluft-Ventil | % | - | high | unsigned int | - | 1.0 | 16.0 | 0.0 | - | 22 | - | - |
| MM_LAMBDA_HEIZUNG_PWM_MR | 0x6684 | STAT_LAMBDA_HEIZUNG_PWM_WERT | PWM Lambdasondenheizung | % | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_STEPPERMOTOR_MR | 0x6685 | STAT_STEPPERMOTOR_WERT | Status Steppermotorposition | Schritt | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_RADGESCHWINDIGKEIT_VORNE_MR | 0x6686 | STAT_RADGESCHWINDIGKEIT_VORNE_WERT | Geschwindigkeit Vorderrad | km/h | - | high | unsigned int | - | 1.0 | 16.0 | 0.0 | - | 22 | - | - |
| MM_RADGESCHWINDIGKEIT_HINTEN_MR | 0x6687 | STAT_RADGESCHWINDIGKEIT_HINTEN_WERT | Geschwindigkeit Hinterrad | km/h | - | high | unsigned int | - | 1.0 | 16.0 | 0.0 | - | 22 | - | - |
| MM_LEERLAUF_DREHZAHL_SOLL_MR | 0x6688 | STAT_LEERLAUF_DREHZAHL_SOLL_WERT | Leerlaufregeldrehzahl Soll | 1/min | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_LEERLAUF_ADAPTION_MR | 0x6689 | STAT_LEERLAUF_ADAPTION_WERT | Leerlaufaddaptionwert (Stepper) | Nm | - | high | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_ADP_ZU_MR | 0x668A | STAT_DROSSELKLAPPE_ADP_ZU_WERT | Drosselklappenadaption Position Zu | ° | - | high | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_DROSSELKLAPPE_ADP_AUF_MR | 0x668B | STAT_DROSSELKLAPPE_ADP_AUF_WERT | Drosselklappenadaption Position Auf | ° | - | high | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_ISO_CODE_MR | 0x66B0 | STAT_MARELLI_ISO_CODE_DATA | Marelli ISO Code | DATA | - | high | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_SOFTWARE_VERSION_MR | 0x66B1 | STAT_MARELLI_SOFTWARE_VERSION_DATA | Status Marelli Software Version | DATA | - | high | data[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_DRAW_CODE_MR | 0x66B2 | STAT_MARELLI_DRAW_CODE_DATA | Status Marelli Draw-Code | DATA | - | high | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_HARDWARE_VERSION_MR | 0x66B3 | STAT_MARELLI_HARDWARE_VERSION_DATA | Status Marelli Hardware Version | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_APPROVAL_TYPE_MR | 0x66B4 | STAT_MARELLI_APROVAL_TYPE_DATA | Marelli Approval Type | DATA | - | high | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MM_SSA_ROHWERT_MR | 0x66C0 | STAT_SSA_ROHWERT_WERT | Spannung Seitenstütze E Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_SSA2_ROHWERT_MR | 0x66C1 | STAT_SSA2_ROHWERT_WERT | Spannung Seitenstütze A Rohwert | mV | - | high | unsigned int | - | 488.0 | 100.0 | 0.0 | - | 22 | - | - |
| MM_ADAPTION_GETRIEBE_MR | 0x66C8 | - | Adaption Getriebe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x66C8_D | RES_0x66C8_D |
| FAHRGESTELLNUMMER_MR | 0x66C9 | - | Auslesen und Schreiben der EWS-Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x66C9_D | RES_0x66C9_D |
| MM_STARTUNTERDRUECKUNG_MOTOR_MR | 0x66CA | - | Aktivierung der Start-Unterdrückung (Zylinder Kompression-Test) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x66CA_D | - |
| MM_MODUS_SHOWROOM_MR | 0x66CF | - | Aktivierung des Show-Room-Modus | - | - | - | - | - | - | - | - | - | 2E | ARG_0x66CF_D | - |
| MM_EL_KRAFTSTOFF_PUMPE_ANSTEUERN_MR | 0x66F0 | - | Ansteuern der elektrischen Kraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F0_D | - |
| MM_LASTRELAIS_ANSTEURN_MR | 0x66F1 | - | Ansteuerung Last-Relais | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F1_D | - |
| MM_LUEFTER_ANSTEUERN_MR | 0x66F2 | - | Ansteuerung des Motor-Lüfters | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F2_D | - |
| MM_VENTIL_EINSPRITZUNG_ANSTEUERN_MR | 0x66F3 | - | Ansteuerung der Einspritz-Ventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F3_D | - |
| MM_VENTIL_TANKENTLUEFTUNG_ANSTEUERN_MR | 0x66F4 | - | Ansteuerung des tank-Entlüftungs-Ventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F4_D | - |
| MM_VENTIL_SEKUNDAERLUFT_ANSTEUERN_MR | 0x66F5 | - | Ansteuerung des Sekundärluft-Ventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F5_D | - |
| MM_HEIZUNG_LAMBDASONDE_ANSTEUERN_MR | 0x66F6 | - | Ansteuerung der Lambda-Sonden-Heizung | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F6_D | - |
| MM_STEPPERMOTOR_ANSTEUERN_MR | 0x66F7 | - | Ansteuerung des Stepper-Motors | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F7_D | - |
| MM_WARNLEUCHTE_MOTOR_ANSTEUERN_MR | 0x66F8 | - | Ansteuerung der Motor-Warnleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F8_D | - |
| MM_WARNLEUCHTE_UEBERTEMP_ANSTEUERN_MR | 0x66F9 | - | Ansteuerung der Übertemperatur-Warnleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x66F9_D | - |
| MM_ADAPTIONSWERTE_LOESCHEN_MR | 0xF650 | - | Adaptionswerte löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MM_DROSSELKLAPPE_ADAPTION_MR | 0xF651 | - | Steuern Drosselklappen-Positions-Erkennungs-Adaption | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MM_STEPPERMOTOR_ADAPTION_MR | 0xF652 | - | Steuern Adaption Steppermotor | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MM_NEUTRALGANG_ADAPTION_MR | 0xF653 | - | Steuern Adaption Neutralgang-Position | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_MR_MM_GANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Gang = Neutral |
| 0x01 | Gang = 1 |
| 0x02 | Gang = 2 |
| 0x04 | Gang = 3 |
| 0x08 | Gang = 4 |
| 0x10 | Gang = 5 |
| 0x20 | Gang = 6 |
| 0x40 | Gang = Undefiniert |
| 0xFF | Wert ungültig |

### TAB_MR_MM_LAMBDA

| WERT | TEXT |
| --- | --- |
| 0x01 | mager |
| 0x02 | verboten |
| 0x03 | fett |
| 0xFFFF | Wert ungültig |

### TAB_MR_MM_MODUS_FAHRZEUG

| WERT | TEXT |
| --- | --- |
| 0x01 | Sport |
| 0x02 | Touring |
| 0xFF | Wert ungültig |

### TAB_MR_MM_MOTORLAST

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Leerlauf |
| 0x02 | Volllast |
| 0x04 | Teillast |
| 0xFFFF | Wert ungültig |

### TAB_MR_MM_OELNIVEAU

| WERT | TEXT |
| --- | --- |
| 0x01 | Ok |
| 0x02 | Nicht Ok |
| 0x03 | noch kein Messwert vorhanden |
| 0xFFFF | Wert ungültig |

### TAB_MR_MM_WARNLEUCHTE_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x01 | Aus |
| 0x02 | Blinken 1Hz |
| 0x04 | Blinken 4Hz |
| 0x05 | An |
| 0xFFFF | Wert ungültig |
