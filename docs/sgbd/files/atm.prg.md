# atm.prg

## General

|  |  |
| --- | --- |
| File | atm.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 147 |
| Origin | BMW EI-64 Maximilian_Pengler |
| Revision | 9.005 |
| Author | BMW UA-712 Subtil, ESG-ELEKTRONIKSYSTEM--UND TI-545 Scholtyssek |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Advanced Telematic Module |  |  |
| ORIGIN | string | BMW EI-64 Maximilian_Pengler |  |  |
| REVISION | string | 9.005 |  |  |
| AUTHOR | string | BMW UA-712 Subtil, ESG-ELEKTRONIKSYSTEM--UND TI-545 Scholtyssek |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.80 |  |  |
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

### STEUERN_LOG_MASK

Schreiben der Log Maske

| Name | Type | Description |
| --- | --- | --- |
| ARG_PATH | string | absolute and complete path to file that shall be written |

### STEUERN_SIM_COMMANDOS

Schreiben der SIM Commandos

| Name | Type | Description |
| --- | --- | --- |
| ARG_PATH | string | absolute and complete path to file that shall be written |

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

### STEUERN_POWERMANAGEMENT_NAD

Auslesen der gespeicherten internen Powermanagement Transitionen 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested Range: 1 (Only one dataset supported) |

### STEUERN_ECALL_LOGGING

Auslesen der gespeicherten internen EU ecall Loggings 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | eCall logging session number requested Range: 1-20 Disable/Enable logging session: 255 |

### STEUERN_PROVISIONING_DATA

Schreiben der Provisionierungsdaten

| Name | Type | Description |
| --- | --- | --- |
| ARG_TYPE | unsigned char | Welche Daten geschrieben werden sollen 0x01 DPAS, 0x03 OTA |
| ARG_PATH | string | absolute and complete path to file that shall be written |

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
| PORT_INDEX | + | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, an dem der Test gestartet werden soll. Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports)  Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |
| LOOPBACK_MODE | + | - | 0-n | high | unsigned char | - | ETH_LOOPBACK_MODE_TAB | - | - | - | - | - | 1 = internal Loopback-Mode, 2 = external Loopback-Mode, sonst = ungültig |

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0XA020_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | There can only have two Values for the argument: BMW or BROWSER ARG_TYPE =  BMW  or  BROWSER  |
| ARG_PATH | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | path of the certificate |

### ARG_0XA05E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ANTENNE | + | - | 0-n | high | unsigned char | - | TAB_ANTENNE_ECALL | - | - | - | - | - | Antenne, die getestet werden sollen Tabelle TAB_ANTENNE_ECALL |

### ARG_0XA05F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | 0-n | - | unsigned long | - | TAB_VERBAU_CECALL | - | - | - | - | - | Routinen, die getestet werden sollen Tabelle TVerbauCECALL |

### ARG_0XA086_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Frequenz in Hertz. Bereich 400 bis 3400 Hz. Sonst Request out of range |
| ARG_LAUTSTAERKE | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lautstaerke von 0-15. Minimal- und Maximalbereich eincodiert. Bei ungueltigen Einganben kommt Request out of range |
| ARG_DAUER | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer des Tons. Wertebereich von 0 bis 255 |

### ARG_0XA089_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOS_DEAKTIVIERUNG | + | - | 0-n | high | unsigned char | - | TAB_SOS_DEAKTIVIERUNG | - | - | - | - | - | 0x00 aktiviert und 0x01 deaktiviert das Senden von SOS-Botschaften über CAN |

### ARG_0XA0EE_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIM_PROFILE_IDENTIFIER | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument wird in der Download-Anforderung übergeben. Siehe Dokument Status_Update_Applet_Specifcation. |

### ARG_0XA0EF_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIM_PROFILE_IDENTIFIER | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument wird in der Download-Anforderung übergeben. Siehe Dokument Status_Update_Applet_Specifcation. |

### ARG_0XD20A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_HS_LOCK | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | - | - | Wert für Sperrung Werte aus der Tabelle TAB_EIN_AUS |

### ARG_0XD20B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_HS_PASSPRASE | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | WLAN passphrase (Pre-Shared-Key) Schlüssel als Welt. Der Schlüssel kann eine Länge von maximal 63 Zeichen haben. |

### ARG_0XD25A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_WLAN_HS_ACTIVATION | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | - | - | Aktivierungswert Werte aus der Tabelle TAB_EIN_AUS |

### ARG_0XD274_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ECALL_SIM_PROFILE_ACTIVE | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | - | - | Aktiviert oder Deaktiviert das ECall Profil. |

### ARG_0XD34D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TESTMODE | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | - | - | Testmodus schalten |
| TEST_NUMBER | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Die Telefonnummer die der Testmodus verwenden soll. |

### ARG_0XDB1A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_F_STATUS | 0-n | high | unsigned int | - | TabStatusOtDLSC | - | - | - | - | - | F-Status für OTD Last State Call |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIM_GET | + | - | 0-n | high | unsigned int | - | TAB_SIM_GET | - | - | - | - | - | Values from Table TAB_SIM_GET   |
| ARG_SIM_INFO | + | - | HEX | high | signed char | - | - | - | - | - | - | - | 1 byte regarding which information shall be read |

### ARG_0XF004_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPS_EMPFAENGER | + | - | 0-n | high | unsigned char | - | GPS_EMPFAENGER | - | - | - | - | - | Mode_GPS_EMPFAENGER |

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

### BF_GPS_RELIABILITY_FLAGS_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RELIABILITY_FLAG_1_01 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | GPS Reliability-Flag 01 |
| STAT_GPS_RELIABILITY_FLAG_1_02 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | GPS Reliability-Flag 02 |
| STAT_GPS_RELIABILITY_FLAG_1_03 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | GPS Reliability-Flag 03 |
| STAT_GPS_RELIABILITY_FLAG_1_04 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | GPS Reliability-Flag 04 |
| STAT_GPS_RELIABILITY_FLAG_1_05 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | GPS Reliability-Flag 05 |
| STAT_GPS_RELIABILITY_FLAG_1_06 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | GPS Reliability-Flag 06 |
| STAT_GPS_RELIABILITY_FLAG_1_07 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | GPS Reliability-Flag 07 |
| STAT_GPS_RELIABILITY_FLAG_1_08 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | GPS Reliability-Flag 08 |
| STAT_GPS_RELIABILITY_FLAG_1_09 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | GPS Reliability-Flag 09 |
| STAT_GPS_RELIABILITY_FLAG_1_10 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | GPS Reliability-Flag 10 |
| STAT_GPS_RELIABILITY_FLAG_1_11 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | GPS Reliability-Flag 11 |
| STAT_GPS_RELIABILITY_FLAG_1_12 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | GPS Reliability-Flag 12 |
| STAT_GPS_RELIABILITY_FLAG_1_13 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | GPS Reliability-Flag 13 |
| STAT_GPS_RELIABILITY_FLAG_1_14 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | GPS Reliability-Flag 14 |
| STAT_GPS_RELIABILITY_FLAG_1_15 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | GPS Reliability-Flag 15 |
| STAT_GPS_RELIABILITY_FLAG_1_16 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | GPS Reliability-Flag 16 |
| STAT_GPS_RELIABILITY_FLAG_1_17 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | GPS Reliability-Flag 17 |
| STAT_GPS_RELIABILITY_FLAG_1_18 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | GPS Reliability-Flag 18 |
| STAT_GPS_RELIABILITY_FLAG_1_19 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | GPS Reliability-Flag 19 |
| STAT_GPS_RELIABILITY_FLAG_1_20 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | GPS Reliability-Flag 20 |

### BF_GPS_RELIABILITY_FLAGS_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RELIABILITY_FLAG_2_01 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | GPS Reliability-Flag 01 |
| STAT_GPS_RELIABILITY_FLAG_2_02 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | GPS Reliability-Flag 02 |
| STAT_GPS_RELIABILITY_FLAG_2_03 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | GPS Reliability-Flag 03 |
| STAT_GPS_RELIABILITY_FLAG_2_04 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | GPS Reliability-Flag 04 |
| STAT_GPS_RELIABILITY_FLAG_2_05 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | GPS Reliability-Flag 05 |
| STAT_GPS_RELIABILITY_FLAG_2_06 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | GPS Reliability-Flag 06 |
| STAT_GPS_RELIABILITY_FLAG_2_07 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | GPS Reliability-Flag 07 |
| STAT_GPS_RELIABILITY_FLAG_2_08 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | GPS Reliability-Flag 08 |
| STAT_GPS_RELIABILITY_FLAG_2_09 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | GPS Reliability-Flag 09 |
| STAT_GPS_RELIABILITY_FLAG_2_10 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | GPS Reliability-Flag 10 |
| STAT_GPS_RELIABILITY_FLAG_2_11 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | GPS Reliability-Flag 11 |
| STAT_GPS_RELIABILITY_FLAG_2_12 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | GPS Reliability-Flag 12 |
| STAT_GPS_RELIABILITY_FLAG_2_13 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | GPS Reliability-Flag 13 |
| STAT_GPS_RELIABILITY_FLAG_2_14 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | GPS Reliability-Flag 14 |
| STAT_GPS_RELIABILITY_FLAG_2_15 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | GPS Reliability-Flag 15 |
| STAT_GPS_RELIABILITY_FLAG_2_16 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | GPS Reliability-Flag 16 |
| STAT_GPS_RELIABILITY_FLAG_2_17 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | GPS Reliability-Flag 17 |
| STAT_GPS_RELIABILITY_FLAG_2_18 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | GPS Reliability-Flag 18 |
| STAT_GPS_RELIABILITY_FLAG_2_19 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | GPS Reliability-Flag 19 |
| STAT_GPS_RELIABILITY_FLAG_2_20 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | GPS Reliability-Flag 20 |

