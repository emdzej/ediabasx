# VIP_G30N.prg

## General

|  |  |
| --- | --- |
| File | VIP_G30N.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 126 |
| Origin | BMW EF-511 Peter_Wanner |
| Revision | 0.400 |
| Author | SOKRATEL-KOMMUNIKATIONS EF-512 Stuerzer |
| ECU Comment | SGBD für die S15A-20-07-310 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitätskontrolle EBC460 SP2018 (Virtuelle Integrationsplattform) |  |  |
| ORIGIN | string | BMW EF-511 Peter_Wanner |  |  |
| REVISION | string | 0.400 |  |  |
| AUTHOR | string | SOKRATEL-KOMMUNIKATIONS EF-512 Stuerzer |  |  |
| COMMENT | string | SGBD für die S15A-20-07-310 |  |  |
| PACKAGE | string | 1.992 |  |  |
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

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

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

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### _DSC_SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### _DSC_BYTE_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### STEUERN_SWC_VERSIONEN_LESEN_KMAIN_KSUB

Auslesen von Versionsinfo der auf dem SG implementierten SWCs UDS: $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| KMAIN | unsigned int | Haupt SWC-Kennung |
| KSUB | unsigned char | Sub SWC-Kennung |

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

### ARG_0X6660_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Error number that shall be sent to the navigation (signal ST_ERR_NO_RCVR_NAVI), Range 0-255 |
| RESYNC_RATE | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Specifies the time (in seconds) between two consecutive resync requests. A value of zero leads to exactly one resync request. |

### ARG_0X6700_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONEN | - | - | - | - | - | Angeforderte Funktion |
| WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Zusätzliches Argument abhängig von gewünschter Funktion (z.B. für Soll-Moment), wird nicht immer ausgewertet. |

### ARG_0X6702_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | high | unsigned char | - | TAB_ODO_FUNKTIONEN | - | - | - | - | - | Angeforderte Funktion |

### ARG_0X6704_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | high | unsigned char | - | TAB_SBSHP_FUNKTIONEN | - | - | - | - | - | Angeforderte Funktion |
| RADIUS | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | 0.1 | 1.0 | Radradius |

### ARG_0X6705_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMSBSHP | - | - | - | - | - | Auswahl Adaptivwert |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0X6707_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_ZFM | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0X6709_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_SBS_SP2018 | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0X6728_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_MUE | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XA200_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX_DATENSATZ | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Index Datensatz |

### ARG_0XD6B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMZFF | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XD6B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMSKR | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XD6B9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMWS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDB2F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv  0 = inaktiv |

### ARG_0XDB98_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed char | - | TAB_ROLLENMODUS | - | - | - | - | - | Setzen / Rücksetzen Rollenmodus (2=Setzen Rollenmodus Innenraum; 1 = Setzen Werksrollenmodus; 0 =  Rücksetzen) |

### ARG_0XDC8A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_AAEPS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDC8B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_EV | 1.0 | 1.0 | 0.0 | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _ZEITRAHMEN_AUSWAHL | + | - | 0-n | high | unsigned char | - | TAB_ZEITRAHMEN_AUSWAHL | - | - | - | - | - | Erlaubt über die Argumenten-Auswahl verschiedener Zeitrahmen die Ausgabe der max CPU Last in % für den ausgewählten Zeitrahmen. |

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
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x023900 | Energiesparmode aktiv | 0 | - |
| 0x023940 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x023941 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x023943 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x023945 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x02FF39 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030540 | QDM-SBS - Gierratensensor Redundanzfehler | 0 | - |
| 0x030541 | QDM-SBS - Gierratensensor Modellfehler Sensor 1 | 0 | - |
| 0x030542 | QDM-SBS - Gierratensensor Modellfehler Sensor 2 | 0 | - |
| 0x030543 | QDM-SBS - Gierratensensor Signalqualität Sensor 1 | 0 | - |
| 0x030544 | QDM-SBS - Gierratensensor Signalqualität Sensor 2 | 0 | - |
| 0x03054A | QDM-SBS - Lenkwinkel effektiv Modellfehler | 0 | - |
| 0x03054B | QDM-SBS - Lenkwinkel effektiv Randueberwachung | 0 | - |
| 0x030555 | QDM-SBS - Lenkwinkel Fahrer Modellfehler | 0 | - |
| 0x030557 | QDM-SBS - Lenkwinkel Fahrer Adaptivdaten fuer Lenkwinkeltoleranz auf Maximalwert | 0 | - |
| 0x03055A | QDM-SBS - Laengsbeschleunigungssensor Modellfehler | 0 | - |
| 0x03055B | QDM-SBS - Laengsbeschleunigungssensor Signalqualitaet | 0 | - |
| 0x030560 | QDM-SBSHP - Adaptivdaten unplausibel | 0 | - |
| 0x030566 | QDM-SBS - Nickrate Modellfehler | 0 | - |
| 0x030567 | QDM-SBS - Nickrate Signalqualitaet ungenuegend | 0 | - |
| 0x03056A | QDM-SBS - Querbeschleunigungssensor Redundanzfehler | 0 | - |
| 0x03056B | QDM-SBS - Querbeschleunigungssensor Modellfehler Sensor 1 | 0 | - |
| 0x03056C | QDM-SBS - Querbeschleunigungssensor Modellfehler Sensor 2 | 0 | - |
| 0x03056D | QDM-SBS - Querbeschleunigungssensor Signalqualitaet Sensor 1 | 0 | - |
| 0x03056E | QDM-SBS - Querbeschleunigungssensor Signalqualitaet Sensor 2 | 0 | - |
| 0x030576 | QDM-SBS - Rollrate Modellfehler | 0 | - |
| 0x030577 | QDM-SBS - Rollrate Signalqualitaet ungenuegend | 0 | - |
| 0x030581 | QDM-SBS - Vertikalbeschleunigungssensor Modellfehler | 0 | - |
| 0x030582 | QDM-SBS - Vertikalbeschleunigungssensor Signalqualitaet ungenuegend | 0 | - |
| 0x030588 | QDM-SBS - Aktiver Bandende-Rollenmodus | 0 | - |
| 0x03058C | QDM-SBS - Schwellen Querbeschleunigungsueberwachung aufgeweitet | 0 | - |
| 0x03058D | QDM-SBS - Schwerpunktsgeschwindigkeit Diversitaeres Rechnen HL-Software | 0 | - |
| 0x03058E | QDM-SBS - Beschleunigungssensoren Adaptivdaten Sensortoleranz auf Maximalwert | 0 | - |
| 0x03058F | QDM-SBS - Sensorcluster Seriennummer geändert oder fehlerhaft | 0 | - |
| 0x03064D | QDM-ELMAFW - Fahrdynamikregelung im Basis-Bordnetz durch globales Power Management eingeschränkt | 0 | - |
| 0x03064E | QDM-ELMAFW - Fahrdynamikregelung im Extended-Bordnetz durch globales Power Management eingeschränkt | 0 | - |
| 0x03064F | QDM-SKR - Radradius Lernalgorithmus langfristig inaktiv | 0 | - |
| 0x03065C | QDM-ZFM - HSR  deaktiviert Qualität Fahrzeugsensorik ungenügend | 0 | - |
| 0x030661 | QDM-ZFM - HSR langsame Lenkwinkelsynchronisation überschreitet fahrsituationsbedingt Warngrenze | 0 | - |
| 0x030665 | QDM-ZFM - HSR - Aktuator AGB meldet Dynamikproblem - Fehleramplitude | 0 | - |
| 0x030666 | QDM-ZFM - HSR schnelle Lenkwinkelsynchronisation überschreitet fahrsituationsbedingt Warngrenze | 1 | - |
| 0x03067F | QDM-ZFM - Fahrtrichtung unsicher bei vx größer 2m/s | 1 | - |
| 0x030801 | FAS - ACC/DCC - Sicherheitsabschaltung | 0 | - |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 0 | - |
| 0x48390B | Steuergerät intern - Betriebssystem - Sequenzfehler | 0 | - |
| 0x48390C | Steuergerät intern - Betriebssystem - RTOS-Fehler | 0 | - |
| 0x48390D | Steuergerät intern - Betriebssystem - allgemeiner Fehler | 0 | - |
| 0x48390E | Steuergerät intern - Betriebssystem - FPU-Fehler | 0 | - |
| 0x48390F | Steuergerät intern - Betriebssystem - MPU-Fehler | 0 | - |
| 0x483910 | Steuergerät intern - Betriebssystem - Watchdog-Fehler | 0 | - |
| 0x483911 | Steuergerät intern - allgemeiner Sammelfehler | 0 | - |
| 0x483912 | Steuergerät intern - ECU-Manager-Fehler | 0 | - |
| 0x483913 | Steuergerät intern - Flashtreiber-Fehler | 0 | - |
| 0x483914 | Steuergerät intern - NV-RAM-Fehler | 0 | - |
| 0x483915 | Steuergerät intern - Kommunikation-VIP-BRS-Fehler | 0 | - |
| 0x483919 | Steuergerät intern - Softwarefehler - Sammelfehler | 0 | - |
| 0x48391A | Steuergerät intern - Betriebssystem - MCU-Fehler | 0 | - |
| 0x48391B | Steuergerät intern - FlashEEPromEmulation-Fehler | 0 | - |
| 0xD7441F | FLEXRAY Physical bus error | 0 | - |
| 0xD74420 | FLEXRAY controller error | 0 | - |
| 0xD74487 | FLEXRAY StartUpFailed | 0 | - |
| 0xD74518 | FAS-CAN Control Module Bus OFF | 0 | - |
| 0xD74BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD75428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD75429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD7542A | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) Prüfsumme falsch | 1 | - |
| 0xD7542B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD75432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD75433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD75434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD75435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD75437 | Botschaft(Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD7543A | Signal(Außentemperatur, ID: A_TEMP) ungültig | 1 | - |
| 0xD75441 | Botschaft(Einheiten BN2020, ID: EINHEITEN_BN2020) fehlt | 1 | - |
| 0xD75444 | Signal(Einheiten BN2020, ID: EINHEITEN_BN2020) ungültig | 1 | - |
| 0xD7544E | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 | - |
| 0xD7544F | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 | - |
| 0xD75450 | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 | - |
| 0xD75451 | Signal(Winkel Fahrpedal, ID: ANG_ACPD) ungültig | 1 | - |
| 0xD75452 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD75455 | Signal(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) ungültig | 1 | - |
| 0xD75456 | Botschaft(Ist Kraft Zahnstange, ID: AVL_FORC_GRD) fehlt | 1 | - |
| 0xD75457 | Botschaft(Ist Kraft Zahnstange, ID: AVL_FORC_GRD) nicht aktuell | 1 | - |
| 0xD75458 | Botschaft(Ist Kraft Zahnstange, ID: AVL_FORC_GRD) Prüfsumme falsch | 1 | - |
| 0xD75459 | Signal(Ist Kraft Zahnstange, ID: AVL_FORC_GRD) ungültig | 1 | - |
| 0xD7545A | Botschaft(Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) fehlt | 1 | - |
| 0xD7545B | Botschaft(Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) nicht aktuell | 1 | - |
| 0xD7545C | Botschaft(Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) Prüfsumme falsch | 1 | - |
| 0xD7545D | Signal(Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) ungültig | 1 | - |
| 0xD7545E | Botschaft(Ist Position EPS, ID: AVL_PO_EPS) fehlt | 1 | - |
| 0xD7545F | Botschaft(Ist Position EPS, ID: AVL_PO_EPS) nicht aktuell | 1 | - |
| 0xD75460 | Botschaft(Ist Position EPS, ID: AVL_PO_EPS) Prüfsumme falsch | 1 | - |
| 0xD75461 | Signal(Ist Position EPS, ID: AVL_PO_EPS) ungültig | 1 | - |
| 0xD75462 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) fehlt | 1 | - |
| 0xD75463 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) nicht aktuell | 1 | - |
| 0xD75464 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Prüfsumme falsch | 1 | - |
| 0xD75465 | Signal(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) ungültig | 1 | - |
| 0xD7546A | Botschaft(Kamera Frontraumüberwachung, ID: CAM_HDWOBS) fehlt | 1 | - |
| 0xD7546B | Botschaft(Kamera Frontraumüberwachung, ID: CAM_HDWOBS) nicht aktuell | 1 | - |
| 0xD7546C | Botschaft(Kamera Frontraumüberwachung, ID: CAM_HDWOBS) Prüfsumme falsch | 1 | - |
| 0xD7546D | Signal(Kamera Frontraumüberwachung, ID: CAM_HDWOBS) ungültig | 1 | - |
| 0xD7546E | Botschaft(Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) fehlt | 1 | - |
| 0xD7546F | Botschaft(Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) nicht aktuell | 1 | - |
| 0xD75470 | Botschaft(Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) Prüfsumme falsch | 1 | - |
| 0xD75471 | Signal(Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) ungültig | 1 | - |
| 0xD75472 | Botschaft(Anzeige CTA, ID: DISP_CTA) fehlt | 1 | - |
| 0xD75475 | Signal(Anzeige CTA, ID: DISP_CTA) ungültig | 1 | - |
| 0xD75476 | Botschaft(Daten Elektrische-Lenkung, ID: DT_EST) fehlt | 1 | - |
| 0xD75477 | Botschaft(Daten Elektrische-Lenkung, ID: DT_EST) nicht aktuell | 1 | - |
| 0xD75478 | Botschaft(Daten Elektrische-Lenkung, ID: DT_EST) Prüfsumme falsch | 1 | - |
| 0xD75479 | Signal(Daten Elektrische-Lenkung, ID: DT_EST) ungültig | 1 | - |
| 0xD7547E | Botschaft(Daten Funktion HDC, ID: DT_FN_HDC) fehlt | 1 | - |
| 0xD75481 | Signal(Daten Funktion HDC, ID: DT_FN_HDC) ungültig | 1 | - |
| 0xD75482 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 | - |
| 0xD75483 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) nicht aktuell | 1 | - |
| 0xD75484 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) Prüfsumme falsch | 1 | - |
| 0xD75485 | Signal(Daten Antriebsstrang 2, ID: DT_PT_2) ungültig | 1 | - |
| 0xD75486 | Botschaft(Fahrerlebnis Modus, ID: DXP_MOD) fehlt | 1 | - |
| 0xD75489 | Signal(Fahrerlebnis Modus, ID: DXP_MOD) ungültig | 1 | - |
| 0xD7548A | Botschaft(Energie Lenkung Hinterachse, ID: ENERG_STE_BAX) fehlt | 1 | - |
| 0xD7548D | Signal(Energie Lenkung Hinterachse, ID: ENERG_STE_BAX) ungültig | 1 | - |
| 0xD7548E | Botschaft(Energie Vertikal Dynamik ARS, ID: ENERG_VE_DYNMC_ARS) fehlt | 1 | - |
| 0xD75491 | Signal(Energie Vertikal Dynamik ARS, ID: ENERG_VE_DYNMC_ARS) ungültig | 1 | - |
| 0xD75492 | Botschaft(Energie Vertikal Dynamik EHC, ID: ENERG_VE_DYNMC_EHC) fehlt | 1 | - |
| 0xD75495 | Signal(Energie Vertikal Dynamik EHC, ID: ENERG_VE_DYNMC_EHC) ungültig | 1 | - |
| 0xD75496 | Botschaft(Höhenstand Fahrzeug 1, ID: HGLV_VEH_1) fehlt | 1 | - |
| 0xD75499 | Signal(Höhenstand Fahrzeug 1, ID: HGLV_VEH_1) ungültig | 1 | - |
| 0xD7549E | Botschaft(Wankmoment Fahrzeug SP2015, ID: MX_VEH_SP2015) fehlt | 1 | - |
| 0xD754A1 | Signal(Wankmoment Fahrzeug SP2015, ID: MX_VEH_SP2015) ungültig | 1 | - |
| 0xD754A2 | Botschaft(Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) fehlt | 1 | - |
| 0xD754A5 | Signal(Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) ungültig | 1 | - |
| 0xD754A9 | Signal(Navigationsgraph, ID: NAV_GRAPH) ungültig | 1 | - |
| 0xD754AD | Signal(Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) ungültig | 1 | - |
| 0xD754B1 | Signal(Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) ungültig | 1 | - |
| 0xD754B2 | Botschaft(Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) fehlt | 1 | - |
| 0xD754B5 | Signal(Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) ungültig | 1 | - |
| 0xD754B9 | Signal(Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) ungültig | 1 | - |
| 0xD754BD | Signal(Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) ungültig | 1 | - |
| 0xD754BE | Botschaft(Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 | - |
| 0xD754C1 | Signal(Navigation System Information, ID: NAV_SYS_INF) ungültig | 1 | - |
| 0xD754C2 | Botschaft(Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) fehlt | 1 | - |
| 0xD754C5 | Signal(Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) ungültig | 1 | - |
| 0xD754C6 | Botschaft(Bedienung Tempomat, ID: OP_CCTR) fehlt | 1 | - |
| 0xD754C9 | Signal(Bedienung Tempomat, ID: OP_CCTR) ungültig | 1 | - |
| 0xD754CA | Botschaft(Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) fehlt | 1 | - |
| 0xD754CB | Botschaft(Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) nicht aktuell | 1 | - |
| 0xD754CC | Botschaft(Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) Prüfsumme falsch | 1 | - |
| 0xD754CD | Signal(Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) ungültig | 1 | - |
| 0xD754D6 | Botschaft(Erkennung Verkehrszeichen, ID: RCOG_TRSG) fehlt | 1 | - |
| 0xD754D9 | Signal(Erkennung Verkehrszeichen, ID: RCOG_TRSG) ungültig | 1 | - |
| 0xD754DE | Botschaft(Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) fehlt | 1 | - |
| 0xD754DF | Botschaft(Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) nicht aktuell | 1 | - |
| 0xD754E0 | Botschaft(Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) Prüfsumme falsch | 1 | - |
| 0xD754E1 | Signal(Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) ungültig | 1 | - |
| 0xD754E2 | Botschaft(Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW) fehlt | 1 | - |
| 0xD754E3 | Botschaft(Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW) nicht aktuell | 1 | - |
| 0xD754E4 | Botschaft(Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW) Prüfsumme falsch | 1 | - |
| 0xD754E5 | Signal(Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW) ungültig | 1 | - |
| 0xD754E6 | Botschaft(Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) fehlt | 1 | - |
| 0xD754E7 | Botschaft(Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) nicht aktuell | 1 | - |
| 0xD754E8 | Botschaft(Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) Prüfsumme falsch | 1 | - |
| 0xD754E9 | Signal(Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) ungültig | 1 | - |
| 0xD754EA | Botschaft(Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) fehlt | 1 | - |
| 0xD754EB | Botschaft(Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) nicht aktuell | 1 | - |
| 0xD754EC | Botschaft(Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) Prüfsumme falsch | 1 | - |
| 0xD754ED | Signal(Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) ungültig | 1 | - |
| 0xD754EE | Botschaft(Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) fehlt | 1 | - |
| 0xD754F1 | Signal(Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) ungültig | 1 | - |
| 0xD754F2 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xD754F5 | Signal(Status Anhänger, ID: STAT_ANHAENGER) ungültig | 1 | - |
| 0xD754FA | Botschaft(Status Akustikanforderungen, ID: ST_AURQ) fehlt | 1 | - |
| 0xD754FD | Signal(Status Akustikanforderungen, ID: ST_AURQ) ungültig | 1 | - |
| 0xD754FE | Botschaft(Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) fehlt | 1 | - |
| 0xD75501 | Signal(Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) ungültig | 1 | - |
| 0xD75502 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) fehlt | 1 | - |
| 0xD75503 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) nicht aktuell | 1 | - |
| 0xD75504 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Prüfsumme falsch | 1 | - |
| 0xD75505 | Signal(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) ungültig | 1 | - |
| 0xD75506 | Botschaft(Status Anzeige Kombi, ID: ST_DISP_KI) fehlt | 1 | - |
| 0xD75509 | Signal(Status Anzeige Kombi, ID: ST_DISP_KI) ungültig | 1 | - |
| 0xD7550A | Botschaft(Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) fehlt | 1 | - |
| 0xD7550D | Signal(Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) ungültig | 1 | - |
| 0xD7550E | Botschaft(Status ECBA, ID: ST_ECBA) fehlt | 1 | - |
| 0xD7550F | Botschaft(Status ECBA, ID: ST_ECBA) nicht aktuell | 1 | - |
| 0xD75510 | Botschaft(Status ECBA, ID: ST_ECBA) Prüfsumme falsch | 1 | - |
| 0xD75511 | Signal(Status ECBA, ID: ST_ECBA) ungültig | 1 | - |
| 0xD75512 | Botschaft(Status Elektrische-Lenkung Vorderachse, ID: ST_EST) fehlt | 1 | - |
| 0xD75513 | Botschaft(Status Elektrische-Lenkung Vorderachse, ID: ST_EST) nicht aktuell | 1 | - |
| 0xD75514 | Botschaft(Status Elektrische-Lenkung Vorderachse, ID: ST_EST) Prüfsumme falsch | 1 | - |
| 0xD75515 | Signal(Status Elektrische-Lenkung Vorderachse, ID: ST_EST) ungültig | 1 | - |
| 0xD75516 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) fehlt | 1 | - |
| 0xD75517 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) nicht aktuell | 1 | - |
| 0xD75518 | Botschaft(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD75519 | Signal(Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) ungültig | 1 | - |
| 0xD7551A | Botschaft(Status M-Drive 2, ID: ST_MDRV_2) fehlt | 1 | - |
| 0xD7551D | Signal(Status M-Drive 2, ID: ST_MDRV_2) ungültig | 1 | - |
| 0xD7551E | Botschaft(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) fehlt | 1 | - |
| 0xD75521 | Signal(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) ungültig | 1 | - |
| 0xD75522 | Botschaft(Status Bedienelement HDC, ID: ST_OPEL_HDC) fehlt | 1 | - |
| 0xD75525 | Signal(Status Bedienelement HDC, ID: ST_OPEL_HDC) ungültig | 1 | - |
| 0xD75526 | Botschaft(Status Parkassistent, ID: ST_PMA) fehlt | 1 | - |
| 0xD75527 | Botschaft(Status Parkassistent, ID: ST_PMA) nicht aktuell | 1 | - |
| 0xD75528 | Botschaft(Status Parkassistent, ID: ST_PMA) Prüfsumme falsch | 1 | - |
| 0xD75529 | Signal(Status Parkassistent, ID: ST_PMA) ungültig | 1 | - |
| 0xD7552E | Botschaft(Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) fehlt | 1 | - |
| 0xD7552F | Botschaft(Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) nicht aktuell | 1 | - |
| 0xD75530 | Botschaft(Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Prüfsumme falsch | 1 | - |
| 0xD75531 | Signal(Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) ungültig | 1 | - |
| 0xD75532 | Botschaft(Status Heckspoiler BN2020, ID: ST_RSP_BN2020) fehlt | 1 | - |
| 0xD75533 | Botschaft(Status Heckspoiler BN2020, ID: ST_RSP_BN2020) nicht aktuell | 1 | - |
| 0xD75534 | Botschaft(Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Prüfsumme falsch | 1 | - |
| 0xD75535 | Signal(Status Heckspoiler BN2020, ID: ST_RSP_BN2020) ungültig | 1 | - |
| 0xD75536 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) fehlt | 1 | - |
| 0xD75537 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) nicht aktuell | 1 | - |
| 0xD75538 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) Prüfsumme falsch | 1 | - |
| 0xD75539 | Signal(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) ungültig | 1 | - |
| 0xD7553A | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD7553B | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD7553C | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD7553D | Signal(Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 | - |
| 0xD7553E | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | - |
| 0xD7553F | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) nicht aktuell | 1 | - |
| 0xD75540 | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Prüfsumme falsch | 1 | - |
| 0xD75541 | Signal(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) ungültig | 1 | - |
| 0xD75542 | Botschaft(Status Lenkung Hinterachse, ID: ST_STE_BAX) fehlt | 1 | - |
| 0xD75543 | Botschaft(Status Lenkung Hinterachse, ID: ST_STE_BAX) nicht aktuell | 1 | - |
| 0xD75544 | Botschaft(Status Lenkung Hinterachse, ID: ST_STE_BAX) Prüfsumme falsch | 1 | - |
| 0xD75545 | Signal(Status Lenkung Hinterachse, ID: ST_STE_BAX) ungültig | 1 | - |
| 0xD7554E | Botschaft(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) fehlt | 1 | - |
| 0xD75551 | Signal(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) ungültig | 1 | - |
| 0xD75552 | Botschaft(Konfiguration EPS, ID: SU_EPS) fehlt | 1 | - |
| 0xD75553 | Botschaft(Konfiguration EPS, ID: SU_EPS) nicht aktuell | 1 | - |
| 0xD75554 | Botschaft(Konfiguration EPS, ID: SU_EPS) Prüfsumme falsch | 1 | - |
| 0xD75555 | Signal(Konfiguration EPS, ID: SU_EPS) ungültig | 1 | - |
| 0xD75556 | Botschaft(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) fehlt | 1 | - |
| 0xD75559 | Signal(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) ungültig | 1 | - |
| 0xD7555A | Botschaft(Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) fehlt | 1 | - |
| 0xD7555D | Signal(Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) ungültig | 1 | - |
| 0xD75562 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) fehlt | 1 | - |
| 0xD75563 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) nicht aktuell | 1 | - |
| 0xD75564 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Prüfsumme falsch | 1 | - |
| 0xD75565 | Signal(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) ungültig | 1 | - |
| 0xD75566 | Botschaft(Soll Haptik Warnung Querführungsassistenz, ID: TAR_FEEL_WARN_LGA) fehlt | 1 | - |
| 0xD75569 | Signal(Soll Haptik Warnung Querführungsassistenz, ID: TAR_FEEL_WARN_LGA) ungültig | 1 | - |
| 0xD7556A | Botschaft(Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) fehlt | 1 | - |
| 0xD7556D | Signal(Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) ungültig | 1 | - |
| 0xD7556E | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | - |
| 0xD7556F | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 | - |
| 0xD75570 | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 | - |
| 0xD75571 | Signal(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) ungültig | 1 | - |
| 0xD75572 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) fehlt | 1 | - |
| 0xD75573 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) nicht aktuell | 1 | - |
| 0xD75574 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) Prüfsumme falsch | 1 | - |
| 0xD75575 | Signal(Momentenpotential Antriebsstrang, ID: TPO_PT) ungültig | 1 | - |
| 0xD75576 | Botschaft(Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 | - |
| 0xD75579 | Signal(Uhrzeit/Datum, ID: UHRZEIT_DATUM) ungültig | 1 | - |
| 0xD7557E | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xD7557F | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 | - |
| 0xD75580 | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 | - |
| 0xD75581 | Signal(Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 | - |
| 0xD75582 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) fehlt | 1 | - |
| 0xD75583 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) nicht aktuell | 1 | - |
| 0xD75584 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) Prüfsumme falsch | 1 | - |
| 0xD75585 | Signal(Radmoment Antrieb 9, ID: WMOM_DRV_9) ungültig | 1 | - |
| 0xD7558A | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) fehlt | 1 | - |
| 0xD7558B | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) nicht aktuell | 1 | - |
| 0xD7558C | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Prüfsumme falsch | 1 | - |
| 0xD7558D | Signal(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) ungültig | 1 | - |
| 0xD7558E | Botschaft(xDrive Stellglied Information, ID: XDRV_ACT_INFO) fehlt | 1 | - |
| 0xD7558F | Botschaft(xDrive Stellglied Information, ID: XDRV_ACT_INFO) nicht aktuell | 1 | - |
| 0xD75590 | Botschaft(xDrive Stellglied Information, ID: XDRV_ACT_INFO) Prüfsumme falsch | 1 | - |
| 0xD75591 | Signal(xDrive Stellglied Information, ID: XDRV_ACT_INFO) ungültig | 1 | - |
| 0xD75592 | Botschaft(Status Vibration Lenkrad, ID: ST_VIB_STW) fehlt | 1 | - |
| 0xD75593 | Botschaft(Status Vibration Lenkrad, ID: ST_VIB_STW) nicht aktuell | 1 | - |
| 0xD75594 | Botschaft(Status Vibration Lenkrad, ID: ST_VIB_STW) Prüfsumme falsch | 1 | - |
| 0xD75595 | Signal(Status Vibration Lenkrad, ID: ST_VIB_STW) ungültig | 1 | - |
| 0xD7559E | Botschaft(Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) fehlt | 1 | - |
| 0xD755A1 | Signal(Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) ungültig | 1 | - |
| 0xD755A2 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) fehlt | 1 | - |
| 0xD755A3 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) nicht aktuell | 1 | - |
| 0xD755A4 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) Prüfsumme falsch | 1 | - |
| 0xD755A5 | Signal(Bedienung Taster Parken, ID: OP_PUBU_PKG) ungültig | 1 | - |
| 0xD755A6 | Botschaft(Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) fehlt | 1 | - |
| 0xD755A9 | Signal(Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) ungültig | 1 | - |
| 0xD755EA | Botschaft(Interne Kommunikation BRS-VIP 1, ID: INTL_KOMM_BRS_VIP_1) fehlt | 1 | - |
| 0xD755EB | Botschaft(Interne Kommunikation BRS-VIP 1, ID: INTL_KOMM_BRS_VIP_1) nicht aktuell | 1 | - |
| 0xD755EC | Botschaft(Interne Kommunikation BRS-VIP 1, ID: INTL_KOMM_BRS_VIP_1) Prüfsumme falsch | 1 | - |
| 0xD755ED | Signal(Interne Kommunikation BRS-VIP 1, ID: INTL_KOMM_BRS_VIP_1) ungültig | 1 | - |
| 0xD755EE | Botschaft(Interne Kommunikation BRS-VIP 2, ID: INTL_KOMM_BRS_VIP_2) fehlt | 1 | - |
| 0xD755EF | Botschaft(Interne Kommunikation BRS-VIP 2, ID: INTL_KOMM_BRS_VIP_2) nicht aktuell | 1 | - |
| 0xD755F0 | Botschaft(Interne Kommunikation BRS-VIP 2, ID: INTL_KOMM_BRS_VIP_2) Prüfsumme falsch | 1 | - |
| 0xD755F1 | Signal(Interne Kommunikation BRS-VIP 2, ID: INTL_KOMM_BRS_VIP_2) ungültig | 1 | - |
| 0xD755F2 | Botschaft(Interne Kommunikation BRS-VIP 3, ID: INTL_KOMM_BRS_VIP_3) fehlt | 1 | - |
| 0xD755F3 | Botschaft(Interne Kommunikation BRS-VIP 3, ID: INTL_KOMM_BRS_VIP_3) nicht aktuell | 1 | - |
| 0xD755F4 | Botschaft(Interne Kommunikation BRS-VIP 3, ID: INTL_KOMM_BRS_VIP_3) Prüfsumme falsch | 1 | - |
| 0xD755F5 | Signal(Interne Kommunikation BRS-VIP 3, ID: INTL_KOMM_BRS_VIP_3) ungültig | 1 | - |
| 0xD755F6 | Botschaft(Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | - |
| 0xD755F7 | Botschaft(Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 | - |
| 0xD755F8 | Botschaft(Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 | - |
| 0xD755F9 | Signal(Ist Drehzahl Rad, ID: AVL_RPM_WHL) ungültig | 1 | - |
| 0xD755FA | Botschaft(Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) fehlt | 1 | - |
| 0xD755FD | Signal(Status Parametrisierung I-Brake, ID: ST_PRMSN_IBRK) ungültig | 1 | - |
| 0xD755FE | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) fehlt | 1 | - |
| 0xD755FF | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) nicht aktuell | 1 | - |
| 0xD75600 | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) Prüfsumme falsch | 1 | - |
| 0xD75601 | Signal(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) ungültig | 1 | - |
| 0xD75602 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) fehlt | 1 | - |
| 0xD75603 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) nicht aktuell | 1 | - |
| 0xD75604 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Prüfsumme falsch | 1 | - |
| 0xD75605 | Signal(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) ungültig | 1 | - |
| 0xD7560A | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) fehlt | 1 | - |
| 0xD7560B | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) nicht aktuell | 1 | - |
| 0xD7560C | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Prüfsumme falsch | 1 | - |
| 0xD7560D | Signal(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) ungültig | 1 | - |
| 0xD7560E | Botschaft(Status System Parken 2, ID: ST_SY_PKG_2) fehlt | 1 | - |
| 0xD75611 | Signal(Status System Parken 2, ID: ST_SY_PKG_2) ungültig | 1 | - |
| 0xD75612 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 | - |
| 0xD75613 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) nicht aktuell | 1 | - |
| 0xD75614 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Prüfsumme falsch | 1 | - |
| 0xD75615 | Signal(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) ungültig | 1 | - |
| 0xD7562A | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) fehlt | 1 | - |
| 0xD7562B | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) nicht aktuell | 1 | - |
| 0xD7562C | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) Prüfsumme falsch | 1 | - |
| 0xD7562D | Signal(Parken Querführung Koordination, ID: PKG_LAG_COOR) ungültig | 1 | - |
| 0xD7562E | Botschaft(Parken Querführung Umgebung, ID: PKG_LAG_ENVI) fehlt | 1 | - |
| 0xD75631 | Signal(Parken Querführung Umgebung, ID: PKG_LAG_ENVI) ungültig | 1 | - |
| 0xD75685 | Botschaft(Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) fehlt | 1 | - |
| 0xD75688 | Signal(Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) ungültig | 1 | - |
| 0xD75689 | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) fehlt | 1 | - |
| 0xD7568C | Signal(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) ungültig | 1 | - |
| 0xD7568D | Botschaft(Anzeige Fahrerassistenzsystem MRR, ID: DISP_DRASY_MRR) fehlt | 1 | - |
| 0xD7568E | Botschaft(Anzeige Fahrerassistenzsystem MRR, ID: DISP_DRASY_MRR) nicht aktuell | 1 | - |
| 0xD7568F | Botschaft(Anzeige Fahrerassistenzsystem MRR, ID: DISP_DRASY_MRR) Prüfsumme falsch | 1 | - |
| 0xD75690 | Signal(Anzeige Fahrerassistenzsystem MRR, ID: DISP_DRASY_MRR) ungültig | 1 | - |
| 0xD75691 | Botschaft(Fahrspur Liste, ID: LNE_LST) fehlt | 1 | - |
| 0xD75692 | Botschaft(Fahrspur Liste, ID: LNE_LST) nicht aktuell | 1 | - |
| 0xD75693 | Botschaft(Fahrspur Liste, ID: LNE_LST) Prüfsumme falsch | 1 | - |
| 0xD75694 | Signal(Fahrspur Liste, ID: LNE_LST) ungültig | 1 | - |
| 0xD75695 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) fehlt | 1 | - |
| 0xD75696 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) nicht aktuell | 1 | - |
| 0xD75697 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) Prüfsumme falsch | 1 | - |
| 0xD75698 | Signal(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) ungültig | 1 | - |
| 0xD75699 | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) fehlt | 1 | - |
| 0xD7569A | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) nicht aktuell | 1 | - |
| 0xD7569B | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) Prüfsumme falsch | 1 | - |
| 0xD7569C | Signal(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) ungültig | 1 | - |
| 0xD7569D | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) fehlt | 1 | - |
| 0xD7569E | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) nicht aktuell | 1 | - |
| 0xD7569F | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) Prüfsumme falsch | 1 | - |
| 0xD756A0 | Signal(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) ungültig | 1 | - |
| 0xD756A1 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) fehlt | 1 | - |
| 0xD756A2 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) nicht aktuell | 1 | - |
| 0xD756A3 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) Prüfsumme falsch | 1 | - |
| 0xD756A4 | Signal(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) ungültig | 1 | - |
| 0xD756A5 | Botschaft(Soll Bremsmomente Rekuperation BRS_VIP, ID: TAR_BRTORQ_RECUP_BRS_VIP) fehlt | 1 | - |
| 0xD756A6 | Botschaft(Soll Bremsmomente Rekuperation BRS_VIP, ID: TAR_BRTORQ_RECUP_BRS_VIP) nicht aktuell | 1 | - |
| 0xD756A7 | Botschaft(Soll Bremsmomente Rekuperation BRS_VIP, ID: TAR_BRTORQ_RECUP_BRS_VIP) Prüfsumme falsch | 1 | - |
| 0xD756A8 | Signal(Soll Bremsmomente Rekuperation BRS_VIP, ID: TAR_BRTORQ_RECUP_BRS_VIP) ungültig | 1 | - |
| 0xD756A9 | Botschaft(Status Reifen, ID: ST_TYR) fehlt | 1 | - |
| 0xD756AC | Signal(Status Reifen, ID: ST_TYR) ungültig | 1 | - |
| 0xD756DE | Botschaft(Status Fahrlicht, ID: STAT_FAHRLICHT) fehlt | 1 | - |
| 0xD756E1 | Signal(Status Fahrlicht, ID: STAT_FAHRLICHT) ungültig | 1 | - |
| 0xD75712 | Botschaft(Bedienung Lenkstockstaster, ID: BEDIENUNG_LENKSTOCK) fehlt | 1 | - |
| 0xD75715 | Botschaft(Steuerung Konfiguration FAS, ID: CTR_SU_DRS) fehlt | 1 | - |
| 0xD75719 | Signal(Steuerung Konfiguration FAS, ID: CTR_SU_DRS) ungültig | 1 | - |
| 0xD7571D | Signal(Bedienung Lenkstockstaster, ID: BEDIENUNG_LENKSTOCK) ungültig | 1 | - |
| 0xD75720 | Botschaft(PreCrash Heckradar, ID: PCSH_RERA) fehlt | 1 | - |
| 0xD75721 | Botschaft(Anforderung Bremsmoment FAS, ID: RQ_BRTORQ_FAS) fehlt | 1 | - |
| 0xD75722 | Botschaft(Anforderung Bremsmoment FAS, ID: RQ_BRTORQ_FAS) nicht aktuell | 1 | - |
| 0xD75723 | Signal(PreCrash Heckradar, ID: PCSH_RERA) ungültig | 1 | - |
| 0xD75724 | Botschaft(Anforderung Bremsmoment FAS, ID: RQ_BRTORQ_FAS) Prüfsumme falsch | 1 | - |
| 0xD75725 | Signal(Anforderung Bremsmoment FAS, ID: RQ_BRTORQ_FAS) ungültig | 1 | - |
| 0xD75726 | Botschaft(Anforderung Fahrerassistenz Komfort 2, ID: RQ_FAS_CF_2) fehlt | 1 | - |
| 0xD75727 | Botschaft(Anforderung Fahrerassistenz Komfort 2, ID: RQ_FAS_CF_2) nicht aktuell | 1 | - |
| 0xD75728 | Botschaft(Anforderung Fahrerassistenz Komfort 2, ID: RQ_FAS_CF_2) Prüfsumme falsch | 1 | - |
| 0xD75729 | Signal(Anforderung Fahrerassistenz Komfort 2, ID: RQ_FAS_CF_2) ungültig | 1 | - |
| 0xD7572A | Botschaft(Anforderung Radmoment FAS MRR, ID: RQ_WMOM_DRS_MRR) fehlt | 1 | - |
| 0xD7572B | Botschaft(Anforderung Radmoment FAS MRR, ID: RQ_WMOM_DRS_MRR) nicht aktuell | 1 | - |
| 0xD7572C | Botschaft(Anforderung Radmoment FAS MRR, ID: RQ_WMOM_DRS_MRR) Prüfsumme falsch | 1 | - |
| 0xD7572D | Signal(Anforderung Radmoment FAS MRR, ID: RQ_WMOM_DRS_MRR) ungültig | 1 | - |
| 0xD75730 | Botschaft(Status Drehzahl, ID: ST_RPM) fehlt | 1 | - |
| 0xD75732 | Botschaft(Status Drehzahl, ID: ST_RPM) nicht aktuell | 1 | - |
| 0xD75734 | Botschaft(Status Drehzahl, ID: ST_RPM) Prüfsumme falsch | 1 | - |
| 0xD75735 | Signal(Status Drehzahl, ID: ST_RPM) ungültig | 1 | - |
| 0xD75736 | Botschaft(Soll Fahrvektor 2, ID: TAR_DVE_2) fehlt | 1 | - |
| 0xD75737 | Botschaft(Soll Fahrvektor 2, ID: TAR_DVE_2) nicht aktuell | 1 | - |
| 0xD75738 | Botschaft(Soll Fahrvektor 2, ID: TAR_DVE_2) Prüfsumme falsch | 1 | - |
| 0xD75739 | Signal(Soll Fahrvektor 2, ID: TAR_DVE_2) ungültig | 1 | - |
| 0xD75768 | Botschaft(Gong Player Verfügbarkeit, ID:GO_PY_AVAI) fehlt | 1 | - |
| 0xD75771 | Botschaft(Anforderung Bremsmoment FAS MRR, ID:RQ_BRTORQ_DRS_MRR) fehlt | 1 | - |
| 0xD75772 | Botschaft(Anforderung Bremsmoment FAS MRR, ID:RQ_BRTORQ_DRS_MRR) nicht aktuell | 1 | - |
| 0xD75773 | Signal(Gong Player Verfügbarkeit, ID:GO_PY_AVAI) ungültig | 1 | - |
| 0xD75774 | Botschaft(Anforderung Bremsmoment FAS MRR, ID:RQ_BRTORQ_DRS_MRR) Prüfsumme falsch | 1 | - |
| 0xD75775 | Signal(Anforderung Bremsmoment FAS MRR, ID:RQ_BRTORQ_DRS_MRR) ungültig | 1 | - |
| 0xD75785 | Botschaft(Steuerung Licht Außen, ID: CTR_LP_EX) fehlt | 1 | - |
| 0xD75789 | Signal(Steuerung Licht Außen, ID: CTR_LP_EX) ungültig | 1 | - |
| 0xD75790 | Botschaft(Anzeige Fahrerassistenz Rangieren, ID: DISP_FAS_MNV) fehlt | 1 | - |
| 0xD75793 | Signal(Anzeige Fahrerassistenz Rangieren, ID: DISP_FAS_MNV) ungültig | 1 | - |
| 0xD75798 | Signal(Anzeige Fahrerassistenz Parken Querführung, ID: DISP_FAS_PKG_LAG) ungültig | 1 | - |
| 0xD757A4 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) fehlt | 1 | - |
| 0xD757A5 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) nicht aktuell | 1 | - |
| 0xD757A6 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) Prüfsumme falsch | 1 | - |
| 0xD757A7 | Signal(Frontraumüberwachung FCM, ID: HDWOBS_FCM) ungültig | 1 | - |
| 0xD757A9 | Botschaft(Frontraumüberwachung GWW WWA, ID: HDWOBS_GWW_WWA) fehlt | 1 | - |
| 0xD757AA | Botschaft(Frontraumüberwachung GWW WWA, ID: HDWOBS_GWW_WWA) nicht aktuell | 1 | - |
| 0xD757AB | Botschaft(Frontraumüberwachung GWW WWA, ID: HDWOBS_GWW_WWA) Prüfsumme falsch | 1 | - |
| 0xD757AC | Signal(Frontraumüberwachung GWW WWA, ID: HDWOBS_GWW_WWA) ungültig | 1 | - |
| 0xD757AE | Botschaft(Frontraumüberwachung Kreuzung, ID: HDWOBS_JUNC) fehlt | 1 | - |
| 0xD757AF | Botschaft(Frontraumüberwachung Kreuzung, ID: HDWOBS_JUNC) nicht aktuell | 1 | - |
| 0xD757B0 | Botschaft(Frontraumüberwachung Kreuzung, ID: HDWOBS_JUNC) Prüfsumme falsch | 1 | - |
| 0xD757B1 | Signal(Frontraumüberwachung Kreuzung, ID: HDWOBS_JUNC) ungültig | 1 | - |
| 0xD757B3 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) fehlt | 1 | - |
| 0xD757B4 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) nicht aktuell | 1 | - |
| 0xD757B5 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) Prüfsumme falsch | 1 | - |
| 0xD757B6 | Signal(Frontraumüberwachung PPP, ID: HDWOBS_PPP) ungültig | 1 | - |
| 0xD757B8 | Botschaft(Anforderungen Nothalt, ID: REQ_EMS) fehlt | 1 | - |
| 0xD757BB | Signal(Anforderungen Nothalt, ID: REQ_EMS) ungültig | 1 | - |
| 0xD757BD | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) fehlt | 1 | - |
| 0xD757BE | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) nicht aktuell | 1 | - |
| 0xD757BF | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) Prüfsumme falsch | 1 | - |
| 0xD757C0 | Signal(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) ungültig | 1 | - |
| 0xD757C2 | Botschaft(Daten Antriebsstrang 1, ID: DT_PT_1) fehlt | 1 | - |
| 0xD757C5 | Signal(Daten Antriebsstrang 1, ID: DT_PT_1) ungültig | 1 | - |
| 0xD75844 | Botschaft(Applikation Ultraschall, ID: APPL_US) fehlt | 1 | - |
| 0xD75845 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) fehlt | 1 | - |
| 0xD75846 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) nicht aktuell | 1 | - |
| 0xD75847 | Signal(Applikation Ultraschall, ID: APPL_US) ungültig | 1 | - |
| 0xD75848 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) Prüfsumme falsch | 1 | - |
| 0xD75849 | Signal(Energieversorgung Sicherheit, ID: ENSU_SFY) ungültig | 1 | - |
| 0xD7584E | Botschaft(Soll Radmoment Antriebsstrang Stabilisierung, ID: TAR_WMOM_PT_STAB) fehlt | 1 | - |
| 0xD7584F | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) fehlt | 1 | - |
| 0xD75850 | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) nicht aktuell | 1 | - |
| 0xD75853 | Signal(Soll Radmoment Antriebsstrang Stabilisierung, ID: Soll TAR_WMOM_PT_STAB) ungültig | 1 | - |
| 0xD75854 | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) Prüfsumme falsch | 1 | - |
| 0xD75855 | Signal(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) ungültig | 1 | - |
| 0xD75857 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) fehlt | 1 | - |
| 0xD75858 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) nicht aktuell | 1 | - |
| 0xD75859 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) Prüfsumme falsch | 1 | - |
| 0xD7585A | Signal(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) ungültig | 1 | - |
| 0xD7585C | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) fehlt | 1 | - |
| 0xD7585D | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) nicht aktuell | 1 | - |
| 0xD7585E | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) Prüfsumme falsch | 1 | - |
| 0xD7585F | Signal(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) ungültig | 1 | - |
| 0xD75861 | Botschaft(Anforderung Energieversorgung Fahrerassistenz Sicherheit, ID: RQ_ENSU_FAS_SFY) fehlt | 1 | - |
| 0xD75862 | Botschaft(Anforderung Energieversorgung Fahrerassistenz Sicherheit, ID: RQ_ENSU_FAS_SFY) nicht aktuell | 1 | - |
| 0xD75863 | Botschaft(Anforderung Energieversorgung Fahrerassistenz Sicherheit, ID: RQ_ENSU_FAS_SFY) Prüfsumme falsch | 1 | - |
| 0xD75864 | Signal(Anforderung Energieversorgung Fahrerassistenz Sicherheit, ID: RQ_ENSU_FAS_SFY) ungültig | 1 | - |
| 0xD75866 | Botschaft(Applikation Ultraschall, ID: APPL_US) nicht aktuell | 1 | - |
| 0xD75867 | Botschaft(Applikation Ultraschall, ID: APPL_US) Prüfsumme falsch | 1 | - |
| 0xD75869 | Botschaft(Status M-Drive 3, ID: ST_MDRV_3) fehlt | 1 | - |
| 0xD7586D | Signal(Status M-Drive 3, ID: ST_MDRV_3) ungültig | 1 | - |
| 0xD75875 | Botschaft(Konfiguration SOC Hold, ID: SU_SOC_HLD) fehlt | 1 | - |
| 0xD75878 | Signal(Konfiguration SOC Hold, ID: SU_SOC_HLD) ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | unsigned long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5004 | ANTRIEBSNETZ | HEX | High | unsigned char | - | - | - | - |
| 0x500F | DEM_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x5102 | DEBUGINFO | HEX | High | unsigned int | - | - | - | - |
| 0x5103 | INTERNER_FUNKTIONSSTATUS | HEX | High | unsigned int | - | - | - | - |
| 0x6801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x6802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x6803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x6804 | STAT_EINGANG_SENSOR_FAHRERLENKWINKEL_WERT | ° | - | unsigned int | - | 1.0 | 23.0 | 0.0 |
| 0x6806 | STAT_QUERBESCHLEUNIGUNGSNUTZSIGNAL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6807 | STAT_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6808 | STAT_GIERRATENNUTZSIGNAL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6809 | STAT_SENSOR_GIERRATE_1_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680A | STAT_SENSOR_LAENGSBESCHLEUNIGUNG_1_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680B | STAT_FAHRERLENKWINKEL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680C | STAT_RADLENKWINKEL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x680E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x680F | STAT_LENKWINKEL_VA_EFFEKTIV_WERT | rad | - | signed char | - | 1.0 | 75.0 | 0.0 |
| 0x6811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x6812 | STAT_FAHRZUSTAND_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6813 | STAT_TOLERANZ_AUS_AX_ABGLEICH_WERT | m/s² | - | unsigned int | - | 1.0 | 50.0 | 0.0 |
| 0x6814 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | m/s² | - | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x6815 | STAT_EINGANG_SENSOR_GIERRATE_1_WERT | rad/s | - | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x6816 | STAT_EINGANG_SENSOR_LAENGSBESCHLEUNIGUNG_WERT | m/s² | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x6817 | STAT_LENKWINKEL_FAHRER_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x6818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6819 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | m/s² | - | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x681A | STAT_EINGANG_SENSOR_GIERRATE_2_WERT | rad/s | - | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x681B | STAT_LENKWINKEL_VA_AKTUATOR_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x681C | STAT_LENKWINKEL_HA_AKTUATOR_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 1200.0 | 0.0 |
| 0x681D | STAT_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x681E | STAT_SENSOR_ROLLRATE_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x681F | STAT_EINGANG_SENSOR_ROLLRATE_WERT | rad/s | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6820 | QDMSKR_AUSFALLURSACHE | HEX | - | unsigned char | - | - | - | - |
| 0x6821 | QDMSKR_ZUSATZINFORMATION | HEX | - | unsigned long | - | - | - | - |
| 0x6823 | STAT_EINGANG_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x683A | STAT_SIGNALTOLERANZ_QUERBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x683B | STAT_SIGNALTOLERANZ_LAENGSBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x683C | STAT_SIGNALTOLERANZ_GIERRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x683D | STAT_SIGNALTOLERANZ_LENKWINKEL_WERT | rad | - | unsigned char | - | 1.0 | 1000.0 | 0.0 |
| 0x683E | STAT_SIGNALTOLERANZ_ROLLRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x683F | STAT_SIGNALTOLERANZ_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x6841 | STAT_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6842 | STAT_SENSOR_GIERRATE_2_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x684A | STAT_SOLL_LENKWINKEL_HA_WERT | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x684B | STAT_SOLL_LENKWINKEL_HA_QUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x684C | STAT_IST_LENKWINKEL_HA_WERT | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x684D | STAT_IST_LENKWINKEL_HA_FEHLERAMPLITUDE_WERT | rad | - | unsigned char | - | 1.0 | 1300.0 | 0.0 |
| 0x684E | STAT_HSR_QUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x684F | STAT_IST_LENKWINKEL_HA_NUTZSIGQUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6853 | STAT_EINGANG_SENSOR_NICKRATE_WERT | rad/s | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6854 | STAT_SIGNALTOLERANZ_NICKRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x6876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | - | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x6877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6879 | WUNSCH_BREMSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x68A0 | SOLL_LENKWINKEL_HA_ZFF | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x68A1 | QU_SOLL_LENKWINKEL_HA_ZFF | HEX | - | unsigned char | - | - | - | - |
| 0x68A2 | ST_V_VEH_NSS | HEX | - | unsigned char | - | - | - | - |
| 0x68C6 | I_SBS_2VX_DRIVE_STAT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68C7 | SBS_CONTROL_VX_MAX | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x68C8 | SBS_CONTROL_VX_MIN | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x68C9 | SBS_CONTROL_VX_STAT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68CA | R_SBS_3AX_beta | rad | - | signed char | - | 1.0 | 100.0 | 0.0 |
| 0x68CB | DREHZAHL_RAD_VL | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CC | DREHZAHL_RAD_VR | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CD | DREHZAHL_RAD_HL | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CE | DREHZAHL_RAD_HR | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68FB | ERROR_DUMP_DTC030801 | HEX | - | unsigned long | - | - | - | - |
| 0x6912 | ERROR_DUMP_DTC030820 | HEX | - | unsigned long | - | - | - | - |
| 0x6927 | CTR_12V_BN_FACT_ENERG_AVAI | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6928 | CTR_12V_BN_FACT_PWR_AVAI | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x692A | CTR_BN_FACT_ENERG_AVAI | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x692B | CTR_BN_FACT_PWR_AVAI | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6944 | MAX_I_SPEC_BAX_STE | A | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6945 | AVL_I_BAX_STE | A | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6946 | SOLL_LENKWINKEL_HA_ZFM | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x6947 | QU_FN_HSR | HEX | - | unsigned char | - | - | - | - |
| 0x694C | ZAEHLER_SCHNEEKETTENMODUS | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x695F | EEPROM_EINZELWERTE_PRUEFERGEBNIS_1 | HEX | High | unsigned long | - | - | - | - |
| 0x6960 | EEPROM_EINZELWERTE_PRUEFERGEBNIS_2 | HEX | High | unsigned long | - | - | - | - |
| 0x696A | EEPROM_EINZELWERTE_PRUEFERGEBNIS | HEX | - | unsigned long | - | - | - | - |
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
| 0x023920 | PIA_E_IO_ERROR | 0 | - |
| 0x030546 | QDM-SBS - Gierratensensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03054C | QDM-SBS - Lenkwinkel effektiv Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03054D | QDM-SBS - Lenkwinkel effektiv Signaltoleranz aufgrund Abgleichstoleranz | 0 | - |
| 0x03054F | QDM-Aaeps - Lenkwinkel aufgesetzt mittels Lenkwinkelsensor | 1 | - |
| 0x03055D | QDM-SBS - Laengsbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03055F | QDM-SBS - Laengsbeschleunigungssensor Signaltoleranz aufgrund nicht ausgeführtem Werksmodus | 0 | - |
| 0x030568 | QDM-SBS - Nickrate Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030570 | QDM-SBS - Querbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030578 | QDM-SBS - Rollrate Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030583 | QDM-SBS - Vertikalbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030589 | QDM-SBS - Inkorrekter Rollenbetrieb erkannt | 0 | - |
| 0x03058B | QDM-SBS - Aktiver Rollenmodus | 0 | - |
| 0x030591 | QDM-SBS - Diversitäres Rechnen VX Info | 0 | - |
| 0x03059A | QDM-Aaeps - Aufgesetzt mittels Modellvergleich | 1 | - |
| 0x03059B | QDM-Aaeps - Aufgesetzt mittels Indexsignal | 1 | - |
| 0x03059C | QDM-Aaeps - Korrektur der Ist-Position EPS | 0 | - |
| 0x03059D | QDM-EV - VCH an oberer Lerngrenze | 0 | - |
| 0x03059E | QDM-EV - VCH an unterer Lerngrenze | 0 | - |
| 0x03059F | QDM-Aaeps - Aufgesetzt mittels Anschlag lenken | 1 | - |
| 0x0305A5 | QDM-QEI - Fehlertoleranz SBS zu hoch | 1 | - |
| 0x0305A6 | QDM-QEI - Fehlertoleranz FZB zu hoch | 1 | - |
| 0x0305A7 | QDM-QEI - Inputs nicht gültig SBS | 1 | - |
| 0x0305A8 | QDM-QEI - Inputs nicht gültig FZB | 1 | - |
| 0x0305A9 | QDM-QEI - eingeschränkte Modellgültigkeit | 1 | - |
| 0x0305AA | QDM-QEI - Plausibilisierungsfehler | 1 | - |
| 0x0305AB | QDM-QEI - Funktion oder Applikation nicht vorhanden | 1 | - |
| 0x0305AC | QDM-QEI - interne Degradation wegen SBS | 1 | - |
| 0x0305B0 | QDM-BS -  Beladungsschätzer Höhenstände zueinander unplausibel | 0 | - |
| 0x03065B | QDM-ZFM - ARS Funktionsqualifier - Funktion fehlerhaft - defekt | 1 | - |
| 0x03065D | QDM-ZFM - Statistik Anteil linearer Fahrbereich | 0 | - |
| 0x03065E | QDM-ZFM - Reglerbegrenzung im linearen Fahrbereich | 0 | - |
| 0x030660 | QDM-ZFM - HSR - Aktuator meldet ungültigen Motorlagewinkel | 1 | - |
| 0x030662 | QDM-ZFM - HSR - inaktiv und Fahrzeug rollt | 1 | - |
| 0x030663 | QDM-ZFM - HSR - Aktuator meldet Errormodus | 1 | - |
| 0x030664 | QDM-ZFM - HSR - Aktuator meldet undefinierten Zustand | 1 | - |
| 0x030667 | QDM-ZFM - HSR - Aktuator meldet Pausenmodus und Fahrzeug rollt | 1 | - |
| 0x030668 | QDM-ZFM - HSR - Aktuator wechselt nicht in den aktiven Modus | 0 | - |
| 0x030669 | QDM_ZFM - HSR - Zwangsaktivierung im Schneeketten-Modus - Geschwindigkeit überschritten | 1 | - |
| 0x03066A | QDM-ZFM - HSR - Schneeketten-Modus aktiviert | 1 | - |
| 0x03066B | QDM-ZFM - HSR - Erinnerung Schneeketten-Modus aktiv | 1 | - |
| 0x03066C | QDM-STCLUGBU - Zwangsaktivierung DSC | 1 | - |
| 0x03066F | QDM-ODO - Degradation Odometrie | 1 | - |
| 0x030671 | QDM-ZFM - HSR - Degradation Gierratenregler | 1 | - |
| 0x030681 | QDM-ZFF - eingeschränkte Regelgüte | 0 | - |
| 0x030807 | FAS - Funktionale Deaktivierung | 0 | - |
| 0x030808 | FAS - Antrieb - Betriebsbereitschaft | 1 | - |
| 0x030809 | FAS - Bremse - Betriebsbereitschaft | 1 | - |
| 0x03080A | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x03080B | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Logikfehler | 0 | - |
| 0x03080C | FAS - Bedienfeld - HDC - fehlerhaft | 1 | - |
| 0x03080D | FAS - Inkorrekte Codierung Fahrfunktion | 1 | - |
| 0x03080E | FAS - KAFAS - Betriebsbereitschaft | 1 | - |
| 0x03080F | FAS - Abweichung VKombi gegen V-Ist zu groß | 1 | - |
| 0x030812 | FAS - Fahrzeugsensorik Betriebsbereitschaft | 1 | - |
| 0x030818 | FAS - Bedienung Lenkrad - Betriebsbereitschaft | 1 | - |
| 0x03081B | FAS - Kombi - Betriebsbereitschaft | 1 | - |
| 0x03081C | FAS Signalfehler 2 - Undefinierter Inhalt oder unzureichende Qualität | 1 | - |
| 0x03081E | FAS Signalfehler - Undefinierter Inhalt oder unzureichende Qualität | 1 | - |
| 0x03081F | FAS - Frontschutz - Akutwarnung ausgelöst | 0 | - |
| 0x030821 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030822 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Logikfehler | 0 | - |
| 0x030830 | FAS - EM-ELECTRONICHORIZON - Zeitbasis unsynchronisiert | 1 | - |
| 0x030866 | FAS - Frontschutz - Anfahrverhinderung - Anforderer QVA | 1 | - |
| 0x030867 | FAS - Frontschutz - Bremsung bis 4m/s^2 - Anforderer iBrake | 1 | - |
| 0x030868 | FAS - Frontschutz - Bremsung bis 4m/s^2 - Anforderer CCM | 1 | - |
| 0x030869 | FAS - Frontschutz - Bremsung bis 4m/s^2 - Anforderer pFGS | 1 | - |
| 0x03086A | FAS - Frontschutz - Bremsung bis 4m/s^2 - Anforderer OBJ | 1 | - |
| 0x03086B | FAS - Frontschutz - Bremsung bis 4m/s^2 - Anforderer QVA | 1 | - |
| 0x03086C | FAS - Frontschutz - Bremsung größer 4m/s^2 - Anforderer iBrake | 1 | - |
| 0x03086D | FAS - Frontschutz - Bremsung größer 4m/s^2 - Anforderer CCM | 1 | - |
| 0x03086E | FAS - Frontschutz - Bremsung größer 4m/s^2 - Anforderer pFGS | 1 | - |
| 0x03086F | FAS - Frontschutz - Bremsung größer 4m/s^2 - Anforderer OBJ | 1 | - |
| 0x030870 | FAS - Frontschutz - Bremsung größer 4m/s^2 - Anforderer QVA | 1 | - |
| 0x030C50 | INT-CCHDL Überlauf Checkcontrol Buffer | 0 | - |
| 0x030C51 | INT-CCHDL Undefinierte CC-ID angefordert | 0 | - |
| 0x030C67 | INT-SVCHDL Überlauf Input Buffer | 0 | - |
| 0x290001 | FLEXRAY controller ACS error | 0 | - |
| 0x290002 | FLEXRAY controller NIT error | 0 | - |
| 0x290005 | Flexray Physical Bus Error (Sekundär DTC) | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0005 | iBrake | 0/1 | - | 0x0001 | - | - | - | - |
| 0x0006 | Kamerabasierte Auffahrwarnung (FCW_CCM) | 0/1 | - | 0x0002 | - | - | - | - |
| 0x0007 | Querverkehrsassistent (QVA) | 0/1 | - | 0x0004 | - | - | - | - |
| 0x0008 | Präventiver Fußgängerschutz (pFGS) | 0/1 | - | 0x0008 | - | - | - | - |
| 0x0009 | Night-Vision (NiVi) | 0/1 | - | 0x0010 | - | - | - | - |
| 0x000A | Vorfahrtswarner (VFW) | 0/1 | - | 0x0020 | - | - | - | - |
| 0x000B | Unklassifiziertes Kameraobjekt (OBJ) | 0/1 | - | 0x0040 | - | - | - | - |
| 0x000C | Anfahrverhinderung (QVA) | 0/1 | - | 0x0080 | - | - | - | - |
| 0x000D | Linksabbiegeassistent | 0/1 | - | 0x0100 | - | - | - | - |
| 0x000E | Anfahrverhinderung (Linksabbiegeassistent) | 0/1 | - | 0x0200 | - | - | - | - |
| 0x000F | Wrong Way Assist (WWA) | 0/1 | - | 0x0400 | - | - | - | - |
| 0x0010 | Unklassifiziertes Radarobjekt (OBJ) | 0/1 | - | 0x0800 | - | - | - | - |
| 0x0011 | QuFzgDynDatGschzt | 0/1 | - | 0x00000001 | - | - | - | - |
| 0x0012 | QuFzgDynDatGschztErweit | 0/1 | - | 0x00000002 | - | - | - | - |
| 0x0013 | QuSchwmwnklLinr | 0/1 | - | 0x00000004 | - | - | - | - |
| 0x0014 | QuEinspurmdlErweit | 0/1 | - | 0x00000008 | - | - | - | - |
| 0x0015 | QuGschwFzgLngs | 0/1 | - | 0x00000010 | - | - | - | - |
| 0x0016 | QuGiergschwFzgTempKomp | 0/1 | - | 0x00000020 | - | - | - | - |
| 0x0017 | QuGierrateAusHntrraedr | 0/1 | - | 0x00000040 | - | - | - | - |
| 0x0018 | QuGierrateAusVrdrraedr | 0/1 | - | 0x00000080 | - | - | - | - |
| 0x0019 | QuIstAnzhlGebrflankRadVL | 0/1 | - | 0x00000100 | - | - | - | - |
| 0x001A | QuIstAnzhlGebrflankRadVR | 0/1 | - | 0x00000200 | - | - | - | - |
| 0x001B | QuIstAnzhlGebrflankRadHL | 0/1 | - | 0x00000400 | - | - | - | - |
| 0x001C | QuIstAnzhlGebrflankRadHR | 0/1 | - | 0x00000800 | - | - | - | - |
| 0x001D | QuLenkwnklVachsRad | 0/1 | - | 0x00001000 | - | - | - | - |
| 0x001E | QuLenkwnklVachseffkt | 0/1 | - | 0x00002000 | - | - | - | - |
| 0x001F | QuIstLngsneigFhrbahn | 0/1 | - | 0x00004000 | - | - | - | - |
| 0x0020 | QuIstQuerneigFhrbahn | 0/1 | - | 0x00008000 | - | - | - | - |
| 0x0021 | QuQuerbschlSchwpkt | 0/1 | - | 0x00010000 | - | - | - | - |
| 0x0022 | QuZahlrSyncGschwFzgSchwpkt | 0/1 | - | 0x00020000 | - | - | - | - |
| 0x0023 | I_Odo_Aktiv | 0/1 | - | 0x00040000 | - | - | - | - |
| 0x0024 | I_beta_Aktiv | 0/1 | - | 0x00080000 | - | - | - | - |
| 0x0025 | I_kappa_Aktiv | 0/1 | - | 0x00100000 | - | - | - | - |
| 0x0026 | Reserve_21 | 0/1 | - | 0x00200000 | - | - | - | - |
| 0x0027 | Reserve_22 | 0/1 | - | 0x00400000 | - | - | - | - |
| 0x0028 | Reserve_23 | 0/1 | - | 0x00800000 | - | - | - | - |
| 0x0029 | Ausfall DSC | 0/1 | - | 0x0001 | - | - | - | - |
| 0x002A | Ausfall CHC | 0/1 | - | 0x0002 | - | - | - | - |
| 0x002B | Ausfall emARS | 0/1 | - | 0x0004 | - | - | - | - |
| 0x002C | Ausfall VDC | 0/1 | - | 0x0008 | - | - | - | - |
| 0x002D | Ausfall/Schutz LMV | 0/1 | - | 0x0010 | - | - | - | - |
| 0x002E | Reifendruckverlust | 0/1 | - | 0x0020 | - | - | - | - |
| 0x002F | Ausfall Heckspoiler | 0/1 | - | 0x0040 | - | - | - | - |
| 0x0030 | FAS Wechsel Betriebsart | 0/1 | - | 0x0080 | - | - | - | - |
| 0x0031 | FAS Sperrung Bedienung | 0/1 | - | 0x0100 | - | - | - | - |
| 0x0032 | Bedarf Stabilisierung | 0/1 | - | 0x0200 | - | - | - | - |
| 0x0033 | State of Charge low | 0/1 | - | 0x0400 | - | - | - | - |
| 0x0034 | Care Key Ausschluss DSC-OFF | 0/1 | - | 0x0800 | - | - | - | - |
| 0x0035 | Care Key TRACTION nur bei Anfahren | 0/1 | - | 0x1000 | - | - | - | - |
| 0x0036 | Ausfall EHC | 0/1 | - | 0x2000 | - | - | - | - |
| 0x0037 | Ausfall GSD-Ansteuerung | 0/1 | - | 0x4000 | - | - | - | - |
| 0x0038 | Ausfall LMV-Ansteuerung | 0/1 | - | 0x8000 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | ANTRIEBSNETZ | HEX | High | unsigned char | - | - | - | - |
| 0x500F | DEM_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x5102 | DEBUGINFO | HEX | High | unsigned int | - | - | - | - |
| 0x5103 | INTERNER_FUNKTIONSSTATUS | HEX | High | unsigned int | - | - | - | - |
| 0x6801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x6802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x6803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x6804 | STAT_EINGANG_SENSOR_FAHRERLENKWINKEL_WERT | ° | - | unsigned int | - | 1.0 | 23.0 | 0.0 |
| 0x6806 | STAT_QUERBESCHLEUNIGUNGSNUTZSIGNAL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6808 | STAT_GIERRATENNUTZSIGNAL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680A | STAT_SENSOR_LAENGSBESCHLEUNIGUNG_1_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680B | STAT_FAHRERLENKWINKEL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680C | STAT_RADLENKWINKEL_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x680D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x680E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x680F | STAT_LENKWINKEL_VA_EFFEKTIV_WERT | rad | - | signed char | - | 1.0 | 75.0 | 0.0 |
| 0x6811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x6812 | STAT_FAHRZUSTAND_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6814 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | m/s² | - | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x6815 | STAT_EINGANG_SENSOR_GIERRATE_1_WERT | rad/s | - | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x6816 | STAT_EINGANG_SENSOR_LAENGSBESCHLEUNIGUNG_WERT | m/s² | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x6817 | STAT_LENKWINKEL_FAHRER_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x6818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6819 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | m/s² | - | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x681A | STAT_EINGANG_SENSOR_GIERRATE_2_WERT | rad/s | - | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x681B | STAT_LENKWINKEL_VA_AKTUATOR_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x681C | STAT_LENKWINKEL_HA_AKTUATOR_TEILAUFBEREITET_WERT | rad | - | signed char | - | 1.0 | 1200.0 | 0.0 |
| 0x681D | STAT_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x681E | STAT_SENSOR_ROLLRATE_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x681F | STAT_EINGANG_SENSOR_ROLLRATE_WERT | rad/s | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6823 | STAT_EINGANG_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6824 | STAT_KALMANFILTER_SCHWIMMWINKELSCHAETZERR_WERT | HEX | - | unsigned long | - | - | - | - |
| 0x6825 | STAT_GESAMTSTATUS_SCHWIMMWINKELSCHAETZER_WERT | HEX | - | unsigned long | - | - | - | - |
| 0x6826 | STAT_INFORMATION_SCHWIMMWINKELSCHAETZER_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6827 | STAT_SCHWIMMWINKEL_WERT | ° | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6828 | STAT_SCHWIMMWINKEL_SIGNALTOLERANZ_WERT | ° | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6829 | STAT_QUERGESCHWINDIGKEIT_WERT | km/h | - | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x682A | STAT_QUERGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x682B | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_WERT | °/s | - | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x682C | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | °/s | - | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x682D | STAT_LERNWERT_BEIDE_KURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x682E | STAT_LERNWERT_LINKSKURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x682F | STAT_LERNWERT_RECHTSKURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6830 | STAT_LERNINTERVALL_BEIDE_KURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6831 | STAT_LERNINTERVALL_LINKSKURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6832 | STAT_LERNINTERVALL_RECHTSKURVEN_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6833 | STAT_LERNALGO_WERT | HEX | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x6834 | STAT_LENKWINKELOFFSET_WERT | rad | - | signed char | - | 1.0 | 500.0 | 0.0 |
| 0x6835 | STAT_LENKWINKELOFFSET_TOLERANZ_WERT | rad | - | unsigned char | - | 1.0 | 500.0 | 0.0 |
| 0x683A | STAT_SIGNALTOLERANZ_QUERBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x683B | STAT_SIGNALTOLERANZ_LAENGSBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x683C | STAT_SIGNALTOLERANZ_GIERRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x683D | STAT_SIGNALTOLERANZ_LENKWINKEL_WERT | rad | - | unsigned char | - | 1.0 | 1000.0 | 0.0 |
| 0x683E | STAT_SIGNALTOLERANZ_ROLLRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x683F | STAT_SIGNALTOLERANZ_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | - | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x684A | STAT_SOLL_LENKWINKEL_HA_WERT | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x684B | STAT_SOLL_LENKWINKEL_HA_QUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x684C | STAT_IST_LENKWINKEL_HA_WERT | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x684D | STAT_IST_LENKWINKEL_HA_FEHLERAMPLITUDE_WERT | rad | - | unsigned char | - | 1.0 | 1300.0 | 0.0 |
| 0x684E | STAT_HSR_QUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x684F | STAT_IST_LENKWINKEL_HA_NUTZSIGQUALIFIER_WERT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6853 | STAT_EINGANG_SENSOR_NICKRATE_WERT | rad/s | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6854 | STAT_SIGNALTOLERANZ_NICKRATE_WERT | rad/s | - | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x6855 | STAT_SENSOR_NICKRATE_WERT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6868 | STAT_GESCHWINDIGKEIT_BEI_GROBOFFSET_WERT | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x6869 | STAT_MAX_GESCHWINDIGKEIT_AUFSETZVORGANG_WERT | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x686A | STAT_MAX_QUERBESCHLEUNIGUNG_AUFSETZVORGANG_WERT | m/s² | - | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x686B | STAT_KORREKTUR_MULTITURNS_WERT | - | - | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x686C | STAT_BELADUNGSINDEX_FINAL_WERT | - | - | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x686D | STAT_BELADUNGSINDEX_HOEHENSTAND_VL | - | - | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x686E | STAT_BELADUNGSINDEX_HOEHENSTAENDE_HL_WERT | - | - | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x686F | STAT_BELADUNGSINDEX_HOEHENSTAND_HR_WERT | - | - | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x6870 | SENSOR_VL_STATT_HR_VERWENDET | 0-n | - | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x6876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | - | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x6877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6879 | WUNSCH_BREMSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x688F | CC_ID | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6890 | BUFFER_ID | HEX | - | unsigned char | - | - | - | - |
| 0x6891 | BUFFER_SIZE | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6892 | FILL_LEVEL_BUFFER_0 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6893 | FILL_LEVEL_BUFFER_1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6894 | FILL_LEVEL_BUFFER_2 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6899 | STATUSWORT_REGELGUETE | HEX | High | unsigned int | - | - | - | - |
| 0x689A | DREHSTABMOMENT | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x689B | EPS_MOTORMOMENTEN_OFFSET | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x689C | EPS_HANDMOMENTEN_OFFSET | Nm | High | signed int | - | 1.0 | 100.0 | 0.0 |
| 0x68A0 | SOLL_LENKWINKEL_HA_ZFF | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x68A1 | QU_SOLL_LENKWINKEL_HA_ZFF | HEX | - | unsigned char | - | - | - | - |
| 0x68A2 | ST_V_VEH_NSS | HEX | - | unsigned char | - | - | - | - |
| 0x68C3 | CLIENT_ID_INTCCHDL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68C4 | FUNCTION_ID_ANFORDERER | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68C5 | STATUS_ANFORDERER | 0-n | - | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x68C6 | I_SBS_2VX_DRIVE_STAT | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68C7 | SBS_CONTROL_VX_MAX | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x68C8 | SBS_CONTROL_VX_MIN | km/h | - | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x68C9 | SBS_CONTROL_VX_STAT | HEX | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68CA | R_SBS_3AX_beta | rad | - | signed char | - | 1.0 | 100.0 | 0.0 |
| 0x68CB | DREHZAHL_RAD_VL | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CC | DREHZAHL_RAD_VR | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CD | DREHZAHL_RAD_HL | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68CE | DREHZAHL_RAD_HR | rad/s | - | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x68F1 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x68F2 | SERVICE_ID | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68F3 | CLIENT_ID | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68F4 | SVC_PARAMETER | HEX | - | unsigned long | - | - | - | - |
| 0x68FF | ERROR_DUMP_DTC030807 | HEX | - | unsigned long | - | - | - | - |
| 0x6900 | ERROR_DUMP_DTC030808 | HEX | - | unsigned long | - | - | - | - |
| 0x6901 | ERROR_DUMP_DTC030809 | HEX | - | unsigned long | - | - | - | - |
| 0x6902 | ERROR_DUMP_DTC03080C | HEX | - | unsigned long | - | - | - | - |
| 0x6903 | ERROR_DUMP_DTC03080D | HEX | - | unsigned long | - | - | - | - |
| 0x6904 | ERROR_DUMP_DTC03080E | HEX | - | unsigned long | - | - | - | - |
| 0x6905 | ERROR_DUMP_DTC03080F | HEX | - | unsigned long | - | - | - | - |
| 0x6908 | ERROR_DUMP_DTC030812 | HEX | - | unsigned long | - | - | - | - |
| 0x690C | ERROR_DUMP_DTC030818 | HEX | - | unsigned long | - | - | - | - |
| 0x690E | ERROR_DUMP_DTC03081B | HEX | - | unsigned long | - | - | - | - |
| 0x690F | ERROR_DUMP_DTC03081C | HEX | - | unsigned long | - | - | - | - |
| 0x6910 | ERROR_DUMP_DTC03081E | HEX | - | unsigned long | - | - | - | - |
| 0x6911 | ERROR_DUMP_DTC03081F | HEX | - | unsigned long | - | - | - | - |
| 0x6916 | ZEITPUNKT_BREMSPEDALBETAETIGUNG | s | - | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x6917 | ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF | s | - | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x6918 | DAUER_AKUTWARNUNG | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x6919 | DAUER_ANBREMSEN_STUFE_1 | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x691A | DAUER_ANBREMSEN_STUFE_2 | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x691C | ABSTAND_ZO_BEGINN_AKUTWARNUNG | m | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x691D | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1 | m | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x691E | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2 | m | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6921 | EGO_GESCHWINDIGKEIT_ANBREMSBEGINN | km/h | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6922 | EGO_GESCHWINDIGKEIT_ANBREMSENDE | km/h | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x692E | RQRED_GESAMT_DAUER_FAHRZYKLUS | min | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x692F | RQRED_GESAMT_ANTEIL_LIN_FAHRBEREICH | - | - | unsigned int | - | 1.0 | 10000.0 | 0.0 |
| 0x6930 | RQRED_ZAEHLER_1_RQ_SQ_HSR_LIN_FAHRBEREICH | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6931 | RQRED_ZAEHLER_2_RQ_SQ_HSR_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6932 | RQRED_ZAEHLER_3_RQ_SQ_HSR_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6933 | RQRED_ZAEHLER_1_RQ_HSR_LIN_FAHRBEREICH | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6934 | RQRED_ZAEHLER_2_RQ_HSR_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6935 | RQRED_ZAEHLER_3_RQ_HSR_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6936 | RQRED_ZAEHLER_1_RQ_GMVH_LIN_FAHRBEREICH | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6937 | RQRED_ZAEHLER_2_RQ_GMVH_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6938 | RQRED_ZAEHLER_3_RQ_GMVH_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6939 | RQRED_ZAEHLER_1_RQ_ARS_LIN_FAHRBEREICH | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x693A | RQRED_ZAEHLER_2_RQ_ARS_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x693B | RQRED_ZAEHLER_3_RQ_ARS_LIN_FAHRBEREICH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x693C | UEBERSETZUNG_EPS | - | - | unsigned int | - | 50.0 | 4096.0 | 0.0 |
| 0x6943 | RGRED_GESAMT_ANTEIL_LIN_FAHRBEREITSCHAFT_REGLEREINGRIFF | s | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6944 | MAX_I_SPEC_BAX_STE | A | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6945 | AVL_I_BAX_STE | A | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6946 | SOLL_LENKWINKEL_HA_ZFM | rad | - | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x6947 | QU_FN_HSR | HEX | - | unsigned char | - | - | - | - |
| 0x694C | ZAEHLER_SCHNEEKETTENMODUS | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x696B | ERROR_ID_INPUT_EMSLCONDITIONEVALUATOR | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x696C | ERROR_DUMP_1_INPUT_EMSLCONDITIONEVALUATOR | HEX | - | unsigned long | - | - | - | - |
| 0x696D | ERROR_DUMP_2_INPUT_EMSLCONDITIONEVALUATOR | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x696E | ERROR_ID_INPUT_EMELECTRONICHORIZON | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMELECTRONICHORIZON | - | - | - |
| 0x696F | ERROR_DUMP_1_INPUT_EMELECTRONICHORIZON | HEX | - | unsigned long | - | - | - | - |
| 0x6970 | ERROR_DUMP_2_INPUT_EMELECTRONICHORIZON | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6983 | ERROR_ID_LOGIC_EMSLCONDITIONEVALUATOR | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x6984 | ERROR_DUMP_1_LOGIC_EMSLCONDITIONEVALUATOR | HEX | - | unsigned long | - | - | - | - |
| 0x6985 | ERROR_DUMP_2_LOGIC_EMSLCONDITIONEVALUATOR | - | - | motorola float | - | - | - | - |
| 0x6986 | ERROR_ID_LOGIC_EMELECTRONICHORIZON | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMELECTRONICHORIZON | - | - | - |
| 0x6987 | ERROR_DUMP_1_LOGIC_EMELECTRONICHORIZON | HEX | - | unsigned long | - | - | - | - |
| 0x6988 | ERROR_DUMP_2_LOGIC_EMELECTRONICHORIZON | - | - | motorola float | - | - | - | - |
| 0x69F0 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x69F1 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x69F2 | MAX_LAENGSBESCHLEUNIGUNG_CWBAS | m/s² | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x69F3 | MAX_SOLLVERZOEGERUNG_CWBAS | m/s² | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x69F4 | ERROR_DUMP_DTC030866 | HEX | - | unsigned long | - | - | - | - |
| 0x69F5 | ERROR_DUMP_DTC030867 | HEX | - | unsigned long | - | - | - | - |
| 0x69F6 | ERROR_DUMP_DTC030868 | HEX | - | unsigned long | - | - | - | - |
| 0x69F7 | ERROR_DUMP_DTC030869 | HEX | - | unsigned long | - | - | - | - |
| 0x69F8 | ERROR_DUMP_DTC03086A | HEX | - | unsigned long | - | - | - | - |
| 0x69F9 | ERROR_DUMP_DTC03086B | HEX | - | unsigned long | - | - | - | - |
| 0x69FA | ERROR_DUMP_DTC03068C | HEX | - | unsigned long | - | - | - | - |
| 0x69FB | ERROR_DUMP_DTC03086D | HEX | - | unsigned long | - | - | - | - |
| 0x69FC | ERROR_DUMP_DTC03086E | HEX | - | unsigned long | - | - | - | - |
| 0x69FD | ERROR_DUMP_DTC03086F | HEX | - | unsigned long | - | - | - | - |
| 0x69FE | ERROR_DUMP_DTC030870 | HEX | - | unsigned long | - | - | - | - |
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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X6602_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LKA_ZAEHLER_AUSLOESUNG_LKA_LENK_ODER_VIB_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung LKA nur Lenkeingriff (Bit 0 .. 15) Anzahl Ausloesung LKA nur Vibration (Bit 16 .. 31) |
| STAT_LKA_ZAEHLER_AUSLOESUNG_SVW_LKA_LENK_UND_VIB_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung LKA Lenkeingriff und Vibration (Bit 0 .. 15) |
| STAT_LKA_ZAEHLER_ABBRUCH_ODER_VERHINDERUNG_SVW_LKA_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abbrueche LKA (Bit 0 .. 15) Anzahl Verhinderungen LKA (Bit 16 .. 31) |
| STAT_LKA_DETAIL_LKA_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Triggergrund (Bit 0..7) Abbruchgrund (Bit 8..15) Verhinderungsgrund (Bit 16..23) Geschwindigkeit (Bit 24..31) |
| STAT_LKA_DETAIL_LKA_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TLC (Bit 0..7) DLC (Bit 8..15) Modus LDW (Bit 16..23) Ausprägung  Vibration / Lenkeingriff (Bit 24..31) |
| STAT_LKA_DETAIL_LKA_3_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke zwischen letzter und vorletzter Ausloesung (Bit 0..15) |
| STAT_FASSCOLSI_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASSCOLSI_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6604_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASCWBAS_IBRAKE_ZAEHLER_WARNEN_BREMSEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-7: Anzahl Vorwarnungen früh  Bit 8-15: Anzahl Vorwarnungen mittel Bit 16-23: Anzahl Akutwarnungen Bit 24-27: Anzahl Frontschutzbremsungen ACC ein Bit 28-31: Anzahl der Frontschutzbremsungen DCC ein |
| STAT_FASCWBAS_IBRAKE_BREMSUNGEN_STUFE_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 1 (a <  4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_IBRAKE_BREMSUNGEN_STUFE_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 2 (a > 4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_IBRAKE_TRIGGER_ABSTAENDE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl je Abstand vom Zielobjekt bei Auslösung  Bit 0-3: 0 - 5m Bit 4-7: 5 - 10m Bit 8-11: 10 -15m Bit 12-15: 15 - 20m  Bit 16-19: 20 - 30m Bit 20-23: 30 - 40m Bit 24-27: 40 - 50m Bit 28-31: > 50m |
| STAT_FASCWBAS_IBRAKE_GESCHWINDIGKEITSABBAU_WERT | HEX | high | unsigned long | - | - | - | - | - | Anzahl je abgebauter Geschwindigkeitsbereich (zwischen Akutwarnung und Ende der Aktion) in 8 Wertebereichen |
| STAT_FASCWBAS_IBRAKE_BREMSBEDINGUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Bremsungen Stufe 2 mit a > 8 m/s*s und v > 10 km/h Bit 4-7: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur > 3° C Bit 8-11: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur <= 3° C Bit 12-15: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur > 3° C Bit 16-19: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur <= 3° C |
| STAT_FASCWBAS_IBRAKE_ABBRUCHGRUENDE_WERT | HEX | high | unsigned long | - | - | - | - | - | Bit 0-3: FFA Bit 4-7: Fahrpedal Bit 8-11: Anlenkerkennung Bit 12-16: Verhinderungsgrund-Bremskette Bit 17-21: Verhinderungsgrund-dynamisches_Fahren Bit 22-26: Verhinderungsgrund-Beschleunigungswunsch Bit 27-31: Verhinderungsgrund-DSC-Regelung_aktiv |
| STAT_FASCWBAS_IBRAKE_GENERATORANSTEUERUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Zielbremsungen Bit 4-7: Anzahl HBA Bit 8-15: Anzahl aktiver Generatoransteuerungen insgesamt |
| STAT_FASCWBAS_IBRAKE_FAHRERSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Fahrerzustand 1 Bit 4-7: Fahrerzustand 2 Bit 8-11: mit Lidschluss Bit 12-15: ohne Lidschluss |
| STAT_FASCWBAS_IBRAKE_LICHTSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Licht aus Bit 4-7: Abblendlicht Bit 8-11: Fernlicht Bit 12-15: Nebelschlussleuchte |
| STAT_FASCWBAS_PFGS_ZAEHLER_WARNEN_BREMSEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-7: Anzahl Vorwarnungen früh  Bit 8-15: Anzahl Vorwarnungen mittel Bit 16-23: Anzahl Akutwarnungen Bit 24-27: Anzahl Frontschutzbremsungen ACC ein Bit 28-31: Anzahl der Frontschutzbremsungen DCC ein |
| STAT_FASCWBAS_PFGS_BREMSUNGEN_STUFE_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 1 (a <  4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_PFGS_BREMSUNGEN_STUFE_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 2 (a > 4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_PFGS_TRIGGER_ABSTAENDE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl je Abstand vom Zielobjekt bei Auslösung  Bit 0-3: 0 - 5m Bit 4-7: 5 - 10m Bit 8-11: 10 -15m Bit 12-15: 15 - 20m  Bit 16-19: 20 - 30m Bit 20-23: 30 - 40m Bit 24-27: 40 - 50m Bit 28-31: > 50m |
| STAT_FASCWBAS_PFGS_GESCHWINDIGKEITSABBAU_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl je abgebauter Geschwindigkeitsbereich (zwischen Akutwarnung und Ende der Aktion) in 8 Wertebereichen |
| STAT_FASCWBAS_PFGS_BREMSBEDINGUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Bremsungen Stufe 2 mit a > 8 m/s*s und v > 10 km/h Bit 4-7: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur > 3° C Bit 8-11: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur <= 3° C Bit 12-15: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur > 3° C Bit 16-19: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur <= 3° C |
| STAT_FASCWBAS_PFGS_ABBRUCHGRUENDE_WERT | HEX | high | unsigned long | - | - | - | - | - | Bit 0-3: FFA Bit 4-7: Fahrpedal Bit 8-11: Anlenkerkennung Bit 12-16: Verhinderungsgrund-Bremskette Bit 17-21: Verhinderungsgrund-dynamisches_Fahren Bit 22-26: Verhinderungsgrund-Beschleunigungswunsch Bit 27-31: Verhinderungsgrund-DSC-Regelung_aktiv |
| STAT_FASCWBAS_PFGS_GENERATORANSTEUERUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Zielbremsungen Bit 4-7: Anzahl HBA Bit 8-15: Anzahl aktiver Generatoransteuerungen insgesamt |
| STAT_FASCWBAS_PFGS_FAHRERSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Fahrerzustand 1 Bit 4-7: Fahrerzustand 2 Bit 8-11: mit Lidschluss Bit 12-15: ohne Lidschluss |
| STAT_FASCWBAS_PFGS_LICHTSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Licht aus Bit 4-7: Abblendlicht Bit 8-11: Fernlicht Bit 12-15: Nebelschlussleuchte |
| STAT_FASCWBAS_QVA_ZAEHLER_WARNEN_BREMSEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-7: Anzahl Vorwarnungen früh  Bit 8-15: Anzahl Vorwarnungen mittel Bit 16-23: Anzahl Akutwarnungen Bit 24-27: Anzahl Frontschutzbremsungen ACC ein Bit 28-31: Anzahl der Frontschutzbremsungen DCC ein |
| STAT_FASCWBAS_QVA_BREMSUNGEN_STUFE_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 1 (a <  4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_QVA_BREMSUNGEN_STUFE_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bremsungen Stufe 2 (a > 4m/s*s)  Bit 0-3: 0 - 20 km/h Bit 4-7: 20 - 40 km/h Bit 8-11: 40 - 60 km/h Bit 12-15: 60 - 80 km/h Bit 16-19: 80 - 100 km/h Bit 20-23: 100 - 150 km/h Bit 24-27: 150 - 200 km/h Bit 28-31: 200 - 250 km/h |
| STAT_FASCWBAS_QVA_TRIGGER_ABSTAENDE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl je Abstand vom Zielobjekt bei Auslösung  Bit 0-3: 0 - 5m Bit 4-7: 5 - 10m Bit 8-11: 10 -15m Bit 12-15: 15 - 20m  Bit 16-19: 20 - 30m Bit 20-23: 30 - 40m Bit 24-27: 40 - 50m Bit 28-31: > 50m |
| STAT_FASCWBAS_QVA_GESCHWINDIGKEITSABBAU_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl je abgebauter Geschwindigkeitsbereich (zwischen Akutwarnung und Ende der Aktion) in 8 Wertebereichen |
| STAT_FASCWBAS_QVA_BREMSBEDINGUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Bremsungen Stufe 2 mit a > 8 m/s*s und v > 10 km/h Bit 4-7: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur > 3° C Bit 8-11: Anzahl Bremsungen bei Scheibenwischer ein, Temperatur <= 3° C Bit 12-15: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur > 3° C Bit 16-19: Anzahl Bremsungen bei Scheibenwischer aus, Temperatur <= 3° C |
| STAT_FASCWBAS_QVA_ABBRUCHGRUENDE_WERT | HEX | high | unsigned long | - | - | - | - | - | Bit 0-3: FFA Bit 4-7: Fahrpedal Bit 8-11: Anlenkerkennung Bit 12-16: Verhinderungsgrund-Bremskette Bit 17-21: Verhinderungsgrund-dynamisches_Fahren Bit 22-26: Verhinderungsgrund-Beschleunigungswunsch Bit 27-31: Verhinderungsgrund-DSC-Regelung_aktiv |
| STAT_FASCWBAS_QVA_GENERATORANSTEUERUNGEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Anzahl Zielbremsungen Bit 4-7: Anzahl HBA Bit 8-15: Anzahl aktiver Generatoransteuerungen insgesamt |
| STAT_FASCWBAS_QVA_FAHRERSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Fahrerzustand 1 Bit 4-7: Fahrerzustand 2 Bit 8-11: mit Lidschluss Bit 12-15: ohne Lidschluss |
| STAT_FASCWBAS_QVA_LICHTSTATUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Bit 0-3: Licht aus Bit 4-7: Abblendlicht Bit 8-11: Fernlicht Bit 12-15: Nebelschlussleuchte |
| STAT_FASCWBAS_INFO_SA_VARIANTE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Information zur Sonderausstattung |
| STAT_FASCWBAS_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASCWBAS_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6605_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASDACG_SLA_OFFSET_NUTZUNG_WERT | HEX | high | unsigned long | - | - | - | - | - | Statistik Speed Limit Assist: 'Lochkarte' mit den im Messzeitraum genutzten Werten des Offsets. Letztes Bit = Einheit. |
| STAT_FASDACG_SLA_BETRIEBSMODUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betrieb von SLA Kumulierte Betriebsdauer, Ausschaltvorgänge |
| STAT_FASDACG_SLA_STRASSENTYPEN_WERT | HEX | high | unsigned long | - | - | - | - | - | Autobahn, Landstr, Stadt. Kumulierte Strecke, z.B. 5 km Schritte. |
| STAT_FASDACG_SLA_FES_MODI_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der SLA-Aktivierungen in den 3 FES-Stellungen: ECO, COMFORT, SPORT. |
| STAT_FASDACG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASDACG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6606_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASDACG_RFA_OFFSET_NUTZUNG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Rückfahrassistent: Regelvorgänge und Eingriffsstatistik SLP |
| STAT_FASDACG_RFA_WEGSTRECKEN_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstreckenhistogramm  4Bit  für 16 Regelvorgänge  X  dabei erreichte Stecke  je 4 Bit |
| STAT_FASDACG_RFA_WEGSTRECKEN_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Wegstreckenhistogramm  4Bit  für 16 Regelvorgänge  X  dabei erreichte Stecke  je 4 Bit |
| STAT_FASDACG_RFA_GESCHW_HIST_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Geschwindgkeitshistogramm 4Bit  für 16 Regelvorgänge  X  dabei erreichter Geschwindigkeitswert  je 4 Bit. |
| STAT_FASDACG_RFA_GESCHW_HIST_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Geschwindgkeitshistogramm 4Bit  für 16 Regelvorgänge  X  dabei erreichter Geschwindigkeitswert  je 4 Bit. |
| STAT_FASPCG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASPCG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6610_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APDC_AN_INSGESAMT_SEKUNDEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Sekunden während des gesamten Fahrzeuglebens, in dem aPDC Aktiv war |
| STAT_KLEMME_15_AN_INSGESAMT_SEKUNDEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in Sekunden während des gesamten Fahrzeuglebens, in dem die Klemme 15 an war |
| STAT_APDC_ANZAHL_NOTBREMSUNGEN_INSGESAMT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Nobremsungen durch aPDC (active park distance control) im gesamten Fahrzeugleben |
| STAT_LAST_EVENT_1_ZEITPUNKT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt des Events |
| STAT_LAST_EVENT_1_ABSTAND_APDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach hinten |
| STAT_LAST_EVENT_1_ABSTAND_APDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach vorne |
| STAT_LAST_EVENT_1_ABSTAND_APDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach rechts |
| STAT_LAST_EVENT_1_ABSTAND_APDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach links |
| STAT_LAST_EVENT_1_MIN_ABSTAND_PDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach hinten |
| STAT_LAST_EVENT_1_MIN_ABSTAND_PDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach vorne |
| STAT_LAST_EVENT_1_MIN_ABSTAND_PDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach rechts |
| STAT_LAST_EVENT_1_MIN_ABSTAND_PDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach links |
| STAT_LAST_EVENT_2_ZEITPUNKT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt des Events |
| STAT_LAST_EVENT_2_ABSTAND_APDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach hinten |
| STAT_LAST_EVENT_2_ABSTAND_APDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach vorne |
| STAT_LAST_EVENT_2_ABSTAND_APDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach rechts |
| STAT_LAST_EVENT_2_ABSTAND_APDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach links |
| STAT_LAST_EVENT_2_MIN_ABSTAND_PDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach hinten |
| STAT_LAST_EVENT_2_MIN_ABSTAND_PDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach vorne |
| STAT_LAST_EVENT_2_MIN_ABSTAND_PDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach rechts |
| STAT_LAST_EVENT_2_MIN_ABSTAND_PDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach links |
| STAT_LAST_EVENT_3_ZEITPUNKT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt des Events |
| STAT_LAST_EVENT_3_ABSTAND_APDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach hinten |
| STAT_LAST_EVENT_3_ABSTAND_APDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach vorne |
| STAT_LAST_EVENT_3_ABSTAND_APDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach rechts |
| STAT_LAST_EVENT_3_ABSTAND_APDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach links |
| STAT_LAST_EVENT_3_MIN_ABSTAND_PDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach hinten |
| STAT_LAST_EVENT_3_MIN_ABSTAND_PDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach vorne |
| STAT_LAST_EVENT_3_MIN_ABSTAND_PDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach rechts |
| STAT_LAST_EVENT_3_MIN_ABSTAND_PDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach links |
| STAT_LAST_EVENT_4_ZEITPUNKT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt des Events |
| STAT_LAST_EVENT_4_ABSTAND_APDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach hinten |
| STAT_LAST_EVENT_4_ABSTAND_APDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach vorne |
| STAT_LAST_EVENT_4_ABSTAND_APDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach rechts |
| STAT_LAST_EVENT_4_ABSTAND_APDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach links |
| STAT_LAST_EVENT_4_MIN_ABSTAND_PDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach hinten |
| STAT_LAST_EVENT_4_MIN_ABSTAND_PDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach vorne |
| STAT_LAST_EVENT_4_MIN_ABSTAND_PDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach rechts |
| STAT_LAST_EVENT_4_MIN_ABSTAND_PDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach links |
| STAT_LAST_EVENT_5_ZEITPUNKT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt des Events |
| STAT_LAST_EVENT_5_ABSTAND_APDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach hinten |
| STAT_LAST_EVENT_5_ABSTAND_APDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach vorne |
| STAT_LAST_EVENT_5_ABSTAND_APDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach rechts |
| STAT_LAST_EVENT_5_ABSTAND_APDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Abstand nach links |
| STAT_LAST_EVENT_5_MIN_ABSTAND_PDC_HINTEN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach hinten |
| STAT_LAST_EVENT_5_MIN_ABSTAND_PDC_VORNE_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach vorne |
| STAT_LAST_EVENT_5_MIN_ABSTAND_PDC_RECHTS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach rechts |
| STAT_LAST_EVENT_5_MIN_ABSTAND_PDC_LINKS_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beim Event: Minimaler Abstand nach links |
| STAT_AUSLESEZEITPUNKT_SEKUNDE_ZAEHLER_RELATIV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt beim Auslesen der Statistikdaten gemäß Signal  Zeit_Sekunde_Zähler_Relativ  |

### RES_0X6611_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_01_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_01_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_01_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_01_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_01_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_01_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_01_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_01_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_01_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_01_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_01_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_01_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_01_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_01_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_01_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_01_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_01_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_01_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_01_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_01_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_01_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_02_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_02_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_02_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_02_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_02_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_02_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_02_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_02_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_02_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_02_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_02_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_02_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_02_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_02_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_02_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_02_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_02_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_02_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_02_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_02_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_02_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_03_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_03_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_03_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_03_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_03_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_03_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_03_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_03_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_03_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_03_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_03_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_03_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_03_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_03_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_03_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_03_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_03_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_03_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_03_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_03_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_03_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_04_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_04_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_04_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_04_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_04_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_04_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_04_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_04_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_04_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_04_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_04_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_04_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_04_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_04_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_04_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_04_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_04_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_04_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_04_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_04_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_04_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_05_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_05_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_05_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_05_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_05_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_05_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_05_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_05_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_05_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_05_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_05_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_05_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_05_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_05_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_05_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_05_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_05_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_05_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_05_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_05_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_05_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |

### RES_0X6612_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_06_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_06_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_06_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_06_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_06_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_06_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_06_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_06_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_06_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_06_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_06_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_06_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_06_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_06_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_06_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_06_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_06_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_06_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_06_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_06_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_06_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_07_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_07_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_07_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_07_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_07_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_07_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_07_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_07_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_07_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_07_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_07_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_07_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_07_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_07_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_07_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_07_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_07_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_07_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_07_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_07_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_07_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_08_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_08_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_08_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_08_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_08_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_08_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_08_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_08_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_08_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_08_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_08_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_08_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_08_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_08_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_08_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_08_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_08_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_08_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_08_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_08_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_08_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_09_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_09_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_09_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_09_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_09_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_09_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_09_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_09_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_09_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_09_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_09_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_09_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_09_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_09_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_09_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_09_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_09_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_09_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_09_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_09_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_09_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_10_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_10_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_10_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_10_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_10_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_10_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_10_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_10_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_10_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_10_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_10_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_10_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_10_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_10_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_10_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_10_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_10_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_10_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_10_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_10_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_10_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |

### RES_0X6613_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_11_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_11_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_11_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_11_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_11_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_11_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_11_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_11_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_11_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_11_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_11_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_11_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_11_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_11_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_11_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_11_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_11_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_11_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_11_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_11_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_11_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_12_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_12_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_12_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_12_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_12_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_12_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_12_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_12_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_12_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_12_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_12_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_12_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_12_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_12_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_12_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_12_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_12_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_12_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_12_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_12_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_12_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_13_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_13_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_13_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_13_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_13_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_13_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_13_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_13_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_13_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_13_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_13_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_13_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_13_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_13_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_13_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_13_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_13_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_13_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_13_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_13_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_13_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_14_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_14_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_14_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_14_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_14_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_14_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_14_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_14_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_14_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_14_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_14_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_14_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_14_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_14_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_14_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_14_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_14_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_14_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_14_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_14_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_14_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |
| STAT_15_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Monat |
| STAT_15_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Tag |
| STAT_15_STUNDE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Stunde |
| STAT_15_MINUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Event-Zeitpunkt: Minute |
| STAT_15_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_15_ANFORDERNDES_SYSTEM_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Es wird das System angezeigt, welches die Kaskade angefordert hat. Als Bitfeld mit folgenden Werten. Bit: 0: iBrake,  1: Kamerabasierte Auffahrwarnung (FCW_CCM),  2: Querverkehrsassistent (QVA),  3: Präventiver Fußgängerschutz (pFGS),  4: Night-Vision (NiVi),  5: Vorfahrtswarner (VFW) 6: Unklassifiziertes Kameraobjekt (OBJ)  7: Anfahrverhinderung (QVA) |
| STAT_15_ZEITPUNKT_BREMSPEDALBETAETIGUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Bremspedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_15_ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Relativ zum Beginn Akutwarnung wird der Zeitpunkt der Fahrpedalbetätigung bestimmt. Bei keiner Betätigung wird der Wert 0d (entspricht 0s) eingetragen. |
| STAT_15_DAUER_AKUTWARNUNG_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Beginn der Aktutwarnung bis zum Anbremsbeginn oder bei keiner Anbremsung bis zum Ende der Akutwarnung. |
| STAT_15_DAUER_ANBREMSEN_STUFE_1_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum bei Beginn Stufe 2 oder Ende Stufe 1. |
| STAT_15_DAUER_ANBREMSEN_STUFE_2_WERT | s | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Die Dauer vom Anbremsbeginn bis zum Ende Stufe 2. |
| STAT_15_ABSTAND_ZO_BEGINN_AKUTWARNUNG_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Akutwarnung. Wenn keine Akutwarnung ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_15_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 1. Wenn keine Bremsung Stufe 1 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_15_ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2_WERT | m | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Abstand zum Zielobjekt zu Beginn der Bremsung Stufe 2. Wenn keine Bremsung Stufe 2 ausgelöst wurde ist der Wert mit  initial  (0x00) belegt. |
| STAT_15_EGO_GESCHWINDIGKEIT_ANBREMSBEGINN_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsbeginn. |
| STAT_15_EGO_GESCHWINDIGKEIT_ANBREMSENDE_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit am Anbremsende. |
| STAT_15_MAX_LAENGSBESCHLEUNIGUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Verzögerung, welche der Fahrer während des Frontschutzbremsvorgangs erfährt. |
| STAT_15_MAX_SOLLVERZOEGERUNG_WERT | m/s² | high | signed char | - | - | 1.0 | 10.0 | 0.0 | Die maximale Sollverzögerung, welche während des Frontschutzbremsvorgangs gefordert wurde. |
| STAT_15_SYMBOL_UND_ASIL_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bit 0-5:  Gibt das letzte, während einer Bremsung angeforderte Symbol aus:  Kodierung siehe BN-Katalog  RQ_SYM_xx , LogicalInterface:BMW.DASS.DRIVING.WarningBrakingFunctions[internal].FASuS Bit 6-7:  Gibt die höchste ASIL-Integrität während eines Bremsvorgangs aus:  1: ASIL_QM, 2: ASIL_B; |
| STAT_15_ABBRUCHGRUND_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1 Fahrpedalgradient 2 Relativer Fahrpedalwinkel 3 Absoluter Fahrpedalwinkel 4 Lenkradwinkelgradient 5 Lenkwinkelsprung 6 - 7 Bremspedalrücknahme durch Fahrer, Bremspedal während der Bremsung betätigt  8 Bremspedalrücknahme durch Fahrer, Bremspedal bereits vor der Bremsung betätigt  9 Fehlende Akutwarnung 10 Maximaler Geschwindigkeitsabbau überschritten 11 Maximale Anbremsdauer überschritten  12 Kein Vollmodus 13 Niedrigreibwert erkannt |
| STAT_15_VERHINDERUNGSGRUND_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 Bremsenwirkkette hat nicht den Wert  i.O.  2 Sperrzeit aktiv 3 Beschleunigungswunsch des Fahrers aktiv 4 Maximale Querbeschleunigung überschritten 5 HDC Funktion Aktiv 6 FFA 7 Übersteuern 8 FDR-Regelung aktiv |

### RES_0X6701_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFM_LMV_STATUS | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONSSTATUS | - | - | - | Status der Längsmomentenverteilung |
| STAT_ZFM_LMV_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestelles Moment der Längsmomentenverteilung |
| STAT_ZFM_GSD_STATUS | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONSSTATUS | - | - | - | Status vom geregelten Sperr-Differential |
| STAT_ZFM_GSD_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestelles Moment vom  geregelten Sperr-Differential |

### RES_0X6706_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_COMP_OFS_YR1_RISE_1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_RISE_2_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_RISE_3_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_RISE_4_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_RISE_5_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_FALL_1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_FALL_2_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_FALL_3_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_FALL_4_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_FALL_5_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR1_TOL_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 |
| STAT_TEMP_COMP_OFS_YR1_TOL_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 |
| STAT_TEMP_COMP_OFS_YR1_TOL_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 |
| STAT_TEMP_COMP_OFS_YR1_TOL_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 |
| STAT_TEMP_COMP_OFS_YR1_TOL_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 |
| STAT_TEMP_COMP_YR1_BORDER_RISE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable Bereichsgrenzen des Gierratensensors 1 für steigende Temperaturen |
| STAT_TEMP_COMP_YR1_BORDER_FALL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable Bereichsgrenzen des Gierratensensors 1 für fallende Temperaturen |
| STAT_TEMP_COMP_OFS_YR2_RISE_1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_RISE_2_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_RISE_3_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_RISE_4_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_RISE_5_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 bei steigender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_FALL_1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_FALL_2_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_FALL_3_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_FALL_4_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_FALL_5_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 bei fallender Temperatur |
| STAT_TEMP_COMP_OFS_YR2_TOL_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 |
| STAT_TEMP_COMP_OFS_YR2_TOL_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 |
| STAT_TEMP_COMP_OFS_YR2_TOL_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 |
| STAT_TEMP_COMP_OFS_YR2_TOL_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 |
| STAT_TEMP_COMP_OFS_YR2_TOL_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 |
| STAT_TEMP_COMP_YR2_BORDER_RISE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable Bereichsgrenzen des Gierratensensors 2 für steigende Temperaturen |
| STAT_TEMP_COMP_YR2_BORDER_FALL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable Bereichsgrenzen des Gierratensensors 2 für fallende Temperaturen |
| STAT_MANUELLER_RADRADIUS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | MANUELLER_RADRADIUS |
| STAT_RADRADIUS_R2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RADRADIUS_R2 |
| STAT_RADRADIUS_R0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | RADRADIUS_R0 |
| STAT_COMP_OFS_DEW_YR_HP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | COMP_OFS_DEW_YR_HP |
| STAT_COMP_OFS_DE_YR_LONG_TIME_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Langzeitwert des Lenkwinkeloffsets aus Abgleich über Gierrate |
| STAT_COMP_OFS_DE_YR_MID_TIME_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Abgleich über Gierrate über einen mittleren Zeitraum |
| STAT_COMP_OFS_DE_YR_SHORT_TIME_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Kurzzeitwert des Lenkwinkeloffsets aus Abgleich über Gierrate |
| STAT_COMP_OFS_DEW_TOL_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz für Offsetwert des radbezogenen Lenkwinkels |
| STAT_OPERATION_TIME_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Bisherige Betriebszeit |
| STAT_COMP_OFS_YR1_STST_TEMP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR2_STST_TEMP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR1_STST_TEMP_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz für Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR2_STST_TEMP_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz für Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR1_GPS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des GPS-basierten Abgleichs des Gierratensensors 1 |
| STAT_COMP_OFS_YR2_GPS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des GPS-basierten Abgleichs des Gierratensensors 2 |
| STAT_COMP_OFS_YR1_GPS_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des GPS-basierten Abgleichs des Gierratensensors 1 |
| STAT_COMP_OFS_YR2_GPS_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz des GPS-basierten Abgleichs des Gierratensensors 2 |
| STAT_ADDATA_FLASHCOUNT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Flash-Zyklen, +1 |

### RES_0X6708_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_OFS_AXM_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigung Motormoment |
| STAT_STATUS_MLW_WERKSMODE_GELERNT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserviert für AFS (MLW Werksmodus gelernt) |
| STAT_MLW_ANSCH_ANSCH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserviert für AFS (MLW Anschlag Anschlag) |
| STAT_STATUS_SK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Status Schneekette |
| STAT_ZAEHLER_SK_M_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler Schneeketten Modus |
| STAT_GESAMT_DAUER_FAHRZYKLUS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer über alle Fahrzyklen |
| STAT_GESAMT_DAUER_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer linearer Fahrbereich über alle Fahrzyklen |
| STAT_GESAMT_ANTEIL_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anteil linearer Fahrbereich in allen Fahrzyklen |
| STAT_ZAEHLER_1_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 1 |
| STAT_ZAEHLER_2_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 2 |
| STAT_ZAEHLER_3_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 3 |
| STAT_ZAEHLER_1_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 1 |
| STAT_ZAEHLER_2_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 2 |
| STAT_ZAEHLER_3_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 3 |
| STAT_ZAEHLER_1_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 1 |
| STAT_ZAEHLER_2_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 2 |
| STAT_ZAEHLER_3_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 3 |
| STAT_ZAEHLER_1_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 1 |
| STAT_ZAEHLER_2_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 2 |
| STAT_ZAEHLER_3_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 3 |
| STAT_GESAMT_DAUER_LIN_FAHRBEREICH_REGLEREINGRIFF_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer der Reglereingriffe im linearer Fahrbereich |
| STAT_R_K_LSS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Geschätzte Reifenlängssteifigkeit der angetriebenen Achsen |
| STAT_ZFMFS_OFS_AXM_FW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset der modellierten Längsbeschleunigung aufgrund des Fahrerwunsches |
| STAT_LMV_M1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 1 |
| STAT_LMV_M1_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 1 |
| STAT_LMV_M1_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 2 |
| STAT_LMV_M1_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 3 |
| STAT_LMV_M1_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 4 |
| STAT_LMV_M2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 2 |
| STAT_LMV_M2_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 1 |
| STAT_LMV_M2_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 2 |
| STAT_LMV_M2_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 3 |
| STAT_LMV_M2_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 4 |
| STAT_LMV_M3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 3 |
| STAT_LMV_M3_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 1 |
| STAT_LMV_M3_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 2 |
| STAT_LMV_M3_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 3 |
| STAT_LMV_M3_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 4 |
| STAT_LMV_M4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 4 |
| STAT_LMV_M4_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 1 |
| STAT_LMV_M4_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 2 |
| STAT_LMV_M4_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 3 |
| STAT_LMV_M4_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 4 |
| STAT_LMV_M5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 5 |
| STAT_LMV_M5_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 1 |
| STAT_LMV_M5_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 2 |
| STAT_LMV_M5_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 3 |
| STAT_LMV_M5_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 4 |
| STAT_TRN_RAO_BAX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Übersetzungsverhältnis Hinterachse |

### RES_0X670A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMP_OFS_AX1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_AZ1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_DEW_LT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Langzeitabgleich Rad bezogen |
| STAT_COMP_OFS_DEW_YR_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Abgleich über Gierrate Rad bezogen |
| STAT_COMP_OFS_DEW_TOLLT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeltoleranz Rad bezogen |
| STAT_COMP_SENS_VWHL_HL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne rechts |
| STAT_COMP_OFS_RY1_STST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Stillstandsabgleich |
| STAT_COMP_OFS_RY1_DRV_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Fahrtabgleich |
| STAT_COMP_OFS_RY1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Nickratensensor 1 |
| STAT_COMP_KYR_RY1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Nickrate Kompensation Gierratenübersprechen |
| STAT_COMP_OFS_XR1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Rollrate 1 |
| STAT_COMP_KYR_XR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 1 |
| STAT_COMP_SENS_YR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_YR2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 2 |
| STAT_I_AY1_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_ID_NUM_SENS_CLUST_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Sensorcluster Seriennummer Teil 1 |
| STAT_ID_NUM_SENS_CLUST_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Sensorcluster Seriennummer Teil 2 |
| STAT_ROLLE_WERK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Speicherung des Bandenderollenmodus über Klemmenwechsel hinaus |
| STAT_DEBUG_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DEBUGCOUNTER, der sich inkrementiert vor jedem EEPROM-schreiben |
| STAT_COUNTER_REV_GEAR_FAILURE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Counter für Rückwärtsgang-Erkennung |
| STAT_COUNTER_FOR_GEAR_FAILURE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Counter für Vorwärtsgang-Erkennung |

### RES_0X670B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RISE_01_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_02_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_03_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_04_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_05_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_06_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_07_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_08_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_09_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_10_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_11_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_12_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_13_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_14_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_15_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_16_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_17_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_18_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_19_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_01_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_02_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_03_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_04_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_05_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_06_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_07_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |

### RES_0X6727_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_1 |
| STAT_DATA_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_2 |
| STAT_DATA_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_3 |
| STAT_DATA_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_4 |
| STAT_DATA_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_5 |
| STAT_DATA_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_6 |
| STAT_DATA_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_7 |
| STAT_DATA_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_8 |
| STAT_DATA_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_9 |
| STAT_DATA_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_10 |
| STAT_DATA_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_11 |
| STAT_DATA_12_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Datenfeld_12 |
| STAT_KONFIG_DATA_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Konfigurationsdaten_1 |
| STAT_KONFIG_DATA_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Konfigurationsdaten_2 |

### RES_0X68F7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EEPROM_I_DRIFT_COUNTER_OVERALL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Summe aller im Fahrzeug erfolgten Drifts |
| STAT_EEPROM_I_DRIFT_LAST_VALID_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gültiger Drift im letzten vorangegangen Fahrzyklus (ja = 1/nein =0) |
| STAT_EEPROM_I_DRIFT_BETA_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlicher Schwimmwinkel beim besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_BETA_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlicher Schwimmwinkel beim letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_DAUER_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer des besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_DAUER_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Dauer des letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STRECKE_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zurückgelegte Wegstrecke im besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STRECKE_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zurückgelegte Wegstrecke im letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STERNE_ERREICHBAR_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal erreichbare Sterne beim besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STERNE_ERREICHBAR_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal erreichbare Sterne beim letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STERNE_OVERALL_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Erreichte Sterne beim besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STERNE_OVERALL_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Erreichte Sterne beim letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STUFE_BEST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Assistenzgrad beim besten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STUFE_LAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Assistenzgrad beim letzten erfolgten Drift |
| STAT_EEPROM_I_DRIFT_STRECKE_GESAMT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gesamte Wegstrecke in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_STRECKE_KURVEN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Kurven Strecke in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_STRECKE_DRIFT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drift Strecke in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_PERFORMANCE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Drift Performance in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_ANZAHL_UNTERSTEUERN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Untersteuerevents in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_ANZAHL_DRIFT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Driftevents in letzter aktiver Aufzeichnung |
| STAT_EEPROM_I_DRIFT_RECORDING_VALID_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gültige Aufzeichnungsdaten (ja=1/nein=0) |

### RES_0XA051_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA052_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA053_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA05B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_DATEN_SCHREIBEN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Information ob der Schreibvorgang der Adaptivdaten läuft. |

### RES_0XA200_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWKW_VERSIONTYPE_KTYPE_KMAIN_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Haupt SWC-Kennung |
| STAT_SWKW_VERSIONTYPE_KTYPE_KSUB_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sub SWC-Kennung |
| STAT_SWKW_VERSIONTYPE_KTYPE_KCONFIG_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Config SWC-Kennung |
| STAT_SWKW_VERSIONTYPE_KTYPE_KEXT_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Externe SWC-Kennung |
| STAT_SWKW_VERSIONTYPE_VTYPE_VRSVD_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |
| STAT_SWKW_VERSIONTYPE_VTYPE_VMAIN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Haupt SWC-Version |
| STAT_SWKW_VERSIONTYPE_VTYPE_VSUB_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sub SWC-Version |
| STAT_SWKW_VERSIONTYPE_VTYPE_VRELEASE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Release SWC-Version |
| STAT_SWKW_VERSIONTYPE_VTYPE_VPATCH_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch SWC-Version |

### RES_0XAB5B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_EEPROM_SICHERN_NR | - | - | + | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der EEPROM Sicherung  0=Sicherung erfolgreich 1= Sicherung läuft |

### RES_0XABA3_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XD09A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_IST_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GMK-Funktion (abhängig von Qualifiern der Eingänge) |
| STAT_ZUSTAND_SOLL_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Zustand der GMK-Funktion |
| STAT_MMOTOR_OFFSET_EPS_WERT | Nm | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GMK_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GMK-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_MMOTOR_OFFSET_GMK_EPS_WERT | Nm | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, welches die EPS aufgrund der GMK Funktion zu stellen hat |
| STAT_LENKUNG_VERBAUT_FAHRZEUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datensatz EPS ohne IAS (1..ja,0..nein) |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |

### RES_0XD6B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GELERNTE_REIBUNG_LENKUNG_1_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 1 |
| STAT_GELERNTE_REIBUNG_LENKUNG_2_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 2 |
| STAT_GELERNTE_REIBUNG_LENKUNG_3_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 3 |
| STAT_GELERNTE_REIBUNG_LENKUNG_4_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 4 |

### RES_0XD6B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_R0_PLAUSIBILISIERT_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Statischer Radradius |
| STAT_R2_PLAUSIBILISIERT_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dynamischer Radradius |
| STAT_R0_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Klemmenzyklen für gelernten statischer Radradius |
| STAT_R2_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Klemmenzyklen für gelernten dynamischer Radradius |
| STAT_R0_MEAN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlischer statischer Radradius |
| STAT_R2_MEAN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlischer dynamischer Radradius |
| STAT_R0_PLAUSIZEIT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Plausibilisierungszeit für Berechnung statischer Radradius |
| STAT_R2_PLAUSIZEIT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Plausibilisierungszeit für Berechnung dynamischer Radradius |
| STAT_R0_VAR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable statischer Radradius |
| STAT_R2_VAR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable dynamischer Radradius |

### RES_0XD6BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADRADIUS_AUS_GPS_SCHAETZ_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Radradius aus GPS-Schaetzer |
| STAT_AUFWEITKOEFF_RADRADIUS_AUS_GPS_SCHAETZ_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aufweitkoeffizient für Radradius aus GPS-Schaetzer |
| STAT_GPS_KORREKTUR_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl der nicht gelernten Klemmenzyklen |

### RES_0XDBD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gierrate. Gemittelter Wert aus SBS für Sensor 1 und 2. |
| STAT_GIERRATE_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung (Gemittelter Wert Sensor 1 und 2) |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Längsbeschleunigung Sensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor 1 |

### RES_0XDC13_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIVDATEN_RUECKSETZEN_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Grundeinstellung gesetzt |
| STAT_ADAPTIVDATEN_RUECKSETZEN_NR | 0-n | - | signed int | - | TAB_ADAPTIVDATEN_RESET | - | - | - | Adaptivdaten Grundeinstellung gesetzt |
| STAT_AX_AY_ABGLEICH_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_AX_AY_ABGLEICH_NR | 0-n | - | signed char | - | TAB_AX_AY_ABGLEICH | - | - | - | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_ADAPTIVDATEN_WERKSMODUS_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_WERKSMODUS_NR | 0-n | - | signed char | - | TAB_ADAPTIVDATEN_WERK | - | - | - | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten im Lernbereich |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_NR | 0-n | - | signed char | - | TAB_ADAPTIVDATEN_LERNEN | - | - | - | Adaptivdaten im Lernbereich |

### RES_0XDC24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VX_FS_QUAL | 0-n | - | signed char | - | - | 1.0 | 1.0 | 0.0 | VX Qualifier |
| STAT_REFERENZGESCHWINDIGKEIT_VX_WERT | km/h | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VX - Fahrzeugreferenzgeschwindigkeit |
| STAT_ZFMFS_I_FAHRZUSTAND | 0-n | - | signed char | - | TAB_FAHRZUSTAND | - | - | - | Fahrzustand |
| STAT_ZFMABLEN_HSR_STAT_ASG_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_STAT_ZSTACTDIAG_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_ACTDIAG_FREIGABE_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC2A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NICKRATE_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Nickrate |
| STAT_NICKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC33_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WANKRATE_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Wankrate |
| STAT_WANKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC3A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTORU_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Lenkunterstützung der EPS beeinflusst |
| STAT_FAKTORARD_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Dämpfung der EPS beinflusst |
| STAT_FAKTORARZ_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR den aktiven Rücklauf der EPS beeinflusst |
| STAT_MMOTOR_OFFSET_EPS_WERT | - | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_FAKTOR_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zu den 3 Faktoren (2 = umsetzen, 14 = nicht umsetzen) |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GBR_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GBR-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_ZUSTAND_GRENZBEREICHSREUCKMELDUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GBR-Funktion (abhängig von Qualifiern der Eingänge) |

### RES_0XDD5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWA_EPS_OFFSET_BESTAET_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Bestätigung EPS Positionsoffset |
| STAT_LWA_EPS_OFFS_KORR_ZAEHL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturzählerwert EPS Positionsoffset |

### RES_0XDD5B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Rechts Kurven) |

### RES_0XDE6A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_HSR_GRAD_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_ISTWERT_SR_QUALIFIER_NR | 0-n | high | signed char | - | TAB_SBS_GUELTIGKEIT | - | - | - | Beurteilung des HSR Motorlagewinkel Istwert 0 --  Initialisierung 1 --  Signalwert ist gueltig und abgesichert 2 --  Signal ist gueltig 3 --  Signal ist nicht vertrauenswuerdig 4 --  Ersatzwert ist im Nutzsignal gesetzt 5 --  Signal zu oft entprellt 6 --  Signalwert ist ungueltig 7 --  Sensor nicht vorhanden oder Signal ungueltig |
| STAT_HSR_SERVICEQUALIFIER_NR | 0-n | high | signed char | - | TAB_OPERATINGSYSTEM_ICM_HSR | - | - | - | Beurteilung des HSR Service qualifier: 33 --  Drive Standby  34 --  Drive 49 --  Drive Standby, USW1 53 --  Drive Standby, USW2  57 --  Drive Standby, USW3 54 --  Drive, USW1 50 --  Drive, USW2 58 --  Drive, USW3 104 --  Error 128 --  Initialisierung 224 --  Postrun 225 --  ReadyforDrive 227 --  Drive_RampZero 228 --  WaitForRLWSet 233 --  ReadyForDrive Unterspannung 235 --  Drive_RampZero Unterspannung 255 --  Invalid |
| STAT_HSR_SERVICEQUALIFIER_MLW_IST_NR | 0-n | high | signed char | - | TAB_OPERATINGSYSTEM_ICM_HSR | - | - | - | Beurteilung des HSR Service qualifier: 33 --  Drive Standby  34 --  Drive 49 --  Drive Standby, USW1 53 --  Drive Standby, USW2  57 --  Drive Standby, USW3 54 --  Drive, USW1 50 --  Drive, USW2 58 --  Drive, USW3 104 --  Error 128 --  Initialisierung 224 --  Postrun 225 --  ReadyforDrive 227 --  Drive_RampZero 228 --  WaitForRLWSet 233 --  ReadyForDrive Unterspannung 235 --  Drive_RampZero Unterspannung 255 --  Invalid |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_GRAD_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_QUALIFIER_NR | 0-n | high | unsigned char | - | TAB_HSR_QUAL | - | - | - | Qualifier für MLW von HSR |
| STAT_ZFMDKVQ_I_ZS_HSRGIERKOMP_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollzustand HSR Gierkompensation |
| STAT_ZFMDKVQ_I_ZS_HSRFKT_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollzustand HSR Funktionseingabe (Schneekette) |
| STAT_ZFMDKRQ_I_ZS_RQ_HSR_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollzustand HSR Gierratenregler |
| STAT_ZFMDKSQ_I_ZS_SQ_HSR_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollzustand HSR Strörgrößenaufschaltung |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S1_WERT | HEX | high | unsigned char | - | - | - | - | - | Umsetzung Vorsteuerung Famp Schwelle 1 |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S2_WERT | HEX | high | unsigned char | - | - | - | - | - | Umsetzung Vorsteuerung Famp Schwelle 2 |
| STAT_ZFMABLEN_I_HSR_AKT_ZST_WERT | HEX | high | unsigned char | - | - | - | - | - | Istzustand HSR Aktuatorverfügbarkeit |
| STAT_ZFMDKVQ_I_ZS_HSRZFF_WERT | HEX | high | unsigned char | - | - | - | - | - | Sollzustand Fahrzeugführungsregler |
| STAT_QU_FN_HSR_WERT | HEX | high | unsigned char | - | - | - | - | - | Funktionsqualifier HSR |
| STAT_ST_V_VEH_NSS_WERT | HEX | high | unsigned char | - | - | - | - | - | Status Geschwindigkeit Fahrzeug Stillstandsnah |

### RES_0XE2FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus des Radradiusschätzers |
| STAT_STATISCHER_RADRADIUS_WERT | m | high | unsigned int | - | - | 6.10352 | 1000000.0 | 0.0 | Statischer Radradius |
| STAT_AUFWEITUNGSKOEFFIZIENT_WERT | - | high | unsigned int | - | - | 0.00045776 | 100000000.0 | 0.0 | Aufweitungskoeffizient |
| STAT_SKR_GENAUIGKEIT_WERT | % | high | unsigned int | - | - | 1.52588 | 100000.0 | 0.0 | SKR_Genauigkeit |
| STAT_RTA_HR_WERT | - | high | unsigned char | - | - | 7.84314 | 10000.0 | 0.9 | Radtoleranzabgleich HR |
| STAT_RTA_HL_WERT | - | high | unsigned char | - | - | 7.84314 | 10000.0 | 0.9 | Radtoleranzabgleich HL |
| STAT_RTA_VR_WERT | - | high | unsigned char | - | - | 7.84314 | 10000.0 | 0.9 | Radtoleranzabgleich VR |
| STAT_RTA_VL_WERT | - | high | unsigned char | - | - | 7.84314 | 10000.0 | 0.9 | Radtoleranzabgleich VL |
| STAT_MASSE_WERT | kg | high | unsigned int | - | - | 0.12493896 | 1.0 | 0.0 | Geschätzte Fahrzeugmasse |
| STAT_QUAL_MASS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualifier der geschätzten Masse |
| STAT_DRUCK_REIFEN_HL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Druck Reifen HL (AVL_P_TYR_RLH) |
| STAT_DRUCK_REIFEN_HR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Druck Reifen HR (AVL_P_TYR_RRH) |
| STAT_DRUCK_REIFEN_VR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Druck Reifen VR (AVL_P_TYR_FRH) |
| STAT_DRUCK_REIFEN_VL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Druck Reifen VL (AVL_P_TYR_FLH) |
| STAT_TEMP_REIFEN_HL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperatur Reifen HL (AVL_TEMP_TYR_RLH) |
| STAT_TEMP_REIFEN_HR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperatur Reifen HR (AVL_TEMP_TYR_RRH) |
| STAT_TEMP_REIFEN_VR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperatur Reifen VR (AVL_TEMP_TYR_FRH) |
| STAT_TEMP_REIFEN_VL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperatur Reifen VL (AVL_TEMP_TYR_FLH) |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_LAST_WERT | + | - | - | % | high | signed int | - | - | 1.0 | 10.0 | 0.0 | Ausgabe der max CPU Last in % |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT | + | - | - | 0-n | high | unsigned char | - | TAB_ROUTINE_RESULT | - | - | - | Ergebnis der Routine |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT | + | - | - | 0-n | high | unsigned char | - | TAB_ROUTINE_RESULT_QDMMUE | - | - | - | Ergebnis der Routine |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| _ERROR_MODE_DETAIL_INFO | 0x5500 | STAT_ERROR_MODE_DETAIL_INFO_DATA | Zeigt Detail Information zu dem DTC 'Error Mode' an | DATA | - | High | data[25] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DATENLOGGING_FASSCOLSI_LKA | 0x6602 | - | Lesen der Statistikdaten vom Baustein FasScolSi (Sollwertgenerierung Kollisionvermeidung Seite) für die Funktion Lane Keeping Assist (LKA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6602_D |
| DATENLOGGING_FASCWBAS | 0x6604 | - | Lesen der Statistikdaten vom Baustein FasCwbas (Warnbremskoordinator) jeweils für die Funktionen Frontschutz (iBrake), präventiver Fussgängerschutz (PFGS) und Querverkehrsassisitent (QVA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6604_D |
| DATENLOGGING_FASDACG | 0x6605 | - | Lesen der Statistikdaten vom Baustein FasDacg (Sollwertgenerierung Vorausschau) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6605_D |
| DATENLOGGING_FASPCG | 0x6606 | - | Lesen der Statistikdaten für die Funktion Rückfahrassistent vom Baustein FasPcg (Sollwertgenerierung Parken Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6606_D |
| STATISTIK_FASPCG | 0x6610 | - | Lesen der Statistikdaten für die Funktion aPDC vom Baustein FasPcg (Sollwertgenerierung Parken Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6610_D |
| STATISTIK_FASCWBAS_1 | 0x6611 | - | Lesen der Datensätze 1 bis 5 aus dem Ereignisspeicher vom Baustein FasCwbas (Warnbremskoordinator). Darin werden die Umweltbedingungen der letzten Warn- und Bremsereignisse aus dem Bereich der Frontzschutz-Funktionen gespeichert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6611_D |
| STATISTIK_FASCWBAS_2 | 0x6612 | - | Lesen der Datensätze 6 bis 10 aus dem Ereignisspeicher vom Baustein FasCwbas (Warnbremskoordinator). Darin werden die Umweltbedingungen der letzten Warn- und Bremsereignisse aus dem Bereich der Frontzschutz-Funktionen gespeichert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6612_D |
| STATISTIK_FASCWBAS_3 | 0x6613 | - | Lesen der Datensätze 11 bis 15 aus dem Ereignisspeicher vom Baustein FasCwbas (Warnbremskoordinator). Darin werden die Umweltbedingungen der letzten Warn- und Bremsereignisse aus dem Bereich der Frontzschutz-Funktionen gespeichert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6613_D |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x6660 | - | This job forces the transmission of an ADAS resync request message which will force the navigation system to resend the ADAS tree. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6660_D | - |
| ZFM_FUNKTION | 0x6700 | - | Entwicklerjob zur Ausführung von Funktionen aus der SW-Komponente 'Zentrales Fahrdynamik Management'. Spätestens durch einen Klemmenwechsel werden alle geänderten Einstellungen zurückgesetzt. Gegebenenfalls können aus Sicherheitsgründen Geschwindigkeitsschwellen eingebaut sein. Die ZFM-LMV-Jobs können in Sonderständen oder Ptr-Calib-Ständen freigeschaltet werden, indem der Parameter ZfmSerLmv_B_DiagLMVSteuernEnable = 1 gesetzt wird. In normalen Abgabeständen haben die Jobs keinen Einfluss. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6700_D | - |
| ZFM_FUNKTIONSZUSTAND | 0x6701 | - | Entwicklerjob zum Auslesen des Status von Funktionen aus der SW-Komponente 'Zentrales Fahrdynamik Management' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6701_D |
| ODO_FUNKTION | 0x6702 | - | Entwicklerjob zur Ausführung von Funktionen aus der SW-Komponente 'Odometrie'. Aus Sicherheitsgründen werden ab einer bestimmten Geschwindigkeitsschwelle die manuellen Einstellungen zurückgenommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6702_D | - |
| QDMSBSHP_FUNKTIONSZUSTAND | 0x6703 | STAT_RADIUS_MANUELL_WERT | Manuell per Diagnosejob eingegebener Radradius. Wenn kein manueller Radradius verwendet wird, ist der Wert gleich 0. | m | - | High | motorola float | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| QDMSBSHP_FUNKTION | 0x6704 | - | Entwicklerjob zur Ausführung von Funktionen aus der SW-Komponente 'Signalbereitstellung Hoch Präzise'. Aus Sicherheitsgründen werden ab einer bestimmten Geschwindigkeitsschwelle die manuellen Einstellungen zurückgenommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6704_D | - |
| ADAPTIVDATEN_QDMSBSHP | 0x6705 | - | Entwicklerjob zum Setzen  eines Adaptivwertes der SW-Komponente  Signalbereitstellung Hoch Präzise  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6705_D | - |
| ADAPTIVWERTE_QDMSBSHP | 0x6706 | - | Entwicklerjob zum Auslesen Adaptivwerte der SW-Komponente  Signalbereitstellung Hoch Präzise  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6706_D |
| ADAPTIVDATEN_ZFM | 0x6707 | - | Entwicklerjob zum Setzen  eines Adaptivwertes der SW-Komponente  Zentrales Fahrdynamikmanagement  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6707_D | - |
| ADAPTIVWERTE_ZFM | 0x6708 | - | Entwicklerjob zum Auslesen Adaptivwerte der SW-Komponente  Zentrales Fahrdynamikmanagement  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6708_D |
| ADAPTIVDATEN_SBS | 0x6709 | - | Entwicklerjob zum Setzen  eines Adaptivwertes der SW-Komponente ''Signalbereitstellung'' | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6709_D | - |
| ADAPTIVWERTE_SBS | 0x670A | - | Entwicklerjob zum Auslesen Adaptivwerte der SW-Komponente ''Signalbereitstellung'' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x670A_D |
| STATISTIK_QDMSBSHP | 0x670B | - | Statistik der ''Signalbereitstellungsschicht hochpraezise'': Temperaturabhängigkeit des Gierratensensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x670B_D |
| _ADAPTIVWERTE_QDMMUE | 0x6727 | - | Entwicklerjob zum Lesen der Adaptivdaten des lin. Reibwertschätzers  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6727_D |
| _ADAPTIVDATEN_QDMMUE | 0x6728 | - | Entwicklerjob zum Setzen der Adaptivdaten des lin. Reibwertschätzers | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6728_D | - |
| _EEPROMWERTE_DRIFT | 0x68F7 | - | EEPROM-Werte zur Anzeige der Driftergebnisse für die SW-Komponente 'Ansteuerungseinheit_Anzeige_Radmomente' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x68F7_D |
| START_ADAPTIVDATEN_RUECKSETZEN | 0xA051 | - | Start und Status Ruecksetzen Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA051_R |
| STEUERN_AX_AY_ABGLEICH | 0xA052 | - | Starten und Status Abgleich Beschleunigungssensoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA052_R |
| START_ADAPTIVDATEN_WERKSMODUS | 0xA053 | - | Starten und Status Standardisierung Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA053_R |
| STEUERN_ADAPTIVDATEN_SLW_RESET | 0xA05B | - | Start und Status Summenlenkwinkel Reset | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05B_R |
| ZFM_RESET_STATISTIK_LINEARER_FAHRBEREICH | 0xA164 | - | Reset der Statistikdaten im Funktionsbaustein QdmZfm | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SWC_VERSIONEN_LESEN_INDEX_DATENSATZ | 0xA200 | - | Der Diagnosejob zum Auslesen der Versionsinfo wird insb.in der Entwicklungsphase benötigt, damit Entwickler, Absicherungsstellen usw. mit geringem Aufwand die Versionsinfo der auf dem SG implementierten SWCs auslesen zu können. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA200_R | RES_0xA200_R |
| STEUERN_EEPROM_SCHREIBEN | 0xAB5B | - | Start und Status Abspeichern Lerndaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5B_R |
| START_ADAPTIVDATEN_WERKSMODUS_2 | 0xABA3 | - | Initialisierung der Lernwerte der Funktion  Eigenlenkverhalten . | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xABA3_R |
| GMK_DATEN | 0xD09A | - | Auslesen GMK Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD09A_D |
| LESEN_KOMPATIBILITAETSINDEX | 0xD367 | STAT_KOMPATIBILITAETSINDEX_WERT | Lesen der Kompatibilitaets-Index vom Steuergeraet. | HEX | - | High | signed long | - | - | - | - | - | 22 | - | - |
| ADAPTIVDATEN_QDMZFF | 0xD6B5 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B5_D | - |
| ADAPTIVWERTE_QDMZFF | 0xD6B6 | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B6_D |
| ADAPTIVDATEN_QDMSKR | 0xD6B7 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B7_D | - |
| ADAPTIVWERTE_QDMSKR | 0xD6B8 | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B8_D |
| ADAPTIVDATEN_QDMWS | 0xD6B9 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B9_D | - |
| ADAPTIVWERTE_QDMWS | 0xD6BA | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6BA_D |
| STEUERN_LMV_FUNKTION_QDM | 0xDB2F | - | Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe). Der Job wird nur durch die QDM-SW-Komponente angesteuert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB2F_D | - |
| STATUS_LMV_FUNKTION_QDM | 0xDB44 | STAT_LMV_FUNKTION_AKTIV | 1 = aktiv  0 = inaktiv | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Statusabfrage Rollenmodus aktiv im ICM | 0-n | - | - | signed char | TAB_STATUS_ROLLENMODUS | - | - | - | - | 22 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98_D | - |
| STATUS_GIERRATE | 0xDBD9 | - | Auslesen Gierrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD9_D |
| STATUS_QUERBESCHLEUNIGUNG | 0xDBDA | - | Auslesen Querbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDA_D |
| STATUS_LAENGSBESCHLEUNIGUNG | 0xDBDB | - | Auslesen Laengsbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDB_D |
| STATUS_ADAPTIVDATEN_ZUSTAND | 0xDC13 | - | Auslesen Status Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC13_D |
| STATUS_FREIGABE_AKTIVE_DIAGNOSE_HSR | 0xDC24 | - | Freigabe Aktive Diagnose HSR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC24_D |
| STATUS_NICKRATE | 0xDC2A | - | Auslesen Nickrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC2A_D |
| STATUS_WANKRATE | 0xDC33 | - | Auslesen Wankrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC33_D |
| STATUS_GBRPLUS | 0xDC3A | - | Auslesen Daten Grenzbereichsrückmeldung (GBR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3A_D |
| ADAPTIVDATEN_AAEPS | 0xDC8A | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC8A_D | - |
| ADAPTIVDATEN_EV | 0xDC8B | - | ADAPTIVDATEN_EV | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC8B_D | - |
| STATUS_SWC_VERSIONEN_LESEN_ANZAHL_DATENSAETZE | 0xDD33 | STAT_INDEX_DATENSATZ_WERT | - | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTIVWERTE_AAEPS | 0xDD5A | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5A_D |
| ADAPTIVWERTE_EV | 0xDD5B | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5B_D |
| HSR_QDM | 0xDE6A | - | Status HSR - ICM Verbung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDE6A_D |
| FUNKTION_QDMSKR | 0xE2FF | - | Job zum Lesen von Statusinformationen des Radradiusschätzers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2FF_D |
| STATISTIC_1_QDMWS | 0xE3A4 | STAT_STATISTIC_1_WERT | StatusStatistik1 | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _AUSGABE_PROZESSOR_LAST | 0xF000 | - | Diese Routine soll genutzt werden, um die ermittelten max CPU Last Werte auszugeben. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| _LOESCHEN_PROZESSOR_LAST | 0xF001 | - | Diese Routine soll genutzt werden, um die ermittelten max CPU Last Werte zurückzusetzen. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _EEPROMWERTE_DRIFT_RUECKSETZEN | 0xF002 | - | Zurücksetzen der EEPROM-Werte zur Anzeige der Driftergebnisse für die SW-Komponente 'Ansteuereinheit_Anzeige_Radmomente' | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |
| _ADAPTIVDATEN_QDMMUE_RUECKSETZEN | 0xF003 | - | Entwicklerjob zum Rücksetzen der Adaptivdaten des lin. Reibwertschätzers | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF003_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| DATENLOGGING_RUECKSETZEN_FASSCOLSI | 0xF601 | - | Reset der Statistik des Bausteins FasScolSi | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASCWBAS | 0xF603 | - | Reset der Statistik des Bausteins FasCwbas | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASDACG | 0xF604 | - | Reset der Statistik des Bausteins FasDacg | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASPCG | 0xF605 | - | Reset der Adaptivdaten-Statistik des Bausteins FasPcg für die Funktion Rückfahrassistent | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATISTIK_RUECKSETZEN_FASPCG | 0xF610 | - | Reset der Statistik des Bausteins FasPcg für die Funktion aPDC | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATISTIK_RUECKSETZEN_FASCWBAS | 0xF611 | - | Löschen aller Daten im Ringspeicher des Bausteins FasCwbas. | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_ADAPTIVDATEN_AAEPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Bestaetigung EPS Positionsoffset |
| 0x01 | Korrekturzaehlerwert EPS Positionsoffset |
| 0xFF | unbekannt |

### TAB_ADAPTIVDATEN_EV

| WERT | TEXT |
| --- | --- |
| 0x00 | VCH Lernwerttoleranz (Beide Kurven) |
| 0x01 | VCH Lernwerttoleranz (Linke Kurve) |
| 0x02 | VCH Lernwerttoleranz (Rechte Kurve) |
| 0x03 | VCH Lernwert (beide Kurven) |
| 0x04 | VCH Lernwert (Linke Kurve) |
| 0x05 | VCH Lernwert (Rechte Kurve) |
| 0xFF | unbekannt |

### TAB_ADAPTIVDATEN_LERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht im Lernbereich |
| 0x01 | Adaptivdaten im Lernbereich |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_MUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Datenfeld_1 |
| 0x01 | Datenfeld_2 |
| 0x02 | Datenfeld_3 |
| 0x03 | Datenfeld_4 |
| 0x04 | Datenfeld_5 |
| 0x05 | Datenfeld_6 |
| 0x06 | Datenfeld_7 |
| 0x07 | Datenfeld_8 |
| 0x08 | Datenfeld_9 |
| 0x09 | Datenfeld_10 |
| 0x0A | Datenfeld_11 |
| 0x0B | Datenfeld_12 |
| 0x0C | Konfigurationsdaten_1 |
| 0x0D | Konfigurationsdaten_2 |

### TAB_ADAPTIVDATEN_QDMSBSHP

| WERT | TEXT |
| --- | --- |
| 0x00 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 bei steigender Temperatur |
| 0x01 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 bei steigender Temperatur |
| 0x02 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 bei steigender Temperatur |
| 0x03 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 bei steigender Temperatur |
| 0x04 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 bei steigender Temperatur |
| 0x05 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 bei fallender Temperatur |
| 0x06 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 bei fallender Temperatur |
| 0x07 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 bei fallender Temperatur |
| 0x08 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 bei fallender Temperatur |
| 0x09 | Gelernter Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 bei fallender Temperatur |
| 0x0A | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 1 |
| 0x0B | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 2 |
| 0x0C | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 3 |
| 0x0D | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 4 |
| 0x0E | Toleranz des gelernten Temperaturoffset des Gierratensensors 1 bei der Stützstelle 5 |
| 0x0F | Variable Bereichsgrenzen des Gierratensensors 1 für steigende Temperaturen |
| 0x10 | Variable Bereichsgrenzen des Gierratensensors 1 für fallende Temperaturen |
| 0x11 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 bei steigender Temperatur |
| 0x12 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 bei steigender Temperatur |
| 0x13 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 bei steigender Temperatur |
| 0x14 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 bei steigender Temperatur |
| 0x15 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 bei steigender Temperatur |
| 0x16 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 bei fallender Temperatur |
| 0x17 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 bei fallender Temperatur |
| 0x18 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 bei fallender Temperatur |
| 0x19 | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 bei fallender Temperatur |
| 0x1A | Gelernter Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 bei fallender Temperatur |
| 0x1B | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 1 |
| 0x1C | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 2 |
| 0x1D | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 3 |
| 0x1E | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 4 |
| 0x1F | Toleranz des gelernten Temperaturoffset des Gierratensensors 2 bei der Stützstelle 5 |
| 0x20 | Variable Bereichsgrenzen des Gierratensensors 2 für steigende Temperaturen |
| 0x21 | Variable Bereichsgrenzen des Gierratensensors 2 für fallende Temperaturen |
| 0x22 | MANUELLER_RADRADIUS |
| 0x23 | RADRADIUS_R2 |
| 0x24 | RADRADIUS_R0 |
| 0x25 | COMP_OFS_DEW_YR_HP |
| 0x26 | COMP_OFS_DE_YR_LONG_TIME (Langzeitwert des Lenkwinkeloffsets aus Abgleich über Gierrate) |
| 0x27 | COMP_OFS_DE_YR_MID_TIME (Lenkwinkeloffset aus Abgleich über Gierrate über mittleren Zeitraum) |
| 0x28 | COMP_OFS_DE_YR_SHORT_TIME (Kurzzeitwert des Lenkwinkeloffsets aus Abgleich über Gierrate) |
| 0x29 | COMP_OFS_DEW_TOL |
| 0x2A | OPERATION_TIME |
| 0x2B | Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x2C | Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x2D | Toleranz fuer Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x2E | Toleranz fuer Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x2F | Offsetwert des GPS-basierten Abgleichs  des Gierratensensors 1 |
| 0x30 | Offsetwert des GPS-basierten Abgleichs  des Gierratensensors 2 |
| 0x31 | Toleranz des GPS-basierten Abgleichs des Gierratensensors 1 |
| 0x32 | Toleranz des GPS-basierten Abgleichs des Gierratensensors 2 |
| 0xFFFF | Wert ungültig |

### TAB_ADAPTIVDATEN_QDMSKR

| WERT | TEXT |
| --- | --- |
| 0x00 | Statischer Radradius |
| 0x01 | Dynamischer Radradius |
| 0x02 | Anzahl Klemmenzyklen für gelernten statischer Radradius |
| 0x03 | Anzahl Klemmenzyklen für gelernten dynamischer Radradius |
| 0x04 | Durchschnittlischer statischer Radradius |
| 0x05 | Durchschnittlischer dynamischer Radradius |
| 0x06 | Plausibilisierungszeit für Berechnung statischer Radradius |
| 0x07 | Plausibilisierungszeit für Berechnung dynamischer Radradius |
| 0x08 | Variable statischer Radradius |
| 0x09 | Variable dynamischer Radradius |

### TAB_ADAPTIVDATEN_QDMWS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gelernter Radradius aus GPS-Schaetzer |
| 0x01 | Aufweitkoeffizient für Radradius aus GPS-Schaetzer |
| 0x02 | Anzahl der nicht gelernten Klemmenzyklen |

### TAB_ADAPTIVDATEN_QDMZFF

| WERT | TEXT |
| --- | --- |
| 0x00 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 1 |
| 0x01 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 2 |
| 0x02 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 3 |
| 0x03 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 4 |

### TAB_ADAPTIVDATEN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Defaultwerte gesetzt |
| 0x01 | Adaptivdaten auf Defaultwerte gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_SBS_SP2018

| WERT | TEXT |
| --- | --- |
| 0x00 | Offsetwert des Laengsbeschleunigungssensors 1 |
| 0x01 | Signaltoleranz des Laengsbeschleunigungsnutzsignals 1 |
| 0x02 | Offsetwert des Querbeschleunigungssensors 1 |
| 0x03 | Signaltoleranz des Querbeschleunigungsnutzsignals 1 |
| 0x04 | Offsetwert des Querbeschleunigungssensors 2 |
| 0x05 | Signaltoleranz des Querbeschleunigungsnutzsignals 2 |
| 0x06 | Offsetwert des Vertikalbeschleunigungssensors 1 |
| 0x07 | Signaltoleranz des Vertikalbeschleunigungssensors 1 |
| 0x08 | Lenkwinkeloffset aus Langzeitabgleich Rad bezogen |
| 0x09 | Lenkwinkeloffset aus Abgleich über Gierrate Rad bezogen |
| 0x0A | Lenkwinkeltoleranz Rad bezogen |
| 0x0B | Abgleich Radgeschwindigkeitssensor Hinten Links |
| 0x0C | Abgleich Radgeschwindigkeitssensor Hinten Rechts |
| 0x0D | Abgleich Radgeschwindigkeitssensor Vorne Links |
| 0x0E | Abgleich Radgeschwindigkeitssensor Vorne Rechts |
| 0x0F | Offsetwert des Nickratensensors 1 aus Stillstandsabgleich |
| 0x10 | Offsetwert des Nickratensensors 1 aus Fahrtabgleich |
| 0x11 | Signaltoleranz des Nickratensensors 1 |
| 0x12 | Korrekturfaktor für die Nickrate zur Kompensation des Gierratenuebersprechens |
| 0x13 | Offsetwert des Rollratensensors 1 |
| 0x14 | Signaltoleranz des Rollratennutzsignals 1 |
| 0x15 | Korrekturfaktor für die Rollrate zur Kompensation des Gierratenuebersprechens |
| 0x16 | Offsetwert des Gierratensensors 1 aus Fahrtabgleich |
| 0x17 | Offsetwert des Gierratensensors 1 aus Stillstandsabgleich |
| 0x18 | Signaltoleranz des Gierratennutzsignals 1 |
| 0x19 | Empfindlichkeit Gierratensensor 1 |
| 0x1A | Offsetwert des Gierratensensors 2 aus Fahrtabgleich |
| 0x1B | Offsetwert des Gierratensensors 2 aus Stillstandsabgleich |
| 0x1C | Signaltoleranz des Gierratennutzsignals 2 |
| 0x1D | Empfindlichkeit Gierratensensor 2 |
| 0x1E | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 1 |
| 0x1F | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 2 |
| 0x20 | Lernwert für die Vorzeichenueberwachung Gierrate 1 |
| 0x21 | Lernwert für die Vorzeichenueberwachung Gierrate 2 |
| 0x22 | Lernwert für die Vorzeichenueberwachung Gierrate aus Radgeschwindigkeiten |
| 0x23 | Lernwert für SensorclusterSeriennummer Teil 1 |
| 0x24 | Lernwert für SensorclusterSeriennummer Teil 2 |
| 0x25 | Lernwert für Speicherung des BandendeRollenmodus über Klemmenwechsel hinaus |
| 0x26 | DEBUGCOUNTER, der sich inkrementiert vor jedem EEPROM-schreiben |
| 0x27 | COUNTER für Rückwärtsgang Erkennung |
| 0x28 | COUNTER für Vorwärtsgang Erkennung |

### TAB_ADAPTIVDATEN_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Werksdaten gesetzt |
| 0x01 | Adaptivdaten auf Werksdaten gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_ZFM

| WERT | TEXT |
| --- | --- |
| 0x00 | Offset der Laengsbeschleunigung aus Motormoment |
| 0x01 | Reserviert für AFS (MLW Werksmodus gelernt) |
| 0x02 | Reserviert für AFS (MLW Anschlag Anschlag) |
| 0x03 | Status Schneekette |
| 0x04 | Zähler Schneeketten Modus |
| 0x05 | Dauer über alle Fahrzyklen |
| 0x06 | Dauer linearer Fahrbereich über alle Fahrzyklen |
| 0x07 | Anteil linearer Fahrbereich in allen Fahrzyklen |
| 0x08 | Zähler RQ SQ HSR Bereich 1 |
| 0x09 | Zähler RQ SQ HSR Bereich 2 |
| 0x0A | Zähler RQ SQ HSR Bereich 3 |
| 0x0B | Zähler RQ HSR Bereich 1 |
| 0x0C | Zähler RQ HSR Bereich 2 |
| 0x0D | Zähler RQ HSR Bereich 3 |
| 0x0E | Zähler RQ GMVH Bereich 1 |
| 0x0F | Zähler RQ GMVH Bereich 2 |
| 0x10 | Zähler RQ GMVH Bereich 3 |
| 0x11 | Zähler RQ ARS Bereich 1 |
| 0x12 | Zähler RQ ARS Bereich 2 |
| 0x13 | Zähler RQ ARS Bereich 3 |
| 0x14 | Dauer der Reglereingriffe im linearer Fahrbereich |
| 0x15 | Geschätzte Reifenlängssteifigkeit der angetriebenen Achsen |
| 0x16 | Offset der modellierten Längsbeschleunigung aufgrund des Fahrerwunsches |
| 0x17 | Sekundenzähler Allradmodus 1 |
| 0x18 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 1 |
| 0x19 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 2 |
| 0x1A | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 3 |
| 0x1B | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 4 |
| 0x1C | Sekundenzähler Allradmodus 2 |
| 0x1D | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 1 |
| 0x1E | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 2 |
| 0x1F | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 3 |
| 0x20 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 4 |
| 0x21 | Sekundenzähler Allradmodus 3 |
| 0x22 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 1 |
| 0x23 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 2 |
| 0x24 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 3 |
| 0x25 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 4 |
| 0x26 | Sekundenzähler Allradmodus 4 |
| 0x27 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 1 |
| 0x28 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 2 |
| 0x29 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 3 |
| 0x2A | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 4 |
| 0x2B | Sekundenzähler Allradmodus 5 |
| 0x2C | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 1 |
| 0x2D | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 2 |
| 0x2E | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 3 |
| 0x2F | Sekundenzähler der LMV Belastung: Allradmodus 5, Schwelle 4 |
| 0x30 | Übersetzungsverhältnis Hinterachse |

### TAB_AX_AY_ABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Abgleich ax_ay muss noch erfolgen |
| 0x01 | Abgleich ax_ay erfolgt |
| 0xFF | unbekannter Zustand |

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

### TAB_ERRID_INPUT_EMELECTRONICHORIZON

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_ADASInput |
| 0x02 | 2: ComError_LaneBoundaries |
| 0x03 | 3: Reduced_LaneBoundaries |
| 0x04 | 4: Unavailable_LaneBoundaries |
| 0x05 | 5: ComError_Timestamp |
| 0xFF | Wert ungültig |

### TAB_ERRID_INPUT_EMSLCONDITIONEVALUATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_BodyInput |
| 0x02 | 2: Reduced_BodyInput |
| 0x03 | 3: Missed_BodyInput |
| 0x04 | 4: ComError_TemperatureInput |
| 0x05 | 5: Reduced_TemperatureInput |
| 0x06 | 6: Missed_TemperatureInput |
| 0x07 | 7: ComError_OdometryInput |
| 0x08 | 8: Reduced_OdometryInput |
| 0x09 | 9: Missed_OdometryInput |
| 0x0A | 10: ComError_ClockInput |
| 0x0B | 11: Reduced_ClockInput |
| 0x0C | 12: Missed_ClockInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMELECTRONICHORIZON

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Invalid_ApplicationParameter |
| 0x02 | 2: Invalid_CodingParameter |
| 0x03 | 3: NoRespondToResync |
| 0x04 | 4: Error_ImplementationLevel |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMSLCONDITIONEVALUATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Error_ImplementationLevel |
| 0xFF | Wert ungültig |

### TAB_FAHRZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt (Richtung unsicher) |
| 7 | Signal ungültig |
| 255 | unbekannter Zustand |

### TAB_HSR_QUAL

| WERT | TEXT |
| --- | --- |
| 4 | Sollwert umsetzen, Diagnosefreigabe |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 228 | Sollwert nicht umsetzen, Diagnosefreigabe |
| 255 | Signal ungültig |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0x00 | nein |
| 0x01 | ja |

### TAB_ODO_FUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | RESET_INTERNE_POSITIONEN |
| 0x01 | AGILE_FUNKTION |

### TAB_OPERATINGSYSTEM_ICM_HSR

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### TAB_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen Werksrollenmodus |
| 2 | Setzen Rollenmodus Innenraum |

### TAB_ROUTINE_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolg |
| 0x01 | Fehler |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_RESULT_QDMMUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasende |
| 0xFF | Ungültig |

### TAB_SBSHP_FUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | MANUELLEN_RADIUS_EINGEBEN |
| 0x01 | MANUELLEN_RADIUS_DEAKTIVIEREN |
| 0x02 | RESET_INTERNEN_RADIUS_AUF_DEFAULT |
| 0x03 | RESET_INTERNE_POSITIONEN |
| 0x04 | VORHALT_FUNKTION |

### TAB_SBS_GUELTIGKEIT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzwert ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 255 | unbekannter Zustand |

### TAB_SBS_GUELTIGKEIT_UINT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzweret ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 65535 | unbekannter Zustand |

### TAB_STATUS_ANFORDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | Rücksetzen |
| 0x01 | Setzen |
| 0x02 | reservier |
| 0x03 | ungültig |

### TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Energiemangel im Hochvoltspeicher |
| 0x02 | Abbruch wegen HV-Fehler |
| 0x04 | Abbruch wegen DCDC-Ausfall |
| 0x08 | Zyklisches Nachladen beendet durch Laden |
| 0x20 | nächster zyklischer Ladevorgang möglich |
| 0x30 | nächster zyklischer Ladevorgang nicht mehr möglich |
| 0xFF | Wert ungültig |

### TAB_STATUS_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Rolle |
| 0x01 | 1-Achsrolle Vorderachse (Fzg mit Kombi-Menue) oder Bandenderolle |
| 0x02 | 1-Achsrolle Hinterachse |
| 0x03 | 2-Achsrolle |
| 0x04 | Bandenderolle (Werk) |
| 0x0E | ungueltig |

### TAB_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Abbruch |
| 0x04 | Fehler |
| 0x05 | Phasenende |
| 0xFF | Ungültig |

### TAB_STATUS_SPANNUNGSEINBRUCH

| WERT | TEXT |
| --- | --- |
| 0 | Kein Spannungseinbruch |
| 1 | Startspannungseinbruch bis maximal Spannungsschwelle 1 |
| 2 | Startspannungseinbruch bis maximal Spannungsschwelle 2 |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal unbefuellt |
| 0xFF | Wert ungültig |

### TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor startet |
| 2 | Motor läuft |
| 13 | Funktionsschnittstelle ist nicht verfuegbar |
| 14 | Reserviert |
| 15 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_ZEITRAHMEN_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | System Laufzeit |
| 0x01 | Zeitrahmen 2.5 ms |
| 0x02 | Zeitrahmen 5 ms |
| 0x03 | Zeitrahmen 10 ms |
| 0x04 | Zeitrahmen 20 ms |
| 0x05 | Zeitrahmen 100 ms |

### TAB_ZFM_FUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | LMV_AKTIV |
| 0x01 | LMV_PASSIV |
| 0x02 | LMV_NOTLAUF |
| 0x03 | LMV_MOMENT |
| 0x04 | GSD_AKTIV |
| 0x05 | GSD_PASSIV |
| 0x06 | GSD_MOMENT |
| 0x07 | FUNKTION_7_RESERVE |
| 0x08 | FUNKTION_8_RESERVE |
| 0x09 | FUNKTION_9_RESERVE |

### TAB_ZFM_FUNKTIONSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIV |
| 0x01 | PASSIV |
| 0x02 | NOTLAUF |
| 0x03 | FEHLER |
| 0x04 | MOMENT |
| 0x05 | STATUS_5 |
| 0x06 | STATUS_6 |
| 0xFF | Wert ungültig |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0001 | 0x0002 | 0x0003 | 0x0004 |

### TAB_0X68F1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### TAB_0X69F0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 24 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 |

### TAB_0X69F1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |
