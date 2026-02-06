# KAFASG11.prg

## General

|  |  |
| --- | --- |
| File | KAFASG11.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 208 |
| Origin | BMW EV-312 Stefan_Weidhaas |
| Revision | 19.000 |
| Author | Continental C_ADAS_CP_E2 Jamil_Hossain |
| ECU Comment | Neuer Job  STATUS_FACTORYMODE   (0x4063) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kamerabasierendes Fahrerassistenssystem |  |  |
| ORIGIN | string | BMW EV-312 Stefan_Weidhaas |  |  |
| REVISION | string | 19.000 |  |  |
| AUTHOR | string | Continental C_ADAS_CP_E2 Jamil_Hossain |  |  |
| COMMENT | string | Neuer Job  STATUS_FACTORYMODE   (0x4063) |  |  |
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

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_FLA_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4019_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | uiVersionnummer |
| ALGOCONFIG_MONO | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |
| ALGOCONFIG_STEREO | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |
| HILMODE | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X4030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNCTION_SELECTION | 0-n | high | unsigned char | - | TAB_FUNCTION_SELECTION | - | - | - | - | - | Selection of the function whos algo qualifier value shall be set |
| ALGO_QUALIFIER_SELECTION | 0-n | high | unsigned int | - | TAB_ALGO_QUALIFIER_VALUE | - | - | - | - | - | Selection of the value of the Algo Qualifier for the selected function |
| DURATION | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 255.0 | Specifies the duration [s] the algo qualifier for the selected function shall be manipulated with the selected qualifier value. Special value: 0x00 == set/manipulate selected algo qualifier until next ignition cycle == default value if nothing is specified when executing the job. |

### ARG_0X4036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG | - | - | - | - | - | Setzen des Ausgangssignals WARN_HDWOBS_FCW (0x3534 0x8003 BMW_DASS_WarningBreakingFunctions)  |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG | - | - | - | - | - | Setzen des Ausgangssignals RDUC_THRV_BRAS_FCW (0x3534 0x8003 BMW_DASS_WarningBreakingFunctions) |
| PREFILL | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals FCW_TAR_RDUC_AICL_THRV_BRAS (0x3534 0x8003 BMW_DASS_WarningBreakingFunctions) |
| PRERUN | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PRN_CAM (0x3534 0x8004 BMW_DASS_WarningBreakingFunctions) |
| GENERATORANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_GEN_CAM (0x3534 0x8004 BMW_DASS_WarningBreakingFunctions) |

### ARG_0X4037_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG | - | - | - | - | - | Setzen des Ausgangssignals WARN_HDWOBS_OBJ (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG | - | - | - | - | - | Setzen des Ausgangssignals RDUC_THRV_BRAS_OBJ (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| PREFILL | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals OBJ_TAR_RDUC_AICL_THRV_BRAS (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| PRERUN | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PRN_CAM (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| GENERATORANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_GEN_CAM (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |

### ARG_0X4038_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG | - | - | - | - | - | Setzen des Ausgangssignals WARN_HDWOBS_FGS (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG | - | - | - | - | - | Setzen des Ausgangssignals RDUC_THRV_BRAS_FGS (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| PREFILL | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals FGS_TAR_RDUC_AICL_THRV_BRAS (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| PRERUN | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_PRN_CAM (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |
| GENERATORANSTEUERUNG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen des Ausgangssignals TR_GEN_CAM (0x3534 0x0001 BMW_DASS_WarningBreakingFunctions) |

### ARG_0X4039_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYP | 0-n | high | unsigned char | - | TAB_TYP_CCM | - | - | - | - | - | Typ der CCM |

### ARG_0X403F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_LBD_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4047_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_LDW_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X404E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _EC_CALIBRATION | 0-n | high | unsigned char | - | _EC_CALIBRATION | - | - | - | - | - | Steuern__EC_CALIBRATION |

### ARG_0X4051_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_OBJ_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4052_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_URSAF_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4053_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_PED_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4055_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_VEH_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4062_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ob der Fertigungsmodus an(=1) oder aus (=0) |

### ARG_0X4065_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WWA_CCM | 0-n | high | unsigned char | - | TAB_WWA_CCM_KOMB_ANZEIGE | - | - | - | - | - | Setzt die WWA CCM   |

### ARG_0X40A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Error number that shall be sent to the navigation (signal ST_ERR_NO_RCVR_NAVI), Range 0-255 |
| SYNC_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Number of the last successful sync that shall be sent to the navigation (signal: ST_COU_NAVGRPH_SYNC) , Range 0-255 |

### ARG_0X40A8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0-n | high | signed char | - | STEUERN_UFM_SWITCH_ACTION | - | - | - | - | - | 0x01 - set input to unavailable 0x02 - use worst case input 0x03 - set output to unavailable |
| PORT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X40A9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0-n | high | signed char | - | STEUERN_UFM_SWITCH_ACTION | - | - | - | - | - | 0x01 - set input to unavailable 0x02 - use worst case input 0x03 - set output to unavailable |
| PORT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X40AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0-n | high | signed char | - | STEUERN_UFM_SWITCH_ACTION | - | - | - | - | - | 0x01 - set input to unavailable 0x02 - use worst case input 0x03 - set output to unavailable |
| PORT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X40AC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0-n | high | signed char | - | STEUERN_UFM_SWITCH_ACTION | - | - | - | - | - | 0x01 - set input to unavailable 0x02 - use worst case input 0x03 - set output to unavailable |
| PORT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X40AF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - InputFault, 2 - LogicFault |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 1 according to UFM DTC Specification |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 2 according to UFM DTC Specification |

### ARG_0X40B0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - InputFault, 2 - LogicFault |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 1 according to UFM DTC Specification |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 2 according to UFM DTC Specification |

### ARG_0X40B2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - InputFault, 2 - LogicFault |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 1 according to UFM DTC Specification |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 2 according to UFM DTC Specification |

### ARG_0X40B3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - InputFault, 2 - LogicFault |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 1 according to UFM DTC Specification |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 2 according to UFM DTC Specification |

### ARG_0X40B6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTION | 0-n | high | signed char | - | STEUERN_UFM_SWITCH_ACTION | - | - | - | - | - | 0x01 - set input to unavailable 0x02 - use worst case input 0x03 - set output to unavailable |
| PORT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0X40B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - InputFault, 2 - LogicFault |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | internal ID according to UFM DTC Specification |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 1 according to UFM DTC Specification |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | dump 2 according to UFM DTC Specification |

### ARG_0X40B8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACKS_INFO | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit0 and bit1 number of tracks (bit order 7...0), bit3 is Night bit (0 = not night, 1 = night) |
| TRACK0_MAIN_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Main class id for track 0 |
| TRACK0_SUPP_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Supplemental class id for track 0 |
| TRACK0_ATTRIBUTES | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit 0 & bit 1 are the position of the track (2 is passenger side, 1 is driver side & 0 is above). Bits 2 to 7 are characteristics of the track. |
| TRACK1_MAIN_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Main class id for track 1 |
| TRACK1_SUPP_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Supplemental class id for track 1 |
| TRACK1_ATTRIBUTES | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit 0 & bit 1 are the position of the track (2 is passenger side, 1 is driver side & 0 is above). Bits 2 to 7 are characteristics of the track. |
| TRACK2_MAIN_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Main class id for track 2 |
| TRACK2_SUPP_CLASS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Supplemental class id for track 2 |
| TRACK2_ATTRIBUTES | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit 0 & bit 1 are the position of the track (2 is passenger side, 1 is driver side & 0 is above). Bits 2 to 7 are characteristics of the track. |

### ARG_0X4100_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERTETABELLE_WARNTYP | 0-n | high | unsigned char | - | WARNARTEN | - | - | - | - | - | Werttabelle für Art der Warnung |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0X4101_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERTETABELLE_WARNTYP | 0-n | high | unsigned char | - | WARNARTEN | - | - | - | - | - | Werttabelle für Art der Warnung |
| LUFTSPIELREDUKTION | 0-n | high | unsigned char | - | LUFTSPIELREDUKTION | - | - | - | - | - | Art der Luftspielreduktion |
| EMPFINDLICHKEIT | 0-n | high | unsigned char | - | EMPFINDLICHKEIT | - | - | - | - | - | Empfindlichkeit des HBA |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0X4102_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSVERFUEGBARKEIT | 0-n | high | unsigned char | - | FUNKTIONSVERFUEGBARKEIT | - | - | - | - | - | Gibt in welchem Umfang die Funktion zur Verfügung steht |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0X4103_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LUFTSPIELREDUKTION | 0-n | high | unsigned char | - | LUFTSPIELREDUKTION | - | - | - | - | - | Art der Luftspielreduktion |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Luftspielreduktion  |

### ARG_0X4104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMPFINDLICHKEIT | 0-n | high | unsigned char | - | EMPFINDLICHKEIT | - | - | - | - | - | Empfindlichkeit der Funktion |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0X4105_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESYNC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | fordert eine RESYNC der HU an  0=off; 1=on |

### ARG_0X4106_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAM1 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ASCII -Code a-z;A-Z |
| PARAM2 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ASCII -Code a-z;A-Z |

### ARG_0X4107_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAM1 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ASCII -Code a-z;A-Z |
| PARAM2 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ASCII -Code a-z;A-Z |
| LAENDERCODE_STUFE | 0-n | high | unsigned char | - | STUFEN | - | - | - | - | - | Wert  |

### ARG_0X4108_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVENT_DATA | 0-n | high | unsigned char | - | EVENT_DATA | - | - | - | - | - | Event data |
| OPERATIONMODE | 0-n | high | unsigned char | - | OPERATIONMODE | - | - | - | - | - | Operation Mode |

### ARG_0X4109_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATE_FR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | activates Fault reaction 0=off; 1=on |

### ARG_0X4110_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_VFW_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0X4111_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMBI_EVENT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | zeigt das dominante Bildverarbeitungsevent (worauf potentiell gewarnt werden würde) im Kombi an. 0=off; 1=on |

### ARG_0X4112_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PREFILL_MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | (de)aktiviert die Möglichkeit der Funktion einen prefill auszulösen. 0=off; 1=on |

### ARG_0X4113_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HBA_MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | (de)aktiviert die Möglichkeit der Funktion eine HBA Schwellwertanpassung vorzunehmen. 0=off; 1=on |

### ARG_0X4114_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNCTION_ON | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - |  untere  Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion  |
| FUNCTION_OFF | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | setzt obere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion  |

### ARG_0X4115_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EHR_MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | deaktiviert den EHR. Die Funktion verhält sich bei Deaktivierung wie offroad, der Ländercode soll jedoch weiterhin verwendet und ausgewertet werden.  0=off; 1=on |

### ARG_0XA37C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KAFAS_KOMBI_ANZEIGE | - | - | - | - | - | AKTION siehe Tabelle TAB_KAFAS_KOMBI_ANZEIGE |

### ARG_0XD399_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerdauer in Sekunden (1-25 Sek, 0=AUS) |
| MUSTER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 10.0 | Vibrationsmuster:  0 = keine Vibrationsausgabe  10 = Vibrationsausgabe |
| INTENSITAET | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 3.0 | 3.0 | Vibrationsstaerke:  3 = Stufe 3 |
| RICHTUNG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | Warnrichtung:  0 = keine Richtung  1 = Links  2 = Rechts  3 = Ungueltig |

### ARG_0XD3A6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEMO_MODE_ACTIVATION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = Demo-Mode einschalten,  0 = Demo-Mode ausschalten |

### ARG_0XD3A9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTUELLES_SEGMENT_ZEICHEN | 0-n | - | unsigned char | - | TAB_ART_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argumente siehe TAB_ART_ZEICHEN |
| AKTUELLES_SEGMENT_GESCHWINDIGKEIT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebungszeichen alles, 5 bis 150 in 5-er Schritten. |
| KOMMENDES_SEGMENT_ZEICHEN | 0-n | - | unsigned char | - | TAB_ART_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Zeichen angezeigt werden soll: Argument siehe TAB_ART_ZEICHEN |
| KOMMENDES_SEGMENT_GESCHWINDIGKEIT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| ANZEIGE_UEBERHOLVERBOTSZEICHEN | 0-n | - | unsigned char | - | TAB_ART_UEBERHOL_ZEICHEN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Überholverbotszeichen angezeigt werden soll: Argumente siehe TAB_ART_UEBERHOL_ZEICHEN |
| LAENDERKODIERUNG_VERKEHRSZEICHEN | 0-n | - | unsigned char | - | TAB_ART_LAENDERKODIERUNG | 1.0 | 1.0 | 0.0 | - | - | Angabe der Länderkodierung der Verkehrszeichen, Argumente siehe TAB_ART_LAENDERKODIERUNG |
| ANZEIGE_TEXT_MELDUNG | 0-n | - | unsigned char | - | TAB_ART_TEXT_MELDUNG | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Textmeldung angezeigt werden soll: Argumente siehe TAB_ART_MELDUNG |
| GESCHWINDIGKEIT_EINHEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuert in welcher Einheit die Anzeige im Kombi erfolgt (kmh oder mph). 0 ist km/h und 1 ist mph. |

### ARG_0XD3AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| METHODE | 0-n | - | unsigned char | - | TAB_METHODE_SLI | 1.0 | 1.0 | 0.0 | - | - | Argumente siehe TAB_METHODE_SLI |

### ARG_0XD3AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROL_MAINBEAM_FLA | 0-n | - | unsigned char | - | TAB_STFLA_CONTROL | - | - | - | - | - | Schaltempfehlung für FLA:  0 = Keine Empfehlung 1 = AUS 2 = EIN 3 = Zurück zum Normalbetrieb |
| GFA_OBJECT_RANGE | m | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszugebende Entfernung zum Objekt |
| GFA_RIGHT_BOUNDARY | ° | - | unsigned char | - | - | 10.0 | 1.0 | 150.0 | -15.0 | 10.4 | Auszugebende rechte Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LEFT_BOUNDARY | ° | - | unsigned char | - | - | 10.0 | 1.0 | 104.0 | -10.4 | 15.0 | Auszugebende linke Grenze in 0,1 Grad-Schritten des blendfreien Bereiches |
| GFA_LOWER_BOUNDARY | ° | - | unsigned char | - | - | 20.0 | 1.0 | 100.0 | -5.0 | 5.0 | Auszugebende untere Grenze in 0,05 Schritten des blendfreien Bereichs |

### ARG_0XD3BD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01 = Reset wird durchgeführt |

### ARG_0XD3CD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung KAFAS-Scheibenheizung: 0 = aus 1 = ein |
| ZEIT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in Sekunden |

### ARG_0XF001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PATTERN_POSITION_X_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Target Pos in X |
| STAT_PATTERN_POSITION_Y_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Target Pos in Y |
| STAT_PATTERN_POSITION_Z_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Target Pos in Z |
| STAT_CAM_R_POSITION_X_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Right  - Camera Pos in X |
| STAT_CAM_R_POSITION_Y_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Right  - Camera Pos in Y |
| STAT_CAM_R_POSITION_Z_WERT_1 | + | - | mm | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Right  - Camera Pos in Z |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTRY_CODE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Country Code that should be used for the country code simulation. Each Byte represents an ASCII letter (for example 44h 45h = DE) |

### ARG_0XF005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVENTID | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | DEM_EventID |

### ARG_0XF006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CAMERA_EXPOSURE | + | - | HEX | high | signed int | - | - | - | - | - | - | - |  0x0000 - Schwarz 0xFFFF - Weiss  |
| _CAMERA_SOURCE | + | - | HEX | high | signed char | - | - | - | - | - | - | - | 0x01 = rechts 0x02 = links 0x03 = beides |

### ARG_0XF009_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IOB_COMMAND_DATA | + | - | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | - | - | Aquire image |

### ARG_0XF00C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _CPAR_TLR_PARAMETERS_T_E_BRIGHTNESSMODE | + | - | 0-n | high | unsigned char | - | _CPAR_TLR_PARAMETERS_T_E_BRIGHTNESSMODE | - | - | - | - | - | _CPAR_TLR_Parameters_t_e_BrightnessMode |

### ARG_0XF00D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CPAR_TLR_PARAMETERS_T_U_FEATUREMASTER | + | - | 0-n | high | unsigned char | - | CPAR_TLR_PARAMETERS_T_U_FEATUREMASTER | - | - | - | - | - | CPAR_TLR_Parameters_t_u_FeatureMaster |

### ARG_0XF00F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _COLOR_CHANNEL | + | - | 0-n | high | unsigned char | - | TAB_STAT_COLOR_CHANNEL_SELECTION | - | - | - | - | - | Farbkanal auswählen |
| STAT_START_PIXEL_X_WERT_1 | + | - | Pixel | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | X Koordinate des start Pixel |
| STAT_START_PIXEL_Y_WERT_1 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Y Koordinate des start Pixel |
| STAT_WIDTH_WERT_1 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Breite des Bildes |
| STAT_HEIGHT_WERT_1 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Höhe des Bildes |

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

### BLOCKAGE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | - |
| 0x0001 | - |
| 0x0010 | - |
| 0x0011 | - |
| 0x0100 | - |
| 0x0101 | - |
| 0x0110 | - |

### BRIGTHNESS_CONDITION

| WERT | TEXT |
| --- | --- |
| 0x0000 | - |
| 0x0001 | - |
| 0x0010 | - |
| 0x0100 | - |

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

### CPAR_TLR_PARAMETERS_T_U_FEATUREMASTER

| WERT | TEXT |
| --- | --- |
| 0x01 | TLR_FEATURE_CONFIG_NONE |
| 0x02 | TLR_FEATURE_CONFIG_SEGMENTATION |
| 0x04 | TLR_FEATURE_CONFIG_CLASSIFICATION |
| 0x08 | TLR_FEATURE_CONFIG_TRACKING |

### EMPFINDLICHKEIT

| WERT | TEXT |
| --- | --- |
| 0x0 | Defaultparametersatz |
| 0x1 | leicht erhöhte Empfindlichkeit |
| 0x2 | erhöhte Empfindlichkeit |
| 0x3 | höchste Empfindlichkeit |
| 0xF | Signal ungültig |

### ERGEBNIS_SERVICE_ACTION_CODE

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Prüfen der Kamerabefestigung (Monokalibrierwerte außerhalb Grenzen) |
| 2 | Prüfen der Kamerabefestigung / Windschutzscheibe (Monokalibrierung fehlgeschalgen) |
| 3 | Prüfen der Windschutzscheibe bezüglich Steinschlag oder Verdeckung, wenn Windschutzscheibe OK dann ECU tauschen. (Stereokalibrierung fehlgeschalgen) |
| 4 | Prüfen aller anderen DTC's. Flashen und Kodieren der ECU. (general algo input error)  |
| 0xFF | Wert ungültig |

### ERGEBNIS_UWB_MAC_SAC_BLOCKAGE_DETECTED

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | Kalibrierdistanz überschritten und Blockage war present.  |

### ETH_LOOPBACK_MODE_TAB

| WERT | TEXT |
| --- | --- |
| 1 | internal Loopback-Mode |
| 2 | external Loopback-Mode |

### ETH_PHY_LOOPBACK_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test erfolgreich durchgelaufen und TX- und RX-Zähler wurden wie erwartet inkrementiert |
| 0x01 | Test konnte nicht gestartet werden, da nach Aktivierung des Loopback-modes kein Link aufgebaut werden konnte |
| 0x02 | Test nicht erfolgreich, TX- und RX-Zähler wurden durch Versendung des Testframes nicht inkrementiert |
| 0xFF | Test läuft bereits |

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

### EVENT_DATA

| WERT | TEXT |
| --- | --- |
| 0x0 | Event data available |
| 0x1 | Event data available reduced |
| 0x2 | Event data not available |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x025D00 | Energiesparmode aktiv | 0 |
| 0x025D03 | Externe SWT-Prüfbedingung nicht erfüllt | 1 |
| 0x025D04 | Interne SWT-Prüfung fehlgeschlagen | 0 |
| 0x025D08 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x025D09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x025D0A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x025D0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x025D0C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x025D0D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x025D22 | Ethernetfehler (Sammelfehler) | 0 |
| 0x025D23 | Flash Memory Fehler (Sammelfehler) | 0 |
| 0x025D26 | Hardwarefehler (Sammelfehler) | 0 |
| 0x025D29 | Softwarefehler (Sammelfehler) | 0 |
| 0x02FF5D | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x800A00 | Interne Kommunikation gestört | 0 |
| 0x800A01 | Kamera Sichtfeld gestört durch Wetterbedingungen | 1 |
| 0x800A02 | Interner Steuergerätefehler: Spannungsmessung ausserhalb Bereich | 0 |
| 0x800A03 | Static Input Data error | 0 |
| 0x800A04 | Fertigungsmodus aktiv! Alle KaFAS-Funktionen deaktiviert! | 0 |
| 0x800A20 | Sensitivität verstellt | 1 |
| 0x800A22 | Interner Steuergerätefehler | 0 |
| 0x800AB8 | Überspannung erkannt | 1 |
| 0x800AB9 | Unterspannung erkannt | 1 |
| 0x800ABB | LVDS Kommunikationsfehler Kamera - Steuergerät | 0 |
| 0x800ABC | Fehler im Bildverarbeitungspfad | 0 |
| 0x800ABD | Bildverarbeitungsfehler | 0 |
| 0x800ABE | KAFAS-Kamera: Blindheit | 1 |
| 0x800AC0 | KAFAS-Kamera: Abschaltung wegen Übertemperatur | 0 |
| 0x800AC1 | KAFAS-Kamera: Abschaltung Golddust wegen Übertemperatur | 1 |
| 0x800AC4 | Kamerakalibrierung fehlgeschlagen | 0 |
| 0x800AC5 | Scheibenheizung KAFAS: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x800AC6 | Scheibenheizung KAFAS: Interner Fehler | 0 |
| 0x800AC7 | Scheibenheizung KAFAS: Kurzschluss nach Minus | 0 |
| 0xE04602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xE04603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xE04606 | KAFAS-Ethernet: physikalischer Fehler (link off) | 1 |
| 0xE04BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE04C00 | USS-CAN Control Module Bus OFF | 0 |
| 0xE05400 | Botschaftsfehler - 0x7533 - 0x0001 - BMW_CHASSIS_SpeedAcceleration - Timeout | 1 |
| 0xE05401 | Kafas VDY kritischer Fehler | 1 |
| 0xE05402 | Signalfehler - 0x7533 - 0x0001 - BMW_CHASSIS_SpeedAcceleration - Signal ungültig | 1 |
| 0xE05404 | Signalfehler - 0x5531 - 0x0001 - BMW_BODY_Wiper - E2E Absicherungsfehler | 1 |
| 0xE05406 | Botschaftsfehler - 0x7531 - 0x0001 - BMW_CHASSIS_DrivingVector - Timeout | 1 |
| 0xE05409 | Botschaftsfehler - 0x5532 - 0x0001 - BMW_BODY_Light - Timeout | 1 |
| 0xE0540B | Signalfehler - 0x5532 - 0x0001 - BMW_BODY_Light - Signal ungültig | 1 |
| 0xE0540C | Botschaftsfehler - 0x5531 - 0x0001 - BMW_BODY_Wiper - Timeout | 1 |
| 0xE0540D | Signalfehler - 0x7533 - 0x0001 - BMW_CHASSIS_SpeedAcceleration - E2E-Absicherungsfehler | 1 |
| 0xE0540E | Signalfehler - 0x5531 - 0x0001 - BMW_BODY_Wiper - Signal Ungültig | 1 |
| 0xE0540F | Signalfehler - 0x7530 - 0x0001 - BMW_CHASSIS_VehicleModel - E2E Absicherungsfehler | 1 |
| 0xE05410 | Botschaftsfehler - 0x7530 - 0x0001 - BMW_CHASSIS_VehicleModel - Timeout | 1 |
| 0xE05411 | Signalfehler - 0x7530 - 0x0001 - BMW_CHASSIS_VehicleModel - Signal Ungültig | 1 |
| 0xE05418 | Botschaftsfehler - 0x7536 - 0x0001 - BMW_CHASSIS_WheelTorqueECBA - Timeout | 1 |
| 0xE0541A | Signalfehler - 0x7536 - 0x0001 - BMW_CHASSIS_WheelTorqueECBA - Signal Ungültig | 1 |
| 0xE0541B | Botschaftsfehler - 0x7534 - 0x0001 - BMW_CHASSIS_VehicleStabilizationManagement - Timeout | 1 |
| 0xE0541D | Signalfehler - 0x7534 - 0x0001 - BMW_CHASSIS_VehicleStabilizationManagement - Signal ungültig | 1 |
| 0xE0541E | Botschaftsfehler - 0x7532 - 0x0001 - BMW_CHASSIS_SteeringAngle - Timeout | 1 |
| 0xE0541F | Signalfehler - 0x7532 - 0x0001 - BMW_CHASSIS_SteeringAngle - E2E-Absicherungsfehler | 1 |
| 0xE05420 | Signalfehler - 0x7532 - 0x0001 - BMW_CHASSIS_SteeringAngle - Signal ungültig | 1 |
| 0xE05421 | Botschaftsfehler - 0x353b - 0x0001 - BMW_DASS_MainBeam - Timeout | 1 |
| 0xE05422 | Signalfehler - 0x353b - 0x0001 - BMW_DASS_MainBeam - Signal Ungültig | 1 |
| 0xE05424 | Botschaftsfehler - 0x3531 - 0x0001 - BMW_DASS_ControlAndStatus - Timeout | 1 |
| 0xE05426 | Signalfehler - 0x3531 - 0x0001 - BMW_DASS_ControlAndStatus - Signal Ungültig | 1 |
| 0xE05427 | Botschaftsfehler - 0x3538 - 0x0001 - BMW_DASS_DriverAssistanceComfortAndSecurity - Timeout | 1 |
| 0xE05428 | Signalfehler - 0x3538 - 0x0001 - BMW_DASS_DriverAssistanceComfortAndSecurity - E2E Absicherungsfehler | 1 |
| 0xE05429 | Signalfehler - 0x3538 - 0x0001 - BMW_DASS_DriverAssistanceComfortAndSecurity - Signal Ungültig | 1 |
| 0xE0542D | Botschaftsfehler - 0xb531 - 0x0001 - BMW_INFOTAINMENT_ADASProtocol - Timeout | 1 |
| 0xE0542E | Signalfehler - 0xb531 - 0x0001 - BMW_INFOTAINMENT_ADASProtocol - Signal Ungültig | 1 |
| 0xE05435 | Signalfehler - 0xb534 - 0x0001 - BMW_INFOTAINMENT_DisplayStatus - Signalfehler | 1 |
| 0xE05439 | Botschaftsfehler - 0x1531 - 0x0001 - BMW_INFRASTRUCTURE_VehicleCondition - Timeout | 1 |
| 0xE0543A | Signalfehler - 0x1531 - 0x0001 - BMW_INFRASTRUCTURE_ VehicleCondition - E2E Absicherungsfehler | 1 |
| 0xE0543B | Signalfehler - 0x1531 - 0x0001 - BMW_INFRASTRUCTURE_ VehicleCondition - Signal Ungültig | 1 |
| 0xE0543D | Signalfehler - 0x1535 - 0x0001 - BMW_INFRASTRUCTURE_Environmentalinformation - Signal Ungültig | 1 |
| 0xE0543F | Botschaftsfehler - 0x1535 - 0x0001 - BMW_INFRASTRUCTURE_Environmentalinformation - Timeout | 1 |
| 0xE05445 | Botschaftsfehler - 0x1536 - 0x0001 - BMW_INFRASTRUCTURE_VehicleInformation - Timeout | 1 |
| 0xE05447 | Signalfehler - 0x1536 - 0x0001 - BMW_INFRASTRUCTURE_VehicleInformation - Signal Ungültig | 1 |
| 0xE0544B | Botschaftsfehler - 0x9531 - 0x0001 - BMW_POWERTRAIN_AcceleratorPedal - Timeout | 1 |
| 0xE0544C | Signalfehler - 0x9531 - 0x0001 - BMW_POWERTRAIN_AcceleratorPedal - E2E-Absicherungsfehler | 1 |
| 0xE0544D | Signalfehler - 0x9531 - 0x0001 - BMW_POWERTRAIN_AcceleratorPedal - Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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

### FUNKTIONSVERFUEGBARKEIT

| WERT | TEXT |
| --- | --- |
| 0x2 | Funktion ist verfügbar - ausgeschaltet |
| 0x6 | Funktion ist nicht verfügbar - Fehler KAFAS-Kamera |
| 0xA | Funktion aktiv - eingeschaltet |
| 0xB | Funktion aktiv - reversible Rückfallebene (reduzierte Sicht, Land nicht freigezeichnet) |
| 0xE | Funktion ist nicht verfügbar - auscodiert |
| 0xF | Signal unbefüllt |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0002 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0003 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0004 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0005 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0006 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0012 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0013 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0014 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0015 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0016 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x400E | UWB_ALGO_ERROR_CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400F | UWB_SAC_ERROR_CODE | 0/1 | High | 0xFF | - | - | - | - |
| 0x4012 | MAC_SAC_BLOCKAGE_DETECTED | 0-n | High | 0xFF | ERGEBNIS_UWB_MAC_SAC_BLOCKAGE_DETECTED | - | - | - |
| 0x4013 | UWB_SERVICE_ACTION_CODE | 0-n | High | 0xFF | ERGEBNIS_SERVICE_ACTION_CODE | - | - | - |
| 0x4014 | UWB_CALIB_DEBUG_DATA | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x401A | ERROR_ID_EMLANEASSIGNMENT | 0-n | High | 0xFF | TAB_ERRID_EMLANEASSIGNMENT | - | - | - |
| 0x401B | ERROR_DUMP_1_EMLANEASSIGNMENT | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x401C | ERROR_DUMP_2_EMLANEASSIGNMENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x401D | ERROR_ID_EMROADASSEMBLY | 0-n | High | 0xFF | TAB_ERRID_EMROADASSEMBLY | - | - | - |
| 0x401E | ERROR_DUMP_1_EMROADASSEMBLY | HEX | High | unsigned long | - | - | - | - |
| 0x401F | ERROR_DUMP_2_EMROADASSEMBLY | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4020 | ERROR_ID_EMELECTRONICHORIZON | 0-n | High | 0xFF | TAB_ERRID_EMELECTRONICHORIZON | - | - | - |
| 0x4021 | ERROR_DUMP_1_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4022 | ERROR_DUMP_2_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | ERROR_ID_EMOBJDESC | 0-n | High | 0xFF | TAB_ERRID_EMOBJDESC | - | - | - |
| 0x4024 | ERROR_DUMP_1_EMOBJDESC | HEX | High | unsigned long | - | - | - | - |
| 0x4025 | ERROR_DUMP_2_EMOBJDESC | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | ERROR_ID_EMTRAFFICSIGNFUSION | 0-n | High | 0xFF | TAB_ERROR_ID_EMTRAFFICSIGNFUSION | - | - | - |
| 0x4027 | ERROR_DUMP_1_EMTRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4028 | ERROR_DUMP_2_EMTRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | ERROR_ID_EMSLCONDITIONEVALUATOR | 0-n | High | 0xFF | TAB_ERROR_ID_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x402A | ERROR_DUMP_1_EMSLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x402B | ERROR_DUMP_2_EMSLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x402C | EVENT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x402D | SIG_INV_1 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x402E | SIG_INV_2 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x402F | SIG_INV_3 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4034 | DQ_LVL_DGRDTN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4035 | DQ_REASEON_DEGRADATION | 0-n | High | 0xFF | TAB_DQ_REASON | - | - | - |
| 0x403B | UWB_CONTI_ERRORCODE | HEX | High | unsigned int | - | - | - | - |
| 0x403C | PROGRAMMING_COUNTER | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4040 | ERROR_ID_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | 0-n | High | 0xFF | TAB_ERROR_ID_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | - | - |
| 0x4041 | ERROR_DUMP_1_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x4042 | ERROR_DUMP_2_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4043 | ERROR_ID_EMODOCLIENT | 0-n | High | 0xFF | TAB_ERROR_ID_EMODOCLIENT | - | - | - |
| 0x4044 | ERROR_DUMP1_EMODOCLIENT | HEX | High | unsigned long | - | - | - | - |
| 0x4045 | ERROR_DUMP2_EMODOCLIENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4046 | ECU_TEMPERATURE | - | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x40C0 | Lost Packets | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x40C1 | Lost_Packets | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x40D0 | Color_Channel | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40E0 | UWB_CAT1_CAT2_RESET_DUMP | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x6F00 | Vehicle State | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | Camera Current | mA | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F02 | ECU Vbat | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp 1 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F04 | ECU Temp 2 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F05 | CAM_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x6F06 | Internal MCU-EQ CAN | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F07 | VehicleSpeed | km/h | High | unsigned int | - | 0.1 | 1.0 | -100.0 |
| 0x6F08 | ECU_StateManager_state | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F09 | SystemCycleCounter | count | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x5D0001 | DEM_EVENT | 0 |
| 0x5D0002 | DEM_EVENT_SLAVE | 0 |
| 0x5D0010 | Climate Control active | 0 |
| 0x5D0020 | DEM_ERROR_GIVEWAYWARNER_INPUT_FAULT | 0 |
| 0x5D0021 | DEM_ERROR_GIVEWAYWARNER_LOGIC_FAULT | 0 |
| 0x5D0022 | DEM_ERROR_EMROADASSEMBLY_INPUT_FAULT | 0 |
| 0x5D0023 | DEM_ERROR_EMROADASSEMBLY_LOGIC_FAULT | 0 |
| 0x5D0024 | DEM_ERROR_EMELECTRONICHORIZON_INPUT_FAULT | 0 |
| 0x5D0025 | DEM_ERROR_EMELECTRONICHORIZON_LOGIC_FAULT | 0 |
| 0x5D0028 | DEM_ERROR_EMTRAFFICSIGNFUSION_INPUT_FAULT | 0 |
| 0x5D0029 | DEM_ERROR_EMTRAFFICSIGNFUSION_LOGIC_FAULT | 0 |
| 0x5D002A | DEM_ERROR_EMSLCONDITIONEVALUATOR_INPUT_FAULT | 0 |
| 0x5D002B | DEM_ERROR_EMSLCONDITIONEVALUATOR_LOGIC_FAULT | 0 |
| 0x5D002C | DEM_ERROR_EMROADDESCRIPTIONLEGACYCONSTRUCTOR_INPUT_FAULT | 0 |
| 0x5D002D | DEM_ERROR_EMROADDESCRIPTIONLEGACYCONSTRUCTOR_LOGIC_FAULT | 0 |
| 0x5D0030 | Camera FOV blocked | 1 |
| 0x5D0031 | Camera FOV disturbed by weather | 1 |
| 0x5D0032 | TSR_INPUT_ERROR | 0 |
| 0x5D0033 | TSA_INPUT_COUNTRY_CODE | 0 |
| 0x5D0034 | LD_STATIC_INPUT_DATA_ERROR | 0 |
| 0x5D0035 | PV_STATIC_INPUT_DATA_ERROR | 0 |
| 0x5D0050 | Temporärer Interner Softwarefehler | 0 |
| 0x5D0051 | Imager Control Error | 0 |
| 0x5D0052 | Freespace_Development_Error | 0 |
| 0x5D0060 | DEM_ERROR_EMCOMHANDLER_INPUT_FAULT | 0 |
| 0x5D0061 | DEM_ERROR_EMCOMHANDLER_LOGIC_FAULT | 0 |
| 0x5D0062 | DISABLE_INPUT_CHECK | 0 |
| 0x5D0063 | DISABLE_CUSTOMER_FCT_ERR_HANDLING | 0 |
| 0x5D0064 | Aufstartfehler im Bildverarbeitungspfad - Silent Restart | 0 |
| 0x5D0065 | SAC Grobkalibrierungsrückfall | 0 |
| 0x5D0100 | Fehler der Fahrzeug-Security | 0 |
| 0xE04601 | Ethernet: CRC Fehler | 1 |
| 0xE04605 | Ethernet - Packet Loss | 0 |
| 0xE05408 | Kafas VDY kein kritischer Fehler | 1 |
| 0xE05449 | Insufficient Input Signal Quality | 1 |
| 0xE0544A | Signalfehler - 0x1506 - 0x0001 - BMW_INFRASTRUCTURE_StatusEnergy - Signal Ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0002 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0003 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0004 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0005 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0006 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0012 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0013 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0014 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0015 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0016 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0017 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0018 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0019 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001A | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001B | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001C | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001D | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001E | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x001F | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0020 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x400E | UWB_ALGO_ERROR_CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400F | UWB_SAC_ERROR_CODE | 0/1 | High | 0xFF | - | - | - | - |
| 0x4012 | MAC_SAC_BLOCKAGE_DETECTED | 0-n | High | 0xFF | ERGEBNIS_UWB_MAC_SAC_BLOCKAGE_DETECTED | - | - | - |
| 0x4013 | UWB_SERVICE_ACTION_CODE | 0-n | High | 0xFF | ERGEBNIS_SERVICE_ACTION_CODE | - | - | - |
| 0x4014 | UWB_CALIB_DEBUG_DATA | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x401A | ERROR_ID_EMLANEASSIGNMENT | 0-n | High | 0xFF | TAB_ERRID_EMLANEASSIGNMENT | - | - | - |
| 0x401B | ERROR_DUMP_1_EMLANEASSIGNMENT | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x401C | ERROR_DUMP_2_EMLANEASSIGNMENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x401D | ERROR_ID_EMROADASSEMBLY | 0-n | High | 0xFF | TAB_ERRID_EMROADASSEMBLY | - | - | - |
| 0x401E | ERROR_DUMP_1_EMROADASSEMBLY | HEX | High | unsigned long | - | - | - | - |
| 0x401F | ERROR_DUMP_2_EMROADASSEMBLY | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4020 | ERROR_ID_EMELECTRONICHORIZON | 0-n | High | 0xFF | TAB_ERRID_EMELECTRONICHORIZON | - | - | - |
| 0x4021 | ERROR_DUMP_1_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4022 | ERROR_DUMP_2_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | ERROR_ID_EMOBJDESC | 0-n | High | 0xFF | TAB_ERRID_EMOBJDESC | - | - | - |
| 0x4024 | ERROR_DUMP_1_EMOBJDESC | HEX | High | unsigned long | - | - | - | - |
| 0x4025 | ERROR_DUMP_2_EMOBJDESC | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | ERROR_ID_EMTRAFFICSIGNFUSION | 0-n | High | 0xFF | TAB_ERROR_ID_EMTRAFFICSIGNFUSION | - | - | - |
| 0x4027 | ERROR_DUMP_1_EMTRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4028 | ERROR_DUMP_2_EMTRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | ERROR_ID_EMSLCONDITIONEVALUATOR | 0-n | High | 0xFF | TAB_ERROR_ID_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x402A | ERROR_DUMP_1_EMSLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x402B | ERROR_DUMP_2_EMSLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x402C | EVENT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x402D | SIG_INV_1 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x402E | SIG_INV_2 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x402F | SIG_INV_3 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4034 | DQ_LVL_DGRDTN | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4035 | DQ_REASEON_DEGRADATION | 0-n | High | 0xFF | TAB_DQ_REASON | - | - | - |
| 0x403B | UWB_CONTI_ERRORCODE | HEX | High | unsigned int | - | - | - | - |
| 0x403C | PROGRAMMING_COUNTER | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4040 | ERROR_ID_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | 0-n | High | 0xFF | TAB_ERROR_ID_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | - | - |
| 0x4041 | ERROR_DUMP_1_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x4042 | ERROR_DUMP_2_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4043 | ERROR_ID_EMODOCLIENT | 0-n | High | 0xFF | TAB_ERROR_ID_EMODOCLIENT | - | - | - |
| 0x4044 | ERROR_DUMP1_EMODOCLIENT | HEX | High | unsigned long | - | - | - | - |
| 0x4045 | ERROR_DUMP2_EMODOCLIENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4046 | ECU_TEMPERATURE | - | High | signed int | - | 10.0 | 1.0 | 0.0 |
| 0x40C0 | Lost Packets | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x40C1 | Lost_Packets | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x40D0 | Color_Channel | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40E0 | UWB_CAT1_CAT2_RESET_DUMP | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x6F00 | Vehicle State | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F01 | Camera Current | mA | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F02 | ECU Vbat | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp 1 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F04 | ECU Temp 2 | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F05 | CAM_TEMP | °C | High | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x6F06 | Internal MCU-EQ CAN | - | Low | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6F07 | VehicleSpeed | km/h | High | unsigned int | - | 0.1 | 1.0 | -100.0 |
| 0x6F08 | ECU_StateManager_state | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6F09 | SystemCycleCounter | count | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
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

### LUFTSPIELREDUKTION

| WERT | TEXT |
| --- | --- |
| 0x1 | keine Luftspielreduktion der Bremsanlage |
| 0x2 | Luftspielreduktion der Bremsanlage angefordert |
| 0x3 | Signal ungültig |

### MODE_OF_OPERATION

| WERT | TEXT |
| --- | --- |
| 1 | Normal |
| 2 | Overtemp-cooling requested |
| 3 | Overtemp-Application disabled |

### OPERATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x0 | Normal Operation Mode |
| 0x1 | Power_Up_Or_Down |
| 0x2 | Sensor_Not_Calibrated |
| 0x3 | Sensor_Blocked |
| 0x4 | Sensor_Misaligned |
| 0x5 | Bad_Sensor_Environmental_Condition |
| 0x6 | Reduced_Field_Of_View |
| 0x7 | Input_Not_Available |
| 0x8 | Internal_Reason |
| 0x9 | External_Destortion |
| 0xA | Beginning_Blockage |

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

### PORT_LINK_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | kein Link-off festgestellt |
| 1 | Link-off festgestellt |

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

### RES_0X1048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LOOPBACK_TEST | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_LOOPBACK_TEST | - | - | - | Ergebnis Loopback-Test |

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

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_OP_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer FLA durch Fahrer aktiviert [s] |
| STAT_DELTA_TIME_FLA_NIGHT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer in der Umgebungshelligkeit FLA Aktivierung erlaubt  |
| STAT_DELTA_TIME_FLA_ACT_HB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Einschaltempfehlung FLA  |
| STAT_DELTA_TIME_FLA_ACT_LB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitdauer Abschaltempfehlung  |
| STAT_FLA_COUNT_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Übersteuerung durch Fahrer |
| STAT_OPTIME_TOTAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absoluter Betriebszeitzähler |
| STAT_FLA_COUNT_FULL_HB_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen durch den Fahrer, bei FLA-aktiviertem Vollfernlicht |
| STAT_FLA_COUNT_FULL_GFHB_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen durch den Fahrer, bei FLA-aktiviertem Teilfernlicht |
| STAT_FLA_COUNT_FULL_LB_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen durch den Fahrer, bei FLA-aktiviertem Abblendlicht |
| STAT_FLA_COUNT_FULL_SWITCH_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen, bei denen der Fahrer den FLA-Taster gedrückt hat. |
| STAT_FLA_COUNT_FULL_LH_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen, bei denen der Fahrer die Lichthupe gezogen hat. |
| STAT_FLA_COUNT_FL_OVERRIDE_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße bestimmt die Anzahl der FLA Übersteuerungen, bei denen der Fahrer den Fernlicht Lenstockhebel gedrückt hat. |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNTRY_CODE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ISO Country Code des Landes in welchem das Fahrzeug die meisten  Kilometer zurückgelegt hat. |
| STAT_OPTIME_TOTAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absoluter Betriebszeitzähler |
| STAT_OPTIME_NIGHT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit in der Nacht. Basiert auf BV-Algo Nachtentscheidung |
| STAT_OPTIME_WIPER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit während Regen. Basiert auf Algo Regenentscheidung |
| STAT_DRIVEN_DIST_TOTAL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer |
| STAT_DRIVEN_DIST_URBAN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Urban oder Residential Area |
| STAT_DRIVEN_DIST_RURAL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Rural oder Highway |
| STAT_DRIVEN_DIST_MOWAY_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer auf Straßentyp Motorway |
| STAT_DRIVEN_DIST_NA_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer ohne verfügbaren Straßentyp |
| STAT_AMNT_ONLINE_CALIB_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler über die Erfolgten Online-Kalibriervorgänge |

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LDW_DRIV_DIST_REL_SPD_SPRST_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivem LDW, relavanter Geschwindigkeit und eingeschränkter Verfügbarkeit |
| STAT_LDW_DRIV_DIST_REL_SPD_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktivem LDW und relavanter Geschwindigkeit |
| STAT_LDW_AMNT_WARN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl ausgegebener LDW Warnungen |
| STAT_LDW_AMNT_DEACT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Deaktivierung der LDW-Funktion durch den Fahrer |
| STAT_LDW_DRIV_DIST_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Kilometer mit aktiviertem LDW |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_URSAF_OBJ_STAT_AMNT_BRAKE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-STAT ausgelöst wurden. |
| STAT_URSAF_OBJ_STAT_AMNT_BRAKE_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-STAT ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 0 km/h und kleiner 20 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_STAT_AMNT_BRAKE_20_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-STAT ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 20 km/h und kleiner 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_STAT_AMNT_BRAKE_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-STAT ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_MOVE_AMNT_BRAKE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-MOVE ausgelöst wurden. |
| STAT_URSAF_OBJ_MOVE_AMNT_BRAKE_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-MOVE ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 0 km/h und kleiner 20 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_MOVE_AMNT_BRAKE_20_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-MOVE ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 20 km/h und kleiner 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_MOVE_AMNT_BRAKE_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Bremsanforderungen gezählt wird, die durch Objekte der Objektklasse OBJ-MOVE ausgelöst wurden und bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_OBJ_AMNT_PREWARNING_0_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Vorwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 0 km/h und kleiner 60 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_AMNT_PREWARNING_60_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Vorwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 60 km/h und kleiner 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_AMNT_PREWARNING_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Vorwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_AMNT_ACUTE_0_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Akutwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 0-00b auf 0-01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 0 km/h und kleiner 60 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_AMNT_ACUTE_60_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Akutwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 0-00b auf 0-01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 60 km/h und kleiner 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_AMNT_ACUTE_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Akutwarnungen der Subfunktion OBJ gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_OBJ ändert sich von 0-00b auf 0-01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_OBJ_TIME_BRAKE_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem Datum und Uhrzeit der letzten Bremsanforderung durch die Subfunktionen OBJ-STAT oder OBJ-MOVE gespeichert wird (yyyymmddhhmmss). |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLI_AMT_CAM_DET_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Kameradetektionen von Verkehrsschildern |
| STAT_SLI_MATCH_URBAN_WERT | Counts | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Urban oder Residential Area übereinstimmen |
| STAT_SLI_MATCH_RURAL_WERT | Counts | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Rural oder Highway übereinstimmen |
| STAT_SLI_MATCH_MOWAY_WERT | Counts | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Anteil der  Kameradetektion die mit den expliziten Speed Limits auf dem Straßentyp Motorway übereinstimmen |
| STAT_SLI_REP_URBAN_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Urbanoder Residential Area wiederholen |
| STAT_SLI_REP_RURAL_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Rural oder Highway wiederholen |
| STAT_SLI_REP_MOWAY_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Motorway wiederholen |
| STAT_SLI_OVER_SLI_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Entfernung mit mindestens 20 km/h über dem erkannten Speed Limit |
| STAT_SLI_SSS_TIME_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Zusatzzeichen mit Zeitbeschränkung |
| STAT_SLI_NPI_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gefahrene Kilometer mit erkanntem Überholverbot |
| STAT_SLI_NP_WITHDRAW_DIST_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aufhebungen Überholverbot infolge Überschreitung Haltedistanz |
| STAT_SLI_NP_WITHDRAW_SIGN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aufhebungen Überholverbot infolge Detektion Aufhebungsschild |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UI_VERSIONNUMBER_WERT | - | high | signed long | - | - | 0.09761 | 1000000000.0 | 0.0 | Version Number |
| STAT_UITIMESTAMP_WERT | s | high | signed long | - | - | 0.09761 | 1000000000.0 | 0.0 | Timestamp |
| STAT_UIMEASUREMENTCOUNTER_WERT | count | high | unsigned int | - | - | 0.09761 | 1000000000.0 | 0.0 | MEASUREMENT COUNTER |
| STAT_UICYCLECOUNTER_WERT | count | high | unsigned int | - | - | 0.09761 | 1000000000.0 | 0.0 | Cycle Counter |
| STAT_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | Signal Status |
| STAT_UVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | uVersionNumber |
| STAT_UIALGOVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | uiAlgoVersionNumber |
| STAT_APPLICATIONNUMBER_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | ApplicationNumber |
| STAT_ALGOVERSIONINFO_0_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo[0] |
| STAT_ALGOVERSIONINFO_1_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_2_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_3_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_4_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_5_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_6_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_7_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_8_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_9_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_10_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_11_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_12_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_13_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_14_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_15_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_16_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_17_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_18_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_19_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_20_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_21_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_22_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_23_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_24_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_25_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_26_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_27_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_28_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_29_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_30_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_31_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_32_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_33_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_34_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_35_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_36_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_37_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_38_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_39_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_40_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_41_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_42_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_43_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_44_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_45_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_46_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_47_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_48_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_49_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ALGOVERSIONINFO_50_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | AlgoVersionInfo |
| STAT_ECOMPSTATE_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | eCompState |
| STAT_EERRORCODE_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | eErrorCode |
| STAT_ESHEDULERMODEREQUEST_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | eShedulerModeRequest |
| STAT_EGENALGOQUALIFIER_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | eGenAlgoQualifier |
| STAT_F32_PITCH_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | f32_Pitch |
| STAT_F32_ROLL_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | f32_Roll |
| STAT_F32_YAW_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | f32_Yaw |
| STAT_UI32_QUALITY_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | ui32_Quality |
| STAT_FX_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fX |
| STAT_FY_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fY |
| STAT_FZ_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fZ |
| STAT_FROLL_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fRoll |
| STAT_FPITCH_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitch |
| STAT_FYAW_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fYaw |
| STAT_FROLLSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fRollSigma |
| STAT_FPITCHSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitchSigma |
| STAT_FYAWSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fYawSigma |
| STAT_UIROLLQUALITY_WERT | - | high | signed char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiRollQuality |
| STAT_UIPITCHQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiPitchQuality |
| STAT_UIYAWQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiYawQuality |
| STAT_UITOTALANGLEQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiTotalAngleQuality |
| STAT_FTX_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTx |
| STAT_FTY_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTy |
| STAT_FTZ_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTz |
| STAT_FTXSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTxSigma |
| STAT_FTYSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTySigma |
| STAT_FTZSIGMA_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fTzSigma |
| STAT_UITXQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiTxQuality |
| STAT_UITYQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | UITYQUALITY |
| STAT_UITZQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiTzQuality |
| STAT_UITOTALTRANSLQUALITY_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | uiTotalTranslQuality |
| STAT_FA00_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fA00 |
| STAT_FA10_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | fA10  |
| STAT_FA20_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA20 |
| STAT_FA01_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA01 |
| STAT_FA11_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA11 |
| STAT_FA21_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA21 |
| STAT_FA02_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA02 |
| STAT_FA12_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA12 |
| STAT_FA22_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA22 |
| STAT_FA03_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA03 |
| STAT_FA13_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA13 |
| STAT_FA23_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fA23 |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiVersionnummer |
| STAT_SSIGNALHEADER_UITIMESTAMP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | sSignalHeader.uiTimeStamp |
| STAT_SSIGNALHEADER_UIMEASUREMENTCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | sSignalHeader.uiMeasurementCounter |
| STAT_SSIGNALHEADER_UICYCLECOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | sSignalHeader.uiCycleCounter |
| STAT_SSIGNALHEADER_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | sSignalHeader.eSigStatus |
| STAT_UIFLEXRAYBITFIELDPARTA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiFlexrayBitfieldPartA |
| STAT_UIFLEXRAYBITFIELDPARTB_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiFlexrayBitfieldPartB |
| STAT_ASELFTESTDISTANCEHISTOGRAMBIN0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aSelfTestDistanceHistogramBin0 |
| STAT_ASELFTESTDISTANCEHISTOGRAMBIN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aSelfTestDistanceHistogramBin1 |
| STAT_ASELFTESTDISTANCEHISTOGRAMBIN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aSelfTestDistanceHistogramBin2 |
| STAT_ASELFTESTDISTANCEHISTOGRAMBIN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aSelfTestDistanceHistogramBin3 |
| STAT_ACOARSEDISTANCEHISTOGRAMBIN0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aCoarseDistanceHistogramBin0 |
| STAT_ACOARSEDISTANCEHISTOGRAMBIN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aCoarseDistanceHistogramBin1 |
| STAT_ACOARSEDISTANCEHISTOGRAMBIN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aCoarseDistanceHistogramBin2 |
| STAT_ACOARSEDISTANCEHISTOGRAMBIN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aCoarseDistanceHistogramBin3 |
| STAT_AFINEDISTANCEHISTOGRAMBIN0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aFineDistanceHistogramBin0 |
| STAT_AFINEDISTANCEHISTOGRAMBIN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aFineDistanceHistogramBin1 |
| STAT_AFINEDISTANCEHISTOGRAMBIN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aFineDistanceHistogramBin2 |
| STAT_AFINEDISTANCEHISTOGRAMBIN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aFineDistanceHistogramBin3 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin0 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin1 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin2 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin3 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin4 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin5 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin6 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin7 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin8 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin9 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin10 |
| STAT_ARECTIFICATIONERRORHISTOGRAMBIN11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aRectificationErrorHistogramBin11 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin0 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin1 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin2 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin3 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin4 |
| STAT_ANUMBERUSEDFRAMESHISTOGRAMBIN5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aNumberUsedFramesHistogramBin5 |
| STAT_FKMETERSCURRENT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fKmetersCurrent |
| STAT_FKMETERSLASTCOARSECALIB_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fKmetersLastCoarseCalib |
| STAT_FKMETERSLASTFINECALIB_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fKmetersLastFineCalib |
| STAT_FKMETERSLASTYAWCALIB_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fKmetersLastYawCalib |
| STAT_AKMETERSLASTERROR0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError0 |
| STAT_AKMETERSLASTERROR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError1 |
| STAT_AKMETERSLASTERROR2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError2 |
| STAT_AKMETERSLASTERROR3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError3 |
| STAT_AKMETERSLASTERROR4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError4 |
| STAT_AKMETERSLASTERROR5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError5 |
| STAT_AKMETERSLASTERROR6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError6 |
| STAT_AKMETERSLASTERROR7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError7 |
| STAT_AKMETERSLASTERROR8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError8 |
| STAT_AKMETERSLASTERROR9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | aKmetersLastError9 |
| STAT_FKMETERSSTARTOFSTATISTIC_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fKmetersStartOfStatistic |
| STAT_ALASTERROR0_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError0 |
| STAT_ALASTERROR1_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError1 |
| STAT_ALASTERROR2_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError2 |
| STAT_ALASTERROR3_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError3 |
| STAT_ALASTERROR4_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError4 |
| STAT_ALASTERROR5_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError5 |
| STAT_ALASTERROR6_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError6 |
| STAT_ALASTERROR7_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError7 |
| STAT_ALASTERROR8_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError8 |
| STAT_ALASTERROR9_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | aLastError9 |
| STAT_FCURRRECTERROR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCurrRecterror |
| STAT_UICURRNOUSEDFRAMES_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiCurrNoUsedFrames |
| STAT_FMAXDISTCALIB_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMaxDistCalib |
| STAT_UIMAXNOUSEDFRAMESFINE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiMaxNoUsedFramesFine |
| STAT_UIMAXNOUSEDFRAMESCOARSE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiMaxNoUsedFramesCoarse |
| STAT_FMINPITCH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMinPitch |
| STAT_FCURRPITCH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCurrPitch |
| STAT_FMAXPITCH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMaxPitch |
| STAT_FMINYAW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMinYaw |
| STAT_FCURRYAW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCurrYaw |
| STAT_FMAXYAW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMaxYaw |
| STAT_FMINROLL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMinRoll |
| STAT_FCURRROLL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCurrRoll |
| STAT_FMAXROLL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fMaxRoll |
| STAT_ESOURCE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | eSource |
| STAT_ESTATISTICSSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | eStatisticsState |
| STAT_FRAMECNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | FrameCnt |
| STAT_BLOCKAGE_UIVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Blockage.uiVersionNumber |
| STAT_BLOCKAGE_SSIGNALHEADER_UITIMESTAMP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Blockage.sSignalHeader.uiTimeStamp |
| STAT_BLOCKAGE_SSIGNALHEADER_UIMEASUREMENTCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Blockage.sSignalHeader.uiMeasurementCounter |
| STAT_BLOCKAGE_SSIGNALHEADER_UICYCLECOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Blockage.sSignalHeader.uiCycleCounter |
| STAT_BLOCKAGE_SSIGNALHEADER_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blockage.sSignalHeader.eSigStatus |
| STAT_BLOCKAGE_EBLOCKAGESTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blockage.eBlockageStatus |
| STAT_BLOCKAGE_UISTATUSCONF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Blockage.uiStatusConf |
| STAT_RADARCAL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RadarCal |
| STAT_BINFILL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BinFill |
| STAT_ECURRENTSCHEDULINGMODE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | eCurrentSchedulingMode |
| STAT_EALGORETURNSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | eAlgoReturnState |
| STAT_VERSBUGFX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | VersBugfx |
| STAT_VERSMINOR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | VersMinor |
| STAT_VERSMAJOR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | VersMajor |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UITIMESTAMP_WERT | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiTimeStamp |
| STAT_UIMEASUREMENTCOUNTER_WERT | count | high | signed int | - | - | 1.0 | 1.0 | 0.0 | uiMeasurementCounter |
| STAT_UICYCLECOUNTER_WERT | count | high | signed int | - | - | 1.0 | 1.0 | 0.0 | uiCycleCounter |
| STAT_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Roll angle nvm temp table data |
| STAT_SIANGLE_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -40 °C |
| STAT_SICONFIDENCE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -40 °C |
| STAT_SIANGLE_1_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -30 °C |
| STAT_SICONFIDENCE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -30 °C |
| STAT_SIANGLE_2_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -20 °C |
| STAT_SICONFIDENCE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -20 °C |
| STAT_SIANGLE_3_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -10 °C |
| STAT_SICONFIDENCE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -10 °C |
| STAT_SIANGLE_4_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  0 °C |
| STAT_SICONFIDENCE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  0 °C |
| STAT_SIANGLE_5_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  10 °C |
| STAT_SICONFIDENCE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  10 °C |
| STAT_SIANGLE_6_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta) 20 °C |
| STAT_SICONFIDENCE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  20 °C |
| STAT_SIANGLE_7_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  30 °C |
| STAT_SICONFIDENCE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  30 °C |
| STAT_SIANGLE_8_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  40 °C |
| STAT_SICONFIDENCE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  40 °C |
| STAT_SIANGLE_9_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  50 °C |
| STAT_SICONFIDENCE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  50 °C |
| STAT_SIANGLE_10_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  60 °C |
| STAT_SICONFIDENCE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  60 °C |
| STAT_SIANGLE_11_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  70 °C |
| STAT_SICONFIDENCE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  70 °C |
| STAT_SIANGLE_12_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  80 °C |
| STAT_SICONFIDENCE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  80 °C |
| STAT_SIANGLE_13_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  90 °C |
| STAT_SICONFIDENCE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  90 °C |
| STAT_SIANGLE_14_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  100 °C |
| STAT_SICONFIDENCE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  100 °C |
| STAT_SIANGLE_15_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  110 °C |
| STAT_SICONFIDENCE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  110 °C |
| STAT_UISTATUSREAD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusRead |
| STAT_UISTATUSWRITE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWrite |
| STAT_UISTATUSWRITEPENDING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWritePending |
| STAT_SIPRODUCTIONANGLE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Pitch angle nvm temp table data |
| STAT_SIANGLE_16_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -40 °C |
| STAT_SICONFIDENCE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -40 °C |
| STAT_SIANGLE_17_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -30 °C |
| STAT_SICONFIDENCE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -30 °C |
| STAT_SIANGLE_18_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -20 °C |
| STAT_SICONFIDENCE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -20 °C |
| STAT_SIANGLE_19_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  -10 °C |
| STAT_SICONFIDENCE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  -10 °C |
| STAT_SIANGLE_20_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  0 °C |
| STAT_SICONFIDENCE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  0 °C |
| STAT_SIANGLE_21_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  10 °C |
| STAT_SICONFIDENCE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  10 °C |
| STAT_SIANGLE_22_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  20 °C |
| STAT_SICONFIDENCE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  20 °C |
| STAT_SIANGLE_23_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  30 °C |
| STAT_SICONFIDENCE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  30 °C |
| STAT_SIANGLE_24_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  40 °C |
| STAT_SICONFIDENCE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  40 °C |
| STAT_SIANGLE_25_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  50 °C |
| STAT_SICONFIDENCE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  50 °C |
| STAT_SIANGLE_26_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  60 °C |
| STAT_SICONFIDENCE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  60 °C |
| STAT_SIANGLE_27_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  70 °C |
| STAT_SICONFIDENCE_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  70 °C |
| STAT_SIANGLE_28_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  80 °C |
| STAT_SICONFIDENCE_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  80 °C |
| STAT_SIANGLE_29_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  90 °C |
| STAT_SICONFIDENCE_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  90 °C |
| STAT_SIANGLE_30_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  100 °C |
| STAT_SICONFIDENCE_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  100 °C |
| STAT_SIANGLE_31_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | (delta)  110 °C |
| STAT_SICONFIDENCE_31_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | (delta)  110 °C |
| STAT_UISTATUSREAD_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusRead |
| STAT_UISTATUSWRITE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWrite |
| STAT_UISTATUSWRITEPENDING_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWritePending |
| STAT_SIPRODUCTIONANGLE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Yaw angle nvm temp table data |
| STAT_SIANGLE_32_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  -40 °C |
| STAT_SICONFIDENCE_32_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  -40 °C |
| STAT_SIANGLE_33_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  -30 °C |
| STAT_SICONFIDENCE_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  -30 °C |
| STAT_SIANGLE_34_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  -20 °C |
| STAT_SICONFIDENCE_34_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  -20 °C |
| STAT_SIANGLE_35_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  -10 °C |
| STAT_SICONFIDENCE_35_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  -10 °C |
| STAT_SIANGLE_36_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  0 °C |
| STAT_SICONFIDENCE_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  0 °C |
| STAT_SIANGLE_37_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  10 °C |
| STAT_SICONFIDENCE_37_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  10 °C |
| STAT_SIANGLE_38_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  20 °C |
| STAT_SICONFIDENCE_38_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  20 °C |
| STAT_SIANGLE_39_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  30 °C |
| STAT_SICONFIDENCE_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  30 °C |
| STAT_SIANGLE_40_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  40 °C |
| STAT_SICONFIDENCE_40_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  40 °C |
| STAT_SIANGLE_41_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  50 °C |
| STAT_SICONFIDENCE_41_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  50 °C |
| STAT_SIANGLE_42_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  60 °C |
| STAT_SICONFIDENCE_42_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  60 °C |
| STAT_SIANGLE_43_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  70 °C |
| STAT_SICONFIDENCE_43_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  70 °C |
| STAT_SIANGLE_44_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  80 °C |
| STAT_SICONFIDENCE_44_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  80 °C |
| STAT_SIANGLE_45_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  90 °C |
| STAT_SICONFIDENCE_45_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  90 °C |
| STAT_SIANGLE_46_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  100 °C |
| STAT_SICONFIDENCE_46_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  100 °C |
| STAT_SIANGLE_47_WERT | ° | high | signed int | - | - | 565.487 | 100000000.0 | 0.0 | Schielwinkel YAW (delta)  110 °C |
| STAT_SICONFIDENCE_47_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schielwinkel YAW (delta)  110 °C |
| STAT_UISTATUSREAD_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | uiStatusRead |
| STAT_UISTATUSWRITE_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWrite |
| STAT_UISTATUSWRITEPENDING_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | uiStatusWritePending |
| STAT_SIPRODUCTIONANGLE_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Yaw angle nvm temp table data |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | uiVersion number |
| STAT_UITIMESTAMP_WERT | - | high | unsigned long | - | - | 0.09761 | 1000000000.0 | 0.0 | uiTimeStamp |
| STAT_UIMEASUREMENTCOUNTER_WERT | count | high | unsigned int | - | - | 0.09761 | 1000000000.0 | 0.0 | uiMeasurementCounter |
| STAT_UICYCLECOUNTER_WERT | count | high | unsigned int | - | - | 0.09761 | 1000000000.0 | 0.0 | uiCycleCounter |
| STAT_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | Signal Status |
| STAT_FTEMPERATURE_WERT | °C | high | motorola float | - | - | 565.487 | 100000000.0 | 0.0 | Current imager Temperature |
| STAT_FTX_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | ftx translation vector from right to left camera coordinate system which has to be updated with the new rotation matrix |
| STAT_FTY_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTY translation vector from right to left camera coordinate system which has to be updated with the new rotation matrix |
| STAT_FTZ_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTz translation vector from right to left camera coordinate system which has to be updated with the new rotation matrix |
| STAT_FROLL_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fRoll angle around longitudinal axis |
| STAT_FPITCH_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitch angle around lateral axis |
| STAT_FYAW_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fYAW angle around vertical axis |
| STAT_FROLLSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fRollSigma standard deviation of angle around longitudinal axis |
| STAT_FPITCHSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitchSigma standard deviation of angle around lateral axis |
| STAT_FYAWSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fYAWSigma standard deviation of angle around vertical axis |
| STAT_FTX_SPOSECALIBRATION_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | ftx translation velocitiy around longitudinal axis |
| STAT_FTY__SPOSECALIBRATION_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTY translation around lateral axis |
| STAT_FTZ__SPOSECALIBRATION_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTz translation around vertical axis |
| STAT_FTXSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | ftxsigma standard deviation of translation  around longitudinal axis |
| STAT_FTYSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTYSigma standard deviation of translation  around lateral axis |
| STAT_FTZSIGMA_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTzSigma standard deviation of translation around vertical axis |
| STAT_FROLL__DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fRoll angle around longitudinal axis |
| STAT_FPITCH_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitch angle around lateral axis |
| STAT_FYAW_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fYAW angle around vertical axis |
| STAT_FROLLSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fRollSigma standard deviation of angle around longitudinal axis |
| STAT_FPITCHSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fPitchSigma standard deviation of angle around lateral axis |
| STAT_FYAWSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fYAWSigma standard deviation of angle around vertical axis |
| STAT_FTX_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | ftx translation velocitiy around longitudinal axis |
| STAT_FTY_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTY translation around lateral axis |
| STAT_FTZ_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTz translation around vertical axis |
| STAT_FTXSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | ftxsigma standard deviation of translation  around longitudinal axis |
| STAT_FTYSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTYSigma standard deviation of translation  around lateral axis |
| STAT_FTZSIGMA_DYNAMIC_WERT | - | high | motorola float | - | - | 0.09761 | 1000000000.0 | 0.0 | fTzSigma standard deviation of translation around vertical axis |
| STAT_EFVERIFICATIONSTATUS_WERT | - | high | unsigned char | - | - | 0.09761 | 1000000000.0 | 0.0 | eMonoCalibrationVerificationStatus_t |

### RES_0X400B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiVersion number |
| STAT_UITIMESTAMP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | uiTimeStamp |
| STAT_UIMEASUREMENTCOUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiMeasurementCounter |
| STAT_UICYCLECOUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiCycleCounter |
| STAT_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal Status |
| STAT_FPITCHANGLEAC_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fPitchAngleAC |
| STAT_IPITCHACSTAGE_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | iPitchACStage |
| STAT_FROLLANGLEAC_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fRollAngleAC |
| STAT_IROLLACSTAGE_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | iRollACStage |
| STAT_FCAMYAWANGLEAC_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCamYawAngleAC |
| STAT_ICAMYAWACSTAGE_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | iCamYawACStage |

### RES_0X400C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | uiVersion number |
| STAT_UITIMESTAMP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | uiTimeStamp |
| STAT_UIMEASUREMENTCOUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiMeasurementCounter |
| STAT_UICYCLECOUNTER_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | uiCycleCounter |
| STAT_ESIGSTATUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal Status |
| STAT_FCALIDELTAROLL_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliDeltaRoll |
| STAT_FCALIDELTAPITCH_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliDeltaPitch |
| STAT_FCALIDELTAYAW_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliDeltaYaw  |
| STAT_FCALIDELTAHEIGHT_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliDeltaHeight |
| STAT_ISROLLCALIBRATED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | isRollCalibrated |
| STAT_ISPITCHCALIBRATED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | isPitchCalibrated |
| STAT_ISYAWCALIBRATED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | isYawCalibrated |
| STAT_ISHEIGHTCALIBRATED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | isHeightCalibrated |
| STAT_FCALITIMER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliTimer |
| STAT_FVDYODOMETER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fVdyOdometer |
| STAT_FCALIODOMETERTOFIRSTVALIDCALIB_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliOdometer |
| STAT_FCALIODOMETER_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | fCaliOdometer |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_URSAF_PED_DRIVEN_DIST_ENABLED_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der sich die Subfunktion PED im Zustand ''Wirksam'' (d.h., eingeschaltet, innerhalb des aktiven Arbeitsbereichs, verfügbar bzgl. des Verfügbarkeitskonzeptes, fehlerfrei) befindet. |
| STAT_URSAF_PED_TIME_ENABLED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Zeit ermittelt wird, in der sich die Subfunktion PED im Zustand ''Wirksam'' (d.h., eingeschaltet, innerhalb des aktiven Arbeitsbereichs, verfügbar bzgl. des Verfügbarkeitskonzeptes, fehlerfrei) befindet. |
| STAT_URSAF_PED_DEACT_AVAILABILITY_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion PED durch das KAFAS System gemäß der Fehlerreaktion PFGS_FR aufgrund des Verfügbarkeitskonzeptes (z.B. Erkennungsqualifier, Degradationskonzept,...).  Die Wechsel vom Zustand ''Aktiv'' zum Zustand ''Nicht aktivierbar'' müssen gezählt werden. |
| STAT_URSAF_PED_DRIVEN_DIST_FS_VIS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der die CheckControl-Meldung ''reduzierte Sicht'' CCM_VIS_PFGS aktiv war, unabhängig vom Einschaltzustand der Funktion. |
| STAT_URSAF_PED_AMNT_PREWARNING_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Vorwarnungen der Subfunktion PED gezählt wird, die dem Fahrer angezeigt werden (d.h., der Wert des Signals WARN_HDWOBS_FGS ändert sich von 00--b auf 01--b). Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_AMNT_ACUTE_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FGS ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 0 km/h und kleiner 20 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_AMNT_ACUTE_20_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FGS ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 20 km/h und kleiner 40 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_AMNT_ACUTE_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FGS ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 40 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_AMNT_PREFILLS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der auf Ethernet angeforderten PED-Bremsenvorbefüllungen (d.h., der Wert des Signals FGS_TAR_RDUC_AICL_THRV_BRAS ändert sich von 01b auf 10b) gezählt wird. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_DRIVEN_DIST_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der Subfunktion PED im Zustand ''Aktiv'' ist. |
| STAT_URSAF_PED_AMNT_BRAKE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen gezählt wird. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_PED_AMNT_BRAKE_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 0 km/h und kleiner 20 km/h ist und bei denen die Länge der Bremsanforderung mindestens 300 ms ist. |
| STAT_URSAF_PED_AMNT_BRAKE_20_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 20 km/h und kleiner 40 km/h ist und bei denen die Länge der Bremsanforderung mindestens 300 ms ist. |
| STAT_URSAF_PED_AMNT_BRAKE_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 40 km/h ist und bei denen die Länge der Bremsanforderung mindestens 300 ms ist. |
| STAT_URSAF_PED_AMNT_BRAKE_MAX_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 0 km/h und kleiner 20 km/h ist. |
| STAT_URSAF_PED_AMNT_BRAKE_MAX_20_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 20 km/h und kleiner 40 km/h ist. |
| STAT_URSAF_PED_AMNT_BRAKE_MAX_40_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der PED-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 40 km/h ist. |
| STAT_URSAF_PED_TIME_BRAKE_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem Datum und Uhrzeit der letzten Bremsanforderung durch die Subfunktion PED gespeichert wird (yyyymmddhhmmss). |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_URSAF_VEH_DRIVEN_DIST_ENABLED_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der sich die Subfunktion VEH im Zustand ''Wirksam'' (d.h., eingeschaltet, innerhalb des aktiven Arbeitsbereichs, verfügbar bzgl. des Verfügbarkeitskonzeptes, fehlerfrei) befindet. |
| STAT_URSAF_VEH_TIME_ENABLED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Zeit ermittelt wird, in der sich die Subfunktion VEH im Zustand ''Wirksam'' (d.h., eingeschaltet, innerhalb des aktiven Arbeitsbereichs, verfügbar bzgl. des Verfügbarkeitskonzeptes, fehlerfrei) befindet. |
| STAT_URSAF_VEH_DEACT_AVAILABILITY_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion VEH durch das KAFAS System gemäß der Fehlerreaktion FCW_FR aufgrund des Verfügbarkeitskonzeptes (z.B. Erkennungsqualifier, Degradationskonzept,...).  Die Wechsel vom Zustand ''Aktiv'' zum Zustand ''Nicht aktivierbar'' müssen gezählt werden. |
| STAT_URSAF_VEH_DRIVEN_DIST_FS_VIS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der die CheckControl-Meldung ''reduzierte Sicht'' CCM_VIS_FCW aktiv war, unabhängig vom Einschaltzustand der Funktion. |
| STAT_URSAF_VEH_DRIVEN_DIST_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der Subfunktion VEH im Zustand ''Aktiv'' ist. |
| STAT_URSAF_VEH_DRIVEN_DIST_PREWARNING_EARLY_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der die VEH-Vorwarnung vom Fahrer auf ''früh'' gestellt ist und die Subfunktion VEH im Zustand ''Aktiv'' ist. |
| STAT_URSAF_VEH_DRIVEN_DIST_PREWARNING_MID_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der die VEH-Vorwarnung vom Fahrer auf ''mittel'' gestellt ist und die Subfunktion VEH im Zustand ''Aktiv'' ist. |
| STAT_URSAF_VEH_DRIVEN_DIST_PREWARNING_LATE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die gefahrene Strecke ermittelt wird, in der die VEH-Vorwarnung vom Fahrer auf ''spät'' gestellt ist und die Subfunktion VEH im Zustand ''Aktiv'' ist. |
| STAT_URSAF_VEH_AMNT_PREWARNING_0_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Vorwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 0 km/h und kleiner 60 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_PREWARNING_60_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Vorwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 60 km/h und kleiner 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_PREWARNING_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Vorwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von 00--b auf 01--b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Vorwarnung größer gleich 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_STAT_URSAF_VEH_AMNT_ACUTE_0_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 0 km/h und kleiner 60 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_STAT_URSAF_VEH_AMNT_ACUTE_60_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 60 km/h und kleiner 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_STAT_URSAF_VEH_AMNT_ACUTE_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Akutwarnungen gezählt wird, die dem Fahrer angezeigt werden (d. h., der Wert des Signals WARN_HDWOBS_FCW ändert sich von --00b auf --01b) und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Akutwarnung größer gleich 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_HWY_0_60_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Headwaywarnungen gezählt wird, die dem Fahrer angezeigt werden und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Headwaywarnung größer gleich 0 km/h und kleiner 60 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_HWY_60_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Headwaywarnungen gezählt wird, die dem Fahrer angezeigt werden und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Headwaywarnung größer gleich 60 km/h und kleiner 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_HWY_100_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Headwaywarnungen gezählt wird, die dem Fahrer angezeigt werden und bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Headwaywarnung größer gleich 100 km/h ist. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_PREFILLS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der auf Ethernet angeforderten VEH-Bremsenvorbefüllungen (d.h., der Wert des Signals FCW_TAR_RDUC_AICL_THRV_BRAS ändert sich von 01b auf 10b) gezählt wird. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_BRAKE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen gezählt wird. Für jeden Anforderungszeitraum ist der Counter nur einmal hochzuzählen. |
| STAT_URSAF_VEH_AMNT_BRAKE_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 0 km/h und kleiner 20 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_VEH_AMNT_BRAKE_20_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 20 km/h und kleiner 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_VEH_AMNT_BRAKE_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen gezählt wird, bei denen die Geschwindigkeit des Egofahrzeugs zu Bremsbeginn größer gleich 50 km/h ist und bei denen die Länge der Bremsanforderung mindestens 400 ms ist. |
| STAT_URSAF_VEH_AMNT_BRAKE_MAX_0_20_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 0 km/h und kleiner 20 km/h ist. |
| STAT_URSAF_VEH_AMNT_BRAKE_MAX_20_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 20 km/h und kleiner 50 km/h ist. |
| STAT_URSAF_VEH_AMNT_BRAKE_MAX_50_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem die Anzahl der VEH-Bremsanforderungen mit Vollverzögerung gezählt wird (d.h., die angeforderte Verzögerung erreicht einen Wert kleiner gleich -8 m/s*s), bei denen die Geschwindigkeit des Egofahrzeugs zu Beginn der Anforderung größer gleich 50 km/h. |
| STAT_URSAF_VEH_TIME_BRAKE_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Kenngröße wird bestimmt, indem Datum und Uhrzeit der letzten Bremsanforderung durch die Subfunktion VEH gespeichert wird (yyyymmddhhmmss). |

### RES_0X4017_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_LEFT_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CAM_RIGHT_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 |   |
| STAT_GOLDDUST_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 |   |
| STAT_FPGA_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_DSP_1_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_DSP_2_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Returns the temperature of the DSP_2 in the ECU. For ECU`s with Vision High this Argument shouldn`t be used. |
| STAT_CAM_LEFT_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CAM_RIGHT_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_GOLDDUST_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FPGA_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_DSP_1_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_DSP_2_THRES_WERT | °C | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_CURRENT_MODE_OF_OPERATION | 0-n | high | unsigned char | - | MODE_OF_OPERATION | - | - | - | Normal = 1 Overtemp-Cooling requested = 2 Overtemp-Application disabled = 3 |

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UIVERSIONNUMBER_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | uiVersionnummer |
| STAT_ALGOCONFIG_MONO_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ALGOCONFIG_STEREO_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HILMODE_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X4032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCKAGE | 0-n | high | unsigned char | - | BLOCKAGE_STATUS | - | - | - | Status Blockage |
| STAT_WEATHER_CONDITION | 0-n | high | unsigned char | - | WEATHER_CONDITON | - | - | - | - |
| STAT_BRIGTHNESS_CONDITION | 0-n | high | unsigned char | - | BRIGTHNESS_CONDITION | - | - | - | - |
| STAT_HEATER_ACTIVATION | 0-n | high | unsigned char | - | STANDARD_ON_OFF_NA | - | - | - | - |

### RES_0X4033_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DQ_DEGRADE_OD_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Gibt an wie lange die Object Detection wg. DQ-Gründen degradiert war (relativ zur Gesamtbetriebszeit) English: This value specifies the relative time that object detection was degraded because of DQ-reasons (relative to the whole vehicle operation time). |
| STAT_DQ_DEGRADE_FSD_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Gibt an wie lange die Freespace Detection wg. DQ-Gründen degradiert war (relativ zur Gesamtbetriebszeit) English: This value specifies the relative time that freespace detection was degraded because of DQ-reasons (relative to the whole vehicle operation time). |
| STAT_DQ_DEGRADE_LBD_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Gibt an wie lange die Lane Boundary Detection wg. DQ-Gründen degradiert war (relativ zur Gesamtbetriebszeit) English: This value specifies the relative time that lane boundary detection was degraded because of DQ-reasons (relative to the whole vehicle operation time). |
| STAT_DQ_US_CC_MESSAGES_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Deutsch: Gibt die Anzahl aller aus DQ-Gründen durch Urban Safety abgesetzten CC-Meldungen an. English: Specifies the amount of CC-Messages issued by Urban safety because of DQ-reasons. |
| STAT_DQ_FLA_CC_MESSAGES_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Deutsch: Gibt die Anzahl aller aus DQ-Gründen durch FLA/HLA abgesetzten CC-Meldungen an. English: Specifies the amount of CC-Messages issued by FLA/HLA because of DQ-reasons. |
| STAT__DQ_REASON_UNKNOWN_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld im Zustand  Unkown  war.  |
| STAT__DQ_REASON_NO_BLOCKAGE_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld frei war.  |
| STAT__DQ_REASON_PARTIAL_BLOCKAGE_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld teilweise blockiert war.  |
| STAT__DQ_REASON_FULL_BLOCKAGE_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld komplett blockiert war.  |
| STAT__DQ_REASON_CONDENSATION_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld durch Kondensation gestört war.  |
| STAT__DQ_REASON_RAIN_SNOW_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld durch Regen oder Schnee gestört war.  |
| STAT__DQ_REASON_FOG_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld durch Nebel gestört war.  |
| STAT__DQ_REASON_SUN_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozent der Gesamtbetriebszeit in der das Sichfeld durch Sonne gestört war.  |
| STAT__GLOBAL_ILLUMINATION_DAY_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozentualer Anteil der Gesamtbetriebsdauer des Fahrzeuges am Tag.  |
| STAT__GLOBAL_ILLUMINATION_NIGHT_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozentualer Anteil der Gesamtbetriebsdauer des Fahrzeuges in der Nacht.  |
| STAT__GLOBAL_ILLUMINATION_TWIGHLIGHT_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | Deutsch: Prozentualer Anteil der Gesamtbetriebsdauer des Fahrzeuges in der Dämmerung.  |

### RES_0X403E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LBD_DRIV_TOTAL_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktiviertem Lane Boundary Detection Algorithmus.  Zähler-Aktivierungsbedingungen: eventDataQualifier = 0x00 |
| STAT_LBD_DRIV_LEFT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken Ego-Fahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND  (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) |
| STAT_LBD_DRIV_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger rechten Ego-Fahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) |
| STAT_LBD_DRIV_LEFT_ADJACENT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken Nachbarfahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND (laneBoundaryFront[2].modelQualifier == 0x00 OR laneBoundaryFront[2].modelQualifier == 0x01) |
| STAT_LBD_DRIV_RIGHT_ADJACENT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger rechten Nachbarfahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND (laneBoundaryFront[3].modelQualifier == 0x00 OR laneBoundaryFront[3].modelQualifier == 0x01) |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) XOR (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND  ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) AND (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_AVAIL_LESS_EQUAL_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich 0-70 km/h.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND  ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) XOR (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) AND v_ego less_equal 70 km/h |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_AVAIL_LESS_EQUAL_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich 0-70 km/h.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) AND (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) AND v_ego less_equal 70 km/h |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_GREATER_THAN_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich größer 70 km/h.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND  ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) XOR (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) AND v_ego greater 70 km/h |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_GREATER_THAN_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich größer 70 km/h.  Zähler-Aktivierungsbedingungen: eventDataQualifier == 0x00 AND ( (laneBoundaryFront[0].modelQualifier == 0x00 OR laneBoundaryFront[0].modelQualifier == 0x01) AND (laneBoundaryFront[1].modelQualifier == 0x00 OR laneBoundaryFront[1].modelQualifier == 0x01) ) AND v_ego greater 70 km/h |
| STAT_LBD_DRIV_CS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrende Kilometer mit detektierter Baustelle.  Zähler-Aktivierungsbedingungen: eventDataQualifier = 0x00 AND laneRecognitionFront.routing = 0x03 |

### RES_0X4048_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEM_EVENTID_1_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_1_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_2_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_2_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_3_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_3_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_4_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_4_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_5_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_5_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_6_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_6_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_7_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_7_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_8_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_8_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_9_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_9_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_10_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_10_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_11_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_11_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_12_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_12_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_13_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_13_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_14_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_14_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_15_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_15_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_16_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_16_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_17_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_17_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_18_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_18_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_19_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_19_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_20_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_20_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_21_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_21_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_22_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_22_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_23_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_23_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_24_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_24_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_25_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_25_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_26_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_26_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_27_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_27_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_28_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_28_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_29_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_29_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_30_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM_EventId |
| STAT_DEM_EVENTSTATUS_30_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DEM Event Status  |
| STAT_DEM_EVENTID_31_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_31_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_32_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_32_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_33_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_33_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_34_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_34_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_35_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_35_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_36_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_36_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_37_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_37_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_38_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_38_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_39_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_39_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_40_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_40_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_41_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_41_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_42_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_42_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_43_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_43_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_44_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_44_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_45_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_45_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_46_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_46_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_47_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_47_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_48_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_48_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_49_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_49_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_DEM_EVENTID_50_WERT | HEX | high | unsigned int | - | - | - | - | - | DEM_EventId |
| STAT_DEM_EVENTSTATUS_50_WERT | HEX | high | unsigned char | - | - | - | - | - | DEM Event Status  |
| STAT_GOLDDUST_SW_VERSION_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Golddust SW version  |
| STAT_DEM_THE_MAGIC_NUMBER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DEM THE MAGIC NUMBER  |
| STAT_DEM_EIL_MASTER_VERSION_NUMBER_WERT | HEX | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DEM EIL MASTER VERSION NUMBER |

### RES_0X404A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCKAGE | 0-n | high | unsigned char | - | BLOCKAGE_STATUS | - | - | - | Status Blockage |
| STAT_WEATHER_CONDITION | 0-n | high | unsigned char | - | WEATHER_CONDITON | - | - | - | - |
| STAT_BRIGTHNESS_CONDITION | 0-n | high | unsigned char | - | BRIGTHNESS_CONDITION | - | - | - | - |
| STAT_HEATER_ACTIVATION | 0-n | high | unsigned char | - | STANDARD_ON_OFF_NA | - | - | - | - |

### RES_0X404B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCKAGE | 0-n | high | unsigned char | - | BLOCKAGE_STATUS | - | - | - | Status Blockage |
| STAT_WEATHER_CONDITION | 0-n | high | unsigned char | - | WEATHER_CONDITON | - | - | - | - |
| STAT_BRIGTHNESS_CONDITION | 0-n | high | unsigned char | - | BRIGTHNESS_CONDITION | - | - | - | - |
| STAT_HEATER_ACTIVATION | 0-n | high | unsigned char | - | STANDARD_ON_OFF_NA | - | - | - | - |