### BF_GPS_RELIABILITY_FLAGS_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RELIABILITY_FLAG_3_01 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | GPS Reliability-Flag 01 |
| STAT_GPS_RELIABILITY_FLAG_3_02 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | GPS Reliability-Flag 02 |
| STAT_GPS_RELIABILITY_FLAG_3_03 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | GPS Reliability-Flag 03 |
| STAT_GPS_RELIABILITY_FLAG_3_04 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | GPS Reliability-Flag 04 |
| STAT_GPS_RELIABILITY_FLAG_3_05 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | GPS Reliability-Flag 05 |
| STAT_GPS_RELIABILITY_FLAG_3_06 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | GPS Reliability-Flag 06 |
| STAT_GPS_RELIABILITY_FLAG_3_07 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | GPS Reliability-Flag 07 |
| STAT_GPS_RELIABILITY_FLAG_3_08 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | GPS Reliability-Flag 08 |
| STAT_GPS_RELIABILITY_FLAG_3_09 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | GPS Reliability-Flag 09 |
| STAT_GPS_RELIABILITY_FLAG_3_10 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | GPS Reliability-Flag 10 |
| STAT_GPS_RELIABILITY_FLAG_3_11 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | GPS Reliability-Flag 11 |
| STAT_GPS_RELIABILITY_FLAG_3_12 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | GPS Reliability-Flag 12 |
| STAT_GPS_RELIABILITY_FLAG_3_13 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | GPS Reliability-Flag 13 |
| STAT_GPS_RELIABILITY_FLAG_3_14 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | GPS Reliability-Flag 14 |
| STAT_GPS_RELIABILITY_FLAG_3_15 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | GPS Reliability-Flag 15 |
| STAT_GPS_RELIABILITY_FLAG_3_16 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | GPS Reliability-Flag 16 |
| STAT_GPS_RELIABILITY_FLAG_3_17 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | GPS Reliability-Flag 17 |
| STAT_GPS_RELIABILITY_FLAG_3_18 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | GPS Reliability-Flag 18 |
| STAT_GPS_RELIABILITY_FLAG_3_19 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | GPS Reliability-Flag 19 |
| STAT_GPS_RELIABILITY_FLAG_3_20 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | GPS Reliability-Flag 20 |

### BF_GPS_RELIABILITY_FLAGS_4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RELIABILITY_FLAG_4_01 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | GPS Reliability-Flag 01 |
| STAT_GPS_RELIABILITY_FLAG_4_02 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | GPS Reliability-Flag 02 |
| STAT_GPS_RELIABILITY_FLAG_4_03 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | GPS Reliability-Flag 03 |
| STAT_GPS_RELIABILITY_FLAG_4_04 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | GPS Reliability-Flag 04 |
| STAT_GPS_RELIABILITY_FLAG_4_05 | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | GPS Reliability-Flag 05 |
| STAT_GPS_RELIABILITY_FLAG_4_06 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | GPS Reliability-Flag 06 |
| STAT_GPS_RELIABILITY_FLAG_4_07 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | GPS Reliability-Flag 07 |
| STAT_GPS_RELIABILITY_FLAG_4_08 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | GPS Reliability-Flag 08 |
| STAT_GPS_RELIABILITY_FLAG_4_09 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | GPS Reliability-Flag 09 |
| STAT_GPS_RELIABILITY_FLAG_4_10 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | GPS Reliability-Flag 10 |
| STAT_GPS_RELIABILITY_FLAG_4_11 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | GPS Reliability-Flag 11 |
| STAT_GPS_RELIABILITY_FLAG_4_12 | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | GPS Reliability-Flag 12 |
| STAT_GPS_RELIABILITY_FLAG_4_13 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | GPS Reliability-Flag 13 |
| STAT_GPS_RELIABILITY_FLAG_4_14 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | GPS Reliability-Flag 14 |
| STAT_GPS_RELIABILITY_FLAG_4_15 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | GPS Reliability-Flag 15 |
| STAT_GPS_RELIABILITY_FLAG_4_16 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | GPS Reliability-Flag 16 |
| STAT_GPS_RELIABILITY_FLAG_4_17 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | GPS Reliability-Flag 17 |
| STAT_GPS_RELIABILITY_FLAG_4_18 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | GPS Reliability-Flag 18 |
| STAT_GPS_RELIABILITY_FLAG_4_19 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | GPS Reliability-Flag 19 |
| STAT_GPS_RELIABILITY_FLAG_4_20 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | GPS Reliability-Flag 20 |

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
| 0x026100 | Energiesparmode aktiv | 0 |
| 0x026108 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x026109 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02610A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02610B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02610C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x026123 | Flash Memory Fehler (Sammelfehler) | 0 |
| 0x02FF61 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x031785 | SIF: Breakdown Call | 1 |
| 0x031786 | SIF: Last State Call | 1 |
| 0x031787 | SIF: Automatic Service Call | 1 |
| 0x031788 | SIF: Teleservice Battery Gard | 1 |
| 0x031789 | SIF: Remote Service | 1 |
| 0x03178A | SIF: General Mobile Network Errors | 1 |
| 0x03178B | SIF: Remote 360 | 1 |
| 0x03178C | SIF: E-Call | 1 |
| 0xB7F30D | Keine Kommunikation mit GPS-Empfänger | 0 |
| 0xB7F30E | Download des SIM Profils fehlgeschlagen | 0 |
| 0xB7F310 | ERA Glonass Profil nicht vorhanden | 0 |
| 0xB7F311 | Kein Zugriff auf interne SIM-Karte | 0 |
| 0xB7F312 | Registrierung mit neuem SIM Profil fehlgeschlagen | 0 |
| 0xB7F313 | SIM-Karte gesperrt | 0 |
| 0xB7F315 | GPS-Antenne: Kurzschluss nach Plus | 0 |
| 0xB7F316 | GPS-Antenne: Unterbrechung | 0 |
| 0xB7F317 | GPS-Antenne: Kurzschluss nach Masse | 0 |
| 0xB7F318 | Notruf-LED Fehler | 0 |
| 0xB7F319 | Notruf-Taster: Kurzschluss | 0 |
| 0xB7F31A | Notruf-Taster: Unterbrechung | 0 |
| 0xB7F31B | Mikrofon 1: Kurzschluss nach Plus | 0 |
| 0xB7F31D | Telematik-Antenne2: Kurzschluss nach Plus | 0 |
| 0xB7F31E | Telematik-Antenne1: Kurzschluss nach Plus | 0 |
| 0xB7F31F | Telematik-Antenne1: Kurzschluss nach Masse | 0 |
| 0xB7F320 | Hardware Reset | 0 |
| 0xB7F321 | Software Reset | 0 |
| 0xB7F323 | Alive Signal Airbag fehlerhaft | 1 |
| 0xB7F324 | Notruf-Lautsprecher: Kurzschluss nach Plus | 0 |
| 0xB7F325 | Notruf-Lautsprecher: Unterbrechung | 0 |
| 0xB7F326 | Notruf-Lautsprecher: Kurzschluss nach Masse | 0 |
| 0xB7F327 | Mikrofon 1: Kurzschluss nach Masse | 0 |
| 0xB7F328 | Mikrofon 1: Unterbrechung | 0 |
| 0xB7F32B | Telematik-Antenne1: Unterbrechung | 0 |
| 0xB7F32C | Telematik-Antenne2: Kurzschluss nach Masse | 0 |
| 0xB7F32D | Telematik-Antenne2: Unterbrechung | 0 |
| 0xB7F32E | Mikrofon 1: Leitungen kurzgeschlossen | 0 |
| 0xB7F335 | Interner Steuergerätefehler Hardware | 0 |
| 0xB7F336 | Interner Steuergerätefehler Software | 0 |
| 0xB7F338 | Alive Signal Airbag fehlt | 1 |
| 0xB7F339 | Unterspannung erkannt | 1 |
| 0xB7F33A | Überspannung erkannt | 1 |
| 0xB7F33C | Interner Steuergerätefehler | 0 |
| 0xB7F33E | Automatischer Notruf häufig ausgelöst | 1 |
| 0xB7F33F | Notruf durch Diagnose deaktiviert | 0 |
| 0xB7F341 | Backup-Batterie: Hardware defekt | 0 |
| 0xB7F342 | Notruf-Lautsprecher: Leitungen kurzgeschlossen | 0 |
| 0xB7F343 | Backup-Batterie:  Before end of life | 0 |
| 0xB7F344 | WLAN durch Diagnose deaktiviert | 0 |
| 0xB7F345 | Abschaltung wegen Übertemperatur | 0 |
| 0xB7F347 | Provisionierung ohne Signatur Diagnose | 0 |
| 0xB7F348 | Provisionierung ohne Signatur OTA | 0 |
| 0xB7F349 | Zertifikat ohne Signatur | 0 |
| 0xB7F34A | ECall Testmode activ | 0 |
| 0xB7F34E | Kommunikation mit SIM Karte nicht verfügbar | 0 |
| 0xB7F34F | Registrierung mit vorherigem SIM Profil fehlgeschlagen | 0 |
| 0xB7F352 | SIM Profil Fallback registriert | 1 |
| 0xB7F353 | SIM SUA Statuswechsel registriert | 1 |
| 0xB7F354 | OtD Last State Call: LSC aktiviert durch Diagnose | 0 |
| 0xB7F355 | OtD Last State Call: LSC Aktivierung durch Diagnose fehlgeschlagen | 0 |
| 0xE1445F | BODY- oder IuK-CAN Physikalischer Busfehler | 0 |
| 0xE14468 | BODY- oder IuK-CAN Control Module Bus OFF | 0 |
| 0xE14600 | Ethernet: physikalischer Fehler (link off) | 1 |
| 0xE14602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xE14603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xE14604 | Ethernet: Unerwarteter Link aufgebaut | 1 |
| 0xE14BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0018 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0019 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0020 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0021 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0022 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0023 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0024 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0025 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0026 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0027 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0028 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0029 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002A | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002B | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002C | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002D | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002E | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002F | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0030 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0031 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0032 | PaketSwitch Registrierung | 0-n | High | 0x0F | TAB_PS_REGSTATE | - | - | - |
| 0x0033 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17F6 | INFO | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17F7 | APP_TASK | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | COUNTER | count | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD34C | SPANNUNG_WERT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE380 | Alte ICC-ID | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0xE381 | Neue ICC-ID | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0xE382 | SIM-Profile Fallback Fehlerursache | 0-n | High | 0xFF | TAB_SIM_FALLBACK_ERROR_CAUSE | - | - | - |
| 0xE383 | SIM SUA Status | 0-n | High | 0xFFFF | TAB_SIM_SUA_STATE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GPS_EMPFAENGER

