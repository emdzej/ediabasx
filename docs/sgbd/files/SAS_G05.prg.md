# SAS_G05.prg

## General

|  |  |
| --- | --- |
| File | SAS_G05.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 127 |
| Origin | BMW EV-321 Martin_Aberger |
| Revision | 2.005 |
| Author | TRW-POLSKA-SP.ZO.O. EV-411 Maj |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sonderausstattung-Steuergerät Fahrerassistenz |  |  |
| ORIGIN | string | BMW EV-321 Martin_Aberger |  |  |
| REVISION | string | 2.005 |  |  |
| AUTHOR | string | TRW-POLSKA-SP.ZO.O. EV-411 Maj |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.991 |  |  |
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

### STATUS_ETH_GET_ETHERNET_SWITCHES

Returns the OUI, model number, revision number, and a unique logical ID of all switches of the ECU. UDS   : $31 RoutineControl $01 StartRoutine $1050

_No arguments._

### STEUERN_DLT_RESET_TO_DEFAULT

This routine resets all DLT settings back to ECU default settings.

_No arguments._

### STEUERN_DLT_STORE_CONFIGURATION

This routine saves all DLT settings persistently in the ECU. This routine serves the purpose of persisting all DLT changes done by DLT diagnostic jobs.

_No arguments._

### STEUERN_DLT_SET_DEFAULT_LOGLEVEL

This routine sets the default log level of the DLT subsystem in the ECU for for all not explicitly preconfigured or via DLTSetLogLevel configured application ID/context ID pairs to the given value.

| Name | Type | Description |
| --- | --- | --- |
| NEW_DEFAULT_LOGLEVEL_THRESHOLD | unsigned char | New log level threshold, which shall be set for all not explicitly configured application ID/context ID pairs. Threshold means, that log messages with this or higher severity will be sent to output. 0x00 : Dlt_LOG_OFF (Turn off logging) 0x01 : Dlt_LOG_FATAL (Log only Fatal system error) 0x02 : Dlt_LOG_ERROR (Log Errors occurring in a SWC with impact to correct functionality) 0x03 : Dlt_LOG_WARN (Log messages where a incorrect behavior can not be ensured) 0x04 : Dlt_LOG_INFO (Log messages providing information for better understanding of the internal behavior of a software) 0x05 : Dlt_LOG_DEBUG (Log messages, which are usable only for debugging of a software) 0x06 : Dlt_LOG_VERBOSE (Log messages with the highest communicative level, here all possible states, information and everything else can be logged) |

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

### ARG_0X1046_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex des zur diagnostizierenden Ports/PHYs (beginnend bei Port 0). Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1047_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

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

### ARG_0X104F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NW_INTERFACE_INDEX | + | - | 0-n | high | unsigned char | - | TAB_NW_INTERFACE_INDEX | - | - | - | - | - | Index des Netzwerkinterfaces, für welches der aktuelle DHCP Status zurück gegeben werden soll. Die Nummerierungsreihenfolge muss der Reihenfolge von ETH_IP_CONFIGURATION (RID 0x1045) entsprechen. |

### ARG_0X1090_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| APPLICATION_ID | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Applikations-ID für die der Log-Level Grenzwert geändert werden soll. Wenn dieser Parameter auf 0x00000000 gesetzt ist, wird der Log-Level Grenzwert für alle Kontext-IDs des SG geändert. |
| CONTEXT_ID | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kontext-ID für die der Log-Level Grenzwert geändert werden soll. Parameter wird nur ausgewertet, wenn der Parameter Applikations-ID ungleich 0x00000000 ist. Wenn dieser Parameter auf 0x00000000 gesetzt ist, wird der neue Log-Level Grenzwert für alle Kontext-IDs der gegebenen Applikations-ID geändert.  |
| NEW_LOGLEVEL_THRESHOLD | + | - | 0-n | high | unsigned char | - | TAB_NEW_LOGLEVEL_THRESHOLD | - | - | - | - | - | Neuer LogLevel-Grenzwert |

### ARG_0X6660_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Error number that shall be sent to the navigation (signal ST_ERR_NO_RCVR_NAVI), Range 0-255 |
| RESYNC_RATE | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Specifies the time (in seconds) between two consecutive resync requests. A value of zero leads to exactly one resync request. |

### ARG_0XA15E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASK_MONITOR_LIMIT_VALUE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Limit für TASK_MONITOR Counter 2 |
| TASK_MONITOR_INCR_VALUE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Inkrementierungs Wert für TASK_MONITOR Counter 2 |
| TASK_MONITOR_DECR_VALUE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dekrementierungs Wert für TASK_MONITOR Counter 2 |

### ARG_0XA200_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX_DATENSATZ | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Index Datensatz |

### ARG_0XA201_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KMAIN | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Haupt SWC-Kennung |
| KSUB | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Sub SWC-Kennung |

### ARG_0XDB25_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRIGGER | 0-n | high | unsigned char | - | TAB_LCA_TRIGGER | - | - | - | - | - | Typ der simulierten Warnung |

### ARG_0XDB26_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRIGGER | 0-n | high | unsigned char | - | TAB_QVA_TRIGGER | - | - | - | - | - | Typ der simulierten Warnung |

### ARG_0XF041_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONFIG_VALUE | + | - | 0-n | high | unsigned int | - | ETH_PHY_SET_CONFIG_VALUE | - | - | - | - | - | Config Werte sind: 0x00: Master Mode 0x01 Slave Mode |
| PHY_FLAG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an welcher Phy selektiert werden soll |

### ARG_0XF042_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECU_MODE_VALUE | + | - | 0-n | high | unsigned int | - | ETH_PHY_SET_ECU_MODE_VALUE | - | - | - | - | - | Mode Werte sind: 0x00: Sleep Mode 0x01 Wakeup Mode |
| PHY_FLAG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an welcher Phy selektiert werden soll |

### ARG_0XF043_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHY_FLAG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an welcher Phy selektiert werden soll |
| SPECIAL_MODE_VALUE | + | - | 0-n | high | unsigned int | - | ETH_PHY_SET_SPECIAL_MODE_VALUE | - | - | - | - | - | Special Mode Werte sind: 0x00 default 0x01 TX_off 0x02 Scrambler_off |
| REGISTER_VALUE_1 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert von Phy Register 1 |
| REGISTER_VALUE_2 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert von Phy Register 2 |
| REGISTER_VALUE_3 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert von Phy Register 3 |
| REGISTER_VALUE_4 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert von Phy Register 4 |
| REGISTER_VALUE_5 | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert von Phy Register 5 |

### ARG_0XF044_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHY_FLAG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an welcher Phy selektiert werden soll |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

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

### DHCP_CLIENT_STATE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | DHCP client nicht aktiv (Aktivierungsleitung low) |
| 0x01 | kein Discover versendet |
| 0x02 | Discover versendet, keine Antwort erhalten |
| 0x03 | DHCP offer erhalten, Request versendet |
| 0x04 | DHCP request versendet, kein Acknowledge empfangen |
| 0x05 | Acknowledge empfangen, DHCP Adresse wurde NW-Interface zugewiesen |
| 0xFF | Wert ungültig |

### ETH_LEARN_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | Lernen erfolgreich |
| 0x1 | Lernen nicht erfolgreich oder noch nicht gelernt |

### ETH_PHY_SET_CONFIG_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Master |
| 0x01 | Slave |

### ETH_PHY_SET_ECU_MODE_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sleep |
| 0x01 | Wakeup |

