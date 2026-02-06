# RAM01.prg

## General

|  |  |
| --- | --- |
| File | RAM01.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 192 |
| Origin | BMW EE-61 Stefan_Kroll |
| Revision | 2.007 |
| Author | ASSYSTEM-GERMANY-GMBH EE-622 PETRIC |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Receiver Audio Module |  |  |
| ORIGIN | string | BMW EE-61 Stefan_Kroll |  |  |
| REVISION | string | 2.007 |  |  |
| AUTHOR | string | ASSYSTEM-GERMANY-GMBH EE-622 PETRIC |  |  |
| COMMENT | string | - |  |  |
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

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STEUERN_ETH_LEARN_PORT_CONFIGURATION

Stores the current link state (link up/link down) of all external ports of the ecu. The stored port configuration can then be used to detect missing, or additional ECUs during runtime. UDS   : $31 RoutineControl $01 StartRoutine $1040

_No arguments._

### STATUS_ETH_READ_PHY_REGISTER

Reads an arbitrary PHY, MAC or switch register. UDS   : $31 RoutineControl $01 StartRoutine $1041

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte: REG_READ_RANGE: Number of registers that shall be read (enumeration starts at 1). {uint8,  0= no write, 1-255= write 1 to 255 registers } --------- followed by:    REG_ADDR[] - each entry 4byte uint32. Addresses to be read from. If the number of provided addresses is not equal to REG_READ_RANGE, the job execution shall be aborted. Each address must be converted to a unique PHY, MAC or switch register address. The conversion shall be handled individually by each ECU. The used mapping scheme shall take into account all available PHYs, MACs and switches the ECU is equipped with and that are visible externally, i.e., via an connector. --------- followed by 1 byte: REG_READ_RANGE: Number of registers that shall be read (enumeration starts at 1). {uint8,  0= no write, 1-255= write 1 to 255 registers } --------- followed by:  REG_READ_LENGTH[] - each entry 1 byte uint8. Entry n in REG_READ_LENGTH[] specifies how many bytes shall be read from the register address defined by entry n in REG_ADDR[]. Enumeration shall start at 1. If the number of entries is not equal to REG_READ_RANGE, the job execution shall be aborted. |

### STATUS_ETH_ARP_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1043

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte, uint8: IP_VERSION_TAB Used IP version of the network interface for which the ARP table shall be returned. IP_VERSION_TAB = 0 if the entry uses IPv4, IP_VERSION_TAB = 1 if the entry uses IPv6. --------- followed by 16 bytes ARP_TABLE_FOR_IP_ADDRESS: IP address of the network interface for which the ARP table shall be returned. IP address starting with the first octet (e.g., byte[0]=0xC0, byte[1]=0xA8, byte[2]=0x00, byte[3]=0x01 for IP address 192.168.0.1) For IPv4: byte[0] - byte[3]=IPv4 address, byte[4-15]=0. For IPv6: byte[0-15]=IPv6 address. --------- |

### STATUS_ETH_IP_CONFIGURATION

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1045

| Name | Type | Description |
| --- | --- | --- |
| INTERNAL_EXTERNAL_ADDRESS | unsigned char | Identifies the network interface and its corresponding IP address (internal, external, all, further, optional application specific address) for which the IP configuration shall be returned and for which an optional gratuitous ARP shall be triggered. 1 byte uint8 {0= request internal IP address, 1= request external IP address (assigned by tester, cf. [100]) 0xff = request all IP-addresses, else = further, application specific IP address} |
| TRIGGER_GRATUITOUS_ARP | unsigned char | Defines whether the ECU shall send out a gratuitous ARP for the requested network interface. The gratuitous ARP shall be sent as soon as possible after being triggered. 1 byte uint8 {1= send gratuitous ARP for the requested network interface,  else = do not send gratuitous ARP} |

### STEUERN_ETH_WRITE_PHY_REGISTER

Writes an arbitrary PHY, MAC or switch register. UDS   : $31 RoutineControl $01 StartRoutine $104D

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte REG_WRITE_PROTECT, uint8: To avoid misuse or an inadvertent write of registers, REG_WRITE_PROTECT must be set to 0xEE in order to execute the job. The job execution shall be aborted if the parameter REG_WRITE_PROTECT is != 0xEE. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers ) --------- followed by:  REG_ADDR[] - each entry 4byte uint32. Addresses that shall be written to. If the number of provided addresses is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Each address must be converted to a unique PHY, MAC or switch register address. The conversion shall be handled individually by each ECU. The used mapping scheme shall take into account all available PHYs, MACs and switches the ECU is equipped with and that are visible externally, i.e., via an connector. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_LENGTH[] - each entry 1 byte uint8. Entry n in REG_WRITE_LENGTH[] specifies how many bytes shall be written to the register address defined by entry n in REG_ADDR[]. Enumeration shall start at 1. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_DATA[] - each entry 8 bytes uint64. Entry n in REG_WRITE_DATA[] provides the data that shall be written to the register address defined by entry n in REG_ADDR[]. The amount of bytes (starting with the least significant byte) that are actually written are defined by entry n in REG_WRITE_LENGTH[]. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Enumeration shall start at 1. |

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### STATUS_VERSION_INFO

Ausgabe der Versionen der internen Komponenten

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
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
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
| 0x3B30 | Elektrische Wasserpumpe 22 | 1 |
| 0x3B40 | Elektrische Wasserpumpe 23 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
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
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C10 | Klimabedieneinheit | 1 |
| 0x4C20 | Klimabedieneinheit Ext | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x6700 | Hochdruck- Temperatursensor 1 | 1 |
| 0x6710 | Niederdruck- Temperatursensor 1 | 1 |
| 0x6720 | Elektrisches Expansionsventil | 1 |
| 0x6730 | Kältekreislauf Dreiwegeventil 1 | 1 |
| 0x6740 | Unbelüfteter Innenraumtemperaturfühler 1 | 1 |
| 0x6750 | Waschventilblock | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
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
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5B50 | AR (augmented reality) Kamera | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5C10 | Wasserstand Sensor 1 | 1 |
| 0x5C18 | Wasserstand Sensor 2 | 1 |
| 0x5C20 | Diebstahlschutz Client für Airbag | 1 |
| 0x5C28 | Diebstahlschutz Client für Lenkrad | 1 |
| 0x5C30 | zentrale Lenkrad Elektronik | 1 |
| 0x5C40 | Funkempfänger vorne links | 1 |
| 0x5C44 | Funkempfänger vorne rechts | 1 |
| 0x5C48 | Funkempfänger hinten links | 1 |
| 0x5C4C | Funkempfänger hinten rechts | 1 |
| 0x5C50 | Türgriffelektronik Fahrer | 1 |
| 0x5C54 | Türgriffelektronik Beifahrer | 1 |
| 0x5C58 | Türgriffelektronik Fahrer hinten | 1 |
| 0x5C5C | Türgriffelektronik Beifahrer hinten | 1 |
| 0x5C60 | Sitzheizung Fahrer dritte Sitzreihe | 1 |
| 0x5C68 | Sitzheizung Beifahrer dritte Sitzreihe | 1 |
| 0x5C70 | Armauflagenheizung mitte hinten | 1 |
| 0x5C78 | Armauflagenheizung + Infrarotheizung Mittelkonsole vorne | 1 |
| 0x5C80 | Infrarotheizung Fahrer | 1 |
| 0x5C84 | Infrarotheizung Beifahrer | 1 |
| 0x5C88 | Infrarotheizung vorne | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
| 0x5E4F | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer oben | 1 |
| 0x5E50 | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer unten | 1 |
| 0x5E51 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne oben | 1 |
| 0x5E52 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne unten | 1 |
| 0x5E53 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten oben | 1 |
| 0x5E54 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten unten | 1 |
| 0x5E55 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne oben | 1 |
| 0x5E56 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne unten | 1 |
| 0x5E57 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten oben | 1 |
| 0x5E58 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten unten | 1 |
| 0x5E59 | Innenbeleuchtung Hochtöner Fahrertür vorne | 1 |
| 0x5E5A | Innenbeleuchtung Hochtöner Beifahrertür vorne | 1 |
| 0x5E5B | Innenbeleuchtung Mitteltöner Fahrertür vorne | 1 |
| 0x5E5C | Innenbeleuchtung Mitteltöner Beifahrertür vorne | 1 |
| 0x5E5D | Innenbeleuchtung Mitteltöner Fahrertür hinten | 1 |
| 0x5E5E | Innenbeleuchtung Mitteltöner Beifahrertür hinten | 1 |
| 0x5E5F | Innenbeleuchtung Centerspeaker | 1 |
| 0x5E60 | Innenbeleuchtung Fireplace Mittelkonsole vorne | 1 |
| 0x5E61 | Innenbeleuchtung Fireplace Mittelkonsole hinten | 1 |
| 0x5E62 | Innenbeleuchtung Konturlinie Fahrertür vorne hinten | 1 |
| 0x5E63 | Innenbeleuchtung Konturlinie Fahrertür hinten hinten | 1 |
| 0x5E64 | Innenbeleuchtung Konturlinie Beifahrertür vorne hinten | 1 |
| 0x5E65 | Innenbeleuchtung Konturlinie Beifahrertür hinten hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5E90 | Stromverteiler vorne | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
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
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
| 0xF080 | Motorrad Radiobedienteil | 1 |
| 0xF090 | Motorrad Kombischalter links | 1 |
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
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
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
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroen |
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
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
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
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
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
| 0x0091 | Mahle |
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
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x00B5 | Fishman Thermo Technologies  LTD |
| 0x00B6 | Novalog Ltd |
| 0x00B7 | Hanon Systems USA |
| 0x00B8 | Leggett & Platt Automotive Group |
| 0x00B9 | Tremec |
| 0x00BA | Check Corporation |
| 0x00BB | Federal-Mogul Corporation |
| 0x00BC | fischer automotive systems |
| 0x00BD | Hi-Lex Europe GmbH |
| 0x00BE | SGX Sensortech |
| 0x00BF | AGM Automotive |
| 0x00C0 | Melecs |
| 0x00C1 | Robertshaw Controls Company |
| 0x00D0 | Dometic |
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
| 0x013A | ISSI Integrated Silicon Solution Inc |
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

### ARG_0X1023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION | + | - | 0-n | high | unsigned char | - | EXTERNAL_HSFZ_ACTIVATION_TAB | - | - | - | - | - | Aktiviert bzw. deaktiviert den externen HSFZ. |

### ARG_0X1046_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex des zur diagnostizierenden Ports/PHYs (beginnend bei Port 0). Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1047_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1048_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, an dem der Test gestartet werden soll. Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports)  Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |
| LOOPBACK_MODE | + | - | 0-n | high | unsigned char | - | ETH_LOOPBACK_MODE_TAB | - | - | - | - | - | 1 = internal Loopback-Mode, 2 = external Loopback-Mode, sonst = ungültig |

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0X4110_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIKROFONVERWENDUNG | 0-n | high | unsigned char | - | TAB_Mikrofonverwendung | - | - | - | - | - | Testweises Abschalten der Mikrofone für ALEV4 |

### ARG_0XA000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GONG_SINK | + | - | 0-n | high | unsigned char | - | TAB_GONG_SINK | - | - | - | - | - | Senke |
| ANGLE | + | - | ° | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 0.0 | 360.0 | Richtung |
| DISTANCE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 83.0 | Abstandsäquivalent |
| SOUND_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_SOUND_SIGNAL | - | - | - | - | - | legt das auszugebende Signal fest |
| GONG_DURATION | + | - | 0-n | high | unsigned char | - | TAB_GONG_DURATION | - | - | - | - | - | Dauer |

### ARG_0XA001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | Ausgangskanal |
| FREQUENCY | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 20.0 | 20000.0 | Frequenz in Hz Wertebereich 20 - 20k |
| LEVEL | + | - | - | - | unsigned int | - | - | -8.0 | 1.0 | 0.0 | -90.0 | 0.0 | Pegel [dB], Genauigkeit in 1/8dB |

### ARG_0XA003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANGLE | + | - | ° | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | 0.0 | 359.0 | Richtung |
| DISTANCE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Abstandsäquivalent |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUROUTINE_WERT | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Für den Testverbau wird das folgende Bitfeld verwendet, mit dem mehrere Peripherieelemte geprüft werden können.  0x 00 00 00 00: gesamte Peripherie 0x 00 00 00 01: Entertainment Lautsprecher 0x 00 00 00 08: Fußgängerschutz Lautsprecher (VSG) 0x 00 00 00 10: Abgasanlagen Lautsprecher (aAGA) 0x 00 00 00 20: Mikrofone 0x 00 00 00 40: AM/FM Antennen 0x 00 00 00 80: DAB Antenne(n) 0x 00 00 01 00: SXM Antenne 0x 00 00 02 00: TV Antennen 0x 00 00 04 00: TV CI+ Kartenleser 0x 00 00 08 00: Lichtinszenierung |

### ARG_0XA021_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENCY_WERT | + | - | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequenz in Hz |
| LEVEL_WERT | + | - | - | - | unsigned int | - | - | -8.0 | 1.0 | 0.0 | -90.0 | 0.0 | Pegel des für die Impedanzmessung angeforderten Signals [dB], Genauigkeit in 1/8dB |
| AUDIOCHANNEL | + | - | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | bezeichnet den Kanal, auf dem gemessen werden soll |
| TIME_WERT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 200.0 | - | legt die Dauer der Messung in ms fest |

### ARG_0XA036_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellen der Lautstärke oder der Offset des Audiosignals, das mit ARG_AUDIO_SIGNAL definiert ist. |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_EARLY_AUDIO_SOURCE | - | - | - | - | - | gibt an, welche Lautstärke verstellt oder ausgelesen werden soll Default: 0 |

### ARG_0XA039_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAB_VOLUME_AUDIO_SOURCE | - | - | - | - | - | gibt an, welche Lautstärke ausgelesen werden soll Default: 0 |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |
| ARG_RPM | + | - | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Umdrehungen pro Minute [rpm] |

### ARG_0XA082_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA_TO_RESET | + | - | 0-n | high | unsigned char | - | TAB_RESET_ELEMENT | - | - | - | - | - | Elemente, die gelöscht werden sollen. |
| PROFILE_TO_RESET | + | - | 0-n | high | unsigned char | - | TAB_RESET_PROFILE | - | - | - | - | - | Profil, für welches die Elemente gelöscht werden sollen. |

### ARG_0XA0CA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |

### ARG_0XA0CC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | high | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | Ausgangskanäle |
| LEVEL | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pegel |

### ARG_0XA142_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WAVEBAND | + | - | 0-n | high | unsigned char | - | TAB_WAVEBAND | - | - | - | - | - | AM: Suche der besten AM-Station FM: Suche der besten FM-Station |

### ARG_0XA144_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_PREACTIVATION_MODE_STATE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0b1: MPFA aktiviert; SXM_MPFA muss ebenfalls verarbeitet werden. 0b0: MPFA wird nicht aktiviert bzw. Aktivierung wird beendet. SXM_MPFA muss nicht beachtet werden. |
| SXM_MPFA | + | - | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | - | - | Beinhaltet Kanal-Paket |

### ARG_0XA145_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOUDSPEAKER_OUTSIDE | + | - | 0-n | high | unsigned char | - | TAB_ASD_EXT_SPEAKER | - | - | - | - | - | Funktion/Lautsprecher die geprüft werden soll (ASD-aussen, VSG) |
| DURATION | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeitdauer der Testtonausgabe auf den Außenlautsprechern |

### ARG_0XA410_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASD_FUNCTION | + | - | 0-n | high | unsigned char | - | TAB_ASD_FUNCTION | - | - | - | - | - | Funktion die aktiviert oder deaktiviert werden soll |
| OPERATION_MODE | + | - | 0-n | high | unsigned char | - | TAB_OPERATION_MODE | - | - | - | - | - | Betriebszustand der hergestellt werden soll |

### ARG_0XA412_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASD_ADDITIONAL_FUNCTION | + | - | 0-n | high | unsigned char | - | TAB_ASD_ADDITIONAL_FUNCTION | - | - | - | - | - | Funktion die aktiviert oder deaktiviert werden soll |
| OPERATION_MODE | + | - | 0-n | high | unsigned char | - | TAB_OPERATION_MODE | - | - | - | - | - | Betriebszustand der hergestellt werden soll |

### ARG_0XA414_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATASET_TYPE | + | - | 0-n | high | unsigned char | - | TAB_DATASET_TYPE | - | - | - | - | - | Abzufragender Datensatz (siehe TAB_DATASET_TYPE) |

### ARG_0XA416_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATASET_TYPE | + | - | 0-n | high | unsigned char | - | TAB_DATASET_TYPE | - | - | - | - | - | Datensatz, dessen Checksumme ermittelt werden soll |

### ARG_0XA430_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOADR_OPERATION | + | - | 0-n | high | unsigned char | - | TAB_AUTOADR_OPERATION | - | - | - | - | - | Steuert die Operation für die Autoadressierung (löschen, starten) |

### ARG_0XA441_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | high | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | zu messender Kanäle |

### ARG_0XA442_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOCHANNEL | + | - | 0-n | high | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | - | - | zu messender Kanäle |

### ARG_0XA450_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION | + | - | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |

### ARG_0XA451_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 255.0 | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |
| RPM | + | - | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Umdrehungen pro Minute [RPM] |

### ARG_0XE2C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQ_KHZ | kHz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | AM-Frequenz: Wechsel auf AM und Einstellung AM-Frequenz  FM-Frequenz: Wechsel auf FM und Einstellung FM-Frequenz |

### ARG_0XE2CA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SXM_TEL_NO | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | SXM-Telefonnummer (max. 35-stellig) |

### ARG_0XE2D0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TV_REGION | 0-n | high | unsigned char | - | TAB_TV_REGION | - | - | - | - | - | zu setzende TV-Region |

### ARG_0XE2D2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CHANNEL_NUMBER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Kanal-Nr. |

### ARG_0XE2D4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST_IMAGE | 0-n | high | unsigned char | - | TAB_TEST_IMAGE | - | - | - | - | - | Testbild-Typ |

### ARG_0XE2F0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIMULATION_MODUS | 0-n | high | unsigned char | - | TAB_SIMULATION_MODUS | - | - | - | - | - | simulierter Übertemperaturstatus |

### ARG_0XE311_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | ID des LIN-RGB-Moduls (Busposition vom Steuergerät aus gesehen)  0: Alle Module am Bus;  ungleich 0: ID des entsprechenden Moduls |
| EIN_AUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Zeigt an, ob die Beleuchtung ein- oder ausgeschaltet werden soll:  1: Ein  0: Aus  |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Helligkeitswert der Beleuchtung (0% - 100%) |
| ROTWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert der roten LED (0-254) |
| GRUENWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert der grünen LED (0 - 254) |
| BLAUWERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert der blauen LED (0 - 254) |
| ZEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Zeit (in s) für die die LEDs mit den gewählten Werten angesteuert werden. |

### ARG_0XE344_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIMULATION_MODUS | 0-n | high | unsigned char | - | TAB_SIMULATION_MODUS | - | - | - | - | - | simulierter Übertemperaturstatus |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNGSZUSTAND | + | - | 0-n | high | unsigned char | - | TAB_LEISTUNGSZUSTAND | - | - | - | - | - | Leistungszustand |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MULTICHANNEL_INPUT | + | - | 0-n | high | unsigned char | - | TAB_MEHRKANAL | - | - | - | - | - | Mehrkanal Eingang der Signalverarbeitung im DSP |

### ARG_0XF021_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SECURITY_VERIFY_ADJ_BLOCK | + | - | 0-n | high | unsigned char | - | SECURITY_VERIFY_ADJ_BLOCK | - | - | - | - | - | The job verifies the written security keys |

### ARG_0XF022_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGN_ADJ_BLOCK | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XF023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MD5LISTOFREVOKEDKEY | + | - | TEXT | high | string[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | The input parameter md5ListOfRevokedKeys must be a String containing a list of revoked MD5 hashes separated by line breaks or commas. The MD5 hashes must be small-caps  |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_ETH_PORT_CONFIGURATION

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_00 | 0-n | high | unsigned int | 0x0001 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 00 |
| STAT_PORT_01 | 0-n | high | unsigned int | 0x0002 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 01 |
| STAT_PORT_02 | 0-n | high | unsigned int | 0x0004 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 02 |
| STAT_PORT_03 | 0-n | high | unsigned int | 0x0008 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 03 |
| STAT_PORT_04 | 0-n | high | unsigned int | 0x0010 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 04 |
| STAT_PORT_05 | 0-n | high | unsigned int | 0x0020 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 05 |
| STAT_PORT_06 | 0-n | high | unsigned int | 0x0040 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 06 |
| STAT_PORT_07 | 0-n | high | unsigned int | 0x0080 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 07 |
| STAT_PORT_08 | 0-n | high | unsigned int | 0x0100 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 08 |
| STAT_PORT_09 | 0-n | high | unsigned int | 0x0200 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 09 |
| STAT_PORT_10 | 0-n | high | unsigned int | 0x0400 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 10 |
| STAT_PORT_11 | 0-n | high | unsigned int | 0x0800 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 11 |
| STAT_PORT_12 | 0-n | high | unsigned int | 0x1000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 12 |
| STAT_PORT_13 | 0-n | high | unsigned int | 0x2000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 13 |
| STAT_PORT_14 | 0-n | high | unsigned int | 0x4000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 14 |
| STAT_PORT_15 | 0-n | high | unsigned int | 0x8000 | ETH_PORT_CONFIGURATION | - | - | - | Portstatus Port 15 |

### BF_PHY_LINK_STATE_BTFLD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LINK_STATE_PORT_00 | 0-n | high | unsigned int | 0x0001 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 0 |
| STAT_PHY_LINK_STATE_PORT_01 | 0-n | high | unsigned int | 0x0002 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 1 |
| STAT_PHY_LINK_STATE_PORT_02 | 0-n | high | unsigned int | 0x0004 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 2 |
| STAT_PHY_LINK_STATE_PORT_03 | 0-n | high | unsigned int | 0x0008 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 3 |
| STAT_PHY_LINK_STATE_PORT_04 | 0-n | high | unsigned int | 0x0010 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 4 |
| STAT_PHY_LINK_STATE_PORT_05 | 0-n | high | unsigned int | 0x0020 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 5 |
| STAT_PHY_LINK_STATE_PORT_06 | 0-n | high | unsigned int | 0x0040 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 6 |
| STAT_PHY_LINK_STATE_PORT_07 | 0-n | high | unsigned int | 0x0080 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 7 |
| STAT_PHY_LINK_STATE_PORT_08 | 0-n | high | unsigned int | 0x0100 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 8 |
| STAT_PHY_LINK_STATE_PORT_09 | 0-n | high | unsigned int | 0x0200 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 9 |
| STAT_PHY_LINK_STATE_PORT_10 | 0-n | high | unsigned int | 0x0400 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 10 |
| STAT_PHY_LINK_STATE_PORT_11 | 0-n | high | unsigned int | 0x0800 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 11 |
| STAT_PHY_LINK_STATE_PORT_12 | 0-n | high | unsigned int | 0x1000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 12 |
| STAT_PHY_LINK_STATE_PORT_13 | 0-n | high | unsigned int | 0x2000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 13 |
| STAT_PHY_LINK_STATE_PORT_14 | 0-n | high | unsigned int | 0x4000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 14 |
| STAT_PHY_LINK_STATE_PORT_15 | 0-n | high | unsigned int | 0x8000 | PHY_LINK_STATE_TAB | - | - | - | Linkstatus für Port 15 |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CABLE_DIAG_RESULT_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verkabelungsfehler erkannt |
| 0x01 | Kurzschluss zwischen Busleitungen erkannt |
| 0x02 | Unterbrechung einer oder beider Busleitungen erkannt |
| 0x03 | Kurschluss nach Masse erkannt |
| 0x04 | Kurschluss auf Vbat / 12V erkannt |
| 0x05 | Kabeldiagnose wurde nicht erfolgreich beendet |
| 0x10 | Kabeldiagnose läuft noch |
| 0xFF | Kabeldiagnose konnte nicht auf angefragtem Port gestartet werden |

### CABLE_DIAG_STATE

| WERT | TEXT |
| --- | --- |
| 0x20 | Kabeldiagnose wird gestartet |
| 0x10 | Kabeldiagnose läuft bereits auf angefordertem oder anderen Port |
| 0xFF | Kabeldiagnose kann nicht gestartet werden, Kabeldiagnose wird nicht unterstützt oder Port existiert nicht |

### ETH_LEARN_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | Lernen erfolgreich |
| 0x1 | Lernen nicht erfolgreich oder noch nicht gelernt |

### ETH_LOOPBACK_MODE_TAB

| WERT | TEXT |
| --- | --- |
| 1 | internal Loopback-Mode |
| 2 | external Loopback-Mode |

### ETH_PHY_LOOPBACK_STATE

| WERT | TEXT |
| --- | --- |
| 0x10 | Loopback Test wird gestartet |
| 0x20 | LoopbackTest wird auf angefordertem Port nicht unterstützt |
| 0xFF | Test läuft bereits |

### ETH_PHY_TEST_MODE_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | PHY wird in den Testmodus geschaltet |
| 0x01 | PHY kann nicht in den Testmodus geschaltet werden |
| 0x02 | Gewünschter Testmodus für Port/Switch nicht verfügbar |

### ETH_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | link-down |
| 0x1 | link-up |

### ETH_TEST_MODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x01 | Transmit droop test Mode |
| 0x02 | Transmit Jitter test in MASTER Mode |
| 0x03 | Transmit Jitter test in SLAVE Mode |
| 0x04 | Transmit Distortion test |
| 0x05 | Normal Operation at full power necessary for the PSD mask Test |

### EXTERNAL_HSFZ_ACTIVATION_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | activate external HSFZ |
| 0x01 | deactivate external HSFZ |

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
| 0x023700 | Energiesparmode aktiv | 0 | - |
| 0x023703 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x023704 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x023708 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023709 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02370A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02370B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02370C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02FF37 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x031D01 | Lautsprecherausgangsleitungen vorne links: Leitungsunterbrechung | 0 | - |
| 0x031D02 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Plus | 0 | - |
| 0x031D03 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Masse | 0 | - |
| 0x031D04 | Lautsprecherausgangsleitungen vorne links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D06 | Lautsprecherausgangsleitungen vorne rechts: Leitungsunterbrechung | 0 | - |
| 0x031D07 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D08 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D09 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D0B | Lautsprecherausgangsleitungen Surround links: Leitungsunterbrechung | 0 | - |
| 0x031D0C | Lautsprecherausgangsleitungen Surround links: Kurzschluss nach Plus | 0 | - |
| 0x031D0D | Lautsprecherausgangsleitungen Surround links: Kurzschluss nach Masse | 0 | - |
| 0x031D0E | Lautsprecherausgangsleitungen Surround links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D10 | Lautsprecherausgangsleitungen Surround rechts: Leitungsunterbrechung | 0 | - |
| 0x031D11 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D12 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D13 | Lautsprecherausgangsleitungen Surround rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D14 | Lautsprecherausgangsleitungen Zentralbass links: Leitungsunterbrechung | 0 | - |
| 0x031D15 | Lautsprecherausgangsleitungen Zentralbass links: Kurzschluss nach Plus | 0 | - |
| 0x031D16 | Lautsprecherausgangsleitungen Zentralbass links: Kurzschluss nach Masse | 0 | - |
| 0x031D17 | Lautsprecherausgangsleitungen Zentralbass links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D18 | Lautsprecherausgangsleitungen Zentralbass rechts: Leitungsunterbrechung | 0 | - |
| 0x031D19 | Lautsprecherausgangsleitungen Zentralbass rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D1A | Lautsprecherausgangsleitungen Zentralbass rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D1B | Lautsprecherausgangsleitungen Zentralbass rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D1D | Lautsprecherausgangsleitungen Center: Leitungsunterbrechung | 0 | - |
| 0x031D1E | Lautsprecherausgangsleitungen Center: Kurzschluss nach Plus | 0 | - |
| 0x031D1F | Lautsprecherausgangsleitungen Center: Kurzschluss nach Masse | 0 | - |
| 0x031D20 | Lautsprecherausgangsleitungen Center: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D22 | Lautsprecherausgangsleitungen hinten links: Leitungsunterbrechung | 0 | - |
| 0x031D23 | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Plus | 0 | - |
| 0x031D24 | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Masse | 0 | - |
| 0x031D25 | Lautsprecherausgangsleitungen hinten links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D27 | Lautsprecherausgangsleitungen hinten rechts: Leitungsunterbrechung | 0 | - |
| 0x031D28 | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D29 | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D2A | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D2B | Lautsprecherausgangsleitungen vorne links passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D2C | Lautsprecherausgangsleitungen vorne rechts passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D2D | Lautsprecherausgangsleitungen surround links passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D2E | Lautsprecherausgangsleitungen surround rechts passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D2F | Lautsprecherausgangsleitungen Center passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D30 | Lautsprecherausgangsleitungen hinten links passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D31 | Lautsprecherausgangsleitungen hinten rechts passiver Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D33 | Lautsprecherausgangsleitungen vorne links 3D: Leitungsunterbrechung | 0 | - |
| 0x031D34 | Lautsprecherausgangsleitungen vorne links 3D: Kurzschluss nach Plus | 0 | - |
| 0x031D35 | Lautsprecherausgangsleitungen vorne links 3D: Kurzschluss nach Masse | 0 | - |
| 0x031D36 | Lautsprecherausgangsleitungen vorne links 3D: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D37 | Lautsprecherausgangsleitungen vorne rechts 3D: Leitungsunterbrechung | 0 | - |
| 0x031D38 | Lautsprecherausgangsleitungen vorne rechts 3D: Kurzschluss nach Plus | 0 | - |
| 0x031D39 | Lautsprecherausgangsleitungen vorne rechts 3D: Kurzschluss nach Masse | 0 | - |
| 0x031D3A | Lautsprecherausgangsleitungen vorne rechts 3D: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D3B | Lautsprecherausgangsleitungen hinten links 3D: Leitungsunterbrechung | 0 | - |
| 0x031D3C | Lautsprecherausgangsleitungen hinten links 3D: Kurzschluss nach Plus | 0 | - |
| 0x031D3D | Lautsprecherausgangsleitungen hinten links 3D: Kurzschluss nach Masse | 0 | - |
| 0x031D3E | Lautsprecherausgangsleitungen hinten links 3D: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D3F | Lautsprecherausgangsleitungen hinten rechts 3D: Leitungsunterbrechung | 0 | - |
| 0x031D40 | Lautsprecherausgangsleitungen hinten rechts 3D: Kurzschluss nach Plus | 0 | - |
| 0x031D41 | Lautsprecherausgangsleitungen hinten rechts 3D: Kurzschluss nach Masse | 0 | - |
| 0x031D42 | Lautsprecherausgangsleitungen hinten rechts 3D: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D43 | Lautsprecherausgangsleitungen Kopfstütze vorne links - links: Leitungsunterbrechung | 0 | - |
| 0x031D44 | Lautsprecherausgangsleitungen Kopfstütze vorne links - links: Kurzschluss nach Plus | 0 | - |
| 0x031D45 | Lautsprecherausgangsleitungen Kopfstütze vorne links - links: Kurzschluss nach Masse | 0 | - |
| 0x031D46 | Lautsprecherausgangsleitungen Kopfstütze vorne links - links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D47 | Lautsprecherausgangsleitungen Kopfstütze vorne links - rechts: Leitungsunterbrechung | 0 | - |
| 0x031D48 | Lautsprecherausgangsleitungen Kopfstütze vorne links - rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D49 | Lautsprecherausgangsleitungen Kopfstütze vorne links - rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D4A | Lautsprecherausgangsleitungen Kopfstütze vorne links - rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D4B | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - links: Leitungsunterbrechung | 0 | - |
| 0x031D4C | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - links: Kurzschluss nach Plus | 0 | - |
| 0x031D4D | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - links: Kurzschluss nach Masse | 0 | - |
| 0x031D4E | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D4F | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - rechts: Leitungsunterbrechung | 0 | - |
| 0x031D50 | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D51 | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D52 | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D53 | Lautsprecherausgangsleitungen Kopfstütze hinten links - links: Leitungsunterbrechung | 0 | - |
| 0x031D54 | Lautsprecherausgangsleitungen Kopfstütze hinten links - links: Kurzschluss nach Plus | 0 | - |
| 0x031D55 | Lautsprecherausgangsleitungen Kopfstütze hinten links - links: Kurzschluss nach Masse | 0 | - |
| 0x031D56 | Lautsprecherausgangsleitungen Kopfstütze hinten links - links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D57 | Lautsprecherausgangsleitungen Kopfstütze hinten links - rechts: Leitungsunterbrechung | 0 | - |
| 0x031D58 | Lautsprecherausgangsleitungen Kopfstütze hinten links - rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D59 | Lautsprecherausgangsleitungen Kopfstütze hinten links - rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D5A | Lautsprecherausgangsleitungen Kopfstütze hinten links - rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D5B | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - links: Leitungsunterbrechung | 0 | - |
| 0x031D5C | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - links: Kurzschluss nach Plus | 0 | - |
| 0x031D5D | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - links: Kurzschluss nach Masse | 0 | - |
| 0x031D5E | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D5F | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - rechts: Leitungsunterbrechung | 0 | - |
| 0x031D60 | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - rechts: Kurzschluss nach Plus | 0 | - |
| 0x031D61 | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - rechts: Kurzschluss nach Masse | 0 | - |
| 0x031D62 | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - rechts: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D63 | Lautsprecherausgangsleitungen Außensound links: Leitungsunterbrechung | 0 | - |
| 0x031D64 | Lautsprecherausgangsleitungen Außensound links: Kurzschluss nach Plus | 0 | - |
| 0x031D65 | Lautsprecherausgangsleitungen Außensound links: Kurzschluss nach Masse | 0 | - |
| 0x031D66 | Lautsprecherausgangsleitungen Außensound links: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D6B | Lautsprecherausgangsleitungen Fahrzeugsound Generator vorne: Leitungsunterbrechung | 0 | - |
| 0x031D6C | Lautsprecherausgangsleitungen Fahrzeugsound Generator vorne: Kurzschluss nach Plus | 0 | - |
| 0x031D6D | Lautsprecherausgangsleitungen Fahrzeugsound Generator vorne: Kurzschluss nach Masse | 0 | - |
| 0x031D6E | Lautsprecherausgangsleitungen Fahrzeugsound Generator vorne: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D6F | Lautsprecherausgangsleitungen Fahrzeugsound Generator hinten: Leitungsunterbrechung | 0 | - |
| 0x031D70 | Lautsprecherausgangsleitungen Fahrzeugsound Generator hinten: Kurzschluss nach Plus | 0 | - |
| 0x031D71 | Lautsprecherausgangsleitungen Fahrzeugsound Generator hinten: Kurzschluss nach Masse | 0 | - |
| 0x031D72 | Lautsprecherausgangsleitungen Fahrzeugsound Generator hinten: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D74 | Lautsprecherausgangsleitungen vorne links Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D75 | Lautsprecherausgangsleitungen vorne links Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D76 | Lautsprecherausgangsleitungen vorne links Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D77 | Lautsprecherausgangsleitungen vorne links Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D79 | Lautsprecherausgangsleitungen vorne rechts Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D7A | Lautsprecherausgangsleitungen vorne rechts Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D7B | Lautsprecherausgangsleitungen vorne rechts Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D7C | Lautsprecherausgangsleitungen vorne rechts Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D7E | Lautsprecherausgangsleitungen surround links Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D7F | Lautsprecherausgangsleitungen surround links Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D80 | Lautsprecherausgangsleitungen surround links Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D81 | Lautsprecherausgangsleitungen surround links Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D83 | Lautsprecherausgangsleitungen surround rechts Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D84 | Lautsprecherausgangsleitungen surround rechts Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D85 | Lautsprecherausgangsleitungen surround rechts Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D86 | Lautsprecherausgangsleitungen surround rechts Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D88 | Lautsprecherausgangsleitungen Center Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D89 | Lautsprecherausgangsleitungen Center Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D8A | Lautsprecherausgangsleitungen Center Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D8B | Lautsprecherausgangsleitungen Center Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D8D | Lautsprecherausgangsleitungen hinten links Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D8E | Lautsprecherausgangsleitungen hinten links Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D8F | Lautsprecherausgangsleitungen hinten links Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D90 | Lautsprecherausgangsleitungen hinten links Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D92 | Lautsprecherausgangsleitungen hinten rechts Hochtöner: Leitungsunterbrechung | 0 | - |
| 0x031D93 | Lautsprecherausgangsleitungen hinten rechts Hochtöner: Kurzschluss nach Plus | 0 | - |
| 0x031D94 | Lautsprecherausgangsleitungen hinten rechts Hochtöner: Kurzschluss nach Masse | 0 | - |
| 0x031D95 | Lautsprecherausgangsleitungen hinten rechts Hochtöner: Kurzschluss zwischen den 2 Leitungen | 0 | - |
| 0x031D96 | Lautsprecherausgangsleitungen vorne links: DC-Offset | 0 | - |
| 0x031D97 | Lautsprecherausgangsleitungen vorne rechts: DC-Offset | 0 | - |
| 0x031D98 | Lautsprecherausgangsleitungen surround links: DC-Offset | 0 | - |
| 0x031D99 | Lautsprecherausgangsleitungen surround rechts: DC-Offset | 0 | - |
| 0x031D9A | Lautsprecherausgangsleitungen Zentralbass links: DC-Offset | 0 | - |
| 0x031D9B | Lautsprecherausgangsleitungen Zentralbass rechts: DC-Offset | 0 | - |
| 0x031D9C | Lautsprecherausgangsleitungen Center: DC-Offset | 0 | - |
| 0x031D9D | Lautsprecherausgangsleitungen hinten links: DC-Offset | 0 | - |
| 0x031D9E | Lautsprecherausgangsleitungen hinten rechts: DC-Offset | 0 | - |
| 0x031DA1 | Lautsprecherausgangsleitungen vorne links 3D: DC-Offset | 0 | - |
| 0x031DA2 | Lautsprecherausgangsleitungen vorne rechts 3D: DC-Offset | 0 | - |
| 0x031DA3 | Lautsprecherausgangsleitungen hinten links 3D: DC-Offset | 0 | - |
| 0x031DA4 | Lautsprecherausgangsleitungen hinten rechts 3D: DC-Offset | 0 | - |
| 0x031DA5 | Lautsprecherausgangsleitungen Kopfstütze vorne links - links: DC-Offset | 0 | - |
| 0x031DA6 | Lautsprecherausgangsleitungen Kopfstütze vorne links - rechts: DC-Offset | 0 | - |
| 0x031DA7 | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - links: DC-Offset | 0 | - |
| 0x031DA8 | Lautsprecherausgangsleitungen Kopfstütze vorne rechts - rechts: DC-Offset | 0 | - |
| 0x031DA9 | Lautsprecherausgangsleitungen Kopfstütze hinten links - links: DC-Offset | 0 | - |
| 0x031DAA | Lautsprecherausgangsleitungen Kopfstütze hinten links - rechts: DC-Offset | 0 | - |
| 0x031DAB | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - links: DC-Offset | 0 | - |
| 0x031DAC | Lautsprecherausgangsleitungen Kopfstütze hinten rechts - rechts: DC-Offset | 0 | - |
| 0x031DAD | Lautsprecherausgangsleitungen Außensound links: DC-Offset | 0 | - |
| 0x031DAF | Lautsprecherausgangsleitungen Fahrzeugsound Generator vorne: DC-Offset | 0 | - |
| 0x031DB0 | Lautsprecherausgangsleitungen Fahrzeugsound Generator hinten: DC-Offset | 0 | - |
| 0x031DB1 | Lautsprecherausgangsleitungen vorne links Hochtöner: DC-Offset | 0 | - |
| 0x031DB2 | Lautsprecherausgangsleitungen vorne rechts Hochtöner: DC-Offset | 0 | - |
| 0x031DB3 | Lautsprecherausgangsleitungen surround links Hochtöner: DC-Offset | 0 | - |
| 0x031DB4 | Lautsprecherausgangsleitungen surround rechts Hochtöner: DC-Offset | 0 | - |
| 0x031DB5 | Lautsprecherausgangsleitungen Center Hochtöner: DC-Offset | 0 | - |
| 0x031DB6 | Lautsprecherausgangsleitungen hinten links Hochtöner: DC-Offset | 0 | - |
| 0x031DB7 | Lautsprecherausgangsleitungen hinten rechts Hochtöner: DC-Offset | 0 | - |
| 0x031E00 | FM1 / AM Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E01 | FM1 / AM Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E02 | FM1 / AM Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E03 | FM2 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E04 | FM2 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E05 | FM2 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E06 | DAB1 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E07 | DAB1 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E08 | DAB1 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E09 | DAB2 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E0A | DAB2 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E0B | DAB2 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E0D | SDARS Antenne: Offene Leitung zwischen Steuergerät und Antennensystem | 0 | - |
| 0x031E0E | SDARS Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennensystem | 0 | - |
| 0x031E10 | TV1 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E11 | TV1 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E12 | TV1 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E13 | TV2 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E14 | TV2 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E15 | TV2 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E16 | TV3 Antenne: Offene Leitung zwischen Antennenverstärker und Antenne | 0 | - |
| 0x031E17 | TV3 Antenne: Offene Leitung zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E18 | TV3 Antenne: Kurzschluss nach Masse zwischen Steuergerät und Antennenverstärker | 0 | - |
| 0x031E30 | Manipulation Filesystem detektiert | 0 | - |
| 0x031E31 | Manipulation Adjustment Block detektiert | 0 | - |
| 0x031E32 | Debug Ports offen | 0 | - |
| 0x031E80 | Verbindung zum Mikrofon 1: Leitungsunterbrechung | 0 | - |
| 0x031E81 | Verbindung zum Mikrofon 1: Kurzschluss nach Plus | 0 | - |
| 0x031E82 | Verbindung zum Mikrofon 1: Kurzschluss nach Masse | 0 | - |
| 0x031E83 | Verbindung zum Mikrofon 2: Leitungsunterbrechung | 0 | - |
| 0x031E84 | Verbindung zum Mikrofon 2: Kurzschluss nach Plus | 0 | - |
| 0x031E85 | Verbindung zum Mikrofon 2: Kurzschluss nach Masse | 0 | - |
| 0x031E86 | Verbindung zum Mikrofon 3: Leitungsunterbrechung | 0 | - |
| 0x031E87 | Verbindung zum Mikrofon 3: Kurzschluss nach Plus | 0 | - |
| 0x031E88 | Verbindung zum Mikrofon 3: Kurzschluss nach Masse | 0 | - |
| 0x031E89 | Verbindung zum Mikrofon 4: Leitungsunterbrechung | 0 | - |
| 0x031E8A | Verbindung zum Mikrofon 4: Kurzschluss nach Plus | 0 | - |
| 0x031E8B | Verbindung zum Mikrofon 4: Kurzschluss nach Masse | 0 | - |
| 0x031E8C | Verbindung zum Mikrofon 5: Leitungsunterbrechung | 0 | - |
| 0x031E8D | Verbindung zum Mikrofon 5: Kurzschluss nach Plus | 0 | - |
| 0x031E8E | Verbindung zum Mikrofon 5: Kurzschluss nach Masse | 0 | - |
| 0x031F00 | LIN Modul 1: Fehler im Modul | 0 | - |
| 0x031F01 | LIN Modul 2: Fehler im Modul | 0 | - |
| 0x031F02 | LIN Modul 3: Fehler im Modul | 0 | - |
| 0x031F03 | LIN Modul 4: Fehler im Modul | 0 | - |
| 0x031F04 | LIN Modul 5: Fehler im Modul | 0 | - |
| 0x031F05 | LIN Modul 6: Fehler im Modul | 0 | - |
| 0x031F06 | LIN Modul 7: Fehler im Modul | 0 | - |
| 0x031F07 | LIN Modul 8: Fehler im Modul | 0 | - |
| 0x031F08 | LIN Modul 9: Fehler im Modul | 0 | - |
| 0x031F09 | LIN Modul 10: Fehler im Modul | 0 | - |
| 0x031F0A | LIN Modul 11: Fehler im Modul | 0 | - |
| 0x031F0B | LIN Modul 12: Fehler im Modul | 0 | - |
| 0x031F0C | LIN Modul 13: Fehler im Modul | 0 | - |
| 0x031F0D | LIN Modul 14: Fehler im Modul | 0 | - |
| 0x031F0E | LIN Modul 15: Fehler im Modul | 0 | - |
| 0x031F0F | LIN Modul 16: Fehler im Modul | 0 | - |
| 0x031F10 | LIN Modul 17: Fehler im Modul | 0 | - |
| 0x031F11 | LIN Modul 18: Fehler im Modul | 0 | - |
| 0x031F12 | LIN Modul 19: Fehler im Modul | 0 | - |
| 0x031F13 | LIN Modul 20: Fehler im Modul | 0 | - |
| 0x031F14 | LIN Modul 21: Fehler im Modul | 0 | - |
| 0x031F15 | LIN Modul 22: Fehler im Modul | 0 | - |
| 0x031F16 | LIN Modul 23: Fehler im Modul | 0 | - |
| 0x031F17 | LIN Modul 24: Fehler im Modul | 0 | - |
| 0x031F18 | LIN Modul 25: Fehler im Modul | 0 | - |
| 0x031F19 | LIN Modul 26: Fehler im Modul | 0 | - |
| 0xB7F480 | Booster keine Verbindung | 0 | - |
| 0xB7F481 | BOOSTER SW unexpected | 0 | - |
| 0xB7F490 | Steuergerät Reset | 0 | - |
| 0xB7F491 | Abschaltung Übertemperatur | 0 | - |
| 0xB7F492 | Interner Temperaturfehler | 0 | - |
| 0xB7F493 | Hardware Verstärker defekt | 0 | - |
| 0xB7F495 | Software Fehler | 0 | - |
| 0xB7F496 | Hardware Lüfter defekt | 0 | - |
| 0xB7F497 | Hardware DAB defekt | 0 | - |
| 0xB7F498 | Hardware TV defekt | 0 | - |
| 0xB7F499 | Unterspannung erkannt | 1 | - |
| 0xB7F49A | Überspannung erkannt | 1 | - |
| 0xB7F49B | Hardware SXM defekt | 0 | - |
| 0xB7F4B0 | Booster Hardware defekt | 0 | - |
| 0xB7F4B1 | Booster Hardware  Verstärker defekt | 0 | - |
| 0xB7F4B2 | Booster Hardware Lüfter defekt | 0 | - |
| 0xB7F4B3 | Booster Reset | 0 | - |
| 0xB7F4B4 | Booster Abschaltung Übertemperatur | 0 | - |
| 0xB7F4B5 | Booster Interner Temperaturfehler | 0 | - |
| 0xB7F4B6 | Booster Externe Unterspannung Klemme 30B | 0 | - |
| 0xB7F4B7 | Booster Externe Überspannung Klemme 30B | 0 | - |
| 0xB7F4B8 | Booster Externe Unterspannung Klemme 30 | 0 | - |
| 0xB7F4B9 | Booster Externe Überspannung Klemme 30 | 0 | - |
| 0xB7F4BA | Booster Software Fehler | 0 | - |
| 0xB7F4BB | Booster falsche Konfiguration | 0 | - |
| 0xB7F4D0 | Mode Tracing aktiv | 0 | - |
| 0xB7F4E0 | Soundgenerierung ASD innen: kein gültiger Datensatz vorhanden | 0 | - |
| 0xB7F4E1 | Soundgenerierung ASD außen: kein gültiger Datensatz vorhanden | 0 | - |
| 0xB7F4E2 | Soundgenerierung E-Sound: kein gültiger Datensatz vorhanden | 0 | - |
| 0xB7F4E4 | Soundgenerierung akustischer Fußgängerschutz (VSG): kein gültiger Datensatz vorhanden | 0 | - |
| 0xB7F500 | Mikrofon Fahrerseite nicht kalibriert | 1 | - |
| 0xB7F501 | ASIL Gong konnte nicht gespielt werden | 1 | - |
| 0xB7F510 | SDARS Preactivation Mode aktiv | 0 | - |
| 0xB7F511 | TV CA-Adapter nicht verfügbar | 0 | - |
| 0xB7F520 | LIN Master HW Fehler | 0 | - |
| 0xB7F521 | LIN Master SW Fehler | 0 | - |
| 0xB7F522 | LIN Fehler Autoadressierung | 0 | - |
| 0xB7F523 | LIN Anzahl der Slaves nicht korrekt | 0 | - |
| 0xB7F524 | LIN RGB Modul Übertemperatur | 0 | - |
| 0xB7F555 | Unterspannungsreset | 1 | - |
| 0xD6C415 | IuK-CAN Physikalischer Busfehler | 0 | - |
| 0xD6C41E | IuK-CAN Control Module Bus OFF | 0 | - |
| 0xD6C602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xD6CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD6CC00 | LIN Master keine Kommunikation | 1 | - |
| 0xD6CC01 | LIN Master Kommunikation gestört | 1 | - |
| 0xD6D408 | Botschaft (Anzeige Leistung Antrieb, 0x2AE): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D409 | Botschaft (Anzeige Drehzahl Antriebsstrang, 0xF3): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D40A | Botschaft (Drehmoment Kurbelwelle 1, 0x0A5): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D40C | Botschaft (Winkel Fahrpedal,  0x0D9): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D40D | Botschaft (Steuerung Anzeige M-Systeme, 0x0DE): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D40E | Botschaft (Längsbeschleunigung Schwerpunkt, 0x199): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D40F | Botschaft (Daten Antriebsstrang 2, 0x3F9): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D410 | Botschaft (Status Cabrio Dach, 0x342): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D411 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D412 | Botschaft (Konfiguration Stellhebel Antrieb Fahrerlebnis, 0x329): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D413 | Botschaft (Status Crash,  0x0AB): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D414 | Botschaft (Steuerung Funktionen Blinken, 0x0CA): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D415 | Botschaft (Blinken, 0x1F6): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D416 | Botschaft (ASIL Gong 1, 0x26D): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D417 | Botschaft (Status Notruf,  0x2C3): Ausfall oder Signal ungültig | 1 | - |
| 0xD6D418 | Botschaft (Status Verbrennungsmotor, 0x032 ): Ausfall oder Signal ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FSCSM_ERRORCODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x01 | ERC_FSCSM_INVALID_ENCRYPTED_ID_AND_KEY |
| 0x02 | ERC_FSCSM_INVALID_SG_ID |
| 0x04 | ERC_FSCSM_SWE_INVALID |
| 0x05 | ERC_FSCSM_CAL_CSM_ERROR |
| 0x06 | ERC_FSCSM_SSV_ERROR_STATE |
| 0x08 | ERC_FSCSM_MESSAGE_TIMEOUT_REQ |
| 0x00 | ERC_NO_ERROR |
| 0x30 | ERC_PENDING |
| 0x50 | ERC_NVM_ERROR |
| 0x51 | ERC_INCORRECT_MESSAGE_LENGTH |
| 0x52 | ERC_INVALID_PARAMETER |
| 0x53 | ERC_SEQUENCE_ERROR |
| 0x54 | ERC_NOT_INITIALIZED |
| 0x55 | ERC_PARALLEL_EXECUTION |
| 0x87 | ERC_MSM_INVALID_SIGNATURE_OVER_RND |
| 0x88 | ERC_MSM_INVALID_B2VSEC_CERTIFICATE |
| 0x5A | ERC_CALCULATION_ERROR |
| 0xFE | ERC_UNEXPECTED_ERROR |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4005 | ResponseString | TEXT | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0xE438 | RESET_WAKEUPREASON | HEX | High | unsigned char | - | - | - | - |
| 0xE45E | RESET_RESETINFO | HEX | High | unsigned char | - | - | - | - |
| 0xE467 | RESET_ADDITIONALDATA | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x371000 | Übertemperatur Warnung | 0 | - |
| 0x371004 | Inter Processor Communication Fehler | 0 | - |
| 0x371800 | Fehler der Fahrzeug-Security | 0 | - |
| 0x373000 | Audioverbindung Timeout bei Aufbau | 1 | - |
| 0x373001 | Audioquelle Timeout auf SourceStateChange | 1 | - |
| 0x374000 | Booster Übertemperatur Warnung | 0 | - |
| 0xD6C601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4005 | ResponseString | TEXT | High | 32 | - | 1.0 | 1.0 | 0.0 |
| 0xE438 | RESET_WAKEUPREASON | HEX | High | unsigned char | - | - | - | - |
| 0xE45E | RESET_RESETINFO | HEX | High | unsigned char | - | - | - | - |
| 0xE467 | RESET_ADDITIONALDATA | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PHY_LINK_STATE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Link down |
| 0x01 | Link up |
| 0x02 | Link up |
| 0x03 | Link up |
| 0x04 | Link up |
| 0x05 | Link up |
| 0x06 | Link up |
| 0x07 | Link up |
| 0x08 | Link up |
| 0x09 | Link up |
| 0x0A | Link up |
| 0x0B | Link up |
| 0x0C | Link up |
| 0x0D | Link up |
| 0x0E | Link up |
| 0x0F | Link up |

### PORT_CRC_ERROR_COUNT_1B_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Frames verloren |
| 0x01 | 1-9 Frames verloren |
| 0x02 | 10-99 Frames verloren |
| 0x03 | 100-999 Frames verloren |
| 0x04 | 1000-9999 Frames verloren |
| 0x05 | 10000-99999 Frames verloren |
| 0x06 | > 100000 Frames verloren |
| 0x07 | reserviert |
| 0x08 | reserviert |
| 0x09 | reserviert |
| 0x0A | reserviert |
| 0x0B | reserviert |
| 0x0C | reserviert |
| 0x0D | reserviert |
| 0x0E | Port nicht verbunden |
| 0x0F | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |

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

### RESULT_LAST_PHY_LOOPBACK_TEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Test erfolgreich |
| 0x01 | Test konnte nicht gestartet werden, da kein Link im Loopback-Modus aufgebaut werden konnte |
| 0x02 | Test nicht erfolgreich |
| 0xfe | letzter Testdurchlauf wurde abgebrochen |
| 0xFF | Test wurde noch nicht gestartet |

### RES_0X1046_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_INDEX_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index des Ports (beginnend bei 0), auf dem die Kabeldiagnose zuletzt gestartet wurde oder 0xff (Kabeldiagnose wurde noch nicht gestartet). |
| STAT_CABLE_DIAG_RESULT | - | - | + | 0-n | high | unsigned char | - | CABLE_DIAG_RESULT_TAB | - | - | - | Ergebnis der Kabeldiagnose  |
| STAT_CABLE_DIAG_STATE | + | - | - | 0-n | high | unsigned char | - | CABLE_DIAG_STATE | - | - | - | Status Kabeldiagnose |

### RES_0X1047_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUI_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 24 Bit OUI des PHYs. Die restlichen Bits sind auf 0 zu setzen. |
| STAT_MMN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die 6 Bit lange MMN des Phys. Die übrigen Bits sollen auf 0 gesetzt werden. |
| STAT_REVISION_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4 Bit lange Revisionsnummer des PHY. Die übrigen Bits sollen mit 0 belegt werden. |

### RES_0X1048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_INDEX_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index des Ports, auf dem der letzte Loopback-Test über RC STEUERN_ETH_PHY_LOOPBACK_TEST (01) durchgeführt wurde. |
| STAT_RESULT_LAST_PHY_LOOPBACK_TEST | - | - | + | 0-n | high | unsigned char | - | RESULT_LAST_PHY_LOOPBACK_TEST_TAB | - | - | - | Ergebnis Loopback-Test |
| STAT_PHY_LOOPBACK_STATE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_LOOPBACK_STATE | - | - | - | Status Kabeldiagnose |

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X1802_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_OF_PORTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der physikalischen Ports.  |
| - | Bit | high | BITFIELD | - | BF_PHY_LINK_STATE_BTFLD | - | - | - | Linkstatus aller Port. |

### RES_0X1803_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARN_PORT_CONFIGURATION | 0-n | high | unsigned char | - | ETH_LEARN_PORT_CONFIGURATION | - | - | - | 0: Lernen erfolgreich 1: Lernen nicht erfolgreich oder noch nicht gelernt |
| - | Bit | high | BITFIELD | - | BF_ETH_PORT_CONFIGURATION | - | - | - | Pro Port 1Bit, das angibt ob LinkUp(1) oder kein Link (0) vorliegt. |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_AMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der Enstufe in °C Wertebereich: -40°C bis +214°C in 1°C-Schritten |
| STAT_TEMP_CPU_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der CPU in °C Wertebereich: -40°C bis +214°C in 1°C-Schritten |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Systemlast der CPU1 in %  (CPU1 = A-Core(s)) |
| STAT_CPU2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Systemlast der CPU2 in %  (CPU2= M-Core(s)) |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STARTUP_COUNTER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit seit dem letzten Aufstart in Sekunden |
| STAT_OPERATING_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | gesamte Betriebsdauer in Sekunden |

### RES_0X4100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOOSTER_TEMP1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der MCU in °C |
| STAT_BOOSTER_TEMP2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur des Netzteils in °C |
| STAT_BOOSTER_TEMP3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der Endstufe AMP1 in °C  |
| STAT_BOOSTER_TEMP4_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der Endstufe AMP2 in °C  |
| STAT_BOOSTER_TEMP5_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Temperatur der Endstufe AMP3 in °C |

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_ROUTINE_TESTVERBAU | - | - | - | ausgeführte Testroutine(n) |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TEST_STATUS | - | - | - | gibt den Status des Verbautests wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |

### RES_0XA021_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENCY_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Frequenz in Hz (0x0014 bis 0x4E20) |
| STAT_LEVEL_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | -8.0 | 0.0 | Pegel in [dB], Genauigkeit 1/8dB |
| STAT_AUDIOCHANNEL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde |
| STAT_TIME_WERT | - | - | + | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder (0x0000 bis 0xFFFF) |
| STAT_LAUTSPRECHER_IMPEDANZMESSUNG | - | - | + | 0-n | - | unsigned char | - | TAB_TEST_STATUS | - | - | - | gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt wieder, wieviele fehlerhafte Kanäle während des Tests gefunden wurden |
| STAT_FEHLER_01_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_01_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_02_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_02_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_03_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_03_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_04_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_04_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_05_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_05_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_06_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_06_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_07_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_07_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_08_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_08_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_09_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_09_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_10_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_10_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_11_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_11_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_12_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_12_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_13_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_13_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_14_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_14_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_15_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_15_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_16_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_16_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_17_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_17_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_18_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_18_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_19_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_19_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_20_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_20_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_21_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_21_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_22_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_22_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_23_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_23_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_24_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_24_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_25_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_25_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_26_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_26_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_27_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_27_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_28_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_28_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_29_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_29_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_30_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_30_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_31_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_31_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_32_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_32_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |

### RES_0XA039_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Lautstärke des gewählten Audiosignal |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters [RPM] (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FACTORY_RESET | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Status des Rücksetzens in Auslieferzustand. 0b1: Wenn der Reset beendet ist 0b0: Wenn der Reset nicht beendet ist |

### RES_0XA091_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GAINOFFSET_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 10.0 | -12.7 | hinterlegter Gainoffset, falls kein Wert hinterlegt = 0xFF |
| STAT_MIKROFON_KALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_STATUS | - | - | - | Ergebnis der Routine aus dem Mikrofontest siehe Tabelle TestStatus |

### RES_0XA0C9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIKROFON_KALIBRIERUNG | + | - | - | 0-n | high | unsigned char | - | TAB_TEST_STATUS | - | - | - | Stauts der Routine zum löschen der Mikrofonkalibrierung siehe Tabelle TestStatus |

### RES_0XA0CA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TAB_LUEFTERSTATUS | - | - | - | Status des Lüfters |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters [RPM]. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA142_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEEK_FINISHED | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: Wenn der Suchlauf beendet ist 0b0: Wenn der Suchlauf nicht beendet ist |
| STAT_FREQ_KHZ_WERT | - | - | + | kHz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequenz in kHz (Falls der Suchlauf noch nicht beendet ist, muss ungueltig = 0xFF FF FF FF zurückgegeben werden. Wenn keine empfangbare Frequenz gefunden wurde, muss die zuvor eingestellte Frequenz wieder eingestellt werden.) |

### RES_0XA143_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEEK_FINISHED | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: Wenn der Suchlauf beendet ist 0b0: Wenn der Suchlauf nicht beendet ist |
| STAT_ENSEMBLE_NAME_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Ensemble-Name (leerer String, wenn kein Ensemble gefunden wurde) |
| STAT_SERVICE_NAME_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Service-Name (leerer String, wenn kein Ensemble gefunden wurde) |

### RES_0XA144_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SXM_PREACTIVATION_MODE_STATE | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0b1: MPFA aktiviert. 0b0: MPFA nicht aktiviert. |
| STAT_SXM_MPFA | - | - | + | 0-n | high | unsigned char | - | TAB_MPFA | - | - | - | Gibt zuletzt aktiviertes Kanal-Paket zurück, auch wenn nicht aktiviert. |
| STAT_SXM_MPFA_COMPLETNESS | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die Berechnung des Pellets und die Aktivierung des Sender-Pakets beendet ist. 0 = nicht fertig oder nicht ausgeführt 1 = fertig |

### RES_0XA410_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASD_INSIDE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die ASD innen Funktion bis zum Neustart der Komponente deaktiviert ist. |
| STAT_ASD_OUTSIDE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die ASD außen Funktion bis zum Neustart des Steuergerätes deaktiviert ist. |
| STAT_E_SOUND_INSIDE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die E-Sound innen Funktion bis zum Neustart des Steuergerätes deaktiviert ist. |
| STAT_E_SOUND_OUTSIDE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die E-Sound außen Funktion bis zum Neustart des Steuergerätes deaktiviert ist. |
| STAT_PEDESTRIAN_WARNING_SYSTEM | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die akustischer Fußgängerschutz Funktionbis zum Neustart des Steuergerätes deaktiviert ist. |

### RES_0XA414_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATASET_TYPE | + | - | - | 0-n | high | unsigned char | - | TAB_DATASET_TYPE | - | - | - | Abgefragter Datensatz |
| STAT_INFO_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version |

### RES_0XA416_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATASET_TYPE | + | - | - | 0-n | high | unsigned char | - | TAB_DATASET_TYPE | - | - | - | Datensatz, über den die Checksumme gebildet wurde |
| STAT_CHECKSUM_TEXT | + | - | - | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | 32-Bit-Checksumme |

### RES_0XA430_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_AUTOADR_STATUS | - | - | - | Statusabfrage Autoadressierung |

### RES_0XA441_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUDIO_KANAL | - | - | + | 0-n | high | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | ausgeführte Testroutine(n) |
| STAT_TESTSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_STATUS | - | - | - | gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### RES_0XA442_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREQUENCY_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Frequenz in Hz (0x0014 bis 0x4E20) |
| STAT_LEVEL_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | -8.0 | 0.0 | Pegel [dB], Genauigkeit in 1/8 dB |
| STAT_AUDIOCHANNEL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | bezeichnet den Kanal, auf dem gemessen wurde |
| STAT_TIME_WERT | - | - | + | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | gibt die Dauer der Messung wieder (0x0000 bis 0xFFFF) |
| STAT_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_TEST_STATUS | - | - | - | gibt den Status des gesamten Tests oder der entsprechenden Kanäle wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_KANAELE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | gibt wieder, wieviele fehlerhafte Kanäle während des Tests gefunden wurden |
| STAT_FEHLER_01_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_01_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_02_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_02_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_03_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_03_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_04_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_04_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_05_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_05_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_06_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_06_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_07_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_07_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_08_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_08_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_09_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_09_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_10_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_10_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_11_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_11_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_12_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_12_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_13_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_13_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_14_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_14_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_15_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_15_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_16_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_16_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_17_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_17_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_18_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_18_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_19_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_19_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_20_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_20_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_21_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_21_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_22_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_22_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_23_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_23_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_24_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_24_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_25_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_25_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_26_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_26_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_27_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_27_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_28_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_28_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_29_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_29_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_30_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_30_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_31_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_31_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |
| STAT_FEHLER_32_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_AUDIO_CHANNEL | - | - | - | gibt den Kanal wieder, bei dem der Fehler X auftrat |
| STAT_FEHLER_32_FEHLERART_KANAL | - | - | + | 0-n | - | unsigned char | - | TAB_KANAL_FEHLERART | - | - | - | gibt wieder, welcher Art der X. Fehler war |

### RES_0XA450_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTERSTATUS | - | - | + | 0-n | - | unsigned char | - | TAB_BOOSTER_LUEFTERSTATUS | - | - | - | Status des Lüfters |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters [RPM] (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA451_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters [RPM] |

### RES_0XD021_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPL_1 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_1 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_2 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_2 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_3 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_3 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_4 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_4 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_5 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_5 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_6 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_6 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_7 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_7 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_8 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_8 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_9 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_9 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_10 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_10 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_11 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_11 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_12 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_12 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_13 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_13 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_14 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_14 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_15 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_15 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |
| STAT_APPL_16 | 0-n | - | unsigned char | - | TAB_APPLICATION | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TAB_APPLICATION wieder |
| STAT_APPL_ENABLED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_RUNNING_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft |
| STAT_APPL_CODED_16 | 0-n | - | unsigned char | - | TAB_APPLICATION_ACTIVATION_STATUS | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist |

### RES_0XD04E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VARIANTE | 0-n | - | unsigned char | - | TAB_HW_VARIANTE | - | - | - | Hardwarevariante entsprechend der Bezeichnung aus der SW-Logistik |
| STAT_HW_VARIANTE_LIEFERANT | 0-n | - | unsigned char | - | TAB_HW_VARIANTE_LIEFERANT | - | - | - | Hardwareeinheit entsprechend der Variantenbezeichnung des Lieferanten |

### RES_0XE2C3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AM_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der AM-Antenne in dBuV |
| STAT_FM1_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der FM1-Antenne in dBuV |
| STAT_FM2_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der FM2-Antenne in dBuV |

### RES_0XE2C4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FM1_AM_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des FM1/AMAntennenverstärkers in mA |
| STAT_FM2_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des FM2 Antennenverstärkers in mA |

### RES_0XE2C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAB1_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der DAB1-Antenne in dBuV |
| STAT_DAB2_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke der DAB2-Antenne in dBuV |

### RES_0XE2C8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAB1_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des DAB1-Antennenverstärkers in mA |
| STAT_DAB2_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des DAB2-Antennenverstärkers in mA Falls auscodiert: 0 mA |

### RES_0XE2CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUL_TYPE_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Typ ID |
| STAT_MODUL_HW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Hardware Referenz |
| STAT_MODUL_SW_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Modul Software Referenz |
| STAT_SXI_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | SXI Referenz |
| STAT_BB_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BB Referenz |
| STAT_HDEC_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | HDEC Referenz |
| STAT_RF_REV_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | RF Referenz |

### RES_0XE2D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_ADAPTER_AVAILABILITY | 0/1 | high | unsigned char | - | - | - | - | - | 0b0: Adapter nicht verfügbar 0b1: Adapter verfügbar |
| STAT_CA_MODUL_AVAILABILITY | 0/1 | high | unsigned char | - | - | - | - | - | 0b0: CA Modul nicht verfügbar 0b1: CA Modul verfügbar |
| STAT_SMARTCARD_AVAILABILITY | 0/1 | high | unsigned char | - | - | - | - | - | 0b0: Smart card nicht verfügbar 0b1: Smart card verfügbar |
| STAT_CARD_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Card ID als Zeichenkette |
| STAT_TAB_SMARTCARD_ERROR_MESSAGE | 0-n | high | unsigned char | - | TAB_SMARTCARD_ERROR_MESSAGE | - | - | - | Fehlermeldung der Smartcard |

### RES_0XE2D6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV1_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke an der TV1-Antenne in dBuV |
| STAT_TV2_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke an der TV2-Antenne in dBuV |
| STAT_TV3_FIELDSTRENGTH_DBUV_WERT | dBµV | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Feldstärke an der TV3-Antenne in dBuV. Falls auscodiert: 0xFF |

### RES_0XE2D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TV1_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des TV1-Antennenverstärkers in mA. |
| STAT_TV2_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des TV2-Antennenverstärkers in mA. |
| STAT_TV3_SUPPLYCURRENT_MA_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Stromaufnahme des TV3-Antennenverstärkers in mA. Falls auscodiert: 0 mA |

### RES_0XE2F0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIMULATION_MODUS | 0-n | high | unsigned char | - | TAB_SIMULATION_MODUS | - | - | - | simulierter Übertemperaturstatus |

### RES_0XE301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASD_OUTSIDE_CHANNEL_1 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob der Audiokanal ''ASD außen Kanal 1'' aktiviert ist. |
| STAT_ASD_OUTSIDE_CHANNEL_2 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob der Audiokanal ''ASD außen Kanal 2'' aktiviert ist. |
| STAT_PEDESTRIAN_WARNING_SYSTEM_CHANNEL_1 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob der Audiokanal ''Akustischer Fußgängerschutz Kanal 1'' aktiviert ist. |
| STAT_PEDESTRIAN_WARNING_SYSTEM_CHANNEL_2 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob der Audiokanal ''Akustischer Fußgängerschutz Kanal 2'' aktiviert ist. |

### RES_0XE302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASD_INSIDE | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die ASD innen Funktion aktiv ist |
| STAT_ASD_OUTSIDE | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die ASD außen Funktion aktiv ist. |
| STAT_E_SOUND_INSIDE | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die E-Sound innen Funktion aktiv ist. |
| STAT_E_SOUND_OUTSIDE | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die E-Sound außen Funktion aktiv ist. |
| STAT_PEDESTRIAN_WARNING_SYSTEM | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Liefert zurück ob die akustischer Fußgängerschutz Funktion aktiv ist. |

### RES_0XE303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DYNAMIC_TRACK_1 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_2 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_3 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_4 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_5 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_6 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_7 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |
| STAT_DYNAMIC_TRACK_8 | 0-n | high | unsigned char | - | TAB_STATUS_FEEDBACK | - | - | - | Aktivierungsstatus |

### RES_0XE311_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE_NAME_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 2 = Status_LRL_2_LIN = RGB_LIN_SLAVE_2_FKT |
| STAT_LED_BLUE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 3 = Status_LRL_3_LIN = RGB_LIN_SLAVE_3_FKT |
| STAT_LED_BLUE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 4 = Status_LRL_4_LIN = RGB_LIN_SLAVE_4_FKT |
| STAT_LED_BLUE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 5 = Status_LRL_5_LIN = RGB_LIN_SLAVE_5_FKT |
| STAT_LED_BLUE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 6 = Status_LRL_6_LIN = RGB_LIN_SLAVE_6_FKT |
| STAT_LED_BLUE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 7 = Status_LRL_7_LIN = RGB_LIN_SLAVE_7_FKT |
| STAT_LED_BLUE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 8 = Status_LRL_8_LIN = RGB_LIN_SLAVE_8_FKT |
| STAT_LED_BLUE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 9 = Status_LRL_9_LIN = RGB_LIN_SLAVE_9_FKT |
| STAT_LED_BLUE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 10 = Status_LRL_10_LIN = RGB_LIN_SLAVE_10_FKT |
| STAT_LED_BLUE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 11 = Status_LRL_11_LIN = RGB_LIN_SLAVE_11_FKT |
| STAT_LED_BLUE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 12 = Status_LRL_12_LIN = RGB_LIN_SLAVE_12_FKT |
| STAT_LED_BLUE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 13 = Status_LRL_13_LIN = RGB_LIN_SLAVE_13_FKT |
| STAT_LED_BLUE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 14 = Status_LRL_14_LIN = RGB_LIN_SLAVE_14_FKT |
| STAT_LED_BLUE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 15 = Status_LRL_15_LIN = RGB_LIN_SLAVE_15_FKT |
| STAT_LED_BLUE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 16 = Status_LRL_16_LIN = RGB_LIN_SLAVE_16_FKT |
| STAT_LED_BLUE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 17 = Status_LRL_17_LIN = RGB_LIN_SLAVE_17_FKT |
| STAT_LED_BLUE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 18 = Status_LRL_18_LIN = RGB_LIN_SLAVE_18_FKT |
| STAT_LED_BLUE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 19 = Status_LRL_19_LIN = RGB_LIN_SLAVE_19_FKT |
| STAT_LED_BLUE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 20 = Status_LRL_20_LIN = RGB_LIN_SLAVE_20_FKT |
| STAT_LED_BLUE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 21 = Status_LRL_21_LIN = RGB_LIN_SLAVE_21_FKT |
| STAT_LED_BLUE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 22 = Status_LRL_22_LIN = RGB_LIN_SLAVE_22_FKT |
| STAT_LED_BLUE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 23 = Status_LRL_23_LIN = RGB_LIN_SLAVE_23_FKT |
| STAT_LED_BLUE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 24 = Status_LRL_24_LIN = RGB_LIN_SLAVE_24_FKT |
| STAT_LED_BLUE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 25 = Status_LRL_25_LIN = RGB_LIN_SLAVE_25_FKT |
| STAT_LED_BLUE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 26 = Status_LRL_26_LIN = RGB_LIN_SLAVE_26_FKT |
| STAT_LED_BLUE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_METHODE_AUTOADRESSIERUNG | 0-n | high | unsigned char | - | TAB_LIN_METHODE_ADRESSIERUNG | - | - | - | Liefert den aktuellen Wert der verwendeten Autoadressierung.  Entspricht dem BDC Kodierparameter  METHODE_AUTOADRESSIERUNG |

### RES_0XE321_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | vorne links (Mitteltöner oder Bikombination) (FL) |
| STAT_FR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | vorne rechts (Mitteltöner oder Bikombination) (FR) |
| STAT_RL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten links (Mitteltöner oder Bikombination) (RL) |
| STAT_RR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten rechts (Mitteltöner oder Bikombination) (RR) |
| STAT_CBL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | Zentralbass links (CBL) |
| STAT_CBR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | Zentralbass rechts (CBR) |
| STAT_C | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | Center (Mitteltöner oder Bikombination) ( C) |
| STAT_SURL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | surround links (Mitteltöner oder Bikombination) (SURL) |
| STAT_SURR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | surround rechts (Mitteltöner oder Bikombination) (SURR) |
| STAT_FL_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | front left tweeter (FL_TW) |
| STAT_FR_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | vorne rechts Hochtöner  (FR_TW) |
| STAT_RL_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten links Hochtöner (RL_TW) |
| STAT_RR_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten rechts Hochtöner  (RR_TW) |
| STAT_C_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | Center Hochtöner  (C_TW) |
| STAT_SURL_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | surround links Hochtöner  (SURL_TW) |
| STAT_SURR_TW | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | surround rechts Hochtöner (SURR_TW) |
| STAT_FL_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | vorne links 3D (FL_3D) |
| STAT_FR_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | vorne rechts 3D (FR_3D) |
| STAT_RL_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten links 3D (RL_3D) |
| STAT_RR_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | hinten rechts 3D  (RR_3D) |
| STAT_AUX1_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | aux 1 3D  (AUX1_3D) |
| STAT_AUX2_3D | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | aux 2 3D (AUX2_3D) |
| STAT_LHZDL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone Fahrer links (LHZDL) |
| STAT_LHZDR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone Fahrer rechts (LHZDR) |
| STAT_LHZPAL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone Beifahrer links (LHZPAL) |
| STAT_LHZPAR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone Beifahrer rechts  (LHZPAR) |
| STAT_LHZRLL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone hinten links links (LHZRLL) |
| STAT_LHZRLR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone hinten links rechts (LHZRLR) |
| STAT_LHZRRL | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone hinten rechts links (LHZRRL) |
| STAT_LHZRRR | 0-n | high | unsigned char | - | TAB_LOUDSPEAKERCONFIGURATION | - | - | - | lokale Hörzone hinten rechts rechts (LHZRRR) |

### RES_0XE322_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIC_DRIVER | 0/1 | high | signed char | - | - | - | - | - | 1: Mikrofon codiert  0: Mikrofon nicht codiert |
| STAT_MIC_PASSENGER | 0/1 | high | signed char | - | - | - | - | - | 1: Mikrofon codiert  0: Mikrofon nicht codiert |
| STAT_MIC_CHANNEL3 | 0/1 | high | signed char | - | - | - | - | - | 1: Mikrofon coded  0: Mikrofon not coded |
| STAT_MIC_REAR_LEFT | 0/1 | high | signed char | - | - | - | - | - | 1: Mikrofon codiert  0: Mikrofon nicht codiert |
| STAT_MIC_REAR_RIGHT | 0/1 | high | signed char | - | - | - | - | - | 1: Mikrofon codiert  0: Mikrofon nicht codiert |

### RES_0XE340_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VARIANTE_BOOSTER | 0-n | - | unsigned char | - | TAB_HW_VARIANTE_BOOSTER | - | - | - | Hardwarevariante entsprechend der Bezeichnung aus der SW-Logistik |
| STAT_HW_VARIANTE_BOOSTER_LIEFERANT | 0-n | - | unsigned char | - | TAB_HW_VARIANTE_BOOSTER_LIEFERANT | - | - | - | Hardwareeinheit entsprechend der Variantenbezeichnung des Lieferanten |

### RES_0XE341_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL30_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Klemme 30 in V |
| STAT_KL30B_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Klemme 30B in V |

### RES_0XE344_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIMULATION_MODUS | 0-n | high | unsigned char | - | TAB_SIMULATION_MODUS | - | - | - | simulierter Übertemperaturstatus |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEISTUNGSZUSTAND | - | - | + | 0-n | high | unsigned char | - | TAB_LEISTUNGSZUSTAND | - | - | - | Leistungszustand |

### RES_0XF01F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SECURITY_DEBUG_PORTS | + | - | - | 0-n | high | unsigned char | - | SECURITY_PORT_STATUS | - | - | - | current status of debug port |

### RES_0XF020_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SECURITY_DEBUG_PORTS | - | - | + | 0-n | high | unsigned char | - | SECURITY_PORT_STATUS | - | - | - | current status of debug port |

### RES_0XF021_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERIFY_KEYS | + | - | - | 0-n | high | unsigned char | - | VERIFY_KEYS | - | - | - | Verification der Schlüssel HDCP bzw. CI+ |

### RES_0XF022_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SECURITY_SIGN_ADJUST_BLOCK | - | - | + | 0-n | high | unsigned char | - | Security_Sign_Adjust_Block | - | - | - | prüft die signatur vom Adjust Block |

### RES_0XF023_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIST_MD5KEYS_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SECURITY_PORT_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | - |
| 0x01 | - |
| 0xFF | Wert ungültig |

### SECURITY_VERIFY_ADJ_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | HTCP |
| 0x01 | CI+ |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR | 0x4000 | - | Liest die Temperaturen der vorhandenen RAM-Komponenten aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| VIN_ECU | 0x4001 | STAT_VIN_SHORT_TEXT | Fahrgestellnummer (kurz) | TEXT | - | High | string[7] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CPU_AUSLASTUNG | 0x4002 | - | Liest die aktuelle CPU Systemlasten in % | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002_D |
| SPEED | 0x4003 | STAT_V_VEH_WERT | akuelle Fahrzeuggeschwindigkeit  (Geschwindigkeit Fahrzeug Schwerpunkt aus V_VEH) | km/h | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LIFECYCLE_COUNTER | 0x4004 | - | Gibt Lebenszykluszählerwerte zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| BOOSTER_TEMPERATUR | 0x4100 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4100_D |
| ZUSTAND_MIKROFONE_DFK | 0x4110 | - | Schaltet die Verwendung des Mikrofonsignals für das GAE im ALEV4 aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4110_D | - |
| KLANGZEICHEN | 0xA000 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA000_R | - |
| SINUSGENERATOR | 0xA001 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001_R | - |
| PDC_SIGNAL | 0xA003 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA003_R | - |
| TEST_VERBAU | 0xA01E | - | Verbauprüfung der externen Anschlüsse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| LAUTSPRECHER_IMPEDANZMESSUNG | 0xA021 | - | siehe 'Beschreibung (DE) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA021_R | RES_0xA021_R |
| VOLUMEAUDIO | 0xA036 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036_R | - |
| STATUS_VOLUMEAUDIO | 0xA039 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039_R | RES_0xA039_R |
| LUEFTER_RPM | 0xA03C | - | Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| FACTORY_RESET | 0xA082 | - | Diagnosejob, der für das gewählte Profil das gewählte Element auf die Werkseinstellungen zurücksetzt und den Status des Zurücksetzens ausgibt. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA082_R | RES_0xA082_R |
| MIKROFON_KALIBRIERUNG | 0xA091 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA091_R |
| INTERNAL_TRACE_DISABLE_UNCONDITIONAL_TRACING | 0xA0BC | - | Legt das irreversible Flag für die Aktivierung der internen Ablaufverfolgung unter 255 km auf False. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| MIKROFON_KALIBRIERUNG_LOESCHEN | 0xA0C9 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0C9_R |
| LUEFTER | 0xA0CA | - | Lüftersteuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CA_R | RES_0xA0CA_R |
| AUDIOKANAELE | 0xA0CC | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CC_R | - |
| TUNER_FM_AM_FIND_BEST_STATION | 0xA142 | - | Sucht die Frequenz mit der höchsten Feldstärke im angegebenen Wellenbereich und gibt die Frequenz zurück. Dauer: mehrere Sekunden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA142_R | RES_0xA142_R |
| TUNER_DAB_FIND_BEST_ENSEMBLE | 0xA143 | - | Ermittelt das Ensemble mit der niedrigsten Bitfehlerrate, stellt den ersten Service ein und gibt beide Namen auf Anfrage zurück. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA143_R |
| TUNER_SDARS_PREACTIVATION_MPFA | 0xA144 | - | Steuert die Standard-Händler-Aktivierung des SDARS-Empfangs (eingschränkte Kanal-Anzahl für Demonstrationszwecke). MPFA = Multi Package Factory Activation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA144_R | RES_0xA144_R |
| ASD_CHECK_FUNCTION | 0xA145 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA145_R | - |
| ASD_MUTE | 0xA410 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA410_R | RES_0xA410_R |
| ASD_SET_ADDITIONAL_FUNCTION | 0xA412 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA412_R | - |
| DATA_INFORMATION | 0xA414 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA414_R | RES_0xA414_R |
| DATA_CHECKSUM | 0xA416 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA416_R | RES_0xA416_R |
| LIN_AUTOADRESSIERUNG | 0xA430 | - | Es wird die Autoadressierung der LIN-Layering-Slaves durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA430_R | RES_0xA430_R |
| SPEAKER_DIAGNOSTICS | 0xA441 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA441_R | RES_0xA441_R |
| LAUTSPRECHER_ASIL_MESSUNG | 0xA442 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA442_R | RES_0xA442_R |
| BOOSTER_LUEFTER | 0xA450 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA450_R | RES_0xA450_R |
| BOOSTER_LUEFTER_RPM | 0xA451 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA451_R | RES_0xA451_R |
| BOOSTER_RESET | 0xA452 | - | Booster führt Reset durch  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| BOOSTER_RUNDOWN | 0xA453 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LESEN_SYSTEMAUDIO | 0xD002 | STAT_AUDIO_SYSTEM | bezeichnet das Lautsprechersystem | 0-n | - | - | unsigned char | TAB_AUDIOSYSTEM | - | - | - | - | 22 | - | - |
| INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Initialisierungsstatus | 0-n | - | - | unsigned char | TAB_INITIALISIERUNG | - | - | - | - | 22 | - | - |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| APPLICATION | 0xD021 | - | Status aller freischaltbaren Applikationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| STATUS_HW_VARIANTE | 0xD04E | - | Liefert die HW-Variante des jeweiligen Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD04E_D |
| TIME_AFTER_STARTUP | 0xD092 | STAT_TIME_AFTER_START_UP_WERT | Werte von 0-65535 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist | s | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_FM_AM_DAB_GET_TUNED_FREQUENCY | 0xE2C0 | STAT_FREQ_KHZ_WERT | AM hörbar: aktuell eingestellte AM-Frequenz  FM hörbar: aktuell eingestellte FM-Frequenz  DAB hörbar: aktuell eingestellte DAB-Frequenz | kHz | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_FM_AM_SET_FREQUENCY | 0xE2C1 | - | Setzt die aktuell hörbare Empfangfrequenz einschließlich ggf. notwendigem Wellenbereichswechsel. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2C1_D | - |
| TUNER_FM_AM_GET_HD_FIRMWARE_VERSION | 0xE2C2 | STAT_FW_VERSION_TEXT | Firmware-Version in Form einer Zeichenkette | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_FM_AM_GET_FIELDSTRENGTH | 0xE2C3 | - | Gibt die Feldstärke des Hörsenders auf der angegebenen Antenne in vollen dBuV zurück. Werte größer 0 dBuV werden als 0 dBuV ausgegeben. Feldstärkewerte, die technisch bedingt nicht verfügbar sind, werden als 0xFF ausgegeben (z.B. AM-Wert = 0xFF, wenn das Gerät im FM-Mode ist). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C3_D |
| TUNER_FM_AM_GET_ANTENNA_SUPPLY_CURRENT | 0xE2C4 | - | Gibt die Stromaufnahme der Antennenverstärker in vollen mA zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C4_D |
| TUNER_DAB_GET_BIT_ERROR_RATE | 0xE2C5 | STAT_BIT_ERROR_RATE_WERT | BitErrorRate (BER) in % | - | - | High | motorola float | - | 100.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_DAB_GET_SIGNAL_STATUS | 0xE2C6 | STAT_SIGNAL_STATUS | 0b1: Wenn das DAB-Audiosignal verfügbar ist 0B0: Wenn das DAB-Audiosignal nicht verfügbar ist | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| TUNER_DAB_GET_FIELDSTRENGTH | 0xE2C7 | - | Gibt die Feldstärkewerte der Antennen in vollen dBuV zurück. Werte kleiner 0 dBuV werden als 0 dBuV ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C7_D |
| TUNER_DAB_GET_ANTENNA_SUPPLY_CURRENT | 0xE2C8 | - | Gibt die Stromaufnahme der DAB Antennenverstärker in vollen mA zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2C8_D |
| TUNER_SDARS_GET_SXM_PHONENUMBER | 0xE2C9 | STAT_SXM_TEL_NO_TEXT | SXM-Telefonnummer (max. 35-stellig) | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_SET_SXM_PHONENUMBER | 0xE2CA | - | Schreibt die angegebene SXMTelefonnummer in das Modul. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2CA_D | - |
| TUNER_SDARS_GET_RADIO_ID | 0xE2CB | STAT_RADIO_ID_TEXT | Radio ID als String | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_PELLET | 0xE2CC | STAT_SXM_PELLET_TEXT | Eindeutiger Wert, der aus Radio ID und MPFA (Multi Package Factory Activation) berechnet wird. String mit 100Byte Länge | TEXT | - | High | string[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_SDARS_GET_SOFTWARE_VERSION | 0xE2CD | - | Liest alle für SDARS relevanten Softwareversionen aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2CD_D |
| TUNER_TV_GET_CI_CRYPTOKEY | 0xE2CE | STAT_CI_KEY | CI Schlüsseltyp | 0-n | - | High | unsigned char | TAB_CI_CRYPTO_KEY_TYPE | - | - | - | - | 22 | - | - |
| TUNER_TV_GET_REGION | 0xE2CF | STAT_TV_REGION | aktuelle TV-Region | 0-n | - | High | unsigned char | TAB_TV_REGION | - | - | - | - | 22 | - | - |
| TUNER_TV_SET_REGION | 0xE2D0 | - | Setzt die angegebene TV-Region (Simulation der Eingabe des Kunden). | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2D0_D | - |
| TUNER_TV_GET_CHANNEL | 0xE2D1 | STAT_CHANNEL_NUMBER_WERT | Kanal-Nr. | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUNER_TV_SET_CHANNEL | 0xE2D2 | - | Stellt den angegebenen Kanal ein. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2D2_D | - |
| TUNER_TV_GET_CA_STATUS | 0xE2D3 | - | Liest den Status des CA-Anschlusses aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2D3_D |
| TUNER_TV_SET_TEST_IMAGE | 0xE2D4 | - | Stellt den Typ des Testbildes ein. Abbruch der Testbildausgabe über OFF oder mit dem Ende das aktuellen LifeCycles. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE2D4_D | - |
| TUNER_TV_GET_TEST_IMAGE | 0xE2D5 | STAT_TEST_IMAGE | Testbild-Typ | 0-n | - | High | unsigned char | TAB_TEST_IMAGE | - | - | - | - | 22 | - | - |
| TUNER_TV_GET_FIELDSTRENGTH | 0xE2D6 | - | Gibt die Feldstärkewerte der Antennen in vollen dBuV zurück. Werte kleiner 0 dBuV werden als 0 dBuV ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2D6_D |
| TUNER_TV_GET_ANTENNA_SUPPLY_CURRENT | 0xE2D7 | - | Gibt die Stromaufnahme der Antennen in vollen mA zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2D7_D |
| TEMP_SIMULATION | 0xE2F0 | - | Für Testzwecke können intern hohe Temperaturwerte gesetzt werden. Das erwartete Fehlerverhalten von RAM und BOOSTER kann damit überprüft werden. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE2F0_D | RES_0xE2F0_D |
| ASD_CHANNEL_INFORMATION | 0xE301 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE301_D |
| ASD_GET_FUNCTION_STATUS | 0xE302 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE302_D |
| ASD_GET_ADDITIONAL_FUNCTION_STATUS | 0xE303 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE303_D |
| LIN_AKTIV | 0xE310 | STAT_LIN_1_AKTIV | 0b1: LIN_1 ist aktiv 0b0: LIN_1 nicht aktiv | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| LIN_RGB_MODULE | 0xE311 | - | Ansteuerung einzlener oder aller LED-Module am Steuergerät. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE311_D | RES_0xE311_D |
| LAUTSPRECHER_KONFIGURATION | 0xE321 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE321_D |
| ANZAHL_MIKROFONE | 0xE322 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE322_D |
| SOFTWARENAME | 0xE330 | STAT_SOFTWARENAME_TEXT | Softwarename | TEXT | - | High | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VERSORGUNGSSPANNUNG | 0xE331 | STAT_KL30B_WERT | Spannung an Klemme 30 B in V | V | - | High | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| BOOSTER_VARIANTE | 0xE340 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE340_D |
| BOOSTER_VERSORGUNGSSPANNUNG | 0xE341 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE341_D |
| BOOSTER_TEMP_SIMULATION | 0xE344 | - | siehe 'Beschreibung (DE)' | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE344_D | RES_0xE344_D |
| STATUS_EARLY_AUDIO_READY | 0xE488 | STAT_TIME_WERT | time of KPI_RAM_AUD3_MK1_EARLY_AUDIO_READY in ms | ms | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEISTUNGSZUSTAENDE | 0xF002 | - | Steuert den Leistungszustand des Verstärkers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | RES_0xF002_R |
| MEHRKANAL_ZUTEILUNG | 0xF010 | - | siehe 'Beschreibung (DE)'. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | - |
| SECURITY_DEBUG_PORTS_OFF | 0xF01F | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01F_R |
| SECURITY_DEBUG_PORTS | 0xF020 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF020_R |
| SECURITY_VERIFY_KEYS | 0xF021 | - | The job verifies the written security keys. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF021_R | RES_0xF021_R |
| SECURITY_SIGN_ADJUST_BLOCK | 0xF022 | - | The jobs is only allowed in AuthLevel-DevelopmentSession(0x4F) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF022_R | RES_0xF022_R |
| SECURITY_REVOKE_UNLOCK_KEYS | 0xF023 | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF023_R | RES_0xF023_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### SECURITY_SIGN_ADJUST_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | not correct |
| 0x01 | correct |
| 0xFF | Wert ungültig |

### TAB_APPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung |
| 0x01 | TextToSpeech |
| 0x02 | Navi Applikation |
| 0x03 | Navi Karte |
| 0x04 | A4A |
| 0x05 | Laptimer |
| 0x06 | SDARS |
| 0x07 | Log & Trace |
| 0x08 | CarPlay |
| 0xFF | reserviert |

### TAB_APPLICATION_ACTIVATION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | deaktiviert durch Codierung |
| 0x02 | aktiviert durch Codierung |
| 0x04 | deaktiviert durch SWT |
| 0x05 | deaktiviert durch Codierung und deaktiviert durch SWT |
| 0x06 | aktiviert durch Codierung und deaktiviert durch SWT |
| 0x08 | aktiviert durch SWT |
| 0x09 | deaktiviert durch Codierung und aktiviert durch SWT |
| 0x0A | aktiviert durch Codierung und aktiviert durch SWT |
| 0xFF | nicht definiert |

### TAB_APPLICATION_RUNNING_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation nicht gestartet |
| 0x01 | Applikation gestartet |
| 0xFF | nicht definiert |

### TAB_ASD_ADDITIONAL_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x01 | Dynamic Sample Track 1 |
| 0x02 | Dynamic Sample Track 2 |
| 0x03 | Dynamic Sample Track 3 |
| 0x04 | Dynamic Sample Track 4 |
| 0x05 | Dynamic Sample Track 5 |
| 0x06 | Dynamic Sample Track 6 |
| 0x07 | Dynamic Sample Track 7 |
| 0x08 | Dynamic Sample Track 8 |
| 0xFF | ungültig |

### TAB_ASD_EXT_SPEAKER

| WERT | TEXT |
| --- | --- |
| 0x00 | VSG Lautsprecher vorne |
| 0x01 | VSG Lautsprecher hinten |
| 0x02 | AGA Lautsprecher 1 |
| 0x03 | AGA Lautsprecher 2 |
| 0xFF | Wert ungültig |

### TAB_ASD_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x01 | Alle Funktionen |
| 0x02 | ASD innen |
| 0x03 | ASD außen |
| 0x04 | E-Sound innen |
| 0x05 | E-Sound außen |
| 0x06 | Akustischer Fußgängerschutz |

### TAB_AUDIOSYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | STEREO |
| 0x01 | HIFI |
| 0x02 | TOP-HIFI |
| 0x03 | HIGH-END-AUDIO |
| 0x04 | STEREO-BASIS |
| 0xFF | Nicht definiert |

### TAB_AUDIO_CHANNEL

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Kanäle |
| 0x01 | vorne links (Mitteltöner oder Bikombination) (FL) |
| 0x02 | vorne rechts (Mitteltöner oder Bikombination) (FR) |
| 0x03 | hinten links (Mitteltöner oder Bikombination) (RL) |
| 0x04 | hinten rechts (Mitteltöner oder Bikombination) (RR) |
| 0x05 | Zentralbass links (CBL) |
| 0x06 | Zentralbass rechts (CBR) |
| 0x07 | Center (Mitteltöner oder Bikombination) ( C) |
| 0x08 | surround links (Mitteltöner oder Bikombination) (SURL) |
| 0x09 | surround rechts (Mitteltöner oder Bikombination) (SURR) |
| 0x0A | vorne links Hochtöner (FL_TW) |
| 0x0B | vorne rechts Hochtöner  (FR_TW) |
| 0x0C | hinten links Hochtöner (RL_TW) |
| 0x0D | hinten rechts Hochtöner  (RR_TW) |
| 0x0E | Center Hochtöner  (C_TW) |
| 0x0F | surround links Hochtöner  (SURL_TW) |
| 0x10 | surround rechts Hochtöner (SURR_TW) |
| 0x11 | vorne links 3D (FL_3D) |
| 0x12 | vorne rechts 3D (FR_3D) |
| 0x13 | hinten links 3D (RL_3D) |
| 0x14 | hinten rechts 3D  (RR_3D) |
| 0x15 | aux 1 3D  (AUX1_3D) |
| 0x16 | aux 2 3D (AUX2_3D) |
| 0x17 | lokale Hörzone Fahrer links (LHZDL) |
| 0x18 | lokale Hörzone Fahrer rechts (LHZDR) |
| 0x19 | lokale Hörzone Beifahrer links (LHZPAL) |
| 0x1A | lokale Hörzone Beifahrer rechts  (LHZPAR) |
| 0x1B | lokale Hörzone hinten links links (LHZRLL) |
| 0x1C | lokale Hörzone hinten links rechts (LHZRLR) |
| 0x1D | lokale Hörzone hinten rechts links (LHZRRL) |
| 0x1E | lokale Hörzone hinten rechts rechts (LHZRRR) |
| 0x1F | Fahrzeugsound Generator vorne (VSGF) |
| 0x20 | Fahrzeugsound Generator hinten (VSGR) |
| 0x21 | Außensound 1  (SO1) |
| 0x22 | Außensound 2  (SO2) |
| 0xFF | Nicht definiert |

### TAB_AUTOADR_OPERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | starten |
| 0x01 | löschen |
| 0xFF | Wert ungültig |

### TAB_AUTOADR_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Autoadressierung erfolgreich |
| 0x01 | Autoadr. Vorbedingungen nicht korrekt |
| 0x02 | Autoadressierung läuft |
| 0x03 | Autoadressierung fehlgeschlagen |
| 0xFF | Wert ungültig |

### TAB_BOOSTER_LUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x02 | Lüfter dreht sich |
| 0xFF | nicht definiert |

### TAB_CI_CRYPTO_KEY_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_CRYPTO_KEY |
| 0x01 | TEST_CRYPTO_KEY |
| 0x02 | FINAL_CRYPTO_KEY |
| 0xFF | ungültigi |

### TAB_DATASET_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | ASD_EX |
| 0x02 | ASD_IN |
| 0x03 | EQ |
| 0x04 | ESND_IN |
| 0x05 | ESND_OUT |
| 0x06 | VSG |
| 0xFF | Wert ungültig |

### TAB_EARLY_AUDIO_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC |
| 0x01 | Gong |
| 0xFF | Wert ungültig |

### TAB_GONG_DURATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Single |
| 0x01 | Intermittend |
| 0xFF | Wert ungültig |

### TAB_GONG_SINK

| WERT | TEXT |
| --- | --- |
| 0x00 | MainSink |
| 0x01 | Local Hearing Zone Front Right |
| 0x02 | Local Hearing Zone Front Left |
| 0x03 | Local Hearing Zone Rear Right |
| 0x04 | Local Hearing Zone Rear Left |
| 0xFF | Wert ungültig |

### TAB_HW_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | RAM_BASE |
| 0x01 | RAM_BASE_TMC |
| 0x02 | RAM_BASE_VICS |
| 0x03 | RAM_BASE_DAB |
| 0x04 | RAM_BASE_SDARS |
| 0x05 | RAM_MID |
| 0x06 | RAM_MID_VICS |
| 0x07 | RAM_MID_DAB |
| 0x08 | RAM_MID_SDARS |
| 0x09 | BAM |
| 0x0A | RAM_HIGH |
| 0x0B | RAM_HIGH_DAB |
| 0x0C | RAM_HIGH_TV_ECE |
| 0x0D | RAM_HIGH_SDARS |
| 0x0E | RAM_HIGH_VICS |
| 0x0F | RAM_HIGH_TV_JAPAN |
| 0xFF | nicht definiert |

### TAB_HW_VARIANTE_BOOSTER

| WERT | TEXT |
| --- | --- |
| 0x0 | BOOSTER_ALEV3 |
| 0x02 | BOOSTER_ALEV3_AGA |
| 0x04 | BOOSTER_AGA |
| 0x05 | BOOSTER_ALEV4 |
| 0x06 | BOOSTER_ALEV4_AGA |
| 0xFE | BOOSTER_NICHT_VERBAUT |
| 0xFF | nicht definiert |

### TAB_HW_VARIANTE_BOOSTER_LIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | B331 |
| 0x02 | B333 |
| 0x04 | B332 |
| 0x05 | B334 |
| 0x06 | B335 |
| 0xFF | nicht definiert |

### TAB_HW_VARIANTE_LIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | B265 |
| 0x01 | B266 |
| 0x02 | B267 |
| 0x03 | B268 |
| 0x04 | B269 |
| 0x05 | B271 |
| 0x06 | B272 |
| 0x07 | B273 |
| 0x08 | B274 |
| 0x09 | B275 |
| 0x0A | B276 |
| 0x0B | B277 |
| 0x0C | B278 |
| 0x0D | B279 |
| 0x0E | B280 |
| 0x0F | B281 |
| 0xFF | nicht definiert |

### TAB_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | nicht definiert |

### TAB_INNENLICHT_VERBAUORT

| WERT | TEXT |
| --- | --- |
| 0x03 | Lautsprecher Hutablage rechts |
| 0x04 | Lautsprecher Hutablage links |
| 0x05 | Lautsprecher hinten links |
| 0x06 | Lautsprecher Mitteltöner vorne links |
| 0x07 | Lautsprecher Hochtöner vorne links |
| 0x08 | Lautsprecher hinten rechts |
| 0x09 | Lautsprecher Mitteltöner vorne rechts |
| 0x0A | Lautsprecher Hochtöner vorne rechts |
| 0x0B | Zentrallautsprecher |
| 0xFF | Wert ungültig |

### TAB_KANAL_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TAB_LEISTUNGSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Standard |
| 0x01 | MSA |
| 0x02 | Power Save |
| 0x03 | High Performance |
| 0xFF | nicht definiert |

### TAB_LIN_METHODE_ADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Busshunt |
| 0x01 | extra wire daisy chain |
| 0xFF | Wert ungültig |

### TAB_LOUDSPEAKERCONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Lautsprecher |
| 0x01 | ein Lautsprecher |
| 0x02 | zwei Lautsprecher (Bikombination) |
| 0xFF | Wert ungültig |

### TAB_LUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter dreht sich, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter dreht sich mit der erwarteteten Drehzahl |
| 0xFF | nicht definiert |

### TAB_MEHRKANAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Links |
| 0x01 | Rechts |
| 0x02 | Center |
| 0x03 | Bass |
| 0x04 | Links Surround |
| 0x05 | Rechts Surround |
| 0xFF | Wert ungültig |

### TAB_MPFA

| WERT | TEXT |
| --- | --- |
| 0x00 | Null selection - no Package |
| 0x01 | US SXM Select Audio |
| 0x02 | Canada XM Premier Audio |
| 0x03 | Canada XM Premier Audio + SXM Traffic |
| 0x04 | US SXM Select Audio + SXM Traffic |
| 0x05 | US SXM Premier Audio |
| 0x06 | US SXM Premier Audio + Travel Link |
| 0x07 | US SXM Premier Audio + SXM Traffic + Travel Link |
| 0x08 | US SXM Premier Audio + SXM Traffic |
| 0x09 | Canada XM Select Audio |
| 0x0A | Canada XM Premier Audio + Travel Link |
| 0x0B | Canada XM Premier Audio + SXM Traffic + Travel Link |
| 0x0C | Canada XM Select Audio + SXM Traffic |
| 0xFF | not activated |

### TAB_MIKROFONVERWENDUNG

| WERT | TEXT |
| --- | --- |
| 0 | Mikrofon EIN |
| 1 | Mikrofon AUS |
| 0xFF | Wert ungültig |

### TAB_OPERATION_MODE

| WERT | TEXT |
| --- | --- |
| 0x01 | Deaktivierung |
| 0x02 | Aktivierung |

### TAB_RESET_ELEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Elemente |
| 0x10 | alle Tuner |
| 0x11 | FM, AM und DAB |
| 0x12 | SDARS |
| 0x13 | TV |
| 0x21 | Lichtinszenierung |
| 0xFF | nicht definiert |

### TAB_RESET_PROFILE

| WERT | TEXT |
| --- | --- |
| 0x00 | alle Profile |
| 0x01 | Profil 0, Nutzer 1 |
| 0x02 | Profil 1, Nutzer 2 |
| 0x03 | Profil 2, Nutzer 3 |
| 0x04 | Gast |
| 0x05 | Default-Profil |

### TAB_ROUTINE_TESTVERBAU

| WERT | TEXT |
| --- | --- |
| 0x00000000 | gesamte Peripherie |
| 0x00000001 | Entertainment Lautsprecher |
| 0x00000008 | Fußgängerschutz Lautsprecher (VSG) |
| 0x00000010 | Abgasanlagen Lautsprecher (aAGA) |
| 0x00000020 | Mikrofone |
| 0x00000040 | AM/FM Antennen |
| 0x00000080 | DAB Antenne(n) |
| 0x00000100 | SXM Antenne |
| 0x00000200 | TV Antennen |
| 0x00000400 | TV CI+ Kartenleser |
| 0x00000800 | Lichtinszenierung |
| 0xFFFFFFFF | Peripherie-Kombination (bzw. Wert ungültig) |

### TAB_SIMULATION_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | OVERHEAT_WARNING |
| 0x02 | OVERHEAT_CRITICAL |
| 0xFF | nicht definiert |

### TAB_SMARTCARD_ERROR_MESSAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x02 | CI-Karte nicht verfügbar |
| 0x06 | Vertrag abgelaufen |
| 0x0A | Kommunikation fehlgeschlagen |
| 0x0D | Ungültiges CI-Modul gesteckt |
| 0x0F | unbekannter Fehler |
| 0xFF | Wert ungültig |

### TAB_SOUND_SIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop Gong |
| 0x01 | ASILAGONG |
| 0x02 | CWA |
| 0x03 | WA |
| 0x04 | ETC_Success |
| 0x05 | ETC_Failure |
| 0x06 | ETC_Stop |
| 0x07 | ETC_Failure_2 |
| 0x08 | IWA |
| 0x09 | QUE |
| 0x0A | NUN |
| 0x0B | DIW |
| 0x0C | IDIW |
| 0x0D | POC |
| 0x0E | REV |
| 0x0F | Sample_GONG |
| 0x10 | Sample_PDC |
| 0x11 | Testtone1 |
| 0x12 | Testtone2 |
| 0x13 | Testtone3 |
| 0x14 | Testtone4 |
| 0x15 | Testtone5 |
| 0x16 | FBS |
| 0x17 | VFS |
| 0x18 | SIO |
| 0x19 | SIC |
| 0x1A | TCL |
| 0x1B | GEN |
| 0x1C | GEP |
| 0x1D | UEE |
| 0x1E | UEC |
| 0x1F | TIK |
| 0x20 | TOK |
| 0x21 | OBS |
| 0x22 | LAZ_Obstacle Warning |
| 0x23 | LAZ_Informative Warning |
| 0x24 | LAZ_Question |
| 0x25 | LAZ_Neutral Notice |
| 0x26 | LAZ_Double Informative Warning |
| 0x27 | LAZ_Intermittent DIW |
| 0x28 | LAZ_Positive Confirmation |
| 0x29 | LAZ_Speech Input Open |
| 0x2A | LAZ_Speech Input Close |
| 0x2B | LAZ_Touch Click |
| 0x2C | LAZ_Gesture Negative |
| 0x2D | LAZ_Gesture Positive |
| 0x2E | LAZ_User Entry Error |
| 0x2F | LAZ_User Entry Confirmation |
| 0x30 | LAZ_Sample Sound (IWA) |
| 0x31 | LAZ_Testtone1 |
| 0x32 | LAZ_Testtone2 |
| 0x33 | LAZ_Testtone3 |
| 0x34 | DEA (DEACTIVATION) |
| 0x35 | ACT (ACTIVATION) |
| 0xFF | Wert ungültig |

### TAB_STATUS_FEEDBACK

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktiv |
| 0x01 | Nicht aktiv |
| 0xFD | Nicht kodiert |
| 0xFE | Nicht verfügbar |
| 0xFF | ungültig |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Defaultwert |
| 0xFF | Wert ungültig |

### TAB_TEST_IMAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Testbild - normaler TV betrieb |
| 0x01 | statisches Testbild |
| 0x02 | bewegtest Testbild |
| 0x03 | bewegtes Testbild mit maximaler Bitrate |
| 0xFF | Wert ungültig |

### TAB_TEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehler(n) |
| 0x04 | Test beendet durch Timeout |
| 0x05 | Test unterbrochen |
| 0xFF | nicht definiert |

### TAB_TV_REGION

| WERT | TEXT |
| --- | --- |
| 0x00 | Automatic |
| 0x01 | Italy |
| 0x02 | UK, Irland |
| 0x03 | France |
| 0x04 | Australien |
| 0x05 | New Zealand |
| 0x06 | Morocco |
| 0x07 | South America |
| 0x08 | Russia |
| 0x09 | India |
| 0x0A | East EU 1 |
| 0x0B | East EU 2 |
| 0x0C | Israel |
| 0x0D | Arabia |
| 0x0E | Africa |
| 0x0F | South Africa |
| 0x10 | South East Asia |
| 0x11 | Asia 6MHZ/60Hz |
| 0x12 | Taiwan |
| 0x80 | Hokkaido (Saporro) |
| 0x81 | Hokkaido (Hakodate) |
| 0x82 | Hokkaido (Asahikawa) |
| 0x83 | Hokkaido (Obihiro) |
| 0x84 | Hokkaido (Kushiro) |
| 0x85 | Hokkaido (Kitami) |
| 0x86 | Hokkaido (Muroran) |
| 0x87 | Aomori |
| 0x88 | Iwate |
| 0x89 | Miyagi |
| 0x8A | Akita |
| 0x8B | Yamagata |
| 0x8C | Fukushima |
| 0x8D | Ibaraki |
| 0x8E | Tochigi |
| 0x8F | Gunma |
| 0x90 | Saitama |
| 0x91 | Chiba |
| 0x92 | Tokyo (ex.Islan area) |
| 0x93 | Tokyo (Izu, ogasawara) |
| 0x94 | Kanagawa |
| 0x95 | Niigata |
| 0x96 | Toyama |
| 0x97 | Ishikawa |
| 0x98 | Fukui |
| 0x99 | Yamanashi |
| 0x9A | Nagano |
| 0x9B | Gifu |
| 0x9C | Shizuoka |
| 0x9D | Aichi |
| 0x9E | Mie |
| 0x9F | Shiga |
| 0xA0 | Kyoto |
| 0xA1 | Osaka |
| 0xA2 | Hyogo |
| 0xA3 | Nara |
| 0xA4 | Wakayama |
| 0xA5 | Tottori |
| 0xA6 | Shimane |
| 0xA7 | Okayama |
| 0xA8 | Hiroshima |
| 0xA9 | Yamaguchi |
| 0xAA | Tokushima |
| 0xAB | Kagawa |
| 0xAC | Ehime |
| 0xAD | Kochi |
| 0xAE | Fukouka |
| 0xAF | Saga |
| 0xB1 | Nagasaki |
| 0xB2 | Kumamoto |
| 0xB3 | Oita |
| 0xB4 | Miyazaki |
| 0xB5 | Kagoshima |
| 0xB6 | Kagoshima (Islands) |
| 0xB7 | Okinawa |
| 0xFF | nicht definiert |

### TAB_VOLUME_AUDIO_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC |
| 0x01 | Gong |
| 0x02 | Audioquelle_A |
| 0x03 | Audioquelle_B |
| 0xFF | Wert ungültig |

### TAB_WAVEBAND

| WERT | TEXT |
| --- | --- |
| 0x01 | FM |
| 0x02 | MW/AM |
| 0xFF | Wert ungültig |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### VERIFY_KEYS

| WERT | TEXT |
| --- | --- |
| 0x00 | not correct |
| 0x01 | correct |
| 0xFF | Wert ungültig |