| WERT | TEXT |
| --- | --- |
| 0x00 | GPS_EMPFAENGER in Kalt Start |
| 0x01 | GPS_EMPFAENGER in Warm Start |
| 0x02 | GPS_EMPFAENGER in Hot Start |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x61001F | Falsche NGTP Keytable | 0 |
| 0x610021 | Backup-Batterie: Kurzschluss nach 12 Volt | 0 |
| 0x610022 | Backup-Batterie: Kurzschluss nach Masse | 0 |
| 0x610023 | Backup-Batterie: Unterbrechung | 0 |
| 0x610025 | Backup-Batterie: End of life | 0 |
| 0x610030 | TELD aktiv | 0 |
| 0x610031 | Steuergeräte-Reset Zähler | 0 |
| 0x610032 | NAD-Reset Zähler | 0 |
| 0x610033 | Abschaltung wegen Übertemperatur im NAO-Mode | 0 |
| 0x610034 | Nahe Abschaltung wegen Übertemperatur | 0 |
| 0x610035 | Leistungsreduzierung wegen hoher Temperatur | 0 |
| 0x610036 | Flight Mode aufgrund fehlgeschlagener Netzwerk-Registrierung | 1 |
| 0x930000 | Alive Signal Airbag: Prüfsummenfehler | 1 |
| 0xB7F314 | SIM-Karte nicht freigeschaltet | 0 |
| 0xB7F322 | Alive Signal Airbag fehlt beim Aufstart | 1 |
| 0xB7F333 | OtD Last State Call: LSC wurde vor dem GPS Aufstart gesendet | 1 |
| 0xB7F337 | Alive Signal Airbag fehlerhaft beim Aufstart | 1 |
| 0xB7F33B | Interner Steuergerätefehler | 0 |
| 0xE14601 | Ethernet: CRC Fehler | 1 |
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
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0018 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0019 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0020 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0021 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0022 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0023 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0024 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0025 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0026 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0027 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0028 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0029 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002A | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002B | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002C | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002D | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002E | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002F | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0030 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0031 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0032 | PaketSwitch Registrierung | 0-n | High | 0x0F | TAB_PS_REGSTATE | - | - | - |
| 0x0033 | CircuitSwitch Registierung | 0-n | High | 0xF0 | TAB_CS_REGSTATE | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x17EE | National Mobile Country Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17EF | National Mobile Network Code | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x17F0 | CD Fehlerursache | 0-n | High | 0xFF | TAB_CD_ENVIRONMENT_CONDITION | - | - | - |
| 0x17F1 | GPS_ZEIT | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x17F3 | NETZWERKTECHNOLOGIE | 0-n | High | 0xFF | TAB_CD_MOBILE_NETWORK_TECHNOLOGY | - | - | - |
| 0x17F4 | RSSI | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x17F5 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17F6 | INFO | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x17F7 | APP_TASK | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | COUNTER | count | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xD34C | SPANNUNG_WERT | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0xE380 | Alte ICC-ID | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0xE381 | Neue ICC-ID | Text | High | 20 | - | 1.0 | 1.0 | 0.0 |
| 0xE382 | SIM-Profile Fallback Fehlerursache | 0-n | High | 0xFF | TAB_SIM_FALLBACK_ERROR_CAUSE | - | - | - |
| 0xE383 | SIM SUA Status | 0-n | High | 0xFFFF | TAB_SIM_SUA_STATE | - | - | - |
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

### RES_0X1803_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEARN_PORT_CONFIGURATION | 0-n | high | unsigned char | - | ETH_LEARN_PORT_CONFIGURATION | - | - | - | 0: Lernen erfolgreich 1: Lernen nicht erfolgreich oder noch nicht gelernt |
| - | Bit | high | BITFIELD | - | BF_ETH_PORT_CONFIGURATION | - | - | - | Pro Port 1Bit, das angibt ob LinkUp(1) oder kein Link (0) vorliegt. |

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

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IMPORT_MASK_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 (= Default) 1 (= special mask already imported) 2 (=error) |
| STAT_IMPORT_MASK_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Default (=0) special mask already imported (=1) error (=2) |
| STAT_LOG_MASK_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | LogMask XML in clear words (for example: 130528_QXDMlog5-3.xml) |

### RES_0X4006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_COMMAND_IMPORT_WERT | HEX | high | unsigned char | - | - | - | - | - | 0x00 = ok 0x01 = error |
| STAT_SIM_COMMAND_LINE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Returns the number of the  line of the executed command that causes an error. Returns 0 if no error occured. |
| STAT_SIM_COMMAND_RETURN_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Returns the line of the executed command that causes an error.  |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_LAT_1_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad (Latitude): Aktuelle Position n |
| STAT_GPS_LONG_1_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Längengrad (Longitude): Aktuelle Position n |
| STAT_GPS_ALT_1_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Höhenmeter (Altitude): Aktuelle Position n |
| STAT_HEADING_1_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad (Heading): Aktuelle Position n |
| - | Bit | high | BITFIELD | - | BF_GPS_RELIABILITY_FLAGS_1 | - | - | - | Reliability Flags: Aktuelle Position n |
| STAT_GPS_LAT_2_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad (Latitude): Letzte Position n-1 |
| STAT_GPS_LONG_2_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Längengrad (Longitude): Letzte Position n-1 |
| STAT_GPS_ALT_2_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Höhenmeter (Altitude): Letzte Position n-1 |
| STAT_HEADING_2_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad (Heading): Letzte Position n-1 |
| - | Bit | high | BITFIELD | - | BF_GPS_RELIABILITY_FLAGS_2 | - | - | - | Reliability Flags: Vorletzte Position n-2 |
| STAT_GPS_LAT_3_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad (Latitude): Vorletzte Position n-2 |
| STAT_GPS_LONG_3_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Längengrad (Longitude): Vorletzte Position n-2 |
| STAT_GPS_ALT_3_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Höhenmeter (Altitude): Vorletzte Position n-2 |
| STAT_HEADING_3_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad (Heading): Vorletzte Position n-2 |
| - | Bit | high | BITFIELD | - | BF_GPS_RELIABILITY_FLAGS_3 | - | - | - | Reliability Flags: Vorletzte Position n-2 |
| STAT_GPS_LAT_4_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad (Latitude): Vorvorletzte Position n-3 |
| STAT_GPS_LONG_4_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Längengrad (Longitude): Vorvorletzte Position n-3 |
| STAT_GPS_ALT_4_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Höhenmeter (Altitude): Vorvorletzte Position n-3 |
| STAT_HEADING_4_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad (Heading): Vorvorletzte Position n-3 |
| - | Bit | high | BITFIELD | - | BF_GPS_RELIABILITY_FLAGS_4 | - | - | - | Reliability Flags: Vorvorletzte Position n-3 |

### RES_0XA020_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RET_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_RET_STATUS | - | - | - | Status message |

### RES_0XA05E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAB_ANTENNE_ECALL | - | - | - | gibt an, welche Antenne getestet wurden |
| STAT_TEST_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des gesamten Tests der entsprechenden Antenne wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |
| STAT_FEHLERART_ANTENNE | - | - | + | 0-n | high | unsigned char | - | TAntenneFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_ANTENNE nicht den Wert 3 (Fehler) meldet |
| STAT_SPANNUNG_WERT | - | - | + | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Die auf der fehlerhaften Antenne gemessene Spannung in mV. |

### RES_0XA05F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_VERBAU_CECALL | - | - | - | Ausgeführte Testroutine(n) |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | Gibt den Status des Verbautests wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |

### RES_0XA079_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING_RESET | - | - | + | 0-n | - | unsigned char | - | TResetStatus | - | - | - | Status Reset Werte gemäß Tabelle TResetStatus 0 UNKNOWN - unbekannt 1 ACTIVE - läuft noch 2 SUCCESS - alles OK 3 FAILED - mit Fehler beendet 4 IDLE - wurde nicht gestartet |

### RES_0XA07A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROVISIONING | - | - | + | 0-n | - | unsigned char | - | TProvisioningStatusEcall | - | - | - | Status des Provisionierungsprozess Werte gemäß Tabelle TProvisioningStatusEcall |
| STAT_ECALL_OTA_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Version von den aktuellen OTA Daten |
| STAT_ECALL_DAS_ID_TEXT | - | - | + | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Version von den aktuellen DAS Daten |

### RES_0XA089_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOS_CAN_BOTSCHAFT | - | - | + | 0-n | high | unsigned char | - | TAB_SOS_CAN_BOTSCHAFT | 1.0 | 1.0 | 0.0 | Auslesen des aktuellen Status des Signalmodus (siehe Job STEUERN_SIGNAL_MODE) |

### RES_0XA09A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_WLAN_HS_DATA | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Ergebnis siehe Tabelle: TProcessStatus |

### RES_0XA0B8_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_STATE_CALL | - | - | + | 0-n | high | unsigned char | - | TLSC_STATUS | - | - | - | Status des letzten LSC |

### RES_0XA0EE_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_PROFILE_IDENTIFIER_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Identifikator des heruntergeledenen Profils. |
| STAT_SIM_PROFILE_SWITCH | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_SIM_PROFILE_SWITCH | - | - | - | Status des Umschaltens zwischen den Profilen. Werte aus der Tabelle TAB_STAT_SIM_PROFILE_SWITCH |

### RES_0XA0EF_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_PROFILE_IDENTIFIER_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Identifikator des heruntergeledenen Profils. |
| STAT_SIM_PROFILE_DOWNLOAD | - | - | + | 0-n | high | unsigned char | - | TAB_STAT_SIM_PROFILE_DOWLOAD | - | - | - | Status des Downloads. Werte aus der Tabelle TAB_STAT_SIM_PROFILE_DOWLOAD |

### RES_0XD029_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUB_SPANNUNG_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batteriespannung als Wert in Millivolt |
| STAT_BUB_TEMPERATUR_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Batterietemperatur in C° |
| STAT_BUB_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | Status gibt an ob Steuergerät auf Betrieb mit BUB oder ohne codiert ist. 0 = nicht verbaut 1 = verbaut |
| STAT_BUB_SOH_WERT | % | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Relative Health der Backup-Batterie (State of Health) |
| STAT_BUB_JAHR_HEALTH_MESSUNG_WERT | - | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Jahr (Format: JJJJ) |
| STAT_BUB_MONAT_HEALTH_MESSUNG_WERT | - | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Monat (Format: MM) |
| STAT_BUB_TAG_HEALTH_MESSUNG_WERT | - | high | signed int | - | - | 1.0 | 1000.0 | 0.0 | Datum der Relative Health Messung der Backup-Batterie. Ergebnis Tag (Format: TT) |
| STAT_BUB_LADUNG_ART | 0-n | high | unsigned char | - | TAB_BUB_LADUNG_ART | - | - | - | Gibt das aktuelle Ladungsverfahren an. |

### RES_0XD035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_STATUS | 0-n | high | unsigned char | - | TSimStatus | - | - | - | Status der SIM-Karte |
| STAT_IP_ADRESSE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IP-Adresse z.B. 192.168.0.1 |
| STAT_AKTUELLES_NETZ_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Status des aktuell verfügbaren Netzwerks 000 000 = NMCC NMNC Nmcc= network mobile country code (Land) Nmnc= network mobile network code (Network provider) |
| STAT_SIGNAL_STAERKE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Empfangsstärke des verfügbaren Netzwerks im Bereich von 0-5 0 = kein Signal 5 = volles Signal |

### RES_0XD0CE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_SMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Länderkode |
| STAT_SMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | SIM Mobile Netzwerkkode |
| STAT_NMCC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Länderkode |
| STAT_NMNC_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Netzwerk Mobile Netzwerkkode |
| STAT_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version des Steuergerätes und des Provisionierungsmanagers |
| STAT_OTA_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | OTA - ID |
| STAT_DAS_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | DAS - ID |
| STAT_CAUSE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Cause Wert Der Wert gibt den Auslöser der Provisionierung an. 0: Required access data is missing in the DASAS data 1: A required OTAAS is expired 2: Update request by user via the HMI  3: Application trigger 4: The PINGUIN triggered the provisioning  5: ACM triggered provisioning on DPAS Mode 6: Provisioning via Diagnosis |
| STAT_DPAS_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Provisionierungszustand |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC - ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |
| STAT_SERIAL_NUMBER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Steuergeräts |

### RES_0XD0D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHORT_VIN_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | 7-stellige Fahrgestellnummer |
| STAT_DOWNLOAD_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Download ID |
| STAT_PROVISIONING | 0-n | high | unsigned char | - | TProvisioningStatus | - | - | - | Status vom Schreibvorgang der Provisionierungsdaten. |

### RES_0XD0E1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_RECEIVER_SW_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Software Versionsnummer des GPS Receivers |
| STAT_GPS | 0-n | - | unsigned char | - | TGpsStatus | - | - | - | Liest den GPS Status. Siehe Tabelle TGpsStatus. |
| STAT_GPS_LONG_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Längengrad |
| STAT_GPS_LAT_WERT | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Breitengrad |
| STAT_GPS_HEADING_WERT | ° | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Richtung in Grad |
| STAT_GPS_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Geschwindigkeit in m pro Sekunde. Steuergerät sendet in cm/s, in der SGBD wird auf m/s umgerechnet |
| STAT_GPS_HEIGHT_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Höhe in Meter |
| STAT_GPS_DATE_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum TTMMJJJJ |
| STAT_GPS_TIME_TEXT | TEXT | high | string[6] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit HHMMSS |

### RES_0XD0E3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_DISTANCE_1_WERT | m | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem letzten Auslesen des Jobs aus. |
| STAT_GPS_DISTANCE_2_WERT | m | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem zweitletzten Auslesen des Jobs aus. |
| STAT_GPS_DISTANCE_3_WERT | m | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Gibt die zurückgelegte Strecke (GPS) seit dem drittletzten Auslesen des Jobs aus. |

### RES_0XD108_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUORT | 0-n | high | unsigned char | - | TAB_VERBAUORT_TELEMATIK_ECU | - | - | - | Gibt den Verbauort an. Siehe Tabelle:  |
| STAT_WLAN | 0-n | high | unsigned char | - | TAB_JA_NEIN | - | - | - | Gibt an ob Telematiksteuergerät WLAN unterstützt. |
| STAT_NETZ_TECHNOLOGIE | 0-n | high | unsigned char | - | TAB_NETZ_TECHNOLOGIE | - | - | - | Gibt an welche Mobilfunk Netzwerk Technologie unterstützt wird. |
| STAT_LAENDERVARIANTE | 0-n | high | unsigned char | - | TAB_LAENDERVARIANTE_TELEMATIK | - | - | - | Gibt die Laendervariante des Telematik Steuergeräts an. |

### RES_0XD20A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_HS_LOCK | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | Wert für Sperre als Integer Werte aus der Tabelle TAB_EIN_AUS |

### RES_0XD20B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_HS_PASSPHRASE_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | WLAN passphrase (Pre-Shared-Key) Schlüssel als Welt. Der Schlüssel kann eine Länge von maximal 63 Zeichen haben. |

### RES_0XD20C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEVICE_1_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_1_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_2_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_2_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_3_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_3_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_4_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_4_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_5_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_5_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_6_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_6_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_7_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_7_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |
| STAT_DEVICE_8_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | MAC Adresse des Geräts |
| STAT_WLAN_ERRORRATE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerrate der letzten gesendeten/empfangenen Daten ;0 = 0%; 100 = 100%; 255 = Nicht Definiert |
| STAT_WLAN_ERRORRATE_DBM_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung der letzten gesendeten/empfangenen Daten ;0 = 0 dBm; 255 = -255 dBm |
| STAT_WLAN_8_CONNECTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Status Kommunikation WLAN client 0 = nicht in Reichweite 1 = in Reichweite 2 = verbunden |

### RES_0XD25A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WLAN_HS_ACTIVATION | 0-n | high | unsigned char | - | TAB_EIN_AUS | - | - | - | Aktivierungswert als Integer Werte aus der Tabelle TAB_EIN_AUS |

### RES_0XD26E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROFILE_1_IDENTIFIER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Der Identifikator des Profils |
| STAT_PROFILE_1_STATUS | 0-n | high | unsigned char | - | TAB_SIM_PROFILE_STATUS | - | - | - | Status des Profils. |
| STAT_PROFILE_1_ICCID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICCID des SIM Profils. |
| STAT_PROFILE_1_IMSI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMSI des SIM Profils. |
| STAT_PROFILE_2_IDENTIFIER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Der Identifikator des Profils |
| STAT_PROFILE_2_STATUS | 0-n | high | unsigned char | - | TAB_SIM_PROFILE_STATUS | - | - | - | Status des Profils. |
| STAT_PROFILE_2_ICCID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICCID des SIM Profils. |
| STAT_PROFILE_2_IMSI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMSI des SIM Profils. |
| STAT_PROFILE_3_IDENTIFIER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Der Identifikator des Profils |
| STAT_PROFILE_3_STATUS | 0-n | high | unsigned char | - | TAB_SIM_PROFILE_STATUS | - | - | - | Status des Profils. |
| STAT_PROFILE_3_ICCID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICCID des SIM Profils. |
| STAT_PROFILE_3_IMSI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMSI des SIM Profils. |

### RES_0XD34D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TESTMODE | 0-n | high | unsigned char | - | - | - | - | - | Gibt den aktuellen Zustand des Testmodus an. |

### RES_0XDB1A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_F_STATUS | 0-n | high | unsigned int | - | TabStatusOtDLSC | - | - | - | F-Status des OtD LSC |
| STAT_OTD_LSC_ACTIVATION | 0-n | high | unsigned char | - | TabActivation | - | - | - | Status des OtD LSC |
| STAT_OTD_LSC_ACTIVATION_ERROR | 0-n | high | unsigned char | - | TabErrorStatusOtDLSC | - | - | - | Fehlerstatus des OtD LSC |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_LOG_MASK | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | status of reset |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIM_INFO_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | According to Document SubMan_Get_Information |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GPS_EMPFAENGER | - | - | + | 0-n | high | unsigned char | - | GPS_EMPFAENGER | - | - | - | Status GPS_EMPFAENGER |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| UNIVERSAL_TRANSPORT_LAYER | 0xA020 | - | Dummy für UTL Transport-Schicht | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA020_R | RES_0xA020_R |
| TEST_ANTENNE_ECALL | 0xA05E | - | Startet und bewertet die Prüfung für eine definierte Antenne | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05E_R | RES_0xA05E_R |
| TEST_VERBAU_ECALL | 0xA05F | - | Test Verbau CECALL | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA05F_R | RES_0xA05F_R |
| PROVISIONING_RESET | 0xA079 | - | Setzt die standard Telematik Konfigurationswerte zurück und löscht die OTA (Over The Air) Daten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA079_R |
| PROVISIONING_ECALL | 0xA07A | - | Startet die Provisionierung der Telematikdienste OTA | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA07A_R |
| SOS_SPEAKER_TEST | 0xA086 | - | Spielt einen Ton mit parametrierbarer Frequenz, Dauer, Lautstärke auf dem SOS-Lautsprecher ab | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA086_R | - |
| SIGNAL_MODE_ECALL | 0xA089 | - | Aktiviert bzw. deaktiviert das Senden von SOS-Botschaften (via CAN) zu Testzwecken des SOS-Tasters | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA089_R | RES_0xA089_R |
| WLAN_HS_RESET_DATA | 0xA09A | - | Löscht die Personalinformation im WLAN Hotspot | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA09A_R |
| LAST_STATE_CALL_TRANSMIT | 0xA0B8 | - | Job zum Absetzen eines Last State Call | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0B8_R |
| SIM_PROFILE_SWITCH | 0xA0EE | - | Schalten zu einen anderen gespeicherten SIM Profil. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0EE_R | RES_0xA0EE_R |
| SIM_PROFILE_DOWNLOAD | 0xA0EF | - | Startet ein over-the-air SIM Profil Download. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0EF_R | RES_0xA0EF_R |
| BACKUP_BATTERIE | 0xD029 | - | Backup-Batterie | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD029_D |
| LAST_CONNECTION_TEL | 0xD035 | - | Auslesen des SIM Status und IP Adresse der letzte Verbindung Argument beschreibt welches Gerät für das die letze Verbindung abgefragt wird | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD035_D |
| ICC_ID_LESEN | 0xD05A | STAT_ICC_ID_TEXT | Auslesen des ICC (Integrated Circuit Card) -ID des internen Telefonmoduls | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IMEI_LESEN | 0xD06B | STAT_IMEI_TEXT | Auslesen des IMEI (International Mobile Equipment Identity) des internen Telefonmoduls | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TDA_AKTIVIERUNG | 0xD091 | STAT_DIENSTE_AKTIVIERUNG | Status TDA BMW Dienste | 0-n | - | - | unsigned char | TAB_TDAActivationState | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOS_TASTER | 0xD09B | STAT_SOS_TASTER | Gibt an, ob der SOS-Taster gedrückt (0x01) oder nicht gedrückt (0x00) ist. | 0-n | - | high | unsigned char | TAB_TASTER_STATUS | - | - | - | - | 22 | - | - |
| PROVISIONING_PARAMETER | 0xD0CE | - | Liest die Parameter der Provisionierung aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0CE_D |
| PROVISIONING_DATA | 0xD0D3 | - | Liest Status des Schreibens der Provisionierungsdatei. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D3_D |
| SELBSTTEST | 0xD0D7 | STAT_SELBSTTEST | Gibt den Status des Tests wieder. | 0-n | - | - | unsigned char | TAB_TESTSTATUS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_GPS_ECALL | 0xD0E1 | - | GPS Status des Telematiksteuergeräts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0E1_D |
| STATUS_GPS_DISTANCE | 0xD0E3 | - | Zurückgelegte Strecke gemessen über GPS. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0E3_D |
| PROVISIONING_FORMAT | 0xD0EB | STAT_STAT_SIGNATURE | dient dazu, eine signierte Bereitstellungsdatei zu verstehen  | 0-n | - | high | unsigned char | TAB_NO_YES | - | - | - | - | 22 | - | - |
| TELEMATIK_VARIANTE | 0xD108 | - | Gibt an welche Variante des Telematiksteuergeräts eingebaut ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD108_D |
| WLAN_HS_LOCK | 0xD20A | - | Sperrt WLAN Modul für Hotspot für Fertigungsablauf | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD20A_D | RES_0xD20A_D |
| WLAN_HS_PASSPHRASE | 0xD20B | - | Schreibt den Pre-Shared-Key für den WLAN Hotspot. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD20B_D | RES_0xD20B_D |
| WLAN_HS_SIGNALTEST | 0xD20C | - | Signalqualität des WLAN Hotspot. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD20C_D |
| WLAN_HS_MAC_ADRESS | 0xD20D | STAT_WLAN_HS_MAC_ADDRESS_TEXT | angeforderte MAC-Adresse des Hotspot | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WLAN_HS_ACTIVATION | 0xD25A | - | Schaltet WLAN Funktion des Hotspot ein oder aus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD25A_D | RES_0xD25A_D |
| EUICC_ID_LESEN | 0xD25F | STAT_EUICC_ID_TEXT | Auslesen des eUICC (Integrated Circuit Card) -ID des internen Telefonmoduls | TEXT | - | - | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SIM_PROFILES | 0xD26E | - | Liefert alle momentan gespeicherten Profile der SIM Karte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD26E_D |
| SIM_PROFILE_ECALL_ACTIVE | 0xD274 | - | Aktiviert oder Deaktiviert das ECall Profil(e.g.ERA Glonass).   | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD274_D | - |
| ECALL_TESTMODE | 0xD34D | - | Schaltet den Testmodus für EU_ECALL ein oder aus und liefert die Testrufnummer. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD34D_D | RES_0xD34D_D |
| OTD_LSC_F_STATUS | 0xDB1A | - | F-Status beim OTD Last State Call | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB1A_D | RES_0xDB1A_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| LOG_MASK | 0x4000 | - | Reads the actually used logging mask  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| SIM_COMMANDOS | 0x4006 | - | Returns status of SIM_COMMANDOS (F003) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4006_D |
| RECENT_VEHICLE_LOCATION | 0x4010 | - | aktuelle Fahrzeugpositionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| RESET_LOG_MASK | 0xF001 | - | Reset of logging mask | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| SIM_INFO | 0xF002 | - | Returns SIM Data, see G&D Document  SubMan_Get_Information, table 2.3 und 2.7 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | RES_0xF002_R |
| GPS_EMPFAENGER | 0xF004 | - | Switches GPS_EMPFAENGER to Kalt Start, Warm Start or Hot Start | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004_R | RES_0xF004_R |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0011 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 |

### TAB_0X17F5

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0032 | 0x0033 |

### TAB_ANTENNE_ECALL

| WERT | TEXT |
| --- | --- |
| 0x01 | Telematik-Antenne1 |
| 0x02 | Telematik-Antenne2 |
| 0x04 | GPS-Antenne |
| 0x08 | WLAN-Antenne |
| 0xFF | Ungültig |

### TAB_BUB_LADUNG_ART

| WERT | TEXT |
| --- | --- |
| 0x00 | Ladung BUB aus |
| 0x01 | Normale Ladung |
| 0x02 | Erhaltungsladung |
| 0x03 | Keine Ladung: Voll geladen |
| 0x04 | Keine Ladung: Temperatur |
| 0x05 | Keine Ladung: BUB Betrieb |

### TAB_CD_ENVIRONMENT_CONDITION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | Netzwerk nicht verfügbar |
| 0x02 | Datenverbindung nicht verfügbar / konnte nicht aufgebaut werden |
| 0x03 | Fehler in HTTP Kommunikation mit Backend |
| 0x04 | Fehler in rückgemeldeten Daten vom Backend |
| 0x05 | Sprachanruf konnte nicht aufgebaut werden / wurde abgebrochen |
| 0x06 | Applikation abgestürzt |
| 0x07 | SSL Zertifikat nicht validierbar |
| 0x08 | Registrierung abgelehnt |
| 0x09 | Keine Bilder von iCAM verfügbar |
| 0x0A | iCAM meldet Fehler |
| 0x0B | SMS konnte nicht gesendet werden |
| 0x0C | SIM Reset durch Flight Mode |
| 0x0D | Ausführung des Service nicht erlaubt/abgebrochen |
| 0xFF | nicht definiert |

### TAB_CD_MOBILE_NETWORK_TECHNOLOGY

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x01 | GSM |
| 0x02 | GSM_COMPACT |
| 0x03 | UTRAN |
| 0x04 | GSM_WITH_EGPRS |
| 0x05 | UTRAN_WITH_HSDPA |
| 0x06 | UTRAN_WITH_HSUPA |
| 0x07 | UTRAN_WITH_HSDPA_AND_HSUPA |
| 0x08 | E_UTRAN |
| 0xFF | nicht definiert |

### TAB_CS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x10 | Nicht registriert und nicht suchend |
| 0x20 | Registriert |
| 0x30 | Nicht registriert und suchend |
| 0x40 | Registrierung abgelehnt |
| 0x50 | Registriert und Roaming |
| 0x60 | Registriert und Roaming OFF NET |
| 0x70 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_EIN_AUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | unbekannt |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_LAENDERVARIANTE_TELEMATIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Europa |
| 0x01 | US |
| 0x02 | China |
| 0x03 | Rest of world |
| 0x04 | Brasilien |
| 0xFF | nicht definiert |

### TAB_NETZ_TECHNOLOGIE

| WERT | TEXT |
| --- | --- |
| 0x00 | 2 Generation |
| 0x01 | 3 Generation |
| 0x02 | 4 Generaton |
| 0xFF | nicht definiert |

### TAB_NO_YES

| WERT | TEXT |
| --- | --- |
| 0x00 | no |
| 0x01 | yes |
| 0xFF | not defined |

### TAB_PROCESS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Prozess nicht gestartet |
| 0x01 | Prozess läuft |
| 0x02 | Prozess beendet ohne Fehler |
| 0x03 | Prozess beendet mit Fehler |
| 0xFF | nicht definiert |

### TAB_PS_REGSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nicht registriert und nicht suchend |
| 0x02 | Registriert |
| 0x03 | Nicht registriert und suchend |
| 0x04 | Registrierung abgelehnt |
| 0x05 | Registriert und Roaming |
| 0x06 | Registriert und Roaming OFF NET |
| 0x07 | Notruf bereit |
| 0xFF | nicht definiert |

### TAB_RET_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | prepostprocessing neg. response |
| 0x02 | prepostprocessing timeout |
| 0x03 | ret_data exceeds 0xF000 bytes |
| 0xFF | Wert ungültig |

### TAB_SIM_FALLBACK_ERROR_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht definiert |
| 0x11 | kein Netzwerk |
| 0x12 | Antwort senden fehlgeschlagen |
| 0x13 | Handshake fehlgeschlagen |
| 0x14 | HTTP Fehler |
| 0x15 | Refresh fehlgeschlagen |
| 0x17 | SM-SR Einstellung fehlen |
| 0x20 | Fallback ausgelöst durch Fallback App |
| 0xFF | nicht definiert |

### TAB_SIM_GET

| WERT | TEXT |
| --- | --- |
| 0x00 | Get_information |
| 0x01 | Get_last_response |

### TAB_SIM_PROFILE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | auswählbar |
| 0x01 | personalisiert |
| 0x02 | deaktiviert |
| 0x03 | verborgen |
| 0x04 | aktiviert |
| 0xFF | Wert ungültig |

### TAB_SIM_SUA_STATE

| WERT | TEXT |
| --- | --- |
| 0x0000 | nicht definiert |
| 0x1001 | SUA Status deaktiviert - Aktivierung über ATM möglich |
| 0x1002 | SUA Status aktiviert - Warten auf Netzwerk |
| 0x1003 | SUA Status aktiviert - Warten auf MCC |
| 0x1004 | SUA Status aktiviert - Nachricht bereit zum Senden |
| 0x1005 | SUA Status aktiviert - SU Nachricht gesendet - Warten auf Finalisierung |
| 0x1006 | SUA Status deaktiviert - Finalisierung erhalten - Aktivierung gesperrt |
| 0x100A | SUA Status aktiviert - Nachricht kann nicht gesendet werden |
| 0x100B | SUA Status aktiviert - Problem bei Senden der Nachricht |
| 0x100C | SUA Status aktiviert - Nachricht ausgelöst - Warten auf Rückmeldung |
| 0x1120 | Subscription Aktivierungstatus - Idle |
| 0x1130 | Subscription Aktivierungstatus - Parken - Warten auf Netzwerk |
| 0x1131 | Subscription Aktivierungstatus - Parken - Aktualisierung ausgelöst |
| 0x1140 | Subscription Aktivierungstatus - Profil Container Wechsel detektiert - Warten auf Netzwerk |
| 0x1141 | Subscription Aktivierungstatus - Profil Container Wechsel detektiert - Warten auf Handshake |
| 0x1148 | Subscription Aktivierungstatus - Profil Container Wechsel abgeschlossen |
| 0x1150 | Subscription Aktivierungstatus - Fallback erkannt |
| 0x1160 | Subscription Aktivierungstatus - Interne Fehler |
| 0xFFFF | Wert ungültig |

### TAB_SOS_CAN_BOTSCHAFT

| WERT | TEXT |
| --- | --- |
| 0x00 | SOS-Botschaften werden gesendet |
| 0x01 | SOS-Botschaften werden nicht gesendet |

### TAB_SOS_DEAKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Senden von SOS-Nachrichten aktivieren |
| 0x01 | Senden von SOS-Nachrichten deaktivieren |

### TAB_STAT_SIM_PROFILE_DOWLOAD

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | erfolgreich beendet |
| 0x03 | beendet mit Fehler |
| 0x04 | nicht gestartet |
| 0xFF | Wert ungültig |

### TAB_STAT_SIM_PROFILE_SWITCH

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | erfolgreich beendet |
| 0x03 | beendet mit Fehlern |
| 0x04 | nicht gestartet |
| 0x05 | unbekannter Profil-Identifikator |
| 0x06 | läuft - warten auf Parkmodus |
| 0xFF | Wert ungültig |

### TAB_TASTER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Taste nicht betätigt |
| 0x01 | Taste betätigt |
| 0x02 | nicht verbaut oder codiert |
| 0xFF | Ungültig |

### TAB_TDAACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | Leerlauf, derzeit nicht aktiv |
| 0x02 | Aktivierung läuft |
| 0x03 | Aktivierung fehlgeschlagen |
| 0x04 | Aktivierung erfolgreich |
| 0xFF | nicht definiert |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TAB_VERBAUORT_TELEMATIK_ECU

| WERT | TEXT |
| --- | --- |
| 0x00 | Kofferraum |
| 0x01 | Dach |
| 0x02 | Instrumententafel |
| 0xFF | nicht definiert |

### TAB_VERBAU_CECALL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle |
| 0x00000001 | Telematik-Antenne1 |
| 0x00000002 | Telematik-Antenne2 |
| 0x00000004 | GPS-Antenne |
| 0x00000008 | Backup-Lautsprecher |
| 0x00000010 | E-Call-Button |
| 0x00000020 | E-Call-LED |
| 0x00000040 | E-Batterie |
| 0x00000080 | Airbag-Leitung |
| 0x00000100 | WLAN-Antenne |
| 0x00000200 | Mikrophon1 |
| 0xFFFFFFFF | nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### TEVENTECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | TIME_UPDATE_1 |
| 0x02 | TIME_UPDATE_2 |
| 0x03 | MILAGE_1 |
| 0x04 | MILAGE_2 |
| 0x05 | MILAGE_3 |
| 0x06 | MILAGE_4 |
| 0x07 | GPS_QUALITY_1 |
| 0x08 | GPS_QUALITY_2 |
| 0x09 | GPS_POS_LONGITUDE_1 |
| 0x0A | GPS_POS_LONGITUDE_2 |
| 0x0B | GPS_POS_LONGITUDE_3 |
| 0x0C | GPS_POS_LONGITUDE_4 |
| 0x0D | GPS_POS_LATITUDE_1 |
| 0x0E | GPS_POS_LATITUDE_2 |
| 0x0F | GPS_POS_LATITUDE_3 |
| 0x10 | GPS_POS_LATITUDE_4 |
| 0x11 | AIRBAG_CONTEXT |
| 0x12 | NETWORK_MCC_1 |
| 0x13 | NETWORK_MCC_2 |
| 0x14 | NETWORK_MCC_3 |
| 0x15 | NETWORK_MCC_4 |
| 0x16 | NETWORK_MNC_1 |
| 0x17 | NETWORK_MNC_2 |
| 0x18 | NETWORK_MNC_3 |
| 0x19 | NETWORK_MNC_4 |
| 0x1A | NETWORK_CELL_ID_1 |
| 0x1B | NETWORK_CELL_ID_2 |
| 0x1C | NETWORK_SIGNAL_STRENGTH_1 |
| 0x1D | NETWORK_SIGNAL_STRENGTH_2 |
| 0x1E | PHONE_NUMBER_DIGIT_1 |
| 0x1F | PHONE_NUMBER_DIGIT_2 |
| 0x20 | PHONE_NUMBER_DIGIT_3 |
| 0x21 | PHONE_NUMBER_DIGIT_4 |
| 0x22 | PHONE_NUMBER_DIGIT_5 |
| 0x23 | PHONE_NUMBER_DIGIT_6 |
| 0x24 | PHONE_NUMBER_DIGIT_7 |
| 0x25 | PHONE_NUMBER_DIGIT_8 |
| 0x26 | PHONE_NUMBER_DIGIT_9 |
| 0x27 | PHONE_NUMBER_DIGIT_10 |
| 0x28 | PHONE_NUMBER_DIGIT_11 |
| 0x29 | PHONE_NUMBER_DIGIT_12 |
| 0x2A | PHONE_NUMBER_DIGIT_13 |
| 0x2B | PHONE_NUMBER_DIGIT_14 |
| 0x2C | PHONE_NUMBER_DIGIT_15 |
| 0x2D | PHONE_NUMBER_DIGIT_16 |
| 0x2E | PHONE_NUMBER_DIGIT_17 |
| 0x2F | PHONE_NUMBER_DIGIT_18 |
| 0x30 | PHONE_NUMBER_DIGIT_19 |
| 0x31 | PHONE_NUMBER_DIGIT_20 |
| 0x32 | PHONE_NUMBER_DIGIT_21 |
| 0x33 | PHONE_NUMBER_DIGIT_22 |
| 0x34 | PHONE_NUMBER_DIGIT_23 |
| 0x35 | PHONE_NUMBER_DIGIT_24 |
| 0x36 | PHONE_NUMBER_DIGIT_25 |
| 0x37 | PHONE_NUMBER_DIGIT_26 |
| 0x38 | PHONE_NUMBER_DIGIT_27 |
| 0x39 | PHONE_NUMBER_DIGIT_28 |
| 0x3A | SUPPORTED_TYPE_PROVISIONING |
| 0x3B | SUPPORTED_TYPE_CODING |
| 0x4B | TIME_ECALL_TRIGGER_UPDATE |
| 0x4C | TIME_ECALL_ACTIVE |
| 0x4D | TIME_ECALL_ABORTED |
| 0x4E | TIME_NETWORK_REGISTRATION |
| 0x4F | TIME_ANTENNA_SWITCHED |
| 0x50 | TIME_FIRE_FORGET_SMS_STARTED |
| 0x51 | TIME_FIRE_FORGET_SMS_DELIVERED |
| 0x52 | TIME_VOICE_CALL_DIALING |
| 0x53 | TIME_VOICE_CALL_ESTABLISHED |
| 0x54 | TIME_VOICE_CALL_TERMINATED_USER |
| 0x55 | TIME_VOICE_CALL_TERMINATED_COMMAND |
| 0x56 | TIME_VOICE_CALL_TERMINATED_REMOTE |
| 0x57 | TIME_INCOMING_VOICE_CALL_ACCEPTED |
| 0x58 | TIME_EU_ECALL_DATA_TRANSMISSION_STARTED |
| 0x59 | TIME_EU_ECALL_DATA_TRANSMISSION_SUCCESS |
| 0x5A | TIME_ASSIST_ECALL_DATA_SEND_STARTED |
| 0x5B | TIME_ASSIST_ECALL_DATA_SEND_SUCCESS |
| 0x5C | TIME_ASSIST_ECALL_DATA_TRANSMISSION_SUCCESS |
| 0x5D | TIME_ECALL_INACTIVE |
| 0x5E | TIME_ECALL_STANDBY_STARTED |
| 0x5F | TIME_ECALL_STANDBY_ENDED |
| 0x60 | TIME_SWITCH_POWER_SUPPLY |
| 0x7D | TRIGGER_SOURCE |
| 0x7E | CLAMP_STATUS |
| 0x7F | VEH_MOVEMENT |
| 0x80 | LAST_WAKEUP_REASON |
| 0x81 | ENGINE_STATUS |
| 0x82 | SELECTED_ANTENNA |
| 0x83 | TERMINATION_SOURCE |
| 0x84 | TERMINATION_REASON |
| 0x85 | BEARER |
| 0x86 | VEH_BATTERY_STATUS |
| 0x87 | VEH_BUS_STATUS |
| 0x88 | NEW_POWER_SOURCE |
| 0x89 | DISABLE_ENABLE_REASON |
| 0x8A | NEW_STATUS_ECALL_AUTOMATIC |
| 0x8B | NEW_STATUS_ECALL_MANUAL |
| 0x8C | ECALL_TYPE |
| 0x8D | GPS_SATELLITES |
| 0x8E | GLONASS_SATELLITES |
| 0x8F | GALILEO_SATELLITES |
| 0x90 | MSD_FORMAT |
| 0x91 | MSD_MESSAGE_ID |
| 0x92 | MSD_TESTCALL |
| 0x93 | MSD_VEHICLE_TYPE |
| 0x94 | MSD_VIN |
| 0x95 | MSD_PSTORAGE_GASOLINE_TANK |
| 0x96 | MSD_PSTORAGE_DIESEL_TANK |
| 0x97 | MSD_PSTORAGE_COMPRESSED_NATURAL_GAS |
| 0x98 | MSD_PSTORAGE_LIQUID_PROPANE_GAS |
| 0x99 | MSD_PSTORAGE_ELECTRIC_ENERGY |
| 0x9A | MSD_PSTORAGE_HYDROGEN |
| 0x9B | MSD_VEHICLE_DIRECTION |
| 0x9C | MSD_NUMBER_OF_PASSENGERS |
| 0x9D | MSD_OPTIONAL_ADDITIONAL_DATA |
| 0xFF | Nicht definiert |

### TGPSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstuetzt: Kein GPS |
| 0x01 | Nicht unterstuetzt: Kommunikationsfehler |
| 0x02 | Receiverfehler |
| 0x03 | Kein almanac |
| 0x04 | Suche Satelliten |
| 0x05 | Ortung Satellit 1 |
| 0x06 | Ortung Satellit 2 |
| 0x07 | Ortung Satellit 3 |
| 0x08 | Ortung Satellit 4 |
| 0x09 | Ortung Satellit 5 |
| 0x0A | Ortung Satellit 6 |
| 0x0B | 2D Position |
| 0x0C | 3D Position |
| 0xFF | Nicht definiert |

### TLSC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gestartet |
| 0x01 | läuft noch |
| 0x02 | beendet ohne Fehler |
| 0x03 | beendet mit Fehlern |
| 0x04 | untebrochen |
| 0xFF | nicht definiert |

### TPOWERGUARDNAD

| WERT | TEXT |
| --- | --- |
| 0x00FF | N/A |
| 0x0100 | IS_RUNNING_ON_BUB_GR_5S |
| 0x0101 | IS_REMOTE_SERVICE |
| 0x0102 | IS_RS_COM_REQ_GRANTED |
| 0x0103 | PP_NAO_ENABLE |
| 0x0104 | NAO_COUNT_DOWN |
| 0x0105 | IS_ECALL |
| 0x0106 | STARTUP_NAD_TRIES |
| 0x0107 | NAO_TIMER_EXPIRED |
| 0x0108 | IS_REMOTE_SERVICE_COM_REQ |
| 0x0109 | IS_PINGUIN_COM_REQ |
| 0x010A | IS_NEED_CAN_MCU |
| 0x010B | IS_MTS_MODE |
| 0x010C | IS_NETWORK_REG |
| 0x010D | PERSISTENT_NAO |
| 0x010E | IS_PINGUIN |
| 0x010F | IS_PROVISIONING |
| 0x0110 | WAKEUP_TRIES |
| 0x0111 | IS_TELESERVICE_COM_REQ |
| 0x0112 | FACTORY_MODE |
| 0x0113 | POWER_TARGET_OFF |
| 0x0114 | IS_POWER_DOWN |
| 0x0115 | IS_RAPID_POWER_DOWN |
| 0x0116 | IS_TELESERVICE |
| 0x02FF | N/A |
| 0xFFFF | Nicht definiert |

### TPOWERSTATENAD

| WERT | TEXT |
| --- | --- |
| 0x0000 | Sleep Power Off |
| 0x0001 | Normal Operation |
| 0x0002 | Nad Always On |
| 0x0003 | Nad Always On Debug |
| 0x0004 | MTS |
| 0x0005 | MTS Sleep |
| 0x0006 | Temperature Shutdown |
| 0x0100 | APPL_ACTIVITY |
| 0x0101 | APPL_NAO_2_ON |
| 0x0102 | APPL_OFF_2_ON |
| 0x0103 | APPL_ON_2_NAO |
| 0x0104 | CAN_MCU_CONNECTION_LOST |
| 0x0105 | CONNECTED |
| 0x0106 | FACTORY_MODE |
| 0x0107 | NAO |
| 0x0108 | NAO_NET_REG |
| 0x0109 | NAO_NO_SERVICE |
| 0x010A | NAO_IDLE |
| 0x010B | NAO_SERVICE |
| 0x010C | NAO_NO_NET_REG |
| 0x010D | NAO_SUSPEND |
| 0x010E | POST_NAO_SUSPEND |
| 0x010F | POST_NAO_SUSPEND_U |
| 0x0110 | PRE_NAO_SUSPEND |
| 0x0111 | PRE_NAO_SUSPEND_U |
| 0x0112 | APP_STATE_1 |
| 0x0113 | NAO_EXIT_WAKEUP_CAN_MCU |
| 0x0114 | NAO_EXIT_WAIT |
| 0x0115 | NAO_EXIT_WAKEUP |
| 0x0116 | WAKEUP_TRIES |
| 0x0117 | NORMAL_OPERATION |
| 0x0118 | NORMAL_NO_COMM_REQUEST |
| 0x0119 | NORMAL_NO_SERVICE |
| 0x011A | NO_SERVICE |
| 0x011B | NORMAL_OPERATION_WAIT |
| 0x011C | POWER_DOWN |
| 0x011D | POWER_DOWN_BUB |
| 0x011E | RAPID_POWER_DOWN |
| 0x011F | SERVICE_COMM_REQUEST |
| 0x0120 | ECALL |
| 0x0121 | ECALL_FOLLOWUP |
| 0x0122 | ECALL_MAIN |
| 0x0123 | ECALL_RS_COMM |
| 0x0124 | ECALL_RS_COMM_REQ |
| 0x0125 | ECALL_RS_COM_REQ_GRANTED |
| 0x0126 | RS_COM_REQ |
| 0x0127 | TELEMATIC |
| 0x0128 | DENIED_BY_CAN_MCU |
| 0x0129 | GRANTED_BY_CAN_MCU |
| 0x012A | RS_COMM |
| 0x012B | RS_COMM_REQ |
| 0x012C | RS_COM_REQ_GRANTED |
| 0x012D | SERVICE |
| 0x012E | APP_STATE_2 |
| 0x012F | SHUTDOWN_NAD |
| 0x0130 | APPL_SHUTDOWN |
| 0x0131 | NAD_OFF |
| 0x0132 | POWER_OFF |
| 0x0133 | STARTUP |
| 0x0134 | STARTUP_WAKEUP_CAN_MCU |
| 0x0135 | STARTUP_WAIT |
| 0x0136 | STARTUP_WAKEUP |
| 0x0137 | STARTUP_WAKEUP_TRIES |
| 0x0138 | SYNC_CAN_MCU |
| 0x0139 | MSG_STARTUP_NAD |
| 0x013A | STARTUP_NAD_RETRIES |
| 0x013B | WAIT |
| 0x013C | IS_FACTORY_MODE |
| 0x013D | NAO_TIMER |
| 0x013E | NAO_MODE |
| 0x013F | NAO_COUNT_DOWN |
| 0x0140 | NAO_TIMER_LAST_MINUTE |
| 0x0141 | NAO_TIMER_RUNNING |
| 0x0142 | NAO_TIMER_STOPPED |
| 0x0143 | NAO_TIMER_OFF |
| 0x0144 | IGNITION_ON |
| 0x0145 | PINGUIN_OFF |
| 0x0146 | PINGUIN_ON |
| 0x0147 | PINGUIN_COMM_REQUEST |
| 0x0148 | PINGUIN_COMM_REQUEST_GRANTED |
| 0x0149 | PINGUIN_NO_COMM_REQUEST |
| 0x014A | PROVISIONING_ON |
| 0x014B | PROVISIONING_OFF |
| 0x014C | REMOTE_SERVICE_OFF |
| 0x014D | REMOTE_SERVICE_ON |
| 0x014E | RS_COMM_REQUEST |
| 0x014F | RS_COMM_REQUEST_GRANTED |
| 0x0150 | RS_NO_COMM_REQUEST |
| 0x0151 | TELESERVICE_OFF |
| 0x0152 | TELESERVICE_ON |
| 0x0153 | TS_COMM_REQUEST |
| 0x0154 | TS_COMM_REQUEST_GRANTED |
| 0x0155 | TS_NO_COMM_REQUEST |
| 0x0200 | ERROR_NAD |
| 0x0201 | INIT |
| 0x0202 | NORMAL |
| 0x0203 | OFF |
| 0x0204 | POWERDOWN_NAD |
| 0x0205 | POWERUP_NAD |
| 0x0206 | SHUTDOWN_CANMCU |
| 0x0207 | SHUTDOWN_CANMCU_TWO |
| 0x0208 | SHUTDOWN_NAD |
| 0x0209 | STARTUP_NAD |
| 0x020A | TRANSITION |
| 0xFFFF | Nicht definiert |

### TPOWERSTMNAD

| WERT | TEXT |
| --- | --- |
| 0x00 | System |
| 0x01 | NAD |
| 0x02 | CAN MCU |
| 0xFF | Nicht definiert |

### TPOWERTRIGGERNAD