### ETH_PHY_SET_SPECIAL_MODE_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | default |
| 0x01 | TX_off |
| 0x02 | Scrambler_off |

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
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x022300 | Energiesparmode aktiv | 0 | - |
| 0x022303 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x022304 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x022308 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022309 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02230A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02230B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02230C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02230D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x022340 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x022341 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x022342 | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x022343 | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x022344 | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x022345 | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x02FF23 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030801 | FAS - ACC/DCC - Sicherheitsabschaltung | 0 | - |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 0 | - |
| 0x030833 | FAS - Ferngesteuertes Parken - Nicht verfügbar oder Abbruch | 0 | - |
| 0x030838 | FAS - Ausfall Nothalteassistent | 0 | - |
| 0x030839 | FAS - Nothalteassistent eingeschränkt verfügbar | 0 | - |
| 0x03083A | FAS - Nothalteassistent keine Aktivierung möglich | 0 | - |
| 0x030841 | FAS - Spurwechselassistent nicht aktivierbar | 1 | - |
| 0x482F91 | Steuergerät intern - NvM Integritätsfehler | 0 | - |
| 0x482F92 | Steuergerät intern - NvM Anfrage fehlgeschlagen | 0 | - |
| 0x482F93 | Steuergerät intern - TaskMonitor - kritischer Counterwert erreicht | 0 | - |
| 0x482F94 | Betriebszustand - Temperatur außerhalb Temperaturbereich | 1 | - |
| 0x482FA0 | USS-CAN Control Module Bus OFF | 0 | - |
| 0x482FA1 | Steuergerät intern - PSU-Fehler | 0 | - |
| 0x482FA2 | Steuergerät intern - HW-Fehler | 0 | - |
| 0x482FA3 | Steuergerät intern - TaskMonitor-Fehler | 0 | - |
| 0x482FA4 | Steuergerät intern - interner SW-Fehler | 0 | - |
| 0xD1C41F | FLEXRAY Physical bus error | 0 | - |
| 0xD1C420 | FLEXRAY controller error | 0 | - |
| 0xD1C487 | FLEXRAY StartUpFailed | 0 | - |
| 0xD1C518 | FAS-CAN Control Module Bus OFF | 0 | - |
| 0xD1C600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xD1C602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xD1C603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 | - |
| 0xD1C604 | Ethernet: Unerwarteter Link aufgebaut | 1 | - |
| 0xD1CBFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD1D405 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | - |
| 0xD1D406 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD1D407 | Botschaft(Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD1D408 | Signal(Geschwindigkeit Fahrzeug, ID: V_VEH) ungültig | 1 | - |
| 0xD1D40A | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) fehlt | 1 | - |
| 0xD1D40B | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) nicht aktuell | 1 | - |
| 0xD1D40C | Botschaft(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Prüfsumme falsch | 1 | - |
| 0xD1D40D | Signal(Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) ungültig | 1 | - |
| 0xD1D40F | Botschaft(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) fehlt | 1 | - |
| 0xD1D412 | Signal(Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) ungültig | 1 | - |
| 0xD1D428 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) fehlt | 1 | - |
| 0xD1D429 | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) nicht aktuell | 1 | - |
| 0xD1D42A | Botschaft(Status Verbrennungsmotor, ID: ST_CENG) Prüfsumme falsch | 1 | - |
| 0xD1D42B | Signal(Status Verbrennungsmotor, ID: ST_CENG) ungültig | 1 | - |
| 0xD1D432 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD1D433 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD1D434 | Botschaft(Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD1D435 | Signal(Zustand Fahrzeug, ID: CON_VEH) ungültig | 1 | - |
| 0xD1D437 | Botschaft(Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD1D43A | Signal(Außentemperatur, ID: A_TEMP) ungültig | 1 | - |
| 0xD1D441 | Botschaft(Einheiten BN2020, ID: EINHEITEN_BN2020) fehlt | 1 | - |
| 0xD1D444 | Signal(Einheiten BN2020, ID: EINHEITEN_BN2020) ungültig | 1 | - |
| 0xD1D44E | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) fehlt | 1 | - |
| 0xD1D44F | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) nicht aktuell | 1 | - |
| 0xD1D450 | Botschaft(Winkel Fahrpedal, ID: ANG_ACPD) Prüfsumme falsch | 1 | - |
| 0xD1D451 | Signal(Winkel Fahrpedal, ID: ANG_ACPD) ungültig | 1 | - |
| 0xD1D452 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD1D453 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) nicht aktuell | 1 | - |
| 0xD1D454 | Botschaft(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Prüfsumme falsch | 1 | - |
| 0xD1D455 | Signal(Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) ungültig | 1 | - |
| 0xD1D462 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) fehlt | 1 | - |
| 0xD1D463 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) nicht aktuell | 1 | - |
| 0xD1D464 | Botschaft(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) Prüfsumme falsch | 1 | - |
| 0xD1D465 | Signal(Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) ungültig | 1 | - |
| 0xD1D47A | Botschaft(Daten Funktion DAC, ID: DT_FN_DAC) fehlt | 1 | - |
| 0xD1D47D | Signal(Daten Funktion DAC, ID: DT_FN_DAC) ungültig | 1 | - |
| 0xD1D47E | Botschaft(Daten Funktion HDC, ID: DT_FN_HDC) fehlt | 1 | - |
| 0xD1D481 | Signal(Daten Funktion HDC, ID: DT_FN_HDC) ungültig | 1 | - |
| 0xD1D482 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) fehlt | 1 | - |
| 0xD1D483 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) nicht aktuell | 1 | - |
| 0xD1D484 | Botschaft(Daten Antriebsstrang 2, ID: DT_PT_2) Prüfsumme falsch | 1 | - |
| 0xD1D485 | Signal(Daten Antriebsstrang 2, ID: DT_PT_2) ungültig | 1 | - |
| 0xD1D4A2 | Botschaft(Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) fehlt | 1 | - |
| 0xD1D4A5 | Signal(Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) ungültig | 1 | - |
| 0xD1D4A9 | Signal(Navigationsgraph, ID: NAV_GRAPH) ungültig | 1 | - |
| 0xD1D4AD | Signal(Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) ungültig | 1 | - |
| 0xD1D4B1 | Signal(Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) ungültig | 1 | - |
| 0xD1D4B2 | Botschaft(Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) fehlt | 1 | - |
| 0xD1D4B5 | Signal(Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) ungültig | 1 | - |
| 0xD1D4B9 | Signal(Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) ungültig | 1 | - |
| 0xD1D4BD | Signal(Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) ungültig | 1 | - |
| 0xD1D4BE | Botschaft(Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 | - |
| 0xD1D4C1 | Signal(Navigation System Information, ID: NAV_SYS_INF) ungültig | 1 | - |
| 0xD1D4C6 | Botschaft(Bedienung Tempomat, ID: OP_CCTR) fehlt | 1 | - |
| 0xD1D4C7 | Botschaft(Bedienung Tempomat, ID: OP_CCTR) nicht aktuell | 1 | - |
| 0xD1D4C8 | Botschaft(Bedienung Tempomat, ID: OP_CCTR) Prüfsumme falsch | 1 | - |
| 0xD1D4C9 | Signal(Bedienung Tempomat, ID: OP_CCTR) ungültig | 1 | - |
| 0xD1D4D6 | Botschaft(Erkennung Verkehrszeichen, ID: RCOG_TRSG) fehlt | 1 | - |
| 0xD1D4D9 | Signal(Erkennung Verkehrszeichen, ID: RCOG_TRSG) ungültig | 1 | - |
| 0xD1D4F2 | Botschaft(Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xD1D4F5 | Signal(Status Anhänger, ID: STAT_ANHAENGER) ungültig | 1 | - |
| 0xD1D4F9 | Signal(Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) ungültig | 1 | - |
| 0xD1D502 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) fehlt | 1 | - |
| 0xD1D503 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) nicht aktuell | 1 | - |
| 0xD1D504 | Botschaft(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Prüfsumme falsch | 1 | - |
| 0xD1D505 | Signal(Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) ungültig | 1 | - |
| 0xD1D50E | Botschaft(Status ECBA, ID: ST_ECBA) fehlt | 1 | - |
| 0xD1D50F | Botschaft(Status ECBA, ID: ST_ECBA) nicht aktuell | 1 | - |
| 0xD1D510 | Botschaft(Status ECBA, ID: ST_ECBA) Prüfsumme falsch | 1 | - |
| 0xD1D511 | Signal(Status ECBA, ID: ST_ECBA) ungültig | 1 | - |
| 0xD1D51E | Botschaft(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) fehlt | 1 | - |
| 0xD1D521 | Signal(Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) ungültig | 1 | - |
| 0xD1D522 | Botschaft(Status Bedienelement HDC, ID: ST_OPEL_HDC) fehlt | 1 | - |
| 0xD1D525 | Signal(Status Bedienelement HDC, ID: ST_OPEL_HDC) ungültig | 1 | - |
| 0xD1D526 | Botschaft(Status Parkassistent, ID: ST_PMA) fehlt | 1 | - |
| 0xD1D527 | Botschaft(Status Parkassistent, ID: ST_PMA) nicht aktuell | 1 | - |
| 0xD1D528 | Botschaft(Status Parkassistent, ID: ST_PMA) Prüfsumme falsch | 1 | - |
| 0xD1D529 | Signal(Status Parkassistent, ID: ST_PMA) ungültig | 1 | - |
| 0xD1D52A | Botschaft(Status RCP, ID: ST_RCP) fehlt | 1 | - |
| 0xD1D52B | Botschaft(Status RCP, ID: ST_RCP) nicht aktuell | 1 | - |
| 0xD1D52C | Botschaft(Status RCP, ID: ST_RCP) Prüfsumme falsch | 1 | - |
| 0xD1D52D | Signal(Status RCP, ID: ST_RCP) ungültig | 1 | - |
| 0xD1D536 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) fehlt | 1 | - |
| 0xD1D537 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) nicht aktuell | 1 | - |
| 0xD1D538 | Botschaft(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) Prüfsumme falsch | 1 | - |
| 0xD1D539 | Signal(Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) ungültig | 1 | - |
| 0xD1D53A | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD1D53B | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD1D53C | Botschaft(Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD1D53D | Signal(Status Stabilisierung DSC, ID: ST_STAB_DSC) ungültig | 1 | - |
| 0xD1D53E | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | - |
| 0xD1D53F | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) nicht aktuell | 1 | - |
| 0xD1D540 | Botschaft(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Prüfsumme falsch | 1 | - |
| 0xD1D541 | Signal(Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) ungültig | 1 | - |
| 0xD1D542 | Botschaft(Status Lenkung Hinterachse, ID: ST_STE_BAX) fehlt | 1 | - |
| 0xD1D545 | Signal(Status Lenkung Hinterachse, ID: ST_STE_BAX) ungültig | 1 | - |
| 0xD1D54A | Botschaft(Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) fehlt | 1 | - |
| 0xD1D54D | Signal(Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) ungültig | 1 | - |
| 0xD1D54E | Botschaft(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) fehlt | 1 | - |
| 0xD1D551 | Signal(Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) ungültig | 1 | - |
| 0xD1D556 | Botschaft(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) fehlt | 1 | - |
| 0xD1D559 | Signal(Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) ungültig | 1 | - |
| 0xD1D55A | Botschaft(Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) fehlt | 1 | - |
| 0xD1D55D | Signal(Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) ungültig | 1 | - |
| 0xD1D562 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) fehlt | 1 | - |
| 0xD1D563 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) nicht aktuell | 1 | - |
| 0xD1D564 | Botschaft(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Prüfsumme falsch | 1 | - |
| 0xD1D565 | Signal(Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) ungültig | 1 | - |
| 0xD1D56A | Botschaft(Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) fehlt | 1 | - |
| 0xD1D56D | Signal(Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) ungültig | 1 | - |
| 0xD1D56E | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) fehlt | 1 | - |
| 0xD1D56F | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) nicht aktuell | 1 | - |
| 0xD1D570 | Botschaft(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Prüfsumme falsch | 1 | - |
| 0xD1D571 | Signal(Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) ungültig | 1 | - |
| 0xD1D572 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) fehlt | 1 | - |
| 0xD1D573 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) nicht aktuell | 1 | - |
| 0xD1D574 | Botschaft(Momentenpotential Antriebsstrang, ID: TPO_PT) Prüfsumme falsch | 1 | - |
| 0xD1D575 | Signal(Momentenpotential Antriebsstrang, ID: TPO_PT) ungültig | 1 | - |
| 0xD1D576 | Botschaft(Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 | - |
| 0xD1D579 | Signal(Uhrzeit/Datum, ID: UHRZEIT_DATUM) ungültig | 1 | - |
| 0xD1D57A | Botschaft(Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) fehlt | 1 | - |
| 0xD1D57D | Signal(Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) ungültig | 1 | - |
| 0xD1D57E | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) fehlt | 1 | - |
| 0xD1D57F | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) nicht aktuell | 1 | - |
| 0xD1D580 | Botschaft(Radmoment Antrieb 4, ID: WMOM_DRV_4) Prüfsumme falsch | 1 | - |
| 0xD1D581 | Signal(Radmoment Antrieb 4, ID: WMOM_DRV_4) ungültig | 1 | - |
| 0xD1D582 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) fehlt | 1 | - |
| 0xD1D583 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) nicht aktuell | 1 | - |
| 0xD1D584 | Botschaft(Radmoment Antrieb 9, ID: WMOM_DRV_9) Prüfsumme falsch | 1 | - |
| 0xD1D585 | Signal(Radmoment Antrieb 9, ID: WMOM_DRV_9) ungültig | 1 | - |
| 0xD1D58A | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) fehlt | 1 | - |
| 0xD1D58B | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) nicht aktuell | 1 | - |
| 0xD1D58C | Botschaft(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Prüfsumme falsch | 1 | - |
| 0xD1D58D | Signal(Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) ungültig | 1 | - |
| 0xD1D599 | Signal(Abstandsmeldung PDC Vorne 2, ID: GAP_PDC_FS_2) ungültig | 1 | - |
| 0xD1D59E | Botschaft(Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) fehlt | 1 | - |
| 0xD1D5A1 | Signal(Anfrage Aktivierung Funktion Parken 2, ID: RQ_ACTVN_FN_PKG_2) ungültig | 1 | - |
| 0xD1D5A2 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) fehlt | 1 | - |
| 0xD1D5A3 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) nicht aktuell | 1 | - |
| 0xD1D5A4 | Botschaft(Bedienung Taster Parken, ID: OP_PUBU_PKG) Prüfsumme falsch | 1 | - |
| 0xD1D5A5 | Signal(Bedienung Taster Parken, ID: OP_PUBU_PKG) ungültig | 1 | - |
| 0xD1D5A6 | Botschaft(Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) fehlt | 1 | - |
| 0xD1D5A9 | Signal(Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) ungültig | 1 | - |
| 0xD1D5AA | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) fehlt | 1 | - |
| 0xD1D5AB | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) nicht aktuell | 1 | - |
| 0xD1D5AC | Botschaft(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) Prüfsumme falsch | 1 | - |
| 0xD1D5AD | Signal(Fahrzeug Dynamik Daten Längs 1, ID: VEH_DYNMC_DT_LN_1) ungültig | 1 | - |
| 0xD1D5AE | Botschaft(Fahrzeugbewegung Modell, ID: VHMV_MDL) fehlt | 1 | - |
| 0xD1D5AF | Botschaft(Fahrzeugbewegung Modell, ID: VHMV_MDL) nicht aktuell | 1 | - |
| 0xD1D5B0 | Botschaft(Fahrzeugbewegung Modell, ID: VHMV_MDL) Prüfsumme falsch | 1 | - |
| 0xD1D5B1 | Signal(Fahrzeugbewegung Modell, ID: VHMV_MDL) ungültig | 1 | - |
| 0xD1D5B3 | Botschaft(Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D5B4 | Botschaft(Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D5B5 | Signal(Freiraumliste Seite Links Radar, ID: FSP_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D5B7 | Botschaft(Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D5B8 | Botschaft(Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D5B9 | Signal(Freiraumliste Seite Rechts Radar, ID: FSP_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D5BA | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) fehlt | 1 | - |
| 0xD1D5BB | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) nicht aktuell | 1 | - |
| 0xD1D5BC | Botschaft(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD1D5BD | Signal(Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) ungültig | 1 | - |
| 0xD1D5C2 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) fehlt | 1 | - |
| 0xD1D5C3 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) nicht aktuell | 1 | - |
| 0xD1D5C4 | Botschaft(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Prüfsumme falsch | 1 | - |
| 0xD1D5C5 | Signal(Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) ungültig | 1 | - |
| 0xD1D5C6 | Botschaft(Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) fehlt | 1 | - |
| 0xD1D5C7 | Botschaft(Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) nicht aktuell | 1 | - |
| 0xD1D5C8 | Botschaft(Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Prüfsumme falsch | 1 | - |
| 0xD1D5C9 | Signal(Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) ungültig | 1 | - |
| 0xD1D5CA | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) fehlt | 1 | - |
| 0xD1D5CB | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) nicht aktuell | 1 | - |
| 0xD1D5CC | Botschaft(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) Prüfsumme falsch | 1 | - |
| 0xD1D5CD | Signal(Ist Vektor Fahrzeugbewegung, ID: AVL_VEC_VHMV) ungültig | 1 | - |
| 0xD1D5CE | Botschaft(Kennzahl Umrechnung Geschwindigkeit, ID: CHNO_COV_V) fehlt | 1 | - |
| 0xD1D5D1 | Signal(Kennzahl Umrechnung Geschwindigkeit, ID: CHNO_COV_V) ungültig | 1 | - |
| 0xD1D5D2 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD1D5D3 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | - |
| 0xD1D5D4 | Botschaft(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD1D5D5 | Signal(Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) ungültig | 1 | - |
| 0xD1D5D6 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) fehlt | 1 | - |
| 0xD1D5D7 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) nicht aktuell | 1 | - |
| 0xD1D5D8 | Botschaft(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) Prüfsumme falsch | 1 | - |
| 0xD1D5D9 | Signal(Lenkwinkel Vorderachse Effektiv, ID: STEA_FTAX_EFFV) ungültig | 1 | - |
| 0xD1D5DA | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) fehlt | 1 | - |
| 0xD1D5DB | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) nicht aktuell | 1 | - |
| 0xD1D5DC | Botschaft(Masse/Gewicht Fahrzeug, ID: MASS_VEH) Prüfsumme falsch | 1 | - |
| 0xD1D5DD | Signal(Masse/Gewicht Fahrzeug, ID: MASS_VEH) ungültig | 1 | - |
| 0xD1D5DE | Botschaft(Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD1D5DF | Botschaft(Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 | - |
| 0xD1D5E0 | Botschaft(Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 | - |
| 0xD1D5E1 | Signal(Neigung Fahrbahn, ID: TLT_RW) ungültig | 1 | - |
| 0xD1D5E3 | Botschaft(Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D5E4 | Botschaft(Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D5E5 | Signal(Objektliste Seite Links Radar, ID: OL_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D5E7 | Botschaft(Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D5E8 | Botschaft(Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D5E9 | Signal(Objektliste Seite Rechts Radar, ID: OL_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D5FE | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) fehlt | 1 | - |
| 0xD1D5FF | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) nicht aktuell | 1 | - |
| 0xD1D600 | Botschaft(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) Prüfsumme falsch | 1 | - |
| 0xD1D601 | Signal(Umgebung Detektion Parken, ID: ENVI_DETE_PKG) ungültig | 1 | - |
| 0xD1D602 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) fehlt | 1 | - |
| 0xD1D603 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) nicht aktuell | 1 | - |
| 0xD1D604 | Botschaft(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) Prüfsumme falsch | 1 | - |
| 0xD1D605 | Signal(Umgebung Detektion Parken Seite, ID: ENVI_DETE_PKG_SIDE) ungültig | 1 | - |
| 0xD1D606 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) fehlt | 1 | - |
| 0xD1D607 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) nicht aktuell | 1 | - |
| 0xD1D608 | Botschaft(Status Warnbremskoordinator, ID: ST_WBK) Prüfsumme falsch | 1 | - |
| 0xD1D609 | Signal(Status Warnbremskoordinator, ID: ST_WBK) ungültig | 1 | - |
| 0xD1D60A | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) fehlt | 1 | - |
| 0xD1D60B | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) nicht aktuell | 1 | - |
| 0xD1D60C | Botschaft(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Prüfsumme falsch | 1 | - |
| 0xD1D60D | Signal(Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) ungültig | 1 | - |
| 0xD1D60E | Botschaft(Status System Parken 2, ID: ST_SY_PKG_2) fehlt | 1 | - |
| 0xD1D611 | Signal(Status System Parken 2, ID: ST_SY_PKG_2) ungültig | 1 | - |
| 0xD1D612 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 | - |
| 0xD1D613 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) nicht aktuell | 1 | - |
| 0xD1D614 | Botschaft(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Prüfsumme falsch | 1 | - |
| 0xD1D615 | Signal(Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) ungültig | 1 | - |
| 0xD1D616 | Botschaft(Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID: FDBK_VIB_STW_DISP_EXMI) fehlt | 1 | - |
| 0xD1D619 | Signal(Rückmeldung Vibration Lenkrad Anzeige Außenspiegel, ID: FDBK_VIB_STW_DISP_EXMI) ungültig | 1 | - |
| 0xD1D61A | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) fehlt | 1 | - |
| 0xD1D61B | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) nicht aktuell | 1 | - |
| 0xD1D61C | Botschaft(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD1D61D | Signal(Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) ungültig | 1 | - |
| 0xD1D61E | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) fehlt | 1 | - |
| 0xD1D61F | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) nicht aktuell | 1 | - |
| 0xD1D620 | Botschaft(Odometrie Fahrzeug 1, ID: ODO_VEH_1) Prüfsumme falsch | 1 | - |
| 0xD1D621 | Signal(Odometrie Fahrzeug 1, ID: ODO_VEH_1) ungültig | 1 | - |
| 0xD1D622 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) fehlt | 1 | - |
| 0xD1D623 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) nicht aktuell | 1 | - |
| 0xD1D624 | Botschaft(Odometrie Fahrzeug 2, ID: ODO_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD1D625 | Signal(Odometrie Fahrzeug 2, ID: ODO_VEH_2) ungültig | 1 | - |
| 0xD1D626 | Botschaft(Odometrie Fahrzeug 3, ID: ODO_VEH_3) fehlt | 1 | - |
| 0xD1D629 | Signal(Odometrie Fahrzeug 3, ID: ODO_VEH_3) ungültig | 1 | - |
| 0xD1D62A | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) fehlt | 1 | - |
| 0xD1D62B | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) nicht aktuell | 1 | - |
| 0xD1D62C | Botschaft(Parken Querführung Koordination, ID: PKG_LAG_COOR) Prüfsumme falsch | 1 | - |
| 0xD1D62D | Signal(Parken Querführung Koordination, ID: PKG_LAG_COOR) ungültig | 1 | - |
| 0xD1D62E | Botschaft(Parken Querführung Umgebung, ID: PKG_LAG_ENVI) fehlt | 1 | - |
| 0xD1D631 | Signal(Parken Querführung Umgebung, ID: PKG_LAG_ENVI) ungültig | 1 | - |
| 0xD1D632 | Botschaft(Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) fehlt | 1 | - |
| 0xD1D633 | Botschaft(Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D634 | Botschaft(Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D635 | Signal(Freiraum Segment ** Seite Links Radar, ID: CLRC_SEG_**_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D636 | Botschaft(Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) fehlt | 1 | - |
| 0xD1D637 | Botschaft(Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D638 | Botschaft(Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D639 | Signal(Freiraum Segment ** Seite Rechts Radar, ID: CLRC_SEG_**_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D63A | Botschaft(Objekt ** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) fehlt | 1 | - |
| 0xD1D63B | Botschaft(Objekt ** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D63C | Botschaft(Objekt ** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D63D | Signal(Objekt ** Basis Seite Links Radar, ID: OBJ_**_BS_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D63E | Botschaft(Objekt ** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) fehlt | 1 | - |
| 0xD1D63F | Botschaft(Objekt ** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D640 | Botschaft(Objekt ** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D641 | Signal(Objekt ** Basis Seite Rechts Radar, ID: OBJ_**_BS_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D643 | Botschaft(Objekt ** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D644 | Botschaft(Objekt ** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D645 | Signal(Objekt ** Erweitert Seite Links Radar, ID: OBJ_**_EXT_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D647 | Botschaft(Objekt ** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D648 | Botschaft(Objekt ** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D649 | Signal(Objekt ** Erweitert Seite Rechts Radar, ID: OBJ_**_EXT_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D64B | Botschaft(Objekt ** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D64C | Botschaft(Objekt ** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D64D | Signal(Objekt ** Qualität Seite Links Radar, ID: OBJ_**_QUAL_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D64F | Botschaft(Objekt ** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D650 | Botschaft(Objekt ** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D651 | Signal(Objekt ** Qualität Seite Rechts Radar, ID: OBJ_**_QUAL_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D652 | Botschaft(Potentialvektor Beschleunigung, ID: PVE_ACLN) fehlt | 1 | - |
| 0xD1D653 | Botschaft(Potentialvektor Beschleunigung, ID: PVE_ACLN) nicht aktuell | 1 | - |
| 0xD1D654 | Botschaft(Potentialvektor Beschleunigung, ID: PVE_ACLN) Prüfsumme falsch | 1 | - |
| 0xD1D655 | Signal(Potentialvektor Beschleunigung, ID: PVE_ACLN) ungültig | 1 | - |
| 0xD1D656 | Botschaft(Potentialvektor Gruppe ** Dynamik, ID: PVE_GRP_**_DYNMC) fehlt | 1 | - |
| 0xD1D657 | Botschaft(Potentialvektor Gruppe ** Dynamik, ID: PVE_GRP_**_DYNMC) nicht aktuell | 1 | - |
| 0xD1D658 | Botschaft(Potentialvektor Gruppe ** Dynamik, ID: PVE_GRP_**_DYNMC) Prüfsumme falsch | 1 | - |
| 0xD1D659 | Signal(Potentialvektor Gruppe ** Dynamik, ID: PVE_GRP_**_DYNMC) ungültig | 1 | - |
| 0xD1D65A | Botschaft(Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) fehlt | 1 | - |
| 0xD1D65B | Botschaft(Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) nicht aktuell | 1 | - |
| 0xD1D65C | Botschaft(Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) Prüfsumme falsch | 1 | - |
| 0xD1D65D | Signal(Potentialvektor Krümmung X Wert, ID: PVE_CRV_X_VL) ungültig | 1 | - |
| 0xD1D65E | Botschaft(Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) fehlt | 1 | - |
| 0xD1D65F | Botschaft(Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) nicht aktuell | 1 | - |
| 0xD1D660 | Botschaft(Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) Prüfsumme falsch | 1 | - |
| 0xD1D661 | Signal(Potentialvektor Krümmung Y Wert, ID: PVE_CRV_Y_VL) ungültig | 1 | - |
| 0xD1D662 | Botschaft(Potentialvektor X Wert 1 Änderung Krümmung, ID: PVE_X_VL_1_CHNG_CRV) fehlt | 1 | - |
| 0xD1D663 | Botschaft(Potentialvektor X Wert 1 Änderung Krümmung, ID: PVE_X_VL_1_CHNG_CRV) nicht aktuell | 1 | - |
| 0xD1D664 | Botschaft(Potentialvektor X Wert 1 Änderung Krümmung, ID: PVE_X_VL_1_CHNG_CRV) Prüfsumme falsch | 1 | - |
| 0xD1D665 | Signal(Potentialvektor X Wert 1 Änderung Krümmung, ID: PVE_X_VL_1_CHNG_CRV) ungültig | 1 | - |
| 0xD1D666 | Botschaft(Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) fehlt | 1 | - |
| 0xD1D667 | Botschaft(Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) nicht aktuell | 1 | - |
| 0xD1D668 | Botschaft(Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) Prüfsumme falsch | 1 | - |
| 0xD1D669 | Signal(Potentialvektor X Wert 2 Änderung Krümmung, ID: PVE_X_VL_2_CHNG_CRV) ungültig | 1 | - |
| 0xD1D66A | Botschaft(Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) fehlt | 1 | - |
| 0xD1D66B | Botschaft(Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) nicht aktuell | 1 | - |
| 0xD1D66C | Botschaft(Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) Prüfsumme falsch | 1 | - |
| 0xD1D66D | Signal(Potentialvektor Änderung Krümmung Y Wert, ID: PVE_CHNG_CRV_Y_VL) ungültig | 1 | - |
| 0xD1D685 | Botschaft(Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) fehlt | 1 | - |
| 0xD1D688 | Signal(Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) ungültig | 1 | - |
| 0xD1D689 | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) fehlt | 1 | - |
| 0xD1D68A | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) nicht aktuell | 1 | - |
| 0xD1D68B | Botschaft(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) Prüfsumme falsch | 1 | - |
| 0xD1D68C | Signal(Steuerung Funktionen Blinken, ID: CTR_FN_IDC) ungültig | 1 | - |
| 0xD1D691 | Botschaft(Fahrspur Liste, ID: LNE_LST) fehlt | 1 | - |
| 0xD1D692 | Botschaft(Fahrspur Liste, ID: LNE_LST) nicht aktuell | 1 | - |
| 0xD1D693 | Botschaft(Fahrspur Liste, ID: LNE_LST) Prüfsumme falsch | 1 | - |
| 0xD1D694 | Signal(Fahrspur Liste, ID: LNE_LST) ungültig | 1 | - |
| 0xD1D695 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) fehlt | 1 | - |
| 0xD1D696 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) nicht aktuell | 1 | - |
| 0xD1D697 | Botschaft(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) Prüfsumme falsch | 1 | - |
| 0xD1D698 | Signal(Fahrspurmarkierung Ego Links Eigenschaft, ID: LNMR_EGO_LH_PROP) ungültig | 1 | - |
| 0xD1D699 | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) fehlt | 1 | - |
| 0xD1D69A | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) nicht aktuell | 1 | - |
| 0xD1D69B | Botschaft(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) Prüfsumme falsch | 1 | - |
| 0xD1D69C | Signal(Fahrspurmarkierung Ego Links Geometrie, ID: LNMR_EGO_LH_GMY) ungültig | 1 | - |
| 0xD1D69D | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) fehlt | 1 | - |
| 0xD1D69E | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) nicht aktuell | 1 | - |
| 0xD1D69F | Botschaft(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) Prüfsumme falsch | 1 | - |
| 0xD1D6A0 | Signal(Fahrspurmarkierung Ego Rechts Eigenschaft, ID: LNMR_EGO_RH_PROP) ungültig | 1 | - |
| 0xD1D6A1 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) fehlt | 1 | - |
| 0xD1D6A2 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) nicht aktuell | 1 | - |
| 0xD1D6A3 | Botschaft(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) Prüfsumme falsch | 1 | - |
| 0xD1D6A4 | Signal(Fahrspurmarkierung Ego Rechts Geometrie, ID: LNMR_EGO_RH_GMY) ungültig | 1 | - |
| 0xD1D6AE | Botschaft(Objekt ** Erweitert 2 Seite Links Radar, ID: OBJ_**_EXT_2_SIDE_LH_RADA) nicht aktuell | 1 | - |
| 0xD1D6AF | Botschaft(Objekt ** Erweitert 2 Seite Links Radar, ID: OBJ_**_EXT_2_SIDE_LH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D6B0 | Signal(Objekt ** Erweitert 2 Seite Links Radar, ID: OBJ_**_EXT_2_SIDE_LH_RADA) ungültig | 1 | - |
| 0xD1D6B2 | Botschaft(Objekt ** Erweitert 2 Seite Rechts Radar, ID: OBJ_**_EXT_2_SIDE_RH_RADA) nicht aktuell | 1 | - |
| 0xD1D6B3 | Botschaft(Objekt ** Erweitert 2 Seite Rechts Radar, ID: OBJ_**_EXT_2_SIDE_RH_RADA) Prüfsumme falsch | 1 | - |
| 0xD1D6B4 | Signal(Objekt ** Erweitert 2 Seite Rechts Radar, ID: OBJ_**_EXT_2_SIDE_RH_RADA) ungültig | 1 | - |
| 0xD1D6B5 | Botschaft(Echo ** Direkt Ultraschallsensor, ID: ECH_**_DIC_USS) fehlt | 1 | - |
| 0xD1D6B8 | Signal(Echo ** Direkt Ultraschallsensor, ID: ECH_**_DIC_USS) ungültig | 1 | - |
| 0xD1D6B9 | Botschaft(Echo ** Indirekt Ultraschallsensor, ID: ECH_**_IDIC_USS) fehlt | 1 | - |
| 0xD1D6BC | Signal(Echo ** Indirekt Ultraschallsensor, ID: ECH_**_IDIC_USS) ungültig | 1 | - |
| 0xD1D6BD | Botschaft(Status Ultraschallsensor Blindheit Erkennung, ID: ST_USS_BD_RCOG) fehlt | 1 | - |
| 0xD1D6BE | Botschaft(Status Ultraschallsensor Blindheit Erkennung, ID: ST_USS_BD_RCOG) nicht aktuell | 1 | - |
| 0xD1D6BF | Botschaft(Status Ultraschallsensor Blindheit Erkennung, ID: ST_USS_BD_RCOG) Prüfsumme falsch | 1 | - |
| 0xD1D6C0 | Signal(Status Ultraschallsensor Blindheit Erkennung, ID: ST_USS_BD_RCOG) ungültig | 1 | - |
| 0xD1D6C1 | Botschaft(Status Ultraschallsensor Hinten, ID: ST_USS_RS) fehlt | 1 | - |
| 0xD1D6C2 | Botschaft(Status Ultraschallsensor Hinten, ID: ST_USS_RS) nicht aktuell | 1 | - |
| 0xD1D6C3 | Botschaft(Status Ultraschallsensor Hinten, ID: ST_USS_RS) Prüfsumme falsch | 1 | - |
| 0xD1D6C4 | Signal(Status Ultraschallsensor Hinten, ID: ST_USS_RS) ungültig | 1 | - |
| 0xD1D6C5 | Botschaft(Status Ultraschallsensor Vorne, ID: ST_USS_FS) fehlt | 1 | - |
| 0xD1D6C6 | Botschaft(Status Ultraschallsensor Vorne, ID: ST_USS_FS) nicht aktuell | 1 | - |
| 0xD1D6C7 | Botschaft(Status Ultraschallsensor Vorne, ID: ST_USS_FS) Prüfsumme falsch | 1 | - |
| 0xD1D6C8 | Signal(Status Ultraschallsensor Vorne, ID: ST_USS_FS) ungültig | 1 | - |
| 0xD1D6DE | Botschaft(Status Fahrlicht, ID: STAT_FAHRLICHT) fehlt | 1 | - |
| 0xD1D6E1 | Signal(Status Fahrlicht, ID: STAT_FAHRLICHT) ungültig | 1 | - |
| 0xD1D6E3 | Botschaft(Status Helligkeit Umgebung, ID: BRIG_SURR) fehlt | 1 | - |
| 0xD1D6E6 | Signal(Status Helligkeit Umgebung, ID: BRIG_SURR) ungültig | 1 | - |
| 0xD1D712 | Botschaft(Bedienung Lenkstockstaster, ID: BEDIENUNG_LENKSTOCK) fehlt | 1 | - |
| 0xD1D715 | Botschaft(Steuerung Konfiguration FAS, ID: CTR_SU_DRS) fehlt | 1 | - |
| 0xD1D719 | Signal(Steuerung Konfiguration FAS, ID: CTR_SU_DRS) ungültig | 1 | - |
| 0xD1D71D | Signal(Bedienung Lenkstockstaster, ID: BEDIENUNG_LENKSTOCK) ungültig | 1 | - |
| 0xD1D720 | Botschaft(PreCrash Heckradar, ID: PCSH_RERA) fehlt | 1 | - |
| 0xD1D723 | Signal(PreCrash Heckradar, ID: PCSH_RERA) ungültig | 1 | - |
| 0xD1D72F | Botschaft(Status Funktion PDC, ID: ST_FN_PDC) fehlt | 1 | - |
| 0xD1D733 | Signal(Status Funktion PDC, ID: ST_FN_PDC) ungültig | 1 | - |
| 0xD1D73A | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) fehlt | 1 | - |
| 0xD1D73B | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) nicht aktuell | 1 | - |
| 0xD1D73C | Botschaft(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) Prüfsumme falsch | 1 | - |
| 0xD1D73D | Signal(Steuerung Funktionssicherheit FAS, ID: CTR_FSFY_DRS) ungültig | 1 | - |
| 0xD1D743 | Signal(Bedienung MMI Fahrerassistenz ID:OP_MMI_FAS) ungültig | 1 | - |
| 0xD1D768 | Botschaft(Gong Player Verfügbarkeit, ID:GO_PY_AVAI) fehlt | 1 | - |
| 0xD1D773 | Signal(Gong Player Verfügbarkeit, ID:GO_PY_AVAI) ungültig | 1 | - |
| 0xD1D785 | Botschaft(Steuerung Licht Außen, ID: CTR_LP_EX) fehlt | 1 | - |
| 0xD1D789 | Signal(Steuerung Licht Außen, ID: CTR_LP_EX) ungültig | 1 | - |
| 0xD1D790 | Botschaft(Anzeige Fahrerassistenz Rangieren, ID: DISP_FAS_MNV) fehlt | 1 | - |
| 0xD1D793 | Signal(Anzeige Fahrerassistenz Rangieren, ID: DISP_FAS_MNV) ungültig | 1 | - |
| 0xD1D798 | Signal(Anzeige Fahrerassistenz Parken Querführung, ID: DISP_FAS_PKG_LAG) ungültig | 1 | - |
| 0xD1D7A4 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) fehlt | 1 | - |
| 0xD1D7A5 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) nicht aktuell | 1 | - |
| 0xD1D7A6 | Botschaft(Frontraumüberwachung FCM, ID: HDWOBS_FCM) Prüfsumme falsch | 1 | - |
| 0xD1D7A7 | Signal(Frontraumüberwachung FCM, ID: HDWOBS_FCM) ungültig | 1 | - |
| 0xD1D7B3 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) fehlt | 1 | - |
| 0xD1D7B4 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) nicht aktuell | 1 | - |
| 0xD1D7B5 | Botschaft(Frontraumüberwachung PPP, ID: HDWOBS_PPP) Prüfsumme falsch | 1 | - |
| 0xD1D7B6 | Signal(Frontraumüberwachung PPP, ID: HDWOBS_PPP) ungültig | 1 | - |
| 0xD1D7BD | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) fehlt | 1 | - |
| 0xD1D7BE | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) nicht aktuell | 1 | - |
| 0xD1D7BF | Botschaft(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) Prüfsumme falsch | 1 | - |
| 0xD1D7C0 | Signal(Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) ungültig | 1 | - |
| 0xD1D7C2 | Botschaft(Daten Antriebsstrang 1, ID: DT_PT_1) fehlt | 1 | - |
| 0xD1D7C5 | Signal(Daten Antriebsstrang 1, ID: DT_PT_1) ungültig | 1 | - |
| 0xD1D7CA | Signal(Position USS Vorne Seite Links Virtuell, ID: PO_USS_FS_SIDE_LH_VI) ungültig | 1 | - |
| 0xD1D7CF | Signal(Position USS Vorne Außen Links Real, ID: PO_USS_FS_EX_LH_REAL) ungültig | 1 | - |
| 0xD1D7D4 | Signal(Position USS Vorne Außen Links Virtuell, ID: PO_USS_FS_EX_LH_VIRT) ungültig | 1 | - |
| 0xD1D7D9 | Signal(Position USS Vorne Mitte Links Real, ID: PO_USS_FS_MID_LH_REAL) ungültig | 1 | - |
| 0xD1D7DE | Signal(Position USS Vorne Mitte Links Virtuell, ID: PO_USS_FS_MID_LH_VIR) ungültig | 1 | - |
| 0xD1D7E3 | Signal(Position USS Vorne Seite Links Real, ID: PO_USS_FS_SIDE_LH_REAL) ungültig | 1 | - |
| 0xD1D7E8 | Signal(Position USS Hinten Außen Links Real, ID: PO_USS_RS_EX_LH_REAL) ungültig | 1 | - |
| 0xD1D7ED | Signal(Position USS Hinten Außen Links Virtuell, ID: PO_USS_RS_EX_LH_VIR) ungültig | 1 | - |
| 0xD1D7F2 | Signal(Position USS Hinten Mitte Links Real, ID: PO_USS_RS_MID_LH_REAL) ungültig | 1 | - |
| 0xD1D7F7 | Signal(Position USS Hinten Mitte Links Virtuell, ID: PO_USS_RS_MID_LH_VI) ungültig | 1 | - |
| 0xD1D7FC | Signal(Position USS Hinten Seite Links Real, ID: PO_USS_RS_SIDE_LH_REAL) ungültig | 1 | - |
| 0xD1D801 | Signal(Position USS Hinten Seite Links Virtuell, ID: PO_USS_RS_SIDE_LH_V) ungültig | 1 | - |
| 0xD1D812 | Botschaft(Status Überwachung Fehler, ID: ST_MONI_ERR) fehlt | 1 | - |
| 0xD1D813 | Botschaft(Status Überwachung Fehler, ID: ST_MONI_ERR) nicht aktuell | 1 | - |
| 0xD1D814 | Botschaft(Status Überwachung Fehler, ID: ST_MONI_ERR) Prüfsumme falsch | 1 | - |
| 0xD1D815 | Signal(Status Überwachung Fehler, ID: ST_MONI_ERR) ungültig | 1 | - |
| 0xD1D844 | Botschaft(Applikation Ultraschall, ID: APPL_US) fehlt | 1 | - |
| 0xD1D845 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) fehlt | 1 | - |
| 0xD1D846 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) nicht aktuell | 1 | - |
| 0xD1D847 | Signal(Applikation Ultraschall, ID: APPL_US) ungültig | 1 | - |
| 0xD1D848 | Botschaft(Energieversorgung Sicherheit, ID: ENSU_SFY) Prüfsumme falsch | 1 | - |
| 0xD1D849 | Signal(Energieversorgung Sicherheit, ID: ENSU_SFY) ungültig | 1 | - |
| 0xD1D84A | Botschaft(Status Energieversorgung Fahrdynamik Sicherheit, ID: ST_ENSU_DRDY) fehlt | 1 | - |
| 0xD1D84B | Botschaft(Status Energieversorgung Fahrdynamik Sicherheit, ID: ST_ENSU_DRDY) nicht aktuell | 1 | - |
| 0xD1D84C | Botschaft(Status Energieversorgung Fahrdynamik Sicherheit, ID: ST_ENSU_DRDY) Prüfsumme falsch | 1 | - |
| 0xD1D84D | Signal(Status Energieversorgung Fahrdynamik Sicherheit, ID: ST_ENSU_DRDY) ungültig | 1 | - |
| 0xD1D84F | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) fehlt | 1 | - |
| 0xD1D850 | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) nicht aktuell | 1 | - |
| 0xD1D851 | Signal(Eigenschaft Ultraschallsensor ** Real, ID: :PROP_USS_**_REAL) ungültig | 1 | - |
| 0xD1D852 | Signal(Eigenschaft Ultraschallsensor ** Virtuell, ID: PROP_USS_**_VIRT) ungültig | 1 | - |
| 0xD1D854 | Botschaft(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) Prüfsumme falsch | 1 | - |
| 0xD1D855 | Signal(Fahrspurmarkierung Benachbart Eigenschaft, ID: LNMR_ADC_PROP) ungültig | 1 | - |
| 0xD1D857 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) fehlt | 1 | - |
| 0xD1D858 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) nicht aktuell | 1 | - |
| 0xD1D859 | Botschaft(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) Prüfsumme falsch | 1 | - |
| 0xD1D85A | Signal(Fahrspurmarkierung Nächste Links Geometrie, ID: LNMR_NXT_LH_GMY) ungültig | 1 | - |
| 0xD1D85C | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) fehlt | 1 | - |
| 0xD1D85D | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) nicht aktuell | 1 | - |
| 0xD1D85E | Botschaft(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) Prüfsumme falsch | 1 | - |
| 0xD1D85F | Signal(Fahrspurmarkierung Nächste Rechts Geometrie, ID: LNMR_NXT_RH_GMY) ungültig | 1 | - |
| 0xD1D866 | Botschaft(Applikation Ultraschall, ID: APPL_US) nicht aktuell | 1 | - |
| 0xD1D867 | Botschaft(Applikation Ultraschall, ID: APPL_US) Prüfsumme falsch | 1 | - |
| 0xD1D869 | Botschaft(Status M-Drive 3, ID: ST_MDRV_3) fehlt | 1 | - |
| 0xD1D86D | Signal(Status M-Drive 3, ID: ST_MDRV_3) ungültig | 1 | - |
| 0xD1D873 | Signal(Navigationsgraph Erweitert, ID: NAVGRPH_EXT) ungültig | 1 | - |
| 0xD1D875 | Botschaft(Konfiguration SOC Hold, ID: SU_SOC_HLD) fehlt | 1 | - |
| 0xD1D878 | Signal(Konfiguration SOC Hold, ID: SU_SOC_HLD) ungültig | 1 | - |
| 0xD1ED8A | Botschaftsfehler - (0xD025-0x0001-BMW.DRIVERMODEL-FaceTrackingData) - E2E-Absicherungsfehler | 1 | - |
| 0xD1ED8F | Botschaftsfehler - (0x3008-0x0001.BMW.DASS.RCP_RemoteParking) - Timeout | 1 | - |
| 0xD1ED92 | Botschaftsfehler - (0xD025-0x0001-BMW.DRIVERMODEL-FaceTrackingData) - Timeout | 1 | - |
| 0xD1ED97 | Signalfehler - (0xD025-0x0001-BMW.DRIVERMODEL-FaceTrackingData) - Ungültig | 1 | - |
| 0xD1ED99 | Botschaftsfehler - (0xD018-0x0001-BMW.ENVIRONMENTALMODEL.LANECENTERLINES_LaneCenterLines) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EDA3 | Signalfehler - (0xD018-0x0001-BMW.ENVIRONMENTALMODEL.LANECENTERLINES_LaneCenterLines) - Ungültig | 1 | - |
| 0xD1EDA4 | Botschaftsfehler - (0xD018-0x0001-BMW.ENVIRONMENTALMODEL.LANECENTERLINES_LaneCenterLines) - Timeout | 1 | - |
| 0xD1EDA6 | Signalfehler - (0xD004-0x0001-BMW.ENVIRONMENTALMODEL_Lanes) - Ungültig | 1 | - |
| 0xD1EDE3 | Botschaftsfehler - (0x303F-0x0001-BMW.DASS-AWA) - Timeout | 1 | - |
| 0xD1EDE4 | Signalfehler - (0x303F-0x0001-BMW.DASS-AWA) - Ungültig | 1 | - |
| 0xD1EE19 | Botschaftsfehler -  (0xF138-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries2) - Timeout | 1 | - |
| 0xD1EE1A | Signalfehler - (0xD003-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera2) - Ungültig | 1 | - |
| 0xD1EE1D | Botschaftsfehler - (0xD003-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera2) - Timeout | 1 | - |
| 0xD1EE20 | Botschaftsfehler - (0xD003-0x0001-BMW.ENVIRONMENTALMODEL-FreeSpaceRecognitionFrontCamera2) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EE23 | Signalfehler - (0xF13A-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront2) - Ungültig | 1 | - |
| 0xD1EE26 | Botschaftsfehler - (0xF13A-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront2) - Timeout | 1 | - |
| 0xD1EE29 | Botschaftsfehler - (0xF13A-0x0001-BMW.ENVIRONMENTALMODEL-ObjectFusionFront2) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EE2C | Signalfehler - ( 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - Ungültig | 1 | - |
| 0xD1EE2F | Botschaftsfehler - ( 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - Timeout | 1 | - |
| 0xD1EE32 | Botschaftsfehler - ( 0xF139-0x0001-BMW.ENVIRONMENTALMODEL-ObjectRecognitionFrontCamera2) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EE35 | Signalfehler -  (0xF138-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries2) - Ungültig | 1 | - |
| 0xD1EE38 | Botschaftsfehler - (0xF138-0x0001-BMW.ENVIRONMENTALMODEL-LaneBoundaries2) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EE3B | Signalfehler - (0x3008-0x0001.BMW.DASS.RCP_RemoteParking) - Ungültig | 1 | - |
| 0xD1EE3C | Botschaftsfehler - (0x3008-0x0001.BMW.DASS.RCP_RemoteParking) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EE3E | Signalfehler - (0x3006-0x0001-BMW.DASS.StatusDriverAssistanceParkingRemote) - Ungültig | 1 | - |
| 0xD1EE44 | Signalfehler - (0xB075-0x0001-BMW.INFOTAINMENT-LaneGuiding) - Ungültig | 1 | - |
| 0xD1EE47 | Signalfehler - (0xD026-0x0001-BMW.ENVIRONMENTALMODEL-Landmarks) - Ungültig | 1 | - |
| 0xD1EE58 | Botschaftsfehler - (0xD002-0x0001-BMW.ENVIRONMENTALMODEL.FreeSpaceRecognitionFrontRadar) - Timeout | 1 | - |
| 0xD1EE59 | Signalfehler - (0xD002-0x0001-BMW.ENVIRONMENTALMODEL.FreeSpaceRecognitionFrontRadar) - Ungültig | 1 | - |
| 0xD1EE5A | Botschaftsfehler -(0xD002-0x0001-BMW.ENVIRONMENTALMODEL.FreeSpaceRecognitionFrontRadar) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EEB4 | Botschaftsfehler - (0x303E-0x0001-BMW.DASS.RadarData2-V2) - E2E-Absicherungsfehler | 1 | - |
| 0xD1EEB5 | Botschaftsfehler - (0x303E-0x0001-BMW.DASS.RadarData2-V2) - Timeout | 1 | - |
| 0xD1EEB9 | Signalfehler - (0x303E-0x0001-BMW.DASS.RadarData2-V2) - Ungültig | 1 | - |
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
| 0x0001 | Hybrid power Managment Zustand | 0-n | High | 0xFF | TAB_STATUS_LADEN_HOCHSPANNUNG_POWERMANAGEMENT | - | - | - |
| 0x0022 | KALTSTART VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0023 | MSA START VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0024 | MOTOR LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0025 | GLOBALE BITS VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | unsigned long | - | - | - | - |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x294F | Status Spannungseinbruch | 0-n | High | 0xFF | TAB_STATUS_SPANNUNGSEINBRUCH | - | - | - |
| 0x2950 | Status Verbrennungsmotor Antrieb | 0-n | High | 0xFF | TAB_STATUS_VERBRENNUNGSMOTOR_ANTRIEB | - | - | - |
| 0x2951 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4001 | Internal CPU Temperature | °C | High | signed int | - | 1.0 | 2.0 | 0.0 |
| 0x4004 | EXCEPTION_DEBUG_DATA | TEXT | High | 72 | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | EXCEPTION_ERROR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4008 | ECU_STATEMANAGER_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | EXCEPTION_SYMPTOM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x400B | TASK_MONITOR_DEBUG_DATA_1 | HEX | High | unsigned long | - | - | - | - |
| 0x400C | TASK_MONITOR_DEBUG_DATA_2 | HEX | High | unsigned long | - | - | - | - |
| 0x400D | TASK_MONITOR_DEBUG_DATA_3 | HEX | High | unsigned long | - | - | - | - |
| 0x400E | TASK_MONITOR_DEBUG_DATA_4 | HEX | High | unsigned long | - | - | - | - |
| 0x400F | VOLTAGE_1V3 | V | High | unsigned char | - | 5.7692 | 1.0 | 0.0 |
| 0x4010 | VOLTAGE_3V3 | V | High | unsigned char | - | 23.077 | 1.0 | 0.0 |
| 0x4011 | VOLTAGE_SWDV | V | High | unsigned char | - | 23.077 | 1.0 | 0.0 |
| 0x4012 | ERROR_CLASS_HW | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4013 | ERROR_CLASS_SW | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4014 | TASK_MONITOR_CNT1_VALUE | HEX | High | unsigned long | - | - | - | - |
| 0x4015 | TASK_MONITOR_CNT2_VALUE | HEX | High | unsigned long | - | - | - | - |
| 0x4016 | TASK_MONITOR_DEBUG_DATA_5 | HEX | High | unsigned long | - | - | - | - |
| 0x4017 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | - | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x6877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6879 | WUNSCH_BREMSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x68FB | ERROR_DUMP_DTC030801 | HEX | - | unsigned long | - | - | - | - |
| 0x6912 | ERROR_DUMP_DTC030820 | HEX | - | unsigned long | - | - | - | - |
| 0x694D | ERROR_DUMP_DTC030833 | HEX | - | unsigned long | - | - | - | - |
| 0x69F0 | Warnblinker_ein | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F6 | Betätigung_EPB_Taster | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F8 | Fahrbereitschaft | 0/1 | High | 0x01 | - | - | - | - |
| 0x69FA | Status_SARAH | 0/1 | High | 0x01 | - | - | - | - |
| 0x69FF | ERROR_DUMP_DTC030838 | HEX | High | unsigned long | - | - | - | - |
| 0x6A00 | ERROR_DUMP_DTC030839 | HEX | High | unsigned long | - | - | - | - |
| 0x6A01 | ERROR_DUMP_DTC03083A | HEX | High | unsigned long | - | - | - | - |
| 0x6A03 | Länderfreigabe | 0/1 | High | 0x01 | - | - | - | - |
| 0x6A04 | Status_DSC | 0-n | High | 0xFF | TAB_Funktionsstatus_DSC | - | - | - |
| 0x6A05 | VERFUEGBARKEIT_BREMSENSCHNITTSTELLE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6A06 | Ist_Verzögerung | m/s² | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x6A07 | NHA_AKTIVIERUNGSZEIT | s | High | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x6A08 | AUSFALL_QUERFUEHRUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6A09 | Sensor_Blindheit | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6A10 | AUSFALL_LAENGSREGELUNG | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6A18 | ERROR_DUMP_DTC030841 | HEX | High | unsigned long | - | - | - | - |
| 0x6A19 | SWA_AUSFALL_URSACHE | 0/1 | High | 0x01 | - | - | - | - |
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
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x000001 | Fehler der Fahrzeug-Security | 0 | - |
| 0x030807 | FAS - Funktionale Deaktivierung | 0 | - |
| 0x030808 | FAS - Antrieb - Betriebsbereitschaft | 1 | - |
| 0x030809 | FAS - Bremse - Betriebsbereitschaft | 1 | - |
| 0x03080A | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x03080B | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Logikfehler | 0 | - |
| 0x03080C | FAS - Bedienfeld - HDC - fehlerhaft | 1 | - |
| 0x03080D | FAS - Inkorrekte Codierung Fahrfunktion | 1 | - |
| 0x03080E | FAS - KAFAS - Betriebsbereitschaft | 1 | - |
| 0x03080F | FAS - Abweichung VKombi gegen V-Ist zu groß | 1 | - |
| 0x030811 | FAS - Fahreranwesenheitssensorik fehlerhaft | 1 | - |
| 0x030812 | FAS - Fahrzeugsensorik Betriebsbereitschaft | 1 | - |
| 0x030818 | FAS - Bedienung Lenkrad - Betriebsbereitschaft | 1 | - |
| 0x030819 | FAS - ACC Sensorik - Betriebsbereitschaft | 1 | - |
| 0x03081B | FAS - Kombi - Betriebsbereitschaft | 1 | - |
| 0x03081C | FAS Signalfehler 2 - Undefinierter Inhalt oder unzureichende Qualität | 1 | - |
| 0x03081E | FAS Signalfehler - Undefinierter Inhalt oder unzureichende Qualität | 1 | - |
| 0x030821 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030822 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Logikfehler | 0 | - |
| 0x030823 | FAS - EM-FREESPACECALCULATION - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030824 | FAS - EM-FREESPACECALCULATION - Umfeldmodell - Logikfehler | 0 | - |
| 0x030825 | FAS - EM-GAP - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030826 | FAS - EM-GAP - Umfeldmodell - Logikfehler | 0 | - |
| 0x030827 | FAS - EM-LANEASSIGNMENT - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030828 | FAS - EM-LANEASSIGNMENT - Umfeldmodell - Logikfehler | 0 | - |
| 0x03082D | FAS - EM-ODOCLIENT - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x03082E | FAS - EM-ODOCLIENT - Umfeldmodell - Logikfehler | 0 | - |
| 0x030830 | FAS - EM-ELECTRONICHORIZON - Zeitbasis unsynchronisiert | 1 | - |
| 0x030834 | FAS - Ferngesteuertes Parken - Systemgrenze oder Kundenverhalten | 0 | - |
| 0x030835 | FAS - Frontschutz - Ausweichassistent ausgelöst | 1 | - |
| 0x030836 | FAS - Seitenkollisionswarnung oder Spurwechselwarnung ausgelöst | 1 | - |
| 0x03083B | FAS - Nothalteassistent - Sicherheitsabschaltung | 0 | - |
| 0x03083C | FAS - Nothalteassistent - Deaktivierung durch Fahrerinteraktion | 0 | - |
| 0x03083D | FAS - LSA Anhaltefunktion ausgelöst | 1 | - |
| 0x03083F | FAS - EM-OBJECTPREDICTION - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030840 | FAS - EM-OBJECTPREDICTION - Umfeldmodell - Logikfehler | 0 | - |
| 0x030853 | FAS - EM-OBJECTFUSION - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030854 | FAS - EM-OBJECTFUSION - Umfeldmodell - Logikfehler | 0 | - |
| 0x030855 | FAS - EM-OBJECTHISTORY - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030856 | FAS - EM-OBJECTHISTORY - Umfeldmodell - Logikfehler | 0 | - |
| 0x030859 | FAS - DM-FATIGUE - Fahrermodell - Eingangssignalfehler | 1 | - |
| 0x03085A | FAS - DM-FATIGUE - Fahrermodell - Logikfehler | 0 | - |
| 0x03085B | FAS - DM-VISUALATTENTION - Fahrermodell - Eingangssignalfehler | 1 | - |
| 0x03085C | FAS - DM-VISUALATTENTION - Fahrermodell - Logikfehler | 0 | - |
| 0x03085D | FAS - EM-ROADMODEL - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x03085E | FAS - EM-ROADMODEL - Umfeldmodell - Logikfehler | 0 | - |
| 0x03085F | FAS - EM-LANEBOUNDARYHISTORY - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030860 | FAS - EM-LANEBOUNDARYHISTORY - Umfeldmodell - Logikfehler | 0 | - |
| 0x030861 | FAS - EM-ROADBOUNDARY - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030862 | FAS - EM-ROADBOUNDARY - Umfeldmodell - Logikfehler | 0 | - |
| 0x030863 | FAS - Frontschutz - Querverkehrsassistent - Akutwarnung | 1 | - |
| 0x030864 | FAS - Frontschutz - Querverkehrsassistent - Bremsung | 1 | - |
| 0x030865 | FAS - Frontschutz - Querverkehrsassistent - Anfahrverhinderung | 1 | - |
| 0x030C50 | INT-CCHDL Überlauf Checkcontrol Buffer | 0 | - |
| 0x030C51 | INT-CCHDL Undefinierte CC-ID angefordert | 0 | - |
| 0x030C67 | INT-SVCHDL Überlauf Input Buffer | 0 | - |
| 0x482F80 | Steuergerät intern - interne SW-Warnung | 0 | - |
| 0x482F81 | Steuergerät intern - TaskMonitor - kritische Laufzeit überschritten | 0 | - |
| 0x482F83 | Steuergerät intern - Fee GC init | 0 | - |
| 0x482F84 | Steuergerät intern - Fee write | 0 | - |
| 0x482F85 | Steuergerät intern - Fee read | 0 | - |
| 0x482F86 | Steuergerät intern - Fee GC read | 0 | - |
| 0x482F87 | Steuergerät intern - Fee GC write | 0 | - |
| 0x482F88 | Steuergerät intern - Fee GC erase | 0 | - |
| 0x482F89 | Steuergerät intern - Fee invalidate | 0 | - |
| 0x482F8A | Steuergerät intern - Fee write cycles exhausted | 0 | - |
| 0x482F8B | Steuergerät intern - Fee GC trigger | 0 | - |
| 0xD1C489 | FLEXRAY controller ACS error | 0 | - |
| 0xD1C601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0002 | Anforderndes System iBrake | 0/1 | - | 0x01 | - | - | - | - |
| 0x0003 | Anforderndes System Präventiver Fußgängerschutz (pFGS) | 0/1 | - | 0x02 | - | - | - | - |
| 0x0004 | Dummy Bit 2 | 0/1 | - | 0x04 | - | - | - | - |
| 0x0005 | Dummy Bit 3 | 0/1 | - | 0x08 | - | - | - | - |
| 0x0006 | Vorwarnung | 0/1 | - | 0x10 | - | - | - | - |
| 0x0007 | Akutwarnung | 0/1 | - | 0x20 | - | - | - | - |
| 0x0008 | Ausweichrichtung Links | 0/1 | - | 0x40 | - | - | - | - |
| 0x0009 | Ausweichrichtung Rechts | 0/1 | - | 0x80 | - | - | - | - |
| 0x000A | Anhalten erkannt | 0/1 | - | 0x01 | - | - | - | - |
| 0x000B | Abbiegen erkannt | 0/1 | - | 0x02 | - | - | - | - |
| 0x000C | Situation 3 | 0/1 | - | 0x04 | - | - | - | - |
| 0x000D | Situation 4 | 0/1 | - | 0x08 | - | - | - | - |
| 0x000E | Situation 5 | 0/1 | - | 0x10 | - | - | - | - |
| 0x000F | Situation 6 | 0/1 | - | 0x20 | - | - | - | - |
| 0x0010 | Situation 7 | 0/1 | - | 0x40 | - | - | - | - |
| 0x0011 | Situation 8 | 0/1 | - | 0x80 | - | - | - | - |
| 0x0012 | Kreisverkehrsituation | 0/1 | - | 0x01 | - | - | - | - |
| 0x0013 | Kurvigkeit erkannt | 0/1 | - | 0x02 | - | - | - | - |
| 0x0014 | Blickabweichung Fahrer | 0/1 | - | 0x04 | - | - | - | - |
| 0x0015 | Situation 4 | 0/1 | - | 0x08 | - | - | - | - |
| 0x0016 | Situation 5 | 0/1 | - | 0x10 | - | - | - | - |
| 0x0017 | Situation 6 | 0/1 | - | 0x20 | - | - | - | - |
| 0x0018 | Situation 7 | 0/1 | - | 0x40 | - | - | - | - |
| 0x0019 | Situation 8 | 0/1 | - | 0x80 | - | - | - | - |
| 0x001A | Anhalten erkannt | 0/1 | - | 0x01 | - | - | - | - |
| 0x001B | Abbiegen erkannt | 0/1 | - | 0x02 | - | - | - | - |
| 0x001C | Situation 3 | 0/1 | - | 0x04 | - | - | - | - |
| 0x001D | Situation 4 | 0/1 | - | 0x08 | - | - | - | - |
| 0x001E | Situation 5 | 0/1 | - | 0x10 | - | - | - | - |
| 0x001F | Situation 6 | 0/1 | - | 0x20 | - | - | - | - |
| 0x0020 | Situation 7 | 0/1 | - | 0x40 | - | - | - | - |
| 0x0021 | Situation 8 | 0/1 | - | 0x80 | - | - | - | - |
| 0x0026 | Erkennung des Bremseingriff durch die Sicherheitsfunktion | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0027 | Blinker gesetzt. (SWA Ausnahme!) | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0028 | Der Fahrer hat das Handmoment übersteuert. | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0029 | Der Fahrer hat die Parkbremse betätigt. | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x002A | VMax Grenze überschritten | 0/1 | - | 0x00000010 | - | - | - | - |
| 0x002B | TOR liegt vor und Anhaltefunktion ausappliziert | 0/1 | - | 0x00000020 | - | - | - | - |
| 0x002C | Folgefahrt nicht vorhanden. | 0/1 | - | 0x00000040 | - | - | - | - |
| 0x002D | Fahrspur nicht erkannt. | 0/1 | - | 0x00000080 | - | - | - | - |
| 0x002E | Das Fahrzeug fährt rückwärts. | 0/1 | - | 0x00000100 | - | - | - | - |
| 0x002F | Es wird ein Spurwechsel erkannt. | 0/1 | - | 0x00000200 | - | - | - | - |
| 0x0030 | Der Rückwärtsgang ist eingelegt. | 0/1 | - | 0x00000400 | - | - | - | - |
| 0x0031 | Das DSC regelt. | 0/1 | - | 0x00000800 | - | - | - | - |
| 0x0032 | Es wird ein Übersteuern erkannt. | 0/1 | - | 0x00001000 | - | - | - | - |
| 0x0033 | Es wird ein Untersteuern erkannt. | 0/1 | - | 0x00002000 | - | - | - | - |
| 0x0034 | Die Längsverzögerungsgrenze wird unterschritten. | 0/1 | - | 0x00004000 | - | - | - | - |
| 0x0035 | Der Fahrzeugführungsregler ist im Abschaltvorgang. | 0/1 | - | 0x00008000 | - | - | - | - |
| 0x0036 | Es wird eine Annäherung an den Spurrand erkannt. | 0/1 | - | 0x00010000 | - | - | - | - |
| 0x0037 | Die Kamera ist nicht verfügbar. | 0/1 | - | 0x00020000 | - | - | - | - |
| 0x0038 | Kritischer Eingriff durch LCA wird erkannt. | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4003 | WARNING_DEBUG_DATA | TEXT | High | 176 | - | 1.0 | 1.0 | 0.0 |
| 0x4016 | TASK_MONITOR_DEBUG_DATA_5 | HEX | High | unsigned long | - | - | - | - |
| 0x6876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | - | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x6877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6879 | WUNSCH_BREMSMOMENT_FAS | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x688F | CC_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6890 | BUFFER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x6891 | BUFFER_SIZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6892 | FILL_LEVEL_BUFFER_0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6893 | FILL_LEVEL_BUFFER_1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6894 | FILL_LEVEL_BUFFER_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68C3 | CLIENT_ID_INTCCHDL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68C4 | FUNCTION_ID_ANFORDERER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68C5 | STATUS_ANFORDERER | 0-n | High | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x68F2 | SERVICE_ID | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x68F3 | CLIENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x68F4 | SVC_PARAMETER | HEX | High | unsigned long | - | - | - | - |
| 0x68FF | ERROR_DUMP_DTC030807 | HEX | - | unsigned long | - | - | - | - |
| 0x6900 | ERROR_DUMP_DTC030808 | HEX | - | unsigned long | - | - | - | - |
| 0x6901 | ERROR_DUMP_DTC030809 | HEX | - | unsigned long | - | - | - | - |
| 0x6902 | ERROR_DUMP_DTC03080C | HEX | - | unsigned long | - | - | - | - |
| 0x6903 | ERROR_DUMP_DTC03080D | HEX | - | unsigned long | - | - | - | - |
| 0x6904 | ERROR_DUMP_DTC03080E | HEX | - | unsigned long | - | - | - | - |
| 0x6905 | ERROR_DUMP_DTC03080F | HEX | - | unsigned long | - | - | - | - |
| 0x6907 | ERROR_DUMP_DTC030811 | HEX | - | unsigned long | - | - | - | - |
| 0x6908 | ERROR_DUMP_DTC030812 | HEX | - | unsigned long | - | - | - | - |
| 0x690C | ERROR_DUMP_DTC030818 | HEX | - | unsigned long | - | - | - | - |
| 0x690D | ERROR_DUMP_DTC030819 | HEX | - | unsigned long | - | - | - | - |
| 0x690E | ERROR_DUMP_DTC03081B | HEX | - | unsigned long | - | - | - | - |
| 0x690F | ERROR_DUMP_DTC03081C | HEX | - | unsigned long | - | - | - | - |
| 0x6910 | ERROR_DUMP_DTC03081E | HEX | - | unsigned long | - | - | - | - |
| 0x694E | ERROR_DUMP_DTC030834 | HEX | - | unsigned long | - | - | - | - |
| 0x6952 | ERROR_DUMP_DTC030835 | HEX | - | unsigned long | - | - | - | - |
| 0x6953 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6954 | ENDEKRITERIUM_AWA | HEX | - | unsigned int | - | - | - | - |
| 0x6955 | DAUER_VORWARN_AKUTWARN_AWA | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x6956 | DAUER_ANBREMSUNG_AWA | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x6957 | DAUER_AUSWEICHMANOEVER_AWA | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x6958 | EGO_MAX_QUERBESCHLEUNIGUNG_AWA | m/s² | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x6959 | BREITE_AUSWEICHGASSE_AWA | m | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x695A | Y_ACHSE_KOLLISIONSPUNKT_ZIELOBJEKT_AWA | m | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x695B | ABSTAND_KOLLISIONSPUNKT_ZIELOBJEKT_AWA | m | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x695C | TTC_BEI_BEGINN_AWA | s | - | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x695D | KRUEMMUNG_AUSWEICHGASSE_AWA | 1/m | - | signed char | - | 1.0 | 10000.0 | 0.0 |
| 0x695E | QUERGESCHWINDIGKEIT_ZIELOBJEKT_AWA | m/s | - | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x6961 | ERROR_DUMP_DTC030836 | HEX | - | unsigned long | - | - | - | - |
| 0x6962 | TRIGGERREASON_LCA | 0-n | - | 0xFF | TAB_LCA_TRIGGERREASON | - | - | - |
| 0x6963 | ANZAHL_SPURVERLASSENSWARNUNGEN_LCA | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6964 | ANZAHL_SPURVERLASSENSWARNUNGEN_MIT_ABBRUCH_LCA | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6965 | DEAKTIVIERUNG_SPURHALTEASSISTENT_LCA | 0-n | - | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x6966 | RESERVE_01_LCA | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6967 | RESERVE_02_LCA | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6968 | WEGSTRECKE_KLEMMENZYKLUS_LCA | km | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6969 | IST_MODUS_FAHRERLEBNIS_LCA | HEX | - | unsigned char | - | - | - | - |
| 0x696B | ERROR_ID_INPUT_EMSLCONDITIONEVALUATOR | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x696C | ERROR_DUMP_1_INPUT_EMSLCONDITIONEVALUATOR | HEX | - | unsigned long | - | - | - | - |
| 0x696D | ERROR_DUMP_2_INPUT_EMSLCONDITIONEVALUATOR | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x696E | ERROR_ID_INPUT_EMELECTRONICHORIZON | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMELECTRONICHORIZON | - | - | - |
| 0x696F | ERROR_DUMP_1_INPUT_EMELECTRONICHORIZON | HEX | - | unsigned long | - | - | - | - |
| 0x6970 | ERROR_DUMP_2_INPUT_EMELECTRONICHORIZON | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6971 | ERROR_ID_INPUT_EMFREESPACECALCULATION | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMFREESPACECALCULATION | - | - | - |
| 0x6972 | ERROR_DUMP_1_INPUT_EMFREESPACECALCULATION | HEX | - | unsigned long | - | - | - | - |
| 0x6973 | ERROR_DUMP_2_EMFREESPACECALCULATION | - | - | motorola float | - | - | - | - |
| 0x6974 | ERROR_ID_INPUT_EMGAP | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMGAP | - | - | - |
| 0x6975 | ERROR_DUMP_1_INPUT_EMGAP | HEX | - | unsigned long | - | - | - | - |
| 0x6976 | ERROR_DUMP_2_INPUT_EMGAP | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6977 | ERROR_ID_INPUT_EMLANEASSIGNMENT | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMLANEASSIGNMENT | - | - | - |
| 0x6978 | ERROR_DUMP_1_INPUT_EMLANEASSIGNMENT | HEX | - | unsigned long | - | - | - | - |
| 0x6979 | ERROR_DUMP_2_INPUT_EMLANEASSIGNMENT | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6980 | ERROR_ID_INPUT_EMODOCLIENT | 0-n | - | 0xFF | TAB_ERRID_INPUT_EMODOCLIENT | - | - | - |
| 0x6981 | ERROR_DUMP_1_INPUT_EMODOCLIENT | HEX | - | unsigned long | - | - | - | - |
| 0x6982 | ERROR_DUMP_2_INPUT_EMODOCLIENT | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6983 | ERROR_ID_LOGIC_EMSLCONDITIONEVALUATOR | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x6984 | ERROR_DUMP_1_LOGIC_EMSLCONDITIONEVALUATOR | HEX | - | unsigned long | - | - | - | - |
| 0x6985 | ERROR_DUMP_2_LOGIC_EMSLCONDITIONEVALUATOR | - | - | motorola float | - | - | - | - |
| 0x6986 | ERROR_ID_LOGIC_EMELECTRONICHORIZON | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMELECTRONICHORIZON | - | - | - |
| 0x6987 | ERROR_DUMP_1_LOGIC_EMELECTRONICHORIZON | HEX | - | unsigned long | - | - | - | - |
| 0x6988 | ERROR_DUMP_2_LOGIC_EMELECTRONICHORIZON | - | - | motorola float | - | - | - | - |
| 0x6989 | ERROR_ID_LOGIC_EMFREESPACECALCULATION | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMFREESPACECALCULATION | - | - | - |
| 0x698A | ERROR_DUMP_1_LOGIC_EMFREESPACECALCULATION | HEX | - | unsigned long | - | - | - | - |
| 0x698B | ERROR_DUMP_2_LOGIC_EMFREESPACECALCULATION | - | - | motorola float | - | - | - | - |
| 0x698C | ERROR_ID_LOGIC_EMGAP | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMGAP | - | - | - |
| 0x698D | ERROR_DUMP_1_LOGIC_EMGAP | HEX | - | unsigned long | - | - | - | - |
| 0x698E | ERROR_DUMP_2_LOGIC_EMGAP | - | - | motorola float | - | - | - | - |
| 0x698F | ERROR_ID_LOGIC_EMLANEASSIGNMENT | 0-n | - | 0xFF | TAB_ERRID_LOGIC_EMLANEASSIGNMENT | - | - | - |
| 0x6990 | ERROR_DUMP_1_LOGIC_EMLANEASSIGNMENT | HEX | - | unsigned long | - | - | - | - |
| 0x6991 | ERROR_DUMP_2_LOGIC_EMLANEASSIGNMENT | - | - | motorola float | - | - | - | - |
| 0x6992 | ERROR_DUMP_1_INPUT_EMOBJECTPRECDICTION | HEX | High | unsigned long | - | - | - | - |
| 0x6993 | ERROR_DUMP_2_INPUT_EMOBJECTPREDICTION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6994 | ERROR_ID_INPUT_EMOBJECTPREDICTION | 0-n | High | 0xFF | TAB_ERRID_INPUT_EMOBJECTPREDICTION | - | - | - |
| 0x6995 | ERROR_ID_LOGIC_EMOBJECTPREDICTION | 0-n | High | 0xFF | TAB_ERRID_LOGIC_EMOBJECTPREDICTION | - | - | - |
| 0x6996 | ERROR_DUMP_1_LOGIC_EMOBJECTPREDICTION | HEX | High | unsigned long | - | - | - | - |
| 0x6997 | ERROR_DUMP_2_LOGIC_EMOBJECTPREDICTION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x6998 | ERROR_ID_LOGIC_EMODOCLIENT | - | - | unsigned char | - | - | - | - |
| 0x6999 | ERROR_DUMP_1_LOGIC_EMODOCLIENT | HEX | - | unsigned long | - | - | - | - |
| 0x699A | ERROR_DUMP_2_LOGIC_EMODOCLIENT | - | - | motorola float | - | - | - | - |
| 0x699B | ERROR_ID_INPUT_EMOBJECTFUSION | - | - | unsigned char | - | - | - | - |
| 0x699C | ERROR_DUMP_1_INPUT_EMOBJECTFUSION | HEX | - | unsigned long | - | - | - | - |
| 0x699D | ERROR_DUMP_2_INPUT_EMOBJECTFUSION | - | - | motorola float | - | - | - | - |
| 0x699E | ERROR_ID_LOGIC_EMOBJECTFUSION | - | - | unsigned char | - | - | - | - |
| 0x699F | ERROR_DUMP_1_LOGIC_EMOBJECTFUSION | HEX | - | unsigned long | - | - | - | - |
| 0x69A0 | ERROR_DUMP_2_LOGIC_EMOBJECTFUSION | - | - | motorola float | - | - | - | - |
| 0x69A1 | ERROR_ID_INPUT_EMOBJECTHISTORY | - | - | unsigned char | - | - | - | - |
| 0x69A2 | ERROR_DUMP_1_INPUT_EMOBJECTHISTORY | HEX | - | unsigned long | - | - | - | - |
| 0x69A3 | ERROR_DUMP_2_INPUT_EMOBJECTHISTORY | - | - | motorola float | - | - | - | - |
| 0x69A4 | ERROR_ID_LOGIC_EMOBJECTHISTORY | - | - | unsigned char | - | - | - | - |
| 0x69A5 | ERROR_DUMP_1_LOGIC_EMOBJECTHISTORY | HEX | - | unsigned long | - | - | - | - |
| 0x69A6 | ERROR_DUMP_2_LOGIC_EMOBJECTHISTORY | - | - | motorola float | - | - | - | - |
| 0x69AD | ERROR_ID_INPUT_DMFATIGUE | - | - | unsigned char | - | - | - | - |
| 0x69AE | ERROR_DUMP_1_INPUT_DMFATIGUE | HEX | - | unsigned long | - | - | - | - |
| 0x69AF | ERROR_DUMP_2_INPUT_DMFATIGUE | - | - | motorola float | - | - | - | - |
| 0x69B0 | ERROR_ID_LOGIC_DMFATIGUE | - | - | unsigned char | - | - | - | - |
| 0x69B1 | ERROR_DUMP_1_LOGIC_DMFATIGUE | HEX | - | unsigned long | - | - | - | - |
| 0x69B2 | ERROR_DUMP_2_LOGIC_DMFATIGUE | - | - | motorola float | - | - | - | - |
| 0x69B3 | ERROR_ID_INPUT_EMROADMODEL | - | - | unsigned char | - | - | - | - |
| 0x69B4 | ERROR_DUMP_1_INPUT_EMROADMODEL | HEX | - | unsigned long | - | - | - | - |
| 0x69B5 | ERROR_DUMP_2_INPUT_EMROADMODEL | - | - | motorola float | - | - | - | - |
| 0x69B6 | ERROR_ID_LOGIC_EMROADMODEL | - | - | unsigned char | - | - | - | - |
| 0x69B7 | ERROR_DUMP_1_LOGIC_EMROADMODEL | HEX | - | unsigned long | - | - | - | - |
| 0x69B8 | ERROR_DUMP_2_LOGIC_EMROADMODEL | - | - | motorola float | - | - | - | - |
| 0x69B9 | ERROR_ID_INPUT_EMLANEBOUNDARYHISTORY | - | - | unsigned char | - | - | - | - |
| 0x69BA | ERROR_DUMP_1_INPUT_EMLANEBOUNDARYHISTORY | HEX | - | unsigned long | - | - | - | - |
| 0x69BB | ERROR_DUMP_2_INPUT_EMLANEBOUNDARYHISTORY | - | - | motorola float | - | - | - | - |
| 0x69BC | ERROR_ID_LOGIC_EMLANEBOUNDARYHISTORY | - | - | unsigned char | - | - | - | - |
| 0x69BD | ERROR_DUMP_1_LOGIC_EMLANEBOUNDARYHISTORY | HEX | - | unsigned long | - | - | - | - |
| 0x69BE | ERROR_DUMP_2_LOGIC_EMLANEBOUNDARYHISTORY | - | - | motorola float | - | - | - | - |
| 0x69C3 | ERROR_ID_INPUT_DMVISUALATTENTION | - | - | unsigned char | - | - | - | - |
| 0x69C4 | ERROR_DUMP_1_INPUT_DMVISUALATTENTION | HEX | - | unsigned long | - | - | - | - |
| 0x69C5 | ERROR_DUMP_2_INPUT_DMVISUALATTENTION | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x69C6 | ERROR_ID_LOGIC_DMVISUALATTENTION | - | - | unsigned char | - | - | - | - |
| 0x69C7 | ERROR_DUMP_1_LOGIC_DMVISUALATTENTION | HEX | - | unsigned long | - | - | - | - |
| 0x69C8 | ERROR_DUMP_2_LOGIC_DMVISUALATTENTION | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x69C9 | ERROR_ID_INPUT_EMROADBOUNDARY | - | - | unsigned char | - | - | - | - |
| 0x69CA | ERROR_DUMP_1_INPUT_EMROADBOUNDARY | HEX | - | unsigned long | - | - | - | - |
| 0x69CB | ERROR_DUMP_2_INPUT_EMROADBOUNDARY | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x69CC | ERROR_ID_LOGIC_EMROADBOUNDARY | - | - | unsigned char | - | - | - | - |
| 0x69CD | ERROR_DUMP_1_LOGIC_EMROADBOUNDARY | HEX | - | unsigned long | - | - | - | - |
| 0x69CE | ERROR_DUMP_2_LOGIC_EMROADBOUNDARY | - | - | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x69CF | ABSTAND_KOLLISIONSZONE_OBJEKT_AKUTWARNUNG_QVA | m | - | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x69D0 | ABSTAND_KOLLISIONSZONE_OBJEKT_BREMSBEGINN_QVA | m | - | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x69D1 | ABSTAND_KOLLISIONSZONE_EGO_AKUTWARNUNG_QVA | m | - | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x69D2 | ABSTAND_KOLLISIONSZONE_EGO_BREMSBEGINN_QVA | m | - | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x69D3 | GESCHWINDIGKEIT_OBJEKT_AKUTWARNUNG_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D4 | GESCHWINDIGKEIT_OBJEKT_BREMSBEGINN_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D5 | GESCHWINDIGKEIT_OBJEKT_BREMSENDE_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D6 | GESCHWINDIGKEIT_EGO_AKUTWARNUNG_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D7 | GESCHWINDIGKEIT_EGO_BREMSBEGINN_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D8 | GESCHWINDIGKEIT_EGO_BREMSENDE_QVA | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69D9 | HEADINGWINKEL_OBJEKT_AKTUTWARNUNG_QVA | ° | High | unsigned char | - | 2.0 | 1.0 | -180.0 |
| 0x69DA | HEADINGWINKEL_OBJEKT_BREMSBEGINN_QVA | ° | High | unsigned char | - | 2.0 | 1.0 | -180.0 |
| 0x69DB | DAUER_AKUTWARNUNG_QVA | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x69DC | DAUER_BREMSUNG_QVA | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x69DD | SOLLVERZOEGERUNG_MAXIMAL_QVA | m/s² | High | unsigned char | - | 1.0 | 10.0 | -12.7 |
| 0x69DE | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x69DF | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x69E0 | ABSTAND_KOLLISIONSZONE_OBJEKT_QVA_AFV | m | - | unsigned char | - | 1.0 | 4.0 | 0.0 |
| 0x69E1 | ABSTAND_KOLLISIONSZONE_EGO_QVA_AFV | m | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x69E2 | GESCHWINDIGKEIT_OBJEKT_BEGINN_QVA_AFV | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69E3 | GESCHWINDIGKEIT_OBJEKT_ENDE_QVA_AFV | km/h | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69E4 | GESCHWINDIGKEIT_EGO_BEGINN_QVA_AFV | km/h | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x69E5 | GESCHWINDIGKEIT_EGO_ENDE_QVA_AFV | km/h | - | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x69E6 | HEADINGWINKEL_OBJEKT_QVA_AFV | ° | - | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x69E7 | DAUER_QVA_AFV | s | - | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x69E8 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x69E9 | FAHRPEDALPOSITION_BEGINN_QVA_AFV | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69EA | FAHRPEDALPOSITION_MAXIMAL_QVA_AFV | % | - | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x69EB | FAHRPEDALGRADIENT_BEGINN_QVA_AFV | %/s | - | unsigned char | - | 64.0 | 1.0 | 0.0 |
| 0x69EC | FAHRPEDALGRADIENT_MAXIMAL_QVA_AFV | %/s | - | unsigned char | - | 64.0 | 1.0 | 0.0 |
| 0x69ED | ERROR_DUMP_DTC030863 | HEX | - | unsigned long | - | - | - | - |
| 0x69EE | ERROR_DUMP_DTC030864 | HEX | - | unsigned long | - | - | - | - |
| 0x69EF | ERROR_DUMP_DTC030865 | HEX | - | unsigned long | - | - | - | - |
| 0x69F0 | Warnblinker_ein | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F1 | Winkeländerung_Fahrpedal | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x69F2 | Gradientenwinkel_Fahrpedal | %/s | High | unsigned char | - | 100.0 | 1.0 | -10000.0 |
| 0x69F3 | Zeit_auf_Fahrpedal | s | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x69F4 | Gaspedal_betätigt | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F5 | Lenk_Handmoment | Nm | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x69F6 | Betätigung_EPB_Taster | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F7 | CID_ABBRUCH | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F8 | Fahrbereitschaft | 0/1 | High | 0x01 | - | - | - | - |
| 0x69F9 | Rückwärtsgang_eingelegt | 0/1 | High | 0x01 | - | - | - | - |
| 0x69FA | Status_SARAH | 0/1 | High | 0x01 | - | - | - | - |
| 0x69FE | ERROR_DUMP_DTC03083C | HEX | High | unsigned long | - | - | - | - |
| 0x6A02 | ERROR_DUMP_DTC03083B | HEX | High | unsigned long | - | - | - | - |
| 0x6A11 | QFK_Regelziel_Querfuehrung | 0-n | High | 0xFF | QFK_Regelziel_Querfuehrung | - | - | - |
| 0x6A12 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x6A13 | QFK_Zustand_Fahrerwarnung | 0-n | High | 0xFF | QFK_ZUSTAND_FAHRERWARNUNG | - | - | - |
| 0x6A14 | Zustand_Hands_Off_Detection | 0/1 | High | 0x01 | - | - | - | - |
| 0x6A15 | Zustand_Fahrerausmerksamkeitserkennung | 0-n | High | 0xFF | Zustand_Fahrerausmerksamkeitserkennung | - | - | - |
| 0x6A16 | Zustand_Fahrereingriffserkennung | 0/1 | High | 0x01 | - | - | - | - |
| 0x6A17 | ERROR_DUMP_DTC03083D | HEX | - | unsigned long | - | - | - | - |
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

### QFK_REGELZIEL_QUERFUEHRUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | REGELZIELQF_PASSIV |
| 0x01 | REGELZIELQF_DEGRADATION |
| 0x02 | REGELZIELQF_SPURMITTENFUEHRUNG |
| 0x03 | REGELZIELQF_ENGSTELLE |
| 0x04 | REGELZIELQF_FOLGEFAHRT_MIT_SPUREN |
| 0x05 | REGELZIELQF_FOLGEFAHRT_HISTORIE |
| 0x06 | REGELZIELQF_FOLGEFAHRT_PURE_PURSUIT |
| 0x07 | REGELZIELQF_SPURWECHSEL_LINKS |
| 0x08 | REGELZIELQF_SPURWECHSEL_RECHTS |
| 0xFF | Wert ungültig |

### QFK_ZUSTAND_FAHRERWARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ANZEIGEQUERFRNGLENKRADSYMBOL_AUS (grau) |
| 0x01 | ANZEIGEQUERFRNGLENKRADSYMBOL_NICHT_VERFUEGBAR (grau) |
| 0x02 | ANZEIGEQUERFRNGLENKRADSYMBOL_AKTIV (grün) |
| 0x03 | ANZEIGEQUERFRNGLENKRADSYMBOL_DEGRADIERT (gelb) |
| 0x04 | ANZEIGEQUERFRNGLENKRADSYMBOL_WARNUNG (rot) |
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

### RES_0X1049_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMBER_OF_TRANSMITTED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Pakete, die erfolgreich am angegebenen Port verschickt wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_BYTES_SENT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Bytes, die am angegebenen Port verschickt wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_TX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der versandten Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. transmit FIFO underflow) verworfen wurden.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_RECEIVED_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich empfangenen Pakete am angegebenen Port.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_STAT_BYTES_RECEIVED_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Bytes am angegebenen Port.  Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |
| STAT_NUMBER_OF_DROPPED_RX_PACKETS_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der empfangenen Pakete am angegbenen Port, die auf Grund eines Mangels an Ressourcen (z.B. voller input buffer ) verworfen wurden. Soll auf 0xffffffff gesetzt werden, wenn der Port nicht existiert oder der Port diesen Zähler nicht unterstützt. Im Falle eines Überlaufs ist der Wert 0xfffffffe zurückzugeben. |

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X104F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DHCP_CLIENT_STATE | + | - | - | 0-n | high | unsigned char | - | DHCP_CLIENT_STATE_TAB | - | - | - | DHCP-Status des angefragten Netzwerk-Interfaces. |

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

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNAL_ADC_VALUE_01_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 1 |
| STAT_INTERNAL_ADC_VALUE_02_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 2 |
| STAT_INTERNAL_ADC_VALUE_03_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 3 |
| STAT_INTERNAL_ADC_VALUE_04_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 4 |
| STAT_INTERNAL_ADC_VALUE_05_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 5 |
| STAT_INTERNAL_ADC_VALUE_06_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 6 |
| STAT_INTERNAL_ADC_VALUE_07_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 7 |
| STAT_INTERNAL_ADC_VALUE_08_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 8 |
| STAT_INTERNAL_ADC_VALUE_09_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 9 |
| STAT_INTERNAL_ADC_VALUE_10_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 10 |
| STAT_INTERNAL_ADC_VALUE_11_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 11 |
| STAT_INTERNAL_ADC_VALUE_12_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 12 |
| STAT_INTERNAL_ADC_VALUE_13_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 13 |
| STAT_INTERNAL_ADC_VALUE_14_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 14 |
| STAT_INTERNAL_ADC_VALUE_15_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 15 |
| STAT_INTERNAL_TEMP_VALUE_WERT | °C | high | signed int | - | - | 1.0 | 2.0 | 0.0 | ECU interne Temperatur |

### RES_0X4184_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORE0_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 0 |
| STAT_CORE1_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 1 |
| STAT_CORE2_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung Core 2 |
| STAT_TASK_5MS_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 5ms Core 0 |
| STAT_TASK_10MS_C0_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 10ms Core 0 |
| STAT_TASK_RESERVE1_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Task Reserve 1 |
| STAT_TASK_RESERVE2_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Task Reserve 2 |
| STAT_TASK_10MS_1_C2_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 10ms Core 2 |
| STAT_TASK_20MS_1_C1_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 20ms Core 1 |
| STAT_TASK_20MS_2_C1_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (2) 20ms Task Core 1 |
| STAT_TASK_20MS_3_C1_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (3) 20ms Task Core 1 |
| STAT_TASK_20MS_4_C1_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (4) 20ms Task Core 1 |
| STAT_TASK_40MS_1_C1_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 40ms Core 1 |
| STAT_TASK_40MS_2_C1_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (2) 40 ms Task Core 1 |
| STAT_TASK_40MS_1_C2_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 40ms Core 2 |
| STAT_TASK_40MS_2_C2_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (2) 40 ms Task Core 2 |
| STAT_TASK_100MS_1_C1_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 100ms Core 1 |
| STAT_TASK_100MS_2_C1_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (2) 100 ms Task Core 1 |
| STAT_TASK_100MS_1_C2_B_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung 100ms Core 2 |
| STAT_TASK_100MS_1_C2_QM_WERT | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Auslastung (2) 100 ms Task Core 2 |

### RES_0X6601_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SVW_LKA_LENK_ODER_VIB_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung Spurverlassenswarnung nur Lenkeingriff (Bit 0 .. 15) Anzahl Ausloesung Spurverlassenswarnung nur Vibration (Bit 16 .. 31) |
| STAT_LCA_ZAEHLER_AUSLOESUNG_SVW_LKA_LENK_UND_VIB_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesung Spurverlassenswarnung Lenkeingriff und Vibration (Bit 0 .. 15) Wegstrecke zwischen letzter und vorletzter Ausloesung (Bit 16..31) |
| STAT_LCA_ZAEHLER_ABBRUCH_ODER_VERHINDERUNG_SVW_LKA_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Abbrueche Spurverlassenswarnung (Bit 0 .. 15) Anzahl Verhinderungen Spurverlassenswarnung (Bit 16 .. 31) |
| STAT_LCA_DETAIL_SVW_LKA_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Triggergrund (Bit 0..7) Abbruchgrund (Bit 8..15) Verhinderungsgrund (Bit 16..23) Geschwindigkeit (Bit 24..31) |
| STAT_LCA_DETAIL_SVW_LKA_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TLC (Bit 0..7) DLC (Bit 8..15) Modus LDW (Bit 16..23) Ausprägung  Vibration / Lenkeingriff (Bit 24..31) |
| STAT_LCA_DETAIL_SVW_LKA_KILOMETERSTAND_WERT | HEX | high | unsigned long | - | - | - | - | - | Kilometerstand bei der letzten Auslösung (Bit 0..31) |
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

### RES_0X6603_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASAWA_ZUSTAENDE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Zustandswechsel Ausweichassistent: Anzahl Zustandswechsel Inaktiv -> Passiv  (Bit 0..7) Anzahl der Zustandswechel Passiv -> Aktiv (Bit 8..15) Anzahl der Zustandswechel Aktiv -> RAMPOUT  (Bit 16..23) Anzahl der Abbrueche durch Fahrer -> (Bit 24..32) |
| STAT_FASAWA_AKTIVIERUNGSVERHINDERUNG_AMF_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungsverhinderung Ausweichmoeglichkeit Front (Bit 0..7) Anzahl Aktivierungsverhinderung Ausweichmoeglichkeit Seite/Hinten (Bit 8..15) Anzahl der Aktivierungen mit Vermeidungsverzoegerung Klasse1 (Bit 16..23) Anzahl der Aktivierungen mit Vermeidungsverzoegerung Klasse2 (Bit 24..32) |
| STAT_FASAWA_AKTIVIERUNGSGESCHWINDIGKEIT_KLASSEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse1 (Bit 0..7) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse2 (Bit 8..15) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse3 (Bit 16..23) Anzahl der Aktivierungen im Geschwindigkeitsbereich Klasse4(Bit 24..32) |
| STAT_FASAWA_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASAWA_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6605_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASDACG_SLA_OFFSET_NUTZUNG_WERT | HEX | high | unsigned long | - | - | - | - | - | Statistik Speed Limit Assist: Lochkarte mit den im Messzeitraum genutzten Werten des Offsets. Letztes Bit = Einheit. |
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

### RES_0X6607_D

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
| STAT_FASLSA_CNT_N_HOR_BIS_HON_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitspannen nach  Hands On Request  bis  Pfoten wieder am Lenkrad . Bit 0-7:      1-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: größer 15s |
| STAT_FASLSA_CNT_N_TOR_BIS_HON_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeitspannen nach  Take Over Request  bis  Pfoten wieder am Lenkrad . Bit 0-7:      1-5 s Bit 8-15:    5-10 s Bit 16-23: 10-15s Bit 24-31: größer 15s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer (v <= 70km/h): Bit 0-7:      1-10 s Bit 8-15:    10-30 s Bit 16-23: 30-45s Bit 24-31: größer 45s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer (70km/h < v <= 130 km/h): Bit 0-7:      1-10 s Bit 8-15:    10-30 s Bit 16-23: 30-45s Bit 24-31: größer 45s |
| STAT_FASLSA_CNT_T_HOFF_GESCHW_2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Zeiten mit LSA-Regelung bei Hands-Off vom Fahrer (v > 130 km/h): Bit 0-7:      1-10 s Bit 8-15:    10-30 s Bit 16-23: 30-45s Bit 24-31: größer 45s |
| STAT_FASLSA_CNT_T_FAHRSPUR_EINSEITIG_BEIDSEITIG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeiten mit einer oder zwei erkannten Spurmarkierung während Regelung.  Bit 0-15:   Fahrspur Einseitig Bit 16-32: Fahrspur Beidseitig |
| STAT_FASLSA_CNT_T_FAHRSPUR_ZO_UEBERBRUECKUNG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeiten Überbrückung Spurmarkierungs-Verlust und Zeiten Überbrückung Zielobjekt-Verlust während Regelung.  Bit 0-15 Spurmarkierungs-Überbrückung Bit 16-32 Zielobjekt-Überbrückung |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_FAHRER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Fahrer - Anzahl Grund Geschwindigkeit (Bit 0..7) - Anzahl Grund Dynamik (Bit 8..15) - Anzahl Grund Aufmerksamkeit (Bit 16..23) - Anzahl Grund Abbiegevorgang (Bit 24..31) |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_UFM_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Umfeldmodell - Anzahl Grund Spur (Bit 0..7) - Anzahl Grund Hindernisse (Bit 8..15) - Anzahl Grund Objekte (Bit 16..23) - Anzahl Grund UFM-Degradation (Bit 24..31) |
| STAT_FASSWA_NICHTVERFUEBBAR_GRUND_FAHRZEUG_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nicht verfügbar aufgrund Fahrzeugzustand - Anzahl Grund Sicherheitsfunktion-Degradation (Bit 0..7) - Anzahl Grund Sicherheitsfunktion-Warnung (Bit 8..15) - Anzahl Grund Steuerung-Degradation (Bit 16..23) - Anzahl Grund Andere (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_MODUS_QUER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nach Quermodus - Anzahl Anfang aus Spurfahrt (Bit 0..7) - Anzahl Anfang aus Folgefahrt (Bit 8..15) - Anzahl Wechsel zu detektierte Spur (Bit 16..23) - Anzahl Wechsel zu geschätzte Spur (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_MODUS_LAENGS_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Spurwechselassistent nach Längsmodus - Anzahl Anfang aus freie Fahrt (Bit 0..7) - Anzahl Wechsel mit Reglung Zielspur (Bit 8..15) - Anzahl Wechsel mit Reglung Anfangspur (Bit 16..23) - Anzahl Wechsel mit Reglung Zielgeschwindigkeit (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELSTART_GESCHWINDIGKEIT_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Start Spurwechselassistent nach Geschwindigkeitsbereich - Anzahl Geschwindigkeit niedrig (Bit 0..7) - Anzahl Geschwindigkeit mittel (Bit 8..15) - Anzahl Geschwindigkeit hoch (Bit 16..23) - Anzahl Geschwindigkeit sehr hoch(Bit 24..31) |
| STAT_FASSWA_SPURWECHSELWUNSCH_ANZAHL_WERT | HEX | high | unsigned long | - | - | - | - | - | Statistik Anzahl Spurwechselwünsche - Anzahl Spurwechselwünsche durch Fahrer (Bit 0..16) - Anzahl Spurwechselwünsche mit Spurwechselstart (Bit 16..23) - Anzahl Spurwechselwünsche mit Spurwechselstart, ohne Spurwechselende (Bit 24..31) |
| STAT_FASSWA_SPURWECHSELWUNSCH_DAUER_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Dauer des Spurwechselwunsches bei Spurwechselstart - Anzahl Dauer zu kurz (Bit 0..7) - Anzahl Dauer minimal (Bit 8..15) - Anzahl Dauer nicht minimal (Bit 16..23) - Anzahl Dauer zu lang (Bit 24..31) |
| STAT_FASSWA_ZURUECKLENKEN_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Zurücklenken durch Funktion - Anzahl Grund Fahrerbeteiligung (Bit 0..7) - Anzahl Grund Hindernisse/Objekte (Bit 8..15) - Anzahl Grund Sicherheitsfunktion (Bit 16..23) - Anzahl Grund Andere (Bit 24..31) |
| STAT_FASSWA_UEBERGABEFAHRER_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Übergabe an den Fahrer - Anzahl Grund Aufmerksamkeit  (Bit 0..7) - Anzahl Grund UFM (Bit 8..15) - Anzahl Grund Steuerung (Bit 16..23) - Anzahl Grund Sicherheitsfunktion (Bit 24..31) |
| STAT_FASSWA_UEBERNAHMEFAHRERFUNKTION_GRUND_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Gründe Übernahme durch den Fahrer - Anzahl Grund Taste (Bit 0..7) - Anzahl Grund Lenkung (Bit 8..15) - Anzahl Grund Blinker (Bit 16..23) - Anzahl Grund Sicherheitsfunktion (Bit 24..31) |
| STAT_FASQALCG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASQALCG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

### RES_0X6608_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASACC_STRECKE_STRASSENART_AUTOBAHN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der mit ACC gefahrenen Strecke für die Strassenart  Autobahn  Bit 0-15:   Freifahrt Bit 16-32: Folgefahrt |
| STAT_FASACC_STRECKE_STRASSENART_LANDSTRASSE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der mit ACC gefahrenen Strecke für die Strassenart  Landstrasse  Bit 0-15:   Freifahrt Bit 16-32: Folgefahrt |
| STAT_FASACC_STRECKE_STRASSENART_STADT_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der mit ACC gefahrenen Strecke für die Strassenart  Stadt  Bit 0-15:   Freifahrt Bit 16-32: Folgefahrt |
| STAT_FASACC_ANZAHL_UMSCHALTUNG_ABSTANDSSTUFE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Umschaltungen von ACC in bestimmte Abstandstufen zum Vordermann Bit 0-7:      Umsschaltungen zur Stufe 1 Bit 8-15:    Umsschaltungen zur Stufe 2 Bit 16-23: Umsschaltungen zur Stufe 3 Bit 24-31: Umsschaltungen zur Stufe 4 |
| STAT_FASACC_ANZAHL_ABSCHALTUNG_JE_BEDIENELEMENT_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Abschaltungen von ACC je Bedienelement Bit 0-15:     Abschaltungen durch Bremspedal Bit 16-31:   Abschaltungen durch Lenkrad-Taste |
| STAT_FASACC_ANZAHL_ABSCHALTUNG_SONSTIGE_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik der Abschaltungen von ACC für sonstige Gründe Bit 0-7:      Abschaltungen wegen Sensorblindheit Bit 8-15:    Abschaltungen wegen Bremsregelung Bit 16-23: Abschaltungen wegen Fehlerabschaltung Bit 24-31: Abschaltungen aus sonstigen Gründen |
| STAT_FASACC_ANZAHL_WIEDERANFAHREN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Anzahl von Wiederanfahren je Standdauer Bit 0-7:      zwischen 5s und 15s Bit 8-15:    zwischen 15s und 30s Bit 16-23: länger als 30s Bit 24-31: Wiederanfahren trotz Fahrerwunsch nicht erfolgt |
| STAT_FASACC_ANZAHL_NICHT_WIEDERANFAHREN_URSACHEN_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Anzahl von Nicht-Wiederanfahren wegen Bit 0-7:      Zielobjekt-Wechsel Bit 8-15:    Freiraumverletzung Bit 16-23: Ultraschall-Sensorik Bit 24-31: Fahrerbedienaktion (z.B. Pedaldruck) |
| STAT_FASACC_ANZAHL_TOR_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Statistik Anzahl Ausgabe Take-Over-Requests, nach denen innerhalb 3sec  Bit 0-15:      keine Fahrerbremsung erfolgt Bit 16-31:    eine Fahrerbremsung erfolgt |
| STAT_FASLCG_KILOMETERSTAND_BEI_RUECKSETZEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Rücksetzten der gespeicherten Werte |
| STAT_FASLCG_KILOMETERSTAND_BEI_AUSLESEN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim Auslesen der gespeicherten Werte |

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

### RES_0X6724_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_01_KILOMETERSTAND_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_01_SYSTEMZEIT_WERT | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit |
| STAT_01_AUSSENTEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur |
| STAT_01_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | V_VEH_COG |
| STAT_01_RQ_DI_DRS_WERT | HEX | high | unsigned char | - | - | - | - | - | Entspricht Signal RQ_DI_DRS 00h: kein Blinkfunktion aktiv;  08h: links nied. Prio; 09h: rechts nied. Prio;  0Ah: links mittl. Prio;  0Bh: rechts mitt. Prio;  0Ch: links hoch Prio;  0Dh: rechts hoch Prio;  80h: Warnbl. Ausp. 1;  B0h: Warnbl. Ausp. 4;  FDh: nicht verfüg.;  FEh: Fehler |
| STAT_01_ACV_FN_IDC_WERT | HEX | high | unsigned char | - | - | - | - | - | 0: Blinken Aus;  12d: FAS_Warnblinken_Auspraegung_1; 13d:FAS_Warnblinken_Auspraegung_4;  18d: FAS_Richtungsblinken_lowPrio_links;  19d: FAS_Richtungsblinken_lowPrio_rechts;  20d: FAS_Richtungsblinken_midPrio_links;  21d: FAS_Richtungsblinken_midPrio_rechts |
| STAT_01_QFK_REGELZIEL_QUERFUEHRUNG | 0-n | high | unsigned char | - | QFK_Regelziel_Querfuehrung | - | - | - | Regelziel der LSA-Funktion |
| STAT_01_ANFORDERUNG_BLINKER_QFK_WERT | HEX | high | unsigned char | - | - | - | - | - | 0000 1000 (0x08): Richtungblinken_Links_Niedriege_Prioritaet;   0000 1001 (0x09): Richtungblinken_Rechts_Niedriege_Prioritaet;   0000 1010 (0x0A): Richtungblinken_Links_Mittlere_Prioritaet;   0000 1011 (0x0B): Richtungblinken_Rechts_Mittlere_Prioritaet;   1000 0000: (0x80): Warnblinken Ausprägung 1;   1011 0000 (0xB0): Warnblinken Ausprägung 4 |
| STAT_02_KILOMETERSTAND_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_02_SYSTEMZEIT_WERT | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit |
| STAT_02_AUSSENTEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur |
| STAT_02_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | V_VEH_COG |
| STAT_02_RQ_DI_DRS_WERT | HEX | high | unsigned char | - | - | - | - | - | Entspricht Signal RQ_DI_DRS 00h: kein Blinkfunktion aktiv;  08h: links nied. Prio; 09h: rechts nied. Prio;  0Ah: links mittl. Prio;  0Bh: rechts mitt. Prio;  0Ch: links hoch Prio;  0Dh: rechts hoch Prio;  80h: Warnbl. Ausp. 1;  B0h: Warnbl. Ausp. 4;  FDh: nicht verfüg.;  FEh: Fehler |
| STAT_02_ACV_FN_IDC_WERT | HEX | high | unsigned char | - | - | - | - | - | 0: Blinken Aus;  12d: FAS_Warnblinken_Auspraegung_1; 13d:FAS_Warnblinken_Auspraegung_4;  18d: FAS_Richtungsblinken_lowPrio_links;  19d: FAS_Richtungsblinken_lowPrio_rechts;  20d: FAS_Richtungsblinken_midPrio_links;  21d: FAS_Richtungsblinken_midPrio_rechts |
| STAT_02_QFK_REGELZIEL_QUERFUEHRUNG | 0-n | high | unsigned char | - | QFK_Regelziel_Querfuehrung | - | - | - | Regelziel der LSA-Funktion |
| STAT_02_ANFORDERUNG_BLINKER_QFK_WERT | HEX | high | unsigned char | - | - | - | - | - | 0000 1000 (0x08): Richtungblinken_Links_Niedriege_Prioritaet;   0000 1001 (0x09): Richtungblinken_Rechts_Niedriege_Prioritaet;   0000 1010 (0x0A): Richtungblinken_Links_Mittlere_Prioritaet;   0000 1011 (0x0B): Richtungblinken_Rechts_Mittlere_Prioritaet;   1000 0000: (0x80): Warnblinken Ausprägung 1;   1011 0000 (0xB0): Warnblinken Ausprägung 4 |
| STAT_03_KILOMETERSTAND_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_03_SYSTEMZEIT_WERT | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit |
| STAT_03_AUSSENTEMPERATUR_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur |
| STAT_03_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | V_VEH_COG |
| STAT_03_RQ_DI_DRS_WERT | HEX | high | unsigned char | - | - | - | - | - | Entspricht Signal RQ_DI_DRS 00h: kein Blinkfunktion aktiv;  08h: links nied. Prio; 09h: rechts nied. Prio;  0Ah: links mittl. Prio;  0Bh: rechts mitt. Prio;  0Ch: links hoch Prio;  0Dh: rechts hoch Prio;  80h: Warnbl. Ausp. 1;  B0h: Warnbl. Ausp. 4;  FDh: nicht verfüg.;  FEh: Fehler |
| STAT_03_ACV_FN_IDC_WERT | HEX | high | unsigned char | - | - | - | - | - | 0: Blinken Aus;  12d: FAS_Warnblinken_Auspraegung_1; 13d:FAS_Warnblinken_Auspraegung_4;  18d: FAS_Richtungsblinken_lowPrio_links;  19d: FAS_Richtungsblinken_lowPrio_rechts;  20d: FAS_Richtungsblinken_midPrio_links;  21d: FAS_Richtungsblinken_midPrio_rechts |
| STAT_03_QFK_REGELZIEL_QUERFUEHRUNG | 0-n | high | unsigned char | - | QFK_Regelziel_Querfuehrung | - | - | - | Regelziel der LSA-Funktion |
| STAT_03_ANFORDERUNG_BLINKER_QFK_WERT | HEX | high | unsigned char | - | - | - | - | - | 0000 1000 (0x08): Richtungblinken_Links_Niedriege_Prioritaet;   0000 1001 (0x09): Richtungblinken_Rechts_Niedriege_Prioritaet;   0000 1010 (0x0A): Richtungblinken_Links_Mittlere_Prioritaet;   0000 1011 (0x0B): Richtungblinken_Rechts_Mittlere_Prioritaet;   1000 0000: (0x80): Warnblinken Ausprägung 1;   1011 0000 (0xB0): Warnblinken Ausprägung 4 |

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

### RES_0XA201_R

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

### RES_0XE2E5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASK_MONITOR_CNT1_VALUE_WERT | HEX | high | unsigned long | - | - | - | - | - | Aktueller Wert von TASK_MONITOR Counter 1  |
| STAT_TASK_MONITOR_CNT2_VALUE_WERT | HEX | high | unsigned long | - | - | - | - | - | Aktueller Wert von TASK_MONITOR Counter 2 |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STACK_MONITOR_MEASURED_VALUES_DATA | + | - | - | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Current stack usage registered by STACK_MONITOR |

### RES_0XF040_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Routine |

### RES_0XF044_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGISTER_VALUE_1_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 1 |
| STAT_REGISTER_VALUE_2_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | WErt von Phy Register 2 |
| STAT_REGISTER_VALUE_3_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 3 |
| STAT_REGISTER_VALUE_4_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 4 |
| STAT_REGISTER_VALUE_5_WERT | + | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert von Phy Register 5 |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_GET_PORT_TX_RX_STATS | 0x1049 | - | Liest die Anzahl der verschickten und empfangenen Pakete, die Anzahl verworfenen Pakete und die Anzahl der übertragenen und empfangenen Bytes. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1049_R | RES_0x1049_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_DHCP_STATUS | 0x104F | - | Lesen den aktuellen DHCP Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104F_R | RES_0x104F_R |
| DLT_SET_LOGLEVEL | 0x1090 | - | Diese Routine setzt den LogLevel des DLT-Subsystems in der ECU für das gegebene Applikations-ID/Kontext-ID Pärchen auf den gegebenen Wert. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1090_R | - |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | High | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STACK_MONITOR_MAX_VALUES | 0x4002 | STAT_STACK_MONITOR_MAX_VALUES_DATA | Maximum stack usage registered by STACK_MONITOR  | DATA | - | High | data[128] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INTERNAL_ADC_VALUES | 0x400A | - | Liefert alle internal ADC Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| _STATUS_TASK_ZEITEN | 0x4184 | - | Status SAS Task Zeiten Einheit [%] | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4184_D |
| DATENLOGGING_FASSCOLSI_LCA | 0x6601 | - | Lesen der Statistikdaten vom Baustein FasScolSi (Sollwertgenerierung Kollisionvermeidung Seite) für die Funktion Lane Change Assistance (LCA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6601_D |
| DATENLOGGING_FASSCOLSI_LKA | 0x6602 | - | Lesen der Statistikdaten vom Baustein FasScolSi (Sollwertgenerierung Kollisionvermeidung Seite) für die Funktion Lane Keeping Assist (LKA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6602_D |
| DATENLOGGING_FASAWA | 0x6603 | - | Lesen der Statistikdaten vom Baustein FasAwa (Ausweichassistent) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6603_D |
| DATENLOGGING_FASDACG | 0x6605 | - | Lesen der Statistikdaten vom Baustein FasDacg (Sollwertgenerierung Vorausschau) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6605_D |
| DATENLOGGING_FASPCG | 0x6606 | - | Lesen der Statistikdaten für die Funktion Rückfahrassistent vom Baustein FasPcg (Sollwertgenerierung Parken Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6606_D |
| DATENLOGGING_FASQALCG | 0x6607 | - | Lesen der Statistikdaten vom Baustein FasQalcg (Sollwertgenerierung Quer) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6607_D |
| DATENLOGGING_FASLCG | 0x6608 | - | Lesen der Statistikdaten vom Baustein FasLcg (Sollwertgenerierung Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6608_D |
| STATISTIK_FASPCG | 0x6610 | - | Lesen der Statistikdaten für die Funktion aPDC vom Baustein FasPcg (Sollwertgenerierung Parken Längs) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6610_D |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x6660 | - | This job forces the transmission of an ADAS resync request message which will force the navigation system to resend the ADAS tree. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6660_D | - |
| SWA_AUSLOESUNG | 0x6724 | - | Entwicklerjob zum Auslesen der Statistik zur SWA-Auslösung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6724_D |
| TASK_MONITOR_RESET_CNT1 | 0xA15D | - | Diese Routine setzt den TASK_MONITOR Counter1 auf den Wert 0 zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TASK_MONITOR_CONFIG_CNT2 | 0xA15E | - | Diese Routine kann dazu benutzt werden um die Counter2 Konfiguration zu ändern (Limit, Inkrement-Schrittweite, Dekrement-Schrittweite) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA15E_R | - |
| SWC_VERSIONEN_LESEN_INDEX_DATENSATZ | 0xA200 | - | Der Diagnosejob zum Auslesen der Versionsinfo wird insb.in der Entwicklungsphase benötigt, damit Entwickler, Absicherungsstellen usw. mit geringem Aufwand die Versionsinfo der auf dem SG implementierten SWCs auslesen zu können. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA200_R | RES_0xA200_R |
| SWC_VERSIONEN_LESEN_KMAIN_KSUB | 0xA201 | - | Der Diagnosejob zum Auslesen der Versionsinfo wird insb.in der Entwicklungsphase benötigt, damit Entwickler, Absicherungsstellen usw. mit geringem Aufwand die Versionsinfo der auf dem SG implementierten SWCs auslesen zu können. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA201_R | RES_0xA201_R |
| LCA_AUSLOESUNG | 0xDB25 | - | Auslösung einer Warnung für Lataral Collision Avoidance (Seitenkollisionswarnung und Spurwechselwarnung) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB25_D | - |
| QVA_AUSLOESUNG | 0xDB26 | - | Auslösung einer Warnung für die Kreuzungswarnung (Querverkehrsassistent - QVA) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB26_D | - |
| STATUS_SWC_VERSIONEN_LESEN_ANZAHL_DATENSAETZE | 0xDD33 | STAT_INDEX_DATENSATZ_WERT | - | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASK_MONITOR_CNT_VALUES | 0xE2E5 | - | Data Identifier liefert die aktuelle TASK_MONITOR Zähler Werte zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE2E5_D |
| STACK_MONITOR_RESET | 0xF001 | - | This routine resets maximum values registered by stack monitor. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STACK_MONITOR_CURRENT | 0xF002 | - | - | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |
| _STEUERN_RESET_TASK_ZEITEN | 0xF040 | - | Steuern Reset SAS Task Zeiten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF040_R |
| ETH_PHY_SET_CONFIG | 0xF041 | - | Schaltet den Phy in den Master oder Slave Mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF041_R | - |
| ETH_PHY_SET_ECU_MODE | 0xF042 | - | Schaltet den Phy in den Sleep oder Wakeup mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF042_R | - |
| ETH_PHY_SET_SPECIAL_MODE | 0xF043 | - | Schaltet den Phy in den Sleep oder Wakeup mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF043_R | - |
| ETH_PHY_REGISTER_RESET_SAFE | 0xF044 | - | Liefert die Werte der Reset Safe Register zurück, die durch ETH_PHY_SET_SPECIAL_MODE geschrieben wurden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF044_R | RES_0xF044_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| DATENLOGGING_RUECKSETZEN_FASSCOLSI | 0xF601 | - | Reset der Statistik des Bausteins FasScolSi | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASAWA | 0xF602 | - | Reset der Statistik des Bausteins FasAwa | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASDACG | 0xF604 | - | Reset der Statistik des Bausteins FasDacg | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASPCG | 0xF605 | - | Reset der Adaptivdaten-Statistik des Bausteins FasPcg für die Funktion Rückfahrassistent | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASQALCG | 0xF606 | - | Reset der Statistik des Bausteins FasQalcg | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DATENLOGGING_RUECKSETZEN_FASLCG | 0xF608 | - | Reset der Statistik des Bausteins FasLcg | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATISTIK_RUECKSETZEN_FASPCG | 0xF610 | - | Reset der Statistik des Bausteins FasPcg für die Funktion aPDC | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_CTRL_DLT

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | Trace only |
| 0x02 | Log Only |
| 0x03 | Trace and Log |

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

### TAB_ERRID_INPUT_EMFREESPACECALCULATION

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

### TAB_ERRID_INPUT_EMGAP

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

### TAB_ERRID_INPUT_EMLANEASSIGNMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: EmLaneAssignment_InputFault |
| 0x02 | 2: Unavailable_RoadBoundariesSensitiveInput |
| 0x03 | 3: Unavailable_LaneBoundariesValidated |
| 0x04 | 4: Unavailable_RoadGeometryInput |
| 0x05 | 5: Unavailable_RoadForeSightStraightInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_INPUT_EMOBJDESC

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

### TAB_ERRID_INPUT_EMOBJECTPREDICTION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_ADASInput |
| 0x02 | 2: ComError_LaneBoundaaries |
| 0x03 | 3: Reduced_LaneBoundaries |
| 0x04 | 4:Unavailable_LaneBoundaries |
| 0x05 | 5: ComError_Timestamp |
| 0xFF | Wert ungültig |

### TAB_ERRID_INPUT_EMODOCLIENT

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

### TAB_ERRID_INPUT_EMROADASSEMBLY

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

### TAB_ERRID_LOGIC_EMFREESPACECALCULATION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x35 | 53: Invalid_ApplicationParameter |
| 0x36 | 54: Invalid_CodingParameter |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMGAP

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: CuttingLaneBoundaries |
| 0x02 | 2: Mismatched_RoadBoundaries |
| 0x03 | 3: Mismatched_Assignment |
| 0x04 | 4: Invalid_ApplicationParameter |
| 0x05 | 5: Invalid_CodingParameter |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMLANEASSIGNMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Mismatched_RoadCurves |
| 0x02 | 2: Mismatched_Lanes |
| 0x03 | 3: Mismatched_RoadBoundaries |
| 0x04 | 4: Invalid_ApplicationParameter |
| 0x05 | 5: Invalid_CodingParameter |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMOBJDESC

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: kLogicFaultDTC_InvalidMeasurementsFrontRadar |
| 0x02 | 2: kLogicFaultDTC_InvalidMeasurementsSideRadarLeft |
| 0x03 | 3: kLogicFaultDTC_InvalidMeasurementsSideRadarRight |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMOBJECTPREDICTION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Invalid_ApplicationParameter |
| 0x02 | 2: Invalid_CodingParameter |
| 0x03 | 3: NoRespondToResync |
| 0x04 | 4: Error_ImplementationLevel |
| 0xFF | wert ungültig |

### TAB_ERRID_LOGIC_EMROADASSEMBLY

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Mismatched_ADAS |
| 0x02 | 2: Mismatched_CollectiveDrivingLane |
| 0x03 | 3: Invalid_ApplicationParameter |
| 0x04 | 4: Invalid_CodingParameter |
| 0x05 | 5: Implausible_LaneBoundariesInput |
| 0xFF | Wert ungültig |

### TAB_ERRID_LOGIC_EMSLCONDITIONEVALUATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: Error_ImplementationLevel |
| 0xFF | Wert ungültig |

### TAB_FUNKTIONSSTATUS_DSC

| WERT | TEXT |
| --- | --- |
| 0 | DSC nicht verfügbar |
| 1 | DSC nicht im Vollmodus |
| 2 | DSC Vollmodus |
| 0xFF | Wert ungültig |

### TAB_FUNKTIONSTATUS_DSC

| WERT | TEXT |
| --- | --- |
| 0 | DSC nicht verfügbar |
| 1 | DSC nicht im Vollmodus |
| 2 | DSC Vollmodus |
| 0xFF | Wert ungültig |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0x00 | nein |
| 0x01 | ja |
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
| 0x00 | UNDEFINED |
| 0x01 | SEITENKOLLISIONSWARNUNG_LINKS_ABSTAND_OBJEKT |
| 0x02 | SEITENKOLLISIONSWARNUNG_RECHTS_ABSTAND_OBJEKT |
| 0x03 | SEITENKOLLISIONSWARNUNG_LINKS_TTC_OBJEKT |
| 0x04 | SEITENKOLLISIONSWARNUNG_RECHTS_TTC_OBJEKT |
| 0x05 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_LINKS_ABSTAND_OBJEKT |
| 0x06 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_RECHTS_ABSTAND_OBJEKT |
| 0x07 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_LINKS_TTC_OBJEKT |
| 0x08 | REDUZIERTE_SEITENKOLLISIONSWARNUNG_RECHTS_TTC_OBJEKT |
| 0x09 | SPURWECHSELWARNUNG_LINKS_UEBERHOLER |
| 0x0A | SPURWECHSELWARNUNG_RECHTS_UEBERHOLER |
| 0x0B | SPURWECHSELWARNUNG_LINKS_TOTWINKEL |
| 0x0C | SPURWECHSELWARNUNG_RECHTS_TOTWINKEL |
| 0x0D | RESERVE_13 |
| 0x0E | RESERVE_14 |
| 0xFF | Wert ungültig |

### TAB_NEW_LOGLEVEL_THRESHOLD

| WERT | TEXT |
| --- | --- |
| 0x00 | Dlt_LOG_AUS (Logging auschalten) |
| 0x01 | Dlt_LOG_FATAL (nur fatale Systemfehler loggen) |
| 0x02 | Dlt_LOG_FEHLER (loggen von Fehlern innerhalb SWCs, die Einfluss auf die korrekte Funktionalität haben) |
| 0x03 | Dlt_LOG_WARN (Log-Nachrichten, wo inkorrektes Verhalten nicht ausgeschlossen werden kann) |
| 0x04 | Dlt_LOG_INFO (Log-Nachrichten, die Information zum besseren Verständnis des internen Verhaltens der Software bereitstellen) |
| 0x05 | Dlt_LOG_DEBUG (Log-Nachrichten, die Information zum Debuggen der Software bereitstellen) |
| 0x06 | Dlt_LOG_DETAIL (Log-Nachrichten mit dem höchsten Detaillierungsgrad) |
| 0xFF | Dlt_LOG_STANDARD (Log-Nachrichten mit dem Detaillierungsgrad der System-Standardeinstellung) |

### TAB_NW_INTERFACE_INDEX

| WERT | TEXT |
| --- | --- |
| 0x00 | internes Interface |
| 0x01 | externes Interface (HSFZ extern) |
| 0x02 | applikationsabhängiges Interface |
| 0x03 | applikationsabhängiges Interface |
| 0x04 | applikationsabhängiges Interface |
| 0x05 | applikationsabhängiges Interface |
| 0x06 | applikationsabhängiges Interface |
| 0x07 | applikationsabhängiges Interface |
| 0x08 | applikationsabhängiges Interface |
| 0x09 | applikationsabhängiges Interface |
| 0x0A | applikationsabhängiges Interface |
| 0x0B | applikationsabhängiges Interface |
| 0x0C | applikationsabhängiges Interface |
| 0x0D | applikationsabhängiges Interface |
| 0x0E | applikationsabhängiges Interface |
| 0x0F | applikationsabhängiges Interface |
| 0x10 | applikationsabhängiges Interface |
| 0x11 | applikationsabhängiges Interface |
| 0x12 | applikationsabhängiges Interface |
| 0x13 | applikationsabhängiges Interface |
| 0x14 | applikationsabhängiges Interface |
| 0x15 | applikationsabhängiges Interface |
| 0x16 | applikationsabhängiges Interface |
| 0x17 | applikationsabhängiges Interface |
| 0x18 | applikationsabhängiges Interface |
| 0x19 | applikationsabhängiges Interface |
| 0x1A | applikationsabhängiges Interface |
| 0x1B | applikationsabhängiges Interface |
| 0x1C | applikationsabhängiges Interface |
| 0x1D | applikationsabhängiges Interface |
| 0x1E | applikationsabhängiges Interface |
| 0x1F | applikationsabhängiges Interface |
| 0x20 | applikationsabhängiges Interface |
| 0x21 | applikationsabhängiges Interface |
| 0x22 | applikationsabhängiges Interface |
| 0x23 | applikationsabhängiges Interface |
| 0x24 | applikationsabhängiges Interface |
| 0x25 | applikationsabhängiges Interface |
| 0x26 | applikationsabhängiges Interface |
| 0x27 | applikationsabhängiges Interface |
| 0x28 | applikationsabhängiges Interface |
| 0x29 | applikationsabhängiges Interface |
| 0x2A | applikationsabhängiges Interface |
| 0x2B | applikationsabhängiges Interface |
| 0x2C | applikationsabhängiges Interface |
| 0x2D | applikationsabhängiges Interface |
| 0x2E | applikationsabhängiges Interface |
| 0x2F | applikationsabhängiges Interface |
| 0x30 | applikationsabhängiges Interface |
| 0x31 | applikationsabhängiges Interface |
| 0x32 | applikationsabhängiges Interface |
| 0x33 | applikationsabhängiges Interface |
| 0x34 | applikationsabhängiges Interface |
| 0x35 | applikationsabhängiges Interface |
| 0x36 | applikationsabhängiges Interface |
| 0x37 | applikationsabhängiges Interface |
| 0x38 | applikationsabhängiges Interface |
| 0x39 | applikationsabhängiges Interface |
| 0x3A | applikationsabhängiges Interface |
| 0x3B | applikationsabhängiges Interface |
| 0x3C | applikationsabhängiges Interface |
| 0x3D | applikationsabhängiges Interface |
| 0x3E | applikationsabhängiges Interface |
| 0x3F | applikationsabhängiges Interface |
| 0x40 | applikationsabhängiges Interface |
| 0x41 | applikationsabhängiges Interface |
| 0x42 | applikationsabhängiges Interface |
| 0x43 | applikationsabhängiges Interface |
| 0x44 | applikationsabhängiges Interface |
| 0x45 | applikationsabhängiges Interface |
| 0x46 | applikationsabhängiges Interface |
| 0x47 | applikationsabhängiges Interface |
| 0x48 | applikationsabhängiges Interface |
| 0x49 | applikationsabhängiges Interface |
| 0x4A | applikationsabhängiges Interface |
| 0x4B | applikationsabhängiges Interface |
| 0x4C | applikationsabhängiges Interface |
| 0x4D | applikationsabhängiges Interface |
| 0x4E | applikationsabhängiges Interface |
| 0x4F | applikationsabhängiges Interface |
| 0x50 | applikationsabhängiges Interface |
| 0x51 | applikationsabhängiges Interface |
| 0x52 | applikationsabhängiges Interface |
| 0x53 | applikationsabhängiges Interface |
| 0x54 | applikationsabhängiges Interface |
| 0x55 | applikationsabhängiges Interface |
| 0x56 | applikationsabhängiges Interface |
| 0x57 | applikationsabhängiges Interface |
| 0x58 | applikationsabhängiges Interface |
| 0x59 | applikationsabhängiges Interface |
| 0x5A | applikationsabhängiges Interface |
| 0x5B | applikationsabhängiges Interface |
| 0x5C | applikationsabhängiges Interface |
| 0x5D | applikationsabhängiges Interface |
| 0x5E | applikationsabhängiges Interface |
| 0x5F | applikationsabhängiges Interface |
| 0x60 | applikationsabhängiges Interface |
| 0x61 | applikationsabhängiges Interface |
| 0x62 | applikationsabhängiges Interface |
| 0x63 | applikationsabhängiges Interface |
| 0x64 | applikationsabhängiges Interface |
| 0x65 | applikationsabhängiges Interface |
| 0x66 | applikationsabhängiges Interface |
| 0x67 | applikationsabhängiges Interface |
| 0x68 | applikationsabhängiges Interface |
| 0x69 | applikationsabhängiges Interface |
| 0x6A | applikationsabhängiges Interface |
| 0x6B | applikationsabhängiges Interface |
| 0x6C | applikationsabhängiges Interface |
| 0x6D | applikationsabhängiges Interface |
| 0x6E | applikationsabhängiges Interface |
| 0x6F | applikationsabhängiges Interface |
| 0x70 | applikationsabhängiges Interface |
| 0x71 | applikationsabhängiges Interface |
| 0x72 | applikationsabhängiges Interface |
| 0x73 | applikationsabhängiges Interface |
| 0x74 | applikationsabhängiges Interface |
| 0x75 | applikationsabhängiges Interface |
| 0x76 | applikationsabhängiges Interface |
| 0x77 | applikationsabhängiges Interface |
| 0x78 | applikationsabhängiges Interface |
| 0x79 | applikationsabhängiges Interface |
| 0x7A | applikationsabhängiges Interface |
| 0x7B | applikationsabhängiges Interface |
| 0x7C | applikationsabhängiges Interface |
| 0x7D | applikationsabhängiges Interface |
| 0x7E | applikationsabhängiges Interface |
| 0x7F | applikationsabhängiges Interface |
| 0x80 | applikationsabhängiges Interface |
| 0x81 | applikationsabhängiges Interface |
| 0x82 | applikationsabhängiges Interface |
| 0x83 | applikationsabhängiges Interface |
| 0x84 | applikationsabhängiges Interface |
| 0x85 | applikationsabhängiges Interface |
| 0x86 | applikationsabhängiges Interface |
| 0x87 | applikationsabhängiges Interface |
| 0x88 | applikationsabhängiges Interface |
| 0x89 | applikationsabhängiges Interface |
| 0x8A | applikationsabhängiges Interface |
| 0x8B | applikationsabhängiges Interface |
| 0x8C | applikationsabhängiges Interface |
| 0x8D | applikationsabhängiges Interface |
| 0x8E | applikationsabhängiges Interface |
| 0x8F | applikationsabhängiges Interface |
| 0x90 | applikationsabhängiges Interface |
| 0x91 | applikationsabhängiges Interface |
| 0x92 | applikationsabhängiges Interface |
| 0x93 | applikationsabhängiges Interface |
| 0x94 | applikationsabhängiges Interface |
| 0x95 | applikationsabhängiges Interface |
| 0x96 | applikationsabhängiges Interface |
| 0x97 | applikationsabhängiges Interface |
| 0x98 | applikationsabhängiges Interface |
| 0x99 | applikationsabhängiges Interface |
| 0x9A | applikationsabhängiges Interface |
| 0x9B | applikationsabhängiges Interface |
| 0x9C | applikationsabhängiges Interface |
| 0x9D | applikationsabhängiges Interface |
| 0x9E | applikationsabhängiges Interface |
| 0x9F | applikationsabhängiges Interface |
| 0xA0 | applikationsabhängiges Interface |
| 0xA1 | applikationsabhängiges Interface |
| 0xA2 | applikationsabhängiges Interface |
| 0xA3 | applikationsabhängiges Interface |
| 0xA4 | applikationsabhängiges Interface |
| 0xA5 | applikationsabhängiges Interface |
| 0xA6 | applikationsabhängiges Interface |
| 0xA7 | applikationsabhängiges Interface |
| 0xA8 | applikationsabhängiges Interface |
| 0xA9 | applikationsabhängiges Interface |
| 0xAA | applikationsabhängiges Interface |
| 0xAB | applikationsabhängiges Interface |
| 0xAC | applikationsabhängiges Interface |
| 0xAD | applikationsabhängiges Interface |
| 0xAE | applikationsabhängiges Interface |
| 0xAF | applikationsabhängiges Interface |
| 0xB0 | applikationsabhängiges Interface |
| 0xB1 | applikationsabhängiges Interface |
| 0xB2 | applikationsabhängiges Interface |
| 0xB3 | applikationsabhängiges Interface |
| 0xB4 | applikationsabhängiges Interface |
| 0xB5 | applikationsabhängiges Interface |
| 0xB6 | applikationsabhängiges Interface |
| 0xB7 | applikationsabhängiges Interface |
| 0xB8 | applikationsabhängiges Interface |
| 0xB9 | applikationsabhängiges Interface |
| 0xBA | applikationsabhängiges Interface |
| 0xBB | applikationsabhängiges Interface |
| 0xBC | applikationsabhängiges Interface |
| 0xBD | applikationsabhängiges Interface |
| 0xBE | applikationsabhängiges Interface |
| 0xBF | applikationsabhängiges Interface |
| 0xC0 | applikationsabhängiges Interface |
| 0xC1 | applikationsabhängiges Interface |
| 0xC2 | applikationsabhängiges Interface |
| 0xC3 | applikationsabhängiges Interface |
| 0xC4 | applikationsabhängiges Interface |
| 0xC5 | applikationsabhängiges Interface |
| 0xC6 | applikationsabhängiges Interface |
| 0xC7 | applikationsabhängiges Interface |
| 0xC8 | applikationsabhängiges Interface |
| 0xC9 | applikationsabhängiges Interface |
| 0xCA | applikationsabhängiges Interface |
| 0xCB | applikationsabhängiges Interface |
| 0xCC | applikationsabhängiges Interface |
| 0xCD | applikationsabhängiges Interface |
| 0xCE | applikationsabhängiges Interface |
| 0xCF | applikationsabhängiges Interface |
| 0xD0 | applikationsabhängiges Interface |
| 0xD1 | applikationsabhängiges Interface |
| 0xD2 | applikationsabhängiges Interface |
| 0xD3 | applikationsabhängiges Interface |
| 0xD4 | applikationsabhängiges Interface |
| 0xD5 | applikationsabhängiges Interface |
| 0xD6 | applikationsabhängiges Interface |
| 0xD7 | applikationsabhängiges Interface |
| 0xD8 | applikationsabhängiges Interface |
| 0xD9 | applikationsabhängiges Interface |
| 0xDA | applikationsabhängiges Interface |
| 0xDB | applikationsabhängiges Interface |
| 0xDC | applikationsabhängiges Interface |
| 0xDD | applikationsabhängiges Interface |
| 0xDE | applikationsabhängiges Interface |
| 0xDF | applikationsabhängiges Interface |
| 0xE0 | applikationsabhängiges Interface |
| 0xE1 | applikationsabhängiges Interface |
| 0xE2 | applikationsabhängiges Interface |
| 0xE3 | applikationsabhängiges Interface |
| 0xE4 | applikationsabhängiges Interface |
| 0xE5 | applikationsabhängiges Interface |
| 0xE6 | applikationsabhängiges Interface |
| 0xE7 | applikationsabhängiges Interface |
| 0xE8 | applikationsabhängiges Interface |
| 0xE9 | applikationsabhängiges Interface |
| 0xEA | applikationsabhängiges Interface |
| 0xEB | applikationsabhängiges Interface |
| 0xEC | applikationsabhängiges Interface |
| 0xED | applikationsabhängiges Interface |
| 0xEE | applikationsabhängiges Interface |
| 0xEF | applikationsabhängiges Interface |
| 0xF0 | applikationsabhängiges Interface |
| 0xF1 | applikationsabhängiges Interface |
| 0xF2 | applikationsabhängiges Interface |
| 0xF3 | applikationsabhängiges Interface |
| 0xF4 | applikationsabhängiges Interface |
| 0xF5 | applikationsabhängiges Interface |
| 0xF6 | applikationsabhängiges Interface |
| 0xF7 | applikationsabhängiges Interface |
| 0xF8 | applikationsabhängiges Interface |
| 0xF9 | applikationsabhängiges Interface |
| 0xFA | applikationsabhängiges Interface |
| 0xFB | applikationsabhängiges Interface |
| 0xFC | applikationsabhängiges Interface |
| 0xFD | applikationsabhängiges Interface |
| 0xFE | applikationsabhängiges Interface |
| 0xFF | ungueltig |

### TAB_QVA_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN_TRIGGER |
| 0x01 | QVA_LINKS |
| 0x02 | QVA_RECHTS |
| 0x03 | QVA_STANDZIEL |
| 0x04 | QVA_AFV_LINKS |
| 0x05 | QVA_AFV_RECHTS |
| 0x06 | RESERVE_1 |
| 0x07 | RESERVE_2 |
| 0x08 | RESERVE_3 |

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

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_0X2951

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X4017

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0022 | 0x0023 | 0x0024 | 0x0025 |

### TAB_0X6953

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 |

### TAB_0X69DE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 |

### TAB_0X69DF

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 |

### TAB_0X69E8

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 |

### TAB_0X6A12

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 19 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### ZUSTAND_FAHRERAUSMERKSAMKEITSERKENNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUFMERKSAMKEITFAHRERZUSTAND_UNAUFMERKSAM |
| 0x01 | AUFMERKSAMKEITFAHRERZUSTAND_AUFMERKSAM |
| 0x02 | AUFMERKSAMKEITFAHRERZUSTAND_UNBEKANNT |
| 0xFF | Wert ungültig |
