# LEM_G11.prg

## General

|  |  |
| --- | --- |
| File | LEM_G11.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 50 |
| Origin | BMW EI-844 Wagner |
| Revision | 3.000 |
| Author | PREH-GMBH EI-844 Tran |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Light Effect Manager |  |  |
| ORIGIN | string | BMW EI-844 Wagner |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | PREH-GMBH EI-844 Tran |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.53 |  |  |
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
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
| 0x0000BE | Schaeffler Technologies |
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
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
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
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
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
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
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
| 0x5A01 | Innenbeleuchtung – Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung – Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung – Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung – Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung – Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung – Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung – Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung – Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung – Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung – Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung – Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung – Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung – Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung – Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung – Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung – Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung – Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung – Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung – Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter – Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
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
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
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
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI – Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
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

### ARG_0X402A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENABLE_DISABLE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: XCP ausschalten 1: XCP einschalten |

### ARG_0X4034_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert wird irgnoriert |

### ARG_0X4035_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert wird ignoriert |

### ARG_0XD210_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEMODUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: An; 0: Aus |

### ARG_0XD211_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERTIGUNGSMODUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus;  1: An ohne Ladefunktion;  2: An mit Ladefunktion  |

### ARG_0XD4D4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 00: keine Aktion; 01: Kalibrierung starten;   |

### ARG_0XD50A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | ID des LIN-RGB-Moduls (Busposition vom Steuergerät aus gesehen)  0: Alle Module am Bus;  ungleich 0: ID des entsprechenden Moduls |
| ID_BUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | ID des LIN-Busses  0: Alle LIN-Busse mit Beleuchtungsumfängen am Steuergerät;  1: LIN_1;  2: LIN_2 usw. |
| EIN_AUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Zeigt an, ob die Beleuchtung ein- oder ausgeschaltet werden soll:  1: Ein  0: Aus  |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Helligkeitswert der Beleuchtung (0% - 100%) |
| ROTWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Wert der roten LED (0-254) |
| GRUENWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Wert der grünen LED (0 - 254) |
| BLAUWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Wert der blauen LED (0 - 254) |
| ZEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Zeit (in s) für die die LEDs mit den gewählten Werten angesteuert werden. |

### ARG_0XD50B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0...keine Aktion 1...Auswerfen |

### ARG_0XD50C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0...SIA Eject Taste entsperren;  1...SIA Eject Taste sperren |

### AUTOADR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung erfolgreich |
| 0x01 | Autoadr. Vorbedingungen nicht korrekt (z. B. PaDa verbaut und nicht geschlossen) |
| 0x02 | Autoadressierung läuft |
| 0x03 | Autoadressierung fehlgeschlagen |
| 0xFF | Wert ungültig |

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
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x024F00 | Energiesparmode aktiv | 0 |
| 0x024F08 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024F09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x024F0A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x024F0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x024F0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x024F0D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x024F20 | CAN-Fehler (Sammelfehler) | 0 |
| 0x024F21 | EEPROM-Fehler (Sammelfehler) | 0 |
| 0x024F23 | Flash Memory Fehler (Sammelfehler) | 0 |
| 0x024F26 | Hardwarefehler (Sammelfehler) | 0 |
| 0x024F28 | LIN, interne Ursache (Sammelfehler) | 0 |
| 0x024F29 | Softwarefehler (Sammelfehler) | 0 |
| 0x02FF4F | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x807081 | LIN RGB Modul Funktion 1: Fehler im Modul | 0 |
| 0x807082 | LIN RGB Modul Funktion 2: Fehler im Modul | 0 |
| 0x807083 | LIN RGB Modul Funktion 3: Fehler im Modul | 0 |
| 0x807084 | LIN RGB Modul Funktion 4: Fehler im Modul | 0 |
| 0x807085 | LIN RGB Modul Funktion 5: Fehler im Modul | 0 |
| 0x807086 | LIN RGB Modul Funktion 6: Fehler im Modul | 0 |
| 0x807087 | LIN RGB Modul Funktion 7: Fehler im Modul | 0 |
| 0x807088 | LIN RGB Modul Funktion 8: Fehler im Modul | 0 |
| 0x807089 | LIN RGB Modul Funktion 9: Fehler im Modul | 0 |
| 0x80708A | LIN RGB Modul Funktion 10: Fehler im Modul | 0 |
| 0x80708B | LIN RGB Modul Funktion 11: Fehler im Modul | 0 |
| 0x80708C | LIN RGB Modul Funktion 12: Fehler im Modul | 0 |
| 0x80708D | LIN RGB Modul Funktion 13: Fehler im Modul | 0 |
| 0x80708E | LIN RGB Modul Funktion 14: Fehler im Modul | 0 |
| 0x80708F | LIN RGB Modul Funktion 15: Fehler im Modul | 0 |
| 0x807090 | LIN RGB Modul Funktion 16: Fehler im Modul | 0 |
| 0x807091 | LIN RGB Modul Funktion 17: Fehler im Modul | 0 |
| 0x807092 | LIN RGB Modul Funktion 18: Fehler im Modul | 0 |
| 0x807093 | LIN RGB Modul Funktion 19: Fehler im Modul | 0 |
| 0x807094 | LIN RGB Modul Funktion 20: Fehler im Modul | 0 |
| 0x807095 | LIN RGB Modul Funktion 21: Fehler im Modul | 0 |
| 0x807096 | LIN RGB Modul Funktion 22: Fehler im Modul | 0 |
| 0x807097 | LIN RGB Modul Funktion 23: Fehler im Modul | 0 |
| 0x807098 | LIN RGB Modul Funktion 24: Fehler im Modul | 0 |
| 0x807099 | LIN RGB Modul Funktion 25: Fehler im Modul | 0 |
| 0x80709A | LIN RGB Modul Funktion 26: Fehler im Modul | 0 |
| 0x80709B | LIN RGB Modul Funktion 27: Fehler im Modul | 0 |
| 0x80709C | LIN RGB Modul Funktion 28: Fehler im Modul | 0 |
| 0x80709D | LIN RGB Modul Funktion 29: Fehler im Modul | 0 |
| 0x80709E | LIN RGB Modul Funktion 30: Fehler im Modul | 0 |
| 0x80709F | LIN RGB Modul Funktion 31: Fehler im Modul | 0 |
| 0x8070A0 | LIN RGB Modul Funktion 32: Fehler im Modul | 0 |
| 0x8070A2 | LIN RGB Modul Funktion 33: Fehler im Modul | 0 |
| 0x8070A3 | LIN RGB Modul Funktion 34: Fehler im Modul | 0 |
| 0x8070A4 | LIN RGB Modul Funktion 35: Fehler im Modul | 0 |
| 0x8070A5 | LIN RGB Modul Funktion 36: Fehler im Modul | 0 |
| 0x8070A6 | LIN RGB Modul Funktion 37: Fehler im Modul | 0 |
| 0x8070A7 | LIN RGB Modul Funktion 38: Fehler im Modul | 0 |
| 0x8070A8 | LIN RGB Modul Funktion 39: Fehler im Modul | 0 |
| 0x8070A9 | LIN RGB Modul Funktion 40: Fehler im Modul | 0 |
| 0x8070B4 | LIN RGB Modul Funktion 41: Fehler im Modul | 0 |
| 0x8070B5 | LIN RGB Modul Funktion 42: Fehler im Modul | 0 |
| 0x8070B6 | LIN RGB Modul Funktion 43: Fehler im Modul | 0 |
| 0x8070B7 | LIN RGB Modul Funktion 44: Fehler im Modul | 0 |
| 0x8070B8 | LIN RGB Modul Funktion 45: Fehler im Modul | 0 |
| 0x8070B9 | LIN RGB Modul Funktion 46: Fehler im Modul | 0 |
| 0x8070BA | LIN RGB Modul Funktion 47: Fehler im Modul | 0 |
| 0x8070BB | LIN RGB Modul Funktion 48: Fehler im Modul | 0 |
| 0x8070BC | LIN RGB Modul Funktion 49: Fehler im Modul | 0 |
| 0x8070BD | LIN RGB Modul Funktion 50: Fehler im Modul | 0 |
| 0x8070BE | LIN RGB Modul Funktion 51: Fehler im Modul | 0 |
| 0x8070BF | LIN RGB Modul Funktion 52: Fehler im Modul | 0 |
| 0x8070D0 | PWF Messemodus aktiv | 0 |
| 0x8070DA | Touch Command Snap In Adapter: Fehlstellung Schalter | 0 |
| 0x8070DB | Touch Command Snap In Adapter: Fehler am CE-Gerätestecker | 0 |
| 0x8070DC | Touch Command Snap In Adapter: Mechanik blockiert | 0 |
| 0x8070DD | Touch Command Snap In Adapter: Motor defekt | 0 |
| 0x8070DE | Touch Command Snap In Adapter: SIA Fertigungsmodus aktiv | 1 |
| 0x8070DF | Touch Command Snap In Adapter: SIA FeTraFla-Modus aktiv | 1 |
| 0x8070E0 | Touch Command Snap In Adapter: SIA Lademodus aktiv | 1 |
| 0x8070E1 | Touch Command Snap In Adapter: SIA Messemodus aktiv | 1 |
| 0x8070FB | Innenlicht Layering LIN: Anzahl Layering Slaves nicht korrekt | 0 |
| 0x8070FC | Innenlicht Layering LIN: Fehler bei Autoadressierung aufgetreten | 0 |
| 0x8070FD | LIN RGB Module: Übertemperatur - Reduzierung der Helligkeit | 1 |
| 0x8070FE | Überspannung erkannt | 1 |
| 0x8070FF | Unterspannung erkannt | 1 |
| 0xDCC415 | IuK-CAN Physikalischer Busfehler | 0 |
| 0xDCC41E | IuK-CAN Control Module Bus OFF | 0 |
| 0xDCCBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDCCC00 | LIN-Bus: Touch Command Snap In Adapter antwortet nicht | 0 |
| 0xDCCC01 | LIN Master A: Keine Kommunikation | 1 |
| 0xDCCC02 | LIN Master A: Kommunikation gestört | 1 |
| 0xDCCC04 | LIN Master B: Keine Kommunikation | 1 |
| 0xDCCC05 | LIN Master B: Kommunikation gestört | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4000 | Status der Unterbrechung am RGB-Modul | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | Interner Fehler am RGB-Modul | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | Kurzschlussstatus am RGB-Modul | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4003 | Verbauorttabelle des RGB-Moduls | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4004 | Spannung des Bordnetzes | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | Parken/Wohnen/Fahren-Zustand des Fahrzeugs | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | Anzahl der erkannten LIN-Slaves | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | Soll-Anzahl der LIN-Slaves (über Codierung). | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | Status der Ladeschaltung des Touch Command Snap-In Adapters | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | Verrigelungsstatus des Touch Command Snap-In Adapters | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400A | Status Energiesparmode | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400B | Aktuelle Funktion des LIN-Moduls | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4011 | Bus des betroffenen LED-Moduls | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4012 | Position des betroffenen Moduls am Bus | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | Status der Auswurfsperre | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4015 | Anzahl der Verriegelungsvorgänge TC SIA | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | Status des Lademodus Touch Command SIA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4017 | Status des SIA-spezifischen Fertigungsmodus | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | Status des Messemodus am TC SIA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4019 | Fehlerdetails zum CE-Gerätestecker | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4030 | INTERNER_FEHLER | 0-n | High | 0xFF | TAB_INTERNER_FEHLER | - | - | - |
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

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | MESSEMODUS_NICHT_AKTIV |
| 0xFF | Wert ungültig |
| 1 | MESSEMODUS_AKTIV |

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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM Major Version |
| STAT_MINOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM Minor Version |
| STAT_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM Patch Version |
| STAT_YEAR_FIRST_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM first two numbers of the year |
| STAT_YEAR_SECOND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM second two numbers of the year |
| STAT_MONTH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM Month |
| STAT_DAY_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LEM Day |

### RES_0XA838_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADRESSING | - | - | + | 0-n | high | unsigned char | - | AUTOADR_STATUS | - | - | - | Statusabfrage Autoadressierung |

### RES_0XD50D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt den Status der Verriegelung des Tablets wieder:  0...Kein_Tablet_erkannt;  1...Tablet_erkannt_aber_nicht_verriegelt;  2...Tablet_falsch_eingelegt_und_verriegelt;  3...Tablet_korrekt_eingelegt_und_verriegelt;   |
| STAT_AUSWURFFUNKTION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Sperre des Tasters EJECT:  0...Eject Taste gesperrt;  1...Eject Taste freigeschaltet  |
| STAT_LADEERLAUBNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Ladeschaltung. Die Ladeschaltung des Touch Command wird je nach Modi und Fahrzeugzustand aktiviert bzw. deaktiviert. Dieser Wert gibt den Status der Ladeschaltung im entsprechend aktiven TC-SIA Modus wieder.  0...Tablet laden aktiviert;  1...Tablet laden deaktiviert   |
| STAT_FETRAFLA_MODUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des im Snap-In Adapter eingestellten Energiesparmodus:  0...FETRAFLA deaktiviert;  1...Fertigungsmodus aktiviert;   2...Transportmodus aktiviert;  (Hinweis: Energiesparmodus seitens Steuergerät aktiv oder inaktiv) |
| STAT_MESSEMODUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt den Status des Messemodus wieder:  1...Messemodus gesetzt;  0...Messemdodus nicht gesetzt  |
| STAT_SIA_FERTIGUNGSMODUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt den Status des SIA spezifischen Fertigungsmodus wieder:  2...Fertigungsmodus ohne Laden gesetzt;  1...Fertigungsmodus mit Laden gesetzt;  0...Fertigungsmodus  nicht gesetzt  |
| STAT_LADEMODUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt den Status des Lademodus wieder:  1...Lademodus aktiv;  0...Lademodus nicht aktiv  |
| STAT_ANZAHL_VERRIEGELUNGEN_TC_SIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Verriegelungen des Touch Command Snap-In Adapters an. |

### RES_0XD50F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_CURRENT_PROFILE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuell verwendetes PIA Profil. |
| STAT_PROFILE_1_BRIG_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_1_BRIG_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_1_BRIG_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_1_MOD_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_1_MOD_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_1_MOD_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_1_DYN_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des entsprechenden Profils, ob Teile der Beleuchtung bei Fahrt reduziert werden. |
| STAT_PROFILE_1_MNU_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert der Farbeinstellung der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_2_BRIG_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_2_BRIG_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_2_BRIG_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_2_MOD_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_2_MOD_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_2_MOD_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_2_DYN_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des entsprechenden Profils, ob Teile der Beleuchtung bei Fahrt reduziert werden. |
| STAT_PROFILE_2_MNU_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert der Farbeinstellung der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_3_BRIG_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_3_BRIG_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_3_BRIG_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_3_MOD_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_3_MOD_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_3_MOD_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_3_DYN_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des entsprechenden Profils, ob Teile der Beleuchtung bei Fahrt reduziert werden. |
| STAT_PROFILE_3_MNU_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert der Farbeinstellung der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_4_BRIG_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_4_BRIG_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_4_BRIG_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Abgespeicherter Wert der Helligkeit der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_4_MOD_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Panoramadachbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_4_MOD_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lichtschwerter des entsprechenden Profils. |
| STAT_PROFILE_4_MOD_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des Betriebsmodus der Lautsprecherbeleuchtung des entsprechenden Profils. |
| STAT_PROFILE_4_DYN_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert des entsprechenden Profils, ob Teile der Beleuchtung bei Fahrt reduziert werden. |
| STAT_PROFILE_4_MNU_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abgespeicherter Wert der Farbeinstellung der Panoramadachbeleuchtung des entsprechenden Profils. |

### RES_0XD51F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SA_LICHTSCHWERT_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die SA Lichtschwert verbaut ist (aus Codierung). |
| STAT_SA_PADABELEUCHTUNG_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die SA Panoramadachbeleuchtung verbaut ist (aus Codierung). |
| STAT_SA_ALEV4_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die SA ALEV4 verbaut ist (aus Codierung). |
| STAT_SA_TOUCH_COMMAND_SIA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die SA Touch Command (und damit der Snap-In Adapter) verbaut ist (aus Codierung). |
| STAT_FUNKTIONSTABELLE_LIN_SLAVES_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Verbauorttabelle der LIN-Slaves. Bitcodiert, d. h.  Bit 1 entspricht Funktion 1;  Bit 2 entspricht Funktion 2 usw.;   Ist das entsprechende Bit gesetzt, ist die entsprechende Funktion am Steuergerät vorhanden. |
| STAT_ANZAHL_EINSCHALTVORGAENGE_LS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Einschaltvorgänge (Aktivierungen durch den Benutzer über die HU bzw. über den Taster am Lichtschwert) des Lichtschwerts seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_TS_LETZTES_EINSCHALTEN_LS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Aktivierens des Lichtschwerts (durch den Benutzer über die HU bzw. über den Taster am Lichtschwert) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_ANZAHL_AUSSCHALTVORGAENGE_LS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ausschaltvorgänge (Deaktivierungen durch den Benutzer über die HU bzw. über den Taster am Lichtschwert) seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_TS_LETZTES_AUSSCHALTEN_LS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel der letzten Deaktivierung des Lichtschwerts (durch den Benutzer an der HU bzw. über den Taster am Lichtschwert) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_AKTUELLE_EINSTELLUNG_LS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Einstellung (Betriebsmodus) des Lichtschwerts aus PIA.  |
| STAT_TS_TASTER_LS_LINKS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Betätigens des Tasters am linken Lichtschwert seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden alle Betätigungen (Kurz- und Langdruck) nach der Entprellung. |
| STAT_TS_TASTER_LS_RECHTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Betätigens des Tasters des rechten Lichtschwerts seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden alle Betätigungen (Kurz- und Langdruck) nach der Entprellung. |
| STAT_ANZAHL_EINSCHALTVORGAENGE_PADA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Einschaltvorgänge (Aktivierungen durch den Benutzer über die HU) der Panoramadachbeleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_TS_LETZTES_EINSCHALTEN_PADA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Aktivierens der Panoramadachbeleuchtung (durch den Benutzer über die HU) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_ANZAHL_AUSSCHALTVORGAENGE_PADA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ausschaltvorgänge (Deaktivierungen durch den Benutzer über die HU) der Panoramadachbeleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_TS_LETZTES_AUSSCHALTEN_PADA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel der letzten Deaktiviereung der Panoramadachbeleuchtung (durch den Benutzer an der HU) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschalttvorgänge von ein nach aus. |
| STAT_AKTUELLE_EINSTELLUNG_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Einstellung (Betriebsmodus) der Panoramadachbeleuchtung aus PIA. |
| STAT_AKTUELLE_FARBE_PADA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Farbeinstellung der Panoramadachbeleuchtung aus PIA. |
| STAT_ANZAHL_EINSCHALTVORGAENGE_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Einschaltvorgänge (Aktivierungen durch den Benutzer über die HU) der ALEV4 Beleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_TS_LETZTES_EINSCHALTEN_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Aktivierens der ALEV4-Beleuchtung (durch den Benutzer über die HU) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_ANZAHL_AUSSCHALTVORGAENGE_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ausschaltvorgänge (Deaktivierungen durch den Benutzer über die HU) der ALEV4-Beleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_TS_LETZTES_AUSSCHALTEN_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel der letzten Deaktivierung der ALEV4-Beleuchtung (durch den Benutzer an der HU) seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_AKTUELLE_EINSTELLUNG_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Einstellung (Betriebsmodus) der ALEV4-Beleuchtung aus PIA. |
| STAT_ANZAHL_EINSCHALTEN_REDUZIERUNG_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Einschaltvorgänge (Aktivierungen durch den Benutzer über die HU) des Parameters -Reduziert- bei Fahrt der ALEV4 Beleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_TS_EINSCHALTEN_REDUZIERUNG_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel des letzten Aktivierens (Aktivierungen durch den Benutzer über die HU) des Parameters -Reduziert bei Fahrt- der ALEV4 Beleuchtung seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_ANZAHL_AUSSCHALTEN_REDUZIERUNG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ausschaltvorgänge (Deaktivierungen durch den Benutzer über die HU) des Parameters -Reduziert bei Fahrt- der ALEV4 Beleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_TS_AUSSCHALTEN_REDUZIERUNG_ALEV4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel der letzten Deaktivierung (Deaktivierungen durch den Benutzer über die HU) des Parameters -Reduziert bei Fahrt- der ALEV4 Beleuchtung seit der erstmaligen Inbetriebnahme. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_REDUZIERUNG_AKTUELL_ALEV4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Einstellung (Betriebsmodus) des Parameters -Reduziert bei Fahrt- der ALEV4-Beleuchtung aus PIA. |
| STAT_EVENTS_OVTMP_SLAVE1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE43_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE44_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE45_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE46_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE47_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE48_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE49_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE50_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE51_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE52_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents der Slaves (SlaveX: Slave mit Funktion X). Der Status, ob sich ein Slave im Übertemperaturzustand befindet, wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_ANZAHL_VERRIEGELUNGEN_TC_SIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Verriegelungen des Touch Command Snap-In Adapters an. Der Wert wird über LIN-Bus-Kommunikation übermittelt.  |

### RES_0XD7DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RX_CTR_BRIG_LSA_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Letzter empfangener Wert Control Helligkeit Lichtschwert. |
| STAT_RX_CTR_BRIG_ALEV4_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Letzter empfangener Wert Control Helligkeit Lautsprecherbeleuchtung. |
| STAT_RX_CTR_H_VL_IDV_GRP_PR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Individuelle Farbeinstellung. |
| STAT_RX_CTR_MOD_LSA_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Betriebsmodus Lichtschwert. |
| STAT_RX_CTR_MOD_ALEV4_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Betriebsmodus Lautsprecherbeleuchtung. |
| STAT_RX_CTR_TC_SIA_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Ladezustand Touch Command SIA. |
| STAT_RX_ST_MOD_AMB_PR_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Status Betriebsmodus Panoramadachbeleuchtung. |
| STAT_RX_ST_DYN_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Status Reduziert bei Fahrt. |
| STAT_RX_ST_BV_BRIG_OFFS_AMB_PR_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Letzter empfangener Wert Status Helligkeit Panoramadachbeleuchtung. |
| STAT_RX_ST_MNU_AMB_PR_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Status Farbauswahl Panoramadachbeleuchtung. |
| STAT_RX_ST_H_VL_LAY1_IDV_GRP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Status Synchronisationssignal LEM/BDC. |
| STAT_RX_CTR_MUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Stummschaltung (Mute). |
| STAT_TX_ST_BRIG_LSA_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Letzter versendeter Wert Status Helligkeit Lichtschwert. |
| STAT_TX_ST_BRIG_ALEV4_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | -127.0 | Letzter versendeter Wert Status Helligkeit Lautsprecherbeleuchtung. |
| STAT_TX_ST_MOD_LSA_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendeter Wert Status Betriebsmodus Lichtschwert. |
| STAT_TX_ST_MOD_ALEV4_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendeter Wert Status Betriebsmodus Lautsprecherbeleuchtung. |
| STAT_TX_ST_TC_SIA_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendeter Wert Status Ladezustand Touch Command SIA. |
| STAT_TX_ST_H_VL_IDV_GRP_PR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendter Wert Status Individuelle Farbeinstellung. |
| STAT_TX_ST_CON_AMB_ITLI_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendeter Wert Status Ausgraulogik für Lichtschwert, Lautsprecher- und Panoramadachbeleuchtung. |

### RES_0XDA5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_SLAVES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Gesamtanzahl von codierten Slaves (nur Beleuchtungsumfänge). |
| STAT_ART_AUTOADRESSIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verwendete Art der Autoadressierung der LIN-RGB-Module aus der Codierung (Codierparamater: METHODE_AUTOADRESSIERUNG) des Steuergeräts.  0: Busshunt  1: LIN-Switch |
| STAT_LIN_1_SLAVE_1_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_1_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves. Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_SLAVE_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_2_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_2_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_3_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_3_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_4_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_4_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_5_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_5_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_6_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_6_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_7_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_7_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_8_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_8_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_9_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_9_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_10_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_10_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_11_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_11_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_12_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_12_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_13_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_13_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_14_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_14_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_1_SLAVE_15_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_15_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_1_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves. Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_1_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_SLAVE_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_2_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_2_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_3_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_3_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_4_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_4_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_5_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_5_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_6_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_6_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_7_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_7_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_8_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_8_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_9_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_9_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_10_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_10_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_11_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_11_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_12_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_12_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_13_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_13_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_14_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_14_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_FUNC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ausgelesen. SLAVE_X: X ist die Position des Slaves am Bus (vom Steuergerät aus gesehen) |
| STAT_LIN_2_SLAVE_15_LED_RED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_LED_GREEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_LED_BLUE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der blauen LED des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_BRIGHTNESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_LED_WHITE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen LED.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_FEHLER_KURZSCHLUSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_FEHLER_OVERTEMP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_FEHLER_OPEN_LOAD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_FEHLER_INTERN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_2_SLAVE_15_TASTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Tasters.  Wenn der Slave sich bei der Statusabfrage nicht meldet: 255 |
| STAT_LIN_1_SLAVE_1_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_2_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_3_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_4_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_5_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_6_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_7_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_8_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_9_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_10_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_11_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_12_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_13_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_14_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_1_SLAVE_15_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_1_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_2_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_3_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_4_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_5_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_6_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_7_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_8_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_9_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_10_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_11_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_12_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_13_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_14_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |
| STAT_LIN_2_SLAVE_15_VERBAUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeigt an, ob dieser Slave verbaut ist oder nicht. Der Wert muss konstistent sein zum Wert FUNC.  0: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) gleich 0.  1: Funktion des LIN Slave aus der Kodierung (z. B. LIN_1_SLAVE_1_FUNC) ungleich 0. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | High | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| LIN_AUTOADRESSIERUNG | 0xA838 | - | Es wird die Autoadressierung der LIN-Layering-Slaves durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA838_R |
| TOUCH_COMMAND_SIA_LADEMODUS | 0xD210 | - | Lademodus des SIA setzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD210_D | - |
| TOUCH_COMMAND_SIA_FERTIGUNGSMODUS | 0xD211 | - | Setzen des SIA-spezifischen Fertigungsmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD211_D | - |
| TOUCHCOMMAND_SNAPIN_ADAPTER_SENSOR_KALIBRIEREN | 0xD4D4 | - | Initiierung der Kalibrierung der Hall-Sensorik im Touch Command SIA | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD4D4_D | - |
| STEUERN_LIN_RGB_MODULE | 0xD50A | - | Einsteuerung einzlener oder aller LED-Module am Steuergerät. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD50A_D | - |
| TOUCHCOMMAND_SNAPIN_ADAPTER_EMERGENCY_EJECT | 0xD50B | - | Auswerfen des Touch Command aus der Verriegelung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD50B_D | - |
| TOUCH_COMMAND_SIA_VERRIEGELUNG | 0xD50C | - | sperren und entsperren der Verriegelung des Snapin Adapters; | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD50C_D | - |
| TOUCH_COMMAND_SIA_ABFRAGE | 0xD50D | - | Abfrage der aktuellen Statusinformationen des Touch Command Snap-In Adapters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD50D_D |
| STATUS_LESEN_PIA | 0xD50F | - | Lesen des Status des PIA/Profils und der gespeicherten Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD50F_D |
| LEM_FASTA_DATEN | 0xD51F | - | * | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD51F_D |
| STATUS_LESEN_CAN_SIGNALS | 0xD7DD | - | Liest den Inhalt der relevanten CAN-Signale und liefert ihn zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7DD_D |
| STATUS_LIN_RGB_MODULE | 0xDA5A | - | Dieser Diagnosejob fragt den Status aller RGB-Module ab. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA5A_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| LESEN_AD_WERT_VERSORGUNG_AC_LIN | 0x4020 | STAT__WERT | Versorgungsspannung AC-LIN in Millivolt | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_XCP | 0x402A | - | schaltet die Nutzung von XCP ein oder aus | - | - | - | - | - | - | - | - | - | 2E | ARG_0x402A_D | - |
| LESEN_MODELLVERSION | 0x4032 | - | liest die Version des BMW-Modells aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4032_D |
| STEUERN_TMP_DEACTIVATION_DTC | 0x4034 | - | Steuerung zur temporären Deaktivierung des DTCs für 5 Sekunden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4034_D | - |
| STEUERN_TMP_ACTIVATION_SCHEDULING | 0x4035 | - | Steuerung zur temporören Aktivierung des LIN Scheduling für 5 Sekunden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4035_D | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_INTERNER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler: Keine Beschreibung vorhanden |
| 1 | RAM Fehler: Keine Beschreibung vorhanden |
| 2 | ROM Fehler: Keine Beschreibung vorhanden |
| 3 | Flash Fehler: Keine Beschreibung vorhanden |
| 4 | Fehler 4 aktiv: Keine Beschreibung vorhanden |
| 5 | Fehler 5 aktiv: Keine Beschreibung vorhanden |
| 6 | Fehler 6 aktiv: Keine Beschreibung vorhanden |
| 7 | Signal ungültig: Keine Beschreibung vorhanden |