| WERT | TEXT |
| --- | --- |
| 0x0000 | Initial Power Up |
| 0x0001 | CAN Bus Off |
| 0x0002 | CAN Bus On |
| 0x0003 | NAO Maximum Time Expired |
| 0x0004 | No Network Registration |
| 0x0100 | TRGSERIALCOMCONNECTED |
| 0x0101 | TRGPROVISIONINGUPDATE |
| 0x0102 | TRGSERIALCOMDISCONNECTED |
| 0x0103 | TRGRESUME |
| 0x0104 | TRGREMOTESERVICECOMREL |
| 0x0105 | TRGPROVISIONINGSTART |
| 0x0106 | TRGNONETWORKREG |
| 0x0107 | TRGNAOOFF |
| 0x0108 | TRGTELESERVICECOMREQ |
| 0x0109 | WAITCONNECTED200MS |
| 0x010A | TRGSERIALCOMCLOSED |
| 0x010B | WAITNOCONNECTION30S |
| 0x010C | TRGMODEMEVENT |
| 0x010D | TRGREMOTESERVICECOMREQ |
| 0x010E | WAITNAOSERVICE20MIN |
| 0x010F | TRGWAKEUPBYCANMCU |
| 0x0110 | WAITTSMAXTIMER20MIN |
| 0x0111 | TRGPINGUINCOMREQ |
| 0x0112 | TRGNEEDCANMCU |
| 0x0113 | WAITTSMAXTIME20MIN |
| 0x0114 | TRGRUNLEVELNAO |
| 0x0115 | TRGMTSMODEON |
| 0x0116 | TRGPINGUINSTART |
| 0x0117 | WAITPINGUINMAXTIME10MIN |
| 0x0118 | TRGNOTNEEDCANMCU |
| 0x0119 | WAITRSCOMGRANT500MS |
| 0x011A | WAITWAKEUP2500MS |
| 0x011B | GUARD14 |
| 0x011C | GUARD15 |
| 0x011D | GUARD16 |
| 0x011E | WAITNAO21S |
| 0x011F | WAITNOSERVICE6S |
| 0x0120 | GUARD17 |
| 0x0121 | GUARD18 |
| 0x0122 | GUARD19 |
| 0x0123 | GUARD10 |
| 0x0124 | GUARD11 |
| 0x0125 | GUARD12 |
| 0x0126 | GUARD13 |
| 0x0127 | TRGRESUMENAOTIMER |
| 0x0128 | TRGVEHICLEIGNITIONON |
| 0x0129 | TRGPINGUINCOMREL |
| 0x012A | TRGRPCSHUTDOWNOFF |
| 0x012B | TRGNORUNNINGONBUB |
| 0x012C | TRGRUNLEVELOFF |
| 0x012D | TRGPROVISIONINGFINISHED |
| 0x012E | TRGMTSMODEOFF |
| 0x012F | TRGRPCNCRRSGRANTED |
| 0x0130 | WAITSYNCCANMCU500MS |
| 0x0131 | TRGREMOTESERVICEFINISHED |
| 0x0132 | WAITRSMAXTIME5MIN |
| 0x0133 | TRGNETWORKREG |
| 0x0134 | WAITNONETWORKREG120S |
| 0x0135 | TRGPINGUINFINISHED |
| 0x0136 | TRGRPCSHUTDOWNNAO |
| 0x0137 | TRGTELESERVICECOMREL |
| 0x0138 | TRGRPCNCRECALLRSNOTGRANTORTIMEOUT |
| 0x0139 | GUARD33 |
| 0x013A | GUARD32 |
| 0x013B | GUARD35 |
| 0x013C | GUARD34 |
| 0x013D | TRGPOWERDOWN |
| 0x013E | TRGRUNLEVELON |
| 0x013F | GUARD31 |
| 0x0140 | GUARD30 |
| 0x0141 | WAITRSMAXTIMER20MIN |
| 0x0142 | GUARD37 |
| 0x0143 | WAITWACKUP40MS |
| 0x0144 | GUARD36 |
| 0x0145 | WAITNONETREGSERVICE20MIN |
| 0x0146 | GUARD39 |
| 0x0147 | GUARD38 |
| 0x0148 | TRGRAPIDPOWERDOWN |
| 0x0149 | TRGRSCOMREQGRANTED |
| 0x014A | TRGTELESERVICESTART |
| 0x014B | TRGRPCNCRECALLRSGRANTED |
| 0x014C | TRGVEHICLEON |
| 0x014D | TRGVEHICLEOFF |
| 0x014E | GUARD24 |
| 0x014F | WAITNAOIDLE6S |
| 0x0150 | GUARD23 |
| 0x0151 | GUARD22 |
| 0x0152 | GUARD21 |
| 0x0153 | TRGRUNNINGONBUBGR5S |
| 0x0154 | GUARD20 |
| 0x0155 | TRGECALLFOLLOWUP |
| 0x0156 | GUARD29 |
| 0x0157 | TRGECALLFINISHED |
| 0x0158 | GUARD28 |
| 0x0159 | GUARD27 |
| 0x015A | GUARD26 |
| 0x015B | GUARD25 |
| 0x015C | WAITPROVMAXTIME10MIN |
| 0x015D | GUARD51 |
| 0x015E | GUARD61 |
| 0x015F | GUARD50 |
| 0x0160 | GUARD62 |
| 0x0161 | GUARD53 |
| 0x0162 | GUARD63 |
| 0x0163 | GUARD52 |
| 0x0164 | GUARD64 |
| 0x0165 | GUARD55 |
| 0x0166 | GUARD65 |
| 0x0167 | GUARD54 |
| 0x0168 | GUARD66 |
| 0x0169 | TRGWAITSERIALCOMDISCONNECT400MS |
| 0x016A | GUARD57 |
| 0x016B | GUARD67 |
| 0x016C | GUARD56 |
| 0x016D | GUARD68 |
| 0x016E | GUARD59 |
| 0x016F | GUARD69 |
| 0x0170 | GUARD58 |
| 0x0171 | TRGRPCREPONSENADSTARTUP |
| 0x0172 | TRGSERIALCOMUARTOPENED |
| 0x0173 | GUARD71 |
| 0x0174 | GUARD60 |
| 0x0175 | GUARD70 |
| 0x0176 | GUARD42 |
| 0x0177 | TRGSERIALCOMUARTCLOSED |
| 0x0178 | GUARD41 |
| 0x0179 | GUARD40 |
| 0x017A | GUARD72 |
| 0x017B | TRGCODINGUPDATE |
| 0x017C | GUARD73 |
| 0x017D | TRGECALLSTART |
| 0x017E | GUARD46 |
| 0x017F | GUARD45 |
| 0x0180 | GUARD44 |
| 0x0181 | WAITNAO1S |
| 0x0182 | GUARD43 |
| 0x0183 | TRGSTARTNAOTIMER |
| 0x0184 | GUARD6 |
| 0x0185 | GUARD5 |
| 0x0186 | GUARD49 |
| 0x0187 | GUARD48 |
| 0x0188 | GUARD8 |
| 0x0189 | WAITNONETREGIDLE6S |
| 0x018A | GUARD47 |
| 0x018B | GUARD7 |
| 0x018C | GUARD9 |
| 0x018D | TRGTELESERVICEFINISHED |
| 0x018E | GUARD0 |
| 0x018F | GUARD1 |
| 0x0190 | TRGNAOTIMEREXPIRED |
| 0x0191 | GUARD2 |
| 0x0192 | TRGAPPSTATECHANGE |
| 0x0193 | GUARD3 |
| 0x0194 | GUARD4 |
| 0x0195 | TRGRPCNCRRSNOTGRANTORTIMEOUT |
| 0x0196 | WAITNAOSERVICE10MIN |
| 0x0197 | TRGRSCOMREQDENIED |
| 0x0198 | TRGREMOTESERVICESTART |
| 0x02FF | N/A |
| 0xFFFF | Nicht definiert |

### TPROVISIONINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IDLE wurde nicht gestartet |
| 0x01 | ACTIVE laeuft noch |
| 0x02 | SUCCESS alles OK |
| 0x03 | mit Fehler beendet |
| 0xFF | Nicht definiert |

### TPROVISIONINGSTATUSECALL

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler beendet |
| 0x04 | wurde nicht gestartet |
| 0xFF | nicht definiert |

### TRESETSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | läuft noch |
| 0x02 | alles OK |
| 0x03 | mit Fehler |
| 0x04 | wurde nicht gestartet |
| 0xFF | undefinierter Zustand |

### TSTATEECALLLOG

| WERT | TEXT |
| --- | --- |
| 0x0000 | DEFAULT |
| 0x7D01 | ECALL_SOURCE_HARDKEY |
| 0x7D02 | ECALL_SOURCE_SERIAL_AIRBAG_INTERFACE |
| 0x7D03 | ECALL_SOURCE_EXTERNAL |
| 0x7D04 | ECALL_SOURCE_MOST_MESSAGE |
| 0x7D05 | ECALL_SOURCE_CAN_MESSAGE |
| 0x7E01 | CLAMP_RESERVE |
| 0x7E02 | CLAMP_30 |
| 0x7E03 | CLAMP_30F_CHANGE |
| 0x7E04 | CLAMP_30_ON |
| 0x7E05 | CLAMP_30B_CHANGE |
| 0x7E06 | CLAMP_30B_ON |
| 0x7E07 | CLAMP_R_CHANGE |
| 0x7E08 | CLAMP_R_ON |
| 0x7E09 | CLAMP_15_CHANGE |
| 0x7E0A | CLAMP_15_ON |
| 0x7E0B | CLAMP_50_DELAY |
| 0x7E0C | CLAMP_50_CHANGE |
| 0x7E0D | CLAMP_50_ON |
| 0x7E0E | CLAMP_ERROR |
| 0x7E0F | CLAMP_INVALID |
| 0x7F00 | MOVEMENT_NO |
| 0x7F01 | MOVEMENT_YES |
| 0x8000 | WAKEUP_REASON_UNKNOWN |
| 0x8001 | WAKEUP_REASON_REGULAR |
| 0x8002 | WAKEUP_REASON_REMOTE |
| 0x8100 | ENGINE_OFF |
| 0x8101 | ENGINE_ON |
| 0x8200 | ANTENNA_UNKNOWN |
| 0x8201 | ANTENNA_MAIN |
| 0x8202 | ANTENNA_BACKUP |
| 0x8300 | TERM_SOURCE_UNKNOWN |
| 0x8301 | TERM_SOURCE_MFL |
| 0x8302 | TERM_SOURCE_MMI |
| 0x8400 | TERM_REASON_UNKNOWN |
| 0x8401 | TERM_REASON_NETWORK |
| 0x8402 | TERM_REASON_HANGUP |
| 0x8500 | BEARER_UNKNOWN |
| 0x8501 | BEARER_SMS |
| 0x8502 | BEARER_INBAND |
| 0x8503 | BEARER_DTMF |
| 0x8600 | BATT_RELIABLE_NO |
| 0x8601 | BATT_RELIABLE_YES |
| 0x8700 | BUS_ACTIVE_NO |
| 0x8701 | BUS_ACTIVE_YES |
| 0x8800 | POWER_SOURCE_UNKNONW |
| 0x8801 | POWER_SOURCE_VEHICLE |
| 0x8802 | POWER_SOURCE_BACKUP_BATTERY |
| 0x8900 | REASON_PROVISIONING |
| 0x8901 | REASON_DIAG |
| 0x8902 | REASON_CODING |
| 0x8903 | REASON_MMI |
| 0x8904 | REASON_MMI_STARTUP |
| 0x8A00 | AUTO_ENABLED_ANY_NETWORK_NO |
| 0x8A01 | AUTO_ENABLED_ANY_NETWORK_YES |
| 0x8B00 | MAN_ENABLED_ANY_NETWORK_NO |
| 0x8B01 | MAN_ENABLED_ANY_NETWORK_YES |
| 0x8C01 | ASSIST |
| 0x8C02 | ERA |
| 0x8C03 | EU |
| 0x8C04 | PSAP |
| 0x9200 | TESTCALL_NO |
| 0x9201 | TESTCALL_YES |
| 0x9500 | GASOLINE_TANK_NO |
| 0x9501 | GASOLINE_TANK_YES |
| 0x9600 | DIESEL_TANK_NO |
| 0x9601 | DIESEL_TANK_YES |
| 0x9700 | COMPRESSED_NATURAL_GAS_NO |
| 0x9701 | COMPRESSED_NATURAL_GAS_YES |
| 0x9800 | LIQUID_PROPANE_GAS_NO |
| 0x9801 | LIQUID_PROPANE_GAS_YES |
| 0x9900 | ELECTRIC_ENERGY_NO |
| 0x9901 | ELECTRIC_ENERGY_YES |
| 0x9A00 | HYDROGEN_NO |
| 0x9A01 | HYDROGEN_YES |
| 0xFFFF | Nicht definiert |

### TSIMSTATUS

| WERT | TEXT |
| --- | --- |
| 0xff | undefinierter Status |
| 0x00 | nicht eingebucht, sucht kein Netz |
| 0x01 | eingebucht |
| 0x02 | nicht eingebucht, sucht ein Netz |
| 0x03 | einbuchen verweigert |
| 0x04 | eingebucht und roaming |
| 0x05 | eingebucht und roaming off-net |
| 0x10 | Emergency Call bereit |

### TABACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |
| 0xFF | Nicht fediniert |

### TABERRORSTATUSOTDLSC

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler aufgetreten |
| 0x01 | Intern abgeschaltet |
| 0x02 | Provisioning nicht angekommen |
| 0x03 | OtD LSC nicht in der Telematik-Provisionierung |
| 0x04 | F-Status kleiner als 0x0100 |
| 0x05 | F-Status größer oder gleich als 0x0400 |
| 0x06 | Realtime clearance was not obtained |
| 0x07 | Realtime provisioning was not granted |
| 0xFF | Nicht definiert |

### TABSTATUSOTDLSC

| WERT | TEXT |
| --- | --- |
| 0x0000 | Default-Wert (deaktiviert) |
| 0x0100 | F1 aktiviert OtD LSC |
| 0x0200 | F2 aktiviert OtD LSC |
| 0x0300 | F3 deaktiviert OtD LSC |
| 0x0400 | F4 deaktiviert OtD LSC |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |
