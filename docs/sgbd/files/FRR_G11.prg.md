# FRR_G11.prg

## General

|  |  |
| --- | --- |
| File | FRR_G11.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 115 |
| Origin | BMW EF-512 Maier |
| Revision | 10.005 |
| Author | BMW EV-313 Schiek |
| ECU Comment | Update der SGBD zu S18A-18-07-390: neue Infospeicher, erste Erstellung in ZEDIS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Full Range Radar |  |  |
| ORIGIN | string | BMW EF-512 Maier |  |  |
| REVISION | string | 10.005 |  |  |
| AUTHOR | string | BMW EV-313 Schiek |  |  |
| COMMENT | string | Update der SGBD zu S18A-18-07-390: neue Infospeicher, erste Erstellung in ZEDIS |  |  |
| PACKAGE | string | 1.87 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC != '-', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

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

### STEUERN_ETH_PHY_SWITCH_ENGINE_RESET

Requests the reset of a given PHY or of the ECUs switch(es). If supported by the ECU, the PHY/switch(es) may be held in reset for a given amount of time. If an ECU does not support holding the PHY/switch(es) in reset for a given duration but STOP_PHY_FOR_T is greater than 0, the job shall quit with return value STAT_PHY_RESET = 2 and without performing the reset. After the reset, the default configuration, i.e., the configuration that is used during runtime, shall be applied. UDS   : $31 RoutineControl $01 StartRoutine $1044

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port Index {0-0xfe = Port 0 - Port 254, 0xff = reset all switch engines} |
| STOP_PHY_FOR_T | unsigned char | Amount of time the PHY or switch(es) shall be hold in reset. 0 - 255 seconds |

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

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0X6102_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EOL_WINKEL_HORIZONTAL_FERNBEREICH | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | - | - | EOL-Winkel horizontale Richtung Fernbereich |
| EOL_WINKEL_HORIZONTAL_NAHBEREICH | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | - | - | EOL-Winkel horizontale Richtung Nahbereich |
| EOL_WINKEL_VERTIKAL | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | - | - | EOL-Winkel vertikale Richtung |

### ARG_0X6105_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NO_EOL_ALIGNMENT_STARTED | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of EOL alignment started |
| NO_EOL_ALIGNMENT_SUCCESS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of EOL alignment started and success |
| NO_SERVICE_ALIGNMENT_STARTED | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of service alignment started |
| NO_SERVICE_ALIGNMENT_SUCCESS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of service alignment started and success |

### ARG_0X6107_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_PFADKOMPENSATION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=Reset |

### ARG_0X610C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_PERCENTAGE | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | PWM Percentage |

### ARG_0X6112_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET_TASKTIME | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=Reset |

### ARG_0X6114_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSVERFUEGBARKEIT_FCM | 0-n | high | unsigned char | - | TAB_FUNKTIONSVERFUEGBARKEIT_FCM_PPP | - | - | - | - | - | Diese Tabelle beinhaltet die möglichen Werte für QU_FN_FCM. |
| WARNUNG_FCM | 0-n | high | unsigned char | - | TAB_WARNUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält die möglichen Werte für WARN_FCM. |
| HBA_PARAMETRIERUNG_FCM | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle beinhaltet die möglichen Werte für RDUC_THRV_BRAS_FCM. |
| BREMSVORKONDITIONIERUNG_FCM | 0-n | high | unsigned char | - | TAB_BREMSVORKONDITIONIERUNG_FCM_PPP | - | - | - | - | - | Werte für eine Anforderung des Generators, PreRun und Luftspielreduktion der Bremse für TR_PREP_FCM. |
| SYMBOL_FCM | 0-n | high | unsigned char | - | TAB_SYMBOL_FCM_PPP | - | - | - | - | - | Relevante Werte, die für FCM benötigt werden, um eine Anzeige im Kombi zu triggern (WARN_FCM). |
| INTEGRITY_FCM | 0-n | high | unsigned char | - | TAB_INTEGRITY_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält die möglichen Werte für INY_BRRQ_FCM. |
| BREMSUNG_FCM | 0-n | high | unsigned char | - | TAB_BREMSUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält mögliche Werte für TAR_DCRN_FCM. |
| DAUER_IN_MS_FCM | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2000.0 | Dauer der Ausgabe in ms. |

### ARG_0X6115_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSVERFUEGBARKEIT_PPP | 0-n | high | unsigned char | - | TAB_FUNKTIONSVERFUEGBARKEIT_FCM_PPP | - | - | - | - | - | Diese Tabelle beinhaltet die möglichen Werte für QU_FN_PPP. |
| WARNUNG_PPP | 0-n | high | unsigned char | - | TAB_WARNUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält die möglichen Werte für WARN_PPP. |
| HBA_PARAMETRIERUNG_PPP | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle beinhaltet die möglichen Werte für RDUC_THRV_BRAS_PPP. |
| BREMSVORKONDITIONIERUNG_PPP | 0-n | high | unsigned char | - | TAB_BREMSVORKONDITIONIERUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle beinhaltet die Werte für eine Anforderung des Generators, PreRun und Luftspielreduktion der Bremse für TR_PREP_PPP. |
| SYMBOL_PPP | 0-n | high | unsigned char | - | TAB_SYMBOL_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält alle relevanten Werte, die für FCM benötigt werden, um eine Anzeige im Kombi zu triggern (WARN_PPP). |
| INTEGRITY_PPP | 0-n | high | unsigned char | - | TAB_INTEGRITY_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält die möglichen Werte für INY_BRRQ_PPP. |
| BREMSUNG_PPP | 0-n | high | unsigned char | - | TAB_BREMSUNG_FCM_PPP | - | - | - | - | - | Diese Tabelle enthält mögliche Werte für TAR_DCRN_PPP. |
| DAUER_IN_MS_PPP | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2000.0 | Wert [0 .. 2000 ms] |

### ARG_0X6116_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CC_MELDUNG_PPP | 0-n | high | unsigned char | - | TAB_CC_MELDUNG_PPP | - | - | - | - | - | Setzt die CCM für PPP. |
| CC_MELDUNG_FCM | 0-n | high | unsigned char | - | TAB_CC_MELDUNG_FCM | - | - | - | - | - | Setzt die CCM für FCM. |

### ARG_0X6119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_RESET_PPP | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Reset |

### ARG_0X611A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_RESET_FCM | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Reset |

### ARG_0XA162_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RADAR_HF_MODUS | + | - | 0-n | high | unsigned char | - | TAB_RADAR_HF_MODUS | - | - | - | - | - | Setzen der Radarabstrahlung HF Modus |

### ARG_0XA371_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FRR_KALIBRIERUNG_MODE | + | - | 0-n | - | unsigned char | - | TAB_FRR_KALIBRIERUNG_MODE | 1.0 | 1.0 | 0.0 | - | - | Art der Kalibrierung (statisch - mit Spiegel; dynamisch - bei Fahrt) |

### ARG_0XDE3C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NACHLAUFZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nachlaufzeit in Sekunden |

### BF_BLINDHEITSHISTORIE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINDHEITSHISTORIE_0 | 0-n | high | unsigned long | 0x00000003 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus des aktuellen Klemmenzyklus |
| STAT_BLINDHEITSHISTORIE_1 | 0-n | high | unsigned long | 0x0000000C | TAB_BLINDHEIT_FRR | - | - | - | Blindheitssstatus vor 1 Klemmenzyklus |
| STAT_BLINDHEITSHISTORIE_2 | 0-n | high | unsigned long | 0x00000030 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 2 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_3 | 0-n | high | unsigned long | 0x000000C0 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 3 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_4 | 0-n | high | unsigned long | 0x00000300 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 4 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_5 | 0-n | high | unsigned long | 0x00000C00 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 5 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_6 | 0-n | high | unsigned long | 0x00003000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 6 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_7 | 0-n | high | unsigned long | 0x0000C000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 7 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_8 | 0-n | high | unsigned long | 0x00030000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 8 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_9 | 0-n | high | unsigned long | 0x000C0000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 9 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_10 | 0-n | high | unsigned long | 0x00300000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 10 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_11 | 0-n | high | unsigned long | 0x00C00000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 11 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_12 | 0-n | high | unsigned long | 0x03000000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 12 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_13 | 0-n | high | unsigned long | 0x0C000000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 13 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_14 | 0-n | high | unsigned long | 0x30000000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 14 Klemmenzyklen |
| STAT_BLINDHEITSHISTORIE_15 | 0-n | high | unsigned long | 0xC0000000 | TAB_BLINDHEIT_FRR | - | - | - | Blindheitsstatus vor 15 Klemmenzyklen |

### BF_DEM_EVENT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST_FAILED | 0/1 | high | unsigned char | 0x01 | - | - | - | - | TEST_FAILED |
| RESERVED_1 | 0/1 | high | unsigned char | 0x0E | - | - | - | - | RESERVED_1 |
| TEST_NOT_COMPLETE_SINCE_LAST_CLEAR | 0/1 | high | unsigned char | 0x10 | - | - | - | - | TEST_NOT_COMPLETE_SINCE_LAST_CLEAR |
| TEST_FAILED_SINCE_LAST_CLEAR | 0/1 | high | unsigned char | 0x20 | - | - | - | - | TEST_FAILED_SINCE_LAST_CLEAR |
| RESERVED_2 | 0/1 | high | unsigned char | 0xC0 | - | - | - | - | RESERVED_2 |

### BF_ETH_IP_CONFIGURATION_ECU_TYPE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BIT_0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Wenn 1, dann besitzt das Steuergerät keinen Switch. |
| BIT_1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Wenn 1, dann besitzt das Steuergerät einen Switch. Dieser ist (auch) mit mindestens einem regulären externen Port verbunden. |
| BIT_2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Wenn 1, dann besitzt das Steuergerät einen Port, der (auch) mit mindestens einem externen Special Function Port (z.B. APIX) verbunden ist. |
| BIT_3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Wenn 1, dann besitzzt das Steuergerät einen Switch, der (auch) intern genutzt wird. |
| BIT_4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Wenn 1, dann hat das Steuergerät mindestesn einen regulären externen Port. |
| BIT_5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Wenn 1, dann besitzt das Steuergerät mindestens einen Special Function Port (z.B. APIX). |
| BIT_6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | reserviert |
| BIT_7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | reserviert |

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

### CABLE_DIAG_STATE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungspaar OK - kein Fehler gefunden |
| 0x01 | Kurzschluss zwischen Leitungspaar |
| 0x02 | Leitungspaar unterbrochen |
| 0x03 | Kurzschluss nach Masse |
| 0x04 | Kurzschluss nach 12V |
| 0x05 | Kabeldiagnose nicht erfolgreich abgeschlossen |
| 0x10 | Diagnose läuft bereits (bei aufeinanderfolgenden Jobaufrufen |
| 0xFF | Diagnose konnte nicht gestartet werden, PHY unterstützt Kabeldiagnose nicht oder Port nicht vorhanden |

### COMMON_EVENT_DATA_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0 | Event_Data_Available |
| 1 | Event_Data_Available_Reduced |
| 2 | Event_Data_Not_Available |
| 3 | Reserved |

### COMMON_EXTENDED_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | Normal Operation Mode |
| 0x10 | Power Up Or Down |
| 0x20 | Sensor Not Calibrated |
| 0x30 | Sensor Blocked |
| 0x40 | Sensor Misaligned |
| 0x50 | Bad Sensor Environmental Condition |
| 0x60 | Reduced Field Of View |
| 0x70 | Input Not Available |
| 0x80 | Internal Reason |
| 0x90 | External Distortion |
| 0xA0 | Beginning Blockage |
| 0xB0 | Selftest |
| 0xFF | Wert ungültig |

### ETH_PHY_TEST_MODE_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | PHY wird in den Testmodus geschaltet |
| 0x01 | PHY kann nicht in den Testmodus geschaltet werden |
| 0x02 | Gewünschter Testmodus für Port/Switch nicht verfügbar |

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
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x022100 | Energiesparmode aktiv | 0 | - |
| 0x022108 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02210A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02210B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02210C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x022123 | Flash Memory Fehler (Sammelfehler) | 0 | - |
| 0x022126 | Hardwarefehler (Sammelfehler) | 0 | - |
| 0x022129 | Softwarefehler (Sammelfehler) | 0 | - |
| 0x02FF21 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x482105 | Steuergerät intern - Watchdog Fehler | 0 | - |
| 0x482109 | Steuergerät intern - Unbekannte HW-Version | 0 | - |
| 0x48210B | Steuergerät intern - Interne Spannungsfehler | 0 | - |
| 0x482130 | Kalibrierung nicht durchgeführt | 0 | - |
| 0x482131 | Funktionsfehler - Sensor - Temporäre Radarstörung durch Einstrahlung/Interferenz | 1 | - |
| 0x482136 | Funktionsfehler - Sensor - Dejustiert | 0 | - |
| 0x482138 | Funktionsfehler - Sensor - Temperatur zu hoch | 1 | - |
| 0x482139 | Funktionsfehler - Sensor - Temperatur zu niedrig | 1 | - |
| 0x48213E | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x48213F | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x482140 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x482141 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x482142 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x482143 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x482144 | Steuergerät intern - Radarfunktion gestört | 0 | - |
| 0x482145 | Radomheizung - Leitungsunterbrechung | 0 | - |
| 0x482146 | Radomheizung - Leitungskurzschluss | 0 | - |
| 0x482148 | Steuergerät intern - Radomheizungsansteuerung defekt | 0 | - |
| 0x482149 | Radomheizung - falsche Hardware verbaut | 0 | - |
| 0x48214A | Funktionsfehler - Sensor - Blindheit | 0 | - |
| 0x482161 | Funktionsfehler Systemgrenze erreicht | 0 | - |
| 0xD14600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xD14602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xD14603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 | - |
| 0xD14BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD16D62 | Botschaftsfehler - (0x1535-0x0001-BMW.INFRASTRUCTURE-EnvironmentalInformation) - Timeout | 1 | - |
| 0xD16D64 | Signalfehler - (0x1535-0x0001-BMW.INFRASTRUCTURE-EnvironmentalInformation) - Ungültig | 1 | - |
| 0xD16D83 | Botschaftsfehler - (0x9531-0x0001-BMW.POWERTRAIN-AcceleratorPedal) - Timeout | 1 | - |
| 0xD16D84 | Botschaftsfehler - (0x9531-0x0001-BMW.POWERTRAIN-AcceleratorPedal) - E2E-Absicherungsfehler | 1 | - |
| 0xD16D85 | Signalfehler - (0x9531-0x0001-BMW.POWERTRAIN-AcceleratorPedal) - Ungültig | 1 | - |
| 0xD16D89 | Botschaftsfehler - (0x3531-0x0001-BMW.DASS-ControlAndStatus) - Timeout | 1 | - |
| 0xD16D8B | Signalfehler - (0x3531-0x0001-BMW.DASS-ControlAndStatus) - Ungültig | 1 | - |
| 0xD16D8C | Botschaftsfehler - (0xD007-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera / 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - Timeout | 1 | - |
| 0xD16D8D | Botschaftsfehler - (0xD007-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera / 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - E2E-Absicherungsfehler | 1 | - |
| 0xD16D8E | Signalfehler - (0xD007-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera / 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - Ungültig | 1 | - |
| 0xD16DEC | Botschaftsfehler - (0x3538-0x0001-BMW.DASS-DriverAssistanceComfortAndSecurity) - Timeout | 1 | - |
| 0xD16DED | Signalfehler - (0x3538-0x0001-BMW.DASS-DriverAssistanceComfortAndSecurity) - Ungültig | 1 | - |
| 0xD16DEE | Botschaftsfehler - (0x3538-0x0001-BMW.DASS-DriverAssistanceComfortAndSecurity) - E2E-Absicherungsfehler | 1 | - |
| 0xD16DFB | Botschaftsfehler - (0x303D-0x0001-BMW.DASS-RadarControl) - Timeout | 1 | - |
| 0xD16DFC | Signalfehler - (0x303D-0x0001-BMW.DASS-RadarControl) - Ungültig | 1 | - |
| 0xD16E01 | Botschaftsfehler - (0x7533-0x0001-BMW.CHASSIS-SpeedAcceleration) - Timeout | 1 | - |
| 0xD16E02 | Signalfehler - (0x7533-0x0001-BMW.CHASSIS-SpeedAcceleration) - Ungültig | 1 | - |
| 0xD16E03 | Botschaftsfehler - (0x7533-0x0001-BMW.CHASSIS-SpeedAcceleration) - E2E-Absicherungsfehler | 1 | - |
| 0xD16E04 | Botschaftsfehler - (0x1531-0x0001-BMW.INFRASTRUCTURE-VehicleCondition) - Timeout | 1 | - |
| 0xD16E05 | Signalfehler - (0x1531-0x0001-BMW.INFRASTRUCTURE-VehicleCondition) - Ungültig | 1 | - |
| 0xD16E06 | Botschaftsfehler - (0x1531-0x0001-BMW.INFRASTRUCTURE-VehicleCondition) - E2E-Absicherungsfehler | 1 | - |
| 0xD16E0A | Botschaftsfehler - (0x7534-0x0001-BMW.CHASSIS-VehicleStabilizationManagement) - Timeout | 1 | - |
| 0xD16E0B | Signalfehler - (0x7534-0x0001-BMW.CHASSIS-VehicleStabilizationManagement) - Ungültig | 1 | - |
| 0xD16E0C | Botschaftsfehler - (0x7534-0x0001-BMW.CHASSIS-VehicleStabilizationManagement) - E2E-Absicherungsfehler | 1 | - |
| 0xD16E41 | Signalfehler - (0xD007-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera / 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - Ungültig - Blindheit | 1 | - |
| 0xD16EBA | Botschaftsfehler - (0x7532-0x0001-0x8001-BMW.CHASSIS-SteeringAngle-EgSteeringAngleDriver) -  E2E-Absicherungsfehler | 1 | - |
| 0xD16EBB | Botschaftsfehler - (0x7532-0x0001-0x8001-BMW.CHASSIS-SteeringAngle-EgSteeringAngleDriver) - Timeout | 1 | - |
| 0xD16EBC | Signalfehler - (0x7532-0x0001-0x8001-BMW.CHASSIS-SteeringAngle-EgSteeringAngleDriver) - Ungültig | 1 | - |
| 0xD16EBD | Botschaftsfehler - (0x7532-0x0001-0x8002-BMW.CHASSIS-SteeringAngle-EgSteeringAngleFrontAxleEffective) - E2E-Absicherungsfehler | 1 | - |
| 0xD16EBE | Botschaftsfehler - (0x7532-0x0001-0x8002-BMW.CHASSIS-SteeringAngle-EgSteeringAngleFrontAxleEffective) - Timeout | 1 | - |
| 0xD16EBF | Signalfehler - (0x7532-0x0001-0x8002-BMW.CHASSIS-SteeringAngle-EgSteeringAngleFrontAxleEffective) - Ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | SCTL_Mode | 0-n | High | 0x07 | WT_SCTL_STATENAME | - | - | - |
| 0x0002 | RCC_CYCLE_STATE | 0-n | High | 0x08 | WT_RCC_CYCLESTATE | - | - | - |
| 0x0003 | KAFAS_DATA_QUALIFIER | 0-n | High | 0x0F | COMMON_EVENT_DATA_QUALIFIER | - | - | - |
| 0x0004 | KAFAS_EXTENDED_QUALIFIER | 0-n | High | 0xF0 | COMMON_EXTENDED_QUALIFIER | - | - | - |
| 0x0005 | Intensity_Rain | 0-n | High | 0x00FF | WT_INTENSITY_RAIN | - | - | - |
| 0x0006 | Speed_Wiper | 0-n | High | 0x0F00 | WT_GESCHWINDIGKEIT_WISCHER | - | - | - |
| 0x0007 | Status_Rain-Sensor | 0-n | High | 0xF000 | WT_RAIN_SENSOR | - | - | - |
| 0x0008 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0009 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x000A | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x000B | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x000C | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x000D | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x000E | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x000F | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0010 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0011 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0012 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0013 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0014 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0015 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0016 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001D | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001E | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001F | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0020 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0021 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0022 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0023 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0024 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0025 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0026 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0027 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0028 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0029 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002A | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x002B | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5000 | DEM_EVENT | HEX | High | signed int | - | - | - | - |
| 0x5001 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5002 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x5003 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5009 | FusedRangeNear | - | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x500A | FusedRangeFar | - | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x500B | FusedConfNear | - | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x500C | FusedConfFar | - | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x500D | TimeCounter | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x500E | WayCounter | - | High | unsigned char | - | 50.0 | 1.0 | 0.0 |
| 0x500F | NoOfObjLosses | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5010 | PWM_PERCENTAGE | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5011 | RADOMHEIZUNG_MODUS | 0-n | High | 0xFF | MODUS_RADOMHEIZUNGSANSTEUERUNG | - | - | - |
| 0x5012 | RADOMHEIZUNG_STROM | mA | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5013 | CBO Quality | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x5014 | CBO Ratio | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x503B | MCEM_EXTENDED_DEM_DATA_1 | HEX | High | unsigned long | - | - | - | - |
| 0x503C | MCEM_EXTENDED_DEM_DATA_2 | HEX | High | unsigned long | - | - | - | - |
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
| 0x02210D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x022122 | Ethernetfehler (Sammelfehler) | 0 | - |
| 0x482111 | Steuergerät intern - Start-up CAT-2-SW Fehler | 0 | - |
| 0x482137 | Funktionsfehler - Sensor - Blindheit | 0 | - |
| 0x48213A | Funktionsfehler - Sensor - beginnende Blindheit | 0 | - |
| 0x482147 | Radomheizung - zu niedrige Leistung | 0 | - |
| 0x48215F | Zeitbasis unsynchronisiert | 1 | - |
| 0x482160 | Steuergerät intern - Start-up CAT-1-SW Fehler | 1 | - |
| 0x600001 | Kalibrierung aktiv | 0 | - |
| 0x600002 | KAFAS Objektliste - NumOfObjects ungleich | 1 | - |
| 0x600003 | KAFAS Objektliste - Timestamp nicht synchronisierbar | 1 | - |
| 0x600004 | Funktionsfehler - iBrake - warningNotAvailable | 1 | - |
| 0x600005 | Funktionsfehler - iBrake - brakingNotAvailable | 1 | - |
| 0x600006 | Funktionsfehler - iBrake - brakeConditioningNotAvailable | 1 | - |
| 0x600007 | Funktionsfehler - iBrake - driverObservingNotAvailable | 1 | - |
| 0x600008 | Funktionsfehler - PreCrash | 1 | - |
| 0x600009 | Systemgrenze erreicht | 1 | - |
| 0x60000A | Funktionsfehler - iBrake Systemfunktion - Betriebsbereitschaft | 1 | - |
| 0x60000B | Funktionsfehler - pFGS Systemfunktion - Betriebsbereitschaft | 1 | - |
| 0x60000C | iBrake-CCM | 1 | - |
| 0x60000D | pFGS-CCM | 1 | - |
| 0x60000E | Funktionsfehler - ETH_DIAGMM_CMD_IGNORED | 0 | - |
| 0x60000F | Funktionsfehler - Sensor - Partial Blockage Near Left | 1 | - |
| 0x600010 | Funktionsfehler - Sensor - Partial Blockage Near Mid | 1 | - |
| 0x600011 | Funktionsfehler - Sensor - Partial Blockage Near Right | 1 | - |
| 0x600012 | Funktionsfehler - Sensor - Partial Blockage Far Left | 1 | - |
| 0x600013 | Funktionsfehler - Sensor - Partial Blockage Far Mid | 1 | - |
| 0x600014 | Funktionsfehler - Sensor - Partial Blockage Far Right | 1 | - |
| 0x600015 | Betriebsbereitschaft - FAA-Degradation | 1 | - |
| 0x600016 | Betriebsbereitschaft - Brakechain Degradation | 1 | - |
| 0x600017 | Betriebsbereitschaft - Warnchain-Degradation | 1 | - |
| 0x600018 | Betriebsbereitschaft - Prefill-Degradation | 1 | - |
| 0x600019 | Betriebsbereitschaft - DBC-Parametrisation-Degradation | 1 | - |
| 0x60001A | Betriebsbereitschaft - iBrake-Degradation | 1 | - |
| 0x60001B | Betriebsbereitschaft - pFGS-Degradation | 1 | - |
| 0x60001C | KAFAS Objektliste - EventDataQualifier not equal | 1 | - |
| 0x60001D | SEND_DELAY_REQUEST_FRAME_ERROR | 0 | - |
| 0x60001E | DEM_SOCKET_FORCED_OPEN | 0 | - |
| 0xD14601 | Ethernet: CRC Fehler | 1 | - |
| 0xD16DF2 | Botschaftsfehler - (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - Timeout | 1 | - |
| 0xD16DF3 | Signalfehler -  (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - Ungültig | 1 | - |
| 0xD16DF4 | Botschaftsfehler - (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - E2E-Absicherungsfehler | 1 | - |
| 0xD16DF5 | Botschaftsfehler - (0x5532-0x0001-BMW.BODY-Light) - Timeout | 1 | - |
| 0xD16DFD | Botschaftsfehler - (0x303D-0x0001-BMW.DASS-RadarControl) - E2E-Absicherungsfehler | 1 | - |
| 0xD16DFE | Botschaftsfehler - (0xD023-0x0001-BMW.ENVIRONMENTALMODEL-RoadNaviProperties) - Timeout | 1 | - |
| 0xD16DFF | Signalfehler - (0xD023-0x0001-BMW.ENVIRONMENTALMODEL-RoadNaviProperties) - Ungültig | 1 | - |
| 0xD16E00 | Botschaftsfehler - (0xD023-0x0001-BMW.ENVIRONMENTALMODEL-RoadNaviProperties) - E2E-Absicherungsfehler | 1 | - |
| 0xD16E07 | Botschaftsfehler - (0x7530-0x0001-BMW.CHASSIS-VehicleModel) - Timeout | 1 | - |
| 0xD16E08 | Signalfehler - (0x7530-0x0001-BMW.CHASSIS-VehicleModel) - Ungültig | 1 | - |
| 0xD16E09 | Botschaftsfehler - (0x7530-0x0001-BMW.CHASSIS-VehicleModel) - E2E-Absicherungsfehler | 1 | - |
| 0xD16E10 | Botschaftsfehler - (0x5531-0x0001-BMW-Body-Wiper) - Timeout | 1 | - |
| 0xD16E11 | Signalfehler - (0x5531-0x0001-BMW-Body-Wiper) - Ungültig | 1 | - |
| 0xD16FD6 | Signalfehler - (0x5532-0x0001-BMW.BODY-Light) - Ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | SCTL_Mode | 0-n | High | 0x07 | WT_SCTL_STATENAME | - | - | - |
| 0x0002 | RCC_CYCLE_STATE | 0-n | High | 0x08 | WT_RCC_CYCLESTATE | - | - | - |
| 0x0003 | KAFAS_DATA_QUALIFIER | 0-n | High | 0x0F | COMMON_EVENT_DATA_QUALIFIER | - | - | - |
| 0x0004 | KAFAS_EXTENDED_QUALIFIER | 0-n | High | 0xF0 | COMMON_EXTENDED_QUALIFIER | - | - | - |
| 0x0005 | Intensity_Rain | 0-n | High | 0x00FF | WT_INTENSITY_RAIN | - | - | - |
| 0x0006 | Speed_Wiper | 0-n | High | 0x0F00 | WT_GESCHWINDIGKEIT_WISCHER | - | - | - |
| 0x0007 | Status_Rain-Sensor | 0-n | High | 0xF000 | WT_RAIN_SENSOR | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5000 | DEM_EVENT | HEX | High | signed int | - | - | - | - |
| 0x5001 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5002 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x5003 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x5006 | Reset_Reason | HEX | High | unsigned int | - | - | - | - |
| 0x5007 | Reset_Adresse | HEX | High | unsigned long | - | - | - | - |
| 0x5008 | MCU_Reset_Reason_Register | HEX | High | unsigned long | - | - | - | - |
| 0x5009 | FusedRangeNear | - | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x500A | FusedRangeFar | - | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x500B | FusedConfNear | - | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x500C | FusedConfFar | - | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x500D | TimeCounter | - | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x500E | WayCounter | - | High | unsigned char | - | 50.0 | 1.0 | 0.0 |
| 0x500F | NoOfObjLosses | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5010 | PWM_PERCENTAGE | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5011 | RADOMHEIZUNG_MODUS | 0-n | High | 0xFF | MODUS_RADOMHEIZUNGSANSTEUERUNG | - | - | - |
| 0x5012 | RADOMHEIZUNG_STROM | mA | High | unsigned char | - | 20.0 | 1.0 | 0.0 |
| 0x5013 | CBO Quality | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x5014 | CBO Ratio | - | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x5015 | BB-Akutwarnung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5016 | BB-Vorwarnung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5017 | BB-Latentwarnung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5018 | BB-Bremsen Stufe 1 | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5019 | BB-Bremsen Stufe 2 | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x501A | SIDE_LOBE_LEVEL_NEAR_LEFT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x501B | SNR_LOSS_NEAR_LEFT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x501C | ERROR_LEVEL_NEAR_LEFT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x501D | SIDE_LOBE_LEVEL_NEAR_MID | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x501E | SNR_LOSS_NEAR_MID | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x501F | ERROR_LEVEL_NEAR_MID | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5020 | BB-Zielbremsung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5021 | BB-Vorbefüllung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5022 | BB-DBC-Umparametrierung | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5023 | BB-Akutwarnung Fußgänger | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5025 | BB-Bremsung Fußgänger | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5027 | BB-Vorbefüllung Fußgänger | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x5029 | BB-DBC-Umparametrierung Fußgänger | 0-n | High | 0xFF | TAB_BETRIEBSBEREITSCHAFT | - | - | - |
| 0x502B | FAA | 0-n | High | 0xFF | TAB_FAA | - | - | - |
| 0x502C | CCM | HEX | High | unsigned int | - | - | - | - |
| 0x502D | GlobalDebugEthDiagMM_State | HEX | High | unsigned long | - | - | - | - |
| 0x502E | SIDE_LOBE_LEVEL_NEAR_RIGHT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x502F | SNR_LOSS_NEAR_RIGHT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5030 | ERROR_LEVEL_NEAR_RIGHT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5031 | SIDE_LOBE_LEVEL_FAR_LEFT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5032 | SNR_LOSS_FAR_LEFT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5033 | ERROR_LEVEL_FAR_LEFT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5034 | SIDE_LOBE_LEVEL_FAR_MID | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5035 | SNR_LOSS_FAR_MID | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5036 | ERROR_LEVEL_FAR_MID | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x5037 | SIDE_LOBE_LEVEL_FAR_RIGHT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5038 | SNR_LOSS_FAR_RIGHT | - | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5039 | ERROR_LEVEL_FAR_RIGHT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x503A | MICRO_SECOND_TIMESTAMP | HEX | High | unsigned long | - | - | - | - |
| 0x503B | MCEM_EXTENDED_DEM_DATA_1 | HEX | High | unsigned long | - | - | - | - |
| 0x503C | MCEM_EXTENDED_DEM_DATA_2 | HEX | High | unsigned long | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### LINK_RESET_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0x0 | Linkverlust aufgrund SG-externen Ereignisses |
| 0x1 | Linkverlust aufgrund SG-interen Ereignisses |

### MODUS_RADOMHEIZUNGSANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Automatik - Heizbetrieb an |
| 1 | Automatik - Heizbetrieb aus |
| 2 | Heizbetrieb manuell |
| 3 | Heizbetrieb auscodiert |
| 255 | ungültig |

### MODUS_RADOMHEIZUNGSANSTEUERUNG2

| WERT | TEXT |
| --- | --- |
| 0 | Automatik - Heizbetrieb an |
| 1 | Automatik - Heizbetrieb aus |
| 2 | Heizbetrieb manuell |
| 3 | Heizbetrieb auscodiert |
| 255 | ungültig |

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

### PORT_LINK_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | kein Link-off festgestellt |
| 1 | Link-off festgestellt |

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

### RES_0X1044_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_STOPPED_FOR_T_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Dauer in Sekunden, in denen der gegebene PHY noch inaktiv ist.  Wertebereich: 0 Sekunden - 255 Sekunden |

### RES_0X1046_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CABLE_DIAG_STATE | + | - | - | 0-n | high | unsigned char | - | CABLE_DIAG_STATE_TAB | - | - | - | Ergebnis der Kabeldiagnose. |

### RES_0X1047_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUI_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 24 Bit OUI des PHYs. Die restlichen Bits sind auf 0 zu setzen. |
| STAT_MMN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die 6 Bit lange MMN des Phys. Die übrigen Bits sollen auf 0 gesetzt werden. |
| STAT_REVISION_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4 Bit lange Revisionsnummer des PHY. Die übrigen Bits sollen mit 0 belegt werden. |

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X1802_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_OF_PORTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der physikalischen Ports.  |
| - | Bit | high | BITFIELD | - | BF_PHY_LINK_STATE_BTFLD | - | - | - | Linkstatus aller Port. |

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

### RES_0X6101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEM_EVENT_0_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_0 |
| STAT_DEM_EVENTSTATUSEX_0_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_0 |
| STAT_DEM_EVENT_1_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_1 |
| STAT_DEM_EVENTSTATUSEX_1_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_1 |
| STAT_DEM_EVENT_2_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_2 |
| STAT_DEM_EVENTSTATUSEX_2_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_2 |
| STAT_DEM_EVENT_3_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_3 |
| STAT_DEM_EVENTSTATUSEX_3_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_3 |
| STAT_DEM_EVENT_4_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_4 |
| STAT_DEM_EVENTSTATUSEX_4_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_4 |
| STAT_DEM_EVENT_5_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_5 |
| STAT_DEM_EVENTSTATUSEX_5_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_5 |
| STAT_DEM_EVENT_6_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_6 |
| STAT_DEM_EVENTSTATUSEX_6_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_6 |
| STAT_DEM_EVENT_7_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_7 |
| STAT_DEM_EVENTSTATUSEX_7_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_7 |
| STAT_DEM_EVENT_8_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_8 |
| STAT_DEM_EVENTSTATUSEX_8_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_8 |
| STAT_DEM_EVENT_9_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_9 |
| STAT_DEM_EVENTSTATUSEX_9_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_9 |
| STAT_DEM_EVENT_10_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_10 |
| STAT_DEM_EVENTSTATUSEX_10_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_10 |
| STAT_DEM_EVENT_11_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_11 |
| STAT_DEM_EVENTSTATUSEX_11_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_11 |
| STAT_DEM_EVENT_12_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_12 |
| STAT_DEM_EVENTSTATUSEX_12_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_12 |
| STAT_DEM_EVENT_13_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_13 |
| STAT_DEM_EVENTSTATUSEX_13_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_13 |
| STAT_DEM_EVENT_14_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_14 |
| STAT_DEM_EVENTSTATUSEX_14_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_14 |
| STAT_DEM_EVENT_15_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_15 |
| STAT_DEM_EVENTSTATUSEX_15_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_15 |
| STAT_DEM_EVENT_16_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_16 |
| STAT_DEM_EVENTSTATUSEX_16_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_16 |
| STAT_DEM_EVENT_17_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_17 |
| STAT_DEM_EVENTSTATUSEX_17_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_17 |
| STAT_DEM_EVENT_18_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_18 |
| STAT_DEM_EVENTSTATUSEX_18_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_18 |
| STAT_DEM_EVENT_19_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_19 |
| STAT_DEM_EVENTSTATUSEX_19_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_19 |
| STAT_DEM_EVENT_20_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_20 |
| STAT_DEM_EVENTSTATUSEX_20_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_20 |
| STAT_DEM_EVENT_21_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_21 |
| STAT_DEM_EVENTSTATUSEX_21_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_21 |
| STAT_DEM_EVENT_22_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_22 |
| STAT_DEM_EVENTSTATUSEX_22_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_22 |
| STAT_DEM_EVENT_23_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_23 |
| STAT_DEM_EVENTSTATUSEX_23_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_23 |
| STAT_DEM_EVENT_24_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_24 |
| STAT_DEM_EVENTSTATUSEX_24_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_24 |
| STAT_DEM_EVENT_25_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_25 |
| STAT_DEM_EVENTSTATUSEX_25_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_25 |
| STAT_DEM_EVENT_26_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_26 |
| STAT_DEM_EVENTSTATUSEX_26_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_26 |
| STAT_DEM_EVENT_27_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_27 |
| STAT_DEM_EVENTSTATUSEX_27_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_27 |
| STAT_DEM_EVENT_28_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_28 |
| STAT_DEM_EVENTSTATUSEX_28_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_28 |
| STAT_DEM_EVENT_29_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_29 |
| STAT_DEM_EVENTSTATUSEX_29_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_29 |
| STAT_DEM_EVENT_30_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_30 |
| STAT_DEM_EVENTSTATUSEX_30_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_30 |
| STAT_DEM_EVENT_31_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_31 |
| STAT_DEM_EVENTSTATUSEX_31_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_31 |
| STAT_DEM_EVENT_32_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_32 |
| STAT_DEM_EVENTSTATUSEX_32_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_32 |
| STAT_DEM_EVENT_33_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_33 |
| STAT_DEM_EVENTSTATUSEX_33_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_33 |
| STAT_DEM_EVENT_34_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_34 |
| STAT_DEM_EVENTSTATUSEX_34_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_34 |
| STAT_DEM_EVENT_35_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_35 |
| STAT_DEM_EVENTSTATUSEX_35_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_35 |
| STAT_DEM_EVENT_36_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_36 |
| STAT_DEM_EVENTSTATUSEX_36_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_36 |
| STAT_DEM_EVENT_37_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_37 |
| STAT_DEM_EVENTSTATUSEX_37_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_37 |
| STAT_DEM_EVENT_38_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_38 |
| STAT_DEM_EVENTSTATUSEX_38_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_38 |
| STAT_DEM_EVENT_39_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_39 |
| STAT_DEM_EVENTSTATUSEX_39_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_39 |
| STAT_DEM_EVENT_40_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_40 |
| STAT_DEM_EVENTSTATUSEX_40_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_40 |
| STAT_DEM_EVENT_41_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_41 |
| STAT_DEM_EVENTSTATUSEX_41_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_41 |
| STAT_DEM_EVENT_42_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_42 |
| STAT_DEM_EVENTSTATUSEX_42_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_42 |
| STAT_DEM_EVENT_43_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_43 |
| STAT_DEM_EVENTSTATUSEX_43_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_43 |
| STAT_DEM_EVENT_44_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_44 |
| STAT_DEM_EVENTSTATUSEX_44_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_44 |
| STAT_DEM_EVENT_45_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_45 |
| STAT_DEM_EVENTSTATUSEX_45_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_45 |
| STAT_DEM_EVENT_46_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_46 |
| STAT_DEM_EVENTSTATUSEX_46_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_46 |
| STAT_DEM_EVENT_47_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_47 |
| STAT_DEM_EVENTSTATUSEX_47_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_47 |
| STAT_DEM_EVENT_48_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_48 |
| STAT_DEM_EVENTSTATUSEX_48_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_48 |
| STAT_DEM_EVENT_49_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EVENT_49 |
| STAT_DEM_EVENTSTATUSEX_49_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM_EVENTSTATUSEX_49 |

### RES_0X6103_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEE_BLOCK_ERASES_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of FEE Block erases |
| STAT_OPERATION_MINUTES_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of operation minutes |
| STAT_STARTUP_CYCLES_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of startup cycles |

### RES_0X6104_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NO_EOL_ALIGNMENT_STARTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of EOL alignment started |
| STAT_NO_EOL_ALIGNMENT_SUCCESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of EOL alignment started and success |
| STAT_NO_SERVICE_ALIGNMENT_STARTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of service alignment started |
| STAT_NO_SERVICE_ALIGNMENT_SUCCESS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Number of service alignment started and success |

### RES_0X6106_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_PFADKOMPENSATION_NAH | 0-n | high | unsigned char | - | STATUS_PFADKOMPENSATION | - | - | - | Status der Pfadkompensation Nahbereich |
| STAT_STATUS_PFADKOMPENSATION_FERN | 0-n | high | unsigned char | - | STATUS_PFADKOMPENSATION | - | - | - | Status der Pfadkompensation Fernbereich |

### RES_0X6108_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PFADKOMPENSATION_WERK_NAH_DATA | DATA | high | data[24] | - | - | 1.0 | 1.0 | 0.0 | Werte Pfadkompensation Nahbereich: 12 komplexe Werte, jeweils SINT8 |
| STAT_PFADKOMPENSATION_WERK_FERN_DATA | DATA | high | data[24] | - | - | 1.0 | 1.0 | 0.0 | Werte Pfadkompensation Fernbereich: 12 komplexe Werte, jeweils SINT8 |

### RES_0X6109_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PFADKOMPENSATION_AKTUELL_NAH_DATA | DATA | high | data[24] | - | - | 1.0 | 1.0 | 0.0 | Werte Pfadkompensation Nahbereich: 12 komplexe Werte, jeweils SINT8 |
| STAT_PFADKOMPENSATION_AKTUELL_FERN_DATA | DATA | high | data[24] | - | - | 1.0 | 1.0 | 0.0 | Werte Pfadkompensation Fernbereich: 12 komplexe Werte, jeweils SINT8 |

### RES_0X610A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAFE_SECTION1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Teil 1 SafeSection, 200 Byte |
| STAT_SAFE_SECTION2_DATA | DATA | high | data[120] | - | - | 1.0 | 1.0 | 0.0 | Teil2 Safe Scetion, 120 Byte |

### RES_0X610B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_PERCENTAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Actual Value PWM percentage |
| STAT_MODUS | 0-n | high | unsigned char | - | MODUS_RADOMHEIZUNGSANSTEUERUNG2 | - | - | - | Aktueller Modus |
| STAT_RADOMHEIZUNG_STROM_WERT | mA | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | Strom Radomheizung |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur |
| STAT_BETRIEBSSPANNUNG_WERT | V | high | unsigned char | - | - | 8.0 | 100.0 | 0.0 | aktuelle Betriebsspannung |
| STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | V_VEH_COG |
| STAT_GESCHWINDIGKEIT_WISCHER | 0-n | high | unsigned char | - | WT_GESCHWINDIGKEIT_WISCHER2 | - | - | - | Geschwindigkeit Wischer |

### RES_0X610D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEM_EVENT_0_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_0 |
| STAT_DEM_EVENTSTATUSEX_0_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_0 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_0_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_0 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_0_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_0 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_0_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_0 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_0_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_0 |
| STAT_DEM_EVENT_1_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_1 |
| STAT_DEM_EVENTSTATUSEX_1_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_1 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_1_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_1 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_1_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_1 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_1_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_1 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_1_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_1 |
| STAT_DEM_EVENT_2_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_2 |
| STAT_DEM_EVENTSTATUSEX_2_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_2 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_2_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_2 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_2_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_2 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_2_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_2 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_2_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_2 |
| STAT_DEM_EVENT_3_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_3 |
| STAT_DEM_EVENTSTATUSEX_3_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_3 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_3_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_3 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_3_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_3 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_3_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_3 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_3_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_3 |
| STAT_DEM_EVENT_4_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_4 |
| STAT_DEM_EVENTSTATUSEX_4_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_4 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_4_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_4 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_4_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_4 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_4_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_4 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_4_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_4 |
| STAT_DEM_EVENT_5_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_5 |
| STAT_DEM_EVENTSTATUSEX_5_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_5 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_5_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_5 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_5_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_5 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_5_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_5 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_5_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_5 |
| STAT_DEM_EVENT_6_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_6 |
| STAT_DEM_EVENTSTATUSEX_6_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_6 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_6_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_6 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_6_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_6 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_6_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_6 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_6_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_6 |
| STAT_DEM_EVENT_7_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_7 |
| STAT_DEM_EVENTSTATUSEX_7_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_7 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_7_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_7 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_7_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_7 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_7_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_7 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_7_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_7 |
| STAT_DEM_EVENT_8_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_8 |
| STAT_DEM_EVENTSTATUSEX_8_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_8 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_8_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_8 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_8_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_8 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_8_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_8 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_8_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_8 |
| STAT_DEM_EVENT_9_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_9 |
| STAT_DEM_EVENTSTATUSEX_9_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_9 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_9_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_9 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_9_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_9 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_9_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_9 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_9_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_9 |
| STAT_DEM_EVENT_10_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_10 |
| STAT_DEM_EVENTSTATUSEX_10_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_10 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_10_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_10 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_10_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_10 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_10_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_10 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_10_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_10 |
| STAT_DEM_EVENT_11_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_11 |
| STAT_DEM_EVENTSTATUSEX_11_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_11 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_11_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_11 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_11_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_11 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_11_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_11 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_11_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_11 |
| STAT_DEM_EVENT_12_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_12 |
| STAT_DEM_EVENTSTATUSEX_12_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_12 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_12_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_12 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_12_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_12 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_12_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_12 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_12_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_12 |
| STAT_DEM_EVENT_13_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_13 |
| STAT_DEM_EVENTSTATUSEX_13_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_13 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_13_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_13 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_13_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_13 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_13_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_13 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_13_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_13 |
| STAT_DEM_EVENT_14_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_14 |
| STAT_DEM_EVENTSTATUSEX_14_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_14 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_14_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_14 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_14_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_14 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_14_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_14 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_14_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_14 |
| STAT_DEM_EVENT_15_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_15 |
| STAT_DEM_EVENTSTATUSEX_15_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_15 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_15_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_15 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_15_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_15 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_15_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_15 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_15_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_15 |
| STAT_DEM_EVENT_16_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_16 |
| STAT_DEM_EVENTSTATUSEX_16_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_16 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_16_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_16 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_16_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_16 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_16_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_16 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_16_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_16 |
| STAT_DEM_EVENT_17_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_17 |
| STAT_DEM_EVENTSTATUSEX_17_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_17 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_17_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_17 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_17_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_17 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_17_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_17 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_17_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_17 |
| STAT_DEM_EVENT_18_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_18 |
| STAT_DEM_EVENTSTATUSEX_18_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_18 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_18_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_18 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_18_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_18 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_18_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_18 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_18_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_18 |
| STAT_DEM_EVENT_19_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_19 |
| STAT_DEM_EVENTSTATUSEX_19_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_19 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_19_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_19 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_19_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_19 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_19_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_19 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_19_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_19 |
| STAT_DEM_EVENT_20_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_20 |
| STAT_DEM_EVENTSTATUSEX_20_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_20 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_20_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_20 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_20_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_20 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_20_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_20 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_20_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_20 |
| STAT_DEM_EVENT_21_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_21 |
| STAT_DEM_EVENTSTATUSEX_21_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_21 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_21_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_21 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_21_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_21 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_21_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_21 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_21_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_21 |
| STAT_DEM_EVENT_22_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_22 |
| STAT_DEM_EVENTSTATUSEX_22_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_22 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_22_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_22 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_22_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_22 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_22_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_22 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_22_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_22 |
| STAT_DEM_EVENT_23_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_23 |
| STAT_DEM_EVENTSTATUSEX_23_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_23 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_23_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_23 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_23_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_23 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_23_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_23 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_23_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_23 |
| STAT_DEM_EVENT_24_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_24 |
| STAT_DEM_EVENTSTATUSEX_24_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_24 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_24_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_24 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_24_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_24 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_24_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_24 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_24_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_24 |
| STAT_DEM_EVENT_25_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_25 |
| STAT_DEM_EVENTSTATUSEX_25_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_25 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_25_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_25 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_25_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_25 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_25_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_25 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_25_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_25 |
| STAT_DEM_EVENT_26_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_26 |
| STAT_DEM_EVENTSTATUSEX_26_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_26 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_26_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_26 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_26_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_26 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_26_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_26 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_26_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_26 |
| STAT_DEM_EVENT_27_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_27 |
| STAT_DEM_EVENTSTATUSEX_27_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_27 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_27_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_27 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_27_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_27 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_27_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_27 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_27_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_27 |
| STAT_DEM_EVENT_28_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_28 |
| STAT_DEM_EVENTSTATUSEX_28_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_28 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_28_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_28 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_28_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_28 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_28_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_28 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_28_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_28 |
| STAT_DEM_EVENT_29_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_29 |
| STAT_DEM_EVENTSTATUSEX_29_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_29 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_29_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_29 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_29_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_29 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_29_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_29 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_29_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_29 |
| STAT_DEM_EVENT_30_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_30 |
| STAT_DEM_EVENTSTATUSEX_30_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_30 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_30_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_30 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_30_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_30 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_30_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_30 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_30_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_30 |
| STAT_DEM_EVENT_31_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_31 |
| STAT_DEM_EVENTSTATUSEX_31_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_31 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_31_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_31 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_31_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_31 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_31_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_31 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_31_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_31 |
| STAT_DEM_EVENT_32_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_32 |
| STAT_DEM_EVENTSTATUSEX_32_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_32 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_32_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_32 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_32_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_32 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_32_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_32 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_32_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_32 |
| STAT_DEM_EVENT_33_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_33 |
| STAT_DEM_EVENTSTATUSEX_33_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_33 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_33_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_33 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_33_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_33 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_33_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_33 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_33_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_33 |
| STAT_DEM_EVENT_34_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_34 |
| STAT_DEM_EVENTSTATUSEX_34_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_34 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_34_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_34 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_34_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_34 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_34_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_34 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_34_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_34 |
| STAT_DEM_EVENT_35_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_35 |
| STAT_DEM_EVENTSTATUSEX_35_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_35 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_35_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_35 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_35_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_35 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_35_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_35 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_35_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_35 |
| STAT_DEM_EVENT_36_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_36 |
| STAT_DEM_EVENTSTATUSEX_36_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_36 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_36_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_36 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_36_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_36 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_36_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_36 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_36_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_36 |
| STAT_DEM_EVENT_37_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_37 |
| STAT_DEM_EVENTSTATUSEX_37_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_37 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_37_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_37 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_37_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_37 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_37_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_37 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_37_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_37 |
| STAT_DEM_EVENT_38_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_38 |
| STAT_DEM_EVENTSTATUSEX_38_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_38 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_38_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_38 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_38_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_38 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_38_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_38 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_38_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_38 |
| STAT_DEM_EVENT_39_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_39 |
| STAT_DEM_EVENTSTATUSEX_39_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_39 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_39_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_39 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_39_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_39 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_39_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_39 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_39_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_39 |
| STAT_DEM_EVENT_40_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_40 |
| STAT_DEM_EVENTSTATUSEX_40_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_40 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_40_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_40 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_40_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_40 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_40_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_40 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_40_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_40 |
| STAT_DEM_EVENT_41_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_41 |
| STAT_DEM_EVENTSTATUSEX_41_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_41 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_41_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_41 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_41_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_41 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_41_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_41 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_41_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_41 |
| STAT_DEM_EVENT_42_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_42 |
| STAT_DEM_EVENTSTATUSEX_42_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_42 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_42_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_42 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_42_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_42 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_42_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_42 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_42_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_42 |
| STAT_DEM_EVENT_43_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_43 |
| STAT_DEM_EVENTSTATUSEX_43_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_43 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_43_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_43 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_43_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_43 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_43_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_43 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_43_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_43 |
| STAT_DEM_EVENT_44_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_44 |
| STAT_DEM_EVENTSTATUSEX_44_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_44 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_44_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_44 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_44_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_44 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_44_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_44 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_44_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_44 |
| STAT_DEM_EVENT_45_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_45 |
| STAT_DEM_EVENTSTATUSEX_45_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_45 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_45_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_45 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_45_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_45 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_45_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_45 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_45_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_45 |
| STAT_DEM_EVENT_46_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_46 |
| STAT_DEM_EVENTSTATUSEX_46_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_46 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_46_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_46 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_46_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_46 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_46_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_46 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_46_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_46 |
| STAT_DEM_EVENT_47_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_47 |
| STAT_DEM_EVENTSTATUSEX_47_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_47 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_47_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_47 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_47_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_47 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_47_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_47 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_47_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_47 |
| STAT_DEM_EVENT_48_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_48 |
| STAT_DEM_EVENTSTATUSEX_48_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_48 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_48_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_48 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_48_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_48 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_48_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_48 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_48_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_48 |
| STAT_DEM_EVENT_49_WERT | HEX | - | unsigned int | - | - | - | - | - | DEM_EVENT_ID_49 |
| STAT_DEM_EVENTSTATUSEX_49_WERT | HEX | - | unsigned char | - | - | - | - | - | DEM_EVENT_StatusEX_49 |
| STAT_DEM_EVENTINACTIVEACTIVECOUNTER_49_WERT | - | - | unsigned int | - | - | - | - | - | DEM_EVENT_InActiveActiveCounter_49 |
| STAT_DEM_EVENTFREQUENCYCOUNTER_49_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_FrequencyCounter_49 |
| STAT_DEM_EVENTOPERATIONCYCLECOUNTER_49_WERT | - | - | unsigned char | - | - | - | - | - | DEM_EVENT_OperationCycleCounter_49 |
| STAT_DEM_EVENTDEBOUNCECOUNTER_49_WERT | - | - | signed int | - | - | - | - | - | DEM_EVENT_DebounceCounter_49 |

### RES_0X6110_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLOBALDEBUGETHDIAGMM_STATE_WERT | HEX | high | unsigned long | - | - | - | - | - | GlobalDebugEthDiagMM_State |
| STAT_ETH_DIAGMM_CALLSTACK_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | ETH_DIAGMM_CALLSTACK |

### RES_0X6111_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAXRUNTIME_CORE0_TASK_ACQUISITIONONCORE0_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_AcquisitionOnCore0 |
| STAT_MAXRUNTIME_CORE0_TASK_RCC_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_Rcc |
| STAT_MAXRUNTIME_CORE0_TASK_NORM_TX_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_NORM_Tx |
| STAT_MAXRUNTIME_CORE0_TASK_RFCOM_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_RfCom |
| STAT_MAXRUNTIME_CORE0_TASK_CALCULATIONONCORE0_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_CalculationOnCore0 |
| STAT_MAXRUNTIME_CORE0_TASK_DIAGCYCLIC_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_DiagCyclic |
| STAT_MAXRUNTIME_CORE0_TASK_MTS_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_Mts |
| STAT_MAXRUNTIME_CORE0_TASK_QM_BACCYCLIC_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_QM_BacCyclic |
| STAT_MAXRUNTIME_CORE0_TASK_BSWCYCLIC_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_BswCyclic |
| STAT_MAXRUNTIME_CORE0_TASK_COM_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_Com |
| STAT_MAXRUNTIME_CORE0_TASK_PROXY_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_Proxy |
| STAT_MAXRUNTIME_CORE0_TASK_DIAG_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_Diag |
| STAT_MAXRUNTIME_CORE0_TASK_QM_BAC_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_QM_Bac |
| STAT_MAXRUNTIME_CORE0_TASK_SENSORHW_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_SensorHw |
| STAT_MAXRUNTIME_CORE0_TASK_VEHICLEALGO_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core0_TASK_VehicleAlgo |
| STAT_MINRUNTIME_CORE0_TASK_IDLE_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MinRuntime_Core0_TASK_Idle |
| STAT_MAXRUNTIME_CORE1_FCT_RSP2NEAR_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_Rsp2Near |
| STAT_MAXRUNTIME_CORE1_FCT_ALNNEAR_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_AlnNear |
| STAT_MAXRUNTIME_CORE1_FCT_RSP2FAR_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_Rsp2Far |
| STAT_MAXRUNTIME_CORE1_FCT_ALNFAR_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_AlnFar |
| STAT_MAXRUNTIME_CORE1_FCT_EM_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_Em |
| STAT_MAXRUNTIME_CORE1_FCT_FRS_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_Frs |
| STAT_MAXRUNTIME_CORE1_FCT_ALNCLUSTER_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_AlnCluster |
| STAT_MAXRUNTIME_CORE1_FCT_ALNINITFIRST_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_AlnInitFirst |
| STAT_MAXRUNTIME_CORE1_FCT_FCTSENCORE1_WERT | µs | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | MaxRuntime_Core1_Fct_FctSenCore1 |

### RES_0X6113_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QU_FN_PPP | 0-n | high | unsigned char | - | TAB_QU_FN_PPP_FCM | - | - | - | QU_FN_PPP |
| STAT_QU_FN_FCM | 0-n | high | unsigned char | - | TAB_QU_FN_PPP_FCM | - | - | - | QU_FN_FCM |

### RES_0X6117_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PPP_DIST_ACV_FCN_WERT | km | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Insgesamt gefahrene Strecke mit aktivierter Funktion seit letztem Rücksetzzeitpunkt |
| STAT_PPP_DIST_DEG_WBK_BRAKE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke in Kilometer mit aktivierter Funktion mit Funktionsstatus verfügbar, aktiv Degradiert mit Degradationsgrund WBK Bremsverfügbarkeit |
| STAT_PPP_DIST_DEG_WBK_WARN_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke in Kilometer mit aktivierter Funktion mit Funktionsstatus Fehler mit Degradationsgrund WBK Warnverfügbarkeit |
| STAT_PPP_DIST_DEG_KAFAS_LONG_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrende Strecke mit aktivierter Funktion und Funktionsstatus Fehler mit  Degradationsgrund Kamera lange blind |
| STAT_PPP_DIST_DEG_KAFAS_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke mit aktivierter Funktion im Funktionsstatus Funktion aktiv mit gesetzten Kamera-Blindheits-Qualifier |
| STAT_PPP_DIST_DEG_KAFAS_FP_RISK_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke mit aktivierter Funktion im Funktionsstatus Funktion aktiv im Status Kamera FP-Risiko |
| STAT_PPP_DIST_DEG_FRR_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke mit Funktionsstatus Fehler mit Degradationsgrund Radarblindheit |
| STAT_PPP_COUNT_FAIL_ABORTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der pFGS Funktionsabschaltungen durch Fehlerreaktionen seit dem letztem Rücksetzzeitpunkt |
| STAT_PPP_LAST_FASTA_RESET_WERT | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Letzter FASTA-Rücksetzzeitpunkt (Systemzeit) |

### RES_0X6118_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FCM_DIST_ACV_FCN_WERT | km | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Insgesamt gefahrene Strecke mit aktivierter Funktion seit letztem Rücksetzzeitpunkt |
| STAT_FCM_DIST_DEG_WBK_BRAKE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke in Kilometer mit aktivierter Funktion mit Funktionsstatus verfügbar, aktiv Degradiert mit Degradationsgrund WBK Bremsverfügbarkeit |
| STAT_FCM_DIST_DEG_WBK_WARN_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke in Kilometer mit aktivierter Funktion mit Funktionsstatus Fehler mit Degradationsgrund WBK Warnverfügbarkeit |
| STAT_FCM_DIST_DEG_KAFAS_LONG_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrende Strecke mit aktivierter Funktion und Funktionsstatus Fehler mit  Degradationsgrund Kamera lange blind |
| STAT_FCM_DIST_DEG_KAFAS_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke mit aktivierter Funktion im Funktionsstatus Funktion aktiv mit gesetzten Kamera-Blindheits-Qualifier |
| STAT_FCM_DIST_DEG_FRR_BLIND_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Strecke mit Funktionsstatus Fehler mit Degradationsgrund Radarblindheit |
| STAT_FCM_COUNT_FAIL_ABORTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der iBrake Funktionsabschaltungen durch Fehlerreaktionen seit dem letztem Rücksetzzeitpunkt |
| STAT_FCM_LAST_FASTA_RESET_WERT | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Letzter FASTA-Rücksetzzeitpunkt (Systemzeit) |

### RES_0XA162_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |
| STAT_RADAR_HF_MODUS | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_RADAR_HF_MODUS | - | - | - | Status Radarabstrahlung HF Modus |

### RES_0XA190_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |

### RES_0XA371_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRR_KALIBRIERUNG_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_FRR_KALIBRIERUNG_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_FRR_KALIBRIERUNG_DETAIL | 1.0 | 1.0 | 0.0 | Fehler Detail |
| STAT_FRR_KALIBRIERUNG_FORTSCHRITT_WERT | - | - | + | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Routinenfortschritt |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |

### RES_0XD3E0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRR_KORREKTURWINKEL_HORIZONTAL_FERNBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwinkel horizontale Richtung Fernbereich |
| STAT_FRR_KORREKTURWINKEL_HORIZONTAL_NAHBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwinkel horizontale Richtung Nahbereich |
| STAT_FRR_KORREKTURWINKEL_VERTIKAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Korrekturwinkel vertikale Richtung |
| STAT_EOL_WINKEL_HORIZONTAL_FERNBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL horizontale Richtung Fernbereich |
| STAT_EOL_WINKEL_HORIZONTAL_NAHBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL horizontale Richtung Nahbereich |
| STAT_EOL_WINKEL_VERTIKAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL vertikale Richtung |
| STAT_EOL_WINKEL_DYNAMISCH_HORIZONTAL_FERNBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL Dynamisch horizontale Richtung Fernbereich |
| STAT_EOL_WINKEL_DYNAMISCH_HORIZONTAL_NAHBEREICH_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL Dynamisch horizontale Richtung Nahbereich |
| STAT_EOL_WINKEL_DYNAMISCH_VERTIKAL_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | EOL-WINKEL Dynamisch vertikale Richtung |

### RES_0XDE3C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NACHLAUFZEIT_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nachlaufzeit in Sekunden |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_PHY_SWITCH_ENGINE_RESET | 0x1044 | - | Wird verwendet, um einen PHY oder Switch/es zurpükzusetzen und optional im Zustand Reset zu halten. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1044_R |
| STEUERN_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | High | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| RADAR_HF_MODUS | 0xA162 | - | Setzen und Ablesen der Radarabstrahlung Modus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA162_R | RES_0xA162_R |
| RADOMHEIZUNG_SELBSTTEST | 0xA190 | - | Selbsttest der Radomheizung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA190_R |
| FRR_KALIBRIERUNG | 0xA371 | - | Starten, Stoppen und Status Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA371_R | RES_0xA371_R |
| STATUS_KALIBRIERWINKEL | 0xD3E0 | - | Auslesen der Korrekturwinkel und der EOL-WINKEL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3E0_D |
| ROLLENMODUS_NACHLAUF | 0xDE3C | - | Nachlaufzeit beim Verlassen des Rollenmodus im Radar Steuergerät | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDE3C_D | RES_0xDE3C_D |
| BLINDHEITSHISTORIE | 0xDE3D | - | Gibt Auskunft über den Blindheitsstatus der letzten 16 Klemmenzyklen | Bit | - | High | BITFIELD | BF_BLINDHEITSHISTORIE | - | - | - | - | 22 | - | - |
| BETRIEBSSPANNUNG | 0xDFCC | STAT_UBAT_WERT | Betriebsspannung Steuergerät | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_STEUERGERAET | 0xDFCD | STAT_TEMP_SG_WERT | TEMPERATUR im STEUERGERAET | °C | - | High | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| SERIENNUMMER_CONTI | 0x6100 | STAT_SERIENNUMMER_CONTI_DATA | Seriennummer Conti (ASCII). | DATA | - | High | data[26] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DEM_EVENT_LIST | 0x6101 | - | Liest die DEM-Event-Liste aus dem SG aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6101_D |
| STEUERN_KALIBRIERWINKEL | 0x6102 | - | Schreiben der EOL-WINKEL Freischaltung durchAPA_DebugAuthentication (SP2018) erforderlich | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6102_D | - |
| FRR_OPERATION | 0x6103 | - | 1. Reads the number of FEE-Block-Erases 2. Count operation minutes 3. Count startup cycles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6103_D |
| FRR_ALIGNMENT_COUNTER | 0x6104 | - | Liest die Alignment-Counter aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6104_D |
| RESET_ALIGNMENT_COUNTER | 0x6105 | - | Reset alignment counter. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6105_D | - |
| STATUS_PFADKOMPENSATION | 0x6106 | - | Gibt den aktuellen Status der Pfadkompensation zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6106_D |
| RESET_PFADKOMPENSATION | 0x6107 | - | Setzt die Pfadkompensation auf die im Conti-Werk vermessenen Werte zurück Freischaltung durch APA_DebugAuthentication (SP2018) erforderlich | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6107_D | - |
| STATUS_WERTE_PFADKOMPENSATION_WERK | 0x6108 | - | Gibt die Werte der Pfadkompensation Conti-Werk zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6108_D |
| STATUS_WERTE_PFADKOMPENSATION_AKTUELL | 0x6109 | - | Gibt die aktuellen Werte der Pfadkompensation zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6109_D |
| STATUS_SAFE_SECTION | 0x610A | - | Auslesen der Safe Section | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x610A_D |
| STATUS_RADOMHEIZUNG | 0x610B | - | Lesen des Status der Radomheizungsansteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x610B_D |
| STEUERN_RADOMHEIZUNG | 0x610C | - | Entwicklerjob zum Ansteuern der Radomheizung  Manuelles Setzen der Heizleistung Freischaltung durch Codierbit (SP2016/2018) und APA-DebugAuthentication (SP2018) erforderlich | - | - | - | - | - | - | - | - | - | 2E | ARG_0x610C_D | - |
| _DEM_EVENT_LIST_EXTENDED | 0x610D | - | Liest die erweiterte DEM-Event-Liste aus dem SG aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x610D_D |
| STATUS_ETH_DIAGMM_CALLSTACK | 0x6110 | - | Read state and call stack of ETH_DiagMM. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6110_D |
| _STATUS_NETTO_TASK_RUNTIME | 0x6111 | - | Reads the Max task run time and the minimum idle time. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6111_D |
| _STEUERN_RESET_NETTO_TASK_RUNTIME | 0x6112 | - | Delete the Max task run time and the minimum idle time. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6112_D | - |
| _STATUS_QUALIFIER_FCM_PPP | 0x6113 | - | Gibt den Wert der Funktionsverfügbarkeit der beiden Funktionen PPP und CCM wieder. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6113_D |
| STEUERN_AUSGABE_FCM | 0x6114 | - | Dieser Job steuert die Subfunktionen von iBrake an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6114_D | - |
| STEUERN_AUSGABE_PPP | 0x6115 | - | Dieser Job steuert die Subfunktionen von pFGS an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6115_D | - |
| STEUERN_AUSGABE_CC_MELDUNGEN_PPP_FCM | 0x6116 | - | Dieser Job muss die CC-Meldungen der Fahrzeugwarnung und Fußgängerwarnung triggern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6116_D | - |
| STATUS_FASTA_DATA_PPP | 0x6117 | - | Dieser Job gibt die PPP FASTA-Daten zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6117_D |
| STATUS_FASTA_DATA_FCM | 0x6118 | - | Dieser Job gibt die FCM FASTA-Daten zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6118_D |
| STEUERN_FASTA_RESET_PPP | 0x6119 | - | Setzt die PPP FASTA-Daten zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6119_D | - |
| STEUERN_FASTA_RESET_FCM | 0x611A | - | Setzt die FCM FASTA-Daten zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0x611A_D | - |

### STATUS_PFADKOMPENSATION

| WERT | TEXT |
| --- | --- |
| 0x00 | niO |
| 0x01 | iO |
| 0xFF | Wert ungültig |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_BETRIEBSBEREITSCHAFT

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar bereit |
| 2 | verfügbar aktiv |
| 3 | Fehler |
| 255 | ungültig |

### TAB_BLINDHEIT_FRR

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Unbekannt |
| 0x00000001 | Sensor blind |
| 0x00000002 | Sensor nicht blind |
| 0x00000003 | Ungültig |
| 0x00000004 | Sensor blind |
| 0x00000008 | Sensor nicht blind |
| 0x0000000C | Ungültig |
| 0x00000010 | Sensor blind |
| 0x00000020 | Sensor nicht blind |
| 0x00000030 | Ungültig |
| 0x00000040 | Sensor blind |
| 0x00000080 | Sensor nicht blind |
| 0x000000C0 | Ungültig |
| 0x00000100 | Sensor blind |
| 0x00000200 | Sensor nicht blind |
| 0x00000300 | Ungültig |
| 0x00000400 | Sensor blind |
| 0x00000800 | Sensor nicht blind |
| 0x00000C00 | Ungültig |
| 0x00001000 | Sensor blind |
| 0x00002000 | Sensor nicht blind |
| 0x00003000 | Ungültig |
| 0x00004000 | Sensor blind |
| 0x00008000 | Sensor nicht blind |
| 0x0000C000 | Ungültig |
| 0x00010000 | Sensor blind |
| 0x00020000 | Sensor nicht blind |
| 0x00030000 | Ungültig |
| 0x00040000 | Sensor blind |
| 0x00080000 | Sensor nicht blind |
| 0x000C0000 | Ungültig |
| 0x00100000 | Sensor blind |
| 0x00200000 | Sensor nicht blind |
| 0x00300000 | Ungültig |
| 0x00400000 | Sensor blind |
| 0x00800000 | Sensor nicht blind |
| 0x00C00000 | Ungültig |
| 0x01000000 | Sensor blind |
| 0x02000000 | Sensor nicht blind |
| 0x03000000 | Ungültig |
| 0x04000000 | Sensor blind |
| 0x08000000 | Sensor nicht blind |
| 0x0C000000 | Ungültig |
| 0x10000000 | Sensor blind |
| 0x20000000 | Sensor nicht blind |
| 0x30000000 | Ungültig |
| 0x40000000 | Sensor blind |
| 0x80000000 | Sensor nicht blind |
| 0xC0000000 | Ungültig |
| 0xFFFFFFFF | Wert ungültig |

### TAB_BREMSUNG_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | keine_Bremsung |
| 0x2F | Bremsung -3 m/ss |
| 0xFD | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0xFE | Funktion_meldet_Fehler |
| 0xFF | Signal_unbefuellt |

### TAB_BREMSVORKONDITIONIERUNG_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine_Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x1 | Keine_Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Luftspielreduktion |
| 0x2 | Keine_Ansteuerung_Generator, Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x3 | Keine_Ansteuerung_Generator, Ansteuerung_PreRun, Luftspielreduktion |
| 0x4 | Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x5 | Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Luftspielreduktion |
| 0x6 | Ansteuerung_Generator, Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x7 | Ansteuerung_Generator, Ansteuerung_PreRun, Luftspielreduktion |
| 0xD | Funktionsschnittstelle_ist_nicht_verfügbar |
| 0xE | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |

### TAB_CC_MELDUNG_FCM

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine CC-Meldung |
| 0x1 | Setze die CC-Meldung für KaFAS-Blindheit FCM (783d) |
| 0x2 | Setze die CC-Meldung für FRR-Blindheit FCM (594d) |
| 0x3 | Setze die CC-Meldung für iBrake ganz oder teilweise ausgefallen FCM (595d) |

### TAB_CC_MELDUNG_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine CC-Meldung |
| 0x1 | Setze die CC-Meldung für KaFAS-Blindheit PPP (851d) |
| 0x2 | Setze die CC-Meldung für FRR-Blindheit PPP (2058d) |
| 0x3 | Setze die CC-Meldung für pFGS ganz oder teilweise ausgefallen PPP (849d) |

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

### TAB_FAA

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Fehler |
| 255 | ungültig |

### TAB_FRR_KALIBRIERUNG_DETAIL

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Leistung zu niedrig |
| 0x02 | Korrekturwinkel horizontal zu hoch |
| 0x03 | Korrekturwinkel vertikal zu hoch |
| 0xFF | Ungültig |

### TAB_FRR_KALIBRIERUNG_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | statisch |
| 0x01 | dynamisch |

### TAB_FUNKTIONSVERFUEGBARKEIT_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x2 | Funktion_Bereit |
| 0x3 | Funktion_Bereit_Degradiert |
| 0xA | Funktion_Aktiv |
| 0xB | Funktion_Aktiv_Degradiert |
| 0xE | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x6 | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |

### TAB_HBA_PARAMETRIERUNG_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | Defaultparametersatz DBC |
| 0x1 | Leicht erhöhte Empfindlichkeit |
| 0x2 | Erhöhte Empfindlichkeit |
| 0x3 | Höchste Empfindlichkeit |
| 0x4 | Empfindlichkeit für Zielbremsung 1 |
| 0x5 | Empfindlichkeit für Zielbremsung 2 |
| 0x6 | Empfindlichkeit für Zielbremsung 3 |
| 0xD | Funktionsschnittstelle_ist_nicht_verfügbar |
| 0xE | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |

### TAB_INTEGRITY_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | ASIL-QM |
| 0x1 | ASIL-B |
| 0x2 | Signal_unbefuellt |

### TAB_QU_FN_PPP_FCM

| WERT | TEXT |
| --- | --- |
| 0x0 | Wert_ungueltig |
| 0x1 | Wert_ungueltig |
| 0x2 | Funktion_Bereit |
| 0x3 | Funktion_Bereit_Degradiert |
| 0x4 | Wert_ungueltig |
| 0x5 | Wert_ungueltig |
| 0x6 | Funktion_meldet_Fehler |
| 0x7 | Wert_ungueltig |
| 0x8 | Wert_ungueltig |
| 0x9 | Wert_ungueltig |
| 0xA | Funktion_Aktiv |
| 0xB | Funktion_Aktiv_Degradiert |
| 0xC | Wert_ungueltig |
| 0xD | Wert_ungueltig |
| 0xE | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_RADAR_HF_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Radarabstrahlung AUS |
| 1 | Radarabstrahlung AN |
| 2 | Radarabstrahlung Automatisch |

### TAB_STATUS_RADAR_HF_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Radarabstrahlung AUS |
| 1 | Radarabstrahlung AN |
| 2 | Radarabstrahlung Automatisch |

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

### TAB_SYMBOL_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine_Warnung |
| 0x1 | Person_mittig_nah |
| 0xB | Fahrzeug |
| 0x3F | Funktion_meldet_Fehler |

### TAB_WARNUNG_FCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine_Warnung |
| 0x1 | Vorwarnung |
| 0x2 | Akutwarnung |
| 0x4 | Signal_unbefuellt |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0008 | 0x0009 | 0x000A | 0x000B |

### TAB_0X5001

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0003 | 0x0004 |

### TAB_0X5002

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0005 | 0x0006 | 0x0007 |

### TAB_0X5003

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0001 | 0x0002 |

### WT_GESCHWINDIGKEIT_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x0000 | Wischer ausschalten |
| 0x0100 | Stufe 1 |
| 0x0200 | Stufe 2 |
| 0x0300 | Stufe 3 |
| 0x0400 | Stufe 4 |
| 0x0500 | Stufe 5 |
| 0x0600 | Stufe 6 |
| 0x0700 | Stufe 7 |
| 0x0800 | Stufe 8 |
| 0x0900 | Stufe 9 |
| 0x0A00 | Stufe 10 |
| 0x0B00 | Stufe 11 |
| 0x0C00 | Stufe 12 |
| 0x0D00 | Stufe 13 |
| 0x0F00 | Stufe 14 |
| 0xFFFF | Wert ungültig |

### WT_GESCHWINDIGKEIT_WISCHER2

| WERT | TEXT |
| --- | --- |
| 0x00 | Wischer ausschalten |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0x04 | Stufe 4 |
| 0x05 | Stufe 5 |
| 0x06 | Stufe 6 |
| 0x07 | Stufe 7 |
| 0x08 | Stufe 8 |
| 0x09 | Stufe 9 |
| 0x0A | Stufe 10 |
| 0x0B | Stufe 11 |
| 0x0C | Stufe 12 |
| 0x0D | Stufe 13 |
| 0x0E | Stufe 14 |
| 0xFF | Wert ungültig |

### WT_INTENSITY_RAIN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0% |
| 0x01 | 0,5% |
| 0x02 | 1% |
| 0x03 | 1,5% |
| 0x04 | 2% |
| 0x05 | 2,5% |
| 0x06 | 3% |
| 0x07 | 3,5% |
| 0x08 | 4% |
| 0x09 | 4,5% |
| 0x0A | 5% |
| 0x0B | 5,5% |
| 0x0C | 6% |
| 0x0D | 6,5% |
| 0x0E | 7% |
| 0x0F | 7,5% |
| 0x10 | 8% |
| 0x11 | 8,5% |
| 0x12 | 9% |
| 0x13 | 9,5% |
| 0x14 | 10% |
| 0x15 | 10,5% |
| 0x16 | 11% |
| 0x17 | 11,5% |
| 0x18 | 12% |
| 0x19 | 12,5% |
| 0x1A | 13% |
| 0x1B | 13,5% |
| 0x1C | 14% |
| 0x1D | 14,5% |
| 0x1E | 15% |
| 0x1F | 15,5% |
| 0x20 | 16% |
| 0x21 | 16,5% |
| 0x22 | 17% |
| 0x23 | 17,5% |
| 0x24 | 18% |
| 0x25 | 18,5% |
| 0x26 | 19% |
| 0x27 | 19,5% |
| 0x28 | 20% |
| 0x29 | 20,5% |
| 0x2A | 21% |
| 0x2B | 21,5% |
| 0x2C | 22% |
| 0x2D | 22,5% |
| 0x2E | 23% |
| 0x2F | 23,5% |
| 0x30 | 24% |
| 0x31 | 24,5% |
| 0x32 | 25% |
| 0x33 | 25,5% |
| 0x34 | 26% |
| 0x35 | 26,5% |
| 0x36 | 27% |
| 0x37 | 27,5% |
| 0x38 | 28% |
| 0x39 | 28,5% |
| 0x3A | 29% |
| 0x3B | 30% |
| 0x3C | 30,5% |
| 0x3D | 31% |
| 0x3E | 31,5% |
| 0x3F | 32% |
| 0x40 | 32,5% |
| 0x41 | 33% |
| 0x42 | 33,5% |
| 0x43 | 34% |
| 0x44 | 34,5% |
| 0x45 | 35% |
| 0x46 | 35,5% |
| 0x47 | 36% |
| 0x48 | 36,5% |
| 0x49 | 37% |
| 0x4A | 37,5% |
| 0x4B | 38% |
| 0x4C | 38,5% |
| 0x4D | 39% |
| 0x4E | 39,5% |
| 0x4F | 40% |
| 0x50 | 40,5% |
| 0x51 | 41% |
| 0x52 | 41,5% |
| 0x53 | 42% |
| 0x54 | 42,5% |
| 0x55 | 43% |
| 0x56 | 43,5% |
| 0x57 | 44% |
| 0x58 | 44,5% |
| 0x59 | 45% |
| 0x5A | 45,5% |
| 0x5B | 46% |
| 0x5C | 46,5% |
| 0x5D | 47% |
| 0x5E | 47,5% |
| 0x5F | 48% |
| 0x60 | 48,5% |
| 0x61 | 49% |
| 0x62 | 49,5% |
| 0x63 | 50% |
| 0x64 | 50,5% |
| 0x65 | 51% |
| 0x66 | 51,5% |
| 0x67 | 52% |
| 0x68 | 52,5% |
| 0x69 | 53% |
| 0x6A | 53,5% |
| 0x6B | 54% |
| 0x6C | 54,5% |
| 0x6D | 55% |
| 0x6E | 55,5% |
| 0x6F | 56% |
| 0x70 | 56,5% |
| 0x71 | 57% |
| 0x72 | 57,5% |
| 0x73 | 58% |
| 0x74 | 58,5% |
| 0x75 | 59% |
| 0x76 | 59,5% |
| 0x77 | 60% |
| 0x78 | 60,5% |
| 0x79 | 61% |
| 0x7A | 61,5% |
| 0x7B | 62% |
| 0x7C | 62,5% |
| 0x7D | 63% |
| 0x7E | 63,5% |
| 0x7F | 64% |
| 0x80 | 64,5% |
| 0x81 | 65% |
| 0x82 | 65,5% |
| 0x83 | 66% |
| 0x84 | 66,5% |
| 0x85 | 67% |
| 0x86 | 67,5% |
| 0x87 | 68% |
| 0x88 | 68,5% |
| 0x89 | 69% |
| 0x8A | 69,5% |
| 0x8B | 70% |
| 0x8C | 70,5% |
| 0x8D | 71% |
| 0x8E | 71,5% |
| 0x8F | 72% |
| 0x90 | 72,5% |
| 0x91 | 73% |
| 0x92 | 73,5% |
| 0x93 | 74% |
| 0x94 | 74,5% |
| 0x95 | 75% |
| 0x96 | 75,5% |
| 0x97 | 76% |
| 0x98 | 76,5% |
| 0x99 | 77% |
| 0x9A | 77,5% |
| 0x9B | 78% |
| 0x9C | 78,5% |
| 0x9D | 79% |
| 0x9E | 79,5% |
| 0x9F | 80% |
| 0xA0 | 80,5% |
| 0xA1 | 81% |
| 0xA2 | 81,5% |
| 0xA3 | 82% |
| 0xA4 | 82,5% |
| 0xA5 | 83% |
| 0xA6 | 83,5% |
| 0xA7 | 84% |
| 0xA8 | 84,5% |
| 0xA9 | 85% |
| 0xAA | 85,5% |
| 0xAB | 86% |
| 0xAC | 86,5% |
| 0xAD | 87% |
| 0xAE | 87,5% |
| 0xAF | 88% |
| 0xB0 | 88,5% |
| 0xB1 | 89% |
| 0xB2 | 89,5% |
| 0xB3 | 90% |
| 0xB4 | 90,5% |
| 0xB5 | 91% |
| 0xB6 | 91,5% |
| 0xB7 | 92% |
| 0xB8 | 92,5% |
| 0xB9 | 93% |
| 0xBA | 93,5% |
| 0xBB | 94% |
| 0xBC | 94,5% |
| 0xBD | 95% |
| 0xBE | 95,5% |
| 0xBF | 96% |
| 0xC0 | 96,5% |
| 0xC1 | 97% |
| 0xC2 | 97,5% |
| 0xC3 | 98% |
| 0xC4 | 98,5% |
| 0xC5 | 99% |
| 0xC6 | 99,5% |
| 0xC7 | 100% |
| 0xFFFF | Wert ungültig |

### WT_RAIN_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x0000 | 0 |
| 0x1000 | 1 |
| 0x2000 | 2 |
| 0x3000 | 3 |
| 0x4000 | 4 |
| 0x5000 | 5 |
| 0x6000 | 6 |
| 0x7000 | 7 |
| 0x8000 | 8 |
| 0x9000 | 9 |
| 0xA000 | 10 |
| 0xB000 | 11 |
| 0xC000 | 12 |
| 0xD000 | 13 |
| 0xE000 | 14 |
| 0xFFFF | Wert ungültig |

### WT_RCC_CYCLESTATE

| WERT | TEXT |
| --- | --- |
| 0 | RCC_NORMAL |
| 1 | RCC_EXTENDED |

### WT_SCTL_STATENAME

| WERT | TEXT |
| --- | --- |
| 0 | SCTL_NOT_YET_RUNNING |
| 1 | SCTL_STARTUP |
| 2 | SCTL_INIT |
| 3 | SCTL_NORMAL_OPERATION |
| 4 | SCTL_EOL_ALIGN |
| 5 | SCTL_SERVICE_ALIGN |
| 6 | reserved1 |
| 7 | reserved2 |
