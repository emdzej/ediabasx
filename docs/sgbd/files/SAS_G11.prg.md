# SAS_G11.prg

## General

|  |  |
| --- | --- |
| File | SAS_G11.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 95 |
| Origin | BMW EF-630 Wolfgang_Griener |
| Revision | 7.000 |
| Author | Conti_Temic C_CHS_CE Michael_Postemer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sonderausstattungs Steuergerät |  |  |
| ORIGIN | string | BMW EF-630 Wolfgang_Griener |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | Conti_Temic C_CHS_CE Michael_Postemer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.70 |  |  |
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

### STATUS_ETH_ARL_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1042

| Name | Type | Description |
| --- | --- | --- |
| PORT_INDEX | unsigned char | Port index of the requested ARL table. The ARL table of all external ports of the ECU shall be returned if PORT_INDEX=0xff. 1 byte uint8 {Port 0 - Port n-1 (for n Ports total), 0xff = ARL table of all ports.} |

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

### _DUMMY

Zur Definition eines beliebigen Jobs Freie Auswahl eines Single Frames interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| JOB_LAENGE | char | soll: Anzahl der Parameter + 1 kann frei gewählt werden (0...21) |
| SG_ADRESSE | char | soll: Adresse des Ziel-SG (ICMV: 0x39) |
| TESTER_ADRESSE | char | soll: Adresse des Testers (normal: 0xF4 Ethernet) |
| JOB_NR | char | soll: Job nach UDS |
| PARAMETER_1 | char | Freie Wahl |
| PARAMETER_2 | char | Freie Wahl |
| PARAMETER_3 | char | Freie Wahl |
| PARAMETER_4 | char | Freie Wahl |
| PARAMETER_5 | char | Freie Wahl |
| PARAMETER_6 | char | Freie Wahl |
| PARAMETER_7 | char | Freie Wahl |
| PARAMETER_8 | char | Freie Wahl |
| PARAMETER_9 | char | Freie Wahl |
| PARAMETER_10 | char | Freie Wahl |
| PARAMETER_11 | char | Freie Wahl |
| PARAMETER_12 | char | Freie Wahl |
| PARAMETER_13 | char | Freie Wahl |
| PARAMETER_14 | char | Freie Wahl |
| PARAMETER_15 | char | Freie Wahl |
| PARAMETER_16 | char | Freie Wahl |
| PARAMETER_17 | char | Freie Wahl |
| PARAMETER_18 | char | Freie Wahl |
| PARAMETER_19 | char | Freie Wahl |
| PARAMETER_20 | char | Freie Wahl |

### _DUMMY_LONG

Zur Definition eines beliebigen Jobs interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Job-Länge (SID + Daten) Byte 1              : SG-Adresse Byte 2              : Tester-Adresse Byte 3              : SID Byte 4..Byte x      : Daten |

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

### ARG_0X1049_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den die Daten ausgelesen werden sollen. Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports)  Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X104C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, für den der Testmodus geschaltet werden soll. |
| TEST_DURATION | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit, für die der Testmodus geschaltet werden soll. Der Wert wird im SG mit 10 multipliziert, so dass die Testdauer von 0s bis 2550s variiert werden kann. |
| TEST_MODE_ID | + | - | 0-n | high | unsigned char | - | ETH_TEST_MODE_TAB | - | - | - | - | - | ID des Testmodus, in den der PHY geschaltet werden soll |

### ARG_0X6660_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Error number that shall be sent to the navigation (signal ST_ERR_NO_RCVR_NAVI), Range 0-255 |
| RESYNC_RATE | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Specifies the time (in seconds) between two consecutive resync requests. A value of zero leads to exactly one resync request. |

### ARG_0XDB25_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRIGGER | 0-n | high | unsigned char | - | TAB_LCA_TRIGGER | - | - | - | - | - | Typ der simulierten Warnung |

### ARG_0XF008_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Index des Ports, an dem der Test gestartet werden soll (Wertebereich: Port 0 - Port n-1 bei insgesamt n Ports) |
| LOOPBACK_MODE | + | - | 0-n | high | unsigned char | - | ETH_LOOPBACK_TEST_END_OF_LINE_TAB | - | - | - | - | - | 1 = internal loopback mode 2 = external lookback mode 3 = remote external loopback mode |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | - | - | - | - | supplierInfo |

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

### ETH_LOOPBACK_TEST_END_OF_LINE_TAB

| WERT | TEXT |
| --- | --- |
| 1 | internal loopback mode |
| 2 | external loopback mode |
| 3 | remote external loopback mode |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022200 | Energiesparmode aktiv | 0 |
| 0x022203 | Externe SWT-Prüfbedingung nicht erfüllt | 1 |
| 0x022204 | Interne SWT-Prüfung fehlgeschlagen | 0 |
| 0x022208 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022209 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02220A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02220B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02220C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02220D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF22 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030800 | FAS - Globale Sicherheitsabschaltung | 0 |
| 0x030801 | FAS - ACC/DCC - Sicherheitsabschaltung | 0 |
| 0x030802 | FAS - SpeedLimiter - Sicherheitsabschaltung | 0 |
| 0x030804 | FAS - Frontschutz - Sicherheitsabschaltung | 0 |
| 0x030806 | FAS - Parkfunktion Längsführung - Sicherheitsabschaltung | 0 |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 1 |
| 0x030831 | FAS - Querführung - Sicherheitsabschaltung (LCA) | 0 |
| 0x030832 | FAS - Bahnplanung/Bahnführung - Sicherheitsabschaltung | 0 |
| 0x030833 | FAS - Ferngesteuertes Parken - Nicht verfügbar oder Abbruch | 0 |
| 0x030852 | FAS - Systemgrenzen für Testbetrieb aufgeweitet | 0 |
| 0x482E92 | Spannungsversorgung - Lokale Überspannung | 0 |
| 0x482E93 | Spannungsversorgung - Lokale Unterspannung | 0 |
| 0x482E94 | Spannungsversorgung - Globale Überspannung intern | 1 |
| 0x482E95 | Spannungsversorgung - Globale Überspannung extern | 1 |
| 0x482E96 | Spannungsversorgung - Globale Unterspannung intern | 1 |
| 0x482E97 | Spannungsversorgung - Globale Unterspannung extern | 1 |
| 0x482EDC | Steuergerät intern - ECU - defekt | 0 |
| 0x482F50 | Steuergerät intern - HW-Fehler | 0 |
| 0x482F51 | Steuergerät intern - interner SW-Fehler | 0 |
| 0xD1841F | Flexray:  Physikalischer Busfehler | 0 |
| 0xD18420 | FLEXRAY Controller Error | 0 |
| 0xD18487 | FLEXRAY StartUpFailed | 0 |
| 0xD18600 | Ethernet: Kommunikationsfehler (Link-Abbruch) | 1 |
| 0xD18602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xD18603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xD18604 | Ethernet: Unerwarteter Link aufgebaut | 1 |
| 0xD18BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD19418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 |
| 0xD19419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 |
| 0xD1941A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 |
| 0xD19428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD1942C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD19441 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Timeout | 1 |
| 0xD19445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Checksumme | 1 |
| 0xD19450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 |
| 0xD19451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 |
| 0xD19476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 |
| 0xD19495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Checksumme | 1 |
| 0xD19496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Alive | 1 |
| 0xD194A6 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Timeout | 1 |
| 0xD194A7 | Signalfehler  (Bedienung Taster Parken, ID: OP_PUBU_PKG) - Ungültig | 1 |
| 0xD194B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 |
| 0xD194B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD194B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD194BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD194BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD194C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD194C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 |
| 0xD194C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD194C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD194D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Timeout | 1 |
| 0xD194D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Checksumme | 1 |
| 0xD194D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Alive | 1 |
| 0xD194DC | Signalfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Ungültig | 1 |
| 0xD194E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 |
| 0xD194E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD194E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Checksumme | 1 |
| 0xD194EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xD194EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xD194F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD194F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD194FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 |
| 0xD19508 | Signalfehler (Status Funktion PDC, ID: ST_FN_PDC) - Ungültig | 1 |
| 0xD19513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 |
| 0xD1951C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD19526 | Signalfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Ungültig | 1 |
| 0xD19528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Timeout | 1 |
| 0xD19529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Checksumme | 1 |
| 0xD1952A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Alive | 1 |
| 0xD1952E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Ungültig | 1 |
| 0xD19532 | Botschaftsfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Timeout | 1 |
| 0xD19536 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Ungültig | 1 |
| 0xD19538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Timeout | 1 |
| 0xD19539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Checksumme | 1 |
| 0xD1953A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Alive | 1 |
| 0xD1953E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Ungültig | 1 |
| 0xD19542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xD19543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 |
| 0xD19544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD19548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD19550 | Botschaftsfehler (Objekt** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19551 | Botschaftsfehler (Objekt** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 |
| 0xD19570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD19571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 |
| 0xD19572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 |
| 0xD1957A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD195A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD195A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD195AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Timeout | 1 |
| 0xD195B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Ungültig | 1 |
| 0xD195B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Timeout | 1 |
| 0xD195B8 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Ungültig | 1 |
| 0xD195BC | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Timeout | 1 |
| 0xD195BD | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Checksumme | 1 |
| 0xD195BE | Botschaftsfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Alive | 1 |
| 0xD195C0 | Botschaftsfehler (Objekt** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) Alive | 1 |
| 0xD195C1 | Botschaftsfehler (Objekt** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) Alive | 1 |
| 0xD195C2 | Signalfehler (Status Stabilisierung DSC, ID: ST_STAB_DSC) - Ungültig | 1 |
| 0xD195C7 | Botschaftsfehler (Objekt** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) Alive | 1 |
| 0xD195CD | Botschaftsfehler (Objekt** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) Alive | 1 |
| 0xD195CE | Botschaftsfehler (Objekt** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) Alive | 1 |
| 0xD195CF | Botschaftsfehler (Objekt** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) Alive | 1 |
| 0xD195DF | Botschaftsfehler (Potentialvektor Beschleunigung, ID: PVE_ACLN) Alive | 1 |
| 0xD195E0 | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) Alive | 1 |
| 0xD195E1 | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) Alive | 1 |
| 0xD195E5 | Botschaftsfehler (Potentialvektor Schwimmwinkel X Wert, ID: PVE_ATTA_X_VL) Alive | 1 |
| 0xD195E8 | Botschaftsfehler (Potentialvektor Schwimmwinkel Y Wert, ID: PVE_ATTA_Y_VL) Alive | 1 |
| 0xD195E9 | Botschaftsfehler (Potentialvektor Änderung Krümmung X Wert 1, ID: PVE_X_VL_1_CHNG_CRV) Alive | 1 |
| 0xD195ED | Botschaftsfehler (Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) Alive | 1 |
| 0xD195EE | Botschaftsfehler (Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) Alive | 1 |
| 0xD195EF | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel, ID: PVE_CHNG_ATTA_Y_VL) Alive | 1 |
| 0xD195F6 | Botschaftsfehler (Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) Alive | 1 |
| 0xD195F7 | Botschaftsfehler (Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) Alive | 1 |
| 0xD19605 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Alive | 1 |
| 0xD19606 | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Alive | 1 |
| 0xD1960C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 |
| 0xD19615 | Botschaftsfehler (Objekt** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19616 | Botschaftsfehler (Objekt** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) Checksumme | 1 |
| 0xD19617 | Botschaftsfehler (Objekt** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) Checksumme | 1 |
| 0xD1961A | Botschaftsfehler (Objekt** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) Checksumme | 1 |
| 0xD1961B | Botschaftsfehler (Potentialvektor Beschleunigung, ID: PVE_ACLN) Checksumme | 1 |
| 0xD1961F | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) Checksumme | 1 |
| 0xD1962D | Botschaftsfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Timeout | 1 |
| 0xD19634 | Botschaftsfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Timeout | 1 |
| 0xD19637 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Timeout | 1 |
| 0xD1963B | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) Checksumme | 1 |
| 0xD1963C | Botschaftsfehler (Potentialvektor Schwimmwinkel X Wert, ID: PVE_ATTA_X_VL) Checksumme | 1 |
| 0xD1963D | Botschaftsfehler (Potentialvektor Schwimmwinkel Y Wert, ID: PVE_ATTA_Y_VL) Checksumme | 1 |
| 0xD19640 | Signalfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Ungültig | 1 |
| 0xD19646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 |
| 0xD19647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 |
| 0xD19648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 |
| 0xD1964A | Botschaftsfehler (Potentialvektor Änderung Krümmung X Wert 1, ID: PVE_X_VL_1_CHNG_CRV) Checksumme | 1 |
| 0xD1964B | Botschaftsfehler (Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) Checksumme | 1 |
| 0xD1964C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 |
| 0xD1964E | Botschaftsfehler (Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) Checksumme | 1 |
| 0xD1964F | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel, ID: PVE_CHNG_ATTA_Y_VL) Checksumme | 1 |
| 0xD19651 | Botschaftsfehler (Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) Checksumme | 1 |
| 0xD19653 | Botschaftsfehler (Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19654 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Checksumme | 1 |
| 0xD19655 | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Checksumme | 1 |
| 0xD1965E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 |
| 0xD19675 | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Checksumme | 1 |
| 0xD1967B | Botschaftsfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Timeout | 1 |
| 0xD1967D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Timeout | 1 |
| 0xD19682 | Botschaftsfehler (Kennzahl Umrechnung Geschwindigkeit, ID:CHNO_COV_V) - Timeout | 1 |
| 0xD19697 | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Timeout | 1 |
| 0xD1969C | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Timeout | 1 |
| 0xD1969D | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Timeout | 1 |
| 0xD196A0 | Botschaftsfehler (Status Crash, ID: ST_CR) Checksumme | 1 |
| 0xD196A7 | Botschaftsfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Timeout | 1 |
| 0xD196AB | Signalfehler (Abstandsmeldung PDC Vorne, ID: GAP_PDC_FS) - Ungültig | 1 |
| 0xD196B4 | Botschaftsfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Timeout | 1 |
| 0xD196D7 | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Checksumme | 1 |
| 0xD196DA | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Checksumme | 1 |
| 0xD196F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 |
| 0xD196F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 |
| 0xD196F7 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Checksumme | 1 |
| 0xD196F8 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Checksumme | 1 |
| 0xD19711 | Signalfehler (Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) - Ungültig | 1 |
| 0xD19713 | Signalfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Ungültig | 1 |
| 0xD19718 | Signalfehler (Kennzahl Umrechnung Geschwindigkeit, ID:CHNO_COV_V) - Ungültig | 1 |
| 0xD1972A | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Alive | 1 |
| 0xD19732 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Timeout | 1 |
| 0xD19733 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Checksumme | 1 |
| 0xD19734 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Alive | 1 |
| 0xD19736 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) - Ungültig | 1 |
| 0xD19737 | Botschaftsfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Alive | 1 |
| 0xD1973F | Botschaftsfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Alive | 1 |
| 0xD19744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD19745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 |
| 0xD19746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD19753 | Botschaftsfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Alive | 1 |
| 0xD19754 | Botschaftsfehler (Bedienung Taster Parken, ID: OP_PUBU_PKG) Alive | 1 |
| 0xD1977A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Ungültig | 1 |
| 0xD1977C | Signalfehler (Fahrzeug Dynamik Daten Längs, ID: VEH_DYNMC_DT_LN_1) - Ungültig | 1 |
| 0xD19782 | Botschaftsfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Timeout | 1 |
| 0xD19786 | Signalfehler (Daten Funktion HDC, ID: DT_FN_HDC) - Ungültig | 1 |
| 0xD1978B | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) - Ungültig | 1 |
| 0xD19797 | Signalfehler (Geschwindigkeit Rad kompensiert, ID: V_WHL_COMPT) - Ungültig | 1 |
| 0xD1979A | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Ungültig | 1 |
| 0xD1979B | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Ungültig | 1 |
| 0xD197B7 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Timeout | 1 |
| 0xD197B8 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Checksumme | 1 |
| 0xD197B9 | Botschaftsfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Alive | 1 |
| 0xD197BB | Signalfehler (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) - Ungültig | 1 |
| 0xD197CE | Botschaftsfehler (Objekt** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) Timeout | 1 |
| 0xD197CF | Botschaftsfehler (Objekt** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) Timeout | 1 |
| 0xD197D1 | Botschaftsfehler (Objekt** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) Timeout | 1 |
| 0xD197D2 | Botschaftsfehler (Objekt** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) Timeout | 1 |
| 0xD19805 | Botschaftsfehler (Objekt** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) Timeout | 1 |
| 0xD19809 | Botschaftsfehler (Objekt** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) Timeout | 1 |
| 0xD1980A | Botschaftsfehler (Potentialvektor Beschleunigung, ID: PVE_ACLN) Timeout | 1 |
| 0xD19811 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) - Timeout | 1 |
| 0xD19815 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Ungültig | 1 |
| 0xD1981F | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) - Ungültig | 1 |
| 0xD19831 | Botschaftsfehler (Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) Timeout | 1 |
| 0xD19835 | Botschaftsfehler (Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) Timeout | 1 |
| 0xD19836 | Botschaftsfehler (Potentialvektor Schwimmwinkel X Wert, ID: PVE_ATTA_X_VL) Timeout | 1 |
| 0xD1983F | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) - Ungültig | 1 |
| 0xD19860 | Botschaftsfehler (Potentialvektor Schwimmwinkel Y Wert, ID: PVE_ATTA_Y_VL) Timeout | 1 |
| 0xD19861 | Botschaftsfehler (Potentialvektor Änderung Krümmung X Wert 1, ID: PVE_X_VL_1_CHNG_CRV) Timeout | 1 |
| 0xD19862 | Botschaftsfehler (Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) Timeout | 1 |
| 0xD19863 | Botschaftsfehler (Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) Timeout | 1 |
| 0xD19865 | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel, ID: PVE_CHNG_ATTA_Y_VL) Timeout | 1 |
| 0xD19867 | Botschaftsfehler (Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) Timeout | 1 |
| 0xD1986B | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Timeout | 1 |
| 0xD1986F | Botschaftsfehler (Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) Timeout | 1 |
| 0xD19876 | Signalfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Ungültig | 1 |
| 0xD1987D | Signalfehler (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) Ungültig | 1 |
| 0xD19890 | Botschaftsfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Timeout | 1 |
| 0xD1989E | Botschaftsfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Timeout | 1 |
| 0xD198BE | Botschaftsfehler (Status Crash, ID: ST_CR) Timeout | 1 |
| 0xD198D7 | Botschaftsfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Timeout | 1 |
| 0xD198D9 | Signalfehler (Status Fahrlicht, ID: STAT_FAHRLICHT) - Ungültig | 1 |
| 0xD198DC | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Timeout | 1 |
| 0xD198DD | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Checksumme | 1 |
| 0xD198DE | Botschaftsfehler (Status Funktion PDC, ID: ST_FN_PDC) - Alive | 1 |
| 0xD198E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 |
| 0xD198E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Timeout | 1 |
| 0xD19914 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Ungültig | 1 |
| 0xD19916 | Signalfehler (Objekt** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) Ungültig | 1 |
| 0xD19917 | Signalfehler (Objekt** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) Ungültig | 1 |
| 0xD19918 | Signalfehler (Objekt** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) Ungültig | 1 |
| 0xD19919 | Signalfehler (Objekt** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) Ungültig | 1 |
| 0xD1991A | Signalfehler (Objekt** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) Ungültig | 1 |
| 0xD1991B | Signalfehler (Objekt** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) Ungültig | 1 |
| 0xD1991C | Signalfehler (Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) Ungültig | 1 |
| 0xD1991D | Signalfehler (Potentialvektor Beschleunigung, ID: PVE_ACLN) Ungültig | 1 |
| 0xD1991E | Signalfehler (Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) Ungültig | 1 |
| 0xD1991F | Signalfehler (Potentialvektor Schwimmwinkel X Wert, ID: PVE_ATTA_X_VL) Ungültig | 1 |
| 0xD19920 | Signalfehler (Potentialvektor Schwimmwinkel Y Wert, ID: PVE_ATTA_Y_VL) Ungültig | 1 |
| 0xD19922 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Timeout | 1 |
| 0xD19923 | Signalfehler (Potentialvektor Änderung Krümmung X Wert 1, ID: PVE_X_VL_1_CHNG_CRV) Ungültig | 1 |
| 0xD19924 | Signalfehler (Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) Ungültig | 1 |
| 0xD19925 | Signalfehler (Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) Ungültig | 1 |
| 0xD19926 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Ungültig | 1 |
| 0xD19928 | Signalfehler (Potentialvektor Änderung Schwimmwinkel, ID: PVE_CHNG_ATTA_Y_VL) Ungültig | 1 |
| 0xD1992A | Signalfehler (Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) Ungültig | 1 |
| 0xD1992B | Signalfehler (Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) Ungültig | 1 |
| 0xD1992C | Signalfehler (Odometrie Fahrzeug 1, ID: ODO_VEH_1) Ungültig | 1 |
| 0xD1992D | Signalfehler (Odometrie Fahrzeug 2, ID: ODO_VEH_2) Ungültig | 1 |
| 0xD19931 | Signalfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Ungültig | 1 |
| 0xD19932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD19936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD19938 | Signalfehler (Status Crash, ID: ST_CR) Ungültig | 1 |
| 0xD19950 | Signalfehler (Status Funktion Active PDC, ID: ST_FN_APDC) Ungültig | 1 |
| 0xD19959 | Signalfehler (Status RCP, ID: ST_RCP) Ungültig | 1 |
| 0xD19966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 |
| 0xD1996F | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Alive | 1 |
| 0xD19973 | Botschaftsfehler (Status Crash, ID: ST_CR) Alive | 1 |
| 0xD19984 | Botschaftsfehler (Status Funktion Active PDC, ID: ST_FN_APDC) Alive | 1 |
| 0xD1998E | Botschaftsfehler (Status RCP, ID: ST_RCP) Alive | 1 |
| 0xD19996 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Ungültig | 1 |
| 0xD1999C | Botschaftsfehler (Status Funktion Active PDC, ID: ST_FN_APDC) Checksumme | 1 |
| 0xD199A6 | Botschaftsfehler (Status RCP, ID: ST_RCP) Checksumme | 1 |
| 0xD199AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD199BA | Botschaftsfehler (Status Funktion Active PDC, ID: ST_FN_APDC) Timeout | 1 |
| 0xD199BF | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Timeout | 1 |
| 0xD199C0 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Checksumme | 1 |
| 0xD199C1 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Alive | 1 |
| 0xD199C3 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Ungültig | 1 |
| 0xD199C8 | Botschaftsfehler (Status RCP, ID: ST_RCP) Timeout | 1 |
| 0xD199CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 |
| 0xD199DA | Botschaftsfehler (Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Timeout | 1 |
| 0xD19A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 |
| 0xD19A52 | Botschaftsfehler (Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Alive | 1 |
| 0xD19A58 | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Alive | 1 |
| 0xD19A80 | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Checksumme | 1 |
| 0xD19A88 | Botschaftsfehler (Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Checksumme | 1 |
| 0xD19A8C | Botschaftsfehler (Geschwindigkeit Fahrzeug 2 ID:V_VEH_2) Checksumme | 1 |
| 0xD19AE4 | Signalfehler (Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Ungültig | 1 |
| 0xD19B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD19B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Checksumme | 1 |
| 0xD19B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD19B36 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Timeout | 1 |
| 0xD19B37 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Checksumme | 1 |
| 0xD19B38 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) - Alive | 1 |
| 0xD19C63 | Botschaftsfehler (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) Timeout | 1 |
| 0xD19C65 | Botschaftsfehler (Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) Timeout | 1 |
| 0xD19C68 | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Timeout | 1 |
| 0xD19C69 | Botschaftsfehler (Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) Timeout | 1 |
| 0xD19C6A | Botschaftsfehler (Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) Timeout | 1 |
| 0xD19C6B | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Timeout | 1 |
| 0xD19C6F | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel X Wert, ID: PVE_CHNG_ATTA_X_VL) Timeout | 1 |
| 0xD19C70 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Timeout | 1 |
| 0xD19C71 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Timeout | 1 |
| 0xD19C72 | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Timeout | 1 |
| 0xD19C74 | Botschaftsfehler (Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) Timeout | 1 |
| 0xD19C78 | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Timeout | 1 |
| 0xD19C7A | Botschaftsfehler (Status ECBA, ID: ST_ECBA) Timeout | 1 |
| 0xD19C7D | Botschaftsfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Timeout | 1 |
| 0xD19C8D | Botschaftsfehler (Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) Timeout | 1 |
| 0xD19C8E | Botschaftsfehler (Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) Timeout | 1 |
| 0xD19C8F | Botschaftsfehler (Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) Timeout | 1 |
| 0xD19C98 | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Timeout | 1 |
| 0xD19C99 | Botschaftsfehler (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) Timeout | 1 |
| 0xD19C9A | Botschaftsfehler (Status Warnbremskoordinator, ID: ST_WBK) Timeout | 1 |
| 0xD19CA4 | Botschaftsfehler (Odometrie Fahrzeug 3, ID: ODO_VEH_3) Timeout | 1 |
| 0xD19CA9 | Botschaftsfehler (Daten Fahrer, ID: DT_DV) Timeout | 1 |
| 0xD19CAA | Botschaftsfehler (Umweltdaten, ID: ENVDT) Timeout | 1 |
| 0xD19CB4 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Timeout | 1 |
| 0xD19CB5 | Botschaftsfehler (Fahrzeugbewegung Modell, ID: VHMV_MDL) Timeout | 1 |
| 0xD19CBE | Botschaftsfehler (Abstandsmeldung PDC Vorne 2, ID: GAP_PDC_FS_2) Timeout | 1 |
| 0xD19CDB | Botschaftsfehler (Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID:FDBK_VIB_STW_DISP_EXMI) Timeout | 1 |
| 0xD19CE6 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Alive | 1 |
| 0xD19CE9 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Alive | 1 |
| 0xD19CEA | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Alive | 1 |
| 0xD19CF3 | Botschaftsfehler (Status ECBA, ID: ST_ECBA) Alive | 1 |
| 0xD19CF8 | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel X Wert, ID: PVE_CHNG_ATTA_X_VL) Alive | 1 |
| 0xD19CFA | Botschaftsfehler (Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) Alive | 1 |
| 0xD19CFB | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Alive | 1 |
| 0xD19CFC | Botschaftsfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Alive | 1 |
| 0xD19CFE | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Alive | 1 |
| 0xD19CFF | Botschaftsfehler (Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) Alive | 1 |
| 0xD19D07 | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Alive | 1 |
| 0xD19D08 | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Alive | 1 |
| 0xD19D13 | Botschaftsfehler (Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) Alive | 1 |
| 0xD19D17 | Botschaftsfehler (Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) Alive | 1 |
| 0xD19D2C | Botschaftsfehler (Fahrzeugbewegung Modell, ID: VHMV_MDL) Alive | 1 |
| 0xD19D35 | Signalfehler (Abstandsmeldung PDC Vorne 2, ID: GAP_PDC_FS_2) Ungültig | 1 |
| 0xD19D47 | Botschaftsfehler (Status Warnbremskoordinator, ID: ST_WBK) Alive | 1 |
| 0xD19D4A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Alive | 1 |
| 0xD19D9D | Signalfehler (Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) Ungültig | 1 |
| 0xD19DA4 | Signalfehler (Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) Ungültig | 1 |
| 0xD19DA9 | Signalfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Ungültig | 1 |
| 0xD19DB1 | Signalfehler (Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) Ungültig | 1 |
| 0xD19DB2 | Signalfehler (Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) Ungültig | 1 |
| 0xD19DB6 | Signalfehler (Status ECBA, ID: ST_ECBA) Ungültig | 1 |
| 0xD19DB7 | Signalfehler (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) Ungültig | 1 |
| 0xD19DB9 | Signalfehler (Potentialvektor Änderung Schwimmwinkel X Wert, ID: PVE_CHNG_ATTA_X_VL) Ungültig | 1 |
| 0xD19DC0 | Signalfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Ungültig | 1 |
| 0xD19DC1 | Signalfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Ungültig | 1 |
| 0xD19DC2 | Signalfehler (Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) Ungültig | 1 |
| 0xD19DC3 | Signalfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Ungültig | 1 |
| 0xD19DCA | Signalfehler (Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) Ungültig | 1 |
| 0xD19DCF | Signalfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Ungültig | 1 |
| 0xD19DD5 | Signalfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Ungültig | 1 |
| 0xD19DD6 | Signalfehler (Odometrie Fahrzeug 3, ID: ODO_VEH_3) Ungültig | 1 |
| 0xD19DD7 | Signalfehler (Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID:FDBK_VIB_STW_DISP_EXMI) Ungültig | 1 |
| 0xD19DD8 | Signalfehler (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) Ungültig | 1 |
| 0xD19DD9 | Signalfehler (Status Warnbremskoordinator, ID: ST_WBK) Ungültig | 1 |
| 0xD19DDE | Signalfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Ungültig | 1 |
| 0xD19DE5 | Signalfehler (Daten Fahrer, ID: DT_DV) Ungültig | 1 |
| 0xD19DE7 | Signalfehler (Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Ungültig | 1 |
| 0xD19DE8 | Signalfehler (Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) Ungültig | 1 |
| 0xD19E32 | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Checksumme | 1 |
| 0xD19E36 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Checksumme | 1 |
| 0xD19E41 | Botschaftsfehler (Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Checksumme | 1 |
| 0xD19E45 | Botschaftsfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Checksumme | 1 |
| 0xD19E49 | Botschaftsfehler (Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) Checksumme | 1 |
| 0xD19E4A | Botschaftsfehler (Status ECBA, ID: ST_ECBA) Checksumme | 1 |
| 0xD19E4D | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Checksumme | 1 |
| 0xD19E4F | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Checksumme | 1 |
| 0xD19E51 | Botschaftsfehler (Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19E52 | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Checksumme | 1 |
| 0xD19E54 | Botschaftsfehler (Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) Checksumme | 1 |
| 0xD19E5E | Botschaftsfehler (Potentialvektor Änderung Schwimmwinkel X Wert, ID: PVE_CHNG_ATTA_X_VL) Checksumme | 1 |
| 0xD19E5F | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Checksumme | 1 |
| 0xD19E66 | Botschaftsfehler (Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) Checksumme | 1 |
| 0xD19E67 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Checksumme | 1 |
| 0xD19E6A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Checksumme | 1 |
| 0xD19E8D | Botschaftsfehler (Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) Timeout | 1 |
| 0xD19E94 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Timeout | 1 |
| 0xD19E95 | Botschaftsfehler (Status Stillstandsfunktion DSC, ID: ST_SSFN_DSC) Timeout | 1 |
| 0xD19E98 | Botschaftsfehler (Potentialvektor Gruppe** Dynamik, ID: PVE_GRP_**_DYNMC) Timeout | 1 |
| 0xD19EC6 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Alive | 1 |
| 0xD19ECA | Botschaftsfehler (Status Stillstandsfunktion DSC, ID: ST_SSFN_DSC) Alive | 1 |
| 0xD19ECC | Botschaftsfehler (Potentialvektor Gruppe** Dynamik, ID: PVE_GRP_**_DYNMC) Alive | 1 |
| 0xD19F09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Ungültig | 1 |
| 0xD19F0A | Signalfehler (Fahrzeugbewegung Modell, ID: VHMV_MDL) Ungültig | 1 |
| 0xD19F0F | Signalfehler (Umweltdaten, ID: ENVDT) Ungültig | 1 |
| 0xD19F29 | Signalfehler (Status Stillstandsfunktion DSC, ID: ST_SSFN_DSC) Ungültig | 1 |
| 0xD19F32 | Signalfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Ungültig | 1 |
| 0xD19F33 | Signalfehler (Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) Ungültig | 1 |
| 0xD19F34 | Signalfehler (Potentialvektor Gruppe** Dynamik, ID: PVE_GRP_**_DYNMC) Ungültig | 1 |
| 0xD19F79 | Botschaftsfehler (Status Warnbremskoordinator, ID: ST_WBK) Checksumme | 1 |
| 0xD19F8A | Botschaftsfehler (Fahrzeugbewegung Modell, ID: VHMV_MDL) Checksumme | 1 |
| 0xD19FA8 | Botschaftsfehler (Status Stillstandsfunktion DSC, ID: ST_SSFN_DSC) Checksumme | 1 |
| 0xD19FA9 | Botschaftsfehler (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Checksumme | 1 |
| 0xD19FAC | Botschaftsfehler (Potentialvektor Gruppe** Dynamik, ID: PVE_GRP_**_DYNMC) Checksumme | 1 |
| 0xD1AC81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 |
| 0xD1AD0E | Botschaftsfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Timeout | 1 |
| 0xD1AD11 | Signalfehler (Parken Querführung Umgebung, ID:PKG_LAG_ENVI) - Ungültig | 1 |
| 0xD1AD15 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Checksumme | 1 |
| 0xD1AD16 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Alive | 1 |
| 0xD1AD17 | Signalfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Ungültig | 1 |
| 0xD1AD25 | Botschaftsfehler (Umgebung Detektion Parken, ID: ENVI_DETE_PKG) - Timeout | 1 |
| 0xD1AD31 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Timeout | 1 |
| 0xD1AD33 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Alive | 1 |
| 0xD1AD34 | Signalfehler (Parken Querführung Koordination, ID: PKG_LAG_COOR) - Ungültig | 1 |
| 0xD1AD3A | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Ungültig | 1 |
| 0xD1AD6B | Botschaftsfehler - (0x3001-0x0001-BMW.DASS.RCP-Controller) - Timeout | 1 |
| 0xD1AD6C | Botschaftsfehler - (0x3001-0x0001-BMW.DASS.RCP-Controller) - E2E-Absicherungsfehler | 1 |
| 0xD1AD6D | Signalfehler - (0x3001-0x0001-BMW.DASS.RCP-Controller) - Ungültig | 1 |
| 0xD1AD86 | Botschaftsfehler - (0xD001-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera) - Timeout | 1 |
| 0xD1AD87 | Botschaftsfehler - (0xD001-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera) - E2E-Absicherungsfehler | 1 |
| 0xD1AD88 | Signalfehler - (0xD001-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera) - Ungültig | 1 |
| 0xD1ADC8 | Botschaftsfehler - (0xD006-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront) - Timeout | 1 |
| 0xD1ADC9 | Signalfehler - (0xD006-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront) - Ungültig | 1 |
| 0xD1ADCA | Botschaftsfehler - (0xD006-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront) - E2E-Absicherungsfehler | 1 |
| 0xD1ADE3 | Botschaftsfehler - (0x303F-0x0001-BMW.DASS-AWA) - Timeout | 1 |
| 0xD1ADE4 | Signalfehler - (0x303F-0x0001-BMW.DASS-AWA) - Ungültig | 1 |
| 0xD1ADF2 | Botschaftsfehler - (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - Timeout | 1 |
| 0xD1ADF3 | Signalfehler -  (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - Ungültig | 1 |
| 0xD1ADF4 | Botschaftsfehler - (0xD024-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries) - E2E-Absicherungsfehler | 1 |
| 0xD1ADF5 | Botschaftsfehler - (0x5532-0x0001-BMW.BODY-Light) - Timeout | 1 |
| 0xD1ADF6 | Signalfehler - (0x5532-0x0001-BMW.BODY-Light) - Ungültig | 1 |
| 0xD1AE13 | Botschaftsfehler - (0x303C-0x0001-BMW.DASS-BrakeAssistFrontRadar) - Timeout | 1 |
| 0xD1AE14 | Signalfehler - (0x303C-0x0001-BMW.DASS-BrakeAssistFrontRadar) - Ungültig | 1 |
| 0xD1AE15 | Botschaftsfehler - (0x303C-0x0001-BMW.DASS-BrakeAssistFrontRadar) - E2E-Absicherungsfehler | 1 |
| 0xD1AE16 | Botschaftsfehler - (0x303E-0x0001-BMW.DASS-RadarData) - Timeout | 1 |
| 0xD1AE17 | Signalfehler - (0x303E-0x0001-BMW.DASS-RadarData) - Ungültig | 1 |
| 0xD1AE18 | Botschaftsfehler - (0x303E-0x0001-BMW.DASS-RadarData) - E2E-Absicherungsfehler | 1 |
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
| 0x0011 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0012 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0013 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0014 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0015 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0016 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0017 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0018 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0019 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x001F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0020 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0022 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0023 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0024 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0025 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0026 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0027 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0028 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0029 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002A | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002B | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002C | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002D | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002E | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x002F | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0030 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0031 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0032 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0033 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0034 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x0035 | LOCAL_UNDERVOLTAGE_NORMAL_OPERATION | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0036 | LOCAL_UNDERVOLTAGE_NORMAL_OPERATION_AFTERRUN_TIME | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0037 | LOCAL_UNDERVOLTAGE_MSA | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0038 | LOCAL_UNDERVOLTAGE_MSA_AFTERRUN_TIME | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0039 | LOCAL_OVERVOLTAGE | 0/1 | High | 0x0004 | - | - | - | - |
| 0x003A | LOCAL_OVERVOLTAGE_AFTERRUN_TIME | 0/1 | High | 0x0040 | - | - | - | - |
| 0x003B | GLOBAL_UNDERVOLTAGE_NORMAL_OPERATION | 0/1 | High | 0x0100 | - | - | - | - |
| 0x003C | GLOBAL_UNDERVOLTAGE_NORMAL_OPERATION_AFTERRUN_TIME | 0/1 | High | 0x1000 | - | - | - | - |
| 0x003D | GLOBAL_UNDERVOLTAGE_MSA | 0/1 | High | 0x0200 | - | - | - | - |
| 0x003E | GLOBAL_UNDERVOLTAGE_MSA_AFTERRUN_TIME | 0/1 | High | 0x2000 | - | - | - | - |
| 0x003F | GLOBAL_OVERVOLTAGE | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0040 | GLOBAL_OVERVOLTAGE_AFTERRUN_TIME | 0/1 | High | 0x4000 | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1757 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | signed long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x28FA | ERROR_DUMP_DTC030800 | HEX | High | signed long | - | - | - | - |
| 0x28FB | ERROR_DUMP_DTC030801 | HEX | High | signed long | - | - | - | - |
| 0x28FC | ERROR_DUMP_DTC030802 | HEX | High | signed long | - | - | - | - |
| 0x28FD | ERROR_DUMP_DTC030804 | HEX | High | signed long | - | - | - | - |
| 0x28FE | ERROR_DUMP_DTC030806 | HEX | High | signed long | - | - | - | - |
| 0x2912 | ERROR_DUMP_DTC030820 | HEX | High | signed long | - | - | - | - |
| 0x2915 | ERROR_DUMP_DTC030852 | HEX | High | signed long | - | - | - | - |
| 0x292C | ERROR_DUMP_DTC030831 | HEX | High | unsigned long | - | - | - | - |
| 0x292D | ERROR_DUMP_DTC030832 | HEX | High | unsigned long | - | - | - | - |
| 0x294D | ERROR_DUMP_DTC030833 | HEX | High | unsigned long | - | - | - | - |
| 0x4009 | BSW_FEHLERDATEN | Text | High | 60 | - | 1.0 | 1.0 | 0.0 |
| 0x400C | HW_FEHLERDATEN | Text | High | 60 | - | 1.0 | 1.0 | 0.0 |
| 0x4010 | EVENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4011 | Sub-Tabelle | 0/1 | - | 0xFFFF | - | - | - | - |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000001 | Steuergerät intern Interner HW-Fehler_SAFETLIB | 0 |
| 0x000002 | Steuergerät intern Interner HW-Fehler_TRAP | 0 |
| 0x000003 | Steuergerät intern Interner HW-Fehler_PSBC_WDG_RESET | 0 |
| 0x000004 | Steuergerät intern Interner HW-Fehler_SPI_DED | 0 |
| 0x000005 | Steuergerät intern Interner HW-Fehler_MCU_UV | 0 |
| 0x000006 | Steuergerät intern Interner HW-Fehler_MCU_RESET | 0 |
| 0x000007 | Steuergerät intern Interner HW-Fehler_SMU_ALARM | 0 |
| 0x000008 | Steuergerät intern Interner HW-Fehler_PSBC_HW_CONFIG | 0 |
| 0x000009 | Steuergerät intern Interner HW-Fehler_COM_TRCV_ERROR | 0 |
| 0x00000A | Steuergerät intern Interner HW-Fehler_REG_CHECK | 0 |
| 0x00000B | Steuergerät intern Interner HW-Fehler_SMU_NMI_TEST | 0 |
| 0x00000C | Steuergerät intern Interner HW-Fehler_PSBC_UV_RESET | 0 |
| 0x030807 | FAS - Funktionale Deaktivierung | 0 |
| 0x030808 | FAS - Antrieb - Betriebsbereitschaft | 1 |
| 0x030809 | FAS - Bremse - Betriebsbereitschaft | 1 |
| 0x03080A | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x03080B | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Logikfehler | 1 |
| 0x03080C | FAS - Bedienfeld - HDC - fehlerhaft | 1 |
| 0x03080D | FAS - Inkorrekte Codierung Fahrfunktion | 1 |
| 0x03080E | FAS - KAFAS - Betriebsbereitschaft | 1 |
| 0x03080F | FAS - Abweichung VKombi gegen V-Ist zu groß | 1 |
| 0x030810 | FAS Anfahrbereitschaft nicht erfüllt | 1 |
| 0x030811 | FAS - Fahreranwesenheitssensorik fehlerhaft | 1 |
| 0x030812 | FAS - Fahrzeugsensorik Betriebsbereitschaft | 1 |
| 0x030814 | FAS - pFGS - Verzögerungsanforderung | 0 |
| 0x030815 | FAS - CCM - Verzögerungsanforderung | 0 |
| 0x030818 | FAS - Bedienung Lenkrad - Betriebsbereitschaft | 1 |
| 0x030819 | FAS - ACC Sensorik - Betriebsbereitschaft | 1 |
| 0x03081B | FAS - Kombi - Betriebsbereitschaft | 1 |
| 0x03081C | FAS - Fehler Navigationsdaten | 1 |
| 0x03081E | FAS Signalfehler - Undefinierter Inhalt oder unzureichende Qualität | 1 |
| 0x030821 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x030822 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Logikfehler | 0 |
| 0x030823 | FAS - EM-FREESPACECALCULATION - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x030824 | FAS - EM-FREESPACECALCULATION - Umfeldmodell - Logikfehler | 0 |
| 0x030825 | FAS - EM-GAP - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x030826 | FAS - EM-GAP - Umfeldmodell - Logikfehler | 0 |
| 0x030827 | FAS - EM-LANEASSIGNMENT - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x030828 | FAS - EM-LANEASSIGNMENT - Umfeldmodell - Logikfehler | 0 |
| 0x030829 | FAS - EM-OBJDESC - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x03082A | FAS - EM-OBJDESC - Umfeldmodell - Logikfehler | 0 |
| 0x03082B | FAS - EM-ROADASSEMBLY - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x03082C | FAS - EM-ROADASSEMBLY - Umfeldmodell - Logikfehler | 0 |
| 0x03082D | FAS - EM-ODOCLIENT - Umfeldmodell - Eingangssignalfehler | 1 |
| 0x03082E | FAS - EM-ODOCLIENT - Umfeldmodell - Logikfehler | 0 |
| 0x030830 | FAS - EM-ELECTRONICHORIZON - Zeitbasis unsynchronisiert | 1 |
| 0x030834 | FAS - Ferngesteuertes Parken - Systemgrenze oder Kundenverhalten | 0 |
| 0x030835 | FAS - Frontschutz - Ausweichassistent ausgelöst | 1 |
| 0x030836 | FAS - Seitenkollisionswarnung oder Spurwechselwarnung ausgelöst | 1 |
| 0x030837 | FAS - Seitenkollisionswarnung - Alternative Kriterien erfüllt ohne Auslösung | 1 |
| 0x030C50 | INT-CCHDL Überlauf Checkcontrol Buffer | 0 |
| 0x030C51 | INT-CCHDL Undefinierte CC-ID angefordert | 0 |
| 0x030C52 | INT-CCHDL Info Buffer Füllgrad | 0 |
| 0x030C58 | INT-CCHDL Anforderung abgelehnt Task läuft bereits | 0 |
| 0x030C62 | INT-SVCHDL Anforderung abgelehnt Task läuft bereits | 0 |
| 0x482E80 | PIA_E_IO_ERROR | 0 |
| 0x482E81 | Steuergerät intern - SW-FPU-Fehler | 1 |
| 0x482E82 | Steuergerät intern Interner SW-Fehler Info1 | 0 |
| 0x482E83 | Steuergerät intern Interner SW-Fehler Info2 | 0 |
| 0x482E84 | Steuergerät intern Interner HW-Fehler Info1 | 0 |
| 0x482F0D | Steuergerät intern - Ethernet Switch Fehler | 0 |
| 0x482F10 | Steuergerät intern interner SW-Fehler Info | 0 |
| 0x482F19 | Steuergerät intern - HW-Fehler Info | 0 |
| 0x482F40 | Power SBC - Überspannung | 0 |
| 0x482F41 | Power SBC - Unterspannung | 0 |
| 0x482F42 | Power SBC - Temperatur | 0 |
| 0x482F43 | Power SBC - Überstrom | 0 |
| 0x482F44 | NVM_E_WRONG_BLOCK_ID | 0 |
| 0x482F45 | FRIF_E_JLE_SYNC | 0 |
| 0x482F48 | CANSM_E_MODE_REQUEST_TIMEOUT | 0 |
| 0x482F49 | NVM_E_VERIFY_FAILED | 0 |
| 0x482F4A | NVM_E_REQ_FAILED | 0 |
| 0x482F4B | NVM_E_INTEGRITY_FAILED | 0 |
| 0x482F4C | NVM_E_QUEUE_OVERFLOW | 0 |
| 0x482F4D | NVM_E_LOSS_OF_REDUNDANCY | 0 |
| 0x482F4E | NVM_E_WRITE_PROTECTED | 0 |
| 0x482F4F | ETHSM_E_LINK_DOWN | 0 |
| 0xD18601 | Ethernet: CRC Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0002 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0003 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0004 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0005 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0006 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0007 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0008 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0009 | Anforderndes System iBrake | 0/1 | High | 0x01 | - | - | - | - |
| 0x000A | Anforderndes System Präventiver Fußgängerschutz (pFGS) | 0/1 | High | 0x02 | - | - | - | - |
| 0x000B | Dummy Bit 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x000C | Dummy Bit 3 | 0/1 | High | 0x08 | - | - | - | - |
| 0x000D | Vorwarnung | 0/1 | High | 0x10 | - | - | - | - |
| 0x000E | Akutwarnung | 0/1 | High | 0x20 | - | - | - | - |
| 0x000F | Ausweichrichtung Links | 0/1 | High | 0x40 | - | - | - | - |
| 0x0010 | Ausweichrichtung Rechts | 0/1 | High | 0x80 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x288F | CC_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2890 | BUFFER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x2891 | BUFFER_SIZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2892 | FILL_LEVEL_BUFFER_0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2893 | FILL_LEVEL_BUFFER_1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2894 | FILL_LEVEL_BUFFER_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2895 | FILL_LEVEL_BUFFER_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2896 | FILL_LEVEL_BUFFER_4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2897 | FILL_LEVEL_BUFFER_5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28AD | ERROR_ID_EMSLCONDITIONEVALUATOR | 0-n | High | 0xFF | TAB_ERRID_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x28AE | ERROR_DUMP_1_EMSLCONDITIONEVALUATOR | HEX | High | signed long | - | - | - | - |
| 0x28AF | ERROR_DUMP_2_EMSLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B0 | ERROR_ID_EMELECTRONICHORIZON | 0-n | High | 0xFF | TAB_ERRID_EMELECTRONICHORIZON | - | - | - |
| 0x28B1 | ERROR_DUMP_1_EMELECTRONICHORIZON | HEX | High | signed long | - | - | - | - |
| 0x28B2 | ERROR_DUMP_2_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B3 | ERROR_ID_EMFREESPACECALCULATION | 0-n | High | 0xFF | TAB_ERRID_EMFREESPACECALCULATION | - | - | - |
| 0x28B4 | ERROR_DUMP_1_EMFREESPACECALCULATION | HEX | High | signed long | - | - | - | - |
| 0x28B5 | ERROR_DUMP_2_EMFREESPACECALCULATION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B6 | ERROR_ID_EMGAP | 0-n | High | 0xFF | TAB_ERRID_EMGAP | - | - | - |
| 0x28B7 | ERROR_DUMP_1_EMGAP | HEX | High | signed long | - | - | - | - |
| 0x28B8 | ERROR_DUMP_2_EMGAP | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B9 | ERROR_ID_EMLANEASSIGNMENT | 0-n | High | 0xFF | TAB_ERRID_EMLANEASSIGNMENT | - | - | - |
| 0x28BA | ERROR_DUMP_1_EMLANEASSIGNMENT | HEX | High | signed long | - | - | - | - |
| 0x28BB | ERROR_DUMP_2_EMLANEASSIGNMENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28BC | ERROR_ID_EMOBJDESC | 0-n | High | 0xFF | TAB_ERRID_EMOBJDESC | - | - | - |
| 0x28BD | ERROR_DUMP_1_EMOBJDESC | HEX | High | signed long | - | - | - | - |
| 0x28BE | ERROR_DUMP_2_EMOBJDESC | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28BF | ERROR_ID_EMROADASSEMBLY | 0-n | High | 0xFF | TAB_ERRID_EMROADASSEMBLY | - | - | - |
| 0x28C0 | ERROR_DUMP_1_EMROADASSEMBLY | HEX | High | signed long | - | - | - | - |
| 0x28C1 | ERROR_DUMP_2_EMROADASSEMBLY | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28C4 | FUNCTION_ID_ANFORDERER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C5 | STATUS_ANFORDERER | 0-n | High | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x28EE | ERROR_DUMP_2_EMODOCLIENT | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28EF | ERROR_DUMP_1_EMODOCLIENT | HEX | High | signed long | - | - | - | - |
| 0x28F0 | ERROR_ID_EMODOCLIENT | 0-n | High | 0xFF | TAB_ERRID_EMODOCLIENT | - | - | - |
| 0x28F2 | SERVICE_ID | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28F3 | CLIENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x28F4 | SVC_PARAMETER | HEX | High | unsigned long | - | - | - | - |
| 0x28FF | ERROR_DUMP_DTC030807 | HEX | High | signed long | - | - | - | - |
| 0x2900 | ERROR_DUMP_DTC030808 | HEX | High | signed long | - | - | - | - |
| 0x2901 | ERROR_DUMP_DTC030809 | HEX | High | signed long | - | - | - | - |
| 0x2902 | ERROR_DUMP_DTC03080C | HEX | High | signed long | - | - | - | - |
| 0x2903 | ERROR_DUMP_DTC03080D | HEX | High | signed long | - | - | - | - |
| 0x2904 | ERROR_DUMP_DTC03080E | HEX | High | signed long | - | - | - | - |
| 0x2905 | ERROR_DUMP_DTC03080F | HEX | High | signed long | - | - | - | - |
| 0x2906 | ERROR_DUMP_DTC030810 | HEX | High | signed long | - | - | - | - |
| 0x2907 | ERROR_DUMP_DTC030811 | HEX | High | signed long | - | - | - | - |
| 0x2908 | ERROR_DUMP_DTC030812 | HEX | High | signed long | - | - | - | - |
| 0x290A | ERROR_DUMP_DTC030814 | HEX | High | signed long | - | - | - | - |
| 0x290B | ERROR_DUMP_DTC030815 | HEX | High | signed long | - | - | - | - |
| 0x290C | ERROR_DUMP_DTC030818 | HEX | High | signed long | - | - | - | - |
| 0x290D | ERROR_DUMP_DTC030819 | HEX | High | signed long | - | - | - | - |
| 0x290E | ERROR_DUMP_DTC03081B | HEX | High | signed long | - | - | - | - |
| 0x290F | ERROR_DUMP_DTC03081C | HEX | High | signed long | - | - | - | - |
| 0x2910 | ERROR_DUMP_DTC03081E | HEX | High | signed long | - | - | - | - |
| 0x294E | ERROR_DUMP_DTC030834 | HEX | High | unsigned long | - | - | - | - |
| 0x2952 | ERROR_DUMP_DTC030835 | HEX | High | unsigned long | - | - | - | - |
| 0x2953 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x2954 | ENDEKRITERIUM_AWA | HEX | High | unsigned int | - | - | - | - |
| 0x2955 | DAUER_VORWARN_AKUTWARN_AWA | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x2956 | DAUER_ANBREMSUNG_AWA | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x2957 | DAUER_AUSWEICHMANOEVER_AWA | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x2958 | EGO_MAX_QUERBESCHLEUNIGUNG_AWA | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2959 | BREITE_AUSWEICHGASSE_AWA | m | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x295A | Y_ACHSE_KOLLISIONSPUNKT_ZIELOBJEKT_AWA | m | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x295B | ABSTAND_KOLLISIONSPUNKT_ZIELOBJEKT_AWA | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x295C | TTC_BEI_BEGINN_AWA | s | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x295D | KRUEMMUNG_AUSWEICHGASSE_AWA | 1/m | High | signed char | - | 1.0 | 10000.0 | 0.0 |
| 0x295E | QUERGESCHWINDIGKEIT_ZIELOBJEKT_AWA | m/s | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2961 | ERROR_DUMP_DTC030836 | HEX | High | unsigned long | - | - | - | - |
| 0x2962 | TRIGGERREASON_LCA | 0-n | High | 0xFF | TAB_LCA_TRIGGERREASON | - | - | - |
| 0x2963 | ANZAHL_SPURVERLASSENSWARNUNGEN_LCA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2964 | ANZAHL_SPURVERLASSENSWARNUNGEN_MIT_ABBRUCH_LCA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2965 | DEAKTIVIERUNG_SPURHALTEASSISTENT_LCA | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2966 | RESERVE_01_LCA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2967 | RESERVE_02_LCA | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2968 | WEGSTRECKE_KLEMMENZYKLUS_LCA | km | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2969 | IST_MODUS_FAHRERLEBNIS_LCA | HEX | High | unsigned char | - | - | - | - |
| 0x29BF | STATISTIK_SEITENKOLLISIONSWARNUNG_LCA | HEX | High | unsigned char | - | - | - | - |
| 0x29C0 | STATISTIK_REDUZIERTE_SEITENKOLLISIONSWARNUNG_LCA | HEX | High | unsigned char | - | - | - | - |
| 0x29C1 | TRIGGERREASON_LCA_ALTERNATIV | 0-n | High | 0xFF | TAB_LCA_TRIGGERREASON | - | - | - |
| 0x29C2 | ERROR_DUMP_DTC030837 | HEX | High | unsigned long | - | - | - | - |
| 0x4000 | NVM_FEHLERDATEN | Text | High | 29 | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | BSW_FEHLERDATEN | Text | High | 60 | - | 1.0 | 1.0 | 0.0 |
| 0x400A | PSCB_SUB_ERROR | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x400C | HW_FEHLERDATEN | Text | High | 60 | - | 1.0 | 1.0 | 0.0 |
| 0x4010 | EVENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
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

### PORT_CRC_ERROR_COUNT_4B_TAB

| WERT | TEXT |
| --- | --- |
| 0x00000000 | keine Frames verloren |
| 0x00000001 | 1-9 Frames verloren |
| 0x00000002 | 10-99 Frames verloren |
| 0x00000003 | 100-999 Frames verloren |
| 0x00000004 | 1000-9999 Frames verloren |
| 0x00000005 | 10000-99999 Frames verloren |
| 0x00000006 | > 100000 Frames verloren |
| 0x00000007 | reserviert |
| 0x00000008 | reserviert |
| 0x00000009 | reserviert |
| 0x0000000A | reserviert |
| 0x0000000B | reserviert |
| 0x0000000C | reserviert |
| 0x0000000D | reserviert |
| 0x0000000E | Port nicht verbunden |
| 0x0000000F | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00000010 | 1-9 Frames verloren |
| 0x00000020 | 10-99 Frames verloren |
| 0x00000030 | 100-999 Frames verloren |
| 0x00000040 | 1000-9999 Frames verloren |
| 0x00000050 | 10000-99999 Frames verloren |
| 0x00000060 | > 100000 Frames verloren |
| 0x00000070 | reserviert |
| 0x00000080 | reserviert |
| 0x00000090 | reserviert |
| 0x000000A0 | reserviert |
| 0x000000B0 | reserviert |
| 0x000000C0 | reserviert |
| 0x000000D0 | reserviert |
| 0x000000E0 | Port nicht verbunden |
| 0x000000F0 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00000100 | 1-9 Frames verloren |
| 0x00000200 | 10-99 Frames verloren |
| 0x00000300 | 100-999 Frames verloren |
| 0x00000400 | 1000-9999 Frames verloren |
| 0x00000500 | 10000-99999 Frames verloren |
| 0x00000600 | > 100000 Frames verloren |
| 0x00000700 | reserviert |
| 0x00000800 | reserviert |
| 0x00000900 | reserviert |
| 0x00000A00 | reserviert |
| 0x00000B00 | reserviert |
| 0x00000C00 | reserviert |
| 0x00000D00 | reserviert |
| 0x00000E00 | Port nicht verbunden |
| 0x00000F00 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00001000 | 1-9 Frames verloren |
| 0x00002000 | 10-99 Frames verloren |
| 0x00003000 | 100-999 Frames verloren |
| 0x00004000 | 1000-9999 Frames verloren |
| 0x00005000 | 10000-99999 Frames verloren |
| 0x00006000 | > 100000 Frames verloren |
| 0x00007000 | reserviert |
| 0x00008000 | reserviert |
| 0x00009000 | reserviert |
| 0x0000A000 | reserviert |
| 0x0000B000 | reserviert |
| 0x0000C000 | reserviert |
| 0x0000D000 | reserviert |
| 0x0000E000 | Port nicht verbunden |
| 0x0000F000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00010000 | 1-9 Frames verloren |
| 0x00020000 | 10-99 Frames verloren |
| 0x00030000 | 100-999 Frames verloren |
| 0x00040000 | 1000-9999 Frames verloren |
| 0x00050000 | 10000-99999 Frames verloren |
| 0x00060000 | > 100000 Frames verloren |
| 0x00070000 | reserviert |
| 0x00080000 | reserviert |
| 0x00090000 | reserviert |
| 0x000A0000 | reserviert |
| 0x000B0000 | reserviert |
| 0x000C0000 | reserviert |
| 0x000D0000 | reserviert |
| 0x000E0000 | Port nicht verbunden |
| 0x000F0000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x00100000 | 1-9 Frames verloren |
| 0x00200000 | 10-99 Frames verloren |
| 0x00300000 | 100-999 Frames verloren |
| 0x00400000 | 1000-9999 Frames verloren |
| 0x00500000 | 10000-99999 Frames verloren |
| 0x00600000 | > 100000 Frames verloren |
| 0x00700000 | reserviert |
| 0x00800000 | reserviert |
| 0x00900000 | reserviert |
| 0x00A00000 | reserviert |
| 0x00B00000 | reserviert |
| 0x00C00000 | reserviert |
| 0x00D00000 | reserviert |
| 0x00E00000 | Port nicht verbunden |
| 0x00F00000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x01000000 | 1-9 Frames verloren |
| 0x02000000 | 10-99 Frames verloren |
| 0x03000000 | 100-999 Frames verloren |
| 0x04000000 | 1000-9999 Frames verloren |
| 0x05000000 | 10000-99999 Frames verloren |
| 0x06000000 | > 100000 Frames verloren |
| 0x07000000 | reserviert |
| 0x08000000 | reserviert |
| 0x09000000 | reserviert |
| 0x0A000000 | reserviert |
| 0x0B000000 | reserviert |
| 0x0C000000 | reserviert |
| 0x0D000000 | reserviert |
| 0x0E000000 | Port nicht verbunden |
| 0x0F000000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |
| 0x10000000 | 1-9 Frames verloren |
| 0x20000000 | 10-99 Frames verloren |
| 0x30000000 | 100-999 Frames verloren |
| 0x40000000 | 1000-9999 Frames verloren |
| 0x50000000 | 10000-99999 Frames verloren |
| 0x60000000 | > 100000 Frames verloren |
| 0x70000000 | reserviert |
| 0x80000000 | reserviert |
| 0x90000000 | reserviert |
| 0xA0000000 | reserviert |
| 0xB0000000 | reserviert |
| 0xC0000000 | reserviert |
| 0xD0000000 | reserviert |
| 0xE0000000 | Port nicht verbunden |
| 0xF0000000 | Anzahl der verlorenen Frames konnte nicht bestimmt werden. |

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

### RES_0X1048_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LOOPBACK_TEST | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_LOOPBACK_TEST | - | - | - | Ergebnis Loopback-Test |

### RES_0X1049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_TRANSMITTED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Pakete, die erfolgreich am angegebenen Port verschickt wurden. Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |
| STAT_BYTES_SENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Bytes, die am angegebenen Port verschickt wurden. Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_TX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der versandten Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. transmit FIFO underflow) verworfen wurden.  Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |
| STAT_NUMBER_OF_RECEIVED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich empfangenen Pakete am angegebenen Port.  Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |
| STAT_STAT_BYTES_RECEIVED_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Bytes am angegebenen Port.  Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_RX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. voller input buffer ) verworfen wurden. Soll auf 0 gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xffffffff zurückzugeben. |

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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4184_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORE0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 0 |
| STAT_CORE1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 1 |
| STAT_CORE2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 2 |
| STAT_ISR_FLX_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung für Flexray interrupt service routine Core0 |
| STAT_TASK_5MS_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 5ms Core 0 |
| STAT_TASK_10MS_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 10ms Core 0 |
| STAT_TASK_1S_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 1s Core 0 |
| STAT_TASK_20MS_123_C1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (123) 20 ms Task Core 1 |
| STAT_TASK_20MS_4_C1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (4) 20 ms Task Core 1 |
| STAT_TASK_20MS_5_C1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (5) 20 ms Task Core 1 |
| STAT_TASK_100MS_C1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 100 ms Task Core 1 |
| STAT_TASK_40MS_123_C2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (123) 40 ms Task Core 2 |
| STAT_TASK_40MS_4_C2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (4) 40 ms Task Core 2 |
| STAT_TASK_RESERVE1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Task Reserve 1 |
| STAT_TASK_RESERVE2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Task Reserve2 |

### RES_0X4185_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STACK_CONSUMPTION_C0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STACK_CONSUMPTION core 0 |
| STAT_STACK_CONSUMPTION_C1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STACK_CONSUMPTION core 1 |
| STAT_STACK_CONSUMPTION_C2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STACK_CONSUMPTION core 2 |

### RES_0X4188_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_PERF_MAX_C0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 0 |
| STAT_CPU_PERF_MAX_C1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 1 |
| STAT_CPU_PERF_MAX_C2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 2 |
| STAT_CPU_PERF_AVG_C0_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 0 |
| STAT_CPU_PERF_AVG_C1_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 1 |
| STAT_CPU_PERF_AVG_C2_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | core 2 |

### RES_0X4601_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SVW_LKA_LENK_ODER_VIB_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung Spurverlassenswarnung nur Lenkeingriff (Bit 0 .. 15) Anzahl Ausloesung Spurverlassenswarnung nur Vibration (Bit 16 .. 31) |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SVW_LKA_LENK_UND_VIB_WERT | HEX | high | unsigned long | - | - | - | - | - | Anzahl Ausloesung Spurverlassenswarnung Lenkeingriff und Vibration (Bit 0 .. 15) Wegstrecke zwischen letzter und vorletzter Ausloesung (Bit 16..31) |
| STAT_LCA_ZAEHLER_ABBRUCH_ODER_VERHINDERUNG_SVW_LKA_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abbrueche Spurverlassenswarnung (Bit 0 .. 15) Anzahl Verhinderungen Spurverlassenswarnung (Bit 16 .. 31) |
| STAT_LCA_DETAIL_SVW_LKA_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Triggergrund (Bit 0..7) Abbruchgrund (Bit 8..15) Verhinderungsgrund (Bit 16..23) Geschwindigkeit (Bit 24..31) |
| STAT_LCA_DETAIL_SVW_LKA_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TLC (Bit 0..7) DLC (Bit 8..15) Modus LDW (Bit 16..23) Ausprägung  Vibration / Lenkeingriff (Bit 24..31) |
| STAT_LCA_DETAIL_SVW_LKA_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei der letzten Auslösung (Bit 0..31) |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SWW_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung Spurwechselwarnung nur Lenkeingriff (Bit 0 .. 7) Anzahl Ausloesung Spurwechselwarnung nur Vibration (Bit 8 .. 15) Anzahl Ausloesung Spruwechselwarnung Lenkeingriff und Vibration (Bit 16 .. 23) |
| STAT_LCA_ZAEHLER_ABBRUCH_ODER_VERHINDERUNG_SWW_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abbrueche Spurwechselwarnung (Bit 0 .. 15) Anzahl Verhinderungen Spurwechselwarnung (Bit 16 .. 31) |
| STAT_LCA_DETAIL_SWW_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Triggergrund (Bit 0..7) Abbruchgrund (Bit 8..15) Verhinderungsgrund (Bit 16..23) Geschwindigkeit (Bit 24..31) |
| STAT_LCA_DETAIL_SWW_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TLC (Bit 0..7) DLC (Bit 8..15) Modus HC2 (Bit 16..23) Ausprägung Vibration / Lenkeingriff (Bit 24..31) |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SKW_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung Seitenkollisionswarnung Lenkeingriff (Bit 0 .. 7) Anzahl Ausloesung Seitenkollisionswarnung reduzierter Lenkeingriff (Bit 8 .. 15) Anzahl Ausloesung Seitenkollisionswarnung nur Vibration (Bit 16 .. 23) |
| STAT_LCA_ZAEHLER_ABBRUCH_ODER_VERHINDERUNG_SKW_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abbrueche Seitenkollisionswarnung Lenkeingriff (Bit 0 .. 7) Anzahl Abbrueche Seitenkollisionswarnung reduzierter Lenkeingriff (Bit 8 .. 15) Anzahl Verhinderungen Seitenkollisionswarnung Lenkeingriff (Bit 16 .. 23) Anzahl Verhinderungen Seitenkollisionswarnung reduzierter Lenkeingriff (Bit 24 .. 31) |
| STAT_LCA_DETAIL_SKW_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Triggergrund (Bit 0..7) Abbruchgrund (Bit 8..15) Verhinderungsgrund (Bit 16..23) Geschwindigkeit (Bit 24..31) |
| STAT_LCA_DETAIL_SKW_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TLC (Bit 0..7) DLC (Bit 8..15) Ausprägung Vibration / Lenkeingriff / reduzierter Lenkeingriff (Bit 16..23) |
| STAT_FASSCOLSI_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASSCOLSI_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X4603_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASAWA_ZUSTAENDE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Zustandswechsel Ausweichassistent: Anzahl Zustandswechsel Inaktiv -> Passiv  (Bit 0..7) Anzahl der Zustandswechel Passiv -> Aktiv (Bit 8..15) Anzahl der Zustandswechel Aktiv -> RAMPOUT  (Bit 16..23) Anzahl der Abbrueche durch Fahrer -> (Bit 24..32) |
| STAT_FASAWA_AKTIVIERUNGSVERHINDERUNG_AMF_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungsverhinderung Ausweichmoeglichkeit Front (Bit 0..7) Anzahl Aktivierungsverhinderung Ausweichmoeglichkeit Seite/Hinten (Bit 8..15) Anzahl der Aktivierungen mit Vermeidungsverzoegerung Klasse1 (Bit 16..23) Anzahl der Aktivierungen mit Vermeidungsverzoegerung Klasse2 (Bit 24..32) |
| STAT_FASAWA_AKTIVIERUNGSGESCHWINDIGKEIT_KLASSEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse1 (Bit 0..7) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse2 (Bit 8..15) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse3 (Bit 16..23) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse4(Bit 24..32) |
| STAT_FASAWA_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASAWA_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X4605_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASDACG_SLA_OFFSET_NUTZUNG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Speed Limit Assist: ¿Lochkarte¿  mit den im Messzeitraum genutzten Werten des Offsets. Letztes Bit = Einheit. |
| STAT_FASDACG_SLA_BETRIEBSMODUS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betrieb von SLA Kumulierte Betriebsdauer, Ausschaltvorgänge |
| STAT_FASDACG_SLA_STRASSENTYPEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ¿Autobahn¿, ¿Landstr¿, ¿Stadt¿. Kumulierte Strecke, z.B. 5 km Schritte. |
| STAT_FASDACG_SLA_FES_MODI_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der SLA-Aktivierungen in den 3 FES-Stellungen: ECO, COMFORT, SPORT. |
| STAT_FASDACG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASDACG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X4606_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASPCG_RFA_OFFSET_NUTZUNG_WERT | HEX | high | unsigned long | - | - | - | - | - | Rückfahrassistent: Regelvorgänge und Eingriffsstatistik SLP |
| STAT_FASPCG_RFA_WEGSTRECKEN_1_WERT | HEX | high | unsigned long | - | - | - | - | - | Wegstreckenhistogramm  4Bit  für 16 Regelvorgänge  X  dabei erreichte Stecke  je 4 Bit |
| STAT_FASPCG_RFA_WEGSTRECKEN_2_WERT | HEX | high | unsigned long | - | - | - | - | - | Wegstreckenhistogramm  4Bit  für 16 Regelvorgänge  X  dabei erreichte Stecke  je 4 Bit |
| STAT_FASPCG_RFA_GESCHW_HIST_1_WERT | HEX | high | unsigned long | - | - | - | - | - | Geschwindgkeitshistogramm 4Bit  für 16 Regelvorgänge  X  dabei erreichter Geschwindigkeitswert  je 4 Bit. |
| STAT_FASPCG_RFA_GESCHW_HIST_2_WERT | HEX | high | unsigned long | - | - | - | - | - | Geschwindgkeitshistogramm 4Bit  für 16 Regelvorgänge  X  dabei erreichter Geschwindigkeitswert  je 4 Bit. |
| STAT_FASPCG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASPCG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X4607_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASLSA_CNT_T_LSA_AKTIV_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA (LenkSpurAssistent) aktiv Bit 0-15:  0-70 km/h,  Bit 16-32: 70-110 km/h |
| STAT_FASLSA_CNT_T_LSA_AKTIV_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA (LenkSpurAssistent) aktiv Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_T_SMF_REGELUNG_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt Bit 0-15:  0-70 km/h,  Bit 16-32: 70-110 km/h |
| STAT_FASLSA_CNT_T_SMF_REGELUNG_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt auf Spurmittenführung Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_T_FF_REGELUNG_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt auf das Vorder-Fahrzeug. Bit 0-15:  0-70 km/h,  Bit 16-32: 70-110 km/h |
| STAT_FASLSA_CNT_T_FF_REGELUNG_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt auf das Vorder-Fahrzeug. Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_T_SMF_FF_REGELUNG_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt auf das Vorder-Fahrzeug und SMF. Bit 0-15:  0-70 km/h,  Bit 16-32: 70-110 km/h |
| STAT_FASLSA_CNT_T_SMF_FF_REGELUNG_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitanteile für die Zeiten mit LSA regelt auf das Vorder-Fahrzeug und SMF. Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_N_LSA_AKTIVIERUNG_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Aktivierungsvorgängen Bit 0-15:  0-70 km/h,  Bit 16-32: 70-110 km/h |
| STAT_FASLSA_CNT_N_LSA_AKTIVIERUNG_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Aktivierungsvorgängen Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_N_LSA_DEAKTIVIERUNG_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Deaktivierungsvorgängen Bit 0-15:  0-70 kmh,  Bit 16-32: 70-110 kmh |
| STAT_FASLSA_CNT_N_LSA_DEAKTIVIERUNG_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Deaktivierungsvorgängen Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_N_SMF_ABBRUCH_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Abbruchvorgängen SMF Bit 0-15:  0-70 kmh,  Bit 16-32: 70-110 km |
| STAT_FASLSA_CNT_N_SMF_ABBRUCH_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Abbruchvorgängen Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_N_FF_ABBRUCH_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Abbruchvorgängen FF Bit 0-15:  0-70 kmh,  Bit 16-32: 70-110 kmh |
| STAT_FASLSA_CNT_N_FF_ABBRUCH_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik zu Abbruchsvorgängen FF Bit 0-15:  110-150 kmh,  Bit 16-32: 150-210 kmh |
| STAT_FASLSA_CNT_N_LSA_ACC_AKTIVIERUNG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Innerhalb 10s eingeschaltet: Bit 0-7:  nur LSA Bit 8-15: nur ACC Bit 16-23: LSA und ACC Bit 24-31: weder noch |
| STAT_FASLSA_CNT_N_LSA_ACC_AKTIVIERT_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Innerhalb 5min aktiviert: Bit 0-7:  nur LSA Bit 8-15: nur ACC Bit 16-23: LSA und ACC Bit 24-31: weder noch |
| STAT_FASLSA_CNT_N_LSA_ACC_REGELN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | innerhalb 5min regelnd: Bit 0-7:  nur LSA Bit 8-15: nur ACC Bit 16-23: LSA und ACC Bit 24-31: weder noch |
| STAT_FASLSA_CNT_T_ZO_VERLUST_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik von Zeiten  Regelung aktiv bis ZO-Verlust ,  aufgelöst nach entsprechendem Geschwindigkeitsbereich.  Bit 0-7 :     0- 20 kmh Bit 8-15:    20- 70 kmh Bit 16-23: 70- 130 kmh Bit 24-31: 130- 210 kmh |
| STAT_FASLSA_CNT_N_HOR_TOR_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von HORs (Hands On Request) und TORs (Take Over Request) im Messzeitraum. Bit 0-15:  HORs Bit 16-32: TORs |
| STAT_FASLSA_CNT_N_HOR_BIS_HON_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitspannen nach  Hands On Request  bis  Pfoten wieder am Lenkrad . Bit 0-7:      0-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: 15-30s |
| STAT_FASLSA_CNT_N_TOR_BIS_HON_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitspannen nach  Take Over Request  bis  Pfoten wieder am Lenkrad . Bit 0-7:      0-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: 15-30s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer: Bit 0-7:      0-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: 15-30s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer: Bit 0-7:      0-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: 15-30s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer: Bit 0-7:      0-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: 15-30s |
| STAT_FASLSA_CNT_T_FAHRSPUR_EINSEITIG_BEIDSEITIG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeiten mit einer oder zwei erkannten Spurmarkierung während Regelung.  Bit 0-15:   Fahrspur Einseitig Bit 16-32: Fahrspur Beidseitig |
| STAT_FASLSA_CNT_T_FAHRSPUR_ZO_UEBERBRUECKUNG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeiten Überbrückung Spurmarkierungs-Verlust und Zeiten Überbrückung Zielobjekt-Verlust während Regelung.  Bit 0-15 Spurmarkierungs-Überbrückung Bit 16-32 Zielobjekt-Überbrückung |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_FAHRER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Fahrer - Anzahl Grund Geschwindigkeit (Bit 0..7) - Anzahl Grund Dynamik (Bit 8..15) - Anzahl Grund Aufmerksamkeit (Bit 16..23) - Anzahl Grund Abbiegevorgang (Bit 24..31) |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_UFM_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Umfeldmodell - Anzahl Grund Spur (Bit 0..7) - Anzahl Grund Hindernisse (Bit 8..15) - Anzahl Grund Objekte (Bit 16..23) - Anzahl Grund UFM-Degradation (Bit 24..31) |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_FAHRZEUG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Fahrzeugzustand - Anzahl Grund Sicherheitsfunktion-Degradation (Bit 0..7) - Anzahl Grund Sicherheitsfunktion-Warnung (Bit 8..15) - Anzahl Grund Steuerung-Degradation (Bit 16..23) - Anzahl Grund Andere (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_MODUS_QUER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nach Quermodus - Anzahl Anfang aus Spurfahrt (Bit 0..7) - Anzahl Anfang aus Folgefahrt (Bit 8..15) - Anzahl Wechsel zu detektierte Spur (Bit 16..23) - Anzahl Wechsel zu geschätzte Spur (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_MODUS_LAENGS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nach Längsmodus - Anzahl Anfang aus freie Fahrt (Bit 0..7) - Anzahl Wechsel mit Reglung Zielspur (Bit 8..15) - Anzahl Wechsel mit Reglung Anfangspur (Bit 16..23) - Anzahl Wechsel mit Reglung Zielgeschwindigkeit (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_GESCHWINDIGKEIT_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Start Spurwechselassistent nach Geschwindigkeitsbereich - Anzahl Geschwindigkeit niedrig (Bit 0..7) - Anzahl Geschwindigkeit mittel (Bit 8..15) - Anzahl Geschwindigkeit hoch (Bit 16..23) - Anzahl Geschwindigkeit sehr hoch(Bit 24..31) |
| STAT_FASSWA_SPURWECHSELWUNSCH_ANZAHL_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Anzahl Spurwechselwünsche - Anzahl Spurwechselwünsche durch Fahrer (Bit 0..16) - Anzahl Spurwechselwünsche ohne Spurwechselstart (Bit 16..23) - Anzahl Spurwechselwünsche mit Spurwechselstart, ohne Spurwechselende (Bit 24..31)  |
| STAT_FASSWA_SPURWECHSELWUNSCH_DAUER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Dauer des Spurwechselwunsches bei Spurwechselstart - Anzahl Dauer zu kurz (Bit 0..7) - Anzahl Dauer minimal (Bit 8..15) - Anzahl Dauer nicht minimal (Bit 16..23) - Anzahl Dauer zu lang (Bit 24..31)  |
| STAT_FASSWA_ZURUECKLENKEN_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Zurücklenken durch Funktion - Anzahl Grund Fahrerbeteiligung (Bit 0..7) - Anzahl Grund Hindernisse/Objekte (Bit 8..15) - Anzahl Grund Sicherheitsfunktion (Bit 16..23) - Anzahl Grund Andere (Bit 24..31) |
| STAT_FASSWA_UEBERGABEFAHRER_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Übergabe an den Fahrer - Anzahl Grund Aufmerksamkeit  (Bit 0..7) - Anzahl Grund UFM (Bit 8..15) - Anzahl Grund Steuerung (Bit 16..23) - Anzahl Grund Sicherheitsfunktion (Bit 24..31) |
| STAT_FASSWA_UEBERNAHMEFAHRERFUNKTION_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Übernahme durch den Fahrer - Anzahl Grund Taste (Bit 0..7) - Anzahl Grund Lenkung (Bit 8..15) - Anzahl Grund Blinker (Bit 16..23) - Anzahl Grund Sicherheitsfunktion (Bit 24..31) |
| STAT_FASQALCG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASQALCG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0XF008_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_LOOPBACK_TEST_END_OF_LINE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_LOOPBACK_TEST | - | - | - | Looback Test |

### RES_0XF040_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_WERT | + | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Routine |

### RES_0XF043_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_WERT | + | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Routine |

### RES_0XF044_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_WERT | + | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Routine |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ETH_PHY_SWITCH_ENGINE_RESET | 0x1044 | - | Wird verwendet, um einen PHY oder Switch/es zurpükzusetzen und optional im Zustand Reset zu halten. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1044_R |
| STEUERN_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_GET_PORT_TX_RX_STATS | 0x1049 | - | Liest die Anzahl der verschickten und empfangenen Pakete, die Anzahl verworfenen Pakete und die Anzahl der übertragenen und empfangenen Bytes. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1049_R | RES_0x1049_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_RESET_PORT_TX_RX_STATS | 0x104B | - | Setzt die Receive- und Transmitzähler eines Switchs zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | high | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| LCA_AUSLOESUNG | 0xDB25 | - | Auslösung einer Warnung für Lataral Collision Avoidance (Seitenkollisionswarnung und Spurwechselwarnung) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB25_D | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| POWER_SBC_REGISTERS | 0x400B | STAT_POWER_SBC_REGISTERS_DATA | Read Power SBC Registers | DATA | - | high | data[8] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MICROCONTROLLER_SN | 0x400D | STAT_MICROCONTROLLER_SN_DATA | Microcontroller Serial Number | DATA | Microcontroller Serial Number | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CAN_MESSAGE_LR | 0x400E | STAT_CAN_MESSAGE_LR_DATA | CAN message for EOL Test | DATA | CAN message for EOL Test | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SWITCH_ID | 0x400F | STAT_SWITCH_ID_DATA | Switch ID | DATA | Switch ID | high | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_TASK_ZEITEN | 0x4184 | - | Status SAS Task Zeiten Einheit [%] | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4184_D |
| STATUS_STACK_CONSUMPTION | 0x4185 | - | status SAS max stack consumption each core | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4185_D |
| STATUS_CPU_PERFORMANCE_MAX | 0x4188 | - | maximum cpu performance of each core | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4188_D |
| ADAPTIVDATEN_FASSCOLSI_LCA | 0x4601 | - | Lesen der Statistikdaten vom Baustein FasScolSi (Sollwertgenerierung Kollisionvermeidung Seite) für die Funktion Lane Change Assistance (LCA) | - | - | - | - | - | - | - | - | - | 22;2C | - | RES_0x4601_D |
| ADAPTIVDATEN_FASAWA | 0x4603 | - | Lesen der Statistikdaten vom Baustein FasAwa (Ausweichassistent) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4603_D |
| ADAPTIVDATEN_FASDACG | 0x4605 | - | Lesen der Statistikdaten vom Baustein FasDacg (Sollwertgenerierung Vorausschau) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4605_D |
| ADAPTIVDATEN_FASPCG | 0x4606 | - | Lesen der Statistikdaten für die Funktion Rückfahrassistent vom Baustein FasPcg (Sollwertgenerierung Parken Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4606_D |
| ADAPTIVDATEN_FASQALCG | 0x4607 | - | Lesen der Statistikdaten vom Baustein FasQalcg (Sollwertgenerierung Quer) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4607_D |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x6660 | - | This job forces the transmission of an ADAS resync request message which will force the navigation system to resend the ADAS tree. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6660_D | - |
| ETH_PHY_LOOPBACK_TEST_END_OF_LINE | 0xF008 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen, im externen und im remote-externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseite deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF008_R | RES_0xF008_R |
| _STATUS_RESET_TASK_ZEITEN | 0xF040 | - | Status Reset SAS Task Zeiten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF040_R |
| _STEUERN_RESET_STACK_CONSUMPTION | 0xF043 | - | reset stack consumption values (all cores) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043_R |
| _STEUERN_RESET_CPU_PERFORMANCE | 0xF044 | - | resets cpu statistic values (all cores) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF044_R |
| ADAPTIVDATEN_RUECKSETZEN_FASSCOLSI | 0xF601 | - | Reset der Statistik des Bausteins FasScolSi | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTIVDATEN_RUECKSETZEN_FASAWA | 0xF602 | - | Reset der Statistik des Bausteins FasAwa | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTIVDATEN_RUECKSETZEN_FASDACG | 0xF604 | - | Reset der Statistik des Bausteins FasDacg | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTIVDATEN_RUECKSETZEN_FASPCG | 0xF605 | - | Reset der Adaptivdaten-Statistik des Bausteins FasPcg für die Funktion Rückfahrassistent | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTIVDATEN_RUECKSETZEN_FASQALCG | 0xF606 | - | Reset der Statistik des Bausteins FasQalcg | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0031 | 0x0032 | 0x0033 | 0x0034 |

### TAB_0X2953

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X4011

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 |

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

### TAB_ERRID_EMELECTRONICHORIZON

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_ADASInput |
| 0x02 | 2: ComError_LaneBoundaries |
| 0x03 | 3: Reduced_LaneBoundaries |
| 0x04 | 4: Unavailable_LaneBoundaries |
| 0x05 | 5: ComError_Timestamp |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMFREESPACECALCULATION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: OutOfRange_FreeSpaceCameraSegmentData_Distance |
| 0x02 | 2: OutOfRange_FreeSpaceCameraSegmentData_StatusMeasurement |
| 0x03 | 3: OutOfRange_FreeSpaceCameraSegmentData_ExistenceProbability |
| 0x04 | 4: OutOfRange_FreeSpaceRadarLeftSegmentData_Distance |
| 0x05 | 5: OutOfRange_FreeSpaceRadarLeftSegmentData_StatusMeasurement |
| 0x06 | 6: OutOfRange_FreeSpaceRadarLeftSegmentData_ExistenceProbability |
| 0x07 | 7: OutOfRange_FreeSpaceRadarRightSegmentData_Distance |
| 0x08 | 8: OutOfRange_FreeSpaceRadarRightSegmentData_StatusMeasurement |
| 0x09 | 9: OutOfRange_FreeSpaceRadarRightSegmentData_ExistenceProbability |
| 0x0A | 10: OutOfRange_ObjectsRadarFrontObjectData_PositionX |
| 0x0B | 11: OutOfRange_ObjectsRadarFrontObjectData_PositionY |
| 0x0C | 12: OutOfRange_ObjectsRadarFrontObjectData_Length |
| 0x0D | 13: OutOfRange_ObjectsRadarFrontObjectData_Width |
| 0x0E | 14: OutOfRange_ObjectsRadarFrontObjectData_YawAngle |
| 0x0F | 15: OutOfRange_ObjectsRadarFrontObjectData_StatusMeasurement |
| 0x10 | 16: OutOfRange_ObjectsRadarFrontObjectData_ExistenceProbability |
| 0x11 | 17: OutOfRange_FreeSpaceCamera_ExtendedDataQualifier |
| 0x12 | 18: OutOfRange_FreeSpaceRadarLeft_ExtendedDataQualifierFront |
| 0x13 | 19: OutOfRange_FreeSpaceRadarLeft_ExtendedDataQualifierRear |
| 0x14 | 20: OutOfRange_FreeSpaceRadarRight_ExtendedDataQualifierFront |
| 0x15 | 21: OutOfRange_FreeSpaceRadarRight_ExtendedDataQualifierRear |
| 0x16 | 22: OutOfRange_ObjectsRadarFront_ExtendedDataQualifier |
| 0x17 | 23: OutOfRange_FreeSpaceCamera_EventDataQualifier |
| 0x18 | 24: OutOfRange_FreeSpaceRadarLeft_EventDataQualifier |
| 0x19 | 25: OutOfRange_FreeSpaceRadarRight_EventDataQualifier |
| 0x1A | 26: OutOfRange_ObjectsRadarFront_EventDataQualifier_ObjPos |
| 0x1B | 27: OutOfRange_ObjectsRadarFront_EventDataQualifier_ObjRecg |
| 0x1C | 28: OutOfRange_ObjectsRadarFront_EventDataQualifier_ObjMov |
| 0x1D | 29: OutOfRange_ObjectsRadarFront_EventDataQualifier_ObjProb |
| 0x1E | 30: OutOfRange_ObjectsRadarFront_EventDataQualifier_ObjFusionSt |
| 0x1F | 31: OutOfRange_FreeSpaceCamera_Timestamp |
| 0x20 | 32: OutOfRange_FreeSpaceRadarLeft_Timestamp |
| 0x21 | 33: OutOfRange_FreeSpaceRadarRight_Timestamp |
| 0x22 | 34: OutOfRange_ObjectsRadarFront_Timestamp_ObjPos |
| 0x23 | 35: OutOfRange_ObjectsRadarFront_Timestamp_ObjRecg |
| 0x24 | 36: OutOfRange_ObjectsRadarFront_Timestamp_ObjMov |
| 0x25 | 37: OutOfRange_ObjectsRadarFront_Timestamp_ObjProb |
| 0x26 | 38: OutOfRange_ObjectsRadarFront_Timestamp_ObjFusionSt |
| 0x27 | 39: OutOfRange_ObjectsRadarFront_NumberOfObjects_ObjPos |
| 0x28 | 40: OutOfRange_ObjectsRadarFront_NumberOfObjects_ObjRecg |
| 0x29 | 41: OutOfRange_ObjectsRadarFront_NumberOfObjects_ObjMov |
| 0x2A | 42: OutOfRange_ObjectsRadarFront_NumberOfObjects_ObjProb |
| 0x2B | 43: OutOfRange_ObjectsRadarFront_NumberOfObjects_ObjFusionSt |
| 0x2C | 44: OutOfRange_EmOdoClientEgoMotion_PositionX |
| 0x2D | 45: OutOfRange_EmOdoClientEgoMotion_PositionY |
| 0x2E | 46: OutOfRange_EmOdoClientEgoMotion_Yaw |
| 0x2F | 47: OutOfRange_EmOdoClientEgoMotion_EventDataQualifier |
| 0x30 | 48: OutOfRange_OdometryAlignment_TimestampMax |
| 0x31 | 49: OutOfRange_OdometryAlignment_EventDataQualifier |
| 0x32 | 50: OutOfRange_CodingParameter |
| 0x33 | 51: EmOdoClientEgoMotion_Unavailable |
| 0x34 | 52: EmOdoClientEgoMotion_ErrorInvalidBits |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMGAP

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Unavailable_ObjectsFusedInput |
| 0x02 | 2: Unavailable_ObjectAssignmentInput |
| 0x03 | 3: Unavailable_FreespaceSensitiveInput |
| 0x04 | 4: Unavailable_RoadBoundariesSensitiveInput |
| 0x05 | 5: Unavailable_LaneBoundariesValidatedInput |
| 0x06 | 6: Unavailable_RoadGeometryInput |
| 0x07 | 7: Unavailable_RoadForeSightStraightInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMLANEASSIGNMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: EmLaneAssignment_InputFault |
| 0x02 | 2: Unavailable_RoadBoundariesSensitiveInput |
| 0x03 | 3: Unavailable_LaneBoundariesValidated |
| 0x04 | 4: Unavailable_RoadGeometryInput |
| 0x05 | 5: Unavailable_RoadForeSightStraightInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMOBJDESC

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x03 | 3: EmObjDesc_EM_Reduced_GschwLngsFzgbwegg |
| 0x04 | 4: EmObjDesc_EM_Unavailable_GschwLngsFzgbwegg |
| 0x05 | 5: EmObjDesc_EM_Reduced_LngsbschlSchwpkt |
| 0x06 | 6: EmObjDesc_EM_Unavailable_LngsbschlSchwpkt |
| 0x09 | 9: EmObjDesc_EM_Missed_OdometryInput |
| 0x0A | 10: EmObjDesc_EM_Reduced_OdometryInput |
| 0x0B | 11: EmObjDesc_EM_Unavailable_OdometryInput |
| 0x0C | 12: EmObjDesc_EM_Missed_ObjectKaFASInput |
| 0x0D | 13: EmObjDesc_EM_Reduced_ObjectKaFASInput |
| 0x0E | 14: EmObjDesc_EM_Unavailable_ObjectKaFASInput |
| 0x0F | 15: EmObjDesc_EM_Missed_ObjectFusionFrontInput |
| 0x10 | 16: EmObjDesc_EM_Reduced_ObjectFusionFrontInput |
| 0x11 | 17: EmObjDesc_EM_Unavailable_ObjectFusionFrontInput |
| 0x12 | 18: EmObjDesc_EM_Missed_FasCANRSLRSRObjectList |
| 0x13 | 19: EmObjDesc_EM_Unavailable_FasCANRSLRSRInput |
| 0x14 | 20: EmObjDesc_EM_Reduced_TimestampSynchronizationInput |
| 0x15 | 21: EmObjDesc_EM_Unavailable_TimestampSynchronizationInput |
| 0x16 | 22: EmObjDesc_EM_Reduced_IstLngsneigFhrbahn |
| 0x17 | 23: EmObjDesc_EM_Unavailable_IstLngsneigFhrbahn |
| 0x18 | 24: EmObjDesc_EM_Reduced_IstKrumgFzgbwegg |
| 0x19 | 25: EmObjDesc_EM_Unavailable_IstKrumgFzgbwegg |
| 0x1A | 26: EmObjDesc_EM_Reduced_IstSchwmwnklFzgbwegg |
| 0x1B | 27: EmObjDesc_EM_Unavailable_IstSchwmwnklFzgbwegg |
| 0x1C | 28: EmObjDesc_EM_Reduced_FasCANRSLRSRInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMODOCLIENT

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: OutOfRange_QdmOdoBrechngPosAbsPosition_X |
| 0x02 | 2: OutOfRange_QdmOdoBrechngPosAbsPosition_Y |
| 0x03 | 3: OutOfRange_QdmOdoBrechngPosAbsPosition_Yaw |
| 0x04 | 4: OutOfRange_QdmOdoBrechngPosAbsPosition_TimeStamp |
| 0x0B | 11: OutOfRange_EthSIFreeSpaceRecogFrntCamFreespaceRecogFrntCam_Timestamp |
| 0x0C | 12: OutOfRange_FrSpRcgLcaFreespaceLeft_Timestamp |
| 0x0D | 13: OutOfRange_FrSpRcgLcaFreespaceRight_Timestamp |
| 0x0E | 14: OutOfRange_ObjFusionFrrObjRecognitionFrr_Timestamp |
| 0x0F | 15: OutOfRange_ObjListRSL_Timestamp |
| 0x10 | 16: OutOfRange_ObjListRSR_Timestamp |
| 0x11 | 17: OutOfRange_ObjerfsVideoLaneBoundaries_Timestamp |
| 0x14 | 20: Reduced_RelativeEgoMotion_OdometryDataExtrapolated |
| 0x15 | 21: Unavailable_RelativeEgoMotion_StbmbTimeUnavailable |
| 0x16 | 22: Unavailable_RelativeEgoMotion_StbmbTimeNotSync |
| 0x17 | 23: Unavailable_RelativeEgoMotion_OdometryInputUnavailable |
| 0x18 | 24: Unavailable_RelativeEgoMotion_OdometryDataInvalid |
| 0x19 | 25: Unavailable_RelativeEgoMotion_OdometryCalibrationStatusUnavailable |
| 0x1A | 26: Unavailable_RelativeEgoMotion_RequestedOdometryDataUnavailable |
| 0x1B | 27: Unavailable_RelativeEgoMotion_InternalError |
| 0x1C | 28: Unavailable_RelativeEgoMotion_InvalidRequestTimestamps |
| 0x1E | 30: Unavailable_TimeAlignment_StbmbTimeUnavailable |
| 0x1F | 31: Unavailable_TimeAlignment_StbmbTimeNotSync |
| 0x20 | 32: Unavailable_TimeAlignment_InputUnavailableOrInvalid |
| 0x21 | 33: Unavailable_TimeAlignment_InternalError |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMROADASSEMBLY

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Unavailable_LaneBoundariesInput |
| 0x02 | 2: Unavailable_QdmSbsInput |
| 0x03 | 3: Unavailable_FreespaceSensitiveInput |
| 0x04 | 4: Unavailable_RoadBoundariesNonSensitiveInput |
| 0x05 | 5: Unavailable_RoadForeSightInput |
| 0x06 | 6: Unavailable_CollectiveDrivingLaneInput |
| 0x07 | 7: Unavailable_RoadNaviForesightInput |
| 0x08 | 8: Unavailable_RoadNaviForesightStraightInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMSLCONDITIONEVALUATOR

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

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |
| 0xFF | Wert ungültig |

### TAB_LCA_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0 | KEIN_TRIGGER |
| 1 | SKW_LINKS |
| 2 | SKW_RECHTS |
| 3 | RSKW_LINKS |
| 4 | RSKW_RECHTS |
| 5 | SWW_LINKS |
| 6 | SWW_RECHTS |
| 7 | RESERVE_1 |
| 8 | RESERVE_2 |

### TAB_LCA_TRIGGERREASON

| WERT | TEXT |
| --- | --- |
| 0 | UNDEFINED |
| 1 | SEITENKOLLISIONSWARNUNG_LINKS_ABSTAND_OBJEKT |
| 2 | SEITENKOLLISIONSWARNUNG_RECHTS_ABSTAND_OBJEKT |
| 3 | SEITENKOLLISIONSWARNUNG_LINKS_TTC_OBJEKT |
| 4 | SEITENKOLLISIONSWARNUNG_RECHTS_TTC_OBJEKT |
| 5 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_LINKS_ABSTAND_OBJEKT |
| 6 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_RECHTS_ABSTAND_OBJEKT |
| 7 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_LINKS_TTC_OBJEKT |
| 8 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_RECHTS_TTC_OBJEKT |
| 9 | SPURWECHSELWARNUNG_LINKS_UEBERHOLER |
| 10 | SPURWECHSELWARNUNG_RECHTS_UEBERHOLER |
| 11 | SPURWECHSELWARNUNG_LINKS_TOTWINKEL |
| 12 | SPURWECHSELWARNUNG_RECHTS_TOTWINKEL |
| 13 | RESERVE_13 |
| 14 | RESERVE_14 |
| 0xFF | Wert ungültig |

### TAB_STATUS_ANFORDERER

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen |
| 2 | reservier |
| 3 | ungültig |

### TAB_USP_LOCAL_VOLTAGE

| WERT | TEXT |
| --- | --- |
| 0 | Lokale Unterspannung Normal |
| 1 | Lokale Unterspannung MSA  |
| 2 | Lokale Überspannung |
| 0xFF | Wert ungültig |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |
