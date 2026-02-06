# ELV_G30.prg

## General

|  |  |
| --- | --- |
| File | ELV_G30.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 118 |
| Origin | BMW EF-414 Markus_Schmidt |
| Revision | 2.020 |
| Author | U-SHIN-DEUTSCHLAND EF-414 Fernandez |
| ECU Comment | Aditional Dummy DTC added |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Lenksäulenverriegelung |  |  |
| ORIGIN | string | BMW EF-414 Markus_Schmidt |  |  |
| REVISION | string | 2.020 |  |  |
| AUTHOR | string | U-SHIN-DEUTSCHLAND EF-414 Fernandez |  |  |
| COMMENT | string | Aditional Dummy DTC added |  |  |
| PACKAGE | string | 1.75 |  |  |
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

### STATUS_EWS

Der Job liefert den SG-internen Zustand der EWS-Funktion. Weitere Details zum Telegramm-Aufbau siehe EWS6-LH.  0xC000 STATUS_EWS

_No arguments._

### STATUS_EWS_KF

Auslesen des KF aus dem SG. Weitere Details zum Telegramm-Aufbau siehe EWS6-LH.  0xC003 STATUS_EWS_KF

_No arguments._

### STEUERN_EWS

Der Job dient zum Ansteuern von EWS-Aktionen. Weitere Details zum Telegramm-Aufbau siehe EWS6-LH.  0xC001 STEUERN_EWS_SK

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Der Parameter MODE legt die durchzuführende Aktion fest. |
| DATA | string | Legt die Daten für die durchzuführende Aktion fest. Folgende Formate müssen unterstützt werden: 01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF und 0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF. |

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X102F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSEMODUS | + | - | 0-n | high | unsigned char | - | PWF_MESSEMODUS | - | - | - | - | - | Das Argument gibt an in welchen Fahrzeugzustand  geschaltet werden soll. |

### ARG_0XA205_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELV_ANSTEUERN | + | - | 0-n | high | unsigned char | - | TAB_STEUERN_ELV_ARG | - | - | - | - | - | Das Argument enthält die durchzuführende ELV-Aktion |

### ARG_0XF785_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_EEPROM_ADRESS | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | Speicheradresse der zu schreibenden Daten |
| SENSOR_EEPROM_KEY | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | nötiger Key zum auslesen eines bestimmten Speicherbereiches |
| SENSOR_EEPROM_DATA | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | zu schreibende Daten  |

### ARG_0XF788_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_MOMORY_ADDRESS_1 | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | erster Teil der Speicheradresen zum Auslesen des Sensorspeichers |
| SENSOR_MOMORY_ADDRESS_2 | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | zweiter Teil der Speicheradresen zum Auslesen des Sensorspeichers |

### ARG_0XF789_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_MEM_WERT | + | - | 0-n | high | unsigned char | - | TAB_ELV_MEM_INIT | - | - | - | - | - | Startet die Initialisierung des Speichers |

### ARG_0XF78A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_SERIAL_NUMBER_DATA | + | - | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UShin ECU Seriennummer |
| STAT_ELV_PROC_STEP_DATA | + | - | 0-n | high | unsigned char | - | TAB_ELV_PROD_STEP | - | - | - | - | - | Durchgeführte Process- und Prüfschritte bei UShin. |
| STAT_ELV_TGS_DATA | + | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Teilegenerationsstand bei UShin |
| STAT_ELV_BMW_SACHNUMMER_DATA | + | - | DATA | high | data[9] | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW Sachnummer |

### ARG_0XF78B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_CLEAR_HISTORYSTORAGE | + | - | 0-n | high | unsigned char | - | TAB_ELV_CLEAR_HISTORY | - | - | - | - | - | Löschen des Inhaltes des Historienspeichers in abhängigkeit des Übergabeparameters |

### ARG_0XFD01_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| USHIN_PROCESS_STEP | 0-n | high | unsigned char | - | TAB_PROC_STEP | - | - | - | - | - | Die Herstellung der ELV und der EOL Test wurden positiv durchlaufen und abgeschlossen. |

### ARG_0XFD02_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCBA_PROCESS_STEP_DATA | 0-n | high | unsigned char | - | TAB_PROD_STEP | - | - | - | - | - | Durchlaufende Prozess-Schritte als iO geprüft bestätigen. ICT,AOI,FCT,Coating etc. |

### ARG_0XFD03_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCBA_PROD_DATE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Herstelldatum der PCBA |
| STAT_PCBA_PN_VALUE_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | interne Produktidentifizierung der PCBA bei IMI - BCD codiert |
| STAT_PCBA_CONSECUTIVE_NUMBER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Seriennummer der PCBA bei IMI, 8 digits, fortlaufende nummer |

### ARG_0XFD05_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_TGS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Teilegenerationsstand (ASCII-Coded) |

### ARG_0XFD06_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_SERIAL_NUMBER_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UShin Seriennummer der ELV |

### ARG_0XFD16_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELV_RESET_DATA | 0-n | high | unsigned char | - | TAB_STAT_ELV_MEM_RESET_VAL | - | - | - | - | - | Definitione der Daten die Rückgesetzt werden sollen. |

### ARG_0XFD19_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_BMW_SACHNUMMER | DATA | high | data[9] | - | - | 1.0 | 1.0 | 0.0 | - | - | BMW Sachnummer der ELV |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026500 | Energiesparmode aktiv | 0 |
| 0x026520 | CAN-Fehler (Sammelfehler) | 0 |
| 0x026521 | EEPROM-Fehler (Sammelfehler) | 0 |
| 0x026523 | Flash Memory Fehler (Sammelfehler) | 0 |
| 0x026526 | Hardwarefehler (Sammelfehler) | 0 |
| 0x026529 | Softwarefehler (Sammelfehler) | 0 |
| 0x02FF65 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x483800 | Elektrische Lenksäulenverriegelung (ELV): Motoransteuerung unplausibel - High Side | 0 |
| 0x483804 | Elektrische Lenksäulenverriegelung (ELV): Motor ohne Funktion | 0 |
| 0x483806 | Elektrische Lenksäulenverriegelung (ELV): Fehler Positionssensor | 0 |
| 0x483807 | Elektrische Lenksäulenverriegelung (ELV): ELV nicht kalibriert | 0 |
| 0x483809 | Elektrische Lenksäulenverriegelung (ELV): keine Entriegelung möglich (Verspannte Lenksäule) | 1 |
| 0x48380A | Elektrische Lenksäulenverriegelung (ELV): keine Entriegelung möglich (verspannte Mechanik) | 0 |
| 0x48380B | Elektrische Lenksäulenverriegelung (ELV): Keine Entriegelung möglich (Authentisierungsfehler) | 0 |
| 0x48380C | Spannungsversorgung - Globale Überspannung extern | 1 |
| 0x48380D | Spannungsversorgung - Globale Überspannung intern | 1 |
| 0x48380E | Spannungsversorgung - Globale Unterspannung extern | 1 |
| 0x48380F | Spannungsversorgung - Globale Unterspannung intern | 1 |
| 0x483810 | Spannungsversorgung - Lokale Überspannung | 0 |
| 0x483811 | Spannungsversorgung - Lokale Unterspannung | 0 |
| 0x483815 | Elektrische Lenksäulenverriegelung (ELV): Watchdog Fehler (Sammelfehler) | 0 |
| 0x483819 | Elektrische Lenksäulenverriegelung (ELV):Spannungsmonitoring Main uC Safety uC (Sammel DTC) | 0 |
| 0x48381B | Elektrische Lenksäulenverriegelung (ELV): Safety uC Verriegel-Bedingung ungültig | 1 |
| 0x48381F | Elektrische Lenksäulenverriegelung (ELV): Motoransteuerung unplausibel - Low Side | 0 |
| 0x483820 | Elektrische Lenksäulenverriegelung (ELV): Motor-Treiber Kurzschluss | 1 |
| 0x483821 | Elektrische Lenksäulenverriegelung (ELV): Keine Aktivierung der Safety Active Leitung seitens des Safety uC | 0 |
| 0x483823 | Elektrische Lenksäulenverriegelung (ELV): Authentisierungsfehler - EWS angelernt und nicht authentisiert (UNLOCK-Trigger) | 1 |
| 0x483824 | Elektrische Lenksäulenverriegelung (ELV): Authentisierungsfehler - EWS angelernt und nicht authentisiert (Fahreraktion) | 1 |
| 0x483825 | Elektrische Lenksäulenverriegelung (ELV): EWS noch nicht angelernt | 1 |
| 0x483826 | Elektrische Lenksäulenverriegelung (ELV): Escape Counter - Zähler im kritischen Bereich | 0 |
| 0x483827 | Elektrische Lenksäulenverriegelung (ELV): Escape Counter - Zähler-Grenze erreicht | 0 |
| 0x483828 | Elektrische Lenksäulenverriegelung (ELV): Communication Error  Main uC - Safety uC | 0 |
| 0x483829 | Elektrische Lenksäulenverriegelung (ELV): Fehler Plausibilisierung Sensorwert | 0 |
| 0x48382A | Elektrische Lenksäulenverriegelung (ELV): Main uc HW/SW Monitor (Sammelfehler) | 0 |
| 0x48382B | Elektrische Lenksäulenverriegelung (ELV): AUTOSAR- Fehler (Sammelfehler) | 0 |
| 0x48382C | Elektrische Lenksäulenverriegelung (ELV): EWS Manipulationsversuch | 0 |
| 0x48382D | Spannungsversorgung - Lokale Überspannung(U_BAT) | 0 |
| 0x48382E | Spannungsversorgung - Lokale Unterspannung (U_BAT) | 0 |
| 0x48387F | Dummy DTC für Kompatibilitaet der SGBD (alte Umweltdaten) | 1 |
| 0xE2440A | FA-CAN Control Module Bus OFF | 0 |
| 0xE24BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE254B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xE254B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xE254BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xE254BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xE254BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xE254FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 |
| 0xE25565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 |
| 0xE2560C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 |
| 0xE25652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Timeout | 1 |
| 0xE2565E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 |
| 0xE25858 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Undefiniert | 1 |
| 0xE25CB1 | Botschaftsfehler (Daten_EWS_7, ID: DT_EWS_7) Timeout | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Hybrid power Managment Zustand | 0-n | High | 0xFF | TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT | - | - | - |
| 0x0002 | SPI_E_HARDWARE_ERROR | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0003 | MCU_E_CLOCK_FAILURE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0004 | ECUM_E_RAM_CHECK_FAILED | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0005 | MCU_E_WRITE_FAILURE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0006 | MCU_E_LVI_FAILURE | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0007 | MCU_E_BURAM_WRITE_FAILURE | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0008 | MCU_E_PORTGROUP_STATUS_BACKUP_FAILURE | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0009 | PORT_E_WRITE_FAILURE | 0/1 | High | 0x0080 | - | - | - | - |
| 0x000A | MCU_E_POWER_DOWN_MODE_FAILURE | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000B | APPL_E_LIN_BUS_ERROR | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000C | APPL_E_FATAL_HARDWARE_ERROR | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000D | APPL_E_MINOR_HARDWARE_FAILURE | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000E | APPL_E_LIN_COMMUNICATION_ERROR | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000F | WDG_E_DISABLE_REJECTED | 0/1 | High | 0x01 | - | - | - | - |
| 0x0010 | WDG_E_MODE_FAILED | 0/1 | High | 0x02 | - | - | - | - |
| 0x0011 | WDGM_E_IMPROPER_CALLER | 0/1 | High | 0x04 | - | - | - | - |
| 0x0012 | WDGM_E_SET_MODE | 0/1 | High | 0x08 | - | - | - | - |
| 0x0013 | WDG_E_TRIGGER_TIMEOUT | 0/1 | High | 0x10 | - | - | - | - |
| 0x0014 | WDGM_E_SUPERVISION | 0/1 | High | 0x20 | - | - | - | - |
| 0x0015 | FEE_E_READ_FAILED | 0/1 | High | 0x01 | - | - | - | - |
| 0x0016 | FEE_E_WRITE_FAILED | 0/1 | High | 0x02 | - | - | - | - |
| 0x0017 | FEE_E_FORMAT_FAILED | 0/1 | High | 0x04 | - | - | - | - |
| 0x0018 | FEE_E_STARTUP_FAILED | 0/1 | High | 0x08 | - | - | - | - |
| 0x0019 | NVM_E_INTEGRITY_FAILED | 0/1 | High | 0x01 | - | - | - | - |
| 0x001A | NVM_E_LOSS_OF_REDUNDANCY | 0/1 | High | 0x02 | - | - | - | - |
| 0x001B | NVM_E_QUEUE_OVERFLOW | 0/1 | High | 0x04 | - | - | - | - |
| 0x001C | NVM_E_REQ_FAILED | 0/1 | High | 0x08 | - | - | - | - |
| 0x001D | NVM_E_VERIFY_FAILED | 0/1 | High | 0x10 | - | - | - | - |
| 0x001E | NVM_E_WRITE_PROTECTED | 0/1 | High | 0x20 | - | - | - | - |
| 0x001F | NVM_E_WRONG_BLOCK_ID | 0/1 | High | 0x40 | - | - | - | - |
| 0x0020 | APPL_E_NO_LCK_H_CMD_EN_ACT | 0/1 | High | 0x01 | - | - | - | - |
| 0x0021 | APPL_E_NO_LCK_H_CMD_COND_ACT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0022 | APPL_E_UNINT_LCK_H_CMD_EN_ACT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0023 | APPL_E_UNINT_LCK_H_CMD_COND_ACT | 0/1 | High | 0x08 | - | - | - | - |
| 0x0029 | APPL_E_SAFETY_UC_UNDER_OR_OVERVOLTAGE | 0/1 | High | 0x01 | - | - | - | - |
| 0x002A | APPL_E_MAIN_UC_UNDER_OR_OVERVOLTAGE | 0/1 | High | 0x02 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x2951 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4007 | BSP_INFO | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | BSP_SENSOR_COEF | HEX | High | unsigned long | - | - | - | - |
| 0x505B | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x505C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x505D | MOT_DIAG_VAL | HEX | High | unsigned int | - | - | - | - |
| 0x505E | VCC | HEX | High | unsigned int | - | - | - | - |
| 0x5060 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x5061 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5063 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5064 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x483824 | Elektrische Lenksäulenverriegelung (ELV): EWS Manipulationsversuch | 1 |
| 0x483830 | Fehler interne Spannungsversorgung: VCC_2 -  Spannungsschwelle überschritten/unterschritten (Safety uC iO) | 0 |
| 0x483831 | Fehler interne Spannungsversorgung: VCC_1 - Spannungsschwelle überschritten/unterschritten | 0 |
| 0x483832 | Fehler interne Spannungsversorgung: VCC_2 - Spannungsschwelle überschritten (Safety uC niO) | 0 |
| 0x48383A | Motoransteuerung unplausibel - Low Side | 0 |
| 0x48383B | Motoransteuerung unplausibel - High Side | 0 |
| 0x48383C | Motoransteuerung unplausibel - High Side | 0 |
| 0x48383D | Motoransteuerung unplausibel - High Side | 0 |
| 0x483840 | Softwarefehler - WDT Modewechsel verhindert | 0 |
| 0x483841 | Softwarefehler - WDG Modewechsel fehlgeschlagen | 0 |
| 0x483842 | Softwarefehler - WDGM unsicherer Aufruf | 0 |
| 0x483843 | Softwarefehler - WDG Treiber fehler | 0 |
| 0x483844 | Softwarefehler - SBC WDG hat Reset ausgeführt | 0 |
| 0x483845 | Softwarefehler - WDGM reset | 0 |
| 0x483846 | Softwarefehler - unerlaubter Speicherzugriff auf ASIL Bereich | 0 |
| 0x483847 | Softwarefehler - OS Fehler | 0 |
| 0x483848 | Softwarefehler - OS shutdown | 0 |
| 0x48384A | Safety uC Verriegelungsbedingungen - ungültig | 0 |
| 0x48384B | Safety uC Verriegelungsbedingungen - Timeout | 0 |
| 0x48384C | Safety uC Verriegelungsbedingungen - SPI Fehler | 0 |
| 0x48384D | Safety uC Verriegelungsbedingungen - ADC Fehler | 0 |
| 0x48384E | Safety uC Verriegelungsbedingungen  - Fehler Konfigurationsregister | 0 |
| 0x48384F | Safety uC Verriegelungsbedingungen (Sammelfehler) - RAM Fehler | 0 |
| 0x483850 | EEPROM-Fehler -  Lesefehler NV-RAM | 0 |
| 0x483851 | EEPROM-Fehler - Schreibfehler NV-RAM | 0 |
| 0x483852 | EEPROM-Fehler - Formatfehler NV-RAM | 0 |
| 0x483853 | EEPROM-Fehler - Startupfehler NV-RAM | 0 |
| 0x483860 | AUTOSAR-Fehler- SPI Treiber Fehler | 0 |
| 0x483863 | AUTOSAR-Fehler - Schreibfehler (geschütztes REG) | 0 |
| 0x483864 | AUTOSAR-Fehler - Spannungsbereichsfehler | 0 |
| 0x483865 | AUTOSAR-Fehler - Schreibfehler (BURAM) | 0 |
| 0x483866 | AUTOSAR-Fehler - Port Group Backup Fehler (BURAM) | 0 |
| 0x483867 | AUTOSAR-Fehler - Schreibfehler (PORT) | 0 |
| 0x483869 | Main uC HW/SW Monitor - Fehler Programmfluß | 0 |
| 0x48386A | Main uC HW/SW Monitor - Fehler Konfig-Reg check | 0 |
| 0x48386B | Main uC HW/SW Monitor - Watchdog reset | 0 |
| 0x48386C | Main uC HW/SW Monitor - Fehler Konfig-Reg Korrektur | 0 |
| 0x48386D | Main uC HW/SW Monitor - Fehler WDG not running | 0 |
| 0x48386E | Main uC HW/SW Monitor - ASIL ROM check failed (startup) | 0 |
| 0x48386F | Flash Memory Fehler - Fehler Integrität NVM | 0 |
| 0x483870 | Flash Memory Fehler - Fehler redundaten Daten | 0 |
| 0x483871 | Flash Memory Fehler- Fehler Überlauf Nachrichtenpuffer | 0 |
| 0x483872 | Flash Memory Fehler - Fehler Wiederherstellung bei Speicherzugriff | 0 |
| 0x483873 | Flash Memory Fehler - Fehler schreiben in NvM | 0 |
| 0x483874 | Flash Memory Fehler: Fehler Schreibschutz NvM | 0 |
| 0x483875 | Flash Memory Fehler: Fehler falsche NvM Block ID | 0 |
| 0x483876 | Main uC HW/SW Monitor - QM ROM check fehler (startup) | 0 |
| 0x483877 | Main uC HW/SW Monitor - RAM check failed | 0 |
| 0x483878 | Main uC HW/SW Monitor - Prozessortakt fehler | 0 |
| 0x483879 | Main uC HW/SW Monitor - MDU Selbstcheck Fehler | 0 |
| 0x48387A | Main uC HW/SW Monitor - WDT Selbstcheck Fehler | 0 |
| 0x48387B | Main uC HW/SW Monitor (Sammelfehler) - DIS Test Fehler | 0 |
| 0x48387C | Main uC HW/SW Monitor - Main uC ADC Fehler | 0 |
| 0x48387F | Dummy DTC für Kompatibilitaet der SGBD (alte Umweltdaten) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Hybrid power Managment Zustand | 0-n | High | 0xFF | TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT | - | - | - |
| 0x0002 | SPI_E_HARDWARE_ERROR | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0003 | MCU_E_CLOCK_FAILURE | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0004 | ECUM_E_RAM_CHECK_FAILED | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0005 | MCU_E_WRITE_FAILURE | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0006 | MCU_E_LVI_FAILURE | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0007 | MCU_E_BURAM_WRITE_FAILURE | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0008 | MCU_E_PORTGROUP_STATUS_BACKUP_FAILURE | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0009 | PORT_E_WRITE_FAILURE | 0/1 | High | 0x0080 | - | - | - | - |
| 0x000A | MCU_E_POWER_DOWN_MODE_FAILURE | 0/1 | High | 0x0100 | - | - | - | - |
| 0x000B | APPL_E_LIN_BUS_ERROR | 0/1 | High | 0x0200 | - | - | - | - |
| 0x000C | APPL_E_FATAL_HARDWARE_ERROR | 0/1 | High | 0x0400 | - | - | - | - |
| 0x000D | APPL_E_MINOR_HARDWARE_FAILURE | 0/1 | High | 0x0800 | - | - | - | - |
| 0x000E | APPL_E_LIN_COMMUNICATION_ERROR | 0/1 | High | 0x1000 | - | - | - | - |
| 0x000F | WDG_E_DISABLE_REJECTED | 0/1 | High | 0x01 | - | - | - | - |
| 0x0010 | WDG_E_MODE_FAILED | 0/1 | High | 0x02 | - | - | - | - |
| 0x0011 | WDGM_E_IMPROPER_CALLER | 0/1 | High | 0x04 | - | - | - | - |
| 0x0012 | WDGM_E_SET_MODE | 0/1 | High | 0x08 | - | - | - | - |
| 0x0013 | WDG_E_TRIGGER_TIMEOUT | 0/1 | High | 0x10 | - | - | - | - |
| 0x0014 | WDGM_E_SUPERVISION | 0/1 | High | 0x20 | - | - | - | - |
| 0x0015 | FEE_E_READ_FAILED | 0/1 | High | 0x01 | - | - | - | - |
| 0x0016 | FEE_E_WRITE_FAILED | 0/1 | High | 0x02 | - | - | - | - |
| 0x0017 | FEE_E_FORMAT_FAILED | 0/1 | High | 0x04 | - | - | - | - |
| 0x0018 | FEE_E_STARTUP_FAILED | 0/1 | High | 0x08 | - | - | - | - |
| 0x0019 | NVM_E_INTEGRITY_FAILED | 0/1 | High | 0x01 | - | - | - | - |
| 0x001A | NVM_E_LOSS_OF_REDUNDANCY | 0/1 | High | 0x02 | - | - | - | - |
| 0x001B | NVM_E_QUEUE_OVERFLOW | 0/1 | High | 0x04 | - | - | - | - |
| 0x001C | NVM_E_REQ_FAILED | 0/1 | High | 0x08 | - | - | - | - |
| 0x001D | NVM_E_VERIFY_FAILED | 0/1 | High | 0x10 | - | - | - | - |
| 0x001E | NVM_E_WRITE_PROTECTED | 0/1 | High | 0x20 | - | - | - | - |
| 0x001F | NVM_E_WRONG_BLOCK_ID | 0/1 | High | 0x40 | - | - | - | - |
| 0x0024 | APPL_E_LIN_BUS_ERROR | 0/1 | Low | 0x01 | - | - | - | - |
| 0x0025 | APPL_E_FATAL_HARDWARE_ERROR | 0/1 | High | 0x02 | - | - | - | - |
| 0x0026 | APPL_E_MINOR_HARDWARE_FAILURE | 0/1 | High | 0x04 | - | - | - | - |
| 0x0027 | APPL_E_LIN_COMMUNICATION_ERROR | 0/1 | High | 0x08 | - | - | - | - |
| 0x0028 | CANSM_E_BUS_OFF | 0/1 | High | 0x01 | - | - | - | - |
| 0x0029 | APPL_E_SAFETY_UC_UNDER_OR_OVERVOLTAGE | 0/1 | High | 0x01 | - | - | - | - |
| 0x002A | APPL_E_MAIN_UC_UNDER_OR_OVERVOLTAGE | 0/1 | High | 0x02 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x2951 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4007 | BSP_INFO | TEXT | High | 28 | - | 1.0 | 1.0 | 0.0 |
| 0x5057 | UWB_ERROR_NVM_BLOCK_1 | HEX | High | unsigned long | - | - | - | - |
| 0x5058 | UWB_ERROR_NVM_BLOCK_2 | HEX | High | unsigned long | - | - | - | - |
| 0x5059 | UWB_ERROR_NVM_BLOCK_3 | HEX | High | unsigned long | - | - | - | - |
| 0x505A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x505C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x505D | MOT_DIAG_VAL | HEX | High | unsigned int | - | - | - | - |
| 0x505E | VCC | HEX | High | unsigned int | - | - | - | - |
| 0x505F | EVENT_VALUE | HEX | High | unsigned char | - | - | - | - |
| 0x5060 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x5061 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5062 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5063 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5064 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROCESS_CLASS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | Hardware (Elektrik) |
| 2 | Hardwareausprägung |
| 3 | Hardwarefarbe |
| 5 | Codierdate (CAF) |
| 6 | Bootloader |
| 7 | Flashloader Slave |
| 8 | Software ECU-Speicherimage |
| 9 | Flash File Software |
| 10 | Prüfsoftware |
| 11 | Programmiersystem |
| 12 | Interaktive Betriebsanleitung Daten |
| 15 | FA2FP |
| 16 | FreischaltecodeFzgAuftrag |
| 26 | Temporaere Loesch Routing |
| 27 | Temporäre Programmier Routing |
| 160 | Entertainment Daten |
| 161 | Navigation Daten |
| 162 | FreischaltecodeFunktion |
| 255 | reserved |

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | MESSEMODUS_NICHT_AKTIV |
| 0x01 | MESSEMODUS_AKTIV |
| 0xFF | Wert ungültig |

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

### RES_0XA205_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_AUSFUEHRUNGSSTATUS | + | - | - | 0-n | high | unsigned char | - | TAB_ELV_AUSFUEHRUNGSSTATUS | - | - | - | Das Ergebnis liefert bei der  Ausführung der angeforderten Aktion u.U. aufgetretene Fehler. Hinweis:  Es wird nur der erste aufgetretene Fehler zurückgeliefert  |
| STAT_AUSFUERUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_ELV_AUSFUEHRUNGSSTATUS | - | - | - | Ausführungsstatus laut Tabelle TAB_ELV_AUSFUERUNGSSTATUS |

### RES_0XF781_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIBRATION_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ELV_KALIBRIERUNG | - | - | - | Gibt es Status der Kalibrierroutine zurück |

### RES_0XF782_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_EEPROM_READ | - | - | + | 0-n | high | unsigned char | - | STAT_TAB_SENSOR_READ_MEMORY | - | - | - | Status der Routine des Auslesevorganges der ELV aus dem EEPROM |

### RES_0XF785_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_EEPROM_READ | - | - | + | 0-n | high | unsigned char | - | STAT_TAB_SENSOR_READ_MEMORY | - | - | - | Status der Routine des Auslesevorganges der ELV aus dem EEPROM |

### RES_0XF788_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_READ_RESULT | - | - | + | 0-n | high | unsigned char | - | STAT_TAB_SENSOR_READ | - | - | - | Ergebnis des Leseprozesses der ELV aus dem Sensorspeicher |

### RES_0XF789_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEM_INIT_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_MEM_INIT_RESULT | - | - | - | Gibt das ergebniss der Routine der Initialisierung des Speichers zurück. |

### RES_0XF78A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROD_DATA_WRITE_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_PROD_DATA_WRITE_PROCESS | - | - | - | Ergebnis der Schreibrouting der Produktionsdaten der ELV |

### RES_0XF78B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HISTORYSTORAGE_CLEAR_PROCESS | - | - | + | 0-n | high | unsigned char | - | TAB_ELV_CLEAR_HISTORY_PROCESS | - | - | - | Gibt den Status des Löschprozesses des Historienspeichers der ELV zurück |

### RES_0XFD01_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROCESS_STEP_ELV | 0-n | high | unsigned char | - | TAB_ELV_PROC_STEP | - | - | - | Prüfschritte bei UShin erfolgreich abgeschlossen |

### RES_0XFD02_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCBA_PROCESS_STEP | 0-n | high | unsigned char | - | TAB_PCBA_PROD_STEP | - | - | - | Prüfschritte beim Leiterplatten-Lieferant erfolgreich abgeschlossen ( ICT,AOI,FCT, flashing, coting etc. ) |

### RES_0XFD04_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PCBA_PROD_DATE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Herstelldatum der PCBA |
| STAT_PCBA_PN_WERT_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Interne Produktidentifizierung der PCBA bei IMI - BCD codiert |
| STAT_PCBA_CONSECUTIVE_NUMBER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer der PCBA bei IMI, 8 digits, fortlaufende nummer |
| STAT_BMW_HW_SGBM_ID_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Hardware Index der PCBA |

### RES_0XFD05_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_TGS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Teilegenerationsstand der ELV |

### RES_0XFD06_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_SERIAL_NUMBER_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | UShin Seriennummer der ELV |

### RES_0XFD07_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PROC | 0-n | high | unsigned char | - | STAT_TAB_SENSOR_READ | - | - | - | Status des Auslesevorgangs |
| STAT_SENSOR_MEMORY_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Daten aus dem Speicher des Hall Sensors Teil 1 |
| STAT_SENSOR_MEMORY_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Daten aus dem Speicher des Hall Sensors Teil 2 |

### RES_0XFD08_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PROC | 0-n | high | unsigned char | - | TAB_STAT_SENSORS_READ | - | - | - | Status des Auslesevorganges |
| STAT_SENSOR_EEPROM_LENGH_WERT | HEX | high | unsigned int | - | - | - | - | - | Länge der ausgelesenen Daten |
| STAT_SENSOR_EEPROM_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Ausgelesene Daten aus dem EEPROM des Hall Sensors |

### RES_0XFD09_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_RAW_ANGLE_WERT | HEX | high | unsigned long | - | - | - | - | - | 14 Bits RAW Wert des Sensors |
| STAT_SENSOR_CAL_ANGLE_WERT | HEX | high | unsigned long | - | - | - | - | - | kalibrierter 32 Bit Sensorwert inkl. Korrektur |

### RES_0XFD0A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LCK_BRAKE_COEF_WERT | HEX | high | unsigned char | - | - | - | - | - | Coeffizient für die Gewichtung der Geschwindigkeit für die Bremspunktbestimmung in Entriegelungsrichtung. (ms) |
| STAT_LCK_BRAKE_POS_WERT | HEX | high | unsigned long | - | - | - | - | - | Konstante zur Ermittlung des Bremspunkts in Verriegelungssrichtung. Referenzwinkel für die Bremsposition (LSB=360*2^-16) (° Grad) |
| STAT_UNL_BRAKE_COEF_WERT | HEX | high | unsigned char | - | - | - | - | - | Coeffizient für die Gewichtung der Geschwindigkeit für die Bremspunktbestimmung in Entriegelungsrichtung. (ms) |
| STAT_UNL_BREAK_POS_WERT | HEX | high | unsigned long | - | - | - | - | - | Konstante zur Ermittlung des Bremspunkts in Entriegelungssrichtung. Referenzwinkel für die Bremsposition (LSB=360*2^-16) (° Grad) |

### RES_0XFD0F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_SERIAL_NUMBER_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | UShin ECU Seriennummer + test equipment ASCII + consecutive number + shift + production date |
| STAT_ELV_PROC_STEP_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Durchgeführte Prozess - und Prüfschritte bei UShin |
| STAT_ELV_TGS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Teilegenerationsstand bei UShin |
| STAT_ELV_BMW_SACHNUMMER_DATA | DATA | high | data[9] | - | - | 1.0 | 1.0 | 0.0 | BMW Sachnummer |

### RES_0XFD10_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INV_CALIBRATION_WERT | HEX | high | unsigned int | - | - | - | - | - | Invertierter Wert zur Korrektur der Sensorwerte |
| STAT_ELV_CALIBRATION_WERT | HEX | high | unsigned int | - | - | - | - | - | Wert zur Korrektur der Sensorwerte |

### RES_0XFD11_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_SERIAL_NUMBER_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer der ELV |
| STAT_ELV_PROC_STEP_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Durchgeführte Process- und Prüfschritte bei UShin. |
| STAT_ELV_TGS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Teilegenerationsstand bei Ushin |
| STAT_PCBA_PROD_DATE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Herstelldatum der PCBA |
| STAT_PCBA_PN_WERT_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Interne Produktidentifizierung der PCBA bei IMI - BCD codiert |
| STAT_PCBA_CONSECUTIVE_NUMBER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer der PCBA bei IMI, 8 digits, fortlaufende nummer |
| STAT_PCBA_PROCESS_STEP_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Prüfschritte beim Leiterplatten-Lieferant erfolgreich abgeschlossen ( ICT,AOI,FCT, flashing, coting etc. ) |

### RES_0XFD13_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_HW_VERSION | 0-n | high | unsigned char | - | - | - | - | - | Sensor Hardware Version |
| STAT_SENSOR_SW_VERSION | 0-n | high | unsigned char | - | - | - | - | - | Sensor Software Version  |
| STAT_SENSOR_STATUS_WERT | HEX | high | unsigned char | - | - | - | - | - | Sensor State |
| STAT_SENSOR_RESERVED_VALUE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserverd 0  |
| STAT_SENSOR_RESERVED_VALUE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserverd 1  |
| STAT_SENSOR_RESERVED_VALUE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserverd 2  |
| STAT_SENSOR_RAW_ANGLE_WERT | ° | high | unsigned long | - | - | 360.0 | 16383.0 | 0.0 | No zero-point correction. Unsigned scaled: LSB=360x2^-16 [degree] |
| STAT_SENSOR_CALC_ANGLE_WERT | ° | high | unsigned long | - | - | 360.0 | 16383.0 | 0.0 | Zero-point corrected. Unsigned scaled: LSB=360x2^-16 [degree] |
| STAT_SENSOR_SPEED_WERT | °/s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 |  Signed scaled: LSB=360x2^-16 [degree/s] |
| STAT_SENSOR_FAIL_SAFE_REPORT_WERT | HEX | high | unsigned char | - | - | - | - | - | Fail Save Report des Sensors |
| STAT_SENSOR_INTERNAL_FAULT_WERT | HEX | high | unsigned long | - | - | - | - | - | Internal Fault Information |

### RES_0XFD19_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_BMW_SACHNUMMER_DATA | DATA | high | data[9] | - | - | 1.0 | 1.0 | 0.0 | BMW Sachnummer |

### RES_0XFD1B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOCK_CYCLE_COUNT_WERT | HEX | high | unsigned long | - | - | - | - | - | Gesamtwert des LOCK/UNLOCK Zyklenzähler der ELV |
| STAT_TIMESTAMP_FIRST_EWS_TRAINING_WERT | HEX | high | unsigned long | - | - | - | - | - | Systemzeit des ersten erfolgreichen Anlernens (Werk BMW) in Sekunden. |
| STAT_TIMESTAMP_LAST_EWS_TRAINING_WERT | HEX | high | unsigned long | - | - | - | - | - | Systemzeit des letzten erfolgreichen Anlernens (Werk BMW oder Feld) |
| STAT_TIMESTAMP_FIRST_UNLOCK_WERT | HEX | high | unsigned long | - | - | - | - | - | Systemzeit des ersten erfolgreichen UNLOCK nach dem ersten erfolgreichen Anlernen (Werk BMW) in Sekunden. |
| STAT_RETRY_COUNT_BLOCKING_SC_WERT | HEX | high | unsigned long | - | - | - | - | - | Anzahl Wiederholstrategie bei verspannter Lenksäule |
| STAT_HISTORYSTORAGE_DEL_COUNT_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Löschvorgänge des UShin Historienspeicher + Systemzeit des letzten erfolgreichen Löschvorganges in Sekunden |
| STAT_UNLOCK_TRIGGER_COUNT_EWS_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | UNLOCK Trigger bei angelernter, aber nicht authentifizierter EWS. Auch bei gesperrter EWS. Zähler + Systemzeit in Sekunden |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 1/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_1_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 2/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_2_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 3/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_3_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 4/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_4_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 5/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_5_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 6/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_6_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 7/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_7_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 8/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_8_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 9/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_RETRY_WHILE_BLOCKED_SC_9_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 10/10 Wiederholstrategien bei verspannter Lenksäule mit Systemzeit in Sekunden und Kilometerstand. |
| STAT_RINGBUFFER_FAILED_ACTIVATION_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 1/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_1_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 2/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_2_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 3/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_3_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 4/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_4_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 5/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_5_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 6/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_6_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 7/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_7_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 8/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_8_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 9/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_9_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 10/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_10_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 11/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_11_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 12/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_12_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 13/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_13_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 14/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_14_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 15/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_15_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 16/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_16_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 17/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_17_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 18/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_18_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 19/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |
| STAT_RINGBUFFER_FAILED_ACTIVATION_19_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | Die letzten 20/20 fehlgeschlagenen Verfahrversuche inkl. Retry (LOCK & UNLOCK) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | High | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_ELV | 0xA205 | - | Ansteuerung ELV - Verriegelung oder Entriegelung  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA205_R | RES_0xA205_R |
| ELV_VERRIEGELUNGSSTATUS | 0xD6F6 | STAT_ELV_ZUSTAND | Aktueller Verriegelungs-/Entriegelungszustand der ELV | 0-n | - | High | unsigned char | TAB_ELV_ZUSTAND | - | - | - | - | 22 | - | - |
| ESCAPE_COUNTER | 0xDAF1 | STAT_ESCAPE_COUNTER | Werte von 0 bis 8 möglich.  Dem ELV-ESC ist keine direkte Anzeige einer CCM zu zuordnen. Die Fehlerreaktionen und Anzeige der CCM sind den Fehlerursachen (DTCs) zugeordnet. Bei ELV-ESC = 6 oder 7 darf die ELV nicht mehr verriegelt werden. Bei ELV-ESC größer oder = 8 muss der ELV-Status auf ungültig gesetzt werden. | 0-n | - | High | unsigned char | TAB_ESCAPE_COUNTER | - | - | - | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _ELV_CALIBRATION_PROCESS | 0xF781 | - | Routine der automatischen Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF781_R |
| _SENSOR_EEPROM_READ | 0xF782 | - | Ausleseroutine des Sensorspeichers (EEPROM) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF782_R |
| _SENSOR_EEPROM_DATA_WRITE | 0xF785 | - | Schreibroutine des Sensorspeichers (EEPROM) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF785_R | RES_0xF785_R |
| _SENSOR_MEMORY_DATA_READ | 0xF788 | - | Auslesevorgang des Sensorspeichers (RAM,ROM,EEPROM) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF788_R | RES_0xF788_R |
| _ELV_MEM_INIT_PROCESS | 0xF789 | - | Startet die Routine der Initialisierung noch nicht initialisierter Speicherblöcke. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF789_R | RES_0xF789_R |
| _ELV_PROD_DATA_WRITE | 0xF78A | - | Produktionsdaten bei UShin schreiben | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF78A_R | RES_0xF78A_R |
| _USHIN_HISTORYSTORAGE_CLEAR | 0xF78B | - | Löscht den Inhalt des Historienspeichers und inkrementiert den Löschzähler. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF78B_R | RES_0xF78B_R |
| _ELV_CALIBRATION_PROCESS_RESULT | 0xFD00 | STAT_ELV_CALIBRATION_STATUS | Status der aktuellen Kalibrierung | 0-n | ELV_StatTableCal | High | unsigned char | STAT_TABLE_CALIBRATION | - | - | - | - | 22 | - | - |
| _ELV_PROCESS_STEP | 0xFD01 | - | Prozess-Schritte bei UShin | - | ECU_ProcessStep | - | - | - | - | - | - | - | 2E;22 | ARG_0xFD01_D | RES_0xFD01_D |
| _PCBA_PROCESS_STEP | 0xFD02 | - | erfolgreich abgeschlossenen Prozessschritte bei der Platinenherstellung | - | PCBA_ProcessStepTab | - | - | - | - | - | - | - | 22;2E | ARG_0xFD02_D | RES_0xFD02_D |
| _PCBA_PROD_DATA | 0xFD03 | - | Produktionsdaten des PCBA Herstellers | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD03_D | - |
| _PCBA_PROD_DATA_READ | 0xFD04 | - | Liest die Produktionsdaten der ELV aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD04_D |
| _ELV_TGS_DATA | 0xFD05 | - | Teilegenerationsstand bei UShin | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD05_D | RES_0xFD05_D |
| _ELV_SERIAL_NUMBER | 0xFD06 | - | UShin Seriennmmer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xFD06_D | RES_0xFD06_D |
| _SENSOR_MEMORY_DATA_READ_RESULT | 0xFD07 | - | Speicher Daten des Hall Sensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD07_D |
| _SENSOR_EEPROM_READ_RESULT | 0xFD08 | - | Liefert den Status und Rückgabewerte des Auslesevorganges des Sensorspeichers (EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD08_D |
| _ELV_ROTATION_ANGLE | 0xFD09 | - | Aktuelle Drehwinkelinformationen des Sensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD09_D |
| _ELV_MOVEMENT_PARAMETER | 0xFD0A | - | Parameter für die Motoransteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD0A_D |
| _ELV_PROD_DATA_READ | 0xFD0F | - | Produktionsdaten bei UShin lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD0F_D |
| _ELV_CALIBRATION_VALUE | 0xFD10 | - | Korrekturwert für die Sensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD10_D |
| _ELV_VK_READ | 0xFD11 | - | Alle Herstellinformationen der ELV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD11_D |
| _SENSOR_EEPROM_DATA_WRITE_RESULT | 0xFD12 | STAT_SENSOR_PROC | Status des Auslesevorganges | 0-n | SENSOR_StatTabReadEE | High | unsigned char | STAT_TAB_SENSOR_READ_MEMORY | - | - | - | - | 22 | - | - |
| _SENSOR_INFO_DATA_READ | 0xFD13 | - | detaillierte Informationen vom Hall-Sensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD13_D |
| _ELV_MEM_DATA_WRITE | 0xFD16 | - | dedizierte Daten, die geschrieben werden sollen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xFD16_D | - |
| _PCBA_PROD_DATE_READ | 0xFD17 | STAT_PCBA_PROD_DATE_DATA | Herstelldatum der PCBA | DATA | PCBA_ManufactoringDate | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _ELV_MEM_INIT_RESULT | 0xFD18 | STAT_INIT_MEM_RESULT | Ergebnis der Speicherinitialisierung | 0-n | ELV_InitMemResultTab | High | unsigned char | TAB_MEM_INIT_RESULT | - | - | - | - | 22 | - | - |
| _ELV_BMW_SACHNUMMER | 0xFD19 | - | BMW Sachnummer | - | ELV_BMWSachnummer | - | - | - | - | - | - | - | 22;2E | ARG_0xFD19_D | RES_0xFD19_D |
| _ELV_LOCK_CYCLE_COUNT | 0xFD1A | STAT_CYCLE_COUNT_WERT | Rückgabe der Anzahl ausgeführter Verriegelungszyklen seid Produktion | HEX | ELV_LockCycleCount | High | unsigned int | - | - | - | - | - | 22 | - | - |
| _USHIN_HISTORYSTORAGE_READ_RESULT | 0xFD1B | - | Liest den gesamten Speicherbereich der Historiendaten aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD1B_D |

### STATES_OF_JOB

| WERT | TEXT |
| --- | --- |
| 1 | OK |
| 2 | NOK (bei nicht kalibriertem Sensor) |
| 0xFF | Wert ungültig |

### STAT_TABLE_CALIBRATION

| WERT | TEXT |
| --- | --- |
| 0x01 | Die Kalibrierung wurde erfolgreich durchgeführt. OK |
| 0x02 | Die ELV ist an ein BDC angelernt. Bitte erst das angelernte BDC 'entlernen'. Keine Kalibrieung möglich. |
| 0x03 | Es ist eine zu hohe/niedrige Eingangsspannung festgestellt worden. Bitte korrigieren Sie den Wert der Spannung auf 12V +/-100mv. Es ist keine Kalibrierung möglich. |
| 0x04 | Der Sensor hat während der Kalibrierung einen Fehler gemeldet.  Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x05 | Die H-Brückendiagnose hat während der Kalibrierung einen Fehler gemeldet. Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x06 | Der Sensor hat keine plausiblen Werte geliefert.  Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x07 | Die Kalibrierinformationen befinden sich nicht im erwarteten Bereich. Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x08 | Die Kalibrierinformationen konnten nicht gespeichert werden. Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x09 | Es ist ein unerwarteter Timeout beim Kalibrieren aufgetreten.  Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x0A | Der Kalibriervorgang ist noch in Ausführung. Bitte warten bis Vorgang abgeschlossen ist. |
| 0x0B | Die LOCK-Bedingungen (Konditions) wurden nicht erkannt.  Kalibrierung abgebrochen. Bitte wiederholen. |
| 0x0C | Bei der Kalibrierung wuede der min. Verfahrweg von 300° nicht eingehalten. Kalibrierung abgebrochen. Bitte wiederholen. |
| 0xEE | Es ist ein unbekannter Fehler aufgetreten. Kalibrierung abgebrochen. Bitte wiederholen. |
| 0xFF | Wert ungültig |

### STAT_TAB_SENSOR_READ

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorgang in Arbeit |
| 0x02 | Fertig, iO |
| 0x04 | Fehler beim Auslesen des Sensor EEPROMs. Sensor meldet fehler. |
| 0x08 | Fehler beim Auslesen des Sensor EEPROMs. Kommunikationsfehler Sensor |
| 0x10 | Fehler beim Auslesen des Sensor EEPROMs. Main uC meldet fehler |
| 0x20 | falscher Addressbereich erkannt |
| 0x40 | falsche Bytelaenge der Adresse erkannt |
| 0xFF | Wert ungültig |

### STAT_TAB_SENSOR_READ_MEMORY

| WERT | TEXT |
| --- | --- |
| 0x01 | iO, keine Fehler |
| 0x02 | Main uC, Verarbeitungsfehler |
| 0x03 | Main/Sensor, Kommunikationsfehler |
| 0x04 | Sensorfehler, Schreiben/Löschen des Speichers fehlgeschlagen |
| 0x05 | Sensorfehler, schreiben/löschen des CRC fehlgeschlagen |
| 0x06 | Sensorfehler, Key für Speicherzelle ungültig |
| 0x07 | Sensorfehler, Challenge fehlgeschlagen |
| 0x08 | Sensorfehler, ungerade Adresse erkannt |
| 0xFF | Wert ungültig |

### STAT_TAB_SENSOR_WRITE

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorgang noch nicht abgeschlossen. Bitte warten |
| 0x02 | Vorgang abgeschlossen. iO |
| 0x04 | Sensor meldet Fehler, niO |
| 0x08 | Kommunikationsfehler, niO |
| 0x10 | Main uC meldet Fehler, niO |
| 0xFF | Wert ungültig |

### TAB_CALIBRATION_STAUTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung erfolgreich angestoßen |
| 0x0E | Unbekannter Fehler |
| 0xFF | Wert nicht gültig |

### TAB_ELV_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Erfolgreich verfahren / kein Fehler aufgetreten |
| 1 | Fahrzeug nicht im stillstandnahen Bereich |
| 2 | Ungültiger / Unzulässiger PWF-Zustand |
| 3 | Keine Funktionsfreigabe aufgrund fehlender EWS-Freigabe |
| 4 | Verspannte Lenksäule |
| 5 | Verriegelung gerade im Gange |
| 6 | Entriegelung gerade im Gange |
| 7 | Keine Funktionsfreigabe aufgrund Escape-Counter |
| 8 | Spannungsbedingungen nicht erfüllt |
| 9 | Hardware-Fehler |
| 10 | Unbekannter ELV-Fehler |
| 255 | Wert ungültig |

### TAB_ELV_CALIBRATIONSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Calibration successful |

### TAB_ELV_CLEAR_HISTORY

| WERT | TEXT |
| --- | --- |
| 0x95 | Löscht den Inhalt des Historienspeichers. Löscht nicht den Löschzähler sonder inkrementiert diesen. |
| 0x6A | Setzt den Löschzähler des Historienspeichers zurück |

### TAB_ELV_CLEAR_HISTORY_PROCESS

| WERT | TEXT |
| --- | --- |
| 0x01 | Löschen des Historienspeichers erfolgreich abgeschlossen |
| 0x02 | Es konnten nicht alle Einträge des Historienspeichers gelöscht werden. Bitte wiederholen Sie den Vorgang. |
| 0x04 | Es ist ein Timeout beim Löschen des Historienspeichers aufgetreten. Bitte wiederholen Sie den Vorgang |
| 0xFF | Wert ungültig |

### TAB_ELV_MEM_INIT

| WERT | TEXT |
| --- | --- |
| 0x69 | Starten der Initialisieung |

### TAB_ELV_PROC_STEP

| WERT | TEXT |
| --- | --- |
| 0x22 | EOL passed |
| 0x44 | SCR passed |
| 0x66 | EOL & SCR passed |
| 0xFF | Wert ungültig |

### TAB_ELV_PROD_STEP

| WERT | TEXT |
| --- | --- |
| 0x22 | EOL passed, OK |
| 0x44 | Screening passed, OK |

### TAB_ELV_RESET_STAT

| WERT | TEXT |
| --- | --- |
| 1 | fertig, iO |
| 2 | in Bearbeitung, bitte warten |
| 3 | Fehler beim Speichern. Der Wert konnte nicht geändert werden |
| 0xFF | Wert ungültig |

### TAB_ELV_SERIALNUMBER_WRITE

| WERT | TEXT |
| --- | --- |
| 0x5A | JA |
| 0xFF | Wert ungültig |

### TAB_ELV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelungsvorgang aktiv |
| 2 | Verriegelt |
| 3 | Entriegelungsvorgang aktiv |
| 13 | Unplausibler Zustand - nicht sicher bestimmbar |
| 14 | Sicherheitskritscher Fehler erkannt |
| 15 | Initialisierungs-Zustand beim Hochstarten |
| 0xFF | Wert ungültig |

### TAB_ENDZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x01 | ELV verriegelt |
| 0x02 | ELV entriegelt |
| 0xFF | Wert ungültig |

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

### TAB_ESCAPE_COUNTER

| WERT | TEXT |
| --- | --- |
| 0xF0 | Zähler = 0 |
| 0xE1 | Zähler = 1 |
| 0xD2 | Zähler = 2 |
| 0xC3 | Zähler = 3 |
| 0xB4 | Zähler = 4 |
| 0xA5 | Zähler = 5 |
| 0x96 | Zähler = 6, ELV darf nicht mehr verriegelt werden |
| 0x87 | Zähler = 7, ELV darf nicht mehr verriegelt werden |
| 0x78 | Zähler = 8, ELV legt Fahrzeug still |
| 0xFF | Ungültig |

### TAB_EWS_CLIENT_AUTH

| WERT | TEXT |
| --- | --- |
| 0 | Freigabe (noch) nicht erteilt (noch nicht versucht, oder Kommunikation gestört) |
| 1 | Freigabe erteilt (Authentisierung erfolgreich) |
| 2 | Freigabe abgelehnt (Authentisierung fehlgeschlagen) |
| 0xFF | Wert ungültig |

### TAB_EWS_CLIENT_LOCKED

| WERT | TEXT |
| --- | --- |
| 0 | Nicht angelernt |
| 1 | angelernt und verriegelt |
| 0xFF | Wert ungültig |

### TAB_EWS_DH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | DH-Abgleich läuft nicht |
| 1 | DH-Abgleich läuft gerade |
| 0xFF | Wert ungültig |

### TAB_EWS_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 17 | UNLOCK_CLIENT |

### TAB_EWS_VERSION

| WERT | TEXT |
| --- | --- |
| 0x23 | EWS6 mit DH |
| 0x24 | EWS6 mit DH-E |
| 0xFF | Wert ungültig |

### TAB_MEM_INIT_RESULT

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorgang noch nicht abgeschlossen. Bitte warten ... |
| 0x02 | Vorgang abgeschlossen, keine Fehler. iO |
| 0x04 | Fehler bei der Initialisierung, niO |
| 0xFF | Wert ungültig |

### TAB_PCBA_PROD_STEP

| WERT | TEXT |
| --- | --- |
| 0x11 | All Tests passed |
| 0x00 | No Tests passed |
| 0xFF | Wert ungültig |

### TAB_PROC_STEP

| WERT | TEXT |
| --- | --- |
| 0x22 | EOL passed |
| 0x44 | SCR passed |

### TAB_PROD_DATA_WRITE_PROCESS

| WERT | TEXT |
| --- | --- |
| 0x01 | Prozess erfolgreich beendet |
| 0x02 | Prozess nicht erfolgreich beendet. FEHLER. Daten wurden nicht geschrieben. |
| 0xFF | Wert ungültig |

### TAB_PROD_STEP

| WERT | TEXT |
| --- | --- |
| 0x11 | alle Tests bestanden |

### TAB_PROZESSSCHRITT

| WERT | TEXT |
| --- | --- |
| 0x01 | Prozesschritt 1 durchgeführt (IMI) |
| 0x02 | Prozesschritt 2 durchgeführt (U-SHIN) |
| 0x03 | Prozesschritt 2 durchgeführt (ZF) |

### TAB_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahren |
| 0x01 | Wohnen |
| 0x02 | Parken |
| 0x03 | Prüfen Analyse Diagnose |
| 0x04 | Parken BN niO |
| 0x05 | Parken BN iO |
| 0x06 | Standfunktion Kunde nicht im Fahrzeug |
| 0x07 | Fahrbereitschaft herstellen |
| 0x08 | Fahrbereitschaft beenden |
| 0xFF | Wert ungültig |

### TAB_SERIAL_NUMBER_AND_AI

| WERT | TEXT |
| --- | --- |
| 2048 | Serial number (0-2048) |
| 32 | AI number |
| 0xFFFF | Wert ungültig |

### TAB_STATUS_ELV_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung OK |
| 0x01 | Kalibrierung NOK |
| 0x02 | Kalibrierung in Progress |
| 0xFF | Wert ungültig |

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

### TAB_STAT_ELV_MEM_RESET_VAL

| WERT | TEXT |
| --- | --- |
| 0x11 | UShin_Process_Step_Value |
| 0x22 | IMI_Process_Step_Value |
| 0xCC | Calibration_Vaule_Invalid |

### TAB_STAT_SENSORS_READ

| WERT | TEXT |
| --- | --- |
| 0x01 | iO, kein Fehler |
| 0x02 | Main uC, Verarbeitungsfehler |
| 0x03 | Main/Sensor, Kommunikationsfehler |
| 0x04 | Sensor, Speicherzugriff Fehler |
| 0xFF | Wert ungültig |

### TAB_STAT_SENSOR_READ_VAL

| WERT | TEXT |
| --- | --- |
| 1 | fertig, in Ordnug |
| 2 | in Bearbeitung, bitte warten |
| 3 | Es ist ein Fehler beim Lesen aufgetreten. Wert steht nicht zur Verfügung |
| 0xFF | Wert ungültig |

### TAB_STAT_WRITE_DATA

| WERT | TEXT |
| --- | --- |
| 1 | ferting, i.O. |
| 2 | in Bearbeitung |
| 3 | Fehler beim Schreiben, Wert nicht rückgesetzt |

### TAB_STEUERN_ELV_ARG

| WERT | TEXT |
| --- | --- |
| 0 | UNLOCK |
| 1 | LOCK |

### TAB_VERFAHRART

| WERT | TEXT |
| --- | --- |
| 0x01 | ELV soll verriegeln |
| 0x02 | ELV soll  entriegeln |
| 0xFF | Wert ungültig |

### TAB_VERFAHR_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenksäule verklemmt |
| 0x01 | Keine EWS Authentisierung |
| 0x02 | FuSi seitiger Fehler (Qualifier inkorrekt, nicht im stillstandsnahen Bereich) |
| 0x03 | Entriegellungsbedingung nicht gegeben (Bei triggerung durch Diagnosejob) |
| 0xFF | Wert ungültig |

### TAB_VERFAHR_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0x00 | Ansteuerung über Diagnosebefehl ELV-VR |
| 0x01 | Fahrertür länger als 2 Sekunden offen |
| 0x02 | ZV-Sichern |
| 0x03 | Ansteuerung über Diagnosebefehl ELV-ER |
| 0x04 | Schlüssel im Innenraum gefunden |
| 0xFF | Wert ungültig |

### TAB_WRITE_EEPROM_STA

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | NOK |
| 2 | PENDING |
| 0xFF | Wert ungültig |

### TAB_0X2951

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X505A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0024 | 0x0025 | 0x0026 | 0x0027 |

### TAB_0X505B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0020 | 0x0021 | 0x0022 | 0x0023 |

### TAB_0X505C

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0029 | 0x002A |

### TAB_0X5060

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E |

### TAB_0X5061

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 |

### TAB_0X5062

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0028 |

### TAB_0X5063

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0015 | 0x0016 | 0x0017 | 0x0018 |

### TAB_0X5064

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F |
