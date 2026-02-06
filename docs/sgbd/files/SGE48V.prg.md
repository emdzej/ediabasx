# SGE48V.prg

## General

|  |  |
| --- | --- |
| File | SGE48V.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 32 |
| Origin | BMW EA-375 Bernhard_Gehringer |
| Revision | 3.000 |
| Author | BMW EA-375 Gantner |
| ECU Comment | SGBD S15A-19-11-310 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 48V Startergenerator |  |  |
| ORIGIN | string | BMW EA-375 Bernhard_Gehringer |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EA-375 Gantner |  |  |
| COMMENT | string | SGBD S15A-19-11-310 |  |  |
| PACKAGE | string | 1.991 |  |  |
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

### IS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

### FS_LESEN_OBD_ANZAHL

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $12 reportNumberOfEmmissionsOBDDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

### FS_LESEN_OBD_DTC

Fehlerspeicher lesen (alle OBD-Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $13 ReportEmmissionsOBDDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x025500 | Energiesparmode aktiv | 0 | - |
| 0x02FF55 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0xBA09C0 | Interner Rotorpositionssensor: Kurzschluss nach Masse | 0 | - |
| 0xBA09CC | Interne Überwachung funktionale Sicherheit: Safety level 2 monitoring | 0 | - |
| 0xBA09CE | Interne Überwachung funktionale Sicherheit: Safety level 2 Drehmomentfehler | 0 | - |
| 0xBA09D0 | Interne Endstufe Brückentreiber: Hardware Fehler | 0 | - |
| 0xBA09D1 | Interne Endstufe Brückentreiber: Systemfehler | 0 | - |
| 0xBA09DE | Interner Rotorpositionssensor: Leitungsunterbrechung | 0 | - |
| 0xBA09DF | Interner Rotorpositionssensor: Kurzschluss nach Masse | 0 | - |
| 0xBA09E2 | Interner Rotorpositionssensor: Justierung fehlerhaft (elektrisch / mechanisch) | 0 | - |
| 0xBA09E6 | Interner Rotorpositionssensor: Leitungsunterbrechung | 0 | - |
| 0xBA09E7 | Interner Rotorpositionssensor: Kurzschluss nach Plus | 0 | - |
| 0xBA09E8 | Interner Spannungssensor KL40 slow: Kurzschluss nach Plus | 0 | - |
| 0xBA09E9 | Interner Spannungssensor KL40 slow: Kurzschluss nach Masse | 0 | - |
| 0xBA09EA | Interner Spannungssensor KL40 slow: Bereich zu klein | 0 | - |
| 0xBA09EB | Interner Spannungssensor KL40 slow: Abweichung zu KL40 fast zu groß | 0 | - |
| 0xBA09EC | Interner Spannungssensor KL30B: Kurzschluss nach Plus | 0 | - |
| 0xBA09ED | Interner Spannungssensor KL30B: Kurzschluss nach Masse | 0 | - |
| 0xBA09EE | Interner Spannungssensor KL30B: Bereich zu klein | 0 | - |
| 0xBA09EF | Interner Spannungssensor KL30B: Abweichung zu Referenz zu groß | 0 | - |
| 0xBA09F0 | Interner Rotorpositionssensor: Radius zu groß | 0 | - |
| 0xBA09F2 | Interner Temperatursensor: Abweichung zu Referenztemperatur zu groß | 0 | - |
| 0xBA09F3 | Interner Rotorpositionssensor: Radius zu klein | 0 | - |
| 0xBA09F4 | Interner Rotorpositionssensor: Abweichung zu Referenz zu groß | 0 | - |
| 0xBA09F6 | Interner Erregerstromsensor: Bereich zu klein | 0 | - |
| 0xBA09F7 | Interner Erregerstromsensor: Abweichung zu erwartetem Wert zu groß | 0 | - |
| 0xBA09F8 | Interner Phasenstromsensor: Bereich zu groß | 0 | - |
| 0xBA09F9 | Interner Phasenstromsensor: Bereich zu klein | 0 | - |
| 0xBA09FB | Interne Phasenstromsensoren: Summe aller Ströme ungleich null | 0 | - |
| 0xBA09FF | Interner System ASIC: Konfigurationsfehler | 0 | - |
| 0xBA0A04 | Spannung an KL40: Überspannung | 1 | - |
| 0xBA0A07 | Spannung an KL40: Überspannungskomparator aktiviert | 1 | - |
| 0xBA0A08 | Spannung an KL40: Unterspannung | 1 | - |
| 0xBA0A0C | Interner SPI System ASIC: Timeout | 0 | - |
| 0xBA0A10 | Watchdog: Alive Überwachung | 0 | - |
| 0xBA0A11 | Watchdog: Fehlerzähler hat oberes Limit überschritten | 0 | - |
| 0xBA0A12 | Watchdog: Timeout bei Antwort | 0 | - |
| 0xBA0A13 | Watchdog: Permanent falsche Antwort | 0 | - |
| 0xBA0A30 | Interner Hardware Fehler | 0 | - |
| 0xBA0A31 | Interner Hardware Fehler | 0 | - |
| 0xBA0A32 | Interner Hardware Fehler | 0 | - |
| 0xBA0A33 | Interner Hardware Fehler | 0 | - |
| 0xBA0A34 | Interner Hardware Fehler | 0 | - |
| 0xBA0A35 | Fehler Generatorbetrieb: Leistungsverlust festgestellt | 0 | - |
| 0xBA0A36 | Fehler Motorbetrieb: Leistungsverlust festgestellt | 0 | - |
| 0xBA0A3B | Interner Erregerstromsensor: Abweichung Offset zu groß | 0 | - |
| 0xBA0A3C | Interner Rotorpositionssensor: Radius zu klein | 0 | - |
| 0xBA0A40 | Interner ADC: Werte eingefroren | 0 | - |
| 0xBA0A43 | Interner Selbsttest fehlgeschlagen | 0 | - |
| 0xBA0A44 | Crashsignal aktiv | 1 | - |
| 0xBA0A47 | Interner Software Fehler: Control Unit Reset | 0 | - |
| 0xBA0A4D | Interner Erregerstromsensor: Korrekturfaktor null | 0 | - |
| 0xBA0A4F | Interner Erregerstromsensor: Abweichung Offset zu groß | 0 | - |
| 0xBA0A50 | Interner Erregerstromsensor: Bereich zu groß | 0 | - |
| 0xBA0A51 | Interner Phasenstromsensor: Korrekturfaktor zu groß | 0 | - |
| 0xBA0A52 | Spannung an KL40: Unterspannungskomparator aktiviert | 1 | - |
| 0xBA0A53 | Interner Unterspannungskomparator: Schaltung nicht funktional | 0 | - |
| 0xBA0A54 | Interner Überspannungskomparator: Schaltung nicht funktional | 0 | - |
| 0xBA0A59 | Interner Speicher: Fehler Speicherschutzfunktion | 0 | - |
| 0xBA0A6A | Interner Brückentest: Selbsttest fehlgeschlagen | 0 | - |
| 0xBA0A6B | Interner Rotorpositionssensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A6C | Interner Rotorpositionssensor: Radius zu groß | 0 | - |
| 0xBA0A6D | Interner Abschaltpfadtest: FCCU fehlgeschlagen | 0 | - |
| 0xBA0A6E | Interner Abschaltpfadtest: System ASIC fehlgeschlagen | 0 | - |
| 0xBA0A6F | Interner Abschaltpfadtest: UBS fehlgeschlagen | 0 | - |
| 0xBA0A70 | Interner Abschaltpfadtest: Watchdog fehlgeschlagen | 0 | - |
| 0xBA0A76 | Interner Spannungssensor KL30B: Bereich zu groß | 0 | - |
| 0xBA0A77 | Interner Spannungssensor KL40: Kurzschluss nach Masse | 0 | - |
| 0xBA0A78 | Interner Spannungssensor KL40: Kurzschluss nach Plus | 0 | - |
| 0xBA0A79 | Interner Spannungssensor KL40: Bereich zu groß | 0 | - |
| 0xBA0A7A | Interner Spannungssensor KL40: Bereich zu klein | 0 | - |
| 0xBA0A7B | Interner Spannungssensor KL40 slow: Bereich zu groß | 0 | - |
| 0xBA0A7C | Interner Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0xBA0A7D | Interner Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A7E | Interner Spannungssensor: Bereich zu groß | 0 | - |
| 0xBA0A7F | Interner Spannungssensor: Bereich zu klein | 0 | - |
| 0xBA0A80 | Interner Spannungssensor: Kurzschluss nach Masse | 0 | - |
| 0xBA0A81 | Interner Spannungssensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A82 | Interner Spannungssensor: Bereich zu groß | 0 | - |
| 0xBA0A83 | Interner Spannungssensor: Bereich zu klein | 0 | - |
| 0xBA0A84 | Interner Spannungssensor: Abweichung zu UBS zu groß | 0 | - |
| 0xBA0A85 | Interner Software Fehler: Stack overflow | 0 | - |
| 0xBA0A86 | Interner System ASIC: Zähler uC safety pin ist null | 0 | - |
| 0xBA0A87 | Interner System ASIC: Überwachung Fehler Bits fehlgeschlagen | 0 | - |
| 0xBA0A88 | Interner Ansauglufttemperatursensor: Abweichung zu Umgebungslufttemperatur zu groß | 0 | - |
| 0xBA0A89 | Interner Ansauglufttemperatursensor: Kurzschluss nach Masse | 0 | - |
| 0xBA0A8A | Interner Ansauglufttemperatursensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A8B | Interner Ansauglufttemperatursensor: Bereich zu groß | 0 | - |
| 0xBA0A8C | Interner Ansauglufttemperatursensor: Bereich zu klein | 0 | - |
| 0xBA0A8D | Interner Ansauglufttemperatursensor: Änderung zu groß | 0 | - |
| 0xBA0A8E | Interner Spannungssensor an KL40: Korrekturfaktor null | 0 | - |
| 0xBA0A90 | Interner Temperatursensor: Bereich zu groß | 0 | - |
| 0xBA0A91 | Interner Temperatursensor: Bereich zu klein | 0 | - |
| 0xBA0A92 | Interner Temperatursensor: Änderung zu groß | 0 | - |
| 0xBA0A93 | Interner Temperatursensor: Kurzschluss nach Masse | 0 | - |
| 0xBA0A94 | Interner Temperatursensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A95 | Interner Temperatursensor: Bereich zu groß | 0 | - |
| 0xBA0A96 | Interner Temperatursensor: Bereich zu klein | 0 | - |
| 0xBA0A97 | Interner Temperatursensor: Änderung zu groß | 0 | - |
| 0xBA0A98 | Interner Temperatursensor: Kurzschluss nach Masse | 0 | - |
| 0xBA0A99 | Interner Temperatursensor: Kurzschluss nach Plus | 0 | - |
| 0xBA0A9A | Interner Temperatursensor: Bereich zu groß | 0 | - |
| 0xBA0A9B | Interner Temperatursensor: Bereich zu klein | 0 | - |
| 0xBA0A9C | Interner Temperatursensor: Änderung zu groß | 0 | - |
| 0xBA0A9D | Interner Temperatursensor: Abweichung zu Referenz zu groß | 0 | - |
| 0xBA0AA4 | Interner Ansauglufttemperatursensor: Änderung zu klein | 0 | - |
| 0xBA0AA5 | Interner Temperatursensor: Änderung zu klein | 0 | - |
| 0xDE4BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xDE5400 | Botschaft LIM_CHG_DCHG_BN48: Timeout | 1 | - |
| 0xDE5401 | Botschaft SPEC_LIM_SGE48: Timeout | 1 | - |
| 0xDE5402 | Botschaft SPEC_OPRNG_SGE48: Timeout | 1 | - |
| 0xDE5403 | Botschaft SPEC_OPRNG_SGE48_VRFD: Timeout | 1 | - |
| 0xDE5404 | Botschaft ST_CR: Timeout | 1 | - |
| 0xDE5406 | Botschaft CON_VEH: Timeout | 1 | - |
| 0xDE5407 | Botschaft RELATIVZEIT: Timeout | 1 | - |
| 0xDE5408 | Botschaft KILOMETERSTAND: Timeout | 1 | - |
| 0xDE5409 | Botschaft FZZSTD: Timeout | 1 | - |
| 0xDE540A | Botschaft DIAG_OBD_ENG: Timeout | 1 | - |
| 0xDE540B | Botschaft CTR_DIAG_OBD_ENGMG: Timeout | 1 | - |
| 0xDE5410 | CRC Fehler CAN Nachricht: SPEC_OPRNG_SGE48_VRFD | 1 | - |
| 0xDE5411 | Alive Counter Fehler CAN Nachricht: SPEC_OPRNG_SGE48_VRFD | 1 | - |
| 0xDE5412 | CRC Fehler CAN Nachricht: ST_CR | 1 | - |
| 0xDE5413 | Alive Counter Fehler CAN Nachricht: ST_CR | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4009 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400A | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400B | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400C | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400D | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400E | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400F | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4010 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4011 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4012 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4013 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4014 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4015 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4016 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4017 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4018 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4019 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401A | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401B | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401C | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4200 | SPANNUNG_KL40_SGR | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4201 | DEHZAHL_SGR | 1/min | High | unsigned int | - | 1.0 | 1.0 | -1000.0 |
| 0x4202 | DC_STROM_SGR | A | High | unsigned int | - | 1.0 | 10.0 | -400.0 |
| 0x4203 | THERMISCHE_AUSLASTUNG_SGR | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | SPANNUNG_KL30B_SGR | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4205 | IST_DREHMOMENT_SGR | Nm | High | unsigned char | - | 1.0 | 1.0 | -127.0 |
| 0x4206 | SOLL_DREHMOMENT_SGR | Nm | High | unsigned char | - | 1.0 | 1.0 | -127.0 |
| 0x4207 | BETRIEBSART_SGR | 0-n | High | 0xFF | TAB_Betriebsart_SGR | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
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
| 0xBA0A42 | Interner Software Fehler | 0 | - |
| 0xBA0A5B | Interner Software Fehler: Integrität fehlerhaft | 0 | - |
| 0xBA0A5C | Interner Software Fehler: Verlust der Redundanz im NVM | 0 | - |
| 0xBA0A5D | Interner Software Fehler: Nachrichten Überlauf | 0 | - |
| 0xBA0A5E | Interner Software Fehler: NVM Anfrage fehlgeschlagen | 0 | - |
| 0xBA0A60 | Interner Software Fehler: NVM schreibgeschützt | 0 | - |
| 0xBA0A62 | Interner Software Fehler: Betriebssystem allgemeiner Fehler | 0 | - |
| 0xBA0A63 | Interner Software Fehler: Laufzeitverletzung im Betriebssystem | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4009 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400A | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400B | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400C | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400D | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400E | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x400F | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4010 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4011 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4012 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4013 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4014 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4015 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4016 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4017 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4018 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4019 | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401A | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401B | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x401C | UWB_ERROR_DETAILS | HEX | High | unsigned long | - | - | - | - |
| 0x4200 | SPANNUNG_KL40_SGR | V | High | unsigned int | - | 1.0 | 100.0 | 0.0 |
| 0x4201 | DEHZAHL_SGR | 1/min | High | unsigned int | - | 1.0 | 1.0 | -1000.0 |
| 0x4202 | DC_STROM_SGR | A | High | unsigned int | - | 1.0 | 10.0 | -400.0 |
| 0x4203 | THERMISCHE_AUSLASTUNG_SGR | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | SPANNUNG_KL30B_SGR | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4205 | IST_DREHMOMENT_SGR | Nm | High | unsigned char | - | 1.0 | 1.0 | -127.0 |
| 0x4206 | SOLL_DREHMOMENT_SGR | Nm | High | unsigned char | - | 1.0 | 1.0 | -127.0 |
| 0x4207 | BETRIEBSART_SGR | 0-n | High | 0xFF | TAB_Betriebsart_SGR | - | - | - |
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

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_DREHMOMENT_WERT | Nm | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Aktuelle Soll-Drehmoment-Vorgabe für den SGR |
| STAT_IST_DREHMOMENT_WERT | Nm | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Aktuelles Ist-Drehmoment des SGR |
| STAT_MIN_DREHMOMENT_SGR_WERT | Nm | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Unteres Drehmoment-Limit des SGR (generatorischer Betrieb) |
| STAT_MAX_DREHMOMENT_SGR_WERT | Nm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Oberes Drehmoment-Limit des SGR (motorischer Betrieb) |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KL40 | 0x4000 | STAT_SPANNUNG_KL40_WERT | Aktuelle Spannung an KL40 des SGR | V | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| DC_STROM_KL40 | 0x4001 | STAT_DC_STROM_KL40_WERT | Aktueller DC Strom an KL40 des SGR | A | - | High | unsigned int | - | 1.0 | 10.0 | -400.0 | - | 22 | - | - |
| DREHZAHL_SGR | 0x4002 | STAT_DREHZAHL_SGR_WERT | Aktuelle Drehzahl des SGR | 1/min | - | High | unsigned int | - | 1.0 | 1.0 | -1000.0 | - | 22 | - | - |
| SPANNUNG_KL30B | 0x4003 | STAT_SPANNUNG_KL30B_WERT | Spannung an KL30B des SGR | V | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| THERMISCHE_AUSLASTUNG_SGR | 0x4004 | STAT_THERMISCHE_AUSLASTUNG_WERT | Thermische Auslastung des SGR 0...100%: volle Funktionalität 101...120%: Derating | % | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DREHMOMENT_SGR | 0x4005 | - | Aktuelles Drehmoment des SGR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| BETRIEBSART_SGR | 0x4006 | STAT_BETRIEBSART_SGR | Aktuelle Betriebsart des SGR | 0-n | - | High | unsigned char | TAB_Betriebsart_SGR | - | - | - | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_BETRIEBSART_SGR

| WERT | TEXT |
| --- | --- |
| 0 | Standby |
| 1 | Drehmomentregelung |
| 3 | DC Spannungsregelung |
| 0xFF | Wert ungültig |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |
