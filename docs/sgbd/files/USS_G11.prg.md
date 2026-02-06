# USS_G11.prg

## General

|  |  |
| --- | --- |
| File | USS_G11.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 37 |
| Origin | BMW EI-500 Schneider |
| Revision | 2.050 |
| Author | Valeo EI-503 Veith, Valeo EI-503 Götte |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Ultraschallsensor Steuergerät |  |  |
| ORIGIN | string | BMW EI-500 Schneider |  |  |
| REVISION | string | 2.050 |  |  |
| AUTHOR | string | Valeo EI-503 Veith, Valeo EI-503 Götte |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.60 |  |  |
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

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

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

### ARG_0X4023_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARKBUCHT_SEITE | 0-n | high | unsigned char | - | TAB_PARKBUCHT | - | - | - | - | - | Definiert auf welcher Seite die Parkbucht ist (rechts[1], links[2]) |
| FAHRZEUG_POSITION_X | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Definiert Fahrzeugposition in X-Achse zum Aufsatzpunkt (Mitte Hinterradachse)in mm. |
| FAHRZEUG_POSITION_Y | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Definiert Fahrzeugposition in Y-Achse zur seitlichen Fahrzeugkontour (Aufsatzpunkt - halbe Fahrzeugbreite) in mm. |
| FAHRZEUG_WINKEL | - | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Definiert Fahrzeugwinkel zu Aufsatzpunkt in 1/100 Grad. |
| PARKBUCHT_LAENGE | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Definiert die Länge der Parkbucht in mm. |
| PARKBUCHT_TIEFE | mm | high | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Definiert die Tiefe der Parkbucht in mm. |

### ARG_0X4030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VALEO_EOL_DATA_ALL | DATA | high | data[28] | - | - | 1.0 | 1.0 | 0.0 | - | - | Daten in SG schreiben |

### ARG_0XD673_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Startet den Sensortest für die Ultraschallsensoren. 1 = Start |

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
| 0x022C00 | Energiesparmode aktiv | 0 |
| 0x022C08 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022C09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x022C0A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x022C0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x022C0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x022C0D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF2C | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x803201 | Spannungsversorgung Ultraschallsensoren vorn: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803202 | Spannungsversorgung Ultraschallsensoren hinten: Kurzschluss zwischen Plus und Minus | 0 |
| 0x803203 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803204 | Ultraschallsensor hinten Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803205 | Ultraschallsensor hinten Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803206 | Ultraschallsensor hinten Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x803207 | Ultraschallsensor hinten Seite links: Sensor antwortet nicht | 0 |
| 0x803208 | Ultraschallsensor hinten Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803209 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80320A | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80320B | Ultraschallsensor hinten Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80320C | Ultraschallsensor hinten Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x80320D | Ultraschallsensor hinten Außen links: Sensor antwortet nicht | 0 |
| 0x80320E | Ultraschallsensor hinten Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803210 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803211 | Ultraschallsensor hinten Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803212 | Ultraschallsensor hinten Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x803214 | Ultraschallsensor hinten Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803216 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803217 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803218 | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80321A | Ultraschallsensor hinten Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80321B | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80321C | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80321D | Ultraschallsensor hinten Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80321E | Ultraschallsensor hinten Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80321F | Ultraschallsensor hinten Außen rechts: Sensor antwortet nicht | 0 |
| 0x803220 | Ultraschallsensor hinten Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803221 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803222 | Ultraschallsensor hinten Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803223 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803224 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803225 | Ultraschallsensor hinten Seite rechts: Sensor antwortet nicht | 0 |
| 0x803226 | Ultraschallsensor hinten Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803227 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803228 | Ultraschallsensor vorn Seite links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803229 | Ultraschallsensor vorn Seite links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80322A | Ultraschallsensor vorn Seite links: Sensor defekt (Receivezweig) | 0 |
| 0x80322B | Ultraschallsensor vorn Seite links: Sensor antwortet nicht | 0 |
| 0x80322C | Ultraschallsensor vorn Seite links: Sensor defekt (Verify-Fehler) | 0 |
| 0x80322D | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80322E | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80322F | Ultraschallsensor vorn Außen links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803230 | Ultraschallsensor vorn Außen links: Sensor defekt (Receivezweig) | 0 |
| 0x803231 | Ultraschallsensor vorn Außen links: Sensor antwortet nicht | 0 |
| 0x803232 | Ultraschallsensor vorn Außen links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803234 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803235 | Ultraschallsensor vorn Mitte links: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803236 | Ultraschallsensor vorn Mitte links: Sensor defekt (Receivezweig) | 0 |
| 0x803237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x803238 | Ultraschallsensor vorn Mitte links: Sensor defekt (Verify-Fehler) | 0 |
| 0x803239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80323A | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x80323B | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x80323C | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Receivezweig) | 0 |
| 0x80323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80323E | Ultraschallsensor vorn Mitte rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x80323F | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803240 | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803241 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803242 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803243 | Ultraschallsensor vorn Außen rechts: Sensor antwortet nicht | 0 |
| 0x803244 | Ultraschallsensor vorn Außen rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803245 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803246 | Ultraschallsensor vorn Seite rechts, Signalleitung: Kurzschluss nach Masse oder Unterbrechung | 0 |
| 0x803247 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Ausschwingzeit) | 0 |
| 0x803248 | Ultraschallsensor vorn Seite rechts: Sensor defekt (Receivezweig) | 0 |
| 0x803249 | Ultraschallsensor vorn Seite rechts: Sensor antwortet nicht | 0 |
| 0x80324A | Ultraschallsensor vorn Seite rechts: Sensor defekt (Verify-Fehler) | 0 |
| 0x803271 | Akustische Abstandswarnung nicht möglich | 1 |
| 0x803317 | Interner Softwarefehler Funktionsabwurf PDC | 0 |
| 0x803348 | PMA Funktion Abbruch durch Fehlbedienung | 1 |
| 0x803349 | PMA Funktion Systemgrenze überschritten | 1 |
| 0x803370 | Steuergerät intern - ADC | 0 |
| 0x803372 | Steuergerät intern - RAM | 0 |
| 0x80337A | Spannungsversorgung Globale Unterspannung intern | 1 |
| 0x80337B | Spannungsversorgung Globale Überspannung intern | 1 |
| 0x80337C | Spannungsversorgung Globale Unterspannung extern | 1 |
| 0x80337D | Spannungsversorgung Globale Überspannung extern | 1 |
| 0x80337E | Spannungsversorgung Lokale Unterspannung | 0 |
| 0x80337F | Spannungsversorgung Lokale Überspannung | 0 |
| 0xD40514 | B2-CAN Control Module Bus OFF | 0 |
| 0xD40BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD40C01 | USS-CAN Control Module Bus OFF | 0 |
| 0xD41428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD4142C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD41450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD41451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD414A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Timeout | 1 |
| 0xD414AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD414AD | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Ungültig | 1 |
| 0xD414AE | Signalfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Undefiniert | 1 |
| 0xD414B0 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD414B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Undefiniert | 1 |
| 0xD414B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD414B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD414BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD414BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD414BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Undefiniert | 1 |
| 0xD414D3 | Botschaftsfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Timeout | 1 |
| 0xD414D4 | Signalfehler (Wegstrecke Fahrzeug, ID: MILE_VEH) - Ungültig | 1 |
| 0xD414F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD414F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD41570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD4157A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD4157B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Undefiniert | 1 |
| 0xD4158C | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD41590 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 |
| 0xD415A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD415A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD415A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Undefiniert | 1 |
| 0xD415BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD415C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD415C3 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Undefiniert | 1 |
| 0xD41652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Timeout | 1 |
| 0xD41656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Ungültig | 1 |
| 0xD41657 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) - Undefiniert | 1 |
| 0xD4167B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Timeout | 1 |
| 0xD4167C | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Timeout | 1 |
| 0xD41686 | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Timeout | 1 |
| 0xD41696 | Botschaftsfehler (Status Parkassistent 2, ID:ST_PMA_2) - Timeout | 1 |
| 0xD416B8 | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Checksumme | 1 |
| 0xD416C2 | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Checksumme | 1 |
| 0xD416CE | Botschaftsfehler (Status Parkassistent 2, ID:ST_PMA_2) - Checksumme | 1 |
| 0xD4170C | Botschaftsfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Alive | 1 |
| 0xD41711 | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Ungültig | 1 |
| 0xD41712 | Signalfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Ungültig | 1 |
| 0xD4171C | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Ungültig | 1 |
| 0xD41727 | Botschaftsfehler (Status Parkassistent 2, ID:ST_PMA_2) - Alive | 1 |
| 0xD41744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD4176A | Botschaftsfehler (Parken Längsführung, ID: PKG_LNG) - Alive | 1 |
| 0xD41779 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Ungültig | 1 |
| 0xD417BF | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Qualifier | 1 |
| 0xD417D6 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Qualifier | 1 |
| 0xD4180D | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Undefiniert | 1 |
| 0xD4180E | Signalfehler (Bedienung Taster Parken Dauer, ID: OP_PUBU_PKG_DUR) - Undefiniert | 1 |
| 0xD4181C | Signalfehler (Parken Längsführung, ID: PKG_LNG) - Undefiniert | 1 |
| 0xD41825 | Signalfehler (Status Parkassistent 2, ID:ST_PMA_2) - Undefiniert | 1 |
| 0xD419AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD41A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Qualifier | 1 |
| 0xD41C1C | Botschaftsfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Timeout | 1 |
| 0xD42C0A | Signalfehler (Blinken, ID: BLINKEN) - Undefiniert | 1 |
| 0xD42C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD42C49 | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Ungültig | 1 |
| 0xD42C4A | Signalfehler (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) - Undefiniert | 1 |
| 0xD42C67 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Qualifier | 1 |
| 0xD42C68 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) - Timeout | 1 |
| 0xD42C69 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) - Checksumme | 1 |
| 0xD42C6A | Botschaftsfehler (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) - Alive | 1 |
| 0xD42C6B | Signalfehler (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) - Ungültig | 1 |
| 0xD42C6C | Botschaftsfehler (Anforderung Funktion Parken, ID:RQ_FN_PKG) - Timeout | 1 |
| 0xD42C6D | Botschaftsfehler (Anforderung Funktion Parken, ID:RQ_FN_PKG) - Alive | 1 |
| 0xD42C6E | Signalfehler (Anforderung Funktion Parken, ID:RQ_FN_PKG) - Ungültig | 1 |
| 0xD42C6F | Botschaftsfehler (Status Verbrennungsmotor, ID:ST_CENG) - Timeout | 1 |
| 0xD42C70 | Botschaftsfehler (Status Verbrennungsmotor, ID:ST_CENG) - Alive | 1 |
| 0xD42C71 | Signalfehler (Status Verbrennungsmotor, ID:ST_CENG) - Ungültig | 1 |
| 0xD42C7A | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID:PVE_CRV_Y_VL) - Timeout | 1 |
| 0xD42C7B | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID:PVE_CRV_Y_VL) - Alive | 1 |
| 0xD42C7C | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID:PVE_CRV_Y_VL) - Checksumme | 1 |
| 0xD42C7D | Signalfehler (Potentialvektor Krümmung Y Wert, ID:PVE_CRV_Y_VL) - Ungültig | 1 |
| 0xD42C7E | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID:PVE_CRV_X_VL) - Timeout | 1 |
| 0xD42C7F | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID:PVE_CRV_X_VL) - Alive | 1 |
| 0xD42C80 | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID:PVE_CRV_X_VL) - Checksumme | 1 |
| 0xD42C81 | Signalfehler (Potentialvektor Krümmung X Wert, ID:PVE_CRV_X_VL) - Ungültig | 1 |
| 0xD42C9A | Botschaftsfehler (Odometrie Fahrzeug 2, ID:ODO_VEH_2) - Timeout | 1 |
| 0xD42C9B | Botschaftsfehler (Odometrie Fahrzeug 2, ID:ODO_VEH_2) - Alive | 1 |
| 0xD42C9C | Botschaftsfehler (Odometrie Fahrzeug 2, ID:ODO_VEH_2) - Checksumme | 1 |
| 0xD42C9D | Signalfehler (Odometrie Fahrzeug 2, ID:ODO_VEH_2) - Ungültig | 1 |
| 0xD42C9E | Botschaftsfehler (Odometrie Fahrzeug 1, ID:ODO_VEH_1) - Timeout | 1 |
| 0xD42C9F | Botschaftsfehler (Odometrie Fahrzeug 1, ID:ODO_VEH_1) - Alive | 1 |
| 0xD42DA0 | Botschaftsfehler (Odometrie Fahrzeug 1, ID:ODO_VEH_1) - Checksumme | 1 |
| 0xD42DA1 | Signalfehler (Odometrie Fahrzeug 1, ID:ODO_VEH_1) - Ungültig | 1 |
| 0xD42DA6 | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID:AVL_VEC_VHMV) - Timeout | 1 |
| 0xD42DA7 | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID:AVL_VEC_VHMV) - Alive | 1 |
| 0xD42DA8 | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID:AVL_VEC_VHMV) - Checksumme | 1 |
| 0xD42DA9 | Signalfehler (Ist Vektor Fahrzeugbewegung, ID:AVL_VEC_VHMV) - Ungültig | 1 |
| 0xD42DAA | Signalfehler (Ist Vektor Fahrzeugbewegung, ID:AVL_VEC_VHMV) - Qualifier | 1 |
| 0xD42DAB | Botschaftsfehler (Status System Parken 2, ID:ST_SY_PKG_2) - Timeout | 1 |
| 0xD42DAC | Botschaftsfehler (Status System Parken 2, ID:ST_SY_PKG_2) - Alive | 1 |
| 0xD42DAD | Signalfehler (Status System Parken 2, ID:ST_SY_PKG_2) - Ungültig | 1 |
| 0xD42DAE | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ST_DISP_DRASY) - Timeout | 1 |
| 0xD42DAF | Signalfehler (Status Anzeige Fahrerassistenzsystem, ST_DISP_DRASY) - Ungültig | 1 |
| 0xD42DB2 | Botschaftsfehler (Status MMI Funktion PDC, ID: ST_MMI_FN_PDC ) - Timeout | 1 |
| 0xD42DB3 | Botschaftsfehler (Status RCP, ID: ST_RCP ) - Timeout | 1 |
| 0xD42DB4 | Signalfehler (Status RCP, ID: ST_RCP ) - Ungültig | 1 |
| 0xD42DB5 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH ) - Timeout | 1 |
| 0xD42DB6 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH ) - Alive | 1 |
| 0xD42DB7 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH ) - Checksumme | 1 |
| 0xD42DB8 | Signalfehler (Zustand Fahrzeug, ID: CON_VEH ) - Ungültig | 1 |
| 0xD42DB9 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Timeout | 1 |
| 0xD42DBA | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Alive | 1 |
| 0xD42DBB | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Checksumme | 1 |
| 0xD42DBC | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Ungültig | 1 |
| 0xD42DBD | Botschaftsfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Timeout | 1 |
| 0xD42DBE | Botschaftsfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Alive | 1 |
| 0xD42DBF | Botschaftsfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Checksumme | 1 |
| 0xD42DC1 | Signalfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Undefiniert | 1 |
| 0xD42DC2 | Signalfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Ungültig | 1 |
| 0xD42DC3 | Signalfehler (Status Koordination Querführung, ID: ST_COOR_LAG) - Fehler | 1 |
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
| 0x4007 | STAT_INTERNER_FEHLERCODE | 0-n | High | 0xFF | TAB_UWB_4007_INTERNER_FEHLERCODE | - | - | - |
| 0x4008 | STAT_FEHLERSPEICHER_BORDNETZ_SPANNUNG | HEX | High | unsigned char | - | - | - | - |
| 0x5000 | STAT_EINGRIFF_IN_DIE_LENKUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5001 | STAT_FALSCHE_GANGWAHL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5002 | STAT_GEOEFFNETE_FAHRZEUGTUEREN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5003 | STAT_GEOEFFNETE_HECKKLAPPE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5004 | STAT_FALSCHE_BLINKERBETAETIGUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5005 | STAT_FAHRER_VERWEILT_IM_STILLSTAND | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5006 | STAT_UEBERSCHREITUNG_VMAX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5007 | STAT_ANHAENGERBERIEB | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5008 | STAT_KEINE_ANZEIGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | STAT_FEHLERAMPLITUDE_LENKWINKEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6001 | STAT_EPS_LEISTUNGSDEGRADATION | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6002 | STAT_UNBEKANNTE_BEWEGUNGSRICHTUNG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | STAT_SCHLUPF | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6004 | STAT_VERSPERRUNG_MAX_ANZAHL_ZUEGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6005 | STAT_KEINE_ANZEIGE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x8032A0 | PMA Abbruch Funktional ohne CCM | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

### RES_0X4030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALEO_EOL_DATA_ECU_SN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | ECU Seriennummer |
| STAT_VALEO_EOL_DATA_TEST_RES_WERT | HEX | high | unsigned char | - | - | - | - | - | Tester-Ergebnis |
| STAT_VALEO_EOL_DATA_TEST_PROG_WERT | HEX | high | unsigned char | - | - | - | - | - | Prüftart |
| STAT_VALEO_EOL_DATA_PROD_DATE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum |
| STAT_VALEO_EOL_DATA_TEST_NR_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Prüfstandsnummer |
| STAT_VALEO_EOL_DATA_ECU_IDX_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | ECU Index |
| STAT_VALEO_EOL_DATA_TRACE_NR_TEXT | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | Trace Nummer |

### RES_0XD66D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ANHAENGER_VORHANDEN | 0/1 | - | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Status des Anhängers:  0 = Anhänger nicht vorhanden 1 = Anhänger vorhanden |
| STAT_BUS_IN_STATUS_KUPPLUNG | 0/1 | - | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Status Anhängervorrichtung: 0 = Anhängerkupplung eingefahren 1 = Anhängerkupplung ausgefahren |

### RES_0XD66F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PDC_ANZAHL_LAUTSPRECHER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der direkt am Steuergerät angeschlossenen Lautsprecher |
| STAT_PDC_ANZAHL_SENSOREN_VORN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren vorn. |
| STAT_PDC_ANZAHL_SENSOREN_HINTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren hinten. |

### RES_0XD683_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PMA_PARKLUECKE_LAENGE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke links |
| STAT_PMA_PARKLUECKE_TIEFE_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke links |
| STAT_PMA_STARTPOSITION_X_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTPOSITION_Y_LINKS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P links |
| STAT_PMA_STARTWINKEL_LINKS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P links |
| STAT_PMA_PARKLUECKE_LAENGE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Länge Parklücke rechts |
| STAT_PMA_PARKLUECKE_TIEFE_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tiefe Parklücke rechts |
| STAT_PMA_STARTPOSITION_X_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | X Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTPOSITION_Y_RECHTS_WERT | cm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Y Abstand Mittelpunkt Hinterachse zum Koordinatensystem P rechts |
| STAT_PMA_STARTWINKEL_RECHTS_WERT | ° | - | int | - | - | 1.0 | 10.0 | 0.0 | Verdrehung Fahrzeuglängsachse zum Koordinatensystem P rechts |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSL_ABSTAND_WERT | 0xD644 | STAT_PDC_VSL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ABSTAND_WERT | 0xD645 | STAT_PDC_VAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ABSTAND_WERT | 0xD646 | STAT_PDC_VML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ABSTAND_WERT | 0xD647 | STAT_PDC_VAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ABSTAND_WERT | 0xD648 | STAT_PDC_VMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSR_ABSTAND_WERT | 0xD649 | STAT_PDC_VSR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSL_ABSTAND_WERT | 0xD64A | STAT_PDC_HSL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ABSTAND_WERT | 0xD64B | STAT_PDC_HAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ABSTAND_WERT | 0xD64C | STAT_PDC_HML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ABSTAND_WERT | 0xD64D | STAT_PDC_HAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ABSTAND_WERT | 0xD64E | STAT_PDC_HMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSR_ABSTAND_WERT | 0xD64F | STAT_PDC_HSR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSL_ASZ_WERT | 0xD650 | STAT_PDC_VSL_ASZ_WERT | Ausschwingzeit Sensor vorn seitlich links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ASZ_WERT | 0xD651 | STAT_PDC_VAL_ASZ_WERT | Ausschwingzeit Sensor vorn außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ASZ_WERT | 0xD652 | STAT_PDC_VML_ASZ_WERT | Ausschwingzeit Sensor vorn mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ASZ_WERT | 0xD653 | STAT_PDC_VAR_ASZ_WERT | Ausschwingzeit Sensor vorn außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ASZ_WERT | 0xD654 | STAT_PDC_VMR_ASZ_WERT | Ausschwingzeit Sensor vorn mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VSR_ASZ_WERT | 0xD655 | STAT_PDC_VSR_ASZ_WERT | Ausschwingzeit Sensor vorn seitlich rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSL_ASZ_WERT | 0xD656 | STAT_PDC_HSL_ASZ_WERT | Ausschwingzeit Sensor hinten seitlich links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ASZ_WERT | 0xD657 | STAT_PDC_HAL_ASZ_WERT | Ausschwingzeit Sensor hinten außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ASZ_WERT | 0xD658 | STAT_PDC_HML_ASZ_WERT | Ausschwingzeit Sensor hinten mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ASZ_WERT | 0xD659 | STAT_PDC_HAR_ASZ_WERT | Ausschwingzeit Sensor hinten außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ASZ_WERT | 0xD66A | STAT_PDC_HMR_ASZ_WERT | Ausschwingzeit Sensor hinten mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HSR_ASZ_WERT | 0xD66B | STAT_PDC_HSR_ASZ_WERT | Ausschwingzeit Sensor hinten seitlich rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_ANHAENGER_VORHANDEN | 0xD66D | - | Liefert den Status des Anhängers über Bus. | bit | - | - | BITFIELD | RES_0xD66D_D | - | - | - | - | 22 | - | - |
| PDC_KONFIGURATION | 0xD66F | - | Liefert die (zuvor) codierte Konfiguration des Systems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD66F_D |
| BUS_IN_KILOMETERSTAND_WERT | 0xD670 | STAT_BUS_IN_KILOMETERSTAND_WERT | Signal Kilometerstand des Fahrzeugs über BUS | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_STAT_SYSTEM | 0xD671 | STAT_PDC_SYSTEM | Status des Systems:  0 = PDC nicht aktiv,  1 = PDC aktiv,  2 = PDC hat Fehler erkannt | 0-n | - | - | unsigned char | TAB_PDC_STATUS | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SENSORTEST | 0xD673 | - | Startet die Eigendiagnose der Sensoren, Ergebnisse werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD673_D | - |
| PDC_SENSORTEST | 0xD674 | STAT_PDC_SENSORTEST_NR | Ausgabe des Status des Sensortests:  Siehe Tabelle TAB_PDC_SENSORTEST | 0-n | - | - | unsigned char | TAB_PDC_SENSORTEST | - | - | - | - | 22 | - | - |
| BUS_IN_STATUS_ROLLEN | 0xD679 | STAT_BUS_IN_STATUS_ROLLEN | Status der Fahrzeugbewegung:  0 = Fahrzeug steht,  1 = Fahrzeug fährt vorwärts, 2 = Fahrzeug fährt rückwärts, 3 = Fahrzeug fährt,  255 ungültig | 0-n | - | - | unsigned char | TAB_PDC_ROLLEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_WEGSTRECKE_WERT | 0xD67A | STAT_BUS_IN_WEGSTRECKE_WERT | Signal Wegstrecke des Fahrzeugs über BUS | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_RUECKWAERTSGANG | 0xD67B | STAT_BUS_IN_RUECKWAERTSGANG_EIN | Status des Rückwärtsgang:  0 = Rückwärtsgang nicht eingelegt;  1 = Rückwärtsgang eingelegt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PMA_PARKLUECKE | 0xD683 | - | Auslesen letzte Parklücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD683_D |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | unsigned int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| VIRTUELLE_PARKBUCHT | 0x4023 | - | Der Diagnosejobs bildet eine  definierbare virtuelle Parklücke nach und gibt diese frei. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4023_D | - |
| VALEO_ICT_DATEN | 0x402F | STAT_VALEO_ICT_DATA | ICT Daten lesen | DATA | - | high | data[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VALEO_EOL_DATEN | 0x4030 | - | EndOfLine Daten lesen/schreiben | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4030_D | RES_0x4030_D |

### TAB_PARKBUCHT

| WERT | TEXT |
| --- | --- |
| 1 | Rechts |
| 2 | Links |

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

### TAB_UWB_4007_INTERNER_FEHLERCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbruch Grund: KEINER |
| 0x01 | Abbruch Grund: OFFENE TUER |
| 0x02 | Abbruch Grund: OFFENE HECKTUER |
| 0x03 | Abbruch Grund: LENKEINGRIFF |
| 0x04 | Abbruch Grund: FALSCHER BLINKER |
| 0x05 | Abbruch Grund: FALSCHER GANG |
| 0x06 | Abbruch Grund: ZU HOHE GESCHWINDIGKEIT |
| 0x07 | Abbruch Grund: TMEOUT SAE |
| 0x08 | Abbruch Grund: ANHAENGER |
| 0x09 | Abbruch Grund: MOTOR AUS |
| 0x0A | Abbruch Grund: FEHLER AMPLITUDE |
| 0x0B | Abbruch Grund: FEHLER SIGNAL EINSCHLAGWINKEL |
| 0x0C | Abbruch Grund: FEHLER WEGSTRECKE VORDERRAD |
| 0x0D | Abbruch Grund: FEHLER WEGSTRECKE HINTERRAD |
| 0x0E | Abbruch Grund: FEHLER SIGNAL VYAW_VEH |
| 0x0F | Abbruch Grund: FEHLER SIGNAL SER_PINA_EST_FTAX |
| 0x10 | Abbruch Grund: FEHLER SIGNAL ACLNX_COG |
| 0x11 | Abbruch Grund: FEHLER SIGNAL ACLNY_COG |
| 0x12 | Abbruch Grund: UNBEKANNTES SIGNAL MVMNT |
| 0x13 | Abbruch Grund: ENDPOSITION UNERREICHBAR |
| 0x14 | Abbruch Grund: DEGRADIERUNG EPS |
| 0x15 | Abbruch Grund: SENSOR BLIND |
| 0x16 | Abbruch Grund: RUTSCHEN |
| 0x17 | Abbruch Grund: EINGRIFF ABS |
| 0x18 | Abbruch Grund: FEHLER NETZWERK |
| 0x19 | Abbruch Grund: KEINE LF AUSLOESUNG |
| 0x1A | Abbruch Grund: KEINE ANZEIGE SYSTEM |
| 0x1B | Abbruch Grund: KEINE ANZEIGE KUNDE |
| 0x1C | Abbruch Grund: MAX RANGIERBEWEGUNGEN |