### RES_0X404D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_1_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_2_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_3_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_4_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_5_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_6_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_7_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_8_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_9_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_10_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_11_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_12_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_13_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_14_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_15_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_16_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_17_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_18_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_19_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_20_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_21_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_22_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_23_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_24_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_25_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_26_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_27_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_28_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_29_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_30_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_31_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_32_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_33_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_34_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_35_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_36_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_37_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_38_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_39_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_40_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_41_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_42_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_43_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_44_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_45_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_46_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_47_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_48_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_49_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_50_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_51_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_52_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_53_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_54_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_55_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_56_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_57_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_58_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_59_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_60_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_61_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_62_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_63_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_64_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_65_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_66_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_67_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_68_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_69_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_70_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_71_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_72_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_73_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_74_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_75_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_76_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_77_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_78_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_79_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_80_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_81_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_82_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_83_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_84_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_85_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_86_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_87_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_88_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_89_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_90_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_91_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_92_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_93_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_94_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_95_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_96_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_97_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_98_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_99_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_100_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_101_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_102_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_103_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_104_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_105_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_106_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_107_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_108_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_109_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_110_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_111_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |
| STAT_CALIB_SAC_WINDSHIELD_MODEL_DATA_112_WERT | HEX | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Abrufen Hex-String |

### RES_0X4050_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB_MAC_FIRST_DIST_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persistente Wert beschreibt die gefahrene Distanz die vom Auslieferungszustand bis zum erstmaligen Freischalten aller Funktionen benötigt wird. Freischalten bedeutet, dass die Qualität der Kalibrierung ausreicht damit die Funtionen ihren normalen Arbeitszustand einnehmen in der sie ihre eigenen KPI' ereichen können.  |
| STAT_CALIB_SAC_CORASE_MODE_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der Zustand der Grobkalibrierung eingetreten ist. In diesem Zustand sind die Funktionen nur eingeschränkt verfügbar. Jeder Wechsel in die Grobkalibrierung inkrementiert den Wert um eins.  (ACHTUNG: Der Selbstest nach jedem Startvorgang wird nicht mitgezählt)   |
| STAT_CALIB_SAC_TEST_DIST_BIN0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Selbsttest innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN0 = [0 - 100m] |
| STAT_CALIB_SAC_TEST_DIST_BIN1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Selbsttest innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN1 = [100 - 300m] |
| STAT_CALIB_SAC_TEST_DIST_BIN2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Selbsttest innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN2 = [300 - 500m] |
| STAT_CALIB_SAC_TEST_DIST_BIN3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Selbsttest innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN3 = [500m +] |
| STAT_CALIB_SAC_CORASE_DIST_BIN0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Grobkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN0 = [0 - 500m] |
| STAT_CALIB_SAC_CORASE_DIST_BIN1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Grobkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN1 = [500 - 1000m] |
| STAT_CALIB_SAC_CORASE_DIST_BIN2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Grobkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN2 = [1000 - 1500m] |
| STAT_CALIB_SAC_CORASE_DIST_BIN3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Grobkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN3 = [+1500m] |
| STAT_CALIB_SAC_FINE_DIST_BIN0_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Feinkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN0= [0-2000m] |
| STAT_CALIB_SAC_FINE_DIST_BIN1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Feinkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN1= [2000-4000m] |
| STAT_CALIB_SAC_FINE_DIST_BIN2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Feinkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN2= [4000-6000m] |
| STAT_CALIB_SAC_FINE_DIST_BIN3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Der persitente Wert beschreibt wie oft der SAC Zustand Feinkalibrierung innnerhalb folgender Distanzgrenzen  abgeschlossen werden konnte:   BIN3= [+ 6000m] |

### RES_0X4061_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEE_BANK0_COUNTER_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FEE_BANK1_COUNTER_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FEE_BANK2_COUNTER_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FEE_BANK3_COUNTER_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FEE_BANK_COUNTER_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X4071_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOC_CRASH_DUMP_1_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Wiederabrufen der SOC Daten |
| STAT_SOC_CRASH_DUMP_2_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Wiederabrufen der SOC Daten |
| STAT_SOC_CRASH_DUMP_3_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Wiederabrufen der SOC Daten |

### RES_0X40A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LAST_EXECUTION_DURATION |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_EXECUTIONS |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_INPUTFAULTS |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_LOGICFAULTS |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MINOR_VERSION |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MAJOR_VERSION |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FIX_VERSION |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | CALCULATION_ERROR 0 = False 1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | INPUT_DATA_RECEIVED 0 = False 1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_INPUT_DATA |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_OUTPUT_DATA |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_RECEIVED 0 = False 1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_VALID 0 = False 1 = True |

### RES_0X40A2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LAST_EXECUTION_DURATION |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_EXECUTIONS |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_INPUTFAULTS |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_LOGICFAULTS |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MAJOR_VERSION |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MINOR_VERSION |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FIX_VERSION |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | CALCULATION_ERROR 0 = False 1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | INPUT_DATA_RECEIVED 0 = False 1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_INPUT_DATA |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_OUTPUT_DATA |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_RECEIVED 0 = False 1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_VALID 0 = False 1 = True |

### RES_0X40A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LAST_EXECUTION_DURATION |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_EXECUTIONS |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_INPUTFAULTS |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_LOGICFAULTS |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MAJOR_VERSION |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MINOR_VERSION |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FIX_VERSION |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | CALCULATION_ERROR 0 = False 1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | INPUT_DATA_RECEIVED 0 = False 1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_INPUT_DATA |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_OUTPUT_DATA |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_RECEIVED 0 = False 1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_VALID 0 = False 1 = True |

### RES_0X40A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LAST_EXECUTION_DURATION |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_EXECUTIONS |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_INPUTFAULTS |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_LOGICFAULTS |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MAJOR_VERSION |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MINOR_VERSION |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FIX_VERSION |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | CALCULATION_ERROR 0 = False 1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | INPUT_DATA_RECEIVED 0 = False 1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_INPUT_DATA |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_OUTPUT_DATA |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_RECEIVED 0 = False 1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_VALID 0 = False 1 = True |

### RES_0X40B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | LAST_EXECUTION_DURATION |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_EXECUTIONS |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_INPUTFAULTS |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | NUMBER_OF_LOGICFAULTS |
| STAT_VERSION_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | VERSION |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | CALCULATION_ERROR 0 = False 1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | INPUT_DATA_RECEIVED 0 = False 1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_INPUT_DATA |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | VALID_OUTPUT_DATA |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_RECEIVED 0 = False 1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | CODING_DATA_VALID 0 = False 1 = True |

### RES_0X4116_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_RDUC_AICL_THRV_BRAS_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Setzen des Ausgangssignals NUM_RDUC_AICL_THRV_BRAS; Anzahl prefill-Anforderungen (Luftspielreduktion der Bremsanlage) |
| STAT_NUM_RDUC_THRV_BRAS_VFW_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Setzen des Ausgangssignals NUM_RDUC_THRV_BRAS_VFW; Anzahl HBA-Anpassung (Absenkung der Eingriffsschwelle des Bremsassistenten) |
| STAT_DRIVEN_DIST_ADV_WARN_EARLY_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DRIVEN_DIST_ADV_WARN_EARLY: gefahrene Strecke mit Vorwarnstufe früh |
| STAT_DRIVEN_DIST_ADV_WARN_MID_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DRIVEN_DIST_ADV_WARN_MID: gefahrene Strecke mit Vorwarnstufe mittel |
| STAT_DRIVEN_DIST_ADV_WARN_LATE_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DRIVEN_DIST_ADV_WARN_LATE gefahrene Strecke mit Vorwarnstufe spät |
| STAT_DRIVEN_DIST_VFW_OFF_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DRIVEN_DIST_VFW_OFF gefahrene Strecke mit inaktiver Funktion VFW |
| STAT_NUM_ADV_WARN_GIVEWAY_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NUM_ADV_WARN_GIVEWAY: Anzahl Vorwarnungen auf Vorfahrt achten Schild |
| STAT_NUM_ADV_WARN_REDLIGHT_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NUM_ADV_WARN_REDLIGHT: Anzahl Vorwarnungen auf rote Ampel |
| STAT_NUM_ADV_WARN_STOPSIGN_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NUM_ADV_WARN_STOPSIGN: Anzahl Vorwarnungen auf Stoppschild |
| STAT_NUM_WARNINGS_OFFROAD_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_NUM_WARNINGS_OFFROAD: Anzahl Warnungen ohne EHR (unkartierte Gebiete, Tiefgaragen, Parkplätze, ...) |
| STAT_NUM_WARNINGS_OUTSIDE_SPEED_RANGE_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | STAT_NUM_WARNINGS_OUTSIDE_SPEED_RANGE: Anzahl theoretischer Warnungen außerhalb des Aktivierungsintervalls |
| STAT_NUM_AMBIGUOUS_SITUATIONS_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NUM_AMBIGUOUS_SITUATIONS: Anzahl von Situationen, wo aufgrund einer Nichteindeutigkeit nicht gewarnt werden konnte (z.B. keine eindeutige Zuordnung einer Ampel zu einer Fahrspur möglich) |
| STAT_NUM_NOT_PLAUSIBLE_IP_EVENTS_WERT | count | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NUM_NOT_PLAUSIBLE_IP_EVENTS: Anzahl von Bildverarbeitungsevents, die nicht plausibilisiert bzw. einer Situation zugeordnet werden konnten. |

### RES_0XD341_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_ENTGEGENKOMMENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein entgegenkommendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_VORAUSFAHRENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein vorausfahrendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_GESCHWINDIGKEITSLIMIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob die Geschwindigkeit unterhalb der Grenze erkannt worden ist:  0 = Geschwindigkeit oberhalb der Schwelle, Fernlicht wird eingeschaltet,  1 = Geschwindigkeit unterhalb der Schwelle, Fernlicht wird abgeschaltet |
| STAT_FLA_UMGEBUNGSHELLIGKEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Umgebungshelligkeit (Tag) erkannt worden ist:  0 = kein Helligkeit (Nacht) erkannt,  1 = Helligkeit (Tag) erkannt |
| STAT_FLA_ORTSCHAFTSERKENNUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob eine ausreichende Beleuchtung erkannt worden ist:  0 = keine ausreichende Beleuchtung erkannt,  1 = ausreichende Beleuchtung erkannt |
| STAT_FLA_NEBELERKENNUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Nebel erkannt worden ist:  0 = kein Nebel,  1 = Nebel erkannt |
| STAT_FLA_AUTOBAHNMODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob Autobahn erkannt worden ist:  0 = keine Autobahn,  1 = Autobahn erkannt |
| STAT_FLA_VERZOEGERUNGSZEIT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob wegen einer Zeiterzögerung das Fernlicht nicht eingeschaltet wird:  0 = keine Zeitverzögerung,  1 = Zeitverzögerung |
| STAT_FLA_TUNNEL | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob Tunnel erkannt worden ist: 0 = kein Tunnel erkannt 1 = Tunnel erkannt |
| STAT_FLA_BLOCKAGE | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob eine Verschmutzung der Kamera erkannt worden ist:  0 = Verschmutzung nicht erkannt 1 = Verschmutzung erkannt |
| STAT_FLA_FAHRZEUGRICHTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Gibt die erkannte Verkehrsrichtung aus:  0 = Rechtslenkerverkehr 1 = Linkslenkerverkehr |
| STAT_FLA_FAILSAFE | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob sich die Kamera im Fail Save Mode befindet: 0 = normal mode, 1 = fail safe mode |

### RES_0XD374_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_TLC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Time-to-Line Crossing vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_FLA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Fernlichtassistent vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_SLI | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Speed-Limit-Info vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_NPI | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion NoPassing-Info vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_FCW | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Forward-Collision-Warning vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_PED | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob die Funktion Pedistrian Recognition (Fußgängererkennung) vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_WWA | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die WWA (Wrong Way Assist) vorhanden ist: 0= nicht vorhanden; 1= vorhanden |
| STAT_VORHANDEN_VFA | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die Funktion VFA (Vorfahrtswarner) vorhanden ist: 0= nicht vorhanden; 1= vorhanden |

### RES_0XD3AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAMERA_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_KAMERA | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen von der Kamera erkannt wurde:  Results siehe TAB_ZEICHEN_KAMERA |
| STAT_KAMERA_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit in den Zeichen erkannt wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_KARTE_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_KARTE | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen aus der Karte gelesen wurde:  Results siehe TAB_ZEICHEN_KARTE |
| STAT_KARTE_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit aus der Karte gelesen wurde: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. |
| STAT_FUSIONIERT_ZEICHEN_NR | 0-n | - | unsigned char | - | TAB_ZEICHEN_FUSIONIERT | 1.0 | 1.0 | 0.0 | Gibt aus, welches Zeichen aus den fusioniertem Erkennungsergebnis ausgegeben wird: Results siehe TAB_ZEICHEN_FUSIONIERT |
| STAT_FUSIONIERT_GESCHWINDIGKEIT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, welche Geschwindigkeit aus dem fusionierten Erkennungsergebnis ausgegeben wird: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten |
| STAT_GUETE_KAM_SLI_GESCHW_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, mit welcher Güte das Beschränkungs- und Aufhebungszeichen für Geschwindigkeiten mit der Kamera erkannt wurde: 0 - 100 |

### RES_0XD3AD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CONTROL_MAINBEAM_FLA | 0-n | - | unsigned char | - | TAB_FLA_EMPFEHLUNG | - | - | - | Schaltempfehlung 2-stufiger FLA:  0 = Keine Emfehlung (Defekt erkannt, Sichtfeld verdreckt), 1 = Fernlicht AUS, 2 = Fernlicht EIN |
| STAT_GFA_OBJECT_RANGE_WERT | m | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Entfernung zum Objekt |
| STAT_GFA_RIGHT_BOUNDARY_WERT | ° | - | unsigned char | - | - | 1.0 | 10.0 | -15.0 | Rechte Grenze des blendfreien Bereiches |
| STAT_GFA_LEFT_BOUNDARY_WERT | ° | - | unsigned char | - | - | 1.0 | 10.0 | -10.4 | Linke Grenze des blendfreien Bereiches |
| STAT_GFA_LOWER_BOUNDARY_WERT | ° | - | unsigned char | - | - | 1.0 | 20.0 | -5.0 | Untere Grenze des blendfreien Bereichs |

### RES_0XD3CD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAFAS_HEIZUNG | 0-n | high | unsigned char | - | TAB_STATUS_SCHEIBENHEIZUNG | - | - | - | KAFAS-Heizung: Siehe Tabelle TAB_STATUS_SCHEIBENHEIZUNG |

### RES_0XD3DB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAC | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG_MONO | - | - | - | Status der aktuelle Kalibrierung. Siehe Tabelle TAB_KALIBRIERUNG_MONO |
| STAT_NICK_MAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Nickwinkel |
| STAT_YAW_MAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gierwinkel |
| STAT_ROLL_MAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rollwinkel |
| STAT_NICK_MAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Nickwinkel |
| STAT_YAW_MAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Gierwinkel |
| STAT_ROLL_MAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Rollwinkel |
| STAT_ERROR_CODE_MAC_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Weitere Details zu den Fehler bei MAC. |
| STAT_MAC_FIRST_DIST_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | The persistent value represents the driven distance which is necessary from plant until the first enabling of all functions. Enabling means that the quality of calibration is high enough that all functions are able to operate normally so that they can reach their own KPI's.    |

### RES_0XD3DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SAC | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG_STEREO | - | - | - | Status der aktuelle Kalibrierung. Siehe Tabelle TAB_KALIBRIERUNG_STEREO |
| STAT_NICK_SAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Nickwinkel |
| STAT_YAW_SAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gierwinkel |
| STAT_ROLL_SAC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Rollwinkel |
| STAT_NICK_SAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Nickwinkel |
| STAT_YAW_SAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Gierwinkel |
| STAT_ROLL_SAC_QUAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Qualität Rollwinkel |
| STAT_IMAGER_TEMP_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Sensortemperatur |
| STAT_MAX_DEV_LANE_SEMO | 0-n | high | unsigned char | - | TAB_MAX_DEV_LANE_SEMO | - | - | - | Text Siehe Tabelle TAB_MAX_DEV_LANE_SEMO |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB_STATUS | - | - | + | 0-n | high | signed long | - | _TAB_CALIB_STATUS | - | - | - | result of the automatic target calibration |
| STAT_BRIGHTNESS | - | - | + | 0-n | high | signed long | - | - | - | - | - | Brightness In the ROI where the target is expected to be |
| STAT_CONTRAST | - | - | + | 0-n | high | signed long | - | - | - | - | - | Contrast in the ROI where the target is expected to be |
| STAT_MARKERS | - | - | + | 0-n | high | signed long | - | - | - | - | - | Number of recognized pattern markers |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTRY_CODE_WERT | - | + | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert des Ländercodes |

### RES_0XF005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EVENT_STATUS_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ODOMETER_FIRST_OCCURANCE_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ODOMETER_LAST_OCCURANCE_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREQUENCY_COUNTER_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_OPERATION_CYCLE_COUNTER_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_FREEZE_FRAME_INFORMATION_DATA | + | - | - | DATA | high | data[60] | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XF006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IMAGE_WIDTH_WERT | + | - | - | HEX | high | signed int | - | - | - | - | - | - |
| STAT_IMAGE_HEIGHT_WERT | + | - | - | HEX | high | signed int | - | - | - | - | - | - |

### RES_0XF009_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IOB_DATA | + | - | - | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | Aquire image |

### RES_0XF00A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DQ_DEBUG_SENDING | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_DQ_DEBUG_DATA_SENDING | - | - | - | Status if the DQ-relevant Debug-Messages are currently being send or not. |

### RES_0XF015_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEMO_MODE_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| STEUERN_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | high | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LDW_STEUERN_ANZEIGE_KOMBI | 0xA37C | - | Ansteuerung der Anzeige im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xA37C_D | - |
| ABSCHALTGRUND_FERNLICHT | 0xD341 | - | Abschaltgründe für Fernlicht. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD341_D |
| KONFIGURATION_KAFAS | 0xD374 | - | Ausgabe der Ausstattung von KAFAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD374_D |
| LDW_VIBRATION | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD399_D | - |
| DEMO_MODE_FLA | 0xD3A6 | - | Demo-Mode für Fernlichtassisten ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A6_D | - |
| STEUERN_ANZEIGE_KOMBI_SLI | 0xD3A9 | - | Ansteuerung der Anzeige für Verkehrzeichenerkennung im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A9_D | - |
| ERGEBNIS_SLI | 0xD3AA | - | Ausgabe des Ergebnis der Verkehrzeichenerkennung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3AA_D |
| STEUERN_METHODE_SLI | 0xD3AB | - | Gibt vor, welche Methode bei der Speed-Limit-Info abgewendet werden soll. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AB_D | - |
| EMPFEHLUNG_FLA_STFLA | 0xD3AD | - | Empfehlung vom Fernlichtassisten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3AD_D | RES_0xD3AD_D |
| AUTOKALIBRIERUNG_KAFAS | 0xD3BD | - | Autokalibrierung der KAFAS-Kamera | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3BD_D | - |
| KAFAS_SCHEIBENHEIZUNG | 0xD3CD | - | KAFAS-Scheibeheizung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3CD_D | RES_0xD3CD_D |
| KALIBRIERUNG_MONO | 0xD3DB | - | Status, Qualität und Kalibrierung Monokamera (im Stereosystem die rechte Kamera) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3DB_D |
| KALIBRIERUNG_STEREO | 0xD3DC | - | Status, Qualität und Kalibrierung der Stereokamera (Ausrichtung der linken Kamera zur rechten Kamera) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3DC_D |
| SPANNUNG_KLEMME_15N_WERT | 0xDAD2 | STAT_SPANNUNG_KLEMME_15N_WERT | Spannungswert am Steuergerät an Klemme 15N (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| FASTA_FLA_DATA | 0x4001 | - | FASTA_FLA_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |
| _KAFAS_ECU_DATA | 0x4002 | - | _KAFAS_ECU_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002_D |
| _KAFAS_LDW_DATA | 0x4003 | - | _KAFAS_LDW_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003_D |
| FASTA_OBJ_DATA | 0x4004 | - | FASTA_OBJ_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| _KAFAS_SLI_DATA | 0x4005 | - | _KAFAS_SLI_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| FASTA_FLA_LOESCHEN | 0x4006 | - | FASTA_FLA_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006_D | - |
| _STATUS_CALIB_ECM_DATA | 0x4007 | - | Dieser Job liest die interne CONTI NVM Struktur EcmRteNvm_t in einem HEX-Block. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| _CALIB_SAC_STATISTIC_DATA | 0x4008 | - | Conti intern NVM Struktur lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008_D |
| _CALIB_SAC_TEMP_MODEL_DATA | 0x4009 | - | This Job reads (service 0x22) / and writes (service 0x2E) the internal CONTI NMVstructure   sNvAngleData in one HEX Block. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4009_D |
| _CALIB_SAC_LAST_CALIB_DATA | 0x400A | - | This Job reads (service 0x22) / and writes (service 0x2E) part od the  internal CONTI NMVstructure   SacRteNvm_t  in one HEX Block.  Here the order:  those values : uiVersionNumber sSignalHeader fTemperature  and additional those structs:  sStereoCalibrationState sExtrinsicCalibrationLastResult  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| _CALIB_MAC_LANE_DATA | 0x400B | - | This Job reads (service 0x22) / and writes (service 0x2E) the internal CONTI NMVstructure  NVM_LdOnlineCaliData in one HEX Block. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400B_D |
| _CALIB_MAC_SEMO | 0x400C | - | This Job reads (service 0x22) / and writes (service 0x2E) the internal CONTI NMVstructure   EmoDataNVM in one HEX Block. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400C_D |
| FASTA_URSAF_DATA | 0x400D | STAT_URSAF_DEACT_WERT | Die Kenngröße wird bestimmt, indem die Anzahl der Abschaltungen der Funktion Urban Safety durch den Fahrer gezählt wird (Statuswechsel der Aktivierung durch SARAH-All-Off-Betätigung). | Counts | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_PED_DATA | 0x4010 | - | FASTA_PED_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| FASTA_VEH_DATA | 0x4011 | - | FASTA_VEH_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| _READ_ECU_TEMP | 0x4017 | - | This job reads out all of the temperature sensors.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4017_D |
| _KAFAS_ECU_ALGO_CLUSTERS | 0x4019 | - | - | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4019_D | RES_0x4019_D |
| _STEUERN_DETECTION_QUALIFIER_OUTPUT_ZUSTAND | 0x4030 | - | Dieser Diagnose-Job soll den Detection Qulaifier Ausgangs-Zustand für die jeweilige Erkennungsfunktion (z.B. Sign-Detection, Object detection, etc.) setzen um die funktionale Reaktionskette der Kundenfunktionen testen zu können.   | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4030_D | - |
| _STATUS_DETECTION_QUALIFIER_FREISICHT_FOV_STEREO | 0x4032 | - | Dieser Diagnose-Job soll Rückmeldung über den Status der Freisichtmessung des Kamerasichtfeldes geben. Dies wird für die Testvorbereitung von z. B. Euro-NCAP benötigt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4032_D |
| FASTA_DATA_DETECTION_QUALIFIER | 0x4033 | - | Dieser Diagnose Job soll die definierten (sh. Abschnitt FASTA-Data unten) und gespeicherten FASTA-Werte für DQ auslesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4033_D |
| _AUSGABE_FCW | 0x4036 | - | Dieser Job muss die Vor -und Akutwarnung, HBA-Umparametrisierung und Prefill für die Fahrzeugwarnung triggern. Wenn eine Warnung nicht durch den Parameter  0 = Aus  dieses Jobs abgeschaltet wird, soll sie spätestens nach 10 Sekunden automatisch abgeschaltet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4036_D | - |
| _AUSGABE_OBJ | 0x4037 | - | Dieser Job muss die Vor -und Akutwarnung, HBA-Umparametrisierung, Prefill, PreRun und die Generatoransteuerung für die Reaktion auf Objekte triggern. Wenn die Kundenfunktionen nicht durch die Parameter  0 = Aus  dieses Jobs abgeschaltet werden, sollen sie spätestens nach 10 Sekunden automatisch abgeschaltet werden.  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4037_D | - |
| _AUSGABE_PFGS | 0x4038 | - | Dieser Job muss die Vor -und Akutwarnung, HBA-Umparametrisierung, Prefill, PreRun und die Generatoransteuerung für die Reaktion auf Fußgänger triggern. Wenn die Kundenfunktionen nicht durch die Parameter  0 = Aus  dieses Jobs abgeschaltet werden, sollen sie spätestens nach 10 Sekunden automatisch abgeschaltet werden.  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4038_D | - |
| _AUSGABE_CC_MELDUNGEN_FCW_PFGS | 0x4039 | - |  Dieser Job muss die CC-Meldungen der Fahrzeugwarnung und Fußgängerwarnung triggern. Wenn die Ausgabe der CC-Meldungen nicht durch den Parameter  0 = Aus  dieses Jobs abgeschaltet werden, soll sie spätestens nach 20 Sekunden automatisch abgeschaltet werden.  Typ: 0 = Aus 1 = Sende die in CCM_VIS_FCW beschriebene CC-Meldung 2 = Sende die in CCM_VIS_PFGS beschriebene CC-Meldung 3 = Sende die in CCM_VIS_FCW und CCM_VIS_PFGS  beschriebenen CC-Meldungen gleichzeitig 4 = Sende die in CCM_ERR_FCW beschriebene CC-Meldung 5 = Sende die in CCM_ERR_PFGS beschriebene CC-Meldung 6 = Sende die in CCM_ERR_FCW und CCM_ERR_PFGS  beschriebenen CC-Meldungen gleichzeitig 7 = Sende die in CCM_RDC_FCN_BRK beschriebene CC-Meldung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4039_D | - |
| _KAFAS_ECU_SERIALNUMBER_CONTINENTALFORMAT | 0x403A | STAT_CONTI_SN_DATA | - | DATA | CONTI_SERIAL_NUMBER | high | data[26] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LBD_DATA | 0x403E | - | Liest die gespeicherten FASTA Werte (Verfügbarkeitsraten) für die Lane Boundary Detection (LBD) aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403E_D |
| FASTA_LBD_LOESCHEN | 0x403F | - | Löscht die FASTA Werte der  Lane Boundary Detection (LBD). | - | - | - | - | - | - | - | - | - | 2E | ARG_0x403F_D | - |
| FASTA_LDW_LOESCHEN | 0x4047 | - | _FASTA_LDW_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4047_D | - |
| _CONTI_ERRORMEMORY_INTERN | 0x4048 | - | Dieser Service liest den internen Fehlerspeichen aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048_D |
| _STATUS_IOB_STATE | 0x4049 | STAT_IOB_STATE | - | 0-n | - | high | unsigned char | STAT_IOB_STATE | - | - | - | - | 22 | - | - |
| _STATUS_DETECTION_QUALIFIER_FREISICHT_FOV_MONO_LEFT | 0x404A | - | Dieser Diagnose-Job soll Rückmeldung über den Status der Freisichtmessung des Kamerasichtfeldes geben. Dies wird für die Testvorbereitung von z. B. Euro-NCAP benötigt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404A_D |
| _STATUS_DETECTION_QUALIFIER_FREISICHT_FOV_MONO_RIGHT | 0x404B | - | Dieser Diagnose-Job soll Rückmeldung über den Status der Freisichtmessung des Kamerasichtfeldes geben. Dies wird für die Testvorbereitung von z. B. Euro-NCAP benötigt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404B_D |
| _STATUS_ECU_ACTL_STATE | 0x404C | STAT_ACTL_STATE_WERT | - | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CALIB_SAC_WINDSHIELD_MODEL_DATA | 0x404D | - | SAC's windshield model data sollte während der Laufzeit des SG abrufbar sein | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404D_D |
| _EC_CALIBRATION | 0x404E | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x404E_D | - |
| _PCB_SERIALNUMBER | 0x404F | STAT_PCB_SERIALNUMBER_DATA | PCB Serialnumber | DATA | - | high | data[10] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_CALIB_DATA | 0x4050 | - | Die Kalibrierungs FASTA Zähler müssen über einen Diagnose Job ausgelesen werden können. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4050_D |
| FASTA_OBJ_LOESCHEN | 0x4051 | - | FASTA_OBJ_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4051_D | - |
| FASTA_URSAF_LOESCHEN | 0x4052 | - | FASTA_URSAF_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4052_D | - |
| FASTA_PED_LOESCHEN | 0x4053 | - | FASTA_PED_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4053_D | - |
| FASTA_VEH_LOESCHEN | 0x4055 | - | FASTA_VEH_LOESCHEN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4055_D | - |
| GD_CRASH_DUMP | 0x4060 | STAT_GD_CRASH_DUMP_DATA | GD Crash Dump | DATA | - | high | data[255] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ERASE_CYCLE_COUNTER | 0x4061 | - | NVM / FEE wird ein Löschzähler für jeden Daten-Flash  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4061_D |
| STEUERN_FACTORYMODE | 0x4062 | - | Versetzt KaFAS in einen Fertigungsmodus und deaktiviert alle Funktionen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4062_D | - |
| STATUS_FACTORYMODE | 0x4063 | STAT_FACTORYMODE | Status Factorymode 1=Aktiv, 0= Inaktiv | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| STEUERN_WWA_CCM | 0x4065 | - | Setzt die WWA CCM für 10 Sekunden.  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4065_D | - |
| SOC_CRASH_DUMP_DATA | 0x4070 | STAT_SOC_CRASH_DUMP_1_DATA | Wiederabrufen der SOC Daten | DATA | - | high | data[100] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOC_CRASH_DUMP_DATA_G30 | 0x4071 | - | erlauben das sofortige Wiederabrufen von SOC Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4071_D |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x40A0 | - | This job forces the transmission of an ADAS resync request message which will force the navigation system to resend the ADAS tree. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A0_D | - |
| _UFM_STATUS_ROADASSEMBLY | 0x40A1 | - | UFM_STATUS_ROADASSEMBLY | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A1_D |
| _UFM_STATUS_ELECTRONICHORIZON | 0x40A2 | - | UFM_STATUS_ELECTRONICHORIZON | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A2_D |
| _UFM_STATUS_SLCONDITIONEVALUATOR | 0x40A4 | - | UFM_STATUS_SLCONDITIONEVALUATOR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A4_D |
| _UFM_STATUS_ROADDESCRIPTIONLEGACYCONSTRUCTOR | 0x40A5 | - | UFM_STATUS_ROADDESCRIPTIONLEGACYCONSTRUCTOR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A5_D |
| _UFM_SWITCH_ROADASSEMBLY | 0x40A8 | - | UFM_SWITCH_ROADASSEMBLY | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A8_D | - |
| _UFM_SWITCH_ELECTRONICHORIZON | 0x40A9 | - | UFM_SWITCH_ELECTRONICHORIZON | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A9_D | - |
| _UFM_SWITCH_SLCONDITIONEVALUATOR | 0x40AB | - | UFM_SWITCH_SLCONDITIONEVALUATOR | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40AB_D | - |
| _UFM_SWITCH_ROADDESCRIPTIONLEGACYCONSTRUCTOR | 0x40AC | - | UFM_SWITCH_ROADDESCRIPTIONLEGACYCONSTRUCTOR | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40AC_D | - |
| _UFM_SETDTC_ROADASSEMBLY | 0x40AF | - | UFM_SETDTC_ROADASSEMBLY | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40AF_D | - |
| _UFM_SETDTC_ELECTRONICHORIZON | 0x40B0 | - | UFM_SETDTC_ELECTRONICHORIZON | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B0_D | - |
| _UFM_SETDTC_SLCONDITIONEVALUATOR | 0x40B2 | - | UFM_SETDTC_SLCONDITIONEVALUATOR | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B2_D | - |
| _UFM_SETDTC_ROADDESCRIPTIONLEGACYCONSTRUCTOR | 0x40B3 | - | UFM_SETDTC_ROADDESCRIPTIONLEGACYCONSTRUCTOR | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B3_D | - |
| _SLI_STATUS | 0x40B5 | - | SLI_STATUS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40B5_D |
| _SLI_SWITCH | 0x40B6 | - | SLI_SWITCH | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B6_D | - |
| _SLI_SETDTC | 0x40B7 | - | SLI_SETDTC | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B7_D | - |
| _SLI_NPI_KAMERA_ERKENNUNG | 0x40B8 | - | _SLI_NPI_KAMERA_ERKENNUNG wird simuliert | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B8_D | - |
| _AUSGABE_VFW_WARNUNG | 0x4100 | - | Löst eine Akutwarnung/Vorwarnung beim WBK aus ohne dabei eine Bremsenvorkonditionierung vorzunehmen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4100_D | - |
| _AUSGABE_VFW_WARNANFORDERUNG | 0x4101 | - | löst eine Akut/Vorwarnung und/oder eine Bremsenvorkonditionierung beim WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4101_D | - |
| _AUSGABE_VFW_QUALIFIER | 0x4102 | - | setzt den Qualifier der Funktion QU_FN_VFW für die Zeitspanne definiert durch param2 auf den Wert definiert durch param1 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4102_D | - |
| _AUSGABE_VFW_PREFILL | 0x4103 | - | löst eine prefill-Anforderung beim DSC über die Ausgabe einer Nachricht an den WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4103_D | - |
| _AUSGABE_VFW_HBA | 0x4104 | - | löst eine Absenkung der Eingriffsschwelle des Bremsassistenten über die Ausgabe einer Nachricht an den WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4104_D | - |
| _AUSGABE_VFW_RESYNC_EHR | 0x4105 | - | fordert eine Resynchronisation des EHR bei der HeadUnit an | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4105_D | - |
| _AUSGABE_VFW_COUNTRY_CODE | 0x4106 | - | überschreibt für den aktiven Klemmenzyklus den von der Navigation verschickten ISO-Ländercode | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4106_D | - |
| _AUSGABE_VFW_COUNTRY_CODE_MODE | 0x4107 | - | setzt die Funktionsausprägung für den aktiven Klemmenzyklus für das Land definiert durch den ISO-Ländercode [param1, param2] auf den Wert definiert durch param3. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4107_D | - |
| _AUSGABE_VFW_FAIL_SAFE | 0x4108 | - | versetzt die Funktion in den fail safe bzw. error state. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4108_D | - |
| _AUSGABE_VFW_FMM | 0x4109 | - | (de)aktiviert das Fehlermanagement der Funktion VFW | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4109_D | - |
| FASTA_VFW_LOESCHEN | 0x4110 | - | setzt alle FASTA-Zähler auf ihre Initialwerte zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4110_D | - |
| _AUSGABE_VFW_IP_DEBUG_MODE | 0x4111 | - | (de)aktiviert die Möglichkeit der Funktion einen prefill auszulösen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4111_D | - |
| _AUSGABE_VFW_PREFILL_MODE | 0x4112 | - | (de)aktiviert die Möglichkeit der Funktion einen prefill auszulösen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4112_D | - |
| _AUSGABE_VFW_HBA_MODE | 0x4113 | - | (de)aktiviert die Möglichkeit der Funktion eine HBA Schwellwertanpassung vorzunehmen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4113_D | - |
| _AUSGABE_VFW_ACTIVATION_VEL_LIMITS | 0x4114 | - | setzt jeweils die untere und obere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion auf param1 und param2. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4114_D | - |
| _AUSGABE_VFW_EHR_MODE | 0x4115 | - | deaktiviert den EHR. Die Funktion verhält sich bei Deaktivierung wie offroad, der Ländercode soll jedoch weiterhin verwendet und ausgewertet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4115_D | - |
| FASTA_VFW_DATA | 0x4116 | - | FASTA DATA VFW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4116_D |
| _CALIB_MONO_TARGET_CALIBRATION | 0xF001 | - | This routine will trigger an internal method which calibrates the mono camera with a defined pattern in front of the car. The parameter yaw, roll, pitch were calculated. After a valid calibration the values has to be used from all functions. The values were written persistent in the ECU. This Job needs information of the camera positions and positions of the pattern itself. The camera position is measured on the right camera of the stereo system. The other one is defined  over the baseline constrains. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF001_R | RES_0xF001_R |
| _SIM_COUNTRY_CODE | 0xF003 | - | Simulation des Country-Codes für SLI und NPI | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | RES_0xF003_R |
| CONTI_FEHLERSPEICHER_INTERN_ERWEITERTE_DATEN | 0xF005 | - | Dieser Service liefert die erweiterten Daten eines im input parameter anzugebenden DEM events zurück | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005_R | RES_0xF005_R |
| _IOB_ACQUIRE_IMAGE | 0xF006 | - | Diese Routine gibt die letzten 10 Images von der linken, rechten oder beiden Kameras aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF006_R | RES_0xF006_R |
| _XCP_CONTROL | 0xF007 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _NVM_RESTORE | 0xF008 | - | Diagnostic command to store the delivery state on the NVM | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _IOB_ACQUIRE_IMAGE_LENSFLARE | 0xF009 | - | IOB acquire images für G30 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF009_R | RES_0xF009_R |
| _DEBUG_DATA_ON_OFF | 0xF00A | - | Dieser Diagnose-Job soll die definierten Debug-Daten- / Debug-Nachrichten-Ausgabe temporär aktivieren falls diese über Codierdaten deaktiviert sind. Die Deaktivierung der Debug-Daten- / Debug-Nachrichten-Ausgabe soll in deisem Fall entweder automatisch beim nächsten Klemmenwechsel oder ebenfalls über diesen Diagnose-Job erfolgen.  Falls die Debug-Daten- / Debug-Nachrichten-Ausgabe über Codierdaten ativiert ist, dann darf dieser Diagnose-Job keine Auswirkung auf die Ausgabe haben.  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF00A_R |
| _TLR_SET_BRIGHTNESS_MODE | 0xF00C | - | Die Funktion wird als Input einen Codierungsparameter für Helligkeit Modus-Konfiguration erhalten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00C_R | - |
| _TLR_SET_FEATURE_MASTER | 0xF00D | - | Die Funktion wird als Input ein Codierungsparameter zur Konfiguration der Funktionen erhalten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00D_R | - |
| _IOB_DOWNLOAD_IMAGE | 0xF00F | - | Zum runterladen der gespeicherten Images. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00F_R | - |
| _ACTIVATE_ALGO_DEMO_MODE | 0xF015 | - | Activation / Deactivation of the Demo mode on the Algo Side. All outputs will become default values | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF015_R |

### STANDARD_ON_OFF_NA

| WERT | TEXT |
| --- | --- |
| 0x0000 | on |
| 0x0001 | off |
| 0x0010 | n/a |

### STAT_IOB_STATE

| WERT | TEXT |
| --- | --- |
| 0x01 | IOB_SM_IOB_READY_PENDING |
| 0x02 | IOB_SM_IOB_NOT_READY |
| 0x03 | IOB_SM_IOB_IMAGE_AVAILABLE |
| 0x04 | IOB_SM_IOB_ERROR |
| 0x05 | IOB_SM_IOB_DOWNLOADING_IN_PROGRESS |
| 0x06 | IOB_SM_IOB_AQUIRING_IN_PROGRESS |

### STEUERN_UFM_SWITCH_ACTION

| WERT | TEXT |
| --- | --- |
| 0x01 | set input to unavailable |
| 0x02 | use worst case input |
| 0x03 | set output to unavailable |

### STUFEN

| WERT | TEXT |
| --- | --- |
| 0x0 | off |
| 0x1 | mid |
| 0x2 | high |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0011 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 |

### TAB_ALGO_QUALIFIER_VALUE

| WERT | TEXT |
| --- | --- |
| 0 | ALGO_QUALIFIER_OK |
| 1 | ALGO_QUALIFIER_CRITICAL_INPUT_ERROR |
| 2 | ALGO_QUALIFIER_NOT_CRITICAL_INPUT_ERROR |
| 4 | ALGO_QUALIFIER_BLOCKAGE |
| 8 | ALGO_QUALIFIER_PARTIAL_BLOCKAGE |
| 16 | ALGO_QUALIFIER_CALIBRATION_ERROR_TO_HIGHT |
| 32 | ALGO_QUALIFIER_GENERAL_FUNCTION_ERROR |
| 64 | ALGO_QUALIFIER_NO_VISIBILITY |
| 128 | ALGO_QUALIFIER_LIMITED_VISIBILITY |
| 256 | ALGO_QUALIFIER_CALIBRATION_RUNNING |
| 65535 | ALGO_QUALIFIER_MAX |
| 4660 | NO_ACTION |

### TAB_ART_LAENDERKODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ECE white |
| 0x01 | ECE yellow |
| 0x02 | US white |
| 0x03 | US yellow |
| 0x04 | generic |
| 0x05 | reserved |
| 0x06 | reserved |
| 0x07 | reserved |
| 0x08 | reserved |
| 0x09 | reserved |
| 0x0A | reserved |
| 0x0B | reserved |
| 0x0C | reserved |
| 0x0D | reserved |
| 0x0E | signal invalid |

### TAB_ART_TEXT_MELDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | none |
| 0x01 |  available only with navigation DVD  |
| 0x02 |  not available in this country  |
| 0x03 |  navigation data not available  |
| 0x04 |  reserved  |
| 0x05 |  reserved  |
| 0x06 |  reserved  |
| 0x07 | signal invalid |

### TAB_ART_UEBERHOL_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Überholverbot |
| 0x01 | Überholverbot PKW |
| 0x02 | Aufhebung Überholverbot PKW |
| 0x03 | Überholverbot Linksverkehr |
| 0xFF | Ungültig |

### TAB_ART_ZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen verfügbar |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0xFF | Ungültig |

### TAB_DQ_REASON

| WERT | TEXT |
| --- | --- |
| 0 | Condensation |
| 1 | Rain |
| 2 | Snow |
| 3 | Fog |
| 4 | Glaring |
| 5 | Partial Blockage |
| 6 | Blockage |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMELECTRONICHORIZON

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_ERRID_EMLANEASSIGNMENT

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_ERRID_EMOBJDESC

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_ERRID_EMROADASSEMBLY

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_ERROR_ID_EMODOCLIENT

| WERT | TEXT |
| --- | --- |
| 0 | Unkown |
| 1 | Reason 0 |
| 2 | Reason 1 |
| 3 | Reason 2 |
| 4 | Reason 3 |
| 5 | Reason 4 |
| 6 | Reason 5 |
| 7 | Reason 6 |
| 8 | Reason 7 |

### TAB_ERROR_ID_EMROADDESCRIPTIONLEGACYCONSTRUCTOR

| WERT | TEXT |
| --- | --- |
| 0 | Unknown |
| 1 | Reason 0 |
| 2 | Reason 1 |
| 3 | Reason 2 |
| 4 | Reason 3 |
| 5 | Reason 4 |
| 6 | Reason 5 |
| 7 | Reason 6 |
| 8 | Reason 8 |

### TAB_ERROR_ID_EMSLCONDITIONEVALUATOR

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_ERROR_ID_EMTRAFFICSIGNFUSION

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | Reason 1 |
| 2 | Reason 2 |
| 3 | Reason 3 |
| 4 | Reason 4 |
| 5 | Reason 5 |
| 6 | Reason 6 |
| 7 | Reason 7 |

### TAB_FLA_EMPFEHLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Keine Empfehlung |
| 0x0001 | Fernlicht AUS |
| 0x0002 | Fernlicht EIN |
| 0xFFFF | Ungültig |

### TAB_FUNCTION_SELECTION

| WERT | TEXT |
| --- | --- |
| 0 | OBJECT_DETECTION |
| 1 | LANE_BOUNDARY_DETECTION |
| 2 | FREESPACE_DETECTION |
| 3 | LIGHT_DETECTION |
| 4 | SIGN_DETECTION |
| 5 | ROAD_SURFACE_PREVIEW |
| 6 | STEREO_EGOMOTION_ESTIMATION |
| 7 | MONO_AUTO_CALIBRATION |
| 8 | STEREO_AUTO_CALIBRATION |
| 9 | NO_ACTION |

### TAB_HBA_PARAMETRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Default |
| 0x01 | Leicht erhöhte Empfindlichkeit |
| 0x02 | Erhöhte Empfindlichkeit |
| 0x04 | Höchste Empfindlichkeit |

### TAB_KAFAS_KOMBI_ANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion nicht aktiv - keine Anzeige |
| 0x01 | Funktion aktiv - warnbereit |
| 0x02 | Funktion aktiv - nicht warnbereit |
| 0xFF | Ungültiger Wert |

### TAB_KALIBRIERUNG_MONO

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht kaibriert |
| 0x01 | kalibriert, SEMO |
| 0x02 | kalibriert, LANE |
| 0x0A | Distanz für Kalibrierung überschritten |
| 0x0B | Totpunktfehler |
| 0x0C | andere Kalibrierfehler |
| 0xFF | ungültiger Wert |

### TAB_KALIBRIERUNG_STEREO

| WERT | TEXT |
| --- | --- |
| 0x00 | Signal ungültig |
| 0x01 | Selbsttest |
| 0x02 | Status Grobkalibriert kurz |
| 0x03 | Status Grobkalibriert lang |
| 0x04 | Status Feinkalibriert |
| 0x0A | Stereokalibrierung Grobkalibrierung Distanz überschritten |
| 0x0B | Stereokalibrierung Feinkalibrierung Distanz überschritten |
| 0x0C | Stereokalibrierungsfehler alle andere |
| 0xFF | ungültiger Wert |

### TAB_MAX_DEV_LANE_SEMO

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht bestimmt |
| 0x01 | 0.10°-0.25° |
| 0x02 | 0.25°-0.50° |
| 0x03 | 0.50°-1.00° |
| 0x04 | >1.00° |
| 0xFF | ungültiger Wert |

### TAB_METHODE_SLI

| WERT | TEXT |
| --- | --- |
| 0x00 | Nur kamerabasierte Erkennung der Verkehrszeichen aktivieren |
| 0x01 | Nur kartenbasierte Erkennung der Verkehrszeichen aktivieren |
| 0x02 | Fusionierte Erkennung aktivieren |
| 0xFF | Auf Standard zurücksetzen |

### TAB_STATUS_SCHEIBENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung ist aus |
| 0x01 | Heizung in an und funktioniert richtig |
| 0x02 | Fehler Kurzschluss |
| 0x03 | Fehler Unterbrechung |
| 0x04 | Interner Fehler |
| 0xFF | Ungültiger Wert |

### TAB_STAT_COLOR_CHANNEL_SELECTION

| WERT | TEXT |
| --- | --- |
| 0x01 | (LSB) RED |
| 0x02 | GREEN_1 |
| 0x04 | GREEN_2 |
| 0x08 | BLUE |

### TAB_STAT_DQ_DEBUG_DATA_SENDING

| WERT | TEXT |
| --- | --- |
| 0 | Versenden der DQ-relevante Debugnachrichten ist aktuell ausgeschaltet |
| 1 | Versenden der DQ-relevante Debugnachrichten ist aktuell eingeschaltet |
| 2 | - |

### TAB_STFLA_CONTROL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Empfehlung |
| 0x01 | AUS |
| 0x02 | EIN |
| 0x03 | Zurück_zum_Normalbetrieb |

### TAB_TYP_CCM

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Sende die in CCM_VIS_FCW beschriebene CC-Meldung |
| 2 | Sende die in CCM_VIS_PFGS beschriebene CC-Meldung |
| 3 | Sende die in CCM_VIS_FCW und CCM_VIS_PFGS  beschriebenen CC-Meldungen gleichzeitig |
| 4 | Sende die in CCM_ERR_FCW beschriebene CC-Meldung |
| 5 | Sende die in CCM_ERR_PFGS beschriebene CC-Meldung |
| 6 | Sende die in CCM_ERR_FCW und CCM_ERR_PFGS  beschriebenen CC-Meldungen gleichzeitig |
| 7 | Sende die in CCM_RDC_FCN_BRK beschriebene CC-Meldung |

### TAB_UFM_DATA

| WERT | TEXT |
| --- | --- |
| 0x00 | Valid |
| 0x01 | Invalid |
| 0x02 | Reduced |

### TAB_WARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Vorwarnung |
| 0x02 | Akutwarnung |

### TAB_WWA_CCM_KOMB_ANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Setzte CCM |
| 0x01 | Rücksetzten CCM |
| 0xFF | Ungültiger Wert |

### TAB_ZEICHEN_FUSIONIERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ergebnis |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | ungültiges Ergebnis |
| 0xFF | Ungültig |

### TAB_ZEICHEN_KAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Zeichen erkannt |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Kamerainformation |
| 0xFF | Ungültig |

### TAB_ZEICHEN_KARTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Zeichen vorhanden |
| 0x01 | Beschränkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0x03 | Ungültige Karteninformation |
| 0xFF | Ungültig |

### WARNARTEN

| WERT | TEXT |
| --- | --- |
| 0x0 | keine (Akut)Warnung |
| 0x1 | Akutwarnung rote Ampel |
| 0x2 | Akutwarnung Stoppschild |
| 0x3 | Akutwarnung Vorfahrt gewähren Schild |
| 0x4 | Vorwarnung rote Ampel |
| 0x5 | Vorwarnung Stoppschild |
| 0x6 | Vorwarnung Vorfahrt gewähren Schild |
| 0xD | Sendefunktion in Betrieb, Werte nicht verfügbar |
| 0xE | Sendefunktion in Betrieb, meldet Fehler |
| 0xF | Sendefunktion nicht in Betrieb |

### WEATHER_CONDITON

| WERT | TEXT |
| --- | --- |
| 0x0000 | - |
| 0x0001 | - |
| 0x0010 | - |
| 0x0011 | - |
| 0x0100 | - |

### _CPAR_TLR_PARAMETERS_T_E_BRIGHTNESSMODE

| WERT | TEXT |
| --- | --- |
| 0x01 | TLR_MODE_OFF |
| 0x02 | TLR_MODE_DAY |
| 0x04 | TLR_MODE_NIGHT |
| 0x08 | TLR_MODE_DAY_NIGHT |

### _EC_CALIBRATION

| WERT | TEXT |
| --- | --- |
| 0x01 | On |
| 0x02 | Off |

### _TAB_CALIB_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NOT_STARTED |
| 0x01 | RUNNING |
| 0x02 | SUCCESS |
| 0x03 | ERROR |
| 0x04 | ERR_SYSTEM_NOT_CALIBRATED |
| 0x05 | ERR_VIN_INVALID |
| 0x06 | ERR_UNKNOWN_CALI_MODE |
| 0x07 | ERR_UNKNOWN_PATTERN_TYPE |
| 0x08 | ERR_INIT_DATA_FAILED |
| 0x09 | ERR_PARAMETER_FALSE |
| 0x0A | ERR_INTENSITY_INHOMOGEN |
| 0x0B | ERR_INTENSITY_BELOW_RANGE |
| 0x0C | ERR_INTENSITY_ABOVE_RANGE |
| 0x0D | ERR_CONTRAST_BELOW_RANGE |
| 0x0E | ERR_CONTRAST_ABOVE_RANGE |
| 0x0F | ERR_NO_MARKERS |
| 0x10 | ERR_NOT_ENOUGH_MARKERS |
| 0x11 | ERR_TOO_MANY_MARKERS |
| 0x12 | ERR_UNCORRESPONDING_MARKERS |
| 0x13 | ERR_PATTERN_ECU_MOVING |
| 0x14 | ERR_PATTERN_POSITION_INVALID |
| 0x15 | ERR_NUMERICAL_PROBLEM |
| 0x16 | ERR_RESULT_OUT_OF_RANGE |
| 0x17 | ERR_OTHER |
