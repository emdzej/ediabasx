# pcu_10.prg

## General

|  |  |
| --- | --- |
| File | pcu_10.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 35 |
| Origin | BMW EI-24 Dr.H.Proebstle |
| Revision | 0.031 |
| Author | CONTINENTALAG EI-24 R.Wendler |
| ECU Comment | L6 Ersteinsatz F10 2011 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Power Control Unit |  |  |
| ORIGIN | string | BMW EI-24 Dr.H.Proebstle |  |  |
| REVISION | string | 0.031 |  |  |
| AUTHOR | string | CONTINENTALAG EI-24 R.Wendler |  |  |
| COMMENT | string | L6 Ersteinsatz F10 2011 |  |  |
| PACKAGE | string | 1.11 |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $04 report activated events

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

### _STEUERN_PCU_TEST

Dtagnose Steuerung des PCU UDS : $31 RoutineControl Request Service Id UDS : $F001 Sub-Parameter PCU_TEST

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x01 	: Start 0x02 	: Stop 0x03  	: Request results |
| DIRECTION | unsigned char | 0x00 : Stop 0x01 : Aufwärts laden 0x02 : Abwärts laden |
| TRENNELEMENT | unsigned char | 0x00 : Wechselrelay auf 24 Volt 0x01 : Wechselrelay Warten 0x02 : Wechselrelay auf 12 Volt |
| SOLLSPANNUNG_N1 | real | Spannungvorgabe für Netz 1 in 1mv Schritten |
| SOLLSPANNUNG_N2 | real | Spannungvorgabe für Netz 2 in 1mv Schritten |
| SOLLSTROM_N1 | real | Stromvorgabe N1  in 10mA Schritten |
| SOLLSTROM_N2 | real | Stromvorgabe N2  in 10mA Schritten |

### _SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### _STEUERN_CALIBTEMP

Kalibriert den Temperatursensor des DC_DC Wandlers UDS : $31 RoutineControl Request Service Id

| Name | Type | Description |
| --- | --- | --- |
| TEMPERATUR | real | Hier wird die für die Kalibrierung benötigte, mittels andrem Tempsensor gemesene Temperatur dem Wandler übergeban |

### _STEUERN_TESTMESSAGE

entlädt den SuperCap sofort UDS : $31 RoutineControl Request Service Id UDS : $F004 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x01 : Start 0x02 : Stop |

### _STEUERN_SPEICHER_LESEN

Lesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | Startadresse |
| ANZAHL | unsigned char | 0-255 |

### _STEUERN_CALIBI12U12

Kalibrierung Strom- und Spannungswerte des DC_DC Wandlers Es muessen immer alle vier Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. UDS : $31 RoutineControl Request Service Id

| Name | Type | Description |
| --- | --- | --- |
| I_N1_CALIB | unsigned char | I_N1 |
| I_N2_CALIB | unsigned char | I_N2 |
| U_N1_CALIB | unsigned char | U_N1 |
| U_N2_CALIB | unsigned char | U_N2 |

### _STEUERN_CALIBUN2OFFSET

Kalibrierung der Offsetspannung UN_2 des DC_DC Wandlers Korrekturbereich +/- 2V in 0,1V Schritten von -128 bis +127 bzw. 0x00-0xFF uebergeben werden UDS : $31 RoutineControl Request Service Id

| Name | Type | Description |
| --- | --- | --- |
| U_N2_CALIBOFFSET | char | U_N2_CALIBOFFSET |

### _STEUERN_NVRAM_LESEN

Lesen des Steuergeraete-Speichers Als Argumente werden uebergeben: NVRAM, Start-Adresse, Anzahl der Datenbytes

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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022E00 | Energiesparmode aktiv | 0 |
| 0x02FF2E | PCU: Test-DTC Applikation | 0 |
| 0x803D00 | PCU: Übertemperatur | 0 |
| 0x803D01 | PCU: Überspannung am Supercap | 1 |
| 0x803D02 | PCU: Fehler in der Hardware | 0 |
| 0x803D03 | PCU: Unterspannung am Supercap | 0 |
| 0x803D04 | PCU: Abschaltung mindestens einer Phase | 0 |
| 0x803D05 | PCU: Fehler im Trennelement | 1 |
| 0x803D06 | PCU: Fehler der Vierdrahtschnittstelle | 0 |
| 0x803D07 | PCU: Fehler Crashabschaltung | 0 |
| 0x803D08 | PCU: Senseleitung mit GND kurzgeschlossen | 0 |
| 0x803D09 | PCU: Senseleitung mit U_N1 kurzgeschlossen | 0 |
| 0x803D0A | PCU: Senseleitung unterbrochen (Schirmbruch) | 0 |
| 0x803D0B | PCU: Senseleitung mit U_HSV kurzgeschlossen | 0 |
| 0x803D0C | PCU: Supercap Widerstand zu hoch | 0 |
| 0x803D0D | PCU: Supercap Kapazitaet zu niedrig | 0 |
| 0x803D0E | PCU: Supercap State of Health zu niedrig | 0 |
| 0x803D0F | PCU: Selbstentladung zu hoch | 0 |
| 0x803D10 | PCU: 4DSS unplausibel | 0 |
| 0x803D11 | PCU: Supercap zu heiss | 0 |
| 0x803D12 | PCU: Supercap Equilibrierplatine defekt | 0 |
| 0x803D13 | PCU: Supercap Zelle Hochohmig | 0 |
| 0x803D14 | PCU: Supercap Zelle Kurzschluss | 0 |
| 0x803D15 | PCU: Supercap irreversibel desymetrierte Zelle | 0 |
| 0x803D16 | PCU: Supercap Spannungsbetriebsbereich nio | 0 |
| 0x803D17 | PCU: Supercap Spannungsbereich unplausibel | 0 |
| 0x803D18 | PCU: BNE dauerhafter Systemfehler | 0 |
| 0x803D19 | PCU: DSPSTAT | 0 |
| 0x803D41 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x803D42 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x803D43 | Codierung: Signatur für Daten ungültig | 0 |
| 0x803D44 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x803D45 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x803D50 | Flash: Fehler beim Löschen | 0 |
| 0x803D51 | Flash: Fehler beim Schreiben | 0 |
| 0x803D52 | Flash: Fehler beim Lesen | 0 |
| 0x803D53 | Flash: Fehler beim Vergleichen | 0 |
| 0xD48486 | PCU: CAN-BUS Fehler | 0 |
| 0xD48BFF | PCU: Test-DTC Netzwerk | 0 |
| 0xD49402 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT_ZGW | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4002 | Temp_SCSE | °C | - | unsigned int | - | - | 10 | -100 |
| 0x4003 | Spannung_SCSE | V | - | unsigned int | - | - | 100 | - |
| 0x4004 | nv_R_ist_guel | Ohm | - | unsigned int | - | - | 100000 | - |
| 0x4005 | nc_C_ist_guel | Farad | - | unsigned int | - | - | 100 | - |
| 0x4006 | 4DDS_unplausibel | Wert | - | unsigned char | - | - | - | - |
| 0x4007 | nv_Anz_sym_erf | Wert | - | unsigned int | - | - | - | - |
| 0x4008 | nv_Umin_Sp | Volt | - | unsigned int | - | - | 1000 | - |
| 0x4009 | Umax_Sp | V | - | unsigned int | - | - | 1000 | - |
| 0x400a | UN2 | V | - | unsigned char | - | - | 10 | - |
| 0x400b | Board Temp | °C | - | unsigned char | - | - | - | -100 |
| 0x400c | Trip_Flags | 0-n | - | 0xff | Trip_Flags | - | - | - |
| 0x400d | PhasenFehlerhaft | 0-n | - | 0xff | PhasenFehlerhaft | - | - | - |
| 0x400e | TE_KSOL | Wert | - | unsigned char | - | - | - | - |
| 0x400f | Vierdraht_ST_Fehler | 0-n | - | 0xff | Vierdraht_ST_Fehler | - | - | - |
| 0x4010 | Status_TE | 0-n | - | 0xff | Status_TE | - | - | - |
| 0x4011 | DSPSTAT | hex | - | unsigned char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x803D60 | EEPROM: Konfigurationsfehler | 0 |
| 0x803D61 | EEPROM: Fehler beim Schreiben | 1 |
| 0x803D62 | EEPROM: Fehler beim Lesen | 0 |
| 0x803D63 | EEPROM: Zugriffsfehler | 0 |
| 0x803D64 | EEPROM: Fehler beim Löschen | 0 |
| 0x803D66 | EEPROM: Fehler beim Vollständigen Schreiben | 0 |
| 0x803D67 | EEPROM: Fehler beim Vollständigen Lesen | 0 |
| 0xD48401 | PCU: Datenpuffer voll | 0 |
| 0xD48402 | PCU: Datenpuffer gelöscht | 0 |
| 0xD49401 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0xD49403 | VSM_EVENT_VEHICLESTATE | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4002 | Temp_SCSE | °C | - | unsigned int | - | - | 10 | -100 |
| 0x4003 | Spannung_SCSE | V | - | unsigned int | - | - | 100 | - |
| 0x4004 | nv_R_ist_guel | Ohm | - | unsigned int | - | - | 100000 | - |
| 0x4005 | nc_C_ist_guel | Farad | - | unsigned int | - | - | 100 | - |
| 0x4006 | 4DDS_unplausibel | Wert | - | unsigned char | - | - | - | - |
| 0x4007 | nv_Anz_sym_erf | Wert | - | unsigned int | - | - | - | - |
| 0x4008 | nv_Umin_Sp | Volt | - | unsigned int | - | - | 1000 | - |
| 0x4009 | Umax_Sp | V | - | unsigned int | - | - | 1000 | - |
| 0x400a | UN2 | V | - | unsigned char | - | - | 10 | - |
| 0x400b | Board Temp | °C | - | unsigned int | - | - | 10 | -100 |
| 0x400c | Trip_Flags | 0-n | - | 0xff | Trip_Flags | - | - | - |
| 0x400d | PhasenFehlerhaft | 0-n | - | 0xff | PhasenFehlerhaft | - | - | - |
| 0x400e | TE_KSOL | Wert | - | unsigned int | - | - | - | - |
| 0x400f | Vierdraht_ST_Fehler | 0-n | - | 0xff | Vierdraht_ST_Fehler | - | - | - |
| 0x4010 | Status_TE | 0-n | - | 0xff | Status_TE | - | - | - |
| 0x4011 | DSPSTAT | hex | - | unsigned int | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DC_DC_DATA_LESEN | 0xDA57 | - | Daten des DC-DC Wandlers lesen - Eingangs-/Ausgangsspannung - Eingangs-/Ausgangsstrom - Temperatur des DC-DC-Wandlers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA57 |
| VIERDRAHTSCHNITTSTELLE | 0xDA58 | - | Status Vierdrahtschnittstelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA58 |
| TRENNELEMENT | 0xDA59 | - | Trennelement öffnen/schließen; Trennelementzustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDA59 | RES_0xDA59 |
| SC_TABELLENSPEICHER | 0xDA5C | - | DATA des DC-DC Wandlers lesen Tabellenspeicher Modulspannung und Temperatur, Zeiten summiert in Minuten; Löschen des Tabellenspeichers | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDA5C | RES_0xDA5C |
| SC_HISTORIE | 0xDA5D | - | Status Supercap Historie; Supercap Historie löschen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDA5D | RES_0xDA5D |
| STEUERN_TAUSCH_ENERGIESPEICHER_REGISTRIEREN | 0xDBBD | - | Der Tausch des Energiespeichers wird im Steuergerät registriert. Einige Eingangswerte werden auf Default gesetzt. | - | - | - | - | - | - | - | - | - | 31 | - | - |

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM, internal |
| 0x07 | UIFM | User Info Field Memory |
| 0x08 | VODM | Vehicle Order Data Memory |
| 0x09 | FLASHX | Flash EPROM, external |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |

### TRIP_FLAGS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | TZ1 Signal: Über-/Unterspannung in Netz1  |
| 0x02 | TZ2 Signal: Überspannung in Netz2  |
| 0x03 | TZ1 Signal: Über-/Unterspannung in Netz1 TZ2 Signal: Überspannung in Netz2  |
| 0x04 | TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal  |
| 0x05 | TZ1 Signal: Über-/Unterspannung in Netz1 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal  |
| 0x06 | TZ2 Signal: Überspannung in Netz2 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal  |
| 0x07 | TZ1 Signal: Über-/Unterspannung in Netz1 TZ2 Signal: Überspannung in Netz2 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal  |
| 0x08 | TZ4 Signal: Überstrom in Netz2  |
| 0x09 | TZ1 Signal: Über-/Unterspannung in Netz1 TZ4 Signal: Überstrom in Netz2  |
| 0x0A | TZ2 Signal: Überspannung in Netz2 TZ4 Signal: Überstrom in Netz2  |
| 0x0B | TZ1 Signal: Über-/Unterspannung in Netz1 TZ2 Signal: Überspannung in Netz2 TZ4 Signal: Überstrom in Netz2  |
| 0x0C | TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal TZ4 Signal: Überstrom in Netz2  |
| 0x0D | TZ1 Signal: Über-/Unterspannung in Netz1 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal TZ4 Signal: Überstrom in Netz2  |
| 0x0E | TZ2 Signal: Überspannung in Netz2 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal TZ4 Signal: Überstrom in Netz2  |
| 0x0F | TZ1 Signal: Über-/Unterspannung in Netz1 TZ2 Signal: Überspannung in Netz2 TZ3 Signal: Überstrom in Netz1 und Trip Hold Signal TZ4 Signal: Überstrom in Netz2  |
| 0xFF | ungültiger Wert |

### VIERDRAHT_ST_FEHLER

| WERT | UWTEXT |
| --- | --- |
| 0x00 | fehlerfrei |
| 0x01 | Überspannung |
| 0x02 | Unterspannung |
| 0x03 | Über- und Unterspannung |
| 0x06 | Kurzschluss |
| 0x07 | Leitungsbruch |
| 0x08 | undefinierter Bereich |
| 0xff | ungueltiger Wert |

### PHASENFEHLERHAFT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Phase 1 fehlerhaft;  |
| 0x02 | Phase 2 fehlerhaft;  |
| 0x03 | Phase 1 fehlerhaft; Phase 2 fehlerhaft;  |
| 0x04 | Phase 3 fehlerhaft;  |
| 0x05 | Phase 1 fehlerhaft; Phase 3 fehlerhaft;  |
| 0x06 | Phase 2 fehlerhaft; Phase 3 fehlerhaft;  |
| 0x07 | Phase 1 fehlerhaft; Phase 2 fehlerhaft; Phase 3 fehlerhaft;  |
| 0xff | ungueltiger Wert |

### STATUS_TE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | WREL_24  = 0 |
| 0x01 | WREL_WAIT |
| 0x02 | WREL_12 |
| 0x03 | WREL_12_NS |
| 0x04 | WREL_24_NS_NC |
| 0x05 | WREL_12_NC |
| 0x07 | WREL_12_NS_NC =  7 |
| 0x08 | WREL_ERROR |
| 0x09 | WREL_SHORT |
| 0x0a | WREL_OPEN |
| 0x0b | WREL_OPEN_OR_SHORT |
| 0xff | ungueltiger Wert |

### RES_0XDA5D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC_DELTA_U_BEREICH1_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 1 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_DELTA_U_BEREICH2_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 2 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_DELTA_U_BEREICH3_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 3 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_DELTA_U_BEREICH4_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 4 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_DELTA_U_BEREICH5_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 5 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_DELTA_U_BEREICH6_HFK_WERT | - | - | unsigned long | - | - | - | - | - | Häufigkeit des Bereichs 6 der Spannungsdifferenz Umax-Umin  |
| STAT_SC_EQUILIBRIERUNG_LETZTER_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die letzte Equilibrierung erfolgreich war |
| STAT_SC_EQUILIBRIERUNG_VOR_2_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die vorletzte Equilibrierung erfolgreich war |
| STAT_SC_EQUILIBRIERUNG_VOR_3_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die drittletzte Equilibrierung erfolgreich war |
| STAT_SC_EQUILIBRIERUNG_VOR_4_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die viertletzte Equilibrierung erfolgreich war |
| STAT_SC_EQUILIBRIERUNG_VOR_5_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die fünftletzte Equilibrierung erfolgreich war |
| STAT_SC_EQUILIBRIERUNG_ANFORDERUNG_LETZTER_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die letzte Equilibrierung angefordert wurde |
| STAT_SC_EQUILIBRIERUNG_ANFORDERUNG_VOR_2_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die vorletzte Equilibrierung angefordert wurde |
| STAT_SC_EQUILIBRIERUNG_ANFORDERUNG_VOR_3_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die drittletzte Equilibrierung angefordert wurde |
| STAT_SC_EQUILIBRIERUNG_ANFORDERUNG_VOR_4_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die viertletzte Equilibrierung angefordert wurde |
| STAT_SC_EQUILIBRIERUNG_ANFORDERUNG_VOR_5_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand, bei der die fünftletzte Equilibrierung angefordert wurde |
| STAT_KM_STAND_AKTUELL_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand beim letzten Motorstart  |
| STAT_KM_STAND_VOR_1_MOTORSTART_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand beim vorletzten Motorstart  |
| STAT_KM_STAND_VOR_2_MOTORSTART_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand beim drittletzten Motorstart  |
| STAT_KM_STAND_VOR_3_MOTORSTART_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand beim viertletzten Motorstart  |
| STAT_KM_STAND_VOR_4_MOTORSTART_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand beim fünftletzten Motorstart  |
| STAT_SC_KAPAZITAET_AKTUELL_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazität des SC (aktuelle Messung)  |
| STAT_SC_KAPAZITAET_VOR_1_MOTORSTART_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazität des SC (Messung vor 1 Motorstart)  |
| STAT_SC_KAPAZITAET_VOR_2_MOTORSTARTS_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazität des SC (Messung vor 2 Motorstarts)  |
| STAT_SC_KAPAZITAET_VOR_3_MOTORSTARTS_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazität des SC (Messung vor 3 Motorstarts)  |
| STAT_SC_KAPAZITAET_VOR_4_MOTORSTARTS_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazität des SC (Messung vor 4 Motorstarts)  |
| STAT_SC_INNENWIDERSTAND_AKTUELL_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Innenwiderstand des SC (aktuelle Messung)  |
| STAT_SC_INNENWIDERSTAND_VOR_1_MOTORSTART_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Innenwiderstand des SC (Messung vor 1 Motorstart)  |
| STAT_SC_INNENWIDERSTAND_VOR_2_MOTORSTART_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Innenwiderstand des SC (Messung vor 2 Motorstart)  |
| STAT_SC_INNENWIDERSTAND_VOR_3_MOTORSTART_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Innenwiderstand des SC (Messung vor 3 Motorstart)  |
| STAT_SC_INNENWIDERSTAND_VOR_4_MOTORSTART_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Innenwiderstand des SC (Messung vor 4 Motorstart)  |
| STAT_SC_SOH_AKTUELL_WERT | % | - | unsigned char | - | - | - | - | - | StateOfHealth des SC (aktuelle Messung)  |
| STAT_SC_SOH_VOR_1_MOTORSTART_WERT | % | - | unsigned char | - | - | - | - | - | StateOfHealth des SC (Messung vor 1 Motorstart)  |
| STAT_SC_SOH_VOR_2_MOTORSTART_WERT | % | - | unsigned char | - | - | - | - | - | StateOfHealth des SC (Messung vor 2 Motorstart)  |
| STAT_SC_SOH_VOR_3_MOTORSTART_WERT | % | - | unsigned char | - | - | - | - | - | StateOfHealth des SC (Messung vor 3 Motorstart)  |
| STAT_SC_SOH_VOR_4_MOTORSTART_WERT | % | - | unsigned char | - | - | - | - | - | StateOfHealth des SC (Messung vor 4 Motorstart)  |
| STAT_SC_UEBERSPANNUNG_ANZ_AKTUELL_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags aktueller Motorlauf  |
| STAT_SC_UEBERSPANNUNG_ANZ_VOR_1_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags letzter Motorlauf  |
| STAT_SC_UEBERSPANNUNG_ANZ_VOR_2_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags vorletzter Motorlauf  |
| STAT_SC_UEBERSPANNUNG_ANZ_VOR_3_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags drittletzter Motorlauf  |
| STAT_SC_UEBERSPANNUNG_ANZ_VOR_4_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags viertletzter Motorlauf  |
| STAT_SC_UNTERSPANNUNG_ANZ_AKTUELL_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags aktueller Motorlauf  |
| STAT_SC_UNTERSPANNUNG_ANZ_VOR_1_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags letzter Motorlauf  |
| STAT_SC_UNTERSPANNUNG_ANZ_VOR_2_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags vorletzter Motorlauf  |
| STAT_SC_UNTERSPANNUNG_ANZ_VOR_3_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags drittletzter Motorlauf  |
| STAT_SC_UNTERSPANNUNG_ANZ_VOR_4_MOTORSTART_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags viertletzter Motorlauf  |
| STAT_SC_TAUSCH_LETZTER_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand des letzten Supercaptauschs  |
| STAT_SC_TAUSCH_VOR_2_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand des vorletzten Supercaptauschs  |
| STAT_SC_TAUSCH_VOR_3_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand des drittletzten Supercaptauschs  |
| STAT_SC_TAUSCH_VOR_4_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand des viertletzten Supercaptauschs  |
| STAT_SC_TAUSCH_VOR_5_WERT | km | - | unsigned long | - | - | - | - | - | Kilometerstand des fünftletzten Supercaptauschs  |
| STAT_SC_UEBERSPANNUNG_HFK_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Überspannungsflags gesamt  |
| STAT_SC_UNTERSPANNUNG_HFK_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl Unterspannungsflags gesamtf  |
| STAT_SC_SOS_WERT | % | - | unsigned char | - | - | - | 255.0 | - | StateOfSymmetry des SC  |
| STAT_SC_VERLETZUNG_1_STROMBEREICH_KOM_HKF_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl  Verletzung Strombereich 1 der 4DSS |
| STAT_SC_VERLETZUNG_2_STROMBEREICH_KOM_HKF_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl  Verletzung Strombereich 2der 4DSS |
| STAT_SC_EQUILIBRIERUNG_GESTARTET_ANZ_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl gestarteter Equilibrierungen des SC  |
| STAT_SC_EQUILIBRIERUNG_ERFOLGREICH_ANZ_WERT | - | - | unsigned int | - | - | - | - | - | Anzahl erfolgbreich beendeter Equilibrierungen des SC  |
| STAT_SC_MIN_TEMP_WERT | °C | - | unsigned int | - | - | - | 10.0 | -100.0 | Minimal Temperatur am Supercap |
| STAT_SC_MAX_TEMP_WERT | °C | - | unsigned int | - | - | - | 10.0 | -100.0 | Maximal Temperatur am Supercap |
| STAT_SC_MIN_SPANNUNG_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Minimal Spannung am Supercap |
| STAT_SC_MAX_SPANNUNG_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Maximal Spannung am Supercap |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_0_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_1_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_2_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_3_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_4_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_5_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_6_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_7_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_8_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_9_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_10_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_11_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_12_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_13_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_14_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_15_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_16_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_17_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_18_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_19_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_20_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_21_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_22_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_23_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_24_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_25_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_26_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_27_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_28_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_29_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_30_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_31_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_32_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_33_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_34_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_35_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_36_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_37_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_38_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_39_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_40_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_41_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_42_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_43_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_44_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_45_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_46_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_47_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_48_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_49_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_KAPAZITAET_NACH_X_BETRIEBSSTUNDEN_50_WERT | F | - | unsigned int | - | - | - | 100.0 | - | Kapazitaet des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_0_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_1_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_2_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_3_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_4_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_5_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_6_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_7_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_8_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_9_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_10_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_11_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_12_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_13_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_14_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_15_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_16_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_17_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_18_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_19_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_20_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_21_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_22_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_23_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_24_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_25_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_26_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_27_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_28_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_29_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_30_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_31_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_32_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_33_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_34_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_35_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_36_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_37_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_38_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_39_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_40_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_41_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_42_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_43_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_44_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_45_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_46_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_47_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_48_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_49_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_WIDERSTAND_NACH_X_BETRIEBSSTUNDEN_50_WERT | Ohm | - | unsigned int | - | - | - | 100000.0 | - | Widerstand des Supercaps alle 100 Betriebsstunden |
| STAT_SC_QELAD_MSA_WERT | C | - | unsigned long | - | - | 989.0 | 18.0 | - | Verbrauchte Ladungsmenge aus BNE-Speicher in MSA Stoppphase  |

### ARG_0XDA5D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SC_HISTORIE_LOESCHEN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Historie: 0: -; 1: löschen |

### RES_0XDA58

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC_SPANNUNGSFLAG | 0-n | - | unsigned char | - | TAB_PCU_SC_SPANNUNGSFLAG | - | - | - | Spannungsflag Vierdrahtschnittstelle  |
| STAT_SC_TEMPERATUR_WERT | °C | - | int | - | - | - | 10.0 | -100.0 | Temperatur Vierdrahtschnittstelle  |

### TAB_PCU_SC_SPANNUNGSFLAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Überspannung |
| 0x02 | Unterspannung |
| 0x03 | Über- und Unterspannung |
| 0x04 | Statusflagfehler |
| 0xFF | Ungueltiger Status |

### RES_0XDA59

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRENNELEMENT | 0-n | - | unsigned char | - | TAB_PCU_TRENNELEMENT | - | - | - | Trennelementzustand |

### ARG_0XDA59

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRENNELEMENT | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Trennelement: 0: öffnen; 1: schließen; |

### RES_0XDA5C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEREICH_U1_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U1_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U1_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U1_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U1_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U1_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U1_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U1_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U < 8V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U2_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U2_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U2_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U2_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U2_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U2_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U2_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U2_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 8V < U < 12V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U3_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U3_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U3_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U3_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U3_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U3_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U3_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U3_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 12V < U < 14,4V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U4_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U4_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U4_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U4_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U4_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U4_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U4_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U4_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 14,4V < U < 16V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U5_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U5_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U5_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U5_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U5_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U5_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U5_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U5_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16V < U < 16,8V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U6_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U6_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U6_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U6_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U6_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U6_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U6_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U6_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 16,8V < U < 17,6V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U7_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U7_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U7_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U7_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U7_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U7_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U7_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U7_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 17,6V < U < 18,4V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U8_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U8_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U8_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U8_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U8_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U8_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U8_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U8_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich 18,4V < U < 19,2V im Temperaturbereich T > 60°C |
| STAT_BEREICH_U9_T1_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich T < -20°C |
| STAT_BEREICH_U9_T2_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich  -20°C < T < 0°C |
| STAT_BEREICH_U9_T3_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich 0°C < T < 20°C |
| STAT_BEREICH_U9_T4_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich 20°C < T < 30°C |
| STAT_BEREICH_U9_T5_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich 30°C < T < 40°C |
| STAT_BEREICH_U9_T6_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich 40°C < T < 50°C |
| STAT_BEREICH_U9_T7_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V im Temperaturbereich 50°C < T < 60°C |
| STAT_BEREICH_U9_T8_WERT | - | - | unsigned long | - | - | - | - | - | Spannungsbereich U > 19,2V  im Temperaturbereich T > 60°C |

### ARG_0XDA5C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TABELLENSPEICHER_LOESCHEN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Tabellenspeicher: 0: -; 1: löschen |

### RES_0XDA57

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_N1_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Spannung im Netz 1  |
| STAT_SPANNUNG_N2_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Spannung im Netz 2 |
| STAT_STROM_N1_WERT | A | - | unsigned int | - | - | - | 100.0 | - | Strom im Netz 1 |
| STAT_STROM_N2_WERT | A | - | unsigned int | - | - | - | 100.0 | - | Strom im Netz 2 |
| STAT_TEMPERATUR_WERT | °C | - | int | - | - | - | 10.0 | -100.0 | Temperatur des DC-DC-Wandlers |
| STAT_TRENNELEMENTZUSTAND | 0-n | - | unsigned char | - | TAB_PCU_TRENNELEMENT | - | - | - | Status Trennelement |

### TAB_PCU_TRENNELEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | 24 Volt |
| 0x01 | Wartezeit 24V nach 12V |
| 0x02 | 12 Volt |
| 0xFF | undefinierter Zustand |
